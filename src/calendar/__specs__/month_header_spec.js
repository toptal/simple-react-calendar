import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'

import MonthHeader from '../month_header'

describe('MonthHeader', () => {
  function render(props = {}) {
    const defaultProps = {
      activeMonth: new Date(2015, 7, 17),
      onMonthChange: () => {}
    }
    return TestUtils.renderIntoDocument(
      <MonthHeader
        {...Object.assign({}, defaultProps, props)}
      />
    )
  }

  function getTitle(header) {
    return findDOMNode(
      TestUtils.findRenderedDOMComponentWithClass(header, 'calendar-month_header_title')
    ).textContent
  }

  function nextLink(header) {
    const headerEl = findDOMNode(header)
    return headerEl.querySelector('.calendar-header_button.is-next')
  }

  function prevLink(header) {
    const headerEl = findDOMNode(header)
    return headerEl.querySelector('.calendar-header_button.is-prev')
  }

  function clickNext(header) {
    TestUtils.Simulate.click(nextLink(header))
  }

  function clickPrev(header) {
    TestUtils.Simulate.click(prevLink(header))
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('renders current month name', () => {
    const header = render()
    assert(getTitle(header) === 'August 2015')
  })

  describe('onMonthChange callback', () => {
    let onMonthChange, header
    beforeEach(() => {
      onMonthChange = sinon.spy()
      header = render({onMonthChange})
    })

    it('triggered after click on next', () => {
      clickNext(header)
      assert(onMonthChange.calledWith(new Date(2015, 8, 17)))
    })

    it('triggered after click on prev', () => {
      clickPrev(header)
      assert(onMonthChange.calledWith(new Date(2015, 6, 17)))
    })
  })

  it('prev link is disabled if current month is minDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      minDate: new Date(2015, 7, 1),
      onMonthChange
    })
    clickPrev(header)
    assert(prevLink(header).classList.contains('is-disabled'))
    assert(!onMonthChange.called)
    clickNext(header)
    assert(onMonthChange.calledWith(new Date(2015, 8, 17)))
  })

  it('next link is disabled if current month is maxDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      maxDate: new Date(2015, 7, 1),
      onMonthChange
    })
    clickNext(header)
    assert(nextLink(header).classList.contains('is-disabled'))
    assert(!onMonthChange.called)
    clickPrev(header)
    assert(onMonthChange.calledWith(new Date(2015, 6, 17)))
  })

  it('next and prev links is disabled if current month is minDate and maxDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      minDate: new Date(2015, 7, 1),
      maxDate: new Date(2015, 7, 10),
      onMonthChange
    })
    clickNext(header)
    assert(!onMonthChange.called)
    clickPrev(header)
    assert(!onMonthChange.called)
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with .calendar-month_header', () => {
        const monthHeaderEl = findDOMNode(render())
        assert(monthHeaderEl.getElementsByClassName('calendar-month_header'))
      })

      it('renders title el with .calendar-month_header_title', () => {
        const titleEl = TestUtils.scryRenderedDOMComponentsWithClass(render(), 'calendar-month_header_title')
        assert(titleEl.length > 0)
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const monthHeaderEl = findDOMNode(render({blockClassName: 'cal'}))
        assert(monthHeaderEl.getElementsByClassName('cal-month_header'))
      })

      it('renders title el with prefixed class name', () => {
        const titleEl = TestUtils.scryRenderedDOMComponentsWithClass(render({blockClassName: 'cal'}), 'cal-month_header_title')
        assert(titleEl.length > 0)
      })
    })
  })
})
