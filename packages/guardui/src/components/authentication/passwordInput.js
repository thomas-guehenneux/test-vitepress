import BaseInput from "./baseInput.js";

export default class PasswordInput extends BaseInput {

    constructor() {
        super();

        this.input.setAttribute('type', 'password');
        this.input.setAttribute('placeholder', this.getAttribute('placeholder') || '请输入密码');
    }
}

window.customElements.define('g-password-input', PasswordInput);