import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'

import DaysOfWeek from '../days_of_week'

describe('DaysOfWeek', () => {
  function render(props = {}) {
    return TestUtils.renderIntoDocument(
      <DaysOfWeek {...props} />
    )
  }

  it('renders', () => {
    assert(render())
  })

  it('renders days of week', () => {
    const week = render()
    const days = TestUtils.scryRenderedDOMComponentsWithClass(week, 'calendar-days_of_week_day')
      .map((day) => findDOMNode(day).textContent)
    assert.deepEqual(days, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
  })

  it('adds .is-weekend modifier to weekends', () => {
    const week = render()
    const weekendModifiers
      = TestUtils.scryRenderedDOMComponentsWithClass(week, 'calendar-days_of_week_day')
        .map((day) => findDOMNode(day).classList.contains('is-weekend'))
    assert.deepEqual(
      weekendModifiers,
      [false, false, false, false, false, true, true]
    )
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('render el with .calendar-days_of_week', () => {
        const daysOfWeekEl = findDOMNode(render())
        assert(daysOfWeekEl.classList.contains('calendar-days_of_week'))
      })

      it('renders day el with .calendar-days_of_week_day', () => {
        const dayEls = TestUtils.scryRenderedDOMComponentsWithClass(render(), 'calendar-days_of_week_day')
        assert(dayEls.length > 0)
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const daysOfWeekEl = findDOMNode(render({blockClassName: 'cal'}))
        assert(daysOfWeekEl.classList.contains('cal-days_of_week'))
      })

      it('renders day el with prefixed class name', () => {
        const dayEls = TestUtils.scryRenderedDOMComponentsWithClass(render({blockClassName: 'cal'}), 'cal-days_of_week_day')
        assert(dayEls.length > 0)
      })
    })
  })
})
