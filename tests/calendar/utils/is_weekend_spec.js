var assert  = require('power-assert')
var isWeekend = require('../../../src/calendar/utils/is_weekend')

describe('isWeekend', function () {
  it('returns true if date passed is saturday', function() {
    assert(isWeekend(new Date(2015, 5, 27)))
  })

  it('returns true if date passed is sunday', function() {
    assert(isWeekend(new Date(2015, 5, 28)))
  })

  it('returns false if date passed is monday', function() {
    assert(!isWeekend(new Date(2015, 5, 22)))
  })

  it('returns false if date passed is tuesday', function() {
    assert(!isWeekend(new Date(2015, 5, 23)))
  })

  it('returns false if date passed is wednesday', function() {
    assert(!isWeekend(new Date(2015, 5, 24)))
  })

  it('returns false if date passed is thursday', function() {
    assert(!isWeekend(new Date(2015, 5, 25)))
  })

  it('returns false if date passed is friday', function() {
    assert(!isWeekend(new Date(2015, 5, 26)))
  })
})
