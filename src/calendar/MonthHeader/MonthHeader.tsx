import React, { FC, SyntheticEvent } from 'react'

import { IMonthHeaderButtonRenderProps, IMonthHeaderDayRenderProps, IMonthHeaderRenderProps } from '../../@types'
import MonthHeaderButton from '../MonthHeaderButton'
import MonthHeaderDay from '../MonthHeaderDay'

export type Props = {
  activeMonth: Date
  blockClassName: string
  customRender?: IMonthHeaderRenderProps
  getMonthFormattedName: (day: Date) => string
  getWeekDays: () => string[]
  getDayIndexIsWeekend: (index: 0 | 1 | 2 | 3 | 4 | 5 | 6) => boolean
  handleOnSwitchMonth: (event: SyntheticEvent<HTMLElement>) => void
  isMonthNextEnabled: boolean
  isMonthPrevEnabled: boolean
  renderMonthHeaderButton?: IMonthHeaderButtonRenderProps
  renderMonthHeaderDay?: IMonthHeaderDayRenderProps
  showDaysOfWeek: boolean
  showMonthName: boolean
  showMonthNext: boolean
  showMonthPrev: boolean
}

const MonthHeader: FC<Props> = (props) => {
  const {
    activeMonth,
    blockClassName,
    customRender,
    getMonthFormattedName,
    getWeekDays,
    getDayIndexIsWeekend,
    handleOnSwitchMonth,
    isMonthNextEnabled,
    isMonthPrevEnabled,
    renderMonthHeaderButton,
    renderMonthHeaderDay,
    showDaysOfWeek,
    showMonthName,
    showMonthNext,
    showMonthPrev,
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
            handleOnClick={handleOnSwitchMonth}
            type='prev'
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
            handleOnClick={handleOnSwitchMonth}
            type='next'
          />
        )}
      </div>
      <div className={`${blockClassName}-month_header_days`}>
        {showDaysOfWeek &&
          getWeekDays().map((day, index) => (
            <MonthHeaderDay
              blockClassName={blockClassName}
              customRender={renderMonthHeaderDay}
              day={day}
              isWeekend={getDayIndexIsWeekend(index)}
              key={day}
            />
          ))}
      </div>
    </header>
  )
}

MonthHeader.displayName = 'MonthHeader'

export default MonthHeader
