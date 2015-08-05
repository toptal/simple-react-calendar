/**
 * Returns true if date falls inside boundaries.
 *
 * @param {date} date
 * @param {object} boundaries
 * @returns {boolean}
 */
export default function isDateInBoundaries(date, boundaries) {
  const time = new Date(date).getTime()
  const min = boundaries && boundaries.min && new Date(boundaries.min).getTime()
  const max = boundaries && boundaries.max && new Date(boundaries.max).getTime()

  if (min && min > time) {
    return false
  }
  if (max && max < time) {
    return false
  }
  return true
}
