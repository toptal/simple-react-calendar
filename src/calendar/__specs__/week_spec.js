import React from 'react'

import ReactTestRenderer from 'react-test-renderer'
import Week from '../week'

import {shallow} from 'enzyme'

describe.only('Week', () => {
  let props, tree
  const defaultProps = {
    date: new Date(2015, 7, 17),
    today: new Date(2015, 7, 17),
    activeMonth: new Date(2015, 7, 17),
    weekStartsOn: 1,
    onDayClick: () => {},
    onDayMouseMove: () => {},
    onDisabledDayClick: () => {},
  }

  describe('#render', () => {
    it('renders <Week />', () => {
      tree = ReactTestRenderer.create(<Week {...defaultProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    context('when prop `date` is different month', () => {
      it('renders <Week />', () => {
        tree = ReactTestRenderer.create(
          <Week {...Object.assign(defaultProps, {date: new Date(2015, 5, 29)})} />
        ).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `date` falls in prop `activeMonth`', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `date` falls in the previous month', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 6, 27),
          activeMonth: new Date(2015, 7, 1),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `highlightedStart` and `highlightedEnd` are defined', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          today: new Date(2015, 5, 31),
          activeMonth: new Date(2015, 5, 1),
          highlightedStart: new Date(2015, 5, 29),
          highlightedEnd: new Date(2015, 6, 1),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          selectedMin: new Date(2015, 5, 30),
          selectedMax: new Date(2015, 6, 2),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })

      context('when prop `selectedMin` and `selectedMax` are the same day', () => {
        it('renders <Week />', () => {
          props = Object.assign(defaultProps, {
            date: new Date(2015, 5, 29, 21, 0),
            activeMonth: new Date(2015, 5, 1),
            selectedMin: new Date(2015, 5, 30),
            selectedMax: new Date(2015, 5, 30),
          })
          tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })
    })

    context('when prop `minDate` is defined', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `maxDate` is defined', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          maxDate: new Date(2015, 5, 30),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `selectedMin` and `selectedMax` are defined', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
          maxDate: new Date(2015, 6, 1),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `blockClassName` is defined', () => {
      it('renders el with prefixed class name', () => {
        props = Object.assign(defaultProps, {blockClassName: 'cal'})
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `disabledIntervals` is defined', () => {
      const disabledIntervals = [
        {
          start: new Date(2015, 7, 21),
          end: new Date(2015, 7, 23),
        },
      ]
      props = Object.assign(defaultProps, {disabledIntervals})

      it('renders <Week />', () => {
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `dateDisabled`', () => {
      it('renders <Week />', () => {
        props = Object.assign(defaultProps, {
          date: new Date(2015, 5, 29),
          activeMonth: new Date(2015, 5, 1),
          minDate: new Date(2015, 5, 30),
          maxDate: new Date(2015, 6, 1),
        })
        tree = ReactTestRenderer.create(<Week {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })
  })
})
