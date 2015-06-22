export default function getDaysInWeek(month) {
  return _.range(0, 7)
    .map((day) => {
      return new Date(
        month.getFullYear(),
        month.getMonth(),
        month.getDate() + day
      )
    })
}