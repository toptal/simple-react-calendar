import React from 'react'
import classnames from 'classnames'

import isWeekend from 'date-fns/src/is_weekend'
import isSameDay from 'date-fns/src/is_same_day'
import isSameMonth from 'date-fns/src/is_same_month'

export default class Day extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date).isRequired,
    data: React.PropTypes.object,
    date: React.PropTypes.instanceOf(Date).isRequired,
    onClick: React.PropTypes.func.isRequired,
    onMouseMove: React.PropTypes.func.isRequired,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    today: React.PropTypes.instanceOf(Date).isRequired
  }

  static defaultProps = {
    data: {}
  }

  _generalModifiers() {
    const {selected, selectable, date, today, activeMonth} = this.props
    const classes = {
      'is-selected': selected,
      'is-today': isSameDay(today, date),
      'is-current_month': isSameMonth(date, activeMonth),
      'is-prev_month': date.getMonth() < activeMonth.getMonth(),
      'is-next_month': date.getMonth() > activeMonth.getMonth(),
      [isWeekend(date) ? 'is-weekend' : 'is-workday']: true,
      [selectable ? 'is-selectable' : 'is-not-selectable']: true
    }
    return classnames(classes)
  }

  _customModifiers() {
    const modifiers = this.props.data.modifiers || []
    return classnames(modifiers.map((modifier) => `is-${modifier}`))
  }

  _onClick = (e) => {
    e.preventDefault()
    const {selectable, date, onClick} = this.props
    if (selectable) {
      onClick(date)
    }
  }

  _onMouseMove = (e) => {
    e.preventDefault()
    const {selectable, date, onMouseMove} = this.props
    if (selectable) {
      onMouseMove(date)
    }
  }

  render() {
    const {date} = this.props
    const classes = classnames(['day', this._generalModifiers(), this._customModifiers()])
    return (
      <div
        className={classes}
        onClick={this._onClick}
        onMouseMove={this._onMouseMove}
      >
        {new Date(this.props.date).getDate()}
      </div>
    )
  }
}
