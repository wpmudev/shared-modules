import React, { useState } from "react";
import { Button } from "@wpmudev/react-button";
import { Banner } from "./shared-notifications-banner__utils";

export const NoticeBanner = ({
	title,
	image,
	imageRetina,
	imageAlt,
	disclaimer,
	buttonLabel,
	buttonLink,
	closeLabel,
	onCloseClick,
	onRemindLaterClick,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState(false);
	const closeOnClick = e => {
		setIsClose(true);
		onCloseClick(e);
	};

	const remindlaterOnClick = e => {
		setIsClose(true);
		onRemindLaterClick(e);
	};

	const hasImage1x = null !== image && '' !== image;
	const hasImage2x = null !== imageRetina && '' !== imageRetina;

	const hasDisclaimer = ( null !== disclaimer && '' !== disclaimer );
	const hasTitle = ( null !== title && '' !== title );

	const hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
	const hasButtonLink = null !== buttonLink && '' !== buttonLink;
	const hasButton = hasButtonLabel && hasButtonLink;

	return (
		!isClose && (
			<>
				<Banner.Global />
				<div
					className="sui-module-notice-banner__wrapper"
					{ ...props }
				>

					{ hasImage1x && !hasImage2x &&
						<img
							src={ image }
							alt={ imageAlt || 'Plugin image' }
							className="sui-module-notice-banner__image"
							aria-hidden="true"
						/>
					}

					{ hasImage1x && hasImage2x && (
						<img
							src={ image }
							srcSet={ image + ' 1x,' + imageRetina + ' 2x' }
							alt={ imageAlt || 'Plugin image' }
							className="sui-module-notice-banner__image"
							aria-hidden="true"
						/>
					)}

					<div className="sui-module-notice-banner__body">

						<div className="sui-module-notice-banner__content">
							{ hasTitle && (
								<h2 className="sui-module-notice-banner__title">{ title }</h2>
							)}

							{ children }

							{ hasDisclaimer && (
								<p className="sui-disclaimer">* { disclaimer }</p>
							)}
						</div>

						<div className="sui-module-notice-banner__cta">
							
							<div className="sui-module-notice-banner__cta-action">
								{ hasButton && (
									<Button
										label={ buttonLabel }
										color="purple"
										href={ buttonLink }
										target="_blank"
									/>
								)}

								{ hasButton && (
									<Button
										label="Remind me later"
										design="ghost"
										onClick={ remindlaterOnClick }
									/>
								)}
							</div>
							
							{ hasDisclaimer && <p className="sui-disclaimer">* { disclaimer }</p> }

						</div>

						<button
							className="sui-button-icon sui-module-notice-banner__close"
							onClick={ closeOnClick }
						>
							<span className="sui-icon-close sui-sm" aria-hidden="true" />
							<span className="sui-screen-reader-text">
								{ closeLabel || 'Close this offer' }
							</span>
						</button>

					</div>

				</div>
			</>
		)
	);
}
