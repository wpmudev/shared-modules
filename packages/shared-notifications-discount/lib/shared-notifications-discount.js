import React, { useState } from "react";
import { Button } from "@wpmudev/react-button";
import { Discount } from "./shared-notifications-discount__utils";

export const NoticeDiscount = ({
	title,
	price,
	priceTime,
	discount,
	image,
	imageRetina,
	imageAlt,
	disclaimer,
	priceLabel,
	buttonLabel,
	buttonLink,
	closeLabel,
	onCloseClick,
	children,
	...props
}) => {
	const [isClose, setIsClose] = useState(false);
	const closeOnClick = e => {
		setIsClose(true);
		onCloseClick(e);
	};

	const calcPrice = price - ((discount / 100) * price);
	const newPrice = calcPrice.toFixed(0);

	const hasDiscount = (null !== discount && '' !== discount && 0 !== discount) || discount > 0;

	const hasImage1x = null !== image && '' !== image;
	const hasImage2x = null !== imageRetina && '' !== imageRetina;

	const hasDisclaimer = ( null !== disclaimer && '' !== disclaimer );

	const hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
	const hasButtonLink = null !== buttonLink && '' !== buttonLink;
	const hasButton = hasButtonLabel && hasButtonLink;

	return (
		!isClose && (
			<>
				<Discount.Global />
				<div
					className="sui-module-notice-discount__wrapper"
					{ ...props }
				>

					<div className="sui-module-notice-discount__header">

						{ hasDiscount && <div className="sui-module-notice-discount__ribbon">{ discount }% Off</div> }

						{ null !== title && '' !== title && <h2 className="sui-module-notice-discount__title">{ title }</h2> }

						<button
							className="sui-button-icon sui-button-white"
							onClick={ closeOnClick }
						>
							<span className="sui-icon-close sui-sm" aria-hidden="true" />
							<span className="sui-screen-reader-text">
								{ closeLabel || 'Close this offer' }
							</span>
						</button>

					</div>

					<div className="sui-module-notice-discount__body">

						{ hasImage1x && !hasImage2x &&
							<img
								src={ image }
								alt={ imageAlt || 'Plugin image' }
								className="sui-module-notice-discount__image"
								aria-hidden="true"
							/>
						}

						{ hasImage1x && hasImage2x && (
							<img
								src={ image }
								srcSet={ image + ' 1x,' + imageRetina + ' 2x' }
								alt={ imageAlt || 'Plugin image' }
								className="sui-module-notice-discount__image"
								aria-hidden="true"
							/>
						)}

						<div className="sui-module-notice-discount__content">

							{ children }

							{ hasDisclaimer && (
								<p className="sui-disclaimer">* { disclaimer }</p>
							)}

						</div>

						<div className="sui-module-notice-discount__border"><span /></div>

						<div className="sui-module-notice-discount__price-wrapper">

							<h3 className="sui-module-notice-discount__price-label">{ priceLabel || 'Pay Only' }</h3>

							{ hasDiscount
								? (
									<p className="sui-module-notice-discount__price">
										<span>${ price }</span>
										<strong>${ newPrice }</strong>/{ priceTime || 'month' }
									</p>
								)
								: <p className="sui-module-notice-discount__price"><strong>${ price }</strong>/{ priceTime || 'month' }</p>
							}

							{ hasButton && (
								<Button
									label={ buttonLabel }
									color="purple"
									href={ buttonLink }
									target="_blank"
								/>
							)}

							{ hasDisclaimer && <p className="sui-disclaimer">* { disclaimer } *</p> }

						</div>

					</div>

				</div>
			</>
		)
	);
}
