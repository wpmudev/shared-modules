import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { isEmpty, isUndefined, isBoolean, isFunction } from './utils';

// Import required component(s).
import { SessionButton } from './session-button';

// Create element(s) with Styled Components.
const StyledIcon = styled.span`
.sui-wrap &&.ssm-session__ddmenu-icon.suicons {
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
	&:focus,
	&:visited {
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
		const avatar = this.props.avatar;
		const pro = this.props.pro;

		const hasName = !isUndefined(name) && !isEmpty(name) ? true : false;
		const hasEmail = !isUndefined(email) && !isEmpty(email) ? true : false;
		const isPro = isBoolean(pro) && pro ? true : false;

		const menu = Object.assign(
			{
				'hub': {
					label: 'The Hub',
					icon: 'logo',
					href: 'https://wpmudev.com/hub2/',
					target: '_blank',
					cbFunc: ''
				},
				'roadmap': {
					label: 'Product Roadmap',
					icon: 'roadmap',
					href: 'https://wpmudev.com/roadmap/',
					target: '_blank',
					cbFunc: ''
				},
				'support': {
					label: 'Support',
					icon: 'lifesaver',
					href: 'https://wpmudev.com/hub2/support',
					target: '_blank',
					cbFunc: '',
					falsy: isPro ? false : true
				},
				'upsell': {
					label: 'Unlock Pro Features',
					icon: 'plugin-hummingbird',
					href: '',
					target: '',
					cbFunc: '',
					falsy: isPro ? true : false,
					highlight: true
				}
			},
			this.props.menu
		);

		const showMenu = Object.keys(menu).map( ( item, index ) => {
			const itemId = item;
			const itemInfo = menu[item];

			const label = itemInfo.label;
			const icon = itemInfo.icon;
			const link = itemInfo.href;
			const target = itemInfo.target;
			const cbFunc = itemInfo.cbFunc;
			const falsy = itemInfo.falsy;
			const purple = itemInfo.highlight;

			const hasLabel = !isUndefined(label) && !isEmpty(label) ? true : false;
			const hasIcon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
			const hasLink = !isUndefined(link) && !isEmpty(link) ? true : false;
			const hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;
			const hasFunc = isFunction(cbFunc) ? true : false;

			return (
				<Fragment key={`${itemId}-${index}`}>
					{ hasLabel && (
						<Fragment>
							{ !falsy && (
								<MenuButton
									{ ... ( hasIcon && { suicon: icon } ) }
									{ ... ( hasLink && { href: link } ) }
									{ ... ( (hasLink && hasTarget) && { target: target } ) }
									{ ... ( !hasLink && hasFunc && { onClick: cbFunc } ) }
									{ ... ( purple && { className: 'ssm-session--purple' } ) }>
									{ label }
								</MenuButton>
							)}
						</Fragment>
					)}
				</Fragment>
			);
		});

		return (
			<div ref={this.setWrapperRef} className={`sui-dropdown${ open ? ' open' : '' }`} onClick={(e) => e.stopPropagation()}>
				<SessionButton
					login={true}
					avatar={avatar}
					aria-expanded={open ? true : false}
					onClick={this.toggle} />
				<ul onClick={() => this.setState({ open: false })}>
					{ (hasName || hasEmail) && (
						<StyledInfo>{name}<br/>{email}</StyledInfo>
					)}
					{ showMenu }
				</ul>
			</div>
		);
	}
}

const MenuIcon = ({ icon, suicon }) => {
	const hasSuicon = !isUndefined(suicon) && !isEmpty(suicon) ? true : false;
	let style = 'ssm-session__ddmenu-icon';

	if (hasSuicon) {
		style += ` suicons suicons--${suicon}`;
	} else {
		style += ` sui-icon-${icon} sui-sm`;
	}

	return <StyledIcon className={style} aria-hidden="true" />;
}

const MenuButton = ({ icon, suicon, href, target, children, ...props }) => {
	const isButton = isUndefined(href) ? true : false;
	const hasIcon = ((!isUndefined(icon) && !isEmpty(icon)) || (!isUndefined(suicon) && !isEmpty(suicon))) ? true : false;
	const hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;

	return (
		<li>
			{ isButton && (
				<StyledButton { ...props }>
					{hasIcon && <MenuIcon icon={icon} suicon={suicon} />}
					{ children }
				</StyledButton>
			)}

			{ !isButton && (
				<StyledLink
					href={href}
					target={hasTarget ? target : '_blank'}
					rel="nofollow"
					{ ...props }>
					{hasIcon && <MenuIcon icon={icon} suicon={suicon} />}
					{ children }
				</StyledLink>
			)}
		</li>
	);
}

// Publish required component(s).
export { SessionMenu }
