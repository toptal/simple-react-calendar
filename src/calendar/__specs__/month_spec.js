import React from 'react/addons'
import assert from 'power-assert'
import sinon from 'sinon'

import Month from '../month'
import Week from '../week'
import Day from '../day'

const TestUtils = React.addons.TestUtils

describe('Month', () => {
  function render(props = {}) {
    const defaultProps = {
      today: new Date('2015-08-17'),
      activeMonth: new Date('2015-08-17'),
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
      .map((day) => React.findDOMNode(day))

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
})
