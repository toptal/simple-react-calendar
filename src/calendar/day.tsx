import cx from 'classnames'
import formatDate from 'date-fns/format'
import React, { FC, SyntheticEvent } from 'react'

import { IDayRenderProps } from '../@types'

export interface Props {
  blockClassName: string
  customRender?: IDayRenderProps
  date: string
  handleOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnEnter?: (event: SyntheticEvent<HTMLButtonElement>) => void
  isCurrentMonth: boolean
  isDisabled: boolean
  isHighlighted: boolean
  isMonthNext: boolean
  isMonthPrev: boolean
  isNonSelectable: boolean
  isSelectable: boolean
  isSelected: boolean
  isSelectionEnd: boolean
  isSelectionStart: boolean
  isToday: boolean
  isWeekend: boolean
  isWorkday: boolean
}

const Day: FC<Props> = (props) => {
  const {
    blockClassName,
    customRender,
    date,
    // TODO: rename methods to onCick, onEnter
    handleOnClick,
    handleOnEnter,
    isCurrentMonth,
    isDisabled,
    isHighlighted,
    // TODO: rename to isNextMonth, isPrevMonth
    isMonthNext,
    isMonthPrev,
    isNonSelectable,
    isSelectable,
    isSelected,
    isSelectionEnd,
    isSelectionStart,
    isToday,
    isWeekend,
    isWorkday,
  } = props
  const children = formatDate(date, 'D')

  if (customRender) {
    return customRender({
      ...props,
      // TODO: remove this and leave it to the passed function to format the date in the desired format
      children,
    })
  }

  return (
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
      value={date}
      type='button'
    >
      {children}
    </button>
  )
}

export default Day
