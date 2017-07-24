import { default as selectorContains } from '../src/selector-contains';
import { assert } from 'chai';


describe('selectorContains', function() {
  var div1: HTMLElement = null;
  var div2: HTMLElement = null;
  var container: HTMLElement = null;

  beforeEach(function() {
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    container = document.body
    container.appendChild(div1);
    div1.appendChild(div2);
  });

  afterEach(function() {
    container.removeChild(div1);
    div1 = null;
    div2 = null;
    container = null;
  });

  it('should return true if the element is contained inside an element with the given selector', function() {
    div1.classList.add('blue');
    const actual: boolean = selectorContains('.blue', div2);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return true if the element matches the selector', function() {
    div1.classList.add('blue');
    const actual: boolean = selectorContains('.blue', div1);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return false if the element is not contained inside an element with the given selector', function() {
    div2.classList.add('blue');
    const actual: boolean = selectorContains('.blue', div1);
    const expected: boolean = false;

    assert.equal(actual, expected);
  });
});