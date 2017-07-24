import { default as addClass } from '../src/add-class';
import { assert } from 'chai';


describe('addClass', function() {
  it('should return true if element has class', function() {
    const div = document.createElement('div');
    addClass('test', div);
    const actual = div.classList.contains('test');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('should return false if element does not have class', function() {
    const div = document.createElement('div');
    addClass('test', div);
    const actual = div.classList.contains('wrong');
    const expected = false;

    assert.equal(actual, expected);
  });
});