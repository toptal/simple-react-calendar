import React from 'react'
import classnames from 'classnames'

import addMonths from 'date-fns/src/add_months'
import isBefore from 'date-fns/src/is_before'
import isAfter from 'date-fns/src/is_after'
import startOfMonth from 'date-fns/src/start_of_month'

const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default class MonthHeader extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    onMonthChange: React.PropTypes.func.isRequired
  }

  _switchMonth = (e) => {
    e.preventDefault()
    const data = e.currentTarget.dataset
    if (data.enabled === 'true') {
      const {onMonthChange, activeMonth} = this.props
      onMonthChange(addMonths(activeMonth, parseInt(data.offset)))
    }
  }

  render() {
    const {activeMonth, minDate, maxDate} = this.props

    const prevEnabled = minDate ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth)) : true
    const nextEnabled = maxDate ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth)) : true

    return (
      <div className='month-header'>
        <a
          ref='prevMonthLink'
          className={classnames('prev-month', {'is-disabled': !prevEnabled})}
          href='#'
          data-enabled={prevEnabled}
          data-offset={-1}
          onClick={this._switchMonth}>
          prev
        </a>
        <div className='month-title'>
          {monthsNames[activeMonth.getMonth()]} {activeMonth.getFullYear()}
        </div>
        <a
          ref='nextMonthLink'
          className={'next-month' + (nextEnabled ? '' : ' is-disabled')}
          href='#'
          data-enabled={nextEnabled}
          data-offset={1}
          onClick={this._switchMonth}>
          next
        </a>
      </div>
    )
  }
}
