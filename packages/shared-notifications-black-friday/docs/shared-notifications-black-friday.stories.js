import React from "react";
import { NoticeBlack } from "../lib/shared-notifications-black-friday";

export default {
	title: "Notifications/Black Friday",
	component: NoticeBlack
}

export const Primary = ({ ...args }) => {
	return (
		<NoticeBlack { ...args }>
			<p>From the creators of Smush, WPMU DEV's all-in-one platform gives you all the Pro tools and support you need to run and grow a web development business. Trusted by over 50,000 web developers. Limited deals available.</p>
			<p><small>Don't want to claim the offer right now? <button className="suim-black__link" onClick={() => { console.log( 'Open Black Friday modal.' ) }}>Sign up for exclusive VIP access to future sales</button>.</small></p>
		</NoticeBlack>
	);
};
Primary.storyName = "Default";
Primary.args = {
	content: {
		off: 'Off',
		intro: 'Black Friday offer for WP Businesses and Agencies',
		title: 'Everything you need to run your WP business for',
		close: 'Close',
	},
	price: 3000,
	discount: 83.5,
	action: {
		label: 'Get deal',
		link: 'https://wpmudev.com/',
	},
}

export const Secondary = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p>De los creadores de Smush, la plataforma todo en uno de WPMU DEV te brinda todas las herramientas y el soporte que necesitas para ejecutar y hacer crecer tu negocio de desarrollo web. Con la confianza de más de 50,000 desarrolladores web. Ofertas limitadas disponibles.</p>
			<p><small>¿No quieres reclamar la oferta este rato? <button className="suim-black__link" onClick={() => { console.log( 'Open Black Friday modal.' ) }}>Suscríbete para obtener acceso VIP exclusivo a futuras ventas</button>.</small></p>
		</NoticeBlack>
	);
}
Secondary.storyName = "Translated";
Secondary.args = {
	content: {
		off: 'Dscto',
		intro: 'Oferta de Viernes Negro para Empresas y Agencias de WP',
		title: 'Todo lo que necesitas para dirigir tu negocio de WP por',
		close: 'Cerrar',
	},
	price: 3000,
	discount: 83.5,
	action: {
		label: 'Obtener Oferta',
		link: 'https://wpmudev.com/',
	},
}
