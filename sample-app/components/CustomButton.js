import { CustomComponent } from "../app/App.js";

const STYLE = `
    color: white;
    border: 0;
    outline: none;
`;

class CustomButton extends CustomComponent {
    constructor() {
        super();
        this.onclick = () => window.location.href = "https://github.com/exagyde/webappkit";
    }

    render() {
        return `
            <button style="${STYLE}" class="my-button">${this.properties.value}</button>
        `;
    }
}

export {
    CustomButton
};

