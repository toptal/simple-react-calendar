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
import { IMonthWeeks } from '../helper'
import MonthHeader from '../MonthHeader'
import Week from '../Week'

export type Props = {
  activeMonth: Date
  blockClassName: string
  customRender?: IMonthRenderProps
  getDayEachDay: ({ start, end }: IDateRange) => Date[]
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
  getDayIndexIsWeekend: (index: 0 | 1 | 2 | 3 | 4 | 5 | 6) => boolean
  getMonthFormattedName: (date: Date) => string
  getWeekDays: () => string[]
  getMonthWeeks: (activeMonth: Date) => IMonthWeeks[]
  handleOnDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDayMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDisabledDayClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  handleOnDisabledDayMouseEnter: (event: SyntheticEvent<HTMLButtonElement>) => void
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
}

const Month: FC<Props> = (props) => {
  const {
    activeMonth,
    blockClassName,
    customRender,
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
    getDayIndexIsWeekend,
    getMonthFormattedName,
    getWeekDays,
    getMonthWeeks,
    handleOnDayClick,
    handleOnDayMouseEnter,
    handleOnDisabledDayClick,
    handleOnDisabledDayMouseEnter,
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
  } = props

  const children = (
    <Fragment>
      <MonthHeader
        activeMonth={activeMonth}
        blockClassName={blockClassName}
        customRender={renderMonthHeader}
        getDayIndexIsWeekend={getDayIndexIsWeekend}
        getMonthFormattedName={getMonthFormattedName}
        getWeekDays={getWeekDays}
        handleOnSwitchMonth={handleOnSwitchMonth}
        isMonthNextEnabled={isMonthNextEnabled}
        isMonthPrevEnabled={isMonthPrevEnabled}
        renderMonthHeaderButton={renderMonthHeaderButton}
        renderMonthHeaderDay={renderMonthHeaderDay}
        showDaysOfWeek={showDaysOfWeek}
        showMonthName={showMonthName}
        showMonthNext={showMonthNext}
        showMonthPrev={showMonthPrev}
      />
      {getMonthWeeks(activeMonth).map(({ weekStart, weekNumber, weekEnd }: IMonthWeeks) => (
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
          handleOnDisabledDayMouseEnter={handleOnDisabledDayMouseEnter}
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
