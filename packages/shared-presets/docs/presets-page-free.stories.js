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
        description: 'Presets Configurations box requires a title.',
        table: {
            defaultValue: {
                summary: 'Presets Configs'
            }
        },
        control: {
            type: 'text'
        }
    },
    description: {
        type: {
            name: 'string',
            required: false
        },
        description: 'A description might be necessary to let users know what the component is about.',
        defaultValue: 'Configs bundle your Smush settings and make them available to download and apply on your other sites.',
        control: {
            type: 'text'
        }
    },
    welcome: {
        type: {
            name: 'object',
            required: false
        },
        description: 'Welcome message is a blue notification with dismiss property. To show this element, `message` variable is required. Use `image` variable to show an image next to message.',
        defaultValue: {
            image: image2x,
            message: 'Use configs to save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks! You can easily apply configs to multiple sites at once via the Hub.'
        }
    },
    free: {
        type: {
            name: 'object',
            required: true
        },
        description: '. . .',
        defaultValue: {
            state: true,
            message: 'Tired of saving, downloading and uploading your configs across your sites? WPMU DEV members use The Hub to easily apply configs to multiple sites at once... Try it free today!',
            button: 'Try The Hub'
        }
    },
};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {
    ...primary.args,
    presets: []
};
secondary.argTypes = {};