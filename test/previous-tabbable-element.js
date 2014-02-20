
describe('previous-tabbable-element', function () {
  var assert = require('assert');
  var previous = require('previous-tabbable-element');

  var fixture;

  beforeEach(function () {
    fixture = document.createElement('div');
    fixture.innerHTML =
        '<button id="a">a</button>'
      + '<div tabindex="-1" id="b">b</div>'
      + '<a href="#" id="c">c</a>'
      + '<div>'
      + '  <div>'
      + '    <div>'
      + '      <div>'
      + '        <div>'
      + '          <div>'
      + '            <div>'
      + '              <div>'
      + '                <a href="#" id="d">d</a>'
      + '              </div>'
      + '            </div>'
      + '          </div>'
      + '        </div>'
      + '      </div>'
      + '    </div>'
      + '  </div>'
      + '</div>';
    document.body.insertBefore(fixture, document.body.firstChild);
  });

  afterEach(function () {
    document.body.removeChild(fixture);
  });

  it('should return the previous element in the tab order', function () {
    var a = document.querySelector('#a');
    var c = document.querySelector('#c');
    assert(a == previous(c));
  });

  it('should handle deeply nested elements', function () {
    var c = document.querySelector('#c');
    var d = document.querySelector('#d');
    assert(c == previous(d));
  });

  it('should return null if on the tabbable element', function () {
    var a = document.querySelector('#a');
    assert(null == previous(a));
  });

  it('should return null if given a detached element', function () {
    assert(null == previous(document.createElement('div')));
  });

  it('should return null if not given an element', function () {
    assert(null == previous());
  });
});
