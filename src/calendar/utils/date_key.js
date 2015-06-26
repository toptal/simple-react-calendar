/**
 * Accepts a date or a string representation of a date and returns
 * a string suitable to be used as a key in the format: YYYY-MM-DD
 *
 * @param {date|string} date
 * @returns {string}
 */
export default function dateKey(date) {
  date = new Date(date)
  let yyyy = date.getFullYear()
  let mm = ('0' + (date.getMonth() + 1)).slice(-2)
  let dd = ('0' + date.getDate()).slice(-2)
  return `${yyyy}-${mm}-${dd}`
}
