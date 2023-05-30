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

				@media ${device.mobile} {
					margin-right: 10px;
				}

				&:first-child {
					margin-bottom: 14px;
					@media ${device.tablet} {
						margin-bottom: 0;
					}
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
				margin: 4px 0 0 !important;
				color: #666 !important;
				font-size: 13px !important;
				line-height: 22px !important;

				&:first-child {
					margin: 0 !important;
				}
			}

			@media ${device.tablet} {
				text-align: left;
			}
		}
	}
}
`;

// UTILS: Create styled elements.
Banner.Wrapper = styled.div`
	overflow: hidden;
	display: block;
	border-radius: 4px;
	background-color: #fff;
`;

Banner.Title = styled.h2`
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

Banner.Body = styled.div`
	text-align: center;

	@media ${device.tablet} {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
	}
`;

Banner.Image = styled.img`
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

Banner.Content = styled.div`
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