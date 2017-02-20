(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory(require("react"));
	else
		root["Calendar"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _calendar = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_calendar).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _month = __webpack_require__(3);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(39);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _notice = __webpack_require__(43);
	
	var _notice2 = _interopRequireDefault(_notice);
	
	var _consts = __webpack_require__(7);
	
	var _start_of_month = __webpack_require__(35);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _is_same_month = __webpack_require__(33);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	var _is_valid = __webpack_require__(20);
	
	var _is_valid2 = _interopRequireDefault(_is_valid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	var isValid = function isValid(date) {
	  try {
	    return (0, _is_valid2.default)(date);
	  } catch (e) {
	    return false;
	  }
	};
	
	var Calendar = function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));
	
	    _this.state = {
	      activeMonth: _this._initialMonth(props),
	      selection: null,
	      shownNoticeType: null
	    };
	    return _this;
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.activeMonth && !(0, _is_same_month2.default)(nextProps.activeMonth, this.props.activeMonth)) {
	        this.setState({ activeMonth: (0, _start_of_month2.default)(nextProps.activeMonth) });
	      }
	    }
	  }, {
	    key: '_initialMonth',
	    value: function _initialMonth(props) {
	      var _ref = props || this.props,
	          selected = _ref.selected,
	          activeMonth = _ref.activeMonth,
	          mode = _ref.mode,
	          today = _ref.today;
	
	      if (isValid(activeMonth)) {
	        return activeMonth;
	      } else {
	        if (selected) {
	          var selectionStart = mode === SINGLE_MODE ? selected : selected.start;
	          if (isValid(selectionStart)) {
	            return (0, _start_of_month2.default)(selectionStart);
	          }
	        }
	      }
	      return (0, _start_of_month2.default)(today || new Date());
	    }
	  }, {
	    key: '_switchMonth',
	    value: function _switchMonth(date) {
	      var onMonthChange = this.props.onMonthChange;
	
	      if (typeof onMonthChange === 'function') {
	        onMonthChange(date);
	      } else {
	        this.setState({
	          activeMonth: date
	        });
	      }
	    }
	  }, {
	    key: '_activeMonth',
	    value: function _activeMonth() {
	      var _props = this.props,
	          onMonthChange = _props.onMonthChange,
	          activeMonth = _props.activeMonth;
	
	      if (onMonthChange) {
	        return activeMonth;
	      } else {
	        return this.state.activeMonth;
	      }
	    }
	  }, {
	    key: '_highlight',
	    value: function _highlight() {
	      var highlighted = this.props.highlighted;
	
	      if (!highlighted) return { start: null, end: null };
	
	      var start = highlighted.start,
	          end = highlighted.end;
	
	
	      if (isValid(start) && isValid(end)) {
	        return { start: start, end: end };
	      } else {
	        return { start: null, end: null };
	      }
	    }
	  }, {
	    key: '_selection',
	    value: function _selection() {
	      var start = this._selectionStart();
	      var end = this._selectionEnd();
	
	      if (isValid(start) && isValid(end)) {
	        return { start: start, end: end };
	      } else {
	        return { start: null, end: null };
	      }
	    }
	  }, {
	    key: '_selectionStart',
	    value: function _selectionStart() {
	      return this._selectionDate('start');
	    }
	  }, {
	    key: '_selectionEnd',
	    value: function _selectionEnd() {
	      return this._selectionDate('end');
	    }
	  }, {
	    key: '_selectionDate',
	    value: function _selectionDate(dateType) {
	      var _props2 = this.props,
	          selected = _props2.selected,
	          onSelectionProgress = _props2.onSelectionProgress;
	      var selection = this.state.selection;
	
	
	      switch (this.props.mode) {
	        case SINGLE_MODE:
	          return selected;
	
	        case RANGE_MODE:
	          if (!onSelectionProgress && selection) {
	            return selection[dateType];
	          } else {
	            return selected && selected[dateType];
	          }
	      }
	    }
	  }, {
	    key: '_selectionChanged',
	    value: function _selectionChanged(selection) {
	      var start = selection.start,
	          end = selection.end,
	          inProgress = selection.inProgress;
	      var _props3 = this.props,
	          mode = _props3.mode,
	          onSelect = _props3.onSelect,
	          onSelectionProgress = _props3.onSelectionProgress;
	
	
	      if (onSelect && (mode !== RANGE_MODE || !inProgress)) {
	        onSelect(mode === SINGLE_MODE ? start : { start: start, end: end });
	      }
	
	      if (mode === RANGE_MODE) {
	        if (onSelectionProgress) {
	          onSelectionProgress(selection);
	        } else {
	          this.setState({ selection: inProgress ? { start: start, end: end } : null });
	        }
	      }
	    }
	  }, {
	    key: '_noticeChanged',
	    value: function _noticeChanged(shownNoticeType) {
	      this.setState({ shownNoticeType: shownNoticeType });
	    }
	  }, {
	    key: '_today',
	    value: function _today() {
	      return this.props.today || new Date();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props,
	          blockClassName = _props4.blockClassName,
	          disableDaysOfWeek = _props4.disableDaysOfWeek,
	          headerNextArrow = _props4.headerNextArrow,
	          headerNextTitle = _props4.headerNextTitle,
	          headerPrevArrow = _props4.headerPrevArrow,
	          headerPrevTitle = _props4.headerPrevTitle,
	          highlighted = _props4.highlighted,
	          maxDate = _props4.maxDate,
	          minDate = _props4.minDate,
	          minNumberOfWeeks = _props4.minNumberOfWeeks,
	          mode = _props4.mode,
	          onDayHover = _props4.onDayHover,
	          disabledIntervals = _props4.disabledIntervals,
	          rangeLimit = _props4.rangeLimit;
	
	      var selection = this._selection();
	      var highlight = this._highlight();
	      var MonthHeaderComponent = this.props.MonthHeaderComponent || _month_header2.default;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName },
	        this._renderNotice(),
	        _react2.default.createElement(MonthHeaderComponent, {
	          ref: 'header',
	          minDate: minDate,
	          maxDate: maxDate,
	          headerPrevArrow: headerPrevArrow,
	          headerPrevTitle: headerPrevTitle,
	          headerNextArrow: headerNextArrow,
	          headerNextTitle: headerNextTitle,
	          activeMonth: this._activeMonth(),
	          onMonthChange: this._switchMonth.bind(this),
	          blockClassName: blockClassName
	        }),
	        _react2.default.createElement(_month2.default, {
	          mode: mode,
	          minDate: minDate,
	          maxDate: maxDate,
	          minNumberOfWeeks: minNumberOfWeeks,
	          rangeLimit: rangeLimit,
	          today: this._today(),
	          ref: 'month',
	          activeMonth: this._activeMonth(),
	          selectedMin: selection.start,
	          selectedMax: selection.end,
	          disableDaysOfWeek: disableDaysOfWeek,
	          onDayHover: onDayHover,
	          highlightedStart: highlight.start,
	          highlightedEnd: highlight.end,
	          onChange: this._selectionChanged.bind(this),
	          onNoticeChange: this._noticeChanged.bind(this),
	          blockClassName: blockClassName,
	          disabledIntervals: disabledIntervals
	        })
	      );
	    }
	  }, {
	    key: '_renderNotice',
	    value: function _renderNotice() {
	      var shownNoticeType = this.state.shownNoticeType;
	      var blockClassName = this.props.blockClassName;
	
	      var NoticeComponent = this.props.NoticeComponent || _notice2.default;
	      return shownNoticeType && _react2.default.createElement(NoticeComponent, {
	        blockClassName: blockClassName,
	        type: shownNoticeType
	      });
	    }
	  }]);
	
	  return Calendar;
	}(_react2.default.Component);
	
	Calendar.propTypes = {
	  MonthHeaderComponent: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.func]),
	  NoticeComponent: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.func]),
	  activeMonth: _react2.default.PropTypes.instanceOf(Date),
	  blockClassName: _react2.default.PropTypes.string,
	  disableDaysOfWeek: _react2.default.PropTypes.bool,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired
	  })),
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  highlighted: _react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired
	  }),
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
	  onDayHover: _react2.default.PropTypes.func,
	  onMonthChange: _react2.default.PropTypes.func,
	  onSelect: _react2.default.PropTypes.func,
	  onSelectionProgress: _react2.default.PropTypes.func,
	  rangeLimit: _react2.default.PropTypes.number,
	  selected: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(Date), _react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    inProgress: _react2.default.PropTypes.bool
	  })]),
	  today: _react2.default.PropTypes.instanceOf(Date)
	};
	Calendar.defaultProps = {
	  mode: SINGLE_MODE,
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Calendar;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _week = __webpack_require__(4);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _days_of_week = __webpack_require__(34);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _consts = __webpack_require__(7);
	
	var _start_of_week = __webpack_require__(17);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(26);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _is_within_range = __webpack_require__(27);
	
	var _is_within_range2 = _interopRequireDefault(_is_within_range);
	
	var _each_day = __webpack_require__(25);
	
	var _each_day2 = _interopRequireDefault(_each_day);
	
	var _are_ranges_overlapping = __webpack_require__(44);
	
	var _are_ranges_overlapping2 = _interopRequireDefault(_are_ranges_overlapping);
	
	var _start_of_month = __webpack_require__(35);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _end_of_month = __webpack_require__(36);
	
	var _end_of_month2 = _interopRequireDefault(_end_of_month);
	
	var _is_before = __webpack_require__(28);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_equal = __webpack_require__(30);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _add_days = __webpack_require__(37);
	
	var _add_days2 = _interopRequireDefault(_add_days);
	
	var _sub_days = __webpack_require__(38);
	
	var _sub_days2 = _interopRequireDefault(_sub_days);
	
	var _is_same_day = __webpack_require__(32);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _difference_in_calendar_days = __webpack_require__(13);
	
	var _difference_in_calendar_days2 = _interopRequireDefault(_difference_in_calendar_days);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	var Month = function (_React$Component) {
	  _inherits(Month, _React$Component);
	
	  function Month() {
	    _classCallCheck(this, Month);
	
	    return _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).apply(this, arguments));
	  }
	
	  _createClass(Month, [{
	    key: '_pushUpdate',
	    value: function _pushUpdate() {
	      var _props = this.props,
	          onChange = _props.onChange,
	          rangeLimit = _props.rangeLimit;
	
	      var start = void 0,
	          end = void 0;
	
	      if ((0, _is_before2.default)(this._selectionStart, this._selectionEnd)) {
	        start = this._selectionStart;
	        end = this._selectionEnd;
	      } else {
	        start = this._selectionEnd;
	        end = this._selectionStart;
	      }
	
	      if (rangeLimit && rangeLimit < (0, _difference_in_calendar_days2.default)(end, start)) {
	        end = (0, _add_days2.default)(start, rangeLimit);
	      }
	
	      return onChange({
	        start: start,
	        end: end,
	        inProgress: this._selectionInProgress
	      });
	    }
	  }, {
	    key: '_pushNoticeUpdate',
	    value: function _pushNoticeUpdate(noticeType) {
	      var onNoticeChange = this.props.onNoticeChange;
	
	      return onNoticeChange(noticeType);
	    }
	  }, {
	    key: '_getDisabledRange',
	    value: function _getDisabledRange(interval) {
	      var start = interval.start,
	          end = interval.end;
	      var disabledIntervals = this.props.disabledIntervals;
	
	
	      if (!disabledIntervals) return true;
	
	      for (var i = 0; i < disabledIntervals.length; i++) {
	        var _disabledIntervals$i = disabledIntervals[i],
	            intervalStart = _disabledIntervals$i.start,
	            intervalEnd = _disabledIntervals$i.end;
	
	
	        if ((0, _are_ranges_overlapping2.default)(start, end, intervalStart, intervalEnd)) {
	          return;
	          break;
	        }
	      }
	
	      return true;
	    }
	  }, {
	    key: '_onDayMouseMove',
	    value: function _onDayMouseMove(date) {
	      var onDayHover = this.props.onDayHover;
	
	      if (onDayHover) {
	        onDayHover(date);
	      }
	
	      if (!this._selectionInProgress) return;
	
	      var _props2 = this.props,
	          rangeLimit = _props2.rangeLimit,
	          disabledIntervals = _props2.disabledIntervals;
	
	      var dateLimit = (0, _sub_days2.default)(this._selectionStart, rangeLimit);
	
	      var isDisabledWithin = this._getDisabledRange({
	        start: (0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date,
	        end: !(0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date
	      });
	
	      if (!isDisabledWithin) {
	        return;
	      }
	
	      if (!(0, _is_equal2.default)(date, this._selectionEnd)) {
	        if (!rangeLimit || rangeLimit && !(0, _is_before2.default)(date, dateLimit)) {
	          this._selectionEnd = date;
	          this._pushUpdate();
	        }
	      }
	    }
	  }, {
	    key: '_onDayClick',
	    value: function _onDayClick(date) {
	      var mode = this.props.mode;
	
	      var isDisabledWithin = void 0;
	
	      if (mode === RANGE_MODE) {
	        if (this._selectionInProgress) {
	          isDisabledWithin = this._getDisabledRange({
	            start: (0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date,
	            end: !(0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date
	          });
	
	          if (!isDisabledWithin) {
	            this._pushNoticeUpdate('overlapping_with_disabled');
	            return;
	          }
	
	          this._selectionInProgress = false;
	          this._selectionEnd = date;
	        } else {
	          this._selectionInProgress = true;
	          this._selectionStart = date;
	          this._selectionEnd = date;
	        }
	      } else if (mode === SINGLE_MODE) {
	        this._selectionInProgress = false;
	        this._selectionStart = date;
	        this._selectionEnd = date;
	      } else {
	        return;
	      }
	
	      this._pushUpdate();
	      this._pushNoticeUpdate(null);
	    }
	  }, {
	    key: '_getMinDate',
	    value: function _getMinDate() {
	      var _props3 = this.props,
	          rangeLimit = _props3.rangeLimit,
	          minDate = _props3.minDate;
	
	      var calcStartDate = (0, _sub_days2.default)(this._selectionStart, rangeLimit);
	
	      if (minDate) {
	        var isCalcStartDayAfter = (0, _is_before2.default)(minDate, calcStartDate);
	        return isCalcStartDayAfter ? calcStartDate : minDate;
	      } else {
	        return calcStartDate;
	      }
	    }
	  }, {
	    key: '_getMaxDate',
	    value: function _getMaxDate() {
	      var _props4 = this.props,
	          rangeLimit = _props4.rangeLimit,
	          maxDate = _props4.maxDate;
	
	      var calcEndDate = (0, _add_days2.default)(this._selectionStart, rangeLimit);
	
	      if (maxDate) {
	        var isCalcEndDayBefore = (0, _is_before2.default)(calcEndDate, maxDate);
	        return isCalcEndDayBefore ? calcEndDate : maxDate;
	      } else {
	        return calcEndDate;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-month' },
	        this._renderWeekDays(),
	        this._renderWeeks()
	      );
	    }
	  }, {
	    key: '_renderWeekDays',
	    value: function _renderWeekDays() {
	      var _props5 = this.props,
	          blockClassName = _props5.blockClassName,
	          disableDaysOfWeek = _props5.disableDaysOfWeek;
	
	      if (disableDaysOfWeek) return null;
	
	      return _react2.default.createElement(_days_of_week2.default, { blockClassName: blockClassName });
	    }
	  }, {
	    key: '_renderWeeks',
	    value: function _renderWeeks() {
	      var _this2 = this;
	
	      var _props6 = this.props,
	          selectedMin = _props6.selectedMin,
	          selectedMax = _props6.selectedMax,
	          highlightedStart = _props6.highlightedStart,
	          highlightedEnd = _props6.highlightedEnd,
	          disabledIntervals = _props6.disabledIntervals,
	          activeMonth = _props6.activeMonth,
	          today = _props6.today,
	          blockClassName = _props6.blockClassName,
	          minNumberOfWeeks = _props6.minNumberOfWeeks,
	          rangeLimit = _props6.rangeLimit,
	          onDayHover = _props6.onDayHover;
	
	      var weeks = [];
	      var _props7 = this.props,
	          minDate = _props7.minDate,
	          maxDate = _props7.maxDate;
	
	      var date = (0, _start_of_week2.default)((0, _start_of_month2.default)(activeMonth), { weekStartsOn: 1 });
	      var end = (0, _end_of_week2.default)((0, _end_of_month2.default)(activeMonth), { weekStartsOn: 1 });
	
	      if (this._selectionInProgress && rangeLimit) {
	        minDate = this._getMinDate();
	        maxDate = this._getMaxDate();
	      }
	
	      while (typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length || (0, _is_before2.default)(date, end) || (0, _is_same_day2.default)(date, end)) {
	        weeks.push(date);
	        date = (0, _add_days2.default)(date, 7);
	      }
	
	      return weeks.map(function (week) {
	        return _react2.default.createElement(_week2.default, {
	          key: week.getTime(),
	          date: week,
	          minDate: minDate,
	          maxDate: maxDate,
	          selectedMin: selectedMin,
	          selectedMax: selectedMax,
	          highlightedStart: highlightedStart,
	          highlightedEnd: highlightedEnd,
	          disabledIntervals: disabledIntervals,
	          activeMonth: activeMonth,
	          onDayHover: onDayHover,
	          onDayClick: _this2._onDayClick.bind(_this2),
	          onDayMouseMove: _this2._onDayMouseMove.bind(_this2),
	          today: today,
	          blockClassName: blockClassName
	        });
	      });
	    }
	  }]);
	
	  return Month;
	}(_react2.default.Component);
	
	Month.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  disableDaysOfWeek: _react2.default.PropTypes.bool,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired
	  })),
	  highlightedEnd: _react2.default.PropTypes.instanceOf(Date),
	  highlightedStart: _react2.default.PropTypes.instanceOf(Date),
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired,
	  onDayHover: _react2.default.PropTypes.func,
	  onNoticeChange: _react2.default.PropTypes.func.isRequired,
	  rangeLimit: _react2.default.PropTypes.number,
	  selectedMax: _react2.default.PropTypes.instanceOf(Date),
	  selectedMin: _react2.default.PropTypes.instanceOf(Date),
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Month.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Month;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(5);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _day = __webpack_require__(6);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _consts = __webpack_require__(7);
	
	var _each_day = __webpack_require__(25);
	
	var _each_day2 = _interopRequireDefault(_each_day);
	
	var _start_of_day = __webpack_require__(14);
	
	var _start_of_day2 = _interopRequireDefault(_start_of_day);
	
	var _start_of_week = __webpack_require__(17);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(26);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _is_within_range = __webpack_require__(27);
	
	var _is_within_range2 = _interopRequireDefault(_is_within_range);
	
	var _format = __webpack_require__(8);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _is_before = __webpack_require__(28);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(29);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _is_equal = __webpack_require__(30);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _is_weekend = __webpack_require__(31);
	
	var _is_weekend2 = _interopRequireDefault(_is_weekend);
	
	var _is_same_day = __webpack_require__(32);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _is_same_month = __webpack_require__(33);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Week = function (_React$Component) {
	  _inherits(Week, _React$Component);
	
	  function Week() {
	    _classCallCheck(this, Week);
	
	    return _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).apply(this, arguments));
	  }
	
	  _createClass(Week, [{
	    key: '_dateSelectable',
	    value: function _dateSelectable(date) {
	      var _props = this.props,
	          minDate = _props.minDate,
	          maxDate = _props.maxDate;
	
	
	      if (this._dateDisabled(date)) {
	        return false;
	      }
	
	      if (minDate && maxDate) {
	        return (0, _is_within_range2.default)(date, minDate, maxDate);
	      } else if (minDate && !maxDate) {
	        return (0, _is_after2.default)(date, minDate) || (0, _is_equal2.default)(date, minDate);
	      } else if (maxDate && !minDate) {
	        return (0, _is_before2.default)(date, maxDate) || (0, _is_equal2.default)(date, maxDate);
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: '_dateSelected',
	    value: function _dateSelected(date) {
	      var _props2 = this.props,
	          selectedMin = _props2.selectedMin,
	          selectedMax = _props2.selectedMax;
	
	      return selectedMin && selectedMax && (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(selectedMin), (0, _start_of_day2.default)(selectedMax));
	    }
	  }, {
	    key: '_dateHighlighted',
	    value: function _dateHighlighted(date) {
	      var _props3 = this.props,
	          highlightedStart = _props3.highlightedStart,
	          highlightedEnd = _props3.highlightedEnd;
	
	      if (!highlightedStart || !highlightedEnd) return false;
	
	      return (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(highlightedStart), (0, _start_of_day2.default)(highlightedEnd));
	    }
	  }, {
	    key: '_dateDisabled',
	    value: function _dateDisabled(date) {
	      var dateDisabled = void 0;
	      var disabledIntervals = this.props.disabledIntervals;
	
	      if (!disabledIntervals) return false;
	
	      for (var i = 0; i < disabledIntervals.length; i++) {
	        var _disabledIntervals$i = disabledIntervals[i],
	            start = _disabledIntervals$i.start,
	            end = _disabledIntervals$i.end;
	
	
	        dateDisabled = (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(start), (0, _start_of_day2.default)(end));
	
	        if (dateDisabled) {
	          return dateDisabled;
	        }
	      }
	
	      return false;
	    }
	  }, {
	    key: '_dateClasses',
	    value: function _dateClasses(date) {
	      var _classnames;
	
	      var _props4 = this.props,
	          today = _props4.today,
	          activeMonth = _props4.activeMonth,
	          selectedMax = _props4.selectedMax,
	          selectedMin = _props4.selectedMin;
	
	
	      return (0, _classnames3.default)((_classnames = {
	        'is-selected': this._dateSelected(date),
	        'is-highlighted': this._dateHighlighted(date),
	        'is-disabled': this._dateDisabled(date),
	        'is-today': (0, _is_same_day2.default)(today, date),
	        'is-current_month': (0, _is_same_month2.default)(date, activeMonth),
	        'is-start_selection': selectedMin && (0, _is_same_day2.default)(selectedMin, date),
	        'is-end_selection': selectedMax && (0, _is_same_day2.default)(selectedMax, date),
	        'is-prev_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_before2.default)(date, activeMonth),
	        'is-next_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_after2.default)(date, activeMonth)
	      }, _defineProperty(_classnames, (0, _is_weekend2.default)(date) ? 'is-weekend' : 'is-working_day', true), _defineProperty(_classnames, this._dateSelectable(date) ? 'is-selectable' : 'is-not_selectable', true), _classnames));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.blockClassName + '-week' },
	        this._renderDays()
	      );
	    }
	  }, {
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this2 = this;
	
	      var _props5 = this.props,
	          date = _props5.date,
	          today = _props5.today,
	          onDayClick = _props5.onDayClick,
	          onDayMouseMove = _props5.onDayMouseMove,
	          blockClassName = _props5.blockClassName;
	
	      var start = (0, _start_of_week2.default)(date, { weekStartsOn: 1 });
	      var end = (0, _end_of_week2.default)(date, { weekStartsOn: 1 });
	      return (0, _each_day2.default)(start, end).map(function (day) {
	        var data = _this2.props.data[(0, _format2.default)(day, 'YYYY-MM-DD')];
	        var selectable = _this2._dateSelectable(day);
	        return _react2.default.createElement(_day2.default, {
	          blockClassName: blockClassName,
	          key: day.getTime(),
	          date: day,
	          data: data,
	          className: _this2._dateClasses(day, data),
	          today: today,
	          onClick: selectable ? onDayClick : null,
	          onMouseMove: selectable ? onDayMouseMove : null
	        });
	      });
	    }
	  }]);
	
	  return Week;
	}(_react2.default.Component);
	
	Week.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  data: _react2.default.PropTypes.object,
	  date: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired
	  })),
	  highlightedEnd: _react2.default.PropTypes.instanceOf(Date),
	  highlightedStart: _react2.default.PropTypes.instanceOf(Date),
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  onDayClick: _react2.default.PropTypes.func.isRequired,
	  onDayMouseMove: _react2.default.PropTypes.func.isRequired,
	  selectedMax: _react2.default.PropTypes.instanceOf(Date),
	  selectedMin: _react2.default.PropTypes.instanceOf(Date),
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Week.defaultProps = {
	  data: {},
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Week;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	var _format = __webpack_require__(8);
	
	var _format2 = _interopRequireDefault(_format);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Day = function (_React$Component) {
	  _inherits(Day, _React$Component);
	
	  function Day() {
	    _classCallCheck(this, Day);
	
	    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
	  }
	
	  _createClass(Day, [{
	    key: '_onClick',
	    value: function _onClick(e) {
	      e.preventDefault();
	      var _props = this.props,
	          date = _props.date,
	          onClick = _props.onClick;
	
	      if (onClick) {
	        onClick(date);
	      }
	    }
	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove(e) {
	      e.preventDefault();
	      var _props2 = this.props,
	          date = _props2.date,
	          onMouseMove = _props2.onMouseMove;
	
	      if (onMouseMove) {
	        onMouseMove(date);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          date = _props3.date,
	          className = _props3.className,
	          blockClassName = _props3.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(blockClassName + '-day', className),
	          onClick: this._onClick.bind(this),
	          onMouseMove: this._onMouseMove.bind(this)
	        },
	        (0, _format2.default)(date, 'D')
	      );
	    }
	  }]);
	
	  return Day;
	}(_react2.default.Component);
	
	Day.propTypes = {
	  blockClassName: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  date: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  onClick: _react2.default.PropTypes.func,
	  onMouseMove: _react2.default.PropTypes.func,
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Day.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Day;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BLOCK_CLASS_NAME = exports.BLOCK_CLASS_NAME = 'calendar';
	var NEXT_MONTH_TITLE = exports.NEXT_MONTH_TITLE = 'Next month';
	var PREV_MONTH_TITLE = exports.PREV_MONTH_TITLE = 'Previous month';

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(9)
	var getISOWeek = __webpack_require__(15)
	var getISOYear = __webpack_require__(19)
	var parse = __webpack_require__(10)
	var isValid = __webpack_require__(20)
	var enLocale = __webpack_require__(21)
	
	/**
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format.
	 *
	 * Accepted tokens:
	 * | Unit                    | Token | Result examples                  |
	 * |-------------------------|-------|----------------------------------|
	 * | Month                   | M     | 1, 2, ..., 12                    |
	 * |                         | Mo    | 1st, 2nd, ..., 12th              |
	 * |                         | MM    | 01, 02, ..., 12                  |
	 * |                         | MMM   | Jan, Feb, ..., Dec               |
	 * |                         | MMMM  | January, February, ..., December |
	 * | Quarter                 | Q     | 1, 2, 3, 4                       |
	 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
	 * | Day of month            | D     | 1, 2, ..., 31                    |
	 * |                         | Do    | 1st, 2nd, ..., 31st              |
	 * |                         | DD    | 01, 02, ..., 31                  |
	 * | Day of year             | DDD   | 1, 2, ..., 366                   |
	 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
	 * |                         | DDDD  | 001, 002, ..., 366               |
	 * | Day of week             | d     | 0, 1, ..., 6                     |
	 * |                         | do    | 0th, 1st, ..., 6th               |
	 * |                         | dd    | Su, Mo, ..., Sa                  |
	 * |                         | ddd   | Sun, Mon, ..., Sat               |
	 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
	 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
	 * | ISO week                | W     | 1, 2, ..., 53                    |
	 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
	 * |                         | WW    | 01, 02, ..., 53                  |
	 * | Year                    | YY    | 00, 01, ..., 99                  |
	 * |                         | YYYY  | 1900, 1901, ..., 2099            |
	 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
	 * |                         | GGGG  | 1900, 1901, ..., 2099            |
	 * | AM/PM                   | A     | AM, PM                           |
	 * |                         | a     | am, pm                           |
	 * |                         | aa    | a.m., p.m.                       |
	 * | Hour                    | H     | 0, 1, ... 23                     |
	 * |                         | HH    | 00, 01, ... 23                   |
	 * |                         | h     | 1, 2, ..., 12                    |
	 * |                         | hh    | 01, 02, ..., 12                  |
	 * | Minute                  | m     | 0, 1, ..., 59                    |
	 * |                         | mm    | 00, 01, ..., 59                  |
	 * | Second                  | s     | 0, 1, ..., 59                    |
	 * |                         | ss    | 00, 01, ..., 59                  |
	 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
	 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
	 * | Millisecond             | SSS   | 000, 001, ..., 999               |
	 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
	 * |                         | ZZ    | -0100, +0000, ..., +1200         |
	 * | Seconds timestamp       | X     | 512969520                        |
	 * | Milliseconds timestamp  | x     | 512969520900                     |
	 *
	 * The characters wrapped in square brackets are escaped.
	 *
	 * The result may vary by locale.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
	 * @param {Object} [options] - the object with options
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the formatted date string
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(
	 *   new Date(2014, 1, 11),
	 *   'MM/DD/YYYY'
	 * )
	 * //=> '02/11/2014'
	 *
	 * @example
	 * // Represent 2 July 2014 in Esperanto:
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = format(
	 *   new Date(2014, 6, 2),
	 *   'Do [de] MMMM YYYY',
	 *   {locale: eoLocale}
	 * )
	 * //=> '2-a de julio 2014'
	 */
	function format (dirtyDate, formatStr, options) {
	  formatStr = formatStr || 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  options = options || {}
	
	  var locale = options.locale
	  var localeFormatters = enLocale.format.formatters
	  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
	  if (locale && locale.format && locale.format.formatters) {
	    localeFormatters = locale.format.formatters
	
	    if (locale.format.formattingTokensRegExp) {
	      formattingTokensRegExp = locale.format.formattingTokensRegExp
	    }
	  }
	
	  var date = parse(dirtyDate)
	
	  if (!isValid(date)) {
	    return 'Invalid Date'
	  }
	
	  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)
	
	  return formatFn(date)
	}
	
	var formatters = {
	  // Month: 1, 2, ..., 12
	  'M': function (date) {
	    return date.getMonth() + 1
	  },
	
	  // Month: 01, 02, ..., 12
	  'MM': function (date) {
	    return addLeadingZeros(date.getMonth() + 1, 2)
	  },
	
	  // Quarter: 1, 2, 3, 4
	  'Q': function (date) {
	    return Math.ceil((date.getMonth() + 1) / 3)
	  },
	
	  // Day of month: 1, 2, ..., 31
	  'D': function (date) {
	    return date.getDate()
	  },
	
	  // Day of month: 01, 02, ..., 31
	  'DD': function (date) {
	    return addLeadingZeros(date.getDate(), 2)
	  },
	
	  // Day of year: 1, 2, ..., 366
	  'DDD': function (date) {
	    return getDayOfYear(date)
	  },
	
	  // Day of year: 001, 002, ..., 366
	  'DDDD': function (date) {
	    return addLeadingZeros(getDayOfYear(date), 3)
	  },
	
	  // Day of week: 0, 1, ..., 6
	  'd': function (date) {
	    return date.getDay()
	  },
	
	  // Day of ISO week: 1, 2, ..., 7
	  'E': function (date) {
	    return date.getDay() || 7
	  },
	
	  // ISO week: 1, 2, ..., 53
	  'W': function (date) {
	    return getISOWeek(date)
	  },
	
	  // ISO week: 01, 02, ..., 53
	  'WW': function (date) {
	    return addLeadingZeros(getISOWeek(date), 2)
	  },
	
	  // Year: 00, 01, ..., 99
	  'YY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4).substr(2)
	  },
	
	  // Year: 1900, 1901, ..., 2099
	  'YYYY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4)
	  },
	
	  // ISO week-numbering year: 00, 01, ..., 99
	  'GG': function (date) {
	    return String(getISOYear(date)).substr(2)
	  },
	
	  // ISO week-numbering year: 1900, 1901, ..., 2099
	  'GGGG': function (date) {
	    return getISOYear(date)
	  },
	
	  // Hour: 0, 1, ... 23
	  'H': function (date) {
	    return date.getHours()
	  },
	
	  // Hour: 00, 01, ..., 23
	  'HH': function (date) {
	    return addLeadingZeros(date.getHours(), 2)
	  },
	
	  // Hour: 1, 2, ..., 12
	  'h': function (date) {
	    var hours = date.getHours()
	    if (hours === 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	
	  // Hour: 01, 02, ..., 12
	  'hh': function (date) {
	    return addLeadingZeros(formatters['h'](date), 2)
	  },
	
	  // Minute: 0, 1, ..., 59
	  'm': function (date) {
	    return date.getMinutes()
	  },
	
	  // Minute: 00, 01, ..., 59
	  'mm': function (date) {
	    return addLeadingZeros(date.getMinutes(), 2)
	  },
	
	  // Second: 0, 1, ..., 59
	  's': function (date) {
	    return date.getSeconds()
	  },
	
	  // Second: 00, 01, ..., 59
	  'ss': function (date) {
	    return addLeadingZeros(date.getSeconds(), 2)
	  },
	
	  // 1/10 of second: 0, 1, ..., 9
	  'S': function (date) {
	    return Math.floor(date.getMilliseconds() / 100)
	  },
	
	  // 1/100 of second: 00, 01, ..., 99
	  'SS': function (date) {
	    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
	  },
	
	  // Millisecond: 000, 001, ..., 999
	  'SSS': function (date) {
	    return addLeadingZeros(date.getMilliseconds(), 3)
	  },
	
	  // Timezone: -01:00, +00:00, ... +12:00
	  'Z': function (date) {
	    return formatTimezone(date.getTimezoneOffset(), ':')
	  },
	
	  // Timezone: -0100, +0000, ... +1200
	  'ZZ': function (date) {
	    return formatTimezone(date.getTimezoneOffset())
	  },
	
	  // Seconds timestamp: 512969520
	  'X': function (date) {
	    return Math.floor(date.getTime() / 1000)
	  },
	
	  // Milliseconds timestamp: 512969520900
	  'x': function (date) {
	    return date.getTime()
	  }
	}
	
	function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
	  var array = formatStr.match(formattingTokensRegExp)
	  var length = array.length
	
	  var i
	  var formatter
	  for (i = 0; i < length; i++) {
	    formatter = localeFormatters[array[i]] || formatters[array[i]]
	    if (formatter) {
	      array[i] = formatter
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function (date) {
	    var output = ''
	    for (var i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i](date, formatters)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	function removeFormattingTokens (input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	function formatTimezone (offset, delimeter) {
	  delimeter = delimeter || ''
	  var sign = offset > 0 ? '-' : '+'
	  var absOffset = Math.abs(offset)
	  var hours = Math.floor(absOffset / 60)
	  var minutes = absOffset % 60
	  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
	}
	
	function addLeadingZeros (number, targetLength) {
	  var output = Math.abs(number).toString()
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	module.exports = format


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfYear = __webpack_require__(12)
	var differenceInCalendarDays = __webpack_require__(13)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the year of the given date.
	 *
	 * @description
	 * Get the day of the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of year
	 *
	 * @example
	 * // Which day of the year is 2 July 2014?
	 * var result = getDayOfYear(new Date(2014, 6, 2))
	 * //=> 183
	 */
	function getDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInCalendarDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(11)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, options) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  options = options || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Return the start of a year for the given date.
	 *
	 * @description
	 * Return the start of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a year
	 *
	 * @example
	 * // The start of a year for 2 September 2014 11:55:00:
	 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Jan 01 2014 00:00:00
	 */
	function startOfYear (dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(0)
	  date.setFullYear(cleanDate.getFullYear(), 0, 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(14)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of calendar days between the given dates.
	 *
	 * @description
	 * Get the number of calendar days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar days
	 *
	 * @example
	 * // How many calendar days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInCalendarDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 366
	 */
	function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime() -
	    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime() -
	    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a day is not constant
	  // (e.g. it's different in the day of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInCalendarDays


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of a day for the given date.
	 *
	 * @description
	 * Return the start of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a day
	 *
	 * @example
	 * // The start of a day for 2 September 2014 11:55:00:
	 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 00:00:00
	 */
	function startOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfISOWeek = __webpack_require__(16)
	var startOfISOYear = __webpack_require__(18)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the ISO week of the given date.
	 *
	 * @description
	 * Get the ISO week of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week
	 *
	 * @example
	 * // Which week of the ISO-week numbering year is 2 January 2005?
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	function getISOWeek (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
	}
	
	module.exports = getISOWeek


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(17)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the start of an ISO week for the given date.
	 *
	 * @description
	 * Return the start of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO week
	 *
	 * @example
	 * // The start of an ISO week for 2 September 2014 11:55:00:
	 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfISOWeek (dirtyDate) {
	  return startOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = startOfISOWeek


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Week Helpers
	 * @summary Return the start of a week for the given date.
	 *
	 * @description
	 * Return the start of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the start of a week
	 *
	 * @example
	 * // The start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfWeek (dirtyDate, options) {
	  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(19)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the start of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the start of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO year
	 *
	 * @example
	 * // The start of an ISO week-numbering year for 2 July 2005:
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	function startOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(year, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuary)
	  return date
	}
	
	module.exports = startOfISOYear


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the ISO week-numbering year of the given date,
	 * which always starts 3 days before the year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week-numbering year
	 *
	 * @example
	 * // Which ISO-week numbering year is 2 January 2005?
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	function getISOYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	
	  var fourthOfJanuaryOfNextYear = new Date(0)
	  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
	  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
	  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)
	
	  var fourthOfJanuaryOfThisYear = new Date(0)
	  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
	  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
	  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)
	
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}
	
	module.exports = getISOYear


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(11)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * @param {Date} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} argument must be an instance of Date
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */
	function isValid (date) {
	  if (isDate(date)) {
	    return !isNaN(date)
	  } else {
	    throw new TypeError(toString.call(date) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(22)
	var buildFormatLocale = __webpack_require__(23)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(24)
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 24 */
/***/ function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Return the array of dates within the specified range.
	 *
	 * @description
	 * Return the array of dates within the specified range.
	 *
	 * @param {Date|String|Number} startDate - the first date
	 * @param {Date|String|Number} endDate - the last date
	 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // Each day between 6 October 2014 and 10 October 2014:
	 * var result = eachDay(
	 *   new Date(2014, 9, 6),
	 *   new Date(2014, 9, 10)
	 * )
	 * //=> [
	 * //   Mon Oct 06 2014 00:00:00,
	 * //   Tue Oct 07 2014 00:00:00,
	 * //   Wed Oct 08 2014 00:00:00,
	 * //   Thu Oct 09 2014 00:00:00,
	 * //   Fri Oct 10 2014 00:00:00
	 * // ]
	 */
	function eachDay (dirtyStartDate, dirtyEndDate) {
	  var startDate = parse(dirtyStartDate)
	  var endDate = parse(dirtyEndDate)
	
	  var endTime = endDate.getTime()
	
	  if (startDate.getTime() > endTime) {
	    throw new Error('The first date cannot be after the second date')
	  }
	
	  var dates = []
	
	  var currentDate = startDate
	  currentDate.setHours(0, 0, 0, 0)
	
	  while (currentDate.getTime() <= endTime) {
	    dates.push(parse(currentDate))
	    currentDate.setDate(currentDate.getDate() + 1)
	  }
	
	  return dates
	}
	
	module.exports = eachDay


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Week Helpers
	 * @summary Return the end of a week for the given date.
	 *
	 * @description
	 * Return the end of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the end of a week
	 *
	 * @example
	 * // The end of a week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sat Sep 06 2014 23:59:59.999
	 *
	 * @example
	 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Sun Sep 07 2014 23:59:59.999
	 */
	function endOfWeek (dirtyDate, options) {
	  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
	
	  date.setDate(date.getDate() + diff)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfWeek


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Range Helpers
	 * @summary Is the given date within the range?
	 *
	 * @description
	 * Is the given date within the range?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @param {Date|String|Number} startDate - the start of range
	 * @param {Date|String|Number} endDate - the end of range
	 * @returns {Boolean} the date is within the range
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // For the date within the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> true
	 *
	 * @example
	 * // For the date outside of the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> false
	 */
	function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var time = parse(dirtyDate).getTime()
	  var startTime = parse(dirtyStartDate).getTime()
	  var endTime = parse(dirtyEndDate).getTime()
	
	  if (startTime > endTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  return time >= startTime && time <= endTime
	}
	
	module.exports = isWithinRange


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date before the second one?
	 *
	 * @description
	 * Is the first date before the second one?
	 *
	 * @param {Date|String|Number} date - the date that should be before the other one to return true
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @returns {Boolean} the first date is before the second date
	 *
	 * @example
	 * // Is 10 July 1989 before 11 February 1987?
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	function isBefore (dirtyDate, dirtyDateToCompare) {
	  var date = parse(dirtyDate)
	  var dateToCompare = parse(dirtyDateToCompare)
	  return date.getTime() < dateToCompare.getTime()
	}
	
	module.exports = isBefore


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date after the second one?
	 *
	 * @description
	 * Is the first date after the second one?
	 *
	 * @param {Date|String|Number} date - the date that should be after the other one to return true
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @returns {Boolean} the first date is after the second date
	 *
	 * @example
	 * // Is 10 July 1989 after 11 February 1987?
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> true
	 */
	function isAfter (dirtyDate, dirtyDateToCompare) {
	  var date = parse(dirtyDate)
	  var dateToCompare = parse(dirtyDateToCompare)
	  return date.getTime() > dateToCompare.getTime()
	}
	
	module.exports = isAfter


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Are the given dates equal?
	 *
	 * @description
	 * Are the given dates equal?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Boolean} the dates are equal
	 *
	 * @example
	 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
	 * var result = isEqual(
	 *   new Date(2014, 6, 2, 6, 30, 45, 0)
	 *   new Date(2014, 6, 2, 6, 30, 45, 500)
	 * )
	 * //=> false
	 */
	function isEqual (dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = parse(dirtyLeftDate)
	  var dateRight = parse(dirtyRightDate)
	  return dateLeft.getTime() === dateRight.getTime()
	}
	
	module.exports = isEqual


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Does the given date fall on a weekend?
	 *
	 * @description
	 * Does the given date fall on a weekend?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date falls on a weekend
	 *
	 * @example
	 * // Does 5 October 2014 fall on a weekend?
	 * var result = isWeekend(new Date(2014, 9, 5))
	 * //=> true
	 */
	function isWeekend (dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day === 0 || day === 6
	}
	
	module.exports = isWeekend


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(14)
	
	/**
	 * @category Day Helpers
	 * @summary Are the given dates in the same day?
	 *
	 * @description
	 * Are the given dates in the same day?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same day
	 *
	 * @example
	 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
	 * var result = isSameDay(
	 *   new Date(2014, 8, 4, 6, 0),
	 *   new Date(2014, 8, 4, 18, 0)
	 * )
	 * //=> true
	 */
	function isSameDay (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
	  var dateRightStartOfDay = startOfDay(dirtyDateRight)
	
	  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
	}
	
	module.exports = isSameDay


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Are the given dates in the same month?
	 *
	 * @description
	 * Are the given dates in the same month?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same month
	 *
	 * @example
	 * // Are 2 September 2014 and 25 September 2014 in the same month?
	 * var result = isSameMonth(
	 *   new Date(2014, 8, 2),
	 *   new Date(2014, 8, 25)
	 * )
	 * //=> true
	 */
	function isSameMonth (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getFullYear() === dateRight.getFullYear() &&
	    dateLeft.getMonth() === dateRight.getMonth()
	}
	
	module.exports = isSameMonth


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	
	var DaysOfWeek = function (_React$Component) {
	  _inherits(DaysOfWeek, _React$Component);
	
	  function DaysOfWeek() {
	    _classCallCheck(this, DaysOfWeek);
	
	    return _possibleConstructorReturn(this, (DaysOfWeek.__proto__ || Object.getPrototypeOf(DaysOfWeek)).apply(this, arguments));
	  }
	
	  _createClass(DaysOfWeek, [{
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-days_of_week' },
	        daysOfWeek.map(function (day, index) {
	          return _react2.default.createElement(
	            'div',
	            {
	              className: (0, _classnames2.default)(blockClassName + '-days_of_week_day', {
	                'is-weekend': index > 4 // 4 is an index of Friday
	              }),
	              key: day
	            },
	            day
	          );
	        })
	      );
	    }
	  }]);
	
	  return DaysOfWeek;
	}(_react2.default.Component);
	
	DaysOfWeek.propTypes = {
	  blockClassName: _react2.default.PropTypes.string
	};
	DaysOfWeek.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = DaysOfWeek;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Return the start of a month for the given date.
	 *
	 * @description
	 * Return the start of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a month
	 *
	 * @example
	 * // The start of a month for 2 September 2014 11:55:00:
	 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setDate(1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfMonth


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Return the end of a month for the given date.
	 *
	 * @description
	 * Return the end of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a month
	 *
	 * @example
	 * // The end of a month for 2 September 2014 11:55:00:
	 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 23:59:59.999
	 */
	function endOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfMonth


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Add the specified number of days to the given date.
	 *
	 * @description
	 * Add the specified number of days to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of days to be added
	 * @returns {Date} the new date with the days added
	 *
	 * @example
	 * // Add 10 days to 1 September 2014:
	 * var result = addDays(new Date(2014, 8, 1), 10)
	 * //=> Thu Sep 11 2014 00:00:00
	 */
	function addDays (dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setDate(date.getDate() + amount)
	  return date
	}
	
	module.exports = addDays


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(37)
	
	/**
	 * @category Day Helpers
	 * @summary Subtract the specified number of days from the given date.
	 *
	 * @description
	 * Subtract the specified number of days from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of days to be subtracted
	 * @returns {Date} the new date with the days subtracted
	 *
	 * @example
	 * // Subtract 10 days from 1 September 2014:
	 * var result = subDays(new Date(2014, 8, 1), 10)
	 * //=> Fri Aug 22 2014 00:00:00
	 */
	function subDays (dirtyDate, amount) {
	  return addDays(dirtyDate, -amount)
	}
	
	module.exports = subDays


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header_button = __webpack_require__(40);
	
	var _header_button2 = _interopRequireDefault(_header_button);
	
	var _consts = __webpack_require__(7);
	
	var _add_months = __webpack_require__(41);
	
	var _add_months2 = _interopRequireDefault(_add_months);
	
	var _is_before = __webpack_require__(28);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(29);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _start_of_month = __webpack_require__(35);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _format = __webpack_require__(8);
	
	var _format2 = _interopRequireDefault(_format);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MonthHeader = function (_React$Component) {
	  _inherits(MonthHeader, _React$Component);
	
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    return _possibleConstructorReturn(this, (MonthHeader.__proto__ || Object.getPrototypeOf(MonthHeader)).apply(this, arguments));
	  }
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(offset) {
	      var _props = this.props,
	          onMonthChange = _props.onMonthChange,
	          activeMonth = _props.activeMonth;
	
	      onMonthChange((0, _add_months2.default)(activeMonth, parseInt(offset)));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          activeMonth = _props2.activeMonth,
	          minDate = _props2.minDate,
	          maxDate = _props2.maxDate,
	          blockClassName = _props2.blockClassName,
	          headerNextArrow = _props2.headerNextArrow,
	          headerNextTitle = _props2.headerNextTitle,
	          headerPrevArrow = _props2.headerPrevArrow,
	          headerPrevTitle = _props2.headerPrevTitle;
	
	
	      var prevEnabled = minDate ? (0, _is_before2.default)((0, _start_of_month2.default)(minDate), (0, _start_of_month2.default)(activeMonth)) : true;
	      var nextEnabled = maxDate ? (0, _is_after2.default)((0, _start_of_month2.default)(maxDate), (0, _start_of_month2.default)(activeMonth)) : true;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-month_header' },
	        _react2.default.createElement(_header_button2.default, {
	          type: 'prev',
	          arrow: headerPrevArrow,
	          title: headerPrevTitle,
	          enabled: prevEnabled,
	          onClick: this._switchMonth.bind(this, -1),
	          blockClassName: blockClassName
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: blockClassName + '-month_header_title' },
	          (0, _format2.default)(activeMonth, 'MMMM YYYY')
	        ),
	        _react2.default.createElement(_header_button2.default, {
	          type: 'next',
	          arrow: headerNextArrow,
	          title: headerNextTitle,
	          enabled: nextEnabled,
	          onClick: this._switchMonth.bind(this, 1),
	          blockClassName: blockClassName
	        })
	      );
	    }
	  }]);
	
	  return MonthHeader;
	}(_react2.default.Component);
	
	MonthHeader.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  onMonthChange: _react2.default.PropTypes.func.isRequired
	};
	MonthHeader.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME,
	  headerNextTitle: _consts.NEXT_MONTH_TITLE,
	  headerPrevTitle: _consts.PREV_MONTH_TITLE
	};
	exports.default = MonthHeader;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderButton = function (_React$Component) {
	  _inherits(HeaderButton, _React$Component);
	
	  function HeaderButton() {
	    _classCallCheck(this, HeaderButton);
	
	    return _possibleConstructorReturn(this, (HeaderButton.__proto__ || Object.getPrototypeOf(HeaderButton)).apply(this, arguments));
	  }
	
	  _createClass(HeaderButton, [{
	    key: '_onClick',
	    value: function _onClick(e) {
	      var _props = this.props,
	          enabled = _props.enabled,
	          onClick = _props.onClick;
	
	      if (enabled) {
	        onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          arrow = _props2.arrow,
	          blockClassName = _props2.blockClassName,
	          enabled = _props2.enabled,
	          type = _props2.type,
	          title = _props2.title;
	
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)(blockClassName + '-header_button', 'is-' + type, {
	            'is-disabled': !enabled
	          }),
	          type: 'button',
	          disabled: !enabled,
	          title: title,
	          onClick: this._onClick.bind(this)
	        },
	        arrow
	      );
	    }
	  }]);
	
	  return HeaderButton;
	}(_react2.default.Component);
	
	HeaderButton.propTypes = {
	  arrow: _react2.default.PropTypes.element,
	  blockClassName: _react2.default.PropTypes.string,
	  enabled: _react2.default.PropTypes.bool,
	  offset: _react2.default.PropTypes.number,
	  onClick: _react2.default.PropTypes.func.isRequired,
	  title: _react2.default.PropTypes.string,
	  type: _react2.default.PropTypes.oneOf(['prev', 'next']).isRequired
	};
	HeaderButton.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = HeaderButton;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var getDaysInMonth = __webpack_require__(42)
	
	/**
	 * @category Month Helpers
	 * @summary Add the specified number of months to the given date.
	 *
	 * @description
	 * Add the specified number of months to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of months to be added
	 * @returns {Date} the new date with the months added
	 *
	 * @example
	 * // Add 5 months to 1 September 2014:
	 * var result = addMonths(new Date(2014, 8, 1), 5)
	 * //=> Sun Feb 01 2015 00:00:00
	 */
	function addMonths (dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var desiredMonth = date.getMonth() + amount
	  var dateWithDesiredMonth = new Date(0)
	  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
	  dateWithDesiredMonth.setHours(0, 0, 0, 0)
	  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
	  // Set the last day of the new month
	  // if the original date was the last day of the longer month
	  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
	  return date
	}
	
	module.exports = addMonths


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of days in a month of the given date.
	 *
	 * @description
	 * Get the number of days in a month of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the number of days in a month
	 *
	 * @example
	 * // How many days are in February 2000?
	 * var result = getDaysInMonth(new Date(2000, 1))
	 * //=> 29
	 */
	function getDaysInMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var monthIndex = date.getMonth()
	  var lastDayOfMonth = new Date(0)
	  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
	  lastDayOfMonth.setHours(0, 0, 0, 0)
	  return lastDayOfMonth.getDate()
	}
	
	module.exports = getDaysInMonth


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _consts = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice() {
	    _classCallCheck(this, Notice);
	
	    return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
	  }
	
	  _createClass(Notice, [{
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-notice' },
	        this._renderMessage()
	      );
	    }
	  }, {
	    key: '_renderMessage',
	    value: function _renderMessage() {
	      switch (this.props.type) {
	        case 'overlapping_with_disabled':
	          return 'Selected range must not overlap with disabled dates.';
	      }
	    }
	  }]);
	
	  return Notice;
	}(_react2.default.Component);
	
	Notice.propTypes = {
	  blockClassName: _react2.default.PropTypes.string.isRequired,
	  type: _react.PropTypes.oneOf(['overlapping_with_disabled']).isRequired
	};
	Notice.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Notice;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Range Helpers
	 * @summary Is the given date range overlapping with another date range?
	 *
	 * @description
	 * Is the given date range overlapping with another date range?
	 *
	 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
	 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
	 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
	 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
	 * @returns {Boolean} whether the date ranges are overlapping
	 * @throws {Error} startDate of a date range cannot be after its endDate
	 *
	 * @example
	 * // For overlapping date ranges:
	 * areRangesOverlapping(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
	 * )
	 * //=> true
	 *
	 * @example
	 * // For non-overlapping date ranges:
	 * areRangesOverlapping(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
	 * )
	 * //=> false
	 */
	function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
	  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
	  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
	  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
	  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()
	
	  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
	}
	
	module.exports = areRangesOverlapping


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYjM1M2M1YWUzMDNmMTA3M2FhNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2RheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2dldF9kYXlfb2ZfeWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3BhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3N0YXJ0X29mX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2dldF9pc29feWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX3ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2xvY2FsZS9lbi9idWlsZF9mb3JtYXRfbG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRfZm9ybWF0dGluZ190b2tlbnNfcmVnX2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2VhY2hfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvZW5kX29mX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc193aXRoaW5fcmFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc19iZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc19hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfd2Vla2VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX3NhbWVfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfc2FtZV9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5c19vZl93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvZW5kX29mX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvYWRkX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdWJfZGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvaGVhZGVyX2J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9hZGRfbW9udGhzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL25vdGljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9hcmVfcmFuZ2VzX292ZXJsYXBwaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJTSU5HTEVfTU9ERSIsIlJBTkdFX01PREUiLCJpc1ZhbGlkIiwiZGF0ZSIsImUiLCJDYWxlbmRhciIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVNb250aCIsIl9pbml0aWFsTW9udGgiLCJzZWxlY3Rpb24iLCJzaG93bk5vdGljZVR5cGUiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkIiwibW9kZSIsInRvZGF5Iiwic2VsZWN0aW9uU3RhcnQiLCJzdGFydCIsIkRhdGUiLCJvbk1vbnRoQ2hhbmdlIiwiaGlnaGxpZ2h0ZWQiLCJlbmQiLCJfc2VsZWN0aW9uU3RhcnQiLCJfc2VsZWN0aW9uRW5kIiwiX3NlbGVjdGlvbkRhdGUiLCJkYXRlVHlwZSIsIm9uU2VsZWN0aW9uUHJvZ3Jlc3MiLCJpblByb2dyZXNzIiwib25TZWxlY3QiLCJibG9ja0NsYXNzTmFtZSIsImRpc2FibGVEYXlzT2ZXZWVrIiwiaGVhZGVyTmV4dEFycm93IiwiaGVhZGVyTmV4dFRpdGxlIiwiaGVhZGVyUHJldkFycm93IiwiaGVhZGVyUHJldlRpdGxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJtaW5OdW1iZXJPZldlZWtzIiwib25EYXlIb3ZlciIsImRpc2FibGVkSW50ZXJ2YWxzIiwicmFuZ2VMaW1pdCIsIl9zZWxlY3Rpb24iLCJoaWdobGlnaHQiLCJfaGlnaGxpZ2h0IiwiTW9udGhIZWFkZXJDb21wb25lbnQiLCJfcmVuZGVyTm90aWNlIiwiX2FjdGl2ZU1vbnRoIiwiX3N3aXRjaE1vbnRoIiwiYmluZCIsIl90b2RheSIsIl9zZWxlY3Rpb25DaGFuZ2VkIiwiX25vdGljZUNoYW5nZWQiLCJOb3RpY2VDb21wb25lbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJmdW5jIiwiaW5zdGFuY2VPZiIsInN0cmluZyIsImJvb2wiLCJhcnJheU9mIiwic2hhcGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiTW9udGgiLCJvbkNoYW5nZSIsIl9zZWxlY3Rpb25JblByb2dyZXNzIiwibm90aWNlVHlwZSIsIm9uTm90aWNlQ2hhbmdlIiwiaW50ZXJ2YWwiLCJpIiwibGVuZ3RoIiwiaW50ZXJ2YWxTdGFydCIsImludGVydmFsRW5kIiwiZGF0ZUxpbWl0IiwiaXNEaXNhYmxlZFdpdGhpbiIsIl9nZXREaXNhYmxlZFJhbmdlIiwiX3B1c2hVcGRhdGUiLCJfcHVzaE5vdGljZVVwZGF0ZSIsImNhbGNTdGFydERhdGUiLCJpc0NhbGNTdGFydERheUFmdGVyIiwiY2FsY0VuZERhdGUiLCJpc0NhbGNFbmREYXlCZWZvcmUiLCJfcmVuZGVyV2Vla0RheXMiLCJfcmVuZGVyV2Vla3MiLCJzZWxlY3RlZE1pbiIsInNlbGVjdGVkTWF4IiwiaGlnaGxpZ2h0ZWRTdGFydCIsImhpZ2hsaWdodGVkRW5kIiwid2Vla3MiLCJ3ZWVrU3RhcnRzT24iLCJfZ2V0TWluRGF0ZSIsIl9nZXRNYXhEYXRlIiwicHVzaCIsIm1hcCIsIndlZWsiLCJnZXRUaW1lIiwiX29uRGF5Q2xpY2siLCJfb25EYXlNb3VzZU1vdmUiLCJXZWVrIiwiX2RhdGVEaXNhYmxlZCIsImRhdGVEaXNhYmxlZCIsIl9kYXRlU2VsZWN0ZWQiLCJfZGF0ZUhpZ2hsaWdodGVkIiwiZ2V0TW9udGgiLCJfZGF0ZVNlbGVjdGFibGUiLCJfcmVuZGVyRGF5cyIsIm9uRGF5Q2xpY2siLCJvbkRheU1vdXNlTW92ZSIsImRheSIsImRhdGEiLCJzZWxlY3RhYmxlIiwiX2RhdGVDbGFzc2VzIiwiRGF5IiwicHJldmVudERlZmF1bHQiLCJvbkNsaWNrIiwib25Nb3VzZU1vdmUiLCJjbGFzc05hbWUiLCJfb25DbGljayIsIl9vbk1vdXNlTW92ZSIsIkJMT0NLX0NMQVNTX05BTUUiLCJORVhUX01PTlRIX1RJVExFIiwiUFJFVl9NT05USF9USVRMRSIsImRheXNPZldlZWsiLCJEYXlzT2ZXZWVrIiwiaW5kZXgiLCJNb250aEhlYWRlciIsIm9mZnNldCIsInBhcnNlSW50IiwicHJldkVuYWJsZWQiLCJuZXh0RW5hYmxlZCIsIkhlYWRlckJ1dHRvbiIsImVuYWJsZWQiLCJhcnJvdyIsInR5cGUiLCJ0aXRsZSIsIk5vdGljZSIsIl9yZW5kZXJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0N0Q1FBLE87Ozs7Ozs7Ozs7Ozs7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QUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7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O0FBQzlCLFlBQVcsbUJBQW1CO0FBQzlCLFlBQVcsbUJBQW1CO0FBQzlCLGNBQWEsUUFBUTtBQUNyQixhQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzaW1wbGUtY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDYWxlbmRhclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDYWxlbmRhclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZiMzUzYzVhZTMwM2YxMDczYWE2IiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9udGggZnJvbSAnLi9tb250aCdcbmltcG9ydCBNb250aEhlYWRlciBmcm9tICcuL21vbnRoX2hlYWRlcidcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi9ub3RpY2UnXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJ1xuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfbW9udGgnXG5pbXBvcnQgaXNWYWxpZERhdGUgZnJvbSAnZGF0ZS1mbnMvaXNfdmFsaWQnXG5cbmNvbnN0IFNJTkdMRV9NT0RFID0gJ3NpbmdsZSdcbmNvbnN0IFJBTkdFX01PREUgPSAncmFuZ2UnXG5cbmNvbnN0IGlzVmFsaWQgPSBmdW5jdGlvbihkYXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGlzVmFsaWREYXRlKGRhdGUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgTW9udGhIZWFkZXJDb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgTm90aWNlQ29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIGFjdGl2ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlRGF5c09mV2VlazogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWRJbnRlcnZhbHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdGFydDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZFxuICAgIH0pKSxcbiAgICBoZWFkZXJOZXh0QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlck5leHRUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJQcmV2QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlclByZXZUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoaWdobGlnaHRlZDogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgICAgZW5kOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICAgIG1heERhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1pbkRhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1pbk51bWJlck9mV2Vla3M6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbW9kZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtTSU5HTEVfTU9ERSwgUkFOR0VfTU9ERV0pLFxuICAgIG9uRGF5SG92ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdGlvblByb2dyZXNzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICByYW5nZUxpbWl0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gICAgICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5Qcm9ncmVzczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgXSksXG4gICAgdG9kYXk6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGU6IFNJTkdMRV9NT0RFLFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVNb250aDogdGhpcy5faW5pdGlhbE1vbnRoKHByb3BzKSxcbiAgICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICAgIHNob3duTm90aWNlVHlwZTogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVNb250aCAmJiAhaXNTYW1lTW9udGgobmV4dFByb3BzLmFjdGl2ZU1vbnRoLCB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTW9udGg6IHN0YXJ0T2ZNb250aChuZXh0UHJvcHMuYWN0aXZlTW9udGgpfSlcbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbE1vbnRoKHByb3BzKSB7XG4gICAgY29uc3Qge3NlbGVjdGVkLCBhY3RpdmVNb250aCwgbW9kZSwgdG9kYXl9ID0gcHJvcHMgfHwgdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzVmFsaWQoYWN0aXZlTW9udGgpKSB7XG4gICAgICByZXR1cm4gYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gKG1vZGUgPT09IFNJTkdMRV9NT0RFID8gc2VsZWN0ZWQgOiBzZWxlY3RlZC5zdGFydClcbiAgICAgICAgaWYgKGlzVmFsaWQoc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0T2ZNb250aChzZWxlY3Rpb25TdGFydClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnRPZk1vbnRoKHRvZGF5IHx8IG5ldyBEYXRlKCkpXG4gIH1cblxuICBfc3dpdGNoTW9udGgoZGF0ZSkge1xuICAgIGNvbnN0IHtvbk1vbnRoQ2hhbmdlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIG9uTW9udGhDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uTW9udGhDaGFuZ2UoZGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZU1vbnRoOiBkYXRlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmVNb250aCgpIHtcbiAgICBjb25zdCB7b25Nb250aENoYW5nZSwgYWN0aXZlTW9udGh9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvbk1vbnRoQ2hhbmdlKSB7XG4gICAgICByZXR1cm4gYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlTW9udGhcbiAgICB9XG4gIH1cblxuICBfaGlnaGxpZ2h0KCkge1xuICAgIGNvbnN0IHtoaWdobGlnaHRlZH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFoaWdobGlnaHRlZCkgcmV0dXJuIHtzdGFydDogbnVsbCwgZW5kOiBudWxsfVxuXG4gICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gaGlnaGxpZ2h0ZWRcblxuICAgIGlmIChpc1ZhbGlkKHN0YXJ0KSAmJiBpc1ZhbGlkKGVuZCkpIHtcbiAgICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtzdGFydDogbnVsbCwgZW5kOiBudWxsfVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9zZWxlY3Rpb25TdGFydCgpXG4gICAgY29uc3QgZW5kID0gdGhpcy5fc2VsZWN0aW9uRW5kKClcblxuICAgIGlmIChpc1ZhbGlkKHN0YXJ0KSAmJiBpc1ZhbGlkKGVuZCkpIHtcbiAgICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtzdGFydDogbnVsbCwgZW5kOiBudWxsfVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uRGF0ZSgnc3RhcnQnKVxuICB9XG5cbiAgX3NlbGVjdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uRGF0ZSgnZW5kJylcbiAgfVxuXG4gIF9zZWxlY3Rpb25EYXRlKGRhdGVUeXBlKSB7XG4gICAgY29uc3Qge3NlbGVjdGVkLCBvblNlbGVjdGlvblByb2dyZXNzfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7c2VsZWN0aW9ufSA9IHRoaXMuc3RhdGVcblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICBjYXNlIFNJTkdMRV9NT0RFOlxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRcblxuICAgICAgY2FzZSBSQU5HRV9NT0RFOlxuICAgICAgICBpZiAoIW9uU2VsZWN0aW9uUHJvZ3Jlc3MgJiYgc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbltkYXRlVHlwZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQgJiYgc2VsZWN0ZWRbZGF0ZVR5cGVdXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlZChzZWxlY3Rpb24pIHtcbiAgICBjb25zdCB7c3RhcnQsIGVuZCwgaW5Qcm9ncmVzc30gPSBzZWxlY3Rpb25cbiAgICBjb25zdCB7bW9kZSwgb25TZWxlY3QsIG9uU2VsZWN0aW9uUHJvZ3Jlc3N9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG9uU2VsZWN0ICYmIChtb2RlICE9PSBSQU5HRV9NT0RFIHx8ICFpblByb2dyZXNzKSkge1xuICAgICAgb25TZWxlY3QobW9kZSA9PT0gU0lOR0xFX01PREUgPyBzdGFydCA6IHtzdGFydCwgZW5kfSlcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gUkFOR0VfTU9ERSkge1xuICAgICAgaWYgKG9uU2VsZWN0aW9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgb25TZWxlY3Rpb25Qcm9ncmVzcyhzZWxlY3Rpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpb246IGluUHJvZ3Jlc3MgPyB7c3RhcnQsIGVuZH0gOiBudWxsfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbm90aWNlQ2hhbmdlZChzaG93bk5vdGljZVR5cGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93bk5vdGljZVR5cGV9KVxuICB9XG5cbiAgX3RvZGF5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRvZGF5IHx8IG5ldyBEYXRlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBibG9ja0NsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVEYXlzT2ZXZWVrLFxuICAgICAgaGVhZGVyTmV4dEFycm93LFxuICAgICAgaGVhZGVyTmV4dFRpdGxlLFxuICAgICAgaGVhZGVyUHJldkFycm93LFxuICAgICAgaGVhZGVyUHJldlRpdGxlLFxuICAgICAgaGlnaGxpZ2h0ZWQsXG4gICAgICBtYXhEYXRlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1pbk51bWJlck9mV2Vla3MsXG4gICAgICBtb2RlLFxuICAgICAgb25EYXlIb3ZlcixcbiAgICAgIGRpc2FibGVkSW50ZXJ2YWxzLFxuICAgICAgcmFuZ2VMaW1pdFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5fc2VsZWN0aW9uKClcbiAgICBjb25zdCBoaWdobGlnaHQgPSB0aGlzLl9oaWdobGlnaHQoKVxuICAgIGNvbnN0IE1vbnRoSGVhZGVyQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5Nb250aEhlYWRlckNvbXBvbmVudCB8fCBNb250aEhlYWRlclxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJOb3RpY2UoKX1cblxuICAgICAgICA8TW9udGhIZWFkZXJDb21wb25lbnRcbiAgICAgICAgICByZWY9J2hlYWRlcidcbiAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgaGVhZGVyUHJldkFycm93PXtoZWFkZXJQcmV2QXJyb3d9XG4gICAgICAgICAgaGVhZGVyUHJldlRpdGxlPXtoZWFkZXJQcmV2VGl0bGV9XG4gICAgICAgICAgaGVhZGVyTmV4dEFycm93PXtoZWFkZXJOZXh0QXJyb3d9XG4gICAgICAgICAgaGVhZGVyTmV4dFRpdGxlPXtoZWFkZXJOZXh0VGl0bGV9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMuX2FjdGl2ZU1vbnRoKCl9XG4gICAgICAgICAgb25Nb250aENoYW5nZT17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKX1cbiAgICAgICAgICBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb250aFxuICAgICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIG1pbk51bWJlck9mV2Vla3M9e21pbk51bWJlck9mV2Vla3N9XG4gICAgICAgICAgcmFuZ2VMaW1pdD17cmFuZ2VMaW1pdH1cbiAgICAgICAgICB0b2RheT17dGhpcy5fdG9kYXkoKX1cbiAgICAgICAgICByZWY9J21vbnRoJ1xuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9hY3RpdmVNb250aCgpfVxuICAgICAgICAgIHNlbGVjdGVkTWluPXtzZWxlY3Rpb24uc3RhcnR9XG4gICAgICAgICAgc2VsZWN0ZWRNYXg9e3NlbGVjdGlvbi5lbmR9XG4gICAgICAgICAgZGlzYWJsZURheXNPZldlZWs9e2Rpc2FibGVEYXlzT2ZXZWVrfVxuICAgICAgICAgIG9uRGF5SG92ZXI9e29uRGF5SG92ZXJ9XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRTdGFydD17aGlnaGxpZ2h0LnN0YXJ0fVxuICAgICAgICAgIGhpZ2hsaWdodGVkRW5kPXtoaWdobGlnaHQuZW5kfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Ob3RpY2VDaGFuZ2U9e3RoaXMuX25vdGljZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9XG4gICAgICAgICAgZGlzYWJsZWRJbnRlcnZhbHM9e2Rpc2FibGVkSW50ZXJ2YWxzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX3JlbmRlck5vdGljZSgpIHtcbiAgICBjb25zdCB7c2hvd25Ob3RpY2VUeXBlfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IE5vdGljZUNvbXBvbmVudCA9IHRoaXMucHJvcHMuTm90aWNlQ29tcG9uZW50IHx8IE5vdGljZVxuICAgIHJldHVybiBzaG93bk5vdGljZVR5cGUgJiYgPE5vdGljZUNvbXBvbmVudFxuICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgdHlwZT17c2hvd25Ob3RpY2VUeXBlfVxuICAgIC8+XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci9jYWxlbmRhci5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnXG5pbXBvcnQgRGF5c09mV2VlayBmcm9tICcuL2RheXNfb2Zfd2VlaydcbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5cbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydF9vZl93ZWVrJ1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRfb2Zfd2VlaydcbmltcG9ydCBpc1dpdGhpblJhbmdlIGZyb20gJ2RhdGUtZm5zL2lzX3dpdGhpbl9yYW5nZSdcbmltcG9ydCBlYWNoRGF5IGZyb20gJ2RhdGUtZm5zL2VhY2hfZGF5J1xuaW1wb3J0IGFyZVJhbmdlc092ZXJsYXBwaW5nIGZyb20gJ2RhdGUtZm5zL2FyZV9yYW5nZXNfb3ZlcmxhcHBpbmcnXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJ1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kX29mX21vbnRoJ1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzX2JlZm9yZSdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2RhdGUtZm5zL2lzX2VxdWFsJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnXG5pbXBvcnQgc3ViRGF5cyBmcm9tICdkYXRlLWZucy9zdWJfZGF5cydcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9kYXknXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfZGF5cydcblxuY29uc3QgU0lOR0xFX01PREUgPSAnc2luZ2xlJ1xuY29uc3QgUkFOR0VfTU9ERSA9ICdyYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVEYXlzT2ZXZWVrOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZEludGVydmFsczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgICAgZW5kOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgICBoaWdobGlnaHRlZEVuZDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgaGlnaGxpZ2h0ZWRTdGFydDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWF4RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWluRGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWluTnVtYmVyT2ZXZWVrczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25EYXlIb3ZlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ob3RpY2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmFuZ2VMaW1pdDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzZWxlY3RlZE1heDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgc2VsZWN0ZWRNaW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIHRvZGF5OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FXG4gIH1cblxuICBfcHVzaFVwZGF0ZSgpIHtcbiAgICBjb25zdCB7b25DaGFuZ2UsIHJhbmdlTGltaXR9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBzdGFydCwgZW5kXG5cbiAgICBpZiAoaXNCZWZvcmUodGhpcy5fc2VsZWN0aW9uU3RhcnQsIHRoaXMuX3NlbGVjdGlvbkVuZCkpIHtcbiAgICAgIHN0YXJ0ID0gdGhpcy5fc2VsZWN0aW9uU3RhcnRcbiAgICAgIGVuZCA9IHRoaXMuX3NlbGVjdGlvbkVuZFxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IHRoaXMuX3NlbGVjdGlvbkVuZFxuICAgICAgZW5kID0gdGhpcy5fc2VsZWN0aW9uU3RhcnRcbiAgICB9XG5cbiAgICBpZiAocmFuZ2VMaW1pdCAmJiByYW5nZUxpbWl0IDwgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGVuZCwgc3RhcnQpKSB7XG4gICAgICBlbmQgPSBhZGREYXlzKHN0YXJ0LCByYW5nZUxpbWl0KVxuICAgIH1cblxuICAgIHJldHVybiBvbkNoYW5nZSh7XG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIGluUHJvZ3Jlc3M6IHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3NcbiAgICB9KVxuICB9XG5cbiAgX3B1c2hOb3RpY2VVcGRhdGUobm90aWNlVHlwZSkge1xuICAgIGNvbnN0IHtvbk5vdGljZUNoYW5nZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIG9uTm90aWNlQ2hhbmdlKG5vdGljZVR5cGUpXG4gIH1cblxuICBfZ2V0RGlzYWJsZWRSYW5nZShpbnRlcnZhbCkge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGludGVydmFsXG4gICAgY29uc3Qge2Rpc2FibGVkSW50ZXJ2YWxzfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghZGlzYWJsZWRJbnRlcnZhbHMpIHJldHVybiB0cnVlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkSW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7c3RhcnQ6IGludGVydmFsU3RhcnQsIGVuZDogaW50ZXJ2YWxFbmR9ID0gZGlzYWJsZWRJbnRlcnZhbHNbaV1cblxuICAgICAgaWYgKGFyZVJhbmdlc092ZXJsYXBwaW5nKHN0YXJ0LCBlbmQsIGludGVydmFsU3RhcnQsIGludGVydmFsRW5kKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBjb25zdCB7b25EYXlIb3Zlcn0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uRGF5SG92ZXIpIHtcbiAgICAgIG9uRGF5SG92ZXIoZGF0ZSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MpIHJldHVyblxuXG4gICAgY29uc3Qge3JhbmdlTGltaXQsIGRpc2FibGVkSW50ZXJ2YWxzfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkYXRlTGltaXQgPSBzdWJEYXlzKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCByYW5nZUxpbWl0KVxuXG4gICAgY29uc3QgaXNEaXNhYmxlZFdpdGhpbiA9IHRoaXMuX2dldERpc2FibGVkUmFuZ2Uoe1xuICAgICAgc3RhcnQ6IGlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCBkYXRlKSA/IHRoaXMuX3NlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgIGVuZDogIWlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCBkYXRlKSA/IHRoaXMuX3NlbGVjdGlvblN0YXJ0IDogZGF0ZVxuICAgIH0pXG5cbiAgICBpZiAoIWlzRGlzYWJsZWRXaXRoaW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNFcXVhbChkYXRlLCB0aGlzLl9zZWxlY3Rpb25FbmQpKSB7XG4gICAgICBpZiAoIXJhbmdlTGltaXQgfHwgcmFuZ2VMaW1pdCAmJiAhaXNCZWZvcmUoZGF0ZSwgZGF0ZUxpbWl0KSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25FbmQgPSBkYXRlXG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkRheUNsaWNrKGRhdGUpIHtcbiAgICBjb25zdCB7bW9kZX0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGlzRGlzYWJsZWRXaXRoaW5cblxuICAgIGlmIChtb2RlID09PSBSQU5HRV9NT0RFKSB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICBpc0Rpc2FibGVkV2l0aGluID0gdGhpcy5fZ2V0RGlzYWJsZWRSYW5nZSh7XG4gICAgICAgICAgc3RhcnQ6IGlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCBkYXRlKSA/IHRoaXMuX3NlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgICAgICBlbmQ6ICFpc0JlZm9yZSh0aGlzLl9zZWxlY3Rpb25TdGFydCwgZGF0ZSkgPyB0aGlzLl9zZWxlY3Rpb25TdGFydCA6IGRhdGVcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWlzRGlzYWJsZWRXaXRoaW4pIHtcbiAgICAgICAgICB0aGlzLl9wdXNoTm90aWNlVXBkYXRlKCdvdmVybGFwcGluZ193aXRoX2Rpc2FibGVkJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25FbmQgPSBkYXRlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25JblByb2dyZXNzID0gdHJ1ZVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25TdGFydCA9IGRhdGVcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uRW5kID0gZGF0ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gU0lOR0xFX01PREUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZVxuICAgICAgdGhpcy5fc2VsZWN0aW9uU3RhcnQgPSBkYXRlXG4gICAgICB0aGlzLl9zZWxlY3Rpb25FbmQgPSBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgIHRoaXMuX3B1c2hOb3RpY2VVcGRhdGUobnVsbClcbiAgfVxuXG4gIF9nZXRNaW5EYXRlKCkge1xuICAgIGNvbnN0IHtyYW5nZUxpbWl0LCBtaW5EYXRlfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjYWxjU3RhcnREYXRlID0gc3ViRGF5cyh0aGlzLl9zZWxlY3Rpb25TdGFydCwgcmFuZ2VMaW1pdClcblxuICAgIGlmIChtaW5EYXRlKSB7XG4gICAgICBjb25zdCBpc0NhbGNTdGFydERheUFmdGVyID0gaXNCZWZvcmUobWluRGF0ZSwgY2FsY1N0YXJ0RGF0ZSlcbiAgICAgIHJldHVybiBpc0NhbGNTdGFydERheUFmdGVyID8gY2FsY1N0YXJ0RGF0ZSA6IG1pbkRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNhbGNTdGFydERhdGVcbiAgICB9XG4gIH1cblxuICBfZ2V0TWF4RGF0ZSgpIHtcbiAgICBjb25zdCB7cmFuZ2VMaW1pdCwgbWF4RGF0ZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2FsY0VuZERhdGUgPSBhZGREYXlzKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCByYW5nZUxpbWl0KVxuXG4gICAgaWYgKG1heERhdGUpIHtcbiAgICAgIGNvbnN0IGlzQ2FsY0VuZERheUJlZm9yZSA9IGlzQmVmb3JlKGNhbGNFbmREYXRlLCBtYXhEYXRlKVxuICAgICAgcmV0dXJuIGlzQ2FsY0VuZERheUJlZm9yZSA/IGNhbGNFbmREYXRlIDogbWF4RGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FsY0VuZERhdGVcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jsb2NrQ2xhc3NOYW1lfS1tb250aGB9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyV2Vla0RheXMoKX1cbiAgICAgICAge3RoaXMuX3JlbmRlcldlZWtzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfcmVuZGVyV2Vla0RheXMoKSB7XG4gICAgY29uc3Qge2Jsb2NrQ2xhc3NOYW1lLCBkaXNhYmxlRGF5c09mV2Vla30gPSB0aGlzLnByb3BzXG4gICAgaWYgKGRpc2FibGVEYXlzT2ZXZWVrKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIDxEYXlzT2ZXZWVrIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX0gLz5cbiAgfVxuXG4gIF9yZW5kZXJXZWVrcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZE1pbixcbiAgICAgIHNlbGVjdGVkTWF4LFxuICAgICAgaGlnaGxpZ2h0ZWRTdGFydCxcbiAgICAgIGhpZ2hsaWdodGVkRW5kLFxuICAgICAgZGlzYWJsZWRJbnRlcnZhbHMsXG4gICAgICBhY3RpdmVNb250aCxcbiAgICAgIHRvZGF5LFxuICAgICAgYmxvY2tDbGFzc05hbWUsXG4gICAgICBtaW5OdW1iZXJPZldlZWtzLFxuICAgICAgcmFuZ2VMaW1pdCxcbiAgICAgIG9uRGF5SG92ZXJcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHdlZWtzID0gW11cbiAgICBsZXQge21pbkRhdGUsIG1heERhdGV9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBkYXRlID0gc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKGFjdGl2ZU1vbnRoKSwge3dlZWtTdGFydHNPbjogMX0pXG4gICAgY29uc3QgZW5kID0gZW5kT2ZXZWVrKGVuZE9mTW9udGgoYWN0aXZlTW9udGgpLCB7d2Vla1N0YXJ0c09uOiAxfSlcblxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25JblByb2dyZXNzICYmIHJhbmdlTGltaXQpIHtcbiAgICAgIG1pbkRhdGUgPSB0aGlzLl9nZXRNaW5EYXRlKClcbiAgICAgIG1heERhdGUgPSB0aGlzLl9nZXRNYXhEYXRlKClcbiAgICB9XG5cbiAgICB3aGlsZSAoKHR5cGVvZiBtaW5OdW1iZXJPZldlZWtzID09ICdudW1iZXInICYmIG1pbk51bWJlck9mV2Vla3MgPiB3ZWVrcy5sZW5ndGgpXG4gICAgICB8fCAoaXNCZWZvcmUoZGF0ZSwgZW5kKSB8fCBpc1NhbWVEYXkoZGF0ZSwgZW5kKSkpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF0ZSlcbiAgICAgIGRhdGUgPSBhZGREYXlzKGRhdGUsIDcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdlZWtcbiAgICAgICAgICBrZXk9e3dlZWsuZ2V0VGltZSgpfVxuICAgICAgICAgIGRhdGU9e3dlZWt9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIHNlbGVjdGVkTWluPXtzZWxlY3RlZE1pbn1cbiAgICAgICAgICBzZWxlY3RlZE1heD17c2VsZWN0ZWRNYXh9XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRTdGFydD17aGlnaGxpZ2h0ZWRTdGFydH1cbiAgICAgICAgICBoaWdobGlnaHRlZEVuZD17aGlnaGxpZ2h0ZWRFbmR9XG4gICAgICAgICAgZGlzYWJsZWRJbnRlcnZhbHM9e2Rpc2FibGVkSW50ZXJ2YWxzfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXthY3RpdmVNb250aH1cbiAgICAgICAgICBvbkRheUhvdmVyPXtvbkRheUhvdmVyfVxuICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkRheU1vdXNlTW92ZT17dGhpcy5fb25EYXlNb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICB0b2RheT17dG9kYXl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci9tb250aC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgRGF5IGZyb20gJy4vZGF5J1xuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuaW1wb3J0IGVhY2hEYXkgZnJvbSAnZGF0ZS1mbnMvZWFjaF9kYXknXG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9kYXknXG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2VlaydcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX3dlZWsnXG5pbXBvcnQgaXNXaXRoaW5SYW5nZSBmcm9tICdkYXRlLWZucy9pc193aXRoaW5fcmFuZ2UnXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc19iZWZvcmUnXG5pbXBvcnQgaXNBZnRlciBmcm9tICdkYXRlLWZucy9pc19hZnRlcidcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2RhdGUtZm5zL2lzX2VxdWFsJ1xuaW1wb3J0IGlzV2Vla2VuZCBmcm9tICdkYXRlLWZucy9pc193ZWVrZW5kJ1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSdcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc19zYW1lX21vbnRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmVNb250aDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZWRJbnRlcnZhbHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdGFydDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgaGlnaGxpZ2h0ZWRFbmQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIGhpZ2hsaWdodGVkU3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1heERhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1pbkRhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG9uRGF5Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25EYXlNb3VzZU1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRNYXg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIHNlbGVjdGVkTWluOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICB0b2RheTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX2RhdGVTZWxlY3RhYmxlKGRhdGUpIHtcbiAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5fZGF0ZURpc2FibGVkKGRhdGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAobWluRGF0ZSAmJiBtYXhEYXRlKSB7XG4gICAgICByZXR1cm4gaXNXaXRoaW5SYW5nZShkYXRlLCBtaW5EYXRlLCBtYXhEYXRlKVxuICAgIH0gZWxzZSBpZiAobWluRGF0ZSAmJiAhbWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQWZ0ZXIoZGF0ZSwgbWluRGF0ZSkgfHwgaXNFcXVhbChkYXRlLCBtaW5EYXRlKVxuICAgIH0gZWxzZSBpZiAobWF4RGF0ZSAmJiAhbWluRGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQmVmb3JlKGRhdGUsIG1heERhdGUpIHx8IGlzRXF1YWwoZGF0ZSwgbWF4RGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBfZGF0ZVNlbGVjdGVkKGRhdGUpIHtcbiAgICBjb25zdCB7c2VsZWN0ZWRNaW4sIHNlbGVjdGVkTWF4fSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKHNlbGVjdGVkTWluICYmIHNlbGVjdGVkTWF4KVxuICAgICAgJiYgaXNXaXRoaW5SYW5nZShcbiAgICAgICAgc3RhcnRPZkRheShkYXRlKSxcbiAgICAgICAgc3RhcnRPZkRheShzZWxlY3RlZE1pbiksXG4gICAgICAgIHN0YXJ0T2ZEYXkoc2VsZWN0ZWRNYXgpXG4gICAgICApXG4gIH1cblxuICBfZGF0ZUhpZ2hsaWdodGVkKGRhdGUpIHtcbiAgICBjb25zdCB7aGlnaGxpZ2h0ZWRTdGFydCwgaGlnaGxpZ2h0ZWRFbmR9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghaGlnaGxpZ2h0ZWRTdGFydCB8fCAhaGlnaGxpZ2h0ZWRFbmQpIHJldHVybiBmYWxzZVxuXG4gICAgcmV0dXJuIGlzV2l0aGluUmFuZ2UoXG4gICAgICBzdGFydE9mRGF5KGRhdGUpLFxuICAgICAgc3RhcnRPZkRheShoaWdobGlnaHRlZFN0YXJ0KSxcbiAgICAgIHN0YXJ0T2ZEYXkoaGlnaGxpZ2h0ZWRFbmQpXG4gICAgKVxuICB9XG5cbiAgX2RhdGVEaXNhYmxlZChkYXRlKSB7XG4gICAgbGV0IGRhdGVEaXNhYmxlZFxuICAgIGNvbnN0IHtkaXNhYmxlZEludGVydmFsc30gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZEludGVydmFscykgcmV0dXJuIGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkSW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7c3RhcnQsIGVuZH0gPSBkaXNhYmxlZEludGVydmFsc1tpXVxuXG4gICAgICBkYXRlRGlzYWJsZWQgPSBpc1dpdGhpblJhbmdlKHN0YXJ0T2ZEYXkoZGF0ZSksIHN0YXJ0T2ZEYXkoc3RhcnQpLCBzdGFydE9mRGF5KGVuZCkpXG5cbiAgICAgIGlmIChkYXRlRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVEaXNhYmxlZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2RhdGVDbGFzc2VzKGRhdGUpIHtcbiAgICBjb25zdCB7dG9kYXksIGFjdGl2ZU1vbnRoLCBzZWxlY3RlZE1heCwgc2VsZWN0ZWRNaW59ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIGNsYXNzbmFtZXMoe1xuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5fZGF0ZVNlbGVjdGVkKGRhdGUpLFxuICAgICAgJ2lzLWhpZ2hsaWdodGVkJzogdGhpcy5fZGF0ZUhpZ2hsaWdodGVkKGRhdGUpLFxuICAgICAgJ2lzLWRpc2FibGVkJzogdGhpcy5fZGF0ZURpc2FibGVkKGRhdGUpLFxuICAgICAgJ2lzLXRvZGF5JzogaXNTYW1lRGF5KHRvZGF5LCBkYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogaXNTYW1lTW9udGgoZGF0ZSwgYWN0aXZlTW9udGgpLFxuICAgICAgJ2lzLXN0YXJ0X3NlbGVjdGlvbic6IHNlbGVjdGVkTWluICYmIGlzU2FtZURheShzZWxlY3RlZE1pbiwgZGF0ZSksXG4gICAgICAnaXMtZW5kX3NlbGVjdGlvbic6IHNlbGVjdGVkTWF4ICYmIGlzU2FtZURheShzZWxlY3RlZE1heCwgZGF0ZSksXG4gICAgICAnaXMtcHJldl9tb250aCc6IChkYXRlLmdldE1vbnRoKCkgIT09IGFjdGl2ZU1vbnRoLmdldE1vbnRoKCkgJiYgaXNCZWZvcmUoZGF0ZSwgYWN0aXZlTW9udGgpKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogKGRhdGUuZ2V0TW9udGgoKSAhPT0gYWN0aXZlTW9udGguZ2V0TW9udGgoKSAmJiBpc0FmdGVyKGRhdGUsIGFjdGl2ZU1vbnRoKSksXG4gICAgICBbaXNXZWVrZW5kKGRhdGUpID8gJ2lzLXdlZWtlbmQnIDogJ2lzLXdvcmtpbmdfZGF5J106IHRydWUsXG4gICAgICBbdGhpcy5fZGF0ZVNlbGVjdGFibGUoZGF0ZSkgPyAnaXMtc2VsZWN0YWJsZScgOiAnaXMtbm90X3NlbGVjdGFibGUnXTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmJsb2NrQ2xhc3NOYW1lfS13ZWVrYH0+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJEYXlzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfcmVuZGVyRGF5cygpIHtcbiAgICBjb25zdCB7ZGF0ZSwgdG9kYXksIG9uRGF5Q2xpY2ssIG9uRGF5TW91c2VNb3ZlLCBibG9ja0NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mV2VlayhkYXRlLCB7d2Vla1N0YXJ0c09uOiAxfSlcbiAgICBjb25zdCBlbmQgPSBlbmRPZldlZWsoZGF0ZSwge3dlZWtTdGFydHNPbjogMX0pXG4gICAgcmV0dXJuIGVhY2hEYXkoc3RhcnQsIGVuZCkubWFwKChkYXkpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFbZm9ybWF0KGRheSwgJ1lZWVktTU0tREQnKV1cbiAgICAgIGNvbnN0IHNlbGVjdGFibGUgPSB0aGlzLl9kYXRlU2VsZWN0YWJsZShkYXkpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF5XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAgIGtleT17ZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICBkYXRlPXtkYXl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuX2RhdGVDbGFzc2VzKGRheSwgZGF0YSl9XG4gICAgICAgICAgdG9kYXk9e3RvZGF5fVxuICAgICAgICAgIG9uQ2xpY2s9e3NlbGVjdGFibGUgPyBvbkRheUNsaWNrIDogbnVsbH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17c2VsZWN0YWJsZSA/IG9uRGF5TW91c2VNb3ZlIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3giLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5cbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlTW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgdG9kYXk6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIF9vbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7ZGF0ZSwgb25DbGlja30gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZGF0ZSlcbiAgICB9XG4gIH1cblxuICBfb25Nb3VzZU1vdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHtkYXRlLCBvbk1vdXNlTW92ZX0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uTW91c2VNb3ZlKSB7XG4gICAgICBvbk1vdXNlTW92ZShkYXRlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZGF0ZSwgY2xhc3NOYW1lLCBibG9ja0NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGAke2Jsb2NrQ2xhc3NOYW1lfS1kYXlgLCBjbGFzc05hbWUpfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLl9vbk1vdXNlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgPlxuICAgICAgICB7Zm9ybWF0RGF0ZShkYXRlLCAnRCcpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsImV4cG9ydCBjb25zdCBCTE9DS19DTEFTU19OQU1FID0gJ2NhbGVuZGFyJ1xuZXhwb3J0IGNvbnN0IE5FWFRfTU9OVEhfVElUTEUgPSAnTmV4dCBtb250aCdcbmV4cG9ydCBjb25zdCBQUkVWX01PTlRIX1RJVExFID0gJ1ByZXZpb3VzIG1vbnRoJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbGVuZGFyL2NvbnN0cy5qcyIsInZhciBnZXREYXlPZlllYXIgPSByZXF1aXJlKCcuLi9nZXRfZGF5X29mX3llYXIvaW5kZXguanMnKVxudmFyIGdldElTT1dlZWsgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3dlZWsvaW5kZXguanMnKVxudmFyIGdldElTT1llYXIgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3llYXIvaW5kZXguanMnKVxudmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuLi9pc192YWxpZC9pbmRleC5qcycpXG52YXIgZW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9sb2NhbGUvZW4vaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC5cbiAqXG4gKiBBY2NlcHRlZCB0b2tlbnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgIHwgVG9rZW4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IE1vbnRoICAgICAgICAgICAgICAgICAgIHwgTSAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciB8XG4gKiB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgIHwgUSAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgIHwgRCAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgIHwgREREICAgfCAxLCAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREbyAgfCAxc3QsIDJuZCwgLi4uLCAzNjZ0aCAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgfCAwMDEsIDAwMiwgLi4uLCAzNjYgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB3ZWVrICAgICAgICAgICAgIHwgZCAgICAgfCAwLCAxLCAuLi4sIDYgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgfCAwdGgsIDFzdCwgLi4uLCA2dGggICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgfCBTdSwgTW8sIC4uLiwgU2EgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkICAgfCBTdW4sIE1vbiwgLi4uLCBTYXQgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkZCAgfCBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheSAgICB8XG4gKiB8IERheSBvZiBJU08gd2VlayAgICAgICAgIHwgRSAgICAgfCAxLCAyLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrICAgICAgICAgICAgICAgIHwgVyAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV28gICAgfCAxc3QsIDJuZCwgLi4uLCA1M3JkICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV1cgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICB8XG4gKiB8IFllYXIgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIHwgR0cgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IEFNL1BNICAgICAgICAgICAgICAgICAgIHwgQSAgICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEhvdXIgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgfCAwLCAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgfCAwMCwgMDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgIHwgbSAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgIHwgcyAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAgb2Ygc2Vjb25kICAgICAgICAgIHwgUyAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAwIG9mIHNlY29uZCAgICAgICAgIHwgU1MgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kICAgICAgICAgICAgIHwgU1NTICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWV6b25lICAgICAgICAgICAgICAgIHwgWiAgICAgfCAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWlogICAgfCAtMDEwMCwgKzAwMDAsIC4uLiwgKzEyMDAgICAgICAgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgIHwgWCAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgIHwgeCAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBpbiBzcXVhcmUgYnJhY2tldHMgYXJlIGVzY2FwZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IFtmb3JtYXQ9J1lZWVktTU0tRERUSEg6bW06c3MuU1NTWiddIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmxvY2FsZT1lbkxvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDEsIDExKSxcbiAqICAgJ01NL0REL1lZWVknXG4gKiApXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogdmFyIGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAnRG8gW2RlXSBNTU1NIFlZWVknLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICovXG5mdW5jdGlvbiBmb3JtYXQgKGRpcnR5RGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGZvcm1hdFN0ciA9IGZvcm1hdFN0ciB8fCAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJ1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZVxuICB2YXIgbG9jYWxlRm9ybWF0dGVycyA9IGVuTG9jYWxlLmZvcm1hdC5mb3JtYXR0ZXJzXG4gIHZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gZW5Mb2NhbGUuZm9ybWF0LmZvcm1hdHRpbmdUb2tlbnNSZWdFeHBcbiAgaWYgKGxvY2FsZSAmJiBsb2NhbGUuZm9ybWF0ICYmIGxvY2FsZS5mb3JtYXQuZm9ybWF0dGVycykge1xuICAgIGxvY2FsZUZvcm1hdHRlcnMgPSBsb2NhbGUuZm9ybWF0LmZvcm1hdHRlcnNcblxuICAgIGlmIChsb2NhbGUuZm9ybWF0LmZvcm1hdHRpbmdUb2tlbnNSZWdFeHApIHtcbiAgICAgIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSBsb2NhbGUuZm9ybWF0LmZvcm1hdHRpbmdUb2tlbnNSZWdFeHBcbiAgICB9XG4gIH1cblxuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcblxuICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgfVxuXG4gIHZhciBmb3JtYXRGbiA9IGJ1aWxkRm9ybWF0Rm4oZm9ybWF0U3RyLCBsb2NhbGVGb3JtYXR0ZXJzLCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuXG4gIHJldHVybiBmb3JtYXRGbihkYXRlKVxufVxuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gTW9udGg6IDEsIDIsIC4uLiwgMTJcbiAgJ00nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIH0sXG5cbiAgLy8gTW9udGg6IDAxLCAwMiwgLi4uLCAxMlxuICAnTU0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNb250aCgpICsgMSwgMilcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxLCAyLCAzLCA0XG4gICdRJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gICdEJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKClcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICAnREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIDIpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDEsIDIsIC4uLiwgMzY2XG4gICdEREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gICdEREREJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGdldERheU9mWWVhcihkYXRlKSwgMylcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gICdkJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKVxuICB9LFxuXG4gIC8vIERheSBvZiBJU08gd2VlazogMSwgMiwgLi4uLCA3XG4gICdFJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKSB8fCA3XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDEsIDIsIC4uLiwgNTNcbiAgJ1cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRJU09XZWVrKGRhdGUpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDAxLCAwMiwgLi4uLCA1M1xuICAnV1cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZ2V0SVNPV2VlayhkYXRlKSwgMilcbiAgfSxcblxuICAvLyBZZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1lZJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCkuc3Vic3RyKDIpXG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdZWVlZJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RnVsbFllYXIoKSwgNClcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gICdHRyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhnZXRJU09ZZWFyKGRhdGUpKS5zdWJzdHIoMilcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdHR0dHJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0SVNPWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAsIDEsIC4uLiAyM1xuICAnSCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAwLCAwMSwgLi4uLCAyM1xuICAnSEgnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCAyKVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgJ2gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKVxuICAgIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgcmV0dXJuIDEyXG4gICAgfSBlbHNlIGlmIChob3VycyA+IDEyKSB7XG4gICAgICByZXR1cm4gaG91cnMgJSAxMlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaG91cnNcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91cjogMDEsIDAyLCAuLi4sIDEyXG4gICdoaCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmb3JtYXR0ZXJzWydoJ10oZGF0ZSksIDIpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gICdtJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKClcbiAgfSxcblxuICAvLyBNaW51dGU6IDAwLCAwMSwgLi4uLCA1OVxuICAnbW0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIDIpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwLCAxLCAuLi4sIDU5XG4gICdzJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKClcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICAnc3MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIDIpXG4gIH0sXG5cbiAgLy8gMS8xMCBvZiBzZWNvbmQ6IDAsIDEsIC4uLiwgOVxuICAnUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMClcbiAgfSxcblxuICAvLyAxLzEwMCBvZiBzZWNvbmQ6IDAwLCAwMSwgLi4uLCA5OVxuICAnU1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTApLCAyKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kOiAwMDAsIDAwMSwgLi4uLCA5OTlcbiAgJ1NTUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICAnWic6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJzonKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICAnWlonOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZShkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpXG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICAnWCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMDkwMFxuICAneCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRGb3JtYXRGbiAoZm9ybWF0U3RyLCBsb2NhbGVGb3JtYXR0ZXJzLCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKSB7XG4gIHZhciBhcnJheSA9IGZvcm1hdFN0ci5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoXG5cbiAgdmFyIGlcbiAgdmFyIGZvcm1hdHRlclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3JtYXR0ZXIgPSBsb2NhbGVGb3JtYXR0ZXJzW2FycmF5W2ldXSB8fCBmb3JtYXR0ZXJzW2FycmF5W2ldXVxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGFycmF5W2ldID0gZm9ybWF0dGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgb3V0cHV0ID0gJydcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0oZGF0ZSwgZm9ybWF0dGVycylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBhcnJheVtpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyAoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XSQvZywgJycpXG4gIH1cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lIChvZmZzZXQsIGRlbGltZXRlcikge1xuICBkZWxpbWV0ZXIgPSBkZWxpbWV0ZXIgfHwgJydcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnXG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpXG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApXG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjBcbiAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIDIpICsgZGVsaW1ldGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpXG59XG5cbmZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyAobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKVxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dFxuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9mb3JtYXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIHN0YXJ0T2ZZZWFyID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfeWVhci9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5mdW5jdGlvbiBnZXREYXlPZlllYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZSwgc3RhcnRPZlllYXIoZGF0ZSkpXG4gIHZhciBkYXlPZlllYXIgPSBkaWZmICsgMVxuICByZXR1cm4gZGF5T2ZZZWFyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF5T2ZZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZ2V0X2RheV9vZl95ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RhdGUgPSByZXF1aXJlKCcuLi9pc19kYXRlL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxudmFyIERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgPSAyXG5cbnZhciBwYXJzZVRva2VuRGF0ZVRpbWVEZWxpbWV0ZXIgPSAvW1QgXS9cbnZhciBwYXJzZVRva2VuUGxhaW5UaW1lID0gLzovXG5cbi8vIHllYXIgdG9rZW5zXG52YXIgcGFyc2VUb2tlbllZID0gL14oXFxkezJ9KSQvXG52YXIgcGFyc2VUb2tlbnNZWVkgPSBbXG4gIC9eKFsrLV1cXGR7Mn0pJC8sIC8vIDAgYWRkaXRpb25hbCBkaWdpdHNcbiAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gIC9eKFsrLV1cXGR7NH0pJC8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG52YXIgcGFyc2VUb2tlbllZWVkgPSAvXihcXGR7NH0pL1xudmFyIHBhcnNlVG9rZW5zWVlZWVkgPSBbXG4gIC9eKFsrLV1cXGR7NH0pLywgLy8gMCBhZGRpdGlvbmFsIGRpZ2l0c1xuICAvXihbKy1dXFxkezV9KS8sIC8vIDEgYWRkaXRpb25hbCBkaWdpdFxuICAvXihbKy1dXFxkezZ9KS8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG4vLyBkYXRlIHRva2Vuc1xudmFyIHBhcnNlVG9rZW5NTSA9IC9eLShcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuREREID0gL14tPyhcXGR7M30pJC9cbnZhciBwYXJzZVRva2VuTU1ERCA9IC9eLT8oXFxkezJ9KS0/KFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5Xd3cgPSAvXi0/VyhcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuV3d3RCA9IC9eLT9XKFxcZHsyfSktPyhcXGR7MX0pJC9cblxuLy8gdGltZSB0b2tlbnNcbnZhciBwYXJzZVRva2VuSEggPSAvXihcXGR7Mn0oWy4sXVxcZCopPykkL1xudmFyIHBhcnNlVG9rZW5ISE1NID0gL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvXG52YXIgcGFyc2VUb2tlbkhITU1TUyA9IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC9cblxuLy8gdGltZXpvbmUgdG9rZW5zXG52YXIgcGFyc2VUb2tlblRpbWV6b25lID0gLyhbWistXS4qKSQvXG52YXIgcGFyc2VUb2tlblRpbWV6b25lWiA9IC9eKFopJC9cbnZhciBwYXJzZVRva2VuVGltZXpvbmVISCA9IC9eKFsrLV0pKFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5UaW1lem9uZUhITU0gPSAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIGFsbCBhYm92ZSBmYWlscywgdGhlIGZ1bmN0aW9uIHBhc3NlcyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0gezAgfCAxIHwgMn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2Ugc3RyaW5nICcrMDIwMTQxMDEnLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnKzAyMDE0MTAxJywge2FkZGl0aW9uYWxEaWdpdHM6IDF9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gcGFyc2UgKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGlmIChpc0RhdGUoYXJndW1lbnQpKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgPT0gbnVsbCkge1xuICAgIGFkZGl0aW9uYWxEaWdpdHMgPSBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTXG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpXG5cbiAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKVxuICB2YXIgeWVhciA9IHBhcnNlWWVhclJlc3VsdC55ZWFyXG4gIHZhciByZXN0RGF0ZVN0cmluZyA9IHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZ1xuXG4gIHZhciBkYXRlID0gcGFyc2VEYXRlKHJlc3REYXRlU3RyaW5nLCB5ZWFyKVxuXG4gIGlmIChkYXRlKSB7XG4gICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpXG4gICAgdmFyIHRpbWUgPSAwXG4gICAgdmFyIG9mZnNldFxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nIChkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGFyc2VUb2tlbkRhdGVUaW1lRGVsaW1ldGVyKVxuICB2YXIgdGltZVN0cmluZ1xuXG4gIGlmIChwYXJzZVRva2VuUGxhaW5UaW1lLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IG51bGxcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF1cbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF1cbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGFyc2VUb2tlblRpbWV6b25lLmV4ZWModGltZVN0cmluZylcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKVxuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5nc1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIgKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHBhcnNlVG9rZW5ZWVkgPSBwYXJzZVRva2Vuc1lZWVthZGRpdGlvbmFsRGlnaXRzXVxuICB2YXIgcGFyc2VUb2tlbllZWVlZID0gcGFyc2VUb2tlbnNZWVlZWVthZGRpdGlvbmFsRGlnaXRzXVxuXG4gIHZhciB0b2tlblxuXG4gIC8vIFlZWVkgb3IgwrFZWVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWVlZLmV4ZWMoZGF0ZVN0cmluZykgfHwgcGFyc2VUb2tlbllZWVlZLmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIHllYXJTdHJpbmcgPSB0b2tlblsxXVxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBwYXJzZUludCh5ZWFyU3RyaW5nLCAxMCksXG4gICAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSh5ZWFyU3RyaW5nLmxlbmd0aClcbiAgICB9XG4gIH1cblxuICAvLyBZWSBvciDCsVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWS5leGVjKGRhdGVTdHJpbmcpIHx8IHBhcnNlVG9rZW5ZWVkuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICB2YXIgY2VudHVyeVN0cmluZyA9IHRva2VuWzFdXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KGNlbnR1cnlTdHJpbmcsIDEwKSAqIDEwMCxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKGNlbnR1cnlTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZSAoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgdG9rZW5cbiAgdmFyIGRhdGVcbiAgdmFyIG1vbnRoXG4gIHZhciB3ZWVrXG5cbiAgLy8gWVlZWVxuICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU1cbiAgdG9rZW4gPSBwYXJzZVRva2VuTU0uZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aClcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1EREQgb3IgWVlZWURERFxuICB0b2tlbiA9IHBhcnNlVG9rZW5EREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZGF5T2ZZZWFyKVxuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLU1NLUREIG9yIFlZWVlNTUREXG4gIHRva2VuID0gcGFyc2VUb2tlbk1NREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheSA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktV3d3IG9yIFlZWVlXd3dcbiAgdG9rZW4gPSBwYXJzZVRva2VuV3d3LmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrKVxuICB9XG5cbiAgLy8gWVlZWS1Xd3ctRCBvciBZWVlZV3d3RFxuICB0b2tlbiA9IHBhcnNlVG9rZW5Xd3dELmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheU9mV2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgZGF0ZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUgKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG4gIHZhciBob3Vyc1xuICB2YXIgbWludXRlc1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGFyc2VUb2tlbkhILmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuICB9XG5cbiAgLy8gaGg6bW0gb3IgaGhtbVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ISE1NLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlRmxvYXQodG9rZW5bMl0ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIH1cblxuICAvLyBoaDptbTpzcyBvciBoaG1tc3NcbiAgdG9rZW4gPSBwYXJzZVRva2VuSEhNTVNTLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICB2YXIgc2Vjb25kcyA9IHBhcnNlRmxvYXQodG9rZW5bM10ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICtcbiAgICAgIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lICh0aW1lem9uZVN0cmluZykge1xuICB2YXIgdG9rZW5cbiAgdmFyIGFic29sdXRlT2Zmc2V0XG5cbiAgLy8gWlxuICB0b2tlbiA9IHBhcnNlVG9rZW5UaW1lem9uZVouZXhlYyh0aW1lem9uZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIMKxaGhcbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISC5leGVjKHRpbWV6b25lU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MFxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISE1NLmV4ZWModGltZXpvbmVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwICsgcGFyc2VJbnQodG9rZW5bM10sIDEwKVxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09ZZWFyIChpc29ZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgd2VlayA9IHdlZWsgfHwgMFxuICBkYXkgPSBkYXkgfHwgMFxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvWWVhciwgMCwgNClcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgN1xuICB2YXIgZGlmZiA9IHdlZWsgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheVxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvcGFyc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gYXJndW1lbnQgYW4gaW5zdGFuY2Ugb2YgRGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBhcmd1bWVudCBhbiBpbnN0YW5jZSBvZiBEYXRlP1xuICpcbiAqIEBwYXJhbSB7Kn0gYXJndW1lbnQgLSB0aGUgYXJndW1lbnQgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAnbWF5b25uYWlzZScgYSBEYXRlP1xuICogdmFyIHJlc3VsdCA9IGlzRGF0ZSgnbWF5b25uYWlzZScpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRGF0ZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2RhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBjbGVhbkRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXRlID0gbmV3IERhdGUoMClcbiAgZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSlcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0YXJ0T2ZEYXkgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9kYXkvaW5kZXguanMnKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdClcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mRGF5IChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mRGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3RhcnRfb2ZfZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1llYXIgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcycpXG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogdmFyIHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmZ1bmN0aW9uIGdldElTT1dlZWsgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRpZmYgPSBzdGFydE9mSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mSVNPWWVhcihkYXRlKS5nZXRUaW1lKClcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldElTT1dlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdGFydE9mV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwge3dlZWtTdGFydHNPbjogMX0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZklTT1dlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwge3dlZWtTdGFydHNPbjogMX0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mV2VlayAoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zID8gKG9wdGlvbnMud2Vla1N0YXJ0c09uIHx8IDApIDogMFxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT25cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKVxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZldlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9zdGFydF9vZl93ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0SVNPWWVhciA9IHJlcXVpcmUoJy4uL2dldF9pc29feWVhci9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08geWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZJU09ZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZklTT1llYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgeWVhciA9IGdldElTT1llYXIoZGlydHlEYXRlKVxuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMClcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mSVNPWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL3N0YXJ0X29mX2lzb195ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIHZhciByZXN1bHQgPSBnZXRJU09ZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmZ1bmN0aW9uIGdldElTT1llYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpXG5cbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKVxuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpXG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDFcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDFcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldElTT1llYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9nZXRfaXNvX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RhdGUgPSByZXF1aXJlKCcuLi9pc19kYXRlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSBhcmd1bWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkIChkYXRlKSB7XG4gIGlmIChpc0RhdGUoZGF0ZSkpIHtcbiAgICByZXR1cm4gIWlzTmFOKGRhdGUpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0b1N0cmluZy5jYWxsKGRhdGUpICsgJyBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZScpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1ZhbGlkXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvaXNfdmFsaWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZSA9IHJlcXVpcmUoJy4vYnVpbGRfZGlzdGFuY2VfaW5fd29yZHNfbG9jYWxlL2luZGV4LmpzJylcbnZhciBidWlsZEZvcm1hdExvY2FsZSA9IHJlcXVpcmUoJy4vYnVpbGRfZm9ybWF0X2xvY2FsZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGlzdGFuY2VJbldvcmRzOiBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZSgpLFxuICBmb3JtYXQ6IGJ1aWxkRm9ybWF0TG9jYWxlKClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9sb2NhbGUvZW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGJ1aWxkRGlzdGFuY2VJbldvcmRzTG9jYWxlICgpIHtcbiAgdmFyIGRpc3RhbmNlSW5Xb3Jkc0xvY2FsZSA9IHtcbiAgICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gICAgfSxcblxuICAgIHhTZWNvbmRzOiB7XG4gICAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICAgIH0sXG5cbiAgICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuXG4gICAgbGVzc1RoYW5YTWludXRlczoge1xuICAgICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICAgIH0sXG5cbiAgICB4TWludXRlczoge1xuICAgICAgb25lOiAnMSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgICB9LFxuXG4gICAgYWJvdXRYSG91cnM6IHtcbiAgICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgICB9LFxuXG4gICAgeEhvdXJzOiB7XG4gICAgICBvbmU6ICcxIGhvdXInLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gICAgfSxcblxuICAgIHhEYXlzOiB7XG4gICAgICBvbmU6ICcxIGRheScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICAgIH0sXG5cbiAgICBhYm91dFhNb250aHM6IHtcbiAgICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICAgIH0sXG5cbiAgICB4TW9udGhzOiB7XG4gICAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgICB9LFxuXG4gICAgYWJvdXRYWWVhcnM6IHtcbiAgICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgICB9LFxuXG4gICAgeFllYXJzOiB7XG4gICAgICBvbmU6ICcxIHllYXInLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gICAgfSxcblxuICAgIG92ZXJYWWVhcnM6IHtcbiAgICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gICAgfSxcblxuICAgIGFsbW9zdFhZZWFyczoge1xuICAgICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9jYWxpemUgKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgICB2YXIgcmVzdWx0XG4gICAgaWYgKHR5cGVvZiBkaXN0YW5jZUluV29yZHNMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzTG9jYWxlW3Rva2VuXVxuICAgIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgIHJlc3VsdCA9IGRpc3RhbmNlSW5Xb3Jkc0xvY2FsZVt0b2tlbl0ub25lXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGRpc3RhbmNlSW5Xb3Jkc0xvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgICByZXR1cm4gJ2luICcgKyByZXN1bHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbydcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvY2FsaXplOiBsb2NhbGl6ZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGREaXN0YW5jZUluV29yZHNMb2NhbGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9sb2NhbGUvZW4vYnVpbGRfZGlzdGFuY2VfaW5fd29yZHNfbG9jYWxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYnVpbGRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gcmVxdWlyZSgnLi4vLi4vX2xpYi9idWlsZF9mb3JtYXR0aW5nX3Rva2Vuc19yZWdfZXhwL2luZGV4LmpzJylcblxuZnVuY3Rpb24gYnVpbGRGb3JtYXRMb2NhbGUgKCkge1xuICAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbiAgLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4gIC8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuICAvLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG4gIHZhciBtb250aHMzY2hhciA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICB2YXIgbW9udGhzRnVsbCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gIHZhciB3ZWVrZGF5czJjaGFyID0gWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddXG4gIHZhciB3ZWVrZGF5czNjaGFyID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXVxuICB2YXIgd2Vla2RheXNGdWxsID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG4gIHZhciBtZXJpZGllbVVwcGVyY2FzZSA9IFsnQU0nLCAnUE0nXVxuICB2YXIgbWVyaWRpZW1Mb3dlcmNhc2UgPSBbJ2FtJywgJ3BtJ11cbiAgdmFyIG1lcmlkaWVtRnVsbCA9IFsnYS5tLicsICdwLm0uJ11cblxuICB2YXIgZm9ybWF0dGVycyA9IHtcbiAgICAvLyBNb250aDogSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgJ01NTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzM2NoYXJbZGF0ZS5nZXRNb250aCgpXVxuICAgIH0sXG5cbiAgICAvLyBNb250aDogSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAnTU1NTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzRnVsbFtkYXRlLmdldE1vbnRoKCldXG4gICAgfSxcblxuICAgIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLiwgU2FcbiAgICAnZGQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWtkYXlzMmNoYXJbZGF0ZS5nZXREYXkoKV1cbiAgICB9LFxuXG4gICAgLy8gRGF5IG9mIHdlZWs6IFN1biwgTW9uLCAuLi4sIFNhdFxuICAgICdkZGQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWtkYXlzM2NoYXJbZGF0ZS5nZXREYXkoKV1cbiAgICB9LFxuXG4gICAgLy8gRGF5IG9mIHdlZWs6IFN1bmRheSwgTW9uZGF5LCAuLi4sIFNhdHVyZGF5XG4gICAgJ2RkZGQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWtkYXlzRnVsbFtkYXRlLmdldERheSgpXVxuICAgIH0sXG5cbiAgICAvLyBBTSwgUE1cbiAgICAnQSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSAvIDEyKSA+PSAxID8gbWVyaWRpZW1VcHBlcmNhc2VbMV0gOiBtZXJpZGllbVVwcGVyY2FzZVswXVxuICAgIH0sXG5cbiAgICAvLyBhbSwgcG1cbiAgICAnYSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSAvIDEyKSA+PSAxID8gbWVyaWRpZW1Mb3dlcmNhc2VbMV0gOiBtZXJpZGllbUxvd2VyY2FzZVswXVxuICAgIH0sXG5cbiAgICAvLyBhLm0uLCBwLm0uXG4gICAgJ2FhJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiAoZGF0ZS5nZXRIb3VycygpIC8gMTIpID49IDEgPyBtZXJpZGllbUZ1bGxbMV0gOiBtZXJpZGllbUZ1bGxbMF1cbiAgICB9XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBvcmRpbmFsIHZlcnNpb24gb2YgZm9ybWF0dGVyczogTSAtPiBNbywgRCAtPiBEbywgZXRjLlxuICB2YXIgb3JkaW5hbEZvcm1hdHRlcnMgPSBbJ00nLCAnRCcsICdEREQnLCAnZCcsICdRJywgJ1cnXVxuICBvcmRpbmFsRm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXJUb2tlbikge1xuICAgIGZvcm1hdHRlcnNbZm9ybWF0dGVyVG9rZW4gKyAnbyddID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdHRlcnMpIHtcbiAgICAgIHJldHVybiBvcmRpbmFsKGZvcm1hdHRlcnNbZm9ybWF0dGVyVG9rZW5dKGRhdGUpKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGZvcm1hdHRlcnM6IGZvcm1hdHRlcnMsXG4gICAgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cDogYnVpbGRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKGZvcm1hdHRlcnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkaW5hbCAobnVtYmVyKSB7XG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDBcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0J1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJ1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkRm9ybWF0TG9jYWxlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Zvcm1hdF9sb2NhbGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb21tb25Gb3JtYXR0ZXJLZXlzID0gW1xuICAnTScsICdNTScsICdRJywgJ0QnLCAnREQnLCAnREREJywgJ0REREQnLCAnZCcsXG4gICdFJywgJ1cnLCAnV1cnLCAnWVknLCAnWVlZWScsICdHRycsICdHR0dHJyxcbiAgJ0gnLCAnSEgnLCAnaCcsICdoaCcsICdtJywgJ21tJyxcbiAgJ3MnLCAnc3MnLCAnUycsICdTUycsICdTU1MnLFxuICAnWicsICdaWicsICdYJywgJ3gnXG5dXG5cbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCAoZm9ybWF0dGVycykge1xuICB2YXIgZm9ybWF0dGVyS2V5cyA9IFtdXG4gIGZvciAodmFyIGtleSBpbiBmb3JtYXR0ZXJzKSB7XG4gICAgaWYgKGZvcm1hdHRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZm9ybWF0dGVyS2V5cy5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IGNvbW1vbkZvcm1hdHRlcktleXNcbiAgICAuY29uY2F0KGZvcm1hdHRlcktleXMpXG4gICAgLnNvcnQoKVxuICAgIC5yZXZlcnNlKClcbiAgdmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSBuZXcgUmVnRXhwKFxuICAgICcoXFxcXFtbXlxcXFxbXSpcXFxcXSl8KFxcXFxcXFxcKT8nICsgJygnICsgZm9ybWF0dGluZ1Rva2Vucy5qb2luKCd8JykgKyAnfC4pJywgJ2cnXG4gIClcblxuICByZXR1cm4gZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkX2Zvcm1hdHRpbmdfdG9rZW5zX3JlZ19leHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgYXJyYXkgb2YgZGF0ZXMgd2l0aGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBzdGFydERhdGUgLSB0aGUgZmlyc3QgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGVuZERhdGUgLSB0aGUgbGFzdCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZVtdfSB0aGUgYXJyYXkgd2l0aCBzdGFydHMgb2YgZGF5cyBmcm9tIHRoZSBkYXkgb2Ygc3RhcnREYXRlIHRvIHRoZSBkYXkgb2YgZW5kRGF0ZVxuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFYWNoIGRheSBiZXR3ZWVuIDYgT2N0b2JlciAyMDE0IGFuZCAxMCBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gZWFjaERheShcbiAqICAgbmV3IERhdGUoMjAxNCwgOSwgNiksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDksIDEwKVxuICogKVxuICogLy89PiBbXG4gKiAvLyAgIE1vbiBPY3QgMDYgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgVHVlIE9jdCAwNyAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBXZWQgT2N0IDA4IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFRodSBPY3QgMDkgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgRnJpIE9jdCAxMCAyMDE0IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmZ1bmN0aW9uIGVhY2hEYXkgKGRpcnR5U3RhcnREYXRlLCBkaXJ0eUVuZERhdGUpIHtcbiAgdmFyIHN0YXJ0RGF0ZSA9IHBhcnNlKGRpcnR5U3RhcnREYXRlKVxuICB2YXIgZW5kRGF0ZSA9IHBhcnNlKGRpcnR5RW5kRGF0ZSlcblxuICB2YXIgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpXG5cbiAgaWYgKHN0YXJ0RGF0ZS5nZXRUaW1lKCkgPiBlbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgZGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlJylcbiAgfVxuXG4gIHZhciBkYXRlcyA9IFtdXG5cbiAgdmFyIGN1cnJlbnREYXRlID0gc3RhcnREYXRlXG4gIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG5cbiAgd2hpbGUgKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8PSBlbmRUaW1lKSB7XG4gICAgZGF0ZXMucHVzaChwYXJzZShjdXJyZW50RGF0ZSkpXG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKVxuICB9XG5cbiAgcmV0dXJuIGRhdGVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWFjaERheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2VhY2hfZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHt3ZWVrU3RhcnRzT246IDF9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmZ1bmN0aW9uIGVuZE9mV2VlayAoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zID8gKG9wdGlvbnMud2Vla1N0YXJ0c09uIHx8IDApIDogMFxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pXG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZilcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZXZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZW5kX29mX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSByYW5nZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgcmFuZ2U/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IHN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBvZiByYW5nZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGVuZERhdGUgLSB0aGUgZW5kIG9mIHJhbmdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZVxuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSByYW5nZTpcbiAqIGlzV2l0aGluUmFuZ2UoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLCBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgcmFuZ2U6XG4gKiBpc1dpdGhpblJhbmdlKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1dpdGhpblJhbmdlIChkaXJ0eURhdGUsIGRpcnR5U3RhcnREYXRlLCBkaXJ0eUVuZERhdGUpIHtcbiAgdmFyIHRpbWUgPSBwYXJzZShkaXJ0eURhdGUpLmdldFRpbWUoKVxuICB2YXIgc3RhcnRUaW1lID0gcGFyc2UoZGlydHlTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgZW5kVGltZSA9IHBhcnNlKGRpcnR5RW5kRGF0ZSkuZ2V0VGltZSgpXG5cbiAgaWYgKHN0YXJ0VGltZSA+IGVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdGFydCBvZiB0aGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHJhbmdlJylcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dpdGhpblJhbmdlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvaXNfd2l0aGluX3JhbmdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUgKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHBhcnNlKGRpcnR5RGF0ZVRvQ29tcGFyZSlcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0JlZm9yZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2JlZm9yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogdmFyIHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNBZnRlciAoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXRlVG9Db21wYXJlID0gcGFyc2UoZGlydHlEYXRlVG9Db21wYXJlKVxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQWZ0ZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc19hZnRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiB2YXIgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKVxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCAoZGlydHlMZWZ0RGF0ZSwgZGlydHlSaWdodERhdGUpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlMZWZ0RGF0ZSlcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5UmlnaHREYXRlKVxuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpID09PSBkYXRlUmlnaHQuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2VxdWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgRG9lcyB0aGUgZ2l2ZW4gZGF0ZSBmYWxsIG9uIGEgd2Vla2VuZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIERvZXMgdGhlIGdpdmVuIGRhdGUgZmFsbCBvbiBhIHdlZWtlbmQ/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGZhbGxzIG9uIGEgd2Vla2VuZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBEb2VzIDUgT2N0b2JlciAyMDE0IGZhbGwgb24gYSB3ZWVrZW5kP1xuICogdmFyIHJlc3VsdCA9IGlzV2Vla2VuZChuZXcgRGF0ZSgyMDE0LCA5LCA1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1dlZWtlbmQgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KClcbiAgcmV0dXJuIGRheSA9PT0gMCB8fCBkYXkgPT09IDZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dlZWtlbmRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc193ZWVrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lRGF5IChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lRGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvaXNfc2FtZV9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVNb250aChcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDI1KVxuICogKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZU1vbnRoIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG4gIHJldHVybiBkYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IGRhdGVSaWdodC5nZXRNb250aCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lTW9udGhcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc19zYW1lX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuXG5jb25zdCBkYXlzT2ZXZWVrID0gWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcsICdTdW4nXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzT2ZXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9ja0NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtibG9ja0NsYXNzTmFtZX0tZGF5c19vZl93ZWVrYH0+XG4gICAgICAgIHtkYXlzT2ZXZWVrLm1hcCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhgJHtibG9ja0NsYXNzTmFtZX0tZGF5c19vZl93ZWVrX2RheWAsIHtcbiAgICAgICAgICAgICAgICAnaXMtd2Vla2VuZCc6IGluZGV4ID4gNCAvLyA0IGlzIGFuIGluZGV4IG9mIEZyaWRheVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAga2V5PXtkYXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvZGF5c19vZl93ZWVrLmpzeCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZNb250aCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICBkYXRlLnNldERhdGUoMSlcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZk1vbnRoIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKVxuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZk1vbnRoXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZW5kX29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBhZGREYXlzIChkaXJ0eURhdGUsIGFtb3VudCkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERheXNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9hZGRfZGF5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFkZERheXMgPSByZXF1aXJlKCcuLi9hZGRfZGF5cy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViRGF5cyAoZGlydHlEYXRlLCBhbW91bnQpIHtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YkRheXNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9zdWJfZGF5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4vaGVhZGVyX2J1dHRvbidcbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRSwgTkVYVF9NT05USF9USVRMRSwgUFJFVl9NT05USF9USVRMRX0gZnJvbSAnLi9jb25zdHMnXG5cbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocydcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc19iZWZvcmUnXG5pbXBvcnQgaXNBZnRlciBmcm9tICdkYXRlLWZucy9pc19hZnRlcidcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tICdkYXRlLWZucy9mb3JtYXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmVNb250aDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJOZXh0QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlck5leHRUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJQcmV2QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlclByZXZUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhEYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBtaW5EYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBvbk1vbnRoQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FLFxuICAgIGhlYWRlck5leHRUaXRsZTogTkVYVF9NT05USF9USVRMRSxcbiAgICBoZWFkZXJQcmV2VGl0bGU6IFBSRVZfTU9OVEhfVElUTEVcbiAgfVxuXG4gIF9zd2l0Y2hNb250aChvZmZzZXQpIHtcbiAgICBjb25zdCB7b25Nb250aENoYW5nZSwgYWN0aXZlTW9udGh9ID0gdGhpcy5wcm9wc1xuICAgIG9uTW9udGhDaGFuZ2UoYWRkTW9udGhzKGFjdGl2ZU1vbnRoLCBwYXJzZUludChvZmZzZXQpKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVNb250aCxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgYmxvY2tDbGFzc05hbWUsXG4gICAgICBoZWFkZXJOZXh0QXJyb3csXG4gICAgICBoZWFkZXJOZXh0VGl0bGUsXG4gICAgICBoZWFkZXJQcmV2QXJyb3csXG4gICAgICBoZWFkZXJQcmV2VGl0bGVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcHJldkVuYWJsZWQgPSBtaW5EYXRlID8gaXNCZWZvcmUoc3RhcnRPZk1vbnRoKG1pbkRhdGUpLCBzdGFydE9mTW9udGgoYWN0aXZlTW9udGgpKSA6IHRydWVcbiAgICBjb25zdCBuZXh0RW5hYmxlZCA9IG1heERhdGUgPyBpc0FmdGVyKHN0YXJ0T2ZNb250aChtYXhEYXRlKSwgc3RhcnRPZk1vbnRoKGFjdGl2ZU1vbnRoKSkgOiB0cnVlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jsb2NrQ2xhc3NOYW1lfS1tb250aF9oZWFkZXJgfT5cbiAgICAgICAgPEhlYWRlckJ1dHRvblxuICAgICAgICAgIHR5cGU9J3ByZXYnXG4gICAgICAgICAgYXJyb3c9e2hlYWRlclByZXZBcnJvd31cbiAgICAgICAgICB0aXRsZT17aGVhZGVyUHJldlRpdGxlfVxuICAgICAgICAgIGVuYWJsZWQ9e3ByZXZFbmFibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3N3aXRjaE1vbnRoLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jsb2NrQ2xhc3NOYW1lfS1tb250aF9oZWFkZXJfdGl0bGVgfT5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZShhY3RpdmVNb250aCwgJ01NTU0gWVlZWScpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlYWRlckJ1dHRvblxuICAgICAgICAgIHR5cGU9J25leHQnXG4gICAgICAgICAgYXJyb3c9e2hlYWRlck5leHRBcnJvd31cbiAgICAgICAgICB0aXRsZT17aGVhZGVyTmV4dFRpdGxlfVxuICAgICAgICAgIGVuYWJsZWQ9e25leHRFbmFibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3N3aXRjaE1vbnRoLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9mZnNldDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FXG4gIH1cblxuICBfb25DbGljayhlKSB7XG4gICAgY29uc3Qge2VuYWJsZWQsIG9uQ2xpY2t9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBvbkNsaWNrKGUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHthcnJvdywgYmxvY2tDbGFzc05hbWUsIGVuYWJsZWQsIHR5cGUsIHRpdGxlfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBgJHtibG9ja0NsYXNzTmFtZX0taGVhZGVyX2J1dHRvbmAsXG4gICAgICAgICAgYGlzLSR7dHlwZX1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdpcy1kaXNhYmxlZCc6ICFlbmFibGVkXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgIGRpc2FibGVkPXshZW5hYmxlZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgID5cbiAgICAgICAge2Fycm93fVxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvaGVhZGVyX2J1dHRvbi5qc3giLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgZ2V0RGF5c0luTW9udGggPSByZXF1aXJlKCcuLi9nZXRfZGF5c19pbl9tb250aC9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5mdW5jdGlvbiBhZGRNb250aHMgKGRpcnR5RGF0ZSwgYW1vdW50KSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGVzaXJlZE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgYW1vdW50XG4gIHZhciBkYXRlV2l0aERlc2lyZWRNb250aCA9IG5ldyBEYXRlKDApXG4gIGRhdGVXaXRoRGVzaXJlZE1vbnRoLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGVzaXJlZE1vbnRoLCAxKVxuICBkYXRlV2l0aERlc2lyZWRNb250aC5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB2YXIgZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aChkYXRlV2l0aERlc2lyZWRNb250aClcbiAgLy8gU2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbmV3IG1vbnRoXG4gIC8vIGlmIHRoZSBvcmlnaW5hbCBkYXRlIHdhcyB0aGUgbGFzdCBkYXkgb2YgdGhlIGxvbmdlciBtb250aFxuICBkYXRlLnNldE1vbnRoKGRlc2lyZWRNb250aCwgTWF0aC5taW4oZGF5c0luTW9udGgsIGRhdGUuZ2V0RGF0ZSgpKSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNb250aHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9hZGRfbW9udGhzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBkYXlzIGFyZSBpbiBGZWJydWFyeSAyMDAwP1xuICogdmFyIHJlc3VsdCA9IGdldERheXNJbk1vbnRoKG5ldyBEYXRlKDIwMDAsIDEpKVxuICogLy89PiAyOVxuICovXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKVxuICB2YXIgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSgwKVxuICBsYXN0RGF5T2ZNb250aC5zZXRGdWxsWWVhcih5ZWFyLCBtb250aEluZGV4ICsgMSwgMClcbiAgbGFzdERheU9mTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGxhc3REYXlPZk1vbnRoLmdldERhdGUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERheXNJbk1vbnRoXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdvdmVybGFwcGluZ193aXRoX2Rpc2FibGVkJ1xuICAgIF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LW5vdGljZWB9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyTWVzc2FnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX3JlbmRlck1lc3NhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ292ZXJsYXBwaW5nX3dpdGhfZGlzYWJsZWQnOlxuICAgICAgICByZXR1cm4gJ1NlbGVjdGVkIHJhbmdlIG11c3Qgbm90IG92ZXJsYXAgd2l0aCBkaXNhYmxlZCBkYXRlcy4nXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvbm90aWNlLmpzeCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgcmFuZ2Ugb3ZlcmxhcHBpbmcgd2l0aCBhbm90aGVyIGRhdGUgcmFuZ2U/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSByYW5nZSBvdmVybGFwcGluZyB3aXRoIGFub3RoZXIgZGF0ZSByYW5nZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSBpbml0aWFsIHJhbmdlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIGluaXRpYWwgcmFuZ2VcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSB0byBjb21wYXJlIGl0IHdpdGhcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIHJhbmdlIHRvIGNvbXBhcmUgaXQgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIGRhdGUgcmFuZ2VzIGFyZSBvdmVybGFwcGluZ1xuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBvZiBhIGRhdGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmREYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBvdmVybGFwcGluZyBkYXRlIHJhbmdlczpcbiAqIGFyZVJhbmdlc092ZXJsYXBwaW5nKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDIwKSwgbmV3IERhdGUoMjAxNCwgMCwgMTcpLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMSlcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igbm9uLW92ZXJsYXBwaW5nIGRhdGUgcmFuZ2VzOlxuICogYXJlUmFuZ2VzT3ZlcmxhcHBpbmcoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMSksIG5ldyBEYXRlKDIwMTQsIDAsIDIyKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBhcmVSYW5nZXNPdmVybGFwcGluZyAoZGlydHlJbml0aWFsUmFuZ2VTdGFydERhdGUsIGRpcnR5SW5pdGlhbFJhbmdlRW5kRGF0ZSwgZGlydHlDb21wYXJlZFJhbmdlU3RhcnREYXRlLCBkaXJ0eUNvbXBhcmVkUmFuZ2VFbmREYXRlKSB7XG4gIHZhciBpbml0aWFsU3RhcnRUaW1lID0gcGFyc2UoZGlydHlJbml0aWFsUmFuZ2VTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgaW5pdGlhbEVuZFRpbWUgPSBwYXJzZShkaXJ0eUluaXRpYWxSYW5nZUVuZERhdGUpLmdldFRpbWUoKVxuICB2YXIgY29tcGFyZWRTdGFydFRpbWUgPSBwYXJzZShkaXJ0eUNvbXBhcmVkUmFuZ2VTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgY29tcGFyZWRFbmRUaW1lID0gcGFyc2UoZGlydHlDb21wYXJlZFJhbmdlRW5kRGF0ZSkuZ2V0VGltZSgpXG5cbiAgaWYgKGluaXRpYWxTdGFydFRpbWUgPiBpbml0aWFsRW5kVGltZSB8fCBjb21wYXJlZFN0YXJ0VGltZSA+IGNvbXBhcmVkRW5kVGltZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIHN0YXJ0IG9mIHRoZSByYW5nZSBjYW5ub3QgYmUgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgcmFuZ2UnKVxuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxTdGFydFRpbWUgPCBjb21wYXJlZEVuZFRpbWUgJiYgY29tcGFyZWRTdGFydFRpbWUgPCBpbml0aWFsRW5kVGltZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFyZVJhbmdlc092ZXJsYXBwaW5nXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvYXJlX3Jhbmdlc19vdmVybGFwcGluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==