import React, { Fragment } from "react";
import { isBoolean, isEmpty, isUndefined } from './utils';

// Import required component(s).
import { Modal } from '@wpmudev/react-modal';
import { Button } from '@wpmudev/react-button';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { SessionModal } from './session-modal';

// Build "External Session" component.
const SessionExternal = ({ login, label, sourceModal, children, ...props }) => {
	const connected = isBoolean(login) && login ? true : false;
	const hasLabel = !isUndefined(label) && !isEmpty(label) ? true : false;
	const hasIcon = !isUndefined(props.icon) && !isEmpty(props.icon) ? true : false;
	const type = !isUndefined(props.type) && !isEmpty(props.type) ? props.type : '';

	const editModal = Object.assign(
		{
			title: 'Connect to your WPMU DEV account',
			subtitle: 'Connect to WPMU DEV to unlock features for free.'
		},
		sourceModal
	)

	const contentModal = ({ closeModal }) => {
		return (
			<SessionModal
				title={editModal.title}
				subtitle={editModal.subtitle}
				cbFunc={closeModal}>
				{ children }
			</SessionModal>
		);
	}

	const triggerModal = ({ openModal }) => {
		if ( hasIcon && 'icon' === type ) {
			return <ButtonIcon label={ label } onClick={ openModal } { ...props } />;
		}
		return <Button label={ hasLabel ? label : 'Click Here' } onClick={ openModal } { ...props } />;
	}

	return (
		<Fragment>
			{ !connected && (
				<Modal
					dialogId="ssm-session__modal"
					titleId="ssm-session__modal-title"
					size="lg"
					modalContent={ contentModal }
					triggerContent={ triggerModal } />
			)}
		</Fragment>
	);
}

// Publish required component(s).
export { SessionExternal }
