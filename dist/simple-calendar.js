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
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	
	    var firstDayOfMonth = new Date(this.props.today);
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
	        return this.props.today;
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
	
	var _week = __webpack_require__(5);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(18);
	
	var _utilsGet_weeks_in_month2 = _interopRequireDefault(_utilsGet_weeks_in_month);
	
	var _utilsIs_date_in_boundaries = __webpack_require__(17);
	
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
	
	var _utilsIs_date_in_boundaries = __webpack_require__(17);
	
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
	
	var _utilsIs_same_date = __webpack_require__(9);
	
	var _utilsIs_same_date2 = _interopRequireDefault(_utilsIs_same_date);
	
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
	      var _props$selectionBoundaries = _props.selectionBoundaries;
	      var min = _props$selectionBoundaries.min;
	      var max = _props$selectionBoundaries.max;
	
	      var minDate = new Date(min);
	      var maxDate = new Date(max);
	      var prevEnabled = date.getFullYear() * 100 + date.getMonth() > minDate.getFullYear() * 100 + minDate.getMonth();
	      var nextEnabled = date.getFullYear() * 100 + date.getMonth() < maxDate.getFullYear() * 100 + maxDate.getMonth();
	
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
	          'next'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMDE5MjBjZTc5N2NiMzc2YzQ4OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3NhbWVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvbm9fb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfcmFuZ2VfdG9fYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9ib3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkNDdENxQixDQUFxQjs7OztTQUVsQyxRQUFRLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDRkUsQ0FBTzs7OzttQ0FDTixDQUFROzs7O2tDQUNULENBQVM7Ozs7eUNBQ0gsRUFBZ0I7Ozs7S0FFbkIsUUFBUTthQUFSLFFBQVE7O0FBQ2hCLFlBRFEsUUFBUSxDQUNmLEtBQUssRUFBRTsyQkFEQSxRQUFROztBQUV6QixnQ0FGaUIsUUFBUSw2Q0FFbkIsS0FBSyxFQUFDOztBQUVaLFNBQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ2xELG9CQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsa0JBQVcsRUFBRSxlQUFlO0FBQzVCLGVBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7TUFDOUI7SUFDRjs7Z0JBVmtCLFFBQVE7O1lBWUYsbUNBQUMsU0FBUyxFQUFFO0FBQ25DLFdBQUksQ0FBQyxvQkFBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEs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LENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFFL0Q7U0FDSjs7YUFBSyxTQUFTLEVBQUMsYUFBYTtXQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztXQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7VUFDcEM7U0FDTjs7O0FBQ0UsZ0JBQUcsRUFBQyxlQUFlO0FBQ25CLHFCQUFRLEVBQUUsQ0FBQyxXQUFZO0FBQ3ZCLHNCQUFTLEVBQUUsWUFBWSxJQUFJLFdBQVcsR0FBRyxFQUFFLEdBQUcsY0FBYyxDQUFFO0FBQzlELGlCQUFJLEVBQUMsR0FBRztBQUNSLG9CQUFPLEVBQUcsb0JBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFFOUQ7UUFDQSxDQUNQO01BQ0Y7OztVQXZDa0IsV0FBVztJQUFTLG1CQUFNLFNBQVM7O3NCQUFuQyxXQUFXIiwiZmlsZSI6InNpbXBsZS1jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpLCByZXF1aXJlKFwiX1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiLCBcIl9cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpLCByZXF1aXJlKFwiX1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIl9cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiMDE5MjBjZTc5N2NiMzc2YzQ4OVxuICoqLyIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyJ1xuXG5leHBvcnQge0NhbGVuZGFyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBNb250aCBmcm9tICcuL21vbnRoJ1xuaW1wb3J0IE1vbnRoSGVhZGVyIGZyb20gJy4vbW9udGhfaGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRvZGF5KVxuICAgIGZpcnN0RGF5T2ZNb250aC5zZXREYXRlKDEpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZU1vbnRoOiBmaXJzdERheU9mTW9udGgsXG4gICAgICBzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFsb2Rhc2guaXNFcXVhbChuZXh0UHJvcHMuc2VsZWN0ZWQsIHRoaXMucHJvcHMuc2VsZWN0ZWQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IG5leHRQcm9wcy5zZWxlY3RlZFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfZ2V0QWN0aXZlTW9udGgoKSB7XG4gICAgaWYgKGxvZGFzaC5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZGF5XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZU1vbnRoXG4gICAgfVxuICB9XG5cbiAgX3N3aXRjaE1vbnRoKG9mZnNldCkge1xuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodGhpcy5fZ2V0QWN0aXZlTW9udGgoKSlcbiAgICBtb250aC5zZXRNb250aChtb250aC5nZXRNb250aCgpICsgb2Zmc2V0KVxuXG4gICAgaWYgKGxvZGFzaC5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25BY3RpdmVNb250aENoYW5nZShtb250aClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZU1vbnRoOiBtb250aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlZChzZWxlY3Rpb24pIHtcbiAgICBpZiAobG9kYXNoLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vblNlbGVjdCkgJiYgIXNlbGVjdGlvbi5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KFxuICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25FbmQsXG4gICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25JblByb2dyZXNzXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWQ6IFtzZWxlY3Rpb24uc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbi5zZWxlY3Rpb25FbmRdXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb250aFByb3BzID0gbG9kYXNoLnBpY2sodGhpcy5wcm9wcywgWydzZWxlY3Rpb25Nb2RlJywgJ2RhdGEnLCAnc2VsZWN0aW9uQm91bmRhcmllcycsICd0b2RheSddKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kYXInPlxuICAgICAgICA8TW9udGhIZWFkZXJcbiAgICAgICAgICByZWY9J2hlYWRlcidcbiAgICAgICAgICBzZWxlY3Rpb25Cb3VuZGFyaWVzPXt0aGlzLnByb3BzLnNlbGVjdGlvbkJvdW5kYXJpZXN9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMuX2dldEFjdGl2ZU1vbnRoKCl9XG4gICAgICAgICAgb25Nb250aENoYW5nZT17dGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vbnRoXG4gICAgICAgICAgeyAuLi5tb250aFByb3BzIH1cbiAgICAgICAgICByZWY9J21vbnRoJ1xuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLl9nZXRBY3RpdmVNb250aCgpfVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICB0b2RheTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSkpLFxuICAgIFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuICBvblNlbGVjdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGlvbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59XG5cbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9kYXk6IG5ldyBEYXRlKCksXG4gIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnLFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvY2FsZW5kYXIuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnXG5pbXBvcnQgZ2V0V2Vla3NJbk1vbnRoIGZyb20gJy4vdXRpbHMvZ2V0X3dlZWtzX2luX21vbnRoJ1xuaW1wb3J0IGlzRGF0ZUluQm91bmRhcmllcyBmcm9tICcuL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uU3RhcnQ6IG51bGwsXG4gICAgICBzZWxlY3Rpb25FbmQ6IG51bGxcbiAgICB9XG4gIH1cblxuICBfcHVzaFVwZGF0ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgbG9kYXNoLnBpY2sodGhpcy5zdGF0ZSwgWydzZWxlY3Rpb25TdGFydCcsICdzZWxlY3Rpb25FbmQnLCAnc2VsZWN0aW9uSW5Qcm9ncmVzcyddKVxuICAgIClcbiAgfVxuXG4gIF9vbkRheUNsaWNrKGRhdGUpIHtcbiAgICBpZiAoIWlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCB0aGlzLnByb3BzLnNlbGVjdGlvbkJvdW5kYXJpZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgbmV4dFN0YXRlID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAncmFuZ2UnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3Rpb25JblByb2dyZXNzKSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydC5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKSA/IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQgOiBkYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnIHx8ICF0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9vbkRheU1vdXNlTW92ZShkYXRlKSB7XG4gICAgaWYgKCFpc0RhdGVJbkJvdW5kYXJpZXMoZGF0ZSwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcyAmJiAoIXRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kIHx8IHRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kLmdldFRpbWUoKSAhPT0gZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpb25FbmQ6IGRhdGV9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyV2Vla3MoKSB7XG4gICAgY29uc3Qgd2Vla3MgPSBnZXRXZWVrc0luTW9udGgodGhpcy5wcm9wcy5hY3RpdmVNb250aClcbiAgICByZXR1cm4gd2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V2Vla1xuICAgICAgICAgIGtleT17d2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgcmVmPXsnd2VlaycgKyB3ZWVrLmdldFRpbWUoKX1cbiAgICAgICAgICBzdGFydERhdGU9e3dlZWt9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMucHJvcHMuYWN0aXZlTW9udGh9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgc2VsZWN0aW9uQm91bmRhcmllcz17dGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzfVxuICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICB0b2RheT17dGhpcy5wcm9wcy50b2RheX1cblxuICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuX29uRGF5Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkRheU1vdXNlTW92ZT17dGhpcy5fb25EYXlNb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgnPlxuICAgICAgICB7IHRoaXMuX3JlbmRlcldlZWtzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IERheSBmcm9tICcuL2RheSdcbmltcG9ydCBkYXRlS2V5IGZyb20gJy4vdXRpbHMvZGF0ZV9rZXknXG5pbXBvcnQgZ2V0RGF5c0luV2VlayBmcm9tICcuL3V0aWxzL2dldF9kYXlzX2luX3dlZWsnXG5pbXBvcnQgaXNEYXRlSW5SYW5nZSBmcm9tICcuL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UnXG5pbXBvcnQgaXNEYXRlSW5Cb3VuZGFyaWVzIGZyb20gJy4vdXRpbHMvaXNfZGF0ZV9pbl9ib3VuZGFyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX3JlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIGdldERheXNJbldlZWsodGhpcy5wcm9wcy5zdGFydERhdGUpLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF5XG4gICAgICAgICAga2V5PXtkYXkuZ2V0VGltZSgpfVxuICAgICAgICAgIHJlZj17J2RheScgKyBkYXkuZ2V0VGltZSgpfVxuICAgICAgICAgIGRhdGU9e2RheX1cbiAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFbZGF0ZUtleShkYXkpXX1cbiAgICAgICAgICBzZWxlY3RlZD17aXNEYXRlSW5SYW5nZShkYXksIHRoaXMucHJvcHMuc2VsZWN0ZWQpfVxuICAgICAgICAgIGluQm91bmRhcmllcz17aXNEYXRlSW5Cb3VuZGFyaWVzKGRheSwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzKX1cbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5wcm9wcy5hY3RpdmVNb250aH1cbiAgICAgICAgICB0b2RheT17dGhpcy5wcm9wcy50b2RheX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGF5Q2xpY2t9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMucHJvcHMub25EYXlNb3VzZU1vdmV9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dlZWsnPlxuICAgICAgICB7IHRoaXMuX3JlbmRlckRheXMoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuV2Vlay5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci93ZWVrLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IGlzV2Vla2VuZCBmcm9tICcuL3V0aWxzL2lzX3dlZWtlbmQnXG5pbXBvcnQgaXNTYW1lRGF0ZSBmcm9tICcuL3V0aWxzL2lzX3NhbWVfZGF0ZSdcbmltcG9ydCBub09wIGZyb20gJy4vdXRpbHMvbm9fb3AnXG5pbXBvcnQgcHJldmVudERlZmF1bHQgZnJvbSAnLi91dGlscy9wcmV2ZW50X2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9nZXRDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge31cbiAgICBpZiAobG9kYXNoLmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhLm1vZGlmaWVycykpIHtcbiAgICAgIGNsYXNzZXMgPSBsb2Rhc2guemlwT2JqZWN0KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4geyByZXR1cm4gKFtgaXMtJHttb2RpZmllcn1gLCB0cnVlXSl9KSlcbiAgICB9XG4gICAgY2xhc3NlcyA9IGxvZGFzaC5hc3NpZ24oY2xhc3Nlcywge1xuICAgICAgZGF5OiB0cnVlLFxuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICdpcy13ZWVrZW5kJzogaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtd29ya2RheSc6ICFpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzU2FtZURhdGUodGhpcy5wcm9wcy50b2RheSwgdGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPT09IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1wcmV2X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPCB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtbmV4dF9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID4gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXNlbGVjdGFibGUnOiB0aGlzLnByb3BzLmluQm91bmRhcmllcyxcbiAgICAgICdpcy1ub3Qtc2VsZWN0YWJsZSc6ICF0aGlzLnByb3BzLmluQm91bmRhcmllc1xuICAgIH0pXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoY2xhc3NlcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3RoaXMuX2dldENsYXNzZXMoKX1cbiAgICAgICAgb25DbGljaz17cHJldmVudERlZmF1bHQobG9kYXNoLnBhcnRpYWwodGhpcy5wcm9wcy5vbkNsaWNrLCB0aGlzLnByb3BzLmRhdGUpKX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e3ByZXZlbnREZWZhdWx0KGxvZGFzaC5wYXJ0aWFsKHRoaXMucHJvcHMub25Nb3VzZU1vdmUsIHRoaXMucHJvcHMuZGF0ZSkpfVxuICAgICAgPlxuICAgICAgICB7bmV3IERhdGUodGhpcy5wcm9wcy5kYXRlKS5nZXREYXRlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIG9uQ2xpY2s6IG5vT3AsXG4gIG9uTW91c2VNb3ZlOiBub09wXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9kYXkuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIG9uIHRoZSB3ZWVrZW5kIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2Vla2VuZChkYXRlKSB7XG4gIHJldHVybiAoZGF0ZS5nZXREYXkoKSA9PT0gMCB8fCBkYXRlLmdldERheSgpID09PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURhdGUoZGF0ZTEsIGRhdGUyKSB7XG4gIHJldHVybiAoXG4gICAgKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkpICYmXG4gICAgKGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkpICYmXG4gICAgKGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpKVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19zYW1lX2RhdGUuanNcbiAqKi8iLCIvKiogQSBubyBvcCBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgZGVmYXVsdCB2YWx1ZSBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcHJvcHMuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub09wKCkge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZnVuYykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCwgZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL3ByZXZlbnRfZGVmYXVsdC5qc1xuICoqLyIsIi8qKlxuICogQWNjZXB0cyBhIGRhdGUgb3IgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBkYXRlIGFuZCByZXR1cm5zXG4gKiBhIHN0cmluZyBzdWl0YWJsZSB0byBiZSB1c2VkIGFzIGEga2V5IGluIHRoZSBmb3JtYXQ6IFlZWVktTU0tRERcbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlS2V5KGRhdGUpIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW0gPSAoJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcbiAgY29uc3QgZGQgPSAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKVxuICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qc1xuICoqLyIsImltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG4vKipcbiAqIEFjY2VwdHMgdGhlIGZpcnN0IGRheSBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIDcgZGF5cyBzdGFydGluZ1xuICogd2l0aCB0aGUgZmlyc3QgZGF5LiBJbnRlbmRlZCBmb3IgZ2VuZXJhdGluZyBkYXlzIGluIGEgd2Vlay5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5c0luV2VlayhmaXJzdERheSkge1xuICByZXR1cm4gbG9kYXNoLnJhbmdlKDAsIDcpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGZpcnN0RGF5LmdldE1vbnRoKCksXG4gICAgICAgIGZpcnN0RGF5LmdldERhdGUoKSArIGRheVxuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzXG4gKiovIiwiaW1wb3J0IGRhdGVSYW5nZVRvQXJyYXkgZnJvbSAnLi9kYXRlX3JhbmdlX3RvX2FycmF5J1xuaW1wb3J0IGlzRGF0ZUJldHdlZW4gZnJvbSAnLi9pc19kYXRlX2JldHdlZW4nXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGRhdGVSYW5nZVRvQXJyYXkgZm9yIGRldGFpbHMgb24gcmFuZ2UgZm9ybWF0cy5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHVuZGVmaW5lZH0gZGF0ZXNSYW5nZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSwgZGF0ZXNSYW5nZSkge1xuICBjb25zdCByYW5nZSA9IGRhdGVSYW5nZVRvQXJyYXkoZGF0ZXNSYW5nZSlcbiAgcmV0dXJuIGlzRGF0ZUJldHdlZW4oZGF0ZSwgcmFuZ2VbMF0sIHJhbmdlWzFdKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZS5qc1xuICoqLyIsImltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG4vKipcbiAqIEl0IHRha2VzIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICogIC0gYW4gb2JqZWN0IHdpdGggJ3N0YXJ0JyBhbmQvb3IgJ2VuZCcgcHJvcGVydGllcyB3aXRoIGRhdGVzXG4gKiAgLSBhbiBhcnJheSB3aXRoIDEgb3IgMiBkYXRlc1xuICogIC0gbm90aGluZ1xuICpcbiAqIEluIGFsbCB0aGUgY2FzZXMgaXQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHR3byB2YWx1ZXMgdGhhdCBhcmUgRGF0ZSBvYmplY3RcbiAqIHJlcHJlc2VudGluZyBzdGFydCBhbmQgZW5kIG9mIGEgcmFuZ2UuIEluIGNhc2VzIHdoZXJlIGVpdGhlciBzdGFydCBvciBlbmRcbiAqIGVuZCBpcyBtaXNzaW5nIGl0IGRlZmF1bHRzIHRvIGN1cnJlbnQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVSYW5nZVRvQXJyYXkodmFsdWUpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuXG4gIGlmIChsb2Rhc2guaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gW25ldyBEYXRlKHZhbHVlLnN0YXJ0IHx8IG5vdyksIG5ldyBEYXRlKHZhbHVlLmVuZCB8fCBub3cpXVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZVswXSB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZVsxXSB8fCBub3cpXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbm93LCBub3ddXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfcmFuZ2VfdG9fYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIGJldHdlZW4gZGF0ZUZyb20gYW5kIGRhdGVUbywgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZUZyb21cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVUb1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gcmVzZXREYXRlKGRhdGUpIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIGRhdGVPYmouZ2V0TW9udGgoKSwgZGF0ZU9iai5nZXREYXRlKCksIDAsIDAsIDAsIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUJldHdlZW4oZGF0ZSwgZGF0ZUZyb20sIGRhdGVUbykge1xuICBjb25zdCBmcm9tVGltZSA9IHJlc2V0RGF0ZShkYXRlRnJvbSkuZ2V0VGltZSgpXG4gIGNvbnN0IHRvVGltZSA9IHJlc2V0RGF0ZShkYXRlVG8pLmdldFRpbWUoKVxuICBjb25zdCBtaW4gPSBNYXRoLm1pbihmcm9tVGltZSwgdG9UaW1lKVxuICBjb25zdCBtYXggPSBNYXRoLm1heChmcm9tVGltZSwgdG9UaW1lKVxuICBjb25zdCB0aW1lID0gcmVzZXREYXRlKGRhdGUpLmdldFRpbWUoKVxuICByZXR1cm4gKHRpbWUgPj0gbWluICYmIHRpbWUgPD0gbWF4KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBpbnNpZGUgYm91bmRhcmllcy5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBib3VuZGFyaWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiByZXNldERhdGUoZGF0ZSkge1xuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZSlcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgZGF0ZU9iai5nZXRNb250aCgpLCBkYXRlT2JqLmdldERhdGUoKSwgMCwgMCwgMCwgMClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlSW5Cb3VuZGFyaWVzKGRhdGUsIGJvdW5kYXJpZXMpIHtcbiAgY29uc3QgdGltZSA9IHJlc2V0RGF0ZShkYXRlKS5nZXRUaW1lKClcbiAgY29uc3QgbWluID0gYm91bmRhcmllcyAmJiBib3VuZGFyaWVzLm1pbiAmJiByZXNldERhdGUoYm91bmRhcmllcy5taW4pLmdldFRpbWUoKVxuICBjb25zdCBtYXggPSBib3VuZGFyaWVzICYmIGJvdW5kYXJpZXMubWF4ICYmIHJlc2V0RGF0ZShib3VuZGFyaWVzLm1heCkuZ2V0VGltZSgpXG5cbiAgaWYgKG1pbiAmJiBtaW4gPiB0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKG1heCAmJiBtYXggPCB0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcy5qc1xuICoqLyIsImltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG4vKipcbiAqIEFjY2VwdHMgdGhlIGZpcnN0IGRheSBvZiBtb250aCBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nXG4gKiBhbGwgbW9uZGF5cyBmb3IgYWxsIHdlZWtzIHRoYXQgaW50ZXJzZWN0IHRoYXQgbW9udGguIFNvLCBpZiBhIG1vbnRoXG4gKiBzdGFydHMgb24gYSBXZWRuZXNkYXksIHRoZSBmaXJzdCBlbnRyeSB3aWxsIGJlIHRoZSBwcmV2aW91cyBtb25kYXkuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtzSW5Nb250aChtb250aCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgbW9udGguZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aC5nZXRNb250aCgpLFxuICAgIG1vbnRoLmdldERhdGUoKVxuICApXG5cbiAgY29uc3QgZGF5c0Zyb21XZWVrU3RhcnQgPSAoZGF0ZS5nZXREYXkoKSB8fCA3KSAtIDFcbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKVxuXG4gIGNvbnN0IHdlZWtzQ291bnQgPSBNYXRoLmNlaWwoKGRheXNJbk1vbnRoICsgZGF5c0Zyb21XZWVrU3RhcnQpIC8gNylcbiAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAxIC0gZGF5c0Zyb21XZWVrU3RhcnRcbiAgKVxuXG4gIHJldHVybiBsb2Rhc2gucmFuZ2UoMCwgd2Vla3NDb3VudClcbiAgICAubWFwKCh3ZWVrKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBzdGFydERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldERhdGUoKSArIHdlZWsgKiA3XG4gICAgICApXG4gICAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9zd2l0Y2hNb250aChlLCBpZCwgb2Zmc2V0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFlLnRhcmdldC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnZGlzYWJsZWQnKSAmJiBsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2Uob2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbiAgICBjb25zdCB7YWN0aXZlTW9udGg6IGRhdGUsIHNlbGVjdGlvbkJvdW5kYXJpZXM6IHttaW4sIG1heH19ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW4pXG4gICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heClcbiAgICBjb25zdCBwcmV2RW5hYmxlZCA9IGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMCArIGRhdGUuZ2V0TW9udGgoKSA+IG1pbkRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMCArIG1pbkRhdGUuZ2V0TW9udGgoKVxuICAgIGNvbnN0IG5leHRFbmFibGVkID0gZGF0ZS5nZXRGdWxsWWVhcigpICogMTAwICsgZGF0ZS5nZXRNb250aCgpIDwgbWF4RGF0ZS5nZXRGdWxsWWVhcigpICogMTAwICsgbWF4RGF0ZS5nZXRNb250aCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoLWhlYWRlcic+XG4gICAgICAgIDxhXG4gICAgICAgICAgcmVmPSdwcmV2TW9udGhMaW5rJ1xuICAgICAgICAgIGRpc2FibGVkPXshcHJldkVuYWJsZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXsncHJldi1tb250aCcgKyAocHJldkVuYWJsZWQgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKX1cbiAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgIG9uQ2xpY2s9eyBsb2Rhc2gucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAtMSkuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIG5leHRcbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtdGl0bGUnPlxuICAgICAgICAgIHttW2RhdGUuZ2V0TW9udGgoKV19IHtkYXRlLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIHJlZj0nbmV4dE1vbnRoTGluaydcbiAgICAgICAgICBkaXNhYmxlZD17IW5leHRFbmFibGVkfVxuICAgICAgICAgIGNsYXNzTmFtZT17J25leHQtbW9udGgnICsgKG5leHRFbmFibGVkID8gJycgOiAnIGlzLWRpc2FibGVkJyl9XG4gICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICBvbkNsaWNrPXsgbG9kYXNoLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIG5leHRcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aF9oZWFkZXIuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==