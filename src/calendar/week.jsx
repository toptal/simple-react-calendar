import React from 'react'

import Day from './day'
import dateKey from './utils/date_key'
import getDaysInWeek from './utils/get_days_in_week'
import isDateInRange from './utils/is_date_in_range'

export default class Week extends React.Component {
  _renderDays() {
    return getDaysInWeek(this.props.startDate).map((day) => {
      return (
        <Day
          key={day.getTime()}
          ref={'day' + day.getTime()}
          date={day}
          data={this.props.data[dateKey(day)]}
          selected={isDateInRange(day, this.props.selected)}
          activeMonth={this.props.activeMonth}
          onClick={this.props.onDayClick}
          onMouseMove={this.props.onDayMouseMove}
        />
      )
    })
  }

  render() {
    return (
      <div className='week'>
        { this._renderDays() }
      </div>
    )
  }
}

Week.defaultProps = {
  data: {}
}
