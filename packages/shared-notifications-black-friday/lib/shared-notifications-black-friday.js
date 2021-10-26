import React, { useState } from "react";
import { ButtonIcon } from "@wpmudev/react-button-icon";
import {
	Container,
	Ribbon,
	Body,
	Content,
	Button
} from "./utils";

export const NoticeBlack = ({
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
		close: 'Close',
		off: 'Off',
		cta: 'See the deal'
	}, sourceLang );

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
					label={ lang.close }
					onClick={ closeOnClick }
				/>

				<Ribbon>50% { lang.off }</Ribbon>

				<Body>

					<Content>
						{ children }
					</Content>

					<Button>{ lang.cta }</Button>

				</Body>

			</Container>
		)
	);
}
