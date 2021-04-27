import React, { Children } from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

export const PresetsWidget = ( { children: configsList, ...props } ) => {
	const isEmpty = ! configsList || 0 === configsList.length;

	const items = Children.map( configsList, item => (
		<PresetsAccordionItem
			default={ item.props.default || false }
			name={ item.props.name }
			description={ item.props.description }
			image={ item.props.image }
			applyLabel={ item.props.applyLabel }
			applyAction={ item.props.applyAction }
			downloadLabel={ item.props.downloadLabel }
			downloadAction={ item.props.downloadAction }
			editLabel={ item.props.editLabel }
			editAction={ item.props.editAction }
			deleteLabel={ item.props.deleteLabel }
			deleteAction={ item.props.deleteAction }
		>
			{ item.props.children }
		</PresetsAccordionItem>
	) );

	return (
		<Box>

			{ ! isEmpty && (
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

				<p>{ props.description }</p>

				{ isEmpty && (
					<Notifications type="info">
						<p>{ props.emptyNotice }</p>
					</Notifications>
				)}

			</BoxBody>

			{ !isEmpty && (
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
					label={ props.saveLabel }
					color="blue"
					onClick={ props.saveNewConfig }
				/>
				<Button
					icon="wrench-tool"
					label={ props.manageLabel }
					design="ghost"
					href={ props.manageConfigsUrl }
				/>
			</BoxFooter>

		</Box>
	);
}