import Router from "./router.js";

export default class GuardElement extends HTMLElement {

    // for now, we don't use shadow
    useShadow = false;

    shadow;
    container;

    // used for route
    path;

    constructor() {
        super();

        if (this.useShadow) {
            this.shadow = this.attachShadow( { mode: 'open' } );
            this.container = document.createElement('div');
        } else {
            this.container = this;
        }

        this.container.style.display = this.getAttribute('display') || 'block';
        this.container.style.flex = this.getAttribute('flex');
        this.container.style.width = this.getAttribute('width');
        this.container.style.height = this.getAttribute('height');
        this.container.style.backgroundColor = this.getAttribute('backgroundColor');
        this.container.style.marginTop = this.getAttribute('marginTop');
        this.container.style.marginRight = this.getAttribute('marginRight');
        this.container.style.marginBottom = this.getAttribute('marginBottom');
        this.container.style.marginLeft = this.getAttribute('marginLeft');
        this.container.style.borderRadius = this.getAttribute('borderRadius');
        this.container.style.backgroundPosition = this.getAttribute('backgroundPosition') || 'center';
        this.container.style.backgroundRepeat = this.getAttribute('backgroundRepeat') || 'no-repeat';
        this.container.style.backgroundSize = this.getAttribute('backgroundSize') || 'cover';
        this.container.style.backgroundImage = this.getAttribute('backgroundImage');

        this.path = this.getAttribute('path') || '/';

        if (this.useShadow) {
            let template = document.createElement('template');
            let html = this.innerHTML.trim();
            template.innerHTML = html;
            const child = template.content.firstChild;
            if (child instanceof HTMLElement) {
                this.container.insertAdjacentHTML('afterbegin', this.innerHTML)
            }
            
            this.appendChild(this.container)
            this.shadow.appendChild(this.container);
        }
    }

    connectedCallback() {
        if (this.parentElement instanceof Router) {
            this.parentElement.updateRoute();
        }
    }

    configCallback(guard) {
    }

    renderCallback(guard) {
    }
}

window.customElements.define('g-element', GuardElement);
