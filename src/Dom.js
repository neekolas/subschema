var EventListener = require('react/lib/EventListener');
var React = require('./react');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
module.exports = {
    EventListener,
    ownerDocument,
    isNodeInRoot,
    listen

}
/**
 * listen
 */
function listen(node, event, func) {
    if (!canUseDOM) return;
    return EventListener.listen(ownerDocument(node), event, func);
}
/**
 * Get elements owner document
 *
 * @param {ReactComponent|HTMLElement} componentOrElement
 * @returns {HTMLElement}
 */
function ownerDocument(componentOrElement) {
    if (!canUseDOM) return;
    var elem = React.findDOMNode(componentOrElement);
    return elem && elem.ownerDocument || document;
}
/**
 * Checks whether a node is within
 * a root nodes tree
 *
 * @param {DOMElement} node
 * @param {DOMElement} root
 * @returns {boolean}
 */
function isNodeInRoot(node, root) {
    if (!canUseDOM) return;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
}
