import React from 'react'

import Day from './day'

import eachDay from 'date-fns/src/each_day'
import startOfDay from 'date-fns/src/start_of_day'
import startOfWeek from 'date-fns/src/start_of_week'
import endOfWeek from 'date-fns/src/end_of_week'
import isWithinRange from 'date-fns/src/is_within_range'
import format from 'date-fns/src/format'
import isBefore from 'date-fns/src/is_before'
import isAfter from 'date-fns/src/is_after'
import isEqual from 'date-fns/src/is_equal'

const START_WEEK_WITH_SUNDAY = false

export default class Week extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    data: React.PropTypes.object,
    date: React.PropTypes.instanceOf(Date).isRequired,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    onDayClick: React.PropTypes.func.isRequired,
    onDayMouseMove: React.PropTypes.func.isRequired,
    selectedMax: React.PropTypes.instanceOf(Date),
    selectedMin: React.PropTypes.instanceOf(Date),
    today: React.PropTypes.instanceOf(Date).isRequired
  }

  static defaultProps = {
    data: {}
  }

  _dateSelectable(date) {
    const {minDate, maxDate} = this.props
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
    return (selectedMin && selectedMin)
      && isWithinRange(
        startOfDay(date),
        startOfDay(selectedMin),
        startOfDay(selectedMax)
      )
  }

  _renderDays() {
    const {date, data, activeMonth, today, onDayClick, onDayMouseMove, selectedMin, selectedMax} = this.props
    const startDate = startOfWeek(date, START_WEEK_WITH_SUNDAY ? 0 : 1)
    const endDate = endOfWeek(date, START_WEEK_WITH_SUNDAY ? 0 : 1)
    return eachDay(startDate, endDate).map((day) => {
      return (
        <Day
          key={day.getTime()}
          ref={'day' + day.getTime()}
          date={day}
          data={data[format(day, 'YYYY-MM-DD')]}
          selected={this._dateSelected(day)}
          selectable={this._dateSelectable(day)}
          activeMonth={activeMonth}
          today={today}
          onClick={onDayClick}
          onMouseMove={onDayMouseMove}
        />
      )
    })
  }

  render() {
    return (
      <div className='week'>
        {this._renderDays()}
      </div>
    )
  }
}
