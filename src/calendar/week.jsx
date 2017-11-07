import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Day from './day'
import {BLOCK_CLASS_NAME} from './consts'
import {DAYS_IN_WEEK} from './consts'
import {datePropType} from './_lib'

import eachDay from 'date-fns/each_day'
import startOfDay from 'date-fns/start_of_day'
import startOfWeek from 'date-fns/start_of_week'
import endOfWeek from 'date-fns/end_of_week'
import isWithinRange from 'date-fns/is_within_range'
import format from 'date-fns/format'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import isEqual from 'date-fns/is_equal'
import isWeekend from 'date-fns/is_weekend'
import isSameDay from 'date-fns/is_same_day'
import isSameMonth from 'date-fns/is_same_month'

export default class Week extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: PropTypes.string,
    data: PropTypes.object,
    date: datePropType.isRequired,
    disabledIntervals: PropTypes.arrayOf(PropTypes.shape({
      start: datePropType.isRequired,
      end: datePropType.isRequired,
    })),
    highlightedEnd: datePropType,
    highlightedStart: datePropType,
    maxDate: datePropType,
    minDate: datePropType,
    onDayClick: PropTypes.func.isRequired,
    onDayMouseMove: PropTypes.func.isRequired,
    onDisabledDayClick: PropTypes.func.isRequired,
    selectedMax: datePropType,
    selectedMin: datePropType,
    today: datePropType.isRequired,
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK)
  }

  static defaultProps = {
    data: {},
    blockClassName: BLOCK_CLASS_NAME
  }

  _dateSelectable(date) {
    const {minDate, maxDate} = this.props

    if (this._dateDisabled(date)) {
      return false
    }

    if (minDate && maxDate) {
      return isWithinRange(date, minDate, maxDate)
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
    return (selectedMin && selectedMax)
      && isWithinRange(
        startOfDay(date),
        startOfDay(selectedMin),
        startOfDay(selectedMax)
      )
  }

  _dateHighlighted(date) {
    const {highlightedStart, highlightedEnd} = this.props
    if (!highlightedStart || !highlightedEnd) return false

    return isWithinRange(
      startOfDay(date),
      startOfDay(highlightedStart),
      startOfDay(highlightedEnd)
    )
  }

  _dateDisabled(date) {
    let dateDisabled
    const {disabledIntervals} = this.props
    if (!disabledIntervals) return false

    for (let i = 0; i < disabledIntervals.length; i++) {
      const {start, end} = disabledIntervals[i]

      dateDisabled = isWithinRange(startOfDay(date), startOfDay(start), startOfDay(end))

      if (dateDisabled) {
        return dateDisabled
      }
    }

    return false
  }

  _dateClasses(date) {
    const {today, activeMonth, selectedMax, selectedMin} = this.props

    return classnames({
      'is-selected': this._dateSelected(date),
      'is-highlighted': this._dateHighlighted(date),
      'is-disabled': this._dateDisabled(date),
      'is-today': isSameDay(today, date),
      'is-current_month': isSameMonth(date, activeMonth),
      'is-start_selection': selectedMin && isSameDay(selectedMin, date),
      'is-end_selection': selectedMax && isSameDay(selectedMax, date),
      'is-prev_month': (date.getMonth() !== activeMonth.getMonth() && isBefore(date, activeMonth)),
      'is-next_month': (date.getMonth() !== activeMonth.getMonth() && isAfter(date, activeMonth)),
      [isWeekend(date) ? 'is-weekend' : 'is-working_day']: true,
      [this._dateSelectable(date) ? 'is-selectable' : 'is-not_selectable']: true
    })
  }

  render() {
    return (
      <div className={`${this.props.blockClassName}-week`}>
        {this._renderDays()}
      </div>
    )
  }

  _renderDays() {
    const {date, today, onDayClick, onDisabledDayClick, onDayMouseMove, blockClassName, weekStartsOn} = this.props
    const start = startOfWeek(date, {weekStartsOn})
    const end = endOfWeek(date, {weekStartsOn})
    return eachDay(start, end).map((day) => {
      const data = this.props.data[format(day, 'YYYY-MM-DD')]
      const selectable = this._dateSelectable(day)
      const disabled = this._dateDisabled(day)

      let onClick
      if (selectable) {
        onClick = onDayClick
      } else if (disabled) {
        onClick = onDisabledDayClick
      }

      return (
        <Day
          blockClassName={blockClassName}
          key={day.getTime()}
          date={day}
          data={data}
          className={this._dateClasses(day, data)}
          today={today}
          onClick={onClick}
          onMouseMove={selectable ? onDayMouseMove : null}
        />
      )
    })
  }
}
