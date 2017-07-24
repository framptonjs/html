import { default as hasClass } from '../src/has-class';
import { assert } from 'chai';


describe('hasClass', function() {
  it('should return true if element has class', function() {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('test');
    const actual: boolean = hasClass('test', div);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return false if element does not have class', function() {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('test');
    const actual: boolean = hasClass('wrong', div);
    const expected: boolean = false;

    assert.equal(actual, expected);
  });
});