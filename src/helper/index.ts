import eachDay from 'date-fns/each_day'
import formatDate from 'date-fns/format'

export interface DateRange {
  start: Date
  end: Date
}

export type GetISODate = (date: Date) => string
export const getISODate = (date: Date) => formatDate(date, 'YYYY-MM-DD')

export type GetDayISOFormatter = (date: Date) => string
export const getDayISOFormatter = (date: Date) => formatDate(date, 'D')

export type GetDayEachDay = (dates: DateRange) => Date[]
export const getDayEachDay = ({ start, end }: DateRange) => eachDay(start, end)

export type GetDayIsCurrentMonth = () => boolean
export const getDayIsCurrentMonth = () => {}

export type GetDayIsDisabled = () => boolean
export const getDayIsDisabled = () => {}

export type GetDayIsHighlighted = () => boolean
export const getDayIsHighlighted = () => {}

export type GetDayIsNextMonth = () => boolean
export const getDayIsNextMonth = () => {}
export type GetDayIsCurrentMonth = () => boolean
export const getDayIsCurrentMonth = () => {}
export type GetDayIsCurrentMonth = () => boolean
export const getDayIsCurrentMonth = () => {}

export type GetDayIsCurrentMonth = () => boolean
export const getDayIsCurrentMonth = () => {}

export type GetDayIsCurrentMonth = () => boolean
export const getDayIsCurrentMonth = () => {}
