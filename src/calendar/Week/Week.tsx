import React, { FC, SyntheticEvent } from 'react'

import { IDateRange, IWeekDayRenderProps, IWeekRenderProps } from '../../@types'
import WeekDay from '../WeekDay'

export type Props = {
  blockClassName: string
  customRender?: IWeekRenderProps
  getDayEachDay: ({ start, end }: IDateRange) => Date[]
  getDayFormatted: (date: Date) => string
  getDayIsCurrentMonth: (date: Date) => boolean
  getDayIsDisabled: (date: Date) => boolean
  getDayIsHighlighted: (date: Date) => boolean
  getDayIsNextMonth: (date: Date) => boolean
  getDayISOFormatter: (date: Date) => string
  getDayIsSelectable: (date: Date) => boolean
  getDayIsSelected: (date: Date) => boolean
  getDayIsSelectedEnd: (date: Date) => boolean
  getDayIsSelectedStart: (date: Date) => boolean
  getDayIsToday: (date: Date) => boolean
  getDayIsWeekend: (date: Date) => boolean
  handleOnDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDayMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDisabledDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDisabledDayMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
  renderWeekDay?: IWeekDayRenderProps
  weekEnd: Date
  weekNumber: number
  weekStart: Date
}

const Week: FC<Props> = (props) => {
  const {
    blockClassName,
    customRender,
    getDayEachDay,
    getDayFormatted,
    getDayIsCurrentMonth,
    getDayIsDisabled,
    getDayIsHighlighted,
    getDayIsNextMonth,
    getDayISOFormatter,
    getDayIsSelectable,
    getDayIsSelected,
    getDayIsSelectedEnd,
    getDayIsSelectedStart,
    getDayIsToday,
    getDayIsWeekend,
    handleOnDayClick,
    handleOnDayMouseEnter,
    handleOnDisabledDayClick,
    handleOnDisabledDayMouseEnter,
    renderWeekDay,
    weekEnd,
    weekNumber,
    weekStart,
  } = props

  const children = getDayEachDay({ start: weekStart, end: weekEnd }).map((day: Date) => {
    const date = getDayISOFormatter(day)
    const isCurrentMonth = getDayIsCurrentMonth(day)
    const isDisabled = getDayIsDisabled(day)
    const isNextMonth = !isCurrentMonth && getDayIsNextMonth(day)
    const isSelectable = getDayIsSelectable(day)
    const isWorkDay = !getDayIsWeekend(day)

    return (
      <WeekDay
        blockClassName={blockClassName}
        customRender={renderWeekDay}
        date={day}
        getDayFormatted={getDayFormatted}
        handleOnClick={isSelectable ? handleOnDayClick : handleOnDisabledDayClick}
        handleOnEnter={isSelectable ? handleOnDayMouseEnter : handleOnDisabledDayMouseEnter}
        isCurrentMonth={getDayIsCurrentMonth(day)}
        isDisabled={isDisabled}
        isHighlighted={getDayIsHighlighted(day)}
        isMonthNext={isNextMonth}
        isMonthPrev={!isCurrentMonth && !isNextMonth}
        isNonSelectable={!isSelectable}
        ISODate={date}
        isSelectable={isSelectable}
        isSelected={getDayIsSelected(day)}
        isSelectionEnd={getDayIsSelectedEnd(day)}
        isSelectionStart={getDayIsSelectedStart(day)}
        isToday={getDayIsToday(day)}
        isWeekend={!isWorkDay}
        isWorkday={isWorkDay}
        key={date}
      />
    )
  })

  if (customRender) {
    return customRender(props)
  }

  return (
    <div className={`${blockClassName}-week`}>
      <div className={`${blockClassName}-week_number`}>{weekNumber}</div>
      <div className={`${blockClassName}-week_days`}>{children}</div>
    </div>
  )
}

Week.displayName = 'Week'

export default Week
