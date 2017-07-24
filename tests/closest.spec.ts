import { default as closest } from '../src/closest';
import { assert } from 'chai';


describe('closest', function() {
  var div1: HTMLElement = null;
  var div2: HTMLElement = null;
  var container: HTMLElement = null;

  beforeEach(function() {
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    container = document.body;
    container.appendChild(div1);
    div1.appendChild(div2);
  });

  afterEach(function() {
    container.removeChild(div1);
    div1 = null;
    div2 = null;
    container = null;
  });

  it('should return closest element matching selector', function() {
    div1.classList.add('blue');
    const actual = closest('.blue', div2);
    const expected = div1;

    assert.equal(actual, expected);
  });

  it('should return null if no match', function() {
    div1.classList.add('blue');
    const actual = closest('#blue', div2);
    const expected: HTMLElement = null;

    assert.equal(actual, expected);
  });
});