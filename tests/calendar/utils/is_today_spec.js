var assert  = require('power-assert')
var isToday = require('../../../src/calendar/utils/is_today')

describe('isToday', () => {
  it('returns true if date passed is today', () => {
    assert(isToday(new Date()))
  })

  it('returns false if date passed is in the past', () => {
    assert(!isToday(new Date(2001, 0, 1)))
  })

  it('returns false if date passed is in the future', () => {
    var tomorrow = new Date(Date.now() + 24*60*60*1000)
    assert(!isToday(tomorrow))
  })
})
