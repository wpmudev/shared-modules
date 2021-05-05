import React from 'react';
import styled from 'styled-components';

import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';

import ApplyModal from '../components/apply-modal';
import DeleteModal from '../components/delete-modal';
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

export const PresetsPage = ( { freeData, isLoading, configsList, applyModalData, deleteModalData, ...props } ) => {
	const [ currentConfig, setCurrentConfig ] = React.useState( null );
	const [ isApplyOpen, setIsApplyOpen ] = React.useState( false );
	const [ isDeleteOpen, setIsDeleteOpen ] = React.useState( false );

	const isEmpty = ! configsList || 0 === configsList.length;

	const openModal = ( action, config ) => {
		setCurrentConfig( config );

		if ( 'apply' === action ) {
			setIsApplyOpen( true );
		} else if ( 'delete' === action ) {
			setIsDeleteOpen( true );
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
							applyLabel={ item.applyLabel }
							applyAction={ () => openModal( 'apply', item ) }
							downloadLabel={ item.downloadLabel }
							downloadAction={ item.downloadAction }
							editLabel={ item.editLabel }
							editAction={ item.editAction }
							deleteLabel={ item.deleteLabel }
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

			{ !freeData && props.update && '' !== props.update && (
				<BoxFooter
					display="block"
					alignment="center"
					paddingTop={ isEmpty ? 0 : 30 }
					border={ isEmpty ? 0 : 1 }
				>
					<p className="sui-description">{ props.update }</p>
				</BoxFooter>
			)}

		</React.Fragment>
	);

	return (
		<React.Fragment>
			<Box>
				<BoxHeader title={ props.title }>
					<div>
						<Button
							icon="upload-cloud"
							label={ props.uploadLabel || 'Upload' }
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
							label={ props.saveLabel || 'Save Config' }
							color="blue"
							onClick={ props.saveNewConfig }
						/>
					</div>
				</BoxHeader>

				<BoxBody>

					{ props.description && (
						<p>{ props.description }</p>
					)}

					{ !isLoading && isEmpty && (
						<Notifications type="info">
							<p>{ props.emptyNotice }</p>
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
								{ props.loadingText }
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
		</React.Fragment>
	);
}