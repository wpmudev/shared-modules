import React, { useState } from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import {
	Container,
	Ribbon,
	Body,
	Content,
	Link
} from "./utils";

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
			<Container
				className="sui-notice-black-friday"
				{ ...props }
			>

				<ButtonIcon
					color="white"
					icon="close"
					iconSize="md"
					label={ lang.closeLabel }
					onClick={ closeOnClick }
				/>

				<Ribbon>{ lang.discount }</Ribbon>

				<Body>

					<Content>
						{ children }
					</Content>

					{ hasLink &&
						<Link ctaLink={ link || '#' }>{ lang.linkLabel }</Link>
					}

				</Body>

			</Container>
		)
	);
}
