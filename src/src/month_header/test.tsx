import {shallow} from 'enzyme'
import * as Luxon from 'luxon'
import * as React from 'react'

import MonthHeader, {MonthHeaderProps} from '.'
import {MonthHeaderButtonTypeEnum} from '../types'

const currentTime = Luxon.DateTime.local()

describe('<MonthHeader />', () => {
  let props, wrapper, instance

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<MonthHeader {...props} />)
    instance = wrapper.instance()
  })

  describe('#handleOnSwitchMonth', () => {
    context('when called with `next`', () => {
      it('calls #onMonthChange', () => {
        instance.handleOnSwitchMonth({currentTarget: {value: MonthHeaderButtonTypeEnum.next}})

        expect(props.onMonthChange).toBeCalledWith(currentTime.plus({month: 1}))
      })
    })

    context('when called with `prev`', () => {
      it('calls #onMonthChange', () => {
        instance.handleOnSwitchMonth({currentTarget: {value: MonthHeaderButtonTypeEnum.prev}})

        expect(props.onMonthChange).toBeCalledWith(currentTime.minus({month: 1}))
      })
    })
  })

  describe('#render', () => {
    it('renders <MonthHeader />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    context('when prop `minDate` is after prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        props = getProps({minDate: currentTime.plus({month: 2})})
        wrapper = shallow(<MonthHeader {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `maxDate` is before prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        props = getProps({maxDate: currentTime.minus({month: 2})})
        wrapper = shallow(<MonthHeader {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})

const getProps = (overrides: Partial<MonthHeaderProps> = {}): MonthHeaderProps => ({
  blockClassName: 'example-class-name',
  activeMonth: currentTime,
  onMonthChange: jest.fn(),
  ...overrides,
})
