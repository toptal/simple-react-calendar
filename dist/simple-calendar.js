(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
	
	var SimpleCalendar = _calendarCalendar2['default'];
	exports.SimpleCalendar = SimpleCalendar;

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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _month = __webpack_require__(2);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(15);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	/*
	  activeMonth — Date, default `new Date()`
	  onActiveMonthChange — function
	
	  selected — object | default false
	  onSelect — function
	
	  selectionMode — string | default 'single'
	*/
	
	var Calendar = (function (_React$Component) {
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
	
	  _inherits(Calendar, _React$Component);
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!_.isEqual(nextProps.selected, this.props.selected)) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: '_getActiveMonth',
	    value: function _getActiveMonth() {
	      if (_.isFunction(this.props.onActiveMonthChange)) {
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
	
	      if (_.isFunction(this.props.onActiveMonthChange)) {
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
	      if (_.isFunction(this.props.onSelect) && !selection.selectionInProgress) {
	        this.props.onSelect(selection);
	      }
	      this.setState({
	        selected: [selection.selectionStart, selection.selectionEnd]
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'calendar' },
	        React.createElement(_month_header2['default'], {
	          activeMonth: this._getActiveMonth(),
	          onMonthChange: this._switchMonth.bind(this)
	        }),
	        React.createElement(_month2['default'], {
	          activeMonth: this._getActiveMonth(),
	          selectionMode: this.props.selectionMode,
	          selected: this.state.selected,
	          data: this.props.data,
	          onChange: this._selectionChanged.bind(this)
	        })
	      );
	    }
	  }]);
	
	  return Calendar;
	})(React.Component);
	
	exports['default'] = Calendar;
	
	Calendar.propTypes = {
	  activeMonth: React.PropTypes.instanceOf(Date),
	  onActiveMonthChange: React.PropTypes.func,
	  selected: React.PropTypes.object,
	  onSelectionChange: React.PropTypes.func,
	  selectionMode: React.PropTypes.string,
	  data: React.PropTypes.object
	};
	
	Calendar.defaultProps = {
	  activeMonth: new Date(),
	  selectionMode: 'single'
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(14);
	
	var _utilsGet_weeks_in_month2 = _interopRequireDefault(_utilsGet_weeks_in_month);
	
	// activeMonth   = { this._getActiveMonth() }
	// selectionMode = { this.props.selectionMode }
	// selection     = { this._getSelection() }
	// onChange
	
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
	      this.props.onChange(_.pick(this.state, ['selectionStart', 'selectionEnd', 'selectionInProgress']));
	    }
	  }, {
	    key: '_onDayClick',
	    value: function _onDayClick(date) {
	      var _this = this;
	
	      var nextState = {};
	      if (this.props.selectionMode == 'range') {
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
	      } else if (this.props.selectionMode == 'single' || !this.props.selectionMode) {
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
	
	      if (this.state.selectionInProgress && (!this.state.selectionEnd || this.state.selectionEnd.getTime() != date.getTime())) {
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
	        return React.createElement(_week2['default'], {
	          key: week.getTime(),
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
	      return React.createElement(
	        'div',
	        { className: 'month' },
	        this._renderWeeks()
	      );
	    }
	  }]);
	
	  return Month;
	})(React.Component);
	
	exports['default'] = Month;
	module.exports = exports['default'];

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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(5);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_today = __webpack_require__(6);
	
	var _utilsIs_today2 = _interopRequireDefault(_utilsIs_today);
	
	var _utilsNo_op = __webpack_require__(16);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(7);
	
	var _utilsPrevent_default2 = _interopRequireDefault(_utilsPrevent_default);
	
	var Day = (function (_React$Component) {
	  function Day() {
	    _classCallCheck(this, Day);
	
	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Day, _React$Component);
	
	  _createClass(Day, [{
	    key: '_getClasses',
	    value: function _getClasses() {
	      var classes = {};
	      if (_.isArray(this.props.data.modifiers)) {
	        classes = _.zipObject(this.props.data.modifiers.map(function (modifier) {
	          return ['is-' + modifier, true];
	        }));
	      }
	      classes = _.assign(classes, {
	        day: true,
	        'is-selected': this.props.selected,
	        'is-weekend': (0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-workday': !(0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-today': (0, _utilsIs_today2['default'])(this.props.date),
	        'is-current_month': this.props.date.getMonth() == this.props.activeMonth.getMonth(),
	        'is-prev_month': this.props.date.getMonth() < this.props.activeMonth.getMonth(),
	        'is-next_month': this.props.date.getMonth() > this.props.activeMonth.getMonth()
	      });
	
	      return (0, _classnames2['default'])(classes);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        {
	          className: this._getClasses(),
	          onClick: (0, _utilsPrevent_default2['default'])(_.partial(this.props.onClick, this.props.date)),
	          onMouseMove: (0, _utilsPrevent_default2['default'])(_.partial(this.props.onMouseMove, this.props.date))
	        },
	        new Date(this.props.date).getDate()
	      );
	    }
	  }]);
	
	  return Day;
	})(React.Component);
	
	exports['default'] = Day;
	
	Day.defaultProps = {
	  data: {},
	  onClick: _utilsNo_op2['default'],
	  onMouseMove: _utilsNo_op2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
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
/* 5 */
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
	  return date.getDay() == 0 || date.getDay() == 6;
	}
	
	module.exports = exports["default"];

