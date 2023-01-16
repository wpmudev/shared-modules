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
				<div slot="modal">
					<p><strong>Unlock other WPMU DEV perks and benefits!</strong></p>
					<ul>
						<li>
							<strong>WPMU DEV Hub</strong><br/>
							Effortlessly  manage unlimited sites from one dashboard.
						</li>
						<li>
							<strong>Auto Updates</strong><br/>
							Schedule safe updates for all your plugins and themes.
						</li>
						<li>
							<strong>Uptime Monitor</strong><br/>
							Instant downtime alerts and helpful site analytics.
						</li>
						<li>
							<strong>One Click SSO</strong><br/>
							Access all your sites from one place with one click.
						</li>
						<li>
							<strong>White Label Reports</strong><br/>
							Custom website health reports for clients.
						</li>
						<li>
							<strong>Secure Site Backups</strong><br/>
							Including 1GB free WPMU DEV storage.
						</li>
						<li>
							<strong>Client Billing</strong><br/>
							A full payment solution for your business.
						</li>
						<li>
							<strong>Many More Benefits</strong><br/>
							Many more membership perks and benefits.
						</li>
					</ul>
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
Primary.argTypes = {}

export { Primary }