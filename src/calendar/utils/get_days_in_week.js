import lodash from 'lodash'

/**
 * Accepts the first day and returns an array containing 7 days starting
 * with the first day. Intended for generating days in a week.
 *
 * @param {date} date
 * @returns {array}
 */
export default function getDaysInWeek(firstDay) {
  return lodash.range(0, 7)
    .map((day) => {
      return new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate() + day
      )
    })
}
