/**
 * External dependencies
 */
import React from 'react';

/**
 * SUI dependencies
 */
import { Modal } from '@wpmudev/react-modal';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { Button } from '@wpmudev/react-button';

const DeleteModal = ( { setOpen, config, save, strings = {} } ) => {
	const {
		closeIcon = 'Close this dialog window',
		title = 'Delete Configuration File',
		description = 'Are you sure you want to delete {configName}? You will no longer be able to apply it to this or other connected sites.',
		cancelButton = 'Cancel',
		actionButton = 'Delete',
	} = strings;

	const [ isSaving, setIsSaving ] = React.useState( false );

	const doAction = () => {
		setIsSaving( true );
		save();
	};

	const modalContent = () => (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					label={ closeIcon }
					icon="close"
					iconSize="md"
					className="sui-button-float--right"
					onClick={ () => setOpen( false ) }
				/>
				<h2 id="smush-config-delete-title">
					{ title }
				</h2>
				<p className="sui-description">
					{ description.replace( '{configName}', config.name) }
				</p>
			</div>
			<div className="sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60">
				<Button
					design="ghost"
					label={ cancelButton }
					onClick={ () => setOpen(false) }
				/>
				<Button
					color="red"
					label={ actionButton }
					onClick={ doAction }
					loading={ isSaving }
				/>
			</div>
		</div>
	);

	return (
		<Modal
			mounted={ true }
			dialogId="sui-configs-delete-modal"
			titleId="sui-config-delete-title"
			size="sm"
			modalContent={ modalContent }
		/>
	);
};

export default DeleteModal;
