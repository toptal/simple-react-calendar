import React from 'react'

import DaysOfWeek from '../days_of_week'

import ReactTestRenderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('DaysOfWeek', () => {
  let wrapper, tree

  describe('#_getDaysOfWeek', () => {
    it('return days of week', () => {
      wrapper = shallow(<DaysOfWeek weekStartsOn={2} />)

      const daysOfWeek = wrapper.instance()._getDaysOfWeek(3)

      expect(daysOfWeek).toEqual(['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'])
    })
  })

  describe('#render', () => {
    it('renders <DaysOfWeek />', () => {
      tree = ReactTestRenderer.create(<DaysOfWeek weekStartsOn={2} blockClassName="test-class" />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
