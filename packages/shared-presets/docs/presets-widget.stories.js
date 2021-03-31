import React from "react";
import { PresetsWidget } from '../lib/shared-presets';

export default {
	title: "Presets/Widget"
}

const Template = ({ presets, settings, ...args }) => {
    return (
        <PresetsWidget {...args}>
            { presets.map( ( preset, index ) => (
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
    notice: 'You don’t have any available config. Save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks!',
    presets: [
        {
            title: 'Basic Config',
            description: 'Recommended performance config for every site.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png'
        },
        {
            title: 'Config Name',
            description: 'Donec ullamcorper nulla non metus auctor fringilla.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png'
        }
    ],
};
primary.argTypes = {};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {
    ...primary.args,
    presets: []
};
secondary.argTypes = {};