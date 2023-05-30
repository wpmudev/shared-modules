import React from "react";
import { NoticeBanner } from "../lib/shared-notifications-banner";
import imageFile1x from "./images/notice-offer.png";
import imageFile2x from "./images/notice-offer@2x.png";

export default {
	title: "Notifications/Banner",
	component: NoticeBanner,
	args: {
		title: "Hosting by the Same People Behind Forminator!",
		image: imageFile1x,
		imageRetina: imageFile2x,
		disclaimer: "Only admin users can see this message",
		buttonLink: 'https://premium.wpmudev.com/',
	},
	argTypes: {
		title: {
			type: {
				name: 'string',
				required: true
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Header'
			}
		},
		image: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body Content'
			}
		},
		imageRetina: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body Content'
			}
		},
		imageAlt: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body Content'
			}
		},
		disclaimer: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body Content'
			}
		},
		buttonLabel: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body CTA'
			}
		},
		buttonLink: {
			type: {
				name: 'string',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Body CTA'
			}
		},
		onCloseClick: {
			action: 'Close Notice',
			table: {
				category: 'Header'
			}
		}
	}
}

export const Banner = ( args ) => {
	return (
		<NoticeBanner { ...args }>
			<p>Unleash the Full Power of Your Site with WPMU DEV Hosting! Lightning-Fast Speed, Robust Security, 24/7 Expert Support, and Effortless Ease of Use. Take Your Sites to the Next Level Today <strong>with 50% off the First Month!</strong></p>
		</NoticeBanner>
	);
};
Banner.storyName = "Banner";
Banner.args = {
	buttonLabel: "Claim Your 50% Off Hosting Now!",
};
