import VLayoutElement from "../vlayout.js";

export default class GuardContainer extends VLayoutElement {

    constructor() {
        super();

        this.container.style.boxSizing = 'border-box';
        this.container.style.width = this.getAttribute('width') || '456px';
        this.container.style.height = this.getAttribute('height') || '661px';
        this.container.style.backgroundColor = this.getAttribute('backgroundColor') || '#FFF';
        this.container.style.borderRadius = this.getAttribute('borderRadius') || '8px';
        this.container.style.padding = this.getAttribute('padding') || '16px 54px';
    }
}

window.customElements.define('g-guard-container', GuardContainer);
