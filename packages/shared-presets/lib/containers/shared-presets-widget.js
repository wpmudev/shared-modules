import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

export const PresetsWidget = ( { configsList, ...props } ) => {
	const isEmpty = ! configsList || 0 === configsList.length;

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
					{ configsList.map( item => (
						<PresetsAccordionItem
							key={ item.id }
							default={ item.default || false }
							name={ item.name }
							description={ item.description }
							image={ item.image }
							applyLabel={ item.applyLabel }
							applyAction={ item.applyAction }
							downloadLabel={ item.downloadLabel }
							downloadAction={ item.downloadAction }
							editLabel={ item.editLabel }
							editAction={ item.editAction }
							deleteLabel={ item.deleteLabel }
							deleteAction={ item.deleteAction }
						>
							{ item.config.map( ( item, index ) => (
								<div key={ index } name={ item.label } status={ item.value } />
							) ) }
						</PresetsAccordionItem>
					) ) }
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