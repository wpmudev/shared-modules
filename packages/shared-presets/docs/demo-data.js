import React from 'react';

export const demoData = {
	root: '',
	nonce: '',
	apiKey: '',
	hubBaseUrl: '',
	pluginData: {
		pluginName: 'Smush Pro'
	}
};

export const demoUrls = {
	freeNoticeHub: 'https://wpmudev.com/hub-welcome/',
	hubMyConfigs: 'https://wpmudev.com/hub2/configs/my-configs',
	configsPage: '#',
	accordionImg: 'https://ps.w.org/wp-smushit/assets/icon-256x256.gif',
}

export const demoContent = (
	{
		id: "2",
		default: "advanced",
		name: "Advanced Config",
		description: "Recommended backup advanced config for all site.",
		image: "https://wpmudev.com/wp-content/uploads/2014/11/Smush_2016_02.png",
		config: [
			{
				id: "schedule",
				name: "Schedule",
				content: "Weekly @ 12:00 am on Friday"
			},
			{
				id: "region",
				name: "Region",
				content: "US"
			}
		],
	}
);

export const demoLang = {
	title: 'Configuraciones Preestablecidas',
	upload: 'Subir',
	save: 'Guardar configuraciones',
	manageConfigs: 'Administrar configuraciones',
	loading: 'Actualizando la lista de configuraciones…',
	emptyNotice: 'No tienes ninguna configuración disponible. ¡Guarda las configuraciones preestablecidas de tus ajustes, luego súbelas y aplícalas en otros sitios con un solo click!',
	baseDescription: '¡Usa las configuraciones para guardas las configuraciones preestablecidas de tus ajustes, luego súbelas y aplícalas en otros sitios con un solo click!',
	proDescription: (
		<React.Fragment>
			{'Puedes aplicar fácilmente las configuraciones a varios sitios a la vez desde '}
			<a
				href={demoUrls.hubMyConfigs}
				target="_blank"
				rel="noreferrer"
			>
			{'el Hub.'}
			</a>
		</React.Fragment>
	),
	widgetDescription: 'Usa las configuraciones para guardar las configuraciones preestablecidas de tus ajustes.',
	syncWithHubText: '¿Creaste o actualizaste las configuraciones a través del Hub?',
	syncWithHubButton: 'Comprueba nuevamente para obtener la lista actualizada.',
	apply: 'Aplicar',
	download: 'Descargar',
	edit: 'Nombre y Descripción',
	delete: 'Borrar',
	freeNoticeMessage: '¿Te cansaste de guardar, descargar y subir las configuraciones a cada uno de tus sitios? Los miembros de WPMU DEV usan The Hub para aplicar las configuraciones a varios sitios a la vez de manera fácil... ¡Pruébalo gratis hoy!',
	freeButtonLabel: 'Prueba The Hub',
	notificationDismiss: 'Descartar notificación',
	defaultRequestError: 'Solicitud fallida. Estado: {status}. Por favor, carga la página nuevamente y vuelve a intentarlo.',
	uploadWrongPluginErrorMessage: 'El archivo cargado no es una configuración de {pluginName}. Por favor, asegúrate de que el archivo cargado sea el correcto.',
	uploadActionSuccessMessage: 'Las configuraciones de {configName} se cargaron correctamente – ahora puedes aplicarlas a este sitio.',
	applyAction: {
		successMessage: 'Las configuraciones de {configName} han sido aplicadas correctamente.',
	},
	editAction: {
		successMessage: 'Las configuraciones de {configName} han sido creadas exitosamente.',
	},
	deleteAction: {},
	settingsLabels: {},
};
