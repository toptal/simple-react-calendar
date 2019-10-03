import isSameMonth from 'date-fns/isSameMonth'
import isValidDate from 'date-fns/isValid'
import startOfMonth from 'date-fns/startOfMonth'
import PropTypes from 'prop-types'
import React from 'react'

import {datePropType} from './_lib'
import {BLOCK_CLASS_NAME, DAYS_IN_WEEK, DAYS_OF_WEEK, NEXT_MONTH_TITLE, PREV_MONTH_TITLE} from './consts'
import Month from './month'
import MonthHeader from './month_header'
import Notice from './notice'

const SINGLE_MODE = 'single'
const RANGE_MODE = 'range'

const isValid = function(date) {
  try {
    return isValidDate(date)
  } catch (e) {
    return false
  }
}

export default class Calendar extends React.Component {
  static propTypes = {
    MonthHeaderComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    NoticeComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    activeMonth: datePropType,
    blockClassName: PropTypes.string,
    customRender: PropTypes.func,
    daysOfWeek: PropTypes.arrayOf(PropTypes.string),
    disableDaysOfWeek: PropTypes.bool,
    disabledIntervals: PropTypes.arrayOf(
      PropTypes.shape({
        start: datePropType.isRequired,
        end: datePropType.isRequired,
      })
    ),
    headerNextArrow: PropTypes.element,
    headerNextTitle: PropTypes.string,
    headerPrevArrow: PropTypes.element,
    headerPrevTitle: PropTypes.string,
    highlighted: PropTypes.shape({
      start: datePropType.isRequired,
      end: datePropType.isRequired,
    }),
    maxDate: datePropType,
    minDate: datePropType,
    minNumberOfWeeks: PropTypes.number,
    mode: PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
    onDayHover: PropTypes.func,
    onMonthChange: PropTypes.func,
    onSelect: PropTypes.func,
    onSelectionProgress: PropTypes.func,
    rangeLimit: PropTypes.number,
    renderDay: PropTypes.func,
    renderDayOfWeek: PropTypes.func,
    renderDaysOfWeek: PropTypes.func,
    renderMonth: PropTypes.func,
    renderMonthHeader: PropTypes.func,
    renderWeek: PropTypes.func,
    selected: PropTypes.oneOfType([
      datePropType,
      PropTypes.shape({
        start: datePropType.isRequired,
        end: datePropType.isRequired,
        inProgress: PropTypes.bool,
      }),
    ]),
    today: datePropType,
    weekStartsOn: PropTypes.oneOf(DAYS_IN_WEEK),
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
    daysOfWeek: DAYS_OF_WEEK,
    headerNextTitle: NEXT_MONTH_TITLE,
    headerPrevTitle: PREV_MONTH_TITLE,
    mode: SINGLE_MODE,
    weekStartsOn: 1,
  }

  constructor(props) {
    super(props)
    this.state = {
      activeMonth: this._initialMonth(props),
      selection: null,
      shownNoticeType: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeMonth && !isSameMonth(nextProps.activeMonth, this.props.activeMonth)) {
      this.setState({activeMonth: startOfMonth(nextProps.activeMonth)})
    }
  }

  _initialMonth(props) {
    const {selected, activeMonth, mode, today} = props || this.props

    if (isValid(activeMonth)) {
      return activeMonth
    } else {
      if (selected) {
        const selectionStart = mode === SINGLE_MODE ? selected : selected.start
        if (isValid(selectionStart)) {
          return startOfMonth(selectionStart)
        }
      }
    }
    return startOfMonth(today || new Date())
  }

  _switchMonth(date) {
    const {onMonthChange} = this.props
    if (typeof onMonthChange === 'function') {
      onMonthChange(date)
    } else {
      this.setState({
        activeMonth: date,
      })
    }
  }

  _activeMonth() {
    const {onMonthChange, activeMonth} = this.props
    if (onMonthChange) {
      return activeMonth
    } else {
      return this.state.activeMonth
    }
  }

  _highlight() {
    const {highlighted} = this.props
    if (!highlighted) return {start: null, end: null}

    const {start, end} = highlighted

    if (isValid(start) && isValid(end)) {
      return {start, end}
    } else {
      return {start: null, end: null}
    }
  }

  _selection() {
    const start = this._selectionStart()
    const end = this._selectionEnd()

    if (isValid(start) && isValid(end)) {
      return {start, end}
    } else {
      return {start: null, end: null}
    }
  }

  _selectionStart() {
    return this._selectionDate('start')
  }

  _selectionEnd() {
    return this._selectionDate('end')
  }

  _selectionDate(dateType) {
    const {selected, onSelectionProgress} = this.props
    const {selection} = this.state

    switch (this.props.mode) {
      case SINGLE_MODE:
        return selected

      case RANGE_MODE:
        if (!onSelectionProgress && selection) {
          return selection[dateType]
        } else {
          return selected && selected[dateType]
        }
    }
  }

  _selectionChanged(selection) {
    const {start, end, inProgress} = selection
    const {mode, onSelect, onSelectionProgress} = this.props

    if (onSelect && start && (mode !== RANGE_MODE || !inProgress)) {
      onSelect(mode === SINGLE_MODE ? start : {start, end})
    }

    if (mode === RANGE_MODE) {
      if (onSelectionProgress) {
        onSelectionProgress(selection)
      } else {
        this.setState({selection: inProgress ? {start, end} : null})
      }
    }
  }

  _noticeChanged(shownNoticeType) {
    this.setState({shownNoticeType})
  }

  _today() {
    return this.props.today || new Date()
  }

  render() {
    const {blockClassName, customRender} = this.props

    const children = (
      <React.Fragment>
        {this._renderNotice()}
        {this._renderMonthHeader()}
        {this._renderMonth()}
      </React.Fragment>
    )

    if (customRender) {
      return customRender({
        ...this.props,
        children,
      })
    }

    return <div className={blockClassName}>{children}</div>
  }

  _renderNotice() {
    const {shownNoticeType} = this.state
    const {blockClassName} = this.props
    const NoticeComponent = this.props.NoticeComponent || Notice

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
        mode={mode}
        onChange={this._selectionChanged.bind(this)}
        onDayMouseEnter={onDayHover}
        onNoticeChange={this._noticeChanged.bind(this)}
        rangeLimit={rangeLimit}
        ref="month"
        selectedMax={selection.end}
        selectedMin={selection.start}
        today={this._today()}
        weekStartsOn={weekStartsOn}
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
        ref="header"
      />
    )
  }
}
