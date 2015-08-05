/**
 * Returns true if date falls inside boundaries.
 *
 * @param {date} date
 * @param {object} boundaries
 * @returns {boolean}
 */

function resetDate(date) {
  const dateObj = new Date(date)
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0)
}

export default function isDateInBoundaries(date, boundaries) {
  const time = resetDate(date).getTime()
  const min = boundaries && boundaries.min && resetDate(boundaries.min).getTime()
  const max = boundaries && boundaries.max && resetDate(boundaries.max).getTime()

  if (min && min > time) {
    return false
  }
  if (max && max < time) {
    return false
  }
  return true
}
