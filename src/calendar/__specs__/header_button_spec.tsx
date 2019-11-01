import { shallow } from 'enzyme'
import React from 'react'

import { BLOCK_CLASS_NAME, NEXT_MONTH_TITLE, PREV_MONTH_TITLE } from '../consts'
import HeaderButton from '../header_button'

describe('HeaderButton', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<HeaderButton {...props} />)
  })

  it('renders <HeaderButton />', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when prop `enabled` is `false`', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({enabled: false})

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `type` is "next"', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({type: 'next', title: NEXT_MONTH_TITLE})

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `blockClassName` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({blockClassName: 'cal'})

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `title` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({title: 'testTitle'})

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `arrow` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({arrow: <i className="icon">Test</i>})

      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides = {}) => ({
  type: 'prev',
  enabled: true,
  onClick: () => {},
  blockClassName: BLOCK_CLASS_NAME,
  title: PREV_MONTH_TITLE,
  ...overrides,
})
