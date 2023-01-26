import React, { Fragment } from 'react';

// Import required component(s).
import { SessionMenu } from './session-menu';

// Build "Connected Session" component.
const SessionOn = ({ name, email, menu, pro }) => {
	return (
		<SessionMenu
			name={name}
			email={email}
			menu={menu}
			pro={pro}>
		</SessionMenu>
	);
}

// Publish required component(s).
export { SessionOn }
