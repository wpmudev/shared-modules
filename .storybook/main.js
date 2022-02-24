module.exports = {
	stories: ["../packages/**/*.stories.js"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-actions",
		"@storybook/addon-essentials",
		"@storybook/addon-outline",
		"@storybook/addon-a11y",
		"storybook-mobile",
		"@geometricpanda/storybook-addon-badges"
	],
	core: {
		builder: "webpack5"
	}
};
