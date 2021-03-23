import React, { Component } from "react";

import {
	Box,
	BoxHeader,
	BoxBody,
	BoxFooter
} from "@wpmudev/react-box";
import { Button } from "@wpmudev/react-button";

export class PresetsWidget extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { saveAction } = this.props;

		return (
			<Box>

				<BoxHeader title={ this.props.title } />

				<BoxBody>
					<p>{ this.props.description }</p>
				</BoxBody>

				<div className="sui-accordion sui-accordion-flushed">

					{ this.props.children
						? this.props.children
						: 'Empty'
					}

				</div>

				<BoxFooter style={ { borderTopWidth: 0 } }>

					<Button
						label={ this.props.saveLabel }
						icon="save"
						color="blue"
						onClick={ saveAction }
					/>

					<Button
						label={ this.props.configsLabel }
						icon="wrench-tool"
						design="ghost"
						href={ this.props.configsLink }
					/>

				</BoxFooter>

			</Box>
		);
	}
}