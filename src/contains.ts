import { curry, Curried2Result, isFunction } from '@frampton/core';


// Does the given parent contain the given child
export default curry((parent: HTMLElement, child: HTMLElement): boolean => {
  if (parent === child) {
    return true;
  } else if (isFunction(parent.contains)) {
    return parent.contains(child);
  } else {
    while (child = <HTMLElement>child.parentNode) {
      if (parent === child) {
        return true;
      }
      return false;
    }
  }
});
