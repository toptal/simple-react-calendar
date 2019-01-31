import * as Luxon from 'luxon'
import * as React from 'react'

import {getDifferenceInDays, isAfter, isBefore, isIntervalsOverlapping, isSameDate} from '../_lib'
import DaysOfWeek from '../days_of_week'
import {CalendarRangeSelectedDate, CalendarSelectionRangeI, CalendarTypeEnum, NoticeTypeEnum} from '../types'
import Week from '../week'

export interface MonthProps {
  activeMonth: Luxon.DateTime
  blockClassName: string
  disableDaysOfWeek?: boolean
  disabledIntervals?: {
    start: Luxon.DateTime
    end: Luxon.DateTime
  }[]
  highlightedEnd?: Luxon.DateTime
  highlightedStart?: Luxon.DateTime
  maxDate?: Luxon.DateTime
  minDate?: Luxon.DateTime
  minNumberOfWeeks?: number
  mode: CalendarTypeEnum
  onChange(selection: CalendarRangeSelectedDate): void
  onDayHover?(selection: CalendarRangeSelectedDate): void
  onNoticeChange(noticeType: NoticeTypeEnum | undefined): void
  rangeLimit?: number
  selectedMax?: Luxon.DateTime
  selectedMin?: Luxon.DateTime
  today: Luxon.DateTime
  daysOfWeek: Array<string>
}

export interface MonthState {
  selectionInProgress: boolean
  selectionStart: Luxon.DateTime
  selectionEnd: Luxon.DateTime
}

export default class Month extends React.Component<MonthProps> {
  protected selectionInProgress: boolean = false
  protected selectionStart: Luxon.DateTime = null
  protected selectionEnd: Luxon.DateTime = null

  private pushUpdate() {
    const {selectionEnd, selectionStart, selectionInProgress} = this
    const {onChange, rangeLimit} = this.props

    let start, end

    if (selectionStart && selectionEnd) {
      if (isBefore(selectionStart, selectionEnd)) {
        start = selectionStart
        end = selectionEnd
      } else {
        start = selectionEnd
        end = selectionStart
      }
      if (rangeLimit && rangeLimit < getDifferenceInDays({start, end})) {
        end = start.plus({day: rangeLimit})
      }
    }

    return onChange({
      start,
      end,
      inProgress: selectionInProgress,
    })
  }

  private pushNoticeUpdate(noticeType: NoticeTypeEnum | undefined): void {
    return this.props.onNoticeChange(noticeType)
  }

  private isDisabledWithin({start, end}: CalendarSelectionRangeI): boolean {
    const {disabledIntervals} = this.props

    if (!disabledIntervals) return true

    for (let i = 0; i < disabledIntervals.length; i++) {
      return !isIntervalsOverlapping({start, end}, disabledIntervals[i])
    }

    return false
  }

  private getMaxDate(): Date {
    const {rangeLimit, maxDate} = this.props
    const {selectionStart} = this

    const calcEndDate = selectionStart.plus({days: rangeLimit})

    if (maxDate) {
      const isCalcEndDayBefore = isBefore(calcEndDate, maxDate)
      return isCalcEndDayBefore ? calcEndDate : maxDate
    } else {
      return calcEndDate
    }
  }

  private getWeeks(): Array<Luxon.DateTime> {
    const {minNumberOfWeeks, activeMonth} = this.props
    const weeks: Array<Luxon.DateTime> = []

    let date = activeMonth.startOf('month').startOf('week')
    const end = activeMonth.endOf('month').endOf('week')

    while ((minNumberOfWeeks && minNumberOfWeeks > weeks.length) || (isBefore(date, end) || isSameDate(date, end))) {
      weeks.push(date)
      date = date.plus({days: 7})
    }

    return weeks
  }

