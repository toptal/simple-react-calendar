/**
 * Returns true if date falls between dateFrom and dateTo, false otherwise.
 *
 * @param {date} date
 * @param {date|string} dateFrom
 * @param {date|string} dateTo
 * @returns {boolean}
 */
export default function isDateBetween (date, dateFrom, dateTo) {
  let fromTime = new Date(dateFrom).getTime()
  let toTime = new Date(dateTo).getTime()
  let min = Math.min(fromTime, toTime)
  let max = Math.max(fromTime, toTime)
  let time = date.getTime()
  return (time >= min && time <= max)
}
