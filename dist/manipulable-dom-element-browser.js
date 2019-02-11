(function (window) {
  class ManipulableDOMElement {
    constructor(selector) {
        const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : [ selector ];
        this.elements = [ ...matches ];
    }

    each(fn) {
        this.elements.map(fn);
        return this;
    }

    on(type, callback) {
        this.each(function(el) {
            el.addEventListener(type, callback);
        });

        return this;
    }

    off(type, callback = () => {}) {
        this.each(function(el) {
            el.removeEventListener(type, callback);
        });

        return this;
    }

    attr(key, value) {
        this.each(function(el) {
            el.setAttribute(key, value);
        });

        return this;
    }

    addClass(className) {
        this.each(function(el) {
            el.classList.add(className);
        });

        return this;
    }

    removeClass(className) {
        this.each(function(el) {
            el.classList.remove(className);
        });

        return this;
    }

    toggleClass(className) {
        this.each(function(el) {
            el.classList.toggle(className);
        });

        return this;
    }

    text(content) {
        this.each(function(el) {
            el.textContent = content;
        });

        return this;
    }

    html(content) {
        this.each(function(el) {
            el.innerHTML = content;
        });

        return this;
    }
  }

  window.$ = function $(selector) {
    return new ManipulableDOMElement(selector);
  };
})(window);
