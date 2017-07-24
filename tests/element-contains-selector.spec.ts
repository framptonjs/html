import { default as contains } from '../src/element-contains-selector';
import { assert } from 'chai';


describe('elementContainsSelector', function() {
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

  it('should return true if element contains element with selector', function() {
    div1.classList.add('blue');
    const actual = contains('.blue', div1);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return null if no match', function() {
    div1.classList.add('blue');
    const actual = contains('#blue', div1);
    const expected: boolean = false;

    assert.equal(actual, expected);
  });
});
