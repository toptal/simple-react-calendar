import React, { FC, Fragment, SyntheticEvent, useCallback, useEffect, useState } from 'react'

import {
  IDate,
  IDateRange,
  IMonthHeaderButtonRenderProps,
  IMonthHeaderDayRenderProps,
  IMonthHeaderRenderProps,
  IMonthRenderProps,
  INoticeType,
  ISelectionRange,
  IWeekDayRenderProps,
  IWeekRenderProps,
} from '../../@types'
import { BLOCK_CLASS_NAME, DAYS_OF_WEEK } from '../consts'
import {
  getActiveMonth,
  getAsDate,
  getDayEachDay,
  getDayFormatted,
  getDayIndexIsWeekend,
  getDayIsCurrentMonth,
  getDayIsDisabled,
  getDayIsHighlighted,
  getDayIsNextMonth,
  getDayISOFormatter,
  getDayIsSame,
  getDayIsSelectable,
  getDayIsSelection,
  getDayIsWeekend,
  getIntervalsAsDate,
  getIsMultiRangesIncludesDay,
  getIsRangeIncludesRange,
  getMonth,
  getMonthFormattedName,
  getMonthWeeks,
  getSelectedAsDate,
  getSelection,
  getWeekDays,
} from '../helper'
import Month from '../Month'
import Notice from '../Notice'

