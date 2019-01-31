import cx from 'classnames'
import * as Luxon from 'luxon'
import * as React from 'react'

import {getEachDayOfInterval, isAfter, isBefore, isIntervalContains, isSameDate, isSameMonth, isWeekend} from '../_lib'
import Day from '../day'

export interface WeekProps {
  activeMonth: Luxon.DateTime
  blockClassName: string
  disabledIntervals?: {
    start: Luxon.DateTime
    end: Luxon.DateTime
  }[]
  highlightedEnd?: Luxon.DateTime
  highlightedStart?: Luxon.DateTime
  maxDate?: Luxon.DateTime
  minDate?: Luxon.DateTime
  onDayClick(date: Luxon.DateTime): void
  onDayMouseEnter(date: Luxon.DateTime): void
  onDisabledDayClick(date: Luxon.DateTime): void
  selectedMax?: Luxon.DateTime
  selectedMin?: Luxon.DateTime
  startOfWeek: Luxon.DateTime
  today: Luxon.DateTime
}

export default class Week extends React.PureComponent<WeekProps, any> {
  private isSelectable(date: Luxon.DateTime): boolean {
    const {minDate, maxDate} = this.props

    if (this.isDateDisabled(date)) {
      return false
    }

    if (minDate && maxDate) {
      return isIntervalContains(date, {start: minDate, end: maxDate})
    } else if (minDate && !maxDate) {
      return isAfter(date, minDate) || isSameDate(date, minDate)
    } else if (maxDate && !minDate) {
      return isBefore(date, maxDate) || isSameDate(date, maxDate)
    } else {
      return true
    }
  }

  private isDateSelected(date: Luxon.DateTime): boolean {
    const {selectedMin, selectedMax} = this.props

    return Boolean(selectedMin && selectedMax && isIntervalContains(date, {start: selectedMin, end: selectedMax}))
  }

  private isDateHighlighted(date: Luxon.DateTime): boolean {
    const {highlightedStart, highlightedEnd} = this.props

    if (!highlightedStart || !highlightedEnd) return false

    return isIntervalContains(date.startOf('day'), {
      start: highlightedStart.startOf('day'),
      end: highlightedEnd.startOf('day'),
    })
  }

  private isDateDisabled(date: Luxon.DateTime): boolean {
    const {disabledIntervals} = this.props

    if (!disabledIntervals) return false

    let dateDisabled

    for (let i = 0; i < disabledIntervals.length; i++) {
      dateDisabled = isIntervalContains(date.startOf('day'), disabledIntervals[i])

      if (dateDisabled) {
        return dateDisabled
      }
    }

    return false
  }

  private getDateClasses(date: Luxon.DateTime): string {
    const {today, activeMonth, selectedMax, selectedMin} = this.props
    const sameMonth = isSameMonth(date, activeMonth)

    return cx({
      'is-current_month': sameMonth,
      'is-disabled': this.isDateDisabled(date),
      'is-end_selection': selectedMax && isSameDate(selectedMax, date),
      'is-highlighted': this.isDateHighlighted(date),
      'is-next_month': !sameMonth && isAfter(date, activeMonth),
      'is-prev_month': !sameMonth && isBefore(date, activeMonth),
      'is-selected': this.isDateSelected(date),
      'is-start_selection': selectedMin && isSameDate(selectedMin, date),
      'is-today': isSameDate(today, date),
      [isWeekend(date) ? 'is-weekend' : 'is-working_day']: true,
      [this.isSelectable(date) ? 'is-selectable' : 'is-not_selectable']: true,
    })
  }

  private getWeekDateRange(startOfWeek: Luxon.DateTime): Luxon.DateTime[] {
    return getEachDayOfInterval({start: startOfWeek, end: startOfWeek.endOf('week')})
  }

  handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.props.onDayClick(Luxon.DateTime.fromISO(event.currentTarget.value))
  }

  handleOnMouseEnter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.props.onDayMouseEnter(Luxon.DateTime.fromISO(event.currentTarget.value))
  }

  handleOnDisabledClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.props.onDisabledDayClick(Luxon.DateTime.fromISO(event.currentTarget.value))
  }

  render() {
    const {startOfWeek, blockClassName} = this.props

    return (
      <div className={`${this.props.blockClassName}-week`}>
        {this.getWeekDateRange(startOfWeek).map((day: Luxon.DateTime) => {
          const isDaySelectable = this.isSelectable(day)
          const isDayDisabled = this.isDateDisabled(day)

          return (
            <Day
              blockClassName={blockClassName}
              key={day.toISODate()}
              date={day}
              className={this.getDateClasses(day)}
              handleOnClick={this.handleOnClick}
              handleOnMouseEnter={isDaySelectable ? this.handleOnMouseEnter : undefined}
              handleOnDisabledClick={this.handleOnDisabledClick}
              isDisabled={isDayDisabled}
            />
          )
        })}
      </div>
    )
  }
}
