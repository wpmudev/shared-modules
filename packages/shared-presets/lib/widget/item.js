import React, { Component, Children } from "react";
import styled from "styled-components";

import {
	Box,
	BoxBody,
	BoxFooter
} from "@wpmudev/react-box";
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
const Header = styled.div`
	margin: 0 0 20px;

	> div {

		@media ${device.tablet} {
			min-width: 1px;
			flex: 1;
		}
	}

	> button {
		margin: 10px 0 0 !important;

		@media ${device.tablet} {
			flex: 0 0 auto;
			margin-top: 0 !important;
			margin-left: 10px !important;
		}
	}

	@media ${device.tablet} {
		display: flex;
		align-items: center;
	}
`;

const Label = styled.p`
	margin: 0 !important;
	color: #333 !important;
`;

const Description = styled.p`
	margin: 3px 0 0 !important;
`;

const Table = styled.table`
	width: 100%;
	margin: 0;
	border-spacing: 0;
	border-collapse: collapse;

	tbody {

		tr {

			&:nth-child(2n+2) {
				background-color: #f8f8f8;
			}
		}

		td {
			padding: 9px;
			vertical-align: center;
			color: #888;
			font: 500 13px/22px "Roboto", sans-serif;
			letter-spacing: -0.25px;

			&:first-child {
				padding-left: 20px;
				color: #333;
			}

			&:last-child {
				padding-right: 20px;
			}
		}
	}
`;

export class PresetsWidgetItem extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			open: false,
		};

		this.toggleRow = this.toggleRow.bind( this );
	}

	toggleRow() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		const { open } = this.state;
		const { editAction, applyAction } = this.props;
		const clazz = !open
			? 'sui-accordion-item'
			: 'sui-accordion-item sui-accordion-item--open';
		const rows = Children.map( this.props.children, row => {
			return (
				<tr>
					<td colSpan="2">{ row.props.name }</td>
					<td colSpan="1">{ row.props.status }</td>
				</tr>
			);
		});

		return (
			<div className={ clazz }>

				<div
					className="sui-accordion-item-header"
					onClick={ () => this.toggleRow() }
				>
					<div className="sui-accordion-item-title">{ this.props.title }</div>
					<div>
						<button
							className="sui-button-icon sui-accordion-open-indicator"
							onClick={() => this.toggleRow()}
						>
							<span className="sui-icon-chevron-down" aria-hidden="true"></span>
							<span className="sui-screen-reader-text">{ open ? 'Close item' : 'Open item' }</span>
						</button>
					</div>
				</div>

				<div className="sui-accordion-item-body">

					<Box>

						<BoxBody>

							<Header>
								<div>
									<Label className="sui-label">{ this.props.title }</Label>
									<Description className="sui-description">{ this.props.description }</Description>
								</div>
								<button
									className="sui-button-icon sui-button-outlined"
									onClick={ editAction }
								>
									<span className="sui-icon-pencil" aria-hidden="true" />
									<span className="sui-screen-reader-text">
										{ this.props.editLabel && '' !== this.props.editLabel
											? this.props.editLabel
											: "Edit Preset"
										}
									</span>
								</button>
							</Header>

							<Table>
								<tbody>{ rows }</tbody>
							</Table>

						</BoxBody>

						<BoxFooter>
							<Button
								label={ this.props.applyLabel }
								icon="check"
								design="ghost"
								onClick={ applyAction }
							/>
						</BoxFooter>

					</Box>

				</div>

			</div>
		);
	}
}
