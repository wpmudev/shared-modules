import React from "react";
import { NoticeOffer } from "../lib/shared-notifications";

export default {
	title: "Notifications/Notice Offer",
	component: NoticeOffer
}

export const primary = ( args ) => {
	return (
		<NoticeOffer { ...args }>
			<p>We’d hate for free users to miss out on Subscription / Recurring Payment Support, so we’re temporarily slashing the price of Forminator Pro.</p>
		</NoticeOffer>
	);
};
primary.storyName = "Default";
primary.args = {
	title: "Don’t Miss Out On Subscription / Recurring Payment Support",
	price: 65,
	discount: 60,
	imagePath: "https://singlesite.test/wp-content/plugins/forminator/assets/images/",
	imageName: "forminator-create-modal",
	imageExt: "png",
	retinaImage: true,
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
