import React, { Component } from 'react';
import styled from "styled-components";
import { isEmpty, isUndefined, isBoolean } from './utils';

// Import required component(s).
import { SessionButton } from './session-button';

// Create element(s) with Styled Components.
const StyledIcon = styled.span`
.sui-wrap &&.ssm-session__ddmenu-icon {
	width: 24px;
	position: relative;
	top: 2px;
	display: inline-block;
	margin-right: 10px;
	font-size: 16px;
	text-align: center;

	&:before {
		display: block;
	}
}
`;

const StyledButton = styled.button`
.sui-wrap &&.ssm-session--purple {

	&,
	&:hover,
	&:focus {
		color: #8D00B1;
	}

	&:hover,
	&:focus {
		background-color: #F9E1FF;
	}
}
`;

const StyledLink = styled.a`
.sui-wrap &&.ssm-session--purple {

	&,
	&:hover,
	&:focus {
		color: #8D00B1;
	}

	&:hover,
	&:focus {
		background-color: #F9E1FF;
	}
}
`;

const StyledInfo = styled.li`
.sui-wrap && {
	padding: 0 15px 10px;
	font-size: 13px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: -0.25px;
}
`;

// Build "Session Menu" component.
class SessionMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};

		this.toggle = this.toggle.bind(this);

		this.wrapperRef = React.createRef();
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	toggle() {
		this.setState((state) => ({
			open: !state.open,
		}));
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(e) {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			this.setState({ open: false });
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	render() {
		const { open } = this.state;

		const name = this.props.name;
		const email = this.props.email;
		const pro = this.props.pro;
		const landing = this.props.landing;

		const hasName = !isUndefined(name) && !isEmpty(name) ? true : false;
		const hasEmail = !isUndefined(email) && !isEmpty(email) ? true : false;
		const isPro = isBoolean(pro) && pro ? true : false;

		return (
			<div ref={this.setWrapperRef} className={`sui-dropdown${ open ? ' open' : '' }`} onClick={(e) => e.stopPropagation()}>
				<SessionButton
					login={true}
					aria-expanded={open ? true : false}
					onClick={this.toggle} />
				<ul onClick={() => this.setState({ open: false })}>
					{ (hasName || hasEmail) && (
						<StyledInfo>{name}<br/>{email}</StyledInfo>
					)}
					<MenuButton icon="logo" href="https://wpmudev.com/hub2/" rel="nofollow">The Hub</MenuButton>
					<MenuButton icon="lifesaver" href="https://wpmudev.com/roadmap/" rel="nofollow">Product Roadmap</MenuButton>
					{ isPro && <MenuButton icon="lifesaver" href="https://wpmudev.com/hub2/support" rel="nofollow">Support</MenuButton> }
					{ !isPro && (
						<MenuButton
							icon="plugin-hummingbird"
							className="ssm-session--purple"
							{ ... ( !isUndefined(landing) && { href: landing } ) }
							{ ... ( !isUndefined(landing) && { target: '_self' } ) }>
							Unlock Pro Features
						</MenuButton>
					)}
				</ul>
			</div>
		);
	}
}

const MenuIcon = ({ name }) => {
	return <StyledIcon className={`suicons suicons--${name} ssm-session__ddmenu-icon`} aria-hidden="true" />;
}

const MenuButton = ({ icon, href, target, children, ...props }) => {
	const isButton = isUndefined(href) ? true : false;
	const hasIcon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	const hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;

	return (
		<li>
			{ isButton && (
				<StyledButton { ...props }>
					{hasIcon && <MenuIcon name={icon} />}
					{ children }
				</StyledButton>
			)}

			{ !isButton && (
				<StyledLink href={href} target={hasTarget ? target : '_blank'} { ...props }>
					{hasIcon && <MenuIcon name={icon} />}
					{ children }
				</StyledLink>
			)}
		</li>
	);
}

// Publish required component(s).
export { SessionMenu }
