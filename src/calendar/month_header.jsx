import React from 'react'
import classnames from 'classnames'

import HeaderButton from './header_button'

import addMonths from 'date-fns/src/add_months'
import isBefore from 'date-fns/src/is_before'
import isAfter from 'date-fns/src/is_after'
import startOfMonth from 'date-fns/src/start_of_month'
import formatDate from 'date-fns/src/format'

export default class MonthHeader extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    onMonthChange: React.PropTypes.func.isRequired
  }

  _switchMonth(offset) {
    const {onMonthChange, activeMonth} = this.props
    onMonthChange(addMonths(activeMonth, parseInt(offset)))
  }

  render() {
    const {activeMonth, minDate, maxDate} = this.props
    const prevEnabled = minDate ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth)) : true
    const nextEnabled = maxDate ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth)) : true

    return (
      <div className='month-header'>
        <HeaderButton
          className={classnames('prev-month', {'is-disabled': !prevEnabled})}
          enabled={prevEnabled}
          onClick={this._switchMonth.bind(this, -1)}
        />
        <div className='month-title'>
          {formatDate(activeMonth, 'MMMM YYYY')}
        </div>
        <HeaderButton
          className={classnames('next-month', {'is-disabled': !nextEnabled})}
          enabled={nextEnabled}
          onClick={this._switchMonth.bind(this, 1)}
        />
      </div>
    )
  }
}
