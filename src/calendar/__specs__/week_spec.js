import {shallow} from 'enzyme'
import React from 'react'

import Week from '../week'

describe.only('Week', () => {
  let props, wrapper

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Week {...props} />)
  })

  describe('#render', () => {
    it('renders <Week />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    context('when prop `date` is different month', () => {
      it('renders <Week />', () => {
        wrapper.setProps({date: new Date(2015, 5, 29)})

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `date` falls in prop `activeMonth`', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `date` falls in the previous month', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 6, 27),
          activeMonth: new Date(2015, 7, 1),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `highlightedStart` and `highlightedEnd` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          today: new Date(2015, 5, 31),
          activeMonth: new Date(2015, 5, 1),
          highlightedStart: new Date(2015, 5, 29),
          highlightedEnd: new Date(2015, 6, 1),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          selectedMin: new Date(2015, 5, 30),
          selectedMax: new Date(2015, 6, 2),
        })

        expect(wrapper).toMatchSnapshot()
      })

      context('when prop `selectedMin` and `selectedMax` are the same day', () => {
        it('renders <Week />', () => {
          wrapper.setProps({
            date: new Date(2015, 5, 29, 21, 0),
            activeMonth: new Date(2015, 5, 1),
            selectedMin: new Date(2015, 5, 30),
            selectedMax: new Date(2015, 5, 30),
          })

          expect(wrapper).toMatchSnapshot()
        })
      })
    })

    context('when prop `minDate` is defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `maxDate` is defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          maxDate: new Date(2015, 5, 30),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
          maxDate: new Date(2015, 6, 1),
        })

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `disabledIntervals` is defined', () => {
      it('renders <Week />', () => {
        const disabledIntervals = [
          {
            start: new Date(2015, 7, 21),
            end: new Date(2015, 7, 23),
          },
        ]
        wrapper.setProps({disabledIntervals})

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `dateDisabled`', () => {
      it('renders <Week />', () => {
        wrapper.setProps({
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
          maxDate: new Date(2015, 6, 1),
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
  onDayClick: jest.fn(),
  onDayMouseEnter: jest.fn(),
  onDisabledDayClick: jest.fn(),
  today: new Date(2015, 7, 17),
  weekStartsOn: 1,
  ...overrides,
})
