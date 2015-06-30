import Month       from './month'
import MonthHeader from './month_header'


/*
  activeMonth — Date, default `new Date()`
  onActiveMonthChange — function

  selected — object | default false
  onSelect — function

  selectionMode — string | default 'single'
*/

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)

    var firstDayOfMonth = this.props.activeMonth
    firstDayOfMonth.setDate(1)
    this.state = {
      activeMonth: firstDayOfMonth,
      selected: this.props.selected
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.selected, this.props.selected)) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  _getActiveMonth() {
    if (_.isFunction(this.props.onActiveMonthChange)) {
      return this.props.activeMonth
    } else {
      return this.state.activeMonth
    }
  }

  _switchMonth(offset) {
    let month = new Date(this._getActiveMonth())
    month.setMonth(month.getMonth() + offset)

    if (_.isFunction(this.props.onActiveMonthChange)) {
      this.props.onActiveMonthChange(month)
    } else {
      this.setState({
        activeMonth: month
      })
    }
  }

  _selectionChanged(selection) {
    if (_.isFunction(this.props.onSelect) && !selection.selectionInProgress) {
      this.props.onSelect(selection)
    }
    this.setState({
      selected: [selection.selectionStart, selection.selectionEnd]
    })
  }

  render() {
    return (
      <div className="calendar">
        <MonthHeader
          activeMonth   = { this._getActiveMonth() }
          onMonthChange = { this._switchMonth.bind(this) }
        />
        <Month
          activeMonth   = { this._getActiveMonth() }
          selectionMode = { this.props.selectionMode }
          selected      = { this.state.selected }
          data          = { this.props.data }
          onChange      = { this._selectionChanged.bind(this) }
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  activeMonth:         React.PropTypes.instanceOf(Date),
  onActiveMonthChange: React.PropTypes.func,
  selected:            React.PropTypes.object,
  onSelectionChange:   React.PropTypes.func,
  selectionMode:       React.PropTypes.string,
  data:                React.PropTypes.object
}

Calendar.defaultProps = {
  activeMonth:   new Date(),
  selectionMode: 'single'
}
