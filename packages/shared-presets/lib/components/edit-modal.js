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
import { Input } from '@wpmudev/react-input';

const EditModal = ( { setOpen, config, save, strings = {} } ) => {
	const configName = config ? config.name : '',
		configDescription = config ? config.description : '';

	const [ nameValue, setNameValue ] = React.useState( configName );
	const [ descriptionValue, setDescriptionValue ] = React.useState( configDescription );
	const [ errorMessage, setErrorMessage ] = React.useState( false );
	const [ isSaving, setIsSaving ] = React.useState( false );

	const {
		closeIcon = 'Close this dialog window',
		nameInput = 'Config name',
		descriptionInput = 'Description',
		emptyNameError = 'The config name is required',
		actionButton = 'Save',
		cancelButton = 'Cancel',
		editTitle = 'Rename Config',
		editDescription = 'Change your config name to something recognizable.',
		createTitle = 'Save Config',
		createDescription = 'Save your current settings configuration. You’ll be able to then download and apply it to your other sites.'
	} = strings;

	const displayErrorMessage = ( message ) => {
		setErrorMessage( message );
		setIsSaving( false );
	};

	const doAction = () => {
		if ( ! nameValue.trim().length ) {
			setErrorMessage( emptyNameError );
			return;
		}

		setErrorMessage( false );
		setIsSaving( true );

		const data = new FormData();
		data.append( 'name', nameValue );
		data.append( 'description', descriptionValue );

		save( data, displayErrorMessage );
	};

	const modalContent = () => {
		// If a config is provided, we're editing a config. We're saving a new one otherwise.
		const title = config ? editTitle : createTitle,
			description = config ? editDescription : createDescription;

		return (
			<div className="sui-box">
				<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
					<ButtonIcon
						label={ closeIcon }
						icon="close"
						iconSize="md"
						className="sui-button-float--right"
						onClick={ () => setOpen( false ) }
					/>
					<h2 id="sui-config-edit-title">{ title }</h2>
					<p className="sui-description">{ description }</p>
				</div>
				<div className="sui-box-body">
					<div
						role="alert"
						id="configs-edit-modal-error-message"
						className="sui-notice sui-notice-error"
						aria-live="assertive"
						style={ { display: errorMessage ? 'block' : '' } }
					>
						{ errorMessage && (
							<div className="sui-notice-content">
								<div className="sui-notice-message">
									<span
										className="sui-notice-icon sui-icon-info sui-md"
										aria-hidden="true"
									></span>
									<p>{ errorMessage }</p>
								</div>
							</div>
						) }
					</div>

					<Input
						label={ nameInput }
						name="name"
						value={ nameValue }
						onChange={ ( e ) => setNameValue( e.target.value ) }
						maxLength="200"
					/>
					<div className="sui-form-field">
						<label
							className="sui-label"
							htmlFor="sui-edit-config-textarea"
						>
							{ descriptionInput }
						</label>
						<textarea
							id="sui-edit-config-textarea"
							className="sui-form-control"
							name="description"
							value={ descriptionValue }
							onChange={ ( e ) => setDescriptionValue( e.target.value ) }
							maxLength="200"
						/>
					</div>
				</div>
				<div className="sui-box-footer sui-content-separated sui-flatten sui-spacing-top--0">
					<Button
						design="ghost"
						label={ cancelButton }
						onClick={ () => setOpen( false ) }
					/>
					<Button
						color="blue"
						icon="save"
						label={ actionButton }
						onClick={ doAction }
						loading={ isSaving }
					/>
				</div>
			</div>
		);
	};

	return (
		<Modal
			mounted={ true }
			dialogId="sui-configs-edit-modal"
			titleId="sui-config-edit-title"
			size="sm"
			modalContent={ modalContent }
		/>
	);
};

export default EditModal;
