export default function isToday(date) {
  let today = new Date()
  return (
    (today.getFullYear() == date.getFullYear()) &&
    (today.getMonth() == date.getMonth()) &&
    (today.getDate() == date.getDate())
  )
}
