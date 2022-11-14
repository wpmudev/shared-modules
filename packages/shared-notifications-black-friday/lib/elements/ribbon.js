import React from 'react';

// Build "ribbon" component.
const Ribbon = ({ discount, sourceLang }) => {
	const hasDiscount = !isUndefined( Math.floor( discount ) ) ? true : false;
	const setDiscount = !isUndefined( Math.floor( discount ) ) ? discount.toString() + '%' : 0;
	const lang = Object.assign(
		{
			off: 'Off'
		},
		sourceLang
	);

	return (
		<>
			{( hasDiscount ) && (
				<div className="suim-black__ribbon">
					<span>{ setDiscount }</span>
					<span>{ lang.off }</span>
				</div>
			)}
		</>
	);
}

// Check if element is undefined.
const isUndefined = (element, type = null) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;
	const isNumber = 'number' === type;
	const isBoolean = 'boolean' === type;

	// Check if element exists.
	if ( element && isValid && isNotEmpty ) {

		if ( isNumber ) {
			if ( Number.isNaN( element ) ) {
				return true;
			} else {
				return false;
			}
		} else if ( isBoolean ) {
			if ( 'boolean' === typeof element ) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

	return true;
}

// Publish required component(s).
export { Ribbon }