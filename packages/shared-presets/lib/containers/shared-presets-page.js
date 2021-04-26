import React, { Component, Children } from 'react';
import { device, utils } from '../components/utils';
import styled from 'styled-components';

import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

const LoadingContent = styled.div`
.sui-wrap && {
    position: relative;
    z-index: 2;
}
`;

const LoadingWrap = styled.div`
.sui-wrap && {
    pointer-events: none;
}`;

const LoadingMask = styled.div`
.sui-wrap && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.95);
    border-radius: 0 0 4px 4px;

    > p {
        
    }
}
`;

export class PresetsPage extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            free: false,
            empty: false,
            loading: true
        }
    }

    componentDidMount() {
        const items = this.props.children;
        const freez = this.props.free || {};

        let isFree = false;

        // Check if free state exists.
        if ( freez.state && 'undefined' !== typeof freez.state ) {

            // Check if free state is boolean.
            if ( 'boolean' && typeof freez.state ) {
                isFree = freez.state;
            }
        }

		if ( ! items || 0 === items.length ) {
            this.setState({
                empty: true
            });
        }

		this.setState({
			loading: this.props.loading
		});

        this.setState({
            free: isFree
        });
    }

    render() {
        const { free, empty, loading } = this.state;
        const freez = this.props.free || {};

		const items = Children.map( this.props.children, item => (
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

        const Table = (
            <React.Fragment>
                { !empty && (
                    <div
                        className="sui-accordion sui-accordion-flushed"
                        style={ {
                            borderBottomWidth: 0
                        } }
                    >
                        { items }
                    </div>
                )}
            </React.Fragment>
        );

        const Footer = (
            <React.Fragment>

                { free && freez.message && '' !== freez.message && (
                    <BoxFooter
                        display="block"
                    >
                        <Notifications type="upsell">
                            <p>{ freez.message }</p>
                            <p>
                                <Button
                                    label={ freez.button || 'Try The Hub' }
                                    color="purple"
                                    href={ freez.buttonHref || 'https://wpmudev.com/hub-welcome/' }
                                    target="_blank"
                                />
                            </p>
                        </Notifications>
                    </BoxFooter>
                )}

                { !free && this.props.update && '' !== this.props.update && (
                    <BoxFooter
                        display="block"
                        alignment="center"
                        paddingTop={ empty ? 0 : 30 }
                        border={ empty ? 0 : 1 }
                    >
                        <p className="sui-description">{ this.props.update }</p>
                    </BoxFooter>
                )}

            </React.Fragment>
        );

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

                    { !loading && empty && (
                        <Notifications type="info">
                            <p>{ this.props.empty }</p>
                        </Notifications>
                    )}

                </BoxBody>

                { loading && (
                    <LoadingContent>
                        <LoadingWrap aria-hidden="true">
                            { Table }
                            { Footer }
                        </LoadingWrap>
                        <LoadingMask>
                            <p className="sui-description">
                                <span
                                    className="sui-icon-loader sui-loading"
                                    aria-hidden="true"
                                    style={ { marginRight: 10 } }
                                />
                                { this.props.loadingLabel }
                            </p>
                        </LoadingMask>
                    </LoadingContent>
                )}

                { !loading && (
                    <React.Fragment>
                        { Table }
                        { Footer }
                    </React.Fragment>
                )}

            </Box>
        );
    }
}