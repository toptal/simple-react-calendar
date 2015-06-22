import classNames from 'classnames'

import isWeekend     from './utils/is_weekend'
import isToday       from './utils/is_today'

import preventDefault       from './utils/prevent_default'

export default class Day extends React.Component {

  _getClasses() {
    let classes = {}
    if (_.isArray(this.props.data.modifiers)) {
      classes = _.zipObject(this.props.data.modifiers.map((modifier) => { return([`is-${modifier}`, true])}))
    }
    classes = _.assign(classes, {
      day: true,
      'is-selected': this.props.selected,
      'is-weekend': isWeekend(this.props.date),
      'is-workday': !isWeekend(this.props.date),
      'is-today': isToday(this.props.date),
      'is-current_month': this.props.date.getMonth() == this.props.activeMonth.getMonth(),
      'is-prev_month':    this.props.date.getMonth() < this.props.activeMonth.getMonth(),
      'is-next_month':    this.props.date.getMonth() > this.props.activeMonth.getMonth()
    })

    return classNames(classes)
  }

  render() {
    return (
      <div
        className   = { this._getClasses() }
        onClick     = { preventDefault(_.partial(this.props.onClick, this.props.date)) }
        onMouseMove = { preventDefault(_.partial(this.props.onMouseMove, this.props.date)) }
      >
        {new Date(this.props.date).getDate()}
      </div>
    )
  }
}

Day.defaultProps = {
  data: {}
}