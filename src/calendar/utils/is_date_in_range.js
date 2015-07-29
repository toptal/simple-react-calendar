import dateRangeToArray from './date_range_to_array'
import isDateBetween from './is_date_between'

/**
 * Returns true if date is within the range, false otherwise.
 * See documentation for dateRangeToArray for details on range formats.
 *
 * @param {date} date
 * @param {object|array|undefined} datesRange
 * @returns {boolean}
 */
export default function isDateInRange(date, datesRange) {
  const range = dateRangeToArray(datesRange)
  return isDateBetween(date, range[0], range[1])
}
