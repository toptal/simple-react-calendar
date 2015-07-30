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
	
	var _month_header = __webpack_require__(19);
	
	/*
	  activeMonth — Date, default `new Date()`
	  onActiveMonthChange — function
	
	  selected — object | default false
	  onSelect — function
	
	  selectionMode — string | default 'single'
	*/
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	
	    var firstDayOfMonth = this.props.activeMonth;
	    firstDayOfMonth.setDate(1);
	    this.state = {
	      activeMonth: firstDayOfMonth,
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
	      var monthProps = _lodash2['default'].pick(this.props, ['selectionMode', 'data', 'selectionBoundaries']);
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'calendar' },
	        _react2['default'].createElement(_month_header2['default'], {
	          ref: 'header',
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
	  activeMonth: _react2['default'].PropTypes.instanceOf(Date),
	  onActiveMonthChange: _react2['default'].PropTypes.func,
	  selected: _react2['default'].PropTypes.object,
	  onSelectionChange: _react2['default'].PropTypes.func,
	  selectionMode: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.object
	};
	
	Calendar.defaultProps = {
	  activeMonth: new Date(),
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
	
	var _week = __webpack_require__(5);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(17);
	
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
	          data: _this3.props.data,
	
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
	
	var _day = __webpack_require__(6);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsDate_key = __webpack_require__(12);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsGet_days_in_week = __webpack_require__(13);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsIs_date_in_range = __webpack_require__(14);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
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
	          activeMonth: _this.props.activeMonth,
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
	  data: {}
	};
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
	
	var _lodash = __webpack_require__(3);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(8);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_today = __webpack_require__(9);
	
	var _utilsIs_today2 = _interopRequireDefault(_utilsIs_today);
	
	var _utilsNo_op = __webpack_require__(10);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(11);
	
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
	        'is-today': (0, _utilsIs_today2['default'])(this.props.date),
	        'is-current_month': this.props.date.getMonth() === this.props.activeMonth.getMonth(),
	        'is-prev_month': this.props.date.getMonth() < this.props.activeMonth.getMonth(),
	        'is-next_month': this.props.date.getMonth() > this.props.activeMonth.getMonth()
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
	  onClick: _utilsNo_op2['default'],
	  onMouseMove: _utilsNo_op2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	/**
	 * Returns true if date is today and false otherwise.
	 *
	 * @param {date} date
	 * @returns {boolean}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isToday;
	
	function isToday(date) {
	  var today = new Date();
	  return today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate();
	}
	
	module.exports = exports["default"];

/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 15 */
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
	
	function isDateBetween(date, dateFrom, dateTo) {
	  var fromTime = new Date(dateFrom).getTime();
	  var toTime = new Date(dateTo).getTime();
	  var min = Math.min(fromTime, toTime);
	  var max = Math.max(fromTime, toTime);
	  var time = date.getTime();
	  return time >= min && time <= max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
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
	
	function isDateInBoundaries(date, boundaries) {
	  var time = date.getTime();
	  if (boundaries && boundaries.min && boundaries.min.getTime() > time) {
	    return false;
	  }
	  if (boundaries && boundaries.max && boundaries.max.getTime() < time) {
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
	      if (_lodash2['default'].isFunction(this.props.onMonthChange)) {
	        this.props.onMonthChange(offset);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var m = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	      var date = this.props.activeMonth;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'month-header' },
	        _react2['default'].createElement(
	          'a',
	          { ref: 'prevMonthLink', className: 'prev-month', href: '#', onClick: _lodash2['default'].partialRight(this._switchMonth, -1).bind(this) },
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
	          { ref: 'nextMonthLink', className: 'next-month', href: '#', onClick: _lodash2['default'].partialRight(this._switchMonth, 1).bind(this) },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZmNmZWJmZjFlODhlNzBlNWY3NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3RvZGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9ub19vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs2Q0N0Q3FCLENBQXFCOzs7O1NBRWxDLFFBQVEsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NGRSxDQUFPOzs7O21DQUNOLENBQVE7Ozs7a0NBQ1QsQ0FBUzs7Ozt5Q0FDSCxFQUFnQjs7Ozs7Ozs7Ozs7Ozs7S0FZbkIsUUFBUTthQUFSLFFBQVE7O0FBQ2hCLFlBRFEsUUFBUSxDQUNmLEtBQUssRUFBRTsyQkFEQSxRQUFROztBQUV6QixnQ0FGaUIsUUFBUSw2Q0FFbkIsS0FBSyxFQUFDOztBQUVaLFNBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztBQUM5QyxvQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUIsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLGtCQUFXLEVBQUUsZUFBZTtBQUM1QixlQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO01BQzlCO0lBQ0Y7O2dCQVZrQixRQUFROztZQVlGLG1DQUFDLFNBQVMsRUFBRTtBQUNuQyxXQUFJLENBQUMsb0JBQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM1RCxhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osbUJBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7TUFDRjs7O1lBRWMsMkJBQUc7QUFDaEIsV0FBSSxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO0FBQ3JELGdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztRQUM5QixNQUFNO0FBQ0wsZ0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQzlCO01BQ0Y7OztZQUVXLHNCQUFDLE1BQU0sRUFBRTtBQUNuQixXQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUMsWUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDOztBQUV6QyxXQUFJLG9CQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDckQsYUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7UUFDdEMsTUFBTTtBQUNMLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixzQkFBVyxFQUFFLEtBQUs7VUFDbkIsQ0FBQztRQUNIO01BQ0Y7OztZQUVnQiwyQkFBQyxTQUFTLEVBQUU7QUFDM0IsV0FBSSxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTtBQUM1RSxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsU0FBUyxDQUFDLFlBQVksRUFDdEIsU0FBUyxDQUFDLG1CQUFtQixDQUM5QjtRQUNGO0FBQ0QsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGlCQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDN0QsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLFdBQU0sVUFBVSxHQUFHLG9CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztBQUU1RixjQUNFOztXQUFLLFNBQVMsRUFBQyxVQUFVO1NBQ3ZCO0FBQ0UsY0FBRyxFQUFDLFFBQVE7QUFDWixzQkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUc7QUFDcEMsd0JBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7V0FDNUM7U0FDRixrRUFDTyxVQUFVO0FBQ2YsY0FBRyxFQUFDLE9BQU87QUFDWCxzQkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUc7QUFDcEMsbUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7QUFDOUIsbUJBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtZQUM1QztRQUNFLENBQ1A7TUFDRjs7O1VBekVrQixRQUFRO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWhDLFFBQVE7O0FBNEU3QixTQUFRLENBQUMsU0FBUyxHQUFHO0FBQ25CLGNBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUM3QyxzQkFBbUIsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUN6QyxXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsb0JBQWlCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDdkMsZ0JBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNyQyxPQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDN0I7O0FBRUQsU0FBUSxDQUFDLFlBQVksR0FBRztBQUN0QixjQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDdkIsZ0JBQWEsRUFBRSxRQUFRO0VBQ3hCOzs7Ozs7O0FDdkdELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7OzttQ0FDTixDQUFROzs7O2lDQUVWLENBQVE7Ozs7b0RBQ0csRUFBNEI7Ozs7dURBQ3pCLEVBQStCOzs7O0tBRXpDLEtBQUs7YUFBTCxLQUFLOztBQUNiLFlBRFEsS0FBSyxDQUNaLEtBQUssRUFBRTsyQkFEQSxLQUFLOztBQUV0QixnQ0FGaUIsS0FBSyw2Q0FFaEIsS0FBSyxFQUFDOztBQUVaLFNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCwwQkFBbUIsRUFBRSxLQUFLO0FBQzFCLHFCQUFjLEVBQUUsSUFBSTtBQUNwQixtQkFBWSxFQUFFLElBQUk7TUFDbkI7SUFDRjs7Z0JBVGtCLEtBQUs7O1lBV2IsdUJBQUc7QUFDWixXQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsb0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUNuRjtNQUNGOzs7WUFFVSxxQkFBQyxJQUFJLEVBQUU7OztBQUNoQixXQUFJLENBQUMsNkNBQW1CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDN0QsZ0JBQU8sS0FBSztRQUNiOztBQUVELFdBQUksU0FBUyxHQUFHLEVBQUU7QUFDbEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxPQUFPLEVBQUU7QUFDeEMsYUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0FBQ2xDLG9CQUFTLEdBQUc7QUFDVixnQ0FBbUIsRUFBRSxLQUFLO0FBQzFCLDJCQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7QUFDdkcseUJBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSTtZQUN0RztVQUNGLE1BQU07QUFDTCxvQkFBUyxHQUFHO0FBQ1YsZ0NBQW1CLEVBQUUsSUFBSTtBQUN6QiwyQkFBYyxFQUFFLElBQUk7QUFDcEIseUJBQVksRUFBRSxJQUFJO1lBQ25CO1VBQ0Y7UUFDRixNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7QUFDN0Usa0JBQVMsR0FBRztBQUNWLHlCQUFjLEVBQUUsSUFBSTtBQUNwQix1QkFBWSxFQUFFLElBQUk7VUFDbkI7UUFDRjtBQUNELFdBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDN0IsZUFBSyxXQUFXLEVBQUU7UUFDbkIsQ0FBQztNQUNIOzs7WUFFYyx5QkFBQyxJQUFJLEVBQUU7OztBQUNwQixXQUFJLENBQUMsNkNBQW1CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDN0QsZ0JBQU8sS0FBSztRQUNiOztBQUVELFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO0FBQ3hILGFBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLEVBQUUsWUFBTTtBQUN4QyxrQkFBSyxXQUFXLEVBQUU7VUFDbkIsQ0FBQztRQUNIO01BQ0Y7OztZQUVXLHdCQUFHOzs7QUFDYixXQUFNLEtBQUssR0FBRywwQ0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDckQsY0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3pCLGdCQUNFO0FBQ0UsY0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUc7QUFDcEIsY0FBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQzdCLG9CQUFTLEVBQUUsSUFBSztBQUNoQixzQkFBVyxFQUFFLE9BQUssS0FBSyxDQUFDLFdBQVk7QUFDcEMsbUJBQVEsRUFBRSxPQUFLLEtBQUssQ0FBQyxRQUFTO0FBQzlCLGVBQUksRUFBRSxPQUFLLEtBQUssQ0FBQyxJQUFLOztBQUV0QixxQkFBVSxFQUFFLE9BQUssV0FBVyxDQUFDLElBQUksUUFBTztBQUN4Qyx5QkFBYyxFQUFFLE9BQUssZUFBZSxDQUFDLElBQUksUUFBTztXQUNoRCxDQUNIO1FBQ0YsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLE9BQU87U0FDbEIsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixDQUNQO01BQ0Y7OztVQXJGa0IsS0FBSztJQUFTLG1CQUFNLFNBQVM7O3NCQUE3QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NQUixDQUFPOzs7O2dDQUVULENBQU87Ozs7MENBQ0gsRUFBa0I7Ozs7a0RBQ1osRUFBMEI7Ozs7a0RBQzFCLEVBQTBCOzs7O0tBRS9CLElBQUk7YUFBSixJQUFJOztZQUFKLElBQUk7MkJBQUosSUFBSTs7Z0NBQUosSUFBSTs7O2dCQUFKLElBQUk7O1lBQ1osdUJBQUc7OztBQUNaLGNBQU8sd0NBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDdEQsZ0JBQ0U7QUFDRSxjQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRztBQUNuQixjQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUc7QUFDM0IsZUFBSSxFQUFFLEdBQUk7QUFDVixlQUFJLEVBQUUsTUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFRLEdBQUcsQ0FBQyxDQUFFO0FBQ3BDLG1CQUFRLEVBQUUsd0NBQWMsR0FBRyxFQUFFLE1BQUssS0FBSyxDQUFDLFFBQVEsQ0FBRTtBQUNsRCxzQkFBVyxFQUFFLE1BQUssS0FBSyxDQUFDLFdBQVk7QUFDcEMsa0JBQU8sRUFBRSxNQUFLLEtBQUssQ0FBQyxVQUFXO0FBQy9CLHNCQUFXLEVBQUUsTUFBSyxLQUFLLENBQUMsY0FBZTtXQUN2QyxDQUNIO1FBQ0YsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLE1BQU07U0FDakIsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixDQUNQO01BQ0Y7OztVQXhCa0IsSUFBSTtJQUFTLG1CQUFNLFNBQVM7O3NCQUE1QixJQUFJOztBQTJCekIsS0FBSSxDQUFDLFlBQVksR0FBRztBQUNsQixPQUFJLEVBQUUsRUFBRTtFQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NwQ2lCLENBQU87Ozs7bUNBQ04sQ0FBUTs7Ozt1Q0FDSixDQUFZOzs7OzRDQUViLENBQW9COzs7OzBDQUN0QixDQUFrQjs7Ozt1Q0FDckIsRUFBZTs7OztpREFDTCxFQUF5Qjs7OztLQUUvQixHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUNYLHVCQUFHO0FBQ1osV0FBSSxPQUFPLEdBQUcsRUFBRTtBQUNoQixXQUFJLG9CQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3QyxnQkFBTyxHQUFHLG9CQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQUUsa0JBQVEsU0FBTyxRQUFRLEVBQUksSUFBSSxDQUFDLENBQUM7VUFBQyxDQUFDLENBQUM7UUFDOUc7QUFDRCxjQUFPLEdBQUcsb0JBQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUMvQixZQUFHLEVBQUUsSUFBSTtBQUNULHNCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ2xDLHFCQUFZLEVBQUUsa0NBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDeEMscUJBQVksRUFBRSxDQUFDLGtDQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3pDLG1CQUFVLEVBQUUsZ0NBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDcEMsMkJBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ3BGLHdCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQy9FLHdCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQ2hGLENBQUM7O0FBRUYsY0FBTyw2QkFBVyxPQUFPLENBQUM7TUFDM0I7OztZQUVLLGtCQUFHO0FBQ1AsY0FDRTs7O0FBQ0Usb0JBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFHO0FBQzlCLGtCQUFPLEVBQUUsdUNBQWUsb0JBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUU7QUFDN0Usc0JBQVcsRUFBRSx1Q0FBZSxvQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTs7U0FFcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDaEMsQ0FDUDtNQUNGOzs7VUE5QmtCLEdBQUc7SUFBUyxtQkFBTSxTQUFTOztzQkFBM0IsR0FBRzs7QUFpQ3hCLElBQUcsQ0FBQyxZQUFZLEdBQUc7QUFDakIsT0FBSSxFQUFFLEVBQUU7QUFDUixVQUFPLHlCQUFNO0FBQ2IsY0FBVyx5QkFBTTtFQUNsQjs7Ozs7OztBQzlDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSTtBQUNKOztBQUVBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkMxQ3VCLFNBQVM7O0FBQWxCLFVBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUN0QyxVQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkNGdUIsT0FBTzs7QUFBaEIsVUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3BDLE9BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ3hCLFVBQ0csS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFDMUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUcsSUFDckMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUcsQ0FDckM7RUFDRjs7Ozs7Ozs7Ozs7Ozs7c0JDWnVCLElBQUk7O0FBQWIsVUFBUyxJQUFJLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7OztzQkNEVCxjQUFjOztBQUF2QixVQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7QUFDM0MsT0FBTSxJQUFJLEdBQUcsSUFBSTtBQUNqQixVQUFPLFVBQVMsQ0FBQyxFQUFFO0FBQ2pCLE1BQUMsQ0FBQyxjQUFjLEVBQUU7QUFDbEIsU0FBSSxJQUFJLEVBQUU7QUFDUixXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7TUFDbkI7SUFDRjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkNEdUIsT0FBTzs7QUFBaEIsVUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3BDLE9BQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckIsT0FBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMvQixPQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELE9BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsVUFBVSxJQUFJLFNBQUksRUFBRSxTQUFJLEVBQUUsQ0FBRTtFQUM3Qjs7Ozs7Ozs7Ozs7OztzQkNKdUIsYUFBYTs7OzttQ0FUbEIsQ0FBUTs7Ozs7Ozs7Ozs7O0FBU1osVUFBUyxhQUFhLENBQUMsUUFBUSxFQUFFO0FBQzlDLFVBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDdEIsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ1osWUFBTyxJQUFJLElBQUksQ0FDYixRQUFRLENBQUMsV0FBVyxFQUFFLEVBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFDbkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FDekI7SUFDRixDQUFDO0VBQ0w7Ozs7Ozs7Ozs7Ozs7c0JDUHVCLGFBQWE7Ozs7Z0RBWFIsRUFBdUI7Ozs7NENBQzFCLEVBQW1COzs7Ozs7Ozs7Ozs7O0FBVTlCLFVBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDdEQsT0FBTSxLQUFLLEdBQUcsc0NBQWlCLFVBQVUsQ0FBQztBQUMxQyxVQUFPLGtDQUFjLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQy9DOzs7Ozs7Ozs7Ozs7O3NCQ0N1QixnQkFBZ0I7Ozs7bUNBZnJCLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVaLFVBQVMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO0FBQzlDLE9BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFOztBQUV0QixPQUFJLG9CQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQixZQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQy9CLFlBQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzlELE1BQU07QUFDTCxZQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNsQjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDakJ1QixhQUFhOztBQUF0QixVQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUM1RCxPQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUU7QUFDN0MsT0FBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQ3pDLE9BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUN0QyxPQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7QUFDdEMsT0FBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMzQixVQUFRLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztFQUNwQzs7Ozs7Ozs7Ozs7OztzQkNMdUIsZUFBZTs7OzttQ0FWcEIsQ0FBUTs7Ozs7Ozs7Ozs7OztBQVVaLFVBQVMsZUFBZSxDQUFDLEtBQUssRUFBRTtBQUM3QyxPQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FDbkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsUUFBUSxFQUFFLEVBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FDaEI7O0FBRUQsT0FBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsRCxPQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7O0FBRWxGLE9BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxDQUFDO0FBQ25FLE9BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixDQUFDLEdBQUcsaUJBQWlCLENBQ3RCOztBQUVELFVBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FDL0IsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ2IsWUFBTyxJQUFJLElBQUksQ0FDYixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLENBQy9CO0lBQ0YsQ0FBQztFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkM1QnVCLGtCQUFrQjs7QUFBM0IsVUFBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQzNELE9BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDM0IsT0FBSSxVQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksRUFBRTtBQUNuRSxZQUFPLEtBQUs7SUFDYjtBQUNELE9BQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUU7QUFDbkUsWUFBTyxLQUFLO0lBQ2I7QUFDRCxVQUFPLElBQUk7RUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2hCaUIsQ0FBTzs7OzttQ0FDTixDQUFROzs7O0tBRU4sV0FBVzthQUFYLFdBQVc7O1lBQVgsV0FBVzsyQkFBWCxXQUFXOztnQ0FBWCxXQUFXOzs7Z0JBQVgsV0FBVzs7WUFDbEIsc0JBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDMUIsUUFBQyxDQUFDLGNBQWMsRUFBRTtBQUNsQixXQUFJLG9CQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQy9DLGFBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqQztNQUNGOzs7WUFFSyxrQkFBRztBQUNQLFdBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFDOUYsV0FBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBQ25DLGNBQ0U7O1dBQUssU0FBUyxFQUFDLGNBQWM7U0FDM0I7O2FBQUcsR0FBRyxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFHLG9CQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztTQUNqSTs7YUFBSyxTQUFTLEVBQUMsYUFBYTtXQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztXQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7VUFDcEM7U0FDTjs7YUFBRyxHQUFHLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsb0JBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztRQUM1SCxDQUNQO01BQ0Y7OztVQXBCa0IsV0FBVztJQUFTLG1CQUFNLFNBQVM7O3NCQUFuQyxXQUFXIiwiZmlsZSI6InNpbXBsZS1jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpLCByZXF1aXJlKFwiX1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiLCBcIl9cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpLCByZXF1aXJlKFwiX1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIl9cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmNmZWJmZjFlODhlNzBlNWY3N1xuICoqLyIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyJ1xuXG5leHBvcnQge0NhbGVuZGFyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBNb250aCBmcm9tICcuL21vbnRoJ1xuaW1wb3J0IE1vbnRoSGVhZGVyIGZyb20gJy4vbW9udGhfaGVhZGVyJ1xuXG4vKlxuICBhY3RpdmVNb250aCDigJQgRGF0ZSwgZGVmYXVsdCBgbmV3IERhdGUoKWBcbiAgb25BY3RpdmVNb250aENoYW5nZSDigJQgZnVuY3Rpb25cblxuICBzZWxlY3RlZCDigJQgb2JqZWN0IHwgZGVmYXVsdCBmYWxzZVxuICBvblNlbGVjdCDigJQgZnVuY3Rpb25cblxuICBzZWxlY3Rpb25Nb2RlIOKAlCBzdHJpbmcgfCBkZWZhdWx0ICdzaW5nbGUnXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoXG4gICAgZmlyc3REYXlPZk1vbnRoLnNldERhdGUoMSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlTW9udGg6IGZpcnN0RGF5T2ZNb250aCxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIWxvZGFzaC5pc0VxdWFsKG5leHRQcm9wcy5zZWxlY3RlZCwgdGhpcy5wcm9wcy5zZWxlY3RlZCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogbmV4dFByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9nZXRBY3RpdmVNb250aCgpIHtcbiAgICBpZiAobG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlTW9udGhcbiAgICB9XG4gIH1cblxuICBfc3dpdGNoTW9udGgob2Zmc2V0KSB7XG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0aGlzLl9nZXRBY3RpdmVNb250aCgpKVxuICAgIG1vbnRoLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkgKyBvZmZzZXQpXG5cbiAgICBpZiAobG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKG1vbnRoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlTW9udGg6IG1vbnRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2VkKHNlbGVjdGlvbikge1xuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSAmJiAhc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoXG4gICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3NcbiAgICAgIClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZDogW3NlbGVjdGlvbi5zZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uLnNlbGVjdGlvbkVuZF1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vbnRoUHJvcHMgPSBsb2Rhc2gucGljayh0aGlzLnByb3BzLCBbJ3NlbGVjdGlvbk1vZGUnLCAnZGF0YScsICdzZWxlY3Rpb25Cb3VuZGFyaWVzJ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGFyJz5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgcmVmPSdoZWFkZXInXG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMuX2dldEFjdGl2ZU1vbnRoKCl9XG4gICAgICAgICAgb25Nb250aENoYW5nZT17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vbnRoXG4gICAgICAgICAgeyAuLi5tb250aFByb3BzIH1cbiAgICAgICAgICByZWY9J21vbnRoJ1xuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9nZXRBY3RpdmVNb250aCgpfVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICBhY3RpdmVNb250aDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgb25TZWxlY3Rpb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3Rpb25Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlTW9udGg6IG5ldyBEYXRlKCksXG4gIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9jYWxlbmRhci5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBXZWVrIGZyb20gJy4vd2VlaydcbmltcG9ydCBnZXRXZWVrc0luTW9udGggZnJvbSAnLi91dGlscy9nZXRfd2Vla3NfaW5fbW9udGgnXG5pbXBvcnQgaXNEYXRlSW5Cb3VuZGFyaWVzIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9ib3VuZGFyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICBzZWxlY3Rpb25TdGFydDogbnVsbCxcbiAgICAgIHNlbGVjdGlvbkVuZDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9wdXNoVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICBsb2Rhc2gucGljayh0aGlzLnN0YXRlLCBbJ3NlbGVjdGlvblN0YXJ0JywgJ3NlbGVjdGlvbkVuZCcsICdzZWxlY3Rpb25JblByb2dyZXNzJ10pXG4gICAgKVxuICB9XG5cbiAgX29uRGF5Q2xpY2soZGF0ZSkge1xuICAgIGlmICghaXNEYXRlSW5Cb3VuZGFyaWVzKGRhdGUsIHRoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllcykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBuZXh0U3RhdGUgPSB7fVxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdyYW5nZScpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0LmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpID8gdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydCA6IGRhdGUsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kOiB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0LmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpID8gdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydCA6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZScgfHwgIXRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBpZiAoIWlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCB0aGlzLnByb3BzLnNlbGVjdGlvbkJvdW5kYXJpZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzICYmICghdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQgfHwgdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQuZ2V0VGltZSgpICE9PSBkYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGlvbkVuZDogZGF0ZX0sICgpID0+IHtcbiAgICAgICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJXZWVrcygpIHtcbiAgICBjb25zdCB3ZWVrcyA9IGdldFdlZWtzSW5Nb250aCh0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKVxuICAgIHJldHVybiB3ZWVrcy5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXZWVrXG4gICAgICAgICAga2V5PXt3ZWVrLmdldFRpbWUoKX1cbiAgICAgICAgICByZWY9eyd3ZWVrJyArIHdlZWsuZ2V0VGltZSgpfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17d2Vla31cbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5wcm9wcy5hY3RpdmVNb250aH1cbiAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cbiAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLl9vbkRheUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmU9e3RoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoJz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJXZWVrcygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBEYXkgZnJvbSAnLi9kYXknXG5pbXBvcnQgZGF0ZUtleSBmcm9tICcuL3V0aWxzL2RhdGVfa2V5J1xuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGlzRGF0ZUluUmFuZ2UgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX3JhbmdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX3JlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIGdldERheXNJbldlZWsodGhpcy5wcm9wcy5zdGFydERhdGUpLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF5XG4gICAgICAgICAga2V5PXtkYXkuZ2V0VGltZSgpfVxuICAgICAgICAgIHJlZj17J2RheScgKyBkYXkuZ2V0VGltZSgpfVxuICAgICAgICAgIGRhdGU9e2RheX1cbiAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFbZGF0ZUtleShkYXkpXX1cbiAgICAgICAgICBzZWxlY3RlZD17aXNEYXRlSW5SYW5nZShkYXksIHRoaXMucHJvcHMuc2VsZWN0ZWQpfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLnByb3BzLmFjdGl2ZU1vbnRofVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EYXlDbGlja31cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5wcm9wcy5vbkRheU1vdXNlTW92ZX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2Vlayc+XG4gICAgICAgIHsgdGhpcy5fcmVuZGVyRGF5cygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5XZWVrLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge31cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3dlZWsuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgaXNXZWVrZW5kIGZyb20gJy4vdXRpbHMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1RvZGF5IGZyb20gJy4vdXRpbHMvaXNfdG9kYXknXG5pbXBvcnQgbm9PcCBmcm9tICcuL3V0aWxzL25vX29wJ1xuaW1wb3J0IHByZXZlbnREZWZhdWx0IGZyb20gJy4vdXRpbHMvcHJldmVudF9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9XG4gICAgaWYgKGxvZGFzaC5pc0FycmF5KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMpKSB7XG4gICAgICBjbGFzc2VzID0gbG9kYXNoLnppcE9iamVjdCh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IHsgcmV0dXJuIChbYGlzLSR7bW9kaWZpZXJ9YCwgdHJ1ZV0pfSkpXG4gICAgfVxuICAgIGNsYXNzZXMgPSBsb2Rhc2guYXNzaWduKGNsYXNzZXMsIHtcbiAgICAgIGRheTogdHJ1ZSxcbiAgICAgICdpcy1zZWxlY3RlZCc6IHRoaXMucHJvcHMuc2VsZWN0ZWQsXG4gICAgICAnaXMtd2Vla2VuZCc6IGlzV2Vla2VuZCh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLXdvcmtkYXknOiAhaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtdG9kYXknOiBpc1RvZGF5KHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtY3VycmVudF9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID09PSB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtcHJldl9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpIDwgdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLW5leHRfbW9udGgnOiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA+IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcyhjbGFzc2VzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5fZ2V0Q2xhc3NlcygpfVxuICAgICAgICBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdChsb2Rhc2gucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpfVxuICAgICAgICBvbk1vdXNlTW92ZT17cHJldmVudERlZmF1bHQobG9kYXNoLnBhcnRpYWwodGhpcy5wcm9wcy5vbk1vdXNlTW92ZSwgdGhpcy5wcm9wcy5kYXRlKSl9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgb25DbGljazogbm9PcCxcbiAgb25Nb3VzZU1vdmU6IG5vT3Bcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKXtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgb24gdGhlIHdlZWtlbmQgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXZWVrZW5kKGRhdGUpIHtcbiAgcmV0dXJuIChkYXRlLmdldERheSgpID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgPT09IDYpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc193ZWVrZW5kLmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBpcyB0b2RheSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgcmV0dXJuIChcbiAgICAodG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpKSAmJlxuICAgICh0b2RheS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCkpICYmXG4gICAgKHRvZGF5LmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpXG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3RvZGF5LmpzXG4gKiovIiwiLyoqIEEgbm8gb3AgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIGRlZmF1bHQgdmFsdWUgZm9yIG9wdGlvbmFsIGZ1bmN0aW9uIHByb3BzLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9PcCgpIHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9ub19vcC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoZnVuYykge1xuICAgICAgZnVuYy5jYWxsKHRoYXQsIGUpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9wcmV2ZW50X2RlZmF1bHQuanNcbiAqKi8iLCIvKipcbiAqIEFjY2VwdHMgYSBkYXRlIG9yIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF0ZSBhbmQgcmV0dXJuc1xuICogYSBzdHJpbmcgc3VpdGFibGUgdG8gYmUgdXNlZCBhcyBhIGtleSBpbiB0aGUgZm9ybWF0OiBZWVlZLU1NLUREXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUtleShkYXRlKSB7XG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGNvbnN0IGRkID0gKCcwJyArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMilcbiAgcmV0dXJuIGAke3l5eXl9LSR7bW19LSR7ZGR9YFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyA3IGRheXMgc3RhcnRpbmdcbiAqIHdpdGggdGhlIGZpcnN0IGRheS4gSW50ZW5kZWQgZm9yIGdlbmVyYXRpbmcgZGF5cyBpbiBhIHdlZWsuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheXNJbldlZWsoZmlyc3REYXkpIHtcbiAgcmV0dXJuIGxvZGFzaC5yYW5nZSgwLCA3KVxuICAgIC5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBmaXJzdERheS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBmaXJzdERheS5nZXRNb250aCgpLFxuICAgICAgICBmaXJzdERheS5nZXREYXRlKCkgKyBkYXlcbiAgICAgIClcbiAgICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qc1xuICoqLyIsImltcG9ydCBkYXRlUmFuZ2VUb0FycmF5IGZyb20gJy4vZGF0ZV9yYW5nZV90b19hcnJheSdcbmltcG9ydCBpc0RhdGVCZXR3ZWVuIGZyb20gJy4vaXNfZGF0ZV9iZXR3ZWVuJ1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGlzIHdpdGhpbiB0aGUgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cbiAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBkYXRlUmFuZ2VUb0FycmF5IGZvciBkZXRhaWxzIG9uIHJhbmdlIGZvcm1hdHMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IGRhdGVzUmFuZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgY29uc3QgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoICdzdGFydCcgYW5kL29yICdlbmQnIHByb3BlcnRpZXMgd2l0aCBkYXRlc1xuICogIC0gYW4gYXJyYXkgd2l0aCAxIG9yIDIgZGF0ZXNcbiAqICAtIG5vdGhpbmdcbiAqXG4gKiBJbiBhbGwgdGhlIGNhc2VzIGl0IHJldHVybnMgYW4gYXJyYXkgd2l0aCB0d28gdmFsdWVzIHRoYXQgYXJlIERhdGUgb2JqZWN0XG4gKiByZXByZXNlbnRpbmcgc3RhcnQgYW5kIGVuZCBvZiBhIHJhbmdlLiBJbiBjYXNlcyB3aGVyZSBlaXRoZXIgc3RhcnQgb3IgZW5kXG4gKiBlbmQgaXMgbWlzc2luZyBpdCBkZWZhdWx0cyB0byBjdXJyZW50IERhdGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlUmFuZ2VUb0FycmF5KHZhbHVlKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAobG9kYXNoLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5lbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgY29uc3QgZnJvbVRpbWUgPSBuZXcgRGF0ZShkYXRlRnJvbSkuZ2V0VGltZSgpXG4gIGNvbnN0IHRvVGltZSA9IG5ldyBEYXRlKGRhdGVUbykuZ2V0VGltZSgpXG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKGZyb21UaW1lLCB0b1RpbWUpXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGZyb21UaW1lLCB0b1RpbWUpXG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICByZXR1cm4gKHRpbWUgPj0gbWluICYmIHRpbWUgPD0gbWF4KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgZmlyc3QgZGF5IG9mIG1vbnRoIGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmdcbiAqIGFsbCBtb25kYXlzIGZvciBhbGwgd2Vla3MgdGhhdCBpbnRlcnNlY3QgdGhhdCBtb250aC4gU28sIGlmIGEgbW9udGhcbiAqIHN0YXJ0cyBvbiBhIFdlZG5lc2RheSwgdGhlIGZpcnN0IGVudHJ5IHdpbGwgYmUgdGhlIHByZXZpb3VzIG1vbmRheS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla3NJbk1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICBtb250aC5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoLmdldE1vbnRoKCksXG4gICAgbW9udGguZ2V0RGF0ZSgpXG4gIClcblxuICBjb25zdCBkYXlzRnJvbVdlZWtTdGFydCA9IChkYXRlLmdldERheSgpIHx8IDcpIC0gMVxuICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG5cbiAgY29uc3Qgd2Vla3NDb3VudCA9IE1hdGguY2VpbCgoZGF5c0luTW9udGggKyBkYXlzRnJvbVdlZWtTdGFydCkgLyA3KVxuICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRNb250aCgpLFxuICAgIDEgLSBkYXlzRnJvbVdlZWtTdGFydFxuICApXG5cbiAgcmV0dXJuIGxvZGFzaC5yYW5nZSgwLCB3ZWVrc0NvdW50KVxuICAgIC5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBzdGFydERhdGUuZ2V0RGF0ZSgpICsgd2VlayAqIDdcbiAgICAgIClcbiAgICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X3dlZWtzX2luX21vbnRoLmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBpbnNpZGUgYm91bmRhcmllcy5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBib3VuZGFyaWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlSW5Cb3VuZGFyaWVzKGRhdGUsIGJvdW5kYXJpZXMpIHtcbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpXG4gIGlmIChib3VuZGFyaWVzICYmIGJvdW5kYXJpZXMubWluICYmIGJvdW5kYXJpZXMubWluLmdldFRpbWUoKSA+IHRpbWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoYm91bmRhcmllcyAmJiBib3VuZGFyaWVzLm1heCAmJiBib3VuZGFyaWVzLm1heC5nZXRUaW1lKCkgPCB0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9zd2l0Y2hNb250aChlLCBpZCwgb2Zmc2V0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKGxvZGFzaC5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25Nb250aENoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb250aENoYW5nZShvZmZzZXQpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG0gPSBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYXknLCAnanVuJywgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29jdCcsICdub3YnLCAnZGVjJ11cbiAgICBjb25zdCBkYXRlID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtaGVhZGVyJz5cbiAgICAgICAgPGEgcmVmPSdwcmV2TW9udGhMaW5rJyBjbGFzc05hbWU9J3ByZXYtbW9udGgnIGhyZWY9JyMnIG9uQ2xpY2s9eyBsb2Rhc2gucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAtMSkuYmluZCh0aGlzKSB9PnByZXY8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aC10aXRsZSc+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIHJlZj0nbmV4dE1vbnRoTGluaycgY2xhc3NOYW1lPSduZXh0LW1vbnRoJyBocmVmPScjJyBvbkNsaWNrPXsgbG9kYXNoLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9Pm5leHQ8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9