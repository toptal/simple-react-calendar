import {shallow} from 'enzyme'
import {DateTime, Info} from 'luxon'
import * as React from 'react'

import Month, {MonthProps} from '.'
import {CalendarTypeEnum, NoticeTypeEnum} from '../types'

const currentTime = DateTime.local()
const mockDate = DateTime.fromISO('2017-01-01')

describe('Month', () => {
  let wrapper, instance, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Month {...props} />)
    instance = wrapper.instance()
  })

  describe('#pushUpdate', () => {
    context('when `_selectionStart` is before `_selectionEnd`', () => {
      it('calls prop #onChange', () => {
        const startDate = DateTime.fromISO('2015-06-10')
        const endDate = DateTime.fromISO('2015-06-15')
        instance.selectionStart = startDate
        instance.selectionEnd = endDate
        instance.pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: startDate,
          end: endDate,
          inProgress: false,
        })
      })
    })

    context('when `_selectionEnd` is before `_selectionStart`', () => {
      it('calls prop #onChange', () => {
        const endDate = DateTime.fromISO('2015-06-10')
        const startDate = DateTime.fromISO('2015-06-15')
        instance.selectionStart = startDate
        instance.selectionEnd = endDate
        instance.pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: endDate,
          end: startDate,
          inProgress: false,
        })
      })
    })

    context('when prop `rangeLimit` is smaller than the difference', () => {
      it('calls prop #onChange', () => {
        const startDate = DateTime.fromISO('2015-06-10')
        const endDate = DateTime.fromISO('2015-06-15')
        wrapper.setProps({rangeLimit: 5})
        instance.selectionStart = startDate
        instance.selectionEnd = endDate
        instance.pushUpdate()

        expect(props.onChange).toHaveBeenCalledTimes(1)
        expect(props.onChange).toHaveBeenCalledWith({
          start: startDate,
          end: endDate,
          inProgress: false,
        })
      })
    })
  })

  describe('#pushNoticeUpdate', () => {
    it('calls prop #onNoticeChange', () => {
      instance.pushNoticeUpdate(NoticeTypeEnum.disabled)

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)
      expect(props.onNoticeChange).toHaveBeenCalledWith(NoticeTypeEnum.disabled)
    })
  })

  describe('#isDisabledWithin', () => {
    context('when prop `disabledIntervals` is `undefined`', () => {
      it('returns `true`', () => {
        expect(
          instance.isDisabledWithin({start: DateTime.fromISO('2015-06-10'), end: DateTime.fromISO('2015-06-15')})
        ).toBe(true)
      })
    })

    context('when prop `disabledIntervals` is defined', () => {
      context('when argument `interval` is not overlapping', () => {
        it('returns `true`', () => {
          const range = {start: DateTime.fromISO('2015-01-01'), end: DateTime.fromISO('2015-06-31')}
          wrapper.setProps({
            disabledIntervals: [range],
          })

          expect(instance.isDisabledWithin(range)).toBe(true)
        })
      })

      context('when argument `interval` is overlapping', () => {
        it('returns `true`', () => {
          const range = {start: DateTime.fromISO('2015-01-01'), end: DateTime.fromISO('2015-06-31')}
          wrapper.setProps({
            disabledIntervals: [range],
          })

          expect(instance.isDisabledWithin(range)).toBe(true)
        })
      })
    })
  })

  describe('#handleOnDayClick', () => {
    beforeEach(() => {
      instance.pushNoticeUpdate = jest.fn()
      instance.pushUpdate = jest.fn()
    })

    context('when `prop` mode is `range`', () => {
      context('when `selectionInProgress` is `true`', () => {
        beforeEach(() => {
          instance.selectionInProgress = true
          instance.selectionStart = currentTime.minus({days: 5})
        })

        context('when #isDisabledWithin is `true`', () => {
          it('sets instance states', () => {
            instance.isDisabledWithin = () => true
            instance.handleOnDayClick(currentTime)

            expect(instance.selectionInProgress).toBe(false)
            expect(instance.selectionStart).toEqual(currentTime.minus({days: 5}))
            expect(instance.selectionEnd).toEqual(currentTime)
          })
        })

        context('when #isDisabledWithin is `false`', () => {
          it('sets instance states', () => {
            instance.isDisabledWithin = () => false
            instance.handleOnDayClick(currentTime)

            expect(instance.selectionInProgress).toBe(false)
            expect(instance.selectionStart).toBe(null)
            expect(instance.selectionEnd).toBe(null)
          })
        })
      })

      context('when `selectionInProgress` is `false`', () => {
        it('sets instance states', () => {
          instance.selectionInProgress = false

          instance.handleOnDayClick(currentTime)

          expect(instance.selectionInProgress).toBe(true)
          expect(instance.selectionStart).toEqual(currentTime)
          expect(instance.selectionEnd).toEqual(currentTime)
        })
      })
    })

    context('when `prop` mode is `single`', () => {
      beforeEach(() => {
        instance.pushUpdate = jest.fn()
        instance.pushNoticeUpdate = jest.fn()
        wrapper.setProps({mode: CalendarTypeEnum.single})
        instance.handleOnDayClick(currentTime)
      })

      it('sets state properly', () => {
        expect(instance.selectionInProgress).toBe(false)
        expect(instance.selectionStart).toEqual(currentTime)
        expect(instance.selectionEnd).toEqual(currentTime)
      })

      it('calls #pushUpdate', () => {
        expect(instance.pushUpdate).toHaveBeenCalledTimes(1)
      })

      it('calls #pushNoticeUpdate', () => {
        expect(instance.pushNoticeUpdate).toHaveBeenCalledTimes(1)
        expect(instance.pushNoticeUpdate).toHaveBeenCalledWith(undefined)
      })
    })
  })

  describe('#onDisabledDayClick', () => {
    it('calls prop #onNoticeChange', () => {
      wrapper.instance().handleOnDisabledDayClick()

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1)
      expect(props.onNoticeChange).toHaveBeenCalledWith(NoticeTypeEnum.disabled)
    })
  })

  describe('#getMinDate', () => {
    context('when `minDate` is `undefined`', () => {
      it('returns `calcStartDate`', () => {
        props = getProps({rangeLimit: 5})
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance.selectionStart = mockDate

        expect(instance.getMinDate()).toMatchObject(mockDate.minus({days: 5}))
      })
    })

    context('when `minDate` is defined', () => {
      context('when `minDate` is before `calcStartDate`', () => {
        it('returns `calcStartDate`', () => {
          props = getProps({rangeLimit: 5, minDate: DateTime.fromISO('2016-12-12')})
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance.selectionStart = mockDate

          expect(instance.getMinDate()).toMatchObject(mockDate.minus({days: 5}))
        })
      })

      context('when `minDate` is after `calcStartDate`', () => {
        it('returns `minDate`', () => {
          props = getProps({rangeLimit: 5, minDate: DateTime.fromISO('2017-01-15')})
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance.selectionStart = mockDate

          expect(instance.getMinDate()).toMatchObject(DateTime.fromISO('2017-01-15'))
        })
      })
    })
  })

  describe('#getMaxDate', () => {
    context('when `maxDate` is `undefined`', () => {
      it('returns `calcEndDate`', () => {
        props = getProps({rangeLimit: 5})
        wrapper = shallow(<Month {...props} />)
        instance = wrapper.instance()
        instance.selectionStart = mockDate

        expect(instance.getMaxDate()).toMatchObject(mockDate.plus({days: 5}))
      })
    })

    context('when `maxDate` is defined', () => {
      context('when `maxDate` is before `calcEndDate`', () => {
        it('returns `maxDate`', () => {
          props = getProps({rangeLimit: 5, maxDate: DateTime.fromISO('2017-01-03')})
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance.selectionStart = mockDate

          expect(instance.getMaxDate()).toMatchObject(DateTime.fromISO('2017-01-03'))
        })
      })

      context('when `maxDate` is after `calcEndDate`', () => {
        it('returns `calcEndDate`', () => {
          props = getProps({rangeLimit: 5, maxDate: DateTime.fromISO('2017-01-15')})
          wrapper = shallow(<Month {...props} />)
          instance = wrapper.instance()
          instance.selectionStart = mockDate

          expect(instance.getMaxDate()).toMatchObject(mockDate.plus({days: 5}))
        })
      })
    })
  })

  describe('#render', () => {
    it('renders <Month />', () => {
      expect(wrapper).toMatchSnapshot()
    })

    context('when prop `month` has 4 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({activeMonth: DateTime.fromISO('2010-02-01')})
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `month` has 5 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({activeMonth: DateTime.fromISO('2015-06-01')})
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `month` has 6 weeks', () => {
      it('renders <Month />', () => {
        props = getProps({activeMonth: DateTime.fromISO('2015-08-01')})
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `minNumberOfWeeks` is defined', () => {
      context('when prop `activeMonth` has less weeks than defined', () => {
        it('renders <Month />', () => {
          props = getProps({activeMonth: DateTime.fromISO('2010-02-01'), minNumberOfWeeks: 5})
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `activeMonth` has the same number of weeks as defined', () => {
        it('renders <Month />', () => {
          props = getProps({activeMonth: DateTime.fromISO('2015-06-01'), minNumberOfWeeks: 5})
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `activeMonth` has more weeks than as defined', () => {
        it('renders <Month />', () => {
          props = getProps({activeMonth: DateTime.fromISO('2015-08-01'), minNumberOfWeeks: 5})
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })
    })

    context('when prop `disableDaysOfWeek` is defined', () => {
      it('renders <Month />', () => {
        props = getProps({disableDaysOfWeek: true})
        wrapper = shallow(<Month {...props} />)

        expect(wrapper).toMatchSnapshot()
      })
    })

    context('when prop `minDate` and `maxDate` are defined', () => {
      context("when prop `rangeLimit` doesn't exceed `minDate` and `maxDate`", () => {
        it('renders <Month />', () => {
          props = getProps({
            minDate: currentTime.minus({days: 5}),
            maxDate: currentTime.plus({days: 15}),
            rangeLimit: 10,
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })

      context('when prop `rangeLimit` exceed `minDate` and `maxDate`', () => {
        it('renders <Month />', () => {
          props = getProps({
            minDate: currentTime.minus({days: 21}),
            maxDate: currentTime.minus({days: 5}),
            rangeLimit: 10,
          })
          wrapper = shallow(<Month {...props} />)

          expect(wrapper).toMatchSnapshot()
        })
      })
    })
  })
})

const getProps = (overrides: Partial<MonthProps> = {}): MonthProps => ({
  blockClassName: 'simple-react-calendar',
  activeMonth: currentTime.startOf('month'),
  today: currentTime,
  daysOfWeek: Info.weekdays('short'),
  mode: CalendarTypeEnum.range,
  onChange: jest.fn(),
  onNoticeChange: jest.fn(),
  ...overrides,
})
