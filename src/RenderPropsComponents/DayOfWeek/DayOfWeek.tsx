import React, { FC } from 'react'
import classnames from 'classnames'

export type Props = {
  blockClassName?: string
  day: string
  isWeekend: boolean
  // TODO: fix type definitions instead
  key?: string
}

const DayOfWeek: FC<Props> = ({ blockClassName, isWeekend, day }) => (
  <div
    className={classnames(`${blockClassName}-days_of_week_day`, {
      'is-weekend': isWeekend
    })}
  >
    {day}
  </div>
)

export default DayOfWeek
