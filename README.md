# Web App Kit framework

Minimalist and lightweight framework to init and build web app based on Progressive Web App process, web app like native application.

​![WAK Logo](https://github.com/exagyde/webappkit/blob/main/wak_title.jpg)

[GitHub project link](https://github.com/exagyde/webappkit)

## What I can do ?

- Create easily progressive web app
- Manage your app screens
- Use custom components with web component

## What I can't do ?

- Nothing at all ! This framework is at the begining, so it has to evolve day after day

---

## Documentation

Using methods when `App` is called :

| Function | Arguments | Types | Description |
| -------- | --------- | ----- | ----------- |
| navigate | screenName | string | Switch into another screen |
| getResourceURL | file | string | Return your resource link |
| addComponent | tag, component | string, string | Define your custom web component in the DOM |

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

- Start a local server and run your app

`npx wakx ./MyApp start`

-p PORT | --port PORT : Define server port number\
-l | --launch : Open app on default browser

- Build app with manifest update

`npx wakx ./MyApp build`

You can also use my package locally by donwloading **package-npm** folder, install necessary packages with `npm install` in the folder, and by using `node ./wakx.js ...`

---

## Progressive web app

You can test your web app like native app just to add it as a shortcut on your mobile home screen, from your actual browser (Safari for iOS and Chrome for Android are recommended)

---

#### __©2024 Nolann Morencé__
