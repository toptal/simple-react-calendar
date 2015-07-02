/**
 * Returns true if date falls inside boundaries.
 *
 * @param {date} date
 * @param {object} boundaries
 * @returns {boolean}
 */
export default function isDateInBoundaries(date, boundaries) {
  let time = date.getTime()
  if (boundaries && boundaries.min && boundaries.min.getTime() > time) {
    return false
  }
  if (boundaries && boundaries.max && boundaries.max.getTime() < time) {
    return false
  }
  return true
}
