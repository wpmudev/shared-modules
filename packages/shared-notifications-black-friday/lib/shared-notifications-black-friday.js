import React, { useState } from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import { BlackFriday } from "./shared-notifications-black-friday__utils";

export const NoticeBlack = ({
	link,
	onCloseClick,
	sourceLang,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState(false);
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

	return (
		!isClose && (
			<BlackFriday.Container { ...props }>

				<ButtonIcon
					color="white"
					icon="close"
					iconSize="md"
					label={ lang.closeLabel }
					onClick={ closeOnClick }
				/>

				<BlackFriday.Ribbon>{ lang.discount }</BlackFriday.Ribbon>

				<BlackFriday.Body>

					<BlackFriday.Content>
						{ children }
					</BlackFriday.Content>

					{ hasLink &&
						<BlackFriday.Link ctaLink={ link || '#' }>{ lang.linkLabel }</BlackFriday.Link>
					}

				</BlackFriday.Body>

			</BlackFriday.Container>
		)
	);
}
