import Button from "./button.js";

export default class LoadingButton extends Button {

    constructor() {
        super();

        this.button.style.width = this.container.style.width || '100%';
        this.button.style.height = this.container.style.height || '42px';
        this.button.style.fontSize = this.getAttribute('fontSize') || '16px';
        this.button.style.padding = this.getAttribute('padding') || '0px';
    }

    getType() {
        return 'primary';
    }
}

window.customElements.define('g-loading-button', LoadingButton);