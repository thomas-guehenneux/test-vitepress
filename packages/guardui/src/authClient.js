import JSEncrypt from './jsencrypt.js';

export default class AuthClient {

    host;
    config;

    async loginByAccount(account, password) {
        // Note we cannot use window.crypto.subtle APIs because we used PKCS1Padding
        // but window.crypto.subtle only supports OAEP padding
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.config.publicKey);
        const encrypted = encrypt.encrypt(password);
        const body = {account: account, password: encrypted};
        return await this.post(`/api/v2/login/account`, body);
    }

    async registerByUserName(username, password) {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.config.publicKey);
        const encrypted = encrypt.encrypt(password);
        const body = {username, password: encrypted, forceLogin: true};
        return await this.post(`/api/v2/register/username`, body);
    }

    post(endpoint, body) {
        let url = `https://${this.config.identifier}.${this.host}${endpoint}`
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('post', url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('x-authing-userpool-id', this.config.userPoolId);
            xhr.setRequestHeader('x-authing-app-id', this.appId);
            xhr.send(JSON.stringify(body));
    
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4 || xhr.status === 0) return
    
                if (xhr.status >= 200 && xhr.status < 300) {
                    let responseData = JSON.parse(xhr.response);
                    if (responseData.code === undefined) {
                        responseData = {code: 200, message: '', data: responseData};
                    }
                    resolve(responseData);
                } else {
                    reject({code: xhr.status, message: `request failed with status code ${xhr.status}\nurl: ${url}`});
                }
            }
        });
    }
}
