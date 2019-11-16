import isSameMonth from 'date-fns/is_same_month'
import isValidDate from 'date-fns/is_valid'
import startOfMonth from 'date-fns/start_of_month'
import React, { Component, Fragment, ReactElement } from 'react'

import {
  ICalendarRenderProp,
  IDate,
  IDateSelection,
  IDayOfWeekRenderProps,
  IDayRenderProps,
  IDaysOfWeekRenderProps,
  IMonthHeaderRenderProps,
  IMonthRenderProps,
  INoticeType,
  ISelectionRange,
  IWeekRenderProps,
} from '../@types'
import { BLOCK_CLASS_NAME, DAYS_OF_WEEK, NEXT_MONTH_TITLE, PREV_MONTH_TITLE } from './consts'
import Month from './month'
import MonthHeader from './month_header'
import Notice from './notice'

const isValid = function(date: Date) {
  try {
    return isValidDate(date)
  } catch (e) {
    return false
  }
}

type ISelection = {
  start: IDate
  end: IDate
  inProgress: boolean
}

export type Props = {
  MonthHeaderComponent?: ReactElement
  NoticeComponent?: ReactElement
  activeMonth?: IDate
  blockClassName: string
  customRender?: ICalendarRenderProp
  daysOfWeek?: string[]
  disableDaysOfWeek?: boolean
  disabledIntervals?: {
    start: IDate
    end: IDate
  }[]
  headerNextArrow?: ReactElement
  headerNextTitle?: string
  headerPrevArrow?: ReactElement
  headerPrevTitle?: string
  highlighted?: {
    start: IDate
    end: IDate
  }
  maxDate?: IDate | undefined
  minDate?: IDate | undefined
  minNumberOfWeeks?: number
  mode?: 'range' | 'single'
  onDayHover?: (...args: any[]) => any
  onMonthChange?: (...args: any[]) => any
  onSelect?: (...args: any[]) => any
  onSelectionProgress?: (...args: any[]) => any
  rangeLimit?: number
  renderDay?: IDayRenderProps
  renderDayOfWeek?: IDayOfWeekRenderProps
  renderDaysOfWeek?: IDaysOfWeekRenderProps
  renderMonth?: IMonthRenderProps
  renderMonthHeader?: IMonthHeaderRenderProps
  renderWeek?: IWeekRenderProps
  selected?: IDate | ISelectionRange
  today?: IDate
  weekStartsOn?: number
}

type State = {
  activeMonth: any
  selection: {start: any; end: any} | null
  shownNoticeType: any | null
}

