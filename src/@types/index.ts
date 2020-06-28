import { ComponentProps, ReactElement, ReactNode, SyntheticEvent } from 'react'

import { Props as CalendarProps } from '../calendar/calendar'
import { Props as MonthProps } from '../calendar/month'
import Day from '../RenderPropsComponents/Day'
import DayOfWeek from '../RenderPropsComponents/DayOfWeek'
import DaysOfWeek from '../RenderPropsComponents/DaysOfWeek'
import Notice from '../RenderPropsComponents/Notice'
import MonthHeader from '../RenderPropsComponents/MonthHeader'
import Week from '../RenderPropsComponents/Week'

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
export type RenderPropsDayOfWeek = (
  Props: ComponentProps<typeof DayOfWeek>
) => ReactElement
export type RenderPropsDaysOfWeek = (
  Props: ComponentProps<typeof DaysOfWeek>
) => ReactElement
export type RenderPropsNotice = (
  Props: ComponentProps<typeof Notice>
) => ReactElement
export type RenderPropsMonthHeader = (
  Props: ComponentProps<typeof MonthHeader>
) => ReactElement
export type RenderPropsWeek = (
  Props: ComponentProps<typeof Week>
) => ReactElement

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
