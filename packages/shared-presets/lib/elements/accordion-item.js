import React, { Component, Children } from 'react';
import styled from "styled-components";
import { device } from './utils';

import { AccordionItemHeader, AccordionItemBody } from '@wpmudev/react-accordion';
import { Box, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Button } from '@wpmudev/react-button';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { Dropdown } from '@wpmudev/react-dropdown';
import { PresetsTable } from './table';

const Header = styled.div`
	margin: 0 0 20px;

	> div {

		@media ${device.tablet} {
			min-width: 1px;
			flex: 1;
		}
	}

	> button {
		margin: 10px 0 0 !important;

		@media ${device.tablet} {
			flex: 0 0 auto;
			margin-top: 0 !important;
			margin-left: 10px !important;
		}
	}

	@media ${device.tablet} {
		display: flex;
		align-items: center;
	}
`;

const Label = styled.p`
	margin: 0 !important;
	color: #333 !important;
`;

const Description = styled.p`
	margin: 3px 0 0 !important;
`;

export class PresetsAccordionItem extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            open: false,
        };

        this.toggle = this.toggle.bind( this );
    }

    toggle = e => {
        if ( 'sui-dropdown' !== e.target.className ) {
            this.setState({
                open: !this.state.open
            });
        }
    }

    render() {
        const { open } = this.state;
        const { editAction, applyAction } = this.props;

        let clazz = !open
            ? 'sui-accordion-item'
            : 'sui-accordion-item sui-accordion-item--open';

        return (
            <div className={ clazz }>

                <AccordionItemHeader
                    state={ open ? 'true' : 'false' }
                    title={ this.props.title }
                    image={ this.props.image }
                    onClick={ e => this.toggle(e) }
                    >
                    <Dropdown position="right">
                        <div name={ this.props.applyLabel || 'Apply' } icon="check" />
                        <div name={ this.props.downloadLabel || 'Download' } icon="download" />
                        <div name={ this.props.editLabel || 'Name and Description' } icon="pencil" />
                        <div name={ this.props.deleteLabel || 'Delete' } icon="trash" />
                    </Dropdown>
                </AccordionItemHeader>

                <AccordionItemBody>
                    
                    <Box>

                        <BoxBody>

                            <Header>
                                <div>
                                    <Label className="sui-label">{ this.props.title }</Label>
                                    <Description className="sui-description">
                                        { this.props.description }
                                    </Description>
                                </div>
                                <ButtonIcon
                                    icon="pencil"
                                    label={ this.props.editLabel }
                                    design="outlined"
                                    onClick={ e => editAction }
                                />
                            </Header>

                            <PresetsTable>
                                { this.props.children }
                            </PresetsTable>

                        </BoxBody>

                        <BoxFooter>
                            <Button
                                label={ this.props.applyLabel || 'Apply' }
                                icon="check"
                                design="ghost"
                                onClick={ e => applyAction }
                            />
                        </BoxFooter>

                    </Box>

                </AccordionItemBody>

            </div>
        );
    }
}