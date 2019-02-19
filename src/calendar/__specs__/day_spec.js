import {shallow} from 'enzyme'
import React from 'react'

import Day from '../day'

describe('Day', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Day {...props} />)
  })

  describe('#render', () => {
    it('renders <Day />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('attaches the proper functions', () => {
      const button = wrapper.find('button')

      expect(button.prop('onClick')).toEqual(props.handleOnClick)
      expect(button.prop('onMouseEnter')).toEqual(props.handleOnEnter)
    })

    context('class variations', () => {
      context('when prop `isCurrentMonth` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isCurrentMonth: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isDisabled` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isDisabled: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isHighlighted` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isHighlighted: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isMonthNext` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isMonthNext: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isMonthPrev` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isMonthPrev: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isNonSelectable` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isNonSelectable: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isSelectable` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isSelectable: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isSelected` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isSelected: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isSelectionEnd` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isSelectionEnd: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isSelectionStart` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isSelectionStart: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isToday` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isToday: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isWeekend` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isWeekend: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `isWorkday` is `true`', () => {
        it('renders <Day />', () => {
          wrapper.setProps({
            isWorkday: true,
          })

          expect(wrapper).toMatchSnapshot()
        })
      })
    })
  })
})

const getProps = (overrides = {}) => ({
  blockClassName: 'example-block-class',
  date: '2015-05-05',
  handleOnClick: jest.fn(),
  handleOnEnter: jest.fn(),
  isCurrentMonth: false,
  isDisabled: false,
  isHighlighted: false,
  isMonthNext: false,
  isMonthPrev: false,
  isNonSelectable: false,
  isSelectable: false,
  isSelected: false,
  isSelectionEnd: false,
  isSelectionStart: false,
  isToday: false,
  isWeekend: false,
  isWorkday: false,
  ...overrides,
})
