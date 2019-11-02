import cx from 'classnames'
import React, { FC, SyntheticEvent } from 'react'

import { IWeekDayRenderProps } from '../../@types'

export interface Props {
  blockClassName: string
  customRender?: IWeekDayRenderProps
  date: Date
  getDayFormatted: (date: Date) => string
  handleOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
  isCurrentMonth: boolean
  isDisabled: boolean
  isHighlighted: boolean
  isMonthNext: boolean
  isMonthPrev: boolean
  isNonSelectable: boolean
  ISODate: string
  isSelectable: boolean
  isSelected: boolean
  isSelectionEnd: boolean
  isSelectionStart: boolean
  isToday: boolean
  isWeekend: boolean
  isWorkday: boolean
}

const WeekDay: FC<Props> = (props) => {
  const {
    blockClassName,
    customRender,
    date,
    getDayFormatted,
    handleOnClick,
    handleOnEnter,
    isCurrentMonth,
    isDisabled,
    isHighlighted,
    isMonthNext,
    isMonthPrev,
    isNonSelectable,
    ISODate,
    isSelectable,
    isSelected,
    isSelectionEnd,
    isSelectionStart,
    isToday,
    isWeekend,
    isWorkday,
  } = props

  if (customRender) {
    return customRender(props)
  }

  return (
    <div className={`${blockClassName}-day_wrapper`}>
      <button
        className={cx(`${blockClassName}-day`, {
          'is-current_month': isCurrentMonth,
          'is-disabled': isDisabled,
          'is-end_selection': isSelectionEnd,
          'is-highlighted': isHighlighted,
          'is-next_month': isMonthNext,
          'is-not_selectable': isNonSelectable,
          'is-prev_month': isMonthPrev,
          'is-selectable': isSelectable,
          'is-selected': isSelected,
          'is-start_selection': isSelectionStart,
          'is-today': isToday,
          'is-weekend': isWeekend,
          'is-working_day': isWorkday,
        })}
        onClick={handleOnClick}
        onMouseEnter={handleOnEnter}
        type='button'
        value={ISODate}
      >
        {getDayFormatted(date)}
      </button>
    </div>
  )
}

WeekDay.displayName = 'WeekDay'

export default WeekDay
