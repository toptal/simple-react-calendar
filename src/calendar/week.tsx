import { FC } from 'react'

import {
  GetDayEachDay,
  GetDayISOFormatter,
  GetDayIsCurrentMonth,
  GetDayIsDisabled,
  GetDayIsHighlighted,
  GetDayIsNextMonth,
  GetDayIsSelectable,
  GetDayIsSelected,
  GetDayIsSelectedEnd,
  GetDayIsSelectedStart,
  GetDayIsToday,
  GetDayIsWeekend
} from '../helper'
import {
  OnDayClick,
  OnDayMouseEnter,
  OnDisabledDayClick,
  RenderPropsDay,
  RenderPropsWeek
} from '../@types'

interface Props {
  blockClassName: string
  customRender: RenderPropsWeek
  getDayEachDay: GetDayEachDay
  getDayFormatted: GetDayISOFormatter
  getDayIsCurrentMonth: GetDayIsCurrentMonth
  getDayIsDisabled: GetDayIsDisabled
  getDayIsHighlighted: GetDayIsHighlighted
  getDayIsNextMonth: GetDayIsNextMonth
  getDayISOFormatter: GetDayISOFormatter
  getDayIsSelectable: GetDayIsSelectable
  getDayIsSelected: GetDayIsSelected
  getDayIsSelectedEnd: GetDayIsSelectedEnd
  getDayIsSelectedStart: GetDayIsSelectedStart
  getDayIsToday: GetDayIsToday
  getDayIsWeekend: GetDayIsWeekend
  onDayClick: OnDayClick
  onDayMouseEnter: OnDayMouseEnter
  onDisabledDayClick: OnDisabledDayClick
  renderDay: RenderPropsDay
  weekEnd: Date
  weekNumber: number
  weekStart: Date
}

const Week: FC<Props> = ({
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
  onDayClick,
  onDayMouseEnter,
  onDisabledDayClick,
  renderDay,
  weekEnd,
  weekNumber,
  weekStart
}) => {
  const eachDayOfWeek = getDayEachDay({ end: weekEnd, start: weekStart })
  const children = eachDayOfWeek.map(day => {
    const isoDate = getDayISOFormatter(day)
    const isCurrentMonth = getDayIsCurrentMonth(day)
    const isDisabled = getDayIsDisabled(day)
    const isNextMonth = !isCurrentMonth && getDayIsNextMonth(day)
    const isSelectable = getDayIsSelectable(day)
    const isWorkDay = !getDayIsWeekend(day)
    const handleOnClick = isSelectable
      ? onDayClick
      : isDisabled
      ? onDisabledDayClick
      : () => {}

    return renderDay({
      ISODate: isoDate,
      blockClassName,
      date: day,
      getDayFormatted,
      handleOnClick,
      handleOnEnter: isSelectable ? onDayMouseEnter : () => {},
      isCurrentMonth,
      isDisabled,
      isHighlighted: getDayIsHighlighted(day),
      isMonthNext: isNextMonth,
      isMonthPrev: !isCurrentMonth && !isNextMonth,
      isNonSelectable: !isSelectable,
      isSelectable,
      isSelected: getDayIsSelected(day),
      isSelectionEnd: getDayIsSelectedEnd(day),
      isSelectionStart: getDayIsSelectedStart(day),
      isToday: getDayIsToday(day),
      isWeekend: !isWorkDay,
      isWorkDay,
      key: isoDate
    })
  })

  return customRender({
    blockClassName,
    children,
    weekNumber
  })
}

export default Week
