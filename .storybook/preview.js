import React from "react";
import "@wpmudev/shared-ui/dist/css/shared-ui.min.css"; // Get SUI styles.

// Edit parameters.
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "WordPress",
		values: [
			{
				name: "WordPress",
				value: "#f1f1f1"
			}
		]
	},
};

// Edit "preview" markup.
const Wrapper = ({ children }) => {
	return (
		<div className="sui-2-10-4">
			<div className="sui-wrap">
				{ children }
			</div>
		</div>
	);
};

export const decorators = [
	( Story ) => (
		<Wrapper>
			<Story />
		</Wrapper>
	),
];