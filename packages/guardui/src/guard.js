import { get } from './ajax.js'
import AuthClient from './authClient.js';
import Message from './message.js';

export default class Guard {
    
    options;

    appId;
    host;
    config;

    isGettingConfig = true;

    listeners = [];
    eventHandlers = {};

    authClient;
    message;
    accentColor = '#396AFF';

    constructor(options) {
        if (!Guard.instance) {
            Guard.instance = this;
            this.authClient = new AuthClient();
            this.message = new Message();
        }
        if (options) {
            Guard.instance.options = options;
            Guard.instance.appId = options.appId;
        }
        return Guard.instance;
    }

    static async initialize(options) {
        const guard = new Guard(options);
        guard.isGettingConfig = true;

        guard.host = options.host || 'authing.cn'
        guard.authClient.host = guard.host;

        try {
            const response = await get(`https://core.${guard.host}/api/v2/applications/${options.appId}/public-config`);
            guard.config = response.data;
            guard.authClient.config = guard.config;

            guard.listeners.forEach(listener => {
                listener.configCallback(guard);
            })
            // guard.listeners = [];
        } catch (err) {
            console.log(err);
        }
        
        guard.isGettingConfig = false;
        return guard;
    }

    static getInstance(listener) {
        const guard = new Guard();
        if (listener) {
            guard.listeners.push(listener);
        }
        return guard;
    }

    on(channel, handler) {
        if (handler) {
            const array = this.eventHandlers[channel] || [];
            array.push(handler);
            this.eventHandlers[channel] = array;
        }
    }

    dispatchEvent(channel, code, message, data) {
        const handlers = this.eventHandlers[channel];
        if (handlers !== undefined) {
            handlers.forEach((handler)=>{
                if (handler) {
                    try {
                        handler(code, message, data);
                    } catch (err) {}
                }
            });
        }
    }

    getAccentColor() {
        return this.accentColor;
    }

    setAccentColor(accent) {
        this.accentColor = accent;
        this.listeners.forEach(listener => {
            if (listener) {
                try {
                    listener.renderCallback(this);
                } catch (err) {}
            }
        })
    }
}
