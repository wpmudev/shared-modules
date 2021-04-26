import React, { Component, Children } from 'react';
import { PresetsAccordionItem } from './accordion-item';

export class PresetsAccordion extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const items = Children.map( this.props.children, item => {
            return (
                <PresetsAccordionItem
                    name={ item.props.name }
                    description={ item.props.description }
                    applyLabel={ item.props.applyLabel }
                    editLabel={ item.props.editLabel }
                    downloadLabel={ item.props.downloadLabel }
                    deleteLabel={ item.props.deleteLabel }
                >
                    { item.props.children }
                </PresetsAccordionItem>
            );
        });

        return (
            <div className="sui-accordion sui-accordion-flushed">
                { items }
            </div>
        );
    }
}