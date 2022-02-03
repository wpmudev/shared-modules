import React from 'react';
import { Presets } from '../lib/shared-presets';
import { demoData, demoUrls, demoContent } from './demo-data';

export default {
	title: "Presets/Widget",
	component: Presets,
	args: {
		isWidget: true,
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

const Template = args => {
	return (
		<div className="sui-row">
			<div className="sui-col-md-6">
				<Presets { ...args } />
			</div>
		</div>
	);
};

export const HasData = Template.bind({});
HasData.storyName = "Default";

export const NoData = Template.bind({});
NoData.storyName = "Empty";
NoData.args = {
	srcDemoData: 'empty',
};