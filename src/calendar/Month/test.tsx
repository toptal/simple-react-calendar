import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'

import { IDateRange, ISelectionRange } from '../../@types'
import {
  getDayEachDay,
  getDayFormatted,
  getDayIndexIsWeekend,
  getDayIsCurrentMonth,
  getDayIsDisabled,
  getDayIsHighlighted,
  getDayIsNextMonth,
  getDayISOFormatter,
  getDayIsSame,
  getDayIsSelectable,
  getDayIsSelected,
  getDayIsSelectedEnd,
  getDayIsSelectedStart,
  getDayIsWeekend,
  getMonthFormattedName,
  getMonthWeeks,
  getWeekDays,
} from '../helper'
import Month, { Props } from './Month'

afterEach(cleanup)

describe('Month', () => {
  let api: RenderResult,
    activeMonth: Date,
    disabledIntervals: IDateRange[],
    maxDate: Date,
    minDate: Date,
    mockedCustomRender: any,
    mode: 'range' | 'single',
    props: Props,
    selected: ISelectionRange,
    today: Date,
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6

  beforeEach(() => {
    activeMonth = new Date(2019, 10, 1)
    disabledIntervals = []
    maxDate = new Date(2019, 10, 26)
    minDate = new Date(2019, 10, 20)
    mode = 'range'
    selected = { inProgress: false, start: new Date(2019, 10, 28), end: new Date(2019, 10, 29) }
    today = new Date(2019, 10, 27)
    weekStartsOn = 1

    props = {
      activeMonth,
      blockClassName: 'test-class-name',
      getDayEachDay,
      getDayFormatted,
      getDayIsCurrentMonth: (date) => getDayIsCurrentMonth({ activeMonth, date }),
      getDayIsDisabled: (date) => getDayIsDisabled({ date, disabledIntervals }),
      getDayIsHighlighted: (date) => getDayIsHighlighted({ date, highlightedIntervals: [] }),
      getDayIsNextMonth: (date) => getDayIsNextMonth({ activeMonth, date }),
      getDayISOFormatter,
      getDayIsSelectable: (date) => getDayIsSelectable({ date, minDate, maxDate, disabledIntervals }),
      getDayIsSelected: (date) => getDayIsSelected({ date, mode, selected }),
      getDayIsSelectedEnd: (date) => getDayIsSelectedStart({ date, mode, selected }),
      getDayIsSelectedStart: (date) => getDayIsSelectedEnd({ date, mode, selected }),
      getDayIsToday: (date) => getDayIsSame({ date, dateToCompare: today }),
      getDayIsWeekend: (date) => getDayIsWeekend({ date }),
      getDayIndexIsWeekend: (index) =>
        getDayIndexIsWeekend({ dayIndex: index as 0 | 1 | 2 | 3 | 4 | 5 | 6, weekStartsOn }),
      getMonthWeeks: () => getMonthWeeks({ activeMonth, weekStartsOn }),
      getMonthFormattedName,
      getWeekDays: () => getWeekDays({ daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], dayIndex: 1 }),
      handleOnDayClick: jest.fn(),
      handleOnDayMouseEnter: jest.fn(),
      handleOnDisabledDayClick: jest.fn(),
      handleOnDisabledDayMouseEnter: jest.fn(),
      handleOnSwitchMonth: jest.fn(),
      isMonthNextEnabled: true,
      isMonthPrevEnabled: false,
      showDaysOfWeek: true,
      showMonthName: true,
      showMonthNext: true,
      showMonthPrev: true,
    }
  })

  describe('action handlers', () => {
    beforeEach(() => {
      api = render(<Month {...props} />)
    })

    test('invoke `#isMonthNextEnabled`', () => {
      const { getByTitle } = api

      fireEvent.click(getByTitle(/Next Month/i))

      expect(props.handleOnSwitchMonth).toHaveBeenCalledTimes(1)
    })
  })

  describe('when render prop has not been passed', () => {
    beforeEach(() => {
      api = render(<Month {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })

    describe('when `showMonthPrev`, `showMonthName`, `showMonthNext` `showDaysOfWeek` props are `falsy`', () => {
      beforeEach(() => {
        props = {
          ...props,
          showMonthPrev: false,
          showMonthName: false,
          showMonthNext: false,
          showDaysOfWeek: false,
        }
        api = render(<Month {...props} />)
      })

      test('default render', () => {
        const { container } = api

        expect(container).toMatchSnapshot()
      })
    })
  })

  describe('when render prop has been passed', () => {
    beforeEach(() => {
      mockedCustomRender = jest.fn(() => null)

      props = {
        ...props,
        customRender: mockedCustomRender,
      }
      api = render(<Month {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
