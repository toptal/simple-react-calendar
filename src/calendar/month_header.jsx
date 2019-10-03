import addMonths from 'date-fns/addMonths'
import formatDate from 'date-fns/format'
import isAfter from 'date-fns/isAfter'
import isBefore from 'date-fns/isBefore'
import startOfMonth from 'date-fns/startOfMonth'
import PropTypes from 'prop-types'
import React from 'react'

import {datePropType} from './_lib'
import HeaderButton from './header_button'

export default class MonthHeader extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: PropTypes.string,
    customRender: PropTypes.func,
    headerNextArrow: PropTypes.element,
    headerNextTitle: PropTypes.string,
    headerPrevArrow: PropTypes.element,
    headerPrevTitle: PropTypes.string,
    maxDate: datePropType,
    minDate: datePropType,
    onMonthChange: PropTypes.func.isRequired,
  }

  _switchMonth(offset) {
    const {onMonthChange, activeMonth} = this.props
    onMonthChange(addMonths(activeMonth, parseInt(offset)))
  }

  render() {
    const {
      activeMonth,
      minDate,
      maxDate,
      blockClassName,
      headerNextArrow,
      headerNextTitle,
      headerPrevArrow,
      headerPrevTitle,
      customRender,
    } = this.props

    const prevEnabled = minDate ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth)) : true
    const nextEnabled = maxDate ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth)) : true

    if (customRender) {
      return customRender({
        ...this.props,
        prevEnabled,
        nextEnabled,
        switchMonth: this._switchMonth.bind(this),
        children: 'no content, please use activeMonth prop and custom buttons instead',
      })
    }

    return (
      <div className={`${blockClassName}-month_header`}>
        <HeaderButton
          type="prev"
          arrow={headerPrevArrow}
          title={headerPrevTitle}
          enabled={prevEnabled}
          onClick={this._switchMonth.bind(this, -1)}
          blockClassName={blockClassName}
        />
        <div className={`${blockClassName}-month_header_title`}>{formatDate(activeMonth, 'MMMM YYYY')}</div>
        <HeaderButton
          type="next"
          arrow={headerNextArrow}
          title={headerNextTitle}
          enabled={nextEnabled}
          onClick={this._switchMonth.bind(this, 1)}
          blockClassName={blockClassName}
        />
      </div>
    )
  }
}
