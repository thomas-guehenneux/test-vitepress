export default class Message {
    createToast() {
        var toast = document.querySelector('g-toast')
        if (toast == undefined) {
            toast = document.createElement('g-toast');
            const [guardRoot] = document.getElementsByTagName('g-guard');
            if (guardRoot) {
                guardRoot.firstChild.insertAdjacentElement('beforebegin', toast);
            } else {
                document.body.appendChild(toast);
            }
        }
        return toast;
    }

    success(text) {
        var toast = this.createToast();
        toast.success(text)
    }

    error(text) {
        var toast = this.createToast();
        toast.error(text)
    }
}