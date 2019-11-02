import { getDayEachDay, getDayIndexIsWeekend, getMonthWeeks } from '.'

describe('Helper functions', () => {
  describe('#getDayIndexIsWeekend', () => {
    describe('when weekday', () => {
      describe('when `index` is `Monday`', () => {
        test('returns `false`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 1, weekStartsOn: 1 })).toBe(false)
        })
      })

      describe('when `index` is `Tuesday`', () => {
        test('returns `false`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 2, weekStartsOn: 1 })).toBe(false)
        })
      })

      describe('when `index` is `Wednesday`', () => {
        test('returns `false`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 3, weekStartsOn: 1 })).toBe(false)
        })
      })

      describe('when `index` is `Thursday`', () => {
        test('returns `false`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 4, weekStartsOn: 1 })).toBe(false)
        })
      })

      describe('when `index` is `Friday`', () => {
        test('returns `false`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 5, weekStartsOn: 1 })).toBe(false)
        })
      })
    })

    describe('when weekend', () => {
      describe('when `index` is `Saturday`', () => {
        test('returns `true`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 6, weekStartsOn: 1 })).toBe(true)
        })
      })

      describe('when `index` is `Sunday`', () => {
        test('returns `true`', () => {
          expect(getDayIndexIsWeekend({ dayIndex: 0, weekStartsOn: 1 })).toBe(true)
        })
      })
    })
  })

  describe('#getDayEachDay', () => {
    test('returns array of Days', () => {
      expect(getDayEachDay({ start: new Date(2019, 10, 25), end: new Date(2019, 11, 1) })).toEqual([
        new Date(2019, 10, 25),
        new Date(2019, 10, 26),
        new Date(2019, 10, 27),
        new Date(2019, 10, 28),
        new Date(2019, 10, 29),
        new Date(2019, 10, 30),
        new Date(2019, 11, 1),
      ])
    })
  })

  describe('#getMonthWeeks', () => {
    describe('when no `minNumberOfWeeks` has been passed', () => {
      test('returns a weeks array', () => {
        expect(getMonthWeeks({ activeMonth: new Date(2019, 11, 14), weekStartsOn: 1 })).toEqual([
          { weekStart: new Date(2019, 10, 25), weekNumber: 48, weekEnd: new Date(2019, 11, 1) },
          { weekStart: new Date(2019, 11, 2), weekNumber: 49, weekEnd: new Date(2019, 11, 8) },
          { weekStart: new Date(2019, 11, 9), weekNumber: 50, weekEnd: new Date(2019, 11, 15) },
          { weekStart: new Date(2019, 11, 16), weekNumber: 51, weekEnd: new Date(2019, 11, 22) },
          { weekStart: new Date(2019, 11, 23), weekNumber: 52, weekEnd: new Date(2019, 11, 29) },
          { weekStart: new Date(2019, 11, 30), weekNumber: 1, weekEnd: new Date(2020, 0, 5) },
        ])
      })
    })

    // describe('when `minNumberOfWeeks` has been passed', () => {
    //   test('returns a weeks array', () => {
    //     expect(getMonthWeeks({activeMonth: new Date(2018, 0, 1), minNumberOfWeeks: 8, weekStartsOn: 1})).toEqual([
    //       {weekStart: '2019-10-28', weekNumber: 44},
    //       {weekStart: '2019-11-04', weekNumber: 45},
    //       {weekStart: '2019-11-11', weekNumber: 46},
    //       {weekStart: '2019-11-18', weekNumber: 47},
    //       {weekStart: '2019-11-25', weekNumber: 48},
    //       {weekStart: '2019-12-02', weekNumber: 49},
    //       {weekStart: '2019-12-09', weekNumber: 50},
    //       {weekStart: '2019-12-16', weekNumber: 51},
    //     ])
    //   })
    // })
  })
})
