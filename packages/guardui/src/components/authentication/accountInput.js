import BaseInput from "./baseInput.js";

export default class AccountInput extends BaseInput {

    constructor() {
        super();

        this.input.setAttribute('placeholder', this.getAttribute('placeholder') || '请输入帐号 / 邮箱 / 电话');
    }
}

window.customElements.define('g-account-input', AccountInput);