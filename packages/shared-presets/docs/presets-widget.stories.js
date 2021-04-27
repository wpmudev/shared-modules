import React from "react";
import { PresetsWidget } from '../lib/shared-presets';

export default {
	title: "Presets/Widget"
}

const Template = ({ presets, settings, ...args }) => {
    return (
        <PresetsWidget {...args}>
            { presets && presets.map( ( preset, index ) => (
                <div key={ index } { ...preset }>
                    <div name="Lazy Load" status="Active" />
                    <div name="CDN" status="Active" />
                    <div name="Super-Smush" status="Active" />
                    <div name="PNG to JPEG Conversion" status="Active" />
                    <div name="Image Resizing" status="Active" />
                </div>
            ) ) }
        </PresetsWidget>
    );
};

export const primary = Template.bind({});
primary.storyName = "Default"
primary.args = {
    title: 'Preset Configs',
    message: 'Configs bundle your Smush settings and make them available to download and apply on your other sites.',
	saveLabel: 'Save Configs',
	manageLabel: 'Manage Configs',
    notice: 'You don’t have any available config. Save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks!',
    saveNewConfig: () => console.log( 'Saving new config' ),
	manageConfigsUrl: '#',
	presets: [
        {
			id: 1,
            name: 'Basic Config',
            description: 'Recommended performance config for every site.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
			editAction: () => console.log( 'Editing config' ),
			applyAction: () => console.log( 'Applying config' ),
			deleteAction: () => console.log( 'Deleting config' ),
			downloadAction: () => console.log( 'Downloading config' ),
        },
        {
			id: 2,
            name: 'Config Name',
            description: 'Donec ullamcorper nulla non metus auctor fringilla.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
			editAction: () => console.log( 'Editing config' ),
			applyAction: () => console.log( 'Applying config' ),
			deleteAction: () => console.log( 'Deleting config' ),
			downloadAction: () => console.log( 'Downloading config' ),
        }
    ],
};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {
    ...primary.args,
    presets: []
};
secondary.argTypes = {};