import React from "react";
import { NoticeDiscount } from "../lib/shared-notifications-discount";
import imageFile1x from "./images/notice-offer.png";
import imageFile2x from "./images/notice-offer@2x.png";

export default {
	title: "Notifications/Discount",
	component: NoticeDiscount,
	args: {
		price: 65,
		title: "Don't Miss Out On Subscription / Recurring Payment Support",
		image: imageFile1x,
		imageRetina: imageFile2x,
		disclaimer: "Only admin users can see this message",
		priceLabel: 'Pay Only',
		priceTime: 'month',
		buttonLink: 'https://premium.wpmudev.com/',
	},
	argTypes: {
		price: {
			type: {
				name: 'number',
				required: true
			},
			description: '',
			control: {
				type: 'number'
			},
			table: {
				category: 'Pricing'
			}
		},
		priceLabel: {
			type: {
				name: 'text',
				required: false,
			},
			description: '',
			control: {
				type: 'text',
			},
			table: {
				category: 'Pricing'
			}
		},
		priceTime: {
			type: {
				name: 'text',
				required: false,
			},
			description: '',
			control: {
				type: 'text',
			},
			table: {
				category: 'Pricing'
			}
		},
		discount: {
			type: {
				name: 'number',
				required: false
			},
			description: '',
			control: {
				type: "range",
				min: 0,
				max: 100
			},
			table: {
				category: 'Pricing'
			}
		},
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
				category: 'Body Pricing'
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
				category: 'Body Pricing'
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

export const WithDiscount = ( args ) => {
	return (
		<NoticeDiscount { ...args }>
			<p>We’d hate for free users to miss out on Subscription / Recurring Payment Support, so we’re temporarily slashing the price of Forminator Pro.</p>
		</NoticeDiscount>
	);
};
WithDiscount.storyName = "With Discount";
WithDiscount.args = {
	discount: 65,
	buttonLabel: "Get 60% Off Forminator Pro",
};

export const WithoutDiscount = ( args ) => {
	return (
		<NoticeDiscount { ...args }>
			<p>We’d hate for free users to miss out on Subscription / Recurring Payment Support, so we’re temporarily slashing the price of Forminator Pro.</p>
		</NoticeDiscount>
	);
};
WithoutDiscount.storyName = "Without Discount";
WithoutDiscount.args = {
	discount: 0,
	buttonLabel: "Get Forminator Pro",
};
