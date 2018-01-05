import React from 'react'
import PropTypes from 'prop-types'

import HeaderButton from './header_button'
import {BLOCK_CLASS_NAME, NEXT_MONTH_TITLE, PREV_MONTH_TITLE} from './consts'
import {datePropType} from './_lib'

import addMonths from 'date-fns/add_months'
import isBefore from 'date-fns/is_before'
import isAfter from 'date-fns/is_after'
import startOfMonth from 'date-fns/start_of_month'
import formatDate from 'date-fns/format'

export default class MonthHeader extends React.Component {
  static propTypes = {
    activeMonth: datePropType.isRequired,
    blockClassName: PropTypes.string,
    headerNextArrow: PropTypes.element,
    headerNextTitle: PropTypes.string,
    headerPrevArrow: PropTypes.element,
    headerPrevTitle: PropTypes.string,
    maxDate: datePropType,
    minDate: datePropType,
    onMonthChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
    headerNextTitle: NEXT_MONTH_TITLE,
    headerPrevTitle: PREV_MONTH_TITLE,
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
    } = this.props

    const prevEnabled = minDate ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth)) : true
    const nextEnabled = maxDate ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth)) : true

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
