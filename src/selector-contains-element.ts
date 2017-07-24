import { curry, Curried2Result } from '@frampton/core';
import contains from './html/contains';


/**
 * Searches inside all elements with the given selector and returns if one of them
 * contains the given element.
 *
 * @name selectorContainsElement
 * @method
 * @memberof Frampton.Style
 * @param {String} selector Selector to search inside of
 * @param {Object} element  DomNode to search for
 * @returns {Boolean} Is there a match for the element?
 */
export default curry((selector: string, element: HTMLElement): boolean => {
  const elementList =
    document.querySelectorAll(selector);

  var i: number = 0;

  while (elementList[i] && !contains(elementList[i], element)) {
    i++;
  }

  return (elementList[i] ? true : false);
});
