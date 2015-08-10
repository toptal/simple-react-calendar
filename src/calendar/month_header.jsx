import React from 'react'
import lodash from 'lodash'

export default class MonthHeader extends React.Component {
  _switchMonth(e, id, offset) {
    e.preventDefault()
    if (!e.target.attributes.getNamedItem('disabled') && lodash.isFunction(this.props.onMonthChange)) {
      this.props.onMonthChange(offset)
    }
  }

  render() {
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const {activeMonth: date, selectionBoundaries} = this.props

    let prevEnabled = true
    let nextEnabled = true
    if (selectionBoundaries && selectionBoundaries.min) {
      const minDate = new Date(selectionBoundaries.min)
      prevEnabled = date.getFullYear() * 100 + date.getMonth() > minDate.getFullYear() * 100 + minDate.getMonth()
    }
    if (selectionBoundaries && selectionBoundaries.max) {
      const maxDate = new Date(selectionBoundaries.max)
      nextEnabled = date.getFullYear() * 100 + date.getMonth() < maxDate.getFullYear() * 100 + maxDate.getMonth()
    }

    return (
      <div className='month-header'>
        <a
          ref='prevMonthLink'
          disabled={!prevEnabled}
          className={'prev-month' + (prevEnabled ? '' : ' is-disabled')}
          href='#'
          onClick={ lodash.partialRight(this._switchMonth, -1).bind(this) }>
          prev
        </a>
        <div className='month-title'>
          {m[date.getMonth()]} {date.getFullYear()}
        </div>
        <a
          ref='nextMonthLink'
          disabled={!nextEnabled}
          className={'next-month' + (nextEnabled ? '' : ' is-disabled')}
          href='#'
          onClick={ lodash.partialRight(this._switchMonth, 1).bind(this) }>
          next
        </a>
      </div>
    )
  }
}
