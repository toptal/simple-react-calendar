import React from 'react'

import {BLOCK_CLASS_NAME} from './consts'

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default class DaysOfWeek extends React.Component {
  static propTypes = {
    blockClassName: React.PropTypes.string
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  render() {
    const {blockClassName} = this.props
    return (
      <div className={`${blockClassName}-days_of_week`}>
        {daysOfWeek.map((day) => {
          return (
            <div
              className={`${blockClassName}-days_of_week_day`}
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
