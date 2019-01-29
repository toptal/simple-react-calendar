import * as Luxon from 'luxon'

import {CalendarSelectionRangeI} from '../types'

export function getCurrentTime(): Luxon.DateTime {
  return Luxon.DateTime.local()
}

export function getDifferenceInDays({start, end}: CalendarSelectionRangeI): number {
  const difference = end.diff(start).as('days')

  return difference > 0 ? difference : 0
}

export function getMaxWeekNumberInYear(date: Luxon.DateTime): Number {
  return date.weeksInWeekYear
}

export function getEachDayOfInterval({start, end}: CalendarSelectionRangeI): Luxon.DateTime[] {
  return Array.from(
    new Array(Math.round(getDifferenceInDays({start: start.startOf('day'), end: end.endOf('day')})))
  ).map((v, i) => start.plus({days: i}))
}

export function getWeekNumber(date: Luxon.DateTime): Number {
  return date.weekNumber
}

export function isAfter(checkDate: Luxon.DateTime, baseDate: Luxon.DateTime): boolean {
  const difference = baseDate.diff(checkDate).as('seconds')

  return difference < 0
}

export function isBefore(checkDate: Luxon.DateTime, baseDate: Luxon.DateTime): boolean {
  const difference = baseDate.diff(checkDate).as('seconds')

  return difference > 0
}

export function isIntervalContains(date: Luxon.DateTime, {start, end}: CalendarSelectionRangeI): boolean {
  return Luxon.Interval.fromDateTimes(start.startOf('day'), end.endOf('day')).contains(date)
}

export function isIntervalsOverlapping(
  baseInterval: CalendarSelectionRangeI,
  compareInterval: CalendarSelectionRangeI
): boolean {
  const int = Luxon.Interval.fromDateTimes(baseInterval.start, baseInterval.end)
  const otherInt = Luxon.Interval.fromDateTimes(compareInterval.start, compareInterval.end)

  return int.overlaps(otherInt)
}

export function isSameDate(dt1: Luxon.DateTime, dt2: Luxon.DateTime): boolean {
  return dt1.toISODate() === dt2.toISODate()
}

export function isSameMonth(dt1: Luxon.DateTime, dt2: Luxon.DateTime): boolean {
  return isSameYear(dt1, dt2) && dt1.hasSame(dt2, 'month')
}

export function isSameYear(dt1: Luxon.DateTime, dt2: Luxon.DateTime): boolean {
  return dt1.hasSame(dt2, 'year')
}

export function isWeekend(date: Luxon.DateTime): boolean {
  return date.weekday === 6 || date.weekday === 7
}
