import React, { Fragment } from 'react';
import { Header, Perks } from '../lib/shared-header';

export default {
	title: 'Header/Demos',
	component: Header
}

const Basic = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props } />
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
Basic.storyName = 'Default';
Basic.args = {
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

const ExtraFeatures = ({ ...props }) => {
	return (
		<Fragment>
			<Header { ...props }>
				<div slot="left">
					<span className="sui-tag sui-tag-purple sui-tag-sm">Pro</span>
				</div>
				<div slot="right">
					<button className="sui-button" onClick={ () => console.log( 'Clear page cache' ) }>Clear Cache</button>
				</div>
				<div slot="modal">
					<Perks title="Unlock other WPMU DEV perks and benefits!">
						<div title="WPMU DEV Hub" icon="logo" suicon={true}>
							Effortlessly  manage unlimited sites from one dashboard.
						</div>
						<div title="Auto Updates" icon="logo" suicon={true}>
							Schedule safe updates for all your plugins and themes.
						</div>
						<div title="Uptime Monitor" icon="logo" suicon={true}>
							Instant downtime alerts and helpful site analytics.
						</div>
						<div title="One Click SSO" icon="logo" suicon={true}>
							Access all your sites from one place with one click.
						</div>
						<div title="White Label Reports" icon="logo" suicon={true}>
							Custom website health reports for clients.
						</div>
						<div title="Secure Site Backups" icon="logo" suicon={true}>
							Including 1GB free WPMU DEV storage.
						</div>
						<div title="Client Billing" icon="logo" suicon={true}>
							A full payment solution for your business.
						</div>
						<div title="Many More Benefits" icon="logo" suicon={true}>
							Many more membership perks and benefits.
						</div>
					</Perks>
				</div>
			</Header>
			<div className="sui-box" style={{ minHeight: 450 }} />
		</Fragment>
	);
}
ExtraFeatures.args = {
	...Basic.args
}

export { Basic, ExtraFeatures }