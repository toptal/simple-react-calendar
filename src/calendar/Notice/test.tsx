import { cleanup, render, RenderResult } from '@testing-library/react'
import React from 'react'

import Notice, { Props } from './Notice'

afterEach(cleanup)

describe('Notice', () => {
  let api: RenderResult, props: Props

  beforeEach(() => {
    props = {
      blockClassName: 'test-class-name',
      type: 'overlapping_with_disabled',
    }
  })

  describe('when type is `overlapping_with_disabled`', () => {
    beforeEach(() => {
      api = render(<Notice {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })

  describe('when type is `disabled_day_click`', () => {
    beforeEach(() => {
      props = {
        ...props,
        type: 'disabled_day_click',
      }
      api = render(<Notice {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })

  describe('when type is `null`', () => {
    beforeEach(() => {
      props = {
        ...props,
        type: null,
      }
      api = render(<Notice {...props} />)
    })

    test('default render', () => {
      const { container } = api

      expect(container).toMatchSnapshot()
    })
  })
})
