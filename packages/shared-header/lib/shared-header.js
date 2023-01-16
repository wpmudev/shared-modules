import React, { Fragment, Children } from 'react';
import { isUndefined, isEmpty } from './components/utils';

// Import required component(s).
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { SessionContent } from './components/session-content';

const Header = ({ title, login, pro, user = {}, tutorials, sourceUnplug, children }) => {
	const unplug = Object.assign(
		{
			label: 'Click to connect',
			tooltip: ''
		},
		sourceUnplug
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
					user={user}
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

export { Header }