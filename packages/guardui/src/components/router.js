export default class Router extends HTMLElement {

    pathStack = ['/'];
    stackIndex = 0;

    connectedCallback() {
        let that = this;
        window.addEventListener('popstate', function(event) {
            let state = event.state;
            if (state) {
                that.go(state.stackIndex - that.stackIndex);
            } else if (that.stackIndex > 0) {
                that.top();
            } else {
                this.window.history.go(-1);
            }
        });
    }

    updateRoute() {
        let path = this.pathStack[this.stackIndex];
        for (let i = 0;i < this.children.length;++i) {
            let child = this.children[i];
            if (child.path !== undefined && child.path !== path) {
                child.style.display = 'none';
            } else {
                child.style.display = 'flex';
            }
        }
    }

    push(path) {
        this.pathStack.push(path);
        this.stackIndex += 1;
        // Since we cannot push initial state which will make the 'back' button enabled on first page
        // we will push the next state
        window.history.pushState({stackIndex: this.stackIndex}, '');
        this.updateRoute();
    }

    pop() {
        window.history.go(-1);
    }

    go(direction) {
        let target = this.stackIndex + direction;
        if (target >= 0 && target < this.pathStack.length) {
            this.stackIndex = target;
            this.updateRoute();
        }
    }

    top() {
        this.stackIndex = 0;
        this.updateRoute();
    }
}

window.customElements.define('g-router', Router);
