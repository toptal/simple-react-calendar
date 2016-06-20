import React from 'react'

import Week from './week'
import DaysOfWeek from './days_of_week'
import {BLOCK_CLASS_NAME} from './consts'

import startOfWeek from 'date-fns/start_of_week'
import endOfWeek from 'date-fns/end_of_week'
import startOfMonth from 'date-fns/start_of_month'
import endOfMonth from 'date-fns/end_of_month'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import isEqual from 'date-fns/is_equal'
import addDays from 'date-fns/add_days'
import isSameDay from 'date-fns/is_same_day'

const SINGLE_MODE = 'single'
const RANGE_MODE = 'range'

export default class Month extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    blockClassName: React.PropTypes.string,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    minNumberOfWeeks: React.PropTypes.number,
    mode: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    selectedMax: React.PropTypes.instanceOf(Date),
    selectedMin: React.PropTypes.instanceOf(Date),
    today: React.PropTypes.instanceOf(Date).isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  _pushUpdate() {
    this.props.onChange({
      start: isBefore(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
      end: isAfter(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
      inProgress: this._selectionInProgress
    })
  }

  _onDayMouseMove(date) {
    if (this._selectionInProgress) {
      if (!isEqual(date, this._selectionEnd)) {
        this._selectionEnd = date
        this._pushUpdate()
      }
    }
  }

  _onDayClick(date) {
    const {mode} = this.props
    if (mode === RANGE_MODE) {
      if (this._selectionInProgress) {
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
  }

  render() {
    const {blockClassName} = this.props
    return (
      <div className={`${blockClassName}-month`}>
        <DaysOfWeek blockClassName={blockClassName} />
        {this._renderWeeks()}
      </div>
    )
  }

  _renderWeeks() {
    const {
      minDate,
      maxDate,
      selectedMin,
      selectedMax,
      activeMonth,
      today,
      blockClassName,
      minNumberOfWeeks
    } = this.props
    const weeks = []
    let date = startOfWeek(startOfMonth(activeMonth), {weekStartsOn: 1})
    const endDate = endOfWeek(endOfMonth(activeMonth), {weekStartsOn: 1})
    while ((typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length)
      || (isBefore(date, endDate) || isSameDay(date, endDate))) {
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
          activeMonth={activeMonth}
          onDayClick={this._onDayClick.bind(this)}
          onDayMouseMove={this._onDayMouseMove.bind(this)}
          today={today}
          blockClassName={blockClassName}
        />
      )
    })
  }
}
