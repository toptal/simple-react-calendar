import { ReactElement } from 'react'

import { Props as CalendarProps } from '../calendar/Calendar/Calendar'
import { Props as MonthProps } from '../calendar/Month/Month'
import { Props as MonthHeaderProps } from '../calendar/MonthHeader/MonthHeader'
import { Props as MonthHeaderButtonProps } from '../calendar/MonthHeaderButton/MonthHeaderButton'
import { Props as MonthHeaderDayProps } from '../calendar/MonthHeaderDay/MonthHeaderDay'
import { Props as NoticeProps } from '../calendar/Notice/Notice'
import { Props as WeekProps } from '../calendar/Week/Week'
import { Props as WeekDayProps } from '../calendar/WeekDay/WeekDay'

export type INoticeType = 'overlapping_with_disabled' | 'disabled_day_click' | null

export type IDateSelection = 'start' | 'end'

export type IDate = Date | number | string

export interface ISelectionRange {
  start?: Date
  end?: Date
  inProgress?: boolean
}

export type IDateRange = {
  start: Date
  end: Date
}

/**
 * Render Props Interface
 */
export type ICalendarRenderProp = (Props: CalendarProps) => ReactElement
export type IMonthRenderProps = (Props: MonthProps) => ReactElement
export type IMonthHeaderRenderProps = (Props: MonthHeaderProps) => ReactElement
export type IMonthHeaderButtonRenderProps = (Props: MonthHeaderButtonProps) => ReactElement
export type IMonthHeaderDayRenderProps = (Props: MonthHeaderDayProps) => ReactElement
export type INoticeRenderProps = (Props: NoticeProps) => ReactElement
export type IWeekRenderProps = (Props: WeekProps) => ReactElement
export type IWeekDayRenderProps = (Props: WeekDayProps) => ReactElement
