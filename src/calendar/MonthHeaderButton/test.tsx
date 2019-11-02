import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'

import MonthHeaderButton, { Props } from './MonthHeaderButton'

afterEach(cleanup)

describe('MonthHeaderButton', () => {
  let api: RenderResult, props: Props, mockedCustomRender: any

  beforeEach(() => {
    props = {
      blockClassName: 'test-class-name',
      enabled: true,
      handleOnClick: jest.fn(),
      type: 'next',
    }
  })

  describe('action handlers', () => {
    beforeEach(() => {
      api = render(<MonthHeaderButton {...props} />)
    })

    test('invoke `#handleOnClick`', () => {
      const { getByTitle } = api

      fireEvent.click(getByTitle(/Next Month/i))

      expect(props.handleOnClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('when type is `next`', () => {
    beforeEach(() => {
      api = render(<MonthHeaderButton {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })

  describe('when type is `prev`', () => {
    beforeEach(() => {
      props = {
        ...props,
        type: 'prev',
      }
      api = render(<MonthHeaderButton {...props} />)
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
      api = render(<MonthHeaderButton {...props} />)
    })

    test('render prop has been called properly', () => {
      expect(props.customRender).toHaveBeenCalledTimes(1)
      expect(props.customRender).toHaveBeenCalledWith(props)
    })
  })
})
