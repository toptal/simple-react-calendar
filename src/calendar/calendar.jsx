import React from 'react'
import lodash from 'lodash'
import Month from './month'
import MonthHeader from './month_header'

import dateRangeToArray from './utils/date_range_to_array'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)

    let initialMonth = this.props.activeMonth

    if (!initialMonth && this.props.selected) {
      const selection = dateRangeToArray(this.props.selected)
      const firstDayOfSelectionMonth = new Date(selection[0])
      firstDayOfSelectionMonth.setDate(1)
      initialMonth = firstDayOfSelectionMonth
    }

    if (!initialMonth) {
      const firstDayOfCurrentMonth = new Date(this.props.today)
      firstDayOfCurrentMonth.setDate(1)
      initialMonth = firstDayOfCurrentMonth
    }

    this.state = {
      activeMonth: initialMonth,
      selected: this.props.selected
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!lodash.isEqual(nextProps.selected, this.props.selected)) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  _getActiveMonth() {
    if (lodash.isFunction(this.props.onActiveMonthChange)) {
      return this.props.activeMonth
    } else {
      return this.state.activeMonth
    }
  }

  _switchMonth(offset) {
    const month = new Date(this._getActiveMonth())
    month.setMonth(month.getMonth() + offset)

    if (lodash.isFunction(this.props.onActiveMonthChange)) {
      this.props.onActiveMonthChange(month)
    } else {
      this.setState({
        activeMonth: month
      })
    }
  }

  _selectionChanged(selection) {
    if (lodash.isFunction(this.props.onSelect) && !selection.selectionInProgress) {
      this.props.onSelect(
        selection.selectionStart,
        selection.selectionEnd,
        selection.selectionInProgress
      )
    }
    this.setState({
      selected: [selection.selectionStart, selection.selectionEnd]
    })
  }

  render() {
    const monthProps = lodash.pick(this.props, ['selectionMode', 'data', 'selectionBoundaries', 'today'])
    return (
      <div className='calendar'>
        <MonthHeader
          ref='header'
          selectionBoundaries={this.props.selectionBoundaries}
          activeMonth={this._getActiveMonth()}
          onMonthChange={this._switchMonth.bind(this)}
        />
        <Month
          { ...monthProps }
          ref='month'
          activeMonth={this._getActiveMonth()}
          selected={this.state.selected}
          onChange={this._selectionChanged.bind(this)}
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  today: React.PropTypes.instanceOf(Date),
  activeMonth: React.PropTypes.instanceOf(Date),
  onActiveMonthChange: React.PropTypes.func,
  selected: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(Date)),
    React.PropTypes.instanceOf(Date)
  ]),
  onSelectionChange: React.PropTypes.func,
  selectionMode: React.PropTypes.string,
  data: React.PropTypes.object
}

Calendar.defaultProps = {
  today: new Date(),
  selectionMode: 'single'
}
