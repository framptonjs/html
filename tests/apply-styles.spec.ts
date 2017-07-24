import { default as applyStyles } from '../src/apply-styles';
import { default as currentValue } from '../src/current-value';
import { assert } from 'chai';


describe('currentValue', function() {
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

  it('should set the styles on an element', function() {
    applyStyles({
      color: 'rgb(0,0,255)',
      height: '100px'
    }, div);

    assert.equal(currentValue('color', div), 'rgb(0, 0, 255)');
    assert.equal(currentValue('height', div), '100px');
  });
});