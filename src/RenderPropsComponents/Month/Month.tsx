/* eslint-disable max-statements */
/* eslint-disable complexity */
import React, { Component, SyntheticEvent } from 'react'
import addDays from 'date-fns/add_days'
import areRangesOverlapping from 'date-fns/are_ranges_overlapping'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import endOfMonth from 'date-fns/end_of_month'
import endOfWeek from 'date-fns/end_of_week'
import isBefore from 'date-fns/is_before'
import isEqual from 'date-fns/is_equal'
import isSameDay from 'date-fns/is_same_day'
import parse from 'date-fns/parse'
import startOfMonth from 'date-fns/start_of_month'
import startOfWeek from 'date-fns/start_of_week'
import subDays from 'date-fns/sub_days'

import * as helper from '../../helper'
import {
  IDate,
  RenderPropsDay,
  RenderPropsDayOfWeek,
  RenderPropsDaysOfWeek,
  RenderPropsWeek
} from '../../@types'

const RANGE_MODE = 'range'

export type Props = {
  activeMonth: IDate
  blockClassName: string
  daysOfWeek: string[]
  disableDaysOfWeek: boolean
  disabledIntervals?: {
    start: IDate
    end: IDate
  }[]
  getDayFormatted: typeof helper.getDayFormatted
  getISODate: typeof helper.getISODate
  highlightedEnd?: IDate
  highlightedStart?: IDate
  maxDate?: IDate
  minDate?: IDate
  minNumberOfWeeks?: number
  mode: string
  onChange: (...args: any[]) => any
  onDayMouseEnter?: (...args: any[]) => any
  onNoticeChange: (...args: any[]) => any
  rangeLimit?: number
  renderDay: RenderPropsDay
  renderDayOfWeek: RenderPropsDayOfWeek
  renderDaysOfWeek: RenderPropsDaysOfWeek
  renderWeek: RenderPropsWeek
  selectedMax?: IDate
  selectedMin?: IDate
  today: IDate
  weekStartsOn: number
}

type IInterval = {
  start: Date | null
  end: Date | null
}

// TODO: FC Rewrite
/* eslint-disable react/require-optimization */
export default class Month extends Component<Props, {}> {
  handleOnDayMouseEnter = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const {
      currentTarget: {
        dataset: { simpleReactCalendarDay }
      }
    } = event
    const date = parse(simpleReactCalendarDay as string)

    const { onDayMouseEnter } = this.props

    if (onDayMouseEnter) {
      onDayMouseEnter(date)
    }

    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    if (!this._selectionInProgress) return

    const { rangeLimit } = this.props
    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    const dateLimit = subDays(this._selectionStart, rangeLimit as number)
    const isDisabledWithin = this._getDisabledRange({
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      end: !isBefore(this._selectionStart, date) ? this._selectionStart : date,
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      start: isBefore(this._selectionStart, date) ? this._selectionStart : date
    })

