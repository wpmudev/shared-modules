import React from "react";
import { NoticeDiscount } from "../lib/shared-notifications-offer";
import imageFile1x from "./images/notice-offer.png";
import imageFile2x from "./images/notice-offer@2x.png";

export default {
	title: "Notifications/Discount",
	component: NoticeDiscount
}

export const primary = ( args ) => {
	return (
		<NoticeDiscount { ...args }>
			<p>We’d hate for free users to miss out on Subscription / Recurring Payment Support, so we’re temporarily slashing the price of Forminator Pro.</p>
		</NoticeDiscount>
	);
};
primary.storyName = "Discount";
primary.args = {
	title: "Don't Miss Out On Subscription / Recurring Payment Support",
	price: 65,
	discount: 60,
	image: imageFile1x,
	imageRetina: imageFile2x,
	disclaimer: "Only admin users can see this message",
	buttonLabel: "Get 60% Off Forminator Pro",
	buttonLink: "https://premium.wpmudev.com/"
};
primary.argTypes = {
	discount: {
		control: {
			type: "range",
			min: 0,
			max: 100
		}
	}
};
