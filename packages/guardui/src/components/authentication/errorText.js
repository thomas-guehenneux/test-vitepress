import Text from "../text.js";

export default class ErrorText extends Text {

    constructor() {
        super();

        this.container.style.display = 'none';
        this.container.style.alignItems = 'center';
        this.container.style.height = this.container.style.height || '24px';
        var textColor = '#E8353E';
        this.label.style.color = this.getAttribute('color') || textColor;
        this.label.style.fontSize = this.getAttribute('fontSize') || '12px';

        if (this.label.textContent.length > 0) {
            this.container.style.display = 'flex';
        } else {
            this.container.style.display = 'none';
        }
    }

    setError(text) {
        if (text && text.length > 0) {
            this.container.style.display = 'flex';
        } else {
            this.container.style.display = 'none';
        }
        this.label.textContent = text;
    }
}

window.customElements.define('g-error-text', ErrorText);