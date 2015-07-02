/**
 * Returns true if date is today and false otherwise.
 *
 * @param {date} date
 * @returns {boolean}
 */
export default function isToday(date) {
  let today = new Date()
  return (
    (today.getFullYear() === date.getFullYear()) &&
    (today.getMonth() === date.getMonth()) &&
    (today.getDate() === date.getDate())
  )
}
