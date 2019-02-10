class ManipulatableDOMElement {
    constructor(selector) {
        const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : [ selector ];
        this.elements = [ ...matches ];
    }

    each(fn) {
        this.elements.map(fn);
    }

    on(type, callback) {
        this.each(function(el) {
            el.addEventListener(type, callback);
        });
    }

    off(type, callback = () => {}) {
        this.each(function(el) {
            el.removeEventListener(type, callback);
        });
    }

    attr(key, value) {
        this.each(function(el) {
            el.setAttribute(key, value);
        });
    }

    addClass(className) {
        this.each(function(el) {
            el.classList.add(className);
        });
    }

    removeClass(className) {
        this.each(function(el) {
            el.classList.remove(className);
        });
    }

    toggleClass(className) {
        this.each(function(el) {
            el.classList.toggle(className);
        });
    }

    text(content) {
        this.each(function(el) {
            el.textContent = content;
        });
    }

    html(content) {
        this.each(function(el) {
            el.innerHTML = content;
        });
    }
}

module.exports.default = ManipulatableDOMElement;
module.exports.dom = function dom(selector) {
    return new ManipulatableDOMElement(selector);
};
