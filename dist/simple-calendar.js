(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "_"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("_")) : factory(root["React"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _calendarCalendar = __webpack_require__(1);
	
	var _calendarCalendar2 = _interopRequireDefault(_calendarCalendar);
	
	exports.Calendar = _calendarCalendar2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _month = __webpack_require__(4);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(20);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _utilsDate_range_to_array = __webpack_require__(16);
	
	var _utilsDate_range_to_array2 = _interopRequireDefault(_utilsDate_range_to_array);
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	
	    var initialMonth = this.props.activeMonth;
	
	    if (!initialMonth && this.props.selected) {
	      var selection = (0, _utilsDate_range_to_array2['default'])(this.props.selected);
	      var firstDayOfSelectionMonth = new Date(selection[0]);
	      firstDayOfSelectionMonth.setDate(1);
	      initialMonth = firstDayOfSelectionMonth;
	    }
	
	    if (!initialMonth) {
	      var firstDayOfCurrentMonth = new Date(this.props.today);
	      firstDayOfCurrentMonth.setDate(1);
	      initialMonth = firstDayOfCurrentMonth;
	    }
	
	    this.state = {
	      activeMonth: initialMonth,
	      selected: this.props.selected
	    };
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!_lodash2['default'].isEqual(nextProps.selected, this.props.selected)) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: '_getActiveMonth',
	    value: function _getActiveMonth() {
	      if (_lodash2['default'].isFunction(this.props.onActiveMonthChange)) {
	        return this.props.activeMonth;
	      } else {
	        return this.state.activeMonth;
	      }
	    }
	  }, {
	    key: '_switchMonth',
	    value: function _switchMonth(offset) {
	      var month = new Date(this._getActiveMonth());
	      month.setMonth(month.getMonth() + offset);
	
	      if (_lodash2['default'].isFunction(this.props.onActiveMonthChange)) {
	        this.props.onActiveMonthChange(month);
	      } else {
	        this.setState({
	          activeMonth: month
	        });
	      }
	    }
	  }, {
	    key: '_selectionChanged',
	    value: function _selectionChanged(selection) {
	      if (_lodash2['default'].isFunction(this.props.onSelect) && !selection.selectionInProgress) {
	        this.props.onSelect(selection.selectionStart, selection.selectionEnd, selection.selectionInProgress);
	      }
	      this.setState({
	        selected: [selection.selectionStart, selection.selectionEnd]
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var monthProps = _lodash2['default'].pick(this.props, ['selectionMode', 'data', 'selectionBoundaries', 'today']);
	      return _react2['default'].createElement(
	        'div',
	        { className: 'calendar' },
	        _react2['default'].createElement(_month_header2['default'], {
	          ref: 'header',
	          selectionBoundaries: this.props.selectionBoundaries,
	          activeMonth: this._getActiveMonth(),
	          onMonthChange: this._switchMonth.bind(this)
	        }),
	        _react2['default'].createElement(_month2['default'], _extends({}, monthProps, {
	          ref: 'month',
	          activeMonth: this._getActiveMonth(),
	          selected: this.state.selected,
	          onChange: this._selectionChanged.bind(this)
	        }))
	      );
	    }
	  }]);
	
	  return Calendar;
	})(_react2['default'].Component);
	
	exports['default'] = Calendar;
	
	Calendar.propTypes = {
	  today: _react2['default'].PropTypes.instanceOf(Date),
	  activeMonth: _react2['default'].PropTypes.instanceOf(Date),
	  onActiveMonthChange: _react2['default'].PropTypes.func,
	  selected: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.instanceOf(Date)), _react2['default'].PropTypes.instanceOf(Date)]),
	  onSelectionChange: _react2['default'].PropTypes.func,
	  selectionMode: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.object
	};
	
	Calendar.defaultProps = {
	  today: new Date(),
	  selectionMode: 'single'
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _week = __webpack_require__(6);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _days_of_week = __webpack_require__(5);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(19);
	
	var _utilsGet_weeks_in_month2 = _interopRequireDefault(_utilsGet_weeks_in_month);
	
	var _utilsIs_date_in_boundaries = __webpack_require__(18);
	
	var _utilsIs_date_in_boundaries2 = _interopRequireDefault(_utilsIs_date_in_boundaries);
	
	var Month = (function (_React$Component) {
	  _inherits(Month, _React$Component);
	
	  function Month(props) {
	    _classCallCheck(this, Month);
	
	    _get(Object.getPrototypeOf(Month.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      selectionInProgress: false,
	      selectionStart: null,
	      selectionEnd: null
	    };
	  }
	
	  _createClass(Month, [{
	    key: '_pushUpdate',
	    value: function _pushUpdate() {
	      this.props.onChange(_lodash2['default'].pick(this.state, ['selectionStart', 'selectionEnd', 'selectionInProgress']));
	    }
	  }, {
	    key: '_onDayClick',
	    value: function _onDayClick(date) {
	      var _this = this;
	
	      if (!(0, _utilsIs_date_in_boundaries2['default'])(date, this.props.selectionBoundaries)) {
	        return false;
	      }
	
	      var nextState = {};
	      if (this.props.selectionMode === 'range') {
	        if (this.state.selectionInProgress) {
	          nextState = {
	            selectionInProgress: false,
	            selectionStart: this.state.selectionStart.getTime() < date.getTime() ? this.state.selectionStart : date,
	            selectionEnd: this.state.selectionStart.getTime() > date.getTime() ? this.state.selectionStart : date
	          };
	        } else {
	          nextState = {
	            selectionInProgress: true,
	            selectionStart: date,
	            selectionEnd: date
	          };
	        }
	      } else if (this.props.selectionMode === 'single' || !this.props.selectionMode) {
	        nextState = {
	          selectionStart: date,
	          selectionEnd: date
	        };
	      }
	      this.setState(nextState, function () {
	        _this._pushUpdate();
	      });
	    }
	  }, {
	    key: '_onDayMouseMove',
	    value: function _onDayMouseMove(date) {
	      var _this2 = this;
	
	      if (!(0, _utilsIs_date_in_boundaries2['default'])(date, this.props.selectionBoundaries)) {
	        return false;
	      }
	
	      if (this.state.selectionInProgress && (!this.state.selectionEnd || this.state.selectionEnd.getTime() !== date.getTime())) {
	        this.setState({ selectionEnd: date }, function () {
	          _this2._pushUpdate();
	        });
	      }
	    }
	  }, {
	    key: '_renderWeeks',
	    value: function _renderWeeks() {
	      var _this3 = this;
	
	      var weeks = (0, _utilsGet_weeks_in_month2['default'])(this.props.activeMonth);
	      return weeks.map(function (week) {
	        return _react2['default'].createElement(_week2['default'], {
	          key: week.getTime(),
	          ref: 'week' + week.getTime(),
	          startDate: week,
	          activeMonth: _this3.props.activeMonth,
	          selected: _this3.props.selected,
	          selectionBoundaries: _this3.props.selectionBoundaries,
	          data: _this3.props.data,
	          today: _this3.props.today,
	
	          onDayClick: _this3._onDayClick.bind(_this3),
	          onDayMouseMove: _this3._onDayMouseMove.bind(_this3)
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'month' },
	        _react2['default'].createElement(_days_of_week2['default'], null),
	        this._renderWeeks()
	      );
	    }
	  }]);
	
	  return Month;
	})(_react2['default'].Component);
	
	exports['default'] = Month;
	module.exports = exports['default'];

/***/ },
/* 5 */
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
	
	var DaysOfWeek = (function (_React$Component) {
	  _inherits(DaysOfWeek, _React$Component);
	
	  function DaysOfWeek() {
	    _classCallCheck(this, DaysOfWeek);
	
	    _get(Object.getPrototypeOf(DaysOfWeek.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DaysOfWeek, [{
	    key: 'render',
	    value: function render() {
	      var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	      return _react2['default'].createElement(
	        'div',
	        { className: 'week is-weekday_header' },
	        daysOfWeek.map(function (day) {
	          return _react2['default'].createElement(
	            'div',
	            { className: "day is-weekday_title", key: day },
	            day
	          );
	        })
	      );
	    }
	  }]);
	
	  return DaysOfWeek;
	})(_react2['default'].Component);
	
	exports['default'] = DaysOfWeek;
	module.exports = exports['default'];

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
	
	var _day = __webpack_require__(8);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsDate_key = __webpack_require__(14);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsGet_days_in_week = __webpack_require__(7);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsIs_date_in_range = __webpack_require__(15);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
	var _utilsIs_date_in_boundaries = __webpack_require__(18);
	
	var _utilsIs_date_in_boundaries2 = _interopRequireDefault(_utilsIs_date_in_boundaries);
	
	var Week = (function (_React$Component) {
	  _inherits(Week, _React$Component);
	
	  function Week() {
	    _classCallCheck(this, Week);
	
	    _get(Object.getPrototypeOf(Week.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Week, [{
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this = this;
	
	      return (0, _utilsGet_days_in_week2['default'])(this.props.startDate).map(function (day) {
	        return _react2['default'].createElement(_day2['default'], {
	          key: day.getTime(),
	          ref: 'day' + day.getTime(),
	          date: day,
	          data: _this.props.data[(0, _utilsDate_key2['default'])(day)],
	          selected: (0, _utilsIs_date_in_range2['default'])(day, _this.props.selected),
	          inBoundaries: (0, _utilsIs_date_in_boundaries2['default'])(day, _this.props.selectionBoundaries),
	          activeMonth: _this.props.activeMonth,
	          today: _this.props.today,
	          onClick: _this.props.onDayClick,
	          onMouseMove: _this.props.onDayMouseMove
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'week' },
	        this._renderDays()
	      );
	    }
	  }]);
	
	  return Week;
	})(_react2['default'].Component);
	
	exports['default'] = Week;
	
	Week.defaultProps = {
	  data: {},
	  today: new Date()
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getDaysInWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	/**
	 * Accepts the first day and returns an array containing 7 days starting
	 * with the first day. Intended for generating days in a week.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function getDaysInWeek(firstDay) {
	  return _lodash2['default'].range(0, 7).map(function (day) {
	    return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + day);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 8 */
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
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(10);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_same_date = __webpack_require__(11);
	
	var _utilsIs_same_date2 = _interopRequireDefault(_utilsIs_same_date);
	
	var _utilsNo_op = __webpack_require__(12);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(13);
	
	var _utilsPrevent_default2 = _interopRequireDefault(_utilsPrevent_default);
	
	var Day = (function (_React$Component) {
	  _inherits(Day, _React$Component);
	
	  function Day() {
	    _classCallCheck(this, Day);
	
	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Day, [{
	    key: '_getClasses',
	    value: function _getClasses() {
	      var classes = {};
	      if (_lodash2['default'].isArray(this.props.data.modifiers)) {
	        classes = _lodash2['default'].zipObject(this.props.data.modifiers.map(function (modifier) {
	          return ['is-' + modifier, true];
	        }));
	      }
	      classes = _lodash2['default'].assign(classes, {
	        day: true,
	        'is-selected': this.props.selected,
	        'is-weekend': (0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-workday': !(0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-today': (0, _utilsIs_same_date2['default'])(this.props.today, this.props.date),
	        'is-current_month': this.props.date.getMonth() === this.props.activeMonth.getMonth(),
	        'is-prev_month': this.props.date.getMonth() < this.props.activeMonth.getMonth(),
	        'is-next_month': this.props.date.getMonth() > this.props.activeMonth.getMonth(),
	        'is-selectable': this.props.inBoundaries,
	        'is-not-selectable': !this.props.inBoundaries
	      });
	      return (0, _classnames2['default'])(classes);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        {
	          className: this._getClasses(),
	          onClick: (0, _utilsPrevent_default2['default'])(_lodash2['default'].partial(this.props.onClick, this.props.date)),
	          onMouseMove: (0, _utilsPrevent_default2['default'])(_lodash2['default'].partial(this.props.onMouseMove, this.props.date))
	        },
	        new Date(this.props.date).getDate()
	      );
	    }
	  }]);
	
	  return Day;
	})(_react2['default'].Component);
	
	exports['default'] = Day;
	
	Day.defaultProps = {
	  data: {},
	  today: new Date(),
	  onClick: _utilsNo_op2['default'],
	  onMouseMove: _utilsNo_op2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Returns true if date falls on the weekend and false otherwise.
	 *
	 * @param {date|string} date
	 * @returns {boolean}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWeekend;
	
	function isWeekend(date) {
	  return date.getDay() === 0 || date.getDay() === 6;
	}
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isSameDate;
	
	function isSameDate(date1, date2) {
	  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
	}
	
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	/** A no op function to be used as a default value for optional function props. */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = noOp;
	
	function noOp() {}
	
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = preventDefault;
	
	function preventDefault(func) {
	  var that = this;
	  return function (e) {
	    e.preventDefault();
	    if (func) {
	      func.call(that, e);
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Accepts a date or a string representation of a date and returns
	 * a string suitable to be used as a key in the format: YYYY-MM-DD
	 *
	 * @param {date|string} date
	 * @returns {string}
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = dateKey;
	
	function dateKey(date) {
	  date = new Date(date);
	  var yyyy = date.getFullYear();
	  var mm = ('0' + (date.getMonth() + 1)).slice(-2);
	  var dd = ('0' + date.getDate()).slice(-2);
	  return yyyy + '-' + mm + '-' + dd;
	}
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isDateInRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _date_range_to_array = __webpack_require__(16);
	
	var _date_range_to_array2 = _interopRequireDefault(_date_range_to_array);
	
	var _is_date_between = __webpack_require__(17);
	
	/**
	 * Returns true if date is within the range, false otherwise.
	 * See documentation for dateRangeToArray for details on range formats.
	 *
	 * @param {date} date
	 * @param {object|array|undefined} datesRange
	 * @returns {boolean}
	 */
	
	var _is_date_between2 = _interopRequireDefault(_is_date_between);
	
	function isDateInRange(date, datesRange) {
	  var range = (0, _date_range_to_array2['default'])(datesRange);
	  return (0, _is_date_between2['default'])(date, range[0], range[1]);
	}
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = dateRangeToArray;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	/**
	 * It takes one of the following:
	 *  - an object with 'start' and/or 'end' properties with dates
	 *  - an array with 1 or 2 dates
	 *  - nothing
	 *
	 * In all the cases it returns an array with two values that are Date object
	 * representing start and end of a range. In cases where either start or end
	 * end is missing it defaults to current Date.
	 *
	 * @param {object|array|undefined} value
	 * @returns {array}
	 */
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function dateRangeToArray(value) {
	  var now = new Date();
	
	  if (_lodash2['default'].isPlainObject(value)) {
	    return [new Date(value.start || now), new Date(value.end || now)];
	  } else if (Array.isArray(value)) {
	    return [new Date(value[0] || now), new Date(value[1] || now)];
	  } else {
	    return [now, now];
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Returns true if date falls between dateFrom and dateTo, false otherwise.
	 *
	 * @param {date} date
	 * @param {date|string} dateFrom
	 * @param {date|string} dateTo
	 * @returns {boolean}
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isDateBetween;
	function resetDate(date) {
	  var dateObj = new Date(date);
	  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0);
	}
	
	function isDateBetween(date, dateFrom, dateTo) {
	  var fromTime = resetDate(dateFrom).getTime();
	  var toTime = resetDate(dateTo).getTime();
	  var min = Math.min(fromTime, toTime);
	  var max = Math.max(fromTime, toTime);
	  var time = resetDate(date).getTime();
	  return time >= min && time <= max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Returns true if date falls inside boundaries.
	 *
	 * @param {date} date
	 * @param {object} boundaries
	 * @returns {boolean}
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isDateInBoundaries;
	function resetDate(date) {
	  var dateObj = new Date(date);
	  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0);
	}
	
	function isDateInBoundaries(date, boundaries) {
	  var time = resetDate(date).getTime();
	  var min = boundaries && boundaries.min && resetDate(boundaries.min).getTime();
	  var max = boundaries && boundaries.max && resetDate(boundaries.max).getTime();
	
	  if (min && min > time) {
	    return false;
	  }
	  if (max && max < time) {
	    return false;
	  }
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getWeeksInMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	/**
	 * Accepts the first day of month and returns an array containing
	 * all mondays for all weeks that intersect that month. So, if a month
	 * starts on a Wednesday, the first entry will be the previous monday.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function getWeeksInMonth(month) {
	  var date = new Date(month.getFullYear(), month.getMonth(), month.getDate());
	
	  var daysFromWeekStart = (date.getDay() || 7) - 1;
	  var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	
	  var weeksCount = Math.ceil((daysInMonth + daysFromWeekStart) / 7);
	  var startDate = new Date(date.getFullYear(), date.getMonth(), 1 - daysFromWeekStart);
	
	  return _lodash2['default'].range(0, weeksCount).map(function (week) {
	    return new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + week * 7);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 20 */
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
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var MonthHeader = (function (_React$Component) {
	  _inherits(MonthHeader, _React$Component);
	
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    _get(Object.getPrototypeOf(MonthHeader.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(e, id, offset) {
	      e.preventDefault();
	      if (!e.target.attributes.getNamedItem('disabled') && _lodash2['default'].isFunction(this.props.onMonthChange)) {
	        this.props.onMonthChange(offset);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	      var _props = this.props;
	      var date = _props.activeMonth;
	      var selectionBoundaries = _props.selectionBoundaries;
	
	      var prevEnabled = true;
	      var nextEnabled = true;
	
	      if (selectionBoundaries && selectionBoundaries.min) {
	        var minDate = new Date(selectionBoundaries.min);
	        prevEnabled = date.getFullYear() * 100 + date.getMonth() > minDate.getFullYear() * 100 + minDate.getMonth();
	      }
	
	      if (selectionBoundaries && selectionBoundaries.max) {
	        var maxDate = new Date(selectionBoundaries.max);
	        nextEnabled = date.getFullYear() * 100 + date.getMonth() < maxDate.getFullYear() * 100 + maxDate.getMonth();
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'month-header' },
	        _react2['default'].createElement(
	          'a',
	          {
	            ref: 'prevMonthLink',
	            disabled: !prevEnabled,
	            className: 'prev-month' + (prevEnabled ? '' : ' is-disabled'),
	            href: '#',
	            onClick: _lodash2['default'].partialRight(this._switchMonth, -1).bind(this) },
	          'prev'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'month-title' },
	          m[date.getMonth()],
	          ' ',
	          date.getFullYear()
	        ),
	        _react2['default'].createElement(
	          'a',
	          {
	            ref: 'nextMonthLink',
	            disabled: !nextEnabled,
	            className: 'next-month' + (nextEnabled ? '' : ' is-disabled'),
	            href: '#',
	            onClick: _lodash2['default'].partialRight(this._switchMonth, 1).bind(this) },
	          'next'
	        )
	      );
	    }
	  }]);
	
	  return MonthHeader;
	})(_react2['default'].Component);
	
	exports['default'] = MonthHeader;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMGMyM2M0NmFiMzIxZWUzNDg3YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXlzX29mX3dlZWsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3NhbWVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvbm9fb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfcmFuZ2VfdG9fYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9ib3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkNDdENxQixDQUFxQjs7OztTQUVsQyxRQUFRLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDRkUsQ0FBTzs7OzttQ0FDTixDQUFROzs7O2tDQUNULENBQVM7Ozs7eUNBQ0gsRUFBZ0I7Ozs7cURBRVgsRUFBNkI7Ozs7S0FFckMsUUFBUTthQUFSLFFBQVE7O0FBQ2hCLFlBRFEsUUFBUSxDQUNmLEtBQUssRUFBRTsyQkFEQSxRQUFROztBQUV6QixnQ0FGaUIsUUFBUSw2Q0FFbkIsS0FBSyxFQUFDOztBQUVaLFNBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVzs7QUFFekMsU0FBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUN4QyxXQUFNLFNBQVMsR0FBRywyQ0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDdkQsV0FBTSx3QkFBd0IsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsK0JBQXdCLENBQUMsT0FBTyxDQUFDLENB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QUFDLFFBQVEsRUFBRTtRQUM1Rzs7QUFFRCxjQUNFOztXQUFLLFNBQVMsRUFBQyxjQUFjO1NBQzNCOzs7QUFDRSxnQkFBRyxFQUFDLGVBQWU7QUFDbkIscUJBQVEsRUFBRSxDQUFDLFdBQVk7QUFDdkIsc0JBQVMsRUFBRSxZQUFZLElBQUksV0FBVyxHQUFHLEVBQUUsR0FBRyxjQUFjLENBQUU7QUFDOUQsaUJBQUksRUFBQyxHQUFHO0FBQ1Isb0JBQU8sRUFBRyxvQkFBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBRS9EO1NBQ0o7O2FBQUssU0FBUyxFQUFDLGFBQWE7V0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7V0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1VBQ3BDO1NBQ047OztBQUNFLGdCQUFHLEVBQUMsZUFBZTtBQUNuQixxQkFBUSxFQUFFLENBQUMsV0FBWTtBQUN2QixzQkFBUyxFQUFFLFlBQVksSUFBSSxXQUFXLEdBQUcsRUFBRSxHQUFHLGNBQWMsQ0FBRTtBQUM5RCxpQkFBSSxFQUFDLEdBQUc7QUFDUixvQkFBTyxFQUFHLG9CQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBRTlEO1FBQ0EsQ0FDUDtNQUNGOzs7VUFoRGtCLFdBQVc7SUFBUyxtQkFBTSxTQUFTOztzQkFBbkMsV0FBVyIsImZpbGUiOiJzaW1wbGUtY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJSZWFjdFwiKSwgcmVxdWlyZShcIl9cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJfXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJSZWFjdFwiKSwgcmVxdWlyZShcIl9cIikpIDogZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJfXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTBjMjNjNDZhYjMyMWVlMzQ4N2JcbiAqKi8iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhcidcblxuZXhwb3J0IHtDYWxlbmRhcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgTW9udGggZnJvbSAnLi9tb250aCdcbmltcG9ydCBNb250aEhlYWRlciBmcm9tICcuL21vbnRoX2hlYWRlcidcblxuaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBsZXQgaW5pdGlhbE1vbnRoID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuXG4gICAgaWYgKCFpbml0aWFsTW9udGggJiYgdGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZGF0ZVJhbmdlVG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkKVxuICAgICAgY29uc3QgZmlyc3REYXlPZlNlbGVjdGlvbk1vbnRoID0gbmV3IERhdGUoc2VsZWN0aW9uWzBdKVxuICAgICAgZmlyc3REYXlPZlNlbGVjdGlvbk1vbnRoLnNldERhdGUoMSlcbiAgICAgIGluaXRpYWxNb250aCA9IGZpcnN0RGF5T2ZTZWxlY3Rpb25Nb250aFxuICAgIH1cblxuICAgIGlmICghaW5pdGlhbE1vbnRoKSB7XG4gICAgICBjb25zdCBmaXJzdERheU9mQ3VycmVudE1vbnRoID0gbmV3IERhdGUodGhpcy5wcm9wcy50b2RheSlcbiAgICAgIGZpcnN0RGF5T2ZDdXJyZW50TW9udGguc2V0RGF0ZSgxKVxuICAgICAgaW5pdGlhbE1vbnRoID0gZmlyc3REYXlPZkN1cnJlbnRNb250aFxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVNb250aDogaW5pdGlhbE1vbnRoLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbG9kYXNoLmlzRXF1YWwobmV4dFByb3BzLnNlbGVjdGVkLCB0aGlzLnByb3BzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBuZXh0UHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZU1vbnRoKCkge1xuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVNb250aFxuICAgIH1cbiAgfVxuXG4gIF9zd2l0Y2hNb250aChvZmZzZXQpIHtcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkpXG4gICAgbW9udGguc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIG9mZnNldClcblxuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UobW9udGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVNb250aDogbW9udGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZWQoc2VsZWN0aW9uKSB7XG4gICAgaWYgKGxvZGFzaC5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpICYmICFzZWxlY3Rpb24uc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kLFxuICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uSW5Qcm9ncmVzc1xuICAgICAgKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkOiBbc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kXVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9udGhQcm9wcyA9IGxvZGFzaC5waWNrKHRoaXMucHJvcHMsIFsnc2VsZWN0aW9uTW9kZScsICdkYXRhJywgJ3NlbGVjdGlvbkJvdW5kYXJpZXMnLCAndG9kYXknXSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGFyJz5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgcmVmPSdoZWFkZXInXG4gICAgICAgICAgc2VsZWN0aW9uQm91bmRhcmllcz17dGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9nZXRBY3RpdmVNb250aCgpfVxuICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e3RoaXMuX3N3aXRjaE1vbnRoLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb250aFxuICAgICAgICAgIHsgLi4ubW9udGhQcm9wcyB9XG4gICAgICAgICAgcmVmPSdtb250aCdcbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5fZ2V0QWN0aXZlTW9udGgoKX1cbiAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkNhbGVuZGFyLnByb3BUeXBlcyA9IHtcbiAgdG9kYXk6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBhY3RpdmVNb250aDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkpLFxuICAgIFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuICBvblNlbGVjdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGlvbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICB0b2RheTogbmV3IERhdGUoKSxcbiAgc2VsZWN0aW9uTW9kZTogJ3NpbmdsZSdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJ1xuaW1wb3J0IERheXNPZldlZWsgZnJvbSAnLi9kYXlzX29mX3dlZWsnXG5pbXBvcnQgZ2V0V2Vla3NJbk1vbnRoIGZyb20gJy4vdXRpbHMvZ2V0X3dlZWtzX2luX21vbnRoJ1xuaW1wb3J0IGlzRGF0ZUluQm91bmRhcmllcyBmcm9tICcuL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uU3RhcnQ6IG51bGwsXG4gICAgICBzZWxlY3Rpb25FbmQ6IG51bGxcbiAgICB9XG4gIH1cblxuICBfcHVzaFVwZGF0ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgbG9kYXNoLnBpY2sodGhpcy5zdGF0ZSwgWydzZWxlY3Rpb25TdGFydCcsICdzZWxlY3Rpb25FbmQnLCAnc2VsZWN0aW9uSW5Qcm9ncmVzcyddKVxuICAgIClcbiAgfVxuXG4gIF9vbkRheUNsaWNrKGRhdGUpIHtcbiAgICBpZiAoIWlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCB0aGlzLnByb3BzLnNlbGVjdGlvbkJvdW5kYXJpZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgbmV4dFN0YXRlID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAncmFuZ2UnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnIHx8ICF0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9vbkRheU1vdXNlTW92ZShkYXRlKSB7XG4gICAgaWYgKCFpc0RhdGVJbkJvdW5kYXJpZXMoZGF0ZSwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcyAmJiAoIXRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kIHx8IHRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kLmdldFRpbWUoKSAhPT0gZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpb25FbmQ6IGRhdGV9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyV2Vla3MoKSB7XG4gICAgY29uc3Qgd2Vla3MgPSBnZXRXZWVrc0luTW9udGgodGhpcy5wcm9wcy5hY3RpdmVNb250aClcbiAgICByZXR1cm4gd2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vla1xuICAgICAgICAgIGtleT17d2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgcmVmPXsnd2VlaycgKyB3ZWVrLmdldFRpbWUoKX1cbiAgICAgICAgICBzdGFydERhdGU9e3dlZWt9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMucHJvcHMuYWN0aXZlTW9udGh9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgc2VsZWN0aW9uQm91bmRhcmllcz17dGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzfVxuICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICB0b2RheT17dGhpcy5wcm9wcy50b2RheX1cblxuICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkRheU1vdXNlTW92ZT17dGhpcy5fb25EYXlNb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgnPlxuICAgICAgICA8RGF5c09mV2VlayAvPlxuICAgICAgICB7IHRoaXMuX3JlbmRlcldlZWtzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5c09mV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcsICdTdW4nXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VlayBpcy13ZWVrZGF5X2hlYWRlcic+XG4gICAgICAgIHtkYXlzT2ZXZWVrLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5IGlzLXdlZWtkYXlfdGl0bGVcIiBrZXk9e2RheX0+XG4gICAgICAgICAgICAgIHtkYXl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9kYXlzX29mX3dlZWsuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRGF5IGZyb20gJy4vZGF5J1xuaW1wb3J0IGRhdGVLZXkgZnJvbSAnLi91dGlscy9kYXRlX2tleSdcbmltcG9ydCBnZXREYXlzSW5XZWVrIGZyb20gJy4vdXRpbHMvZ2V0X2RheXNfaW5fd2VlaydcbmltcG9ydCBpc0RhdGVJblJhbmdlIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZSdcbmltcG9ydCBpc0RhdGVJbkJvdW5kYXJpZXMgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfcmVuZGVyRGF5cygpIHtcbiAgICByZXR1cm4gZ2V0RGF5c0luV2Vlayh0aGlzLnByb3BzLnN0YXJ0RGF0ZSkubWFwKChkYXkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEYXlcbiAgICAgICAgICBrZXk9e2RheS5nZXRUaW1lKCl9XG4gICAgICAgICAgcmVmPXsnZGF5JyArIGRheS5nZXRUaW1lKCl9XG4gICAgICAgICAgZGF0ZT17ZGF5fVxuICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVtkYXRlS2V5KGRheSldfVxuICAgICAgICAgIHNlbGVjdGVkPXtpc0RhdGVJblJhbmdlKGRheSwgdGhpcy5wcm9wcy5zZWxlY3RlZCl9XG4gICAgICAgICAgaW5Cb3VuZGFyaWVzPXtpc0RhdGVJbkJvdW5kYXJpZXMoZGF5LCB0aGlzLnByb3BzLnNlbGVjdGlvbkJvdW5kYXJpZXMpfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLnByb3BzLmFjdGl2ZU1vbnRofVxuICAgICAgICAgIHRvZGF5PXt0aGlzLnByb3BzLnRvZGF5fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EYXlDbGlja31cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5wcm9wcy5vbkRheU1vdXNlTW92ZX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2Vlayc+XG4gICAgICAgIHsgdGhpcy5fcmVuZGVyRGF5cygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5XZWVrLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHRvZGF5OiBuZXcgRGF0ZSgpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeFxuICoqLyIsImltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG4vKipcbiAqIEFjY2VwdHMgdGhlIGZpcnN0IGRheSBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIDcgZGF5cyBzdGFydGluZ1xuICogd2l0aCB0aGUgZmlyc3QgZGF5LiBJbnRlbmRlZCBmb3IgZ2VuZXJhdGluZyBkYXlzIGluIGEgd2Vlay5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5c0luV2VlayhmaXJzdERheSkge1xuICByZXR1cm4gbG9kYXNoLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGZpcnN0RGF5LmdldE1vbnRoKCksXG4gICAgICAgIGZpcnN0RGF5LmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgaXNXZWVrZW5kIGZyb20gJy4vdXRpbHMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1NhbWVEYXRlIGZyb20gJy4vdXRpbHMvaXNfc2FtZV9kYXRlJ1xuaW1wb3J0IG5vT3AgZnJvbSAnLi91dGlscy9ub19vcCdcbmltcG9ydCBwcmV2ZW50RGVmYXVsdCBmcm9tICcuL3V0aWxzL3ByZXZlbnRfZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX2dldENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fVxuICAgIGlmIChsb2Rhc2guaXNBcnJheSh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzKSkge1xuICAgICAgY2xhc3NlcyA9IGxvZGFzaC56aXBPYmplY3QodGhpcy5wcm9wcy5kYXRhLm1vZGlmaWVycy5tYXAoKG1vZGlmaWVyKSA9PiB7IHJldHVybiAoW2Bpcy0ke21vZGlmaWVyfWAsIHRydWVdKX0pKVxuICAgIH1cbiAgICBjbGFzc2VzID0gbG9kYXNoLmFzc2lnbihjbGFzc2VzLCB7XG4gICAgICBkYXk6IHRydWUsXG4gICAgICAnaXMtc2VsZWN0ZWQnOiB0aGlzLnByb3BzLnNlbGVjdGVkLFxuICAgICAgJ2lzLXdlZWtlbmQnOiBpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy13b3JrZGF5JzogIWlzV2Vla2VuZCh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLXRvZGF5JzogaXNTYW1lRGF0ZSh0aGlzLnByb3BzLnRvZGF5LCB0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLWN1cnJlbnRfbW9udGgnOiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXByZXZfbW9udGgnOiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA8IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtc2VsZWN0YWJsZSc6IHRoaXMucHJvcHMuaW5Cb3VuZGFyaWVzLFxuICAgICAgJ2lzLW5vdC1zZWxlY3RhYmxlJzogIXRoaXMucHJvcHMuaW5Cb3VuZGFyaWVzXG4gICAgfSlcbiAgICByZXR1cm4gY2xhc3NOYW1lcyhjbGFzc2VzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5fZ2V0Q2xhc3NlcygpfVxuICAgICAgICBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdChsb2Rhc2gucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpfVxuICAgICAgICBvbk1vdXNlTW92ZT17cHJldmVudERlZmF1bHQobG9kYXNoLnBhcnRpYWwodGhpcy5wcm9wcy5vbk1vdXNlTW92ZSwgdGhpcy5wcm9wcy5kYXRlKSl9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdG9kYXk6IG5ldyBEYXRlKCksXG4gIG9uQ2xpY2s6IG5vT3AsXG4gIG9uTW91c2VNb3ZlOiBub09wXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9kYXkuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIG9uIHRoZSB3ZWVrZW5kIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2Vla2VuZChkYXRlKSB7XG4gIHJldHVybiAoZGF0ZS5nZXREYXkoKSA9PT0gMCB8fCBkYXRlLmdldERheSgpID09PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURhdGUoZGF0ZTEsIGRhdGUyKSB7XG4gIHJldHVybiAoXG4gICAgKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpICYmXG4gICAgKGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkpICYmXG4gICAgKGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19zYW1lX2RhdGUuanNcbiAqKi8iLCIvKiogQSBubyBvcCBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgZGVmYXVsdCB2YWx1ZSBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcHJvcHMuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub09wKCkge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZnVuYykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCwgZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qc1xuICoqLyIsIi8qKlxuICogQWNjZXB0cyBhIGRhdGUgb3IgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBkYXRlIGFuZCByZXR1cm5zXG4gKiBhIHN0cmluZyBzdWl0YWJsZSB0byBiZSB1c2VkIGFzIGEga2V5IGluIHRoZSBmb3JtYXQ6IFlZWVktTU0tRERcbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlS2V5KGRhdGUpIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW0gPSAoJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcbiAgY29uc3QgZGQgPSAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKVxuICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qc1xuICoqLyIsImltcG9ydCBkYXRlUmFuZ2VUb0FycmF5IGZyb20gJy4vZGF0ZV9yYW5nZV90b19hcnJheSdcbmltcG9ydCBpc0RhdGVCZXR3ZWVuIGZyb20gJy4vaXNfZGF0ZV9iZXR3ZWVuJ1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGlzIHdpdGhpbiB0aGUgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cbiAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBkYXRlUmFuZ2VUb0FycmF5IGZvciBkZXRhaWxzIG9uIHJhbmdlIGZvcm1hdHMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IGRhdGVzUmFuZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgY29uc3QgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoICdzdGFydCcgYW5kL29yICdlbmQnIHByb3BlcnRpZXMgd2l0aCBkYXRlc1xuICogIC0gYW4gYXJyYXkgd2l0aCAxIG9yIDIgZGF0ZXNcbiAqICAtIG5vdGhpbmdcbiAqXG4gKiBJbiBhbGwgdGhlIGNhc2VzIGl0IHJldHVybnMgYW4gYXJyYXkgd2l0aCB0d28gdmFsdWVzIHRoYXQgYXJlIERhdGUgb2JqZWN0XG4gKiByZXByZXNlbnRpbmcgc3RhcnQgYW5kIGVuZCBvZiBhIHJhbmdlLiBJbiBjYXNlcyB3aGVyZSBlaXRoZXIgc3RhcnQgb3IgZW5kXG4gKiBlbmQgaXMgbWlzc2luZyBpdCBkZWZhdWx0cyB0byBjdXJyZW50IERhdGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlUmFuZ2VUb0FycmF5KHZhbHVlKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAobG9kYXNoLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5lbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHJlc2V0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlKVxuICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCBkYXRlT2JqLmdldE1vbnRoKCksIGRhdGVPYmouZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgY29uc3QgZnJvbVRpbWUgPSByZXNldERhdGUoZGF0ZUZyb20pLmdldFRpbWUoKVxuICBjb25zdCB0b1RpbWUgPSByZXNldERhdGUoZGF0ZVRvKS5nZXRUaW1lKClcbiAgY29uc3QgbWluID0gTWF0aC5taW4oZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgdGltZSA9IHJlc2V0RGF0ZShkYXRlKS5nZXRUaW1lKClcbiAgcmV0dXJuICh0aW1lID49IG1pbiAmJiB0aW1lIDw9IG1heClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qc1xuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgaW5zaWRlIGJvdW5kYXJpZXMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gYm91bmRhcmllc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gcmVzZXREYXRlKGRhdGUpIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIGRhdGVPYmouZ2V0TW9udGgoKSwgZGF0ZU9iai5nZXREYXRlKCksIDAsIDAsIDAsIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCBib3VuZGFyaWVzKSB7XG4gIGNvbnN0IHRpbWUgPSByZXNldERhdGUoZGF0ZSkuZ2V0VGltZSgpXG4gIGNvbnN0IG1pbiA9IGJvdW5kYXJpZXMgJiYgYm91bmRhcmllcy5taW4gJiYgcmVzZXREYXRlKGJvdW5kYXJpZXMubWluKS5nZXRUaW1lKClcbiAgY29uc3QgbWF4ID0gYm91bmRhcmllcyAmJiBib3VuZGFyaWVzLm1heCAmJiByZXNldERhdGUoYm91bmRhcmllcy5tYXgpLmdldFRpbWUoKVxuXG4gIGlmIChtaW4gJiYgbWluID4gdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChtYXggJiYgbWF4IDwgdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgb2YgbW9udGggYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZ1xuICogYWxsIG1vbmRheXMgZm9yIGFsbCB3ZWVrcyB0aGF0IGludGVyc2VjdCB0aGF0IG1vbnRoLiBTbywgaWYgYSBtb250aFxuICogc3RhcnRzIG9uIGEgV2VkbmVzZGF5LCB0aGUgZmlyc3QgZW50cnkgd2lsbCBiZSB0aGUgcHJldmlvdXMgbW9uZGF5LlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgobW9udGgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGguZ2V0TW9udGgoKSxcbiAgICBtb250aC5nZXREYXRlKClcbiAgKVxuXG4gIGNvbnN0IGRheXNGcm9tV2Vla1N0YXJ0ID0gKGRhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcblxuICBjb25zdCB3ZWVrc0NvdW50ID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCArIGRheXNGcm9tV2Vla1N0YXJ0KSAvIDcpXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSAtIGRheXNGcm9tV2Vla1N0YXJ0XG4gIClcblxuICByZXR1cm4gbG9kYXNoLnJhbmdlKDAsIHdlZWtzQ291bnQpXG4gICAgLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyB3ZWVrICogN1xuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghZS50YXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2Rpc2FibGVkJykgJiYgbG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKG9mZnNldClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gICAgY29uc3Qge2FjdGl2ZU1vbnRoOiBkYXRlLCBzZWxlY3Rpb25Cb3VuZGFyaWVzfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBwcmV2RW5hYmxlZCA9IHRydWVcbiAgICBsZXQgbmV4dEVuYWJsZWQgPSB0cnVlXG5cbiAgICBpZiAoc2VsZWN0aW9uQm91bmRhcmllcyAmJiBzZWxlY3Rpb25Cb3VuZGFyaWVzLm1pbikge1xuICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGlvbkJvdW5kYXJpZXMubWluKVxuICAgICAgcHJldkVuYWJsZWQgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAgKyBkYXRlLmdldE1vbnRoKCkgPiBtaW5EYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAgKyBtaW5EYXRlLmdldE1vbnRoKClcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0aW9uQm91bmRhcmllcyAmJiBzZWxlY3Rpb25Cb3VuZGFyaWVzLm1heCkge1xuICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGlvbkJvdW5kYXJpZXMubWF4KVxuICAgICAgbmV4dEVuYWJsZWQgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAgKyBkYXRlLmdldE1vbnRoKCkgPCBtYXhEYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAgKyBtYXhEYXRlLmdldE1vbnRoKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoLWhlYWRlcic+XG4gICAgICAgIDxhXG4gICAgICAgICAgcmVmPSdwcmV2TW9udGhMaW5rJ1xuICAgICAgICAgIGRpc2FibGVkPXshcHJldkVuYWJsZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXsncHJldi1tb250aCcgKyAocHJldkVuYWJsZWQgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKX1cbiAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgIG9uQ2xpY2s9eyBsb2Rhc2gucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAtMSkuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIHByZXZcbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtdGl0bGUnPlxuICAgICAgICAgIHttW2RhdGUuZ2V0TW9udGgoKV19IHtkYXRlLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIHJlZj0nbmV4dE1vbnRoTGluaydcbiAgICAgICAgICBkaXNhYmxlZD17IW5leHRFbmFibGVkfVxuICAgICAgICAgIGNsYXNzTmFtZT17J25leHQtbW9udGgnICsgKG5leHRFbmFibGVkID8gJycgOiAnIGlzLWRpc2FibGVkJyl9XG4gICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICBvbkNsaWNrPXsgbG9kYXNoLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIG5leHRcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aF9oZWFkZXIuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==