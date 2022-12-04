import Layout from "./layout.js";

export default class HLayout extends Layout {

    constructor() {
        super();

        this.container.style.flexDirection = 'row';
    }
}

window.customElements.define('g-h-layout', HLayout);
