import dateRangeToArray from './date_range_to_array'
import isDateBetween    from './is_date_between'


export default function isDateInRange (date, datesRange) {
  let range = dateRangeToArray(datesRange)
  return isDateBetween(date, range[0], range[1])
}