import { getDayFormatted, getISODate } from '.'

describe('Simple React Calendar - Date helpers', () => {
  describe('#getISODate', () => {
    expect(getISODate(new Date(2020, 1, 9))).toBe('2020-02-09')
  })

  describe('#getDayFormatted', () => {
    expect(getDayFormatted(new Date(2020, 1, 9))).toBe('9')
  })
})
