import {shallow} from 'enzyme'
import * as React from 'react'

import Notice, {SimpleReactCalendarNoticeProps} from '.'
import {NoticeTypeEnum} from '../types'

describe('<Notice />', () => {
  let props, wrapper

  context('when prop `type` is "overlap"', () => {
    it('renders <Notice />', () => {
      props = getProps()
      wrapper = shallow(<Notice {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  context('when prop `type` is "disabled"', () => {
    it('renders <Notice />', () => {
      props = getProps({type: NoticeTypeEnum.disabled})
      wrapper = shallow(<Notice {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<SimpleReactCalendarNoticeProps> = {}): SimpleReactCalendarNoticeProps => ({
  blockClassName: 'example-class-name',
  type: NoticeTypeEnum.overlap,
  ...overrides,
})
