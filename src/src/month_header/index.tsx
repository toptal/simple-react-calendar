import * as Luxon from 'luxon'
import * as React from 'react'

import {isAfter, isBefore, isSameDate} from '../_lib'
import MonthHeaderButton from '../month_header_button'
import {MonthHeaderButtonTypeEnum} from '../types'

export interface MonthHeaderProps {
  activeMonth: Luxon.DateTime
  blockClassName: string
  headerNextArrow?: React.ReactNode
  headerNextTitle?: string
  headerPrevArrow?: React.ReactNode
  headerPrevTitle?: string
  maxDate?: Luxon.DateTime
  minDate?: Luxon.DateTime
  onMonthChange(date: Luxon.DateTime): void
}

export default class MonthHeader extends React.PureComponent<MonthHeaderProps> {
  private handleOnSwitchMonth = ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => {
    const {onMonthChange, activeMonth} = this.props

    if (MonthHeaderButtonTypeEnum.next === value) {
      onMonthChange(activeMonth.plus({month: 1}))
    } else {
      onMonthChange(activeMonth.minus({month: 1}))
    }
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
    const startOfActiveMonth = activeMonth.startOf('month')
    const startOfMinDate = minDate && minDate.startOf('month')
    const startOfMaxDate = maxDate && maxDate.startOf('month')

    const prevEnabled = minDate
      ? isAfter(startOfActiveMonth, startOfMinDate) || isSameDate(startOfActiveMonth, startOfMinDate)
      : true
    const nextEnabled = maxDate
      ? isBefore(startOfActiveMonth, startOfMaxDate) || isSameDate(startOfActiveMonth, startOfMaxDate)
      : true

    return (
      <div className={`${blockClassName}-month_header`}>
        <MonthHeaderButton
          type={MonthHeaderButtonTypeEnum.prev}
          arrow={headerPrevArrow}
          title={headerPrevTitle}
          isDisabled={!prevEnabled}
          onClick={this.handleOnSwitchMonth}
          blockClassName={blockClassName}
        />
        <div className={`${blockClassName}-month_header_title`}>
          {activeMonth.toLocaleString({year: 'numeric', month: 'long'})}
        </div>
        <MonthHeaderButton
          type={MonthHeaderButtonTypeEnum.next}
          arrow={headerNextArrow}
          title={headerNextTitle}
          isDisabled={!nextEnabled}
          onClick={this.handleOnSwitchMonth}
          blockClassName={blockClassName}
        />
      </div>
    )
  }
}
