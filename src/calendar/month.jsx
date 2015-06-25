import Day  from './day'
import Week from './week'

import getWeeksInMonth from './utils/get_weeks_in_month'

// activeMonth   = { this._getActiveMonth() }
// selectionMode = { this.props.selectionMode }
// selection     = { this._getSelection() }
// onChange


export default class Month extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectionInProgress: false,
      selectionStart:      null,
      selectionEnd:        null
    }
  }

  _pushUpdate() {
    this.props.onChange(
      _.pick(this.state, ['selectionStart', 'selectionEnd', 'selectionInProgress'])
    )
  }

  _onDayClick(date) {
    var nextState = {}
    if (this.props.selectionMode == 'range') {
      if (this.state.selectionInProgress) {
        nextState = {
          selectionInProgress: false,
          selectionStart: this.state.selectionStart.getTime() < date.getTime() ? this.state.selectionStart : date,
          selectionEnd:   this.state.selectionStart.getTime() > date.getTime() ? this.state.selectionStart : date
        }
      } else {
        nextState = {
          selectionInProgress: true,
          selectionStart: date,
          selectionEnd: date
        }
      }
    } else if (this.props.selectionMode == 'single' || !this.props.selectionMode) {
      nextState = {
        selectionStart: date,
        selectionEnd: date
      }
    }
    this.setState(nextState, () => {
      this._pushUpdate()
    })
  }

  _onDayMouseMove(date) {
    if (this.state.selectionInProgress && (!this.state.selectionEnd || this.state.selectionEnd.getTime() != date.getTime())) {
      this.setState({ selectionEnd: date }, () => {
        this._pushUpdate()
      })
    }
  }

  _renderWeeks() {
    let weeks = getWeeksInMonth(this.props.activeMonth)
    return weeks.map((week) => {
      return (
        <Week
          key         = { week.getTime() }
          startDate   = { week }
          activeMonth = { this.props.activeMonth }
          selected    = { this.props.selected }
          data        = { this.props.data }

          onDayClick     = { this._onDayClick.bind(this) }
          onDayMouseMove = { this._onDayMouseMove.bind(this) }
        />
      )
    })
  }


  render() {
    return (
      <div className="month">
        { this._renderWeeks() }
      </div>
    )
  }
}

