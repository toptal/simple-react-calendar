import addDays from 'date-fns/add_days'
import addMonths from 'date-fns/add_months'
import addWeeks from 'date-fns/add_weeks'
import differenceInWeeks from 'date-fns/difference_in_weeks'
import eachDay from 'date-fns/each_day'
import endOfMonth from 'date-fns/end_of_month'
import endOfWeek from 'date-fns/end_of_week'
import format from 'date-fns/format'
import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'
import isEqual from 'date-fns/is_equal'
import isSameDay from 'date-fns/is_same_day'
import isSameMonth from 'date-fns/is_same_month'
import isValidDate from 'date-fns/is_valid'
import isWeekend from 'date-fns/is_weekend'
import isWithinRange from 'date-fns/is_within_range'
import parse from 'date-fns/parse'
import startOfDay from 'date-fns/start_of_day'
import startOfMonth from 'date-fns/start_of_month'
import startOfWeek from 'date-fns/start_of_week'
import startOfYear from 'date-fns/start_of_year'
import subDays from 'date-fns/sub_days'

import { IDate, IDateRange, ISelection, ISelectionRange } from '../../@types'

export const EMPTY_RANGE = {start: undefined, end: undefined}

interface IGetActiveMonth {
  activeMonth?: IDate
  mode: 'range' | 'single'
  today: Date
  selected?: IDate | ISelectionRange
}

export const getActiveMonth = ({selected, activeMonth, mode, today}: IGetActiveMonth): Date => {
  if (!activeMonth) {
    return startOfMonth(today)
  } else {
    if (isValid(activeMonth as Date)) {
      return startOfMonth(activeMonth as IDate)
    }

    const selectionStart = mode === 'single' ? selected : (selected as ISelectionRange).start

    if (!isValid(selectionStart as Date)) {
      console.warn('SimpleReactCalendar, getActiveMonth, mode is range but selection start is not a valid Date')
    }

    return startOfMonth((selectionStart as Date) || today)
  }
}

export const getAsDate = (day: IDate) => {
  const parsedDate = parse(day)

  return isValidDate(parsedDate) ? parsedDate : new Date()
}

interface IGetMonthIsEnabled {
  activeMonth: IDate
  maxDate?: IDate
  minDate?: IDate
  type: 'prev' | 'next'
}

interface IGetDay {
  day: IDate
  offsetInDays: number
}

export const getDay = ({day, offsetInDays}: IGetDay) => addDays(day, offsetInDays || 0)

interface IGetDayIsBefore {
  date: IDate
  dateToCompare: IDate
}

export const getDayIsBefore = ({date, dateToCompare}: IGetDayIsBefore) => isBefore(date, dateToCompare)

export const getIsRangeOverlap = () => {}

export const getMonthIsEnabled = ({activeMonth, maxDate, minDate, type}: IGetMonthIsEnabled): boolean =>
  type === 'next'
    ? isAfter(startOfMonth(maxDate as IDate), startOfMonth(activeMonth))
    : isBefore(startOfMonth(minDate as IDate), startOfMonth(activeMonth))

export interface IGetDaysOfWeek {
  daysOfWeek: string[]
  dayIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const getDaysOfWeek = ({daysOfWeek, dayIndex}: IGetDaysOfWeek): string[] => {
  const adjustedIndex = dayIndex - 1

  return daysOfWeek.slice(adjustedIndex).concat(daysOfWeek.slice(0, adjustedIndex))
}

export const isValid = (date: Date) => {
  try {
    return isValidDate(date)
  } catch (e) {
    return false
  }
}

interface IGetHighlighted {
  highlighted?: {start: Date; end: Date}
}

export const getHighlighted = ({highlighted}: IGetHighlighted) => {
  if (!highlighted) return EMPTY_RANGE

  const {start, end} = highlighted

  if (isValid(start as Date) && isValid(end as Date)) {
    return highlighted
  } else {
    return EMPTY_RANGE
  }
}

interface IGetSelectionDate extends IGetSelection {
  dateType: 'start' | 'end'
}

export const getSelectionDate = ({
  selected,
  onSelectionProgress,
  stateSelection,
  mode,
  dateType,
}: IGetSelectionDate) => {
  switch (mode) {
    case 'single':
      return selected

    case 'range':
      if (!onSelectionProgress && stateSelection) {
        return stateSelection[dateType]
      } else {
        return selected && (selected as ISelectionRange)[dateType]
      }
  }
}

interface IGetSelection {
  selected?: IDate | ISelectionRange
  onSelectionProgress?: (changes: ISelection) => void
  stateSelection?: ISelection
  mode: 'range' | 'single'
}

export const getSelection = ({selected, onSelectionProgress, stateSelection, mode}: IGetSelection) => {
  const start = getSelectionDate({selected, onSelectionProgress, stateSelection, mode, dateType: 'start'})

  const end = getSelectionDate({selected, onSelectionProgress, stateSelection, mode, dateType: 'end'})

  if (isValid(start) && isValid(end)) {
    return {start, end}
  } else {
    return EMPTY_RANGE
  }
}

export interface IGetMonthWeeks {
  activeMonth: Date
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
  minNumberOfWeeks?: number
}

export interface IMonthWeeks {
  weekStart: Date
  weekEnd: Date
  weekNumber: number
}

export const getMonthWeeks = ({activeMonth, minNumberOfWeeks, weekStartsOn}: IGetMonthWeeks): IMonthWeeks[] => {
  const startOfTheMonth = startOfWeek(startOfMonth(activeMonth), {weekStartsOn})
  const endOfTheMonth = endOfWeek(endOfMonth(activeMonth), {weekStartsOn})
  const startOfTheYear = startOfYear(activeMonth)
  const lengthNumber = minNumberOfWeeks || differenceInWeeks(endOfTheMonth, startOfTheMonth) + 1

  return Array.from(new Array(lengthNumber)).map((_, index) => {
    const weekStart = addWeeks(startOfTheMonth, index)

    return {
      weekStart,
      weekNumber: differenceInWeeks(weekStart, startOfTheYear) + 2,
      weekEnd: addDays(weekStart, 7),
    }
  })
}

interface IGetMaxDate extends IMinMaxDate {
  maxDate?: IDate
}

export const getMaxDate = ({maxDate, rangeLimit, selectionStart}: IGetMaxDate): IDate => {
  const calcEndDate = addDays(selectionStart, rangeLimit || 0)

  if (maxDate) {
    return isBefore(calcEndDate, maxDate) ? calcEndDate : maxDate
  } else {
    return calcEndDate
  }
}

interface IMinMaxDate {
  rangeLimit?: number
  selectionStart: Date
}

interface IGetMinDate extends IMinMaxDate {
  minDate?: IDate
}
export const getMinDate = ({rangeLimit, minDate, selectionStart}: IGetMinDate): IDate => {
  const calcStartDate = subDays(selectionStart, rangeLimit || 0)

  if (minDate) {
    return isBefore(minDate, calcStartDate) ? calcStartDate : minDate
  } else {
    return calcStartDate
  }
}

export interface IGetDayIsWeekend {
  day: Date
  // weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const getDayIsWeekend = ({day}: IGetDayIsWeekend) => {
  // TODO: Should respects the weekStartOn

