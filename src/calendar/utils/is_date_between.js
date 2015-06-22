export default function isDateBetween (date, dateFrom, dateTo) {
  let date1 = new Date(dateFrom || dateTo)
  let date2 = new Date(dateTo || dateFrom)
  let min = Math.min(date1.getTime(), date2.getTime())
  let max = Math.max(date1.getTime(), date2.getTime())
  let time = date.getTime()
  return (time >= min && time <= max)
}