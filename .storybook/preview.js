import React from "react";
import "@wpmudev/shared-ui/dist/css/shared-ui.min.css"; // Get SUI styles.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

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