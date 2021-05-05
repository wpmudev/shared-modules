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

const ApplyModal = ({ setOpen, config, save, strings = {} }) => {
	const {
		closeIcon = 'Close this dialog window',
		title = 'Apply Config',
		description = 'Are you sure you want to apply the {configName} settings config to this site? We recommend you have a backup available as your existing settings configuration will be overridden.',
		cancelButton = 'Cancel',
		actionButton = 'Apply',
	} = strings;

	const [ isSaving, setIsSaving ] = React.useState( false );

	const closeModal = () => {
		setOpen( false );
	};

	const doAction = () => {
		setIsSaving( true );
		save( config, closeModal );
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
				<h2 id="sui-config-edit-title">
					{ title }
				</h2>
				<p className="sui-description">
					{ description }
				</p>
			</div>
			<div className="sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60">
				<Button
					design="ghost"
					label={ cancelButton }
					onClick={ () => setOpen( false ) }
				/>
				<Button
					color="blue"
					icon="check"
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
			dialogId="sui-configs-apply-modal"
			titleId="sui-config-apply-title"
			size="sm"
			modalContent={ modalContent }
		/>
	);
};

export default ApplyModal;
