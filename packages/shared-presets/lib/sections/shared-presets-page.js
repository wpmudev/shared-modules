import React, { Component, Children } from 'react';
import styled from 'styled-components';

import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../elements/accordion-item';

const BodyTop = styled(BoxBody)`
    .sui-wrap & {
        padding-bottom: 0;
    }
`;

const NoticeBlue = styled.div`
    .sui-wrap & {
        display: flex;
        flex-flow: row wrap;

        > img {
            max-width: 100px;
            display: block;
            align-self: flex-end;
            flex: 0 0 auto;
            margin-right: 30px;
        }

        > div.sui-notice {
            min-width: 1px;
            flex: 1;
        }
    }
`;

export class PresetsPage extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            free: false,
            empty: false
        }
    }

    componentDidMount() {
        const items = this.props.children;

        if ( 0 === items.length ) {
            this.setState({
                empty: true
            });
        }

        this.setState({
            free: this.props.free
        });
    }

    render() {
        const { free, empty } = this.state;

        const items = Children.map( this.props.children, item => {
            return (
                <PresetsAccordionItem
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
            );
        });

        return (
            <Box>

                <BoxHeader title={ this.props.title }>
                    <Button
                        icon="upload-cloud"
                        label={ this.props.uploadLabel || 'Upload' }
                        design="ghost"
                    />
                    <Button
                        icon="save"
                        label={ this.props.saveLabel || 'Save Config' }
                        color="blue"
                    />
                </BoxHeader>

                <BodyTop>

                    <p>{ this.props.message }</p>

                    <NoticeBlue>
                        
                        <img src={ this.props.welcomeImage } />
                        
                        <Notifications
                            type="info"
                            message={ this.props.welcomeMessage }
                        />
                    </NoticeBlue>

                </BodyTop>

                { !empty && (
                    <div
                        className="sui-accordion sui-accordion-flushed"
                        { ... !free && { style: { borderBottom: 0 } } }
                    >
                        { items }
                    </div>
                )}

                { free && (
                    <BoxBody>
                        <Notifications
                            type="upsell"
                            message={ this.props.freeMessage }
                        />
                    </BoxBody>
                )}

                { !free && (
                    <BoxFooter>
                        <p className="sui-description" style={ { flex: 1, textAlign: 'center' } }>{ this.props.updateMessage }</p>
                    </BoxFooter>
                )}

            </Box>
        );
    }
}