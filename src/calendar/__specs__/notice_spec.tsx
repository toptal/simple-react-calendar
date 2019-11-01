import { shallow } from 'enzyme'
import React from 'react'

import Notice from '../notice'

describe('Notice', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Notice {...props} />)
  })

  describe('when prop `type` is "overlapping_with_disabled"', () => {
    it('renders <Notice />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `type` is "disabled_day_click"', () => {
    it('renders <Notice />', () => {
      wrapper.setProps('disabled_day_click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides = {}) => ({
  type: 'overlapping_with_disabled',
  blockClassName: 'example-class-name',
  ...overrides,
})
