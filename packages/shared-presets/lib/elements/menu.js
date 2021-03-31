import React, { Component, Children } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export class PresetsMenu extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            open: false,
        };

        this.toggle = this.toggle.bind( this );
    }

    toggle() {
		this.setState({
			open: !this.state.open
		});
	}

    render() {
        const { open } = this.state;

        let clazz = !open
            ? 'sui-dropdown'
            : 'sui-dropdown open';

        const options = Children.map( this.props.children, option => {
            return (
                <li><button>
                    <span className={ `sui-icon-${ option.props.icon }` } aria-hidden="true" />
                    { option.props.name }
                </button></li>
            );
        });

        return (
            <div className={ clazz }>
                <ButtonIcon
                    icon="widget-settings-config"
                    label={ this.props.buttonLabel }
                    onClick={ () => this.toggle() }
                />
                <ul>{ options }</ul>
            </div>
        );
    }
};