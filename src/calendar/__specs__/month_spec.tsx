import { shallow } from 'enzyme'
import React from 'react'
import addDays from 'date-fns/add_days'
import parse from 'date-fns/parse'
import subDays from 'date-fns/sub_days'

import Month from '../month'

const date = '2017-01-01'

describe('Month', () => {
  let instance, mockEvent, props, wrapper

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Month {...props} />)
    instance = wrapper.instance()
    mockEvent = {
      currentTarget: { value: date },
      preventDefault: jest.fn()
    }
  })

  describe('#_pushUpdate', () => {
    describe('when `_selectionStart` is before `_selectionEnd`', () => {
      it('calls prop #onChange', () => {
        instance._selectionStart = '2015-06-10'
        instance._selectionEnd = '2015-06-15'
        instance._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)

        expect(props.onChange).toHaveBeenCalledWith({
          end: '2015-06-15',
          start: '2015-06-10'
        })
      })
    })

    describe('when `_selectionEnd` is before `_selectionStart`', () => {
      it('calls prop #onChange', () => {
        instance._selectionStart = '2015-06-15'
        instance._selectionEnd = '2015-06-10'
        instance._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)

        expect(props.onChange).toHaveBeenCalledWith({
          end: '2015-06-15',
          start: '2015-06-10'
        })
      })
    })

    describe('when prop `rangeLimit` is smaller than the difference', () => {
      it('calls prop #onChange', () => {
        props = getProps({
          onChange: jest.fn(),
          rangeLimit: 5
        })
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance._selectionStart = '2015-06-10'
        instance._selectionEnd = '2015-06-25'
        wrapper.instance()._pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)

        expect(props.onChange).toHaveBeenCalledWith({
          end: addDays('2015-06-10', 5),
          start: '2015-06-10'
        })
      })
    })
  })

  describe('#_pushNoticeUpdate', () => {
    it('calls prop #onNoticeChange', () => {
      instance._pushNoticeUpdate('test')

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)

      expect(props.onNoticeChange).toHaveBeenCalledWith('test')
    })
  })

  describe('#_getDisabledRange', () => {
    describe('when prop `disabledIntervals` is `undefined`', () => {
      it('calls prop #onNoticeChange', () => {
        expect(instance._getDisabledRange('test')).toBe(true)
      })
    })

    describe('when prop `disabledIntervals` is defined', () => {
      it('calls prop #onNoticeChange', () => {
        props = getProps({
          disabledIntervals: [
            {
              end: '2015-06-31',
              start: '2015-01-01'
            }
          ]
        })
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()

        expect(instance._getDisabledRange('test')).toBe(true)
      })

      describe('when argument `interval` are overlapping', () => {
        it('calls prop #onNoticeChange', () => {
          const range = {
            end: '2015-06-31',
            start: '2015-01-01'
          }

          props = getProps({
            disabledIntervals: [range]
          })
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()

          expect(instance._getDisabledRange(range)).toBe(undefined)
        })
      })
    })
  })

  describe('#handleOnDayMouseEnter', () => {
    it('calls #event.preventDefault', () => {
      instance._selectionInProgress = false
      instance.handleOnDayMouseEnter(mockEvent)

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
    })

    describe('when prop `onDayMouseEnter` is `undefined`', () => {
      describe('when #_selectionInProgress is `false`', () => {
        it('returns `undefined`', () => {
          instance._selectionInProgress = false

          expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined)
        })
      })

      describe('when #_selectionInProgress is `true`', () => {
        describe('when #_getDisabledRange is `false`', () => {
          it('returns `undefined`', () => {
            instance._selectionInProgress = true
            instance._getDisabledRange = () => false

            expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined)
          })
        })

        describe('when #_getDisabledRange is defined', () => {
          describe('when argument `date` is equal with `_selectionEnd`', () => {
            it('returns `undefined`', () => {
              instance._selectionInProgress = true
              instance._getDisabledRange = () => true
              instance._selectionEnd = date

              expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined)
            })
          })

          describe('when argument `date` is not equal with `_selectionEnd`', () => {
            describe('when prop `rangeLimit` is `undefined`', () => {
              it('returns `undefined`', () => {
                instance._selectionInProgress = true
                instance._getDisabledRange = () => true
                instance._selectionEnd = addDays(date, 2)

                expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(
                  undefined
                )
              })
            })

            describe('when prop `rangeLimit` is defined', () => {
              beforeEach(() => {
                props = getProps({
                  rangeLimit: 5
                })
                wrapper = shallow(<Month {...props} />)
                instance = wrapper.instance()
                instance._selectionInProgress = true
                instance._getDisabledRange = () => true
                instance._selectionEnd = addDays(date, 2)
              })

              describe('when argument `date` is before `dateLimit`', () => {
                it('returns `undefined`', () => {
                  instance._selectionStart = addDays(date, 6)

                  expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(
                    undefined
                  )
                })
              })

              describe('when argument `date` is after `dateLimit`', () => {
                beforeEach(() => {
                  instance._pushUpdate = jest.fn()
                  instance._selectionStart = subDays(date, 3)
                  instance.handleOnDayMouseEnter(mockEvent)
                })
                it('calls #_pushUpdate', () => {
                  expect(instance._pushUpdate).toHaveBeenCalledTimes(1)
                })
                it('sets `_selectionEnd`', () => {
                  expect(instance._selectionEnd).toEqual(parse(date))
                })
              })
            })
          })
        })
      })
    })

    describe('when prop `onDayMouseEnter` is defined', () => {
      it('calls prop #onDayMouseEnter', () => {
        instance.handleOnDayMouseEnter(mockEvent)

        expect(props.onDayMouseEnter).toHaveBeenCalledTimes(1)

        expect(props.onDayMouseEnter).toHaveBeenCalledWith(parse(date))
      })
    })
  })

  describe('#handleOnDayClick', () => {
    it('calls #event.preventDefault', () => {
      instance.handleOnDayClick(mockEvent)

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
    })

    describe('when prop `mode` is `RANGE_MODE`', () => {
      describe('when `_selectionInProgress` is `true`', () => {
        describe('when #_getDisabledRange is `true`', () => {
          it('sets instance states', () => {
            instance._pushNoticeUpdate = () => {}
            instance._selectionInProgress = true
            instance.handleOnDayClick(mockEvent)

            expect(instance._selectionInProgress).toBe(false)

            expect(instance._selectionStart).toBe(undefined)

            expect(instance._selectionEnd).toEqual(parse(date))
          })
        })

        describe('when #_getDisabledRange is `false`', () => {
          beforeEach(() => {
            instance._pushNoticeUpdate = () => {}
            instance._selectionInProgress = true
            instance._getDisabledRange = () => false
            instance.handleOnDayClick(mockEvent)
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

      describe('when `_selectionInProgress` is `false`', () => {
        it('sets instance states', () => {
          instance._pushNoticeUpdate = () => {}
          instance._selectionInProgress = false
          instance.handleOnDayClick(mockEvent)

          expect(instance._selectionInProgress).toBe(true)

          expect(instance._selectionStart).toEqual(parse(date))

          expect(instance._selectionEnd).toEqual(parse(date))
        })
      })
    })

    describe('when prop `mode` is `SINGLE_MODE`', () => {
      it('sets instance states', () => {
        props = getProps({
          mode: 'single'
        })
        wrapper = shallow(<Month {...props} />)
        const instance = wrapper.instance()

        instance._pushNoticeUpdate = () => {}
        instance.handleOnDayClick(mockEvent)

        expect(instance._selectionInProgress).toBe(false)

        expect(instance._selectionStart).toEqual(parse(date))

        expect(instance._selectionEnd).toEqual(parse(date))
      })
    })
    it('calls #_pushUpdate', () => {
      instance._pushUpdate = jest.fn()
      instance._pushNoticeUpdate = () => {}
      instance.handleOnDayClick(mockEvent)

      expect(instance._pushUpdate).toHaveBeenCalledTimes(1)
    })
    it('calls #_pushNoticeUpdate', () => {
      instance._pushUpdate = () => {}
      instance._pushNoticeUpdate = jest.fn()
      instance.handleOnDayClick(mockEvent)

      expect(instance._pushNoticeUpdate).toHaveBeenCalledTimes(1)

      expect(instance._pushNoticeUpdate).toHaveBeenCalledWith(null)
    })
  })

  describe('#handleOnDisabledDayClick', () => {
    it('calls prop #onNoticeChange', () => {
      instance.handleOnDisabledDayClick(mockEvent)

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)

      expect(props.onNoticeChange).toHaveBeenCalledWith('disabled_day_click')
    })
  })

  describe('#_getMinDate', () => {
    describe('when `minDate` is `undefined`', () => {
      it('returns `calcStartDate`', () => {
        props = getProps({
          rangeLimit: 5
        })
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance._selectionStart = date

        expect(instance._getMinDate()).toEqual(subDays(date, 5))
      })
    })

    describe('when `minDate` is defined', () => {
      describe('when `minDate` is before `calcStartDate`', () => {
        it('returns `calcStartDate`', () => {
          props = getProps({
            minDate: '2016-12-12',
            rangeLimit: 5
          })
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMinDate()).toEqual(subDays(date, 5))
        })
      })

      describe('when `minDate` is after `calcStartDate`', () => {
        it('returns `minDate`', () => {
          props = getProps({
            minDate: '2017-01-15',
            rangeLimit: 5
          })
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMinDate()).toEqual('2017-01-15')
        })
      })
    })
  })

  describe('#_getMaxDate', () => {
    describe('when `maxDate` is `undefined`', () => {
      it('returns `calcEndDate`', () => {
        props = getProps({
          rangeLimit: 5
        })
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance._selectionStart = date

        expect(instance._getMaxDate()).toEqual(addDays(date, 5))
      })
    })

    describe('when `maxDate` is defined', () => {
      describe('when `maxDate` is before `calcEndDate`', () => {
        it('returns `maxDate`', () => {
          props = getProps({
            maxDate: '2017-01-03',
            rangeLimit: 5
          })
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMaxDate()).toEqual('2017-01-03')
        })
      })

      describe('when `maxDate` is after `calcEndDate`', () => {
        it('returns `calcEndDate`', () => {
          props = getProps({
            maxDate: '2017-01-15',
            rangeLimit: 5
          })
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance._selectionStart = date

          expect(instance._getMaxDate()).toEqual(addDays(date, 5))
        })
      })
    })
  })

  describe('#render', () => {
    it('renders <Month />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when `_selectionInProgress` is `true` and prop `rangeLimit` is defined', () => {
      it('renders <Month />', () => {
        wrapper.setState({
          maxDate: new Date(2015, 10, 15),
          minDate: new Date(2015, 5, 15),
          rangeLimit: 5
        })
        instance._selectionStart = new Date(2015, 6, 15)
        instance._selectionInProgress = true

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `disabledIntervals` is `[]`', () => {
      it('renders <Month />', () => {
        props = getProps({
          disabledIntervals: []
        })
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `month` has 4 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({
          activeMonth: new Date(2010, 1, 15)
        })
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `month` has 5 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({
          activeMonth: new Date(2015, 5, 15)
        })
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `month` has 6 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({
          activeMonth: new Date(2015, 7, 15)
        })
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `minNumberOfWeeks` is defined', () => {
      describe('when prop `activeMonth` has less weeks than defined', () => {
        it('renders <Month />', () => {
          props = getProps({
            activeMonth: new Date(2010, 1, 15),
            minNumberOfWeeks: 5
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when prop `activeMonth` has the same number of weeks as defined', () => {
        it('renders <Month />', () => {
          props = getProps({
            activeMonth: new Date(2015, 5, 15),
            minNumberOfWeeks: 5
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when prop `activeMonth` has more weeks than as defined', () => {
        it('renders <Month />', () => {
          props = getProps({
            activeMonth: new Date(2015, 7, 15),
            minNumberOfWeeks: 5
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })
    })

    describe('when prop `disableDaysOfWeek` is defined', () => {
      it('renders <Month />', () => {
        props = getProps({
          disableDaysOfWeek: true
        })
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when prop `minDate` and `maxDate` are defined', () => {
      describe("when prop `rangeLimit` doesn't exceed `minDate` and `maxDate`", () => {
        it('renders <Month />', () => {
          props = getProps({
            maxDate: new Date(2015, 7, 23),
            minDate: new Date(2015, 7, 12),
            rangeLimit: 10
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      describe('when prop `rangeLimit` exceed `minDate` and `maxDate`', () => {
        it('renders <Month />', () => {
          props = getProps({
            maxDate: new Date(2015, 7, 31),
            minDate: new Date(2015, 7, 1),
            rangeLimit: 10
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })
    })
  })
})
const getProps = (overrides = {}) => ({
  activeMonth: new Date(2015, 7, 17),
  blockClassName: 'example-class',
  mode: 'range',
  onChange: jest.fn(),
  onDayMouseEnter: jest.fn(),
  onNoticeChange: jest.fn(),
  today: new Date(2015, 7, 17),
  weekStartsOn: 1,
  ...overrides
})
