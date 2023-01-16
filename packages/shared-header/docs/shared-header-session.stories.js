import React, { Fragment } from 'react';
import { Header } from '../lib/shared-header';

export default {
	title: 'Header/Session',
	component: Header
}

const Free = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props } />
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Free.args = {
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

const Pro = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props } />
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Pro.args = {
	title: 'Dashboard',
	login: true,
	pro: true,
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

export { Free, Pro }