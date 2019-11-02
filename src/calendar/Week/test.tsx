import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'

import { IDateRange, ISelectionRange } from '../../@types'
import {
  getDayEachDay,
  getDayFormatted,
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
} from '../helper'
import Week, { Props } from './Week'

afterEach(cleanup)

describe('Week', () => {
  let api: RenderResult,
    activeMonth: Date,
    disabledIntervals: IDateRange[],
    maxDate: Date,
    minDate: Date,
    mockedCustomRender: any,
    mode: 'range' | 'single',
    props: Props,
    selected: ISelectionRange,
    today: Date

  beforeEach(() => {
    activeMonth = new Date(2019, 10, 1)
    disabledIntervals = []
    maxDate = new Date(2019, 10, 26)
    minDate = new Date(2019, 10, 20)
    mode = 'range'
    selected = { inProgress: false, start: new Date(2019, 10, 28), end: new Date(2019, 10, 29) }
    today = new Date(2019, 10, 27)

    props = {
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
      handleOnDayClick: jest.fn(),
      handleOnDayMouseEnter: jest.fn(),
      handleOnDisabledDayClick: jest.fn(),
      handleOnDisabledDayMouseEnter: jest.fn(),
      weekEnd: new Date(2019, 11, 1),
      weekNumber: 48,
      weekStart: new Date(2019, 10, 25),
    }
  })

  describe('action handlers', () => {
    beforeEach(() => {
      api = render(<Week {...props} />)
    })

    test('invoke `#handleOnDayClick`', () => {
      const { getByText } = api

      fireEvent.click(getByText(/26/i))

      expect(props.handleOnDayClick).toHaveBeenCalledTimes(1)
      expect(props.handleOnDisabledDayClick).not.toHaveBeenCalled()
    })

    test('invoke `#handleOnDisabledDayClick`', () => {
      const { getByText } = api

      fireEvent.click(getByText(/27/i))

      expect(props.handleOnDisabledDayClick).toHaveBeenCalledTimes(1)
      expect(props.handleOnDayClick).not.toHaveBeenCalled()
    })

    test('invoke `#handleOnDayMouseEnter`', () => {
      const { getByText } = api

      fireEvent.mouseEnter(getByText(/26/i))

      expect(props.handleOnDayMouseEnter).toHaveBeenCalledTimes(1)
      expect(props.handleOnDisabledDayMouseEnter).not.toHaveBeenCalled()
    })

    test('invoke `#handleOnDisabledDayMouseEnter`', () => {
      const { getByText } = api

      fireEvent.mouseEnter(getByText(/27/i))

      expect(props.handleOnDisabledDayMouseEnter).toHaveBeenCalledTimes(1)
      expect(props.handleOnDayMouseEnter).not.toHaveBeenCalled()
    })
  })

  describe('when render prop has not been passed', () => {
    beforeEach(() => {
      api = render(<Week {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })

  describe('when render prop has been passed', () => {
    beforeEach(() => {
      mockedCustomRender = jest.fn(() => null)

      props = {
        ...props,
        customRender: mockedCustomRender,
      }
      api = render(<Week {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
