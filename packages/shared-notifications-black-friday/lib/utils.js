import React from "react";
import styled from "styled-components";
import wave1x from './img/wave.png';
import wave2x from './img/wave@2x.png';

// UTILS: Set devices size.
const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
};

const minDevice = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`
};

const maxDevice = {
	mobile: `(max-width: ${screen.mobile - 1}px)`,
	tablet: `(max-width: ${screen.tablet - 1}px)`,
	laptop: `(max-width: ${screen.laptop - 1}px)`,
	desktop: `(max-width: ${screen.desktop - 1}px)`
};

// UTILS: Create elements.
export const Container = styled.div`
[class*="sui-2-"] .sui-wrap & {
	overflow: hidden;
	position: relative;
	margin: 0 0 20px;
	padding: 30px 40px;
	border-radius: 4px;
	background-color: #07212C;
	background-image: image-set(
		url(${wave1x}) 1x,
		url(${wave2x}) 2x
	);
	background-image:
		image-set(
			url(${wave1x}) 1x,
			url(${wave2x}) 2x
		),
		linear-gradient(270deg, #222222 0.67%, #07212C 100%);

	@media ${maxDevice.tablet} {
		text-align: center;
	}

	@media ${minDevice.tablet} {
		display: flex;
		margin: 0 0 30px;
		flex-flow: row nowrap;
		align-items: flex-start;
		padding-left: 0;
	}

	@media ${minDevice.laptop} {
		align-items: center;
	}

	.sui-button-icon {
		position: absolute;
		top: 10px;
		right: 10px;
		margin-right: 0 !important;
	}
}
`;

export const Ribbon = styled.div`
[class*="sui-2-"] .sui-wrap & {
	display: inline-block;
	padding: 10px 20px 11px;
	background-color: #6D53AB;
	color: #4DFD89;
	font-size: 22px;
	line-height: 29px;
	font-weight: bold;
	letter-spacing: normal;

	@media ${minDevice.tablet} {
		flex: 0 0 auto;
		padding: 15px 20px 16px;
	}
}
`;

export const Body = styled.div`
[class*="sui-2-"] .sui-wrap & {
	margin: 0 0 30px;

	@media ${minDevice.tablet} {
		min-width: 1px;
		flex: 1;
		margin: 0 15px;
		padding-right: 65px;
	}

	@media ${minDevice.laptop} {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		padding-right: 0;
	}
}
`;

export const Content = styled.div`
[class*="sui-2-"] .sui-wrap & {
	margin: 30px 0;

	@media ${minDevice.tablet} {
		margin-top: 0;
	}

	@media ${minDevice.laptop} {
		min-width: 1px;
		flex: 1;
		margin-bottom: 0;
	}

	h1, h2, h3, h4, h5, h6, p, small {
		color: #fff;
	}

	p {
		margin: 0 0 15px;
		font-size: 18px;
		line-height: 25px;

		@media ${minDevice.tablet} {
			margin: 0 0 5px;
		}

		&:last-child {
			margin: 0;
		}

		strong {
			font-weight: 700;

			@media ${maxDevice.tablet} {
				display: block;
				margin-bottom: 20px;
				font-size: 28px;
				line-height: 29px;
			}
		}

		small {
			margin: 0;
			display: initial;
			font-size: 13px;
			line-height: 22px;
			font-weight: 300;
		}
	}
}
`;

export const Link = styled.a.attrs( ({ ctaLink }) => ({
	href: ctaLink,
	target: "_blank"
}))`
[class*="sui-2-"] .sui-wrap & {
	cursor: pointer;
	display: inline-block;
	margin: 0;
	padding: 5px 30px;
	border: 0;
	border-radius: 30px;
	background: #4DFD89;
	box-shadow: none;
	color: #222;
	font-size: 13px;
	line-height: 30px;
	font-weight: bold;
	text-decoration: none;
	transition: 0.2s ease;

	&:hover,
	&:focus {
		background: #fff;
		color: #222222 !important;
	}

	&:focus {
		box-shadow: 0 0 10px 0 rgba(255,255,255,0.3);
	}

	@media ${minDevice.laptop} {
		display: block;
		flex: 0 0 auto;
	}
}
`;