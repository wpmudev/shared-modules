import styled, { createGlobalStyle } from "styled-components";

import LalezarWoff from '../fonts/lalezar.woff';
import LalezarWoff2 from '../fonts/lalezar.woff2';

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

const palette = {
	beige: '#F1E3D1',
	black: '#1A1A1A',
	green: '#008A0E',
};

export const BlackFriday = {};

// UTILS: Create elements.
BlackFriday.Global = createGlobalStyle`
@font-face {
	font-family: 'Lalezar';
	src: local('Lalezar'),
		url(${LalezarWoff2}) format('woff2'),
		url(${LalezarWoff}) format('woff');
	font-weight: 400;
	font-style: normal;
}

${ props => props.rtl && props.suiLevel === 'div' ? '.rtl ' : '' } [class*="sui-2-"]${ props => props.rtl && props.suiLevel !== 'div' ? '.rtl' : '' } .sui-wrap${ props => props.monochrome ? '.sui-color-accessible' : '' } {

	.suim-black {
		position: relative;
		padding: 0 24px 24px;
		border-radius: 8px;
		background-color: #051F19;
		background-image:
			linear-gradient(180deg, ${palette.black} 0%, #051F19 100%);

		@media ${minDevice.tablet} {
			display: flex;
			align-items: flex-start;
		}

		@media ${minDevice.laptop} {
			padding-right: 60px;
		}

		.sui-button-icon {
			position: absolute !important;
			top: 24px;
			right: 24px;
			margin: 0 !important;

			@media ${minDevice.laptop} {
				top: 20px;
				right: 20px;
			}
		}

		&__ribbon {
			display: inline-block;
			padding: 24px 16px;
			border: 0;
			border-radius: 0 0 16px 16px;
			background: #F6E8D6;
			color: #051F19;
			font: 400 30px/32px 'Lalezar';
			text-transform: uppercase;
			text-align: center;

			@media ${minDevice.tablet} {
				flex: 0 0 auto;
			}

			span {
				display: block;
			}
		}

		&__promo {
			margin-top: 24px;

			@media ${minDevice.tablet} {
				min-width: 1px;
				flex: 1;
				margin-top: 0;
				margin-left: 24px;
				padding-top: 32px;
			}

			@media ${minDevice.laptop} {
				display: flex;
				align-items: center;
			}
		}

		&__intro {
			display: block;
			margin: 0 0 8px;
			color: ${palette.green};
			font: 400 16px/22px 'Lalezar';
			letter-spacing: 0.13px;
			text-transform: uppercase;
		}

		&__title {
			margin: 0 0 8px;
			color: ${palette.beige};
			font: 400 28px/30px 'Lalezar';
			letter-spacing: 0.08px;

			@media ${minDevice.tablet} {
				line-height: 22px;
			}

			s {
				position: relative;
				color: rgba(241, 227, 209, 0.7);
				text-decoration: none;

				&:before {
					content: " ";
					width: 105%;
					height: 2px;
					position: absolute;
					bottom: 15px;
					left: 0;
					background: ${palette.beige};
					transform: rotate(-10deg);
					transform-origin: bottom left;
				}
			}

			strong {
				color: ${palette.beige};
			}
		}

		&__content {

			@media ${minDevice.laptop} {
				min-width: 1px;
				flex: 1;
			}

			p {
				margin: 8px 0;
				color: ${palette.beige};
				font-size: 15px;
				line-height: 24px;
				letter-spacing: 0.1px;

				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}

				small {
					margin: 0;
					opacity: 0.8;
					color: ${palette.beige};
					font-size: 12px;
				}
			}
		}

		&__link {
			cursor: pointer;
			margin: 0;
			padding: 0;
			border: 0;
			background: transparent;
			color: #12AB21;
			font-size: inherit;
			line-height: inherit;
			font-weight: 600;
			text-decoration: underline;
			transition: 0.2s ease;

			&:hover {
				color: #15d629;
			}

			&:focus {
				opacity: 0.8;
			}
		}

		&__button {
			cursor: pointer;
			width: 100%;
			display: block;
			margin: 16px 0 0;
			padding: 7px 30px 8px;
			border: 2px solid transparent;
			border-radius: 15px;
			background: ${palette.green};
			color: #FFFFFF;
			font-size: 15px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: -0.4px;
			text-decoration: none;
			text-align: center;
			transition: 0.2s ease;

			@media ${minDevice.tablet} {
				width: auto;
				display: inline-block;
			}

			@media ${minDevice.laptop} {
				display: block;
				flex: 0 0 auto;
				margin-left: 32px;
			}

			&:hover,
			&:active,
			&:focus {
				outline: none;
				box-shadow: none;
			}

			&:hover,
			&:focus {
				background: #FFFFFF;
				color: ${palette.black};
			}

			&:focus {
				border-color: ${palette.green};
			}
		}
	}
}
`;