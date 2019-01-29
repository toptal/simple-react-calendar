import {shallow} from 'enzyme'
import * as Luxon from 'luxon'
import React from 'react'

import DaysOfWeek, {DaysOfWeekProps} from '.'

describe('DaysOfWeek', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<DaysOfWeek {...props} />)
  })

  describe('#render', () => {
    it('renders <DaysOfWeek />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<DaysOfWeekProps> = {}): DaysOfWeekProps => ({
  blockClassName: 'simple-react-calendar',
  daysOfWeek: Luxon.Info.weekdays('short'),
  ...overrides,
})
