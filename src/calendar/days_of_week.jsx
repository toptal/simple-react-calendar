import React from 'react'
import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'
import {DAYS_IN_WEEK} from './consts'

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default class DaysOfWeek extends React.Component {
  static propTypes = {
    blockClassName: React.PropTypes.string,
    weekStartsOn: React.PropTypes.oneOf(DAYS_IN_WEEK)
  }

  static defaultProps = {
    weekStartsOn: 1,
    blockClassName: BLOCK_CLASS_NAME
  }

  _getDaysOfWeek(day) {
    return daysOfWeek.slice(day - 1).concat(daysOfWeek.slice(0, day - 1))
  }

  render() {
    const {blockClassName, weekStartsOn} = this.props
    const slicedDaysOfWeek = this._getDaysOfWeek(weekStartsOn)

    return (
      <div className={`${blockClassName}-days_of_week`}>
        {slicedDaysOfWeek.map((day, index) => {
          return (
            <div
              className={classnames(`${blockClassName}-days_of_week_day`, {
                'is-weekend': index > 4 // 4 is an index of Friday
              })}
              key={day}
            >
              {day}
            </div>
          )
        })}
      </div>
    )
  }
}
