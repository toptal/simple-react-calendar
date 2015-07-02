var assert  = require('power-assert')
var isWeekend = require('../../../src/calendar/utils/is_weekend')

describe('isWeekend', () => {
  it('returns true if date passed is saturday', () => {
    assert(isWeekend(new Date(2015, 5, 27)))
  })

  it('returns true if date passed is sunday', () => {
    assert(isWeekend(new Date(2015, 5, 28)))
  })

  it('returns false if date passed is monday', () => {
    assert(!isWeekend(new Date(2015, 5, 22)))
  })

  it('returns false if date passed is tuesday', () => {
    assert(!isWeekend(new Date(2015, 5, 23)))
  })

  it('returns false if date passed is wednesday', () => {
    assert(!isWeekend(new Date(2015, 5, 24)))
  })

  it('returns false if date passed is thursday', () => {
    assert(!isWeekend(new Date(2015, 5, 25)))
  })

  it('returns false if date passed is friday', () => {
    assert(!isWeekend(new Date(2015, 5, 26)))
  })
})
