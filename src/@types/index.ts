import { ComponentProps, ReactElement, ReactNode, SyntheticEvent } from 'react'

import { Props as CalendarProps } from '../calendar/calendar'
import { Props as DaysOfWeekProps } from '../calendar/days_of_week'
import { Props as MonthHeaderProps } from '../calendar/month_header'
import { Props as MonthProps } from '../calendar/month'
import { Props as NoticeProps } from '../calendar/notice'
import { Props as WeekProps } from '../calendar/week'
import Day from '../RenderPropsComponents/Day'
import DayOfWeek from '../RenderPropsComponents/DayOfWeek'

export type INoticeType =
  | 'overlapping_with_disabled'
  | 'disabled_day_click'
  | null

export type IDateSelection = 'start' | 'end'

export type IDate = Date | number | string

export type ISelectionRange = {
  start: IDate
  end: IDate
  inProgress?: boolean
}

type IChildren = {
  children: ReactNode
}

export type RenderPropsDay = (Props: ComponentProps<typeof Day>) => ReactElement
export type RenderPropsDayOfWeek = (Props: ComponentProps<typeof DayOfWeek>) => ReactElement

export type HandleOnDayClick = (
  event: SyntheticEvent<HTMLButtonElement>
) => void
export type HandleOnDayEnter = (
  event: SyntheticEvent<HTMLButtonElement>
) => void

export type OnDayClick = (event: SyntheticEvent<HTMLButtonElement>) => void
export type OnDayMouseEnter = (event: SyntheticEvent<HTMLButtonElement>) => void
export type OnDisabledDayClick = HandleOnDayClick
/**
 * Render Props Interface
 */
interface ICalendarRenderPropArgs extends CalendarProps, IChildren { }
export type ICalendarRenderProp = (
  Props: ICalendarRenderPropArgs
) => ReactElement

interface IMonthRenderPropsArgs extends MonthProps, IChildren { }
export type IMonthRenderProps = (Props: IMonthRenderPropsArgs) => ReactElement

interface IWeekRenderPropsArgs extends WeekProps, IChildren { }
export type IWeekRenderProps = (Props: IWeekRenderPropsArgs) => ReactElement

interface IDaysOfWeekRenderPropsArgs extends DaysOfWeekProps, IChildren { }
export type IDaysOfWeekRenderProps = (
  Props: IDaysOfWeekRenderPropsArgs
) => ReactElement

interface IMonthHeaderRenderPropsArgs extends MonthHeaderProps {
  prevEnabled: boolean
  nextEnabled: boolean
  switchMonth: (offset: -1 | 1) => void
  children: string
}
export type IMonthHeaderRenderProps = (
  Props: IMonthHeaderRenderPropsArgs
) => ReactElement

interface INoticeRenderPropsArgs extends NoticeProps, IChildren { }
export type INoticeRenderProps = (Props: INoticeRenderPropsArgs) => ReactElement
