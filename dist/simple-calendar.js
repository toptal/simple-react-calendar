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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _month = __webpack_require__(2);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(16);
	
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
	          ref: 'header',
	          activeMonth: this._getActiveMonth(),
	          onMonthChange: this._switchMonth.bind(this)
	        }),
	        React.createElement(_month2['default'], {
	          ref: 'month',
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _week = __webpack_require__(9);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(15);
	
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(5);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_today = __webpack_require__(6);
	
	var _utilsIs_today2 = _interopRequireDefault(_utilsIs_today);
	
	var _utilsNo_op = __webpack_require__(7);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(8);
	
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

	/** A no op function to be used as a default value for optional function props. */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = noOp;
	
	function noOp() {}
	
	module.exports = exports["default"];

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsDate_key = __webpack_require__(11);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsGet_days_in_week = __webpack_require__(10);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsIs_date_in_range = __webpack_require__(12);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
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
	        return React.createElement(_day2['default'], {
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isDateInRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _date_range_to_array = __webpack_require__(13);
	
	var _date_range_to_array2 = _interopRequireDefault(_date_range_to_array);
	
	var _is_date_between = __webpack_require__(14);
	
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
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
	          { ref: 'prevMonthLink', className: 'prev-month', href: '#', onClick: _.partialRight(this._switchMonth, -1).bind(this) },
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
	          { ref: 'nextMonthLink', className: 'next-month', href: '#', onClick: _.partialRight(this._switchMonth, 1).bind(this) },
	          'next'
	        )
	      );
	    }
	  }]);
	
	  return MonthHeader;
	})(React.Component);
	
	exports['default'] = MonthHeader;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZWEzYzg5NTQzMmI4NDRlODFiYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXkuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9wcmV2ZW50X2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3dlZWsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giXSwibmFt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QUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUM1RixXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFDakMsY0FDRTs7V0FBSyxTQUFTLEVBQUMsY0FBYztTQUMzQjs7YUFBRyxHQUFHLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztTQUM1SDs7YUFBSyxTQUFTLEVBQUMsYUFBYTtXQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztXQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7VUFDcEM7U0FDTjs7YUFBRyxHQUFHLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBQVM7UUFDdkgsQ0FDUDtNQUNGOzs7VUFwQmtCLFdBQVc7SUFBUyxLQUFLLENBQUMsU0FBUzs7c0JBQW5DLFdBQVciLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZWEzYzg5NTQzMmI4NDRlODFiYVxuICoqLyIsImltcG9ydCBfQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhcic7XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVDYWxlbmRhciA9IF9DYWxlbmRhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IE1vbnRoICAgICAgIGZyb20gJy4vbW9udGgnXG5pbXBvcnQgTW9udGhIZWFkZXIgZnJvbSAnLi9tb250aF9oZWFkZXInXG5cblxuLypcbiAgYWN0aXZlTW9udGgg4oCUIERhdGUsIGRlZmF1bHQgYG5ldyBEYXRlKClgXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2Ug4oCUIGZ1bmN0aW9uXG5cbiAgc2VsZWN0ZWQg4oCUIG9iamVjdCB8IGRlZmF1bHQgZmFsc2VcbiAgb25TZWxlY3Qg4oCUIGZ1bmN0aW9uXG5cbiAgc2VsZWN0aW9uTW9kZSDigJQgc3RyaW5nIHwgZGVmYXVsdCAnc2luZ2xlJ1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdmFyIGZpcnN0RGF5T2ZNb250aCA9IHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICBmaXJzdERheU9mTW9udGguc2V0RGF0ZSgxKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVNb250aDogZmlyc3REYXlPZk1vbnRoLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghXy5pc0VxdWFsKG5leHRQcm9wcy5zZWxlY3RlZCwgdGhpcy5wcm9wcy5zZWxlY3RlZCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogbmV4dFByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9nZXRBY3RpdmVNb250aCgpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZU1vbnRoXG4gICAgfVxuICB9XG5cbiAgX3N3aXRjaE1vbnRoKG9mZnNldCkge1xuICAgIGxldCBtb250aCA9IG5ldyBEYXRlKHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkpXG4gICAgbW9udGguc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIG9mZnNldClcblxuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKG1vbnRoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlTW9udGg6IG1vbnRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2VkKHNlbGVjdGlvbikge1xuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vblNlbGVjdCkgJiYgIXNlbGVjdGlvbi5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGlvbilcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZDogW3NlbGVjdGlvbi5zZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uLnNlbGVjdGlvbkVuZF1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kYXInPlxuICAgICAgICA8TW9udGhIZWFkZXJcbiAgICAgICAgICByZWYgICAgICAgICAgID0gJ2hlYWRlcidcbiAgICAgICAgICBhY3RpdmVNb250aCAgID0geyB0aGlzLl9nZXRBY3RpdmVNb250aCgpIH1cbiAgICAgICAgICBvbk1vbnRoQ2hhbmdlID0geyB0aGlzLl9zd2l0Y2hNb250aC5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vbnRoXG4gICAgICAgICAgcmVmICAgICAgICAgICA9ICdtb250aCdcbiAgICAgICAgICBhY3RpdmVNb250aCAgID0geyB0aGlzLl9nZXRBY3RpdmVNb250aCgpIH1cbiAgICAgICAgICBzZWxlY3Rpb25Nb2RlID0geyB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgfVxuICAgICAgICAgIHNlbGVjdGVkICAgICAgPSB7IHRoaXMuc3RhdGUuc2VsZWN0ZWQgfVxuICAgICAgICAgIGRhdGEgICAgICAgICAgPSB7IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgb25DaGFuZ2UgICAgICA9IHsgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZU1vbnRoOiAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBvbkFjdGl2ZU1vbnRoQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6ICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgb25TZWxlY3Rpb25DaGFuZ2U6ICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGlvbk1vZGU6ICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6ICAgICAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVNb250aDogICBuZXcgRGF0ZSgpLFxuICBzZWxlY3Rpb25Nb2RlOiAnc2luZ2xlJ1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvY2FsZW5kYXIuanN4XG4gKiovIiwiaW1wb3J0IERheSAgZnJvbSAnLi9kYXknXG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnXG5cbmltcG9ydCBnZXRXZWVrc0luTW9udGggZnJvbSAnLi91dGlscy9nZXRfd2Vla3NfaW5fbW9udGgnXG5cbi8vIGFjdGl2ZU1vbnRoICAgPSB7IHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkgfVxuLy8gc2VsZWN0aW9uTW9kZSA9IHsgdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlIH1cbi8vIHNlbGVjdGlvbiAgICAgPSB7IHRoaXMuX2dldFNlbGVjdGlvbigpIH1cbi8vIG9uQ2hhbmdlXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uU3RhcnQ6ICAgICAgbnVsbCxcbiAgICAgIHNlbGVjdGlvbkVuZDogICAgICAgIG51bGxcbiAgICB9XG4gIH1cblxuICBfcHVzaFVwZGF0ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgXy5waWNrKHRoaXMuc3RhdGUsIFsnc2VsZWN0aW9uU3RhcnQnLCAnc2VsZWN0aW9uRW5kJywgJ3NlbGVjdGlvbkluUHJvZ3Jlc3MnXSlcbiAgICApXG4gIH1cblxuICBfb25EYXlDbGljayhkYXRlKSB7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PSAncmFuZ2UnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogICB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0LmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpID8gdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydCA6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PSAnc2luZ2xlJyB8fCAhdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+IHtcbiAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBfb25EYXlNb3VzZU1vdmUoZGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGlvbkluUHJvZ3Jlc3MgJiYgKCF0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZCB8fCB0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZC5nZXRUaW1lKCkgIT0gZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0aW9uRW5kOiBkYXRlIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJXZWVrcygpIHtcbiAgICBsZXQgd2Vla3MgPSBnZXRXZWVrc0luTW9udGgodGhpcy5wcm9wcy5hY3RpdmVNb250aClcbiAgICByZXR1cm4gd2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vla1xuICAgICAgICAgIGtleSAgICAgICAgID0geyB3ZWVrLmdldFRpbWUoKSB9XG4gICAgICAgICAgcmVmICAgICAgICAgPSB7ICd3ZWVrJyArIHdlZWsuZ2V0VGltZSgpIH1cbiAgICAgICAgICBzdGFydERhdGUgICA9IHsgd2VlayB9XG4gICAgICAgICAgYWN0aXZlTW9udGggPSB7IHRoaXMucHJvcHMuYWN0aXZlTW9udGggfVxuICAgICAgICAgIHNlbGVjdGVkICAgID0geyB0aGlzLnByb3BzLnNlbGVjdGVkIH1cbiAgICAgICAgICBkYXRhICAgICAgICA9IHsgdGhpcy5wcm9wcy5kYXRhIH1cblxuICAgICAgICAgIG9uRGF5Q2xpY2sgICAgID0geyB0aGlzLl9vbkRheUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uRGF5TW91c2VNb3ZlID0geyB0aGlzLl9vbkRheU1vdXNlTW92ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aCc+XG4gICAgICAgIHsgdGhpcy5fcmVuZGVyV2Vla3MoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvbW9udGguanN4XG4gKiovIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IGlzV2Vla2VuZCAgICAgZnJvbSAnLi91dGlscy9pc193ZWVrZW5kJ1xuaW1wb3J0IGlzVG9kYXkgICAgICAgZnJvbSAnLi91dGlscy9pc190b2RheSdcbmltcG9ydCBub09wICAgICAgICAgIGZyb20gJy4vdXRpbHMvbm9fb3AnXG5cbmltcG9ydCBwcmV2ZW50RGVmYXVsdCAgICAgICBmcm9tICcuL3V0aWxzL3ByZXZlbnRfZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9XG4gICAgaWYgKF8uaXNBcnJheSh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzKSkge1xuICAgICAgY2xhc3NlcyA9IF8uemlwT2JqZWN0KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4geyByZXR1cm4oW2Bpcy0ke21vZGlmaWVyfWAsIHRydWVdKX0pKVxuICAgIH1cbiAgICBjbGFzc2VzID0gXy5hc3NpZ24oY2xhc3Nlcywge1xuICAgICAgZGF5OiB0cnVlLFxuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICdpcy13ZWVrZW5kJzogaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtd29ya2RheSc6ICFpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzVG9kYXkodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPT0gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXByZXZfbW9udGgnOiAgICB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA8IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogICAgdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoY2xhc3NlcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWUgICA9IHsgdGhpcy5fZ2V0Q2xhc3NlcygpIH1cbiAgICAgICAgb25DbGljayAgICAgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpIH1cbiAgICAgICAgb25Nb3VzZU1vdmUgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uTW91c2VNb3ZlLCB0aGlzLnByb3BzLmRhdGUpKSB9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgb25DbGljazogbm9PcCxcbiAgb25Nb3VzZU1vdmU6IG5vT3Bcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIG9uIHRoZSB3ZWVrZW5kIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2Vla2VuZChkYXRlKSB7XG4gIHJldHVybiAoZGF0ZS5nZXREYXkoKSA9PSAwIHx8IGRhdGUuZ2V0RGF5KCkgPT0gNilcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanNcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGlzIHRvZGF5IGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgcmV0dXJuIChcbiAgICAodG9kYXkuZ2V0RnVsbFllYXIoKSA9PSBkYXRlLmdldEZ1bGxZZWFyKCkpICYmXG4gICAgKHRvZGF5LmdldE1vbnRoKCkgPT0gZGF0ZS5nZXRNb250aCgpKSAmJlxuICAgICh0b2RheS5nZXREYXRlKCkgPT0gZGF0ZS5nZXREYXRlKCkpXG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3RvZGF5LmpzXG4gKiovIiwiLyoqIEEgbm8gb3AgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIGRlZmF1bHQgdmFsdWUgZm9yIG9wdGlvbmFsIGZ1bmN0aW9uIHByb3BzLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9PcCgpIHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9ub19vcC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZnVuYyAmJiBmdW5jLmNhbGwodGhhdCwgZSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzXG4gKiovIiwiaW1wb3J0IERheSBmcm9tICcuL2RheSdcblxuaW1wb3J0IGRhdGVLZXkgZnJvbSAnLi91dGlscy9kYXRlX2tleSdcbmltcG9ydCBnZXREYXlzSW5XZWVrIGZyb20gJy4vdXRpbHMvZ2V0X2RheXNfaW5fd2VlaydcbmltcG9ydCBpc0RhdGVJblJhbmdlIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleSAgPSB7IGRheS5nZXRUaW1lKCkgfVxuICAgICAgICAgIHJlZiAgPSB7ICdkYXknICsgZGF5LmdldFRpbWUoKSB9XG4gICAgICAgICAgZGF0ZSA9IHsgZGF5IH1cbiAgICAgICAgICBkYXRhID0geyB0aGlzLnByb3BzLmRhdGFbZGF0ZUtleShkYXkpXSB9XG4gICAgICAgICAgc2VsZWN0ZWQgPSB7IGlzRGF0ZUluUmFuZ2UoZGF5LCB0aGlzLnByb3BzLnNlbGVjdGVkKSB9XG4gICAgICAgICAgYWN0aXZlTW9udGggPSB7IHRoaXMucHJvcHMuYWN0aXZlTW9udGggfVxuXG4gICAgICAgICAgb25DbGljayAgICAgPSB7IHRoaXMucHJvcHMub25EYXlDbGljayB9XG4gICAgICAgICAgb25Nb3VzZU1vdmUgPSB7IHRoaXMucHJvcHMub25EYXlNb3VzZU1vdmUgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWVrJz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuV2Vlay5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeFxuICoqLyIsIi8qKlxuICogQWNjZXB0cyB0aGUgZmlyc3QgZGF5IGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgNyBkYXlzIHN0YXJ0aW5nXG4gKiB3aXRoIHRoZSBmaXJzdCBkYXkuIEludGVuZGVkIGZvciBnZW5lcmF0aW5nIGRheXMgaW4gYSB3ZWVrLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5XZWVrKGZpcnN0RGF5KSB7XG4gIHJldHVybiBfLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGZpcnN0RGF5LmdldE1vbnRoKCksXG4gICAgICAgIGZpcnN0RGF5LmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzXG4gKiovIiwiLyoqXG4gKiBBY2NlcHRzIGEgZGF0ZSBvciBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGRhdGUgYW5kIHJldHVybnNcbiAqIGEgc3RyaW5nIHN1aXRhYmxlIHRvIGJlIHVzZWQgYXMgYSBrZXkgaW4gdGhlIGZvcm1hdDogWVlZWS1NTS1ERFxuICpcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVLZXkoZGF0ZSkge1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgbGV0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGxldCBkZCA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzXG4gKiovIiwiaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi9kYXRlX3JhbmdlX3RvX2FycmF5J1xuaW1wb3J0IGlzRGF0ZUJldHdlZW4gICAgZnJvbSAnLi9pc19kYXRlX2JldHdlZW4nXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGRhdGVSYW5nZVRvQXJyYXkgZm9yIGRldGFpbHMgb24gcmFuZ2UgZm9ybWF0cy5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHVuZGVmaW5lZH0gZGF0ZXNSYW5nZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UgKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgbGV0IHJhbmdlID0gZGF0ZVJhbmdlVG9BcnJheShkYXRlc1JhbmdlKVxuICByZXR1cm4gaXNEYXRlQmV0d2VlbihkYXRlLCByYW5nZVswXSwgcmFuZ2VbMV0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzXG4gKiovIiwiLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoIHNlbGVjdGlvblN0YXJ0IGFuZC9vciBzZWxlY3Rpb25FbmQgcHJvcGVydGllcyB3aXRoIGRhdGVzXG4gKiAgLSBhbiBhcnJheSB3aXRoIDEgb3IgMiBkYXRlc1xuICogIC0gbm90aGluZ1xuICpcbiAqIEluIGFsbCB0aGUgY2FzZXMgaXQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHR3byB2YWx1ZXMgdGhhdCBhcmUgRGF0ZSBvYmplY3RcbiAqIHJlcHJlc2VudGluZyBzdGFydCBhbmQgZW5kIG9mIGEgcmFuZ2UuIEluIGNhc2VzIHdoZXJlIGVpdGhlciBzdGFydCBvciBlbmRcbiAqIGVuZCBpcyBtaXNzaW5nIGl0IGRlZmF1bHRzIHRvIGN1cnJlbnQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVSYW5nZVRvQXJyYXkodmFsdWUpIHtcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAoXy5pc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUuc2VsZWN0aW9uU3RhcnQgfHwgbm93KSwgbmV3IERhdGUodmFsdWUuc2VsZWN0aW9uRW5kIHx8IG5vdyldXG4gIH0gZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuIChkYXRlLCBkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gIGxldCBmcm9tVGltZSA9IG5ldyBEYXRlKGRhdGVGcm9tKS5nZXRUaW1lKClcbiAgbGV0IHRvVGltZSA9IG5ldyBEYXRlKGRhdGVUbykuZ2V0VGltZSgpXG4gIGxldCBtaW4gPSBNYXRoLm1pbihmcm9tVGltZSwgdG9UaW1lKVxuICBsZXQgbWF4ID0gTWF0aC5tYXgoZnJvbVRpbWUsIHRvVGltZSlcbiAgbGV0IHRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICByZXR1cm4gKHRpbWUgPj0gbWluICYmIHRpbWUgPD0gbWF4KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgb2YgbW9udGggYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZ1xuICogYWxsIG1vbmRheXMgZm9yIGFsbCB3ZWVrcyB0aGF0IGludGVyc2VjdCB0aGF0IG1vbnRoLiBTbywgaWYgYSBtb250aFxuICogc3RhcnRzIG9uIGEgV2VkbmVzZGF5LCB0aGUgZmlyc3QgZW50cnkgd2lsbCBiZSB0aGUgcHJldmlvdXMgbW9uZGF5LlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgobW9udGgpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICBtb250aC5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoLmdldE1vbnRoKCksXG4gICAgbW9udGguZ2V0RGF0ZSgpXG4gIClcblxuICBsZXQgZGF5c0Zyb21XZWVrU3RhcnQgPSAoZGF0ZS5nZXREYXkoKSB8fCA3KSAtIDFcbiAgbGV0IGRheXNJbk1vbnRoICAgICAgID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcblxuICBsZXQgd2Vla3NDb3VudCA9IE1hdGguY2VpbCgoZGF5c0luTW9udGggKyBkYXlzRnJvbVdlZWtTdGFydCkgLyA3KVxuICB2YXIgc3RhcnREYXRlICA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSAtIGRheXNGcm9tV2Vla1N0YXJ0XG4gIClcblxuICByZXR1cm4gXy5yYW5nZSgwLCB3ZWVrc0NvdW50KVxuICAgIC5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBzdGFydERhdGUuZ2V0RGF0ZSgpICsgd2VlayAqIDdcbiAgICAgIClcbiAgICB9KVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX3N3aXRjaE1vbnRoKGUsIGlkLCBvZmZzZXQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKG9mZnNldClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG0gPSBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYXknLCAnanVuJywgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29jdCcsICdub3YnLCAnZGVjJ11cbiAgICBsZXQgZGF0ZSA9IHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoLWhlYWRlcic+XG4gICAgICAgIDxhIHJlZj0ncHJldk1vbnRoTGluaycgY2xhc3NOYW1lPSdwcmV2LW1vbnRoJyBocmVmPScjJyBvbkNsaWNrPXsgXy5wYXJ0aWFsUmlnaHQodGhpcy5fc3dpdGNoTW9udGgsIC0xKS5iaW5kKHRoaXMpIH0+cHJldjwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoLXRpdGxlJz5cbiAgICAgICAgICB7bVtkYXRlLmdldE1vbnRoKCldfSB7ZGF0ZS5nZXRGdWxsWWVhcigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgcmVmPSduZXh0TW9udGhMaW5rJyBjbGFzc05hbWU9J25leHQtbW9udGgnIGhyZWY9JyMnIG9uQ2xpY2s9eyBfLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9Pm5leHQ8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9