import { getMonthWeeks } from '.'

describe('Helper functions', () => {
  describe.only('#getMonthWeeks', () => {
    describe('when no `minNumberOfWeeks` has been passed', () => {
      test('returns a weeks array', () => {
        expect(getMonthWeeks({ activeMonth: new Date(2019, 10, 1), weekStartsOn: 1 })).toEqual([
          { weekStart: '2019-10-28', weekNumber: 44 },
          { weekStart: '2019-11-04', weekNumber: 45 },
          { weekStart: '2019-11-11', weekNumber: 46 },
          { weekStart: '2019-11-18', weekNumber: 47 },
          { weekStart: '2019-11-25', weekNumber: 48 },
        ])
      })
    })

    describe('when `minNumberOfWeeks` has been passed', () => {
      test('returns a weeks array', () => {
        expect(getMonthWeeks({ activeMonth: new Date(2019, 10, 1), minNumberOfWeeks: 8, weekStartsOn: 1 })).toEqual([
          { weekStart: '2019-10-28', weekNumber: 44 },
          { weekStart: '2019-11-04', weekNumber: 45 },
          { weekStart: '2019-11-11', weekNumber: 46 },
          { weekStart: '2019-11-18', weekNumber: 47 },
          { weekStart: '2019-11-25', weekNumber: 48 },
          { weekStart: '2019-12-02', weekNumber: 49 },
          { weekStart: '2019-12-09', weekNumber: 50 },
          { weekStart: '2019-12-16', weekNumber: 51 },
        ])
      })
    })
  })
})
