import cx from 'classnames'
import formatDate from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'

const Day = (props) => {
  const {
    blockClassName,
    date,
    handleOnClick,
    handleOnEnter,
    isCurrentMonth,
    isDisabled,
    isHighlighted,
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
    customRender
  } = props
  const children = formatDate(date, 'D')

  if (customRender) {
    return customRender({
      ...props,
      children
    })
  }

  return <button
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
  >
    {children}
  </button>
}

Day.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  customRender: PropTypes.func,
  date: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
  handleOnEnter: PropTypes.func,
  isCurrentMonth: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  isMonthNext: PropTypes.bool.isRequired,
  isMonthPrev: PropTypes.bool.isRequired,
  isNonSelectable: PropTypes.bool.isRequired,
  isSelectable: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isSelectionEnd: PropTypes.bool.isRequired,
  isSelectionStart: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
  isWeekend: PropTypes.bool.isRequired,
  isWorkday: PropTypes.bool.isRequired
}

export default Day
