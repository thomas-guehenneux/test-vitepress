import GuardElement from "./element.js";

export default class Input extends GuardElement {

    input;

    constructor() {
        super();

        this.input = document.createElement('input');

        this.input.style.width = this.container.style.width;
        this.input.style.height = this.container.style.height || '44px';

        this.input.setAttribute('type', 'text');
        this.input.setAttribute('value', this.getAttribute('text') || '');
        this.input.setAttribute('placeholder', this.getAttribute('placeholder')) || '';
        this.container.style.borderRadius = this.getAttribute('borderRadius') || '4px';

        this.container.append(this.input);
    }

    getText() {
        return this.input.value;
    }

    setText(value) {
        this.input.value = value;
    }
}

window.customElements.define('g-input', Input);