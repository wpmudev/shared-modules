import React from "react";
import { action } from "@storybook/addon-actions";
import { PresetsWidget, PresetsWidgetItem } from "../lib/shared-configurations";

export default {
	title: "Presets/Widget",
	component: PresetsWidget,
	subcomponents: {
		"Item": PresetsWidgetItem
	}
}

export const primary = ( args, subargs ) => {
	return (
		<PresetsWidget { ...args }>

			<PresetsWidgetItem
				title="Basic config"
				description="Recommended performance config for every site."
				applyLabel="Apply"
				applyAction={ action( "Apply this preset." ) }
				{ ...subargs["PresetsWidgetItem"] }
			>
				<div
					name="Option 1"
					status="Active"
				/>
				<div
					name="Option 2"
					status="Active"
				/>
			</PresetsWidgetItem>

		</PresetsWidget>
	);
}
primary.storyName = "Default";
primary.args = {
	title: "Preset Configs",
	description: "Configs bundle your Smush settings and make them available to download and apply on your other sites.",
	saveLabel: "Save New",
	saveAction: action(
		'You clicked on "Save New" button. Use `saveAction` ' +
		'argument to pass a function that adds a new preset.'
	),
	configsLabel: "Manage Configs",
	configsLink: "/"
};

export const secondary = ( args ) => {
	return (
		<PresetsWidget { ...args }>
		</PresetsWidget>
	);
}
secondary.storyName = "Empty";
secondary.args = {
	title: "Preset Configs",
	description: "Configs bundle your Smush settings and make them available to download and apply on your other sites."
};