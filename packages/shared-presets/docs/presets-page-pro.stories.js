import React from "react";
import { PresetsPage } from '../lib/shared-presets';
import image2x from './images/hero-smush@2x.png';

export default {
	title: "Presets/Page/Pro",
    component: PresetsPage,
    parameters: {}
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
};
primary.argTypes = {
    title: {
        type: {
            name: 'string',
            required: true
        },
        description: '...',
        defaultValue: 'Preset Configs',
        control: {
            type: 'text'
        }
    },
    message: {
        type: {
            name: 'string',
            required: true
        },
        description: '...',
        defaultValue: 'Configs bundle your Smush settings and make them available to download and apply on your other sites.',
        control: {
            type: 'text'
        }
    },
    welcome: {
        name: 'welcome',
        type: {
            name: 'object',
            required: false
        },
        description: '...',
        defaultValue: {
            image: image2x,
            message: 'Use configs to save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks! You can easily apply configs to multiple sites at once via the Hub.'
        },
        control: {
            type: 'object'
        }
    },
    update: {
        name: 'update',
        type: {
            name: 'object',
            required: true
        },
        description: '...',
        defaultValue: null,
        control: {
            type: 'object'
        }
    },
};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {
    ...primary.args
};
secondary.argTypes = {};