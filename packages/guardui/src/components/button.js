import GuardElement from "./element.js";
import Guard from "../guard.js";

export default class Button extends GuardElement {

    button;

    // for route
    to;

    constructor() {
        super();

        this.button = document.createElement('button');

        this.button.style.width = this.container.style.width;
        this.button.style.height = this.container.style.height;

        const type = this.getAttribute('type') || this.getType();

        const guard = Guard.getInstance(this);
        let backgroundColor = '#FFF';
        if (type === 'primary') {
            backgroundColor = guard.getAccentColor();
        }
        this.button.style.backgroundColor = this.container.style.backgroundColor || backgroundColor;

        this.button.style.paddingTop = this.getAttribute('paddingTop') || this.getDefaultVPadding();
        this.button.style.paddingRight = this.getAttribute('paddingRight') || this.getDefaultHPadding();
        this.button.style.paddingBottom = this.getAttribute('paddingBottom') || this.getDefaultVPadding();
        this.button.style.paddingLeft = this.getAttribute('paddingLeft') || this.getDefaultHPadding();
        this.button.style.fontSize = this.getAttribute('fontSize') || '14px';
        this.button.style.borderRadius = this.getAttribute('borderRadius') || '4px';
        this.button.style.border = this.getAttribute('border') || this.getDefaultBorder();
        this.button.style.color = this.getAttribute('color') || this.getDefaultTextColor();

        this.button.textContent = this.innerHTML;
        this.innerHTML = '';
        this.button.style.cursor = 'pointer';

        this.to = this.getAttribute('to');

        // event
        if (type === 'link' || type === 'back') {
            this.button.onclick = async()=>{
                const [router] = this.getRootNode().firstChild.getElementsByTagName('g-router');
                if (router !== undefined) {
                    if (type === 'link') {
                        if (this.to) {
                            router.push(this.to);
                        }
                    } else {
                        router.pop();
                    }
                }
            }
        }

        this.container.append(this.button);
    }

    getType() {
        return 'default';
    }

    renderCallback(guard) {
        this.button.style.backgroundColor = this.container.style.backgroundColor || this.getDefaultBackgroundColor();
        this.button.style.color = this.getAttribute('color') || this.getDefaultTextColor();
    }

    getDefaultBackgroundColor() {
        const guard = Guard.getInstance(this);
        const type = this.getAttribute('type') || this.getType();
        if (type === 'primary') {
            return guard.getAccentColor();
        }
    }

    getDefaultHPadding() {
        const type = this.getAttribute('type') || this.getType();
        if (type === 'link' || type === 'back') {
            return '0';
        } else {
            return '20px';
        }
    }

    getDefaultVPadding() {
        const type = this.getAttribute('type') || this.getType();
        if (type === 'link' || type === 'back') {
            return '0';
        } else {
            return '12px';
        }
    }

    getDefaultTextColor() {
        const guard = Guard.getInstance(this);
        const type = this.getAttribute('type') || this.getType();
        if (type === 'primary') {
            return '#FFF';
        } else if (type === 'link' || type === 'back') {
            return guard.getAccentColor();
        } else {
            return '#606266';
        }
    }

    getDefaultBorder() {
        const type = this.getAttribute('type') || this.getType();
        if (type === 'link' || type === 'back') {
            return 'none';
        } else {
            return '1px solid #dcdfe6';
        }
    }
}

window.customElements.define('g-button', Button);