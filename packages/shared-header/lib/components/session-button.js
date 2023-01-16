import React from "react";
import styled from "styled-components";
import { isUndefined, isEmpty, isBoolean } from "./utils";

// Create element(s) with Styled Components.
const Wrapper = styled.div`
.sui-wrap &&.ssm-session__wrapper {
	position: relative;
}
`;

const Button = styled.button`
.sui-wrap &&.ssm-session__button {
	margin: 0 !important;
	border-radius: 50%;
	background: #E6E6E6;

	&:hover,
	&:focus {
		background: #E6E6E6;
	}

	.suicons {
		font-size: 16px;
	}
}
`;

const Flag = styled.span`
.sui-wrap &&.ssm-session__flag {
	pointer-events: none;
	width: 12px;
	height: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 1px;
	bottom: -4px;
	border: 1px solid #FFF;
	border-radius: 50%;
	background: ${ props => props.login ? '#18BB4B' : '#FF6D6D' };
	text-align: center;

	[class*="sui-icon-"] {
		margin-top: 1px;
		font-size: 6px;

		&:before {
			color: #FFF;
		}
	}
}
`;

// Build "Session Button" component.
const SessionButton = ({ login, label = {}, ...props }) => {
	const connected = isBoolean(login) && login ? true : false;
	const loginLabel = !isUndefined(label.login) && !isEmpty(label.login) ? label.login : 'Connected';
	const logoutLabel = !isUndefined(label.logout) && !isEmpty(label.logout) ? label.logout : 'Not Connected';

	return (
		<Wrapper className="ssm-session__wrapper">
			<Button className="sui-button-icon ssm-session__button" { ...props }>
				<span className={`suicons suicons--${ connected ? 'user-alt' : 'logo' }`} aria-hidden="true" />
				<span className="sui-screen-reader-text">
					{ connected ? loginLabel : logoutLabel }
				</span>
			</Button>

			<Flag login={connected} className="ssm-session__flag">
				<span
					className={`sui-icon-${ connected ? 'check' : 'plug-disconnected' }`}
					aria-hidden="true" />
			</Flag>
		</Wrapper>
	);
}

// Publish required component(s).
export { SessionButton }