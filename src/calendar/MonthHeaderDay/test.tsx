import { cleanup, render, RenderResult } from '@testing-library/react'
import React from 'react'

import MonthHeaderDay, { Props } from './MonthHeaderDay'

afterEach(cleanup)

describe('MonthHeaderDay', () => {
  let api: RenderResult, props: Props, mockedCustomRender: any

  beforeEach(() => {
    props = {
      blockClassName: 'test-class-name',
      day: 'Monday',
      isWeekend: false,
    }
  })

  describe('when day is `Monday`', () => {
    beforeEach(() => {
      api = render(<MonthHeaderDay {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })

  describe('when day is `Sunday`', () => {
    beforeEach(() => {
      props = {
        ...props,
        day: 'Sunday',
        isWeekend: true,
      }
      api = render(<MonthHeaderDay {...props} />)
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
      api = render(<MonthHeaderDay {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
