var React     = require('react')
var TestUtils = require('react/lib/ReactTestUtils')
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
    var days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'day')

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
        onSelect: (selection) => {
          result = selection
        }
      })
    })

    it('can select single day', () => {
      clickOnDays(calendar, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 6),
        selectionInProgress: false
      })
    })
  })

  describe('in range selection mode', () => {
    var result, calendar
    beforeEach(() => {
      result = null
      calendar = renderCalendar({
        activeMonth: new Date(2015, 5, 1),
        selectionMode: 'range',
        onSelect: (selection) => {
          result = selection
        }
      })
    })

    it('can select single day range', () => {
      clickOnDays(calendar, 5, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 6),
        selectionInProgress: false
      })
    })

    it('can select days range', () => {
      clickOnDays(calendar, 5, 15)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 16),
        selectionInProgress: false
      })
    })


    it('can select days range in inverted order', () => {
      clickOnDays(calendar, 15, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 16),
        selectionInProgress: false
      })
    })

    it('can select days range across month boundary', () => {
      clickOnDays(calendar, 5)

      TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithClass(calendar, 'next-month')
      )

      clickOnDays(calendar, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 6, 4),
        selectionInProgress: false
      })
    })
  })
})