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
	
	var _month_header = __webpack_require__(41);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _notice = __webpack_require__(45);
	
	var _notice2 = _interopRequireDefault(_notice);
	
	var _consts = __webpack_require__(7);
	
	var _lib = __webpack_require__(8);
	
	var _start_of_month = __webpack_require__(37);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _is_same_month = __webpack_require__(34);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	var _is_valid = __webpack_require__(21);
	
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
	
	
	      if (onSelect && start && (mode !== RANGE_MODE || !inProgress)) {
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
	          rangeLimit = _props4.rangeLimit,
	          weekStartsOn = _props4.weekStartsOn;
	
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
	          disabledIntervals: disabledIntervals,
	          weekStartsOn: weekStartsOn
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
	  activeMonth: _lib.datePropType,
	  blockClassName: _react2.default.PropTypes.string,
	  disableDaysOfWeek: _react2.default.PropTypes.bool,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _lib.datePropType.isRequired,
	    end: _lib.datePropType.isRequired
	  })),
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  highlighted: _react2.default.PropTypes.shape({
	    start: _lib.datePropType.isRequired,
	    end: _lib.datePropType.isRequired
	  }),
	  maxDate: _lib.datePropType,
	  minDate: _lib.datePropType,
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
	  onDayHover: _react2.default.PropTypes.func,
	  onMonthChange: _react2.default.PropTypes.func,
	  onSelect: _react2.default.PropTypes.func,
	  onSelectionProgress: _react2.default.PropTypes.func,
	  rangeLimit: _react2.default.PropTypes.number,
	  selected: _react2.default.PropTypes.oneOfType([_lib.datePropType, _react2.default.PropTypes.shape({
	    start: _lib.datePropType.isRequired,
	    end: _lib.datePropType.isRequired,
	    inProgress: _react2.default.PropTypes.bool
	  })]),
	  today: _lib.datePropType,
	  weekStartsOn: _react2.default.PropTypes.oneOf(_consts.DAYS_IN_WEEK)
	};
	Calendar.defaultProps = {
	  weekStartsOn: 1,
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
	
	var _days_of_week = __webpack_require__(35);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _consts = __webpack_require__(7);
	
	var _lib = __webpack_require__(8);
	
	var _start_of_week = __webpack_require__(18);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(27);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _is_within_range = __webpack_require__(28);
	
	var _is_within_range2 = _interopRequireDefault(_is_within_range);
	
	var _each_day = __webpack_require__(26);
	
	var _each_day2 = _interopRequireDefault(_each_day);
	
	var _are_ranges_overlapping = __webpack_require__(36);
	
	var _are_ranges_overlapping2 = _interopRequireDefault(_are_ranges_overlapping);
	
	var _start_of_month = __webpack_require__(37);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _end_of_month = __webpack_require__(38);
	
	var _end_of_month2 = _interopRequireDefault(_end_of_month);
	
	var _is_before = __webpack_require__(29);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_equal = __webpack_require__(31);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _add_days = __webpack_require__(39);
	
	var _add_days2 = _interopRequireDefault(_add_days);
	
	var _sub_days = __webpack_require__(40);
	
	var _sub_days2 = _interopRequireDefault(_sub_days);
	
	var _is_same_day = __webpack_require__(33);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _difference_in_calendar_days = __webpack_require__(14);
	
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
	
	      if (this._selectionStart && this._selectionEnd) {
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
	
	
	      if (mode === RANGE_MODE) {
	        if (this._selectionInProgress) {
	          var isDisabledWithin = this._getDisabledRange({
	            start: (0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date,
	            end: !(0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date
	          });
	
	          if (!isDisabledWithin) {
	            this._selectionInProgress = false;
	            this._selectionStart = null;
	            this._selectionEnd = null;
	            this._pushUpdate();
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
	    key: '_onDisabledDayClick',
	    value: function _onDisabledDayClick() {
	      var onNoticeChange = this.props.onNoticeChange;
	
	      onNoticeChange('disabled_day_click');
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
	          disableDaysOfWeek = _props5.disableDaysOfWeek,
	          weekStartsOn = _props5.weekStartsOn;
	
	      if (disableDaysOfWeek) return null;
	
	      return _react2.default.createElement(_days_of_week2.default, { blockClassName: blockClassName, weekStartsOn: weekStartsOn });
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
	          onDayHover = _props6.onDayHover,
	          weekStartsOn = _props6.weekStartsOn;
	
	      var weeks = [];
	      var _props7 = this.props,
	          minDate = _props7.minDate,
	          maxDate = _props7.maxDate;
	
	      var date = (0, _start_of_week2.default)((0, _start_of_month2.default)(activeMonth), { weekStartsOn: weekStartsOn });
	      var end = (0, _end_of_week2.default)((0, _end_of_month2.default)(activeMonth), { weekStartsOn: weekStartsOn });
	
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
	          onDisabledDayClick: _this2._onDisabledDayClick.bind(_this2),
	          onDayMouseMove: _this2._onDayMouseMove.bind(_this2),
	          today: today,
	          blockClassName: blockClassName,
	          weekStartsOn: weekStartsOn
	        });
	      });
	    }
	  }]);
	
	  return Month;
	}(_react2.default.Component);
	
	Month.propTypes = {
	  activeMonth: _lib.datePropType.isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  disableDaysOfWeek: _react2.default.PropTypes.bool,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _lib.datePropType.isRequired,
	    end: _lib.datePropType.isRequired
	  })),
	  highlightedEnd: _lib.datePropType,
	  highlightedStart: _lib.datePropType,
	  maxDate: _lib.datePropType,
	  minDate: _lib.datePropType,
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired,
	  onDayHover: _react2.default.PropTypes.func,
	  onNoticeChange: _react2.default.PropTypes.func.isRequired,
	  rangeLimit: _react2.default.PropTypes.number,
	  selectedMax: _lib.datePropType,
	  selectedMin: _lib.datePropType,
	  today: _lib.datePropType.isRequired,
	  weekStartsOn: _react2.default.PropTypes.oneOf(_consts.DAYS_IN_WEEK)
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
	
	var _lib = __webpack_require__(8);
	
	var _each_day = __webpack_require__(26);
	
	var _each_day2 = _interopRequireDefault(_each_day);
	
	var _start_of_day = __webpack_require__(15);
	
	var _start_of_day2 = _interopRequireDefault(_start_of_day);
	
	var _start_of_week = __webpack_require__(18);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(27);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _is_within_range = __webpack_require__(28);
	
	var _is_within_range2 = _interopRequireDefault(_is_within_range);
	
	var _format = __webpack_require__(9);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _is_before = __webpack_require__(29);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(30);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _is_equal = __webpack_require__(31);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _is_weekend = __webpack_require__(32);
	
	var _is_weekend2 = _interopRequireDefault(_is_weekend);
	
	var _is_same_day = __webpack_require__(33);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _is_same_month = __webpack_require__(34);
	
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
	          onDisabledDayClick = _props5.onDisabledDayClick,
	          onDayMouseMove = _props5.onDayMouseMove,
	          blockClassName = _props5.blockClassName,
	          weekStartsOn = _props5.weekStartsOn;
	
	      var start = (0, _start_of_week2.default)(date, { weekStartsOn: weekStartsOn });
	      var end = (0, _end_of_week2.default)(date, { weekStartsOn: weekStartsOn });
	      return (0, _each_day2.default)(start, end).map(function (day) {
	        var data = _this2.props.data[(0, _format2.default)(day, 'YYYY-MM-DD')];
	        var selectable = _this2._dateSelectable(day);
	        var disabled = _this2._dateDisabled(day);
	
	        var onClick = void 0;
	        if (selectable) {
	          onClick = onDayClick;
	        } else if (disabled) {
	          onClick = onDisabledDayClick;
	        }
	
	        return _react2.default.createElement(_day2.default, {
	          blockClassName: blockClassName,
	          key: day.getTime(),
	          date: day,
	          data: data,
	          className: _this2._dateClasses(day, data),
	          today: today,
	          onClick: onClick,
	          onMouseMove: selectable ? onDayMouseMove : null
	        });
	      });
	    }
	  }]);
	
	  return Week;
	}(_react2.default.Component);
	
	Week.propTypes = {
	  activeMonth: _lib.datePropType.isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  data: _react2.default.PropTypes.object,
	  date: _lib.datePropType.isRequired,
	  disabledIntervals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    start: _lib.datePropType.isRequired,
	    end: _lib.datePropType.isRequired
	  })),
	  highlightedEnd: _lib.datePropType,
	  highlightedStart: _lib.datePropType,
	  maxDate: _lib.datePropType,
	  minDate: _lib.datePropType,
	  onDayClick: _react2.default.PropTypes.func.isRequired,
	  onDayMouseMove: _react2.default.PropTypes.func.isRequired,
	  onDisabledDayClick: _react2.default.PropTypes.func.isRequired,
	  selectedMax: _lib.datePropType,
	  selectedMin: _lib.datePropType,
	  today: _lib.datePropType.isRequired,
	  weekStartsOn: _react2.default.PropTypes.oneOf(_consts.DAYS_IN_WEEK)
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
	
	var _lib = __webpack_require__(8);
	
	var _format = __webpack_require__(9);
	
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
	  date: _lib.datePropType.isRequired,
	  onClick: _react2.default.PropTypes.func,
	  onMouseMove: _react2.default.PropTypes.func,
	  today: _lib.datePropType.isRequired
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
	var DAYS_IN_WEEK = exports.DAYS_IN_WEEK = [0, 1, 2, 3, 4, 5, 6];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.datePropType = undefined;
	
	var _react = __webpack_require__(2);
	
	var datePropType = exports.datePropType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.instanceOf(Date)]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(10)
	var getISOWeek = __webpack_require__(16)
	var getISOYear = __webpack_require__(20)
	var parse = __webpack_require__(11)
	var isValid = __webpack_require__(21)
	var enLocale = __webpack_require__(22)
	
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
	function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
	  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  var options = dirtyOptions || {}
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	var startOfYear = __webpack_require__(13)
	var differenceInCalendarDays = __webpack_require__(14)
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(12)
	
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
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(15)
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	var startOfISOWeek = __webpack_require__(17)
	var startOfISOYear = __webpack_require__(19)
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(18)
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
	function startOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(20)
	var startOfISOWeek = __webpack_require__(17)
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	var startOfISOWeek = __webpack_require__(17)
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(12)
	
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
	function isValid (dirtyDate) {
	  if (isDate(dirtyDate)) {
	    return !isNaN(dirtyDate)
	  } else {
	    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(23)
	var buildFormatLocale = __webpack_require__(24)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(25)
	
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
	function endOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
	
	  date.setDate(date.getDate() + diff)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfWeek


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(15)
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 35 */
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
	    key: '_getDaysOfWeek',
	    value: function _getDaysOfWeek(day) {
	      return daysOfWeek.slice(day - 1).concat(daysOfWeek.slice(0, day - 1));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          blockClassName = _props.blockClassName,
	          weekStartsOn = _props.weekStartsOn;
	
	      var slicedDaysOfWeek = this._getDaysOfWeek(weekStartsOn);
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-days_of_week' },
	        slicedDaysOfWeek.map(function (day, index) {
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
	  blockClassName: _react2.default.PropTypes.string,
	  weekStartsOn: _react2.default.PropTypes.oneOf(_consts.DAYS_IN_WEEK)
	};
	DaysOfWeek.defaultProps = {
	  weekStartsOn: 1,
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = DaysOfWeek;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
	function addDays (dirtyDate, dirtyAmount) {
	  var date = parse(dirtyDate)
	  var amount = Number(dirtyAmount)
	  date.setDate(date.getDate() + amount)
	  return date
	}
	
	module.exports = addDays


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(39)
	
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
	function subDays (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addDays(dirtyDate, -amount)
	}
	
	module.exports = subDays


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header_button = __webpack_require__(42);
	
	var _header_button2 = _interopRequireDefault(_header_button);
	
	var _consts = __webpack_require__(7);
	
	var _lib = __webpack_require__(8);
	
	var _add_months = __webpack_require__(43);
	
	var _add_months2 = _interopRequireDefault(_add_months);
	
	var _is_before = __webpack_require__(29);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(30);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _start_of_month = __webpack_require__(37);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _format = __webpack_require__(9);
	
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
	  activeMonth: _lib.datePropType.isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  maxDate: _lib.datePropType,
	  minDate: _lib.datePropType,
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	var getDaysInMonth = __webpack_require__(44)
	
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
	function addMonths (dirtyDate, dirtyAmount) {
	  var date = parse(dirtyDate)
	  var amount = Number(dirtyAmount)
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(11)
	
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
/* 45 */
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
	        case 'disabled_day_click':
	          return 'Selected range must not overlap with disabled dates.';
	      }
	    }
	  }]);
	
	  return Notice;
	}(_react2.default.Component);
	
	Notice.propTypes = {
	  blockClassName: _react2.default.PropTypes.string.isRequired,
	  type: _react.PropTypes.oneOf(['overlapping_with_disabled', 'disabled_day_click']).isRequired
	};
	Notice.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Notice;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNTRkYmQ5ZGM2NGM0ZjFmNDY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2RheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvX2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2dldF9kYXlfb2ZfeWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3BhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3N0YXJ0X29mX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2dldF9pc29feWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX3ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2xvY2FsZS9lbi9idWlsZF9mb3JtYXRfbG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRfZm9ybWF0dGluZ190b2tlbnNfcmVnX2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2VhY2hfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvZW5kX29mX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc193aXRoaW5fcmFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc19iZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9pc19hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfd2Vla2VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2lzX3NhbWVfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvaXNfc2FtZV9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5c19vZl93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2FyZV9yYW5nZXNfb3ZlcmxhcHBpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zdGFydF9vZl9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2VuZF9vZl9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2FkZF9kYXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3ViX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2hlYWRlcl9idXR0b24uanN4Iiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvYWRkX21vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL2dldF9kYXlzX2luX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9ub3RpY2UuanN4Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJTSU5HTEVfTU9ERSIsIlJBTkdFX01PREUiLCJpc1ZhbGlkIiwiZGF0ZSIsImUiLCJDYWxlbmRhciIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVNb250aCIsIl9pbml0aWFsTW9udGgiLCJzZWxlY3Rpb24iLCJzaG93bk5vdGljZVR5cGUiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkIiwibW9kZSIsInRvZGF5Iiwic2VsZWN0aW9uU3RhcnQiLCJzdGFydCIsIkRhdGUiLCJvbk1vbnRoQ2hhbmdlIiwiaGlnaGxpZ2h0ZWQiLCJlbmQiLCJfc2VsZWN0aW9uU3RhcnQiLCJfc2VsZWN0aW9uRW5kIiwiX3NlbGVjdGlvbkRhdGUiLCJkYXRlVHlwZSIsIm9uU2VsZWN0aW9uUHJvZ3Jlc3MiLCJpblByb2dyZXNzIiwib25TZWxlY3QiLCJibG9ja0NsYXNzTmFtZSIsImRpc2FibGVEYXlzT2ZXZWVrIiwiaGVhZGVyTmV4dEFycm93IiwiaGVhZGVyTmV4dFRpdGxlIiwiaGVhZGVyUHJldkFycm93IiwiaGVhZGVyUHJldlRpdGxlIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJtaW5OdW1iZXJPZldlZWtzIiwib25EYXlIb3ZlciIsImRpc2FibGVkSW50ZXJ2YWxzIiwicmFuZ2VMaW1pdCIsIndlZWtTdGFydHNPbiIsIl9zZWxlY3Rpb24iLCJoaWdobGlnaHQiLCJfaGlnaGxpZ2h0IiwiTW9udGhIZWFkZXJDb21wb25lbnQiLCJfcmVuZGVyTm90aWNlIiwiX2FjdGl2ZU1vbnRoIiwiX3N3aXRjaE1vbnRoIiwiYmluZCIsIl90b2RheSIsIl9zZWxlY3Rpb25DaGFuZ2VkIiwiX25vdGljZUNoYW5nZWQiLCJOb3RpY2VDb21wb25lbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJlbGVtZW50IiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJNb250aCIsIm9uQ2hhbmdlIiwiX3NlbGVjdGlvbkluUHJvZ3Jlc3MiLCJub3RpY2VUeXBlIiwib25Ob3RpY2VDaGFuZ2UiLCJpbnRlcnZhbCIsImkiLCJsZW5ndGgiLCJpbnRlcnZhbFN0YXJ0IiwiaW50ZXJ2YWxFbmQiLCJkYXRlTGltaXQiLCJpc0Rpc2FibGVkV2l0aGluIiwiX2dldERpc2FibGVkUmFuZ2UiLCJfcHVzaFVwZGF0ZSIsIl9wdXNoTm90aWNlVXBkYXRlIiwiY2FsY1N0YXJ0RGF0ZSIsImlzQ2FsY1N0YXJ0RGF5QWZ0ZXIiLCJjYWxjRW5kRGF0ZSIsImlzQ2FsY0VuZERheUJlZm9yZSIsIl9yZW5kZXJXZWVrRGF5cyIsIl9yZW5kZXJXZWVrcyIsInNlbGVjdGVkTWluIiwic2VsZWN0ZWRNYXgiLCJoaWdobGlnaHRlZFN0YXJ0IiwiaGlnaGxpZ2h0ZWRFbmQiLCJ3ZWVrcyIsIl9nZXRNaW5EYXRlIiwiX2dldE1heERhdGUiLCJwdXNoIiwibWFwIiwid2VlayIsImdldFRpbWUiLCJfb25EYXlDbGljayIsIl9vbkRpc2FibGVkRGF5Q2xpY2siLCJfb25EYXlNb3VzZU1vdmUiLCJXZWVrIiwiX2RhdGVEaXNhYmxlZCIsImRhdGVEaXNhYmxlZCIsIl9kYXRlU2VsZWN0ZWQiLCJfZGF0ZUhpZ2hsaWdodGVkIiwiZ2V0TW9udGgiLCJfZGF0ZVNlbGVjdGFibGUiLCJfcmVuZGVyRGF5cyIsIm9uRGF5Q2xpY2siLCJvbkRpc2FibGVkRGF5Q2xpY2siLCJvbkRheU1vdXNlTW92ZSIsImRheSIsImRhdGEiLCJzZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2RhdGVDbGFzc2VzIiwiRGF5IiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNlTW92ZSIsImNsYXNzTmFtZSIsIl9vbkNsaWNrIiwiX29uTW91c2VNb3ZlIiwiQkxPQ0tfQ0xBU1NfTkFNRSIsIk5FWFRfTU9OVEhfVElUTEUiLCJQUkVWX01PTlRIX1RJVExFIiwiREFZU19JTl9XRUVLIiwiZGF0ZVByb3BUeXBlIiwiaW5zdGFuY2VPZiIsImRheXNPZldlZWsiLCJEYXlzT2ZXZWVrIiwic2xpY2UiLCJjb25jYXQiLCJzbGljZWREYXlzT2ZXZWVrIiwiX2dldERheXNPZldlZWsiLCJpbmRleCIsIk1vbnRoSGVhZGVyIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJwcmV2RW5hYmxlZCIsIm5leHRFbmFibGVkIiwiSGVhZGVyQnV0dG9uIiwiZW5hYmxlZCIsImFycm93IiwidHlwZSIsInRpdGxlIiwiTm90aWNlIiwiX3JlbmRlck1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBOztB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Q0UsY0FBSywyQkFBTDtBQUNBLGNBQUssb0JBQUw7QUFDRSxrQkFBTyxzREFBUDtBQUhKO0FBS0Q7Ozs7R0E1QmlDLGdCQUFNOUYsUzs7QUFBckJnRyxPLENBQ1ovRixTLEdBQVk7QUFDakIxQixtQkFBZ0IsZ0JBQU0yQixTQUFOLENBQWdCSSxNQUFoQixDQUF1QkksVUFEdEI7QUFFakJvRixTQUFNLGlCQUFVakYsS0FBVixDQUFnQixDQUNwQiwyQkFEb0IsRUFFcEIsb0JBRm9CLENBQWhCLEVBR0hIO0FBTGMsRTtBQURBc0YsTyxDQVNabEYsWSxHQUFlO0FBQ3BCdkM7QUFEb0IsRTttQkFUSHlILE0iLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTRkYmQ5ZGM2NGM0ZjFmNDY2YyIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhcidcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnXG5pbXBvcnQgTW9udGhIZWFkZXIgZnJvbSAnLi9tb250aF9oZWFkZXInXG5pbXBvcnQgTm90aWNlIGZyb20gJy4vbm90aWNlJ1xuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcbmltcG9ydCB7REFZU19JTl9XRUVLfSBmcm9tICcuL2NvbnN0cydcbmltcG9ydCB7ZGF0ZVByb3BUeXBlfSBmcm9tICcuL19saWInXG5cbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnXG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9tb250aCdcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICdkYXRlLWZucy9pc192YWxpZCdcblxuY29uc3QgU0lOR0xFX01PREUgPSAnc2luZ2xlJ1xuY29uc3QgUkFOR0VfTU9ERSA9ICdyYW5nZSdcblxuY29uc3QgaXNWYWxpZCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXNWYWxpZERhdGUoZGF0ZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBNb250aEhlYWRlckNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICBdKSxcbiAgICBOb3RpY2VDb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgYWN0aXZlTW9udGg6IGRhdGVQcm9wVHlwZSxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlRGF5c09mV2VlazogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWRJbnRlcnZhbHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdGFydDogZGF0ZVByb3BUeXBlLmlzUmVxdWlyZWQsXG4gICAgICBlbmQ6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkXG4gICAgfSkpLFxuICAgIGhlYWRlck5leHRBcnJvdzogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgaGVhZGVyTmV4dFRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlYWRlclByZXZBcnJvdzogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgaGVhZGVyUHJldlRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhpZ2hsaWdodGVkOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3RhcnQ6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgICAgZW5kOiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgICBtYXhEYXRlOiBkYXRlUHJvcFR5cGUsXG4gICAgbWluRGF0ZTogZGF0ZVByb3BUeXBlLFxuICAgIG1pbk51bWJlck9mV2Vla3M6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbW9kZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtTSU5HTEVfTU9ERSwgUkFOR0VfTU9ERV0pLFxuICAgIG9uRGF5SG92ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdGlvblByb2dyZXNzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICByYW5nZUxpbWl0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIGRhdGVQcm9wVHlwZSxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0YXJ0OiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICAgICAgZW5kOiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5Qcm9ncmVzczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgXSksXG4gICAgdG9kYXk6IGRhdGVQcm9wVHlwZSxcbiAgICB3ZWVrU3RhcnRzT246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihEQVlTX0lOX1dFRUspXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdlZWtTdGFydHNPbjogMSxcbiAgICBtb2RlOiBTSU5HTEVfTU9ERSxcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlTW9udGg6IHRoaXMuX2luaXRpYWxNb250aChwcm9wcyksXG4gICAgICBzZWxlY3Rpb246IG51bGwsXG4gICAgICBzaG93bk5vdGljZVR5cGU6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlTW9udGggJiYgIWlzU2FtZU1vbnRoKG5leHRQcm9wcy5hY3RpdmVNb250aCwgdGhpcy5wcm9wcy5hY3RpdmVNb250aCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU1vbnRoOiBzdGFydE9mTW9udGgobmV4dFByb3BzLmFjdGl2ZU1vbnRoKX0pXG4gICAgfVxuICB9XG5cbiAgX2luaXRpYWxNb250aChwcm9wcykge1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgYWN0aXZlTW9udGgsIG1vZGUsIHRvZGF5fSA9IHByb3BzIHx8IHRoaXMucHJvcHNcblxuICAgIGlmIChpc1ZhbGlkKGFjdGl2ZU1vbnRoKSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZU1vbnRoXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IChtb2RlID09PSBTSU5HTEVfTU9ERSA/IHNlbGVjdGVkIDogc2VsZWN0ZWQuc3RhcnQpXG4gICAgICAgIGlmIChpc1ZhbGlkKHNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgIHJldHVybiBzdGFydE9mTW9udGgoc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0T2ZNb250aCh0b2RheSB8fCBuZXcgRGF0ZSgpKVxuICB9XG5cbiAgX3N3aXRjaE1vbnRoKGRhdGUpIHtcbiAgICBjb25zdCB7b25Nb250aENoYW5nZX0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBvbk1vbnRoQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbk1vbnRoQ2hhbmdlKGRhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVNb250aDogZGF0ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfYWN0aXZlTW9udGgoKSB7XG4gICAgY29uc3Qge29uTW9udGhDaGFuZ2UsIGFjdGl2ZU1vbnRofSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25Nb250aENoYW5nZSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZU1vbnRoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZU1vbnRoXG4gICAgfVxuICB9XG5cbiAgX2hpZ2hsaWdodCgpIHtcbiAgICBjb25zdCB7aGlnaGxpZ2h0ZWR9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghaGlnaGxpZ2h0ZWQpIHJldHVybiB7c3RhcnQ6IG51bGwsIGVuZDogbnVsbH1cblxuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGhpZ2hsaWdodGVkXG5cbiAgICBpZiAoaXNWYWxpZChzdGFydCkgJiYgaXNWYWxpZChlbmQpKSB7XG4gICAgICByZXR1cm4ge3N0YXJ0LCBlbmR9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7c3RhcnQ6IG51bGwsIGVuZDogbnVsbH1cbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fc2VsZWN0aW9uU3RhcnQoKVxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX3NlbGVjdGlvbkVuZCgpXG5cbiAgICBpZiAoaXNWYWxpZChzdGFydCkgJiYgaXNWYWxpZChlbmQpKSB7XG4gICAgICByZXR1cm4ge3N0YXJ0LCBlbmR9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7c3RhcnQ6IG51bGwsIGVuZDogbnVsbH1cbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbkRhdGUoJ3N0YXJ0JylcbiAgfVxuXG4gIF9zZWxlY3Rpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbkRhdGUoJ2VuZCcpXG4gIH1cblxuICBfc2VsZWN0aW9uRGF0ZShkYXRlVHlwZSkge1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgb25TZWxlY3Rpb25Qcm9ncmVzc30gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3NlbGVjdGlvbn0gPSB0aGlzLnN0YXRlXG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgY2FzZSBTSU5HTEVfTU9ERTpcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkXG5cbiAgICAgIGNhc2UgUkFOR0VfTU9ERTpcbiAgICAgICAgaWYgKCFvblNlbGVjdGlvblByb2dyZXNzICYmIHNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVybiBzZWxlY3Rpb25bZGF0ZVR5cGVdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkICYmIHNlbGVjdGVkW2RhdGVUeXBlXVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZWQoc2VsZWN0aW9uKSB7XG4gICAgY29uc3Qge3N0YXJ0LCBlbmQsIGluUHJvZ3Jlc3N9ID0gc2VsZWN0aW9uXG4gICAgY29uc3Qge21vZGUsIG9uU2VsZWN0LCBvblNlbGVjdGlvblByb2dyZXNzfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChvblNlbGVjdCAmJiBzdGFydCAmJiAobW9kZSAhPT0gUkFOR0VfTU9ERSB8fCAhaW5Qcm9ncmVzcykpIHtcbiAgICAgIG9uU2VsZWN0KG1vZGUgPT09IFNJTkdMRV9NT0RFID8gc3RhcnQgOiB7c3RhcnQsIGVuZH0pXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IFJBTkdFX01PREUpIHtcbiAgICAgIGlmIChvblNlbGVjdGlvblByb2dyZXNzKSB7XG4gICAgICAgIG9uU2VsZWN0aW9uUHJvZ3Jlc3Moc2VsZWN0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW9uOiBpblByb2dyZXNzID8ge3N0YXJ0LCBlbmR9IDogbnVsbH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX25vdGljZUNoYW5nZWQoc2hvd25Ob3RpY2VUeXBlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd25Ob3RpY2VUeXBlfSlcbiAgfVxuXG4gIF90b2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50b2RheSB8fCBuZXcgRGF0ZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmxvY2tDbGFzc05hbWUsXG4gICAgICBkaXNhYmxlRGF5c09mV2VlayxcbiAgICAgIGhlYWRlck5leHRBcnJvdyxcbiAgICAgIGhlYWRlck5leHRUaXRsZSxcbiAgICAgIGhlYWRlclByZXZBcnJvdyxcbiAgICAgIGhlYWRlclByZXZUaXRsZSxcbiAgICAgIGhpZ2hsaWdodGVkLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtaW5OdW1iZXJPZldlZWtzLFxuICAgICAgbW9kZSxcbiAgICAgIG9uRGF5SG92ZXIsXG4gICAgICBkaXNhYmxlZEludGVydmFscyxcbiAgICAgIHJhbmdlTGltaXQsXG4gICAgICB3ZWVrU3RhcnRzT25cbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuX3NlbGVjdGlvbigpXG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5faGlnaGxpZ2h0KClcbiAgICBjb25zdCBNb250aEhlYWRlckNvbXBvbmVudCA9IHRoaXMucHJvcHMuTW9udGhIZWFkZXJDb21wb25lbnQgfHwgTW9udGhIZWFkZXJcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyTm90aWNlKCl9XG5cbiAgICAgICAgPE1vbnRoSGVhZGVyQ29tcG9uZW50XG4gICAgICAgICAgcmVmPSdoZWFkZXInXG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGhlYWRlclByZXZBcnJvdz17aGVhZGVyUHJldkFycm93fVxuICAgICAgICAgIGhlYWRlclByZXZUaXRsZT17aGVhZGVyUHJldlRpdGxlfVxuICAgICAgICAgIGhlYWRlck5leHRBcnJvdz17aGVhZGVyTmV4dEFycm93fVxuICAgICAgICAgIGhlYWRlck5leHRUaXRsZT17aGVhZGVyTmV4dFRpdGxlfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9hY3RpdmVNb250aCgpfVxuICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e3RoaXMuX3N3aXRjaE1vbnRoLmJpbmQodGhpcyl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8TW9udGhcbiAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBtaW5OdW1iZXJPZldlZWtzPXttaW5OdW1iZXJPZldlZWtzfVxuICAgICAgICAgIHJhbmdlTGltaXQ9e3JhbmdlTGltaXR9XG4gICAgICAgICAgdG9kYXk9e3RoaXMuX3RvZGF5KCl9XG4gICAgICAgICAgcmVmPSdtb250aCdcbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5fYWN0aXZlTW9udGgoKX1cbiAgICAgICAgICBzZWxlY3RlZE1pbj17c2VsZWN0aW9uLnN0YXJ0fVxuICAgICAgICAgIHNlbGVjdGVkTWF4PXtzZWxlY3Rpb24uZW5kfVxuICAgICAgICAgIGRpc2FibGVEYXlzT2ZXZWVrPXtkaXNhYmxlRGF5c09mV2Vla31cbiAgICAgICAgICBvbkRheUhvdmVyPXtvbkRheUhvdmVyfVxuICAgICAgICAgIGhpZ2hsaWdodGVkU3RhcnQ9e2hpZ2hsaWdodC5zdGFydH1cbiAgICAgICAgICBoaWdobGlnaHRlZEVuZD17aGlnaGxpZ2h0LmVuZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uTm90aWNlQ2hhbmdlPXt0aGlzLl9ub3RpY2VDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAgIGRpc2FibGVkSW50ZXJ2YWxzPXtkaXNhYmxlZEludGVydmFsc31cbiAgICAgICAgICB3ZWVrU3RhcnRzT249e3dlZWtTdGFydHNPbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9yZW5kZXJOb3RpY2UoKSB7XG4gICAgY29uc3Qge3Nob3duTm90aWNlVHlwZX0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge2Jsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBOb3RpY2VDb21wb25lbnQgPSB0aGlzLnByb3BzLk5vdGljZUNvbXBvbmVudCB8fCBOb3RpY2VcbiAgICByZXR1cm4gc2hvd25Ob3RpY2VUeXBlICYmIDxOb3RpY2VDb21wb25lbnRcbiAgICAgIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX1cbiAgICAgIHR5cGU9e3Nob3duTm90aWNlVHlwZX1cbiAgICAvPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvY2FsZW5kYXIuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJ1xuaW1wb3J0IERheXNPZldlZWsgZnJvbSAnLi9kYXlzX29mX3dlZWsnXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuaW1wb3J0IHtEQVlTX0lOX1dFRUt9IGZyb20gJy4vY29uc3RzJ1xuaW1wb3J0IHtkYXRlUHJvcFR5cGV9IGZyb20gJy4vX2xpYidcblxuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl93ZWVrJ1xuaW1wb3J0IGlzV2l0aGluUmFuZ2UgZnJvbSAnZGF0ZS1mbnMvaXNfd2l0aGluX3JhbmdlJ1xuaW1wb3J0IGVhY2hEYXkgZnJvbSAnZGF0ZS1mbnMvZWFjaF9kYXknXG5pbXBvcnQgYXJlUmFuZ2VzT3ZlcmxhcHBpbmcgZnJvbSAnZGF0ZS1mbnMvYXJlX3Jhbmdlc19vdmVybGFwcGluZydcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnXG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNfYmVmb3JlJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZGF0ZS1mbnMvaXNfZXF1YWwnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cydcbmltcG9ydCBzdWJEYXlzIGZyb20gJ2RhdGUtZm5zL3N1Yl9kYXlzJ1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSdcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzJ1xuXG5jb25zdCBTSU5HTEVfTU9ERSA9ICdzaW5nbGUnXG5jb25zdCBSQU5HRV9NT0RFID0gJ3JhbmdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlTW9udGg6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVEYXlzT2ZXZWVrOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZEludGVydmFsczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN0YXJ0OiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICAgIGVuZDogZGF0ZVByb3BUeXBlLmlzUmVxdWlyZWQsXG4gICAgfSkpLFxuICAgIGhpZ2hsaWdodGVkRW5kOiBkYXRlUHJvcFR5cGUsXG4gICAgaGlnaGxpZ2h0ZWRTdGFydDogZGF0ZVByb3BUeXBlLFxuICAgIG1heERhdGU6IGRhdGVQcm9wVHlwZSxcbiAgICBtaW5EYXRlOiBkYXRlUHJvcFR5cGUsXG4gICAgbWluTnVtYmVyT2ZXZWVrczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25EYXlIb3ZlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ob3RpY2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmFuZ2VMaW1pdDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzZWxlY3RlZE1heDogZGF0ZVByb3BUeXBlLFxuICAgIHNlbGVjdGVkTWluOiBkYXRlUHJvcFR5cGUsXG4gICAgdG9kYXk6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgIHdlZWtTdGFydHNPbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKERBWVNfSU5fV0VFSylcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIF9wdXNoVXBkYXRlKCkge1xuICAgIGNvbnN0IHtvbkNoYW5nZSwgcmFuZ2VMaW1pdH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHN0YXJ0LCBlbmRcblxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25TdGFydCAmJiB0aGlzLl9zZWxlY3Rpb25FbmQpIHtcbiAgICAgIGlmIChpc0JlZm9yZSh0aGlzLl9zZWxlY3Rpb25TdGFydCwgdGhpcy5fc2VsZWN0aW9uRW5kKSkge1xuICAgICAgICBzdGFydCA9IHRoaXMuX3NlbGVjdGlvblN0YXJ0XG4gICAgICAgIGVuZCA9IHRoaXMuX3NlbGVjdGlvbkVuZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl9zZWxlY3Rpb25FbmRcbiAgICAgICAgZW5kID0gdGhpcy5fc2VsZWN0aW9uU3RhcnRcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlTGltaXQgJiYgcmFuZ2VMaW1pdCA8IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhlbmQsIHN0YXJ0KSkge1xuICAgICAgICBlbmQgPSBhZGREYXlzKHN0YXJ0LCByYW5nZUxpbWl0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvbkNoYW5nZSh7XG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIGluUHJvZ3Jlc3M6IHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3NcbiAgICB9KVxuICB9XG5cbiAgX3B1c2hOb3RpY2VVcGRhdGUobm90aWNlVHlwZSkge1xuICAgIGNvbnN0IHtvbk5vdGljZUNoYW5nZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIG9uTm90aWNlQ2hhbmdlKG5vdGljZVR5cGUpXG4gIH1cblxuICBfZ2V0RGlzYWJsZWRSYW5nZShpbnRlcnZhbCkge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGludGVydmFsXG4gICAgY29uc3Qge2Rpc2FibGVkSW50ZXJ2YWxzfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghZGlzYWJsZWRJbnRlcnZhbHMpIHJldHVybiB0cnVlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkSW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7c3RhcnQ6IGludGVydmFsU3RhcnQsIGVuZDogaW50ZXJ2YWxFbmR9ID0gZGlzYWJsZWRJbnRlcnZhbHNbaV1cblxuICAgICAgaWYgKGFyZVJhbmdlc092ZXJsYXBwaW5nKHN0YXJ0LCBlbmQsIGludGVydmFsU3RhcnQsIGludGVydmFsRW5kKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBjb25zdCB7b25EYXlIb3Zlcn0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uRGF5SG92ZXIpIHtcbiAgICAgIG9uRGF5SG92ZXIoZGF0ZSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MpIHJldHVyblxuXG4gICAgY29uc3Qge3JhbmdlTGltaXQsIGRpc2FibGVkSW50ZXJ2YWxzfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkYXRlTGltaXQgPSBzdWJEYXlzKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCByYW5nZUxpbWl0KVxuXG4gICAgY29uc3QgaXNEaXNhYmxlZFdpdGhpbiA9IHRoaXMuX2dldERpc2FibGVkUmFuZ2Uoe1xuICAgICAgc3RhcnQ6IGlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCBkYXRlKSA/IHRoaXMuX3NlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgIGVuZDogIWlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCBkYXRlKSA/IHRoaXMuX3NlbGVjdGlvblN0YXJ0IDogZGF0ZVxuICAgIH0pXG5cbiAgICBpZiAoIWlzRGlzYWJsZWRXaXRoaW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNFcXVhbChkYXRlLCB0aGlzLl9zZWxlY3Rpb25FbmQpKSB7XG4gICAgICBpZiAoIXJhbmdlTGltaXQgfHwgcmFuZ2VMaW1pdCAmJiAhaXNCZWZvcmUoZGF0ZSwgZGF0ZUxpbWl0KSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25FbmQgPSBkYXRlXG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbkRheUNsaWNrKGRhdGUpIHtcbiAgICBjb25zdCB7bW9kZX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobW9kZSA9PT0gUkFOR0VfTU9ERSkge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZFdpdGhpbiA9IHRoaXMuX2dldERpc2FibGVkUmFuZ2Uoe1xuICAgICAgICAgIHN0YXJ0OiBpc0JlZm9yZSh0aGlzLl9zZWxlY3Rpb25TdGFydCwgZGF0ZSkgPyB0aGlzLl9zZWxlY3Rpb25TdGFydCA6IGRhdGUsXG4gICAgICAgICAgZW5kOiAhaXNCZWZvcmUodGhpcy5fc2VsZWN0aW9uU3RhcnQsIGRhdGUpID8gdGhpcy5fc2VsZWN0aW9uU3RhcnQgOiBkYXRlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFpc0Rpc2FibGVkV2l0aGluKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uU3RhcnQgPSBudWxsXG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uRW5kID0gbnVsbFxuICAgICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgICAgIHRoaXMuX3B1c2hOb3RpY2VVcGRhdGUoJ292ZXJsYXBwaW5nX3dpdGhfZGlzYWJsZWQnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkVuZCA9IGRhdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvblN0YXJ0ID0gZGF0ZVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25FbmQgPSBkYXRlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBTSU5HTEVfTU9ERSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TdGFydCA9IGRhdGVcbiAgICAgIHRoaXMuX3NlbGVjdGlvbkVuZCA9IGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgdGhpcy5fcHVzaE5vdGljZVVwZGF0ZShudWxsKVxuICB9XG5cbiAgX29uRGlzYWJsZWREYXlDbGljaygpIHtcbiAgICBjb25zdCB7b25Ob3RpY2VDaGFuZ2V9ID0gdGhpcy5wcm9wc1xuICAgIG9uTm90aWNlQ2hhbmdlKCdkaXNhYmxlZF9kYXlfY2xpY2snKVxuICB9XG5cbiAgX2dldE1pbkRhdGUoKSB7XG4gICAgY29uc3Qge3JhbmdlTGltaXQsIG1pbkRhdGV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNhbGNTdGFydERhdGUgPSBzdWJEYXlzKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCByYW5nZUxpbWl0KVxuXG4gICAgaWYgKG1pbkRhdGUpIHtcbiAgICAgIGNvbnN0IGlzQ2FsY1N0YXJ0RGF5QWZ0ZXIgPSBpc0JlZm9yZShtaW5EYXRlLCBjYWxjU3RhcnREYXRlKVxuICAgICAgcmV0dXJuIGlzQ2FsY1N0YXJ0RGF5QWZ0ZXIgPyBjYWxjU3RhcnREYXRlIDogbWluRGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FsY1N0YXJ0RGF0ZVxuICAgIH1cbiAgfVxuXG4gIF9nZXRNYXhEYXRlKCkge1xuICAgIGNvbnN0IHtyYW5nZUxpbWl0LCBtYXhEYXRlfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjYWxjRW5kRGF0ZSA9IGFkZERheXModGhpcy5fc2VsZWN0aW9uU3RhcnQsIHJhbmdlTGltaXQpXG5cbiAgICBpZiAobWF4RGF0ZSkge1xuICAgICAgY29uc3QgaXNDYWxjRW5kRGF5QmVmb3JlID0gaXNCZWZvcmUoY2FsY0VuZERhdGUsIG1heERhdGUpXG4gICAgICByZXR1cm4gaXNDYWxjRW5kRGF5QmVmb3JlID8gY2FsY0VuZERhdGUgOiBtYXhEYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxjRW5kRGF0ZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LW1vbnRoYH0+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJXZWVrRGF5cygpfVxuICAgICAgICB7dGhpcy5fcmVuZGVyV2Vla3MoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9yZW5kZXJXZWVrRGF5cygpIHtcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWUsIGRpc2FibGVEYXlzT2ZXZWVrLCB3ZWVrU3RhcnRzT259ID0gdGhpcy5wcm9wc1xuICAgIGlmIChkaXNhYmxlRGF5c09mV2VlaykgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiA8RGF5c09mV2VlayBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9IHdlZWtTdGFydHNPbj17d2Vla1N0YXJ0c09ufSAvPlxuICB9XG5cbiAgX3JlbmRlcldlZWtzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkTWluLFxuICAgICAgc2VsZWN0ZWRNYXgsXG4gICAgICBoaWdobGlnaHRlZFN0YXJ0LFxuICAgICAgaGlnaGxpZ2h0ZWRFbmQsXG4gICAgICBkaXNhYmxlZEludGVydmFscyxcbiAgICAgIGFjdGl2ZU1vbnRoLFxuICAgICAgdG9kYXksXG4gICAgICBibG9ja0NsYXNzTmFtZSxcbiAgICAgIG1pbk51bWJlck9mV2Vla3MsXG4gICAgICByYW5nZUxpbWl0LFxuICAgICAgb25EYXlIb3ZlcixcbiAgICAgIHdlZWtTdGFydHNPblxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2Vla3MgPSBbXVxuICAgIGxldCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGRhdGUgPSBzdGFydE9mV2VlayhzdGFydE9mTW9udGgoYWN0aXZlTW9udGgpLCB7d2Vla1N0YXJ0c09ufSlcbiAgICBjb25zdCBlbmQgPSBlbmRPZldlZWsoZW5kT2ZNb250aChhY3RpdmVNb250aCksIHt3ZWVrU3RhcnRzT259KVxuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3MgJiYgcmFuZ2VMaW1pdCkge1xuICAgICAgbWluRGF0ZSA9IHRoaXMuX2dldE1pbkRhdGUoKVxuICAgICAgbWF4RGF0ZSA9IHRoaXMuX2dldE1heERhdGUoKVxuICAgIH1cblxuICAgIHdoaWxlICgodHlwZW9mIG1pbk51bWJlck9mV2Vla3MgPT0gJ251bWJlcicgJiYgbWluTnVtYmVyT2ZXZWVrcyA+IHdlZWtzLmxlbmd0aClcbiAgICAgIHx8IChpc0JlZm9yZShkYXRlLCBlbmQpIHx8IGlzU2FtZURheShkYXRlLCBlbmQpKSkge1xuICAgICAgd2Vla3MucHVzaChkYXRlKVxuICAgICAgZGF0ZSA9IGFkZERheXMoZGF0ZSwgNylcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vla1xuICAgICAgICAgIGtleT17d2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgZGF0ZT17d2Vla31cbiAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgc2VsZWN0ZWRNaW49e3NlbGVjdGVkTWlufVxuICAgICAgICAgIHNlbGVjdGVkTWF4PXtzZWxlY3RlZE1heH1cbiAgICAgICAgICBoaWdobGlnaHRlZFN0YXJ0PXtoaWdobGlnaHRlZFN0YXJ0fVxuICAgICAgICAgIGhpZ2hsaWdodGVkRW5kPXtoaWdobGlnaHRlZEVuZH1cbiAgICAgICAgICBkaXNhYmxlZEludGVydmFscz17ZGlzYWJsZWRJbnRlcnZhbHN9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e2FjdGl2ZU1vbnRofVxuICAgICAgICAgIG9uRGF5SG92ZXI9e29uRGF5SG92ZXJ9XG4gICAgICAgICAgb25EYXlDbGljaz17dGhpcy5fb25EYXlDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uRGlzYWJsZWREYXlDbGljaz17dGhpcy5fb25EaXNhYmxlZERheUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmU9e3RoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgdG9kYXk9e3RvZGF5fVxuICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX1cbiAgICAgICAgICB3ZWVrU3RhcnRzT249e3dlZWtTdGFydHNPbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvbW9udGguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IERheSBmcm9tICcuL2RheSdcbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5pbXBvcnQge0RBWVNfSU5fV0VFS30gZnJvbSAnLi9jb25zdHMnXG5pbXBvcnQge2RhdGVQcm9wVHlwZX0gZnJvbSAnLi9fbGliJ1xuXG5pbXBvcnQgZWFjaERheSBmcm9tICdkYXRlLWZucy9lYWNoX2RheSdcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX2RheSdcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydF9vZl93ZWVrJ1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRfb2Zfd2VlaydcbmltcG9ydCBpc1dpdGhpblJhbmdlIGZyb20gJ2RhdGUtZm5zL2lzX3dpdGhpbl9yYW5nZSdcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzX2JlZm9yZSdcbmltcG9ydCBpc0FmdGVyIGZyb20gJ2RhdGUtZm5zL2lzX2FmdGVyJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZGF0ZS1mbnMvaXNfZXF1YWwnXG5pbXBvcnQgaXNXZWVrZW5kIGZyb20gJ2RhdGUtZm5zL2lzX3dlZWtlbmQnXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfZGF5J1xuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfbW9udGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZU1vbnRoOiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGU6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkSW50ZXJ2YWxzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3RhcnQ6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgICAgZW5kOiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgaGlnaGxpZ2h0ZWRFbmQ6IGRhdGVQcm9wVHlwZSxcbiAgICBoaWdobGlnaHRlZFN0YXJ0OiBkYXRlUHJvcFR5cGUsXG4gICAgbWF4RGF0ZTogZGF0ZVByb3BUeXBlLFxuICAgIG1pbkRhdGU6IGRhdGVQcm9wVHlwZSxcbiAgICBvbkRheUNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRGF5TW91c2VNb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRGlzYWJsZWREYXlDbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZE1heDogZGF0ZVByb3BUeXBlLFxuICAgIHNlbGVjdGVkTWluOiBkYXRlUHJvcFR5cGUsXG4gICAgdG9kYXk6IGRhdGVQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICAgIHdlZWtTdGFydHNPbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKERBWVNfSU5fV0VFSylcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge30sXG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIF9kYXRlU2VsZWN0YWJsZShkYXRlKSB7XG4gICAgY29uc3Qge21pbkRhdGUsIG1heERhdGV9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHRoaXMuX2RhdGVEaXNhYmxlZChkYXRlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKG1pbkRhdGUgJiYgbWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIGlzV2l0aGluUmFuZ2UoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSlcbiAgICB9IGVsc2UgaWYgKG1pbkRhdGUgJiYgIW1heERhdGUpIHtcbiAgICAgIHJldHVybiBpc0FmdGVyKGRhdGUsIG1pbkRhdGUpIHx8IGlzRXF1YWwoZGF0ZSwgbWluRGF0ZSlcbiAgICB9IGVsc2UgaWYgKG1heERhdGUgJiYgIW1pbkRhdGUpIHtcbiAgICAgIHJldHVybiBpc0JlZm9yZShkYXRlLCBtYXhEYXRlKSB8fCBpc0VxdWFsKGRhdGUsIG1heERhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgX2RhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgY29uc3Qge3NlbGVjdGVkTWluLCBzZWxlY3RlZE1heH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChzZWxlY3RlZE1pbiAmJiBzZWxlY3RlZE1heClcbiAgICAgICYmIGlzV2l0aGluUmFuZ2UoXG4gICAgICAgIHN0YXJ0T2ZEYXkoZGF0ZSksXG4gICAgICAgIHN0YXJ0T2ZEYXkoc2VsZWN0ZWRNaW4pLFxuICAgICAgICBzdGFydE9mRGF5KHNlbGVjdGVkTWF4KVxuICAgICAgKVxuICB9XG5cbiAgX2RhdGVIaWdobGlnaHRlZChkYXRlKSB7XG4gICAgY29uc3Qge2hpZ2hsaWdodGVkU3RhcnQsIGhpZ2hsaWdodGVkRW5kfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWhpZ2hsaWdodGVkU3RhcnQgfHwgIWhpZ2hsaWdodGVkRW5kKSByZXR1cm4gZmFsc2VcblxuICAgIHJldHVybiBpc1dpdGhpblJhbmdlKFxuICAgICAgc3RhcnRPZkRheShkYXRlKSxcbiAgICAgIHN0YXJ0T2ZEYXkoaGlnaGxpZ2h0ZWRTdGFydCksXG4gICAgICBzdGFydE9mRGF5KGhpZ2hsaWdodGVkRW5kKVxuICAgIClcbiAgfVxuXG4gIF9kYXRlRGlzYWJsZWQoZGF0ZSkge1xuICAgIGxldCBkYXRlRGlzYWJsZWRcbiAgICBjb25zdCB7ZGlzYWJsZWRJbnRlcnZhbHN9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZGlzYWJsZWRJbnRlcnZhbHMpIHJldHVybiBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNhYmxlZEludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gZGlzYWJsZWRJbnRlcnZhbHNbaV1cblxuICAgICAgZGF0ZURpc2FibGVkID0gaXNXaXRoaW5SYW5nZShzdGFydE9mRGF5KGRhdGUpLCBzdGFydE9mRGF5KHN0YXJ0KSwgc3RhcnRPZkRheShlbmQpKVxuXG4gICAgICBpZiAoZGF0ZURpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBkYXRlRGlzYWJsZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9kYXRlQ2xhc3NlcyhkYXRlKSB7XG4gICAgY29uc3Qge3RvZGF5LCBhY3RpdmVNb250aCwgc2VsZWN0ZWRNYXgsIHNlbGVjdGVkTWlufSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiBjbGFzc25hbWVzKHtcbiAgICAgICdpcy1zZWxlY3RlZCc6IHRoaXMuX2RhdGVTZWxlY3RlZChkYXRlKSxcbiAgICAgICdpcy1oaWdobGlnaHRlZCc6IHRoaXMuX2RhdGVIaWdobGlnaHRlZChkYXRlKSxcbiAgICAgICdpcy1kaXNhYmxlZCc6IHRoaXMuX2RhdGVEaXNhYmxlZChkYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzU2FtZURheSh0b2RheSwgZGF0ZSksXG4gICAgICAnaXMtY3VycmVudF9tb250aCc6IGlzU2FtZU1vbnRoKGRhdGUsIGFjdGl2ZU1vbnRoKSxcbiAgICAgICdpcy1zdGFydF9zZWxlY3Rpb24nOiBzZWxlY3RlZE1pbiAmJiBpc1NhbWVEYXkoc2VsZWN0ZWRNaW4sIGRhdGUpLFxuICAgICAgJ2lzLWVuZF9zZWxlY3Rpb24nOiBzZWxlY3RlZE1heCAmJiBpc1NhbWVEYXkoc2VsZWN0ZWRNYXgsIGRhdGUpLFxuICAgICAgJ2lzLXByZXZfbW9udGgnOiAoZGF0ZS5nZXRNb250aCgpICE9PSBhY3RpdmVNb250aC5nZXRNb250aCgpICYmIGlzQmVmb3JlKGRhdGUsIGFjdGl2ZU1vbnRoKSksXG4gICAgICAnaXMtbmV4dF9tb250aCc6IChkYXRlLmdldE1vbnRoKCkgIT09IGFjdGl2ZU1vbnRoLmdldE1vbnRoKCkgJiYgaXNBZnRlcihkYXRlLCBhY3RpdmVNb250aCkpLFxuICAgICAgW2lzV2Vla2VuZChkYXRlKSA/ICdpcy13ZWVrZW5kJyA6ICdpcy13b3JraW5nX2RheSddOiB0cnVlLFxuICAgICAgW3RoaXMuX2RhdGVTZWxlY3RhYmxlKGRhdGUpID8gJ2lzLXNlbGVjdGFibGUnIDogJ2lzLW5vdF9zZWxlY3RhYmxlJ106IHRydWVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5ibG9ja0NsYXNzTmFtZX0td2Vla2B9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyRGF5cygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX3JlbmRlckRheXMoKSB7XG4gICAgY29uc3Qge2RhdGUsIHRvZGF5LCBvbkRheUNsaWNrLCBvbkRpc2FibGVkRGF5Q2xpY2ssIG9uRGF5TW91c2VNb3ZlLCBibG9ja0NsYXNzTmFtZSwgd2Vla1N0YXJ0c09ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdGFydCA9IHN0YXJ0T2ZXZWVrKGRhdGUsIHt3ZWVrU3RhcnRzT259KVxuICAgIGNvbnN0IGVuZCA9IGVuZE9mV2VlayhkYXRlLCB7d2Vla1N0YXJ0c09ufSlcbiAgICByZXR1cm4gZWFjaERheShzdGFydCwgZW5kKS5tYXAoKGRheSkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVtmb3JtYXQoZGF5LCAnWVlZWS1NTS1ERCcpXVxuICAgICAgY29uc3Qgc2VsZWN0YWJsZSA9IHRoaXMuX2RhdGVTZWxlY3RhYmxlKGRheSlcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5fZGF0ZURpc2FibGVkKGRheSlcblxuICAgICAgbGV0IG9uQ2xpY2tcbiAgICAgIGlmIChzZWxlY3RhYmxlKSB7XG4gICAgICAgIG9uQ2xpY2sgPSBvbkRheUNsaWNrXG4gICAgICB9IGVsc2UgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIG9uQ2xpY2sgPSBvbkRpc2FibGVkRGF5Q2xpY2tcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX1cbiAgICAgICAgICBrZXk9e2RheS5nZXRUaW1lKCl9XG4gICAgICAgICAgZGF0ZT17ZGF5fVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLl9kYXRlQ2xhc3NlcyhkYXksIGRhdGEpfVxuICAgICAgICAgIHRvZGF5PXt0b2RheX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXtzZWxlY3RhYmxlID8gb25EYXlNb3VzZU1vdmUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcbmltcG9ydCB7ZGF0ZVByb3BUeXBlfSBmcm9tICcuL19saWInXG5cbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogZGF0ZVByb3BUeXBlLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHRvZGF5OiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX29uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHtkYXRlLCBvbkNsaWNrfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhkYXRlKVxuICAgIH1cbiAgfVxuXG4gIF9vbk1vdXNlTW92ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qge2RhdGUsIG9uTW91c2VNb3ZlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25Nb3VzZU1vdmUpIHtcbiAgICAgIG9uTW91c2VNb3ZlKGRhdGUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRlLCBjbGFzc05hbWUsIGJsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoYCR7YmxvY2tDbGFzc05hbWV9LWRheWAsIGNsYXNzTmFtZSl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuX29uTW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICA+XG4gICAgICAgIHtmb3JtYXREYXRlKGRhdGUsICdEJyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci9kYXkuanN4IiwiZXhwb3J0IGNvbnN0IEJMT0NLX0NMQVNTX05BTUUgPSAnY2FsZW5kYXInXG5leHBvcnQgY29uc3QgTkVYVF9NT05USF9USVRMRSA9ICdOZXh0IG1vbnRoJ1xuZXhwb3J0IGNvbnN0IFBSRVZfTU9OVEhfVElUTEUgPSAnUHJldmlvdXMgbW9udGgnXG5leHBvcnQgY29uc3QgREFZU19JTl9XRUVLID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsZW5kYXIvY29uc3RzLmpzIiwiaW1wb3J0IHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgZGF0ZVByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5udW1iZXIsXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG5dKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbGVuZGFyL19saWIvaW5kZXguanMiLCJ2YXIgZ2V0RGF5T2ZZZWFyID0gcmVxdWlyZSgnLi4vZ2V0X2RheV9vZl95ZWFyL2luZGV4LmpzJylcbnZhciBnZXRJU09XZWVrID0gcmVxdWlyZSgnLi4vZ2V0X2lzb193ZWVrL2luZGV4LmpzJylcbnZhciBnZXRJU09ZZWFyID0gcmVxdWlyZSgnLi4vZ2V0X2lzb195ZWFyL2luZGV4LmpzJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi4vaXNfdmFsaWQvaW5kZXguanMnKVxudmFyIGVuTG9jYWxlID0gcmVxdWlyZSgnLi4vbG9jYWxlL2VuL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuXG4gKlxuICogQWNjZXB0ZWQgdG9rZW5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICB8IFRva2VuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBNb250aCAgICAgICAgICAgICAgICAgICB8IE0gICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgfFxuICogfCBRdWFydGVyICAgICAgICAgICAgICAgICB8IFEgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICB8IEQgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICB8IERERCAgIHwgMSwgMiwgLi4uLCAzNjYgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IERERG8gIHwgMXN0LCAybmQsIC4uLiwgMzY2dGggICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgIHwgMDAxLCAwMDIsIC4uLiwgMzY2ICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICB8IGQgICAgIHwgMCwgMSwgLi4uLCA2ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgIHwgMHRoLCAxc3QsIC4uLiwgNnRoICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgIHwgU3UsIE1vLCAuLi4sIFNhICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkZCAgIHwgU3VuLCBNb24sIC4uLiwgU2F0ICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkZGQgIHwgU3VuZGF5LCBNb25kYXksIC4uLiwgU2F0dXJkYXkgICAgfFxuICogfCBEYXkgb2YgSVNPIHdlZWsgICAgICAgICB8IEUgICAgIHwgMSwgMiwgLi4uLCA3ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBJU08gd2VlayAgICAgICAgICAgICAgICB8IFcgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFdvICAgIHwgMXN0LCAybmQsIC4uLiwgNTNyZCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFdXICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgfFxuICogfCBZZWFyICAgICAgICAgICAgICAgICAgICB8IFlZICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgIHwgMTkwMCwgMTkwMSwgLi4uLCAyMDk5ICAgICAgICAgICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciB8IEdHICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgIHwgMTkwMCwgMTkwMSwgLi4uLCAyMDk5ICAgICAgICAgICAgfFxuICogfCBBTS9QTSAgICAgICAgICAgICAgICAgICB8IEEgICAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBIb3VyICAgICAgICAgICAgICAgICAgICB8IEggICAgIHwgMCwgMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgIHwgMDAsIDAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGggICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICB8IG0gICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICB8IHMgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgfFxuICogfCAxLzEwIG9mIHNlY29uZCAgICAgICAgICB8IFMgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAxLzEwMCBvZiBzZWNvbmQgICAgICAgICB8IFNTICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZCAgICAgICAgICAgICB8IFNTUyAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgfFxuICogfCBUaW1lem9uZSAgICAgICAgICAgICAgICB8IFogICAgIHwgLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFpaICAgIHwgLTAxMDAsICswMDAwLCAuLi4sICsxMjAwICAgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICB8IFggICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICB8IHggICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgaW4gc3F1YXJlIGJyYWNrZXRzIGFyZSBlc2NhcGVkLlxuICpcbiAqIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZm9ybWF0PSdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onXSAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5sb2NhbGU9ZW5Mb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KFxuICogICBuZXcgRGF0ZSgyMDE0LCAxLCAxMSksXG4gKiAgICdNTS9ERC9ZWVlZJ1xuICogKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIHZhciBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKSxcbiAqICAgJ0RvIFtkZV0gTU1NTSBZWVlZJyxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqL1xuZnVuY3Rpb24gZm9ybWF0IChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdFN0ciA9IGRpcnR5Rm9ybWF0U3RyID8gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKSA6ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onXG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG5cbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlXG4gIHZhciBsb2NhbGVGb3JtYXR0ZXJzID0gZW5Mb2NhbGUuZm9ybWF0LmZvcm1hdHRlcnNcbiAgdmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSBlbkxvY2FsZS5mb3JtYXQuZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cFxuICBpZiAobG9jYWxlICYmIGxvY2FsZS5mb3JtYXQgJiYgbG9jYWxlLmZvcm1hdC5mb3JtYXR0ZXJzKSB7XG4gICAgbG9jYWxlRm9ybWF0dGVycyA9IGxvY2FsZS5mb3JtYXQuZm9ybWF0dGVyc1xuXG4gICAgaWYgKGxvY2FsZS5mb3JtYXQuZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkge1xuICAgICAgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IGxvY2FsZS5mb3JtYXQuZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cFxuICAgIH1cbiAgfVxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuXG4gIGlmICghaXNWYWxpZChkYXRlKSkge1xuICAgIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICB9XG5cbiAgdmFyIGZvcm1hdEZuID0gYnVpbGRGb3JtYXRGbihmb3JtYXRTdHIsIGxvY2FsZUZvcm1hdHRlcnMsIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG5cbiAgcmV0dXJuIGZvcm1hdEZuKGRhdGUpXG59XG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBNb250aDogMSwgMiwgLi4uLCAxMlxuICAnTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gICdNTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgJ1EnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMylcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDEsIDIsIC4uLiwgMzFcbiAgJ0QnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMDEsIDAyLCAuLi4sIDMxXG4gICdERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgMilcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgJ0RERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAwMDEsIDAwMiwgLi4uLCAzNjZcbiAgJ0REREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZ2V0RGF5T2ZZZWFyKGRhdGUpLCAzKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwLCAxLCAuLi4sIDZcbiAgJ2QnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDdcbiAgJ0UnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpIHx8IDdcbiAgfSxcblxuICAvLyBJU08gd2VlazogMSwgMiwgLi4uLCA1M1xuICAnVyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldElTT1dlZWsoZGF0ZSlcbiAgfSxcblxuICAvLyBJU08gd2VlazogMDEsIDAyLCAuLi4sIDUzXG4gICdXVyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhnZXRJU09XZWVrKGRhdGUpLCAyKVxuICB9LFxuXG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnWVknOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRGdWxsWWVhcigpLCA0KS5zdWJzdHIoMilcbiAgfSxcblxuICAvLyBZZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgJ1lZWVknOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRGdWxsWWVhcigpLCA0KVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ0dHJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gU3RyaW5nKGdldElTT1llYXIoZGF0ZSkpLnN1YnN0cigyKVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgJ0dHR0cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRJU09ZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gICdIJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpXG4gIH0sXG5cbiAgLy8gSG91cjogMDAsIDAxLCAuLi4sIDIzXG4gICdISCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIDIpXG4gIH0sXG5cbiAgLy8gSG91cjogMSwgMiwgLi4uLCAxMlxuICAnaCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gICAgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICByZXR1cm4gMTJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIHJldHVybiBob3VycyAlIDEyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBob3Vyc1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyOiAwMSwgMDIsIC4uLiwgMTJcbiAgJ2hoJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZvcm1hdHRlcnNbJ2gnXShkYXRlKSwgMilcbiAgfSxcblxuICAvLyBNaW51dGU6IDAsIDEsIC4uLiwgNTlcbiAgJ20nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gICdtbSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgMilcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAsIDEsIC4uLiwgNTlcbiAgJ3MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFNlY29uZHMoKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMDAsIDAxLCAuLi4sIDU5XG4gICdzcyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gICdTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKVxuICB9LFxuXG4gIC8vIDEvMTAwIG9mIHNlY29uZDogMDAsIDAxLCAuLi4sIDk5XG4gICdTUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICAnU1NTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwXG4gICdaJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpLCAnOicpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTAwLCArMDAwMCwgLi4uICsxMjAwXG4gICdaWic6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSlcbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwXG4gICdYJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gICd4JzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZEZvcm1hdEZuIChmb3JtYXRTdHIsIGxvY2FsZUZvcm1hdHRlcnMsIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApIHtcbiAgdmFyIGFycmF5ID0gZm9ybWF0U3RyLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGhcblxuICB2YXIgaVxuICB2YXIgZm9ybWF0dGVyXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZvcm1hdHRlciA9IGxvY2FsZUZvcm1hdHRlcnNbYXJyYXlbaV1dIHx8IGZvcm1hdHRlcnNbYXJyYXlbaV1dXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgYXJyYXlbaV0gPSBmb3JtYXR0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBvdXRwdXQgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCArPSBhcnJheVtpXShkYXRlLCBmb3JtYXR0ZXJzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zIChpbnB1dCkge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xdJC9nLCAnJylcbiAgfVxuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJylcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUgKG9mZnNldCwgZGVsaW1ldGVyKSB7XG4gIGRlbGltZXRlciA9IGRlbGltZXRlciB8fCAnJ1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKydcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldClcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MClcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MFxuICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhob3VycywgMikgKyBkZWxpbWV0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMilcbn1cblxuZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zIChudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2Zvcm1hdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZlllYXIgPSByZXF1aXJlKCcuLi9zdGFydF9vZl95ZWFyL2luZGV4LmpzJylcbnZhciBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgPSByZXF1aXJlKCcuLi9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmZ1bmN0aW9uIGdldERheU9mWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlLCBzdGFydE9mWWVhcihkYXRlKSlcbiAgdmFyIGRheU9mWWVhciA9IGRpZmYgKyAxXG4gIHJldHVybiBkYXlPZlllYXJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREYXlPZlllYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9nZXRfZGF5X29mX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RhdGUgPSByZXF1aXJlKCcuLi9pc19kYXRlL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxudmFyIERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgPSAyXG5cbnZhciBwYXJzZVRva2VuRGF0ZVRpbWVEZWxpbWV0ZXIgPSAvW1QgXS9cbnZhciBwYXJzZVRva2VuUGxhaW5UaW1lID0gLzovXG5cbi8vIHllYXIgdG9rZW5zXG52YXIgcGFyc2VUb2tlbllZID0gL14oXFxkezJ9KSQvXG52YXIgcGFyc2VUb2tlbnNZWVkgPSBbXG4gIC9eKFsrLV1cXGR7Mn0pJC8sIC8vIDAgYWRkaXRpb25hbCBkaWdpdHNcbiAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gIC9eKFsrLV1cXGR7NH0pJC8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG52YXIgcGFyc2VUb2tlbllZWVkgPSAvXihcXGR7NH0pL1xudmFyIHBhcnNlVG9rZW5zWVlZWVkgPSBbXG4gIC9eKFsrLV1cXGR7NH0pLywgLy8gMCBhZGRpdGlvbmFsIGRpZ2l0c1xuICAvXihbKy1dXFxkezV9KS8sIC8vIDEgYWRkaXRpb25hbCBkaWdpdFxuICAvXihbKy1dXFxkezZ9KS8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG4vLyBkYXRlIHRva2Vuc1xudmFyIHBhcnNlVG9rZW5NTSA9IC9eLShcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuREREID0gL14tPyhcXGR7M30pJC9cbnZhciBwYXJzZVRva2VuTU1ERCA9IC9eLT8oXFxkezJ9KS0/KFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5Xd3cgPSAvXi0/VyhcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuV3d3RCA9IC9eLT9XKFxcZHsyfSktPyhcXGR7MX0pJC9cblxuLy8gdGltZSB0b2tlbnNcbnZhciBwYXJzZVRva2VuSEggPSAvXihcXGR7Mn0oWy4sXVxcZCopPykkL1xudmFyIHBhcnNlVG9rZW5ISE1NID0gL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvXG52YXIgcGFyc2VUb2tlbkhITU1TUyA9IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC9cblxuLy8gdGltZXpvbmUgdG9rZW5zXG52YXIgcGFyc2VUb2tlblRpbWV6b25lID0gLyhbWistXS4qKSQvXG52YXIgcGFyc2VUb2tlblRpbWV6b25lWiA9IC9eKFopJC9cbnZhciBwYXJzZVRva2VuVGltZXpvbmVISCA9IC9eKFsrLV0pKFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5UaW1lem9uZUhITU0gPSAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIGFsbCBhYm92ZSBmYWlscywgdGhlIGZ1bmN0aW9uIHBhc3NlcyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0gezAgfCAxIHwgMn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2Ugc3RyaW5nICcrMDIwMTQxMDEnLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnKzAyMDE0MTAxJywge2FkZGl0aW9uYWxEaWdpdHM6IDF9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gcGFyc2UgKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGlzRGF0ZShhcmd1bWVudCkpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsKSB7XG4gICAgYWRkaXRpb25hbERpZ2l0cyA9IERFRkFVTFRfQURESVRJT05BTF9ESUdJVFNcbiAgfSBlbHNlIHtcbiAgICBhZGRpdGlvbmFsRGlnaXRzID0gTnVtYmVyKGFkZGl0aW9uYWxEaWdpdHMpXG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpXG5cbiAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKVxuICB2YXIgeWVhciA9IHBhcnNlWWVhclJlc3VsdC55ZWFyXG4gIHZhciByZXN0RGF0ZVN0cmluZyA9IHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZ1xuXG4gIHZhciBkYXRlID0gcGFyc2VEYXRlKHJlc3REYXRlU3RyaW5nLCB5ZWFyKVxuXG4gIGlmIChkYXRlKSB7XG4gICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpXG4gICAgdmFyIHRpbWUgPSAwXG4gICAgdmFyIG9mZnNldFxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nIChkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGFyc2VUb2tlbkRhdGVUaW1lRGVsaW1ldGVyKVxuICB2YXIgdGltZVN0cmluZ1xuXG4gIGlmIChwYXJzZVRva2VuUGxhaW5UaW1lLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IG51bGxcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF1cbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF1cbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGFyc2VUb2tlblRpbWV6b25lLmV4ZWModGltZVN0cmluZylcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKVxuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5nc1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIgKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHBhcnNlVG9rZW5ZWVkgPSBwYXJzZVRva2Vuc1lZWVthZGRpdGlvbmFsRGlnaXRzXVxuICB2YXIgcGFyc2VUb2tlbllZWVlZID0gcGFyc2VUb2tlbnNZWVlZWVthZGRpdGlvbmFsRGlnaXRzXVxuXG4gIHZhciB0b2tlblxuXG4gIC8vIFlZWVkgb3IgwrFZWVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWVlZLmV4ZWMoZGF0ZVN0cmluZykgfHwgcGFyc2VUb2tlbllZWVlZLmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIHllYXJTdHJpbmcgPSB0b2tlblsxXVxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBwYXJzZUludCh5ZWFyU3RyaW5nLCAxMCksXG4gICAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSh5ZWFyU3RyaW5nLmxlbmd0aClcbiAgICB9XG4gIH1cblxuICAvLyBZWSBvciDCsVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWS5leGVjKGRhdGVTdHJpbmcpIHx8IHBhcnNlVG9rZW5ZWVkuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICB2YXIgY2VudHVyeVN0cmluZyA9IHRva2VuWzFdXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KGNlbnR1cnlTdHJpbmcsIDEwKSAqIDEwMCxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKGNlbnR1cnlTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZSAoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgdG9rZW5cbiAgdmFyIGRhdGVcbiAgdmFyIG1vbnRoXG4gIHZhciB3ZWVrXG5cbiAgLy8gWVlZWVxuICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU1cbiAgdG9rZW4gPSBwYXJzZVRva2VuTU0uZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aClcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1EREQgb3IgWVlZWURERFxuICB0b2tlbiA9IHBhcnNlVG9rZW5EREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZGF5T2ZZZWFyKVxuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLU1NLUREIG9yIFlZWVlNTUREXG4gIHRva2VuID0gcGFyc2VUb2tlbk1NREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheSA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktV3d3IG9yIFlZWVlXd3dcbiAgdG9rZW4gPSBwYXJzZVRva2VuV3d3LmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrKVxuICB9XG5cbiAgLy8gWVlZWS1Xd3ctRCBvciBZWVlZV3d3RFxuICB0b2tlbiA9IHBhcnNlVG9rZW5Xd3dELmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheU9mV2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgZGF0ZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUgKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG4gIHZhciBob3Vyc1xuICB2YXIgbWludXRlc1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGFyc2VUb2tlbkhILmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuICB9XG5cbiAgLy8gaGg6bW0gb3IgaGhtbVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ISE1NLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlRmxvYXQodG9rZW5bMl0ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIH1cblxuICAvLyBoaDptbTpzcyBvciBoaG1tc3NcbiAgdG9rZW4gPSBwYXJzZVRva2VuSEhNTVNTLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICB2YXIgc2Vjb25kcyA9IHBhcnNlRmxvYXQodG9rZW5bM10ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICtcbiAgICAgIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lICh0aW1lem9uZVN0cmluZykge1xuICB2YXIgdG9rZW5cbiAgdmFyIGFic29sdXRlT2Zmc2V0XG5cbiAgLy8gWlxuICB0b2tlbiA9IHBhcnNlVG9rZW5UaW1lem9uZVouZXhlYyh0aW1lem9uZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIMKxaGhcbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISC5leGVjKHRpbWV6b25lU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MFxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISE1NLmV4ZWModGltZXpvbmVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwICsgcGFyc2VJbnQodG9rZW5bM10sIDEwKVxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09ZZWFyIChpc29ZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgd2VlayA9IHdlZWsgfHwgMFxuICBkYXkgPSBkYXkgfHwgMFxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvWWVhciwgMCwgNClcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgN1xuICB2YXIgZGlmZiA9IHdlZWsgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheVxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvcGFyc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gYXJndW1lbnQgYW4gaW5zdGFuY2Ugb2YgRGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBhcmd1bWVudCBhbiBpbnN0YW5jZSBvZiBEYXRlP1xuICpcbiAqIEBwYXJhbSB7Kn0gYXJndW1lbnQgLSB0aGUgYXJndW1lbnQgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAnbWF5b25uYWlzZScgYSBEYXRlP1xuICogdmFyIHJlc3VsdCA9IGlzRGF0ZSgnbWF5b25uYWlzZScpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRGF0ZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2RhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBjbGVhbkRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXRlID0gbmV3IERhdGUoMClcbiAgZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSlcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0YXJ0T2ZEYXkgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9kYXkvaW5kZXguanMnKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdClcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mRGF5IChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mRGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3RhcnRfb2ZfZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1llYXIgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcycpXG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogdmFyIHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmZ1bmN0aW9uIGdldElTT1dlZWsgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRpZmYgPSBzdGFydE9mSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mSVNPWWVhcihkYXRlKS5nZXRUaW1lKClcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldElTT1dlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdGFydE9mV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwge3dlZWtTdGFydHNPbjogMX0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZklTT1dlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwge3dlZWtTdGFydHNPbjogMX0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mV2VlayAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IGRpcnR5T3B0aW9ucyA/IChOdW1iZXIoZGlydHlPcHRpb25zLndlZWtTdGFydHNPbikgfHwgMCkgOiAwXG5cbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPblxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mV2Vla1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRJU09ZZWFyID0gcmVxdWlyZSgnLi4vZ2V0X2lzb195ZWFyL2luZGV4LmpzJylcbnZhciBzdGFydE9mSVNPV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb193ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIElTTyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZklTT1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mSVNPWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciB5ZWFyID0gZ2V0SVNPWWVhcihkaXJ0eURhdGUpXG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKVxuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNClcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHZhciBkYXRlID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZJU09ZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3RhcnRfb2ZfaXNvX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBzdGFydE9mSVNPV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb193ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogdmFyIHJlc3VsdCA9IGdldElTT1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZnVuY3Rpb24gZ2V0SVNPWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuXG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMClcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNClcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcilcblxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApXG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNClcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcilcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMVxuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhclxuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SVNPWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2dldF9pc29feWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRGF0ZSA9IHJlcXVpcmUoJy4uL2lzX2RhdGUvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGFyZ3VtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQgKGRpcnR5RGF0ZSkge1xuICBpZiAoaXNEYXRlKGRpcnR5RGF0ZSkpIHtcbiAgICByZXR1cm4gIWlzTmFOKGRpcnR5RGF0ZSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRvU3RyaW5nLmNhbGwoZGlydHlEYXRlKSArICcgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNWYWxpZFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX3ZhbGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYnVpbGREaXN0YW5jZUluV29yZHNMb2NhbGUgPSByZXF1aXJlKCcuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qcycpXG52YXIgYnVpbGRGb3JtYXRMb2NhbGUgPSByZXF1aXJlKCcuL2J1aWxkX2Zvcm1hdF9sb2NhbGUvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRpc3RhbmNlSW5Xb3JkczogYnVpbGREaXN0YW5jZUluV29yZHNMb2NhbGUoKSxcbiAgZm9ybWF0OiBidWlsZEZvcm1hdExvY2FsZSgpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZSAoKSB7XG4gIHZhciBkaXN0YW5jZUluV29yZHNMb2NhbGUgPSB7XG4gICAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICAgIH0sXG5cbiAgICB4U2Vjb25kczoge1xuICAgICAgb25lOiAnMSBzZWNvbmQnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgICB9LFxuXG4gICAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcblxuICAgIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgICB9LFxuXG4gICAgeE1pbnV0ZXM6IHtcbiAgICAgIG9uZTogJzEgbWludXRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gICAgfSxcblxuICAgIGFib3V0WEhvdXJzOiB7XG4gICAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gICAgfSxcblxuICAgIHhIb3Vyczoge1xuICAgICAgb25lOiAnMSBob3VyJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICAgIH0sXG5cbiAgICB4RGF5czoge1xuICAgICAgb25lOiAnMSBkYXknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgICB9LFxuXG4gICAgYWJvdXRYTW9udGhzOiB7XG4gICAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgICB9LFxuXG4gICAgeE1vbnRoczoge1xuICAgICAgb25lOiAnMSBtb250aCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gICAgfSxcblxuICAgIGFib3V0WFllYXJzOiB7XG4gICAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gICAgfSxcblxuICAgIHhZZWFyczoge1xuICAgICAgb25lOiAnMSB5ZWFyJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICAgIH0sXG5cbiAgICBvdmVyWFllYXJzOiB7XG4gICAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICAgIH0sXG5cbiAgICBhbG1vc3RYWWVhcnM6IHtcbiAgICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsaXplICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gICAgdmFyIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgZGlzdGFuY2VJbldvcmRzTG9jYWxlW3Rva2VuXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdCA9IGRpc3RhbmNlSW5Xb3Jkc0xvY2FsZVt0b2tlbl1cbiAgICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNMb2NhbGVbdG9rZW5dLm9uZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhbGl6ZTogbG9jYWxpemVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkRGlzdGFuY2VJbldvcmRzTG9jYWxlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1aWxkRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IHJlcXVpcmUoJy4uLy4uL19saWIvYnVpbGRfZm9ybWF0dGluZ190b2tlbnNfcmVnX2V4cC9pbmRleC5qcycpXG5cbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9jYWxlICgpIHtcbiAgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4gIC8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuICAvLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbiAgLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuICB2YXIgbW9udGhzM2NoYXIgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgdmFyIG1vbnRoc0Z1bGwgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxuICB2YXIgd2Vla2RheXMyY2hhciA9IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXVxuICB2YXIgd2Vla2RheXMzY2hhciA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J11cbiAgdmFyIHdlZWtkYXlzRnVsbCA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxuICB2YXIgbWVyaWRpZW1VcHBlcmNhc2UgPSBbJ0FNJywgJ1BNJ11cbiAgdmFyIG1lcmlkaWVtTG93ZXJjYXNlID0gWydhbScsICdwbSddXG4gIHZhciBtZXJpZGllbUZ1bGwgPSBbJ2EubS4nLCAncC5tLiddXG5cbiAgdmFyIGZvcm1hdHRlcnMgPSB7XG4gICAgLy8gTW9udGg6IEphbiwgRmViLCAuLi4sIERlY1xuICAgICdNTU0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoczNjaGFyW2RhdGUuZ2V0TW9udGgoKV1cbiAgICB9LFxuXG4gICAgLy8gTW9udGg6IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgJ01NTU0nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc0Z1bGxbZGF0ZS5nZXRNb250aCgpXVxuICAgIH0sXG5cbiAgICAvLyBEYXkgb2Ygd2VlazogU3UsIE1vLCAuLi4sIFNhXG4gICAgJ2RkJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrZGF5czJjaGFyW2RhdGUuZ2V0RGF5KCldXG4gICAgfSxcblxuICAgIC8vIERheSBvZiB3ZWVrOiBTdW4sIE1vbiwgLi4uLCBTYXRcbiAgICAnZGRkJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrZGF5czNjaGFyW2RhdGUuZ2V0RGF5KCldXG4gICAgfSxcblxuICAgIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheVxuICAgICdkZGRkJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrZGF5c0Z1bGxbZGF0ZS5nZXREYXkoKV1cbiAgICB9LFxuXG4gICAgLy8gQU0sIFBNXG4gICAgJ0EnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgLyAxMikgPj0gMSA/IG1lcmlkaWVtVXBwZXJjYXNlWzFdIDogbWVyaWRpZW1VcHBlcmNhc2VbMF1cbiAgICB9LFxuXG4gICAgLy8gYW0sIHBtXG4gICAgJ2EnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgLyAxMikgPj0gMSA/IG1lcmlkaWVtTG93ZXJjYXNlWzFdIDogbWVyaWRpZW1Mb3dlcmNhc2VbMF1cbiAgICB9LFxuXG4gICAgLy8gYS5tLiwgcC5tLlxuICAgICdhYSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSAvIDEyKSA+PSAxID8gbWVyaWRpZW1GdWxsWzFdIDogbWVyaWRpZW1GdWxsWzBdXG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgb3JkaW5hbCB2ZXJzaW9uIG9mIGZvcm1hdHRlcnM6IE0gLT4gTW8sIEQgLT4gRG8sIGV0Yy5cbiAgdmFyIG9yZGluYWxGb3JtYXR0ZXJzID0gWydNJywgJ0QnLCAnREREJywgJ2QnLCAnUScsICdXJ11cbiAgb3JkaW5hbEZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyVG9rZW4pIHtcbiAgICBmb3JtYXR0ZXJzW2Zvcm1hdHRlclRva2VuICsgJ28nXSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXR0ZXJzKSB7XG4gICAgICByZXR1cm4gb3JkaW5hbChmb3JtYXR0ZXJzW2Zvcm1hdHRlclRva2VuXShkYXRlKSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXR0ZXJzOiBmb3JtYXR0ZXJzLFxuICAgIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHA6IGJ1aWxkRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cChmb3JtYXR0ZXJzKVxuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGluYWwgKG51bWJlcikge1xuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCdcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCdcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCdcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZEZvcm1hdExvY2FsZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2xvY2FsZS9lbi9idWlsZF9mb3JtYXRfbG9jYWxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29tbW9uRm9ybWF0dGVyS2V5cyA9IFtcbiAgJ00nLCAnTU0nLCAnUScsICdEJywgJ0REJywgJ0RERCcsICdEREREJywgJ2QnLFxuICAnRScsICdXJywgJ1dXJywgJ1lZJywgJ1lZWVknLCAnR0cnLCAnR0dHRycsXG4gICdIJywgJ0hIJywgJ2gnLCAnaGgnLCAnbScsICdtbScsXG4gICdzJywgJ3NzJywgJ1MnLCAnU1MnLCAnU1NTJyxcbiAgJ1onLCAnWlonLCAnWCcsICd4J1xuXVxuXG5mdW5jdGlvbiBidWlsZEZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgKGZvcm1hdHRlcnMpIHtcbiAgdmFyIGZvcm1hdHRlcktleXMgPSBbXVxuICBmb3IgKHZhciBrZXkgaW4gZm9ybWF0dGVycykge1xuICAgIGlmIChmb3JtYXR0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZvcm1hdHRlcktleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPSBjb21tb25Gb3JtYXR0ZXJLZXlzXG4gICAgLmNvbmNhdChmb3JtYXR0ZXJLZXlzKVxuICAgIC5zb3J0KClcbiAgICAucmV2ZXJzZSgpXG4gIHZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gbmV3IFJlZ0V4cChcbiAgICAnKFxcXFxbW15cXFxcW10qXFxcXF0pfChcXFxcXFxcXCk/JyArICcoJyArIGZvcm1hdHRpbmdUb2tlbnMuam9pbignfCcpICsgJ3wuKScsICdnJ1xuICApXG5cbiAgcmV0dXJuIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZEZvcm1hdHRpbmdUb2tlbnNSZWdFeHBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZF9mb3JtYXR0aW5nX3Rva2Vuc19yZWdfZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBhcnJheSBvZiBkYXRlcyB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gc3RhcnREYXRlIC0gdGhlIGZpcnN0IGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBlbmREYXRlIC0gdGhlIGxhc3QgZGF0ZVxuICogQHJldHVybnMge0RhdGVbXX0gdGhlIGFycmF5IHdpdGggc3RhcnRzIG9mIGRheXMgZnJvbSB0aGUgZGF5IG9mIHN0YXJ0RGF0ZSB0byB0aGUgZGF5IG9mIGVuZERhdGVcbiAqIEB0aHJvd3Mge0Vycm9yfSBzdGFydERhdGUgY2Fubm90IGJlIGFmdGVyIGVuZERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRWFjaCBkYXkgYmV0d2VlbiA2IE9jdG9iZXIgMjAxNCBhbmQgMTAgT2N0b2JlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IGVhY2hEYXkoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDksIDYpLFxuICogICBuZXcgRGF0ZSgyMDE0LCA5LCAxMClcbiAqIClcbiAqIC8vPT4gW1xuICogLy8gICBNb24gT2N0IDA2IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFR1ZSBPY3QgMDcgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgV2VkIE9jdCAwOCAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBUaHUgT2N0IDA5IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIEZyaSBPY3QgMTAgMjAxNCAwMDowMDowMFxuICogLy8gXVxuICovXG5mdW5jdGlvbiBlYWNoRGF5IChkaXJ0eVN0YXJ0RGF0ZSwgZGlydHlFbmREYXRlKSB7XG4gIHZhciBzdGFydERhdGUgPSBwYXJzZShkaXJ0eVN0YXJ0RGF0ZSlcbiAgdmFyIGVuZERhdGUgPSBwYXJzZShkaXJ0eUVuZERhdGUpXG5cbiAgdmFyIGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKVxuXG4gIGlmIChzdGFydERhdGUuZ2V0VGltZSgpID4gZW5kVGltZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGRhdGUgY2Fubm90IGJlIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZScpXG4gIH1cblxuICB2YXIgZGF0ZXMgPSBbXVxuXG4gIHZhciBjdXJyZW50RGF0ZSA9IHN0YXJ0RGF0ZVxuICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gIHdoaWxlIChjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPD0gZW5kVGltZSkge1xuICAgIGRhdGVzLnB1c2gocGFyc2UoY3VycmVudERhdGUpKVxuICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSlcbiAgfVxuXG4gIHJldHVybiBkYXRlc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVhY2hEYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9lYWNoX2RheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7d2Vla1N0YXJ0c09uOiAxfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZldlZWsgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBkaXJ0eU9wdGlvbnMgPyAoTnVtYmVyKGRpcnR5T3B0aW9ucy53ZWVrU3RhcnRzT24pIHx8IDApIDogMFxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pXG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZilcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZXZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZW5kX29mX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSByYW5nZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgcmFuZ2U/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IHN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBvZiByYW5nZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGVuZERhdGUgLSB0aGUgZW5kIG9mIHJhbmdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZVxuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSByYW5nZTpcbiAqIGlzV2l0aGluUmFuZ2UoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLCBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgcmFuZ2U6XG4gKiBpc1dpdGhpblJhbmdlKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1dpdGhpblJhbmdlIChkaXJ0eURhdGUsIGRpcnR5U3RhcnREYXRlLCBkaXJ0eUVuZERhdGUpIHtcbiAgdmFyIHRpbWUgPSBwYXJzZShkaXJ0eURhdGUpLmdldFRpbWUoKVxuICB2YXIgc3RhcnRUaW1lID0gcGFyc2UoZGlydHlTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgZW5kVGltZSA9IHBhcnNlKGRpcnR5RW5kRGF0ZSkuZ2V0VGltZSgpXG5cbiAgaWYgKHN0YXJ0VGltZSA+IGVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdGFydCBvZiB0aGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHJhbmdlJylcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dpdGhpblJhbmdlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvaXNfd2l0aGluX3JhbmdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUgKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHBhcnNlKGRpcnR5RGF0ZVRvQ29tcGFyZSlcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0JlZm9yZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2JlZm9yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogdmFyIHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNBZnRlciAoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXRlVG9Db21wYXJlID0gcGFyc2UoZGlydHlEYXRlVG9Db21wYXJlKVxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQWZ0ZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc19hZnRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiB2YXIgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKVxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCAoZGlydHlMZWZ0RGF0ZSwgZGlydHlSaWdodERhdGUpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlMZWZ0RGF0ZSlcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5UmlnaHREYXRlKVxuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpID09PSBkYXRlUmlnaHQuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2lzX2VxdWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgRG9lcyB0aGUgZ2l2ZW4gZGF0ZSBmYWxsIG9uIGEgd2Vla2VuZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIERvZXMgdGhlIGdpdmVuIGRhdGUgZmFsbCBvbiBhIHdlZWtlbmQ/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGZhbGxzIG9uIGEgd2Vla2VuZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBEb2VzIDUgT2N0b2JlciAyMDE0IGZhbGwgb24gYSB3ZWVrZW5kP1xuICogdmFyIHJlc3VsdCA9IGlzV2Vla2VuZChuZXcgRGF0ZSgyMDE0LCA5LCA1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1dlZWtlbmQgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KClcbiAgcmV0dXJuIGRheSA9PT0gMCB8fCBkYXkgPT09IDZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dlZWtlbmRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc193ZWVrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lRGF5IChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lRGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvaXNfc2FtZV9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVNb250aChcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDI1KVxuICogKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZU1vbnRoIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG4gIHJldHVybiBkYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IGRhdGVSaWdodC5nZXRNb250aCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lTW9udGhcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kYXRlLWZucy9pc19zYW1lX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuaW1wb3J0IHtEQVlTX0lOX1dFRUt9IGZyb20gJy4vY29uc3RzJ1xuXG5jb25zdCBkYXlzT2ZXZWVrID0gWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcsICdTdW4nXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzT2ZXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB3ZWVrU3RhcnRzT246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihEQVlTX0lOX1dFRUspXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdlZWtTdGFydHNPbjogMSxcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX2dldERheXNPZldlZWsoZGF5KSB7XG4gICAgcmV0dXJuIGRheXNPZldlZWsuc2xpY2UoZGF5IC0gMSkuY29uY2F0KGRheXNPZldlZWsuc2xpY2UoMCwgZGF5IC0gMSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2NrQ2xhc3NOYW1lLCB3ZWVrU3RhcnRzT259ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNsaWNlZERheXNPZldlZWsgPSB0aGlzLl9nZXREYXlzT2ZXZWVrKHdlZWtTdGFydHNPbilcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LWRheXNfb2Zfd2Vla2B9PlxuICAgICAgICB7c2xpY2VkRGF5c09mV2Vlay5tYXAoKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoYCR7YmxvY2tDbGFzc05hbWV9LWRheXNfb2Zfd2Vla19kYXlgLCB7XG4gICAgICAgICAgICAgICAgJ2lzLXdlZWtlbmQnOiBpbmRleCA+IDQgLy8gNCBpcyBhbiBpbmRleCBvZiBGcmlkYXlcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGtleT17ZGF5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGF5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbGVuZGFyL2RheXNfb2Zfd2Vlay5qc3giLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFJhbmdlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHJhbmdlIG92ZXJsYXBwaW5nIHdpdGggYW5vdGhlciBkYXRlIHJhbmdlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgcmFuZ2Ugb3ZlcmxhcHBpbmcgd2l0aCBhbm90aGVyIGRhdGUgcmFuZ2U/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGluaXRpYWxSYW5nZVN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBvZiB0aGUgaW5pdGlhbCByYW5nZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGluaXRpYWxSYW5nZUVuZERhdGUgLSB0aGUgZW5kIG9mIHRoZSBpbml0aWFsIHJhbmdlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gY29tcGFyZWRSYW5nZVN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBvZiB0aGUgcmFuZ2UgdG8gY29tcGFyZSBpdCB3aXRoXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gY29tcGFyZWRSYW5nZUVuZERhdGUgLSB0aGUgZW5kIG9mIHRoZSByYW5nZSB0byBjb21wYXJlIGl0IHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZSBkYXRlIHJhbmdlcyBhcmUgb3ZlcmxhcHBpbmdcbiAqIEB0aHJvd3Mge0Vycm9yfSBzdGFydERhdGUgb2YgYSBkYXRlIHJhbmdlIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igb3ZlcmxhcHBpbmcgZGF0ZSByYW5nZXM6XG4gKiBhcmVSYW5nZXNPdmVybGFwcGluZyhcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMTApLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMCksIG5ldyBEYXRlKDIwMTQsIDAsIDE3KSwgbmV3IERhdGUoMjAxNCwgMCwgMjEpXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIG5vbi1vdmVybGFwcGluZyBkYXRlIHJhbmdlczpcbiAqIGFyZVJhbmdlc092ZXJsYXBwaW5nKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDIwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMilcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gYXJlUmFuZ2VzT3ZlcmxhcHBpbmcgKGRpcnR5SW5pdGlhbFJhbmdlU3RhcnREYXRlLCBkaXJ0eUluaXRpYWxSYW5nZUVuZERhdGUsIGRpcnR5Q29tcGFyZWRSYW5nZVN0YXJ0RGF0ZSwgZGlydHlDb21wYXJlZFJhbmdlRW5kRGF0ZSkge1xuICB2YXIgaW5pdGlhbFN0YXJ0VGltZSA9IHBhcnNlKGRpcnR5SW5pdGlhbFJhbmdlU3RhcnREYXRlKS5nZXRUaW1lKClcbiAgdmFyIGluaXRpYWxFbmRUaW1lID0gcGFyc2UoZGlydHlJbml0aWFsUmFuZ2VFbmREYXRlKS5nZXRUaW1lKClcbiAgdmFyIGNvbXBhcmVkU3RhcnRUaW1lID0gcGFyc2UoZGlydHlDb21wYXJlZFJhbmdlU3RhcnREYXRlKS5nZXRUaW1lKClcbiAgdmFyIGNvbXBhcmVkRW5kVGltZSA9IHBhcnNlKGRpcnR5Q29tcGFyZWRSYW5nZUVuZERhdGUpLmdldFRpbWUoKVxuXG4gIGlmIChpbml0aWFsU3RhcnRUaW1lID4gaW5pdGlhbEVuZFRpbWUgfHwgY29tcGFyZWRTdGFydFRpbWUgPiBjb21wYXJlZEVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdGFydCBvZiB0aGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHJhbmdlJylcbiAgfVxuXG4gIHJldHVybiBpbml0aWFsU3RhcnRUaW1lIDwgY29tcGFyZWRFbmRUaW1lICYmIGNvbXBhcmVkU3RhcnRUaW1lIDwgaW5pdGlhbEVuZFRpbWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcmVSYW5nZXNPdmVybGFwcGluZ1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2FyZV9yYW5nZXNfb3ZlcmxhcHBpbmcvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZNb250aCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICBkYXRlLnNldERhdGUoMSlcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZk1vbnRoIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKVxuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZk1vbnRoXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvZW5kX29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBhZGREYXlzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRGF5c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2FkZF9kYXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWRkRGF5cyA9IHJlcXVpcmUoJy4uL2FkZF9kYXlzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIHN1YnRyYWN0ZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMTAgZGF5cyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc3ViRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IEZyaSBBdWcgMjIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdWJEYXlzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpXG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJEYXlzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvc3ViX2RheXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlckJ1dHRvbiBmcm9tICcuL2hlYWRlcl9idXR0b24nXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUUsIE5FWFRfTU9OVEhfVElUTEUsIFBSRVZfTU9OVEhfVElUTEV9IGZyb20gJy4vY29uc3RzJ1xuaW1wb3J0IHtkYXRlUHJvcFR5cGV9IGZyb20gJy4vX2xpYidcblxuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzJ1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzX2JlZm9yZSdcbmltcG9ydCBpc0FmdGVyIGZyb20gJ2RhdGUtZm5zL2lzX2FmdGVyJ1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCdcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZU1vbnRoOiBkYXRlUHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJOZXh0QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlck5leHRUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJQcmV2QXJyb3c6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGhlYWRlclByZXZUaXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhEYXRlOiBkYXRlUHJvcFR5cGUsXG4gICAgbWluRGF0ZTogZGF0ZVByb3BUeXBlLFxuICAgIG9uTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUUsXG4gICAgaGVhZGVyTmV4dFRpdGxlOiBORVhUX01PTlRIX1RJVExFLFxuICAgIGhlYWRlclByZXZUaXRsZTogUFJFVl9NT05USF9USVRMRVxuICB9XG5cbiAgX3N3aXRjaE1vbnRoKG9mZnNldCkge1xuICAgIGNvbnN0IHtvbk1vbnRoQ2hhbmdlLCBhY3RpdmVNb250aH0gPSB0aGlzLnByb3BzXG4gICAgb25Nb250aENoYW5nZShhZGRNb250aHMoYWN0aXZlTW9udGgsIHBhcnNlSW50KG9mZnNldCkpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZU1vbnRoLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBibG9ja0NsYXNzTmFtZSxcbiAgICAgIGhlYWRlck5leHRBcnJvdyxcbiAgICAgIGhlYWRlck5leHRUaXRsZSxcbiAgICAgIGhlYWRlclByZXZBcnJvdyxcbiAgICAgIGhlYWRlclByZXZUaXRsZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBwcmV2RW5hYmxlZCA9IG1pbkRhdGUgPyBpc0JlZm9yZShzdGFydE9mTW9udGgobWluRGF0ZSksIHN0YXJ0T2ZNb250aChhY3RpdmVNb250aCkpIDogdHJ1ZVxuICAgIGNvbnN0IG5leHRFbmFibGVkID0gbWF4RGF0ZSA/IGlzQWZ0ZXIoc3RhcnRPZk1vbnRoKG1heERhdGUpLCBzdGFydE9mTW9udGgoYWN0aXZlTW9udGgpKSA6IHRydWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LW1vbnRoX2hlYWRlcmB9PlxuICAgICAgICA8SGVhZGVyQnV0dG9uXG4gICAgICAgICAgdHlwZT0ncHJldidcbiAgICAgICAgICBhcnJvdz17aGVhZGVyUHJldkFycm93fVxuICAgICAgICAgIHRpdGxlPXtoZWFkZXJQcmV2VGl0bGV9XG4gICAgICAgICAgZW5hYmxlZD17cHJldkVuYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzLCAtMSl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LW1vbnRoX2hlYWRlcl90aXRsZWB9PlxuICAgICAgICAgIHtmb3JtYXREYXRlKGFjdGl2ZU1vbnRoLCAnTU1NTSBZWVlZJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVhZGVyQnV0dG9uXG4gICAgICAgICAgdHlwZT0nbmV4dCdcbiAgICAgICAgICBhcnJvdz17aGVhZGVyTmV4dEFycm93fVxuICAgICAgICAgIHRpdGxlPXtoZWFkZXJOZXh0VGl0bGV9XG4gICAgICAgICAgZW5hYmxlZD17bmV4dEVuYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci9tb250aF9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhcnJvdzogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgYmxvY2tDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5hYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb2Zmc2V0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsncHJldicsICduZXh0J10pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIF9vbkNsaWNrKGUpIHtcbiAgICBjb25zdCB7ZW5hYmxlZCwgb25DbGlja30gPSB0aGlzLnByb3BzXG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIG9uQ2xpY2soZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Fycm93LCBibG9ja0NsYXNzTmFtZSwgZW5hYmxlZCwgdHlwZSwgdGl0bGV9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGAke2Jsb2NrQ2xhc3NOYW1lfS1oZWFkZXJfYnV0dG9uYCxcbiAgICAgICAgICBgaXMtJHt0eXBlfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2lzLWRpc2FibGVkJzogIWVuYWJsZWRcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGVkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICB7YXJyb3d9XG4gICAgICA8L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWxlbmRhci9oZWFkZXJfYnV0dG9uLmpzeCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBnZXREYXlzSW5Nb250aCA9IHJlcXVpcmUoJy4uL2dldF9kYXlzX2luX21vbnRoL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGFkZE1vbnRocyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgdmFyIGRlc2lyZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudFxuICB2YXIgZGF0ZVdpdGhEZXNpcmVkTW9udGggPSBuZXcgRGF0ZSgwKVxuICBkYXRlV2l0aERlc2lyZWRNb250aC5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIGRlc2lyZWRNb250aCwgMSlcbiAgZGF0ZVdpdGhEZXNpcmVkTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIGRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGgoZGF0ZVdpdGhEZXNpcmVkTW9udGgpXG4gIC8vIFNldCB0aGUgbGFzdCBkYXkgb2YgdGhlIG5ldyBtb250aFxuICAvLyBpZiB0aGUgb3JpZ2luYWwgZGF0ZSB3YXMgdGhlIGxhc3QgZGF5IG9mIHRoZSBsb25nZXIgbW9udGhcbiAgZGF0ZS5zZXRNb250aChkZXNpcmVkTW9udGgsIE1hdGgubWluKGRheXNJbk1vbnRoLCBkYXRlLmdldERhdGUoKSkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTW9udGhzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGF0ZS1mbnMvYWRkX21vbnRocy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZGF5cyBhcmUgaW4gRmVicnVhcnkgMjAwMD9cbiAqIHZhciByZXN1bHQgPSBnZXREYXlzSW5Nb250aChuZXcgRGF0ZSgyMDAwLCAxKSlcbiAqIC8vPT4gMjlcbiAqL1xuZnVuY3Rpb24gZ2V0RGF5c0luTW9udGggKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKClcbiAgdmFyIGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoMClcbiAgbGFzdERheU9mTW9udGguc2V0RnVsbFllYXIoeWVhciwgbW9udGhJbmRleCArIDEsIDApXG4gIGxhc3REYXlPZk1vbnRoLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBsYXN0RGF5T2ZNb250aC5nZXREYXRlKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREYXlzSW5Nb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RhdGUtZm5zL2dldF9kYXlzX2luX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnb3ZlcmxhcHBpbmdfd2l0aF9kaXNhYmxlZCcsXG4gICAgICAnZGlzYWJsZWRfZGF5X2NsaWNrJ1xuICAgIF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LW5vdGljZWB9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyTWVzc2FnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX3JlbmRlck1lc3NhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ292ZXJsYXBwaW5nX3dpdGhfZGlzYWJsZWQnOlxuICAgICAgY2FzZSAnZGlzYWJsZWRfZGF5X2NsaWNrJzpcbiAgICAgICAgcmV0dXJuICdTZWxlY3RlZCByYW5nZSBtdXN0IG5vdCBvdmVybGFwIHdpdGggZGlzYWJsZWQgZGF0ZXMuJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbGVuZGFyL25vdGljZS5qc3giXSwic291cmNlUm9vdCI6IiJ9