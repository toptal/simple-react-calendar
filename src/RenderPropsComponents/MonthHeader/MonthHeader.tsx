import React, { Component, ReactElement } from 'react'
import addMonths from 'date-fns/add_months'
import formatDate from 'date-fns/format'
import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'
import startOfMonth from 'date-fns/start_of_month'

import { IDate } from '../../@types'
import HeaderButton from '../HeaderButton'

export type Props = {
  activeMonth: IDate
  blockClassName?: string
  headerNextArrow?: ReactElement
  headerNextTitle?: string
  headerPrevArrow?: ReactElement
  headerPrevTitle?: string
  maxDate?: IDate
  minDate?: IDate
  onMonthChange: (...args: any[]) => any
}

// TODO: FC Rewrite
/* eslint-disable react/require-optimization */
export default class MonthHeader extends Component<Props, {}> {
  _switchMonth(offset: -1 | 1) {
    const { onMonthChange, activeMonth } = this.props

    onMonthChange(addMonths(activeMonth, offset))
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
      headerPrevTitle
    } = this.props

    const prevEnabled = minDate
      ? isBefore(startOfMonth(minDate), startOfMonth(activeMonth))
      : true
    const nextEnabled = maxDate
      ? isAfter(startOfMonth(maxDate), startOfMonth(activeMonth))
      : true

    return (
      <div className={`${blockClassName}-month_header`}>
        <HeaderButton
          type='prev'
          arrow={headerPrevArrow}
          title={headerPrevTitle}
          enabled={prevEnabled}
          onClick={this._switchMonth.bind(this, -1)}
          blockClassName={blockClassName}
        />
        <div className={`${blockClassName}-month_header_title`}>
          {formatDate(activeMonth, 'MMMM YYYY')}
        </div>
        <HeaderButton
          type='next'
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
