import * as Luxon from 'luxon'

export type CalendarSelectionI = CalendarSelectionRangeI | CalendarSelectionSingleI

export interface CalendarRangeSelectedDate extends CalendarSelectionRangeI {
  inProgress: boolean
}

export interface CalendarSelectionRangeI {
  start: Luxon.DateTime
  end: Luxon.DateTime
}

export type CalendarSelectionSingleI = Luxon.DateTime

export enum CalendarSelectionTypeEnum {
  start = 'start',
  end = 'end',
}

export enum CalendarTypeEnum {
  single = 'single',
  range = 'range',
}

export enum MonthHeaderButtonTypeEnum {
  next = 'next',
  prev = 'previous',
}

export enum NoticeTypeEnum {
  overlap = 'overlapping_with_disabled',
  disabled = 'disabled_day_click',
}
