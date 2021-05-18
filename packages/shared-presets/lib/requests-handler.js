export default class RequestHandler {
	constructor( { apiKey, pluginData, root, nonce, optionName } ) {
		this.apiKey = apiKey;
		this.pluginData = pluginData;
		this.root = root;
		this.nonce = nonce;
		this.optionName = optionName;

		this.retrieveConfigs = this.retrieveConfigs.bind( this );
		this.delete = this.delete.bind( this );
	}

	retrieveConfigs() {
		return new Promise( ( resolve, reject ) => {
			let local;
			this.makeLocalRequest().then( ( response ) => {
				local = response ? Object.values( response ) : null;

				// We just need the local configs for Free users.
				if ( ! this.apiKey ) {
					resolve( local );
				}

				return this.getAllFromHub();
			} )
			.then( ( hubRes ) => resolve( this.syncWithHub( local, hubRes ) ) )
			.catch( ( res ) => reject( res ) );
		} );
	}

	getAllFromHub() {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();

			xhr.open(
				'GET',
				'https://wpmudev.com/api/hub/v1/package-configs?package_id=' + this.pluginData.id,
				true
			);
			xhr.setRequestHeader( 'Authorization', 'Basic ' + this.apiKey );
			xhr.onload = () => {
				if ( xhr.status >= 200 && xhr.status < 300 ) {
					resolve( JSON.parse( xhr.response ) );
				} else {
					reject({
						status: xhr.status,
					});
				}
			};
			xhr.onerror = () => {
				reject({
					status: xhr.status,
				});
			};
			xhr.send();
		} );
	}

	syncWithHub( local, hub ) {
		console.log( local );
		console.log( hub );
		return local;
	}

	delete( configs, configId ) {
		const configIndex = configs.findIndex( ( element ) => element.id === configId );

		if ( -1 !== configIndex ) {
			configs.splice( configIndex, 1 );
		}

		const send = {
			[ this.optionName ]: configs,
		};

		return this.makeLocalRequest( JSON.stringify( send ), 'POST' );
	}

	edit( configs, currentConfig, data ) {
		const configIndex = configs.findIndex( ( element ) => element.id === currentConfig.id );

		if ( -1 !== configIndex ) {
			configs[ configIndex ].name = data.get( 'name' );
			configs[ configIndex ].description = data.get( 'description' );
		}

		const send = {
			[ this.optionName ]: configs,
		};

		return this.makeLocalRequest( JSON.stringify( send ), 'POST' );
	}

	/**
	* Promesify xhr requests.
	*
	* @param {*} data Request data.
	* @param {string} verb Request verb.
	* @return {Promise} Promised request.
	*/
	makeLocalRequest ( data = null, verb = 'GET' ) {
		return new Promise( ( resolve, reject ) => {
			const xhr = new XMLHttpRequest();

			// TODO: double check this. Don't forget multisites.
			xhr.open( verb, `${this.root}wp/v2/settings`, true);
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
}