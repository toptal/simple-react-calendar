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

  describe('weeks rendering', () => {
    context('when minNumberOfWeeks is not specified', () => {
      context('when the month has 4 weeks', () => {
        it('renders 4 weeks of the month', () => {
          const month = render({
            activeMonth: new Date(2010, 1, 15)
          })
          const weeks = TestUtils.scryRenderedComponentsWithType(month, Week)
            .map((week) => week.props.date)
          assert.deepEqual(weeks,
            [
              new Date(2010, 1, 1),
              new Date(2010, 1, 8),
              new Date(2010, 1, 15),
              new Date(2010, 1, 22)
            ]
          )
        })
      })

      context('when the month has 5 weeks', () => {
        it('renders 5 weeks of the month', () => {
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
      })

      context('when the month has 6 weeks', () => {
        it('renders 6 weeks of the month', () => {
          const month = render({
            activeMonth: new Date(2015, 7, 15)
          })
          const weeks = TestUtils.scryRenderedComponentsWithType(month, Week)
            .map((week) => week.props.date)
          assert.deepEqual(weeks,
            [
              new Date(2015, 6, 27),
              new Date(2015, 7, 3),
              new Date(2015, 7, 10),
              new Date(2015, 7, 17),
              new Date(2015, 7, 24),
              new Date(2015, 7, 31)
            ]
          )
        })
      })
    })

    context('when minNumberOfWeeks is specified', () => {
      context('when the month has less weeks than specified', () => {
        it('renders specified number of weeks', () => {
          const month = render({
            activeMonth: new Date(2010, 1, 15),
            minNumberOfWeeks: 5
          })
          const weeks = TestUtils.scryRenderedComponentsWithType(month, Week)
            .map((week) => week.props.date)
          assert.deepEqual(weeks,
            [
              new Date(2010, 1, 1),
              new Date(2010, 1, 8),
              new Date(2010, 1, 15),
              new Date(2010, 1, 22),
              new Date(2010, 2, 1)
            ]
          )
        })
      })

      context('when the month has the same number of weeks as specified', () => {
        it('renders specified weeks of the month', () => {
          const month = render({
            activeMonth: new Date(2015, 5, 15),
            minNumberOfWeeks: 5
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
      })

      context('when the month has more weeks than specified', () => {
        it('renders all the weeks of the month', () => {
          const month = render({
            activeMonth: new Date(2015, 7, 15),
            minNumberOfWeeks: 5
          })
          const weeks = TestUtils.scryRenderedComponentsWithType(month, Week)
            .map((week) => week.props.date)
          assert.deepEqual(weeks,
            [
              new Date(2015, 6, 27),
              new Date(2015, 7, 3),
              new Date(2015, 7, 10),
              new Date(2015, 7, 17),
              new Date(2015, 7, 24),
              new Date(2015, 7, 31)
            ]
          )
        })
      })
    })
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

    context('combined with rangeLimit mode', () => {
      let onChange, month
      beforeEach(() => {
        onChange = sinon.spy()
        month = render({
          activeMonth: new Date(2015, 5, 1),
          selectionMode: 'range',
          onChange,
          rangeLimit: 5
        })
      })

      it('allows to select single day range', () => {
        clickOnDays(month, 5, 5)
        assert(onChange.calledWith({
          start: new Date(2015, 5, 6),
          end: new Date(2015, 5, 6),
          inProgress: false
        }))
      })

      context('when the first selected date is before the second one', () => {
        it('allows to select a range within the limit', () => {
          clickOnDays(month, 5, 9)
          assert(onChange.calledWith({
            start: new Date(2015, 5, 6),
            end: new Date(2015, 5, 10),
            inProgress: false
          }))
        })

        it('truncates selected range to the specified length limit', () => {
          clickOnDays(month, 5, 34)
          assert(onChange.calledWith({
            start: new Date(2015, 5, 6),
            end: new Date(2015, 5, 11),
            inProgress: false
          }))
        })
      })

      context('when the first selected date is after the second one', () => {
        it('allows to select a range within the limit', () => {
          clickOnDays(month, 9, 5)
          assert(onChange.calledWith({
            start: new Date(2015, 5, 6),
            end: new Date(2015, 5, 10),
            inProgress: false
          }))
        })

        it('truncates selected range to the specified length limit', () => {
          clickOnDays(month, 16, 5)
          assert(onChange.calledWith({
            start: new Date(2015, 5, 6),
            end: new Date(2015, 5, 11),
            inProgress: false
          }))
        })
      })
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
        assert(el.getElementsByTagName('cal-month'))
      })
    })
  })
})
