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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _month = __webpack_require__(4);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(19);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _utilsDate_range_to_array = __webpack_require__(15);
	
	var _utilsDate_range_to_array2 = _interopRequireDefault(_utilsDate_range_to_array);
	
	var Calendar = (function (_React$Component) {
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
	
	  _inherits(Calendar, _React$Component);
	
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _week = __webpack_require__(5);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _days_of_week = __webpack_require__(20);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(18);
	
	var _utilsGet_weeks_in_month2 = _interopRequireDefault(_utilsGet_weeks_in_month);
	
	var _utilsIs_date_in_boundaries = __webpack_require__(17);
	
	var _utilsIs_date_in_boundaries2 = _interopRequireDefault(_utilsIs_date_in_boundaries);
	
	var Month = (function (_React$Component) {
	  function Month(props) {
	    _classCallCheck(this, Month);
	
	    _get(Object.getPrototypeOf(Month.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      selectionInProgress: false,
	      selectionStart: null,
	      selectionEnd: null
	    };
	  }
	
	  _inherits(Month, _React$Component);
	
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _day = __webpack_require__(7);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsDate_key = __webpack_require__(13);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsGet_days_in_week = __webpack_require__(6);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsIs_date_in_range = __webpack_require__(14);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
	var _utilsIs_date_in_boundaries = __webpack_require__(17);
	
	var _utilsIs_date_in_boundaries2 = _interopRequireDefault(_utilsIs_date_in_boundaries);
	
	var Week = (function (_React$Component) {
	  function Week() {
	    _classCallCheck(this, Week);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Week, _React$Component);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getDaysInWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	/**
	 * Accepts the first day and returns an array containing 7 days starting
	 * with the first day. Intended for generating days in a week.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	
	function getDaysInWeek(firstDay) {
	  return _lodash2['default'].range(0, 7).map(function (day) {
	    return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + day);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(9);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_same_date = __webpack_require__(10);
	
	var _utilsIs_same_date2 = _interopRequireDefault(_utilsIs_same_date);
	
	var _utilsNo_op = __webpack_require__(11);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(12);
	
	var _utilsPrevent_default2 = _interopRequireDefault(_utilsPrevent_default);
	
	var Day = (function (_React$Component) {
	  function Day() {
	    _classCallCheck(this, Day);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Day, _React$Component);
	
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
/* 8 */
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
	
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
	  return '' + yyyy + '-' + mm + '-' + dd;
	}
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isDateInRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _date_range_to_array = __webpack_require__(15);
	
	var _date_range_to_array2 = _interopRequireDefault(_date_range_to_array);
	
	var _is_date_between = __webpack_require__(16);
	
	var _is_date_between2 = _interopRequireDefault(_is_date_between);
	
	/**
	 * Returns true if date is within the range, false otherwise.
	 * See documentation for dateRangeToArray for details on range formats.
	 *
	 * @param {date} date
	 * @param {object|array|undefined} datesRange
	 * @returns {boolean}
	 */
	
	function isDateInRange(date, datesRange) {
	  var range = (0, _date_range_to_array2['default'])(datesRange);
	  return (0, _is_date_between2['default'])(date, range[0], range[1]);
	}
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = dateRangeToArray;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getWeeksInMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	/**
	 * Accepts the first day of month and returns an array containing
	 * all mondays for all weeks that intersect that month. So, if a month
	 * starts on a Wednesday, the first entry will be the previous monday.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var MonthHeader = (function (_React$Component) {
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(MonthHeader, _React$Component);
	
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var DaysOfWeek = (function (_React$Component) {
	  function DaysOfWeek() {
	    _classCallCheck(this, DaysOfWeek);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(DaysOfWeek, _React$Component);
	
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
	            { className: 'day is-weekday_title' },
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNTM5OWE3MzgxZTY4NTg3N2NiOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3NhbWVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvbm9fb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfcmFuZ2VfdG9fYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9ib3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2RheXNfb2Zfd2Vlay5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkNDdENxQixDQUFxQjs7OztTQUVsQyxRQUFRLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDRkUsQ0FBTzs7OzttQ0FDTixDQUFROzs7O2tDQUNULENBQVM7Ozs7eUNBQ0gsRUFBZ0I7Ozs7cURBRVgsRUFBNkI7Ozs7S0FFckMsUUFBUTtBQUNoQixZQURRLFFBQVEsQ0FDZixLQUFLLEVBQUU7MkJBREEsUUFBUTs7QUFFekIsZ0NBRmlCLFFBQVEsNkNBRW5CLEtBQUssRUFBQzs7QUFFWixTQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7O0FBRXpDLFNBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDeEMsV0FBTSxTQUFTLEdBQUcsMkNBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ3ZELFdBQU0sd0JBQXdCLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELCtCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFD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LElBQUksV0FBVyxHQUFHLEVBQUUsR0FBRyxjQUFjLENBQUU7QUFDOUQsaUJBQUksRUFBQyxHQUFHO0FBQ1Isb0JBQU8sRUFBRyxvQkFBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHOztVQUU5RDtRQUNBLENBQ1A7TUFDRjs7O1VBOUNrQixXQUFXO0lBQVMsbUJBQU0sU0FBUzs7c0JBQW5DLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NIZCxDQUFPOzs7O0tBRUosVUFBVTtZQUFWLFVBQVU7MkJBQVYsVUFBVTs7Ozs7OzthQUFWLFVBQVU7O2dCQUFWLFVBQVU7O1lBQ3ZCLGtCQUFHO0FBQ1AsV0FBTSxVQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFDcEUsY0FDRTs7V0FBSyxTQUFTLEVBQUMsd0JBQXdCO1NBQ3BDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDdkIsa0JBQ0U7O2VBQUssU0FBUyxFQUFDLHNCQUFzQjthQUNsQyxHQUFHO1lBQ0EsQ0FDUDtVQUNGLENBQUM7UUFDRSxDQUNQO01BQ0Y7OztVQWRrQixVQUFVO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWxDLFVBQVUiLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIiksIHJlcXVpcmUoXCJfXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiX1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIiksIHJlcXVpcmUoXCJfXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiX1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY1Mzk5YTczODFlNjg1ODc3Y2I4XG4gKiovIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXInXG5cbmV4cG9ydCB7Q2FsZW5kYXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnXG5pbXBvcnQgTW9udGhIZWFkZXIgZnJvbSAnLi9tb250aF9oZWFkZXInXG5cbmltcG9ydCBkYXRlUmFuZ2VUb0FycmF5IGZyb20gJy4vdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgbGV0IGluaXRpYWxNb250aCA9IHRoaXMucHJvcHMuYWN0aXZlTW9udGhcblxuICAgIGlmICghaW5pdGlhbE1vbnRoICYmIHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRhdGVSYW5nZVRvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZClcbiAgICAgIGNvbnN0IGZpcnN0RGF5T2ZTZWxlY3Rpb25Nb250aCA9IG5ldyBEYXRlKHNlbGVjdGlvblswXSlcbiAgICAgIGZpcnN0RGF5T2ZTZWxlY3Rpb25Nb250aC5zZXREYXRlKDEpXG4gICAgICBpbml0aWFsTW9udGggPSBmaXJzdERheU9mU2VsZWN0aW9uTW9udGhcbiAgICB9XG5cbiAgICBpZiAoIWluaXRpYWxNb250aCkge1xuICAgICAgY29uc3QgZmlyc3REYXlPZkN1cnJlbnRNb250aCA9IG5ldyBEYXRlKHRoaXMucHJvcHMudG9kYXkpXG4gICAgICBmaXJzdERheU9mQ3VycmVudE1vbnRoLnNldERhdGUoMSlcbiAgICAgIGluaXRpYWxNb250aCA9IGZpcnN0RGF5T2ZDdXJyZW50TW9udGhcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlTW9udGg6IGluaXRpYWxNb250aCxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIWxvZGFzaC5pc0VxdWFsKG5leHRQcm9wcy5zZWxlY3RlZCwgdGhpcy5wcm9wcy5zZWxlY3RlZCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogbmV4dFByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9nZXRBY3RpdmVNb250aCgpIHtcbiAgICBpZiAobG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlTW9udGhcbiAgICB9XG4gIH1cblxuICBfc3dpdGNoTW9udGgob2Zmc2V0KSB7XG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0aGlzLl9nZXRBY3RpdmVNb250aCgpKVxuICAgIG1vbnRoLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkgKyBvZmZzZXQpXG5cbiAgICBpZiAobG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKG1vbnRoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlTW9udGg6IG1vbnRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2VkKHNlbGVjdGlvbikge1xuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSAmJiAhc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoXG4gICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3NcbiAgICAgIClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZDogW3NlbGVjdGlvbi5zZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uLnNlbGVjdGlvbkVuZF1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vbnRoUHJvcHMgPSBsb2Rhc2gucGljayh0aGlzLnByb3BzLCBbJ3NlbGVjdGlvbk1vZGUnLCAnZGF0YScsICdzZWxlY3Rpb25Cb3VuZGFyaWVzJywgJ3RvZGF5J10pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRhcic+XG4gICAgICAgIDxNb250aEhlYWRlclxuICAgICAgICAgIHJlZj0naGVhZGVyJ1xuICAgICAgICAgIHNlbGVjdGlvbkJvdW5kYXJpZXM9e3RoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllc31cbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5fZ2V0QWN0aXZlTW9udGgoKX1cbiAgICAgICAgICBvbk1vbnRoQ2hhbmdlPXt0aGlzLl9zd2l0Y2hNb250aC5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8TW9udGhcbiAgICAgICAgICB7IC4uLm1vbnRoUHJvcHMgfVxuICAgICAgICAgIHJlZj0nbW9udGgnXG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMuX2dldEFjdGl2ZU1vbnRoKCl9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NlbGVjdGlvbkNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIHRvZGF5OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgYWN0aXZlTW9udGg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBvbkFjdGl2ZU1vbnRoQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpKSxcbiAgICBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcbiAgb25TZWxlY3Rpb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3Rpb25Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9kYXk6IG5ldyBEYXRlKCksXG4gIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9jYWxlbmRhci5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBXZWVrIGZyb20gJy4vd2VlaydcbmltcG9ydCBEYXlzT2ZXZWVrIGZyb20gJy4vZGF5c19vZl93ZWVrJ1xuaW1wb3J0IGdldFdlZWtzSW5Nb250aCBmcm9tICcuL3V0aWxzL2dldF93ZWVrc19pbl9tb250aCdcbmltcG9ydCBpc0RhdGVJbkJvdW5kYXJpZXMgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiBudWxsLFxuICAgICAgc2VsZWN0aW9uRW5kOiBudWxsXG4gICAgfVxuICB9XG5cbiAgX3B1c2hVcGRhdGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIGxvZGFzaC5waWNrKHRoaXMuc3RhdGUsIFsnc2VsZWN0aW9uU3RhcnQnLCAnc2VsZWN0aW9uRW5kJywgJ3NlbGVjdGlvbkluUHJvZ3Jlc3MnXSlcbiAgICApXG4gIH1cblxuICBfb25EYXlDbGljayhkYXRlKSB7XG4gICAgaWYgKCFpc0RhdGVJbkJvdW5kYXJpZXMoZGF0ZSwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IG5leHRTdGF0ZSA9IHt9XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ3JhbmdlJykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJyB8fCAhdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+IHtcbiAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBfb25EYXlNb3VzZU1vdmUoZGF0ZSkge1xuICAgIGlmICghaXNEYXRlSW5Cb3VuZGFyaWVzKGRhdGUsIHRoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllcykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGlvbkluUHJvZ3Jlc3MgJiYgKCF0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZCB8fCB0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZC5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW9uRW5kOiBkYXRlfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcldlZWtzKCkge1xuICAgIGNvbnN0IHdlZWtzID0gZ2V0V2Vla3NJbk1vbnRoKHRoaXMucHJvcHMuYWN0aXZlTW9udGgpXG4gICAgcmV0dXJuIHdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdlZWtcbiAgICAgICAgICBrZXk9e3dlZWsuZ2V0VGltZSgpfVxuICAgICAgICAgIHJlZj17J3dlZWsnICsgd2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgc3RhcnREYXRlPXt3ZWVrfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLnByb3BzLmFjdGl2ZU1vbnRofVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgIHNlbGVjdGlvbkJvdW5kYXJpZXM9e3RoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllc31cbiAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgdG9kYXk9e3RoaXMucHJvcHMudG9kYXl9XG5cbiAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLl9vbkRheUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmU9e3RoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoJz5cbiAgICAgICAgPERheXNPZldlZWsgLz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJXZWVrcygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBEYXkgZnJvbSAnLi9kYXknXG5pbXBvcnQgZGF0ZUtleSBmcm9tICcuL3V0aWxzL2RhdGVfa2V5J1xuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGlzRGF0ZUluUmFuZ2UgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX3JhbmdlJ1xuaW1wb3J0IGlzRGF0ZUluQm91bmRhcmllcyBmcm9tICcuL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleT17ZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICByZWY9eydkYXknICsgZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICBkYXRlPXtkYXl9XG4gICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhW2RhdGVLZXkoZGF5KV19XG4gICAgICAgICAgc2VsZWN0ZWQ9e2lzRGF0ZUluUmFuZ2UoZGF5LCB0aGlzLnByb3BzLnNlbGVjdGVkKX1cbiAgICAgICAgICBpbkJvdW5kYXJpZXM9e2lzRGF0ZUluQm91bmRhcmllcyhkYXksIHRoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllcyl9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMucHJvcHMuYWN0aXZlTW9udGh9XG4gICAgICAgICAgdG9kYXk9e3RoaXMucHJvcHMudG9kYXl9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkRheUNsaWNrfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLnByb3BzLm9uRGF5TW91c2VNb3ZlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWVrJz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbldlZWsuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdG9kYXk6IG5ldyBEYXRlKClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3dlZWsuanN4XG4gKiovIiwiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgZmlyc3QgZGF5IGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgNyBkYXlzIHN0YXJ0aW5nXG4gKiB3aXRoIHRoZSBmaXJzdCBkYXkuIEludGVuZGVkIGZvciBnZW5lcmF0aW5nIGRheXMgaW4gYSB3ZWVrLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5XZWVrKGZpcnN0RGF5KSB7XG4gIHJldHVybiBsb2Rhc2gucmFuZ2UoMCwgNylcbiAgICAubWFwKChkYXkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgZmlyc3REYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZmlyc3REYXkuZ2V0TW9udGgoKSxcbiAgICAgICAgZmlyc3REYXkuZ2V0RGF0ZSgpICsgZGF5XG4gICAgICApXG4gICAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBpc1dlZWtlbmQgZnJvbSAnLi91dGlscy9pc193ZWVrZW5kJ1xuaW1wb3J0IGlzU2FtZURhdGUgZnJvbSAnLi91dGlscy9pc19zYW1lX2RhdGUnXG5pbXBvcnQgbm9PcCBmcm9tICcuL3V0aWxzL25vX29wJ1xuaW1wb3J0IHByZXZlbnREZWZhdWx0IGZyb20gJy4vdXRpbHMvcHJldmVudF9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9XG4gICAgaWYgKGxvZGFzaC5pc0FycmF5KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMpKSB7XG4gICAgICBjbGFzc2VzID0gbG9kYXNoLnppcE9iamVjdCh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IHsgcmV0dXJuIChbYGlzLSR7bW9kaWZpZXJ9YCwgdHJ1ZV0pfSkpXG4gICAgfVxuICAgIGNsYXNzZXMgPSBsb2Rhc2guYXNzaWduKGNsYXNzZXMsIHtcbiAgICAgIGRheTogdHJ1ZSxcbiAgICAgICdpcy1zZWxlY3RlZCc6IHRoaXMucHJvcHMuc2VsZWN0ZWQsXG4gICAgICAnaXMtd2Vla2VuZCc6IGlzV2Vla2VuZCh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLXdvcmtkYXknOiAhaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtdG9kYXknOiBpc1NhbWVEYXRlKHRoaXMucHJvcHMudG9kYXksIHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtY3VycmVudF9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID09PSB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtcHJldl9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpIDwgdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLW5leHRfbW9udGgnOiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA+IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1zZWxlY3RhYmxlJzogdGhpcy5wcm9wcy5pbkJvdW5kYXJpZXMsXG4gICAgICAnaXMtbm90LXNlbGVjdGFibGUnOiAhdGhpcy5wcm9wcy5pbkJvdW5kYXJpZXNcbiAgICB9KVxuICAgIHJldHVybiBjbGFzc05hbWVzKGNsYXNzZXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLl9nZXRDbGFzc2VzKCl9XG4gICAgICAgIG9uQ2xpY2s9e3ByZXZlbnREZWZhdWx0KGxvZGFzaC5wYXJ0aWFsKHRoaXMucHJvcHMub25DbGljaywgdGhpcy5wcm9wcy5kYXRlKSl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXtwcmV2ZW50RGVmYXVsdChsb2Rhc2gucGFydGlhbCh0aGlzLnByb3BzLm9uTW91c2VNb3ZlLCB0aGlzLnByb3BzLmRhdGUpKX1cbiAgICAgID5cbiAgICAgICAge25ldyBEYXRlKHRoaXMucHJvcHMuZGF0ZSkuZ2V0RGF0ZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkRheS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICB0b2RheTogbmV3IERhdGUoKSxcbiAgb25DbGljazogbm9PcCxcbiAgb25Nb3VzZU1vdmU6IG5vT3Bcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIG9uIHRoZSB3ZWVrZW5kIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2Vla2VuZChkYXRlKSB7XG4gIHJldHVybiAoZGF0ZS5nZXREYXkoKSA9PT0gMCB8fCBkYXRlLmdldERheSgpID09PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURhdGUoZGF0ZTEsIGRhdGUyKSB7XG4gIHJldHVybiAoXG4gICAgKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpICYmXG4gICAgKGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkpICYmXG4gICAgKGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19zYW1lX2RhdGUuanNcbiAqKi8iLCIvKiogQSBubyBvcCBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgZGVmYXVsdCB2YWx1ZSBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcHJvcHMuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub09wKCkge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZnVuYykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCwgZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qc1xuICoqLyIsIi8qKlxuICogQWNjZXB0cyBhIGRhdGUgb3IgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBkYXRlIGFuZCByZXR1cm5zXG4gKiBhIHN0cmluZyBzdWl0YWJsZSB0byBiZSB1c2VkIGFzIGEga2V5IGluIHRoZSBmb3JtYXQ6IFlZWVktTU0tRERcbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlS2V5KGRhdGUpIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW0gPSAoJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcbiAgY29uc3QgZGQgPSAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKVxuICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qc1xuICoqLyIsImltcG9ydCBkYXRlUmFuZ2VUb0FycmF5IGZyb20gJy4vZGF0ZV9yYW5nZV90b19hcnJheSdcbmltcG9ydCBpc0RhdGVCZXR3ZWVuIGZyb20gJy4vaXNfZGF0ZV9iZXR3ZWVuJ1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGlzIHdpdGhpbiB0aGUgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cbiAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBkYXRlUmFuZ2VUb0FycmF5IGZvciBkZXRhaWxzIG9uIHJhbmdlIGZvcm1hdHMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IGRhdGVzUmFuZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgY29uc3QgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoICdzdGFydCcgYW5kL29yICdlbmQnIHByb3BlcnRpZXMgd2l0aCBkYXRlc1xuICogIC0gYW4gYXJyYXkgd2l0aCAxIG9yIDIgZGF0ZXNcbiAqICAtIG5vdGhpbmdcbiAqXG4gKiBJbiBhbGwgdGhlIGNhc2VzIGl0IHJldHVybnMgYW4gYXJyYXkgd2l0aCB0d28gdmFsdWVzIHRoYXQgYXJlIERhdGUgb2JqZWN0XG4gKiByZXByZXNlbnRpbmcgc3RhcnQgYW5kIGVuZCBvZiBhIHJhbmdlLiBJbiBjYXNlcyB3aGVyZSBlaXRoZXIgc3RhcnQgb3IgZW5kXG4gKiBlbmQgaXMgbWlzc2luZyBpdCBkZWZhdWx0cyB0byBjdXJyZW50IERhdGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlUmFuZ2VUb0FycmF5KHZhbHVlKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAobG9kYXNoLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5lbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHJlc2V0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlKVxuICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCBkYXRlT2JqLmdldE1vbnRoKCksIGRhdGVPYmouZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgY29uc3QgZnJvbVRpbWUgPSByZXNldERhdGUoZGF0ZUZyb20pLmdldFRpbWUoKVxuICBjb25zdCB0b1RpbWUgPSByZXNldERhdGUoZGF0ZVRvKS5nZXRUaW1lKClcbiAgY29uc3QgbWluID0gTWF0aC5taW4oZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgdGltZSA9IHJlc2V0RGF0ZShkYXRlKS5nZXRUaW1lKClcbiAgcmV0dXJuICh0aW1lID49IG1pbiAmJiB0aW1lIDw9IG1heClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qc1xuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgaW5zaWRlIGJvdW5kYXJpZXMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gYm91bmRhcmllc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gcmVzZXREYXRlKGRhdGUpIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIGRhdGVPYmouZ2V0TW9udGgoKSwgZGF0ZU9iai5nZXREYXRlKCksIDAsIDAsIDAsIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCBib3VuZGFyaWVzKSB7XG4gIGNvbnN0IHRpbWUgPSByZXNldERhdGUoZGF0ZSkuZ2V0VGltZSgpXG4gIGNvbnN0IG1pbiA9IGJvdW5kYXJpZXMgJiYgYm91bmRhcmllcy5taW4gJiYgcmVzZXREYXRlKGJvdW5kYXJpZXMubWluKS5nZXRUaW1lKClcbiAgY29uc3QgbWF4ID0gYm91bmRhcmllcyAmJiBib3VuZGFyaWVzLm1heCAmJiByZXNldERhdGUoYm91bmRhcmllcy5tYXgpLmdldFRpbWUoKVxuXG4gIGlmIChtaW4gJiYgbWluID4gdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChtYXggJiYgbWF4IDwgdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgb2YgbW9udGggYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZ1xuICogYWxsIG1vbmRheXMgZm9yIGFsbCB3ZWVrcyB0aGF0IGludGVyc2VjdCB0aGF0IG1vbnRoLiBTbywgaWYgYSBtb250aFxuICogc3RhcnRzIG9uIGEgV2VkbmVzZGF5LCB0aGUgZmlyc3QgZW50cnkgd2lsbCBiZSB0aGUgcHJldmlvdXMgbW9uZGF5LlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgobW9udGgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGguZ2V0TW9udGgoKSxcbiAgICBtb250aC5nZXREYXRlKClcbiAgKVxuXG4gIGNvbnN0IGRheXNGcm9tV2Vla1N0YXJ0ID0gKGRhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcblxuICBjb25zdCB3ZWVrc0NvdW50ID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCArIGRheXNGcm9tV2Vla1N0YXJ0KSAvIDcpXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSAtIGRheXNGcm9tV2Vla1N0YXJ0XG4gIClcblxuICByZXR1cm4gbG9kYXNoLnJhbmdlKDAsIHdlZWtzQ291bnQpXG4gICAgLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyB3ZWVrICogN1xuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghZS50YXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2Rpc2FibGVkJykgJiYgbG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKG9mZnNldClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gICAgY29uc3Qge2FjdGl2ZU1vbnRoOiBkYXRlLCBzZWxlY3Rpb25Cb3VuZGFyaWVzfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBwcmV2RW5hYmxlZCA9IHRydWVcbiAgICBsZXQgbmV4dEVuYWJsZWQgPSB0cnVlXG4gICAgaWYgKHNlbGVjdGlvbkJvdW5kYXJpZXMgJiYgc2VsZWN0aW9uQm91bmRhcmllcy5taW4pIHtcbiAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShzZWxlY3Rpb25Cb3VuZGFyaWVzLm1pbilcbiAgICAgIHByZXZFbmFibGVkID0gZGF0ZS5nZXRGdWxsWWVhcigpICogMTAwICsgZGF0ZS5nZXRNb250aCgpID4gbWluRGF0ZS5nZXRGdWxsWWVhcigpICogMTAwICsgbWluRGF0ZS5nZXRNb250aCgpXG4gICAgfVxuICAgIGlmIChzZWxlY3Rpb25Cb3VuZGFyaWVzICYmIHNlbGVjdGlvbkJvdW5kYXJpZXMubWF4KSB7XG4gICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoc2VsZWN0aW9uQm91bmRhcmllcy5tYXgpXG4gICAgICBuZXh0RW5hYmxlZCA9IGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMCArIGRhdGUuZ2V0TW9udGgoKSA8IG1heERhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMCArIG1heERhdGUuZ2V0TW9udGgoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtaGVhZGVyJz5cbiAgICAgICAgPGFcbiAgICAgICAgICByZWY9J3ByZXZNb250aExpbmsnXG4gICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2RW5hYmxlZH1cbiAgICAgICAgICBjbGFzc05hbWU9eydwcmV2LW1vbnRoJyArIChwcmV2RW5hYmxlZCA/ICcnIDogJyBpcy1kaXNhYmxlZCcpfVxuICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgb25DbGljaz17IGxvZGFzaC5wYXJ0aWFsUmlnaHQodGhpcy5fc3dpdGNoTW9udGgsIC0xKS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgcHJldlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aC10aXRsZSc+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgcmVmPSduZXh0TW9udGhMaW5rJ1xuICAgICAgICAgIGRpc2FibGVkPXshbmV4dEVuYWJsZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbmV4dC1tb250aCcgKyAobmV4dEVuYWJsZWQgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKX1cbiAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgIG9uQ2xpY2s9eyBsb2Rhc2gucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAxKS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgbmV4dFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheXNPZldlZWsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnLCAnU3VuJ11cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dlZWsgaXMtd2Vla2RheV9oZWFkZXInPlxuICAgICAgICB7ZGF5c09mV2Vlay5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheSBpcy13ZWVrZGF5X3RpdGxlXCI+XG4gICAgICAgICAgICAgIHtkYXl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9kYXlzX29mX3dlZWsuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==