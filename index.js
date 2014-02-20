
var isFocousable = require('is-focusable');
var descendants = require('descendants');
var indexof = require('indexof');

module.exports = previousTabbableElement;

/**
 * Find the element in the tab order before `root`.
 *
 * @api public
 * @param {HTMLElement} root
 * @return {HTMLElement}
 */

function previousTabbableElement(root) {
  var elements = descendants(document.body);
  var i = indexof(elements, root);
  if (~i) {
    while (--i) {
      var element = elements[i];
      if ('-1' != element.getAttribute('tabindex') && isFocousable(element))
        return element;
    }
  }
  return null;
}
