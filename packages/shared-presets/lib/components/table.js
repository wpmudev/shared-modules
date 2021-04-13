import React, { Component, Children } from 'react';
import styled from 'styled-components';

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

export class PresetsTable extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const rows = Children.map( this.props.children, row => {
			return (
				<tr>
					<td colSpan="2">{ row.props.name }</td>
					<td colSpan="1">{ row.props.status }</td>
				</tr>
			);
		});

        return (
            <Table {...this.props}>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
};