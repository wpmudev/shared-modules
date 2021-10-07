/**
 * External dependencies
 */
import React from 'react';

/**
 * SUI dependencies
 */
import { Modal } from '@wpmudev/react-modal';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import { Button } from '@wpmudev/react-button';

const ApplyModal = ({ setOpen, config, save, strings = {}, callback = null }) => {
	const {
		closeIcon = 'Close this dialog window',
		title = 'Apply Config',
		description = 'Are you sure you want to apply the {configName} config to this site? We recommend you have a backup available as your existing settings configuration will be overridden.',
		notice = 'The storage region in the selected config doesn\'t match the storage region in your current settings. All existing backups will be deleted after applying this config.',
		cancelButton = 'Cancel',
		actionButton = 'Apply',
	} = strings;

	let extraClass = "sui-box";

	const applyLoader = (
		<React.Fragment>
			<span className="sui-icon-loader sui-loading" aria-hidden="true"></span>
		</React.Fragment>
	);

	const [ isSaving, setIsSaving ] = React.useState( true );
	const [ wrapper, setWrapper] = React.useState(extraClass);
	const [ desc, setDesc ] = React.useState(description);

	React.useEffect( () => {
		if ( null !== callback ) {
			let className = extraClass;
			const result = window[callback](config);
			result
				.then(data => {
					className += ' region-loaded ' + data.status;
					setWrapper(className);
					setIsSaving(false);
					if ( 'description' in data ) {
						setDesc(data.description);
					}
				})
				.catch(err => {
					className += ' region-loaded ' + err.status;
					setWrapper(className);
					setIsSaving(false);
					if ( 'description' in err ) {
						setDesc(err.description);
					}
				});
		}
	}, []);

	const doAction = () => {
		setIsSaving( true );
		save();
	};

	const modalContent = () => (
		<div className={wrapper}>
			<div className="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
				<ButtonIcon
					label={ closeIcon }
					icon="close"
					iconSize="md"
					className="sui-button-float--right"
					onClick={ () => setOpen( false ) }
				/>
				<h2 id="sui-config-edit-title">
					{ title }
				</h2>

				<div className="apply-loader">
					{ applyLoader }
				</div>
				<div className="region-match">
					{ desc.replace('{configName}', config.name) }
				</div>
			</div>
			<div className="sui-box-body region-mismatch">
				<div id="sui-apply-modal-warning" className="sui-notice sui-active sui-notice-warning">
					<div className="sui-notice-content">
						<div className="sui-notice-message">
							<span className="sui-notice-icon sui-icon-info sui-md" aria-hidden="true"></span>
							<p>{ notice }</p>
						</div>
					</div>
				</div>
			</div>

			<div className="sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60">
				<Button
					design="ghost"
					label={ cancelButton }
					onClick={ () => setOpen( false ) }
				/>
				<Button
					color="blue"
					icon="check"
					label={ actionButton }
					onClick={ doAction }
					loading={ isSaving }
					className="sui-config-apply"
				/>
			</div>
		</div>
	);

	return (
		<Modal
			mounted={ true }
			dialogId="sui-configs-apply-modal"
			titleId="sui-config-apply-title"
			size="sm"
			modalContent={ modalContent }
		/>
	);
};

export default ApplyModal;
