import React from 'react/addons'
import assert from 'power-assert'
import sinon from 'sinon'

import Week from '../week'

const TestUtils = React.addons.TestUtils

describe('Week', () => {
  function render(props = {}) {
    const defaultProps = {
      date: new Date('2015-08-17'),
      today: new Date('2015-08-17'),
      activeMonth: new Date('2015-08-17'),
      onDayClick: () => {},
      onDayMouseMove: () => {}
    }
    const component = TestUtils.renderIntoDocument(
      <Week
        {...Object.assign({}, defaultProps, props)}
      />
    )
    const element = React.findDOMNode(component)
    element.component = component
    return element
  }

  function findDays(element) {
    return TestUtils.scryRenderedDOMComponentsWithClass(element.component, 'day')
    .map((day) => {
      return React.findDOMNode(day)
    })
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('displays the days of the month', () => {
    const days = findDays(render({date: new Date(2015, 5, 29)}))
    const daysDisplayed = days.map((day) => day.textContent)
    assert.deepEqual(daysDisplayed, ['29', '30', '1', '2', '3', '4', '5'])
  })

  it('correctly marks the days that fall in the active month', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1)
    }))
    const daysWithClass = days.map((day) => { return day.classList.contains('is-current_month') })
    assert.deepEqual(daysWithClass, [true, true, false, false, false, false, false])
  })

  it('correctly marks the selected days', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29, 21, 0),
      activeMonth: new Date(2015, 5, 1),
      selectedMin: new Date(2015, 5, 30, 10, 0),
      selectedMax: new Date(2015, 6, 2, 5, 0)
    }))
    const daysWithClass = days.map((day) => { return day.classList.contains('is-selected') })
    assert.deepEqual(daysWithClass, [false, true, true, true, false, false, false])
  })

  it('correctly marks the single selected day', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1),
      selectedMin: new Date(2015, 5, 30),
      selectedMax: new Date(2015, 5, 30)
    }))
    const daysWithClass = days.map((day) => { return day.classList.contains('is-selected') })
    assert.deepEqual(daysWithClass, [false, true, false, false, false, false, false])
  })

  it('correctly marks the days inside boundaries with minDate', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1),
      minDate: new Date(2015, 5, 30)
    }))
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [false, true, true, true, true, true, true])
  })

  it('correctly marks the days inside boundaries with maxDate', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1),
      maxDate: new Date(2015, 6, 1)
    }))
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [true, true, true, false, false, false, false])
  })

  it('correctly marks the days inside boundaries with both ends', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1),
      minDate: new Date(2015, 5, 30),
      maxDate: new Date(2015, 6, 1)
    }))
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [false, true, true, false, false, false, false])
  })

  it('correctly marks the days outside boundaries', () => {
    const days = findDays(render({
      date: new Date(2015, 5, 29),
      activeMonth: new Date(2015, 5, 1),
      minDate: new Date(2015, 5, 30),
      maxDate: new Date(2015, 6, 1)
    }))
    const daysWithClass = days.map((day) => day.classList.contains('is-not-selectable'))
    assert.deepEqual(daysWithClass, [true, false, false, true, true, true, true])
  })

  it('accepts a function to be called when a day element is clicked', () => {
    const onDayClick = sinon.spy()
    const days = findDays(render({onDayClick}))
    TestUtils.Simulate.click(days[0])
    assert(onDayClick.calledOnce)
  })
})
