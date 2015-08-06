import React from 'react/addons'
import assert from 'power-assert'

import Day from '../../src/calendar/day'

const TestUtils = React.addons.TestUtils

describe('Day', () => {
  // A helper function for more readable specs
  function renderDayDOM(day, options) {
    options = options || {}
    var renderedDay = TestUtils.renderIntoDocument(
      <Day
        key = { day.getTime() }
        date = { day }
        activeMonth = { options.activeMonth || day }
        selected = { options.selected || false }
        onClick = { options.onClick }
        inBoundaries = { options.inBoundaries }
      />
    )
    return React.findDOMNode(renderedDay)
  }

  it('renders with minimal params', () => {
    var day = TestUtils.renderIntoDocument(
      <Day
        key = { 1 }
        date = { new Date() }
        activeMonth = { new Date() }
      />
    )
    assert(day)
  })

  it('displays the day of the month', () => {
    var today = new Date()
    assert.equal(renderDayDOM(today).textContent, today.getDate())
  })

  it('accepts a function to be called when element is clicked', () => {
    var clicked = false
    var dayDom = renderDayDOM(new Date(), {onClick: () => { clicked = true }})
    TestUtils.Simulate.click(dayDom)
    assert(clicked)
  })

  it('adds is-selected class when the selected property is set', () => {
    assert(renderDayDOM(new Date(), {selected: true}).classList.contains('is-selected'))
  })

  it('adds is-today class for today', () => {
    assert(renderDayDOM(new Date()).classList.contains('is-today'))
  })

  it('excludes is-today class for other days', () => {
    assert(!renderDayDOM(new Date(2001, 1, 1)).classList.contains('is-today'))
  })

  it('adds is-workday class on workdays', () => {
    assert(renderDayDOM(new Date(2015,5,26)).classList.contains('is-workday'))
  })

  it('excludes is-workday class on weekends', () => {
    assert(!renderDayDOM(new Date(2015,5,28)).classList.contains('is-workday'))
  })

  it('adds is-weekend class on weekends', () => {
    assert(renderDayDOM(new Date(2015,5,27)).classList.contains('is-weekend'))
  })

  it('excludes is-weekend class on workdays', () => {
    assert(!renderDayDOM(new Date(2015,5,25)).classList.contains('is-weekend'))
  })

  it('adds is-current_month class when day falls within selected month', () => {
    assert(renderDayDOM(new Date()).classList.contains('is-current_month'))
  })

  it('adds is-prev_month class when day falls within previous month', () => {
    assert(renderDayDOM(new Date(2015,5,10), {activeMonth: new Date(2015,6,1)}).classList.contains('is-prev_month'))
  })

  it('adds is-next_month class when day falls within month next month', () => {
    assert(renderDayDOM(new Date(2015,7,1), {activeMonth: new Date(2015,6,1)}).classList.contains('is-next_month'))
  })

  it('adds is-selectable class when inBoundaries is true', () => {
    assert(renderDayDOM(new Date(2015,5,27), {inBoundaries: true}).classList.contains('is-selectable'))
    assert(!renderDayDOM(new Date(2015,5,27), {inBoundaries: true}).classList.contains('is-not-selectable'))
  })

  it('adds is-not-selectable class when inBoundaries is false', () => {
    assert(renderDayDOM(new Date(2015,5,27), {inBoundaries: false}).classList.contains('is-not-selectable'))
    assert(!renderDayDOM(new Date(2015,5,27), {inBoundaries: false}).classList.contains('is-selectable'))
  })

});
