import { CustomComponent } from "../app/App.js";

const STYLE = ``;

class NewComponent extends CustomComponent {
    constructor() {
        super();
    }

    render() {
        return `
            <div style="${STYLE}">NewComponent</div>
        `;
    }
}

export { NewComponent };