import addDays from 'date-fns/add_days'
import areRangesOverlapping from 'date-fns/are_ranges_overlapping'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import endOfMonth from 'date-fns/end_of_month'
import endOfWeek from 'date-fns/end_of_week'
import isBefore from 'date-fns/is_before'
import isEqual from 'date-fns/is_equal'
import isSameDay from 'date-fns/is_same_day'
import parse from 'date-fns/parse'
import startOfMonth from 'date-fns/start_of_month'
import startOfWeek from 'date-fns/start_of_week'
import subDays from 'date-fns/sub_days'
import PropTypes from 'prop-types'
import React from 'react'

import {datePropType} from './_lib'
import {DAYS_IN_WEEK} from './consts'
import DaysOfWeek from './days_of_week'
import Week from './week'

const RANGE_MODE = 'range'

export default class Month extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: PropTypes.string.isRequired,
    customRender: PropTypes.func,
    daysOfWeek: PropTypes.arrayOf(PropTypes.string),
    disableDaysOfWeek: PropTypes.bool,
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
    minNumberOfWeeks: PropTypes.number,
    mode: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDayMouseEnter: PropTypes.func,
    onNoticeChange: PropTypes.func.isRequired,
    rangeLimit: PropTypes.number,
    renderDay: PropTypes.func,
    renderWeek: PropTypes.func,
    selectedMax: datePropType,
    selectedMin: datePropType,
    today: datePropType.isRequired,
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK),
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
      inProgress: this._selectionInProgress,
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

  handleOnDayMouseEnter = (event) => {
    event.preventDefault()
    const {
      currentTarget: {value},
    } = event
    const date = parse(value)

    const {onDayMouseEnter} = this.props

    if (onDayMouseEnter) {
      onDayMouseEnter(date)
    }

    if (!this._selectionInProgress) return

    const {rangeLimit} = this.props
    const dateLimit = subDays(this._selectionStart, rangeLimit)

    const isDisabledWithin = this._getDisabledRange({
      start: isBefore(this._selectionStart, date) ? this._selectionStart : date,
      end: !isBefore(this._selectionStart, date) ? this._selectionStart : date,
    })

    if (!isDisabledWithin) return

    if (!isEqual(date, this._selectionEnd)) {
      if (!rangeLimit || (rangeLimit && !isBefore(date, dateLimit))) {
        this._selectionEnd = date
        this._pushUpdate()
      }
    }
  }

  handleOnDayClick = (event) => {
    event.preventDefault()
    const {
      currentTarget: {value},
    } = event
    const date = parse(value)
    const {mode} = this.props

    if (mode === RANGE_MODE) {
      if (this._selectionInProgress) {
        const isDisabledWithin = this._getDisabledRange({
          start: isBefore(this._selectionStart, date) ? this._selectionStart : date,
          end: !isBefore(this._selectionStart, date) ? this._selectionStart : date,
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
    } else {
      this._selectionInProgress = false
      this._selectionStart = date
      this._selectionEnd = date
    }

    this._pushUpdate()
    this._pushNoticeUpdate(null)
  }

  handleOnDisabledDayClick = (event) => {
    event.preventDefault()

    this.props.onNoticeChange('disabled_day_click')
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
    const {blockClassName, customRender} = this.props

    const children = (
      <React.Fragment>
        {this._renderDaysOfWeek()}
        {this._renderWeeks()}
      </React.Fragment>
    )

    if (customRender) {
      return customRender({
        ...this.props,
        children,
      })
    }

    return <div className={`${blockClassName}-month`}>{children}</div>
  }

  _renderDaysOfWeek() {
    const {disableDaysOfWeek, blockClassName, weekStartsOn, daysOfWeek} = this.props

    if (!disableDaysOfWeek) return

    return <DaysOfWeek blockClassName={blockClassName} weekStartsOn={weekStartsOn} daysOfWeek={daysOfWeek} />
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
      weekStartsOn,
      renderDay,
      renderWeek,
    } = this.props
    const weeks = []
    let {minDate, maxDate} = this.props
    let date = startOfWeek(startOfMonth(activeMonth), {weekStartsOn})
    const end = endOfWeek(endOfMonth(activeMonth), {weekStartsOn})

    if (this._selectionInProgress && rangeLimit) {
      minDate = this._getMinDate()
      maxDate = this._getMaxDate()
    }

    while (
      (typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length) ||
      (isBefore(date, end) || isSameDay(date, end))
    ) {
      weeks.push(date)
      date = addDays(date, 7)
    }

    return weeks.map((week) => {
      return (
        <Week
          customRender={renderWeek}
          renderDay={renderDay}
          activeMonth={activeMonth}
          blockClassName={blockClassName}
          date={week}
          disabledIntervals={disabledIntervals}
          highlightedEnd={highlightedEnd}
          highlightedStart={highlightedStart}
          key={week.getTime()}
          maxDate={maxDate}
          minDate={minDate}
          onDayClick={this.handleOnDayClick}
          onDayMouseEnter={this.handleOnDayMouseEnter}
          onDisabledDayClick={this.handleOnDisabledDayClick}
          selectedMax={selectedMax}
          selectedMin={selectedMin}
          today={today}
          weekStartsOn={weekStartsOn}
        />
      )
    })
  }
}
