import React from 'react';
import styled from 'styled-components';

import { deviceMax } from './components/utils';
import { Box, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { RadioCheckboxInput } from '@wpmudev/react-radio-checkbox';

import ApplyModal from './components/apply-modal';
import DeleteModal from './components/delete-modal';
import EditModal from './components/edit-modal';
import { PresetsAccordionItem } from './components/accordion-item';

import Requester from './requests-handler';
import { escapeHTML } from '@wordpress/escape-html';

const LoadingContent = styled.div`
.sui-wrap && {
    position: relative;
    z-index: 2;
}
`;

const LoadingWrap = styled.div`
.sui-wrap && {
    pointer-events: none;
}`;

const LoadingMask = styled.div`
.sui-wrap && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.95);
    border-radius: 0 0 4px 4px;

    > p {

    }
}
`;

const StyledSyncButton = styled.button`
.sui-wrap && {
	color: #17A8E3;
	font-weight: 600;
	background-color: transparent;
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: inline;
	margin: 0;
	padding: 0;
}
`;

const StyledBoxHeader = styled.div`
[class*="sui-2-"] .sui-wrap && {

	.sui-actions-right {

		@media ${deviceMax.tablet} {
			justify-content: space-between;
			margin-top: 9px;
		}
	}

	@media ${deviceMax.tablet} {
		display: block;
	}
}
`;

const PresetsAccordionHeader = styled.div`
[class*="sui-2-"] .sui-wrap && {

	> .sui-accordion-col-3,
    > .sui-accordion-col-2,
	> .sui-accordion-col-auto {

		@media ${deviceMax.tablet} {
			display: none !important;
		}
	}
}
`;

const PresetsAccordion = styled.div`
[class*="sui-2-"] .sui-wrap && {
	.sui-checkbox {
		@media (max-width: 783px) {
			margin: 0 10px 0 0;
		}
	}
}
`;

let RequestsHandler;

export const Presets = ( {
	isWidget,
	isPro,
	isWhitelabel,
	requestsData,
	sourceUrls,
	sourceLang,
	// Below all custom props used on demo only.
	srcDemoData,
	setDemoData = false
} ) => {
	const [ configs, setConfigs ] = React.useState( [] );
	const [ isLoading, setIsLoading ] = React.useState( true );
	const [ isDisabled, setDisabled ] = React.useState( true );

	// Modals-related states.
	const [ currentConfig, setCurrentConfig ] = React.useState( null );
	const [ isApplyOpen, setIsApplyOpen ] = React.useState( false );
	const [ isDeleteOpen, setIsDeleteOpen ] = React.useState( false );
	const [ isEditOpen, setIsEditOpen ] = React.useState( false );

	const urls = Object.assign(
		{
			freeNoticeHub: 'https://wpmudev.com/hub-welcome/',
			hubMyConfigs: 'https://wpmudev.com/hub2/configs/my-configs',
			configsPage: '#',
			accordionImg: null,
		},
		sourceUrls
	);

	const lang = Object.assign(
		{
			title: 'Preset configs',
			upload: 'Upload',
			save: 'Save config',
			manageConfigs: 'Manage configs',
			loading: 'Updating the config list…',
			emptyNotice: 'You don\'t have any available config. Save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
			baseDescription: 'Use configs to save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
			proDescription: (
				<React.Fragment>
					{'You can easily apply configs to multiple sites at once via '}
					<a
						href={urls.hubMyConfigs}
						target="_blank"
						rel="noreferrer"
					>
						{'the Hub.'}
					</a>
				</React.Fragment>
			),
			widgetDescription: 'Use configs to save preset configurations of your settings.',
			syncWithHubText: 'Created or updated the configs via the Hub?',
			syncWithHubButton: 'Re-check to get the updated list.',
			apply: 'Apply',
			download: 'Download',
			edit: 'Edit Details',
			delete: 'Delete',
			freeNoticeMessage: 'Tired of saving, downloading and uploading your configs across your sites? WPMU DEV members use The Hub to easily apply configs to multiple sites at once… Try it free today!',
			freeButtonLabel: 'Try The Hub',
			notificationDismiss: 'Dismiss notice',
			defaultRequestError: 'Request failed. Status: {status}. Please reload the page and try again.',
			uploadWrongPluginErrorMessage: 'The uploaded file is not a {pluginName} Config. Please make sure the uploaded file is correct.',
			uploadActionSuccessMessage: '{configName} config has been uploaded successfully – you can now apply it to this site.',
			applyAction: {
				successMessage: '{configName} config has been applied successfully.',
			},
			editAction: {
				successMessage: '{configName} config created successfully.',
			},
			deleteAction: {
				successMessage: '{configName} config deleted successfully.',
			},
			bulkDeleteAction: {
				successMessage: 'Config(s) deleted successfully.',
			},
			settingsLabels: {
				bulk_smush: 'Bulk Smush',
				lazy_load: 'Lazy Load',
				cdn: 'CDN',
				webp_mod: 'WebP Mod',
				integrations: 'Integrations',
				settings: 'Settings',
			},
		},
		sourceLang
	);

	// Default demo data.
	let demoData = [];

	if ( srcDemoData ) {
		if ( 'empty' === srcDemoData ) {
			demoData = [];
		} else {
			demoData.push( ...srcDemoData );
		}
	}

	React.useEffect(() => {
		RequestsHandler = new Requester( requestsData );
		retrieveConfigs();
		return () => {
			setIsLoading( false );
		};
	}, []);

	const retrieveConfigs = () => {
		setIsLoading( true );

		if ( setDemoData ) {
			setTimeout( () => {
				setConfigs( demoData );
				setIsLoading( false );
			}, 1000 );
		} else {
			RequestsHandler.makeLocalRequest()
				.then( ( newConfigs ) => setConfigs( newConfigs || [] ) )
				.catch( ( res ) => requestFailureNotice( res ) )
				.then( () => setIsLoading( false ) );
		}
	};

	const hasSameProperties = (obj1, obj2) => {
		return Object.keys(obj1).every( function(property) {
			return obj2.hasOwnProperty(property);
		});
	};

	const handleUpload = ( e ) => {
		let newConfigName;

		if ( setDemoData ) {

			const configFile = e.target.files[0];
			const reader = new FileReader();

			const defaultStructure = {
				id: '',
				default: '',
				name: '',
				description: '',
				created_date: '',
				config: [
					{
						id: '',
						name: '',
						content: ''
					}
				]
			};
			
			reader.readAsText(configFile);

			reader.onload = function() {
				setIsLoading( true );
				try {
					var fileContent = JSON.parse(reader.result);
					if (hasSameProperties(defaultStructure, fileContent)) {
						demoData.push(fileContent);
						setTimeout( () => {
							setConfigs( demoData );
							setIsLoading( false );
						}, 500 );
						console.log(
							'\n' +
							'Button: Upload\n' +
							'Action: To upload new configurations.\n' +
							'Message: Config imported successfully.\n' +
							'\n' +
							'REMEMBER, THIS IS JUST A PROTOTYPE. THE DEMO FILE WILL BE UPLOADED ONCE ONLY.' +
							'\n'
						);
					}
				} catch (e) {
					setTimeout( () => {
						setIsLoading( false );
					}, 500 );
					console.log(
						'\n' +
						'Button: Upload\n' +
						'Action: To upload new configurations.\n' +
						'Message: Invalid JSON structure.\n' +
						'\n' +
						'REMEMBER, THIS IS JUST A PROTOTYPE. THE DEMO FILE WILL BE UPLOADED ONCE ONLY.' +
						'\n'
					);
					return;
				}
			};
		} else {
			RequestsHandler.upload( e ).then( ( res ) => {
				if ( res.data && res.data.config ) {
					// The downloads from the first version won't have this.
					if ( res.data.plugin ) {
						// Bail out if the uploaded config doesn't belong to this plugin.
						if ( res.data.plugin !== requestsData.pluginData.id ) {
							throw {
								data: { error_msg: lang.uploadWrongPluginErrorMessage.replace( '{pluginName}', requestsData.pluginData.name ) },
							};
						}

						// We don't need this.
						delete res.data.plugin;
					}

					res.data.name = res.data.name.substring( 0, 200 );
					res.data.description = res.data.description.substring( 0, 200 );
					newConfigName = escapeHTML( res.data.name );

					return RequestsHandler.addNew( configs, res.data );
				}

				// Throw otherwise.
				throw res;
			} )
				.then( ( updatedConfigs ) => {
					setConfigs( updatedConfigs );
					successNotice(
						lang.uploadActionSuccessMessage.replace(
							'{configName}',
							newConfigName
						)
					);
				} )
				.catch( ( res ) => requestFailureNotice( res ) );
		}
	};

	const handleDelete = (currentConfig) => {
		if ( setDemoData ) {
			setTimeout(() => {
				setIsDeleteOpen( false );
				setIsLoading( true );
			}, 500 );
			setTimeout(() => {
				setIsLoading( false );
				// Remove the config from the demo data.
				demoData = configs.filter( ( config ) => config.id !== currentConfig.id );
				setConfigs(demoData);
			}, 1000 );

			console.log(
				'\n' +
				'Modal: Delete Configuration File\n' +
				'Button: Delete\n' +
				'Action: It removes an item from the table.\n' +
				'\n' +
				'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' +
				'\n'
			);
		} else {
			RequestsHandler.delete( [ ...configs ], currentConfig )
				.then( ( newConfigs ) => { 
					setConfigs( newConfigs );
					successNotice( 
						Object.keys(currentConfig).length === 1 ? 
							lang.deleteAction.successMessage.replace( '{configName}', currentConfig.name ) :
							lang.bulkDeleteAction.successMessage
					);
				} )
				.catch( ( res ) => requestFailureNotice( res ) )
				.then( () => setIsDeleteOpen( false ) );
		}

	};

	const handleEdit = ( data, displayErrorMessage ) => {
		const configData = {
			name: data.get( 'name' ).substring( 0, 200 ),
			description: data.get( 'description' ).substring( 0, 200 ),
		};

		if ( setDemoData ) {
			setTimeout(() => {
				setIsEditOpen( false );
				setIsLoading( true );
			}, 500 );

			setTimeout(() => setIsLoading( false ), 1000 );

			console.log(
				'\n' +
				'Modal: Rename Config\n' +
				'Button: Save\n' +
				'Action: To save the changes made on config name and/or description.\n' +
				'\n' +
				'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' +
				'\n'
			);
		} else {
			// Editing a config.
			if ( currentConfig ) {
				RequestsHandler.edit( [ ...configs ], currentConfig, configData )
					.then( ( newConfigs ) => setConfigs( newConfigs ) )
					.catch( ( res ) => requestFailureNotice( res ) )
					.then( () => setIsEditOpen( false ) );
			} else {
				// Creating a new config.
				RequestsHandler.create( data )
					.then( ( res ) => {
						if ( res.data && res.data.config ) {
							configData.config = res.data.config;
							return RequestsHandler.addNew( [...configs], configData );
						}

						if ( ! res.success ) {
							displayErrorMessage( res.data.error_msg );
						}
					} )
					.then( ( updatedConfigs ) => {
						setConfigs( updatedConfigs );
						setIsEditOpen( false );
						successNotice(
							lang.editAction.successMessage.replace(
								'{configName}',
								escapeHTML( configData.name )
							)
						);
					} )
					.catch( ( res ) => requestFailureNotice( res ) );
			}
		}
	};

	const handleApply = () => {
		if ( setDemoData ) {
			setTimeout(() => {
				setIsApplyOpen( false );
				setIsLoading( true );
			}, 500 );

			setTimeout(() => setIsLoading( false ), 1000 );

			console.log(
				'\n' +
				'Modal: Apply Config\n' +
				'Button: Apply\n' +
				'Action: To apply the saved configurations into the plugin.\n' +
				'\n' +
				'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' +
				'\n'
			);
		} else {
			RequestsHandler.apply( currentConfig ).then( ( res ) => {
				setIsApplyOpen( false );

				if ( ! res.success ) {
					requestFailureNotice( res );
					return;
				}
				successNotice(
					lang.applyAction.successMessage.replace(
						'{configName}',
						escapeHTML( currentConfig.name )
					)
				);
			})
				.catch( ( res ) => requestFailureNotice( res ) );
		}
	};

	const handleSyncWithHub = () => {
		setIsLoading( true );

		if ( setDemoData ) {
			setTimeout( () => setIsLoading( false ), 1000 );
		} else {
			RequestsHandler.syncWithHub( [ ...configs ] )
				.then( ( newConfigs ) => setConfigs( newConfigs ) )
				.catch( ( res ) => requestFailureNotice( res ) )
				.then( () => setIsLoading( false ) );
		}
	};

	const doDownload = ( clickedConfig ) => {
		const config = Object.assign( {}, configs.find( ( item ) => clickedConfig.id === item.id ) );

		if ( setDemoData ) {
			console.log( 'You clicked on "Download" button.' );
		}

		if ( ! config || ! Object.keys( config ).length || setDemoData ) {
			return;
		}

		// Include the ID of the plugin this config belongs to.
		config.plugin = requestsData.pluginData.id;

		// This is unique per site.
		delete config.hub_id;

		// Avoid having multiple defaults on upload.
		delete config.default;

		const blob = new Blob( [ JSON.stringify( config, null, 2 ) ], {
			type: 'application/json',
		});

		const pluginName = requestsData.pluginData.name.toLowerCase().replace( ' ', '-' ),
			configName = config.name.replace( /[^a-z0-9_-]/gi, '_' ).toLowerCase(),
			url = window.URL.createObjectURL(blob),
			a = document.createElement('a');

		a.style.display = 'none';
		a.href = url;
		a.download = `wp-${ pluginName }-config-${ configName }`;
		document.body.appendChild( a );
		a.click();
		window.URL.revokeObjectURL( url );
		a.remove();
	};

	const isEmpty = ! configs || 0 === configs.length;

	const openModal = ( action, config ) => {
		setCurrentConfig( config );

		if ( 'apply' === action ) {
			setIsApplyOpen( true );
		} else if ( 'delete' === action ) {
			setIsDeleteOpen( true );
		} else {
			setIsEditOpen( true );
		}
	};

	// Notifications.
	const successNotice = ( message ) => {
		window.SUI.openNotice(
			'sui-configs-floating-notice', `<p>${ message }</p>`,
			{
				type: 'success',
				icon: 'check-tick',
				dismiss: {
					show: true,
					label: lang.notificationDismiss,
				},
			}
		);
	};

	const requestFailureNotice = ( res ) => {
		let message;

		if ( res.data ) {
			message = res.data.error_msg;
		} else if ( res.status && 403 === res.status ) {
			message = lang.defaultRequestError.replace( '{status}', res.status );
		} else {
			window.console.log( res );
			message = 'Error. Please check the browser console';
		}

		window.SUI.openNotice(
			'sui-configs-floating-notice', `<p>${ message }</p>`,
			{
				type: 'error',
				icon: 'info',
				dismiss: {
					show: true,
					label: lang.notificationDismiss,
				},
			}
		);
	};

	const tableImage = !isWhitelabel ? urls.accordionImg : null;

	const selectAll = (checked) => {
		setConfigs( configs.map( ( config ) => {
			config.selected = checked;
			return config;
		} ) );
		deleteButton();
	};

	const checkboxClickHandler = (clickedConfig, checked) => {
		setConfigs( configs.map( ( config ) => {
			if( clickedConfig === config ) {
				config.selected = checked;
			}
			return config;
		} ) );
		deleteButton();
	};

	const deleteButton = () => {
		for (var i = 0; i < configs.length; i++) {
			if(configs[i].selected) {
				setDisabled(false);
				break;
			} else {
				setDisabled(true);
			}
		}
	};

	const bulkDeleteHandler = () => {
		const selectedConfig = Object.assign( {}, configs.filter( ( item ) => item.selected === true ) );
		openModal( 'delete', selectedConfig);
	};

	const Table = (
		<>
			{ ! isEmpty && (
				<PresetsAccordion className="sui-accordion sui-accordion-flushed" style={{ borderBottomWidth: 0, borderTop: 0 }}>
					<PresetsAccordionHeader className="sui-accordion-header" style={{ minHeight: '100%' }}>
						<div className='sui-accordion-item-title'>
							<RadioCheckboxInput
								id="checkbox-default-one"
								name="select-all"
								type="checkbox"
								onChange={(e) => selectAll(e.target.checked)}
							/>
							<span>Config Name</span>
						</div>
						<div className="sui-accordion-col-3">Description</div>
						<div className="sui-accordion-col-2">Date Created</div>
						<div className="sui-accordion-col-auto" style={{ flex: '0 1 213px' }}></div>
					</PresetsAccordionHeader>
					{ configs.map( ( item, index ) => (
						<PresetsAccordionItem
							key={ index }
							id={ index }
							default={ item.default }
							name={ item.name }
							description={ item.description }
							date={ item.created_date }
							isWidget={ isWidget }
							image={ tableImage }
							showApplyButton={ ! isWidget }
							applyLabel={ lang.apply }
							applyAction={ () => openModal( 'apply', item ) }
							downloadLabel={ lang.download }
							downloadAction={ () => doDownload( item ) }
							editLabel={ lang.edit }
							editAction={ () => openModal( 'edit', item ) }
							deleteLabel={ lang.delete }
							deleteAction={ () => openModal( 'delete', item ) }
							checkboxId= { 'demo-checkbox-' + index }
							checkboxSelected= { item.selected }
							checkboxClickHandler= { (e) => checkboxClickHandler( item, e.target.checked ) }
						>
							{ item.config.map( ( data ) => (
								<div key={ data.id } name={ data.name } status={ data.content } />
							) ) }
						</PresetsAccordionItem>
					) ) }
				</PresetsAccordion>
			) }
		</>
	);

	const getFooter = () => {
		if ( isWidget ) {
			return (
				<BoxFooter>
					<Button
						icon="save"
						label={ lang.save }
						color="blue"
						onClick={ () => openModal( 'edit', null ) }
					/>
					<Button
						icon="wrench-tool"
						label={ lang.manageConfigs }
						design="ghost"
						href={ urls.configsPage }
					/>
				</BoxFooter>
			);
		}

		if ( isPro ) {
			return (
				<BoxFooter
					display="block"
					alignment="center"
					paddingTop={ isEmpty ? 0 : 30 }
					border={ isEmpty ? 0 : 1 }
				>
					<p className="sui-description">
						{ lang.syncWithHubText } {' '}
						<StyledSyncButton onClick={ handleSyncWithHub }>
							{ lang.syncWithHubButton }
						</StyledSyncButton>
					</p>
				</BoxFooter>
			);
		}

		return (
			<BoxFooter
				display="block"
			>
				<Notifications type="upsell">
					<p>{ lang.freeNoticeMessage }</p>
					<p>
						<Button
							label={ lang.freeButtonLabel }
							color="purple"
							href={ urls.freeNoticeHub }
							target="_blank"
						/>
					</p>
				</Notifications>
			</BoxFooter>
		);
	};

	const getDescription = () => {
		if ( isWidget ) {
			return ( <p>{ lang.widgetDescription }</p> );
		}

		return ( <p>
			{ lang.baseDescription + ' ' }
			{ isPro && !isWhitelabel && lang.proDescription }
		</p> );
	};

	const headerArgs = { title: lang.title };
	if ( isWidget ) {
		headerArgs.titleIcon = 'wrench-tool';
		if ( ! isEmpty ) {
			headerArgs.tagLabel = configs.length;
		}
	}

	const PresetsHeader = (
		<StyledBoxHeader className="sui-box-header">
			<h2 className="sui-box-title">
				{ isWidget && (
					<span className="sui-icon-wrench-tool" aria-hidden="true" />
				)}
				{ lang.title }
				{ ! isEmpty && isWidget && (
					<span className="sui-tag" style={ { marginLeft: 10 } }>{ configs.length }</span>
				)}
			</h2>

			{ ! isWidget && (
				<div className="sui-actions-right">
					<Button
						icon="upload-cloud"
						label={ lang.upload }
						design="ghost"
						htmlFor="sui-upload-configs-input"
					/>
					<input
						id="sui-upload-configs-input"
						type="file"
						name="config_file"
						className="sui-hidden"
						value=""
						readOnly="readonly"
						onChange={ handleUpload }
						accept=".json"
					/>
					<Button
						type="button"
						icon="save"
						label={ lang.save }
						color="blue"
						onClick={ () => openModal( 'edit', null ) }
					/>
				</div>
			) }
		</StyledBoxHeader>
	);

	return (
		<React.Fragment>
			<div className="sui-floating-notices">
				<div role="alert" id="sui-configs-floating-notice" className="sui-notice" aria-live="assertive"></div>
			</div>

			<Box>
				{ PresetsHeader }

				<BoxBody>

					{ getDescription() }
					{ !isLoading && !isEmpty && (
						<div>
							<Button onClick={ bulkDeleteHandler } className="sui-button-red" label="Bulk Delete" icon="trash" disabled={ isDisabled }/>
						</div>
					)}

					{ !isLoading && isEmpty && (
						<Notifications type="info">
							<p>{ lang.emptyNotice }</p>
						</Notifications>
					)}

				</BoxBody>

				{ isLoading && (
					<LoadingContent>
						<LoadingWrap aria-hidden="true">
							{ Table }
							{ getFooter() }
						</LoadingWrap>
						<LoadingMask>
							<p className="sui-description">
								<span
									className="sui-icon-loader sui-loading"
									aria-hidden="true"
									style={ { marginRight: 10 } }
								/>
								{ lang.loading }
							</p>
						</LoadingMask>
					</LoadingContent>
				)}

				{ !isLoading && (
					<React.Fragment>
						{ Table }
						{ getFooter() }
					</React.Fragment>
				)}

			</Box>

			{ isApplyOpen && (
				<ApplyModal
					setOpen={ setIsApplyOpen }
					config={ currentConfig }
					save={ handleApply }
					strings={ lang.applyAction }
				/>
			) }
			{ isDeleteOpen && (
				<DeleteModal
					setOpen={ setIsDeleteOpen }
					config={ currentConfig }
					save={ handleDelete }
					strings={ lang.deleteAction }
				/>
			) }
			{ isEditOpen && (
				<EditModal
					setOpen={ setIsEditOpen }
					config={ currentConfig }
					save={ handleEdit }
					strings={ lang.editAction }
				/>
			) }
		</React.Fragment>
	);
};
