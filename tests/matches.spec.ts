import { default as matches } from '../src/matches';
import { assert } from 'chai';


describe('matches', function() {
  var div: HTMLElement = null;
  var container: HTMLElement = null;

  beforeEach(function() {
    div = document.createElement('div');
    container = document.body;
    container.appendChild(div);
  });

  afterEach(function() {
    container.removeChild(div);
    div = null;
    container = null;
  });

  it('should return true if element has class', function() {
    div.classList.add('blue');
    const actual: boolean = matches('.blue', div);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return true if an element has an id', function() {
    div.id = 'blue';
    const actual: boolean = matches('#blue', div);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return true if an element has an attribute', function() {
    div.setAttribute('aria-live', 'polite');
    const actual: boolean = matches('[aria-live]', div);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return false if an element does not match selector', function() {
    div.classList.add('blue');
    const actual: boolean = matches('.wrong', div);
    const expected: boolean = false;

    assert.equal(actual, expected);
  });
});