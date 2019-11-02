import React, { FC, Fragment, SyntheticEvent } from 'react'

import {
  IDateRange,
  IMonthHeaderButtonRenderProps,
  IMonthHeaderDayRenderProps,
  IMonthHeaderRenderProps,
  IMonthRenderProps,
  IWeekDayRenderProps,
  IWeekRenderProps,
} from '../../@types'
import { IGetDaysOfWeek, IMonthWeeks } from '../helper'
import MonthHeader from '../MonthHeader'
import Week from '../Week'

export type Props = {
  activeMonth: Date
  blockClassName: string
  customRender?: IMonthRenderProps
  daysOfWeek: string[]
  getDayEachDay: ({start, end}: IDateRange) => Date[]
  getDayFormatted: (date: Date) => string
  getDayIsCurrentMonth: (date: Date) => boolean
  getDayIsDisabled: (date: Date) => boolean
  getDayIsHighlighted: (date: Date) => boolean
  getDayIsNextMonth: (date: Date) => boolean
  getDayISOFormatter: (date: Date) => string
  getDayIsSelectable: (date: Date) => boolean
  getDayIsSelected: (date: Date) => boolean
  getDayIsSelectedEnd: (date: Date) => boolean
  getDayIsSelectedStart: (date: Date) => boolean
  getDayIsToday: (date: Date) => boolean
  getDayIsWeekend: (date: Date) => boolean
  getDaysOfWeek: (data: IGetDaysOfWeek) => string[]
  getMonthFormattedName: (date: Date) => string
  getWeekMonthWeeks: (activeMonth: Date) => IMonthWeeks[]
  handleOnDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDayMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDisabledDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnSwitchMonth: (event: SyntheticEvent<HTMLElement>) => void
  isMonthNextEnabled: boolean
  isMonthPrevEnabled: boolean
  renderMonthHeader?: IMonthHeaderRenderProps
  renderMonthHeaderButton?: IMonthHeaderButtonRenderProps
  renderMonthHeaderDay?: IMonthHeaderDayRenderProps
  renderWeek?: IWeekRenderProps
  renderWeekDay?: IWeekDayRenderProps
  showDaysOfWeek: boolean
  showMonthName: boolean
  showMonthNext: boolean
  showMonthPrev: boolean
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

const Month: FC<Props> = (props) => {
  const {
    activeMonth,
    blockClassName,
    customRender,
    daysOfWeek,
    getDayEachDay,
    getDayFormatted,
    getDayIsCurrentMonth,
    getDayIsDisabled,
    getDayIsHighlighted,
    getDayIsNextMonth,
    getDayISOFormatter,
    getDayIsSelectable,
    getDayIsSelected,
    getDayIsSelectedEnd,
    getDayIsSelectedStart,
    getDayIsToday,
    getDayIsWeekend,
    getDaysOfWeek,
    getMonthFormattedName,
    getWeekMonthWeeks,
    handleOnDayClick,
    handleOnDayMouseEnter,
    handleOnDisabledDayClick,
    handleOnSwitchMonth,
    isMonthNextEnabled,
    isMonthPrevEnabled,
    renderMonthHeader,
    renderMonthHeaderButton,
    renderMonthHeaderDay,
    renderWeek,
    renderWeekDay,
    showDaysOfWeek,
    showMonthName,
    showMonthNext,
    showMonthPrev,
    weekStartsOn,
  } = props

  const children = (
    <Fragment>
      <MonthHeader
        activeMonth={activeMonth}
        blockClassName={blockClassName}
        customRender={renderMonthHeader}
        daysOfWeek={daysOfWeek}
        getDaysOfWeek={getDaysOfWeek}
        getMonthFormattedName={getMonthFormattedName}
        handleOnSwitchMonth={handleOnSwitchMonth}
        isMonthNextEnabled={isMonthNextEnabled}
        isMonthPrevEnabled={isMonthPrevEnabled}
        renderMonthHeaderButton={renderMonthHeaderButton}
        renderMonthHeaderDay={renderMonthHeaderDay}
        showDaysOfWeek={showDaysOfWeek}
        showMonthName={showMonthName}
        showMonthNext={showMonthNext}
        showMonthPrev={showMonthPrev}
        weekStartsOn={weekStartsOn}
      />
      {getWeekMonthWeeks(activeMonth).map(({weekStart, weekNumber, weekEnd}: IMonthWeeks) => (
        <Week
          blockClassName={blockClassName}
          customRender={renderWeek}
          getDayEachDay={getDayEachDay}
          getDayFormatted={getDayFormatted}
          getDayIsCurrentMonth={getDayIsCurrentMonth}
          getDayIsDisabled={getDayIsDisabled}
          getDayIsHighlighted={getDayIsHighlighted}
          getDayIsNextMonth={getDayIsNextMonth}
          getDayISOFormatter={getDayISOFormatter}
          getDayIsSelectable={getDayIsSelectable}
          getDayIsSelected={getDayIsSelected}
          getDayIsSelectedEnd={getDayIsSelectedEnd}
          getDayIsSelectedStart={getDayIsSelectedStart}
          getDayIsToday={getDayIsToday}
          getDayIsWeekend={getDayIsWeekend}
          handleOnDayClick={handleOnDayClick}
          handleOnDayMouseEnter={handleOnDayMouseEnter}
          handleOnDisabledDayClick={handleOnDisabledDayClick}
          key={weekNumber}
          renderWeekDay={renderWeekDay}
          weekEnd={weekEnd}
          weekNumber={weekNumber}
          weekStart={weekStart}
        />
      ))}
    </Fragment>
  )

  if (customRender) {
    return customRender(props)
  }

  return <div className={`${blockClassName}-month`}>{children}</div>
}

Month.displayName = 'Month'

export default Month
