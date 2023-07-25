import React from 'react';
import { Upsells } from '../lib/shared-upsells';

export default {
	title: 'Notifications/Upsells',
	component: Upsells,
};

export const primary = ( args ) => {
	return (
		<div className="sui-row">
			<div className="sui-col-md-6">
				<Upsells { ...args } />
			</div>
		</div>
	);
};
primary.storyName = 'Upsells';
primary.args = {
	titleIcon: 'smart-crawl',
	title: 'Smartcrawl Pro',
	description: 'Get our full Word Press Search Engine Optimization suite with SmartCrawl Pro and the additional benefits of a WPMU DEV Membership.',
	listItems: [
		'Feature description',
		'Feature description',
		'Feature description',
		'Feature description',
		'Feature description'
	],
	buttonLabel: 'Try Pro for free today!',
	buttonUrl: '#'
};