import {shallow} from 'enzyme'
import React from 'react'

import {NEXT_MONTH_TITLE, PREV_MONTH_TITLE} from '../consts'
import MonthHeader from '../month_header'

describe('MonthHeader', () => {
  let props, wrapper, instance

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<MonthHeader {...props} />)
    instance = wrapper.instance()
  })

  describe('#_switchMonth', () => {
    it('calls #onMonthChange', () => {
      wrapper.setProps({maxDate: new Date(2015, 7, 1)})
      instance._switchMonth(1)

      expect(props.onMonthChange).toHaveBeenCalledTimes(1)
      expect(props.onMonthChange).toBeCalledWith(new Date(2015, 8, 17))
    })
  })

  describe('#render', () => {
    it('renders <MonthHeader />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    context('when prop `minDate` is after prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        wrapper.setProps({minDate: new Date(2015, 8, 17)})

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `maxDate` is before prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        wrapper.setProps({maxDate: new Date(2015, 6, 17)})

        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})

const getProps = (overrides = {}) => ({
  blockClassName: 'example-class',
  activeMonth: new Date(2015, 7, 17),
  onMonthChange: jest.fn(),
  headerPrevTitle: PREV_MONTH_TITLE,
  headerNextTitle: NEXT_MONTH_TITLE,
  ...overrides,
})
