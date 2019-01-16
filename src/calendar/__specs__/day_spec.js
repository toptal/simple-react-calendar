import React from 'react'

import ReactTestRenderer from 'react-test-renderer'
import Day from '../day'

import {shallow} from 'enzyme'

describe('Day', () => {
  let defaultProps, event, tree, props, wrapper

  beforeEach(() => {
    event = {preventDefault: jest.fn()}
    defaultProps = {
      date: new Date(2015, 7, 17),
      today: new Date(2015, 7, 17),
      activeMonth: new Date(2015, 7, 17),
      onClick: () => {},
      onMouseMove: () => {},
    }
  })

  describe('#_onClick', () => {
    context('when prop `onClick` is defined', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {onClick: jest.fn()})
        wrapper = shallow(<Day {...props} />)

        wrapper.instance()._onClick(event)

        expect(event.preventDefault).toHaveBeenCalledTimes(1)
        expect(props.onClick).toHaveBeenCalledWith(props.date)
      })
    })

    context('when prop `onClick` is undefined', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {onClick: undefined})
        wrapper = shallow(<Day {...props} />)

        wrapper.instance()._onClick(event)

        expect(event.preventDefault).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('#_onMouseMove', () => {
    context('when prop `onMouseMove` is defined', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {onMouseMove: jest.fn()})
        wrapper = shallow(<Day {...props} />)

        wrapper.instance()._onMouseMove(event)

        expect(event.preventDefault).toHaveBeenCalledTimes(1)
        expect(props.onMouseMove).toHaveBeenCalledWith(props.date)
      })
    })

    context('when prop `onMouseMove` is undefined', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {onMouseMove: undefined})
        wrapper = shallow(<Day {...props} />)

        wrapper.instance()._onMouseMove(event)

        expect(event.preventDefault).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('#render', () => {
    it('renders <Day />', () => {
      tree = ReactTestRenderer.create(<Day {...defaultProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    context('when prop `today` is different from prop `date`', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {date: new Date(2015, 8, 2)})
        tree = ReactTestRenderer.create(<Day {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `blockClassName` is defined', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {blockClassName: 'cal'})
        tree = ReactTestRenderer.create(<Day {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `timeZone` is passed', () => {
      it('renders <Day />', () => {
        props = Object.assign(defaultProps, {timeZone: 'Etc/GMT+12'})
        tree = ReactTestRenderer.create(<Day {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })
  })
})
