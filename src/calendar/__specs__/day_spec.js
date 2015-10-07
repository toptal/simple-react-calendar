import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import assert from 'power-assert'

import Day from '../day'

describe('Day', () => {
  function render(props = {}) {
    const defaultProps = {
      date: new Date(2015, 7, 17),
      today: new Date(2015, 7, 17),
      activeMonth: new Date(2015, 7, 17),
      onClick: () => {},
      onMouseMove: () => {}
    }
    return TestUtils.renderIntoDocument(
      <Day
        {...Object.assign({}, defaultProps, props)}
      />
    )
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('displays the day of the month', () => {
    const today = new Date(2015, 8, 2)
    const day = React.findDOMNode(render({date: today}))
    assert.equal(day.textContent, '2')
  })

  it('accepts a function to be called when element is clicked', () => {
    const onClick = sinon.spy()
    const day = React.findDOMNode(render({onClick}))
    TestUtils.Simulate.click(day)
    assert(onClick.calledOnce)
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with .calendar-day', () => {
        const el = React.findDOMNode(render())
        assert(el.classList.contains('calendar-day'))
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const el = React.findDOMNode(render({blockClassName: 'cal'}))
        assert(el.classList.contains('cal-day'))
      })
    })
  })
})
