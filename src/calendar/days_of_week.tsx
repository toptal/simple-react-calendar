import React, { FC } from 'react'

import { IDaysOfWeekRenderProps, RenderPropsDayOfWeek } from '../@types'

const FRIDAY_INDEX = 4

export type Props = {
  blockClassName: string
  customRender?: IDaysOfWeekRenderProps
  daysOfWeek: string[]
  renderDayOfWeek: RenderPropsDayOfWeek
  weekStartsOn: number
}

interface IGetDaysOfWeek {
  daysOfWeek: string[]
  dayIndex: number
}

const getDaysOfWeek = ({ daysOfWeek, dayIndex }: IGetDaysOfWeek): string[] => {
  const adjustedIndex = dayIndex - 1

  return daysOfWeek
    .slice(adjustedIndex)
    .concat(daysOfWeek.slice(0, adjustedIndex))
}

const DaysOfWeek: FC<Props> = props => {
  const {
    blockClassName,
    weekStartsOn,
    customRender,
    renderDayOfWeek,
    daysOfWeek
  } = props
  const slicedDaysOfWeek = getDaysOfWeek({ dayIndex: weekStartsOn, daysOfWeek })

  const children = slicedDaysOfWeek.map((day, index) => renderDayOfWeek({
    blockClassName,
    day,
    isWeekend: index > FRIDAY_INDEX,
    key: day
  }))

  if (customRender) {
    return customRender({
      ...props,
      children
    })
  }

  return <div className={`${blockClassName}-days_of_week`}>{children}</div>
}

DaysOfWeek.displayName = 'DaysOfWeek'

// TODO: extract to a separate helper
// @ts-ignore
DaysOfWeek.getDaysOfWeek = getDaysOfWeek

export default DaysOfWeek
