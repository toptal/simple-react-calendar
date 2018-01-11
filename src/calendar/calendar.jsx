import React from 'react'
import PropTypes from 'prop-types'

import Month from './month'
import MonthHeader from './month_header'
import Notice from './notice'
import {BLOCK_CLASS_NAME} from './consts'
import {DAYS_IN_WEEK} from './consts'
import {datePropType} from './_lib'

import startOfMonth from 'date-fns/start_of_month'
import isSameMonth from 'date-fns/is_same_month'
import isValidDate from 'date-fns/is_valid'

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
    weekStartsOn: 1,
    mode: SINGLE_MODE,
    blockClassName: BLOCK_CLASS_NAME,
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
      weekStartsOn,
    } = this.props
    const selection = this._selection()
    const highlight = this._highlight()
    const MonthHeaderComponent = this.props.MonthHeaderComponent || MonthHeader

    return (
      <div className={blockClassName}>
        {this._renderNotice()}

        <MonthHeaderComponent
          ref="header"
          minDate={minDate}
          maxDate={maxDate}
          headerPrevArrow={headerPrevArrow}
          headerPrevTitle={headerPrevTitle}
          headerNextArrow={headerNextArrow}
          headerNextTitle={headerNextTitle}
          activeMonth={this._activeMonth()}
          onMonthChange={this._switchMonth.bind(this)}
          blockClassName={blockClassName}
        />
        <Month
          mode={mode}
          minDate={minDate}
          maxDate={maxDate}
          minNumberOfWeeks={minNumberOfWeeks}
          rangeLimit={rangeLimit}
          today={this._today()}
          ref="month"
          activeMonth={this._activeMonth()}
          selectedMin={selection.start}
          selectedMax={selection.end}
          disableDaysOfWeek={disableDaysOfWeek}
          onDayHover={onDayHover}
          highlightedStart={highlight.start}
          highlightedEnd={highlight.end}
          onChange={this._selectionChanged.bind(this)}
          onNoticeChange={this._noticeChanged.bind(this)}
          blockClassName={blockClassName}
          disabledIntervals={disabledIntervals}
          weekStartsOn={weekStartsOn}
        />
      </div>
    )
  }

  _renderNotice() {
    const {shownNoticeType} = this.state
    const {blockClassName} = this.props
    const NoticeComponent = this.props.NoticeComponent || Notice

    return shownNoticeType && <NoticeComponent blockClassName={blockClassName} type={shownNoticeType} />
  }
}
