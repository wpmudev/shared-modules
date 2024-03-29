import React from 'react';
import { TutorialsSlider } from '../lib/shared-tutorials-slider';

// Import documentation.
import Documentation from '../README.md';

const plugins = {
	smush: '11228',
	hustle: '11235',
	defender: '11231',
	forminator: '11232',
	smartcrawl: '11238',
	hummingbird: '11234'
};

export default {
	title: 'Tutorials/Slider',
	component: TutorialsSlider,
	argTypes: {
		category: {
			type: {
				required: true
			},
			control: {
				type: 'select',
				default: '11231',
				options: plugins,
			},
		}
	}
}

const defender = '11231';

export const primary = ( args ) => <TutorialsSlider { ...args } />;
primary.storyName = 'Slider';
primary.args = {
	title: 'Tutorials',
	category: defender,
	viewAll: 'https://premium.wpmudev.org/',
	postLinkParams: '',
	skipTo: '#storybook-panel-root',
};
primary.parameters = {
	notes: Documentation
}
