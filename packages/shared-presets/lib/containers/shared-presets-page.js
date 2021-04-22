import React, { Component, Children } from 'react';
import { device, utils } from '../components/utils';
import styled from 'styled-components';

import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

export class PresetsPage extends Component {
    render() {
        const { freeData, isLoading, children: configsList } = this.props,
			isEmpty = ! configsList || 0 === configsList.length;

		const items = Children.map( configsList, item => (
			<PresetsAccordionItem
				id={ item.props.id }
				default={ item.props.default || false }
				title={ item.props.title }
				description={ item.props.description }
				image={ item.props.image }
				showApplyButton={true}
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

                <BoxHeader title={ this.props.title }>
                    <div>
                        <Button
                            icon="upload-cloud"
                            label={ this.props.uploadLabel || 'Upload' }
                            design="ghost"
							htmlFor="sui-upload-configs-input"
                        />
						<input
							id="sui-upload-configs-input"
							type="file"
							name="config_file"
							className="sui-hidden"
							value=""
							readOnly="readonly"
							onChange={ this.props.uploadConfig }
							accept=".json"
						/>
                        <Button
                            icon="save"
                            label={ this.props.saveLabel || 'Save Config' }
                            color="blue"
							onClick={ this.props.saveNewConfig }
                        />
                    </div>
                </BoxHeader>

                <BoxBody>

                    { this.props.description && (
                        <p>{ this.props.description }</p>
                    )}

                    { ! isLoading && isEmpty && (
                        <Notifications type="info">
                            <p>{ this.props.empty }</p>
                        </Notifications>
                    )}

                </BoxBody>

				{ isLoading && (
					<div>
						<span>
							<span className="sui-icon-loader" aria-hidden="true"></span>
							{ this.props.loadingLabel }
						</span>
					</div>
				) }

                { ! isEmpty && (
                    <div
                        className="sui-accordion sui-accordion-flushed"
                        style={ {
                            borderBottomWidth: 0
                        } }
                    >
                        { items }
                    </div>
                )}

                { freeData && (
                    <BoxFooter
                        display="block"
                    >
                        <Notifications type="upsell">
                            <p>{ freeData.message }</p>
                            <p>
                                <Button
                                    label={ freeData.button || 'Try The Hub' }
                                    color="purple"
                                    href={ freeData.buttonHref || 'https://wpmudev.com/hub-welcome/' }
                                    target="_blank"
                                />
                            </p>
                        </Notifications>
                    </BoxFooter>
                )}

                { this.props.update && (
                    <BoxFooter
                        display="block"
                        alignment="center"
                        paddingTop={ isEmpty ? 0 : 30 }
                        border={ isEmpty ? 0 : 1 }
                    >
                        <p className="sui-description">{ this.props.update }</p>
                    </BoxFooter>
                )}

            </Box>
        );
    }
}