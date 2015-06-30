var React     = require('react')
var TestUtils = require('react/lib/ReactTestUtils')
var assert    = require('power-assert')
var Week       = require('../../src/calendar/week')

describe('Week', function () {
  // A helper function for more readable specs
  function renderWeek(startDate, options) {
    options = options || {}
    return TestUtils.renderIntoDocument(
      <Week
        key = { startDate.getTime() }
        startDate = { startDate }
        activeMonth = { options.activeMonth || startDate }
        selected = { options.selected }
        onDayClick = { options.onDayClick }
      />
    )
  }

  function daysDOMElements(renderedWeek) {
    var days = TestUtils.scryRenderedDOMComponentsWithClass(renderedWeek, 'day')
    return days.map((day) => { return React.findDOMNode(day) })
  }

  it('renders with minimal params', function () {
    var startDate = new Date(2015,6,1)
    var week = TestUtils.renderIntoDocument(
      <Week
        key = { 1 }
        startDate = { startDate }
        activeMonth = { startDate }
      />
    )
    assert(week)
  })

  it('displays the days of the month', function () {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29)))
    var daysDisplayed = days.map((day) => { return day.textContent })
    assert.deepEqual(daysDisplayed, ["29","30","1","2","3","4","5"])
  })

  it('correctly marks the days that fall in the active month', function () {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29)))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-current_month') })
    assert.deepEqual(daysWithClass, [true, true, false, false, false, false, false])
  })

  it('correctly marks the selected days', function () {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {selected: [new Date(2015,5,30), new Date(2015,6,2)]}))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-selected') })
    assert.deepEqual(daysWithClass, [false, true, true, true, false, false, false])
  })

  it('accepts a function to be called when a day element is clicked', function() {
    var clicked = false
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {onDayClick: function() { clicked = true }}))
    TestUtils.Simulate.click(days[0])
    assert(clicked)
  })
});
