import Guard from "../../guard.js";
import LoadingButton from "../loadingButton.js";
import Util from "../../util.js";

export default class RegisterButton extends LoadingButton {
    constructor() {
        super();

        if (this.button.innerText === undefined || this.button.innerText.length === 0) {
            this.button.textContent = '注册'
        }

        this.button.onclick = async ()=> {
            const accountInput = Util.findElement(this, 'g-account-input');
            const passwordInput = Util.findElement(this, 'g-password-input');
            const errorText = Util.findElement(this, 'g-error-text');
            if (errorText !== undefined) {
                errorText.setError('');
            }

            if (accountInput !== undefined && passwordInput !== undefined) {
                const account = accountInput.getText();
                const password = passwordInput.getText();

                const guard = Guard.getInstance();
                const res = await guard.authClient.registerByUserName(account, password);
                if (res.code === 200) {
                    guard.dispatchEvent('register', 200, res.message, res.data);
                } else {
                    if (errorText !== undefined) {
                        errorText.setError(res.message);
                    }
                    guard.dispatchEvent('register', res.code, res.message, null);
                }
            }
        };
    }
}

window.customElements.define('g-register-button', RegisterButton);