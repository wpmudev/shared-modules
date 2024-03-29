import React, { Fragment } from 'react';
import { Header, Button, Perks } from '../lib/shared-header';

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
	const modalContent = (
		<Perks title="Unlock other WPMU DEV perks and benefits!">
			<div title="WPMU DEV Hub" icon="logo" suicon={true}>
				Effortlessly  manage unlimited sites from one dashboard.
			</div>
			<div title="Auto Updates" icon="refresh" suicon={true}>
				Schedule safe updates for all your plugins and themes.
			</div>
			<div title="Uptime Monitor" icon="chart" suicon={true}>
				Instant downtime alerts and helpful site analytics.
			</div>
			<div title="One Click SSO" icon="check" suicon={true}>
				Access all your sites from one place with one click.
			</div>
			<div title="White Label Reports" icon="email" suicon={true}>
				Custom website health reports for clients.
			</div>
			<div title="Secure Site Backups" icon="shield-check" suicon={true}>
				Including 1GB free WPMU DEV storage.
			</div>
			<div title="Client Billing" icon="user-alt" suicon={true}>
				A full payment solution for your business.
			</div>
			<div title="Many More Benefits" icon="add" suicon={true}>
				Many more membership perks and benefits.
			</div>
		</Perks>
	);

	return (
		<Fragment>
			<Header { ...props }>
				<div slot="left">
					{ props.pro && <span className="sui-tag sui-tag-purple sui-tag-sm">Pro</span> }
				</div>
				<div slot="right">
					<button className="sui-button" onClick={ () => console.log( 'Clear page cache' ) }>Clear Cache</button>
				</div>
				<div slot="modal">
					{ modalContent }
				</div>
			</Header>
			<div className="sui-box" style={{ minHeight: 450, padding: 30 }}>
				{'button' === props.variations && (
					<Button label="Try Now" login={ props.login }>
						{ modalContent }
					</Button>
				)}

				{'button-icon-label' === props.variations && (
					<Button label="Try Now" icon="plus" color="blue" login={ props.login }>
						{ modalContent }
					</Button>
				)}

				{'button-icon' === props.variations && (
					<Button label="Try Now" icon="plus" type="icon" color="blue" login={ props.login }>
						{ modalContent }
					</Button>
				)}

				{'toggle' === props.variations && (
					<Button toggle={ true } login={ props.login }>
						{ modalContent }
					</Button>
				)}

				{'toggle-label' === props.variations && (
					<Button toggle={ true } label="Label" login={ props.login }>
						{ modalContent }
					</Button>
				)}

				{'toggle-label-description' === props.variations && (
					<Button toggle={ true } label="Label" description="This is a description." login={ props.login }>
						{ modalContent }
					</Button>
				)}
			</div>
		</Fragment>
	);
}
ExtraFeatures.args = {
	...Basic.args,
	variations: 'button'
}

ExtraFeatures.argTypes = {
	variations: {
		name: 'Button Variations',
		control : {
			type: 'select',
			options: {
				'Button with label': 'button',
				'Button with icon only': 'button-icon',
				'Button with icon and label': 'button-icon-label',
				'Toggle': 'toggle',
				'Toggle with label': 'toggle-label',
				'Toggle with label and description': 'toggle-label-description'
			}
		}
	}
}

export { Basic, ExtraFeatures }