/***/ },
/* 6 */
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
	  return today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && today.getDate() == date.getDate();
	}
	
	module.exports = exports["default"];

/***/ },
/* 7 */
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
	    func && func.call(that, e);
	  };
	}
	
	module.exports = exports["default"];

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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsGet_days_in_week = __webpack_require__(9);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsDate_key = __webpack_require__(10);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsIs_date_in_range = __webpack_require__(11);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
	var Week = (function (_React$Component) {
	  function Week() {
	    _classCallCheck(this, Week);
	
	    _get(Object.getPrototypeOf(Week.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Week, _React$Component);
	
	  _createClass(Week, [{
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this = this;
	
	      return (0, _utilsGet_days_in_week2['default'])(this.props.startDate).map(function (day) {
	        return React.createElement(_day2['default'], {
	          key: day.getTime(),
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
	      return React.createElement(
	        'div',
	        { className: 'week' },
	        this._renderDays()
	      );
	    }
	  }]);
	
	  return Week;
	})(React.Component);
	
	exports['default'] = Week;
	
	Week.defaultProps = {
	  data: {}
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Accepts the first day and returns an array containing 7 days starting
	 * with the first day. Intended for generating days in a week.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getDaysInWeek;
	
	function getDaysInWeek(firstDay) {
	  return _.range(0, 7).map(function (day) {
	    return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + day);
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isDateInRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _date_range_to_array = __webpack_require__(12);
	
	var _date_range_to_array2 = _interopRequireDefault(_date_range_to_array);
	
	var _is_date_between = __webpack_require__(13);
	
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
/* 12 */
/***/ function(module, exports) {

	/**
	 * It takes one of the following:
	 *  - an object with selectionStart and/or selectionEnd properties with dates
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
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = dateRangeToArray;
	
	function dateRangeToArray(value) {
	  var now = new Date();
	
	  if (_.isPlainObject(value)) {
	    return [new Date(value.selectionStart || now), new Date(value.selectionEnd || now)];
	  } else if (_.isArray(value)) {
	    return [new Date(value[0] || now), new Date(value[1] || now)];
	  } else {
	    return [now, now];
	  }
	}
	
	module.exports = exports["default"];

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	/**
	 * Accepts the first day of month and returns an array containing
	 * all mondays for all weeks that intersect that month. So, if a month
	 * starts on a Wednesday, the first entry will be the previous monday.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getWeeksInMonth;
	
	function getWeeksInMonth(month) {
	  var date = new Date(month.getFullYear(), month.getMonth(), month.getDate());
	
	  var daysFromWeekStart = (date.getDay() || 7) - 1;
	  var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	
	  var weeksCount = Math.ceil((daysInMonth + daysFromWeekStart) / 7);
	  var startDate = new Date(date.getFullYear(), date.getMonth(), 1 - daysFromWeekStart);
	
	  return _.range(0, weeksCount).map(function (week) {
	    return new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + week * 7);
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var MonthHeader = (function (_React$Component) {
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    _get(Object.getPrototypeOf(MonthHeader.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(MonthHeader, _React$Component);
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(e, id, offset) {
	      e.preventDefault();
	      if (_.isFunction(this.props.onMonthChange)) {
	        this.props.onMonthChange(offset);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var m = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	      var date = this.props.activeMonth;
	      return React.createElement(
	        'div',
	        { className: 'month-header' },
	        React.createElement(
	          'a',
	          { href: '#', onClick: _.partialRight(this._switchMonth, -1).bind(this) },
	          'prev'
	        ),
	        React.createElement(
	          'div',
	          { className: 'month-title' },
	          m[date.getMonth()],
	          ' ',
	          date.getFullYear()
	        ),
	        React.createElement(
	          'a',
	          { href: '#', onClick: _.partialRight(this._switchMonth, 1).bind(this) },
	          'next'
	        )
	      );
	    }
	  }]);
	
	  return MonthHeader;
	})(React.Component);
	
	exports['default'] = MonthHeader;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/** A no op function to be used as a default value for optional function props. */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = noOp;
	
	function noOp() {}
	
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MGM3MzY5OTNiOGM5ZmU3NzMzOSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXkuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvbm9fb3AuanMiXSwibmFt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QzNCOzthQUFHLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBQVM7U0FDakY7O2FBQUssU0FBUyxFQUFDLGFBQWE7V0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7V0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1VBQ3BDO1NBQ047O2FBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBQVM7UUFDNUUsQ0FDUDtNQUNGOzs7VUFwQmtCLFdBQVc7SUFBUyxLQUFLLENBQUMsU0FBUzs7c0JBQW5DLFdBQVc7Ozs7Ozs7Ozs7Ozs7c0JDQVIsSUFBSTs7QUFBYixVQUFTLElBQUksR0FBRyxFQUFFIiwiZmlsZSI6InNpbXBsZS1jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjBjNzM2OTkzYjhjOWZlNzczMzlcbiAqKi8iLCJpbXBvcnQgX0NhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXInO1xuXG5leHBvcnQgY29uc3QgU2ltcGxlQ2FsZW5kYXIgPSBfQ2FsZW5kYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBNb250aCAgICAgICBmcm9tICcuL21vbnRoJ1xuaW1wb3J0IE1vbnRoSGVhZGVyIGZyb20gJy4vbW9udGhfaGVhZGVyJ1xuXG5cbi8qXG4gIGFjdGl2ZU1vbnRoIOKAlCBEYXRlLCBkZWZhdWx0IGBuZXcgRGF0ZSgpYFxuICBvbkFjdGl2ZU1vbnRoQ2hhbmdlIOKAlCBmdW5jdGlvblxuXG4gIHNlbGVjdGVkIOKAlCBvYmplY3QgfCBkZWZhdWx0IGZhbHNlXG4gIG9uU2VsZWN0IOKAlCBmdW5jdGlvblxuXG4gIHNlbGVjdGlvbk1vZGUg4oCUIHN0cmluZyB8IGRlZmF1bHQgJ3NpbmdsZSdcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHZhciBmaXJzdERheU9mTW9udGggPSB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoXG4gICAgZmlyc3REYXlPZk1vbnRoLnNldERhdGUoMSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlTW9udGg6IGZpcnN0RGF5T2ZNb250aCxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIV8uaXNFcXVhbChuZXh0UHJvcHMuc2VsZWN0ZWQsIHRoaXMucHJvcHMuc2VsZWN0ZWQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IG5leHRQcm9wcy5zZWxlY3RlZFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfZ2V0QWN0aXZlTW9udGgoKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVNb250aFxuICAgIH1cbiAgfVxuXG4gIF9zd2l0Y2hNb250aChvZmZzZXQpIHtcbiAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSh0aGlzLl9nZXRBY3RpdmVNb250aCgpKVxuICAgIG1vbnRoLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkgKyBvZmZzZXQpXG5cbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZShtb250aClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZU1vbnRoOiBtb250aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlZChzZWxlY3Rpb24pIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpICYmICFzZWxlY3Rpb24uc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3Rpb24pXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWQ6IFtzZWxlY3Rpb24uc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbi5zZWxlY3Rpb25FbmRdXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhclwiPlxuICAgICAgICA8TW9udGhIZWFkZXJcbiAgICAgICAgICBhY3RpdmVNb250aCAgID0geyB0aGlzLl9nZXRBY3RpdmVNb250aCgpIH1cbiAgICAgICAgICBvbk1vbnRoQ2hhbmdlID0geyB0aGlzLl9zd2l0Y2hNb250aC5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vbnRoXG4gICAgICAgICAgYWN0aXZlTW9udGggICA9IHsgdGhpcy5fZ2V0QWN0aXZlTW9udGgoKSB9XG4gICAgICAgICAgc2VsZWN0aW9uTW9kZSA9IHsgdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlIH1cbiAgICAgICAgICBzZWxlY3RlZCAgICAgID0geyB0aGlzLnN0YXRlLnNlbGVjdGVkIH1cbiAgICAgICAgICBkYXRhICAgICAgICAgID0geyB0aGlzLnByb3BzLmRhdGEgfVxuICAgICAgICAgIG9uQ2hhbmdlICAgICAgPSB7IHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICBhY3RpdmVNb250aDogICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgb25BY3RpdmVNb250aENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkOiAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIG9uU2VsZWN0aW9uQ2hhbmdlOiAgIFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3Rpb25Nb2RlOiAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiAgICAgICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlTW9udGg6ICAgbmV3IERhdGUoKSxcbiAgc2VsZWN0aW9uTW9kZTogJ3NpbmdsZSdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeFxuICoqLyIsImltcG9ydCBEYXkgIGZyb20gJy4vZGF5J1xuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJ1xuXG5pbXBvcnQgZ2V0V2Vla3NJbk1vbnRoIGZyb20gJy4vdXRpbHMvZ2V0X3dlZWtzX2luX21vbnRoJ1xuXG4vLyBhY3RpdmVNb250aCAgID0geyB0aGlzLl9nZXRBY3RpdmVNb250aCgpIH1cbi8vIHNlbGVjdGlvbk1vZGUgPSB7IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB9XG4vLyBzZWxlY3Rpb24gICAgID0geyB0aGlzLl9nZXRTZWxlY3Rpb24oKSB9XG4vLyBvbkNoYW5nZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiAgICAgIG51bGwsXG4gICAgICBzZWxlY3Rpb25FbmQ6ICAgICAgICBudWxsXG4gICAgfVxuICB9XG5cbiAgX3B1c2hVcGRhdGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIF8ucGljayh0aGlzLnN0YXRlLCBbJ3NlbGVjdGlvblN0YXJ0JywgJ3NlbGVjdGlvbkVuZCcsICdzZWxlY3Rpb25JblByb2dyZXNzJ10pXG4gICAgKVxuICB9XG5cbiAgX29uRGF5Q2xpY2soZGF0ZSkge1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fVxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT0gJ3JhbmdlJykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6ICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT0gJ3NpbmdsZScgfHwgIXRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzICYmICghdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQgfHwgdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQuZ2V0VGltZSgpICE9IGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGlvbkVuZDogZGF0ZSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyV2Vla3MoKSB7XG4gICAgbGV0IHdlZWtzID0gZ2V0V2Vla3NJbk1vbnRoKHRoaXMucHJvcHMuYWN0aXZlTW9udGgpXG4gICAgcmV0dXJuIHdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdlZWtcbiAgICAgICAgICBrZXkgICAgICAgICA9IHsgd2Vlay5nZXRUaW1lKCkgfVxuICAgICAgICAgIHN0YXJ0RGF0ZSAgID0geyB3ZWVrIH1cbiAgICAgICAgICBhY3RpdmVNb250aCA9IHsgdGhpcy5wcm9wcy5hY3RpdmVNb250aCB9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgPSB7IHRoaXMucHJvcHMuc2VsZWN0ZWQgfVxuICAgICAgICAgIGRhdGEgICAgICAgID0geyB0aGlzLnByb3BzLmRhdGEgfVxuXG4gICAgICAgICAgb25EYXlDbGljayAgICAgPSB7IHRoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmUgPSB7IHRoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aFwiPlxuICAgICAgICB7IHRoaXMuX3JlbmRlcldlZWtzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoLmpzeFxuICoqLyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBpc1dlZWtlbmQgICAgIGZyb20gJy4vdXRpbHMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1RvZGF5ICAgICAgIGZyb20gJy4vdXRpbHMvaXNfdG9kYXknXG5pbXBvcnQgbm9PcCAgICAgICAgICBmcm9tICcuL3V0aWxzL25vX29wJ1xuXG5pbXBvcnQgcHJldmVudERlZmF1bHQgICAgICAgZnJvbSAnLi91dGlscy9wcmV2ZW50X2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgX2dldENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fVxuICAgIGlmIChfLmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhLm1vZGlmaWVycykpIHtcbiAgICAgIGNsYXNzZXMgPSBfLnppcE9iamVjdCh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IHsgcmV0dXJuKFtgaXMtJHttb2RpZmllcn1gLCB0cnVlXSl9KSlcbiAgICB9XG4gICAgY2xhc3NlcyA9IF8uYXNzaWduKGNsYXNzZXMsIHtcbiAgICAgIGRheTogdHJ1ZSxcbiAgICAgICdpcy1zZWxlY3RlZCc6IHRoaXMucHJvcHMuc2VsZWN0ZWQsXG4gICAgICAnaXMtd2Vla2VuZCc6IGlzV2Vla2VuZCh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLXdvcmtkYXknOiAhaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtdG9kYXknOiBpc1RvZGF5KHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtY3VycmVudF9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID09IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1wcmV2X21vbnRoJzogICAgdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPCB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtbmV4dF9tb250aCc6ICAgIHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID4gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpXG4gICAgfSlcblxuICAgIHJldHVybiBjbGFzc05hbWVzKGNsYXNzZXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lICAgPSB7IHRoaXMuX2dldENsYXNzZXMoKSB9XG4gICAgICAgIG9uQ2xpY2sgICAgID0geyBwcmV2ZW50RGVmYXVsdChfLnBhcnRpYWwodGhpcy5wcm9wcy5vbkNsaWNrLCB0aGlzLnByb3BzLmRhdGUpKSB9XG4gICAgICAgIG9uTW91c2VNb3ZlID0geyBwcmV2ZW50RGVmYXVsdChfLnBhcnRpYWwodGhpcy5wcm9wcy5vbk1vdXNlTW92ZSwgdGhpcy5wcm9wcy5kYXRlKSkgfVxuICAgICAgPlxuICAgICAgICB7bmV3IERhdGUodGhpcy5wcm9wcy5kYXRlKS5nZXREYXRlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIG9uQ2xpY2s6IG5vT3AsXG4gIG9uTW91c2VNb3ZlOiBub09wXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9kYXkuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBvbiB0aGUgd2Vla2VuZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dlZWtlbmQoZGF0ZSkge1xuICByZXR1cm4gKGRhdGUuZ2V0RGF5KCkgPT0gMCB8fCBkYXRlLmdldERheSgpID09IDYpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc193ZWVrZW5kLmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBpcyB0b2RheSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIHJldHVybiAoXG4gICAgKHRvZGF5LmdldEZ1bGxZZWFyKCkgPT0gZGF0ZS5nZXRGdWxsWWVhcigpKSAmJlxuICAgICh0b2RheS5nZXRNb250aCgpID09IGRhdGUuZ2V0TW9udGgoKSkgJiZcbiAgICAodG9kYXkuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc190b2RheS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZnVuYyAmJiBmdW5jLmNhbGwodGhhdCwgZSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzXG4gKiovIiwiaW1wb3J0IERheSBmcm9tICcuL2RheSdcblxuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGRhdGVLZXkgZnJvbSAnLi91dGlscy9kYXRlX2tleSdcbmltcG9ydCBpc0RhdGVJblJhbmdlIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleSAgPSB7IGRheS5nZXRUaW1lKCkgfVxuICAgICAgICAgIGRhdGUgPSB7IGRheSB9XG4gICAgICAgICAgZGF0YSA9IHsgdGhpcy5wcm9wcy5kYXRhW2RhdGVLZXkoZGF5KV0gfVxuICAgICAgICAgIHNlbGVjdGVkID0geyBpc0RhdGVJblJhbmdlKGRheSwgdGhpcy5wcm9wcy5zZWxlY3RlZCkgfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoID0geyB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoIH1cblxuICAgICAgICAgIG9uQ2xpY2sgICAgID0geyB0aGlzLnByb3BzLm9uRGF5Q2xpY2sgfVxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyB0aGlzLnByb3BzLm9uRGF5TW91c2VNb3ZlIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWtcIj5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuV2Vlay5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeFxuICoqLyIsIi8qKlxuICogQWNjZXB0cyB0aGUgZmlyc3QgZGF5IGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgNyBkYXlzIHN0YXJ0aW5nXG4gKiB3aXRoIHRoZSBmaXJzdCBkYXkuIEludGVuZGVkIGZvciBnZW5lcmF0aW5nIGRheXMgaW4gYSB3ZWVrLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5XZWVrKGZpcnN0RGF5KSB7XG4gIHJldHVybiBfLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGZpcnN0RGF5LmdldE1vbnRoKCksXG4gICAgICAgIGZpcnN0RGF5LmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzXG4gKiovIiwiLyoqXG4gKiBBY2NlcHRzIGEgZGF0ZSBvciBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGRhdGUgYW5kIHJldHVybnNcbiAqIGEgc3RyaW5nIHN1aXRhYmxlIHRvIGJlIHVzZWQgYXMgYSBrZXkgaW4gdGhlIGZvcm1hdDogWVlZWS1NTS1ERFxuICpcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVLZXkoZGF0ZSkge1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgbGV0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGxldCBkZCA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzXG4gKiovIiwiaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi9kYXRlX3JhbmdlX3RvX2FycmF5J1xuaW1wb3J0IGlzRGF0ZUJldHdlZW4gICAgZnJvbSAnLi9pc19kYXRlX2JldHdlZW4nXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGRhdGVSYW5nZVRvQXJyYXkgZm9yIGRldGFpbHMgb24gcmFuZ2UgZm9ybWF0cy5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHVuZGVmaW5lZH0gZGF0ZXNSYW5nZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UgKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgbGV0IHJhbmdlID0gZGF0ZVJhbmdlVG9BcnJheShkYXRlc1JhbmdlKVxuICByZXR1cm4gaXNEYXRlQmV0d2VlbihkYXRlLCByYW5nZVswXSwgcmFuZ2VbMV0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzXG4gKiovIiwiLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoIHNlbGVjdGlvblN0YXJ0IGFuZC9vciBzZWxlY3Rpb25FbmQgcHJvcGVydGllcyB3aXRoIGRhdGVzXG4gKiAgLSBhbiBhcnJheSB3aXRoIDEgb3IgMiBkYXRlc1xuICogIC0gbm90aGluZ1xuICpcbiAqIEluIGFsbCB0aGUgY2FzZXMgaXQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHR3byB2YWx1ZXMgdGhhdCBhcmUgRGF0ZSBvYmplY3RcbiAqIHJlcHJlc2VudGluZyBzdGFydCBhbmQgZW5kIG9mIGEgcmFuZ2UuIEluIGNhc2VzIHdoZXJlIGVpdGhlciBzdGFydCBvciBlbmRcbiAqIGVuZCBpcyBtaXNzaW5nIGl0IGRlZmF1bHRzIHRvIGN1cnJlbnQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVSYW5nZVRvQXJyYXkodmFsdWUpIHtcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAoXy5pc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUuc2VsZWN0aW9uU3RhcnQgfHwgbm93KSwgbmV3IERhdGUodmFsdWUuc2VsZWN0aW9uRW5kIHx8IG5vdyldXG4gIH0gZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuIChkYXRlLCBkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gIGxldCBmcm9tVGltZSA9IG5ldyBEYXRlKGRhdGVGcm9tKS5nZXRUaW1lKClcbiAgbGV0IHRvVGltZSA9IG5ldyBEYXRlKGRhdGVUbykuZ2V0VGltZSgpXG4gIGxldCBtaW4gPSBNYXRoLm1pbihmcm9tVGltZSwgdG9UaW1lKVxuICBsZXQgbWF4ID0gTWF0aC5tYXgoZnJvbVRpbWUsIHRvVGltZSlcbiAgbGV0IHRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICByZXR1cm4gKHRpbWUgPj0gbWluICYmIHRpbWUgPD0gbWF4KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgb2YgbW9udGggYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZ1xuICogYWxsIG1vbmRheXMgZm9yIGFsbCB3ZWVrcyB0aGF0IGludGVyc2VjdCB0aGF0IG1vbnRoLiBTbywgaWYgYSBtb250aFxuICogc3RhcnRzIG9uIGEgV2VkbmVzZGF5LCB0aGUgZmlyc3QgZW50cnkgd2lsbCBiZSB0aGUgcHJldmlvdXMgbW9uZGF5LlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgobW9udGgpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICBtb250aC5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoLmdldE1vbnRoKCksXG4gICAgbW9udGguZ2V0RGF0ZSgpXG4gIClcblxuICBsZXQgZGF5c0Zyb21XZWVrU3RhcnQgPSAoZGF0ZS5nZXREYXkoKSB8fCA3KSAtIDFcbiAgbGV0IGRheXNJbk1vbnRoICAgICAgID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcblxuICBsZXQgd2Vla3NDb3VudCA9IE1hdGguY2VpbCgoZGF5c0luTW9udGggKyBkYXlzRnJvbVdlZWtTdGFydCkgLyA3KVxuICB2YXIgc3RhcnREYXRlICA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSAtIGRheXNGcm9tV2Vla1N0YXJ0XG4gIClcblxuICByZXR1cm4gXy5yYW5nZSgwLCB3ZWVrc0NvdW50KVxuICAgIC5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBzdGFydERhdGUuZ2V0RGF0ZSgpICsgd2VlayAqIDdcbiAgICAgIClcbiAgICB9KVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX3N3aXRjaE1vbnRoKGUsIGlkLCBvZmZzZXQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKG9mZnNldClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG0gPSBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYXknLCAnanVuJywgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29jdCcsICdub3YnLCAnZGVjJ11cbiAgICBsZXQgZGF0ZSA9IHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC1oZWFkZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgXy5wYXJ0aWFsUmlnaHQodGhpcy5fc3dpdGNoTW9udGgsIC0xKS5iaW5kKHRoaXMpIH0+cHJldjwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC10aXRsZVwiPlxuICAgICAgICAgIHttW2RhdGUuZ2V0TW9udGgoKV19IHtkYXRlLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBfLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9Pm5leHQ8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iLCIvKiogQSBubyBvcCBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgZGVmYXVsdCB2YWx1ZSBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcHJvcHMuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub09wKCkge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==