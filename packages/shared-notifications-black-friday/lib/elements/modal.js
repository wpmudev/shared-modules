import React, { Fragment, useState } from "react";

// Import required elements.
import { Modal } from '@wpmudev/react-modal';
import { InputWithRef } from '@wpmudev/react-input';
import { ButtonIcon } from "@wpmudev/react-button-icon";

// Import required images.
import banner1x from '../images/graffiti.png';
import banner2x from '../images/graffiti@2x.png';

// Create `ModalForm` component.
const ModalForm = ({ closeModal }) => {
	const [isEnabled, setIsEnabled] = useState( false );
	const [isSubscribed, setIsSubscribed] = useState( false );

	const onTyping = e => {
		if ( e.target.value !== '' ) {
			setIsEnabled( true );
		} else {
			setIsEnabled( false );
		}

		e.preventDefault();
	}

	const onClicking = e => {
		setIsSubscribed( true );

		e.preventDefault();
	}

	return (
		<Fragment>
			{ isSubscribed && (
				<Fragment>
					<div className="sui-box-body sui-content-center">
						<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
							Thanks for joining! 🎉
						</h3>

						<p className="sui-description">
							We've sent an email confirming your addition to our VIP list.
							Just make sure it hasn't landed in spam so you don't miss out
							on the epic deals!
						</p>
					</div>

					<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
						<button
							className="sui-button sui-button-blue"
							onClick={ closeModal }>
							Got it
						</button>
					</div>
				</Fragment>
			)}

			{ !isSubscribed && (
				<Fragment>
					<div className="sui-box-body sui-content-center">
						<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
							Get VIP access to our biggest sales
						</h3>

						<p className="sui-description">
							The best WPMU DEV deals, directly to your inbox, all year round.
						</p>

						<InputWithRef
							label="Name"
							onChange={ e => onTyping( e ) } />

						<InputWithRef
							label="Email*"
							onChange={ e => onTyping( e ) } />
					</div>

					<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
						<button
							className="sui-button sui-button-blue"
							{ ...( !isEnabled && { disabled: true } ) }
							onClick={ e => onClicking( e ) }>
							Count me in!
						</button>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
}

// Create `ModalContent` component.
const ModalContent = ({ closeModal }) => {
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

			<ModalForm closeModal={ closeModal } />
		</div>
	);
}

// Create `ModalTrigger` component.
const ModalTrigger = ({ openModal }) => {
	return (
		<p><small>Don't want to claim the offer right now? <button className="suim-black__link" onClick={ openModal }>Sign up for exclusive VIP access to future sales</button>.</small></p>
	);
}

// Export required component.
export { ModalContent, ModalTrigger };