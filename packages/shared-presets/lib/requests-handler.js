export default class RequestHandler {
	constructor( { apiKey, pluginData, root, nonce, optionName } ) {
		this.apiKey = apiKey;
		this.pluginData = pluginData;
		this.root = root;
		this.nonce = nonce;
		this.optionName = optionName;

		this.getAllLocal = this.getAllLocal.bind( this );
		this.delete = this.delete.bind( this );
	}

	getAllLocal() {
		return this.makeLocalRequest();
	}

	delete( configs, currentConfig ) {
		// Delete from the Hub when the config has a Hub ID and we have an API key.
		if ( this.apiKey && currentConfig.hub_id ) {
			this.makeHubRequest( `/${ currentConfig.hub_id}`, 'DELETE' );
		}

		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );
		if ( -1 !== configIndex ) {
			configs.splice( configIndex, 1 );
		}

		const send = {
			[ this.optionName ]: configs,
		};

		return this.makeLocalRequest( 'POST', JSON.stringify( send ) );
	}

	edit( configs, currentConfig, data ) {
		// Edit in the Hub when the config has a Hub ID and we have an API key.
		if ( this.apiKey && currentConfig.hub_id ) {
			const configData = {
				name: data.get( 'name' ),
				description: data.get( 'description' ),
				package: {
					id: this.pluginData.id,
					name: this.pluginData.name,
				}
			};
			this.makeHubRequest( `/${ currentConfig.hub_id}`, 'PATCH', JSON.stringify( configData ) );
		}
		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );

		if ( -1 !== configIndex ) {
			configs[ configIndex ].name = data.get( 'name' );
			configs[ configIndex ].description = data.get( 'description' );
		}

		const send = {
			[ this.optionName ]: configs,
		};

		return this.makeLocalRequest( 'POST', JSON.stringify( send ) );
	}

	/**
	* Promesify xhr requests.
	*
	* @param {*} data Request data.
	* @param {string} verb Request verb.
	* @return {Promise} Promised request.
	*/
	makeLocalRequest( verb = 'GET', data = null ) {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();

			// TODO: double check this. Don't forget multisites.
			xhr.open( verb, `${this.root}wp/v2/settings`, true );
			xhr.setRequestHeader( 'X-WP-Nonce', this.nonce );
			xhr.setRequestHeader( 'Content-type', 'application/json' );
			xhr.onload = () => {
				if ( xhr.status >= 200 && xhr.status < 300 ) {
					const response = JSON.parse( xhr.response ),
						resolveValue = response[ this.optionName ] ? response[ this.optionName ] : null;
					resolve( resolveValue );
				} else {
					reject( {
						status: xhr.status,
					} );
				}
			};
			xhr.onerror = () => {
				reject( {
					status: xhr.status,
				} );
			};
			xhr.send( data );
		});
	};

	syncWithHub() {
		return new Promise( ( resolve, reject ) => {
			let local;
			this.getAllLocal().then( ( response ) => {
				local = response;

				// We just need the local configs for Free users.
				if ( ! this.apiKey ) {
					resolve( local );
				}

				return this.makeHubRequest( `?package_id=${ this.pluginData.id }`, 'GET' );
			} )
			.then( ( hubRes ) => {
				resolve( this.updateLocalAndHub( local, hubRes ) )
			} )
			.catch( ( res ) => reject( res ) );
		} );
	}

	updateLocalAndHub( localConfigs, hubConfigs ) {
		for ( const [ i, local ] of localConfigs.entries() ) {
			// Skip checks for the basic config
			if ( 1 === local.id ) {
				continue;
			}

			// Send to the Hub the configs that haven't been sent.
			if ( ! local.hub_id ) {
				const hubId = this.sendConfigToHub( local );

				if ( hubId ) {
					local.hub_id = hubId;
					local.id = hubId;
					localConfigs[ i ] = local;
				}

				continue;
			}
		}

		return localConfigs;
	}

	sendConfigToHub( config ) {
		const configData = {
			name: config.name,
			description: config.description,
			package: this.pluginData,
		}

		configData.config = JSON.stringify( {
			strings: {
				something: [ 'something else' ],
			},
			configs: config.config,
		} );

		this.makeHubRequest( '', 'POST', JSON.stringify( configData ) )
			.then( ( res ) => res.id );
	}

	makeHubRequest( path = '', verb = 'GET', data = null ) {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();

			xhr.open( verb, `https://wpmudev.com/api/hub/v1/package-configs${ path }`, true );
			xhr.setRequestHeader( 'Content-type', 'application/json' );
			xhr.setRequestHeader( 'Authorization', 'Basic ' + this.apiKey );
			xhr.onload = () => {
				if ( xhr.status >= 200 && xhr.status < 300 ) {
					resolve( JSON.parse( xhr.response ) );
				} else {
					reject( {
						status: xhr.status,
					} );
				}
			};
			xhr.onerror = () => {
				reject( {
					status: xhr.status,
				} );
			};
			xhr.send( data );
		});
	};
}