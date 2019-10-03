import PropTypes from 'prop-types'
import React from 'react'

import {DAYS_IN_WEEK} from './consts'
import DayOfWeek from './day_of_week'

const FRIDAY_INDEX = 4
export default class DaysOfWeek extends React.Component {
  static propTypes = {
    blockClassName: PropTypes.string,
    customRender: PropTypes.func,
    daysOfWeek: PropTypes.arrayOf(PropTypes.string),
    renderDayOfWeek: PropTypes.func,
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK),
  }

  _getDaysOfWeek(day) {
    return this.props.daysOfWeek.slice(day - 1).concat(this.props.daysOfWeek.slice(0, day - 1))
  }

  render() {
    const {blockClassName, weekStartsOn, customRender, renderDayOfWeek} = this.props
    const slicedDaysOfWeek = this._getDaysOfWeek(weekStartsOn)

    const children = slicedDaysOfWeek.map((day, index) => (
      <DayOfWeek
        blockClassName={blockClassName}
        isWeekend={index > FRIDAY_INDEX}
        day={day}
        customRender={renderDayOfWeek}
        key={day}
      />
    ))

    if (customRender) {
      return customRender({
        ...this.props,
        children,
      })
    }

    return <div className={`${blockClassName}-days_of_week`}>{children}</div>
  }
}
