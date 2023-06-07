const FileFormat = {PNG: "png",JPG: "jpg",GIF: "gif"};class CustomComponent extends HTMLElement {constructor() {super();this.innerHTML = this.render();}get properties() {return Object.values(this.attributes).reduce((acc, attr) => {acc[attr] = attr.value;});}}const App = {navigate: (screenName) => {parent.document.getElementById("app-screen").src = "./../screens/"+screenName+"/screen.html";document.getElementById("app-screen").style.color = "red";},alert: (message) => {parent.alert(message);},getResourceURL: (name, format) => {return "./../resources/"+name+"."+format;},addComponent: (tag, component) => {let script = document.createElement("script");script.type = "module";script.src = "./../../components/"+component+".js";document.head.appendChild(script);customElements.define(tag, component);}};export {FileFormat,CustomComponent,App};