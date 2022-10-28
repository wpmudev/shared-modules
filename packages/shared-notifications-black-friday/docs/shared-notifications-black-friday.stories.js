import React from "react";
import { NoticeBlack } from "../lib/shared-notifications-black-friday";

export default {
	title: "Notifications/Black Friday",
	component: NoticeBlack
}

export const Untranslated = ({ ...args }) => {
	return (
		<NoticeBlack { ...args }>
			<p>From the creators of Smush, WPMU DEV's all-in-one platform gives you all the tools and support you need to run and grow a web development business. Trusted by over 50,000 web developers. Limited deals available.</p>
			<p><small>* Only admin users can see this message</small></p>
		</NoticeBlack>
	);
};
Untranslated.storyName = "Default";
Untranslated.args = {
	content: {
		off: 'Off',
		intro: 'Black Friday SPECIAL',
		title: 'The ultimate WordPress toolkit now at',
		close: 'Close',
	},
	price: 82,
	discount: 50,
	action: {
		label: 'Get now',
		link: 'https://wpmudev.com/',
	},
}

export const Translated = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p>De los creadores de Smush, la plataforma todo en uno de WPMU DEV te brinda todas las herramientas y el soporte que necesitas para ejecutar y hacer crecer tu negocio de desarrollo web. Con la confianza de más de 50.000 desarrolladores web. Ofertas limitadas disponibles.</p>
			<p><small>* Solo los administradores pueden ver este mensaje</small></p>
		</NoticeBlack>
	);
}
Translated.storyName = "Translated";
Translated.args = {
	content: {
		off: 'Dscto',
		intro: 'ESPECIAL de Viernes Negro',
		title: 'El mejor kit de herramientas de WordPress ahora en',
		close: 'Cerrar',
	},
	price: 82,
	discount: 50,
	action: {
		label: 'Consíguelo ahora',
		link: 'https://wpmudev.com/',
	},
}