// TODO: FC Rewrite
/* eslint-disable react/require-optimization */
export default class Calendar extends Component<Props, State> {
  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
    daysOfWeek: DAYS_OF_WEEK,
    disableDaysOfWeek: false,
    headerNextTitle: NEXT_MONTH_TITLE,
    headerPrevTitle: PREV_MONTH_TITLE,
    mode: 'single',
    weekStartsOn: 1,
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      activeMonth: this._initialMonth(props),
      selection: null,
      shownNoticeType: null,
    }
  }

  // TODO: FC Rewrite
  /* eslint-disable react/no-deprecated */
  componentWillReceiveProps(nextProps: Props) {
    const { activeMonth } = this.props

    if (nextProps.activeMonth && !isSameMonth(nextProps.activeMonth, activeMonth as IDate)) {
      this.setState({ activeMonth: startOfMonth(nextProps.activeMonth) })
    }
  }

  _initialMonth(props: Props) {
    const { selected, activeMonth, mode, today } = props || this.props

    if (isValid(activeMonth as Date)) {
      return activeMonth
    } else {
      if (selected) {
        const selectionStart = mode === 'single' ? selected : (selected as ISelectionRange).start

        if (isValid(selectionStart as Date)) {
          return startOfMonth(selectionStart as Date)
        }
      }
    }
    return startOfMonth(today || new Date())
  }

  _switchMonth(date: Date) {
    const { onMonthChange } = this.props

    if (typeof onMonthChange === 'function') {
      onMonthChange(date)
    } else {
      this.setState({
        activeMonth: date,
      })
    }
  }

  _activeMonth() {
    const { onMonthChange, activeMonth } = this.props

    if (onMonthChange) {
      return activeMonth
    } else {
      /* eslint-disable react/destructuring-assignment */
      return this.state.activeMonth
    }
  }

  _highlight() {
    const { highlighted } = this.props

    if (!highlighted) return { start: null, end: null }

    const { start, end } = highlighted

    if (isValid(start as Date) && isValid(end as Date)) {
      return { start, end }
    } else {
      return { start: null, end: null }
    }
  }

  _selection() {
    const start = this._selectionStart()
    const end = this._selectionEnd()

    if (isValid(start) && isValid(end)) {
      return { start, end }
    } else {
      return { start: null, end: null }
    }
  }

  _selectionStart(): Date {
    return this._selectionDate('start')
  }

  _selectionEnd(): Date {
    return this._selectionDate('end')
  }

  _selectionDate(dateType: IDateSelection) {
    const { selected, onSelectionProgress, mode } = this.props
    const { selection } = this.state

    switch (mode) {
      case 'single':
        return selected

      case 'range':
        if (!onSelectionProgress && selection) {
          return selection[dateType]
        } else {
          return selected && (selected as ISelectionRange)[dateType]
        }
    }
  }

  _selectionChanged(selection: ISelection) {
    const { start, end, inProgress } = selection
    const { mode, onSelect, onSelectionProgress } = this.props

    if (onSelect && start && (mode !== 'range' || !inProgress)) {
      onSelect(mode === 'single' ? start : { start, end })
    }

    if (mode === 'range') {
      if (onSelectionProgress) {
        onSelectionProgress(selection)
      } else {
        this.setState({ selection: inProgress ? { start, end } : null })
      }
    }
  }

  _noticeChanged(shownNoticeType: INoticeType) {
    this.setState({ shownNoticeType })
  }

  _today() {
    /* eslint-disable react/destructuring-assignment */
    return this.props.today || new Date()
  }

  _renderNotice() {
    const { shownNoticeType } = this.state
    const { blockClassName } = this.props
    /* eslint-disable react/destructuring-assignment */
    const NoticeComponent = this.props.NoticeComponent || Notice

    // @ts-ignore
    return shownNoticeType && <NoticeComponent blockClassName={blockClassName} type={shownNoticeType} />
  }

  _renderMonth() {
    const {
      blockClassName,
      disableDaysOfWeek,
      maxDate,
      minDate,
      minNumberOfWeeks,
      mode,
      onDayHover,
      disabledIntervals,
      rangeLimit,
      weekStartsOn,
      daysOfWeek,
      renderDay,
      renderWeek,
      renderMonth,
      renderDaysOfWeek,
      renderDayOfWeek,
    } = this.props

    const selection = this._selection()
    const highlight = this._highlight()

    return (
      // @ts-ignore: No overload matches this call
      <Month
        customRender={renderMonth}
        renderDay={renderDay}
        renderWeek={renderWeek}
        renderDaysOfWeek={renderDaysOfWeek}
        renderDayOfWeek={renderDayOfWeek}
        activeMonth={this._activeMonth()}
        blockClassName={blockClassName}
        daysOfWeek={daysOfWeek}
        disableDaysOfWeek={disableDaysOfWeek}
        disabledIntervals={disabledIntervals}
        highlightedEnd={highlight.end}
        highlightedStart={highlight.start}
        maxDate={maxDate}
        minDate={minDate}
        minNumberOfWeeks={minNumberOfWeeks}
        mode={mode as 'range' | 'single'}
        onChange={this._selectionChanged.bind(this)}
        onDayMouseEnter={onDayHover}
        onNoticeChange={this._noticeChanged.bind(this)}
        rangeLimit={rangeLimit}
        /* eslint-disable react/no-string-refs */
        ref='month'
        selectedMax={selection.end}
        selectedMin={selection.start}
        today={this._today()}
        weekStartsOn={weekStartsOn as number}
      />
    )
  }

  _renderMonthHeader() {
    const {
      blockClassName,
      headerNextArrow,
      headerNextTitle,
      headerPrevArrow,
      headerPrevTitle,
      maxDate,
      minDate,
      MonthHeaderComponent = MonthHeader,
      renderMonthHeader,
    } = this.props

    return (
      // @ts-ignore
      <MonthHeaderComponent
        customRender={renderMonthHeader}
        activeMonth={this._activeMonth()}
        blockClassName={blockClassName}
        headerNextArrow={headerNextArrow}
        headerNextTitle={headerNextTitle}
        headerPrevArrow={headerPrevArrow}
        headerPrevTitle={headerPrevTitle}
        maxDate={maxDate}
        minDate={minDate}
        onMonthChange={this._switchMonth.bind(this)}
        /* eslint-disable react/no-string-refs */
        ref='header'
      />
    )
  }

  render() {
    const { blockClassName, customRender } = this.props

    const children = (
      <Fragment>
        {this._renderNotice()}
        {this._renderMonthHeader()}
        {this._renderMonth()}
      </Fragment>
    )

    if (customRender) {
      return customRender({
        ...this.props,
        children,
      })
    }

    return <div className={blockClassName}>{children}</div>
  }
}
