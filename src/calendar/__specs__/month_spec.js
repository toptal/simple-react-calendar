import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'

import Month from '../month'
import Week from '../week'
import Day from '../day'

describe('Month', () => {
  function render(props = {}) {
    const defaultProps = {
      today: new Date(2015, 7, 17),
      activeMonth: new Date(2015, 7, 17),
      mode: 'range',
      onChange: () => {}
    }
    return TestUtils.renderIntoDocument(
      <Month
        {...Object.assign({}, defaultProps, props)}
      />
    )
  }

  function clickOnDays() {
    const month = arguments[0]
    const daysToClick = Array.prototype.slice.call(arguments, 1)

    const days = TestUtils.scryRenderedComponentsWithType(month, Day)
      .map((day) => findDOMNode(day))

    daysToClick.map((day) => TestUtils.Simulate.click(days[day]))
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('renders weeks of the month', () => {
    const month = render({
      activeMonth: new Date(2015, 5, 15)
    })
    const weeks = TestUtils.scryRenderedComponentsWithType(month, Week)
      .map((week) => week.props.date)
    assert.deepEqual(weeks,
      [
        new Date(2015, 5, 1),
        new Date(2015, 5, 8),
        new Date(2015, 5, 15),
        new Date(2015, 5, 22),
        new Date(2015, 5, 29)
      ]
    )
  })

  context('in single selection mode', () => {
    let onChange, month
    beforeEach(() => {
      onChange = sinon.spy()
      month = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'single',
        onChange
      })
    })

    it('can select single day', () => {
      clickOnDays(month, 5)
      assert(onChange.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 6),
        inProgress: false
      }))
    })
  })

  context('in range selection mode', () => {
    let onChange, month
    beforeEach(() => {
      onChange = sinon.spy()
      month = render({
        activeMonth: new Date(2015, 5, 1),
        selectionMode: 'range',
        onChange
      })
    })

    it('can select single day range', () => {
      clickOnDays(month, 5, 5)
      assert(onChange.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 6),
        inProgress: false
      }))
    })

    it('can select days range', () => {
      clickOnDays(month, 5, 15)
      assert(onChange.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 16),
        inProgress: false
      }))
    })

    it('can select days range in inverted order', () => {
      clickOnDays(month, 15, 5)
      assert(onChange.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 16),
        inProgress: false
      }))
    })
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with class name equal .calendar-month', () => {
        const el = findDOMNode(render())
        assert(el.classList.contains('calendar-month'))
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const el = findDOMNode(render({blockClassName: 'cal'}))
        assert(el.classList.contains('cal-month'))
      })
    })
  })
})
