import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const customTheme = create({
	base: 'light',
	brandTitle: 'Shared Modules',
});

addons.setConfig({
	theme: customTheme
});