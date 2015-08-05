import React from 'react/addons'
import assert from 'power-assert'

import Week from '../../src/calendar/week'

const TestUtils = React.addons.TestUtils

describe('Week', () => {
  // A helper function for more readable specs
  function renderWeek(startDate, options) {
    options = options || {}
    return TestUtils.renderIntoDocument(
      <Week
        key={startDate.getTime()}
        startDate={startDate}
        activeMonth={options.activeMonth || startDate}
        selected={options.selected}
        onDayClick={options.onDayClick}
        selectionBoundaries={options.selectionBoundaries}
      />
    )
  }

  function daysDOMElements(renderedWeek) {
    var days = TestUtils.scryRenderedDOMComponentsWithClass(renderedWeek, 'day')
    return days.map((day) => { return React.findDOMNode(day) })
  }

  it('renders with minimal params', () => {
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

  it('displays the days of the month', () => {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29)))
    var daysDisplayed = days.map((day) => { return day.textContent })
    assert.deepEqual(daysDisplayed, ["29","30","1","2","3","4","5"])
  })

  it('correctly marks the days that fall in the active month', () => {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29)))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-current_month') })
    assert.deepEqual(daysWithClass, [true, true, false, false, false, false, false])
  })

  it('correctly marks the selected days', () => {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {selected: [new Date(2015,5,30), new Date(2015,6,2)]}))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-selected') })
    assert.deepEqual(daysWithClass, [false, true, true, true, false, false, false])
  })

  it('correctly marks the days inside boundaries', () => {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {selectionBoundaries: {min: '2015-06-30', max: '2015-07-01'}}))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-selectable') })
    assert.deepEqual(daysWithClass, [false, true, true, false, false, false, false])
  })

  it('correctly marks the days outside boundaries', () => {
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {selectionBoundaries: {min: '2015-06-30', max: '2015-07-01'}}))
    var daysWithClass = days.map((day) => { return day.classList.contains('is-not-selectable') })
    assert.deepEqual(daysWithClass, [true, false, false, true, true, true, true])
  })


  it('accepts a function to be called when a day element is clicked', () => {
    var clicked = false
    var days = daysDOMElements(renderWeek(new Date(2015, 5, 29), {onDayClick: () => { clicked = true }}))
    TestUtils.Simulate.click(days[0])
    assert(clicked)
  })
});
