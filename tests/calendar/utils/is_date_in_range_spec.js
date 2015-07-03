var assert  = require('power-assert')
var isDateInRange = require('../../../src/calendar/utils/is_date_in_range')

describe('isDateInRange', () => {
  it('returns true when date is in the range', () => {
    assert(isDateInRange(new Date(2015, 6, 25), {start: '2015-07-22', end: '2015-07-28'}))
  })

  it('returns false when date is outside the range', () => {
    assert(!isDateInRange(new Date(2015, 5, 20), ['2015-06-21', '2015-06-25']))
  })

  it('correctly handles inverted range order', () => {
    assert(isDateInRange(new Date(2015, 6, 25), {start: '2015-07-28', end: '2015-07-22'}))
  })
})
