/**
 * Returns true if date falls between dateFrom and dateTo, false otherwise.
 *
 * @param {date} date
 * @param {date|string} dateFrom
 * @param {date|string} dateTo
 * @returns {boolean}
 */

function resetDate(date) {
  const dateObj = new Date(date)
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0)
}

export default function isDateBetween(date, dateFrom, dateTo) {
  const fromTime = resetDate(dateFrom).getTime()
  const toTime = resetDate(dateTo).getTime()
  const min = Math.min(fromTime, toTime)
  const max = Math.max(fromTime, toTime)
  const time = resetDate(date).getTime()
  return (time >= min && time <= max)
}
