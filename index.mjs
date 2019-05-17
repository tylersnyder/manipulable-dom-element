const ManipulableDOMElement = require("./manipulable-dom-element.mjs");

module.exports = function $ (selector) {
  return new ManipulableDOMElement(selector);
};
