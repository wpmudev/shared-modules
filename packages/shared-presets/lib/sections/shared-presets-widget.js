import React, { Component, Children } from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../elements/accordion-item';
import { Accordion, AccordionItemHeader, AccordionItemBody } from '@wpmudev/react-accordion';
import { Dropdown } from '@wpmudev/react-dropdown';

export class PresetsWidget extends Component {
    constructor( props ) {
        super( props );

        this.state = {
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
    }

    render() {
        const { empty } = this.state;

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

                <BoxHeader
                    titleIcon="wrench-tool"
                    title={ this.props.title }
                />

                <BoxBody>

                    <p>{ this.props.message }</p>

                    { empty && (
                        <Notifications
                            type="info"
                            message={ this.props.notice }
                        />
                    )}

                </BoxBody>

                { !empty && (
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
}