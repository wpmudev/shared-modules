import React, { Fragment } from 'react';
import { isUndefined, isEmpty } from './utils';

// Import required component(s).
import { Modal } from '@wpmudev/react-modal';
import { SessionModal } from './session-modal';
import { SessionButton } from './session-button';

// Build "Not Connected Session" component.
const SessionOff = ({ label, tooltip, modal }) => {
	const hasTooltip = !isUndefined(tooltip) && !isEmpty(tooltip) ? true : false;

	const editModal = Object.assign(
		{
			title: '',
			subtitle: '',
			content: ''
		},
		modal
	);

	const contentModal = ({ closeModal }) => {
		return (
			<SessionModal
				title={editModal.title}
				subtitle={editModal.subtitle}
				cbFunc={closeModal}>
				{editModal.content}
			</SessionModal>
		);
	};

	const triggerModal = ({ openModal }) => {
		return <SessionButton login={false} label={{ logout: label }} onClick={ openModal } />;
	}

	const content = (
		<Modal
			dialogId="ssm-session__modal"
			titleId="ssm-session__modal-title"
			size="lg"
			modalContent={ contentModal }
			triggerContent={ triggerModal } />
	);

	return (
		<Fragment>
			{ hasTooltip && (
				<div
					className="sui-tooltip sui-tooltip-constrained sui-tooltip-bottom-right"
					data-tooltip={ tooltip }
					style={{ '--tooltip-width': '200px' }}>
					{ content }
				</div>
			)}

			{ !hasTooltip && content }
		</Fragment>
	);
}

// Publish required component(s).
export { SessionOff }