module.exports = class ManipulableDOMElement {
  constructor (selector) {
    this.elements = this.query(selector);
  }

  query (selector) {
    if (selector instanceof HTMLElement) {
      return [ selector ];
    } else if (NodeList.prototype.isPrototypeOf(selector)) {
      return [ ...selector ];
    } else if (Array.isArray(selector)) {
      return [ ...selector.map(this.mapSelectors).flat() ];
    } else {
      return [ ...document.querySelectorAll(selector) ];
    }
  }

  mapSelectors (selector) {
    if (typeof selector === "string") {
      return document.querySelectorAll(selector);
    } else if (NodeList.prototype.isPrototypeOf(selector)) {
      return [ ...selector ].flat();
    }

    return selector;
  }

  get length () {
    return (this.elements || []).length;
  }

  each (fn) {
    this.elements.map(fn);
    return this;
  }

  on (type, callback) {
    this.each(function (el) {
      el.addEventListener(type, callback);
    });

    return this;
  }

  off (type, callback = this.noop) {
    this.each(function (el) {
      el.removeEventListener(type, callback);
    });

    return this;
  }

  noop () {}

  attr (key, value) {
    if (value == undefined) {
      return this.elements[0].getAttribute(key);
    }

    this.each(function (el) {
      el.setAttribute(key, value);
    });

    return this;
  }

  data (key, value) {
    return this.attr("data-" + key, value);
  }

  addClass (className) {
    this.each(function (el) {
      el.classList.add(className);
    });

    return this;
  }

  removeClass (className) {
    this.each(function (el) {
      el.classList.remove(className);
    });

    return this;
  }

  toggleClass (className) {
    this.each(function (el) {
      el.classList.toggle(className);
    });

    return this;
  }

  text (content) {
    this.each(function (el) {
      el.textContent = content;
    });

    return this;
  }

  html (content) {
    this.each(function (el) {
      el.innerHTML = content;
    });

    return this;
  }

  val (value) {
    if (value == undefined) {
      return this.elements[0].value;
    }

    this.each(function (el) {
      el.value = value;
    });

    return this;
  }

  parents (selector) {
    var matches = [];

    this.each(function (el) {
      while ((el = el.parentElement) !== null) {
        if (el.nodeType !== Node.ELEMENT_NODE) {
          continue;
        }

        if (!selector || el.matches(selector)) {
          matches.push(el);
        }
      }
    });

    return new ManipulableDOMElement(matches);
  }

  find (selector) {
    var matches = [];

    this.each(function (el) {
      var elements = el.querySelectorAll(selector);
      if (elements && elements.length > 0) {
        matches.push(elements);
      }
    });

    return new ManipulableDOMElement(matches.flat());
  }

  remove () {
    this.each(function (el) {
      el.parentNode.removeChild(el);
    });
  }
};
