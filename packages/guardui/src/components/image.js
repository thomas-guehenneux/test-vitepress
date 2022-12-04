import GuardElement from "./element.js";

export default class Image extends GuardElement {

    img;

    constructor() {
        super();

        this.img = document.createElement('img');

        this.img.style.width = this.container.style.width;
        this.img.style.height = this.container.style.height;

        const src = this.getAttribute('src')
        if (src) {
            this.img.setAttribute('src', src); 
        }

        this.container.append(this.img);
    }
}

window.customElements.define('g-image', Image);