import { default as currentValue } from '../src/current-value';
import { assert } from 'chai';


describe('currentValue', function() {
  var div: HTMLElement = null;
  var container: HTMLElement = null;

  beforeEach(function() {
    div = document.createElement('div');
    div.style.color = 'rgb(0, 0, 255)';
    container = document.body;
    container.appendChild(div);
  });

  afterEach(function() {
    container.removeChild(div);
    div = null;
    container = null;
  });

  it('should retrieve the value of a style on element', function() {
    const actual: string = currentValue('color', div);
    const expected: string = 'rgb(0, 0, 255)';

    assert.equal(actual, expected);
  });
});