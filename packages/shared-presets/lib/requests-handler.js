export default class RequestHandler {
	constructor( { apiKey, pluginData, root, nonce, optionName, pluginRequests, hubBaseURL } ) {
		this.apiKey = apiKey;
		this.pluginData = pluginData;
		this.root = root;
		this.nonce = nonce;
		this.optionName = optionName;
		this.pluginRequests = pluginRequests;
		this.hubBaseURL = hubBaseURL || 'https://wpmudev.com/api/hub/v1/package-configs';
	}

	delete( configs, currentConfig ) {
		// Delete from the Hub when the config has a Hub ID and we have an API key.
		if ( currentConfig.hub_id ) {
			this.deleteFromHub( currentConfig.hub_id );
		}

		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );
		if ( -1 !== configIndex ) {
			configs.splice( configIndex, 1 );
		}

		return this.updateLocalConfigsList( configs );
	}

	addNew( configs, newConfig ) {
		return new Promise( ( resolve, reject ) => {
			if ( this.apiKey ) {
				let hubId;
				this.sendConfigToHub( newConfig ).then( ( res ) => {
					hubId = res.id;
					newConfig.id = res.id;
					newConfig.hub_id = res.id;
					configs.push( newConfig );

					return this.updateLocalConfigsList( configs );
				} )
				.then( ( updatedConfigs ) => {
					resolve( updatedConfigs );
				} )
				.catch( ( res ) => {
					// There was an error saving the configs locally. Probably a schema mismatch.
					if ( 400 === res.status ) {
						// Remove the recently submitted config from the hub.
						this.deleteFromHub( hubId );
					}
					reject( res );
				} );
			} else {
				newConfig.id = getTime();
				configs.push( newConfig );

				resolve( this.updateLocalConfigsList( configs ) );
			}
		} );
	}

	/**
	 * Edits the given config's name and description locally and in the Hub.
	 *
	 * @param {array} configs Current list of local configs.
	 * @param {Object} currentConfig The config to edit.
	 * @param {FormData} data The new name and description for the config.
	 *
	 * @return {Promise}
	 */
	edit( configs, currentConfig, data ) {
		// Edit in the Hub when the config has a Hub ID and we have an API key.
		if ( this.apiKey && currentConfig.hub_id ) {
			const configData = {
				name: data.get( 'name' ),
				description: data.get( 'description' ),
				package: this.pluginData,
			};

			// This returns a 404 when the config doesn't exist in the Hub anymore.
			this.makeHubRequest( `/${ currentConfig.hub_id}`, 'PATCH', JSON.stringify( configData ) )
				.catch( ( res ) => console.log( res ) );
		}
		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );

		if ( -1 !== configIndex ) {
			const updatedConfig = Object.assign( {}, currentConfig );
			updatedConfig.name = data.get( 'name' );
			updatedConfig.description = data.get( 'description' );

			configs[ configIndex ] = updatedConfig;
		}

		return this.updateLocalConfigsList( configs );
	}

	updateLocalConfigsList( newConfigs ) {
		const requestData = {
			// This gets 'null' entries because of how we're handling it. Remove those here.
			[ this.optionName ]: newConfigs.filter( ( element ) => element ),
		};

		return this.makeLocalRequest( 'POST', JSON.stringify( requestData ) );
	}

	/**
	 * Deletes the given config from the Hub.
	 * The response is a 404 if the config doesn't exist in the Hub.
	 *
	 * @param {int} configId The ID of the config to delete.
	 */
	deleteFromHub( configId ) {
		// Try to delete it in the Hub only if we have an API key.
		if ( this.apiKey ) {
			this.makeHubRequest( `/${ configId }`, 'DELETE' )
				.catch( ( res ) => console.log( res ) );
		}
	}

	/**
	 * Handles the several requests needed for syncinc with the Hub.
	 *
	 * @param {array} localConfigs Local configs list.
	 * @return {Promise} For when all the requests are handled.
	 */
	syncWithHub( localConfigs ) {
		return new Promise( ( resolve, reject ) => {
			if ( ! this.apiKey ) {
				resolve( localConfigs );
			}
			this.makeHubRequest( `?package_id=${ this.pluginData.id }`, 'GET' )
				.then( ( hubConfigs ) => this.getUpdatedLocalWithHub( localConfigs, hubConfigs ) )
				.then( () => this.updateLocalConfigsList( localConfigs ) )
				.then ( ( syncRes ) => resolve( syncRes ) )
				.catch( ( res ) => reject( res ) );
		} );
	}

	/**
	 * Syncs the locally stored configs with the Hub.
	 * What this does:
	 * - Sends to the Hub the local configs that weren't sent already.
	 * - Removes local configs that don't exist in the Hub.
	 * - Updates the name and description of the local configs to the ones in the Hub.
	 * - Retrieves the configs that exist in the Hub but not locally.
	 *
	 * @param {array} localConfigs Array with the local configs.
	 * @param {array} hubConfigs Array with the Hub configs.
	 * @returns
	 */
	getUpdatedLocalWithHub( localConfigs, hubConfigs ) {
		const hubConfigsIds = hubConfigs.map( ( currentConfig ) => currentConfig.id ),
			localConfigsIds = {};

		const hubPromises = [];

		for ( const [ index, localOne ] of localConfigs.entries() ) {
			// Skip checks for the basic config.
			if ( localOne.default ) {
				continue;
			}

			// Send to the Hub the configs that haven't been sent.
			if ( ! localOne.hub_id ) {
				hubPromises.push( this.sendConfigToHub( localOne ) );

				// Remove it locally. We'll add it after the promises resolve.
				// Splice will re-order the indexes. We don't want that.
				// TODO: handle errors. We don't want to delete them locally if the promises fail.
				delete localConfigs[ index ];
				continue;
			}

			// Find the configs that were removed from the hub and remove them locally.
			if ( ! hubConfigsIds[ localOne.hub_id ] ) {
				delete localConfigs[ index ];
				continue;
			}

			// Keep the IDs and index of the local configs for reference later on.
			localConfigsIds[ localOne.hub_id ] = index;
		}

		for ( const hubOne of hubConfigs ) {
			// Add the configs from the hub that aren't present locally.
			if ( ! localConfigsIds[ hubOne.id ] ) {
				// TODO: handle errors when the incoming config's settings
				// doesn't match the schema of the current settings.
				localConfigs.push( {
					id: hubOne.id,
					hub_id: hubOne.id,
					name: hubOne.name,
					description: hubOne.description,
					config: JSON.parse( hubOne.config ),
				} );

				continue;
			}

			// Sync the name and description of local configs.
			const localIndex = localConfigsIds[ hubOne.id ],
				localConfig = localConfigs[ localIndex ];

			if (
				localConfig.name !== hubOne.name ||
				localConfig.description !== hubOne.description
			) {
				localConfig.name = hubOne.name;
				localConfig.description = hubOne.description;

				localConfigs[ localIndex ] = localConfig;
			}
		}

		return Promise.all( hubPromises );
	}

	sendConfigToHub( config ) {
		const configData = {
			name: config.name,
			description: config.description,
			package: this.pluginData,
			config: JSON.stringify( config.config ),
		}

		return this.makeHubRequest( '', 'POST', JSON.stringify( configData ) );
	}

	/**
	 * Retrieves a new config from the uploaded file.
	 * Triggered on the input's onChange.
	 *
	 * @param {Event} e File input.
	 * @return {Promise} The promised AJAX request.
	 */
	 upload( e ) {
		const data = new FormData(),
			fileInput = e.currentTarget.files;

		data.append( 'file', fileInput[0] );
		data.append( '_ajax_nonce', this.pluginRequests.uploadNonce );

		return this.makePluginRequest( this.pluginRequests.uploadAction, data);
	}

	/**
	 * Retrieves a new config from the site's current settings.
	 *
	 * @param {FormData} data FormData with the given name and description for the new config.
	 * @return {Promise} The promised AJAX request.
	 */
	create( data ) {
		data.append( '_ajax_nonce', this.pluginRequests.createNonce );
		return this.makePluginRequest( this.pluginRequests.createAction, data );
	}

	/**
	 * Applies the given config to the site.
	 *
	 * @param {Object} config Config to be applied.
	 * @return {Promise} The promised AJAX request.
	 */
	apply( config ) {
		const data = new FormData();

		data.append( '_ajax_nonce', this.pluginRequests.applyNonce );
		data.append( 'id', config.id );

		return this.makePluginRequest( this.pluginRequests.applyAction, data );
	}

	/**
	* Promesify xhr requests.
	*
	* @param {*} data Request data.
	* @param {string} verb Request verb.
	* @return {Promise} Promised request.
	*/
	makeLocalRequest( verb = 'GET', data = null ) {
		const headers = {
			'Content-type': 'application/json',
			'X-WP-Nonce': this.nonce,
		};
		return this.makeRequest( `${ this.root }wp/v2/settings`, verb, data, headers );
	}

	// TODO: handle errors. Actions for deleting or editing a config
	// return 404 when the config doesn't exist in the Hub.
	// This happens because the config was removed by the Hub or by another site.
	makeHubRequest( path = '', verb = 'GET', data = null ) {
		const headers = {
			'Content-type': 'application/json',
			Authorization: 'Basic ' + this.apiKey,
		};
		return this.makeRequest( this.hubBaseURL + path, verb, data, headers );
	}

	/**
	 * Function to perform ajax requests.
	 *
	 * @param {string} action Request action to be received in backend.
	 * @param {*} data Request data.
	 * @return {Promise} Promised request.
	 */
	makePluginRequest( action, data ) {
		return this.makeRequest( `${ajaxurl}?action=${action}`, 'POST', data );
	}

	makeRequest( url, verb = 'GET', data = null, headers = {} ) {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();
			xhr.open( verb, url, true );

			for ( const header in headers ) {
				xhr.setRequestHeader( header, headers[ header ] );
			}
			xhr.onload = () => {
				if ( xhr.status >= 200 && xhr.status < 300 ) {
					// Ugly workaround for returning the updated configs for WP Rest.
					let response = JSON.parse( xhr.response );
					if ( 'undefined' !== typeof response[ this.optionName ] ) {
						response = response[ this.optionName ] || [];
					}
					resolve( response );
				} else {
					reject( xhr );
				}
			};
			xhr.onerror = () => reject( xhr );
			xhr.send( data );
		});
	}
}