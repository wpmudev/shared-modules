import React, { Children, Fragment } from "react";
import styled from "styled-components";
import { isUndefined, isEmpty, isBoolean, minDevice } from "./utils";

// Create element(s) with Styled Components.
const StyledTitle = styled.p`
.sui-wrap &&.ssm-perks__title {
	color: #333;
	font-size: 13px;
	font-weight: 500;
	line-height: 12px;
	letter-spacing: -0.25px;
}
`;

const StyledList = styled.ul`
.sui-wrap &&.ssm-perks {
	display: flex;
	flex-flow: row wrap;
	margin: 0 0 20px;
	padding: 0;
	border: 0;
	list-style: none;

	&:last-child {
		margin-bottom: 0;
	}

	@media ${minDevice.tablet} {
		display: flex;
		flex-flow: row wrap;
		margin-left: -7px;
		margin-right: -7px;

		&:last-child {
			margin-bottom: -10px;
		}

		.ssm-perk {
			width: 50%;
			flex: 0 0 auto;
			padding: 0 7px;
		}
	}
}
`;

const StyledIcon = styled.span`
.sui-wrap &&.ssm-perk__icon {
	width: 22px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #DDD;
	border-radius: 6px;
	text-align: center;

	.suicons {
		display: block;
		color: #1A1A1A;
		font-size: 12px;

		&:before {
			display: block;
		}
	}
}
`;

const StyledItem = styled.li`
.sui-wrap &&.ssm-perk {
	color: #666;
	font-size: 12px;
	line-height: 20px;

	.ssm-perk__icon {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`;

const StyledItemWrapper = styled.div`
.sui-wrap &&.ssm-perk__wrapper {
	position: relative;
	margin-bottom: 10px;
	padding-left: 35px;
}
`;

const StyledItemTitle = styled.span`
.sui-wrap &&.ssm-perk__title {
	display: block;
	color: #333;
	font-size: 12px;
	font-weight: 600;
	line-height: 16px;
}
`;

// Build "Session List" component.
const SessionList = ({ title, children }) => {
	const items = Children.map( children, (child, index) => {
		const isSuicon = isBoolean(child.props.suicon) && child.props.suicon
			? true
			: false;

		return (
			<StyledItem className="ssm-perk">
				<StyledItemWrapper className="ssm-perk__wrapper">
					{(!isUndefined(child.props.icon) && !isEmpty(child.props.icon)) && (
						<StyledIcon className="ssm-perk__icon" aria-hidden="true">
							{ isSuicon && <span className={`suicons suicons--${child.props.icon}`} /> }
							{ !isSuicon && <span className={`sui-icon-${child.props.icon} sui-icon-sm`} /> }
						</StyledIcon>
					)}
					{(!isUndefined(child.props.title) && !isEmpty(child.props.title)) && (
						<StyledItemTitle className="ssm-perk__title">
							{child.props.title}
						</StyledItemTitle>
					)}
					{child.props.children}
				</StyledItemWrapper>
			</StyledItem>
		);
	});

	return (
		<Fragment>
			{(!isUndefined(title) && !isEmpty(title)) && (
				<StyledTitle className="ssm-perks__title">{title}</StyledTitle>
			)}
			<StyledList className="ssm-perks">
				{items}
			</StyledList>
		</Fragment>
	);
}

// Publish required component(s).
export { SessionList }