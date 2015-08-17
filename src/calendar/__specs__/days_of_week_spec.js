import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import assert from 'power-assert'

import DaysOfWeek from '../days_of_week'

describe('MonthHeader', () => {
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
    const days = TestUtils.scryRenderedDOMComponentsWithClass(week, 'day')
      .map((day) => React.findDOMNode(day).textContent)
    assert.deepEqual(days, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
  })
})
