import React from "react";
import { NoticeBlack } from "../lib/shared-notifications-black-friday";

export default {
	title: "Notifications/Black Friday",
	component: NoticeBlack
}

export const Untranslated = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p><strong>Black Friday Offer!</strong> Get Smush Pro for free and much more with 50% OFF WPMU DEV Agency Plan FOREVER</p>
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
			<p><strong>Oferta de Viernes Negro!</strong> Obtén Smush Pro gratis y mucho más con el 50% DE DESCUENTO en el "Plan de Agencia WPMU DEV" POR SIEMPRE</p>
			<p><small>*Solo los administradores pueden ver este mensaje</small></p>
		</NoticeBlack>
	);
}
Translated.storyName = "Translated";
Translated.args = {
	...Untranslated.args,
	sourceLang: {
		close: 'Cerrar',
		off: 'Dscto',
		cta: 'Ir a la oferta'
	}
}
