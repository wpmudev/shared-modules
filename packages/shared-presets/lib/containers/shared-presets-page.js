import React from 'react';
import styled from 'styled-components';

import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';

import ApplyModal from '../components/apply-modal';
import DeleteModal from '../components/delete-modal';
import EditModal from '../components/edit-modal';
import { PresetsAccordionItem } from '../components/accordion-item';

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

export const PresetsPage = ( {
	configsOptionName,
	actions,
	freeData,
	isPro,
	isWhitelabel,
	...props
} ) => {
	const [configs, setConfigs] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);

	// Modals-related states.
	const [ currentConfig, setCurrentConfig ] = React.useState( null );
	const [ isApplyOpen, setIsApplyOpen ] = React.useState( false );
	const [ isDeleteOpen, setIsDeleteOpen ] = React.useState( false );
	const [isEditOpen, setIsEditOpen] = React.useState( false );

	const lang = Object.assign(
		{
			title: 'Preset configs',
			upload: 'Upload',
			save: 'Save config',
			loading: 'Updating the config list…',
			emptyNotice: 'You don’t have any available config. Save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
			baseDescription: 'Use configs to save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
			proDescription: 'You can easily apply configs to multiple sites at once via the Hub', // TODO: add link.
			syncWithHub: 'Created or updated the configs via the Hub? Re-check to get the updated list.', // TODO: add button.
			apply: 'Apply',
			download: 'Download',
			edit: 'Name and Description',
			delete: 'Delete',
			notificationDismiss: 'Dismiss notice',
			defaultRequestError: 'Request failed. Status: {status}. Please reload the page and try again.',
			applyAction: {
				successMessage: '{configName} config has been applied successfully.',
			},
			editAction: {
				successMessage: '{configName} config created successfully.',
			},
			deleteAction: {},
		},
		props.lang
	);

	React.useEffect(() => {
		retrieveConfigs();
	}, []);

	const parseAndSetConfigs = ( rawConfigs ) => {
		// There are no configs or they don't match with their schema.
		if ( ! rawConfigs ) {
			setConfigs( null );
			return;
		}

		const image = !isWhitelabel ? props.urls.accordionImg : null;

		// Add extra properties required by the Configs component.
		const parsedConfigs = Object.values( rawConfigs ).map( ( item ) => {
			item.image = image;
			item.downloadAction = () => console.log( 'downloading' );

			return item;
		});

		setConfigs( parsedConfigs );
	};

	const retrieveConfigs = () => {
		setIsLoading( true );

		// TODO: double check this. Don't forget multisites.
		const settings = new wp.api.models.Settings();
		settings.fetch().then( ( response ) => {
			parseAndSetConfigs( response[ configsOptionName ] );
			setIsLoading( false );
		} );
	};

	const handleUpload = ( e ) => {
		actions.upload( e ).then( ( res ) => {
			if ( ! res.success ) {
				requestFailureNotice( res );
				return;
			}
			retrieveConfigs();
			successNotice( res.data.message );
		})
		.catch( ( res ) => requestFailureNotice( res ) );
	};

	const handleEdit = ( data, displayErrorMessage ) => {
		const requestCallback = ( res ) => {
			if ( ! res.success ) {
				displayErrorMessage( res.data.error_msg );
				return;
			}
			setIsEditOpen( false );
			retrieveConfigs();

			// For when editing a config only.
			if ( currentConfig ) {
				successNotice( lang.editAction.successMessage.replace( '{configName}', data.get( 'name' ) ) );
			}
		};

		// Editing a config.
		if ( currentConfig ) {
			actions.edit( currentConfig, data )
				.then( ( res ) => requestCallback( res ) )
				.catch( ( res ) => requestFailureNotice( res ) );
			return;
		}

		// Creating a new config.
		actions.create( data )
			.then( ( res ) => requestCallback( res ) )
			.catch( ( res ) => requestFailureNotice( res ) );
	};

	const handleApply = () => {
		actions.apply( currentConfig ).then( ( res ) => {
			setIsApplyOpen( false );

			if ( ! res.success ) {
				requestFailureNotice( res );
				return;
			}
			successNotice( lang.applyAction.successMessage.replace( '{configName}', currentConfig.name ) );
		})
		.catch( ( res ) => requestFailureNotice( res ) );
	};

	const handleDelete = () => {
		actions.delete( currentConfig ).then( ( res ) => {
			setIsDeleteOpen( false );

			if ( ! res.success ) {
				requestFailureNotice( res );
				return;
			}
			retrieveConfigs();
		})
		.catch( ( res ) => requestFailureNotice( res ) );
	};

	// Utils to move somewhere else.
	const successNotice = ( message ) => {
		window.SUI.openNotice('wp-smush-ajax-notice', `<p>${ message }</p>`, {
			type: 'success',
			icon: 'check-tick',
			dismiss: {
				show: true,
				label: lang.notificationDismiss,
			},
		});
	};

	const requestFailureNotice = ( res ) => {
		const message = res.data
			? res.data.error_msg
			: lang.defaultRequestError.replace( '{status}', res.status );

		// TODO: this container doesn't exist for every plugin. Fix it.
		window.SUI.openNotice('wp-smush-ajax-notice', `<p>${ message }</p>`, {
			type: 'error',
			icon: 'info',
			dismiss: {
				show: true,
				label: lang.notificationDismiss,
			},
		});
	};

	// End of utils to move somewhere else.

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

	const Table = (
		<React.Fragment>
			{ !isEmpty && (
				<div
					className="sui-accordion sui-accordion-flushed"
					style={ {
						borderBottomWidth: 0
					} }
				>
					{ configs.map( item => (
						<PresetsAccordionItem
							key={ item.id }
							id={ item.id }
							default={ item.default || false }
							name={ item.name }
							description={ item.description }
							image={ item.image }
							showApplyButton={ true }
							applyLabel={ lang.apply }
							applyAction={ () => openModal( 'apply', item ) }
							downloadLabel={ lang.download }
							downloadAction={ item.downloadAction }
							editLabel={ lang.edit }
							editAction={ () => openModal( 'edit', item ) }
							deleteLabel={ lang.delete }
							deleteAction={ () => openModal( 'delete', item ) }
						>
							{ item.humanConfig && item.humanConfig.map( ( item, index ) => (
								<div key={ index } name={ item.label } status={ item.value } />
							) ) }
						</PresetsAccordionItem>
					) ) }
				</div>
			)}
		</React.Fragment>
	);

	const Footer = (
		<React.Fragment>

			{ freeData && (
				<BoxFooter
					display="block"
				>
					<Notifications type="upsell">
						<p>{ freeData.message }</p>
						<p>
							<Button
								label={ freeData.button || 'Try The Hub' }
								color="purple"
								href={ freeData.buttonHref || 'https://wpmudev.com/hub-welcome/' }
								target="_blank"
							/>
						</p>
					</Notifications>
				</BoxFooter>
			)}

			{ isPro && (
				<BoxFooter
					display="block"
					alignment="center"
					paddingTop={ isEmpty ? 0 : 30 }
					border={ isEmpty ? 0 : 1 }
				>
					<p className="sui-description">{ lang.syncWithHub }</p>
				</BoxFooter>
			)}

		</React.Fragment>
	);

	return (
		<React.Fragment>
			<Box>
				<BoxHeader title={ lang.title }>
					<div>
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
							icon="save"
							label={ lang.save }
							color="blue"
							onClick={ () => openModal( 'edit', null ) }
						/>
					</div>
				</BoxHeader>

				<BoxBody>

					<p>
						{ lang.baseDescription }
						{ isPro && !isWhitelabel &&
							' ' + lang.proDescription
						}
					</p>

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
							{ Footer }
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
						{ Footer }
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
}