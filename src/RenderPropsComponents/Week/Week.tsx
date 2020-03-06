import React, { FC } from 'react'

interface Props {
  blockClassName: string
  weekNumber: number
}

const Week: FC<Props> = ({ blockClassName, weekNumber, children }) => (
  <div className={`${blockClassName}-week`}>
    <div className={`${blockClassName}-week_number`}>{weekNumber}</div>
    <div className={`${blockClassName}-week_days`}>{children}</div>
  </div>
)

export default Week