    if (!isDisabledWithin) return

    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    if (!isEqual(date, this._selectionEnd)) {
      if (!rangeLimit || (rangeLimit && !isBefore(date, dateLimit))) {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionEnd = date
        this._pushUpdate()
      }
    }
  }

  handleOnDayClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const {
      currentTarget: {
        dataset: { simpleReactCalendarDay }
      }
    } = event
    const date = parse(simpleReactCalendarDay as string)
    const { mode } = this.props

    if (mode === RANGE_MODE) {
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      if (this._selectionInProgress) {
        const isDisabledWithin = this._getDisabledRange({
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          end: !isBefore(this._selectionStart, date)
            ? (this as any)._selectionStart
            : date,
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          start: isBefore(this._selectionStart, date)
            ? (this as any)._selectionStart
            : date
        })

        if (!isDisabledWithin) {
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          this._selectionInProgress = false
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          this._selectionStart = null
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          this._selectionEnd = null
          this._pushUpdate()
          this._pushNoticeUpdate('overlapping_with_disabled')

          return
        }
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionInProgress = false
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionEnd = date
      } else {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionInProgress = true
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionStart = date
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        this._selectionEnd = date
      }
    } else {
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      this._selectionInProgress = false
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      this._selectionStart = date

      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      this._selectionEnd = date
    }

    this._pushUpdate()
    this._pushNoticeUpdate(null)
  }

  handleOnDisabledDayClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { onNoticeChange } = this.props

    event.preventDefault()
    onNoticeChange('disabled_day_click')
  }

  _pushUpdate() {
    const { onChange, rangeLimit } = this.props
    let end, start

    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    if (this._selectionStart && this._selectionEnd) {
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      if (isBefore(this._selectionStart, this._selectionEnd)) {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        start = this._selectionStart
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        end = this._selectionEnd
      } else {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        start = this._selectionEnd
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        end = this._selectionStart
      }

      if (rangeLimit && rangeLimit < differenceInCalendarDays(end, start)) {
        end = addDays(start, rangeLimit)
      }
    }

    return onChange({
      end,
      // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore
      inProgress: this._selectionInProgress,
      start
    })
  }

  _getMinDate() {
    const { rangeLimit, minDate } = this.props
    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    const calcStartDate = subDays(this._selectionStart, rangeLimit as number)

    if (minDate) {
      const isCalcStartDayAfter = isBefore(minDate, calcStartDate)

      return isCalcStartDayAfter ? calcStartDate : minDate
    }

    return calcStartDate
  }

  _pushNoticeUpdate(noticeType: helper.NoticeMessageType) {
    const { onNoticeChange } = this.props

    return onNoticeChange(noticeType)
  }

  _getDisabledRange(interval: IInterval) {
    const { start, end } = interval
    const { disabledIntervals } = this.props

    if (!disabledIntervals) return true

    for (let i = 0; i < disabledIntervals.length; i++) {
      const { start: intervalStart, end: intervalEnd } = disabledIntervals[i]

      if (
        areRangesOverlapping(
          start as Date,
          end as Date,
          intervalStart,
          intervalEnd
        )
      ) {
        return
      }
    }

    return true
  }

  _getMaxDate() {
    const { rangeLimit, maxDate } = this.props
    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    const calcEndDate = addDays(this._selectionStart, rangeLimit as number)

    if (maxDate) {
      const isCalcEndDayBefore = isBefore(calcEndDate, maxDate)

      return isCalcEndDayBefore ? calcEndDate : maxDate
    }

    return calcEndDate
  }

  _renderDaysOfWeek() {
    const {
      disableDaysOfWeek,
      blockClassName,
      weekStartsOn,
      daysOfWeek,
      renderDaysOfWeek,
      renderDayOfWeek
    } = this.props

    if (disableDaysOfWeek) return

    return renderDaysOfWeek({
      blockClassName,
      weekStartsOn,
      daysOfWeek,
      renderDayOfWeek
    })
  }

  _renderWeeks() {
    const {
      selectedMin,
      selectedMax,
      highlightedStart,
      highlightedEnd,
      disabledIntervals,
      activeMonth,
      today,
      blockClassName,
      minNumberOfWeeks,
      rangeLimit,
      weekStartsOn,
      renderDay,
      renderWeek,
      getDayFormatted,
      getISODate
    } = this.props
    const weeks = []
    let { minDate, maxDate } = this.props
    let date = startOfWeek(startOfMonth(activeMonth), { weekStartsOn })
    const end = endOfWeek(endOfMonth(activeMonth), { weekStartsOn })

    // TODO: simplify with FC approach, remove state logic from child components
    //       this is passed from the parent component
    // @ts-ignore
    if (this._selectionInProgress && rangeLimit) {
      minDate = this._getMinDate()
      maxDate = this._getMaxDate()
    }

    while (
      // TODO: External helper with weeknumber etc
      /* eslint-disable no-unmodified-loop-condition */
      (typeof minNumberOfWeeks === 'number' &&
        minNumberOfWeeks > weeks.length) ||
      isBefore(date, end) ||
      isSameDay(date, end)
    ) {
      weeks.push(date)
      date = addDays(date, 7)
    }

    return weeks.map(week =>
      renderWeek({
        activeMonth,
        blockClassName,
        getDayFormatted,
        date: week,
        disabledIntervals,
        highlightedEnd,
        highlightedStart,
        // @ts-ignore
        key: week.getTime(),
        maxDate,
        minDate,
        getISODate,
        weekStartsOn,
        today,
        selectedMin,
        selectedMax,
        renderDay,
        onDayClick: this.handleOnDayClick,
        onDayMouseEnter: this.handleOnDayMouseEnter,
        onDisabledDayClick: this.handleOnDisabledDayClick
      })
    )
  }

  render() {
    const { blockClassName } = this.props

    const children = (
      <>
        {this._renderDaysOfWeek()}
        {this._renderWeeks()}
      </>
    )

    return <div className={`${blockClassName}-month`}>{children}</div>
  }
}
