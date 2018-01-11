import React from 'react'

import ReactTestRenderer from 'react-test-renderer'
import Month from '../month'
import addDays from 'date-fns/add_days'
import subDays from 'date-fns/sub_days'

import {shallow} from 'enzyme'

describe('Month', () => {
  let wrapper, instance, props

  const date = '2017-01-01'
  const defaultProps = {
    today: new Date(2015, 7, 17),
    activeMonth: new Date(2015, 7, 17),
    mode: 'range',
    weekStartsOn: 1,
    onChange: () => {},
    onNoticeChange: () => {},
  }

  describe('#_pushUpdate', () => {
    beforeEach(() => {
      props = Object.assign(defaultProps, {onChange: jest.fn()})
      wrapper = shallow(<Month {...props} />)
      instance = wrapper.instance()
    })

    context('when `_selectionStart` is before `_selectionEnd`', () => {
      it('calls prop #onChange', () => {
        instance._selectionStart = '2015-06-10'
        instance._selectionEnd = '2015-06-15'
        wrapper.instance()._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: '2015-06-10',
          end: '2015-06-15',
        })
      })
    })

    context('when `_selectionEnd` is before `_selectionStart`', () => {
      it('calls prop #onChange', () => {
        instance._selectionStart = '2015-06-15'
        instance._selectionEnd = '2015-06-10'
        wrapper.instance()._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: '2015-06-10',
          end: '2015-06-15',
        })
      })
    })

    context('when prop `rangeLimit` is smaller than the difference', () => {
      it('calls prop #onChange', () => {
        props = Object.assign(defaultProps, {rangeLimit: 5, onChange: jest.fn()})
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance._selectionStart = '2015-06-10'
        instance._selectionEnd = '2015-06-25'
        wrapper.instance()._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: '2015-06-10',
          end: addDays('2015-06-10', 5),
        })
      })
    })
  })

  describe('#_pushNoticeUpdate', () => {
    it('calls prop #onNoticeChange', () => {
      props = Object.assign(defaultProps, {onNoticeChange: jest.fn()})
      wrapper = shallow(<Month {...props} />)

      wrapper.instance()._pushNoticeUpdate('test')

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)
      expect(props.onNoticeChange).toHaveBeenCalledWith('test')
    })
  })

  describe('#_getDisabledRange', () => {
    context('when prop `disabledIntervals` is `undefined`', () => {
      it('calls prop #onNoticeChange', () => {
        wrapper = shallow(<Month {...defaultProps} />)
        instance = wrapper.instance()

        expect(instance._getDisabledRange('test')).toBe(true)
      })
    })

    context('when prop `disabledIntervals` is defined', () => {
      it('calls prop #onNoticeChange', () => {
        props = Object.assign(defaultProps, {disabledIntervals: [{start: '2015-01-01', end: '2015-06-31'}]})
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()

        expect(instance._getDisabledRange('test')).toBe(true)
      })

      context('when argument `interval` are overlapping', () => {
        it('calls prop #onNoticeChange', () => {
          const range = {start: '2015-01-01', end: '2015-06-31'}
          props = Object.assign(defaultProps, {disabledIntervals: [range]})
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()

          expect(instance._getDisabledRange(range)).toBe(undefined)
        })
      })
    })
  })

  describe('#_onDayMouseMove', () => {
    context('when prop `onDayHover` is `undefined`', () => {
      context('when #_selectionInProgress is `false`', () => {
        it('returns `undefined`', () => {
          wrapper = shallow(<Month {...defaultProps} />)
          instance = wrapper.instance()
          instance._selectionInProgress = false

          expect(instance._onDayMouseMove(date)).toBe(undefined)
        })
      })

      context('when #_selectionInProgress is `true`', () => {
        context('when #_getDisabledRange is `false`', () => {
          it('returns `undefined`', () => {
            wrapper = shallow(<Month {...defaultProps} />)
            instance = wrapper.instance()
            instance._selectionInProgress = true
            instance._getDisabledRange = () => false

            expect(instance._onDayMouseMove(date)).toBe(undefined)
          })
        })

        context('when #_getDisabledRange is defined', () => {
          context('when argument `date` is equal with `_selectionEnd`', () => {
            it('returns `undefined`', () => {
              wrapper = shallow(<Month {...defaultProps} />)
              instance = wrapper.instance()
              instance._selectionInProgress = true
              instance._getDisabledRange = () => true
              instance._selectionEnd = date

              expect(instance._onDayMouseMove(date)).toBe(undefined)
            })
          })

          context('when argument `date` is not equal with `_selectionEnd`', () => {
            context('when prop `rangeLimit` is `undefined`', () => {
              it('returns `undefined`', () => {
                wrapper = shallow(<Month {...defaultProps} />)
                instance = wrapper.instance()
                instance._selectionInProgress = true
                instance._getDisabledRange = () => true
                instance._selectionEnd = addDays(date, 2)

                expect(instance._onDayMouseMove(date)).toBe(undefined)
              })
            })

            context('when prop `rangeLimit` is defined', () => {
              beforeEach(() => {
                props = Object.assign(defaultProps, {rangeLimit: 5})
                wrapper = shallow(<Month {...props} />)
                instance = wrapper.instance()
                instance._selectionInProgress = true
                instance._getDisabledRange = () => true
                instance._selectionEnd = addDays(date, 2)
              })

              context('when argument `date` is before `dateLimit`', () => {
                it('returns `undefined`', () => {
                  instance._selectionStart = addDays(date, 6)

                  expect(instance._onDayMouseMove(date)).toBe(undefined)
                })
              })

              context('when argument `date` is after `dateLimit`', () => {
                beforeEach(() => {
                  instance._pushUpdate = jest.fn()
                  instance._selectionStart = subDays(date, 3)

                  instance._onDayMouseMove(date)
                })

                it('calls #_pushUpdate', () => {
                  expect(instance._pushUpdate).toHaveBeenCalledTimes(1)
                })

                it('sets `_selectionEnd`', () => {
                  expect(instance._selectionEnd).toEqual(date)
                })
              })
            })
          })
        })
      })
    })

    context('when prop `onDayHover` is defined', () => {
      it('calls prop #onDayHover', () => {
        props = Object.assign(defaultProps, {onDayHover: jest.fn()})
        wrapper = shallow(<Month {...props} />)

        wrapper.instance()._onDayMouseMove(date)

        expect(props.onDayHover).toHaveBeenCalledTimes(1)
        expect(props.onDayHover).toHaveBeenCalledWith(date)
      })
    })
  })

  describe('#_onDayClick', () => {
    beforeEach(() => {
      wrapper = shallow(<Month {...defaultProps} />)
      instance = wrapper.instance()
    })

    context('when prop `mode` is `RANGE_MODE`', () => {
      context('when `_selectionInProgress` is `true`', () => {
        context('when #_getDisabledRange is `true`', () => {
          it('sets instance states', () => {
            instance._pushNoticeUpdate = () => {}
            instance._selectionInProgress = true

            instance._onDayClick(date)

            expect(instance._selectionInProgress).toBe(false)
            expect(instance._selectionStart).toBe(undefined)
            expect(instance._selectionEnd).toBe(date)
          })
        })

        context('when #_getDisabledRange is `false`', () => {
          beforeEach(() => {
            instance._pushNoticeUpdate = () => {}
            instance._selectionInProgress = true
            instance._getDisabledRange = () => false
            instance._onDayClick(date)
            instance._pushUpdate = jest.fn()
            instance._pushNoticeUpdate = jest.fn()
          })

          it('sets instance states', () => {
            expect(instance._selectionInProgress).toBe(false)
            expect(instance._selectionStart).toBe(null)
            expect(instance._selectionEnd).toBe(null)
          })
        })
      })

      context('when `_selectionInProgress` is `false`', () => {
        it('sets instance states', () => {
          instance._pushNoticeUpdate = () => {}
          instance._selectionInProgress = false

          instance._onDayClick(date)

          expect(instance._selectionInProgress).toBe(true)
          expect(instance._selectionStart).toBe(date)
          expect(instance._selectionEnd).toBe(date)
        })
      })
    })

    context('when prop `mode` is `SINGLE_MODE`', () => {
      it('sets instance states', () => {
        props = Object.assign(defaultProps, {mode: 'single'})
        wrapper = shallow(<Month {...props} />)
        const instance = wrapper.instance()
        instance._pushNoticeUpdate = () => {}

        instance._onDayClick(date)

        expect(instance._selectionInProgress).toBe(false)
        expect(instance._selectionStart).toBe(date)
        expect(instance._selectionEnd).toBe(date)
      })
    })

    it('calls #_pushUpdate', () => {
      instance._pushUpdate = jest.fn()
      instance._pushNoticeUpdate = () => {}

      instance._onDayClick('2017-01-01')

      expect(instance._pushUpdate).toHaveBeenCalledTimes(1)
    })

    it('calls #_pushNoticeUpdate', () => {
      instance._pushUpdate = () => {}
      instance._pushNoticeUpdate = jest.fn()

      wrapper.instance()._onDayClick('2017-01-01')

      expect(instance._pushNoticeUpdate).toHaveBeenCalledTimes(1)
      expect(instance._pushNoticeUpdate).toHaveBeenCalledWith(null)
    })
  })

  describe('#_onDisabledDayClick', () => {
    it('calls prop #onNoticeChange', () => {
      props = Object.assign(defaultProps, {onNoticeChange: jest.fn()})
      wrapper = shallow(<Month {...props} />)

      wrapper.instance()._onDisabledDayClick()

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)
      expect(props.onNoticeChange).toHaveBeenCalledWith('disabled_day_click')
    })
  })

  describe('#_getMinDate', () => {
    context('when `minDate` is `undefined`', () => {
      it('returns `calcStartDate`', () => {
        props = Object.assign(defaultProps, {rangeLimit: 5})
        wrapper = shallow(<Month {...defaultProps} />)
        instance = wrapper.instance()
        instance._selectionStart = date

        expect(instance._getMinDate()).toEqual(subDays(date, 5))
      })
    })

    context('when `minDate` is defined', () => {
      context('when `minDate` is before `calcStartDate`', () => {
        it('returns `calcStartDate`', () => {
          props = Object.assign(defaultProps, {rangeLimit: 5, minDate: '2016-12-12'})
          wrapper = shallow(<Month {...defaultProps} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMinDate()).toEqual(subDays(date, 5))
        })
      })

      context('when `minDate` is after `calcStartDate`', () => {
        it('returns `minDate`', () => {
          props = Object.assign(defaultProps, {rangeLimit: 5, minDate: '2017-01-15'})
          wrapper = shallow(<Month {...defaultProps} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMinDate()).toEqual('2017-01-15')
        })
      })
    })
  })

  describe('#_getMaxDate', () => {
    context('when `maxDate` is `undefined`', () => {
      it('returns `calcEndDate`', () => {
        props = Object.assign(defaultProps, {rangeLimit: 5})
        wrapper = shallow(<Month {...defaultProps} />)
        instance = wrapper.instance()
        instance._selectionStart = date

        expect(instance._getMaxDate()).toEqual(addDays(date, 5))
      })
    })

    context('when `maxDate` is defined', () => {
      context('when `maxDate` is before `calcEndDate`', () => {
        it('returns `maxDate`', () => {
          props = Object.assign(defaultProps, {rangeLimit: 5, maxDate: '2017-01-03'})
          wrapper = shallow(<Month {...defaultProps} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMaxDate()).toEqual('2017-01-03')
        })
      })

      context('when `maxDate` is after `calcEndDate`', () => {
        it('returns `calcEndDate`', () => {
          props = Object.assign(defaultProps, {rangeLimit: 5, maxDate: '2017-01-15'})
          wrapper = shallow(<Month {...defaultProps} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMaxDate()).toEqual(addDays(date, 5))
        })
      })
    })
  })

  describe('#render', () => {
    it('renders <Month />', () => {
      const tree = ReactTestRenderer.create(<Month {...defaultProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    context('when `_selectionInProgress` is `true` and prop `rangeLimit` is defined', () => {
      beforeEach(() => {
        wrapper = shallow(<Month {...defaultProps} />)
        instance = wrapper.instance()
        instance._selectionInProgress = true
        instance._getMaxDate = jest.fn()
        instance._getMinDate = jest.fn()
        wrapper.setState({rangeLimit: 5})
      })

      it('calls `_getMaxDate`', () => {
        expect(instance._getMaxDate).toHaveBeenCalledTimes(1)
      })

      it('calls `_getMinDate`', () => {
        expect(instance._getMinDate).toHaveBeenCalledTimes(1)
      })
    })

    context('when prop `disabledIntervals` is `[]`', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {disabledIntervals: []})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `month` has 4 weeks', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {activeMonth: new Date(2010, 1, 15)})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `month` has 5 weeks', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {activeMonth: new Date(2015, 5, 15)})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `month` has 6 weeks', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {activeMonth: new Date(2015, 7, 15)})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `minNumberOfWeeks` is defined', () => {
      context('when prop `activeMonth` has less weeks than defined', () => {
        it('renders <Month />', () => {
          const modProps = Object.assign(defaultProps, {
            activeMonth: new Date(2010, 1, 15),
            minNumberOfWeeks: 5,
          })
          const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })

      context('when prop `activeMonth` has the same number of weeks as defined', () => {
        it('renders <Month />', () => {
          const modProps = Object.assign(defaultProps, {
            activeMonth: new Date(2015, 5, 15),
            minNumberOfWeeks: 5,
          })
          const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })

      context('when prop `activeMonth` has more weeks than as defined', () => {
        it('renders <Month />', () => {
          const modProps = Object.assign(defaultProps, {
            activeMonth: new Date(2015, 7, 15),
            minNumberOfWeeks: 5,
          })
          const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })
    })

    context('when prop `blockClassName` is defined', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {blockClassName: 'cal'})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `disableDaysOfWeek` is defined', () => {
      it('renders <Month />', () => {
        const modProps = Object.assign(defaultProps, {disableDaysOfWeek: true})
        const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })

    context('when prop `minDate` and `maxDate` are defined', () => {
      context("when prop `rangeLimit` doesn't exceed `minDate` and `maxDate`", () => {
        it('renders <Month />', () => {
          const modProps = Object.assign(defaultProps, {
            minDate: new Date(2015, 7, 12),
            maxDate: new Date(2015, 7, 23),
            rangeLimit: 10,
          })
          const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })

      context('when prop `rangeLimit` exceed `minDate` and `maxDate`', () => {
        it('renders <Month />', () => {
          const modProps = Object.assign(defaultProps, {
            minDate: new Date(2015, 7, 1),
            maxDate: new Date(2015, 7, 31),
            rangeLimit: 10,
          })
          const tree = ReactTestRenderer.create(<Month {...modProps} />).toJSON()

          expect(tree).toMatchSnapshot()
        })
      })
    })
  })
})
