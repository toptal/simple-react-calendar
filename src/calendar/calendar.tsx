import React, { Component, ComponentProps, ReactElement } from 'react'
import isSameMonth from 'date-fns/is_same_month'
import isValidDate from 'date-fns/is_valid'
import startOfDay from 'date-fns/start_of_day'
import startOfMonth from 'date-fns/start_of_month'

import * as helper from '../helper'
import {
  BLOCK_CLASS_NAME,
  DAYS_OF_WEEK,
  NEXT_MONTH_TITLE,
  PREV_MONTH_TITLE
} from './consts'
import {
  ICalendarRenderProp,
  IDate,
  IDateSelection,
  IDaysOfWeekRenderProps,
  IMonthHeaderRenderProps,
  IMonthRenderProps,
  ISelectionRange,
  IWeekRenderProps,
  RenderPropsDay,
  RenderPropsDayOfWeek,
  RenderPropsNotice
} from '../@types'
import Day from '../RenderPropsComponents/Day'
import DayOfWeek from '../RenderPropsComponents/DayOfWeek'
import Month from './month'
import MonthHeader from './month_header'
import Notice from '../RenderPropsComponents/Notice'

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
  activeMonth?: IDate
  blockClassName: string
  customRender?: ICalendarRenderProp
  daysOfWeek?: string[]
  disableDaysOfWeek?: boolean
  disabledIntervals?: {
    start: IDate
    end: IDate
  }[]
  getDayFormatted: typeof helper.getDayFormatted
  getISODate: typeof helper.getISODate
  getNoticeContent: typeof helper.getNoticeContent
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
  renderNotice?: RenderPropsNotice
  renderDay?: RenderPropsDay
  renderDayOfWeek?: RenderPropsDayOfWeek
  renderDaysOfWeek?: IDaysOfWeekRenderProps
  renderMonth?: IMonthRenderProps
  renderMonthHeader?: IMonthHeaderRenderProps
  renderWeek?: IWeekRenderProps
  selected?: IDate | ISelectionRange
  today?: IDate
  weekStartsOn?: number
  locale?: string
}

type State = {
  activeMonth: any
  selection: { start: any; end: any } | null
  shownNoticeType: any | null
}

// TODO: FC Rewrite
/* eslint-disable react/require-optimization */
export default class Calendar extends Component<Props, State> {
  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
    daysOfWeek: DAYS_OF_WEEK,
    disableDaysOfWeek: false,
    getDayFormatted: helper.getDayFormatted,
    getISODate: helper.getISODate,
    getNoticeContent: helper.getNoticeContent,
    headerNextTitle: NEXT_MONTH_TITLE,
    headerPrevTitle: PREV_MONTH_TITLE,
    mode: 'single',
    renderDay: (props: ComponentProps<typeof Day>) => <Day {...props} />,
    renderDayOfWeek: (props: ComponentProps<typeof DayOfWeek>) => (
      <DayOfWeek {...props} />
    ),
    renderNotice: (props: ComponentProps<typeof Notice>) => (
      <Notice {...props} />
    ),
    weekStartsOn: 1,
    locale: 'en'
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      activeMonth: this._initialMonth(props),
      selection: null,
      shownNoticeType: null
    }
  }

  // TODO: FC Rewrite
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { activeMonth } = this.props

    if (
      nextProps.activeMonth &&
      !isSameMonth(nextProps.activeMonth, activeMonth as IDate)
    ) {
      this.setState({ activeMonth: startOfMonth(nextProps.activeMonth) })
    }
  }

  _initialMonth(props: Props) {
    const { selected, activeMonth, mode, today } = props || this.props

    if (isValid(activeMonth as Date)) {
      return activeMonth
    }
    if (selected) {
      const selectionStart =
        mode === 'single' ? selected : (selected as ISelectionRange).start

      if (isValid(selectionStart as Date)) {
        return startOfMonth(selectionStart as Date)
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
        activeMonth: date
      })
    }
  }

  _activeMonth() {
    const { onMonthChange, activeMonth } = this.props

    if (onMonthChange) {
      return activeMonth
    }

    /* eslint-disable react/destructuring-assignment */
    return this.state.activeMonth
  }

  _highlight() {
    const { highlighted } = this.props

    if (!highlighted) return { end: null, start: null }

    const { start, end } = highlighted

    if (isValid(start as Date) && isValid(end as Date)) {
      return { end, start }
    }

    return { end: null, start: null }
  }

  _selection() {
    const start = this._selectionStart()
    const end = this._selectionEnd()

    if (isValid(start) && isValid(end)) {
      return { end, start }
    }

    return { end: null, start: null }
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
        }

        return selected && (selected as ISelectionRange)[dateType]
    }
  }

  _selectionChanged(selection: ISelection) {
    const { start, end, inProgress } = selection
    const { mode, onSelect, onSelectionProgress } = this.props

    if (onSelect && start && (mode !== 'range' || !inProgress)) {
      onSelect(mode === 'single' ? start : { end, start })
    }

    if (mode === 'range') {
      if (onSelectionProgress) {
        onSelectionProgress(selection)
      } else {
        this.setState({ selection: inProgress ? { end, start } : null })
      }
    }
  }

  _noticeChanged(shownNoticeType: helper.NoticeMessageType) {
    this.setState({ shownNoticeType })
  }

  _today() {
    /* eslint-disable react/destructuring-assignment */
    return this.props.today || new Date()
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
      getDayFormatted,
      getISODate
    } = this.props

    const selection = this._selection()
    const highlight = this._highlight()

    const normalizedMinDate = minDate ? startOfDay(minDate) : minDate

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
        getDayFormatted={getDayFormatted}
        disableDaysOfWeek={disableDaysOfWeek}
        disabledIntervals={disabledIntervals}
        highlightedEnd={highlight.end}
        highlightedStart={highlight.start}
        maxDate={maxDate}
        minDate={normalizedMinDate}
        minNumberOfWeeks={minNumberOfWeeks}
        mode={mode as 'range' | 'single'}
        onChange={this._selectionChanged.bind(this)}
        onDayMouseEnter={onDayHover}
        onNoticeChange={this._noticeChanged.bind(this)}
        rangeLimit={rangeLimit}
        selectedMax={selection.end}
        selectedMin={selection.start}
        today={this._today()}
        weekStartsOn={weekStartsOn as number}
        getISODate={getISODate}
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
      locale
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
        locale={locale}
        onMonthChange={this._switchMonth.bind(this)}
      />
    )
  }

  render() {
    const {
      blockClassName,
      customRender,
      getNoticeContent,
      renderNotice = (props: ComponentProps<typeof Notice>) => (
        <Notice {...props} />
      )
    } = this.props
    const { shownNoticeType } = this.state

    const children = (
      <>
        {renderNotice({
          blockClassName,
          children: getNoticeContent(shownNoticeType)
        })}
        {this._renderMonthHeader()}
        {this._renderMonth()}
      </>
    )

    if (customRender) {
      return customRender({
        ...this.props,
        children
      })
    }

    return <div className={blockClassName}>{children}</div>
  }
}
