import React from 'react';
import { Header } from '../lib/shared-header';

export default {
	title: 'Header',
	component: Header
}

const Primary = () => {
	return <Header />;
}
Primary.storyName = 'Header';
Primary.args = {}
Primary.argTypes = {}

export { Primary }