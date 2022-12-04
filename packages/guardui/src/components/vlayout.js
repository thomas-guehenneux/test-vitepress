import Layout from "./layout.js";

export default class VLayout extends Layout {

    constructor() {
        super();

        this.container.style.flexDirection = 'column';
    }
}

window.customElements.define('g-v-layout', VLayout);
