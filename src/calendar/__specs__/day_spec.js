import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import assert from 'power-assert'
import sinon from 'sinon'

import Day from '../day'

describe('Day', () => {
  function render(props = {}) {
    const defaultProps = {
      date: new Date('2015-08-17'),
      today: new Date('2015-08-17'),
      activeMonth: new Date('2015-08-17'),
      onClick: () => {},
      onMouseMove: () => {}
    }
    return React.findDOMNode(TestUtils.renderIntoDocument(
      <Day
        {...Object.assign({}, defaultProps, props)}
      />
    ))
  }

  it('renders with minimal params', () => {
    const day = render()
    assert(day)
  })

  it('displays the day of the month', () => {
    const today = new Date()
    assert.equal(render({date: today}).textContent, today.getDate())
  })

  it('accepts a function to be called when element is clicked', () => {
    const onClick = sinon.spy()
    const dayDom = render({
      selectable: true,
      onClick
    })
    TestUtils.Simulate.click(dayDom)
    assert(onClick.calledOnce)
  })

  it('adds is-selected class when the selected property is set', () => {
    assert(render({selected: true}).classList.contains('is-selected'))
  })

  it('adds is-today class for today', () => {
    const date = new Date(2001, 1, 1)
    assert(render({date, today: date}).classList.contains('is-today'))
  })

  it('excludes is-today class for other days', () => {
    assert(
      !render({
        date: new Date(2001, 1, 1),
        today: new Date(2001, 1, 2)
      }).classList.contains('is-today')
    )
  })

  it('adds is-workday class on workdays', () => {
    assert(render({date: new Date(2015,5,26)}).classList.contains('is-workday'))
  })

  it('excludes is-workday class on weekends', () => {
    assert(!render({date: new Date(2015,5,28)}).classList.contains('is-workday'))
  })

  it('adds is-weekend class on weekends', () => {
    assert(render({date: new Date(2015,5,27)}).classList.contains('is-weekend'))
  })

  it('excludes is-weekend class on workdays', () => {
    assert(!render({date: new Date(2015,5,25)}).classList.contains('is-weekend'))
  })

  it('adds is-current_month class when day falls within selected month', () => {
    assert(render().classList.contains('is-current_month'))
  })

  it('adds is-prev_month class when day falls within previous month', () => {
    assert(render({date: new Date(2015,5,10), activeMonth: new Date(2015,6,1)}).classList.contains('is-prev_month'))
  })

  it('adds is-next_month class when day falls within month next month', () => {
    assert(render({date: new Date(2015,7,1), activeMonth: new Date(2015,6,1)}).classList.contains('is-next_month'))
  })

  it('adds is-selectable class when selectable is true', () => {
    assert(render({date: new Date(2015,5,27), selectable: true}).classList.contains('is-selectable'))
    assert(!render({date: new Date(2015,5,27), selectable: true}).classList.contains('is-not-selectable'))
  })

  it('adds is-not-selectable class when selectable is false', () => {
    assert(render({date: new Date(2015,5,27), selectable: false}).classList.contains('is-not-selectable'))
    assert(!render({date: new Date(2015,5,27), selectable: false}).classList.contains('is-selectable'))
  })
})
