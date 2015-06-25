var assert  = require('power-assert')
var isDateBetween = require('../../../src/calendar/utils/is_date_between')

describe('isDateBetween', function () {
  it('returns true when date is between start and end', function() {
    assert(isDateBetween(new Date(2015, 6, 25), '2015-07-22', '2015-07-28'))
  })

  it('accepts date objects', function() {
    assert(isDateBetween(new Date(2015, 6, 25), new Date('2015-07-22'), new Date('2015-07-28')))
  })

  it('returns true when date is equal to start', function() {
    var start = new Date(2015, 6, 29)
    assert(isDateBetween(start, start, '2015-08-02'))
  })

  it('returns true when date is equal to end', function() {
    var end = new Date(2015, 6, 28)
    assert(isDateBetween(end, '2015-06-22', end))
  })

  it('returns false when date is before start', function() {
    assert(!isDateBetween(new Date(2015, 6, 28), '2015-07-29', '2015-07-29'))
  })

  it('returns false when date is after end', function() {
    assert(!isDateBetween(new Date(2015, 5, 20), '2015-06-10', '2015-06-19'))
  })
})