  return isWeekend(day)
}

export interface IGetDayIsSame {
  date: IDate
  dateToCompare: IDate
}

export const getDayIsSame = ({date, dateToCompare}: IGetDayIsSame) => isSameDay(date, dateToCompare)

export interface IGetDayIsSelection {
  date: Date
  type?: 'start' | 'end'
  selection: IDate | ISelectionRange
}

export const getDayIsSelection = ({type, date, selection}: IGetDayIsSelection) => {
  const isRange = !isValid(selection as Date)

  if (!isRange) {
    return getDayIsSame({date1: selection as Date, date2: date})
  }

  const {start, end} = selection as ISelectionRange

  if (!type) {
    return isWithinRange(day, start, end)
  } else {
    return getDayIsSame({date1: type === 'start' ? (start as Date) : (end as Date), date2: day})
  }
}

export interface IGetDayIsDisabled {
  date: Date
  disabledIntervals?: IDateRange[]
}

export const getDayIsDisabled = ({date, disabledIntervals}: IGetDayIsDisabled) => {
  if (!disabledIntervals || !disabledIntervals.length) return false

  return disabledIntervals
    .map(({start, end}) => isWithinRange(startOfDay(date), startOfDay(start), startOfDay(end)))
    .includes(true)
}

export const getRangeIncludesDisabledInterval = ({start, end, disabledIntervals}) => {}

export interface IGetDayIsNextMonth {
  date: IDate
  activeMonth: IDate
}

export const getDayIsNextMonth = ({date, activeMonth}: IGetDayIsNextMonth) =>
  !isSameMonth(date, activeMonth) && isAfter(date, activeMonth)

export const getDayISOFormatter = (date: Date) => format(date, 'YYYY-MM-DD')

export const getMonthFormattedName = (date: Date) => format(date, 'MMMM YYYY')

interface IGetDayIsHighlighted {
  date: IDate
  startDay: IDate
  endDay: IDate
}

export const getDayIsHighlighted = ({date, startDay, endDay}: IGetDayIsHighlighted) =>
  isWithinRange(startOfDay(date), startOfDay(startDay), startOfDay(endDay))

interface IGetDayIsCurrentMonth {
  activeMonth: IDate
  date: IDate
}

export const getDayIsCurrentMonth = ({activeMonth, date}: IGetDayIsCurrentMonth) => isSameMonth(date, activeMonth)

interface IGetDayIsSelectable {
  date: IDate
  minDate: IDate
  maxDate: IDate
  disabledIntervals: IDateRange[]
}

export const getDayIsSelectable = ({date, minDate, maxDate, disabledIntervals}: IGetDayIsSelectable) => {
  if (getDayIsDisabled({date, disabledIntervals})) return false

  if (minDate && maxDate) {
    return isWithinRange(date, minDate, maxDate)
  } else if (minDate && !maxDate) {
    return isAfter(date, minDate) || isEqual(date, minDate)
  } else if (maxDate && !minDate) {
    return isBefore(date, maxDate) || isEqual(date, maxDate)
  } else {
    return true
  }
}

export const getDayEachDay = ({start, end}: IDateRange) => eachDay(start, end)

interface IGetMonth {
  date: IDate
  offsetInMonth: number
}

export const getMonth = ({date, offsetInMonth}: IGetMonth) => addMonths(date, offsetInMonth)

export const getIntervalsAsDate = (intervals?: IDateRange[]) => {
  if (!intervals || !intervals.length) return

  return intervals.map(({start, end}) => ({start: getAsDate(start), end: getAsDate(end)}))
}

export const getSelectedAsDate = (selected?: IDate | ISelectionRange) => {
  if (!selected) return

  if (!(selected as ISelectionRange).start) {
    return getAsDate(selected as IDate)
  } else {
    return {
      inProgress: (selected as ISelectionRange).inProgress || false,
      start: getAsDate((selected as ISelectionRange).start),
      end: getAsDate((selected as ISelectionRange).end),
    }
  }
}

export const getDayFormatted = (date: Date) => format(date, 'd')
