var assert  = require('power-assert')
var isDateInBoundaries = require('../../../src/calendar/utils/is_date_in_boundaries')

describe('isDateInBoundaries', () => {
  describe('with both boundaries', () => {
    it('returns true when date is in boundaries', () => {
      assert(isDateInBoundaries(new Date(2015, 6, 25), {min: new Date(2015, 6, 20), max: new Date(2015, 6, 30)}))
    })

    it('returns false when date is outside minimum boundary', () => {
      assert(
        !isDateInBoundaries(new Date(2015, 6, 15), {
          min: new Date(2015, 6, 20),
          max: new Date(2015, 6, 30)
        })
      )
    })

    it('returns false when date is outside maximum boundary', () => {
      assert(
        !isDateInBoundaries(new Date(2015, 6, 30), {
          min: new Date(2015, 6, 20),
          max: new Date(2015, 6, 25)
        })
      )
    })


    it('returns true when date is in boundaries (date in string format)', () => {
      assert(isDateInBoundaries('2015-06-25', {min: '2015-06-20', max: '2015-06-30'}))
    })

    it('returns false when date is outside minimum boundary (date in string format)', () => {
      assert(
        !isDateInBoundaries('2015-06-15', {
          min: '2015-06-20',
          max: '2015-06-30'
        })
      )
    })

    it('returns false when date is outside maximum boundary (date in string format)', () => {
      assert(
        !isDateInBoundaries('2015-06-30', {
          min: '2015-06-20',
          max: '2015-06-25'
        })
      )
    })
  })

  describe('with only minimum boundary', () => {
    it('returns true when date later than minimum boundary', () => {
      assert(isDateInBoundaries(new Date(2015, 6, 25), {min: new Date(2015, 6, 20)}))
    })

    it('returns true when date equals minimum boundary', () => {
      assert(isDateInBoundaries(new Date(2015, 6, 25), {min: new Date(2015, 6, 25)}))
    })

    it('returns false when date is earlier than minimum boundary', () => {
      assert(!isDateInBoundaries(new Date(2015, 6, 15), {min: new Date(2015, 6, 20)}))
    })
  })

  describe('with only maximun boundary', () => {
    it('returns true when date earlier than maximun boundary', () => {
      assert(isDateInBoundaries(new Date(2015, 6, 20), {max: new Date(2015, 6, 25)}))
    })

    it('returns true when date equals maximun boundary', () => {
      assert(isDateInBoundaries(new Date(2015, 6, 25), {max: new Date(2015, 6, 25)}))
    })

    it('returns false when date is later than maximun boundary', () => {
      assert(!isDateInBoundaries(new Date(2015, 6, 25), {max: new Date(2015, 6, 20)}))
    })
  })
})
