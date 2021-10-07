export default class RequestHandler {
	constructor( { apiKey, pluginData, root, nonce, pluginRequests, hubBaseURL } ) {
		this.apiKey = apiKey;
		this.pluginData = pluginData;
		this.root = root;
		this.nonce = nonce;
		this.pluginRequests = pluginRequests;
		this.hubBaseURL = hubBaseURL || 'https://wpmudev.com/api/hub/v1/package-configs';
	}

	/**
	 * Deletes a config locally and from the Hub.
	 *
	 * @param {array} configs Current list of local configs.
	 * @param {Object} currentConfig Config to delete.
	 * @return {Promise}
	 */
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

	/**
	 * Adds a new config locally and to the Hub.
	 *
	 * @param {array} configs Current list of local configs.
	 * @param {Object} newConfig Config data of the newly added config.
	 * @return {Promise}
	 */
	addNew( configs, newConfig ) {
		return new Promise( ( resolve, reject ) => {
			newConfig.id = Date.now();

			if ( this.apiKey ) {
				let hubId;
				this.sendConfigToHub( newConfig ).then( ( res ) => {
					hubId = res.id;
					newConfig.id = res.id;
					newConfig.hub_id = res.id;
					configs.push( newConfig );

					return this.updateLocalConfigsList( configs );
				} )
				.catch( () => {
					// Update the local list even if the Hub request fails.
					configs.push( newConfig );
					return this.updateLocalConfigsList( configs );
				} )
				.then( ( updatedConfigs ) => resolve( updatedConfigs ) )
				.catch( ( res ) => {
					// There was an error saving the configs locally. Probably a schema mismatch.
					if ( 400 === res.status ) {
						// Remove the recently submitted config from the hub.
						this.deleteFromHub( hubId );
					}
					reject( res );
				} );
			} else {
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
	 * @param {Object} data The new name and description for the config.
	 *
	 * @return {Promise}
	 */
	edit( configs, currentConfig, configData ) {
		// Edit in the Hub when the config has a Hub ID and we have an API key.
		if ( this.apiKey && currentConfig.hub_id ) {
			const hubData = Object.assign( { package: this.pluginData }, configData );

			// This returns a 404 when the config doesn't exist in the Hub anymore.
			this.makeHubRequest( `/${ currentConfig.hub_id}`, 'PATCH', JSON.stringify( hubData ) )
				.catch( ( res ) => console.log( res ) );
		}
		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );

		if ( -1 !== configIndex ) {
			configs[ configIndex ] = Object.assign( {}, currentConfig, configData );
		}

		return this.updateLocalConfigsList( configs );
	}

	/**
	 * Updates the locally stored list of configs replacing them with new ones.
	 *
	 * @param {array} newConfigs New list of configs to update locally.
	 * @return {Promise}
	 */
	updateLocalConfigsList( newConfigs ) {
		const requestData = newConfigs.filter( ( element ) => element );

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
				const sendToHubPromise = this.sendConfigToHub( localOne )
					.then( ( res ) => {
						localConfigs[ index ]['id'] = res.id;
						localConfigs[ index ]['hub_id'] = res.id;
					} );
				hubPromises.push( sendToHubPromise );

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

	/**
	 * Sends the given config to the Hub.
	 *
	 * @param {Object} config Config to send to the Hub.
	 * @return {Promise}
	 */
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
		data.append( '_ajax_nonce', this.pluginRequests.nonce );

		return this.makePluginRequest( this.pluginRequests.uploadAction, data);
	}

	/**
	 * Retrieves a new config from the site's current settings.
	 *
	 * @param {FormData} data FormData with the given name and description for the new config.
	 * @return {Promise} The promised AJAX request.
	 */
	create( data ) {
		data.append( '_ajax_nonce', this.pluginRequests.nonce );
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

		data.append( '_ajax_nonce', this.pluginRequests.nonce );
		data.append( 'id', config.id );

		return this.makePluginRequest( this.pluginRequests.applyAction, data );
	}

	/**
	 * Triggers requests handled by the WP Rest API.
	 *
	 * @param {string} verb HTTP request method.
	 * @param {*} data Data to send with the request.
	 * @return {Promise}
	 */
	makeLocalRequest( verb = 'GET', data = null ) {
		const headers = {
			'Content-type': 'application/json',
			'X-WP-Nonce': this.nonce,
		};
		return this.makeRequest( this.root, verb, data, headers );
	}

	/**
	 * Wrapper to make requests to the Hub.
	 *
	 * @param {string} path Extra path to append to this.hubBaseURL.
	 * @param {string} verb HTTP request method.
	 * @param {*} data Data to send with the request.
	 * @return {Promise}
	 */
	makeHubRequest( path = '', verb = 'GET', data = null ) {
		const headers = {
			'Content-type': 'application/json',
			Authorization: 'Basic ' + this.apiKey,
		};
		return this.makeRequest( this.hubBaseURL + path, verb, data, headers );
	}

	/**
	 * Triggers AJAX requests that are handled by the plugin.
	 *
	 * @param {string} action Request action to be received in backend.
	 * @param {*} data Request data.
	 * @return {Promise} Promised request.
	 */
	makePluginRequest( action, data ) {
		return this.makeRequest( `${ajaxurl}?action=${action}`, 'POST', data );
	}

	/**
	* Initiates and promesifies xhr requests.
	*
	* @param {*} data Request data.
	* @param {string} verb HTTP request method.
	* @return {Promise} Promised request.
	*/
	makeRequest( url, verb = 'GET', data = null, headers = {} ) {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();
			xhr.open( verb, url, true );

			xhr.addEventListener( 'load', () => {
				if ( 'ajax_callback' in this.pluginRequests ) {
					const fn = this.pluginRequests.ajax_callback;
					window[fn](url, data, xhr);
				}
			});

			for ( const header in headers ) {
				xhr.setRequestHeader( header, headers[ header ] );
			}

			xhr.onload = () => {
				if ( xhr.status >= 200 && xhr.status < 300 ) {
					resolve( JSON.parse( xhr.response ) );
				} else {
					reject( xhr );
				}
			};
			xhr.onerror = () => reject( xhr );
			xhr.send( data );
		});
	}
}