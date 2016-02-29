import React from 'react'
import classnames from 'classnames'

import HeaderButton from './header_button'
import {BLOCK_CLASS_NAME} from './consts'

import addMonths from 'date-fns/add_months'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import startOfMonth from 'date-fns/start_of_month'
import formatDate from 'date-fns/format'

export default class MonthHeader extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    blockClassName: React.PropTypes.string,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    onMonthChange: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  };

  _switchMonth(offset) {
    const {onMonthChange, activeMonth} = this.props
    onMonthChange(addMonths(activeMonth, parseInt(offset)))
  }

  render() {
    const {activeMonth, minDate, maxDate, blockClassName} = this.props
    const prevEnabled = minDate ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth)) : true
    const nextEnabled = maxDate ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth)) : true

    return (
      <div className={`${blockClassName}-month_header`}>
        <HeaderButton
          type='prev'
          enabled={prevEnabled}
          onClick={this._switchMonth.bind(this, -1)}
          blockClassName={blockClassName}
        />
        <div className={`${blockClassName}-month_header_title`}>
          {formatDate(activeMonth, 'MMMM YYYY')}
        </div>
        <HeaderButton
          type='next'
          enabled={nextEnabled}
          onClick={this._switchMonth.bind(this, 1)}
          blockClassName={blockClassName}
        />
      </div>
    )
  }
}
