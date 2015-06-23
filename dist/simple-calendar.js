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
	    return [new Date(value.selectionStart || now), new Date(value.selectionEnd || now)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Y2I0ZmYxZTUzNGFiZjQ3ZGJlYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXkuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7V0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1VBQ3BDO1NBQ047O2FBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7O1VBQVM7UUFDNUUsQ0FDUDtNQUNGOzs7VUFwQmtCLFdBQVc7SUFBUyxLQUFLLENBQUMsU0FBUzs7c0JBQW5DLFdBQVciLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5Y2I0ZmYxZTUzNGFiZjQ3ZGJlYlxuICoqLyIsImltcG9ydCBfQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhcic7XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVDYWxlbmRhciA9IF9DYWxlbmRhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IE1vbnRoICAgICAgIGZyb20gJy4vbW9udGgnXG5pbXBvcnQgTW9udGhIZWFkZXIgZnJvbSAnLi9tb250aF9oZWFkZXInXG5cblxuLypcbiAgYWN0aXZlTW9udGgg4oCUIERhdGUsIGRlZmF1bHQgYG5ldyBEYXRlKClgXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2Ug4oCUIGZ1bmN0aW9uXG5cbiAgc2VsZWN0ZWQg4oCUIG9iamVjdCB8IGRlZmF1bHQgZmFsc2VcbiAgb25TZWxlY3Qg4oCUIGZ1bmN0aW9uXG5cbiAgc2VsZWN0aW9uTW9kZSDigJQgc3RyaW5nIHwgZGVmYXVsdCAnc2luZ2xlJ1xuXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlTW9udGg6IHRoaXMucHJvcHMuYWN0aXZlTW9udGgsXG4gICAgICBzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFfLmlzRXF1YWwobmV4dFByb3BzLnNlbGVjdGVkLCB0aGlzLnByb3BzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBuZXh0UHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZU1vbnRoKCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlTW9udGhcbiAgICB9XG4gIH1cblxuICBfc3dpdGNoTW9udGgob2Zmc2V0KSB7XG4gICAgbGV0IG1vbnRoID0gbmV3IERhdGUodGhpcy5fZ2V0QWN0aXZlTW9udGgoKSlcbiAgICBtb250aC5zZXRNb250aChtb250aC5nZXRNb250aCgpICsgb2Zmc2V0KVxuXG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UobW9udGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVNb250aDogbW9udGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZWQoc2VsZWN0aW9uKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSAmJiAhc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0aW9uKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkOiBbc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kXVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgYWN0aXZlTW9udGggICA9IHsgdGhpcy5fZ2V0QWN0aXZlTW9udGgoKSB9XG4gICAgICAgICAgb25Nb250aENoYW5nZSA9IHsgdGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb250aFxuICAgICAgICAgIGFjdGl2ZU1vbnRoICAgPSB7IHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkgfVxuICAgICAgICAgIHNlbGVjdGlvbk1vZGUgPSB7IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgICA9IHsgdGhpcy5zdGF0ZS5zZWxlY3RlZCB9XG4gICAgICAgICAgZGF0YSAgICAgICAgICA9IHsgdGhpcy5wcm9wcy5kYXRhIH1cbiAgICAgICAgICBvbkNoYW5nZSAgICAgID0geyB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkNhbGVuZGFyLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlTW9udGg6ICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZDogICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBvblNlbGVjdGlvbkNoYW5nZTogICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0aW9uTW9kZTogICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YTogICAgICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufVxuXG5DYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZU1vbnRoOiAgIG5ldyBEYXRlKCksXG4gIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvY2FsZW5kYXIuanN4XG4gKiovIiwiaW1wb3J0IERheSAgZnJvbSAnLi9kYXknXG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnXG5cbmltcG9ydCBpc0RhdGVCZXR3ZWVuICAgZnJvbSAnLi91dGlscy9pc19kYXRlX2JldHdlZW4nXG5pbXBvcnQgZ2V0V2Vla3NJbk1vbnRoIGZyb20gJy4vdXRpbHMvZ2V0X3dlZWtzX2luX21vbnRoJ1xuXG4vLyBhY3RpdmVNb250aCAgID0geyB0aGlzLl9nZXRBY3RpdmVNb250aCgpIH1cbi8vIHNlbGVjdGlvbk1vZGUgPSB7IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB9XG4vLyBzZWxlY3Rpb24gICAgID0geyB0aGlzLl9nZXRTZWxlY3Rpb24oKSB9XG4vLyBvbkNoYW5nZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiAgICAgIG51bGwsXG4gICAgICBzZWxlY3Rpb25FbmQ6ICAgICAgICBudWxsXG4gICAgfVxuICB9XG5cbiAgX3B1c2hVcGRhdGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIF8ucGljayh0aGlzLnN0YXRlLCBbJ3NlbGVjdGlvblN0YXJ0JywgJ3NlbGVjdGlvbkVuZCcsICdzZWxlY3Rpb25JblByb2dyZXNzJ10pXG4gICAgKVxuICB9XG5cbiAgX29uRGF5Q2xpY2soZGF0ZSkge1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fVxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT0gJ3JhbmdlJykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6ICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT0gJ3NpbmdsZScgfHwgIXRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgc2VsZWN0aW9uRW5kOiBkYXRlXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCAoKSA9PiB7XG4gICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgX29uRGF5TW91c2VNb3ZlKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzICYmICghdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQgfHwgdGhpcy5zdGF0ZS5zZWxlY3Rpb25FbmQuZ2V0VGltZSgpICE9IGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGlvbkVuZDogZGF0ZSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyV2Vla3MoKSB7XG4gICAgbGV0IHdlZWtzID0gZ2V0V2Vla3NJbk1vbnRoKHRoaXMucHJvcHMuYWN0aXZlTW9udGgpXG4gICAgcmV0dXJuIHdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdlZWtcbiAgICAgICAgICBrZXkgICAgICAgICA9IHsgd2Vlay5nZXRUaW1lKCkgfVxuICAgICAgICAgIHN0YXJ0RGF0ZSAgID0geyB3ZWVrIH1cbiAgICAgICAgICBhY3RpdmVNb250aCA9IHsgdGhpcy5wcm9wcy5hY3RpdmVNb250aCB9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgPSB7IHRoaXMucHJvcHMuc2VsZWN0ZWQgfVxuICAgICAgICAgIGRhdGEgICAgICAgID0geyB0aGlzLnByb3BzLmRhdGEgfVxuXG4gICAgICAgICAgb25EYXlDbGljayAgICAgPSB7IHRoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmUgPSB7IHRoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aFwiPlxuICAgICAgICB7IHRoaXMuX3JlbmRlcldlZWtzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoLmpzeFxuICoqLyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBpc1dlZWtlbmQgICAgIGZyb20gJy4vdXRpbHMvaXNfd2Vla2VuZCdcbmltcG9ydCBpc1RvZGF5ICAgICAgIGZyb20gJy4vdXRpbHMvaXNfdG9kYXknXG5cbmltcG9ydCBwcmV2ZW50RGVmYXVsdCAgICAgICBmcm9tICcuL3V0aWxzL3ByZXZlbnRfZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9XG4gICAgaWYgKF8uaXNBcnJheSh0aGlzLnByb3BzLmRhdGEubW9kaWZpZXJzKSkge1xuICAgICAgY2xhc3NlcyA9IF8uemlwT2JqZWN0KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4geyByZXR1cm4oW2Bpcy0ke21vZGlmaWVyfWAsIHRydWVdKX0pKVxuICAgIH1cbiAgICBjbGFzc2VzID0gXy5hc3NpZ24oY2xhc3Nlcywge1xuICAgICAgZGF5OiB0cnVlLFxuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICdpcy13ZWVrZW5kJzogaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtd29ya2RheSc6ICFpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzVG9kYXkodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPT0gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXByZXZfbW9udGgnOiAgICB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA8IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1uZXh0X21vbnRoJzogICAgdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPiB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoY2xhc3NlcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWUgICA9IHsgdGhpcy5fZ2V0Q2xhc3NlcygpIH1cbiAgICAgICAgb25DbGljayAgICAgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpIH1cbiAgICAgICAgb25Nb3VzZU1vdmUgPSB7IHByZXZlbnREZWZhdWx0KF8ucGFydGlhbCh0aGlzLnByb3BzLm9uTW91c2VNb3ZlLCB0aGlzLnByb3BzLmRhdGUpKSB9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dlZWtlbmQoZGF0ZSkge1xuICByZXR1cm4gKGRhdGUuZ2V0RGF5KCkgPT0gMCB8fCBkYXRlLmdldERhdGUoKSA9PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIHJldHVybiAoXG4gICAgKHRvZGF5LmdldEZ1bGxZZWFyKCkgPT0gZGF0ZS5nZXRGdWxsWWVhcigpKSAmJlxuICAgICh0b2RheS5nZXRNb250aCgpID09IGRhdGUuZ2V0TW9udGgoKSkgJiZcbiAgICAodG9kYXkuZ2V0RGF0ZSgpID09IGRhdGUuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc190b2RheS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZnVuYyAmJiBmdW5jLmNhbGwodGhhdCwgZSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzXG4gKiovIiwiaW1wb3J0IERheSBmcm9tICcuL2RheSdcblxuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGRhdGVLZXkgZnJvbSAnLi91dGlscy9kYXRlX2tleSdcbmltcG9ydCBpc0RhdGVJblJhbmdlIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleSAgPSB7IGRheS5nZXRUaW1lKCkgfVxuICAgICAgICAgIGRhdGUgPSB7IGRheSB9XG4gICAgICAgICAgZGF0YSA9IHsgdGhpcy5wcm9wcy5kYXRhW2RhdGVLZXkoZGF5KV0gfVxuICAgICAgICAgIHNlbGVjdGVkID0geyBpc0RhdGVJblJhbmdlKGRheSwgdGhpcy5wcm9wcy5zZWxlY3RlZCkgfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoID0geyB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoIH1cblxuICAgICAgICAgIG9uQ2xpY2sgICAgID0geyB0aGlzLnByb3BzLm9uRGF5Q2xpY2sgfVxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyB0aGlzLnByb3BzLm9uRGF5TW91c2VNb3ZlIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWtcIj5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuV2Vlay5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3hcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5XZWVrKG1vbnRoKSB7XG4gIHJldHVybiBfLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoLmdldE1vbnRoKCksXG4gICAgICAgIG1vbnRoLmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVLZXkoZGF0ZSkge1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgbGV0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGxldCBkZCA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfa2V5LmpzXG4gKiovIiwiaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi9kYXRlX3JhbmdlX3RvX2FycmF5J1xuaW1wb3J0IGlzRGF0ZUJldHdlZW4gICAgZnJvbSAnLi9pc19kYXRlX2JldHdlZW4nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZSAoZGF0ZSwgZGF0ZXNSYW5nZSkge1xuICBsZXQgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX3JhbmdlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZVJhbmdlVG9BcnJheSh2YWx1ZSkge1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKVxuXG4gIGlmIChfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zZWxlY3Rpb25TdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5zZWxlY3Rpb25FbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZVswXSB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZVsxXSB8fCBub3cpXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbmV3IERhdGUoKSwgbmV3IERhdGUoKV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUJldHdlZW4gKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgbGV0IGRhdGUxID0gbmV3IERhdGUoZGF0ZUZyb20gfHwgZGF0ZVRvKVxuICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZShkYXRlVG8gfHwgZGF0ZUZyb20pXG4gIGxldCBtaW4gPSBNYXRoLm1pbihkYXRlMS5nZXRUaW1lKCksIGRhdGUyLmdldFRpbWUoKSlcbiAgbGV0IG1heCA9IE1hdGgubWF4KGRhdGUxLmdldFRpbWUoKSwgZGF0ZTIuZ2V0VGltZSgpKVxuICBsZXQgdGltZSA9IGRhdGUuZ2V0VGltZSgpXG4gIHJldHVybiAodGltZSA+PSBtaW4gJiYgdGltZSA8PSBtYXgpXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla3NJbk1vbnRoKG1vbnRoKSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoXG4gICAgbW9udGguZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aC5nZXRNb250aCgpLFxuICAgIG1vbnRoLmdldERhdGUoKVxuICApXG5cbiAgbGV0IGRheXNGcm9tV2Vla1N0YXJ0ID0gKGRhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXG4gIGxldCBkYXlzSW5Nb250aCAgICAgICA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG5cbiAgbGV0IHdlZWtzQ291bnQgPSBNYXRoLmNlaWwoKGRheXNJbk1vbnRoICsgZGF5c0Zyb21XZWVrU3RhcnQpIC8gNylcbiAgdmFyIHN0YXJ0RGF0ZSAgPSBuZXcgRGF0ZShcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRNb250aCgpLFxuICAgIDEgLSBkYXlzRnJvbVdlZWtTdGFydFxuICApXG5cbiAgcmV0dXJuIF8ucmFuZ2UoMCwgd2Vla3NDb3VudClcbiAgICAubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBzdGFydERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldERhdGUoKSArIHdlZWsgKiA3XG4gICAgICApXG4gICAgfSlcblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2Uob2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbSA9IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21heScsICdqdW4nLCAnanVsJywgJ2F1ZycsICdzZXAnLCAnb2N0JywgJ25vdicsICdkZWMnXVxuICAgIGxldCBkYXRlID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLWhlYWRlclwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBfLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgLTEpLmJpbmQodGhpcykgfT5wcmV2PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLXRpdGxlXCI+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IF8ucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAxKS5iaW5kKHRoaXMpIH0+bmV4dDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=