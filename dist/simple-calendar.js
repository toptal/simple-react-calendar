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
	
	    this.state = {
	      activeMonth: this.props.activeMonth,
	      selected: this.props.selected
	    };
	  }
	
	  _inherits(Calendar, _React$Component);
	
	  _createClass(Calendar, [{
	    key: '_getActiveMonth',
	    value: function _getActiveMonth() {
	      if (_.isFunction(this.props.onActiveMonthChange) && this.props.activeMonth) {
	        return this.props.activeMonth;
	      } else {
	        return this.state.activeMonth;
	      }
	    }
	  }, {
	    key: '_getSelection',
	    value: function _getSelection() {
	      if (_.isFunction(this.props.onSelect) && this.props.selected) {
	        return this.props.selected;
	      } else {
	        return this.state.selected;
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
	      if (_.isFunction(this.props.onSelect)) {
	        this.props.onSelect(selection);
	      } else {
	        this.setState({
	          selected: [selection.selectionStart, selection.selectionEnd]
	        });
	      }
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
	          selected: this._getSelection(),
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
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsIs_date_between = __webpack_require__(13);
	
	var _utilsIs_date_between2 = _interopRequireDefault(_utilsIs_date_between);
	
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
	        _this.props.onChange(_this.state);
	      });
	    }
	  }, {
	    key: '_onDayMouseMove',
	    value: function _onDayMouseMove(date) {
	      var _this2 = this;
	
	      if (this.state.selectionInProgress && (!this.state.selectionEnd || this.state.selectionEnd.getTime() != date.getTime())) {
	        this.setState({ selectionEnd: date }, function () {
	          _this2.props.onChange(_this2.state);
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(5);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_today = __webpack_require__(6);
	
	var _utilsIs_today2 = _interopRequireDefault(_utilsIs_today);
	
	var _utilsPrevent_default = __webpack_require__(7);
	
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
	  data: {}
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWeekend;
	
	function isWeekend(date) {
	  return date.getDay() == 0 || date.getDate() == 6;
	}
	
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getDaysInWeek;
	
	function getDaysInWeek(month) {
	  return _.range(0, 7).map(function (day) {
	    return new Date(month.getFullYear(), month.getMonth(), month.getDate() + day);
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

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
	
	function isDateInRange(date, datesRange) {
	  var range = (0, _date_range_to_array2['default'])(datesRange);
	  return (0, _is_date_between2['default'])(date, range[0], range[1]);
	}
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = dateRangeToArray;
	
	function dateRangeToArray(value) {
	  var now = Date.now();
	
	  if (_.isPlainObject(value)) {
	    return [new Date(value.start || now), new Date(value.end || now)];
	  } else if (_.isArray(value)) {
	    return [new Date(value[0] || now), new Date(value[1] || now)];
	  } else {
	    return [new Date(), new Date()];
	  }
	}
	
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isDateBetween;
	
	function isDateBetween(date, dateFrom, dateTo) {
	  var date1 = new Date(dateFrom || dateTo);
	  var date2 = new Date(dateTo || dateFrom);
	  var min = Math.min(date1.getTime(), date2.getTime());
	  var max = Math.max(date1.getTime(), date2.getTime());
	  var time = date.getTime();
	  return time >= min && time <= max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxOGEzZDlkNzI5YTEzN2ViMDQxMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXkuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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YUFBRyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztRQUM1RSxDQUNQO01BQ0Y7OztVQXBCa0IsV0FBVztJQUFTLEtBQUssQ0FBQyxTQUFTOztzQkFBbkMsV0FBVyIsImZpbGUiOiJzaW1wbGUtY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDE4YTNkOWQ3MjlhMTM3ZWIwNDEzXG4gKiovIiwiaW1wb3J0IF9DYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyJztcblxuZXhwb3J0IGNvbnN0IFNpbXBsZUNhbGVuZGFyID0gX0NhbGVuZGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgTW9udGggICAgICAgZnJvbSAnLi9tb250aCdcbmltcG9ydCBNb250aEhlYWRlciBmcm9tICcuL21vbnRoX2hlYWRlcidcblxuXG4vKlxuICBhY3RpdmVNb250aCDigJQgRGF0ZSwgZGVmYXVsdCBgbmV3IERhdGUoKWBcbiAgb25BY3RpdmVNb250aENoYW5nZSDigJQgZnVuY3Rpb25cblxuICBzZWxlY3RlZCDigJQgb2JqZWN0IHwgZGVmYXVsdCBmYWxzZVxuICBvblNlbGVjdCDigJQgZnVuY3Rpb25cblxuICBzZWxlY3Rpb25Nb2RlIOKAlCBzdHJpbmcgfCBkZWZhdWx0ICdzaW5nbGUnXG5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVNb250aDogdGhpcy5wcm9wcy5hY3RpdmVNb250aCxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZU1vbnRoKCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSAmJiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVNb250aFxuICAgIH1cbiAgfVxuXG4gIF9nZXRTZWxlY3Rpb24oKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIF9zd2l0Y2hNb250aChvZmZzZXQpIHtcbiAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSh0aGlzLl9nZXRBY3RpdmVNb250aCgpKVxuICAgIG1vbnRoLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkgKyBvZmZzZXQpXG5cbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZShtb250aClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZU1vbnRoOiBtb250aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlZChzZWxlY3Rpb24pIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBbc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgYWN0aXZlTW9udGggICA9IHsgdGhpcy5fZ2V0QWN0aXZlTW9udGgoKSB9XG4gICAgICAgICAgb25Nb250aENoYW5nZSA9IHsgdGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb250aFxuICAgICAgICAgIGFjdGl2ZU1vbnRoICAgPSB7IHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkgfVxuICAgICAgICAgIHNlbGVjdGlvbk1vZGUgPSB7IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgICA9IHsgdGhpcy5fZ2V0U2VsZWN0aW9uKCkgfVxuICAgICAgICAgIGRhdGEgICAgICAgICAgPSB7IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgb25DaGFuZ2UgICAgICA9IHsgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgb25BY3RpdmVNb250aENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBvblNlbGVjdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGlvbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVNb250aDogbmV3IERhdGUoKSxcbiAgc2VsZWN0aW9uTW9kZTogJ3NpbmdsZSdcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9jYWxlbmRhci5qc3hcbiAqKi8iLCJpbXBvcnQgRGF5ICBmcm9tICcuL2RheSdcbmltcG9ydCBXZWVrIGZyb20gJy4vd2VlaydcblxuaW1wb3J0IGlzRGF0ZUJldHdlZW4gICBmcm9tICcuL3V0aWxzL2lzX2RhdGVfYmV0d2VlbidcbmltcG9ydCBnZXRXZWVrc0luTW9udGggZnJvbSAnLi91dGlscy9nZXRfd2Vla3NfaW5fbW9udGgnXG5cbi8vIGFjdGl2ZU1vbnRoICAgPSB7IHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkgfVxuLy8gc2VsZWN0aW9uTW9kZSA9IHsgdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlIH1cbi8vIHNlbGVjdGlvbiAgICAgPSB7IHRoaXMuX2dldFNlbGVjdGlvbigpIH1cbi8vIG9uQ2hhbmdlXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uU3RhcnQ6ICAgICAgbnVsbCxcbiAgICAgIHNlbGVjdGlvbkVuZDogICAgICAgIG51bGxcbiAgICB9XG4gIH1cblxuICBfb25EYXlDbGljayhkYXRlKSB7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PSAncmFuZ2UnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogICB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0LmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpID8gdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydCA6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PSAnc2luZ2xlJyB8fCAhdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZSlcbiAgICB9KVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzICYmICghdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQgfHwgdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQuZ2V0VGltZSgpICE9IGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGlvbkVuZDogZGF0ZSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcldlZWtzKCkge1xuICAgIGxldCB3ZWVrcyA9IGdldFdlZWtzSW5Nb250aCh0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKVxuICAgIHJldHVybiB3ZWVrcy5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXZWVrXG4gICAgICAgICAga2V5ICAgICAgICAgPSB7IHdlZWsuZ2V0VGltZSgpIH1cbiAgICAgICAgICBzdGFydERhdGUgICA9IHsgd2VlayB9XG4gICAgICAgICAgYWN0aXZlTW9udGggPSB7IHRoaXMucHJvcHMuYWN0aXZlTW9udGh9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgPSB7IHRoaXMucHJvcHMuc2VsZWN0ZWQgfVxuICAgICAgICAgIGRhdGEgICAgICAgID0geyB0aGlzLnByb3BzLmRhdGEgfVxuXG4gICAgICAgICAgb25EYXlDbGljayAgICAgPSB7IHRoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmUgPSB7IHRoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aFwiPlxuICAgICAgICB7IHRoaXMuX3JlbmRlcldlZWtzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoLmpzeFxuICoqLyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBpc1dlZWtlbmQgICAgIGZyb20gJy4vdXRpbHMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1RvZGF5ICAgICAgIGZyb20gJy4vdXRpbHMvaXNfdG9kYXknXG5cbmltcG9ydCBwcmV2ZW50RGVmYXVsdCAgICAgICBmcm9tICcuL3V0aWxzL3ByZXZlbnRfZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9XG4gICAgaWYgKF8uaXNBcnJheSh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzKSkge1xuICAgICAgY2xhc3NlcyA9IF8uemlwT2JqZWN0KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4geyByZXR1cm4oW2Bpcy0ke21vZGlmaWVyfWAsIHRydWVdKX0pKVxuICAgIH1cbiAgICBjbGFzc2VzID0gXy5hc3NpZ24oY2xhc3Nlcywge1xuICAgICAgZGF5OiB0cnVlLFxuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICdpcy13ZWVrZW5kJzogaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtd29ya2RheSc6ICFpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzVG9kYXkodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPT0gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXByZXZfbW9udGgnOiAgICB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA8IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogICAgdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoY2xhc3NlcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWUgICA9IHsgdGhpcy5fZ2V0Q2xhc3NlcygpIH1cbiAgICAgICAgb25DbGljayAgICAgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpIH1cbiAgICAgICAgb25Nb3VzZU1vdmUgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uTW91c2VNb3ZlLCB0aGlzLnByb3BzLmRhdGUpKSB9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dlZWtlbmQoZGF0ZSkge1xuICByZXR1cm4gKGRhdGUuZ2V0RGF5KCkgPT0gMCB8fCBkYXRlLmdldERhdGUoKSA9PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIHJldHVybiAoXG4gICAgKHRvZGF5LmdldEZ1bGxZZWFyKCkgPT0gZGF0ZS5nZXRGdWxsWWVhcigpKSAmJlxuICAgICh0b2RheS5nZXRNb250aCgpID09IGRhdGUuZ2V0TW9udGgoKSkgJiZcbiAgICAodG9kYXkuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc190b2RheS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZnVuYyAmJiBmdW5jLmNhbGwodGhhdCwgZSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzXG4gKiovIiwiaW1wb3J0IERheSBmcm9tICcuL2RheSdcblxuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGRhdGVLZXkgZnJvbSAnLi91dGlscy9kYXRlX2tleSdcbmltcG9ydCBpc0RhdGVJblJhbmdlIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleSAgPSB7IGRheS5nZXRUaW1lKCkgfVxuICAgICAgICAgIGRhdGUgPSB7IGRheSB9XG4gICAgICAgICAgZGF0YSA9IHsgdGhpcy5wcm9wcy5kYXRhW2RhdGVLZXkoZGF5KV0gfVxuICAgICAgICAgIHNlbGVjdGVkID0geyBpc0RhdGVJblJhbmdlKGRheSwgdGhpcy5wcm9wcy5zZWxlY3RlZCkgfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoID0geyB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoIH1cblxuICAgICAgICAgIG9uQ2xpY2sgICAgID0geyB0aGlzLnByb3BzLm9uRGF5Q2xpY2sgfVxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyB0aGlzLnByb3BzLm9uRGF5TW91c2VNb3ZlIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWtcIj5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuV2Vlay5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3hcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5XZWVrKG1vbnRoKSB7XG4gIHJldHVybiBfLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoLmdldE1vbnRoKCksXG4gICAgICAgIG1vbnRoLmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVLZXkoZGF0ZSkge1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgbGV0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGxldCBkZCA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzXG4gKiovIiwiaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi9kYXRlX3JhbmdlX3RvX2FycmF5J1xuaW1wb3J0IGlzRGF0ZUJldHdlZW4gICAgZnJvbSAnLi9pc19kYXRlX2JldHdlZW4nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZSAoZGF0ZSwgZGF0ZXNSYW5nZSkge1xuICBsZXQgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZVJhbmdlVG9BcnJheSh2YWx1ZSkge1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKVxuXG4gIGlmIChfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5lbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZVswXSB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZVsxXSB8fCBub3cpXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbmV3IERhdGUoKSwgbmV3IERhdGUoKV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUJldHdlZW4gKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgbGV0IGRhdGUxID0gbmV3IERhdGUoZGF0ZUZyb20gfHwgZGF0ZVRvKVxuICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZShkYXRlVG8gfHwgZGF0ZUZyb20pXG4gIGxldCBtaW4gPSBNYXRoLm1pbihkYXRlMS5nZXRUaW1lKCksIGRhdGUyLmdldFRpbWUoKSlcbiAgbGV0IG1heCA9IE1hdGgubWF4KGRhdGUxLmdldFRpbWUoKSwgZGF0ZTIuZ2V0VGltZSgpKVxuICBsZXQgdGltZSA9IGRhdGUuZ2V0VGltZSgpXG4gIHJldHVybiAodGltZSA+PSBtaW4gJiYgdGltZSA8PSBtYXgpXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla3NJbk1vbnRoKG1vbnRoKSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoXG4gICAgbW9udGguZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aC5nZXRNb250aCgpLFxuICAgIG1vbnRoLmdldERhdGUoKVxuICApXG5cbiAgbGV0IGRheXNGcm9tV2Vla1N0YXJ0ID0gKGRhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXG4gIGxldCBkYXlzSW5Nb250aCAgICAgICA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG5cbiAgbGV0IHdlZWtzQ291bnQgPSBNYXRoLmNlaWwoKGRheXNJbk1vbnRoICsgZGF5c0Zyb21XZWVrU3RhcnQpIC8gNylcbiAgdmFyIHN0YXJ0RGF0ZSAgPSBuZXcgRGF0ZShcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRNb250aCgpLFxuICAgIDEgLSBkYXlzRnJvbVdlZWtTdGFydFxuICApXG5cbiAgcmV0dXJuIF8ucmFuZ2UoMCwgd2Vla3NDb3VudClcbiAgICAubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBzdGFydERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldERhdGUoKSArIHdlZWsgKiA3XG4gICAgICApXG4gICAgfSlcblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2Uob2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbSA9IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21heScsICdqdW4nLCAnanVsJywgJ2F1ZycsICdzZXAnLCAnb2N0JywgJ25vdicsICdkZWMnXVxuICAgIGxldCBkYXRlID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLWhlYWRlclwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBfLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgLTEpLmJpbmQodGhpcykgfT5wcmV2PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLXRpdGxlXCI+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IF8ucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAxKS5iaW5kKHRoaXMpIH0+bmV4dDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=