import React, { Children } from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

export const PresetsWidget = ( { isLoading, children: configsList, ...props } ) => {
	const isEmpty = ! configsList || 0 === configsList.length;

	const items = Children.map( configsList, item => (
		<PresetsAccordionItem
			default={ item.props.default || false }
			title={ item.props.title }
			description={ item.props.description }
			image={ item.props.image }
			applyLabel={ item.props.applyLabel }
			applyAction={ item.props.applyAction }
			downloadLabel={ item.props.downloadLabel }
			editLabel={ item.props.editLabel }
			editAction={ item.props.editAction }
			deleteLabel={ item.props.deleteLabel }
		>
			{ item.props.children }
		</PresetsAccordionItem>
	) );

	return (
		<Box>

			{ ! isLoading && ! isEmpty && (
				<BoxHeader
					titleIcon="wrench-tool"
					title={ props.title }
					tagLabel={ configsList.length }
				/>
			)}

			{ isEmpty && (
				<BoxHeader
					titleIcon="wrench-tool"
					title={ props.title }
				/>
			)}

			<BoxBody>

				<p>{ props.message }</p>

				{ ! isLoading && isEmpty && (
					<Notifications type="info">
						<p>{ props.notice }</p>
					</Notifications>
				)}

			</BoxBody>

			{ isLoading && (
				<div>
					<span>
						<span className="sui-icon-loader" aria-hidden="true"></span>
						{ props.loadingLabel }
					</span>
				</div>
			) }

			{ ! isEmpty && (
				<div
					className="sui-accordion sui-accordion-flushed"
					style={ { borderBottom: 0 } }
				>
					{ items }
				</div>
			)}

			<BoxFooter>
				<Button
					icon="save"
					label="Save Config"
					color="blue"
				/>
				<Button
					icon="wrench-tool"
					label="Manage Configs"
					design="ghost"
				/>
			</BoxFooter>

		</Box>
	);
}