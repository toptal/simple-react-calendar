var assert  = require('power-assert')
var dateKey = require('../../../src/calendar/utils/date_key')

describe('dateKey', function () {
  it('returns a string', function () {
    assert.equal(dateKey(new Date(2015, 6, 25)), '2015-07-25')
  })

  it('padds single digit months and days with zeros', function () {
    assert.equal(dateKey(new Date(2015, 0, 1)), '2015-01-01')
  })

  it('accepts future dates', function () {
    assert.equal(dateKey(new Date(2016, 10, 11)), '2016-11-11')
  })

  it('accepts string representation', function () {
    assert.equal(dateKey('2014-04-05'), '2014-04-05')
  })

  it('accepts alternate string representation', function () {
    assert.equal(dateKey('Sep 18 2013'), '2013-09-18')
  })
})
