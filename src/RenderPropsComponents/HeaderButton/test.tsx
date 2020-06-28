import { shallow } from 'enzyme'
import React from 'react'

import { BLOCK_CLASS_NAME, NEXT_MONTH_TITLE, PREV_MONTH_TITLE } from '../../calendar/consts'
import HeaderButton from '.'

describe('HeaderButton', () => {
  let props, wrapper

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<HeaderButton { ...props } />)
  })

  it('renders <HeaderButton />', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when prop `enabled` is `false`', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({ enabled: false })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `type` is "next"', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({ title: NEXT_MONTH_TITLE, type: 'next' })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `blockClassName` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({ blockClassName: 'cal' })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `title` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({ title: 'testTitle' })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when prop `arrow` is defined', () => {
    it('renders <HeaderButton />', () => {
      wrapper.setProps({
        arrow: <i className='icon'> Test < /i> })

      expect(wrapper).toMatchSnapshot()
      })
    })
  })

  const getProps = (overrides = {}) => ({
    blockClassName: BLOCK_CLASS_NAME,
    enabled: true,
    onClick: () => { },
    title: PREV_MONTH_TITLE,
    type: 'prev',
    ...overrides
  })
