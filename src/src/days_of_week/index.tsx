import cx from 'classnames'
import * as React from 'react'

export interface DaysOfWeekProps {
  blockClassName: string
  daysOfWeek: Array<string>
}

const DaysOfWeek: React.SFC<DaysOfWeekProps> = ({blockClassName, daysOfWeek}) => (
  <ol className={`${blockClassName}-days_of_week`}>
    {daysOfWeek.map((dayString: string, index: number) => (
      <li
        className={cx(`${blockClassName}-days_of_week_day`, {
          'is-weekend': index > 4,
        })}
        key={dayString}
      >
        {dayString}
      </li>
    ))}
  </ol>
)

export default DaysOfWeek
