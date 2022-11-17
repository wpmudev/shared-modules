import React, { Fragment, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '@wpmudev/react-modal';
import { Input, InputWithRef } from '@wpmudev/react-input';
import { Button } from "@wpmudev/react-button";
import { ButtonIcon } from "@wpmudev/react-button-icon";

import banner1x from '../images/graffiti.png';
import banner2x from '../images/graffiti@2x.png';

export const ModalContent = ({ closeModal }) => {
	const { isSubscribed, setIsSubscribed } = useState( false );
	const inputValue = React.useRef( null );
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	// const onSubmit = ( data, e ) => {
	// 	setIsSubscribed( true );
	// 	// e.target.reset();
	// 	console.log( "RESULT", data );
	// 	// alert( JSON.stringify( data ) );
	// 	e.preventDefault();
	// };

	const onSubmit = (data, e) => console.log(data, e);
	const onError = (errors, e) => console.log(errors, e);

	const ModalForm = () => {

		return (
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<div className="sui-box-body">
					{/* <InputWithRef
						id="suim-black__form-name"
						label="Name"
						placeholder="John Doe"
						ref={ register }
						inputRef={ register }
						{ ...register( 'fullname' ) } /> */}

					<InputWithRef
						id="suim-black__form-email"
						label="Email"
						placeholder="johndoe@gmail.com"
						ref={ inputValue }
						inputRef={ register }
						{ ...register( 'email', { required: true } ) } />
				</div>

				<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
					<Button
						type="submit"
						color="blue"
						label="Count me in!" />
				</div>
			</form>
		);
	}

	const ModalSuccess = () => {
		return (
			<Fragment>
				<div className="sui-box-body">
					<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
						Thanks for joining! 🎉
					</h3>

					<p className="sui-description">We've sent an email confirming your addition to our VIP list. Just make sure it hasn't landed in spam so you don't miss out on the epic deals!</p>
				</div>

				<div className="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
					<Button
						color="blue"
						label="Got it"
						onClick={ closeModal } />
				</div>
			</Fragment>
		);
	}

	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					icon="close"
					iconSize="md"
					color="white"
					label="Close this modal"
					className="sui-button-float--right"
					onClick={ closeModal } />

				<figure className="sui-box-banner" aria-hidden="true">
					<img
						src={ banner1x }
						srcSet={`${ banner1x } 1x, ${ banner2x } 2x`}
						alt="Black Friday graffiti banner"
						aria-hidden="true" />
				</figure>

				<h3 id="suim-black__modal-title" className="sui-box-title sui-lg">
					Get VIP access to our biggest sales
				</h3>

				<p className="sui-description">The best WPMU DEV deals, directly to your inbox, all year round.</p>
			</div>

			<Fragment>
				{ isSubscribed
					? <ModalSuccess />
					: <ModalForm />
				}
			</Fragment>

					{/* <Input
						id="suim-black__form-name"
						label="Name"
						placeholder="John Doe"
						{ ...register( 'fullname' ) } /> */}

					{/* <Input
						id="suim-black__form-email"
						label="Email*"
						description="By clicking below I consent to receiving WPMU DEV's best deals & news! They hate spam and will always respect my privacy. ☺️"
						placeholder="johndoe@gmail.com"
						{ ... ( errors.email && { errorStatus: true } ) }
						errorDescription="Please enter a valid email address."
						onChange={ e => handleChange( e ) }
						{ ...register( 'email', {
							required: true,
							pattern: emailRegex
						  })} /> */}
		</div>
	);
}

export const ModalTrigger = ({ openModal }) => {
	return (
		<p><small>Don't want to claim the offer right now? <button className="suim-black__link" onClick={ openModal }>Sign up for exclusive VIP access to future sales</button>.</small></p>
	);
}