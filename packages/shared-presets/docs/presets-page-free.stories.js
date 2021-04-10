import React from "react";
import { PresetsPage } from '../lib/shared-presets';
import image2x from './images/hero-smush@2x.png';

export default {
	title: "Presets/Page/Free"
}

const Template = ({ presets, settings, ...args }) => {
    return (
        <PresetsPage {...args}>
            { presets.map( ( preset, index ) => (
                <div key={ index } { ...preset }>
                    <div name="Lazy Load" status="Active" />
                    <div name="CDN" status="Active" />
                    <div name="Super-Smush" status="Active" />
                    <div name="PNG to JPEG Conversion" status="Active" />
                    <div name="Image Resizing" status="Active" />
                </div>
            ) ) }
        </PresetsPage>
    );
};

export const primary = Template.bind({});
primary.storyName = "Default"
primary.args = {
    title: 'Preset Configs',
    message: 'Configs bundle your Smush settings and make them available to download and apply on your other sites.',
    welcomeImage: image2x,
    welcomeMessage: 'Use configs to save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks! You can easily apply configs to multiple sites at once via the Hub.',
    updateMessage: 'Created or updated the configs via the Hub? Re-check to get the updated list.',
    presets: [
        {
            default: true,
            title: 'Basic Config',
            description: 'Recommended performance config for every site.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png'
        },
        {
            title: 'Config Name',
            description: 'Vestibulum id ligula porta felis euismod semper.',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png'
        },
    ],
    free: true,
    freeMessage: 'Tired of saving, downloading and uploading your configs across your sites? WPMU DEV members use The Hub to easily apply configs to multiple sites at once... Try it free today!',
    freeButton: 'Try The Hub'
};
primary.argTypes = {};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {
    ...primary.args,
    presets: []
};
secondary.argTypes = {};