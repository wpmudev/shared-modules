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
		name: "Basic Config",
		description: "Recommended backup advanced config for all site.",
		selected: false,
		created_date: "March 22, 2021 10:03 am",
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
						detection: "auto",
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
					"Remove query strings from assets - Inactive\nRemove Emoji JS & CSS files - Inactive\nDisable WooCommerce cart fragments - Inactive\nComments lazy loading - Inactive\n"
				],
				database: [
					"Database - Inactive\n"				
				],
				gravatar: [
					"Inactive"
				],
				page_cache: [
					"Page cache - Active\nFile change detection - Auto\nPurge Varnish cache - Inactive\nPurge OpCache - Inactive\nCache preloading - Inactive\n"
				],
				rss: [
					"RSS caching - Active\n"
				],
				settings: [
					"High contrast mode - Inactive\nRemove settings on uninstall - Inactive\nRemove data on uninstall - Inactive\nCache control in admin bar - Active\n"
				],
				uptime: [
					"Uptime - Inactive\n"
				]
			}
		}
	},
	{
		id: 2,
		default: false,
		name: "Advanced Config",
		description: "Recommended backup advanced config for all site.",
		selected: false,
		created_date: "March 22, 2021 10:03 am",
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
						detection: "auto",
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
					"Remove query strings from assets - Inactive\nRemove Emoji JS & CSS files - Inactive\nDisable WooCommerce cart fragments - Inactive\nComments lazy loading - Inactive\n"
				],
				database: [
					""				
				],
				gravatar: [
					"Gravatar cache - Active\n"
				],
				page_cache: [
					"Page cache - Active\nFile change detection - Auto\nPurge Varnish cache - Inactive\nPurge OpCache - Inactive\nCache preloading - Inactive\n"
				],
				rss: [
					"RSS caching - Inactive\n"
				],
				settings: [
					"High contrast mode - Inactive\nRemove settings on uninstall - Inactive\nRemove data on uninstall - Inactive\nCache control in admin bar - Active\n"
				],
				uptime: [
					"Uptime - Inactive\n"
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

export const demoProItems = [
	'Remove query strings from assets',
	'Database',
	'Purge Varnish cache',
	'Remove data on uninstall'
];