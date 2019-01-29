import {shallow} from 'enzyme'
import * as Luxon from 'luxon'
import * as React from 'react'

import Day, {DayProps} from '.'

describe('Day', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Day {...props} />)
  })

  describe('#render', () => {
    it('renders <Day />', () => {
      console.log('>>>', wrapper.debug())

      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<DayProps> = {}): DayProps => ({
  blockClassName: 'simple_calendar',
  className: 'day-class',
  date: Luxon.DateTime.local(),
  isDisabled: true,
  handleOnClick: jest.fn(),
  handleOnDisabledClick: jest.fn(),
  handleOnMouseEnter: jest.fn(),
  ...overrides,
})
