import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'
import {datePropType} from './_lib'

import {formatToTimeZone} from 'date-fns-timezone/dist/formatToTimeZone'
import formatDate from 'date-fns/format'

export default class Day extends React.Component {
  static propTypes = {
    blockClassName: PropTypes.string,
    className: PropTypes.string,
    date: datePropType.isRequired,
    onClick: PropTypes.func,
    onMouseMove: PropTypes.func,
    timeZone: PropTypes.string,
    today: datePropType.isRequired,
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
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
    const {date, className, blockClassName, timeZone} = this.props
    return (
      <div
        className={classnames(`${blockClassName}-day`, className)}
        onClick={this._onClick.bind(this)}
        onMouseMove={this._onMouseMove.bind(this)}
      >
        {timeZone ? formatToTimeZone(date, 'D', {timeZone}) : formatDate(date, 'D')}
      </div>
    )
  }
}
