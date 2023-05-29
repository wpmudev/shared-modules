[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/shared-notifications-discount)](https://www.npmjs.com/package/@wpmudev/shared-notifications-discount)

# Discount Notification

This package works as a **Shared Module** between [WPMU DEV](https://wpmudev.com/) plugins and it allows us to notify users about an special price for our products.

## Installation

```
npm i @wpmudev/shared-notifications-discount --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import { NoticeDiscount } from '@wpmudev/shared-notifications-discount';

import image1x from './sample-image.png';
import image2x from './sample-image@2x.png';

const MyApp = () => {
    return (
        <NoticeDiscount
            price={65}
            discount={20}
            priceLabel="Pay Only"
            priceTime="month"
            title="Don't Miss Out On Subscription / Recurring Payment Support"
            image={ image1x }
            imageRetina={ image2x }
            disclaimer="Only admin users can see this message"
            buttonLabel="Get 20% Off Forminator Pro"
            buttonLink="https://premium.wpmudev.com/"
        >
            <p>We'd hate for free users to miss out on Subscription / Recurring Payment Support, so we're temporarily slashing the price of Forminator Pro.</p>
        </NoticeDiscount>
    );
}
```

### Properties

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| price | string | Set the base price to promote. |
| discount | string | Enter the amount to be discounted in percentage from `price`. |
| priceLabel | string | Highlight promotional price with catchy text. |
| priceTime | string | By default it is set to `month` for montly payments. |
| title* | string | Set a catchy title for notification. |
| image | string | When not empty, allows you to show an image at left of the main content. |
| imageRetina | string | Make sure image shows up correctly on bigger displays. |
| disclaimer | string | This text goes below content in smaller size to highlight it from the rest. |
| buttonLabel | string | Sets call to action button label. |
| buttonLink | string | Sets call to action button URL. |