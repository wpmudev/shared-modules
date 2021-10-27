[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/shared-notifications-black-friday)](https://www.npmjs.com/package/@wpmudev/shared-notifications-black-friday)

# Black Friday Notification

This package works as a **Shared Module** between [WPMU DEV](https://wpmudev.com/) plugins and it allows us to notify users about Black Friday offers.

## Installation

```
npm i @wpmudev/shared-notifications-black-friday --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import { NoticeBlack } from '@wpmudev/shared-notifications-black-friday';

const MyApp = () => {
    return (
        <NoticeBlack
            link="https://wpmudev.com/"
            sourceLang={
				discount: "50% Off",
				closeLabel: "Close",
				linkLabel: "See the deal"
			}
        >
            <p><strong>Black Friday Offer!</strong> Get a Pro plugin for free and much more with 50% OFF.</p>
			<p><small>*Only admin users can see this message</small></p>
        </NoticeBlack>
    );
}
```

### Properties

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| link | string | Sets call to action button URL. |
| marginTop | string | Allows you to add additional space at `top` of the module. |
| marginRight | string | Allows you to add additional space at `right` of the module. |
| marginBottom | string | Allows you to add additional space at `bottom` of the module. |
| marginLeft | string | Allows you to add additional space at `left` of the module. |
| sourceLang | object | Allows to translate component labels. |
| onCloseClick | - | Use this property to pass a function when clicking on close button. |