var React     = window.React
var TestUtils = React.addons.TestUtils

var assert    = require('power-assert')

var Calendar  = require('../../src/calendar/calendar')
var Month     = require('../../src/calendar/month')

describe('Calendar', function () {
  function renderCalendar(options) {
    options = options || {}
    return TestUtils.renderIntoDocument(
      <Calendar
        {...options}
      />
    )
  }

  function clickOnDays() {
    var calendar = arguments[0]
    var daysToClick = Array.prototype.slice.call(arguments, 1)

    var weeks = _.filter(calendar.refs.month.refs, (v, k) => { return !!/^week/.exec(k) })
    var days = _.flatten(weeks.map((week) => {
      return _.filter(week.refs, (v, k) => { return !!/^day/.exec(k) })
    })).map((day) => { return React.findDOMNode(day) })

    _.each(daysToClick, (day) => {
      TestUtils.Simulate.click(days[day])
    })
  }

  it('renders with minimal params', function () {
    var calendar = renderCalendar()
    assert(calendar)
  })

  it('renders month with selected date', function () {
    var date = new Date(2015, 6, 1)

    var calendar = renderCalendar({
      activeMonth: date
    })

    var month = TestUtils.findRenderedComponentWithType(calendar, Month)

    assert(month.props.activeMonth == date)
  })

  describe('in single selection mode', () => {
    var result, calendar
    beforeEach(() => {
      result = null
      calendar = renderCalendar({
        activeMonth: new Date(2015, 5, 1),
        selectionMode: 'single',
        onSelect: (start, end, inProgress) => {
          result = [start, end, inProgress]
        }
      })
    })

    it('can select single day', () => {
      clickOnDays(calendar, 5)

      assert.deepEqual(result, [
        new Date(2015, 5, 6),
        new Date(2015, 5, 6),
        false
      ])
    })
  })

  describe('in range selection mode', () => {
    var result, calendar
    beforeEach(() => {
      result = null
      calendar = renderCalendar({
        activeMonth: new Date(2015, 5, 1),
        selectionMode: 'range',
        onSelect: (start, end, inProgress) => {
          result = [start, end, inProgress]
        }
      })
    })

    it('can select single day range', () => {
      clickOnDays(calendar, 5, 5)

      assert.deepEqual(result, [
        new Date(2015, 5, 6),
        new Date(2015, 5, 6),
        false
      ])
    })

    it('can select days range', () => {
      clickOnDays(calendar, 5, 15)

      assert.deepEqual(result, [
        new Date(2015, 5, 6),
        new Date(2015, 5, 16),
        false
      ])
    })


    it('can select days range in inverted order', () => {
      clickOnDays(calendar, 15, 5)

      assert.deepEqual(result, [
        new Date(2015, 5, 6),
        new Date(2015, 5, 16),
        false
      ])
    })

    it('can select days range across month boundary', () => {
      clickOnDays(calendar, 5)
      TestUtils.Simulate.click(
        React.findDOMNode(calendar.refs.header.refs.nextMonthLink)
      )

      clickOnDays(calendar, 5)

      assert.deepEqual(result, [
        new Date(2015, 5, 6),
        new Date(2015, 6, 4),
        false
      ])
    })
  })

  describe('with selection boundaries', () => {
    var result, calendar
    beforeEach(() => {
      result = null
      calendar = renderCalendar({
        activeMonth: new Date(2015, 5, 1),
        selectionMode: 'range',
        selectionBoundaries: {
          min: new Date(2015, 5, 10),
          max: new Date(2015, 5, 20)
        },
        onSelect: (start, end, inProgress) => {
          result = [start, end, inProgress]
        }
      })
    })

    it('can select days range inside boundaries', () => {
      clickOnDays(calendar, 9, 19)

      assert.deepEqual(result, [
        new Date(2015, 5, 10),
        new Date(2015, 5, 20),
        false
      ])
    })

    it('cant select days earlier than min boundary', () => {
      clickOnDays(calendar, 1, 8)
      assert.deepEqual(result, null)
    })

    it('cant select days later than max boundary', () => {
      clickOnDays(calendar, 20, 25)
      assert.deepEqual(result, null)
    })

    it('can select days range after failing to select day outside boundaries', () => {
      clickOnDays(calendar, 14, 25, 19)

      assert.deepEqual(result, [
        new Date(2015, 5, 15),
        new Date(2015, 5, 20),
        false
      ])
    })
  })
})