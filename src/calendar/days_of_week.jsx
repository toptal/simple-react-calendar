import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {DAYS_IN_WEEK} from './consts'

export default class DaysOfWeek extends React.Component {
  static propTypes = {
    blockClassName: PropTypes.string,
    daysOfWeek: PropTypes.arrayOf(PropTypes.string),
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK),
  }

  _getDaysOfWeek(day) {
    return this.props.daysOfWeek.slice(day - 1).concat(this.props.daysOfWeek.slice(0, day - 1))
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
                'is-weekend': index > 4, // 4 is an index of Friday
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
