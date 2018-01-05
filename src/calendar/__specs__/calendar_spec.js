import React from 'react'

import TestUtils from 'react-dom/test-utils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'
import {shallow} from 'enzyme'
import {mockComponent} from './mocks'
import Calendar from '../calendar'
import Month from '../month'
import Day from '../day'
import DaysOfWeek from '../days_of_week'

describe('Calendar', () => {
  function render(props = {}) {
    return TestUtils.renderIntoDocument(<Calendar {...props} />)
  }

  function clickOnDays(calendar, ...daysToClick) {
    const days = TestUtils.scryRenderedComponentsWithType(calendar, Day).map((day) => findDOMNode(day))

    daysToClick.map((day) => TestUtils.Simulate.click(days[day]))
  }

  function hoverOnDay(calendar, dayToHover) {
    const day = findDOMNode(TestUtils.scryRenderedComponentsWithType(calendar, Day)[dayToHover])
    TestUtils.Simulate.mouseMove(day)
  }

  function getSelectedDays(calendar) {
    return TestUtils.scryRenderedComponentsWithType(calendar, Day)
      .filter((day) => findDOMNode(day).classList.contains('is-selected'))
      .map((day) => day.props.date)
  }

  function getHighlightedDays(calendar) {
    return TestUtils.scryRenderedComponentsWithType(calendar, Day)
      .filter((day) => findDOMNode(day).classList.contains('is-highlighted'))
      .map((day) => day.props.date)
  }

  it('renders with minimal params', () => {
    assert(render())
  })

  it('renders month with selected date', () => {
    const date = new Date(2015, 6, 1)
    const calendar = render({
      activeMonth: date,
    })
    const month = TestUtils.findRenderedComponentWithType(calendar, Month)
    assert.deepEqual(month.props.activeMonth, date)
  })

  it('can change month without activeMonth property', () => {
    const calendar = render({
      today: new Date(2015, 6, 1),
    })
    const calendarEl = findDOMNode(calendar)
    const nextLinkEl = calendarEl.querySelector('.calendar-header_button.is-next')
    const headerTitleEl = calendarEl.querySelector('.calendar-month_header_title')

    assert(headerTitleEl.textContent === 'July 2015')
    TestUtils.Simulate.click(nextLinkEl)
    assert(headerTitleEl.textContent === 'August 2015')
  })

  it('updates default today when date is changed', () => {
    // Set current date to 2015-07-05
    let clock = sinon.useFakeTimers(new Date(2015, 6, 5).getTime())
    const calendar = render({activeMonth: new Date(2015, 6, 1)})
    const todayText = () => findDOMNode(calendar).querySelector('.calendar-day.is-today').textContent
    assert(todayText() === '5')
    // Change current date to 2015-07-17
    clock.restore()
    clock = sinon.useFakeTimers(new Date(2015, 6, 17).getTime())
    calendar.forceUpdate()
    assert(todayText() === '17')
    clock.restore()
  })

  context('in single selection mode', () => {
    let onSelect, calendar
    beforeEach(() => {
      onSelect = sinon.spy()
      calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'single',
        onSelect,
      })
    })

    it('can select single day', () => {
      clickOnDays(calendar, 5)
      assert(onSelect.calledWith(new Date(2015, 5, 6)))
    })
  })

  describe('range selection mode', () => {
    context('when onSelectionProgress is not passed', () => {
      let onSelect, calendar
      beforeEach(() => {
        onSelect = sinon.spy()
        calendar = render({
          activeMonth: new Date(2015, 5, 1),
          selected: {start: new Date(2015, 5, 1), end: new Date(2015, 5, 3)},
          mode: 'range',
          onSelect,
        })
      })

      context('when the only one date is selected', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5)
        })

        it('does not call onSelect', () => {
          assert(!onSelect.called)
        })

        context('when user hovers over the chosen day', () => {
          it('sets selection to the only chosen day', () => {
            hoverOnDay(calendar, 5)
            const selection = getSelectedDays(calendar)
            assert.deepEqual(selection, [new Date(2015, 5, 6)])
          })
        })

        context('when user hovers over a day before the chosen day', () => {
          it('sets selection from the hovered day to the chosen one', () => {
            hoverOnDay(calendar, 3)
            const selection = getSelectedDays(calendar)
            assert.deepEqual(selection, [new Date(2015, 5, 4), new Date(2015, 5, 5), new Date(2015, 5, 6)])
          })
        })

        context('when user hovers over a day after the chosen day', () => {
          it('sets selection from the chosen day to the hovered one', () => {
            hoverOnDay(calendar, 7)
            const selection = getSelectedDays(calendar)
            assert.deepEqual(selection, [new Date(2015, 5, 6), new Date(2015, 5, 7), new Date(2015, 5, 8)])
          })
        })

        context('when user hover over a day in the different month', () => {
          it('sets selection from the hovered day to the end of the month', () => {
            const calendarEl = findDOMNode(calendar)
            const prevLink = calendarEl.querySelector('.calendar-header_button.is-prev')
            TestUtils.Simulate.click(prevLink)

            hoverOnDay(calendar, 33)
            const selection = getSelectedDays(calendar)
            assert.deepEqual(selection, [new Date(2015, 4, 30), new Date(2015, 4, 31)])
          })
        })
      })

      context('when both dates are selected', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5, 15)
        })

        it('calls onSelect', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
            })
          )
        })
      })

      context('when the end date is before the start date', () => {
        beforeEach(() => {
          clickOnDays(calendar, 15, 5)
        })

        it('calls onSelect with swapped dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
            })
          )
        })
      })

      context('when the same date is chosen for the start and for the end of the range', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5, 5)
        })

        it('calls onSelect with the same value for the start and the end dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 6),
            })
          )
        })
      })

      context('when user switches the month', () => {
        beforeEach(() => {
          const calendarEl = findDOMNode(calendar)
          const nextLinkEl = calendarEl.querySelector('.calendar-header_button.is-next')
          clickOnDays(calendar, 5)
          TestUtils.Simulate.click(nextLinkEl)
          clickOnDays(calendar, 5)
        })

        it('calls onSelect with the correct dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 6, 4),
            })
          )
        })
      })

      context('when user clears the selection (e.g. by selecting an overlapping interval)', () => {
        it('does not call onSelect', () => {
          const onSelect = sinon.spy()
          const wrapper = shallow(<Calendar mode="range" onSelect={onSelect} />)
          const onChange = wrapper.find('Month').prop('onChange')
          onChange({start: null, end: null, inProgress: false})
          assert(!onSelect.called)
        })
      })
    })

    context('when onSelectionProgress is passed', () => {
      let onSelect, calendar, onSelectionProgress
      beforeEach(() => {
        onSelect = sinon.spy()
        onSelectionProgress = sinon.spy()
        calendar = render({
          activeMonth: new Date(2015, 5, 1),
          selected: {start: new Date(2015, 5, 1), end: new Date(2015, 5, 3)},
          mode: 'range',
          onSelect,
          onSelectionProgress,
        })
      })

      context('when the only one date is selected', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5)
        })

        it('calls onSelectionProgress with isProgress equal true', () => {
          assert(
            onSelectionProgress.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 6),
              inProgress: true,
            })
          )
        })

        it('does not call onSelect', () => {
          assert(!onSelect.called)
        })

        it('preserves the current selection', () => {
          const selected = getSelectedDays(calendar)
          assert.deepEqual(selected, [new Date(2015, 5, 1), new Date(2015, 5, 2), new Date(2015, 5, 3)])
        })

        context('when user hovers over a day', () => {
          it('preserves the current selection', () => {
            hoverOnDay(calendar, 10)
            const selected = getSelectedDays(calendar)
            assert.deepEqual(selected, [new Date(2015, 5, 1), new Date(2015, 5, 2), new Date(2015, 5, 3)])
          })
        })
      })

      context('when both dates are selected', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5, 15)
        })

        it('calls onSelectionProgress with inProgress equal to false', () => {
          assert(
            onSelectionProgress.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
              inProgress: false,
            })
          )
        })

        it('calls onSelect', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
            })
          )
        })
      })

      context('when the end date is before the start date', () => {
        beforeEach(() => {
          clickOnDays(calendar, 15, 5)
        })

        it('calls onSelectionProgress with swapped dates', () => {
          assert(
            onSelectionProgress.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
              inProgress: false,
            })
          )
        })

        it('calls onSelect with swapped dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 16),
            })
          )
        })
      })

      context('when the same date is chosen for the start and for the end of the range', () => {
        beforeEach(() => {
          clickOnDays(calendar, 5, 5)
        })

        it('calls onSelectionProgress with the same value for the start and the end dates', () => {
          assert(
            onSelectionProgress.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 6),
              inProgress: false,
            })
          )
        })

        it('calls onSelect with the same value for the start and the end dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 5, 6),
            })
          )
        })
      })

      context('when user switches the month', () => {
        beforeEach(() => {
          const calendarEl = findDOMNode(calendar)
          const nextLinkEl = calendarEl.querySelector('.calendar-header_button.is-next')
          clickOnDays(calendar, 5)
          TestUtils.Simulate.click(nextLinkEl)
          clickOnDays(calendar, 5)
        })

        it('calls onSelectionProgress with the correct dates', () => {
          assert(
            onSelectionProgress.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 6, 4),
              inProgress: false,
            })
          )
        })

        it('calls onSelect with the correct dates', () => {
          assert(
            onSelect.calledWith({
              start: new Date(2015, 5, 6),
              end: new Date(2015, 6, 4),
            })
          )
        })
      })
    })
  })

  describe('selection boundaries', () => {
    let onSelect, calendar
    beforeEach(() => {
      onSelect = sinon.spy()
      calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'range',
        minDate: new Date(2015, 5, 10),
        maxDate: new Date(2015, 5, 20),
        onSelect,
      })
    })

    it('can select days range inside boundaries', () => {
      clickOnDays(calendar, 9, 19)
      assert(
        onSelect.calledWith({
          start: new Date(2015, 5, 10),
          end: new Date(2015, 5, 20),
        })
      )
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
      assert(
        onSelect.calledWith({
          start: new Date(2015, 5, 15),
          end: new Date(2015, 5, 20),
        })
      )
    })
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with .calendar', () => {
        const el = findDOMNode(render())
        assert(el.classList.contains('calendar'))
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with passed block class name', () => {
        const el = findDOMNode(render({blockClassName: 'cal'}))
        assert(el.classList.contains('cal'))
      })
    })
  })

  describe('monthHeaderComponent', () => {
    it('renders passed component as Object', () => {
      const mockHeader = React.Component({
        render() {
          return <div className="fake">MockHeader</div>
        },
      })
      const el = findDOMNode(render({monthHeaderComponent: mockHeader}))
      assert(el.getElementsByClassName('fake'))
    })

    it('renders passed component as Function', () => {
      const el = findDOMNode(render({monthHeaderComponent: mockComponent}))
      assert(el.getElementsByClassName('fake'))
    })
  })

  describe('highlighted', () => {
    it('does not have any highlighted days by default', () => {
      const calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'single',
      })
      const highlightedDays = getHighlightedDays(calendar)
      assert(highlightedDays.length === 0)
    })

    it('does not have any highlighted if data is incorrect', () => {
      const calendar = render({
        activeMonth: new Date(2015, 5, 1),
        highlighted: {start: 'string', end: null},
      })
      const highlightedDays = getHighlightedDays(calendar)
      assert(highlightedDays.length === 0)
    })

    it('renders highlighted days', () => {
      const calendar = render({
        activeMonth: new Date(2015, 5, 1),
        mode: 'single',
        highlighted: {start: new Date(2015, 4, 25), end: new Date(2015, 5, 2)},
      })
      const highlightedDays = getHighlightedDays(calendar)
      assert.deepEqual(highlightedDays, [new Date(2015, 5, 1), new Date(2015, 5, 2)])
    })

    it('renders highlighted days on range mode', () => {
      const calendar = render({
        activeMonth: new Date(2015, 4, 1),
        mode: 'range',
        highlighted: {start: new Date(2015, 4, 25), end: new Date(2015, 5, 2)},
      })
      const highlightedDays = getHighlightedDays(calendar)
      assert.deepEqual(highlightedDays, [
        new Date(2015, 4, 25),
        new Date(2015, 4, 26),
        new Date(2015, 4, 27),
        new Date(2015, 4, 28),
        new Date(2015, 4, 29),
        new Date(2015, 4, 30),
        new Date(2015, 4, 31),
      ])
    })
  })

  describe('NoticeComponent', () => {
    it('passes onNoticeChange to the Month component', () => {
      const wrapper = shallow(<Calendar mode="range" />)
      const onNoticeChange = wrapper.find('Month').prop('onNoticeChange')
      assert(typeof onNoticeChange === 'function')
    })

    context('when there is no notice', () => {
      it('do not render Notice', () => {
        const wrapper = shallow(<Calendar mode="range" />)
        assert(wrapper.find('Notice').length === 0)
      })
    })

    context('when there is a notice', () => {
      it('renders Notice with blockClassName and type props', () => {
        const wrapper = shallow(<Calendar mode="range" />)
        wrapper.setState({shownNoticeType: 'disabled_day_click'})
        const notice = wrapper.find('Notice')
        assert(notice.length)
        assert(notice.prop('type') === 'disabled_day_click')
        assert(notice.prop('blockClassName') === 'calendar')
      })

      it('allows to pass custom notice component', () => {
        const Whatever = () => ''
        Whatever.displayName = 'Whatever'
        const wrapper = shallow(<Calendar mode="range" NoticeComponent={Whatever} blockClassName="Cal" />)
        wrapper.setState({shownNoticeType: 'disabled_day_click'})
        const customNotice = wrapper.find('Whatever')
        assert(customNotice.length)
        assert(customNotice.prop('type') === 'disabled_day_click')
        assert(customNotice.prop('blockClassName') === 'Cal')
      })
    })
  })

  describe('weekStartsOn', () => {
    it('render days from correct starting day', () => {
      const calendar = render({
        weekStartsOn: 2,
      })
      const daysOfWeek = TestUtils.findRenderedComponentWithType(calendar, DaysOfWeek)

      assert.deepEqual(daysOfWeek.props.weekStartsOn, 2)
    })
  })
})
