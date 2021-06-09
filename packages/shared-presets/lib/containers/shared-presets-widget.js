import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';

import ApplyModal from '../components/apply-modal';
import DeleteModal from '../components/delete-modal';
import EditModal from '../components/edit-modal';
import { successNotice, requestFailureNotice } from '../components/notifications';
import { PresetsAccordionItem } from '../components/accordion-item';

import Requester from '../requests-handler';

let RequestsHandler;

export const PresetsWidget = ( {
	isWhitelabel,
	requestsData,
	sourceUrls,
	sourceLang
} ) => {
	const [ configs, setConfigs ] = React.useState( [] );
	const [ isLoading, setIsLoading ] = React.useState( true );

	const [ currentConfig, setCurrentConfig ] = React.useState( null );
	const [ isApplyOpen, setIsApplyOpen ] = React.useState( false );
	const [ isDeleteOpen, setIsDeleteOpen ] = React.useState( false );
	const [ isEditOpen, setIsEditOpen ] = React.useState( false );

	const urls = Object.assign(
		{
			configsPage: '#',
			accordionImg: null,
		},
		sourceUrls
	);

	const lang = Object.assign(
		{
			configsPageButtonLabel: 'Manage configs',
			description: 'Configs bundle your settings and make them available to download and apply on your other sites.',
			title: 'Preset configs',
			save: 'Save config',
			loading: 'Updating the config list…',
			emptyNotice: 'You don’t have any available config. Save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
			apply: 'Apply',
			download: 'Download',
			edit: 'Name and Description',
			delete: 'Delete',
			notificationDismiss: 'Dismiss notice',
			defaultRequestError: 'Request failed. Status: {status}. Please reload the page and try again.',
			uploadActionSuccessMessage: '{configName} config has been uploaded successfully – you can now apply it to this site.',
			applyAction: {
				successMessage: '{configName} config has been applied successfully.',
			},
			editAction: {
				successMessage: '{configName} config created successfully.',
			},
			deleteAction: {},
			settingsLabels: {},
		},
		sourceLang
	);

	React.useEffect(() => {
		RequestsHandler = new Requester( requestsData );
		retrieveConfigs();
	}, []);

	const retrieveConfigs = () => {
		setIsLoading( true );

		RequestsHandler.makeLocalRequest()
			.then( ( newConfigs ) => setConfigs( newConfigs || [] ) )
			.catch( ( res ) => requestFailureNotice( res ) )
			.then( () => setIsLoading( false ) );
	};

	const handleDelete = () => {
		RequestsHandler.delete( [ ...configs ], currentConfig )
			.then( ( newConfigs ) => setConfigs( newConfigs ) )
			.catch( ( res ) => requestFailureNotice( res ) )
			.then( () => setIsDeleteOpen( false ) );
	};

	const handleEdit = ( data, displayErrorMessage ) => {
		const configData = {
			name: data.get( 'name' ).substring( 0, 199 ),
			description: data.get( 'description' ),
		};

		// Editing a config.
		if ( currentConfig ) {
			RequestsHandler.edit( [ ...configs ], currentConfig, configData )
				.then( ( newConfigs ) => setConfigs( newConfigs ) )
				.catch( ( res ) => requestFailureNotice( res ) )
				.then( () => setIsEditOpen( false ) );

			return;
		}

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
				successNotice( lang.editAction.successMessage.replace( '{configName}', configData.name ) );
			} )
			.catch( ( res ) => requestFailureNotice( res ) );
	};

	const handleApply = () => {
		RequestsHandler.apply( currentConfig ).then( ( res ) => {
			setIsApplyOpen( false );

			if ( ! res.success ) {
				requestFailureNotice( res );
				return;
			}
			successNotice( lang.applyAction.successMessage.replace( '{configName}', currentConfig.name ) );
		})
		.catch( ( res ) => requestFailureNotice( res ) );
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

	const tableImage = !isWhitelabel ? urls.accordionImg : null;
	return (
		<React.Fragment>
			<div className="sui-floating-notices">
				<div role="alert" id="sui-configs-floating-notice" className="sui-notice" aria-live="assertive"></div>
			</div>

			<Box>

				{ ! isEmpty && (
					<BoxHeader
						titleIcon="wrench-tool"
						title={ lang.title }
						tagLabel={ configs.length }
					/>
				)}

				{ isEmpty && (
					<BoxHeader
						titleIcon="wrench-tool"
						title={ lang.title }
					/>
				)}

				<BoxBody>

					<p>{ lang.description }</p>

					{ isEmpty && (
						<Notifications type="info">
							<p>{ lang.emptyNotice }</p>
						</Notifications>
					)}

				</BoxBody>

				{ !isEmpty && (
					<div
						className="sui-accordion sui-accordion-flushed"
						style={ { borderBottom: 0 } }
					>
						{ configs.map( item => (
							<PresetsAccordionItem
								key={ item.id }
								id={ item.id }
								default={ item.default }
								name={ item.name }
								description={ item.description }
								image={ tableImage }
								showApplyButton={ true }
								applyLabel={ lang.apply }
								applyAction={ () => openModal( 'apply', item ) }
								downloadLabel={ lang.download }
								downloadAction={ () => doDownload( item ) }
								editLabel={ lang.edit }
								editAction={ () => openModal( 'edit', item ) }
								deleteLabel={ lang.delete }
								deleteAction={ () => openModal( 'delete', item ) }
							>
								{ Object.keys( item.config.strings ).map( ( name ) => (
									<div key={ name } name={ lang.settingsLabels[ name ] } status={ item.config.strings[ name ] } />
								) ) }
							</PresetsAccordionItem>
						) ) }
					</div>
				)}

				<BoxFooter>
					<Button
						icon="save"
						label={ lang.save }
						color="blue"
						onClick={ () => openModal( 'edit', null ) }
					/>
					<Button
						icon="wrench-tool"
						label={ lang.configsPageButtonLabel }
						design="ghost"
						href={ urls.configsPage }
					/>
				</BoxFooter>

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