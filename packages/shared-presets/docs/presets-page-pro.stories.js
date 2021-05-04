import React from "react";
import { PresetsPage } from '../lib/shared-presets';
import image2x from './images/hero-smush@2x.png';

export default {
	title: "Presets/Page/Pro",
    component: PresetsPage,
    parameters: {}
}

const Template = ({ settings, ...args }) => {
    return (
        <PresetsPage {...args} />
    );
};

const defaultConfig = [
	{
		label: 'Lazy Load',
		value: 'Active',
	},
	{
		label: 'CDN',
		value: 'Active',
	},
	{
		label: 'Super-Smush',
		value: 'Inactive',
	},
	{
		label: 'PNG to JPEG',
		value: 'Inactive',
	},
	{
		label: 'Image Resizing',
		value: 'Active',
	},
];

export const primary = Template.bind({});
primary.storyName = "Default"
primary.args = {};
primary.argTypes = {
    title: {
        type: {
            name: 'string',
            required: true
        },
        description: 'Presets Configurations box requires a title.',
        defaultValue: 'Presets Configs',
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
	isLoading: {
        type: {
            name: 'boolean',
            required: false
        },
        description: 'Whether the configurations list is being loaded',
        defaultValue: false,
        control: {
            type: 'boolean'
        }
	},
    loadingText: {
        type: {
            name: 'string',
            required: true
        },
        description: 'The text to be displayed when "loading" is set to "true".',
        defaultValue: 'Updating the config list...',
        control: {
            type: 'text'
        }
    },
    emptyNotice: {
        type: {
            name: 'string',
            required: true
        },
        description: 'Presets Configurations box requires an empty message in case users remove all presets.',
        defaultValue: 'You don’t have any available config. Save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks!',
        table: {
            defaultValue: {
                summary: 'You don’t have any available config. Save preset configurations of Smush’s settings, then upload and apply them to your other sites in just a few clicks!'
            }
        },
        control: {
            type: 'text'
        }
    },
    update: {
        type: {
            name: 'string',
            required: true
        },
        description: 'Presets Configurations box requires a title.',
        defaultValue: <>Created or updated the configs via the Hub? <a href="#">Re-check</a> to get the updated list.</>,
        control: {
            type: 'object'
        }
    },
	saveNewConfig: {
		defaultValue: () => console.log( 'Saving new config' ),
	},
	applyModalData: {
		defaultValue: {
			action: ( configId, closeModal ) => {
				console.log( 'Applying config ' + configId );
				closeModal();
			},
			strings: {},
		},

	},
    configsList: {
        defaultValue: [
            {
				id: 1,
                default: true,
                name: 'Basic Config',
                description: 'Recommended performance config for every site.',
                image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
				config: defaultConfig,
				editAction: () => console.log( 'Editing config' ),
				deleteAction: () => console.log( 'Deleting config' ),
				downloadAction: () => console.log( 'Downloading config' ),
            },
            {
				id: 2,
                name: 'designtest.com / JAN / 2021',
                description: 'Lazy Load, CDN, Super-Smush, PNG to JPEG Conversion, Image Resizing',
                image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
				config: defaultConfig,
				editAction: () => console.log( 'Editing config' ),
				deleteAction: () => console.log( 'Deleting config' ),
				downloadAction: () => console.log( 'Downloading config' ),
            },
        ]
    },
};

export const secondary = Template.bind({});
secondary.storyName = "Empty"
secondary.args = {};
secondary.argTypes = {
    ...primary.argTypes,
    children: {
        defaultValue: []
    },
};