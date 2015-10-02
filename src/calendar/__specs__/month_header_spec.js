import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import assert from 'power-assert'

import MonthHeader from '../month_header'

describe('MonthHeader', () => {
  function render(props = {}) {
    const defaultProps = {
      activeMonth: new Date('2015-08-17'),
      onMonthChange: () => {}
    }
    return TestUtils.renderIntoDocument(
      <MonthHeader
        {...Object.assign({}, defaultProps, props)}
      />
    )
  }

  function getTitle(header) {
    return React.findDOMNode(
      TestUtils.findRenderedDOMComponentWithClass(header, 'month-title')
    ).textContent
  }

  function nextLink(header) {
    return React.findDOMNode(
      TestUtils.findRenderedDOMComponentWithClass(header, 'next-month')
    )
  }

  function prevLink(header) {
    return React.findDOMNode(
      TestUtils.findRenderedDOMComponentWithClass(header, 'prev-month')
    )
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
      assert(onMonthChange.calledWith(new Date('2015-09-17')))
    })

    it('triggered after click on prev', () => {
      clickPrev(header)
      assert(onMonthChange.calledWith(new Date('2015-07-17')))
    })
  })

  it('prev link is disabled if current month is minDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      minDate: new Date('2015-08-01'),
      onMonthChange
    })
    clickPrev(header)
    assert(prevLink(header).classList.contains('is-disabled'))
    assert(!onMonthChange.called)
    clickNext(header)
    assert(onMonthChange.calledWith(new Date('2015-09-17')))
  })

  it('next link is disabled if current month is maxDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      maxDate: new Date('2015-08-01'),
      onMonthChange
    })
    clickNext(header)
    assert(nextLink(header).classList.contains('is-disabled'))
    assert(!onMonthChange.called)
    clickPrev(header)
    assert(onMonthChange.calledWith(new Date('2015-07-17')))
  })

  it('next and prev links is disabled if current month is minDate and maxDate', () => {
    const onMonthChange = sinon.spy()
    const header = render({
      minDate: new Date('2015-08-01'),
      maxDate: new Date('2015-08-10'),
      onMonthChange
    })
    clickNext(header)
    assert(!onMonthChange.called)
    clickPrev(header)
    assert(!onMonthChange.called)
  })
})
