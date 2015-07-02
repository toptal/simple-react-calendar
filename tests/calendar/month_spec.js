var React     = window.React
var TestUtils = React.addons.TestUtils
var assert    = require('power-assert')

var Month     = require('../../src/calendar/month')
var Week      = require('../../src/calendar/week')

describe('Month', () => {
  function renderMonth(startDate, options) {
    options = options || {}
    return TestUtils.renderIntoDocument(
      <Month
        {...options}
        activeMonth = { options.activeMonth || startDate }
      />
    )
  }

  function clickOnDays() {
    var month = arguments[0]
    var daysToClick = Array.prototype.slice.call(arguments, 1)

    var weeks = _.filter(month.refs, (v, k) => { return !!/^week/.exec(k) })
    var days = _.flatten(weeks.map((week) => {
      return _.filter(week.refs, (v, k) => { return !!/^day/.exec(k) })
    })).map((day) => { return React.findDOMNode(day) })

    _.each(daysToClick, (day) => {
      TestUtils.Simulate.click(days[day])
    })
  }

  it('renders with minimal params', () => {
    var date  = new Date(2015, 5, 15)
    var month = renderMonth(date)
    assert(month)
  })

  it('renders weeks of the month', () => {
    var date  = new Date(2015, 5, 15)
    var month = renderMonth(date)
    var weeks = TestUtils.scryRenderedComponentsWithType(month, Week)

    var weeksRendered = weeks.map((week) => {
      return week.props.startDate
    })

    assert.deepEqual(weeksRendered,
      [
        new Date(2015, 5, 1),
        new Date(2015, 5, 8),
        new Date(2015, 5, 15),
        new Date(2015, 5, 22),
        new Date(2015, 5, 29)
      ]
    )
  })

  describe('in single selection mode', () => {
    var result, month
    beforeEach(() => {
      result = null
      month = renderMonth(new Date(2015, 5, 1), {
        selectionMode: 'single',
        onChange: (selection) => {
          result = selection
        }
      })
    })

    it('can select single day', () => {
      clickOnDays(month, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 6),
        selectionInProgress: false
      })
    })
  })


  describe('in range selection mode', () => {
    var result, month
    beforeEach(() => {
      result = null
      month = renderMonth(new Date(2015, 5, 1), {
        selectionMode: 'range',
        onChange: (selection) => {
          result = selection
        }
      })
    })

    it('can select single day range', () => {
      clickOnDays(month, 5, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 6),
        selectionInProgress: false
      })
    })

    it('can select days range', () => {
      clickOnDays(month, 5, 15)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 16),
        selectionInProgress: false
      })
    })

    it('can select days range in inverted order', () => {
      clickOnDays(month, 15, 5)

      assert.deepEqual(result, {
        selectionStart: new Date(2015, 5, 6),
        selectionEnd: new Date(2015, 5, 16),
        selectionInProgress: false
      })
    })
  })
})
