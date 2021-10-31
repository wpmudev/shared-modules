import React, { useState } from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { BlackFriday } from "./shared-notifications-black-friday__utils";

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
	link,
	onCloseClick,
	sourceLang,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState( false );
	const [isMonochrome, setMonochrome] = useState( false );
	const closeOnClick = e => {
		setIsClose(true);
		if ( 'undefined' !== typeof onCloseClick ) {
			onCloseClick(e);
		}
	};

	const lang = Object.assign({
		discount: '50% Off',
		closeLabel: 'Close',
		linkLabel: 'See the deal'
	}, sourceLang );

	const hasLink = null !== link && '' !== link;

	React.useEffect( () => {
		setMonochrome( checkSuiWrap );
	});

	return (
		!isClose && (
			<>
				<BlackFriday.Global monochrome={ isMonochrome } />
				<div className="sui-module-notice-black-friday__container" { ...props }>

					<ButtonIcon
						color="white"
						icon="close"
						iconSize="md"
						label={ lang.closeLabel }
						onClick={ closeOnClick }
					/>

					<div className="sui-module-notice-black-friday__ribbon">
						{ lang.discount }
					</div>

					<div className="sui-module-notice-black-friday__body">

						<div className="sui-module-notice-black-friday__content">
							{ children }
						</div>

						{ hasLink &&
							<a
								href={ link || '#' }
								target="_blank"
								className="sui-module-notice-black-friday__link"
							>
								{ lang.linkLabel }
							</a>
						}

					</div>

				</div>
			</>
		)
	);
}
