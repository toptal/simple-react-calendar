import {shallow} from 'enzyme'
import * as Luxon from 'luxon'
import * as React from 'react'

import Week, {WeekProps} from '.'

const currentTime = Luxon.DateTime.local()
const parsedDate = Luxon.DateTime.fromISO('2015-05-05')

describe('<Week />', () => {
  let wrapper, props, instance, mockEvent

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<Week {...props} />)
    instance = wrapper.instance()
    mockEvent = {currentTarget: {value: '2015-05-05'}, preventDefault: jest.fn()}
  })

  describe('isSelectable', () => {
    context('when date is disabled', () => {
      it('returns `false`', () => {
        wrapper.setProps({disabledIntervals: [{start: currentTime.minus({days: 3}), end: currentTime}]})

        expect(instance.isSelectable(currentTime.minus({days: 1}))).toBe(false)
      })
    })

    context('when date is not disabled', () => {
      context('if prop `minDate` is defined', () => {
        beforeEach(() => {
          wrapper.setProps({
            minDate: currentTime.minus({days: 3}),
          })
        })

        context('when `date` is after `minDate`', () => {
          it('returns `true`', () => {
            expect(instance.isSelectable(currentTime.minus({days: 2}))).toBe(true)
          })
        })

        context('when `date` is equal to `minDate`', () => {
          it('returns `true`', () => {
            expect(instance.isSelectable(currentTime.minus({days: 3}))).toBe(true)
          })
        })

        context('when `date` is before to `minDate`', () => {
          it('returns `false`', () => {
            expect(instance.isSelectable(currentTime.minus({days: 4}))).toBe(false)
          })
        })

        context('if prop `maxDate` is defined', () => {
          beforeEach(() => {
            wrapper.setProps({
              maxDate: currentTime,
            })
          })

          context('when `minDate` and `maxDate` includes `date`', () => {
            it('returns `true`', () => {
              expect(instance.isSelectable(currentTime)).toBe(true)
            })
          })

          context('when `minDate` and `maxDate` does not include `date`', () => {
            it('returns `true`', () => {
              expect(instance.isSelectable(currentTime.minus({days: 4}))).toBe(false)
            })
          })
        })
      })

      context('if prop `minDate` is `undefined`', () => {
        it('returns `true`', () => {
          expect(instance.isSelectable(currentTime.minus({days: 4}))).toBe(true)
        })

        context('if prop `maxDate` is defined', () => {
          beforeEach(() => {
            wrapper.setProps({
              maxDate: currentTime.minus({days: 3}),
            })
          })

          context('when `date` is before `maxDate`', () => {
            it('returns `true`', () => {
              expect(instance.isSelectable(currentTime.minus({days: 4}))).toBe(true)
            })
          })

          context('when `date` is equal to `maxDate`', () => {
            it('returns `true`', () => {
              expect(instance.isSelectable(currentTime.minus({days: 3}))).toBe(true)
            })
          })

          context('when `date` is after to `maxDate`', () => {
            it('returns `false`', () => {
              expect(instance.isSelectable(currentTime.minus({days: 2}))).toBe(false)
            })
          })
        })
      })
    })
  })

  describe('isDateSelected', () => {
    it('returns `false`', () => {
      expect(instance.isDateSelected(currentTime)).toBe(false)
    })

    context('when prop `selectedMin` is defined', () => {
      beforeEach(() => {
        wrapper.setProps({selectedMin: currentTime.minus({days: 3})})
      })

      it('returns `false`', () => {
        expect(instance.isDateSelected(currentTime)).toBe(false)
      })

      context('when prop `selectedMax` is defined', () => {
        beforeEach(() => {
          wrapper.setProps({selectedMax: currentTime, selectedMin: currentTime.minus({days: 3})})
        })

        context('when prop `selectedMax` and `selectedMin` includes date', () => {
          it('returns `true`', () => {
            expect(instance.isDateSelected(currentTime)).toBe(true)
          })
        })

        context('when prop `selectedMax` and `selectedMin` does not include date', () => {
          it('returns `false`', () => {
            expect(instance.isDateSelected(currentTime.minus({days: 4}))).toBe(false)
          })
        })
      })
    })
  })

  describe('isDateHighlighted', () => {
    context('when prop `highlightedStart` is `undefined`', () => {
      it('returns `false`', () => {
        wrapper.setProps({highlightedStart: undefined})

        expect(instance.isDateDisabled(currentTime)).toBe(false)
      })
    })

    context('when prop `highlightedEnd` is `undefined`', () => {
      it('returns `false`', () => {
        wrapper.setProps({highlightedEnd: undefined})

        expect(instance.isDateDisabled(currentTime)).toBe(false)
      })
    })

    context('when prop `highlightedStart` and prop `highlightedEnd` defined', () => {
      beforeEach(() => {
        wrapper.setProps({highlightedStart: currentTime.minus({days: 3}), highlightedEnd: currentTime})
      })

      context('when prop `disabledIntervals` including the date', () => {
        it('returns `true`', () => {
          expect(instance.isDateHighlighted(currentTime.minus({days: 1}))).toBe(true)
        })
      })

      context('when prop `disabledIntervals` not including the date', () => {
        it('returns `false`', () => {
          expect(instance.isDateHighlighted(currentTime.minus({days: 4}))).toBe(false)
        })
      })
    })
  })

  describe('isDateDisabled', () => {
    context('when prop `disabledIntervals` is `false`', () => {
      it('returns `false`', () => {
        wrapper.setProps({disabledIntervals: false})

        expect(instance.isDateDisabled(currentTime)).toBe(false)
      })
    })

    context('when prop `disabledIntervals` is `true`', () => {
      beforeEach(() => {
        wrapper.setProps({disabledIntervals: [{start: currentTime.minus({days: 3}), end: currentTime}]})
      })

      context('when prop `disabledIntervals` including the date', () => {
        it('returns `true`', () => {
          expect(instance.isDateDisabled(currentTime.minus({days: 1}))).toBe(true)
        })
      })

      context('when prop `disabledIntervals` not including the date', () => {
        it('returns `false`', () => {
          expect(instance.isDateDisabled(currentTime.minus({days: 4}))).toBe(false)
        })
      })
    })
  })

  describe('#getWeekDateRange', () => {
    it('returns week dates array', () => {
      expect(instance.getWeekDateRange(props.startOfWeek).map((v) => v.toISO())).toEqual([
        '1999-12-27T00:00:00.000-02:00',
        '1999-12-28T00:00:00.000-02:00',
        '1999-12-29T00:00:00.000-02:00',
        '1999-12-30T00:00:00.000-02:00',
        '1999-12-31T00:00:00.000-02:00',
        '2000-01-01T00:00:00.000-02:00',
        '2000-01-02T00:00:00.000-02:00',
      ])
    })
  })

  describe('#getDateClasses', () => {
    context('when date and activeMonth are the same month', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime)).toMatch('is-current_month')
      })
    })

    context('when date is disabled', () => {
      it('returns with class string', () => {
        wrapper.setProps({disabledIntervals: [{start: currentTime.minus({days: 3}), end: currentTime}]})

        expect(instance.getDateClasses(currentTime.minus({days: 1}))).toMatch('is-disabled')
      })
    })

    context('when date is selectedMax', () => {
      it('returns with class string', () => {
        wrapper.setProps({selectedMax: currentTime})

        expect(instance.getDateClasses(currentTime)).toMatch('is-end_selection')
      })
    })

    context('when date is selectedMin', () => {
      it('returns with class string', () => {
        wrapper.setProps({selectedMin: currentTime})

        expect(instance.getDateClasses(currentTime)).toMatch('is-start_selection')
      })
    })

    context('when date is highlighted', () => {
      it('returns with class string', () => {
        wrapper.setProps({highlightedStart: currentTime.minus({days: 3}), highlightedEnd: currentTime})

        expect(instance.getDateClasses(currentTime.minus({days: 1}))).toMatch('is-highlighted')
      })
    })

    context('when date is nextMonth', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime.plus({days: 45}))).toMatch('is-next_month')
      })
    })

    context('when date is prevMonth', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime.minus({days: 45}))).toMatch('is-prev_month ')
      })
    })

    context('when date is selected', () => {
      it('returns with class string', () => {
        wrapper.setProps({selectedMin: currentTime.minus({days: 12}), selectedMax: currentTime.minus({days: 10})})

        expect(instance.getDateClasses(currentTime.minus({days: 12}))).toMatch('is-selected')
      })
    })

    context('when date is today', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime)).toMatch('is-today')
      })
    })

    context('when date is workday', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime)).toMatch('is-working_day')
      })
    })

    context('when date is weekend', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime.plus({days: 2}))).toMatch('is-weekend')
      })
    })

    context('when date is selectable', () => {
      it('returns with class string', () => {
        expect(instance.getDateClasses(currentTime.plus({days: 2}))).toMatch('is-selectable')
      })
    })

    context('when date is not selectable', () => {
      it('returns with class string', () => {
        wrapper.setProps({maxDate: currentTime.plus({days: 17})})

        expect(instance.getDateClasses(currentTime.plus({days: 18}))).toMatch('is-not_selectable')
      })
    })
  })

  describe('#getWeekDateRange', () => {
    it('returns with week array', () => {
      expect(instance.getWeekDateRange(currentTime.startOf('week')).map((v) => v.toISO())).toEqual([
        '1999-12-27T00:00:00.000-02:00',
        '1999-12-28T00:00:00.000-02:00',
        '1999-12-29T00:00:00.000-02:00',
        '1999-12-30T00:00:00.000-02:00',
        '1999-12-31T00:00:00.000-02:00',
        '2000-01-01T00:00:00.000-02:00',
        '2000-01-02T00:00:00.000-02:00',
      ])
    })
  })

  describe('#handleOnClick', () => {
    context('when prop onDayClick is defined', () => {
      beforeEach(() => {
        instance.handleOnClick(mockEvent)
      })

      it('calls event.preventDefault', () => {
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
      })

      it('calls #props.onDayClick', () => {
        expect(props.onDayClick).toHaveBeenCalledTimes(1)
        expect(props.onDayClick).toHaveBeenCalledWith(parsedDate)
      })
    })
  })

  describe('#handleOnMouseEnter', () => {
    context('when prop onDayMouseEnter is defined', () => {
      beforeEach(() => {
        instance.handleOnMouseEnter(mockEvent)
      })

      it('calls event.preventDefault', () => {
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
      })

      it('calls #props.onDayClick', () => {
        expect(props.onDayMouseEnter).toHaveBeenCalledTimes(1)
        expect(props.onDayMouseEnter).toHaveBeenCalledWith(parsedDate)
      })
    })
  })

  describe('#handleOnDisabledClick', () => {
    context('when prop onDisabledDayClick is defined', () => {
      beforeEach(() => {
        instance.handleOnDisabledClick(mockEvent)
      })

      it('calls event.preventDefault', () => {
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
      })

      it('calls #props.onDisabledDayClick', () => {
        expect(props.onDisabledDayClick).toHaveBeenCalledTimes(1)
        expect(props.onDisabledDayClick).toHaveBeenCalledWith(parsedDate)
      })
    })
  })

  describe('#render', () => {
    it('renders <Week />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides: Partial<WeekProps> = {}): WeekProps => ({
  blockClassName: 'example-class-name',
  startOfWeek: currentTime.startOf('week'),
  today: currentTime,
  activeMonth: currentTime,
  onDayClick: jest.fn(),
  onDayMouseEnter: jest.fn(),
  onDisabledDayClick: jest.fn(),
  ...overrides,
})
