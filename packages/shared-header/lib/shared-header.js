import React, { Fragment, Children } from 'react';
import { isUndefined, isEmpty } from './components/utils';

// Import required component(s).
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { SessionContent } from './components/session-content';
import { SessionList as Perks } from './components/session-list';

const Header = ({
	title,
	login,
	pro,
	tutorials,
	sourceUser,
	sourceModal,
	sourceUnplug,
	sourceMenu,
	children
}) => {
	const unplug = Object.assign(
		{
			label: 'Click to connect',
			tooltip: ''
		},
		sourceUnplug
	);

	const user = Object.assign(
		{
			name: '',
			email: '',
			avatar: ''
		},
		sourceUser
	);

	const tuts = Object.assign(
		{
			label: 'Tutorials',
			href: '',
			target: '_blank',
			cbFunc: ''
		},
		tutorials
	);

	const contentTuts = (
		<Fragment>
			{ !isEmpty(tuts.cbFunc) && (
				<ButtonIcon icon="academy" label={tuts.label} onClick={tuts.cbFunc} />
			)}

			{ (isEmpty(tuts.cbFunc) && !isEmpty(tuts.href)) && (
				<ButtonIcon icon="academy" label={tuts.label} href={tuts.href} target={tuts.target} />
			)}
		</Fragment>
	);

	const contentLeft = Children.map( children, ( child, index ) => {
		if ( 'left' === child.props.slot ) {
			return (
				<div key={index} className="sui-actions-left">
					{child.props.children}
				</div>
			);
		}

		return '';
	});

	const contentRight = Children.map( children, ( child, index ) => {
		if ( 'right' === child.props.slot ) {
			return (
				<Fragment key={index}>
					{child.props.children}
				</Fragment>
			);
		}

		return '';
	});

	const contentModal = Children.map( children, ( child, index ) => {
		if ( 'modal' === child.props.slot ) {
			return (
				<Fragment key={index}>
					{child.props.children}
				</Fragment>
			);
		}

		return '';
	});

	const modal = Object.assign(
		{
			title: 'Connect to your WPMU DEV account',
			subtitle: 'Connect to WPMU DEV to unlock features for free.',
			content: contentModal
		},
		sourceModal
	);

	return (
		<div className="sui-header">
			{(!isUndefined(title) && !isEmpty(title)) && (
				<h1 className="sui-header-title">{ title }</h1>
			)}

			{ contentLeft }

			<div className="sui-actions-right">
				{ contentRight }
				{ contentTuts }
				<SessionContent
					login={login}
					pro={pro}
					plugin={plugin}
					landing={landing}
					user={user}
					modal={modal}
					menu={sourceMenu}
					lang={{
						plug: {},
						unplug: {
							label: unplug.label,
							tooltip: unplug.tooltip
						}
					}} />
			</div>
		</div>
	);
}

export { Header, Perks }