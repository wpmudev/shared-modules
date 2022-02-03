import React from 'react';
import { Presets } from '../lib/shared-presets';
import { demoData, demoUrls, demoContent } from './demo-data';

export default {
	title: "Presets/Page",
	component: Presets,
	args: {
		isPro: true,
		isWhitelabel: false,
		requestsData: demoData,
		sourceUrls: demoUrls,
		sourceLang: {},
		// Below all custom props for demo only.
		setDemoData: true,
		srcDemoData: demoContent
	},
	argTypes: {
		// Hide custom props for demo from the controls table.
		setDemoData: {
			table: {
				disable: true
			}
		},
		srcDemoData: {
			table: {
				disable: true
			}
		}
	},
}

export const HasData = args => <Presets { ...args } />;
HasData.storyName = "Default";

export const NoData = args => <Presets { ...args } />;
NoData.storyName = "Empty";
NoData.args = {
	srcDemoData: 'empty'
};