import React from 'react'
import lodash from 'lodash'

export default class MonthHeader extends React.Component {
  _switchMonth(e, id, offset) {
    e.preventDefault()
    if (lodash.isFunction(this.props.onMonthChange)) {
      this.props.onMonthChange(offset)
    }
  }

  render() {
    const m = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    const date = this.props.activeMonth
    return (
      <div className='month-header'>
        <a ref='prevMonthLink' className='prev-month' href='#' onClick={ lodash.partialRight(this._switchMonth, -1).bind(this) }>prev</a>
        <div className='month-title'>
          {m[date.getMonth()]} {date.getFullYear()}
        </div>
        <a ref='nextMonthLink' className='next-month' href='#' onClick={ lodash.partialRight(this._switchMonth, 1).bind(this) }>next</a>
      </div>
    )
  }
}
