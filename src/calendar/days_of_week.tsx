import React, { Component } from 'react'

import { IDayOfWeekRenderProps, IDaysOfWeekRenderProps } from '../@types'
import DayOfWeek from './day_of_week'

const FRIDAY_INDEX = 4

export type Props = {
  blockClassName?: string
  customRender?: IDaysOfWeekRenderProps
  daysOfWeek: string[]
  renderDayOfWeek?: IDayOfWeekRenderProps
  weekStartsOn: number
}

export default class DaysOfWeek extends Component<Props, {}> {
  _getDaysOfWeek(dayIndex: number) {
    const {daysOfWeek} = this.props
    const adjustedIndex = dayIndex - 1

    return daysOfWeek.slice(adjustedIndex).concat(daysOfWeek.slice(0, adjustedIndex))
  }

  render() {
    const {blockClassName, weekStartsOn, customRender, renderDayOfWeek} = this.props
    const slicedDaysOfWeek = this._getDaysOfWeek(weekStartsOn)

    const children = slicedDaysOfWeek.map((day, index) => (
      <DayOfWeek
        blockClassName={blockClassName}
        isWeekend={index > FRIDAY_INDEX}
        day={day}
        customRender={renderDayOfWeek}
        key={day}
      />
    ))

    if (customRender) {
      return customRender({
        ...this.props,
        children,
      })
    }

    return <div className={`${blockClassName}-days_of_week`}>{children}</div>
  }
}
