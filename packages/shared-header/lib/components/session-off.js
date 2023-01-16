import React, { Fragment } from 'react';
import { isUndefined, isEmpty } from './utils';

// Import required component(s).
import { SessionButton } from './session-button';

// Build "Not Connected Session" component.
const SessionOff = ({ label, tooltip }) => {
	const hasTooltip = !isUndefined(tooltip) && !isEmpty(tooltip) ? true : false;

	return (
		<Fragment>
			{ hasTooltip && (
				<div
					className="sui-tooltip sui-tooltip-constrained sui-tooltip-bottom-right"
					data-tooltip={ tooltip }
					style={{ '--tooltip-width': '200px' }}>
					<SessionButton login={false} />
				</div>
			)}

			{ !hasTooltip && <SessionButton login={false} label={{ logout: label }} /> }
		</Fragment>
	);
}

// Publish required component(s).
export { SessionOff }