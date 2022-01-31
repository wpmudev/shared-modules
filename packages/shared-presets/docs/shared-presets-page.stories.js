import React from 'react';
import { Presets } from '../lib/shared-presets';

export default {
	title: "Presets/Page",
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

const demoContent = [
	{
		id: "1",
		default: "basic",
		name: "Basic Config",
		description: "Recommended backup config for all site.",
		image: "https://nullclub.com/wp-content/uploads/2016/10/WPMU-Dev-hustle.png",
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
			},
			{
				id: "storage-limit",
				name: "Storage Limit",
				content: "5"
			},
			{
				id: "notifications",
				name: "Notifications",
				content: "Active"
			},
			{
				id: "exclusions",
				name: "Exclusions",
				content: "Active"
			},
			{
				id: "data-and-settings",
				name: "Data & Settings",
				content: "Weekly @ 12:00 am on Friday"
			}
		]
	},
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
		]
	}
];

export const Free = args => <Presets { ...args } />;
Free.storyName = "Free";
Free.args = {
	requestsData: demoData,
	sourceUrls: '',
	sourceLang: '',
	configContent: demoContent,
	isWhitelabel: false,
	isPro: false,
};

export const Pro = args => <Presets { ...args } />;
Pro.storyName = "Pro";
Pro.args = {
	...Free.args,
	isPro: true
};