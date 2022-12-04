import BaseInput from "./baseInput.js";

export default class PasswordConfirmInput extends BaseInput {

    constructor() {
        super();

        this.input.setAttribute('type', 'password');
        this.input.setAttribute('placeholder', this.getAttribute('placeholder') || '请再次输入密码');
    }
}

window.customElements.define('g-password-confirm-input', PasswordConfirmInput);