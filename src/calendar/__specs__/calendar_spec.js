import React from 'react/addons'
import TestUtils from 'react/lib/ReactTestUtils'
import assert from 'power-assert'

import Calendar from '../calendar'
import Month from '../month'
import Day from '../day'

describe ('Calendar', () => {
  function render(props = {}) {
    return TestUtils.renderIntoDocument(
      <Calendar
        {...props}
      />
    )
  }

  function clickOnDays() {
    const calendar = arguments[0]
    const daysToClick = Array.prototype.slice.call(arguments, 1)

    const days = TestUtils.scryRenderedComponentsWithType(calendar, Day)
      .map((day) => React.findDOMNode(day))

    daysToClick.map((day) => TestUtils.Simulate.click(days[day]))
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('renders month with selected date', () => {
    const date = new Date(2015, 6, 1)
    const calendar = render({
      activeMonth: date
    })
    const month = TestUtils.findRenderedComponentWithType(calendar, Month)
    assert.deepEqual(month.props.activeMonth, date)
  })

  context('in single selection mode', () => {
    let onSelect, calendar
    beforeEach(() => {
      onSelect = sinon.spy()
      calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'single',
        onSelect
      })
    })

    it('can select single day', () => {
      clickOnDays(calendar, 5)
      assert(onSelect.calledWith(new Date(2015, 5, 6)))
    })
  })

  context('in range selection mode', () => {
    let onSelect, calendar
    beforeEach(() => {
      onSelect = sinon.spy()
      calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'range',
        onSelect
      })
    })

    it('returns inProgress data', () => {
      clickOnDays(calendar, 5)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 6),
        inProgress: true
      }))
    })

    it('can select single day range', () => {
      clickOnDays(calendar, 5, 5)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 6),
        inProgress: false
      }))
    })

    it('can select days range', () => {
      clickOnDays(calendar, 5, 15)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 16),
        inProgress: false
      }))
    })

    it('can select days range in inverted order', () => {
      clickOnDays(calendar, 15, 5)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 5, 16),
        inProgress: false
      }))
    })

    it('can select days range across month boundary', () => {
      const nextMonth = React.findDOMNode(
        TestUtils.findRenderedDOMComponentWithClass(calendar, 'next-month')
      )
      clickOnDays(calendar, 5)
      TestUtils.Simulate.click(nextMonth)
      clickOnDays(calendar, 5)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 6),
        end: new Date(2015, 6, 4),
        inProgress: false
      }))
    })
  })

  context('with selection boundaries', () => {
    let onSelect, calendar
    beforeEach(() => {
      onSelect = sinon.spy()
      calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'range',
        minDate: new Date(2015, 5, 10),
        maxDate: new Date(2015, 5, 20),
        onSelect
      })
    })

    it('can select days range inside boundaries', () => {
      clickOnDays(calendar, 9, 19)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 10),
        end: new Date(2015, 5, 20),
        inProgress: false
      }))
    })

    it('cant select days earlier than min boundary', () => {
      clickOnDays(calendar, 1, 8)
      assert(!onSelect.called)
    })

    it('cant select days later than max boundary', () => {
      clickOnDays(calendar, 20, 25)
      assert(!onSelect.called)
    })

    it('can select days range after failing to select day outside boundaries', () => {
      clickOnDays(calendar, 14, 25, 19)
      assert(onSelect.calledWith({
        start: new Date(2015, 5, 15),
        end: new Date(2015, 5, 20),
        inProgress: false
      }))
    })
  })
})
