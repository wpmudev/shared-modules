import React, { Fragment } from "react";

// Import required elements.
import { Modal } from '@wpmudev/react-modal';
import { ButtonIcon } from "@wpmudev/react-button-icon";

// Import required images.
import banner1x from '../images/graffiti.png';
import banner2x from '../images/graffiti@2x.png';

// Create `ModalForm` component.
const ModalForm = ({
	formView,
	successView,
	closeModal,
	...args
}) => {
	const formObj = Object.assign(
		{
			title: 'Get VIP access to our biggest sales',
			description: 'The best WPMU DEV deals, directly to your inbox, all year round.',
			hasForm: false,
			content: '',
			fields: '',
			submit: '',
		},
		formView
	);

	const successObj = Object.assign(
		{
			enabled: false,
			title: 'Thanks for joining! 🎉',
			description: "We've sent an email confirming your addition to our VIP list. Just make sure it hasn't landed in spam so you don't miss out on the epic deals!",
			content: '',
			close: 'Got it',
		},
		successView
	);

	return (
		<Fragment>
			{ successObj.enabled && (
				<Fragment>
					<div className="sui-box-body sui-content-center">
						<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
							{ successObj.title }
						</h3>

						<p className="sui-description">
							{ successObj.description }
						</p>
					</div>

					<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
						<button
							className="sui-button sui-button-blue"
							onClick={ closeModal }>
							{ successObj.close }
						</button>
					</div>
				</Fragment>
			)}

			{ ( !successObj.enabled && !formObj.hasForm ) && (
				<Fragment>
					<div className="sui-box-body sui-content-center">
						<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
							{ formObj.title }
						</h3>

						{ !isUndefined( formObj.description ) && (
							<p className="sui-description">
								{ formObj.description }
							</p>
						)}

						{ !isUndefined( formObj.content ) && formObj.content }
					</div>
				</Fragment>
			)}

			{ ( !successObj.enabled && formObj.hasForm ) && (
				<form { ...args }>
					<div className="sui-box-body sui-content-center">
						<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
							{ formObj.title }
						</h3>

						{ !isUndefined( formObj.description ) && (
							<p className="sui-description">
								{ formObj.description }
							</p>
						)}

						{ !isUndefined( formObj.content ) && formObj.content }

						{ formObj.hasForm && !isUndefined( formObj.fields ) && formObj.fields }
					</div>

					{ formObj.hasForm && !isUndefined( formObj.submit ) && (
						<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
							{ formObj.submit }
						</div>
					)}
				</form>
			)}
		</Fragment>
	);
}

// Create `ModalContent` component.
const ModalContent = ({ formView, successView, closeModal, ...args }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60 sui-spacing-bottom--0">
				<ButtonIcon
					icon="close"
					iconSize="md"
					color="white"
					label="Close this modal"
					className="sui-button-float--right"
					onClick={ closeModal } />

				<figure
					className="sui-box-banner"
					style={{ marginBottom: 0 }}
					aria-hidden="true">
					<img
						src={ banner1x }
						srcSet={`${ banner1x } 1x, ${ banner2x } 2x`}
						alt="Black Friday graffiti banner"
						aria-hidden="true" />
				</figure>
			</div>

			<ModalForm
				formView={ formView }
				successView={ successView }
				closeModal={ closeModal }
				{ ...args } />
		</div>
	);
}

// Create `ModalTrigger` component.
const ModalTrigger = ({ label, action, openModal }) => {
	const hasLabel = !isUndefined( label ) ? true : false;
	const hasAction = !isUndefined( action ) ? true : false;

	return (
		<Fragment>
			{ ( !isUndefined( label ) || !isUndefined( action ) ) && (
				<p><small>
					{ !isUndefined( label ) && label }
					{ !isUndefined( action ) && (
						<Fragment>
							&nbsp;
							<button
								className="suim-black__link"
								onClick={ openModal }>
								{ action }
							</button>
						</Fragment>
					)}
				</small></p>
			)}
		</Fragment>
	);
}

// Check if element is undefined.
const isUndefined = (element, type = null) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;
	const isNumber = 'number' === type;
	const isBoolean = 'boolean' === type;

	// Check if element exists.
	if ( element && isValid && isNotEmpty ) {

		if ( isNumber ) {
			if ( Number.isNaN( element ) ) {
				return true;
			} else {
				return false;
			}
		} else if ( isBoolean ) {
			if ( 'boolean' === typeof element ) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

	return true;
}

// Export required component.
export { ModalContent, ModalTrigger };