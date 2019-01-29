import {shallow} from 'enzyme'
import * as React from 'react'

import MonthHeaderButton, {MonthHeaderButtonProps} from '.'
import {MonthHeaderButtonTypeEnum} from '../types'

describe('HeaderButton', () => {
  let wrapper, props

  context('when prop `blockClassName` is passed', () => {
    it('renders <MonthHeaderButton />', () => {
      props = getProps({blockClassName: 'example-class'})
      wrapper = shallow(<MonthHeaderButton {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  context('when prop `isDisabled` is passed', () => {
    it('renders <MonthHeaderButton />', () => {
      props = getProps({isDisabled: true})
      wrapper = shallow(<MonthHeaderButton {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  context('when prop `title` is passed', () => {
    it('renders <MonthHeaderButton />', () => {
      props = getProps({title: 'Test Title'})
      wrapper = shallow(<MonthHeaderButton {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  context('when prop `type` is `next`', () => {
    it('renders <MonthHeaderButton />', () => {
      props = getProps({type: MonthHeaderButtonTypeEnum.next})
      wrapper = shallow(<MonthHeaderButton {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<MonthHeaderButtonProps> = {}): MonthHeaderButtonProps => ({
  blockClassName: 'test-class',
  type: MonthHeaderButtonTypeEnum.prev,
  onClick: jest.fn(),
  arrow: shallow(<p key="1">Example</p>),
  ...overrides,
})
