import React, { Fragment } from 'react';

// Import required component(s).
import { SessionMenu } from './session-menu';

// Build "Connected Session" component.
const SessionOn = ({ name, email, avatar, menu, pro }) => {
	return (
		<SessionMenu
			name={name}
			email={email}
			avatar={avatar}
			menu={menu}
			pro={pro}>
		</SessionMenu>
	);
}

// Publish required component(s).
export { SessionOn }
