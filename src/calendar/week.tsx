import React, { Component } from 'react'
import eachDay from 'date-fns/each_day'
import endOfWeek from 'date-fns/end_of_week'
import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'
import isEqual from 'date-fns/is_equal'
import isSameDay from 'date-fns/is_same_day'
import isSameMonth from 'date-fns/is_same_month'
import isWeekend from 'date-fns/is_weekend'
import isWithinRange from 'date-fns/is_within_range'
import startOfDay from 'date-fns/start_of_day'
import startOfWeek from 'date-fns/start_of_week'

import { GetDayFormatted, GetISODate } from '../helper'
import {
  IDate,
  IWeekRenderProps,
  OnDayClick,
  OnDayMouseEnter,
  OnDisabledDayClick,
  RenderPropsDay
} from '../@types'

export type Props = {
  activeMonth: IDate
  blockClassName: string
  customRender?: IWeekRenderProps
  date: IDate
  disabledIntervals?: {
    start: IDate
    end: IDate
  }[]
  highlightedEnd?: IDate
  highlightedStart?: IDate
  maxDate?: IDate
  minDate?: IDate
  onDayClick: OnDayClick
  onDayMouseEnter: OnDayMouseEnter
  onDisabledDayClick: OnDisabledDayClick
  renderDay: RenderPropsDay
  getDayFormatted: GetDayFormatted
  getISODate: GetISODate
  selectedMax?: IDate
  selectedMin?: IDate
  today: IDate
  weekStartsOn: number
}

// TODO: FC Rewrite
/* eslint-disable react/require-optimization */
export default class Week extends Component<Props, {}> {
  _dateSelectable(date: Date) {
    const { minDate, maxDate } = this.props

    if (this._dateDisabled(date)) {
      return false
    }

    if (minDate && maxDate) {
      return isWithinRange(date, minDate, maxDate)
    } else if (minDate && !maxDate) {
      return isAfter(date, minDate) || isEqual(date, minDate)
    } else if (maxDate && !minDate) {
      return isBefore(date, maxDate) || isEqual(date, maxDate)
    }
    return true
  }

  _dateSelected(date: Date) {
    const { selectedMin, selectedMax } = this.props

    return Boolean(
      selectedMin &&
      selectedMax &&
      isWithinRange(
        startOfDay(date),
        startOfDay(selectedMin),
        startOfDay(selectedMax)
      )
    )
  }

  _dateHighlighted(date: Date) {
    const { highlightedStart, highlightedEnd } = this.props

    if (!highlightedStart || !highlightedEnd) return false

    return isWithinRange(
      startOfDay(date),
      startOfDay(highlightedStart),
      startOfDay(highlightedEnd)
    )
  }

  _dateDisabled(date: Date | string) {
    let dateDisabled
    const { disabledIntervals } = this.props

    if (!disabledIntervals) return false

    for (let i = 0; i < disabledIntervals.length; i++) {
      const { start, end } = disabledIntervals[i]

      dateDisabled = isWithinRange(
        startOfDay(date),
        startOfDay(start),
        startOfDay(end)
      )

      if (dateDisabled) {
        return dateDisabled
      }
    }

    return false
  }

  _renderDays() {
    const {
      date,
      today,
      onDayClick,
      onDisabledDayClick,
      onDayMouseEnter,
      getISODate,
      getDayFormatted,
      blockClassName,
      activeMonth,
      selectedMax,
      selectedMin,
      weekStartsOn,
      renderDay
    } = this.props
    const start = startOfWeek(date, { weekStartsOn })
    const end = endOfWeek(date, { weekStartsOn })

    return eachDay(start, end).map(day => {
      const date = getISODate(day)
      const isSelectable = this._dateSelectable(day)
      const isDisabled = this._dateDisabled(date)
      const isWorkDay = !isWeekend(date)
      const isCurrentMonth = isSameMonth(date, activeMonth)
      const isNextMonth = !isCurrentMonth && isAfter(date, activeMonth)

      return renderDay({
        ISODate: getISODate(day),
        blockClassName,
        date: day,
        getDayFormatted,
        handleOnClick: isSelectable
          ? onDayClick
          : isDisabled
            ? onDisabledDayClick
            : () => { },
        handleOnEnter: isSelectable ? onDayMouseEnter : () => { },
        isCurrentMonth,
        isDisabled,
        isHighlighted: this._dateHighlighted(day),
        isMonthNext: isNextMonth,
        isMonthPrev: !isCurrentMonth && !isNextMonth,
        isNonSelectable: !isSelectable,
        isSelectable,
        isSelected: this._dateSelected(day),
        isSelectionEnd: Boolean(selectedMax && isSameDay(selectedMax, day)),
        isSelectionStart: Boolean(selectedMin && isSameDay(selectedMin, day)),
        isToday: isSameDay(today, day),
        isWeekend: !isWorkDay,
        isWorkDay,
        key: getISODate(day)
      })
    })
  }

  render() {
    const { customRender, blockClassName } = this.props
    const children = this._renderDays()

    if (customRender) {
      return customRender({
        ...this.props,
        children
      })
    }

    return <div className={`${blockClassName}-week`}>{children}</div>
  }
}
