import GuardElement from "./element.js";

export default class Text extends GuardElement {

    label;

    constructor() {
        super();

        this.label = document.createElement('label');

        this.label.style.width = this.container.style.width;
        this.label.style.height = this.container.style.height;

        var textColor = '#202020';
        this.label.style.color = this.getAttribute('color') || textColor;
        this.label.style.fontFamily = this.getAttribute('fontFamily') || 'sans-serif';
        this.label.style.fontSize = this.getAttribute('fontSize') || '14px';

        this.label.textContent = this.innerHTML;
        this.innerHTML = ''

        this.container.append(this.label);
    }
}

window.customElements.define('g-text', Text);