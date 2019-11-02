import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'

import { getDayIndexIsWeekend, getMonthFormattedName, getWeekDays } from '../helper'
import MonthHeader, { Props } from './MonthHeader'

afterEach(cleanup)

describe('MonthHeader', () => {
  let api: RenderResult,
    activeMonth: Date,
    mockedCustomRender: any,
    props: Props,
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6

  beforeEach(() => {
    activeMonth = new Date(2019, 10, 1)
    weekStartsOn = 1

    props = {
      blockClassName: 'test-class-name',
      activeMonth,
      getMonthFormattedName,
      getWeekDays: () => getWeekDays({ daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], dayIndex: 1 }),
      getDayIndexIsWeekend: (index) =>
        getDayIndexIsWeekend({ dayIndex: index as 0 | 1 | 2 | 3 | 4 | 5 | 6, weekStartsOn }),
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
      api = render(<MonthHeader {...props} />)
    })

    test('invoke `#isMonthNextEnabled`', () => {
      const { getByTitle } = api

      fireEvent.click(getByTitle(/Next Month/i))

      expect(props.handleOnSwitchMonth).toHaveBeenCalledTimes(1)
    })
  })

  describe('when render prop has not been passed', () => {
    beforeEach(() => {
      api = render(<MonthHeader {...props} />)
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
        api = render(<MonthHeader {...props} />)
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
      api = render(<MonthHeader {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
