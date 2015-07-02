/**
 * Returns true if date falls on the weekend and false otherwise.
 *
 * @param {date|string} date
 * @returns {boolean}
 */
export default function isWeekend(date) {
  return (date.getDay() === 0 || date.getDay() === 6)
}
