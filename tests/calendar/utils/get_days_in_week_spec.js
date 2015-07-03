var assert  = require('power-assert')
var getDaysInWeek = require('../../../src/calendar/utils/get_days_in_week')

describe('getDaysInWeek', () => {
  it('returns an array with 7 days starting from first day', () => {
    assert.deepEqual(
      getDaysInWeek(new Date(2015, 5, 22)),
      [
        new Date(2015, 5, 22),
        new Date(2015, 5, 23),
        new Date(2015, 5, 24),
        new Date(2015, 5, 25),
        new Date(2015, 5, 26),
        new Date(2015, 5, 27),
        new Date(2015, 5, 28),
      ]
    )
  })

  it('returns correct days across month boundary', () => {
    assert.deepEqual(
      getDaysInWeek(new Date(2015, 6, 27)),
      [
        new Date(2015, 6, 27),
        new Date(2015, 6, 28),
        new Date(2015, 6, 29),
        new Date(2015, 6, 30),
        new Date(2015, 6, 31),
        new Date(2015, 7, 1),
        new Date(2015, 7, 2),
      ]
    )
  })

  it('returns correct days across year boundary', () => {
    assert.deepEqual(
      getDaysInWeek(new Date(2015, 11, 28)),
      [
        new Date(2015, 11, 28),
        new Date(2015, 11, 29),
        new Date(2015, 11, 30),
        new Date(2015, 11, 31),
        new Date(2016, 0, 1),
        new Date(2016, 0, 2),
        new Date(2016, 0, 3),
      ]
    )
  })
})
