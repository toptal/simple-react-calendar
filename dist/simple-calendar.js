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
	      activeMonth: this._initialMonth(),
	      selection: null
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
	      var onSelectionProgress = _props.onSelectionProgress;
	
	      if (onSelect && (mode !== RANGE_MODE || !inProgress)) {
	        onSelect(mode === SINGLE_MODE ? start : { start: start, end: end });
	      }
	
	      if (mode === RANGE_MODE) {
	        if (onSelectionProgress) {
	          onSelectionProgress(selection);
	        } else {
	          _this.setState({ selection: inProgress ? { start: start, end: end } : null });
	        }
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
	      return (0, _dateFnsSrcStart_of_month2['default'])(this._today());
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
	      var _props4 = this.props;
	      var selected = _props4.selected;
	      var onSelectionProgress = _props4.onSelectionProgress;
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
	    key: '_today',
	    value: function _today() {
	      return this.props.today || new Date();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var mode = _props5.mode;
	      var data = _props5.data;
	      var minDate = _props5.minDate;
	      var maxDate = _props5.maxDate;
	      var blockClassName = _props5.blockClassName;
	
	      var activeMonth = isValid(this._activeMonth()) ? this._activeMonth() : (0, _dateFnsSrcStart_of_month2['default'])(this._today());
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
	          minNumberOfWeeks: this.props.minNumberOfWeeks,
	          today: this._today(),
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
	      minNumberOfWeeks: _react2['default'].PropTypes.number,
	      mode: _react2['default'].PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
	      onMonthChange: _react2['default'].PropTypes.func,
	      onSelect: _react2['default'].PropTypes.func,
	      onSelectionProgress: _react2['default'].PropTypes.func,
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
	      var minNumberOfWeeks = _props.minNumberOfWeeks;
	
	      var weeks = [];
	      var date = (0, _dateFnsSrcStart_of_week2['default'])((0, _dateFnsSrcStart_of_month2['default'])(activeMonth), 1);
	      var endDate = (0, _dateFnsSrcEnd_of_week2['default'])((0, _dateFnsSrcEnd_of_month2['default'])(activeMonth), 1);
	      while (typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length || ((0, _dateFnsSrcIs_before2['default'])(date, endDate) || (0, _dateFnsSrcIs_same_day2['default'])(date, endDate))) {
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
	      minNumberOfWeeks: _react2['default'].PropTypes.number,
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
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	        daysOfWeek.map(function (day, index) {
	          return _react2['default'].createElement(
	            'div',
	            {
	              className: (0, _classnames2['default'])(blockClassName + '-days_of_week_day', {
	                'is-weekend': index > 4 // 4 is an index of Friday
	              }),
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
//# sourceMappingURL=simple-calendar.js.map