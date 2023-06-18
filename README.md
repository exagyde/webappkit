# Web App Kit framework
Little framework to develop prototype of web app who looks like native (Progressive Web App)

​![WAK Logo](./wak_logo_full.jpg)

## What I can do ?

- Manage easily your app screens
- Create custom components with web component

## What I can't do ?

- Nothing at all ! This framework is at the begining, so it has to evolve day after day

---

## Documentation

Using methods when `App` is called :

| Function | Arguments | Types | Description |
| -------- | --------- | ----- | ----------- |
| navigate | screenName | string | Switch into another screen |
| alert | message | string | Display an alert on main screen |
| getResourceURL | name, format | string, FileFormat | Return your resource link |
| addComponent | tag, component | string, string | Define your custom web component in the DOM |

Custom variables you can use :

| Variable | Options |
| ------ | ------ |
| FileFormat | PNG, JPG, GIF |

### Create custom component

In your component script :

```javascript
import { CustomComponent } from "../app/App.js";

const STYLE = `
    color: blue;
`;

class MyComponent extends CustomComponent {
    constructor() {
        super();
        // Add events listener like this.onclick
    }

    render() {
        return `
            <span style="${STYLE}">${this.properties.value}</span>
        `;
    }
}

export {
    MyComponent
};
```

In your screen JavaScript file :

```javascript
import { App } from "./../../app/App.js";
import { MyComponent } from "./../../components/MyComponent.js";

App.addComponent("my-component", MyComponent);
```

In your screen HTML file :

```html
<my-component value="Hello blue text"></my-component>
```
You can define all properties you want for your component

**⚠️ Your custom component tag has to have at minimum one dash like `<dark-button>` or `<big-title-header>`**

---

## How to use WebAppKit node package ?

- Prerequisites

[Node.js with npm and npx](https://nodejs.org/en)

- Install the necessary packages

`npm install wakx`

- Initiate a new project

`npx wakx init`

- Create a new screen

`npx wakx ./MyApp screen`

- Create a new component

`npx wakx ./MyApp component`

- Launch your app on your default browser

`npx wakx ./MyApp start`

- Just start the server

`npx wakx ./MyApp server`

- Upgrade you app version

`npx wakx ./MyApp upgrade`

You can also use my package locally by donwloading **package-npm** folder, install necessary packages with `npm install` in the folder, and by using `node ./wakx.js ...`

---

## VSCode extension

*Coming soon*

---

## Progressive web app

You can test your web app like native app just to add it as a shortcut on your mobile home screen, from your actual browser (Safari for iOS and Chrome for Android are recommended)

---

#### __©2023 NanoDév Studio__
