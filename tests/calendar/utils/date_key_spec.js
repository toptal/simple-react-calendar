var assert  = require('power-assert')
var dateKey = require('../../../src/calendar/utils/date_key')

describe('dateKey', () => {
  it('returns a string', () => {
    assert.equal(dateKey(new Date(2015, 6, 25)), '2015-07-25')
  })

  it('padds single digit months and days with zeros', () => {
    assert.equal(dateKey(new Date(2015, 0, 1)), '2015-01-01')
  })

  it('accepts future dates', () => {
    assert.equal(dateKey(new Date(2016, 10, 11)), '2016-11-11')
  })

  it('accepts string representation', () => {
    assert.equal(dateKey('2014-04-05'), '2014-04-05')
  })

  it('accepts alternate string representation', () => {
    assert.equal(dateKey('Sep 18 2013'), '2013-09-18')
  })
})
