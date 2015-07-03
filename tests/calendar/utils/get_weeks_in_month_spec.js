var assert  = require('power-assert')
var getWeeksInMonth = require('../../../src/calendar/utils/get_weeks_in_month')

describe('getWeeksInMonth', () => {
  it('returns an array with starts of all the weeks that intersect the month', () => {
    assert.deepEqual(
      getWeeksInMonth(new Date(2015, 5, 1)),
      [
        new Date(2015, 5, 1),
        new Date(2015, 5, 8),
        new Date(2015, 5, 15),
        new Date(2015, 5, 22),
        new Date(2015, 5, 29),
      ]
    )
  })

  it('correctly handles when month does not start on a monday', () => {
    assert.deepEqual(
      getWeeksInMonth(new Date(2015, 6, 1)),
      [
        new Date(2015, 5, 29),
        new Date(2015, 6, 6),
        new Date(2015, 6, 13),
        new Date(2015, 6, 20),
        new Date(2015, 6, 27),
      ]
    )
  })

  it('correctly handles when month lasts exactly 4 weeks', () => {
    assert.deepEqual(
      getWeeksInMonth(new Date(2021, 1, 1)),
      [
        new Date(2021, 1, 1),
        new Date(2021, 1, 8),
        new Date(2021, 1, 15),
        new Date(2021, 1, 22),
      ]
    )
  })
})
