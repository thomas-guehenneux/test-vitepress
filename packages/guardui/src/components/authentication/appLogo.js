import Image from "../image.js";
import Guard from "../../guard.js";

export default class AppLogo extends Image {

    constructor() {
        super();

        this.img.style.width = this.container.style.width || '48px';
        this.img.style.height = this.container.style.height || '48px';

        const guard = Guard.getInstance(this);
        if (!guard.isGettingConfig) {
            this.img.setAttribute('src', guard.config.logo);
        }
    }

    configCallback(guard) {
        this.img.setAttribute('src', guard.config.logo);
    }
}

window.customElements.define('g-app-logo', AppLogo);