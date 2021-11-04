import React from 'react'
import { Presets } from '../lib/shared-presets'


export default {
    title: "Component/Presets",
	component: Presets,
    args: {
        isWidget: true,
        isPro: true,
        isWhitelabel: true,
        requestsData: {
            root: '',
            nonce: '',
            apiKey: '',
            hubBaseUrl: '',
            pluginData: {
                pluginName: 'Smush Pro',
            }
        },
        sourceUrls: '',
        sourceLang: '',
    },

    argTypes: {},
}

export const primary = (args) => <Presets {...args} />