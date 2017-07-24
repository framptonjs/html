import { default as elementValue } from '../src/element-value';
import { assert } from 'chai';


describe('elementValue', function() {
  it('should return true if element has class', function() {
    const input: HTMLInputElement = document.createElement('input');
    input.value = 'test';

    const actual: string = elementValue(input);
    const expected: string = 'test';

    assert.equal(actual, expected);
  });
});
