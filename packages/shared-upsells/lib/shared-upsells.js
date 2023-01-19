import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
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
		<Box>
			<BoxHeader>
				<h2 className="sui-box-title">
					{ titleIcon ? 
						<span className={ `sui-icon-${ titleIcon }` } aria-hidden="true"></span> :
						''
					}
					{ title } 
					<span className="sui-tag sui-tag-pro">Pro</span>
				</h2>
			</BoxHeader>
			<BoxBody>
				{ description ?
					<p>{ description }</p>:
					''
				}
				{ list ? 
					<ol className="sui-upsell-list">{ list }</ol>:
					''
				}
			</BoxBody>
			<BoxFooter style={{ borderTop: 0, paddingTop: 0 }}>
				{ ( buttonLabel && buttonUrl ) ? 
					<Button className="sui-button-purple" label={ buttonLabel } href={ buttonUrl } />:
					''
				}
			</BoxFooter>
		</Box>
	);
};

export { Upsells };