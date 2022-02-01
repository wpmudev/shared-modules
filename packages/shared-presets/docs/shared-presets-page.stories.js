import React from 'react';
import { Presets } from '../lib/shared-presets';

export default {
	title: "Presets/Page",
	component: Presets
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
		]
	}
);

export const HasData = args => <Presets { ...args } />;
HasData.storyName = "Default";
HasData.args = {
	isPro: true,
	isWhitelabel: false,
	setDemoData: false,
	srcDemoData: demoContent,
	hasDemoData: true,
};

export const NoData = args => <Presets { ...args } />;
NoData.storyName = "Empty";
NoData.args = {
	...HasData.args,
	srcDemoData: 'empty'
};