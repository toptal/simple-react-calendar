import React, { FC, ReactElement } from 'react'

type Props = {
  blockClassName?: string
  onMonthChange: HandleOnMonthChange
  ComponentMonthTitle: ReactElement
  ComponentButtonPrev?: ReactElement
  ComponentButtonNext?: ReactElement
  ComponentMonthDays?: ReactElement
}

const displayName = 'MonthHeader'

const MonthHeader: FC<Props> = ({ blockClassName, ComponentMonthTitle, ComponentButtonPrev, ComponentButtonNext, ComponentMonthDays }) => {
  const className = `${blockClassName}-${displayName}`

  return (
  <div className={className}>
    <div className={`${className}-top`}>
    {ComponentButtonPrev}
    <div className={`${className}-title`}>
      {ComponentMonthTitle}
    </div>
    {ComponentButtonNext}
    </div>
    {ComponentMonthDays && <div className={`${className}-bottom`}>
      {ComponentMonthDays}
                           </div>}
  </div>)
}

MonthHeader.displayName = displayName

export default MonthHeader