  private getMinDate(): Luxon.DateTime {
    const {rangeLimit, minDate} = this.props
    const {selectionStart} = this
    const calcStartDate = selectionStart.minus({days: rangeLimit})

    if (minDate) {
      const isCalcStartDayAfter = isBefore(minDate, calcStartDate)
      return isCalcStartDayAfter ? calcStartDate : minDate
    } else {
      return calcStartDate
    }
  }

  handleOnDayMouseEnter = (date: Luxon.DateTime): void => {
    const {onDayHover} = this.props
    const {selectionStart, selectionInProgress, selectionEnd} = this

    if (onDayHover) {
      onDayHover(date)
    }

    if (!selectionInProgress) return

    const {rangeLimit} = this.props
    const dateLimit = selectionStart.minus({days: rangeLimit})
    const isDisabledWithin = this.isDisabledWithin({
      start: isBefore(date, selectionStart) ? selectionStart : date,
      end: !isBefore(date, selectionStart) ? selectionStart : date,
    })

    if (!isDisabledWithin) return

    if (selectionEnd && !isSameDate(date, selectionEnd)) {
      if (!rangeLimit || (rangeLimit && isAfter(date, dateLimit))) {
        this.selectionEnd = date
        this.pushUpdate()
      }
    }
  }

  handleOnDayClick = (date: Luxon.DateTime): void => {
    const {mode} = this.props
    const {selectionStart, selectionInProgress} = this
    const isSingle = mode === CalendarTypeEnum.single
    let isOverlap = false

    if (isSingle) {
      this.selectionInProgress = false
      this.selectionStart = date
      this.selectionEnd = date
    } else {
      if (!selectionInProgress) {
        this.selectionInProgress = true
        this.selectionStart = date
        this.selectionEnd = date
      } else {
        const isDisabledWithin = this.isDisabledWithin({
          start: isBefore(date, selectionStart) ? selectionStart : date,
          end: !isBefore(date, selectionStart) ? selectionStart : date,
        })

        if (!isDisabledWithin) {
          isOverlap = true
          this.selectionInProgress = false
          this.selectionStart = null
          this.selectionEnd = null
        } else {
          this.selectionInProgress = false
          this.selectionEnd = date
        }
      }
    }

    this.pushUpdate()
    this.pushNoticeUpdate(isOverlap ? NoticeTypeEnum.overlap : undefined)
  }

  handleOnDisabledDayClick = () => this.props.onNoticeChange(NoticeTypeEnum.disabled)

  private renderWeeks(): React.ReactNode {
    const {
      selectedMin,
      selectedMax,
      highlightedStart,
      highlightedEnd,
      disabledIntervals,
      activeMonth,
      today,
      blockClassName,
      rangeLimit,
    } = this.props
    const {selectionInProgress} = this

    let {minDate, maxDate} = this.props

    if (selectionInProgress && rangeLimit) {
      minDate = this.getMinDate()
      maxDate = this.getMaxDate()
    }

    return this.getWeeks().map((week: Luxon.DateTime) => (
      <Week
        activeMonth={activeMonth}
        blockClassName={blockClassName}
        disabledIntervals={disabledIntervals}
        highlightedEnd={highlightedEnd}
        highlightedStart={highlightedStart}
        key={week.toISODate()}
        maxDate={maxDate}
        minDate={minDate}
        onDayClick={this.handleOnDayClick}
        onDayMouseEnter={this.handleOnDayMouseEnter}
        onDisabledDayClick={this.handleOnDisabledDayClick}
        selectedMax={selectedMax}
        selectedMin={selectedMin}
        startOfWeek={week}
        today={today}
      />
    ))
  }

  render() {
    const {blockClassName, disableDaysOfWeek, daysOfWeek} = this.props

    return (
      <div className={`${blockClassName}-month`}>
        {!disableDaysOfWeek && <DaysOfWeek daysOfWeek={daysOfWeek} blockClassName={blockClassName} />}
        {this.renderWeeks()}
      </div>
    )
  }
}
