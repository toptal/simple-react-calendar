var assert  = require('power-assert')
var isDateInRange = require('../../../src/calendar/utils/is_date_in_range')

describe('isDateInRange', function () {
  it('returns true when date is in the range', function() {
    assert(isDateInRange(new Date(2015, 6, 25), {selectionStart: '2015-07-22', selectionEnd: '2015-07-28'}))
  })

  it('returns false when date is outside the range', function() {
    assert(!isDateInRange(new Date(2015, 5, 20), ['2015-06-21', '2015-06-25']))
  })
})
