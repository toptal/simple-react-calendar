import { shallow } from 'enzyme'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Calendar from '../calendar'

describe('Calendar', () => {
  let wrapper, props, instance
  const date = new Date(2015, 6, 1)

  describe('#componentWillReceiveProps', () => {
    describe('when nextProps `activeMonth` is defined', () => {
      describe('when nextProps `activeMonth` and prop `activeMonth` is different', () => {
        it('sets state `activeMonth`', () => {
          props = { activeMonth: date }
          wrapper = shallow(<Calendar />)
          wrapper.setProps({ activeMonth: new Date(2015, 9, 1) })

          expect(wrapper.state('activeMonth')).toEqual(new Date(2015, 9, 1))
        })
      })
    })

    describe('when nextProps `activeMonth` is `undefined`', () => {
      it("doesn't set state", () => {
        props = { activeMonth: date }
        wrapper = shallow(<Calendar />)
        wrapper.setProps({ disableDaysOfWeek: false })

        expect(wrapper.state('activeMonth')).not.toEqual(new Date(2015, 9, 1))
      })
    })
  })

  describe('#_initialMonth', () => {
    describe('when prop `activeMonth` is valid date', () => {
      it('returns `activeMonth`', () => {
        wrapper = shallow(<Calendar activeMonth={date} />)

        expect(wrapper.instance()._initialMonth()).toEqual(date)
      })
    })

    describe('when prop `activeMonth` is invalid date', () => {
      it('returns `activeMonth`', () => {
        props = {
          activeMonth: '2017-01-01',
          selected: 'abc',
          today: date,
        }
        wrapper = shallow(<Calendar {...props} />)

        expect(wrapper.instance()._initialMonth()).toEqual(props.today)
      })
    })
  })

  describe('#_switchMonth', () => {
    describe('when prop `onMonthChange` is defined', () => {
      it('calls prop #onMonthChange', () => {
        props = { onMonthChange: jest.fn(), activeMonth: date }
        wrapper = shallow(<Calendar {...props} />)
        wrapper.instance()._switchMonth('2017-01-01')

        expect(props.onMonthChange).toHaveBeenCalledTimes(1)

        expect(props.onMonthChange).toHaveBeenCalledWith('2017-01-01')
      })
    })

    describe('when prop `onMonthChange` is `undefined`', () => {
      it('sets `activeMonth` state', () => {
        props = { activeMonth: date }
        wrapper = shallow(<Calendar {...props} />)
        wrapper.instance()._switchMonth('2017-01-01')

        expect(wrapper.state('activeMonth')).toBe('2017-01-01')
      })
    })
  })

  describe('#_activeMonth', () => {
    describe('when prop `onMonthChange` is defined', () => {
      it('returns prop `activeMonth`', () => {
        props = { onMonthChange: jest.fn(), activeMonth: date }
        wrapper = shallow(<Calendar {...props} />)

        expect(wrapper.instance()._activeMonth()).toBe(props.activeMonth)
      })
    })

    describe('when prop `onMonthChange` is `undefined`', () => {
      it('returns state `activeMonth`', () => {
        wrapper = shallow(<Calendar activeMonth={date} />)
        wrapper.setState({ activeMonth: '2015-01-01' })

        expect(wrapper.instance()._activeMonth()).toBe('2015-01-01')
      })
    })
  })

  describe('#_highlight', () => {
    describe('when prop `highlighted` is `undefined`', () => {
      it('returns object', () => {
        wrapper = shallow(<Calendar />)

        expect(wrapper.instance()._highlight()).toEqual({
          start: null,
          end: null,
        })
      })
    })

    describe('when prop `highlighted` is defined', () => {
      it('returns object', () => {
        props = {
          highlighted: {
            start: date,
            end: new Date(2015, 7, 1),
          },
        }
        wrapper = shallow(<Calendar {...props} />)

        expect(wrapper.instance()._highlight()).toEqual(props.highlighted)
      })

      describe('when prop `highlighted.start` is invalid date', () => {
        it('returns object', () => {
          props = {
            highlighted: {
              start: 'abc',
              end: new Date(2015, 7, 1),
            },
          }
          wrapper = shallow(<Calendar {...props} />)

          expect(wrapper.instance()._highlight()).toEqual({
            start: null,
            end: null,
          })
        })
      })

      describe('when prop `highlighted.end` is invalid date', () => {
        it('returns object', () => {
          props = {
            highlighted: {
              start: date,
              end: 'abc',
            },
          }
          wrapper = shallow(<Calendar {...props} />)

          expect(wrapper.instance()._highlight()).toEqual({
            start: null,
            end: null,
          })
        })
      })
    })
  })

  describe('#_selection', () => {
    let instance

    beforeEach(() => {
      wrapper = shallow(<Calendar />)
      instance = wrapper.instance()
    })

    describe('when #_selectionStart and #_selectionEnd returns valid date', () => {
      it('returns object', () => {
        const start = date
        const end = new Date(2015, 7, 1)

        instance._selectionStart = () => start
        instance._selectionEnd = () => end

        expect(instance._selection()).toEqual({ start, end })
      })
    })

    describe('when #_selectionStart and #_selectionEnd returns invalid date', () => {
      it('returns object', () => {
        instance._selectionStart = () => date
        instance._selectionEnd = () => 'abc'

        expect(instance._selection()).toEqual({ start: null, end: null })
      })
    })
  })

  describe('#_selectionDate', () => {
    describe("when prop `mode` is 'single'", () => {
      it('returns prop `selected', () => {
        props = { selected: date }
        wrapper = shallow(<Calendar {...props} />)

        expect(wrapper.instance()._selectionDate('end')).toBe(props.selected)
      })
    })

    describe("when prop `mode` is 'range'", () => {
      const selected = { start: date, end: new Date(2015, 7, 1) }
      const selection = {
        start: new Date(2017, 6, 1),
        end: new Date(2017, 7, 1),
      }

      describe('when prop `onSelectionProgress` is `undefined`', () => {
        beforeEach(() => {
          props = { selected, mode: 'range' }
          wrapper = shallow(<Calendar {...props} />)
          instance = wrapper.instance()
        })

        describe('when state `selection` is `defined`', () => {
          it('returns state `selection.start`', () => {
            wrapper.setState({ selection })

            expect(instance._selectionDate('start')).toBe(selection.start)
          })
        })

        it('returns prop `selected.start`', () => {
          expect(instance._selectionDate('start')).toBe(props.selected.start)
        })
      })

      describe('when prop `onSelectionProgress` is defined', () => {
        it('returns prop `selected.start`', () => {
          props = { selected, mode: 'range', onSelectionProgress: () => {} }
          wrapper = shallow(<Calendar {...props} />)
          wrapper.setState({ selection })

          expect(wrapper.instance()._selectionDate('start')).toBe(props.selected.start)
        })
      })
    })
  })

  describe('#_selectionChanged', () => {
    const selection = { start: date, end: new Date(2015, 7, 1) }

    describe("when prop `mode` is 'single'", () => {
      describe('when prop `onSelect` is defined', () => {
        describe('when selection `start` is defined', () => {
          it('calls prop #onSelect', () => {
            props = { onSelect: jest.fn() }
            wrapper = shallow(<Calendar {...props} />)
            wrapper.instance()._selectionChanged(selection)

            expect(props.onSelect).toHaveBeenCalledTimes(1)

            expect(props.onSelect).toHaveBeenCalledWith(selection.start)
          })
        })
      })
    })

    describe("when prop `mode` is 'range'", () => {
      describe('when prop `onSelect` is defined', () => {
        it('calls prop #onSelect', () => {
          props = { mode: 'range', onSelect: jest.fn() }
          wrapper = shallow(<Calendar {...props} />)
          wrapper.instance()._selectionChanged(selection)

          expect(props.onSelect).toHaveBeenCalledTimes(1)

          expect(props.onSelect).toHaveBeenCalledWith(selection)
        })
      })

      describe('when prop `onSelectionProgress` is defined', () => {
        it('calls prop #onSelectionProgress', () => {
          props = { mode: 'range', onSelectionProgress: jest.fn() }
          wrapper = shallow(<Calendar {...props} />)
          wrapper.instance()._selectionChanged(Object.assign(selection, { inProgress: true }))

          expect(props.onSelectionProgress).toHaveBeenCalledTimes(1)

          expect(props.onSelectionProgress).toHaveBeenCalledWith(Object.assign(selection, { inProgress: true }))
        })
      })

      describe('when prop `onSelectionProgress` is `undefined`', () => {
        beforeEach(() => {
          props = { mode: 'range' }
          wrapper = shallow(<Calendar {...props} />)
          instance = wrapper.instance()
        })

        describe('when selection `inProgress` is `true`', () => {
          it('sets state `selection`', () => {
            instance._selectionChanged(Object.assign(selection, { inProgress: true }))

            expect(wrapper.state('selection')).toEqual({
              start: date,
              end: new Date(2015, 7, 1),
            })
          })
        })

        describe('when selection `inProgress` is `false`', () => {
          it('sets state `selection`', () => {
            instance._selectionChanged(Object.assign(selection, { inProgress: false }))

            expect(wrapper.state('selection')).toBe(null)
          })
        })
      })
    })
  })

  describe('#_noticeChanged', () => {
    it('sets state', () => {
      wrapper = shallow(<Calendar />)

      expect(wrapper.state('shownNoticeType')).toBe(null)
      wrapper.instance()._noticeChanged('disabled_day_click')

      expect(wrapper.state('shownNoticeType')).toBe('disabled_day_click')
    })
  })

  describe('#_today', () => {
    describe('when prop `today` is defined', () => {
      it('returns date', () => {
        wrapper = shallow(<Calendar today={date} />)

        expect(wrapper.instance()._today()).toBe(date)
      })
    })

    describe('when prop `today` is `undefined`', () => {
      it('returns date', () => {
        wrapper = shallow(<Calendar />)

        expect(wrapper.instance()._today()).toEqual(new Date(2000, 0, 1))
      })
    })
  })

  describe('#render', () => {
    it('renders <Calendar />', () => {
      const tree = ReactTestRenderer.create(<Calendar activeMonth={date} onMonthChange={() => {}} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
