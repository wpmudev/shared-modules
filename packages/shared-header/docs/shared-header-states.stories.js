import React, { Fragment } from 'react';
import { Header } from '../lib/shared-header';

export default {
	title: 'Header/States',
	component: Header
}

const Disconnected = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props } />
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Disconnected.args = {
	title: 'Dashboard',
	login: false,
	pro: false,
	sourceUser: {
		name: 'John Doe',
		email: 'johndoe@email.com',
		avatar: ''
	},
	tutorials: {
		label: 'Tutorials',
		href: '',
		target: '_blank',
		cbFunc: () => console.log( 'Show plugin tutorials' )
	},
	sourceUnplug: {
		label: 'Click to connect',
		tooltip: "Hummingbird isn't connected to a WPMU DEV account. Connect to unlock additional free features."
	}
}
Disconnected.argTypes = {}

const Connected = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props } />
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Connected.args = {
	title: 'Dashboard',
	login: true,
	pro: false,
	sourceUser: {
		name: 'John Doe',
		email: 'johndoe@email.com',
		avatar: ''
	},
	tutorials: {
		label: 'Tutorials',
		href: '',
		target: '_blank',
		cbFunc: () => console.log( 'Show plugin tutorials' )
	},
	sourceUnplug: {
		label: 'Click to connect',
		tooltip: "Hummingbird isn't connected to a WPMU DEV account. Connect to unlock additional free features."
	}
}

export { Disconnected, Connected }