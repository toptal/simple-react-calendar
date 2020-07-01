import { shallow } from 'enzyme'
import React from 'react'

import { NEXT_MONTH_TITLE, PREV_MONTH_TITLE } from '../../calendar/consts'
import MonthHeader from './MonthHeader'

describe('MonthHeader', () => {
  let instance: any, props: any, wrapper: any

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<MonthHeader {...props} />)
    instance = wrapper.instance()
  })

  describe('#_switchMonth', () => {
    it('calls #onMonthChange', () => {
      wrapper.setProps({ maxDate: new Date(2015, 7, 1) })
      instance._switchMonth(1)

      expect(props.onMonthChange).toHaveBeenCalledTimes(1)

      expect(props.onMonthChange).toBeCalledWith(new Date(2015, 8, 17))
    })
  })

  describe('#render', () => {
    it('renders <MonthHeader />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when prop `minDate` is after prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        wrapper.setProps({ minDate: new Date(2015, 8, 17) })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `maxDate` is before prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        wrapper.setProps({ maxDate: new Date(2015, 6, 17) })

        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
const getProps = (overrides = {}) => ({
  activeMonth: new Date(2015, 7, 17),
  blockClassName: 'example-class',
  headerNextTitle: NEXT_MONTH_TITLE,
  headerPrevTitle: PREV_MONTH_TITLE,
  onMonthChange: jest.fn(),
  ...overrides
})
