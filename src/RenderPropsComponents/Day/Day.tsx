import React, { FC } from 'react'
import cx from 'classnames'

import * as helper from '../../helper'
import { HandleOnDayClick, HandleOnDayEnter } from '../../@types'

interface Props {
  blockClassName: string
  date: Date
  getDayFormatted: typeof helper.getDayFormatted
  handleOnClick: HandleOnDayClick
  handleOnEnter: HandleOnDayEnter
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
  isWorkDay: boolean
  key?: string
}

const Day: FC<Props> = ({
  blockClassName,
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
  isWorkDay
}) => (
  <button
    data-simple-react-calendar-day={ISODate}
    className={cx(`${blockClassName}-week-day`, {
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
      'is-working_day': isWorkDay
    })}
    onClick={handleOnClick}
    onMouseEnter={handleOnEnter}
    type='button'
    value={ISODate}
    tabIndex={isNonSelectable ? -1 : 0}
  >
    {getDayFormatted(date)}
  </button>
)

Day.displayName = 'Day'

export default Day
