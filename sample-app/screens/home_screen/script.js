import { App } from "./../../app/App.js";
import { CustomButton } from "./../../components/CustomButton.js";

window.addEventListener("load", load);

App.addComponent("my-button", CustomButton);

function load() {
    //
}
