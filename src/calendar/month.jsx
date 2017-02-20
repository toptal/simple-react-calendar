import React from 'react'

import Week from './week'
import DaysOfWeek from './days_of_week'
import {BLOCK_CLASS_NAME} from './consts'
import {datePropType} from './_lib'

import startOfWeek from 'date-fns/start_of_week'
import endOfWeek from 'date-fns/end_of_week'
import isWithinRange from 'date-fns/is_within_range'
import eachDay from 'date-fns/each_day'
import areRangesOverlapping from 'date-fns/are_ranges_overlapping'
import startOfMonth from 'date-fns/start_of_month'
import endOfMonth from 'date-fns/end_of_month'
import isBefore from 'date-fns/is_before'
import isEqual from 'date-fns/is_equal'
import addDays from 'date-fns/add_days'
import subDays from 'date-fns/sub_days'
import isSameDay from 'date-fns/is_same_day'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'

const SINGLE_MODE = 'single'
const RANGE_MODE = 'range'

export default class Month extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: React.PropTypes.string,
    disableDaysOfWeek: React.PropTypes.bool,
    disabledIntervals: React.PropTypes.arrayOf(React.PropTypes.shape({
      start: datePropType.isRequired,
      end: datePropType.isRequired,
    })),
    highlightedEnd: datePropType,
    highlightedStart: datePropType,
    maxDate: datePropType,
    minDate: datePropType,
    minNumberOfWeeks: React.PropTypes.number,
    mode: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDayHover: React.PropTypes.func,
    onNoticeChange: React.PropTypes.func.isRequired,
    rangeLimit: React.PropTypes.number,
    selectedMax: datePropType,
    selectedMin: datePropType,
    today: datePropType.isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  _pushUpdate() {
    const {onChange, rangeLimit} = this.props
    let start, end

    if (this._selectionStart && this._selectionEnd) {
      if (isBefore(this._selectionStart, this._selectionEnd)) {
        start = this._selectionStart
        end = this._selectionEnd
      } else {
        start = this._selectionEnd
        end = this._selectionStart
      }

      if (rangeLimit && rangeLimit < differenceInCalendarDays(end, start)) {
        end = addDays(start, rangeLimit)
      }
    }

    return onChange({
      start,
      end,
      inProgress: this._selectionInProgress
    })
  }

  _pushNoticeUpdate(noticeType) {
    const {onNoticeChange} = this.props
    return onNoticeChange(noticeType)
  }

  _getDisabledRange(interval) {
    const {start, end} = interval
    const {disabledIntervals} = this.props

    if (!disabledIntervals) return true

    for (let i = 0; i < disabledIntervals.length; i++) {
      const {start: intervalStart, end: intervalEnd} = disabledIntervals[i]

      if (areRangesOverlapping(start, end, intervalStart, intervalEnd)) {
        return
      }
    }

    return true
  }

  _onDayMouseMove(date) {
    const {onDayHover} = this.props
    if (onDayHover) {
      onDayHover(date)
    }

    if (!this._selectionInProgress) return

    const {rangeLimit, disabledIntervals} = this.props
    const dateLimit = subDays(this._selectionStart, rangeLimit)

    const isDisabledWithin = this._getDisabledRange({
      start: isBefore(this._selectionStart, date) ? this._selectionStart : date,
      end: !isBefore(this._selectionStart, date) ? this._selectionStart : date
    })

    if (!isDisabledWithin) {
      return
    }

    if (!isEqual(date, this._selectionEnd)) {
      if (!rangeLimit || rangeLimit && !isBefore(date, dateLimit)) {
        this._selectionEnd = date
        this._pushUpdate()
      }
    }
  }

  _onDayClick(date) {
    const {mode} = this.props

    if (mode === RANGE_MODE) {
      if (this._selectionInProgress) {
        const isDisabledWithin = this._getDisabledRange({
          start: isBefore(this._selectionStart, date) ? this._selectionStart : date,
          end: !isBefore(this._selectionStart, date) ? this._selectionStart : date
        })

        if (!isDisabledWithin) {
          this._selectionInProgress = false
          this._selectionStart = null
          this._selectionEnd = null
          this._pushUpdate()
          this._pushNoticeUpdate('overlapping_with_disabled')
          return
        }

        this._selectionInProgress = false
        this._selectionEnd = date
      } else {
        this._selectionInProgress = true
        this._selectionStart = date
        this._selectionEnd = date
      }
    } else if (mode === SINGLE_MODE) {
      this._selectionInProgress = false
      this._selectionStart = date
      this._selectionEnd = date
    } else {
      return
    }

    this._pushUpdate()
    this._pushNoticeUpdate(null)
  }

  _onDisabledDayClick() {
    const {onNoticeChange} = this.props
    onNoticeChange('disabled_day_click')
  }

  _getMinDate() {
    const {rangeLimit, minDate} = this.props
    const calcStartDate = subDays(this._selectionStart, rangeLimit)

    if (minDate) {
      const isCalcStartDayAfter = isBefore(minDate, calcStartDate)
      return isCalcStartDayAfter ? calcStartDate : minDate
    } else {
      return calcStartDate
    }
  }

  _getMaxDate() {
    const {rangeLimit, maxDate} = this.props
    const calcEndDate = addDays(this._selectionStart, rangeLimit)

    if (maxDate) {
      const isCalcEndDayBefore = isBefore(calcEndDate, maxDate)
      return isCalcEndDayBefore ? calcEndDate : maxDate
    } else {
      return calcEndDate
    }
  }

  render() {
    const {blockClassName} = this.props
    return (
      <div className={`${blockClassName}-month`}>
        {this._renderWeekDays()}
        {this._renderWeeks()}
      </div>
    )
  }

  _renderWeekDays() {
    const {blockClassName, disableDaysOfWeek} = this.props
    if (disableDaysOfWeek) return null

    return <DaysOfWeek blockClassName={blockClassName} />
  }

  _renderWeeks() {
    const {
      selectedMin,
      selectedMax,
      highlightedStart,
      highlightedEnd,
      disabledIntervals,
      activeMonth,
      today,
      blockClassName,
      minNumberOfWeeks,
      rangeLimit,
      onDayHover
    } = this.props
    const weeks = []
    let {minDate, maxDate} = this.props
    let date = startOfWeek(startOfMonth(activeMonth), {weekStartsOn: 1})
    const end = endOfWeek(endOfMonth(activeMonth), {weekStartsOn: 1})

    if (this._selectionInProgress && rangeLimit) {
      minDate = this._getMinDate()
      maxDate = this._getMaxDate()
    }

    while ((typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length)
      || (isBefore(date, end) || isSameDay(date, end))) {
      weeks.push(date)
      date = addDays(date, 7)
    }

    return weeks.map((week) => {
      return (
        <Week
          key={week.getTime()}
          date={week}
          minDate={minDate}
          maxDate={maxDate}
          selectedMin={selectedMin}
          selectedMax={selectedMax}
          highlightedStart={highlightedStart}
          highlightedEnd={highlightedEnd}
          disabledIntervals={disabledIntervals}
          activeMonth={activeMonth}
          onDayHover={onDayHover}
          onDayClick={this._onDayClick.bind(this)}
          onDisabledDayClick={this._onDisabledDayClick.bind(this)}
          onDayMouseMove={this._onDayMouseMove.bind(this)}
          today={today}
          blockClassName={blockClassName}
        />
      )
    })
  }
}
