import * as Luxon from 'luxon'

import {
  getCurrentTime,
  getDifferenceInDays,
  getEachDayOfInterval,
  getMaxWeekNumberInYear,
  getWeekNumber,
  isAfter,
  isBefore,
  isIntervalContains,
  isIntervalsOverlapping,
  isSameDate,
  isSameMonth,
  isSameYear,
  isWeekend,
} from '.'

const currentTime = Luxon.DateTime.local()

describe('Helper lib', () => {
  describe('#getCurrentTime', () => {
    it('returns DateTime object of current Time', () => {
      expect(getCurrentTime().toISO()).toBe('1999-12-31T22:00:00.000-02:00')
    })
  })

  describe('#getDifferenceInDays', () => {
    it('returns difference in number', () => {
      expect(getDifferenceInDays({start: currentTime.minus({days: 7}), end: currentTime})).toBe(7)
    })
  })

  describe('#getMaxWeekNumberInYear', () => {
    it('returns maximum weekNumber', () => {
      expect(getMaxWeekNumberInYear(currentTime)).toBe(52)
    })
  })

  describe('#getEachDayOfInterval', () => {
    it('returns array of Dates', () => {
      expect(
        getEachDayOfInterval({start: currentTime.minus({days: 6}), end: currentTime}).map((i) => i.toISODate())
      ).toEqual([
        currentTime.minus({days: 6}).toISODate(),
        currentTime.minus({days: 5}).toISODate(),
        currentTime.minus({days: 4}).toISODate(),
        currentTime.minus({days: 3}).toISODate(),
        currentTime.minus({days: 2}).toISODate(),
        currentTime.minus({days: 1}).toISODate(),
        currentTime.toISODate(),
      ])
    })
  })

  describe('#getWeekNumber', () => {
    it('returns weekNumber', () => {
      expect(getWeekNumber(currentTime.plus({week: 5}))).toBe(5)
    })
  })

  describe('#isIntervalContains', () => {
    context('when range includes date', () => {
      it('returns `true`', () => {
        expect(
          isIntervalContains(currentTime.minus({days: 5}), {start: currentTime.minus({days: 7}), end: currentTime})
        ).toBe(true)
      })
    })

    context('when range does not include date', () => {
      it('returns `false`', () => {
        expect(
          isIntervalContains(currentTime.minus({days: 8}), {start: currentTime.minus({days: 7}), end: currentTime})
        ).toBe(false)
      })
    })
  })

  describe('#isSameDate', () => {
    context('when dates are the same', () => {
      it('returns `true`', () => {
        expect(isSameDate(currentTime, currentTime)).toBe(true)
      })
    })

    context('when dates are different', () => {
      it('returns `false`', () => {
        expect(isSameDate(currentTime, currentTime.plus({days: 1}))).toBe(false)
      })
    })
  })

  describe('#isSameMonth', () => {
    context('when dates are in the same month', () => {
      it('returns `true`', () => {
        expect(isSameMonth(currentTime, currentTime.minus({days: 15}))).toBe(true)
      })
    })

    context('when dates are different month', () => {
      it('returns `false`', () => {
        expect(isSameMonth(currentTime, currentTime.plus({days: 15}))).toBe(false)
      })
    })
  })

  describe('#isSameYear', () => {
    context('when dates are in the same year', () => {
      it('returns `true`', () => {
        expect(isSameYear(currentTime, currentTime.minus({months: 5}))).toBe(true)
      })
    })

    context('when dates are different years', () => {
      it('returns `false`', () => {
        expect(isSameYear(currentTime, currentTime.plus({months: 5}))).toBe(false)
      })
    })
  })

  describe('#isWeekend', () => {
    context('when date is `Saturday`', () => {
      it('returns `true`', () => {
        expect(isWeekend(currentTime.plus({days: 1}))).toBe(true)
      })
    })

    context('when date is `Sunday`', () => {
      it('returns `true`', () => {
        expect(isWeekend(currentTime.plus({days: 2}))).toBe(true)
      })
    })

    context('when date is a workday', () => {
      it('returns `false`', () => {
        expect(isWeekend(currentTime)).toBe(false)
      })
    })
  })

  describe('#isIntervalsOverlapping', () => {
    context('when interval dates are overlapping', () => {
      it('returns `true`', () => {
        expect(
          isIntervalsOverlapping(
            {start: currentTime, end: currentTime.plus({days: 8})},
            {start: currentTime.minus({days: 14}), end: currentTime.plus({days: 8})}
          )
        ).toBe(true)
      })
    })

    context('when interval dates are not overlapping', () => {
      it('returns `false`', () => {
        expect(
          isIntervalsOverlapping(
            {start: currentTime.plus({days: 9}), end: currentTime.plus({days: 10})},
            {start: currentTime.minus({days: 14}), end: currentTime.plus({days: 8})}
          )
        ).toBe(false)
      })
    })
  })

  describe('#isAfter', () => {
    context('when first date is after the second date', () => {
      it('returns `true`', () => {
        expect(isAfter(currentTime, currentTime.minus({days: 1}))).toBe(true)
      })
    })

    context('when first date is not after the second date', () => {
      it('returns `true`', () => {
        expect(isAfter(currentTime, currentTime.plus({days: 1}))).toBe(false)
      })
    })
  })

  describe('#isBefore', () => {
    context('when first date is before the second date', () => {
      it('returns `true`', () => {
        expect(isBefore(currentTime, currentTime.plus({days: 1}))).toBe(true)
      })
    })

    context('when first date is not before the second date', () => {
      it('returns `true`', () => {
        expect(isBefore(currentTime, currentTime.minus({days: 1}))).toBe(false)
      })
    })
  })
})
