import React from 'react'

import ReactTestRenderer from 'react-test-renderer'
import MonthHeader from '../month_header'

import {shallow} from 'enzyme'

describe('MonthHeader', () => {
  let props, wrapper, tree
  const defaultProps = {
    activeMonth: new Date(2015, 7, 17),
    onMonthChange: () => {},
  }

  describe('#_switchMonth', () => {
    it('calls #onMonthChange', () => {
      props = Object.assign(defaultProps, {
        maxDate: new Date(2015, 7, 1),
        onMonthChange: jest.fn(),
      })
      wrapper = shallow(<MonthHeader {...props} />)
      wrapper.instance()._switchMonth(1)

      expect(props.onMonthChange).toBeCalledWith(new Date(2015, 8, 17))
    })
  })

  describe('#render', () => {
    it('renders <MonthHeader />', () => {
      tree = ReactTestRenderer.create(<MonthHeader {...defaultProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    context('when prop `blockClassName` is defined', () => {
      it('renders <MonthHeader />', () => {
        props = Object.assign(defaultProps, {blockClassName: 'cal'})
        tree = ReactTestRenderer.create(<MonthHeader {...defaultProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `minDate` is after prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        props = Object.assign(defaultProps, {minDate: new Date(2015, 8, 17)})
        tree = ReactTestRenderer.create(<MonthHeader {...defaultProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `maxDate` is before prop `activeMonth`', () => {
      it('renders <MonthHeader />', () => {
        props = Object.assign(defaultProps, {maxDate: new Date(2015, 6, 17)})
        tree = ReactTestRenderer.create(<MonthHeader {...defaultProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })
  })
})
