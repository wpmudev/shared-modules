import styled, { createGlobalStyle } from "styled-components";

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

export const Banner = {};

// UTILS: Create global styles.
Banner.Global = createGlobalStyle`
[class*="sui-2-"] .sui-wrap {

	.sui-module-notice-banner {

		&__wrapper {
			position: relative;
			overflow: hidden;
			display: block;
			border-radius: 4px;
			background-color: #fff;
		}

		&__title {
			font-size: 21px;
			line-height: 32px;
			letter-spacing: -0.5px;
			margin: 0 0 4px;
		}

		&__wrapper {
			text-align: center;
			padding: 25px;

			@media ${device.tablet} {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
			}
		}

		&__content {

			@media ${device.tablet} {
				margin-right: 30px
			}

			.sui-disclaimer {
				display: none;
				color: #888 !important;

				@media ${device.tablet} {
					display: block;
				}
			}
		}

		&__close {
			&.sui-button-icon {
				position: absolute;
				top: 25px;
				right: 25px;
			}
		}

		&__cta {
			padding-top: 12px;

			.sui-disclaimer {
				display: block;
				color: #888 !important;

				@media ${device.tablet} {
					display: none;
				}
			}

			.sui-button {
				margin-right: 0;
				margin-bottom: 14px;

				@media ${device.mobile} {
					margin-right: 10px;
					margin-bottom: 0;
				}
			}
		}

		&__image {
			flex: 0 0 auto;
			align-self: flex-start;
			padding: 0;

			+ div {

				@media ${device.tablet} {
					padding-left: 0 !important;
				}
			}

			@media ${device.tablet} {
				display: block;
				padding: 0 25px 0 0;
			}
		}

		&__body {
			min-width: 1px;
			flex: 1;

			p {
				margin: 4px 0 0;
				color: #333;

				&:first-child {
					margin: 0;
				}
			}

			.sui-disclaimer {
				font-size: 13px;
				line-height: 22px;
				margin-top: 2px;

				@media ${device.tablet} {
					margin-top: 4px;
				}
			}

			@media ${device.tablet} {
				text-align: left;
			}
		}
	}
}
`;