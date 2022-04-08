const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
};

const device = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`
};

const deviceMax = {
	mobile: `(max-width: ${screen.mobile}px)`,
	tablet: `(max-width: ${screen.tablet}px)`,
	laptop: `(max-width: ${screen.laptop}px)`,
	desktop: `(max-width: ${screen.desktop}px)`
};

const utils = {
	gutter: 30,
	gutter_md: 20
};

export { screen, device, deviceMax, utils };
