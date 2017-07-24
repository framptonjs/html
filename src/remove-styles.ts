import { curry, Curried2Result } from '@frampton/core';
import { StyleMap } from './types';


/**
 * removeStyles :: DomNode -> Object -> ()
 *
 * @name removeStyles
 * @method
 * @memberof Frampton.Style
 * @param {Object} element A dom node to remove styles from
 * @param {Object} props   A hash of properties to remove
 */
export default curry(function remove_styles(element: HTMLElement, props: StyleMap): void {
  for (let key in props) {
    element.style.removeProperty(key);
  }
});