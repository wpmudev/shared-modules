import React from 'react';
import { Button } from '@wpmudev/react-button';

const Upsells = ({
	titleIcon,
	title,
	description,
	listItems,
	buttonLabel,
	buttonUrl
}) => {

	const list = listItems.map(( item, index ) =>
		<li key={ index }>
			<span className="sui-icon-check sui-md" aria-hidden="true"></span> { item }
		</li>
	);

	return (
		<div className="sui-box">
			<div className="sui-box-header">
				<h2 className="sui-box-title">
					{ titleIcon ? 
						<span className={ `sui-icon-${ titleIcon }` } aria-hidden="true"></span> :
						''
					}
					{ title } 
					<span className="sui-tag sui-tag-pro">Pro</span>
				</h2>
			</div>
			<div className="sui-box-body">
				{ description ?
					<p>{ description }</p>:
					''
				}
				{ list ? 
					<ol className="sui-upsell-list">{ list }</ol>:
					''
				}
			</div>
			<div className="sui-box-footer" style={{ borderTop: 0, paddingTop: 0 }}>
				{ ( buttonLabel && buttonUrl ) ? 
					<Button className="sui-button-purple" label={ buttonLabel } href={ buttonUrl } />:
					''
				}
			</div>
		</div>
	);
};

export { Upsells };