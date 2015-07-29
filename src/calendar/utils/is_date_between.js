/**
 * Returns true if date falls between dateFrom and dateTo, false otherwise.
 *
 * @param {date} date
 * @param {date|string} dateFrom
 * @param {date|string} dateTo
 * @returns {boolean}
 */
export default function isDateBetween(date, dateFrom, dateTo) {
  const fromTime = new Date(dateFrom).getTime()
  const toTime = new Date(dateTo).getTime()
  const min = Math.min(fromTime, toTime)
  const max = Math.max(fromTime, toTime)
  const time = date.getTime()
  return (time >= min && time <= max)
}
