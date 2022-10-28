import React, { useState } from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { BlackFriday } from "./shared-notifications-black-friday__utils";

// Import required elements.
import { Ribbon } from './elements/ribbon';
import { Content } from './elements/content';

// Import required styles.
import './shared-notifications-black-friday.css';

function checkRTL() {
	const suiBody = document.body;
	const hasLang = suiBody.hasAttribute( 'dir' );
	const getLang = suiBody.getAttribute( 'dir' );

	if ( hasLang && 'rtl' === getLang ) {
		return true;
	}

	return false;
}

function checkSuiWrap() {
	const suiWrap = document.querySelectorAll( '.sui-wrap' );

	for ( let i = 0; i < suiWrap.length; i++ ) {

		if ( suiWrap[i].classList.contains( 'sui-color-accessible' ) ) {
			return true;
		}
	}

	return false;
}

export const NoticeBlack = ({
	price,
	discount,
	action,
	content,
	onCloseClick,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState( false );
	const [isRTL, setRTL] = useState( false );
	const [isMonochrome, setMonochrome] = useState( false );
	const closeOnClick = e => {
		setIsClose(true);
		if ( 'undefined' !== typeof onCloseClick ) {
			onCloseClick(e);
		}
	};

	const lang = Object.assign(
		{
			off: 'Off',
			intro: '',
			title: '',
			close: 'Close',
		},
		content
	);

	const hasIntro = !isUndefined( lang.intro ) ? true : false;
	const hasTitle = !isUndefined( lang.title ) ? true : false;
	const hasPrice = !isUndefined( price, 'number' ) ? true : false;
	const hasDiscount = !isUndefined( discount, 'number' ) ? true : false;

	React.useEffect( () => {
		setRTL( checkRTL )
		setMonochrome( checkSuiWrap );
	});

	return (
		!isClose && (
			<>
				<BlackFriday.Global rtl={ isRTL } monochrome={ isMonochrome } />
				<div className="suim-black" { ...props }>
					<ButtonIcon
						color="white"
						icon="close"
						iconSize="md"
						label={ lang.close }
						onClick={ closeOnClick }
					/>

					{ hasDiscount && (
						<Ribbon
							sourceLang={{
								off: lang.off
							}}
							{ ... ( hasDiscount && { discount: discount } ) } />
					)}

					<Content
						action={ action }
						{ ... ( hasIntro && { intro: lang.intro } ) }
						{ ... ( hasTitle && { title: lang.title } ) }
						{ ... ( hasPrice && { price: price } ) }
						{ ... ( hasDiscount && { discount: discount } ) }>
						{ children }
					</Content>

				</div>
			</>
		)
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
