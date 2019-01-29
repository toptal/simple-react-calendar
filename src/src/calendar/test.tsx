import {shallow} from 'enzyme'
import * as Luxon from 'luxon'
import * as React from 'react'

import Calendar, {CalendarProps} from '.'
import {CalendarSelectionTypeEnum, CalendarTypeEnum, NoticeTypeEnum} from '../types'

const date = Luxon.DateTime.fromJSDate(new Date(2015, 6, 1))

describe('<Calendar />', () => {
  let wrapper, props, instance

  beforeEach(() => {
    props = getProps({activeMonth: date})
    wrapper = shallow(<Calendar {...props} />)
    instance = wrapper.instance()
  })

  describe('#componentWillReceiveProps', () => {
    context('when nextProps `activeMonth` is defined', () => {
      context('when nextProps `activeMonth` and prop `activeMonth` is different', () => {
        it('sets state `activeMonth`', () => {
          wrapper.setProps({activeMonth: Luxon.DateTime.fromJSDate(new Date(2015, 9, 1))})

          expect(wrapper.state('activeMonth').toISODate()).toBe(
            Luxon.DateTime.fromJSDate(new Date(2015, 9, 1)).toISODate()
          )
        })
      })
    })

    context('when nextProps `activeMonth` is `undefined`', () => {
      it("doesn't set state", () => {
        wrapper.setProps({disableDaysOfWeek: false})

        expect(wrapper.state('activeMonth').toISODate()).not.toBe(
          Luxon.DateTime.fromJSDate(new Date(2015, 9, 1)).toISODate()
        )
      })
    })
  })

  describe('#getInitialMonth', () => {
    context('when prop `activeMonth` is valid date', () => {
      it('returns `activeMonth`', () => {
        expect(instance.getInitialMonth()).toEqual(date)
      })
    })

    context('when prop `activeMonth` is invalid date', () => {
      it('returns `activeMonth`', () => {
        wrapper.setState({
          activeMonth: Luxon.DateTime.fromISO('2017-02-31'),
          selected: 'abc',
          today: date,
        })

        expect(instance.getInitialMonth()).toEqual(date)
      })
    })
  })

  describe('#getActiveMonth', () => {
    context('when prop `onMonthChange` is defined', () => {
      it('returns prop `activeMonth`', () => {
        expect(instance.getActiveMonth()).toBe(date)
      })
    })

    context('when prop `onMonthChange` is `undefined`', () => {
      it('returns state `activeMonth`', () => {
        wrapper.setState({activeMonth: Luxon.DateTime.fromISO('2015-01-01')})

        expect(instance.getActiveMonth()).toEqual(Luxon.DateTime.fromISO('2015-01-01'))
      })
    })
  })

  describe('#getHighlightedDate', () => {
    context('when prop `highlighted` is `undefined`', () => {
      it('returns object', () => {
        expect(instance.getHighlightedDate()).toEqual({start: null, end: null})
      })
    })

    context('when prop `highlighted` is defined', () => {
      it('returns object', () => {
        props = {
          highlighted: {
            start: date,
            end: Luxon.DateTime.fromISO('2015-01-01'),
          },
        }
        wrapper.setProps(props)

        expect(instance.getHighlightedDate()).toEqual(props.highlighted)
      })

      context('when prop `highlighted.start` is invalid date', () => {
        it('returns object', () => {
          props = {
            highlighted: {
              start: 'abc',
              end: Luxon.DateTime.fromISO('2015-01-01'),
            },
          }
          wrapper.setProps(props)

          expect(instance.getHighlightedDate()).toEqual({start: null, end: null})
        })
      })

      context('when prop `highlighted.end` is invalid date', () => {
        it('returns object', () => {
          props = {
            highlighted: {
              start: date,
              end: 'abc',
            },
          }
          wrapper.setProps(props)

          expect(instance.getHighlightedDate()).toEqual({start: null, end: null})
        })
      })
    })
  })

  describe('#getSelection', () => {
    context('when #getDateSelectionDateStart and #getDateSelectionDateEnd returns valid date', () => {
      it('returns object', () => {
        const start = date
        const end = date.plus({day: 5})
        instance.getDateSelectionDateStart = () => start
        instance.getDateSelectionDateEnd = () => end

        expect(instance.getSelection()).toEqual({start, end})
      })
    })

    context('when #getDateSelectionDateStart and #getDateSelectionDateEnd returns invalid date', () => {
      it('returns object', () => {
        instance.getDateSelectionDateStart = () => date
        instance.getDateSelectionDateEnd = () => 'abc'

        expect(instance.getSelection()).toEqual({start: null, end: null})
      })
    })
  })

  describe('#getDateSelectionDate', () => {
    context("when prop `mode` is 'single'", () => {
      it('returns prop `selected', () => {
        props = {selected: date, mode: CalendarTypeEnum.single}
        wrapper.setProps(props)

        expect(instance.getDateSelectionDate(CalendarSelectionTypeEnum.end)).toBe(props.selected)
      })
    })

    context("when prop `mode` is 'range'", () => {
      const selected = {start: date, end: Luxon.DateTime.fromJSDate(new Date(2015, 7, 1))}
      const selection = {
        start: Luxon.DateTime.fromJSDate(new Date(2017, 6, 1)),
        end: Luxon.DateTime.fromJSDate(new Date(2017, 7, 1)),
      }

      context('when prop `onSelectionProgress` is `undefined`', () => {
        beforeEach(() => {
          props = {selected, mode: CalendarTypeEnum.range}
          wrapper.setProps(props)
        })

        context('when state `selection` is `defined`', () => {
          it('returns state `selection.start`', () => {
            wrapper.setState({selection})

            expect(instance.getDateSelectionDate(CalendarSelectionTypeEnum.start)).toBe(selection.start)
          })
        })

        context('when state `selection` is `undefined`', () => {
          it('returns prop `selected.start`', () => {
            expect(instance.getDateSelectionDate(CalendarSelectionTypeEnum.start)).toBe(props.selected.start)
          })
        })
      })

      context('when prop `onSelectionProgress` is defined', () => {
        it('returns prop `selected.start`', () => {
          props = {selected, mode: 'range', onSelectionProgress: true}
          wrapper.setProps(props)
          wrapper.setState({selection})

          expect(instance.getDateSelectionDate(CalendarSelectionTypeEnum.start)).toBe(props.selected.start)
        })
      })
    })
  })

  describe('#handleOnMonthChange', () => {
    const monthDate = Luxon.DateTime.fromISO('2017-01-01')

    context('when prop `onMonthChange` is defined', () => {
      it('calls prop #onMonthChange', () => {
        const onMonthChange = jest.fn()
        wrapper.setProps({onMonthChange})

        instance.handleOnMonthChange(monthDate)

        expect(onMonthChange).toHaveBeenCalledTimes(1)
        expect(onMonthChange).toHaveBeenCalledWith(monthDate)
      })
    })

    context('when prop `onMonthChange` is `undefined`', () => {
      it('sets `activeMonth` state', () => {
        instance.handleOnMonthChange(monthDate)

        expect(wrapper.state('activeMonth')).toBe(monthDate)
      })
    })
  })

  describe('#handleOnChange', () => {
    const selection = {start: date, end: Luxon.DateTime.fromJSDate(new Date(2015, 7, 1))}

    context("when prop `mode` is 'single'", () => {
      context('when prop `onSelect` is defined', () => {
        context('when selection `start` is defined', () => {
          it('calls prop #onSelect', () => {
            const onSelect = jest.fn()
            wrapper.setProps({onSelect, mode: CalendarTypeEnum.single})
            instance.handleOnChange(selection)

            expect(onSelect).toHaveBeenCalledTimes(1)
            expect(onSelect).toHaveBeenCalledWith(selection.start)
          })
        })
      })
    })

    context("when prop `mode` is 'range'", () => {
      context('when prop `onSelect` is defined', () => {
        it('calls prop #onSelect', () => {
          const onSelect = jest.fn()
          wrapper.setProps({onSelect, mode: CalendarTypeEnum.range})
          instance.handleOnChange(selection)

          expect(onSelect).toHaveBeenCalledTimes(1)
          expect(onSelect).toHaveBeenCalledWith(selection)
        })
      })

      context('when prop `onSelectionProgress` is defined', () => {
        it('calls prop #onSelectionProgress', () => {
          props = {mode: CalendarTypeEnum.range, onSelectionProgress: jest.fn()}
          wrapper.setProps(props)

          instance.handleOnChange(Object.assign(selection, {inProgress: true}))

          expect(props.onSelectionProgress).toHaveBeenCalledTimes(1)
          expect(props.onSelectionProgress).toHaveBeenCalledWith(Object.assign(selection, {inProgress: true}))
        })
      })

      context('when prop `onSelectionProgress` is `undefined`', () => {
        beforeEach(() => {
          props = {mode: 'range'}
          wrapper.setProps(props)
        })

        context('when selection `inProgress` is `true`', () => {
          it('sets state `selection`', () => {
            instance.handleOnChange(Object.assign(selection, {inProgress: true}))

            expect(wrapper.state('selection')).toEqual({
              start: date,
              end: Luxon.DateTime.fromJSDate(new Date(2015, 7, 1)),
            })
          })
        })

        context('when selection `inProgress` is `false`', () => {
          it('sets state `selection`', () => {
            instance.handleOnChange(Object.assign(selection, {inProgress: false}))

            expect(wrapper.state('selection')).toBe(null)
          })
        })
      })
    })
  })

  describe('#handleOnNoticeChange', () => {
    it('sets state', () => {
      expect(wrapper.state('shownNoticeType')).toBe(undefined)

      instance.handleOnNoticeChange(NoticeTypeEnum.disabled)

      expect(wrapper.state('shownNoticeType')).toBe(NoticeTypeEnum.disabled)
    })
  })

  describe('#render', () => {
    it('renders <Calendar />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<CalendarProps> = {}): CalendarProps => ({
  ...overrides,
})