export type Props = {
  activeMonth?: IDate
  blockClassName: string
  daysOfWeek: string[]
  disabledIntervals?: IDateRange[]
  highlightedIntervals?: IDateRange[]
  maxDate: IDate
  minDate: IDate
  minNumberOfWeeks?: number
  mode?: 'range' | 'single'
  onDayDisabledEnter?: (date: Date) => void
  onDayEnter?: (date: Date) => void
  onMonthChange?: (date: Date) => void
  onNoticeChange?: (noticeType?: INoticeType) => void
  onSelect?: (selected: IDate | ISelectionRange) => void
  onSelectionProgress?: (selected: IDate | ISelectionRange) => void
  renderMonth?: IMonthRenderProps
  renderMonthHeader?: IMonthHeaderRenderProps
  renderMonthHeaderButton?: IMonthHeaderButtonRenderProps
  renderMonthHeaderDay?: IMonthHeaderDayRenderProps
  renderWeek?: IWeekRenderProps
  renderWeekDay?: IWeekDayRenderProps
  selected?: IDate | ISelectionRange
  selectionRangeLimit?: number
  showDaysOfWeek: boolean
  showMonthName?: boolean
  showMonthNext?: boolean
  showMonthPrev?: boolean
  todate: IDate
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

const Calendar: FC<Props> = (props) => {
  const {
    activeMonth: propActiveMonth,
    blockClassName,
    daysOfWeek,
    disabledIntervals: propDisabledIntervals,
    highlightedIntervals: propHighlightedIntervals,
    maxDate: propMaxDate,
    minDate: propMinDate,
    minNumberOfWeeks,
    mode,
    onDayDisabledEnter,
    onDayEnter,
    onMonthChange,
    onNoticeChange,
    onSelect,
    onSelectionProgress,
    renderMonth,
    renderMonthHeader,
    renderMonthHeaderButton,
    renderMonthHeaderDay,
    renderWeek,
    renderWeekDay,
    selected: propSelected,
    selectionRangeLimit,
    showDaysOfWeek,
    showMonthName,
    showMonthNext,
    showMonthPrev,
    todate: propToday,
    weekStartsOn,
  } = props
  /**
   * Convert String and Number to Date instance
   */
  const maxDate = getAsDate(propMaxDate)
  const minDate = getAsDate(propMinDate)
  const activeMonth = getAsDate(propActiveMonth)
  const today = getAsDate(propToday)
  const selected = getSelectedAsDate(propSelected)
  const highlightedIntervals = getIntervalsAsDate(propHighlightedIntervals) || []
  const disabledIntervals = getIntervalsAsDate(propDisabledIntervals) || []

  /**
   * Hooks
   */
  const [stateSelection, setStateSelection] = useState<Date | ISelectionRange | undefined>(undefined)
  const [stateNoticeType, setNoticeType] = useState<INoticeType | undefined>(undefined)
  const [stateActiveMonth, setStateActiveMonth] = useState<Date>(
    getActiveMonth({ selected, activeMonth, mode: mode as 'range' | 'single', today }),
  )

  useEffect(() => {
    setStateActiveMonth(getActiveMonth({ activeMonth, selected, mode: mode as 'range' | 'single', today }))
    setStateSelection(getSelectedAsDate(propSelected))
  }, [propActiveMonth, today, propSelected, activeMonth, selected, mode])

  /**
   * Stored Helper Logic Functions
   */

  const useGetSelection = useCallback(
    () => getSelection({ selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single' }),
    [selected, onSelectionProgress, stateSelection, mode],
  )

  const useGetDayIndexIsWeekend = useCallback(
    (index: 0 | 1 | 2 | 3 | 4 | 5 | 6) => getDayIndexIsWeekend({ dayIndex: index, weekStartsOn }),
    [weekStartsOn],
  )

  const useGetDayIsHighlighted = useCallback(
    (date: Date) => getIsMultiRangesIncludesDay({ date, intervals: highlightedIntervals }),
    [highlightedIntervals],
  )
  const useGetDayIsSelectable = useCallback(
    (date: Date) => getDayIsSelectable({ maxDate, minDate, date, disabledIntervals }),
    [maxDate, disabledIntervals, minDate],
  )
  const useGetDayIsCurrentMonth = useCallback((date: Date) => getDayIsCurrentMonth({ date, activeMonth }), [activeMonth])
  const useGetDayIsNextMonth = useCallback((date: Date) => getDayIsNextMonth({ date, activeMonth }), [activeMonth])
  const useGetDayIsDisabled = useCallback((date: Date) => getDayIsDisabled({ date, disabledIntervals }), [
    disabledIntervals,
  ])
  const useGetDayIsSelected = useCallback(
    (date: Date) =>
      getDayIsSelection({
        date,
        selection: getSelection({ selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single' }),
      }),
    [mode, onSelectionProgress, selected, stateSelection],
  )
  const useGetDayIsSelectedEnd = useCallback(
    (date: Date) =>
      getDayIsSelection({
        date,
        type: 'end',
        selection: getSelection({ selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single' }),
      }),
    [mode, onSelectionProgress, selected, stateSelection],
  )
  const useGetDayIsSelectedStart = useCallback(
    (date: Date) =>
      getDayIsSelection({
        date,
        type: 'start',
        selection: getSelection({ selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single' }),
      }),
    [mode, onSelectionProgress, selected, stateSelection],
  )
  const useGetDayIsToday = useCallback((date: Date) => getDayIsSame({ date: today as Date, dateToCompare: date }), [
    today,
  ])
  const useGetDayIsWeekend = useCallback((date: Date) => getDayIsWeekend({ date }), [])
  const useGetWeekMonthWeeks = useCallback(
    (activeMonth: Date) => getMonthWeeks({ activeMonth, minNumberOfWeeks, weekStartsOn }),
    [minNumberOfWeeks, weekStartsOn],
  )
  const useGetMonthFormattedName = useCallback((date: Date) => getMonthFormattedName(date), [])
  const useGetDayISOFormatter = useCallback((date: Date) => getDayISOFormatter(date), [])
  const useGetDayEachDay = useCallback(({ start, end }: IDateRange) => getDayEachDay({ start, end }), [])
  const useGetDayFormatted = useCallback((date: Date) => getDayFormatted(date), [])
  const useGetWeekDays = useCallback(() => getWeekDays({ daysOfWeek, dayIndex: weekStartsOn }), [daysOfWeek, weekStartsOn])
  /**
   * Event Handlers
   */
  const handleOnSwitchMonth = ({
    currentTarget: {
      dataset: { calendarValue },
    },
  }: SyntheticEvent<HTMLElement>) => {
    const date = getMonth({ date: stateActiveMonth, offsetInMonth: Number(calendarValue) })

    onMonthChange && onMonthChange(date)
    setStateActiveMonth(date)
  }

  // const handleOnNoticeChange = (noticeType?: INoticeType) => {
  //   onNoticeChange && onNoticeChange(noticeType)
  //   setNoticeType(noticeType)
  // }

  const handleOnSelectionChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    console.log('>>>> handleOnSelectionChange', event)
    // const {start, end, inProgress} = changes

    // if (onSelect && start && (mode !== 'range' || !inProgress)) {
    //   onSelect(mode === 'single' ? start : {start, end})
    // }

    // if (mode === 'range') {
    //   if (onSelectionProgress) {
    //     onSelectionProgress(changes)
    //   } else {
    //     setStateSelection(inProgress ? {start, end} : undefined)
    //   }
    // }
  }

  const handleOnDayClick = ({
    currentTarget: {
      dataset: { calendarValue },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const date = getAsDate(calendarValue as string)

    onSelect && onSelect(date)

    if (mode === 'range') {
      const { start, inProgress } = stateSelection as ISelectionRange

      if (inProgress) {
        const isDisabledWithin = start
          ? getIsRangeIncludesRange({ start: start as Date, end: date, intervals: disabledIntervals })
          : getDayIsSame({ date: date, dateToCompare: stateSelection as Date })

        if (isDisabledWithin) {
          setStateSelection({ start: undefined, end: undefined, inProgress: false })
          setNoticeType('overlapping_with_disabled')

          return
        } else {
          setStateSelection({ ...(stateSelection as ISelectionRange), end: date, inProgress: false })
        }
      } else {
        setStateSelection({ start: date, inProgress: true, end: undefined })
      }
    } else {
      setStateSelection(date)
    }

    setNoticeType(undefined)
  }

  const handleOnDayMouseEnter = ({
    currentTarget: {
      dataset: { calendarValue },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    // const date = getAsDate(calendarValue as string)
    // const {inProgress, start, end} = stateSelection as ISelectionRange
    // onDayEnter && onDayEnter(date)
    // if (!inProgress) return
    // const isDisabledWithin = getIsRangeIncludesDay({date, start: start as Date, end: end as Date})
    // if (!isDisabledWithin) return
    // const dateLimit = getDay({start: start as Date, offset: selectionRangeLimit})
    // if (getDayIsSame({day1: day, day2: end})) {
    //   if (!selectionRangeLimit || (selectionRangeLimit && getDayIsBefore({day1: day, date2: dateLimit}))) {
    //   }
    // }
  }

  const handleOnDisabledDayClick = ({
    currentTarget: {
      dataset: { calendarValue },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    // const day = getAsDate(calendarValue as string)
    // onDayDisabledHover && onDayDisabledHover(day)
    // console.log('>>>> handleOnDisabledDayClick', event)
  }

  const handleOnDisabledDayMouseEnter = ({
    currentTarget: {
      dataset: { calendarValue },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {}

  const children = (
    <Fragment>
      {!!stateNoticeType && <Notice blockClassName={blockClassName} type={stateNoticeType as INoticeType} />}
      <Month
        activeMonth={stateActiveMonth}
        blockClassName={blockClassName}
        customRender={renderMonth}
        daysOfWeek={daysOfWeek}
        getDayEachDay={useGetDayEachDay}
        getDayFormatted={useGetDayFormatted}
        getDayIndexIsWeekend={useGetDayIndexIsWeekend}
        getDayIsCurrentMonth={useGetDayIsCurrentMonth}
        getDayIsDisabled={useGetDayIsDisabled}
        getDayIsHighlighted={useGetDayIsHighlighted}
        getDayIsNextMonth={useGetDayIsNextMonth}
        getDayISOFormatter={useGetDayISOFormatter}
        getDayIsSelectable={useGetDayIsSelectable}
        getDayIsSelected={useGetDayIsSelected}
        getDayIsSelectedEnd={useGetDayIsSelectedEnd}
        getDayIsSelectedStart={useGetDayIsSelectedStart}
        getDayIsToday={useGetDayIsToday}
        getDayIsWeekend={useGetDayIsWeekend}
        getMonthFormattedName={useGetMonthFormattedName}
        getMonthWeeks={useGetWeekMonthWeeks}
        getWeekDays={useGetWeekDays}
        handleOnDayClick={handleOnDayClick}
        handleOnDayMouseEnter={handleOnDayMouseEnter}
        handleOnDisabledDayClick={handleOnDisabledDayClick}
        handleOnDisabledDayMouseEnter={handleOnDisabledDayMouseEnter}
        handleOnSwitchMonth={handleOnSwitchMonth}
        isMonthNextEnabled
        isMonthPrevEnabled
        renderMonthHeader={renderMonthHeader}
        renderMonthHeaderButton={renderMonthHeaderButton}
        renderMonthHeaderDay={renderMonthHeaderDay}
        renderWeek={renderWeek}
        renderWeekDay={renderWeekDay}
        showDaysOfWeek={showDaysOfWeek}
        showMonthName={showMonthName}
        showMonthNext={showMonthNext}
        showMonthPrev={showMonthPrev}
        weekStartsOn={weekStartsOn}
      />
    </Fragment>
  )

  return <Fragment>{children}</Fragment>
}

Calendar.defaultProps = {
  blockClassName: BLOCK_CLASS_NAME,
  daysOfWeek: DAYS_OF_WEEK,
  disabledIntervals: [],
  mode: 'single',
  showDaysOfWeek: true,
  showMonthName: true,
  todate: new Date(),
  weekStartsOn: 1,
}

Calendar.displayName = 'Calendar'

export default Calendar
