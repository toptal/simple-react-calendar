var React     = require('react')
var TestUtils = require('react/lib/ReactTestUtils')
var assert    = require('power-assert')
var { SimpleCalendar } = require('../dist/simple-calendar')

describe('SimpleCalendar', function () {
  it('renders without problems', function () {
    var calendar = TestUtils.renderIntoDocument(<SimpleCalendar />)
    assert(calendar)
  });
});
