import classnames from 'classnames'
import React, { FC } from 'react'

import { IMonthHeaderDayRenderProps } from '../../@types'

export type Props = {
  blockClassName: string
  customRender?: IMonthHeaderDayRenderProps
  day: string
  isWeekend: boolean
}

const MonthHeaderDay: FC<Props> = (props) => {
  const {blockClassName, isWeekend, day, customRender} = props

  if (customRender) {
    return customRender(props)
  }

  return (
    <div
      className={classnames(`${blockClassName}-days_of_week_day`, {
        'is-weekend': isWeekend,
      })}
    >
      {day}
    </div>
  )
}

MonthHeaderDay.displayName = 'MonthHeaderDay'

export default MonthHeaderDay
