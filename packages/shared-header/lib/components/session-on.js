import React, { Fragment } from 'react';

// Import required component(s).
import { SessionMenu } from './session-menu';

// Build "Connected Session" component.
const SessionOn = ({ name, email, landing, pro }) => {
	return (
		<SessionMenu
			name={name}
			email={email}
			pro={pro}
			landing={landing}>
		</SessionMenu>
	);
}

// Publish required component(s).
export { SessionOn }
