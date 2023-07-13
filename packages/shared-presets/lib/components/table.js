import React, { Component, Children } from 'react';
import styled from 'styled-components';

const Table = styled.table`
	[class*="sui-2-"] .sui-wrap && {
		width: 100%;
		margin: 0;
		border-spacing: 0;
		border-collapse: collapse;
		table-layout: fixed;

		tbody {
			tr {
				&:nth-child(2n + 2) {
					background-color: #f8f8f8;
				}
			}

			td {
				padding: 9px;
				vertical-align: center;
				color: #888;
				font: 500 13px/22px "Roboto", sans-serif;
				letter-spacing: -0.25px;

				div {
					overflow: hidden;
					display: -webkit-box;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&:first-child {
					width: 45%;
					padding-left: 20px;
					color: #333;
				}

				&:last-child {
					width: 55%;
					padding-right: 20px;
					white-space: pre-wrap;
				}
			}
		}
	}
`;

export class PresetsTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const rows = Children.map(this.props.children, (row) => {
			const rowName = row.props.name ? row.props.name : '';
			const rowStatus = row.props.status;
			const rowContent = rowStatus.map((statusItem, index) => {
				const itemName = statusItem.name.replace(/( - )/g, '\n').split('\n').filter(item => item);
				const isPro = statusItem.isPro;
				const rowTag = isPro ? (
					<span className="sui-tag sui-tag-pro" style={{ marginLeft: '6px' }}>Pro</span>
				) : null;
				return (
					<span key={`item-${index}`}>
						{itemName.map((item) => item).join('\n')}
						{rowTag}
						{'\n'}
					</span>
				);
			});
			

			return (
				<tr>
					<td>{rowName}</td>
					<td>{rowContent}</td>
				</tr>
			);
		});

		return (
			<Table {...this.props}>
				<tbody>{rows}</tbody>
			</Table>
		);
	}
}
