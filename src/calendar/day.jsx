import React from 'react'
import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'

import isWeekend from 'date-fns/is_weekend'
import isSameDay from 'date-fns/is_same_day'
import formatDate from 'date-fns/format'
import isSameMonth from 'date-fns/is_same_month'

export default class Day extends React.Component {
  static propTypes = {
    blockClassName: React.PropTypes.string,
    className: React.PropTypes.string,
    date: React.PropTypes.instanceOf(Date).isRequired,
    onClick: React.PropTypes.func,
    onMouseMove: React.PropTypes.func,
    today: React.PropTypes.instanceOf(Date).isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  _onClick(e) {
    e.preventDefault()
    const {date, onClick} = this.props
    if (onClick) {
      onClick(date)
    }
  }

  _onMouseMove(e) {
    e.preventDefault()
    const {date, onMouseMove} = this.props
    if (onMouseMove) {
      onMouseMove(date)
    }
  }

  render() {
    const {date, className, blockClassName} = this.props
    return (
      <div
        className={classnames(`${blockClassName}-day`, className)}
        onClick={this._onClick.bind(this)}
        onMouseMove={this._onMouseMove.bind(this)}
      >
        {formatDate(date, 'D')}
      </div>
    )
  }
}
