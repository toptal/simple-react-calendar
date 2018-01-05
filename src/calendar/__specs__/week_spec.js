import React from 'react'
import TestUtils from 'react-dom/test-utils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'
import {shallow} from 'enzyme'
import Week from '../week'

describe('Week', () => {
  const defaultProps = {
    date: new Date(2015, 7, 17),
    today: new Date(2015, 7, 17),
    activeMonth: new Date(2015, 7, 17),
    weekStartsOn: 1,
    onDayClick: () => {},
    onDayMouseMove: () => {},
    onDisabledDayClick: () => {},
  }

  function render(props = {}) {
    const component = TestUtils.renderIntoDocument(<Week {...Object.assign({}, defaultProps, props)} />)
    const element = findDOMNode(component)
    element.component = component
    return element
  }

  function findDays(element) {
    return TestUtils.scryRenderedDOMComponentsWithClass(element.component, 'calendar-day').map((day) =>
      findDOMNode(day)
    )
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('displays the days of the month', () => {
    const days = findDays(render({date: new Date(2015, 5, 29)}))
    const daysDisplayed = days.map((day) => day.textContent)
    assert.deepEqual(daysDisplayed, ['29', '30', '1', '2', '3', '4', '5'])
  })

  it('correctly marks the days that falls in the active month', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-current_month'))
    assert.deepEqual(daysWithClass, [true, true, false, false, false, false, false])
  })

  it('correctly marks the days that falls in the active month', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-current_month'))
    assert.deepEqual(daysWithClass, [true, true, false, false, false, false, false])
  })

  it('correctly marks the days that falls in the previous month', () => {
    const days = findDays(
      render({
        date: new Date(2015, 6, 27),
        activeMonth: new Date(2015, 7, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-prev_month'))
    assert.deepEqual(daysWithClass, [true, true, true, true, true, false, false])
  })

  it('correctly marks the days that falls in the next month', () => {
    const days = findDays(
      render({
        date: new Date(2015, 7, 31),
        activeMonth: new Date(2015, 7, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-next_month'))
    assert.deepEqual(daysWithClass, [false, true, true, true, true, true, true])
  })

  it('correctly marks the days that falls on working days', () => {
    const days = findDays(
      render({
        date: new Date(2015, 7, 31),
        activeMonth: new Date(2015, 7, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-working_day'))
    assert.deepEqual(daysWithClass, [true, true, true, true, true, false, false])
  })

  it('correctly marks the days that falls on weekends', () => {
    const days = findDays(
      render({
        date: new Date(2015, 7, 31),
        activeMonth: new Date(2015, 7, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-weekend'))
    assert.deepEqual(daysWithClass, [false, false, false, false, false, true, true])
  })

  it('correctly marks the days that falls on today', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        today: new Date(2015, 5, 31),
        activeMonth: new Date(2015, 5, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-today'))
    assert.deepEqual(daysWithClass, [false, false, true, false, false, false, false])
  })

  it('correctly marks the highlighted days', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        today: new Date(2015, 5, 31),
        activeMonth: new Date(2015, 5, 1),
        highlightedStart: new Date(2015, 5, 29),
        highlightedEnd: new Date(2015, 6, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-highlighted'))
    assert.deepEqual(daysWithClass, [true, true, true, false, false, false, false])
  })

  it('correctly marks the selected days', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29, 21, 0),
        activeMonth: new Date(2015, 5, 1),
        selectedMin: new Date(2015, 5, 30, 10, 0),
        selectedMax: new Date(2015, 6, 2, 5, 0),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-selected'))
    assert.deepEqual(daysWithClass, [false, true, true, true, false, false, false])
  })

  it('correctly marks the single selected day', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
        selectedMin: new Date(2015, 5, 30),
        selectedMax: new Date(2015, 5, 30),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-selected'))
    assert.deepEqual(daysWithClass, [false, true, false, false, false, false, false])
  })

  it('correctly marks the days inside boundaries with minDate', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
        minDate: new Date(2015, 5, 30),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [false, true, true, true, true, true, true])
  })

  it('correctly marks the days inside boundaries with maxDate', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
        maxDate: new Date(2015, 6, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [true, true, true, false, false, false, false])
  })

  it('correctly marks the days inside boundaries with both ends', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
        minDate: new Date(2015, 5, 30),
        maxDate: new Date(2015, 6, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-selectable'))
    assert.deepEqual(daysWithClass, [false, true, true, false, false, false, false])
  })

  it('correctly marks the days outside boundaries', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29),
        activeMonth: new Date(2015, 5, 1),
        minDate: new Date(2015, 5, 30),
        maxDate: new Date(2015, 6, 1),
      })
    )
    const daysWithClass = days.map((day) => day.classList.contains('is-not_selectable'))
    assert.deepEqual(daysWithClass, [true, false, false, true, true, true, true])
  })

  it('accepts a function to be called when a day element is clicked', () => {
    const onDayClick = sinon.spy()
    const days = findDays(render({onDayClick}))
    TestUtils.Simulate.click(days[0])
    assert(onDayClick.calledOnce)
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with class name equal .calendar-week', () => {
        const weekEl = findDOMNode(render())
        assert(weekEl.classList.contains('calendar-week'))
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const weekEl = findDOMNode(render({blockClassName: 'cal'}))
        assert(weekEl.classList.contains('cal-week'))
      })
    })
  })

  it('correctly marks the start of the selection', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29, 21, 0),
        activeMonth: new Date(2015, 5, 1),
        selectedMin: new Date(2015, 5, 30, 10, 0),
        selectedMax: new Date(2015, 6, 2, 5, 0),
      })
    )
    const daysWithStartClass = days.map((day) => day.classList.contains('is-start_selection'))
    assert.deepEqual(daysWithStartClass, [false, true, false, false, false, false, false])
  })

  it('correctly marks the end of the selection', () => {
    const days = findDays(
      render({
        date: new Date(2015, 5, 29, 21, 0),
        activeMonth: new Date(2015, 5, 1),
        selectedMin: new Date(2015, 5, 30, 10, 0),
        selectedMax: new Date(2015, 6, 2, 5, 0),
      })
    )
    const daysWithEndClass = days.map((day) => day.classList.contains('is-end_selection'))
    assert.deepEqual(daysWithEndClass, [false, false, false, true, false, false, false])
  })

  describe('disabledIntervals prop', () => {
    const disabledIntervals = [
      {
        start: new Date(2015, 7, 21),
        end: new Date(2015, 7, 23),
      },
    ]

    it('marks the disabled dates as .is-disabled', () => {
      const wrapper = shallow(<Week {...defaultProps} disabledIntervals={disabledIntervals} />)
      const disabledDays = wrapper.find('Day').map((day) => day.is('.is-disabled'))
      assert.deepEqual(disabledDays, [false, false, false, false, true, true, true])
    })

    it('marks the disabled dates as .is-not_selectable', () => {
      const wrapper = shallow(<Week {...defaultProps} disabledIntervals={disabledIntervals} />)
      const disabledDays = wrapper.find('Day').map((day) => day.is('.is-not_selectable'))
      assert.deepEqual(disabledDays, [false, false, false, false, true, true, true])
    })

    context('when a day is disabled', () => {
      it('passes onDisabledDayClick to the Day', () => {
        const onDisabledDayClick = () => {}
        const wrapper = shallow(
          <Week {...defaultProps} disabledIntervals={disabledIntervals} onDisabledDayClick={onDisabledDayClick} />
        )
        const disabledDay = wrapper.find('Day').last()
        assert(disabledDay.prop('onClick') === onDisabledDayClick)
      })
    })
  })
})
