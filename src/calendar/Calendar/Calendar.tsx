import React, { FC, Fragment, SyntheticEvent, useCallback, useEffect, useState } from 'react'

import {
  IDate,
  IDateRange,
  IDayOfWeekRenderProps,
  IDayRenderProps,
  IDaysOfWeekRenderProps,
  IMonthHeaderRenderProps,
  IMonthRenderProps,
  INoticeType,
  ISelectionRange,
  IWeekRenderProps,
} from '../../@types'
import { BLOCK_CLASS_NAME, DAYS_OF_WEEK } from './consts'
import {
  getActiveMonth,
  getAsDate,
  getDay,
  getDayEachDay,
  getDayIsBefore,
  getDayIsCurrentMonth,
  getDayIsDisabled,
  getDayIsHighlighted,
  getDayIsNextMonth,
  getDayISOFormatter,
  getDayIsSame,
  getDayIsSelectable,
  getDayIsSelection,
  getDayIsWeekend,
  getHighlighted,
  getIntervalsAsDate,
  getIsRangeOverlap,
  getMonth,
  getMonthFormattedName,
  getMonthWeeks,
  getSelectedAsDate,
  getSelection,
} from './helper'
import Month from './month'
import Notice from './notice'

export type Props = {
  activeMonth: IDate
  blockClassName: string
  daysOfWeek: string[]
  disabledIntervals?: IDateRange[]
  highlightedIntervals?: IDateRange[]
  maxDate: IDate
  minDate: IDate
  minNumberOfWeeks?: number
  mode?: 'range' | 'single'
  onDayEnter?: (day: Date) => void
  onDayDisabledEnter?: (day: Date) => void
  onMonthChange?: (day: Date) => void
  onNoticeChange?: (noticeType?: INoticeType) => void
  onSelect?: (selected: IDate | ISelectionRange) => void
  onSelectionProgress?: (selected: IDate | ISelectionRange) => void
  selectionRangeLimit?: number
  renderDay?: IDayRenderProps
  renderDayOfWeek?: IDayOfWeekRenderProps
  renderDaysOfWeek?: IDaysOfWeekRenderProps
  renderMonth?: IMonthRenderProps
  renderMonthHeader?: IMonthHeaderRenderProps
  renderWeek?: IWeekRenderProps
  selected?: IDate | ISelectionRange
  showDaysOfWeek: boolean
  today: IDate
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
    onDayEnter,
    onDayDisabledEnter,
    onMonthChange,
    onNoticeChange,
    onSelect,
    onSelectionProgress,
    selectionRangeLimit,
    renderDay,
    renderDayOfWeek,
    renderDaysOfWeek,
    renderMonth,
    renderMonthHeader,
    renderWeek,
    selected: propSelected,
    showDaysOfWeek,
    today: propToday,
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
  const highlightedIntervals = getIntervalsAsDate(propHighlightedIntervals)
  const disabledIntervals = getIntervalsAsDate(propDisabledIntervals)

  /**
   * Hooks
   */
  const [stateSelection, setStateSelection] = useState<Date | ISelectionRange | undefined>(undefined)
  const [stateNoticeType, setNoticeType] = useState<INoticeType | undefined>(undefined)
  const [stateActiveMonth, setStateActiveMonth] = useState<Date>(
    getActiveMonth({selected, activeMonth, mode: mode as 'range' | 'single', today})
  )

  useEffect(() => {
    setStateActiveMonth(getActiveMonth({activeMonth, selected, mode: mode as 'range' | 'single', today}))
    setStateSelection(getSelectedAsDate(propSelected))
  }, [propActiveMonth, today, propSelected, activeMonth, selected, mode])

  const {start, end} = getHighlighted({highlightedIntervals})

  /**
   * Stored Helper Logic Functions
   */
  const useGetSelection = useCallback(
    () => getSelection({selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single'}),
    [selected, onSelectionProgress, stateSelection, mode]
  )
  const useGetDayIsHighlighted = useCallback(
    (date: Date) => getDayIsHighlighted({date, startDay: start, endDay: end}),
    [end, start]
  )
  const useGetDayIsSelectable = useCallback(
    (date: Date) => getDayIsSelectable({maxDate, minDate, date, disabledIntervals}),
    [maxDate, disabledIntervals, minDate]
  )
  const useGetDayIsCurrentMonth = useCallback((date: Date) => getDayIsCurrentMonth({date, activeMonth}), [activeMonth])
  const useGetDayIsNextMonth = useCallback((date: Date) => getDayIsNextMonth({date, activeMonth}), [activeMonth])
  const useGetDayIsDisabled = useCallback((date: Date) => getDayIsDisabled({date, disabledIntervals}), [
    disabledIntervals,
  ])
  const useGetDayIsSelected = useCallback(
    (day: Date) =>
      getDayIsSelection({
        day,
        selection: getSelection({selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single'}),
      }),
    [mode, onSelectionProgress, selected, stateSelection]
  )
  const useGetDayIsSelectedEnd = useCallback(
    (day: Date) =>
      getDayIsSelection({
        day,
        type: 'end',
        selection: getSelection({selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single'}),
      }),
    [mode, onSelectionProgress, selected, stateSelection]
  )
  const useGetDayIsSelectedStart = useCallback(
    (day: Date) =>
      getDayIsSelection({
        day,
        type: 'start',
        selection: getSelection({selected, onSelectionProgress, stateSelection, mode: mode as 'range' | 'single'}),
      }),
    [mode, onSelectionProgress, selected, stateSelection]
  )
  const useGetDayIsToday = useCallback((day: Date) => getDayIsSame({date: today as Date, dateToCompare: day}), [today])
  const useGetDayIsWeekend = useCallback((day: Date) => getDayIsWeekend({day}), [])
  const useGetWeekMonthWeeks = useCallback(
    (activeMonth: Date) => getMonthWeeks({activeMonth, minNumberOfWeeks, weekStartsOn}),
    [minNumberOfWeeks, weekStartsOn]
  )
  const useGetMonthFormattedName = useCallback((day: Date) => getMonthFormattedName(day), [])
  const useGetDayISOFormatter = useCallback((day: Date) => getDayISOFormatter(day), [])
  const useGetDayEachDay = useCallback(({start, end}: IDateRange) => getDayEachDay({start, end}), [])

  /**
   * Event Handlers
   */
  const handleOnSwitchMonth = ({
    currentTarget: {
      dataset: {calendarValue},
    },
  }: SyntheticEvent<HTMLElement>) => {
    const date = getMonth({date: stateActiveMonth, offsetInMonth: Number(calendarValue)})

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
      dataset: {calendarValue},
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const day = getAsDate(calendarValue as string)

    onSelect && onSelect(day)

    if (mode === 'range') {
      const {start, inProgress} = stateSelection as ISelectionRange

      if (inProgress) {
        const isDisabledWithin = getRangeIncludesDisabledInterval({start, end: day, disabledIntervals})

        if (isDisabledWithin) {
          setStateSelection({start: undefined, end: undefined, inProgress: false})
          setNoticeType('overlapping_with_disabled')

          return
        } else {
          setStateSelection({...(stateSelection as ISelectionRange), end: day, inProgress: false})
        }
      } else {
        setStateSelection({start: day, inProgress: true, end: undefined})
      }
    } else {
      setStateSelection(day)
    }

    setNoticeType(undefined)
  }

  const handleOnDayMouseEnter = ({
    currentTarget: {
      dataset: {calendarValue},
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const day = getAsDate(calendarValue as string)
    const {inProgress, start, end} = stateSelection as ISelectionRange

    onDayEnter && onDayEnter(day)

    if (!inProgress) return

    const isDisabledWithin = getIsRangeOverlap({selection: stateSelection as ISelectionRange, day})

    if (!isDisabledWithin) return

    const dateLimit = getDay({start, offset: selectionRangeLimit})

    if (getDayIsSame({day1: day, day2: end})) {
      if (!selectionRangeLimit || (selectionRangeLimit && getDayIsBefore({day1: day, date2: dateLimit}))) {
      }
    }
  }

  const handleOnDisabledDayClick = ({
    currentTarget: {
      dataset: {calendarValue},
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const day = getAsDate(calendarValue as string)

    onDayDisabledHover && onDayDisabledHover(day)
    console.log('>>>> handleOnDisabledDayClick', event)
  }

  const handleOnDisabledDayHover = ({
    currentTarget: {
      dataset: {calendarValue},
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const day = getAsDate(calendarValue as string)

    onDayDisabledHover && onDayDisabledHover(day)
    console.log('>>>> handleOnDisabledDayClick', event)
  }

  const children = (
    <Fragment>
      {!!stateNoticeType && <Notice blockClassName={blockClassName} type={stateNoticeType as INoticeType} />}
      <Month
        activeMonth={stateActiveMonth}
        blockClassName={blockClassName}
        customRender={renderMonth}
        daysOfWeek={daysOfWeek}
        showDaysOfWeek={showDaysOfWeek}
        getDayEachDay={useGetDayEachDay}
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
        getWeekMonthWeeks={useGetWeekMonthWeeks}
        handleOnDayClick={handleOnDayClick}
        handleOnDayMouseEnter={handleOnDayMouseEnter}
        handleOnDisabledDayClick={handleOnDisabledDayClick}
        renderDay={renderDay}
        renderDayOfWeek={renderDayOfWeek}
        renderDaysOfWeek={renderDaysOfWeek}
        renderWeek={renderWeek}
        weekStartsOn={weekStartsOn}
      />
    </Fragment>
  )

  return <div className={blockClassName}>{children}</div>
}

Calendar.defaultProps = {
  blockClassName: BLOCK_CLASS_NAME,
  daysOfWeek: DAYS_OF_WEEK,
  mode: 'single',
  showDaysOfWeek: true,
  today: new Date(),
  weekStartsOn: 1,
}

Calendar.displayName = 'Calendar'

export default Calendar
