const isUndefined = el => {
	return void 0 === el;
}

const isBoolean = el => {
	if ( 'boolean' === typeof el ) {
		return true;
	}

	return false;
}

const isEmpty = el => {
	if ( '' !== el ) {
		return false;
	}

	return true;
}

const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
}

const device = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`
}

export { isUndefined, isBoolean, isEmpty, screen, device }