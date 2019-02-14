(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.$ = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class ManipulableDOMElement {
    constructor(selector) {
        if (selector instanceof HTMLElement) {
            this.elements = [ selector ];
        } else if (NodeList.prototype.isPrototypeOf(selector)) {
            this.elements = [ ...selector ];
        } else if (Array.isArray(selector)) {
            this.elements = [
                ...selector
                    .map((s) => {
                        if (typeof s === 'string') return document.querySelectorAll(s);
                        else if (NodeList.prototype.isPrototypeOf(s)) return [ ...s ].flat();
                        return s;
                    })
                    .flat()
            ];
        } else {
            this.elements = [ ...document.querySelectorAll(selector) ];
        }
    }

    get length() {
        return (this.elements || []).length;
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
        if (value == undefined) {
            return this.elements[0].getAttribute(key);
        }

        this.each(function(el) {
            el.setAttribute(key, value);
        });

        return this;
    }

    data(key, value) {
        return this.attr('data-' + key, value);
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

    val(value) {
        if (value == undefined) {
            return this.elements[0].value;
        }

        this.each(function(el) {
            el.value = value;
        });

        return this;
    }

    parents(target) {
        var matches = [];

        this.each(function(el) {
            while ((el = el.parentNode) && el.nodeType !== 9) {
                if (el.nodeType === 1) {
                    if (!target) {
                        matches.push(el);
                    } else if (el === target) {
                        matches.push(el);
                        break;
                    } else if (
                        (typeof target === 'string' && el.nodeName.toLowerCase() === target.toLowerCase()) ||
                        '.' + el.className.toLowerCase() === target.toLowerCase() ||
                        el.id.toLowerCase() === target.toLowerCase()
                    ) {
                        matches.push(el);
                        break;
                    }
                }
            }
        });

        return new ManipulableDOMElement(matches);
    }

    find(selector) {
        var matches = [];

        this.each((el) => {
            var elements = el.querySelectorAll(selector);
            if (elements && elements.length > 0) {
                matches.push(elements);
            }
        });

        return new ManipulableDOMElement(matches.flat());
    }
}

module.exports = function $(selector) {
    return new ManipulableDOMElement(selector);
};

},{}]},{},[1])(1)
});
