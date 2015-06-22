export default function isWeekend(date) {
  return (date.getDay() == 0 || date.getDate() == 6)
}
