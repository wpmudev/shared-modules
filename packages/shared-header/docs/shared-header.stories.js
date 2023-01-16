import React, { Fragment } from 'react';
import { Header } from '../lib/shared-header';

export default {
	title: 'Header',
	component: Header
}

const Primary = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props }>
				<div slot="left">
					<span className="sui-tag sui-tag-purple sui-tag-sm">Pro</span>
				</div>
				<div slot="right">
					<button className="sui-button" onClick={ () => console.log( 'Clear page cache' ) }>Clear Cache</button>
				</div>
			</Header>
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Primary.storyName = 'Header';
Primary.args = {
	title: 'Dashboard',
	login: false,
	pro: false,
	user: {
		name: 'John Doe',
		email: 'johndoe@email.com'
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
Primary.argTypes = {}

export { Primary }