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
	configsList,
	applyModalData,
	deleteModalData,
	editModalData,
	freeData,
	isPro,
	isWhitelabel,
	isLoading,
	...props
} ) => {
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
		},
		props.lang
	);

	const isEmpty = ! configsList || 0 === configsList.length;

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
					{ configsList.map( item => (
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
							{ item.config.map( ( item, index ) => (
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
							onChange={ props.uploadConfig }
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
							lang.proDescription
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
					setOpen={setIsApplyOpen}
					config={currentConfig}
					save={applyModalData.action}
					strings={applyModalData.strings}
				/>
			) }
			{ isDeleteOpen && (
				<DeleteModal
					setOpen={ setIsDeleteOpen }
					config={ currentConfig }
					save={ deleteModalData.action }
					strings={deleteModalData.strings}
				/>
			) }
			{ isEditOpen && (
				<EditModal
					setOpen={ setIsEditOpen }
					config={ currentConfig }
					save={ editModalData.action }
					strings={editModalData.strings}
				/>
			) }
		</React.Fragment>
	);
}