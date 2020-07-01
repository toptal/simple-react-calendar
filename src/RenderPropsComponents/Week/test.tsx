import { shallow } from 'enzyme'
import React, { ComponentProps } from 'react'

import * as helper from '../../helper'
import Day from '../../RenderPropsComponents/Day'
import Week from './Week'

describe('Week', () => {
  let props, wrapper: any

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Week {...props} />)
  })

  describe('#render', () => {
    it('renders <Week />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when prop `date` is different month', () => {
      it('renders <Week />', () => {
        wrapper.setProps({ date: new Date(2015, 5, 29) })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `date` falls in prop `activeMonth`', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `date` falls in the previous month', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 7, 1),
          date: new Date(2015, 6, 27)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `highlightedStart` and `highlightedEnd` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          highlightedEnd: new Date(2015, 6, 1),
          highlightedStart: new Date(2015, 5, 29),
          today: new Date(2015, 5, 31)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          selectedMax: new Date(2015, 6, 2),
          selectedMin: new Date(2015, 5, 30)
        })

        expect(wrapper).toMatchSnapshot()
      })

      describe('when prop `selectedMin` and `selectedMax` are the same day', () => {
        it('renders <Week />', () => {
          wrapper.setProps({
            activeMonth: new Date(2015, 5, 1),
            date: new Date(2015, 5, 29, 21, 0),
            selectedMax: new Date(2015, 5, 30),
            selectedMin: new Date(2015, 5, 30)
          })

          expect(wrapper).toMatchSnapshot()
        })
      })
    })

    describe('when prop `minDate` is defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          minDate: new Date(2015, 5, 30)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `maxDate` is defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 5, 30)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 6, 1),
          minDate: new Date(2015, 5, 30)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `disabledIntervals` is defined', () => {
      it('renders <Week />', () => {
        const disabledIntervals = [
          {
            end: new Date(2015, 7, 23),
            start: new Date(2015, 7, 21)
          }
        ]

        wrapper.setProps({ disabledIntervals })

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `dateDisabled`', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 6, 1),
          minDate: new Date(2015, 5, 30)
        })

        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})

const getProps = (overrides = {}) => ({
  activeMonth: new Date(2015, 7, 17),
  blockClassName: 'example-class',
  date: new Date(2015, 7, 17),
  getDayFormatted: helper.getDayFormatted,
  getISODate: helper.getISODate,
  onDayClick: jest.fn(),
  onDayMouseEnter: jest.fn(),
  onDisabledDayClick: jest.fn(),
  renderDay: (props: ComponentProps<typeof Day>) => <Day {...props} />,
  today: new Date(2015, 7, 17),
  weekStartsOn: 1,
  ...overrides
})
