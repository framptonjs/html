import { default as supportedByElement } from '../src/supported-by-element';
import { assert } from 'chai';

describe('supportedByElement', function() {
  var element: any = null;

  beforeEach(function() {
    element = {
      style : {
        'borderRadius': '0',
        'MozAnimationDuration': '0',
        'webkitBoxShadow': '0'
      }
    };
  });

  afterEach(function() {
    element = null;
  });

  it('should return unprefixed property if browser supports it', function() {
    const actual = supportedByElement(element, 'border-radius');
    const expected = 'border-radius';

    assert.equal(actual, expected);
  });

  it('should return prefixed property for moz only property', function() {
    const actual = supportedByElement(element, 'animation-duration');
    const expected = '-moz-animation-duration';

    assert.equal(actual, expected);
  });

  it('should return prefixed property for webkit only property', function() {
    const actual = supportedByElement(element, 'box-shadow');
    const expected = '-webkit-box-shadow';

    assert.equal(actual, expected);
  });
});