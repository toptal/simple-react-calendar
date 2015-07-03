var assert  = require('power-assert')
var dateRangeToArray = require('../../../src/calendar/utils/date_range_to_array')

describe('dateRangeToArray', () => {
  var start = '2015-06-18'
  var end = '2015-06-25'
  var startDate = new Date('2015-06-18')
  var endDate = new Date(end)
  var nowDateStr = new Date(Date.now()).toDateString()

  it('accepts a plain object with start and end time', () => {
    var param = {start: start, end: end}
    assert.deepEqual(dateRangeToArray(param), [startDate, endDate])
  })

  it('accepts an array with two entries', () => {
    var param = [start, end]
    assert.deepEqual(dateRangeToArray(param), [startDate, endDate])
  })

  it('defaults end to now if missing in plain object', () => {
    var param = {start: start}
    assert.deepEqual(dateRangeToArray(param)[1].toDateString(), nowDateStr)
  })

  it('defaults start to now if missing in plain object', () => {
    var param = {selectionEnd: end}
    assert.deepEqual(dateRangeToArray(param)[0].toDateString(), nowDateStr)
  })

  it('defaults end to now if passed array with one element', () => {
    var param = [start]
    assert.deepEqual(dateRangeToArray(param)[1].toDateString(), nowDateStr)
  })

  it('accepts date objects in plain object style call', () => {
    var param = {start: startDate, end: endDate}
    assert.deepEqual(dateRangeToArray(param), [startDate, endDate])
  });

  it('accepts date object in array style call', () => {
    var param = [startDate, endDate]
    assert.deepEqual(dateRangeToArray(param), [startDate, endDate])
  })

  it('defaults to selecting today when nothing is passed', () => {
    var result = dateRangeToArray()
    assert(result[0].toDateString() == nowDateStr && result[1].toDateString() == nowDateStr)
  })

  it('accepts inverted order of entries', () => {
    var param = [end, start]
    assert.deepEqual(dateRangeToArray(param), [endDate, startDate])
  })
})
