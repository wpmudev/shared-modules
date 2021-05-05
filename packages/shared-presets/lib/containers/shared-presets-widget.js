import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';

import ApplyModal from '../components/apply-modal';
import DeleteModal from '../components/delete-modal';
import EditModal from '../components/edit-modal';
import { PresetsAccordionItem } from '../components/accordion-item';

export const PresetsWidget = ( {
	configsList,
	applyModalData,
	deleteModalData,
	editModalData,
	...props
} ) => {
	const [ currentConfig, setCurrentConfig ] = React.useState( null );
	const [ isApplyOpen, setIsApplyOpen ] = React.useState( false );
	const [ isDeleteOpen, setIsDeleteOpen ] = React.useState( false );
	const [ isEditOpen, setIsEditOpen ] = React.useState( false );

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

	return (
		<React.Fragment>
			<Box>

				{ ! isEmpty && (
					<BoxHeader
						titleIcon="wrench-tool"
						title={ props.title }
						tagLabel={ configsList.length }
					/>
				)}

				{ isEmpty && (
					<BoxHeader
						titleIcon="wrench-tool"
						title={ props.title }
					/>
				)}

				<BoxBody>

					<p>{ props.description }</p>

					{ isEmpty && (
						<Notifications type="info">
							<p>{ props.emptyNotice }</p>
						</Notifications>
					)}

				</BoxBody>

				{ !isEmpty && (
					<div
						className="sui-accordion sui-accordion-flushed"
						style={ { borderBottom: 0 } }
					>
						{ configsList.map( item => (
							<PresetsAccordionItem
								key={ item.id }
								default={ item.default || false }
								name={ item.name }
								description={ item.description }
								image={ item.image }
								applyLabel={ item.applyLabel }
								applyAction={ () => openModal( 'apply', item ) }
								downloadLabel={ item.downloadLabel }
								downloadAction={ item.downloadAction }
								editLabel={ item.editLabel }
								editAction={ () => openModal( 'edit', item ) }
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

				<BoxFooter>
					<Button
						icon="save"
						label={ props.saveLabel }
						color="blue"
						onClick={ () => openModal( 'edit', null ) }
					/>
					<Button
						icon="wrench-tool"
						label={ props.manageLabel }
						design="ghost"
						href={ props.manageConfigsUrl }
					/>
				</BoxFooter>

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