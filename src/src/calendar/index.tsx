import {DateTime, Info} from 'luxon'
import * as React from 'react'

import {Month, MonthHeader, Notice} from '..'
import {getCurrentTime, isSameDate} from '../_lib'
import {BLOCK_CLASS_NAME} from '../defaultSettings'
import {
  CalendarRangeSelectedDate,
  CalendarSelectionI,
  CalendarSelectionRangeI,
  CalendarSelectionSingleI,
  CalendarSelectionTypeEnum,
  CalendarTypeEnum,
  NoticeTypeEnum,
} from '../types'

const emptyHighlight = {start: null, end: null}

export interface CalendarProps {
  activeMonth?: DateTime
  blockClassName?: string
  daysOfWeek?: Array<string>
  disableDaysOfWeek?: boolean
  disabledIntervals?: {
    start: DateTime
    end: DateTime
  }[]
  headerNextArrow?: React.ReactNode
  headerNextTitle?: string
  headerPrevArrow?: React.ReactNode
  headerPrevTitle?: string
  highlighted?: CalendarSelectionRangeI
  maxDate?: DateTime
  minDate?: DateTime
  minNumberOfWeeks?: number
  mode?: CalendarTypeEnum
  MonthHeaderComponent?: React.ReactNode | ((...args: any[]) => any)
  NoticeComponent?: React.ReactNode | ((...args: any[]) => any)
  onDayHover?(selection: CalendarRangeSelectedDate): void
  onMonthChange?(date: DateTime): void
  onSelect?(selection: CalendarRangeSelectedDate): void
  onSelectionProgress?(selection: CalendarRangeSelectedDate): void
  rangeLimit?: number
  selected?: CalendarSelectionI
  today?: DateTime
}

type CalendarState = {
  activeMonth: DateTime
  selection: CalendarSelectionRangeI | DateTime
  shownNoticeType?: NoticeTypeEnum
}

export default class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props) {
    super(props)

    this.state = {
      activeMonth: this.getInitialMonth(props),
      selection: null,
      shownNoticeType: undefined,
    }
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
    daysOfWeek: Info.weekdays('short'),
    mode: CalendarTypeEnum.single,
    today: getCurrentTime(),
  }

  componentWillReceiveProps({activeMonth}) {
    if (activeMonth && this.props.activeMonth && !isSameDate(activeMonth, this.props.activeMonth)) {
      this.setState({activeMonth: activeMonth.startOf('day')})
    }
  }

  private isSingleTypeMode(): boolean {
    return this.props.mode === CalendarTypeEnum.single
  }

  private getInitialMonth(props: CalendarProps): DateTime {
    const {selected, activeMonth, today} = props || this.props

    if (activeMonth && activeMonth.isValid) {
      return activeMonth
    } else {
      if (selected) {
        const selectionStart = this.isSingleTypeMode() ? selected : (selected as CalendarSelectionRangeI).start

        if (selectionStart && selectionStart.isValid) {
          return selectionStart.startOf('month')
        }
      }
    }

    return today ? today.startOf('month') : getCurrentTime().startOf('month')
  }

  private getActiveMonth = (): DateTime => {
    const {onMonthChange, activeMonth} = this.props

    if (onMonthChange) {
      return activeMonth
    } else {
      return this.state.activeMonth
    }
  }

  private getHighlightedDate = (): CalendarSelectionRangeI => {
    const {highlighted} = this.props

    if (
      !highlighted ||
      !highlighted.end ||
      !highlighted.end.isValid ||
      !highlighted.start ||
      !highlighted.start.isValid
    ) {
      return emptyHighlight
    }

    return highlighted
  }

  private getSelection = (): CalendarSelectionRangeI => {
    const start = this.getDateSelectionDateStart()
    const end = this.getDateSelectionDateEnd()

    if (start && start.isValid && (end && end.isValid)) {
      return {start, end}
    } else {
      return emptyHighlight
    }
  }

  private getDateSelectionDateStart = (): DateTime => this.getDateSelectionDate(CalendarSelectionTypeEnum.start)

  private getDateSelectionDateEnd = (): DateTime => this.getDateSelectionDate(CalendarSelectionTypeEnum.end)

  private getDateSelectionDate = (dateType: CalendarSelectionTypeEnum): DateTime => {
    const {selected, onSelectionProgress} = this.props
    const {selection} = this.state

    if (this.isSingleTypeMode()) {
      return selected as CalendarSelectionSingleI
    } else {
      if (!onSelectionProgress && selection) {
        return selection[dateType]
      } else {
        return selected && selected[dateType]
      }
    }
  }

  handleOnMonthChange = (activeMonth: DateTime): void => {
    const {onMonthChange} = this.props

    onMonthChange && onMonthChange(activeMonth)
    this.setState({activeMonth})
  }

  handleOnChange = (selection: CalendarRangeSelectedDate): void => {
    const {start, end, inProgress} = selection
    const {onSelect, onSelectionProgress} = this.props
    const isSingleMode = this.isSingleTypeMode()

    if (onSelect && start && (isSingleMode || !inProgress)) {
      onSelect(isSingleMode ? start : {start, end})
    }

    if (!isSingleMode) {
      if (onSelectionProgress) {
        onSelectionProgress(selection)
      } else {
        this.setState({selection: inProgress ? {start, end} : null})
      }
    }
  }

  handleOnNoticeChange = (noticeType: NoticeTypeEnum | undefined): void => this.setState({shownNoticeType: noticeType})

  render() {
    const {
      blockClassName,
      disableDaysOfWeek,
      headerNextArrow,
      headerNextTitle,
      headerPrevArrow,
      headerPrevTitle,
      maxDate,
      minDate,
      minNumberOfWeeks,
      mode,
      onDayHover,
      disabledIntervals,
      rangeLimit,
      daysOfWeek,
      today,
    } = this.props
    const {shownNoticeType} = this.state
    const selection = this.getSelection()
    const highlight = this.getHighlightedDate()
    const activeMonth = this.getActiveMonth()

    return (
      <div className={blockClassName}>
        {!!shownNoticeType && <Notice blockClassName={blockClassName as string} type={shownNoticeType} />}
        <MonthHeader
          activeMonth={activeMonth}
          blockClassName={blockClassName as string}
          headerNextArrow={headerNextArrow}
          headerNextTitle={headerNextTitle}
          headerPrevArrow={headerPrevArrow}
          headerPrevTitle={headerPrevTitle}
          maxDate={maxDate}
          minDate={minDate}
          onMonthChange={this.handleOnMonthChange}
        />
        <Month
          activeMonth={activeMonth}
          blockClassName={blockClassName as string}
          daysOfWeek={daysOfWeek as Array<string>}
          disableDaysOfWeek={disableDaysOfWeek}
          disabledIntervals={disabledIntervals}
          highlightedEnd={highlight.end}
          highlightedStart={highlight.start}
          maxDate={maxDate}
          minDate={minDate}
          minNumberOfWeeks={minNumberOfWeeks}
          mode={mode as CalendarTypeEnum}
          onChange={this.handleOnChange}
          onDayHover={onDayHover}
          onNoticeChange={this.handleOnNoticeChange}
          rangeLimit={rangeLimit}
          selectedMax={selection.end}
          selectedMin={selection.start}
          today={today as DateTime}
        />
      </div>
    )
  }
}
