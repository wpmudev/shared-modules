import React from "react";
import { NoticeBlack } from "../lib/shared-notifications-black-friday";

export default {
	title: "Notifications/Black Friday",
	component: NoticeBlack
}

export const Primary = ({ ...args }) => {
	return (
		<NoticeBlack data-test="go" { ...args }>
			<p>From the creators of Smush, WPMU DEV's all-in-one platform gives you all the Pro tools and support you need to run and grow a web development business. Trusted by over 50,000 web developers. Limited deals available.</p>
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
		finePrint: {
			label: "Don't want to claim the offer right now?",
			action: 'Sign up for exclusive VIP access to future sales.',
		}
	},
	price: 3000,
	discount: 83.5,
	action: {
		label: 'Get deal',
		link: 'https://wpmudev.com/',
	},
	formView: {
		title: 'Get VIP access to our biggest sales',
		description: 'The best WPMU DEV deals, directly to your inbox, all year round.',
		hasForm: false,
		content: '',
		fields: '',
		submit: '',
	},
	successView: {
		enabled: false,
		title: 'Thanks for joining! 🎉',
		description: "We've sent an email confirming your addition to our VIP list. Just make sure it hasn't landed in spam so you don't miss out on the epic deals!",
		content: '',
		close: 'Got it',
	},
}

export const Secondary = ( args ) => {
	return (
		<NoticeBlack { ...args }>
			<p>De los creadores de Smush, la plataforma todo en uno de WPMU DEV te brinda todas las herramientas y el soporte que necesitas para ejecutar y hacer crecer tu negocio de desarrollo web. Con la confianza de más de 50,000 desarrolladores web. Ofertas limitadas disponibles.</p>
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
		finePrint: {
			label: "¿Quieres reclamar la oferta ahora mismo?",
			action: 'Regístrese para obtener acceso VIP exclusivo a futuras ventas.',
		}
	},
	price: 3000,
	discount: 83.5,
	action: {
		label: 'Obtener Oferta',
		link: 'https://wpmudev.com/',
	},
	formView: {
		title: 'Obtenga acceso VIP a nuestras mejores ofertas',
		description: 'Las mejores ofertas de WPMU DEV, directamente en su bandeja de entrada, durante todo el año.',
		hasForm: false,
		content: '',
		fields: '',
		submit: '',
	},
	successView: {
		enabled: false,
		title: '¡Gracias por unirte! 🎉',
		description: "Hemos enviado un correo electrónico confirmando su incorporación a nuestra lista VIP. ¡Solo asegúrese de que no haya llegado al correo no deseado para no perderse las ofertas épicas!",
		content: '',
		close: 'Entendido',
	},
}
