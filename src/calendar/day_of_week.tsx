import classnames from 'classnames'
import React, { FC } from 'react'

import { IDayOfWeekRenderProps } from '../@types'

export type Props = {
  blockClassName?: string
  customRender?: IDayOfWeekRenderProps
  day: string
  isWeekend: boolean
}

const DayOfWeek: FC<Props> = (props) => {
  const { blockClassName, isWeekend, day, customRender } = props

  const children = day

  if (customRender) {
    return customRender({
      ...props,
      children,
    })
  }

  return (
    <div
      className={classnames(`${blockClassName}-days_of_week_day`, {
        'is-weekend': isWeekend,
      })}
    >
      {children}
    </div>
  )
}

export default DayOfWeek
