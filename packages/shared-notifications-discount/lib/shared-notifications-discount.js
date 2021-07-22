import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@wpmudev/react-button";

// UTILS: Set devices size.
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

// UTILS: Create elements.
const Wrapper = styled.div`
	overflow: hidden;
	display: block;
	border-radius: 4px;
	background-color: #fff;
`;

const Header = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #8D00B1;

	.sui-button-icon {
		flex: 0 0 auto;
		margin: 16px 20px !important;

		&:only-child {
			margin-left: auto !important;
		}
	}
`;

const Ribbon = styled.div`
	flex: 0 0 auto;
	position: relative;
	margin: 12px 0;
	padding: 10px 23px 10px 15px;
	background-color: #FECF2F;
	color: #000;
	font-size: 13px;
	line-height: 18px;
	font-weight: bold;
	letter-spacing: normal;

	&:after {
		content: " ";
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		border-width: 19px 12px;
		border-style: solid;
		border-color: #FECF2F;
		border-right-color: #8D00B1;
		border-left-width: 0;
	}

	@media ${device.tablet} {
		padding-right: 25px;
		font-size: 14px;
	}
`;

const Title = styled.h2`
	min-width: 1px;
	flex: 1;
	margin: 0 20px !important;
	padding: 11px 0 !important;
	border: 0 !important;
	color: #fff !important;
	font-size: 13px !important;
	line-height: 21px !important;
	font-weight: bold !important;
	letter-spacing: normal !important;

	& + & .sui-button-icon {
		margin-left: 0 !important;
	}

	@media ${device.tablet} {
		padding: 20px 0 21px !important;
		font-size: 16px !important;
	}
`;

const Body = styled.div`
	text-align: center;

	@media ${device.tablet} {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
	}
`;

const Image = styled.img`
	display: none;
	flex: 0 0 auto;
	align-self: flex-end;
	margin: 0 10px;
	padding: 0 30px;

	+ div {

		@media ${device.tablet} {
			padding-left: 0 !important;
		}
	}

	@media ${device.tablet} {
		display: block;
	}
`;

const Content = styled.div`
	min-width: 1px;
	flex: 1;
	padding: 20px 20px 10px;

	p {
		margin: 12px 0 0 !important;
		color: #666 !important;
		font-size: 13px !important;
		line-height: 22px !important;

		&:first-child {
			margin: 0 !important;
		}

		&.sui-disclaimer {
			display: none;
			color: #888 !important;

			@media ${device.tablet} {
				display: block;
			}
		}
	}

	@media ${device.tablet} {
		padding: 30px;
		text-align: left;
	}
`;

const Border = styled.div`
	display: none;
	align-self: stretch;
	padding: 30px 0;

	span {
		width: 1px;
		height: 100%;
		display: block;
		background-color: #DDD;
	}

	@media ${device.tablet} {
		display: block;
	}
`;

const PriceWrapper = styled.div`
	display: block;
	padding: 10px 20px 30px;
	text-align: center;

	.sui-button {
		margin-top: 15px !important;
		margin-right: 0 !important;
	}

	.sui-disclaimer {
		margin: 20px 0 0 !important;
		color: #888 !important;
		font-size: 13px !important;
		line-height: 22px !important;

		@media ${device.tablet} {
			display: none;
		}
	}

	@media ${device.tablet} {
		padding: 12px 30px 20px;
	}
`;

const PriceLabel = styled.h3`
	color: #666 !important;
	font-size: 12px !important;
	line-height: 16px !important;
	font-weight: 400 !important;
	letter-spacing: -0.23px !important;

	@media ${device.tablet} {
		text-transform: uppercase;
	}
`;

const Price = styled.p`
	margin: 0 !important;
	color: #333 !important;
	font-size: 15px !important;
	line-height: 40px !important;
	letter-spacing: -0.27px !important;

	span {
		margin-right: 6px;
		color: #FF6D6D;
		font-size: 18px;
		font-weight: bold;
		text-decoration: line-through;
		letter-spacing: -0.32px;
	}

	strong {
		font-size: 28px;
		font-weight: bold;
		letter-spacing: -0.5px;
	}
`;

export const NoticeDiscount = ({
	title,
	price,
	priceTime,
	discount,
	image,
	imageRetina,
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

					{ hasImage1x && !hasImage2x && <Image src={ image } alt="" aria-hidden="true" /> }

					{ hasImage1x && hasImage2x && (
						<Image
							src={ image }
							srcSet={ image + ' 1x,' + imageRetina + ' 2x' }
							alt=""
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
