[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?color=green)](http://www.gnu.org/licenses/gpl-3.0)
[![npm](https://img.shields.io/npm/v/@wpmudev/shared-notifications-banner)](https://www.npmjs.com/package/@wpmudev/shared-notifications-banner)

# Banner Notification

This package works as a **Shared Module** between [WPMU DEV](https://wpmudev.com/) plugins and it allows us to notify users about an special price for our products.

## Installation

```
npm i @wpmudev/shared-notifications-banner --save-dev
```

## Usage

### Javascript Instantiation

```js
import React from 'react';
import { NoticeBanner } from '@wpmudev/shared-notifications-banner';

import image1x from './sample-image.png';
import image2x from './sample-image@2x.png';

const MyApp = () => {
    return (
        <NoticeBanner
            title="Hosting by the Same People Behind Forminator!"
            image={ image1x }
            imageRetina={ image2x }
            disclaimer="Only admin users can see this message"
            buttonLabel="Claim Your 50% Off Hosting Now!"
            buttonLink="https://premium.wpmudev.com/"
        >
            <p>Unleash the Full Power of Your Site with WPMU DEV Hosting! Lightning-Fast Speed, Robust Security, 24/7 Expert Support, and Effortless Ease of Use. Take Your Sites to the Next Level Today with 50% off the First Month!</p>
        </NoticeBanner>
    );
}
```

### Properties

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| title* | string | Set a catchy title for notification. |
| image | string | When not empty, allows you to show an image at left of the main content. |
| imageRetina | string | Make sure image shows up correctly on bigger displays. |
| disclaimer | string | This text goes below content in smaller size to highlight it from the rest. |
| buttonLabel | string | Sets call to action button label. |
| buttonLink | string | Sets call to action button URL. |