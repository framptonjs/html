import { curry, isSomething, Curried2Result } from '@frampton/core';
import { StyleMap } from './types';
import removeStyle from './remove-style';
import setStyle from './set-style';


/**
 * @name applyStyles
 * @method
 * @memberof Frampton.Style
 * @param {Object} element DomNode to add styles to
 * @param {Object} props   Has of props to add
 */
export default curry(function apply_styles(props: StyleMap, element: HTMLElement): void {
  for (let key in props) {
    const value: string = props[key];
    if (isSomething(value)) {
      setStyle(key, value, element);
    } else {
      removeStyle(element, key);
    }
  }
});