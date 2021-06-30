import React, { Component } from 'react';
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

	> div:not(.sui-tooltip) {

		@media ${device.tablet} {
			min-width: 1px;
			flex: 1;
		}
	}

	> div.sui-tooltip {
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

const Authentic = styled.svg`
    margin-left: 10px;
`;

const AccordionItemHeaderAlt = styled(AccordionItemHeader)`
.sui-wrap && {

    > .sui-accordion-col-auto {

        > .sui-dropdown {

            [class*=sui-icon-] {
                margin-right: 0 !important;
            }

            ul {
                min-width: 192px;
            }
        }
    }
}
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
        if (
            'sui-dropdown' !== e.target.className ||
            'sui-button-icon undefined' !== e.target.className ||
            'sui-icon-widget-settings-config' !== e.target.className
        ) {
            this.setState({
                open: !this.state.open
            });
        }
    }

	accordionHeadApplyClicked = ( e ) => {
		e.stopPropagation();
		this.props.applyAction();
	}

    render() {
        const { open } = this.state;
        const { editAction, applyAction, deleteAction, downloadAction } = this.props;

        let clazz = !open
            ? 'sui-accordion-item'
            : 'sui-accordion-item sui-accordion-item--open';

        const icon = (
            <Authentic width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.86 8.914l-.839-.69a1.6 1.6 0 01-.579-1.235c0-.334.102-.644.276-.9l-.003.005.616-.911a.428.428 0 00-.307-.655h-.003l-1.075-.123a1.595 1.595 0 01-1.407-1.637v.002l.032-1.092v-.017a.422.422 0 00-.613-.376h.002l-.97.468a1.583 1.583 0 01-2.058-.603l-.004-.007-.557-.935a.423.423 0 00-.726-.002l-.001.002-.558.935a1.585 1.585 0 01-2.074.606l.01.004-.97-.482a.425.425 0 00-.616.395v-.001l.031 1.092v.047c0 .82-.61 1.494-1.399 1.587h-.007l-1.07.137a.428.428 0 00-.301.67l-.001-.002.61.898a1.6 1.6 0 01-.301 2.142l-.843.678a.427.427 0 00.106.723l.002.001 1 .424a1.601 1.601 0 01.89 1.979l.003-.011-.338 1.038a.427.427 0 00.481.553l-.003.001 1.058-.19a1.589 1.589 0 011.806 1.16l.002.013.264 1.065c.049.185.214.32.41.32a.42.42 0 00.288-.115l.793-.738a1.573 1.573 0 012.15.001h-.001l.793.737a.424.424 0 00.713-.213v-.003l.265-1.065a1.591 1.591 0 011.818-1.17l-.01-.002 1.057.19a.427.427 0 00.475-.557l.001.002-.336-1.038a1.598 1.598 0 01.88-1.964l.011-.004 1-.424a.427.427 0 00.127-.713zm-8.803 2.2L4.266 8.401l1.1-1.15 1.67 1.622 3.997-4.024 1.126 1.129-5.102 5.134z" fill="#286EFA" fillRule="nonzero"/></Authentic>
        );

        const name = this.props.default
            ? (
                <React.Fragment>
                    { this.props.name }
                    { icon }
                </React.Fragment>
            )
            : this.props.name;

		const descstyles = {
			overflow: 'hidden',
			display: 'block',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis'
		};

        return (
            <div className={ clazz }>

                <AccordionItemHeaderAlt
                    className="sui-accordion-item-header"
                    state={ open ? 'true' : 'false' }
                    title={ name }
                    image={ this.props.image }
                    onClick={ e => this.toggle(e) }>
					<div size="5">
						<div style={ descstyles }>{ this.props.description }</div>
					</div>
					<div>
						{ this.props.showApplyButton && (
							<Button
								label={ this.props.applyLabel || 'Apply' }
								design="ghost"
								onClick={ this.accordionHeadApplyClicked }
							/>
						)}
						<Dropdown position="right">
							<div
								name={ this.props.applyLabel || 'Apply' }
								icon="check"
								onClick={ applyAction }
							/>
							<div
								name={ this.props.downloadLabel || 'Download' }
								icon="download"
								onClick={ () => downloadAction( this.props.id ) }
							/>
							<div
								name={ this.props.editLabel || 'Name and Description' }
								icon="pencil"
								onClick={ editAction }
							/>
							<div
								name={ this.props.deleteLabel || 'Delete' }
								icon="trash"
								color="red"
								onClick={ deleteAction }
							/>
						</Dropdown>
					</div>
                </AccordionItemHeaderAlt>

                <AccordionItemBody>

                    <Box>

                        <BoxBody>

                            <Header>
                                <div>
                                    <Label className="sui-label">{ this.props.name }</Label>
                                    <Description className="sui-description">
                                        { this.props.description }
                                    </Description>
                                </div>
                                <div
                                    className="sui-tooltip"
                                    data-tooltip={ this.props.editLabel || 'Edit Name and Description' }
                                >
                                    <ButtonIcon
                                        icon="pencil"
                                        label={ this.props.editLabel }
                                        design="outlined"
                                        onClick={ () => editAction( this.props.id ) }
                                    />
                                </div>
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
                                onClick={ () => applyAction( this.props.id ) }
                            />
                        </BoxFooter>

                    </Box>

                </AccordionItemBody>

            </div>
        );
    }
}