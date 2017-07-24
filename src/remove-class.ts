import { curry, Curried2Result } from '@frampton/core';


/**
 * @name removeClass
 * @method
 * @memberof Frampton.Style
 * @param {Object} element
 * @param {String} name
 */
export default curry(function remove_class(element: HTMLElement, name: string): void {
  element.classList.remove(name);
});