import { default as contains } from '../src/contains';
import { assert } from 'chai';


describe('contains', function() {
  var parent: HTMLElement = null;
  var child: HTMLElement = null;
  var orphan: HTMLElement = null;
  var container: HTMLElement = null;

  beforeEach(function() {
    parent = document.createElement('div');
    child = document.createElement('div');
    orphan = document.createElement('div');
    container = document.body;
    container.appendChild(parent);
    container.appendChild(orphan);
    parent.appendChild(child);
  });

  afterEach(function() {
    container.removeChild(parent);
    container.removeChild(orphan);
    parent = null;
    child = null;
    orphan = null;
    container = null;
  });

  it('should return true if element contains element with selector', function() {
    const actual = contains(parent, child);
    const expected: boolean = true;

    assert.equal(actual, expected);
  });

  it('should return null if no match', function() {
    const actual = contains(parent, orphan);
    const expected: boolean = false;

    assert.equal(actual, expected);
  });
});
