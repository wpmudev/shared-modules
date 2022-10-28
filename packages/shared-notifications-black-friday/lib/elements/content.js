import React from "react";

// Build "content" component.
const Content = ({ intro, title, price, discount, action, children }) => {
	const hasIntro = !isUndefined( intro ) ? true : false;
	const hasTitle = !isUndefined( title ) ? true : false;

	const ShowPrice = () => {
		const hasPrice = !isUndefined( price ) ? true : false;
		const hasDiscount = !isUndefined( discount ) ? true : false;

		const oldPrice = parseInt( price );
		const newPrice = (oldPrice - (oldPrice * (parseInt( discount ) / 100)));

		if ( hasPrice && hasDiscount ) {
			if ( parseInt( discount ) > 0 ) {
				return (
					<> <s>${ oldPrice }/m</s> <strong>${ newPrice }/m</strong></>
				);
			}
		}

		return '';
	}

	const cta = Object.assign(
		{
			label: 'Get now',
			link: '',
		},
		action
	);

	return (
		<div className="suim-black__promo">
			<div className="suim-black__content">
				{ hasIntro && (
					<span className="suim-black__intro">{ intro }</span>
				)}
				{ hasTitle && (
					<h2 className="suim-black__title">
						{ title }
						<ShowPrice />
					</h2>
				)}
				{ children }
			</div>

			{ '' !== cta.link && (
				<a
					href={ cta.link }
					target="_blank"
					rel="nofollow"
					className="suim-black__button">
					{ cta.label }
				</a>
			)}
		</div>
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
export { Content }