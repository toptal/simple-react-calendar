(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _calendarCalendar = __webpack_require__(1);
	
	exports['default'] = _interopRequire(_calendarCalendar);
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _month = __webpack_require__(3);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(29);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _consts = __webpack_require__(7);
	
	var _dateFnsSrcStart_of_month = __webpack_require__(25);
	
	var _dateFnsSrcStart_of_month2 = _interopRequireDefault(_dateFnsSrcStart_of_month);
	
	var _dateFnsSrcIs_same_day = __webpack_require__(10);
	
	var _dateFnsSrcIs_same_day2 = _interopRequireDefault(_dateFnsSrcIs_same_day);
	
	var _dateFnsSrcIs_same_month = __webpack_require__(16);
	
	var _dateFnsSrcIs_same_month2 = _interopRequireDefault(_dateFnsSrcIs_same_month);
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	// TODO: replace this this with function from date-fns after it will be done
	var isValid = function isValid(date) {
	  return !isNaN(new Date(date).getTime());
	};
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar() {
	    var _this = this;
	
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      activeMonth: this._initialMonth()
	    };
	
	    this._switchMonth = function (date) {
	      var onMonthChange = _this.props.onMonthChange;
	
	      if (typeof onMonthChange === 'function') {
	        onMonthChange(date);
	      } else {
	        _this.setState({
	          activeMonth: date
	        });
	      }
	    };
	
	    this._selectionChanged = function (selection) {
	      var start = selection.start;
	      var end = selection.end;
	      var inProgress = selection.inProgress;
	      var _props = _this.props;
	      var mode = _props.mode;
	      var onSelect = _props.onSelect;
	
	      if (onSelect) {
	        onSelect(mode === SINGLE_MODE ? start : selection);
	      }
	    };
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.activeMonth && !(0, _dateFnsSrcIs_same_month2['default'])(nextProps.activeMonth, this.props.activeMonth)) {
	        this.setState({ activeMonth: (0, _dateFnsSrcStart_of_month2['default'])(nextProps.activeMonth) });
	      }
	    }
	  }, {
	    key: '_initialMonth',
	    value: function _initialMonth() {
	      var _props2 = this.props;
	      var selected = _props2.selected;
	      var activeMonth = _props2.activeMonth;
	      var today = _props2.today;
	      var mode = _props2.mode;
	
	      if (isValid(activeMonth)) {
	        return activeMonth;
	      } else {
	        if (selected) {
	          var selectionStart = mode === SINGLE_MODE ? selected : selected.start;
	          if (isValid(selectionStart)) {
	            return (0, _dateFnsSrcStart_of_month2['default'])(selectionStart);
	          }
	        }
	      }
	      return (0, _dateFnsSrcStart_of_month2['default'])(today);
	    }
	  }, {
	    key: '_activeMonth',
	    value: function _activeMonth() {
	      var _props3 = this.props;
	      var onMonthChange = _props3.onMonthChange;
	      var activeMonth = _props3.activeMonth;
	
	      if (onMonthChange) {
	        return activeMonth;
	      } else {
	        return this.state.activeMonth;
	      }
	    }
	  }, {
	    key: '_selection',
	    value: function _selection() {
	      var _props4 = this.props;
	      var mode = _props4.mode;
	      var selected = _props4.selected;
	
	      var start = mode === SINGLE_MODE ? selected : selected && selected.start;
	      var end = mode === SINGLE_MODE ? selected : selected && selected.end;
	      if (isValid(start) && isValid(end)) {
	        return { start: start, end: end };
	      } else {
	        return {
	          start: null,
	          end: null
	        };
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var mode = _props5.mode;
	      var data = _props5.data;
	      var minDate = _props5.minDate;
	      var maxDate = _props5.maxDate;
	      var today = _props5.today;
	      var blockClassName = _props5.blockClassName;
	
	      var activeMonth = isValid(this._activeMonth()) ? this._activeMonth() : (0, _dateFnsSrcStart_of_month2['default'])(today);
	      var selection = this._selection();
	
	      return _react2['default'].createElement(
	        'div',
	        { className: blockClassName },
	        _react2['default'].createElement(_month_header2['default'], {
	          ref: 'header',
	          minDate: minDate,
	          maxDate: maxDate,
	          activeMonth: this._activeMonth(),
	          onMonthChange: this._switchMonth,
	          blockClassName: this.props.blockClassName
	        }),
	        _react2['default'].createElement(_month2['default'], {
	          mode: mode,
	          data: data,
	          minDate: minDate,
	          maxDate: maxDate,
	          today: today,
	          ref: 'month',
	          activeMonth: this._activeMonth(),
	          selectedMin: selection.start,
	          selectedMax: selection.end,
	          onChange: this._selectionChanged,
	          blockClassName: this.props.blockClassName
	        })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      activeMonth: _react2['default'].PropTypes.instanceOf(Date),
	      blockClassName: _react2['default'].PropTypes.string,
	      data: _react2['default'].PropTypes.object,
	      maxDate: _react2['default'].PropTypes.instanceOf(Date),
	      minDate: _react2['default'].PropTypes.instanceOf(Date),
	      mode: _react2['default'].PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
	      onMonthChange: _react2['default'].PropTypes.func,
	      onSelect: _react2['default'].PropTypes.func,
	      selected: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.instanceOf(Date), _react2['default'].PropTypes.shape({
	        start: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	        end: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	        inProgress: _react2['default'].PropTypes.bool
	      })]),
	      today: _react2['default'].PropTypes.instanceOf(Date)
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      mode: SINGLE_MODE,
	      today: new Date(),
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return Calendar;
	})(_react2['default'].Component);
	
	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _week = __webpack_require__(4);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _days_of_week = __webpack_require__(24);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _consts = __webpack_require__(7);
	
	var _dateFnsSrcStart_of_week = __webpack_require__(18);
	
	var _dateFnsSrcStart_of_week2 = _interopRequireDefault(_dateFnsSrcStart_of_week);
	
	var _dateFnsSrcEnd_of_week = __webpack_require__(19);
	
	var _dateFnsSrcEnd_of_week2 = _interopRequireDefault(_dateFnsSrcEnd_of_week);
	
	var _dateFnsSrcStart_of_month = __webpack_require__(25);
	
	var _dateFnsSrcStart_of_month2 = _interopRequireDefault(_dateFnsSrcStart_of_month);
	
	var _dateFnsSrcEnd_of_month = __webpack_require__(26);
	
	var _dateFnsSrcEnd_of_month2 = _interopRequireDefault(_dateFnsSrcEnd_of_month);
	
	var _dateFnsSrcIs_before = __webpack_require__(21);
	
	var _dateFnsSrcIs_before2 = _interopRequireDefault(_dateFnsSrcIs_before);
	
	var _dateFnsSrcIs_after = __webpack_require__(22);
	
	var _dateFnsSrcIs_after2 = _interopRequireDefault(_dateFnsSrcIs_after);
	
	var _dateFnsSrcIs_equal = __webpack_require__(23);
	
	var _dateFnsSrcIs_equal2 = _interopRequireDefault(_dateFnsSrcIs_equal);
	
	var _dateFnsSrcAdd_days = __webpack_require__(27);
	
	var _dateFnsSrcAdd_days2 = _interopRequireDefault(_dateFnsSrcAdd_days);
	
	var _dateFnsSrcIs_same_day = __webpack_require__(10);
	
	var _dateFnsSrcIs_same_day2 = _interopRequireDefault(_dateFnsSrcIs_same_day);
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	var Month = (function (_React$Component) {
	  _inherits(Month, _React$Component);
	
	  function Month() {
	    var _this = this;
	
	    _classCallCheck(this, Month);
	
	    _get(Object.getPrototypeOf(Month.prototype), 'constructor', this).apply(this, arguments);
	
	    this._onDayMouseMove = function (date) {
	      if (_this._selectionInProgress) {
	        if (!(0, _dateFnsSrcIs_equal2['default'])(date, _this._selectionEnd)) {
	          _this._selectionEnd = date;
	          _this._pushUpdate();
	        }
	      }
	    };
	
	    this._onDayClick = function (date) {
	      var mode = _this.props.mode;
	
	      if (mode === RANGE_MODE) {
	        if (_this._selectionInProgress) {
	          _this._selectionInProgress = false;
	          _this._selectionEnd = date;
	        } else {
	          _this._selectionInProgress = true;
	          _this._selectionStart = date;
	          _this._selectionEnd = date;
	        }
	      } else if (mode === SINGLE_MODE) {
	        _this._selectionInProgress = false;
	        _this._selectionStart = date;
	        _this._selectionEnd = date;
	      } else {
	        return;
	      }
	      _this._pushUpdate();
	    };
	  }
	
	  _createClass(Month, [{
	    key: '_pushUpdate',
	    value: function _pushUpdate() {
	      this.props.onChange({
	        start: (0, _dateFnsSrcIs_before2['default'])(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
	        end: (0, _dateFnsSrcIs_after2['default'])(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
	        inProgress: this._selectionInProgress
	      });
	    }
	  }, {
	    key: '_renderWeeks',
	    value: function _renderWeeks() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var data = _props.data;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	      var selectedMin = _props.selectedMin;
	      var selectedMax = _props.selectedMax;
	      var activeMonth = _props.activeMonth;
	      var today = _props.today;
	      var blockClassName = _props.blockClassName;
	
	      var weeks = [];
	      var date = (0, _dateFnsSrcStart_of_week2['default'])((0, _dateFnsSrcStart_of_month2['default'])(activeMonth), 1);
	      var endDate = (0, _dateFnsSrcEnd_of_week2['default'])((0, _dateFnsSrcEnd_of_month2['default'])(activeMonth), 1);
	      while ((0, _dateFnsSrcIs_before2['default'])(date, endDate) || (0, _dateFnsSrcIs_same_day2['default'])(date, endDate)) {
	        weeks.push(date);
	        date = (0, _dateFnsSrcAdd_days2['default'])(date, 7);
	      }
	
	      return weeks.map(function (week) {
	        return _react2['default'].createElement(_week2['default'], {
	          key: week.getTime(),
	          date: week,
	          data: data,
	          minDate: minDate,
	          maxDate: maxDate,
	          selectedMin: selectedMin,
	          selectedMax: selectedMax,
	          activeMonth: activeMonth,
	          onDayClick: _this2._onDayClick,
	          onDayMouseMove: _this2._onDayMouseMove,
	          today: today,
	          blockClassName: blockClassName
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: blockClassName + '-month' },
	        _react2['default'].createElement(_days_of_week2['default'], { blockClassName: blockClassName }),
	        this._renderWeeks()
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      activeMonth: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	      blockClassName: _react2['default'].PropTypes.string,
	      data: _react2['default'].PropTypes.object,
	      maxDate: _react2['default'].PropTypes.instanceOf(Date),
	      minDate: _react2['default'].PropTypes.instanceOf(Date),
	      mode: _react2['default'].PropTypes.string.isRequired,
	      onChange: _react2['default'].PropTypes.func.isRequired,
	      selectedMax: _react2['default'].PropTypes.instanceOf(Date),
	      selectedMin: _react2['default'].PropTypes.instanceOf(Date),
	      today: _react2['default'].PropTypes.instanceOf(Date).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return Month;
	})(_react2['default'].Component);
	
	exports['default'] = Month;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(5);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _day = __webpack_require__(6);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _consts = __webpack_require__(7);
	
	var _dateFnsSrcEach_day = __webpack_require__(17);
	
	var _dateFnsSrcEach_day2 = _interopRequireDefault(_dateFnsSrcEach_day);
	
	var _dateFnsSrcStart_of_day = __webpack_require__(11);
	
	var _dateFnsSrcStart_of_day2 = _interopRequireDefault(_dateFnsSrcStart_of_day);
	
	var _dateFnsSrcStart_of_week = __webpack_require__(18);
	
	var _dateFnsSrcStart_of_week2 = _interopRequireDefault(_dateFnsSrcStart_of_week);
	
	var _dateFnsSrcEnd_of_week = __webpack_require__(19);
	
	var _dateFnsSrcEnd_of_week2 = _interopRequireDefault(_dateFnsSrcEnd_of_week);
	
	var _dateFnsSrcIs_within_range = __webpack_require__(20);
	
	var _dateFnsSrcIs_within_range2 = _interopRequireDefault(_dateFnsSrcIs_within_range);
	
	var _dateFnsSrcFormat = __webpack_require__(12);
	
	var _dateFnsSrcFormat2 = _interopRequireDefault(_dateFnsSrcFormat);
	
	var _dateFnsSrcIs_before = __webpack_require__(21);
	
	var _dateFnsSrcIs_before2 = _interopRequireDefault(_dateFnsSrcIs_before);
	
	var _dateFnsSrcIs_after = __webpack_require__(22);
	
	var _dateFnsSrcIs_after2 = _interopRequireDefault(_dateFnsSrcIs_after);
	
	var _dateFnsSrcIs_equal = __webpack_require__(23);
	
	var _dateFnsSrcIs_equal2 = _interopRequireDefault(_dateFnsSrcIs_equal);
	
	var _dateFnsSrcIs_weekend = __webpack_require__(8);
	
	var _dateFnsSrcIs_weekend2 = _interopRequireDefault(_dateFnsSrcIs_weekend);
	
	var _dateFnsSrcIs_same_day = __webpack_require__(10);
	
	var _dateFnsSrcIs_same_day2 = _interopRequireDefault(_dateFnsSrcIs_same_day);
	
	var _dateFnsSrcIs_same_month = __webpack_require__(16);
	
	var _dateFnsSrcIs_same_month2 = _interopRequireDefault(_dateFnsSrcIs_same_month);
	
	var START_WEEK_WITH_SUNDAY = false;
	
	var Week = (function (_React$Component) {
	  _inherits(Week, _React$Component);
	
	  function Week() {
	    _classCallCheck(this, Week);
	
	    _get(Object.getPrototypeOf(Week.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Week, [{
	    key: '_dateSelectable',
	    value: function _dateSelectable(date) {
	      var _props = this.props;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	
	      if (minDate && maxDate) {
	        return (0, _dateFnsSrcIs_within_range2['default'])(date, minDate, maxDate);
	      } else if (minDate && !maxDate) {
	        return (0, _dateFnsSrcIs_after2['default'])(date, minDate) || (0, _dateFnsSrcIs_equal2['default'])(date, minDate);
	      } else if (maxDate && !minDate) {
	        return (0, _dateFnsSrcIs_before2['default'])(date, maxDate) || (0, _dateFnsSrcIs_equal2['default'])(date, maxDate);
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: '_dateSelected',
	    value: function _dateSelected(date) {
	      var _props2 = this.props;
	      var selectedMin = _props2.selectedMin;
	      var selectedMax = _props2.selectedMax;
	
	      return selectedMin && selectedMax && (0, _dateFnsSrcIs_within_range2['default'])((0, _dateFnsSrcStart_of_day2['default'])(date), (0, _dateFnsSrcStart_of_day2['default'])(selectedMin), (0, _dateFnsSrcStart_of_day2['default'])(selectedMax));
	    }
	  }, {
	    key: '_dateClasses',
	    value: function _dateClasses(date, data) {
	      var _classnames;
	
	      var _props3 = this.props;
	      var today = _props3.today;
	      var activeMonth = _props3.activeMonth;
	
	      return (0, _classnames3['default'])((_classnames = {
	        'is-selected': this._dateSelected(date),
	        'is-today': (0, _dateFnsSrcIs_same_day2['default'])(today, date),
	        'is-current_month': (0, _dateFnsSrcIs_same_month2['default'])(date, activeMonth),
	        'is-prev_month': date.getMonth() !== activeMonth.getMonth() && (0, _dateFnsSrcIs_before2['default'])(date, activeMonth),
	        'is-next_month': date.getMonth() !== activeMonth.getMonth() && (0, _dateFnsSrcIs_after2['default'])(date, activeMonth)
	      }, _defineProperty(_classnames, (0, _dateFnsSrcIs_weekend2['default'])(date) ? 'is-weekend' : 'is-working_day', true), _defineProperty(_classnames, this._dateSelectable(date) ? 'is-selectable' : 'is-not_selectable', true), _classnames));
	    }
	  }, {
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this = this;
	
	      var _props4 = this.props;
	      var date = _props4.date;
	      var activeMonth = _props4.activeMonth;
	      var today = _props4.today;
	      var onDayClick = _props4.onDayClick;
	      var onDayMouseMove = _props4.onDayMouseMove;
	      var selectedMin = _props4.selectedMin;
	      var selectedMax = _props4.selectedMax;
	      var blockClassName = _props4.blockClassName;
	
	      var startDate = (0, _dateFnsSrcStart_of_week2['default'])(date, START_WEEK_WITH_SUNDAY ? 0 : 1);
	      var endDate = (0, _dateFnsSrcEnd_of_week2['default'])(date, START_WEEK_WITH_SUNDAY ? 0 : 1);
	      return (0, _dateFnsSrcEach_day2['default'])(startDate, endDate).map(function (day) {
	        var data = _this.props.data[(0, _dateFnsSrcFormat2['default'])(day, 'YYYY-MM-DD')];
	        var selectable = _this._dateSelectable(day);
	        return _react2['default'].createElement(_day2['default'], {
	          blockClassName: blockClassName,
	          key: day.getTime(),
	          date: day,
	          data: data,
	          className: _this._dateClasses(day, data),
	          today: today,
	          onClick: selectable ? onDayClick : null,
	          onMouseMove: selectable ? onDayMouseMove : null
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.blockClassName + '-week' },
	        this._renderDays()
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      activeMonth: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	      blockClassName: _react2['default'].PropTypes.string,
	      data: _react2['default'].PropTypes.object,
	      date: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	      maxDate: _react2['default'].PropTypes.instanceOf(Date),
	      minDate: _react2['default'].PropTypes.instanceOf(Date),
	      onDayClick: _react2['default'].PropTypes.func.isRequired,
	      onDayMouseMove: _react2['default'].PropTypes.func.isRequired,
	      selectedMax: _react2['default'].PropTypes.instanceOf(Date),
	      selectedMin: _react2['default'].PropTypes.instanceOf(Date),
	      today: _react2['default'].PropTypes.instanceOf(Date).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      data: {},
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return Week;
	})(_react2['default'].Component);
	
	exports['default'] = Week;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	var _dateFnsSrcIs_weekend = __webpack_require__(8);
	
	var _dateFnsSrcIs_weekend2 = _interopRequireDefault(_dateFnsSrcIs_weekend);
	
	var _dateFnsSrcIs_same_day = __webpack_require__(10);
	
	var _dateFnsSrcIs_same_day2 = _interopRequireDefault(_dateFnsSrcIs_same_day);
	
	var _dateFnsSrcFormat = __webpack_require__(12);
	
	var _dateFnsSrcFormat2 = _interopRequireDefault(_dateFnsSrcFormat);
	
	var _dateFnsSrcIs_same_month = __webpack_require__(16);
	
	var _dateFnsSrcIs_same_month2 = _interopRequireDefault(_dateFnsSrcIs_same_month);
	
	var Day = (function (_React$Component) {
	  _inherits(Day, _React$Component);
	
	  function Day() {
	    var _this = this;
	
	    _classCallCheck(this, Day);
	
	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	
	    this._onClick = function (e) {
	      e.preventDefault();
	      var _props = _this.props;
	      var date = _props.date;
	      var onClick = _props.onClick;
	
	      if (onClick) {
	        onClick(date);
	      }
	    };
	
	    this._onMouseMove = function (e) {
	      e.preventDefault();
	      var _props2 = _this.props;
	      var date = _props2.date;
	      var onMouseMove = _props2.onMouseMove;
	
	      if (onMouseMove) {
	        onMouseMove(date);
	      }
	    };
	  }
	
	  _createClass(Day, [{
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var date = _props3.date;
	      var className = _props3.className;
	      var blockClassName = _props3.blockClassName;
	
	      return _react2['default'].createElement(
	        'div',
	        {
	          className: (0, _classnames2['default'])(blockClassName + '-day', className),
	          onClick: this._onClick,
	          onMouseMove: this._onMouseMove
	        },
	        (0, _dateFnsSrcFormat2['default'])(date, 'D')
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      blockClassName: _react2['default'].PropTypes.string,
	      className: _react2['default'].PropTypes.string,
	      data: _react2['default'].PropTypes.object,
	      date: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	      onClick: _react2['default'].PropTypes.func,
	      onMouseMove: _react2['default'].PropTypes.func,
	      today: _react2['default'].PropTypes.instanceOf(Date).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      data: {},
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return Day;
	})(_react2['default'].Component);
	
	exports['default'] = Day;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var BLOCK_CLASS_NAME = 'calendar';
	exports.BLOCK_CLASS_NAME = BLOCK_CLASS_NAME;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Is passed date weekend?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isWeekend = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day == 0 || day == 6
	}
	
	module.exports = isWeekend
	


/***/ },
/* 9 */
/***/ function(module, exports) {

	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// date tokens
	var parseTokenYYYY = /^(\d{4})$/
	var parseTokenYYYYMM = /^(\d{4})-(\d{2})$/
	var parseTokenYYYYDDD = /^(\d{4})-?(\d{3})$/
	var parseTokenYYYYMMDD = /^(\d{4})-?(\d{2})-?(\d{2})$/
	var parseTokenYYYYWww = /^(\d{4})-?W(\d{2})$/
	var parseTokenYYYYWwwD = /^(\d{4})-?W(\d{2})-?(\d{1})$/
	
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
	 * Parses date string representation. It accepts ISO 8601 format as well as
	 * partial implementation.
	 *
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * @param {string} dateStr
	 * @return {date} parsed date in local time zone.
	 */
	var parse = function(dateStr) {
	  if (dateStr instanceof Date) {
	    // Prevent dates to lose milliseconds when passed to new Date() in IE10
	    return new Date(dateStr.getTime())
	  } else if (typeof dateStr !== 'string') {
	    return new Date(dateStr)
	  } 
	
	  var dateStrings = splitDateString(dateStr)
	
	  var date = parseDate(dateStrings.date)
	
	  if (date) {
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(date + time).getTimezoneOffset()
	      offset = new Date(date + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(date + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(dateStr)
	  }
	}
	
	var splitDateString = function(dateStr) {
	  var dateStrings = {}
	  var array = dateStr.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token
	    if (token = parseTokenTimezone.exec(timeString)) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	var parseDate = function(dateString) {
	  var token
	
	  // YYYY
	  if (token = parseTokenYYYY.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    return Date.UTC(year, 0, 1)
	
	  // YYYY-MM
	  } else if (token = parseTokenYYYYMM.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var month = parseInt(token[2], 10) - 1
	    return Date.UTC(year, month, 1)
	
	  // YYYY-DDD or YYYYDDD
	  } else if (token = parseTokenYYYYDDD.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var dayOfYear = parseInt(token[2], 10)
	    return Date.UTC(year, 0, dayOfYear)
	
	  // YYYY-MM-DD or YYYYMMDD
	  } else if (token = parseTokenYYYYMMDD.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var month = parseInt(token[2], 10) - 1
	    var day = parseInt(token[3], 10)
	    return Date.UTC(year, month, day)
	
	  // YYYY-Www or YYYYWww
	  } else if (token = parseTokenYYYYWww.exec(dateString)) {
	    var year = parseInt(token[1])
	    var week = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week)
	
	  // YYYY-Www-D or YYYYWwwD
	  } else if (token = parseTokenYYYYWwwD.exec(dateString)) {
	    var year = parseInt(token[1])
	    var week = parseInt(token[2], 10) - 1
	    var dayOfWeek = parseInt(token[3], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	
	  // invalid ISO-formated date
	  } else {
	    return null
	  }
	}
	
	var parseTime = function(timeString) {
	  var token
	
	  // hh
	  if (token = parseTokenHH.exec(timeString)) {
	    var hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	
	  // hh:mm or hhmm
	  } else if (token = parseTokenHHMM.exec(timeString)) {
	    var hours = parseInt(token[1], 10)
	    var minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	      + minutes * MILLISECONDS_IN_MINUTE
	
	  // hh:mm:ss or hhmmss
	  } else if (token = parseTokenHHMMSS.exec(timeString)) {
	    var hours = parseInt(token[1], 10)
	    var minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	      + minutes * MILLISECONDS_IN_MINUTE
	      + seconds * 1000
	
	  // invalid ISO-formated time
	  } else {
	    return null
	  }
	}
	
	var parseTimezone = function(timezoneString) {
	  var token
	  var offset = 0
	
	  // Z
	  if (token = parseTokenTimezoneZ.exec(timezoneString)) {
	    offset = 0
	
	  // ±hh
	  } else if (token = parseTokenTimezoneHH.exec(timezoneString)) {
	    var absoluteOffset = parseInt(token[2], 10) * 60
	    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset
	
	  // ±hh:mm or ±hhmm
	  } else if (token = parseTokenTimezoneHHMM.exec(timezoneString)) {
	    var absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset
	  }
	
	  return offset
	}
	
	var dayOfISOYear = function(isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(Date.UTC(isoYear, 0, 4))
	  var diff = week * 7 + day + 1 - date.getUTCDay()
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date.getTime()
	}
	
	module.exports = parse
	


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11)
	
	/**
	 * Are passed dates has the same day?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameDay = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
	  var dateRightStartOfDay = startOfDay(dirtyDateRight)
	
	  return(
	    dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime()
	  )
	}
	
	module.exports = isSameDay
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns start of a day for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfDay = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(13)
	var parse = __webpack_require__(9)
	
	var NUMBER_OF_MS_IN_DAY = 864e5
	
	/**
	 * Returns formatted date string in a given format
	 * @param {date|string} date
	 * @param {string} format
	 * @returns {string}
	 */
	var format = function(dirtyDate, format) {
	  var date = parse(dirtyDate)
	
	  if (!format) {
	    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  }
	
	  var formatFunction = makeFormatFunction(format)
	  return formatFunction(date)
	}
	
	var formats = {
	  'M': function() {
	    return this.getMonth() + 1
	  },
	  'MM': function() {
	    return leftZeroFill(this.getMonth() + 1, 2)
	  },
	  'MMM': function() {
	    return locale.monthsShort[this.getMonth()]
	  },
	  'MMMM': function() {
	    return locale.months[this.getMonth()]
	  },
	  'Q': function() {
	    return Math.ceil((this.getMonth() + 1) / 3)
	  },
	  'D': function() {
	    return this.getDate()
	  },
	  'DD': function() {
	    return leftZeroFill(this.getDate(), 2)
	  },
	  'DDD': function() {
	    return getDayOfYear(this)
	  },
	  'DDDD': function() {
	    return leftZeroFill(formats['DDD'].apply(this), 3)
	  },
	  'd': function() {
	    return this.getDay()
	  },
	  'dd': function() {
	    return locale.dayNamesMin[this.getDay()]
	  },
	  'ddd': function() {
	    return locale.dayNamesShort[this.getDay()]
	  },
	  'dddd': function() {
	    return locale.dayNames[this.getDay()]
	  },
	  'E': function() {
	    return this.getDay() + 1
	  },
	  'YY': function() {
	    return String(this.getFullYear()).substr(2)
	  },
	  'YYYY': function() {
	    return this.getFullYear()
	  },
	  'A': function() {
	    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM'
	  },
	  'a': function() {
	    return (this.getHours() / 12) >= 1 ? 'pm' : 'am'
	  },
	  'aa': function() {
	    return (this.getHours() / 12) >= 1 ? 'p.m.' : 'a.m.'
	  },
	  'H': function() {
	    return this.getHours()
	  },
	  'HH': function() {
	    return leftZeroFill(this.getHours(), 2)
	  },
	  'h': function() {
	    var hours = this.getHours()
	    if (hours == 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	  'hh': function() {
	    return leftZeroFill(formats['h'].apply(this), 2)
	  },
	  'm': function() {
	    return this.getMinutes()
	  },
	  'mm': function() {
	    return leftZeroFill(this.getMinutes(), 2)
	  },
	  's': function() {
	    return this.getSeconds()
	  },
	  'ss': function() {
	    return leftZeroFill(this.getSeconds(), 2)
	  },
	  'S': function() {
	    return this.getMilliseconds()
	  },
	  'SS': function() {
	    return leftZeroFill(this.getMilliseconds(), 2)
	  },
	  'SSS': function() {
	    return leftZeroFill(this.getMilliseconds(), 3)
	  }
	}
	
	var ordinalFunctions = ['M', 'D', 'DDD', 'd']
	ordinalFunctions.forEach(function(functionName) {
	  formats[functionName + 'o'] = function() {
	    return locale.ordinal(formats[functionName].apply(this))
	  }
	})
	
	var formattingTokens = Object.keys(formats).sort().reverse()
	var formattingTokensRegexp = new RegExp(
	  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	)
	
	var makeFormatFunction = function(format) {
	  var array = format.match(formattingTokensRegexp), i, length
	
	  for (i = 0, length = array.length; i < length; i++) {
	    if (formats[array[i]]) {
	      array[i] = formats[array[i]]
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function(mom) {
	    var output = ''
	    for (i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i].call(mom, format)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	var removeFormattingTokens = function(input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|\]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	var leftZeroFill = function(number, targetLength) {
	  var output = String(Math.abs(number))
	
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	var locale = {
	  ordinal: function(number) {
	    if (number > 20 || number < 10) {
	      switch (number % 10) {
	        case 1:
	          return number + 'st'
	        case 2:
	          return number + 'nd'
	        case 3:
	          return number + 'rd'
	      }
	    }
	    return number + 'th'
	  },
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	}
	
	module.exports = format
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var startOfYear = __webpack_require__(14)
	var differenceInDays = __webpack_require__(15)
	
	/**
	 * Returns day of year of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (day of year)
	 */
	var getDayOfYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns start of a year for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfYear = function(dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * Returns number of days between dates.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var differenceInDays = function(dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime()
	    - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime()
	    - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInDays
	


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Are passed dates has the same month (and year)?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameMonth = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return(
	    dateLeft.getFullYear() == dateRight.getFullYear()
	    && dateLeft.getMonth() == dateRight.getMonth()
	  )
	}
	
	module.exports = isSameMonth
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns array of dates withtin specified range.
	 * @param {date|string} dirtyStart
	 * @param {date|string} dirtyEnd
	 * @returns {date[]}
	 */
	var eachDay = function(dirtyStart, dirtyEnd) {
	  var endTime = parse(dirtyEnd).getTime()
	  var dates = []
	  var tmpDate
	
	  var curDate = parse(dirtyStart)
	  curDate.setHours(0, 0, 0, 0)
	
	  while (curDate.getTime() <= endTime) {
	    dates.push(new Date(curDate))
	
	    curDate.setDate(curDate.getDate() + 1)
	
	    /**
	     * add additional 5 hours to get next day,
	     * because of possible troubles with daylight savings dates
	     */
	    tmpDate = new Date(curDate.setTime(curDate.getTime() + 5 * 60 * 60 * 1000))
	    tmpDate = new Date(tmpDate.setHours(0, 0, 0, 0))
	    curDate = tmpDate
	  }
	
	  return dates
	}
	
	module.exports = eachDay
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns start of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var startOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt
	
	  date.setHours(0, 0, 0, 0)
	  date.setDate(date.getDate() - diff)
	  return date
	}
	
	module.exports = startOfWeek
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns end of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var endOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt)
	
	  date.setHours(23, 59, 59, 999)
	  date.setDate(date.getDate() + diff)
	  return date
	}
	
	module.exports = endOfWeek
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Is passed date within given range?
	 * @param {date|string} dirtyDate
	 * @param {date|string} dirtyStartDate
	 * @param {date|string} dirtyEndDate
	 * @returns {boolean}
	 *
	 * @example for date within the range
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> true
	 *
	 * @example for date outside of the range
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> false
	 */
	var isWithinRange = function(dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var date = parse(dirtyDate)
	  var time = date.getTime()
	  return(
	    time >= parse(dirtyStartDate).getTime()
	    && time <= parse(dirtyEndDate).getTime()
	  )
	}
	
	module.exports = isWithinRange
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Is first date is before second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 before 11 February 1987
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	var isBefore = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() < date.getTime()
	}
	
	module.exports = isBefore
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Is first date after second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 after 11 February 1987
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> true
	 */
	var isAfter = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() > date.getTime()
	}
	
	module.exports = isAfter
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Are passed dates equal?
	 * @param {date|string} dirtyLeftDate
	 * @param {date|string} dirtyRightDate
	 * @returns {boolean}
	 */
	var isEqual = function(dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = parse(dirtyLeftDate)
	  var dateRight = parse(dirtyRightDate)
	  return dateLeft.getTime() == dateRight.getTime()
	}
	
	module.exports = isEqual
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _consts = __webpack_require__(7);
	
	var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	
	var DaysOfWeek = (function (_React$Component) {
	  _inherits(DaysOfWeek, _React$Component);
	
	  function DaysOfWeek() {
	    _classCallCheck(this, DaysOfWeek);
	
	    _get(Object.getPrototypeOf(DaysOfWeek.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DaysOfWeek, [{
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: blockClassName + '-days_of_week' },
	        daysOfWeek.map(function (day) {
	          return _react2['default'].createElement(
	            'div',
	            {
	              className: blockClassName + '-days_of_week_day',
	              key: day
	            },
	            day
	          );
	        })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      blockClassName: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return DaysOfWeek;
	})(_react2['default'].Component);
	
	exports['default'] = DaysOfWeek;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns start of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  date.setDate(1)
	  return date
	}
	
	module.exports = startOfMonth
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns end of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setHours(23, 59, 59, 999)
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  return date
	}
	
	module.exports = endOfMonth
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var getTimeSinceMidnight = __webpack_require__(28)
	
	/**
	 * Adds specified number of days to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addDays = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setDate(date.getDate() + amount)
	  date.setHours(0, 0, 0, time)
	  return date
	}
	
	module.exports = addDays
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * Returns time since midnight in milliseconds.
	 * @param {date|string} dirtyDate
	 * @returns {number}
	 */
	var getTimeSinceMidnight = function(dirtyDate) {
	  var date = parse(dirtyDate)
	
	  var hours = date.getHours()
	  var minutes = date.getMinutes()
	  var seconds = date.getSeconds()
	  var milliseconds = date.getMilliseconds()
	  
	  var time = hours * MILLISECONDS_IN_HOUR
	    + minutes * MILLISECONDS_IN_MINUTE
	    + seconds * 1000 + milliseconds
	
	  return time
	}
	
	module.exports = getTimeSinceMidnight
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _header_button = __webpack_require__(30);
	
	var _header_button2 = _interopRequireDefault(_header_button);
	
	var _consts = __webpack_require__(7);
	
	var _dateFnsSrcAdd_months = __webpack_require__(31);
	
	var _dateFnsSrcAdd_months2 = _interopRequireDefault(_dateFnsSrcAdd_months);
	
	var _dateFnsSrcIs_before = __webpack_require__(21);
	
	var _dateFnsSrcIs_before2 = _interopRequireDefault(_dateFnsSrcIs_before);
	
	var _dateFnsSrcIs_after = __webpack_require__(22);
	
	var _dateFnsSrcIs_after2 = _interopRequireDefault(_dateFnsSrcIs_after);
	
	var _dateFnsSrcStart_of_month = __webpack_require__(25);
	
	var _dateFnsSrcStart_of_month2 = _interopRequireDefault(_dateFnsSrcStart_of_month);
	
	var _dateFnsSrcFormat = __webpack_require__(12);
	
	var _dateFnsSrcFormat2 = _interopRequireDefault(_dateFnsSrcFormat);
	
	var MonthHeader = (function (_React$Component) {
	  _inherits(MonthHeader, _React$Component);
	
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    _get(Object.getPrototypeOf(MonthHeader.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(offset) {
	      var _props = this.props;
	      var onMonthChange = _props.onMonthChange;
	      var activeMonth = _props.activeMonth;
	
	      onMonthChange((0, _dateFnsSrcAdd_months2['default'])(activeMonth, parseInt(offset)));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var activeMonth = _props2.activeMonth;
	      var minDate = _props2.minDate;
	      var maxDate = _props2.maxDate;
	      var blockClassName = _props2.blockClassName;
	
	      var prevEnabled = minDate ? (0, _dateFnsSrcIs_before2['default'])((0, _dateFnsSrcStart_of_month2['default'])(minDate), (0, _dateFnsSrcStart_of_month2['default'])(activeMonth)) : true;
	      var nextEnabled = maxDate ? (0, _dateFnsSrcIs_after2['default'])((0, _dateFnsSrcStart_of_month2['default'])(maxDate), (0, _dateFnsSrcStart_of_month2['default'])(activeMonth)) : true;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: blockClassName + '-month_header' },
	        _react2['default'].createElement(_header_button2['default'], {
	          type: 'prev',
	          enabled: prevEnabled,
	          onClick: this._switchMonth.bind(this, -1),
	          blockClassName: blockClassName
	        }),
	        _react2['default'].createElement(
	          'div',
	          { className: blockClassName + '-month_header_title' },
	          (0, _dateFnsSrcFormat2['default'])(activeMonth, 'MMMM YYYY')
	        ),
	        _react2['default'].createElement(_header_button2['default'], {
	          type: 'next',
	          enabled: nextEnabled,
	          onClick: this._switchMonth.bind(this, 1),
	          blockClassName: blockClassName
	        })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      activeMonth: _react2['default'].PropTypes.instanceOf(Date).isRequired,
	      blockClassName: _react2['default'].PropTypes.string,
	      maxDate: _react2['default'].PropTypes.instanceOf(Date),
	      minDate: _react2['default'].PropTypes.instanceOf(Date),
	      onMonthChange: _react2['default'].PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return MonthHeader;
	})(_react2['default'].Component);
	
	exports['default'] = MonthHeader;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	var HeaderButton = (function (_React$Component) {
	  _inherits(HeaderButton, _React$Component);
	
	  function HeaderButton() {
	    var _this = this;
	
	    _classCallCheck(this, HeaderButton);
	
	    _get(Object.getPrototypeOf(HeaderButton.prototype), 'constructor', this).apply(this, arguments);
	
	    this._onClick = function (e) {
	      var _props = _this.props;
	      var enabled = _props.enabled;
	      var onClick = _props.onClick;
	
	      if (enabled) {
	        onClick(e);
	      }
	    };
	  }
	
	  _createClass(HeaderButton, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var blockClassName = _props2.blockClassName;
	      var type = _props2.type;
	      var enabled = _props2.enabled;
	
	      return _react2['default'].createElement('a', {
	        href: '#',
	        className: (0, _classnames2['default'])(blockClassName + '-header_button', 'is-' + type, {
	          'is-disabled': !enabled
	        }),
	        onClick: this._onClick
	      });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      blockClassName: _react2['default'].PropTypes.string,
	      enabled: _react2['default'].PropTypes.bool,
	      offset: _react2['default'].PropTypes.number,
	      onClick: _react2['default'].PropTypes.func.isRequired,
	      type: _react2['default'].PropTypes.oneOf(['prev', 'next']).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      blockClassName: _consts.BLOCK_CLASS_NAME
	    },
	    enumerable: true
	  }]);
	
	  return HeaderButton;
	})(_react2['default'].Component);
	
	exports['default'] = HeaderButton;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var getTimeSinceMidnight = __webpack_require__(28)
	var getDaysInMonth = __webpack_require__(32)
	
	/**
	 * Adds specified number of months to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addMonths = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  var desiredMonth = date.getMonth() + amount
	  var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1))
	
	  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
	  date.setHours(0, 0, 0, time)
	  return date
	}
	
	module.exports = addMonths
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * Returns number of days of month of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (days)
	 */
	var getDaysInMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var monthIndex = date.getMonth()
	  return new Date(year, monthIndex + 1, 0).getDate()
	}
	
	module.exports = getDaysInMonth
	


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMDBkZThjZjk5NDA3NzRjODQ4MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2RheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9pc193ZWVrZW5kLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL2lzX3NhbWVfZGF5LmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX2RheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvZ2V0X2RheV9vZl95ZWFyLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX3llYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvZGlmZmVyZW5jZV9pbl9kYXlzLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL2lzX3NhbWVfbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvZWFjaF9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvc3RhcnRfb2Zfd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9lbmRfb2Zfd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9pc193aXRoaW5fcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvaXNfYmVmb3JlLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL2lzX2FmdGVyLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL2lzX2VxdWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXlzX29mX3dlZWsuanN4Iiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX21vbnRoLmpzIiwid2VicGFjazovLy8uL34vZGF0ZS1mbnMvc3JjL2VuZF9vZl9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9hZGRfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9nZXRfdGltZV9zaW5jZV9taWRuaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvaGVhZGVyX2J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9kYXRlLWZucy9zcmMvYWRkX21vbnRocy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RhdGUtZm5zL3NyYy9nZXRfZGF5c19pbl9tb250aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLFlBQVcsWUFBWTtBQUN2QixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLFlBQVk7QUFDdkIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLFlBQVk7QUFDdkIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLFlBQVk7QUFDdkIsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLFlBQVcsWUFBWTtBQUN2QixZQUFXLFlBQVk7QUFDdkIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM5QkE7O0FBRUE7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cUJBQWMsMEJBQWtCO01BQ2pDOzs7O1VBWGtCLFlBQVk7SUFBUyxtQkFBTSxTQUFTOztzQkFBcEMsWUFBWTs7Ozs7OztBQ0xqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLE9BQU87QUFDbEIsY0FBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyMDBkZThjZjk5NDA3NzRjODQ4M1xuICoqLyIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhcidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9udGggZnJvbSAnLi9tb250aCdcbmltcG9ydCBNb250aEhlYWRlciBmcm9tICcuL21vbnRoX2hlYWRlcidcbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5cbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX21vbnRoJ1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9zcmMvaXNfc2FtZV9kYXknXG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX3NhbWVfbW9udGgnXG5cbmNvbnN0IFNJTkdMRV9NT0RFID0gJ3NpbmdsZSdcbmNvbnN0IFJBTkdFX01PREUgPSAncmFuZ2UnXG5cbi8vIFRPRE86IHJlcGxhY2UgdGhpcyB0aGlzIHdpdGggZnVuY3Rpb24gZnJvbSBkYXRlLWZucyBhZnRlciBpdCB3aWxsIGJlIGRvbmVcbmNvbnN0IGlzVmFsaWQgPSBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiAhaXNOYU4oKG5ldyBEYXRlKGRhdGUpKS5nZXRUaW1lKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmVNb250aDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgYmxvY2tDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXhEYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBtaW5EYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1NJTkdMRV9NT0RFLCBSQU5HRV9NT0RFXSksXG4gICAgb25Nb250aENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gICAgICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5Qcm9ncmVzczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgXSksXG4gICAgdG9kYXk6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGU6IFNJTkdMRV9NT0RFLFxuICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmVNb250aDogdGhpcy5faW5pdGlhbE1vbnRoKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVNb250aCAmJiAhaXNTYW1lTW9udGgobmV4dFByb3BzLmFjdGl2ZU1vbnRoLCB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTW9udGg6IHN0YXJ0T2ZNb250aChuZXh0UHJvcHMuYWN0aXZlTW9udGgpfSlcbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbE1vbnRoKCkge1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgYWN0aXZlTW9udGgsIHRvZGF5LCBtb2RlfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc1ZhbGlkKGFjdGl2ZU1vbnRoKSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZU1vbnRoXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IChtb2RlID09PSBTSU5HTEVfTU9ERSA/IHNlbGVjdGVkIDogc2VsZWN0ZWQuc3RhcnQpXG4gICAgICAgIGlmIChpc1ZhbGlkKHNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgIHJldHVybiBzdGFydE9mTW9udGgoc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0T2ZNb250aCh0b2RheSlcbiAgfVxuXG4gIF9zd2l0Y2hNb250aCA9IChkYXRlKSA9PiB7XG4gICAgY29uc3Qge29uTW9udGhDaGFuZ2V9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2Ygb25Nb250aENoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25Nb250aENoYW5nZShkYXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlTW9udGg6IGRhdGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2FjdGl2ZU1vbnRoKCkge1xuICAgIGNvbnN0IHtvbk1vbnRoQ2hhbmdlLCBhY3RpdmVNb250aH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uTW9udGhDaGFuZ2UpIHtcbiAgICAgIHJldHVybiBhY3RpdmVNb250aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVNb250aFxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qge21vZGUsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdGFydCA9IChtb2RlID09PSBTSU5HTEVfTU9ERSA/IHNlbGVjdGVkIDogKHNlbGVjdGVkICYmIHNlbGVjdGVkLnN0YXJ0KSlcbiAgICBjb25zdCBlbmQgPSAobW9kZSA9PT0gU0lOR0xFX01PREUgPyBzZWxlY3RlZCA6IChzZWxlY3RlZCAmJiBzZWxlY3RlZC5lbmQpKVxuICAgIGlmIChpc1ZhbGlkKHN0YXJ0KSAmJiBpc1ZhbGlkKGVuZCkpIHtcbiAgICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgIGVuZDogbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2VkID0gKHNlbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kLCBpblByb2dyZXNzfSA9IHNlbGVjdGlvblxuICAgIGNvbnN0IHttb2RlLCBvblNlbGVjdH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICBvblNlbGVjdChtb2RlID09PSBTSU5HTEVfTU9ERSA/IHN0YXJ0IDogc2VsZWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bW9kZSwgZGF0YSwgbWluRGF0ZSwgbWF4RGF0ZSwgdG9kYXksIGJsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhY3RpdmVNb250aCA9IGlzVmFsaWQodGhpcy5fYWN0aXZlTW9udGgoKSkgPyB0aGlzLl9hY3RpdmVNb250aCgpIDogc3RhcnRPZk1vbnRoKHRvZGF5KVxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuX3NlbGVjdGlvbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfT5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgcmVmPSdoZWFkZXInXG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9hY3RpdmVNb250aCgpfVxuICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e3RoaXMuX3N3aXRjaE1vbnRofVxuICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lPXt0aGlzLnByb3BzLmJsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8TW9udGhcbiAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIHRvZGF5PXt0b2RheX1cbiAgICAgICAgICByZWY9J21vbnRoJ1xuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9hY3RpdmVNb250aCgpfVxuICAgICAgICAgIHNlbGVjdGVkTWluPXtzZWxlY3Rpb24uc3RhcnR9XG4gICAgICAgICAgc2VsZWN0ZWRNYXg9e3NlbGVjdGlvbi5lbmR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NlbGVjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e3RoaXMucHJvcHMuYmxvY2tDbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnXG5pbXBvcnQgRGF5c09mV2VlayBmcm9tICcuL2RheXNfb2Zfd2VlaydcbmltcG9ydCB7QkxPQ0tfQ0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdHMnXG5cbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zcmMvc3RhcnRfb2Zfd2VlaydcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3JjL2VuZF9vZl93ZWVrJ1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zcmMvc3RhcnRfb2ZfbW9udGgnXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9zcmMvZW5kX29mX21vbnRoJ1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL3NyYy9pc19iZWZvcmUnXG5pbXBvcnQgaXNBZnRlciBmcm9tICdkYXRlLWZucy9zcmMvaXNfYWZ0ZXInXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdkYXRlLWZucy9zcmMvaXNfZXF1YWwnXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9zcmMvYWRkX2RheXMnXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL3NyYy9pc19zYW1lX2RheSdcblxuY29uc3QgU0lOR0xFX01PREUgPSAnc2luZ2xlJ1xuY29uc3QgUkFOR0VfTU9ERSA9ICdyYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgbWF4RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWluRGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbW9kZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkTWF4OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBzZWxlY3RlZE1pbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgdG9kYXk6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIF9wdXNoVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgc3RhcnQ6IGlzQmVmb3JlKHRoaXMuX3NlbGVjdGlvblN0YXJ0LCB0aGlzLl9zZWxlY3Rpb25FbmQpID8gdGhpcy5fc2VsZWN0aW9uU3RhcnQgOiB0aGlzLl9zZWxlY3Rpb25FbmQsXG4gICAgICBlbmQ6IGlzQWZ0ZXIodGhpcy5fc2VsZWN0aW9uU3RhcnQsIHRoaXMuX3NlbGVjdGlvbkVuZCkgPyB0aGlzLl9zZWxlY3Rpb25TdGFydCA6IHRoaXMuX3NlbGVjdGlvbkVuZCxcbiAgICAgIGluUHJvZ3Jlc3M6IHRoaXMuX3NlbGVjdGlvbkluUHJvZ3Jlc3NcbiAgICB9KVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlID0gKGRhdGUpID0+IHtcbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgaWYgKCFpc0VxdWFsKGRhdGUsIHRoaXMuX3NlbGVjdGlvbkVuZCkpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uRW5kID0gZGF0ZVxuICAgICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25EYXlDbGljayA9IChkYXRlKSA9PiB7XG4gICAgY29uc3Qge21vZGV9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChtb2RlID09PSBSQU5HRV9NT0RFKSB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25JblByb2dyZXNzID0gZmFsc2VcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uRW5kID0gZGF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uSW5Qcm9ncmVzcyA9IHRydWVcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uU3RhcnQgPSBkYXRlXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkVuZCA9IGRhdGVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFNJTkdMRV9NT0RFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25JblByb2dyZXNzID0gZmFsc2VcbiAgICAgIHRoaXMuX3NlbGVjdGlvblN0YXJ0ID0gZGF0ZVxuICAgICAgdGhpcy5fc2VsZWN0aW9uRW5kID0gZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gIH1cblxuICBfcmVuZGVyV2Vla3MoKSB7XG4gICAgY29uc3Qge2RhdGEsIG1pbkRhdGUsIG1heERhdGUsIHNlbGVjdGVkTWluLCBzZWxlY3RlZE1heCwgYWN0aXZlTW9udGgsIHRvZGF5LCBibG9ja0NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB3ZWVrcyA9IFtdXG4gICAgbGV0IGRhdGUgPSBzdGFydE9mV2VlayhzdGFydE9mTW9udGgoYWN0aXZlTW9udGgpLCAxKVxuICAgIGNvbnN0IGVuZERhdGUgPSBlbmRPZldlZWsoZW5kT2ZNb250aChhY3RpdmVNb250aCksIDEpXG4gICAgd2hpbGUgKGlzQmVmb3JlKGRhdGUsIGVuZERhdGUpIHx8IGlzU2FtZURheShkYXRlLCBlbmREYXRlKSkge1xuICAgICAgd2Vla3MucHVzaChkYXRlKVxuICAgICAgZGF0ZSA9IGFkZERheXMoZGF0ZSwgNylcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vla1xuICAgICAgICAgIGtleT17d2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgZGF0ZT17d2Vla31cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBzZWxlY3RlZE1pbj17c2VsZWN0ZWRNaW59XG4gICAgICAgICAgc2VsZWN0ZWRNYXg9e3NlbGVjdGVkTWF4fVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXthY3RpdmVNb250aH1cbiAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLl9vbkRheUNsaWNrfVxuICAgICAgICAgIG9uRGF5TW91c2VNb3ZlPXt0aGlzLl9vbkRheU1vdXNlTW92ZX1cbiAgICAgICAgICB0b2RheT17dG9kYXl9XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jsb2NrQ2xhc3NOYW1lfS1tb250aGB9PlxuICAgICAgICA8RGF5c09mV2VlayBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9IC8+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJXZWVrcygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgRGF5IGZyb20gJy4vZGF5J1xuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuaW1wb3J0IGVhY2hEYXkgZnJvbSAnZGF0ZS1mbnMvc3JjL2VhY2hfZGF5J1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSAnZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX2RheSdcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zcmMvc3RhcnRfb2Zfd2VlaydcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3JjL2VuZF9vZl93ZWVrJ1xuaW1wb3J0IGlzV2l0aGluUmFuZ2UgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX3dpdGhpbl9yYW5nZSdcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvc3JjL2Zvcm1hdCdcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9zcmMvaXNfYmVmb3JlJ1xuaW1wb3J0IGlzQWZ0ZXIgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX2FmdGVyJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX2VxdWFsJ1xuaW1wb3J0IGlzV2Vla2VuZCBmcm9tICdkYXRlLWZucy9zcmMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX3NhbWVfZGF5J1xuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL3NyYy9pc19zYW1lX21vbnRoJ1xuXG5jb25zdCBTVEFSVF9XRUVLX1dJVEhfU1VOREFZID0gZmFsc2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlTW9udGg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gICAgYmxvY2tDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIG1heERhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1pbkRhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG9uRGF5Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25EYXlNb3VzZU1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRNYXg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIHNlbGVjdGVkTWluOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICB0b2RheTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX2RhdGVTZWxlY3RhYmxlKGRhdGUpIHtcbiAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG1pbkRhdGUgJiYgbWF4RGF0ZSkge1xuICAgICAgcmV0dXJuIGlzV2l0aGluUmFuZ2UoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSlcbiAgICB9IGVsc2UgaWYgKG1pbkRhdGUgJiYgIW1heERhdGUpIHtcbiAgICAgIHJldHVybiBpc0FmdGVyKGRhdGUsIG1pbkRhdGUpIHx8IGlzRXF1YWwoZGF0ZSwgbWluRGF0ZSlcbiAgICB9IGVsc2UgaWYgKG1heERhdGUgJiYgIW1pbkRhdGUpIHtcbiAgICAgIHJldHVybiBpc0JlZm9yZShkYXRlLCBtYXhEYXRlKSB8fCBpc0VxdWFsKGRhdGUsIG1heERhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgX2RhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgY29uc3Qge3NlbGVjdGVkTWluLCBzZWxlY3RlZE1heH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChzZWxlY3RlZE1pbiAmJiBzZWxlY3RlZE1heClcbiAgICAgICYmIGlzV2l0aGluUmFuZ2UoXG4gICAgICAgIHN0YXJ0T2ZEYXkoZGF0ZSksXG4gICAgICAgIHN0YXJ0T2ZEYXkoc2VsZWN0ZWRNaW4pLFxuICAgICAgICBzdGFydE9mRGF5KHNlbGVjdGVkTWF4KVxuICAgICAgKVxuICB9XG5cbiAgX2RhdGVDbGFzc2VzKGRhdGUsIGRhdGEpIHtcbiAgICBjb25zdCB7dG9kYXksIGFjdGl2ZU1vbnRofSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gY2xhc3NuYW1lcyh7XG4gICAgICAnaXMtc2VsZWN0ZWQnOiB0aGlzLl9kYXRlU2VsZWN0ZWQoZGF0ZSksXG4gICAgICAnaXMtdG9kYXknOiBpc1NhbWVEYXkodG9kYXksIGRhdGUpLFxuICAgICAgJ2lzLWN1cnJlbnRfbW9udGgnOiBpc1NhbWVNb250aChkYXRlLCBhY3RpdmVNb250aCksXG4gICAgICAnaXMtcHJldl9tb250aCc6IChkYXRlLmdldE1vbnRoKCkgIT09IGFjdGl2ZU1vbnRoLmdldE1vbnRoKCkgJiYgaXNCZWZvcmUoZGF0ZSwgYWN0aXZlTW9udGgpKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogKGRhdGUuZ2V0TW9udGgoKSAhPT0gYWN0aXZlTW9udGguZ2V0TW9udGgoKSAmJiBpc0FmdGVyKGRhdGUsIGFjdGl2ZU1vbnRoKSksXG4gICAgICBbaXNXZWVrZW5kKGRhdGUpID8gJ2lzLXdlZWtlbmQnIDogJ2lzLXdvcmtpbmdfZGF5J106IHRydWUsXG4gICAgICBbdGhpcy5fZGF0ZVNlbGVjdGFibGUoZGF0ZSkgPyAnaXMtc2VsZWN0YWJsZScgOiAnaXMtbm90X3NlbGVjdGFibGUnXTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBfcmVuZGVyRGF5cygpIHtcbiAgICBjb25zdCB7ZGF0ZSwgYWN0aXZlTW9udGgsIHRvZGF5LCBvbkRheUNsaWNrLCBvbkRheU1vdXNlTW92ZSwgc2VsZWN0ZWRNaW4sIHNlbGVjdGVkTWF4LCBibG9ja0NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnRPZldlZWsoZGF0ZSwgU1RBUlRfV0VFS19XSVRIX1NVTkRBWSA/IDAgOiAxKVxuICAgIGNvbnN0IGVuZERhdGUgPSBlbmRPZldlZWsoZGF0ZSwgU1RBUlRfV0VFS19XSVRIX1NVTkRBWSA/IDAgOiAxKVxuICAgIHJldHVybiBlYWNoRGF5KHN0YXJ0RGF0ZSwgZW5kRGF0ZSkubWFwKChkYXkpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFbZm9ybWF0KGRheSwgJ1lZWVktTU0tREQnKV1cbiAgICAgIGNvbnN0IHNlbGVjdGFibGUgPSB0aGlzLl9kYXRlU2VsZWN0YWJsZShkYXkpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF5XG4gICAgICAgICAgYmxvY2tDbGFzc05hbWU9e2Jsb2NrQ2xhc3NOYW1lfVxuICAgICAgICAgIGtleT17ZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICBkYXRlPXtkYXl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuX2RhdGVDbGFzc2VzKGRheSwgZGF0YSl9XG4gICAgICAgICAgdG9kYXk9e3RvZGF5fVxuICAgICAgICAgIG9uQ2xpY2s9e3NlbGVjdGFibGUgPyBvbkRheUNsaWNrIDogbnVsbH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17c2VsZWN0YWJsZSA/IG9uRGF5TW91c2VNb3ZlIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5ibG9ja0NsYXNzTmFtZX0td2Vla2B9PlxuICAgICAgICB7dGhpcy5fcmVuZGVyRGF5cygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuaW1wb3J0IGlzV2Vla2VuZCBmcm9tICdkYXRlLWZucy9zcmMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX3NhbWVfZGF5J1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSAnZGF0ZS1mbnMvc3JjL2Zvcm1hdCdcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9zcmMvaXNfc2FtZV9tb250aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VNb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICB0b2RheTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX29uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHtkYXRlLCBvbkNsaWNrfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhkYXRlKVxuICAgIH1cbiAgfVxuXG4gIF9vbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qge2RhdGUsIG9uTW91c2VNb3ZlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25Nb3VzZU1vdmUpIHtcbiAgICAgIG9uTW91c2VNb3ZlKGRhdGUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRlLCBjbGFzc05hbWUsIGJsb2NrQ2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoYCR7YmxvY2tDbGFzc05hbWV9LWRheWAsIGNsYXNzTmFtZSl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2t9XG4gICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLl9vbk1vdXNlTW92ZX1cbiAgICAgID5cbiAgICAgICAge2Zvcm1hdERhdGUoZGF0ZSwgJ0QnKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvZGF5LmpzeFxuICoqLyIsImV4cG9ydCBjb25zdCBCTE9DS19DTEFTU19OQU1FID0gJ2NhbGVuZGFyJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvY29uc3RzLmpzXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogSXMgcGFzc2VkIGRhdGUgd2Vla2VuZD9cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBpc1dlZWtlbmQgPSBmdW5jdGlvbihkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG4gIHJldHVybiBkYXkgPT0gMCB8fCBkYXkgPT0gNlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzV2Vla2VuZFxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvaXNfd2Vla2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDBcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDBcblxudmFyIHBhcnNlVG9rZW5EYXRlVGltZURlbGltZXRlciA9IC9bVCBdL1xudmFyIHBhcnNlVG9rZW5QbGFpblRpbWUgPSAvOi9cblxuLy8gZGF0ZSB0b2tlbnNcbnZhciBwYXJzZVRva2VuWVlZWSA9IC9eKFxcZHs0fSkkL1xudmFyIHBhcnNlVG9rZW5ZWVlZTU0gPSAvXihcXGR7NH0pLShcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuWVlZWURERCA9IC9eKFxcZHs0fSktPyhcXGR7M30pJC9cbnZhciBwYXJzZVRva2VuWVlZWU1NREQgPSAvXihcXGR7NH0pLT8oXFxkezJ9KS0/KFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5ZWVlZV3d3ID0gL14oXFxkezR9KS0/VyhcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuWVlZWVd3d0QgPSAvXihcXGR7NH0pLT9XKFxcZHsyfSktPyhcXGR7MX0pJC9cblxuLy8gdGltZSB0b2tlbnNcbnZhciBwYXJzZVRva2VuSEggPSAvXihcXGR7Mn0oWy4sXVxcZCopPykkL1xudmFyIHBhcnNlVG9rZW5ISE1NID0gL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvXG52YXIgcGFyc2VUb2tlbkhITU1TUyA9IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC9cblxuLy8gdGltZXpvbmUgdG9rZW5zXG52YXIgcGFyc2VUb2tlblRpbWV6b25lID0gLyhbWistXS4qKSQvXG52YXIgcGFyc2VUb2tlblRpbWV6b25lWiA9IC9eKFopJC9cbnZhciBwYXJzZVRva2VuVGltZXpvbmVISCA9IC9eKFsrLV0pKFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5UaW1lem9uZUhITU0gPSAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG5cbi8qKlxuICogUGFyc2VzIGRhdGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiBJdCBhY2NlcHRzIElTTyA4NjAxIGZvcm1hdCBhcyB3ZWxsIGFzXG4gKiBwYXJ0aWFsIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJcbiAqIEByZXR1cm4ge2RhdGV9IHBhcnNlZCBkYXRlIGluIGxvY2FsIHRpbWUgem9uZS5cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24oZGF0ZVN0cikge1xuICBpZiAoZGF0ZVN0ciBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAvLyBQcmV2ZW50IGRhdGVzIHRvIGxvc2UgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyLmdldFRpbWUoKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZVN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cilcbiAgfSBcblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cilcblxuICB2YXIgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlU3RyaW5ncy5kYXRlKVxuXG4gIGlmIChkYXRlKSB7XG4gICAgdmFyIHRpbWUgPSAwXG4gICAgdmFyIG9mZnNldFxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZShkYXRlICsgdGltZSkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgb2Zmc2V0ID0gbmV3IERhdGUoZGF0ZSArIHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cilcbiAgfVxufVxuXG52YXIgc3BsaXREYXRlU3RyaW5nID0gZnVuY3Rpb24oZGF0ZVN0cikge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fVxuICB2YXIgYXJyYXkgPSBkYXRlU3RyLnNwbGl0KHBhcnNlVG9rZW5EYXRlVGltZURlbGltZXRlcilcbiAgdmFyIHRpbWVTdHJpbmdcblxuICBpZiAocGFyc2VUb2tlblBsYWluVGltZS50ZXN0KGFycmF5WzBdKSkge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBudWxsXG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdXG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdXG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdXG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlblxuICAgIGlmICh0b2tlbiA9IHBhcnNlVG9rZW5UaW1lem9uZS5leGVjKHRpbWVTdHJpbmcpKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJylcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3Ncbn1cblxudmFyIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uKGRhdGVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG5cbiAgLy8gWVlZWVxuICBpZiAodG9rZW4gPSBwYXJzZVRva2VuWVlZWS5leGVjKGRhdGVTdHJpbmcpKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgcmV0dXJuIERhdGUuVVRDKHllYXIsIDAsIDEpXG5cbiAgLy8gWVlZWS1NTVxuICB9IGVsc2UgaWYgKHRva2VuID0gcGFyc2VUb2tlbllZWVlNTS5leGVjKGRhdGVTdHJpbmcpKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgdmFyIG1vbnRoID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAtIDFcbiAgICByZXR1cm4gRGF0ZS5VVEMoeWVhciwgbW9udGgsIDEpXG5cbiAgLy8gWVlZWS1EREQgb3IgWVlZWURERFxuICB9IGVsc2UgaWYgKHRva2VuID0gcGFyc2VUb2tlbllZWVlEREQuZXhlYyhkYXRlU3RyaW5nKSkge1xuICAgIHZhciB5ZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIHZhciBkYXlPZlllYXIgPSBwYXJzZUludCh0b2tlblsyXSwgMTApXG4gICAgcmV0dXJuIERhdGUuVVRDKHllYXIsIDAsIGRheU9mWWVhcilcblxuICAvLyBZWVlZLU1NLUREIG9yIFlZWVlNTUREXG4gIH0gZWxzZSBpZiAodG9rZW4gPSBwYXJzZVRva2VuWVlZWU1NREQuZXhlYyhkYXRlU3RyaW5nKSkge1xuICAgIHZhciB5ZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIHZhciBtb250aCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgdmFyIGRheSA9IHBhcnNlSW50KHRva2VuWzNdLCAxMClcbiAgICByZXR1cm4gRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSlcblxuICAvLyBZWVlZLVd3dyBvciBZWVlZV3d3XG4gIH0gZWxzZSBpZiAodG9rZW4gPSBwYXJzZVRva2VuWVlZWVd3dy5leGVjKGRhdGVTdHJpbmcpKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh0b2tlblsxXSlcbiAgICB2YXIgd2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrKVxuXG4gIC8vIFlZWVktV3d3LUQgb3IgWVlZWVd3d0RcbiAgfSBlbHNlIGlmICh0b2tlbiA9IHBhcnNlVG9rZW5ZWVlZV3d3RC5leGVjKGRhdGVTdHJpbmcpKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh0b2tlblsxXSlcbiAgICB2YXIgd2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgdmFyIGRheU9mV2VlayA9IHBhcnNlSW50KHRva2VuWzNdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG5cbiAgLy8gaW52YWxpZCBJU08tZm9ybWF0ZWQgZGF0ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudmFyIHBhcnNlVGltZSA9IGZ1bmN0aW9uKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG5cbiAgLy8gaGhcbiAgaWYgKHRva2VuID0gcGFyc2VUb2tlbkhILmV4ZWModGltZVN0cmluZykpIHtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuXG4gIC8vIGhoOm1tIG9yIGhobW1cbiAgfSBlbHNlIGlmICh0b2tlbiA9IHBhcnNlVG9rZW5ISE1NLmV4ZWModGltZVN0cmluZykpIHtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUZsb2F0KHRva2VuWzJdLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuICAgICAgKyBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuXG4gIC8vIGhoOm1tOnNzIG9yIGhobW1zc1xuICB9IGVsc2UgaWYgKHRva2VuID0gcGFyc2VUb2tlbkhITU1TUy5leGVjKHRpbWVTdHJpbmcpKSB7XG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKVxuICAgIHZhciBzZWNvbmRzID0gcGFyc2VGbG9hdCh0b2tlblszXS5yZXBsYWNlKCcsJywgJy4nKSlcbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVJcbiAgICAgICsgbWludXRlcyAqIE1JTExJU0VDT05EU19JTl9NSU5VVEVcbiAgICAgICsgc2Vjb25kcyAqIDEwMDBcblxuICAvLyBpbnZhbGlkIElTTy1mb3JtYXRlZCB0aW1lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG52YXIgcGFyc2VUaW1lem9uZSA9IGZ1bmN0aW9uKHRpbWV6b25lU3RyaW5nKSB7XG4gIHZhciB0b2tlblxuICB2YXIgb2Zmc2V0ID0gMFxuXG4gIC8vIFpcbiAgaWYgKHRva2VuID0gcGFyc2VUb2tlblRpbWV6b25lWi5leGVjKHRpbWV6b25lU3RyaW5nKSkge1xuICAgIG9mZnNldCA9IDBcblxuICAvLyDCsWhoXG4gIH0gZWxzZSBpZiAodG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISC5leGVjKHRpbWV6b25lU3RyaW5nKSkge1xuICAgIHZhciBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MFxuICAgIG9mZnNldCA9ICh0b2tlblsxXSA9PSAnKycpID8gLSBhYnNvbHV0ZU9mZnNldCA6IGFic29sdXRlT2Zmc2V0XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgfSBlbHNlIGlmICh0b2tlbiA9IHBhcnNlVG9rZW5UaW1lem9uZUhITU0uZXhlYyh0aW1lem9uZVN0cmluZykpIHtcbiAgICB2YXIgYWJzb2x1dGVPZmZzZXQgPSBwYXJzZUludCh0b2tlblsyXSwgMTApICogNjAgKyBwYXJzZUludCh0b2tlblszXSwgMTApXG4gICAgb2Zmc2V0ID0gKHRva2VuWzFdID09ICcrJykgPyAtIGFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXRcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRcbn1cblxudmFyIGRheU9mSVNPWWVhciA9IGZ1bmN0aW9uKGlzb1llYXIsIHdlZWssIGRheSkge1xuICB3ZWVrID0gd2VlayB8fCAwXG4gIGRheSA9IGRheSB8fCAwXG4gIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoaXNvWWVhciwgMCwgNCkpXG4gIHZhciBkaWZmID0gd2VlayAqIDcgKyBkYXkgKyAxIC0gZGF0ZS5nZXRVVENEYXkoKVxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKVxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvcGFyc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4vc3RhcnRfb2ZfZGF5JylcblxuLyoqXG4gKiBBcmUgcGFzc2VkIGRhdGVzIGhhcyB0aGUgc2FtZSBkYXk/XG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVMZWZ0XG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVSaWdodFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBpc1NhbWVEYXkgPSBmdW5jdGlvbihkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuKFxuICAgIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKClcbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2FtZURheVxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvaXNfc2FtZV9kYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogUmV0dXJucyBzdGFydCBvZiBhIGRheSBmb3IgZ2l2ZW4gZGF0ZS4gRGF0ZSB3aWxsIGJlIGluIGxvY2FsIHRpbWV6b25lLlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlXG4gKiBAcmV0dXJucyB7ZGF0ZX1cbiAqL1xudmFyIHN0YXJ0T2ZEYXkgPSBmdW5jdGlvbihkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mRGF5XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9zdGFydF9vZl9kYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldERheU9mWWVhciA9IHJlcXVpcmUoJy4vZ2V0X2RheV9vZl95ZWFyJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG52YXIgTlVNQkVSX09GX01TX0lOX0RBWSA9IDg2NGU1XG5cbi8qKlxuICogUmV0dXJucyBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gYSBnaXZlbiBmb3JtYXRcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnZhciBmb3JtYXQgPSBmdW5jdGlvbihkaXJ0eURhdGUsIGZvcm1hdCkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcblxuICBpZiAoIWZvcm1hdCkge1xuICAgIGZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onXG4gIH1cblxuICB2YXIgZm9ybWF0RnVuY3Rpb24gPSBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KVxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb24oZGF0ZSlcbn1cblxudmFyIGZvcm1hdHMgPSB7XG4gICdNJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TW9udGgoKSArIDFcbiAgfSxcbiAgJ01NJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmdldE1vbnRoKCkgKyAxLCAyKVxuICB9LFxuICAnTU1NJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldXG4gIH0sXG4gICdNTU1NJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNbdGhpcy5nZXRNb250aCgpXVxuICB9LFxuICAnUSc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZ2V0TW9udGgoKSArIDEpIC8gMylcbiAgfSxcbiAgJ0QnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKClcbiAgfSxcbiAgJ0REJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmdldERhdGUoKSwgMilcbiAgfSxcbiAgJ0RERCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIodGhpcylcbiAgfSxcbiAgJ0REREQnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGVmdFplcm9GaWxsKGZvcm1hdHNbJ0RERCddLmFwcGx5KHRoaXMpLCAzKVxuICB9LFxuICAnZCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldERheSgpXG4gIH0sXG4gICdkZCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5TmFtZXNNaW5bdGhpcy5nZXREYXkoKV1cbiAgfSxcbiAgJ2RkZCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5TmFtZXNTaG9ydFt0aGlzLmdldERheSgpXVxuICB9LFxuICAnZGRkZCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5TmFtZXNbdGhpcy5nZXREYXkoKV1cbiAgfSxcbiAgJ0UnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXkoKSArIDFcbiAgfSxcbiAgJ1lZJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpLnN1YnN0cigyKVxuICB9LFxuICAnWVlZWSc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZ1bGxZZWFyKClcbiAgfSxcbiAgJ0EnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0SG91cnMoKSAvIDEyKSA+PSAxID8gJ1BNJyA6ICdBTSdcbiAgfSxcbiAgJ2EnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0SG91cnMoKSAvIDEyKSA+PSAxID8gJ3BtJyA6ICdhbSdcbiAgfSxcbiAgJ2FhJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLmdldEhvdXJzKCkgLyAxMikgPj0gMSA/ICdwLm0uJyA6ICdhLm0uJ1xuICB9LFxuICAnSCc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEhvdXJzKClcbiAgfSxcbiAgJ0hIJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmdldEhvdXJzKCksIDIpXG4gIH0sXG4gICdoJzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhvdXJzID0gdGhpcy5nZXRIb3VycygpXG4gICAgaWYgKGhvdXJzID09IDApIHtcbiAgICAgIHJldHVybiAxMlxuICAgIH0gZWxzZSBpZiAoaG91cnMgPiAxMikge1xuICAgICAgcmV0dXJuIGhvdXJzICUgMTJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhvdXJzXG4gICAgfVxuICB9LFxuICAnaGgnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGVmdFplcm9GaWxsKGZvcm1hdHNbJ2gnXS5hcHBseSh0aGlzKSwgMilcbiAgfSxcbiAgJ20nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNaW51dGVzKClcbiAgfSxcbiAgJ21tJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmdldE1pbnV0ZXMoKSwgMilcbiAgfSxcbiAgJ3MnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWNvbmRzKClcbiAgfSxcbiAgJ3NzJzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmdldFNlY29uZHMoKSwgMilcbiAgfSxcbiAgJ1MnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNaWxsaXNlY29uZHMoKVxuICB9LFxuICAnU1MnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCksIDIpXG4gIH0sXG4gICdTU1MnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXG4gIH1cbn1cblxudmFyIG9yZGluYWxGdW5jdGlvbnMgPSBbJ00nLCAnRCcsICdEREQnLCAnZCddXG5vcmRpbmFsRnVuY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oZnVuY3Rpb25OYW1lKSB7XG4gIGZvcm1hdHNbZnVuY3Rpb25OYW1lICsgJ28nXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbGUub3JkaW5hbChmb3JtYXRzW2Z1bmN0aW9uTmFtZV0uYXBwbHkodGhpcykpXG4gIH1cbn0pXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zID0gT2JqZWN0LmtleXMoZm9ybWF0cykuc29ydCgpLnJldmVyc2UoKVxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdleHAgPSBuZXcgUmVnRXhwKFxuICAnKFxcXFxbW15cXFxcW10qXFxcXF0pfChcXFxcXFxcXCk/JyArICcoJyArIGZvcm1hdHRpbmdUb2tlbnMuam9pbignfCcpICsgJ3wuKScsICdnJ1xuKVxuXG52YXIgbWFrZUZvcm1hdEZ1bmN0aW9uID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnZXhwKSwgaSwgbGVuZ3RoXG5cbiAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZm9ybWF0c1thcnJheVtpXV0pIHtcbiAgICAgIGFycmF5W2ldID0gZm9ybWF0c1thcnJheVtpXV1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihtb20pIHtcbiAgICB2YXIgb3V0cHV0ID0gJydcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCArPSBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG52YXIgcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpXG4gIH1cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpXG59XG5cbnZhciBsZWZ0WmVyb0ZpbGwgPSBmdW5jdGlvbihudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgb3V0cHV0ID0gU3RyaW5nKE1hdGguYWJzKG51bWJlcikpXG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXRcbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cbnZhciBsb2NhbGUgPSB7XG4gIG9yZGluYWw6IGZ1bmN0aW9uKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPiAyMCB8fCBudW1iZXIgPCAxMCkge1xuICAgICAgc3dpdGNoIChudW1iZXIgJSAxMCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCdcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyICsgJ3RoJ1xuICB9LFxuICBtb250aHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICBtb250aHNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICBkYXlOYW1lczogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICBkYXlOYW1lc1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICBkYXlOYW1lc01pbjogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9mb3JtYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG52YXIgc3RhcnRPZlllYXIgPSByZXF1aXJlKCcuL3N0YXJ0X29mX3llYXInKVxudmFyIGRpZmZlcmVuY2VJbkRheXMgPSByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fZGF5cycpXG5cbi8qKlxuICogUmV0dXJucyBkYXkgb2YgeWVhciBvZiBwYXNzZWQgZGF0ZS5cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge251bWJlcn0gKGRheSBvZiB5ZWFyKVxuICovXG52YXIgZ2V0RGF5T2ZZZWFyID0gZnVuY3Rpb24oZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbkRheXMoZGF0ZSwgc3RhcnRPZlllYXIoZGF0ZSkpXG4gIHZhciBkYXlPZlllYXIgPSBkaWZmICsgMVxuICByZXR1cm4gZGF5T2ZZZWFyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF5T2ZZZWFyXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9nZXRfZGF5X29mX3llYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogUmV0dXJucyBzdGFydCBvZiBhIHllYXIgZm9yIGdpdmVuIGRhdGUuIERhdGUgd2lsbCBiZSBpbiBsb2NhbCB0aW1lem9uZS5cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge2RhdGV9XG4gKi9cbnZhciBzdGFydE9mWWVhciA9IGZ1bmN0aW9uKGRpcnR5RGF0ZSkge1xuICB2YXIgY2xlYW5EYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZZZWFyXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9zdGFydF9vZl95ZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdGFydE9mRGF5ID0gcmVxdWlyZSgnLi9zdGFydF9vZl9kYXknKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwXG5cbi8qKlxuICogUmV0dXJucyBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIGRhdGVzLlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlTGVmdFxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlUmlnaHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbnZhciBkaWZmZXJlbmNlSW5EYXlzID0gZnVuY3Rpb24oZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodClcblxuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKVxuICAgIC0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEVcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKVxuICAgIC0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJbkRheXNcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2RpZmZlcmVuY2VfaW5fZGF5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLyoqXG4gKiBBcmUgcGFzc2VkIGRhdGVzIGhhcyB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlTGVmdFxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlUmlnaHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgaXNTYW1lTW9udGggPSBmdW5jdGlvbihkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG4gIHJldHVybihcbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpID09IGRhdGVSaWdodC5nZXRGdWxsWWVhcigpXG4gICAgJiYgZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PSBkYXRlUmlnaHQuZ2V0TW9udGgoKVxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lTW9udGhcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2lzX3NhbWVfbW9udGguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogUmV0dXJucyBhcnJheSBvZiBkYXRlcyB3aXRodGluIHNwZWNpZmllZCByYW5nZS5cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5U3RhcnRcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RW5kXG4gKiBAcmV0dXJucyB7ZGF0ZVtdfVxuICovXG52YXIgZWFjaERheSA9IGZ1bmN0aW9uKGRpcnR5U3RhcnQsIGRpcnR5RW5kKSB7XG4gIHZhciBlbmRUaW1lID0gcGFyc2UoZGlydHlFbmQpLmdldFRpbWUoKVxuICB2YXIgZGF0ZXMgPSBbXVxuICB2YXIgdG1wRGF0ZVxuXG4gIHZhciBjdXJEYXRlID0gcGFyc2UoZGlydHlTdGFydClcbiAgY3VyRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gIHdoaWxlIChjdXJEYXRlLmdldFRpbWUoKSA8PSBlbmRUaW1lKSB7XG4gICAgZGF0ZXMucHVzaChuZXcgRGF0ZShjdXJEYXRlKSlcblxuICAgIGN1ckRhdGUuc2V0RGF0ZShjdXJEYXRlLmdldERhdGUoKSArIDEpXG5cbiAgICAvKipcbiAgICAgKiBhZGQgYWRkaXRpb25hbCA1IGhvdXJzIHRvIGdldCBuZXh0IGRheSxcbiAgICAgKiBiZWNhdXNlIG9mIHBvc3NpYmxlIHRyb3VibGVzIHdpdGggZGF5bGlnaHQgc2F2aW5ncyBkYXRlc1xuICAgICAqL1xuICAgIHRtcERhdGUgPSBuZXcgRGF0ZShjdXJEYXRlLnNldFRpbWUoY3VyRGF0ZS5nZXRUaW1lKCkgKyA1ICogNjAgKiA2MCAqIDEwMDApKVxuICAgIHRtcERhdGUgPSBuZXcgRGF0ZSh0bXBEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApKVxuICAgIGN1ckRhdGUgPSB0bXBEYXRlXG4gIH1cblxuICByZXR1cm4gZGF0ZXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlYWNoRGF5XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9lYWNoX2RheS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLyoqXG4gKiBSZXR1cm5zIHN0YXJ0IG9mIGEgd2VlayBmb3IgZ2l2ZW4gZGF0ZS4gRGF0ZSB3aWxsIGJlIGluIGxvY2FsIHRpbWV6b25lLlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gW3dlZWtTdGFydHNBdD0wXSBmaXJzdCBkYXkgb2Ygd2VlayAoMCAtIHN1bmRheSlcbiAqIEByZXR1cm5zIHtkYXRlfVxuICovXG52YXIgc3RhcnRPZldlZWsgPSBmdW5jdGlvbihkaXJ0eURhdGUsIHdlZWtTdGFydHNBdCkge1xuICB3ZWVrU3RhcnRzQXQgPSB3ZWVrU3RhcnRzQXQgfHwgMFxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzQXQgPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzQXRcblxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZldlZWtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL3N0YXJ0X29mX3dlZWsuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogUmV0dXJucyBlbmQgb2YgYSB3ZWVrIGZvciBnaXZlbiBkYXRlLiBEYXRlIHdpbGwgYmUgaW4gbG9jYWwgdGltZXpvbmUuXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2Vla1N0YXJ0c0F0PTBdIGZpcnN0IGRheSBvZiB3ZWVrICgwIC0gc3VuZGF5KVxuICogQHJldHVybnMge2RhdGV9XG4gKi9cbnZhciBlbmRPZldlZWsgPSBmdW5jdGlvbihkaXJ0eURhdGUsIHdlZWtTdGFydHNBdCkge1xuICB3ZWVrU3RhcnRzQXQgPSB3ZWVrU3RhcnRzQXQgfHwgMFxuXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzQXQgPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzQXQpXG5cbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRpZmYpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZXZWVrXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9lbmRfb2Zfd2Vlay5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLyoqXG4gKiBJcyBwYXNzZWQgZGF0ZSB3aXRoaW4gZ2l2ZW4gcmFuZ2U/XG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5U3RhcnREYXRlXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eUVuZERhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICpcbiAqIEBleGFtcGxlIGZvciBkYXRlIHdpdGhpbiB0aGUgcmFuZ2VcbiAqIGlzV2l0aGluUmFuZ2UoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLCBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlIGZvciBkYXRlIG91dHNpZGUgb2YgdGhlIHJhbmdlXG4gKiBpc1dpdGhpblJhbmdlKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG52YXIgaXNXaXRoaW5SYW5nZSA9IGZ1bmN0aW9uKGRpcnR5RGF0ZSwgZGlydHlTdGFydERhdGUsIGRpcnR5RW5kRGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICByZXR1cm4oXG4gICAgdGltZSA+PSBwYXJzZShkaXJ0eVN0YXJ0RGF0ZSkuZ2V0VGltZSgpXG4gICAgJiYgdGltZSA8PSBwYXJzZShkaXJ0eUVuZERhdGUpLmdldFRpbWUoKVxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNXaXRoaW5SYW5nZVxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvaXNfd2l0aGluX3JhbmdlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG4vKipcbiAqIElzIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHNlY29uZCBvbmU/XG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVUb0NvbXBhcmVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGUgaXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3XG4gKiB2YXIgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbnZhciBpc0JlZm9yZSA9IGZ1bmN0aW9uKGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gcGFyc2UoZGlydHlEYXRlVG9Db21wYXJlKVxuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgcmV0dXJuIGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0JlZm9yZVxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvaXNfYmVmb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG4vKipcbiAqIElzIGZpcnN0IGRhdGUgYWZ0ZXIgc2Vjb25kIG9uZT9cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVRvQ29tcGFyZVxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGlydHlEYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZSBpcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4N1xuICogdmFyIHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xudmFyIGlzQWZ0ZXIgPSBmdW5jdGlvbihkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHBhcnNlKGRpcnR5RGF0ZVRvQ29tcGFyZSlcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHJldHVybiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBZnRlclxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvaXNfYWZ0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogQXJlIHBhc3NlZCBkYXRlcyBlcXVhbD9cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5TGVmdERhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5UmlnaHREYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzRXF1YWwgPSBmdW5jdGlvbihkaXJ0eUxlZnREYXRlLCBkaXJ0eVJpZ2h0RGF0ZSkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eUxlZnREYXRlKVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlSaWdodERhdGUpXG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgPT0gZGF0ZVJpZ2h0LmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWxcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2lzX2VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuY29uc3QgZGF5c09mV2VlayA9IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnLCAnU3VuJ11cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5c09mV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmxvY2tDbGFzc05hbWU6IEJMT0NLX0NMQVNTX05BTUVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LWRheXNfb2Zfd2Vla2B9PlxuICAgICAgICB7ZGF5c09mV2Vlay5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmxvY2tDbGFzc05hbWV9LWRheXNfb2Zfd2Vla19kYXlgfVxuICAgICAgICAgICAgICBrZXk9e2RheX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RheX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheXNfb2Zfd2Vlay5qc3hcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLyoqXG4gKiBSZXR1cm5zIHN0YXJ0IG9mIGEgbW9udGggZm9yIGdpdmVuIGRhdGUuIERhdGUgd2lsbCBiZSBpbiBsb2NhbCB0aW1lem9uZS5cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge2RhdGV9XG4gKi9cbnZhciBzdGFydE9mTW9udGggPSBmdW5jdGlvbihkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgZGF0ZS5zZXREYXRlKDEpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZk1vbnRoXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9zdGFydF9vZl9tb250aC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxuLyoqXG4gKiBSZXR1cm5zIGVuZCBvZiBhIG1vbnRoIGZvciBnaXZlbiBkYXRlLiBEYXRlIHdpbGwgYmUgaW4gbG9jYWwgdGltZXpvbmUuXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVcbiAqIEByZXR1cm5zIHtkYXRlfVxuICovXG52YXIgZW5kT2ZNb250aCA9IGZ1bmN0aW9uKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpXG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KVxuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuZE9mTW9udGhcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2VuZF9vZl9tb250aC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcbnZhciBnZXRUaW1lU2luY2VNaWRuaWdodCA9IHJlcXVpcmUoJy4vZ2V0X3RpbWVfc2luY2VfbWlkbmlnaHQnKVxuXG4vKipcbiAqIEFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHBhc3NlZCBkYXRlLlxuICogQHBhcmFtIHtkYXRhfHN0cmluZ30gZGlydHlEYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gYW1vdW50XG4gKiBAcmV0dXJucyB7ZGF0ZX0gbmV3IGRhdGVcbiAqL1xudmFyIGFkZERheXMgPSBmdW5jdGlvbihkaXJ0eURhdGUsIGFtb3VudCkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHRpbWUgPSBnZXRUaW1lU2luY2VNaWRuaWdodChkYXRlKVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgdGltZSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGREYXlzXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RhdGUtZm5zL3NyYy9hZGRfZGF5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxuXG4vKipcbiAqIFJldHVybnMgdGltZSBzaW5jZSBtaWRuaWdodCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkaXJ0eURhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbnZhciBnZXRUaW1lU2luY2VNaWRuaWdodCA9IGZ1bmN0aW9uKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcblxuICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpXG4gIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gIFxuICB2YXIgdGltZSA9IGhvdXJzICogTUlMTElTRUNPTkRTX0lOX0hPVVJcbiAgICArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gICAgKyBzZWNvbmRzICogMTAwMCArIG1pbGxpc2Vjb25kc1xuXG4gIHJldHVybiB0aW1lXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGltZVNpbmNlTWlkbmlnaHRcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2dldF90aW1lX3NpbmNlX21pZG5pZ2h0LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBIZWFkZXJCdXR0b24gZnJvbSAnLi9oZWFkZXJfYnV0dG9uJ1xuaW1wb3J0IHtCTE9DS19DTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0cydcblxuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9zcmMvYWRkX21vbnRocydcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9zcmMvaXNfYmVmb3JlJ1xuaW1wb3J0IGlzQWZ0ZXIgZnJvbSAnZGF0ZS1mbnMvc3JjL2lzX2FmdGVyJ1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zcmMvc3RhcnRfb2ZfbW9udGgnXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tICdkYXRlLWZucy9zcmMvZm9ybWF0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlTW9udGg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLmlzUmVxdWlyZWQsXG4gICAgYmxvY2tDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4RGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWluRGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgb25Nb250aENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9ja0NsYXNzTmFtZTogQkxPQ0tfQ0xBU1NfTkFNRVxuICB9XG5cbiAgX3N3aXRjaE1vbnRoKG9mZnNldCkge1xuICAgIGNvbnN0IHtvbk1vbnRoQ2hhbmdlLCBhY3RpdmVNb250aH0gPSB0aGlzLnByb3BzXG4gICAgb25Nb250aENoYW5nZShhZGRNb250aHMoYWN0aXZlTW9udGgsIHBhcnNlSW50KG9mZnNldCkpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHthY3RpdmVNb250aCwgbWluRGF0ZSwgbWF4RGF0ZSwgYmxvY2tDbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHByZXZFbmFibGVkID0gbWluRGF0ZSA/IGlzQmVmb3JlKHN0YXJ0T2ZNb250aChtaW5EYXRlKSwgc3RhcnRPZk1vbnRoKGFjdGl2ZU1vbnRoKSkgOiB0cnVlXG4gICAgY29uc3QgbmV4dEVuYWJsZWQgPSBtYXhEYXRlID8gaXNBZnRlcihzdGFydE9mTW9udGgobWF4RGF0ZSksIHN0YXJ0T2ZNb250aChhY3RpdmVNb250aCkpIDogdHJ1ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtibG9ja0NsYXNzTmFtZX0tbW9udGhfaGVhZGVyYH0+XG4gICAgICAgIDxIZWFkZXJCdXR0b25cbiAgICAgICAgICB0eXBlPSdwcmV2J1xuICAgICAgICAgIGVuYWJsZWQ9e3ByZXZFbmFibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3N3aXRjaE1vbnRoLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgIGJsb2NrQ2xhc3NOYW1lPXtibG9ja0NsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jsb2NrQ2xhc3NOYW1lfS1tb250aF9oZWFkZXJfdGl0bGVgfT5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZShhY3RpdmVNb250aCwgJ01NTU0gWVlZWScpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlYWRlckJ1dHRvblxuICAgICAgICAgIHR5cGU9J25leHQnXG4gICAgICAgICAgZW5hYmxlZD17bmV4dEVuYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICBibG9ja0NsYXNzTmFtZT17YmxvY2tDbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQge0JMT0NLX0NMQVNTX05BTUV9IGZyb20gJy4vY29uc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9mZnNldDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2NrQ2xhc3NOYW1lOiBCTE9DS19DTEFTU19OQU1FXG4gIH1cblxuICBfb25DbGljayA9IChlKSA9PiB7XG4gICAgY29uc3Qge2VuYWJsZWQsIG9uQ2xpY2t9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBvbkNsaWNrKGUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9ja0NsYXNzTmFtZSwgdHlwZSwgZW5hYmxlZH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9JyMnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBgJHtibG9ja0NsYXNzTmFtZX0taGVhZGVyX2J1dHRvbmAsXG4gICAgICAgICAgYGlzLSR7dHlwZX1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdpcy1kaXNhYmxlZCc6ICFlbmFibGVkXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2hlYWRlcl9idXR0b24uanN4XG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG52YXIgZ2V0VGltZVNpbmNlTWlkbmlnaHQgPSByZXF1aXJlKCcuL2dldF90aW1lX3NpbmNlX21pZG5pZ2h0JylcbnZhciBnZXREYXlzSW5Nb250aCA9IHJlcXVpcmUoJy4vZ2V0X2RheXNfaW5fbW9udGgnKVxuXG4vKipcbiAqIEFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gcGFzc2VkIGRhdGUuXG4gKiBAcGFyYW0ge2RhdGF8c3RyaW5nfSBkaXJ0eURhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnRcbiAqIEByZXR1cm5zIHtkYXRlfSBuZXcgZGF0ZVxuICovXG52YXIgYWRkTW9udGhzID0gZnVuY3Rpb24oZGlydHlEYXRlLCBhbW91bnQpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciB0aW1lID0gZ2V0VGltZVNpbmNlTWlkbmlnaHQoZGF0ZSlcbiAgdmFyIGRlc2lyZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudFxuICB2YXIgZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aChuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRlc2lyZWRNb250aCwgMSkpXG5cbiAgZGF0ZS5zZXRNb250aChkZXNpcmVkTW9udGgsIE1hdGgubWluKGRheXNJbk1vbnRoLCBkYXRlLmdldERhdGUoKSkpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgdGltZSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNb250aHNcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGF0ZS1mbnMvc3JjL2FkZF9tb250aHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5cbi8qKlxuICogUmV0dXJucyBudW1iZXIgb2YgZGF5cyBvZiBtb250aCBvZiBwYXNzZWQgZGF0ZS5cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRpcnR5RGF0ZVxuICogQHJldHVybnMge251bWJlcn0gKGRheXMpXG4gKi9cbnZhciBnZXREYXlzSW5Nb250aCA9IGZ1bmN0aW9uKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKClcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXggKyAxLCAwKS5nZXREYXRlKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREYXlzSW5Nb250aFxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kYXRlLWZucy9zcmMvZ2V0X2RheXNfaW5fbW9udGguanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==