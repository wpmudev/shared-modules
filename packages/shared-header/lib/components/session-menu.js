import React, { useState } from 'react';
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

// Build "Connected Session" component.
const SessionMenu = ({ name, email, pro }) => {
	const [isOpen, setIsOpen] = useState(false);

	const hasName = !isUndefined(name) && !isEmpty(name) ? true : false;
	const hasEmail = !isUndefined(email) && !isEmpty(email) ? true : false;
	const isPro = isBoolean(pro) && pro ? true : false;

	return (
		<div className={`sui-dropdown${ isOpen ? ' open' : '' }`}>
			<SessionButton
				login={true}
				aria-expanded={ isOpen ? true : false }
				onClick={ () => {
					if ( isOpen ) {
						setIsOpen(false);
					} else {
						setIsOpen(true);
					}
				} } />
			<ul>
				{ (hasName || hasEmail) && (
					<StyledInfo>{name}<br/>{email}</StyledInfo>
				)}
				<MenuButton icon="logo" href="https://wpmudev.com/hub2/">The Hub</MenuButton>
				<MenuButton icon="lifesaver" href="https://wpmudev.com/roadmap/">Product Roadmap</MenuButton>
				{ isPro && <MenuButton icon="lifesaver" href="https://wpmudev.com/hub2/support">Support</MenuButton> }
				{ !isPro && <MenuButton icon="plugin-hummingbird" className="ssm-session--purple">Unlock Pro Features</MenuButton> }
			</ul>
		</div>
	);
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
