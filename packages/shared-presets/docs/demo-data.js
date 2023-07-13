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
		default: true,
		name: 'Basic Config',
		description: 'Recommended backup advanced config for all site.',
		selected: false,
		created_date: 'March 22, 2021 10:03 am',
		config: {
			configs: {
				settings: {
					advanced: {
						query_string: false,
						emoji: false,
						cart_fragments: false,
						lazy_load: {
							enabled: false
						}
					},
					database: {
						reports: {
							enabled: false
						}
					},
					gravatar: {
						enabled: true
					},
					page_cache: {
						enabled: true,
						detection: 'auto',
						integrations: {
							varnish: false,
							opcache: false
						},
						preload: false
					},
					performance: [],
					rss: {
						enabled: true,
						duration: 3600
					},
					settings: {
						accessible_colors: false,
						remove_settings: false,
						remove_data: false,
						control: true
					},
					uptime: {
						enabled: false
					}
				}
			},
			strings: {
				advanced: [
					{
						name: 'Remove query strings from assets - Inactive',
						isPro: true
					},
					{
						name: 'Remove Emoji JS & CSS files - Inactive',
						isPro: true
					},
					{
						name: 'Disable WooCommerce cart fragments - Inactive',
						isPro: true
					},
					{
						name: 'Comments lazy loading - Inactive',
						isPro: true
					}
				],
				database: [
					{
						name: 'Database - Inactive',
						isPro: false
					}	
				],
				gravatar: [
					{
						name: 'Gravatar cache - Active',
						isPro: true
					}
				],
				page_cache: [
					{
						name: 'Page cache - Active',
						isPro: true
					},
					{
						name: 'File change detection - Auto',
						isPro: false
					},
					{
						name: 'Purge Varnish cache - Inactive',
						isPro: false
					},
					{
						name: 'Purge OpCache - Inactive',
						isPro: false
					},
					{
						name: 'Cache preloading - Inactive',
						isPro: false
					}
				],
				rss: [
					{
						name: 'RSS caching - Active',
						isPro: false
					}
				],
				settings: [
					{
						name: 'High contrast mode - Inactive',
						isPro: true
					},
					{
						name: 'Remove settings on uninstall - Inactive',
						isPro: true
					},
					{
						name: 'Remove data on uninstall - Inactive',
						isPro: true
					},
					{
						name: 'Cache control in admin bar - Active',
						isPro: false
					}
				],
				uptime: [
					{
						name: 'Uptime - Inactive',
						isPro: true
					}
				]
			}
		}
	},
	{
		id: 2,
		default: false,
		name: 'Advanced Config',
		description: 'Recommended backup advanced config for all site.',
		selected: false,
		created_date: 'March 22, 2021 10:03 am',
		config: {
			configs: {
				settings: {
					advanced: {
						query_string: false,
						emoji: false,
						cart_fragments: false,
						lazy_load: {
							enabled: false
						}
					},
					database: {
						reports: {
							enabled: false
						}
					},
					gravatar: {
						enabled: true
					},
					page_cache: {
						enabled: true,
						detection: 'auto',
						integrations: {
							varnish: false,
							opcache: false
						},
						preload: false
					},
					performance: [],
					rss: {
						enabled: true,
						duration: 3600
					},
					settings: {
						accessible_colors: false,
						remove_settings: false,
						remove_data: false,
						control: true
					},
					uptime: {
						enabled: false
					}
				}
			},
			strings: {
				advanced: [
					{
						name: 'Remove query strings from assets - Inactive',
						isPro: true
					},
					{
						name: 'Remove Emoji JS & CSS files - Inactive',
						isPro: true
					},
					{
						name: 'Disable WooCommerce cart fragments - Inactive',
						isPro: true
					},
					{
						name: 'Comments lazy loading - Inactive',
						isPro: true
					}
				],
				database: [],
				gravatar: [
					{
						name: 'Gravatar cache - Active',
						isPro: true
					}
				],
				page_cache: [
					{
						name: 'Page cache - Active',
						isPro: true
					},
					{
						name: 'File change detection - Auto',
						isPro: false
					},
					{
						name: 'Purge Varnish cache - Inactive',
						isPro: false
					},
					{
						name: 'Purge OpCache - Inactive',
						isPro: false
					},
					{
						name: 'Cache preloading - Inactive',
						isPro: false
					}
				],
				rss: [
					{
						name: 'RSS caching - Active',
						isPro: false
					}
				],
				settings: [
					{
						name: 'High contrast mode - Inactive',
						isPro: true
					},
					{
						name: 'Remove settings on uninstall - Inactive',
						isPro: true
					},
					{
						name: 'Remove data on uninstall - Inactive',
						isPro: true
					},
					{
						name: 'Cache control in admin bar - Active',
						isPro: false
					}
				],
				uptime: [
					{
						name: 'Uptime - Inactive',
						isPro: true
					}
				]
			}
		}
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
	deleteAction: {
		successMessage: '{configName} config deleted successfully.',
	},
	bulkDeleteAction: {
		successMessage: 'Config(s) deleted successfully.',
	},
	settingsLabels: {
		bulk_smush: 'Bulk Smush',
		lazy_load: 'Lazy Load',
		cdn: 'CDN',
		webp_mod: 'WebP Mod',
		integrations: 'Integrations',
		settings: 'Settings',
	},
};
