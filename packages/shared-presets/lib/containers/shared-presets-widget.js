import React, { Component, Children } from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Notifications } from '@wpmudev/react-notifications';
import { Button } from '@wpmudev/react-button';
import { PresetsAccordionItem } from '../components/accordion-item';

export class PresetsWidget extends Component {
    constructor( props ) {
        super( props );

        this.state = {
			loading: true,
        }
    }

    componentDidMount() {
		this.setState({
			loading: this.props.loading
		});
    }

    render() {
        const { loading } = this.state;

        const { children: configsList } = this.props,
			isEmpty = ! configsList || 0 === configsList.length;

        const items = Children.map( configsList, item => {
            return (
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
            );
        });

        return (
            <Box>

                { ! loading && ! isEmpty && (
                    <BoxHeader
                        titleIcon="wrench-tool"
                        title={ this.props.title }
                        tagLabel={ this.props.children.length }
                    />
                )}

                { isEmpty && (
                    <BoxHeader
                        titleIcon="wrench-tool"
                        title={ this.props.title }
                    />
                )}

                <BoxBody>

                    <p>{ this.props.message }</p>

                    { ! loading && isEmpty && (
                        <Notifications type="info">
                            <p>{ this.props.notice }</p>
                        </Notifications>
                    )}

                </BoxBody>

				{ loading && (
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