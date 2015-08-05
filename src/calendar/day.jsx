import React from 'react'
import lodash from 'lodash'
import classNames from 'classnames'

import isWeekend from './utils/is_weekend'
import isToday from './utils/is_today'
import noOp from './utils/no_op'
import preventDefault from './utils/prevent_default'

export default class Day extends React.Component {
  _getClasses() {
    let classes = {}
    if (lodash.isArray(this.props.data.modifiers)) {
      classes = lodash.zipObject(this.props.data.modifiers.map((modifier) => { return ([`is-${modifier}`, true])}))
    }
    classes = lodash.assign(classes, {
      day: true,
      'is-selected': this.props.selected,
      'is-weekend': isWeekend(this.props.date),
      'is-workday': !isWeekend(this.props.date),
      'is-today': isToday(this.props.date),
      'is-current_month': this.props.date.getMonth() === this.props.activeMonth.getMonth(),
      'is-prev_month': this.props.date.getMonth() < this.props.activeMonth.getMonth(),
      'is-next_month': this.props.date.getMonth() > this.props.activeMonth.getMonth(),
      'is-selectable': this.props.inBoundaries,
      'is-not-selectable': !this.props.inBoundaries
    })

    return classNames(classes)
  }

  render() {
    return (
      <div
        className={this._getClasses()}
        onClick={preventDefault(lodash.partial(this.props.onClick, this.props.date))}
        onMouseMove={preventDefault(lodash.partial(this.props.onMouseMove, this.props.date))}
      >
        {new Date(this.props.date).getDate()}
      </div>
    )
  }
}

Day.defaultProps = {
  data: {},
  onClick: noOp,
  onMouseMove: noOp
}
