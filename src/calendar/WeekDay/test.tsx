import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'

import { getDayFormatted } from '../helper'
import WeekDay, { Props } from './WeekDay'

afterEach(cleanup)

describe('WeekDay', () => {
  let api: RenderResult, props: Props, date: Date, mockedCustomRender: any

  beforeEach(() => {
    date = new Date(2019, 10, 25)
    props = {
      blockClassName: 'test-class-name',
      date,
      getDayFormatted,
      handleOnClick: jest.fn(),
      handleOnEnter: jest.fn(),
      isCurrentMonth: true,
      isDisabled: false,
      isHighlighted: true,
      isMonthNext: false,
      isMonthPrev: false,
      isNonSelectable: false,
      ISODate: '2019-11-25',
      isSelectable: true,
      isSelected: false,
      isSelectionEnd: false,
      isSelectionStart: false,
      isToday: true,
      isWeekend: false,
      isWorkday: true,
    }
  })

  describe('action handlers', () => {
    beforeEach(() => {
      api = render(<WeekDay {...props} />)
    })

    test('invoke `#handleOnClick`', () => {
      const { getByText } = api

      fireEvent.click(getByText(/25/i))

      expect(props.handleOnClick).toHaveBeenCalledTimes(1)
      expect(props.handleOnEnter).not.toHaveBeenCalled()
    })

    test('invoke `#handleOnEnter`', () => {
      const { getByText } = api

      fireEvent.mouseEnter(getByText(/25/i))

      expect(props.handleOnClick).not.toHaveBeenCalledTimes(1)
      expect(props.handleOnEnter).toHaveBeenCalled()
    })
  })

  describe('when render prop has not been passed', () => {
    beforeEach(() => {
      api = render(<WeekDay {...props} />)
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
      api = render(<WeekDay {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
