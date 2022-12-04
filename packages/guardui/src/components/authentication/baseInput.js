import Guard from "../../guard.js";
import Input from "../input.js";

export default class BaseInput extends Input {

    constructor() {
        super();

        this.input.style.width = this.container.style.width || '100%';

        this.input.style.backgroundColor = 'transparent';
        this.input.style.borderColor = 'transparent';
        this.input.style.outline = 'none';

        this.container.style.backgroundColor = '#F5F6F7';
        this.container.style.border = '1px solid transparent';

        this.input.onfocus = async ()=> {
            let borderColor = Guard.getInstance(this).getAccentColor();
            this.container.style.border = '1px solid ' + borderColor;
        }

        this.input.addEventListener('focusout', () => {
            this.container.style.border = '1px solid transparent'
        });
    }
}

window.customElements.define('g-base-input', BaseInput);
