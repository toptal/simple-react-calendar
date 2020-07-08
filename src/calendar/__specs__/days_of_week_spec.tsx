import { shallow } from 'enzyme'
import React, { ComponentProps } from 'react'

import { BLOCK_CLASS_NAME, DAYS_OF_WEEK } from '../consts'
import DayOfWeek from '../../RenderPropsComponents/DayOfWeek'
import DaysOfWeek from '../days_of_week'

describe('DaysOfWeek', () => {
  let props, wrapper

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<DaysOfWeek {...props} />)
  })

  describe('#_getDaysOfWeek', () => {
    it('return days of week', () => {
      // TODO: extract to a shared helper
      // @ts-ignore
      expect(
        DaysOfWeek.getDaysOfWeek({ dayIndex: 3, daysOfWeek: DAYS_OF_WEEK })
      ).toEqual(['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'])
    })
  })

  describe('#render', () => {
    it('renders <DaysOfWeek />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides = {}) => ({
  blockClassName: BLOCK_CLASS_NAME,
  daysOfWeek: DAYS_OF_WEEK,
  renderDayOfWeek: (props: ComponentProps<typeof DayOfWeek>) => (
    <DayOfWeek {...props} />
  ),
  weekStartsOn: 1,
  ...overrides
})
