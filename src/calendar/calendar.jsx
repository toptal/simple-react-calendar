import React from 'react'

import Month from './month'
import MonthHeader from './month_header'
import {BLOCK_CLASS_NAME} from './consts'

import startOfMonth from 'date-fns/src/start_of_month'
import isSameDay from 'date-fns/src/is_same_day'
import isSameMonth from 'date-fns/src/is_same_month'

const SINGLE_MODE = 'single'
const RANGE_MODE = 'range'

// TODO: replace this this with function from date-fns after it will be done
const isValid = function(date) {
  return !isNaN((new Date(date)).getTime())
}

export default class Calendar extends React.Component {
  static propTypes = {
    activeMonth: React.PropTypes.instanceOf(Date),
    blockClassName: React.PropTypes.string,
    data: React.PropTypes.object,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    mode: React.PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
    onMonthChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.oneOfType([
      React.PropTypes.instanceOf(Date),
      React.PropTypes.shape({
        start: React.PropTypes.instanceOf(Date).isRequired,
        end: React.PropTypes.instanceOf(Date).isRequired,
        inProgress: React.PropTypes.bool
      })
    ]),
    today: React.PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    mode: SINGLE_MODE,
    today: new Date(),
    blockClassName: BLOCK_CLASS_NAME
  }

  state = {
    activeMonth: this._initialMonth()
  }

  componentWillReceiveProps(nextProps) {
    if (!isSameMonth(nextProps.activeMonth, this.props.activeMonth)) {
      this.setState({activeMonth: startOfMonth(nextProps.activeMonth)})
    }
  }

  _initialMonth() {
    const {selected, activeMonth, today, mode} = this.props

    if (isValid(activeMonth)) {
      return activeMonth
    } else {
      if (selected) {
        const selectionStart = (mode === SINGLE_MODE ? selected : selected.start)
        if (isValid(selectionStart)) {
          return startOfMonth(selectionStart)
        }
      }
    }
    return startOfMonth(today)
  }

  _switchMonth = (date) => {
    const {onMonthChange} = this.props
    if (typeof onMonthChange === 'function') {
      onMonthChange(date)
    } else {
      this.setState({
        activeMonth: date
      })
    }
  }

  _activeMonth() {
    const {onMonthChange, activeMonth} = this.props
    if (onMonthChange) {
      return activeMonth
    } else {
      return this.state.activeMonth
    }
  }

  _selection() {
    const {mode, selected} = this.props
    const start = (mode === SINGLE_MODE ? selected : (selected && selected.start))
    const end = (mode === SINGLE_MODE ? selected : (selected && selected.end))
    if (isValid(start) && isValid(end)) {
      return {start, end}
    } else {
      return {
        start: null,
        end: null
      }
    }
  }

  _selectionChanged = (selection) => {
    const {start, end, inProgress} = selection
    const {mode, onSelect} = this.props
    if (onSelect) {
      onSelect(mode === SINGLE_MODE ? start : selection)
    }
  }

  render() {
    const {mode, data, minDate, maxDate, today, blockClassName} = this.props
    const activeMonth = isValid(this._activeMonth()) ? this._activeMonth() : startOfMonth(today)
    const selection = this._selection()

    return (
      <div className={blockClassName}>
        <MonthHeader
          ref='header'
          minDate={minDate}
          maxDate={maxDate}
          activeMonth={this._activeMonth()}
          onMonthChange={this._switchMonth}
          blockClassName={this.props.blockClassName}
        />
        <Month
          mode={mode}
          data={data}
          minDate={minDate}
          maxDate={maxDate}
          today={today}
          ref='month'
          activeMonth={this._activeMonth()}
          selectedMin={selection.start}
          selectedMax={selection.end}
          onChange={this._selectionChanged}
          blockClassName={this.props.blockClassName}
        />
      </div>
    )
  }
}
