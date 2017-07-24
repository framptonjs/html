import { curry, Curried2Result } from '@frampton/core';


export default curry((name: string, element: HTMLElement): string => {
  return element.getAttribute(name);
});
