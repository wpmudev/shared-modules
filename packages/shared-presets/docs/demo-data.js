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
};

export const demoContent = [
	{
		id: 1,
		name: "Basic Config",
		description: "Recommended backup advanced config for all site.",
		created_date: "March 22, 2021 10:03 am",
		config: [
			{
				id: "bulk_smush",
				name: "Bulk Smush",
				content: "Automatic compression - Active\nSuper-Smush - Active\nMetadata - Active\nImage Resizing - Inactive\nOriginal Images - Inactive\nBackup Original Images - Inactive\nPNG to JPEG Conversion - Inactive"
			},
			{
				id: "lazy_load",
				name: "Lazy Load",
				content: "Lazy Load - Active\nMedia Types - jpeg, png, webp, gif, svg, iframe\nOutput Locations - content, widgets, thumbnails, gravatars\nDisplay And Animation - Selected: fadein. Fade in duration: 400. Fade in delay: 0\nIncluded Post Types - frontpage, home, page, single, archive, category, tag\nLoad Scripts In Footer - Yes\nNative Lazy Load Enabled - No\nDisable Noscript - No"
			},
			{
				id: "cdn",
				name: "CDN",
				content: "Inactive"
			},
			{
				id: "webp_mod",
				name: "Local WebP",
				content: "Inactive"
			},
			{
				id: "integrations",
				name: "Integrations",
				content: "Gutenberg Support - Inactive\nWPBakery Page Builder - Inactive\nAmazon S3 - Inactive\nNextGen Gallery - Inactive"
			},
			{
				id: "tools",
				name: "Tools",
				content: "Image Resize Detection - Inactive"
			},
			{
				id: "settings",
				name: "Settings",
				content: "Color Accessibility - Inactive\nUsage Tracking - Inactive\nKeep Data On Uninstall - Active"
			},
		],
	},
	{
		id: 2,
		name: "Advanced Config",
		description: "Recommended backup advanced config for all site.",
		created_date: "March 22, 2021 10:03 am",
		config: [
			{
				id: "bulk_smush",
				name: "Bulk Smush",
				content: "Automatic compression - Active\nSuper-Smush - Active\nMetadata - Active\nImage Resizing - Inactive\nOriginal Images - Inactive\nBackup Original Images - Inactive\nPNG to JPEG Conversion - Inactive"
			},
			{
				id: "lazy_load",
				name: "Lazy Load",
				content: "Lazy Load - Active\nMedia Types - jpeg, png, webp, gif, svg, iframe\nOutput Locations - content, widgets, thumbnails, gravatars\nDisplay And Animation - Selected: fadein. Fade in duration: 400. Fade in delay: 0\nIncluded Post Types - frontpage, home, page, single, archive, category, tag\nLoad Scripts In Footer - Yes\nNative Lazy Load Enabled - No\nDisable Noscript - No"
			},
			{
				id: "cdn",
				name: "CDN",
				content: "Inactive"
			},
			{
				id: "webp_mod",
				name: "Local WebP",
				content: "Inactive"
			},
			{
				id: "integrations",
				name: "Integrations",
				content: "Gutenberg Support - Inactive\nWPBakery Page Builder - Inactive\nAmazon S3 - Inactive\nNextGen Gallery - Inactive"
			},
			{
				id: "tools",
				name: "Tools",
				content: "Image Resize Detection - Inactive"
			},
			{
				id: "settings",
				name: "Settings",
				content: "Color Accessibility - Inactive\nUsage Tracking - Inactive\nKeep Data On Uninstall - Active"
			},
		],
	}
];

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
	settingsLabels: {
		bulk_smush: 'Bulk Smush',
		lazy_load: 'Lazy Load',
		cdn: 'CDN',
		webp_mod: 'WebP Mod',
		integrations: 'Integrations',
		settings: 'Settings',
	},
};
