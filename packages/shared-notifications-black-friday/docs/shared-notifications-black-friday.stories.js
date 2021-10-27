import React from "react";
import { NoticeBlack } from "../lib/shared-notifications-black-friday";

export default {
	title: "Notifications/Black Friday",
	component: NoticeBlack
}

export const Untranslated = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p><strong>Black Friday Offer!</strong> Get 11 Pro plugins on unlimited sites and much more with 50% OFF WPMU DEV Agency plan FOREVER</p>
			<p><small>*Only admin users can see this message</small></p>
		</NoticeBlack>
	);
};
Untranslated.storyName = "Default";
Untranslated.args = {
	link: 'https://wpmudev.com/'
}

export const Translated = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p><strong>¡Oferta de Viernes Negro!</strong> Obtén 11 plugins Pro para sitios ilimitados y mucho más por el 50% DE DESCUENTO en el plan WPMU DEV Agency DE POR VIDA</p>
			<p><small>*Solo los administradores pueden ver este mensaje</small></p>
		</NoticeBlack>
	);
}
Translated.storyName = "Translated";
Translated.args = {
	...Untranslated.args,
	sourceLang: {
		discount: '50% Dscto',
		closeLabel: 'Cerrar',
		linkLabel: 'Ir a la oferta'
	}
}
