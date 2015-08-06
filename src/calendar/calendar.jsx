import React from 'react'
import lodash from 'lodash'
import Month from './month'
import MonthHeader from './month_header'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)

    const firstDayOfMonth = this.props.today
    firstDayOfMonth.setDate(1)
    this.state = {
      activeMonth: firstDayOfMonth,
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
      return this.props.today
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
  onActiveMonthChange: React.PropTypes.func,
  selected: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(Date)),
    React.PropTypes.instanceOf(Date)
  ]),
  onSelectionChange: React.PropTypes.func,
  selectionMode: React.PropTypes.string,
  data: React.PropTypes.object,
}

Calendar.defaultProps = {
  today: new Date(),
  selectionMode: 'single',
}
