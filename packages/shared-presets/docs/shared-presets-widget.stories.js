import React from 'react';
import { Presets } from '../lib/shared-presets';

export default {
	title: "Presets/Widget",
	component: Presets
}

const demoData = {
	root: '',
	nonce: '',
	apiKey: '',
	hubBaseUrl: '',
	pluginData: {
		pluginName: 'Smush Pro'
	}
};

const demoUrls = {
	freeNoticeHub: 'https://wpmudev.com/hub-welcome/',
	hubMyConfigs: 'https://wpmudev.com/hub2/configs/my-configs',
	configsPage: '#',
	accordionImg: 'https://ps.w.org/wp-smushit/assets/icon-256x256.gif',
}

const demoContent = (
	{
		id: "2",
		default: "advanced",
		name: "Advanced Config",
		description: "Recommended backup advanced config for all site.",
		image: "https://wpmudev.com/wp-content/uploads/2014/11/Smush_2016_02.png",
		config: [
			{
				id: "schedule",
				name: "Schedule",
				content: "Weekly @ 12:00 am on Friday"
			},
			{
				id: "region",
				name: "Region",
				content: "US"
			}
		],
	}
);

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
HasData.args = {
	isWidget: true,
	requestsData: demoData,
	sourceUrls: demoUrls,
	// Below all custom props for demo only.
	setDemoData: true,
	srcDemoData: demoContent
};

export const NoData = Template.bind({});
NoData.storyName = "Empty";
NoData.args = {
	...HasData.args,
	srcDemoData: 'empty',
};