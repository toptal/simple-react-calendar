/**
 * Accepts the first day of month and returns an array containing
 * all mondays for all weeks that intersect that month. So, if a month
 * starts on a Wednesday, the first entry will be the previous monday.
 *
 * @param {date} date
 * @returns {array}
 */
export default function getWeeksInMonth(month) {
  let date = new Date(
    month.getFullYear(),
    month.getMonth(),
    month.getDate()
  )

  let daysFromWeekStart = (date.getDay() || 7) - 1
  let daysInMonth       = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  let weeksCount = Math.ceil((daysInMonth + daysFromWeekStart) / 7)
  var startDate  = new Date(
    date.getFullYear(),
    date.getMonth(),
    1 - daysFromWeekStart
  )

  return _.range(0, weeksCount)
    .map((week) => {
      return new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + week * 7
      )
    })

}
