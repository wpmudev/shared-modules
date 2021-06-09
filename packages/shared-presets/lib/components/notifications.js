// Utils to move somewhere else.
export const successNotice = ( message ) => {
	window.SUI.openNotice('sui-configs-floating-notice', `<p>${ message }</p>`, {
		type: 'success',
		icon: 'check-tick',
		dismiss: {
			show: true,
			// label: lang.notificationDismiss,
			label: 'Dismiss',
		},
	});
};

export const requestFailureNotice = ( res ) => {
	let message;

	if ( res.data ) {
		message = res.data.error_msg;
	} else if ( res.status && 403 === res.status ) {
		// message = lang.defaultRequestError.replace( '{status}', res.status );
		message = 'Request failed. Status: {status}. Please reload the page and try again.'.replace( '{status}', res.status );
	} else {
		window.console.log( res );
		message = 'Error. Please check the browser console';
	}

	window.SUI.openNotice('sui-configs-floating-notice', `<p>${ message }</p>`, {
		type: 'error',
		icon: 'info',
		dismiss: {
			show: true,
			label: 'Dismiss',
			// label: lang.notificationDismiss,
		},
	});
};
