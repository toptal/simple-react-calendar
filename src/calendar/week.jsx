import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import isAfter from 'date-fns/isAfter'
import isBefore from 'date-fns/isBefore'
import isEqual from 'date-fns/isEqual'
import isSameDay from 'date-fns/isSameDay'
import isSameMonth from 'date-fns/isSameMonth'
import isWeekend from 'date-fns/isWeekend'
import isWithinInterval from 'date-fns/isWithinInterval'
import startOfDay from 'date-fns/startOfDay'
import startOfWeek from 'date-fns/startOfWeek'
import PropTypes from 'prop-types'
import React from 'react'

import {datePropType} from './_lib'
import {DAYS_IN_WEEK} from './consts'
import Day from './day'

export default class Week extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: PropTypes.string.isRequired,
    customRender: PropTypes.func,
    date: datePropType.isRequired,
    disabledIntervals: PropTypes.arrayOf(
      PropTypes.shape({
        start: datePropType.isRequired,
        end: datePropType.isRequired,
      })
    ),
    highlightedEnd: datePropType,
    highlightedStart: datePropType,
    maxDate: datePropType,
    minDate: datePropType,
    onDayClick: PropTypes.func.isRequired,
    onDayMouseEnter: PropTypes.func.isRequired,
    onDisabledDayClick: PropTypes.func.isRequired,
    renderDay: PropTypes.func,
    selectedMax: datePropType,
    selectedMin: datePropType,
    today: datePropType.isRequired,
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK),
  }

  _dateSelectable(date) {
    const {minDate, maxDate} = this.props

    if (this._dateDisabled(date)) {
      return false
    }

    if (minDate && maxDate) {
      return isWithinInterval(date, minDate, maxDate)
    } else if (minDate && !maxDate) {
      return isAfter(date, minDate) || isEqual(date, minDate)
    } else if (maxDate && !minDate) {
      return isBefore(date, maxDate) || isEqual(date, maxDate)
    } else {
      return true
    }
  }

  _dateSelected(date) {
    const {selectedMin, selectedMax} = this.props
    return Boolean(
      selectedMin && selectedMax && isWithinInterval(startOfDay(date), startOfDay(selectedMin), startOfDay(selectedMax))
    )
  }

  _dateHighlighted(date) {
    const {highlightedStart, highlightedEnd} = this.props
    if (!highlightedStart || !highlightedEnd) return false

    return isWithinInterval(startOfDay(date), {start: startOfDay(highlightedStart), end: startOfDay(highlightedEnd)})
  }

  _dateDisabled(date) {
    let dateDisabled
    const {disabledIntervals} = this.props
    if (!disabledIntervals) return false

    for (let i = 0; i < disabledIntervals.length; i++) {
      const {start, end} = disabledIntervals[i]

      dateDisabled = isWithinInterval(startOfDay(date), {start: startOfDay(start), end: startOfDay(end)})

      if (dateDisabled) {
        return dateDisabled
      }
    }

    return false
  }

  render() {
    const {customRender} = this.props
    const children = this._renderDays()

    if (customRender) {
      return customRender({
        ...this.props,
        children
      })
    }

    return <div className={`${this.props.blockClassName}-week`}>{children}</div>
  }

  _renderDays() {
    const {
      date,
      today,
      onDayClick,
      onDisabledDayClick,
      onDayMouseEnter,
      blockClassName,
      activeMonth,
      selectedMax,
      selectedMin,
      weekStartsOn,
      renderDay,
    } = this.props
    const start = startOfWeek(date, {weekStartsOn})
    const end = endOfWeek(date, {weekStartsOn})

    return eachDayOfInterval({start, end}).map((day) => {
      consoel.log(day)
      debugger
      const date = format(day, 'yyyy-MM-dd')
      const isSelectable = this._dateSelectable(day)
      const isDisabled = this._dateDisabled(date)
      const isWorkDay = !isWeekend(day)
      const isCurrentMonth = isSameMonth(day, activeMonth)
      const isNextMonth = !isCurrentMonth && isAfter(day, activeMonth)

      return (
        <Day
          customRender={renderDay}
          blockClassName={blockClassName}
          date={date}
          handleOnClick={isSelectable ? onDayClick : isDisabled ? onDisabledDayClick : null}
          handleOnEnter={isSelectable ? onDayMouseEnter : null}
          isCurrentMonth={isCurrentMonth}
          isDisabled={isDisabled}
          isHighlighted={this._dateHighlighted(day)}
          isMonthNext={isNextMonth}
          isMonthPrev={!isCurrentMonth && !isNextMonth}
          isNonSelectable={!isSelectable}
          isSelectable={isSelectable}
          isSelected={this._dateSelected(day)}
          isSelectionEnd={Boolean(selectedMax && isSameDay(selectedMax, day))}
          isSelectionStart={Boolean(selectedMin && isSameDay(selectedMin, day))}
          isToday={isSameDay(today, day)}
          isWeekend={!isWorkDay}
          isWorkday={isWorkDay}
          key={date}
        />
      )
    })
  }
}
