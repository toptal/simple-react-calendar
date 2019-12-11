import React, { FC, SyntheticEvent } from 'react'

import { IMonthHeaderButtonRenderProps, IMonthHeaderDayRenderProps, IMonthHeaderRenderProps } from '../../@types'
import { IGetDaysOfWeek } from '../helper'
import MonthHeaderButton from '../MonthHeaderButton'
import MonthHeaderDay from '../MonthHeaderDay'

export type Props = {
  activeMonth: Date
  blockClassName: string
  customRender?: IMonthHeaderRenderProps
  daysOfWeek: string[]
  getDaysOfWeek: (data: IGetDaysOfWeek) => string[]
  getMonthFormattedName: (day: Date) => string
  handleOnSwitchMonth: (event: SyntheticEvent<HTMLElement>) => void
  isMonthNextEnabled: boolean
  isMonthPrevEnabled: boolean
  renderMonthHeaderButton?: IMonthHeaderButtonRenderProps
  renderMonthHeaderDay?: IMonthHeaderDayRenderProps
  showDaysOfWeek: boolean
  showMonthName: boolean
  showMonthNext: boolean
  showMonthPrev: boolean
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

const MonthHeader: FC<Props> = (props) => {
  const {
    activeMonth,
    blockClassName,
    customRender,
    daysOfWeek,
    getDaysOfWeek,
    getMonthFormattedName,
    handleOnSwitchMonth,
    isMonthNextEnabled,
    isMonthPrevEnabled,
    renderMonthHeaderButton,
    renderMonthHeaderDay,
    showDaysOfWeek,
    showMonthName,
    showMonthNext,
    showMonthPrev,
    weekStartsOn,
  } = props

  if (customRender) {
    return customRender(props)
  }

  if (!showMonthPrev && !showMonthName && !showMonthNext && !showDaysOfWeek) return null

  return (
    <header className={`${blockClassName}-month_header`}>
      <div className={`${blockClassName}-month_header_wrapper`}>
        {showMonthPrev && (
          <MonthHeaderButton
            blockClassName={blockClassName}
            customRender={renderMonthHeaderButton}
            enabled={isMonthPrevEnabled}
            onClick={handleOnSwitchMonth}
            type="prev"
          />
        )}
        {showMonthName && (
          <h3 className={`${blockClassName}-month_header_title`}>{getMonthFormattedName(activeMonth)}</h3>
        )}
        {showMonthNext && (
          <MonthHeaderButton
            blockClassName={blockClassName}
            customRender={renderMonthHeaderButton}
            enabled={isMonthNextEnabled}
            onClick={handleOnSwitchMonth}
            type="next"
          />
        )}
      </div>
      <div className={`${blockClassName}-month_header_days`}>
        {showDaysOfWeek &&
          getDaysOfWeek({dayIndex: weekStartsOn, daysOfWeek}).map((day, index) => (
            <MonthHeaderDay
              blockClassName={blockClassName}
              customRender={renderMonthHeaderDay}
              day={day}
              isWeekend={index >= weekStartsOn + 5}
              key={day}
            />
          ))}
      </div>
    </header>
  )
}

MonthHeader.displayName = 'MonthHeader'

export default MonthHeader
