import React from 'react';
import { isUndefined, isEmpty } from './utils';

// Import required components.
import { ButtonIcon } from '@wpmudev/react-button-icon';

// Import required assets.
import Banner1x from '../images/upgrade-banner.png';
import Banner2x from '../images/upgrade-banner@2x.png';

// Build "Session Modal" component.
const SessionModal = ({ title, subtitle, cbFunc = () => {}, children }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<figure className="sui-box-banner" aria-hidden="true">
					<img
						src={ Banner1x }
						srcSet={`${Banner1x} 1x, ${Banner2x} 2x`}
						alt="Upgrade to WPMU DEV Pro" />
				</figure>

				<ButtonIcon icon="close" label="Close modal" color="white" className="sui-button-float--right" onClick={ cbFunc } />

				{ !isUndefined(title) && !isEmpty(title) && (
					<h3 id="ssm-session__modal-title" className="sui-box-title sui-lg">
						{title}
					</h3>
				)}

				{ !isUndefined(subtitle) && !isEmpty(subtitle) && (
					<p className="sui-description">
						{subtitle}
					</p>
				)}
			</div>

			<div className="sui-box-body">
				{ children }
			</div>
		</div>
	);
}

// Publish required component(s).
export { SessionModal }