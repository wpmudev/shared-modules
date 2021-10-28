import React, { useState } from "react";
import { Button } from "@wpmudev/react-button";
import { Discount } from "./shared-notifications-discount__utils";

export const NoticeDiscount = ({
	title,
	price,
	priceTime,
	discount,
	image,
	imageRetina,
	imageAlt,
	disclaimer,
	priceLabel,
	buttonLabel,
	buttonLink,
	closeLabel,
	onCloseClick,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState(false);
	const closeOnClick = e => {
		setIsClose(true);
		onCloseClick(e);
	};

	const calcPrice = price - ((discount / 100) * price);
	const newPrice = calcPrice.toFixed(0);

	const hasDiscount = (null !== discount && '' !== discount && 0 !== discount) || discount > 0;

	const hasImage1x = null !== image && '' !== image;
	const hasImage2x = null !== imageRetina && '' !== imageRetina;

	const hasDisclaimer = ( null !== disclaimer && '' !== disclaimer );

	const hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
	const hasButtonLink = null !== buttonLink && '' !== buttonLink;
	const hasButton = hasButtonLabel && hasButtonLink;

	return (
		!isClose && (
			<Wrapper
				className="sui-notice-offer"
				{ ...props }
			>

				<Header>

					{ hasDiscount && <Ribbon>{ discount }% Off</Ribbon> }

					{ null !== title && '' !== title && <Title>{ title }</Title> }

					<button
						className="sui-button-icon sui-button-white"
						onClick={ closeOnClick }
					>
						<span className="sui-icon-close sui-sm" aria-hidden="true" />
						<span className="sui-screen-reader-text">
							{ closeLabel || 'Close this offer' }
						</span>
					</button>

				</Header>

				<Body>

					{ hasImage1x && !hasImage2x && <Image src={ image } alt={ imageAlt || 'Plugin image' } aria-hidden="true" /> }

					{ hasImage1x && hasImage2x && (
						<Image
							src={ image }
							srcSet={ image + ' 1x,' + imageRetina + ' 2x' }
							alt={ imageAlt || 'Plugin image' }
							aria-hidden="true"
						/>
					)}

					<Content>

						{ children }

						{ hasDisclaimer && (
							<p className="sui-disclaimer">* { disclaimer }</p>
						)}

					</Content>

					<Border><span /></Border>

					<PriceWrapper>

						<PriceLabel>{ priceLabel || 'Pay Only' }</PriceLabel>

						{ hasDiscount
							? (
								<Price>
									<span>${ price }</span>
									<strong>${ newPrice }</strong>/{ priceTime || 'month' }
								</Price>
							)
							: <Price><strong>${ price }</strong>/{ priceTime || 'month' }</Price>
						}

						{ hasButton && (
							<Button
								label={ buttonLabel }
								color="purple"
								href={ buttonLink }
								target="_blank"
							/>
						)}

						{ hasDisclaimer && <p className="sui-disclaimer">* { disclaimer } *</p> }

					</PriceWrapper>

				</Body>

			</Wrapper>
		)
	);
}
