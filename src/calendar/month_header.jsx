
export default class MonthHeader extends React.Component {
  _switchMonth(e, id, offset) {
    e.preventDefault()
    if(_.isFunction(this.props.onMonthChange)) {
      this.props.onMonthChange(offset)
    }
  }

  render() {
    let m = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    let date = this.props.activeMonth
    return (
      <div className='month-header'>
        <a ref='prevMonthLink' className='prev-month' href='#' onClick={ _.partialRight(this._switchMonth, -1).bind(this) }>prev</a>
        <div className='month-title'>
          {m[date.getMonth()]} {date.getFullYear()}
        </div>
        <a ref='nextMonthLink' className='next-month' href='#' onClick={ _.partialRight(this._switchMonth, 1).bind(this) }>next</a>
      </div>
    )
  }
}
