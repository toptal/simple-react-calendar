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
	
	/*
	  activeMonth — Date, default `new Date()`
	  onActiveMonthChange — function
	
	  selected — object | default false
	  onSelect — function
	
	  selectionMode — string | default 'single'
	*/
	
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
	      if (_lodash2['default'].isFunction(this.props.onMonthChange)) {
	        this.props.onMonthChange(offset);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZjFiNzgxZWMxYzkzZmE2NDM1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci93ZWVrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvZGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3dlZWtlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3RvZGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9ub19vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvcHJldmVudF9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs2Q0N0Q3FCLENBQXFCOzs7O1NBRWxDLFFBQVEsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NGRSxDQUFPOzs7O21DQUNOLENBQVE7Ozs7a0NBQ1QsQ0FBUzs7Ozt5Q0FDSCxFQUFnQjs7Ozs7Ozs7Ozs7Ozs7S0FZbkIsUUFBUTthQUFSLFFBQVE7O0FBQ2hCLFlBRFEsUUFBUSxDQUNmLEtBQUssRUFBRTsyQkFEQSxRQUFROztBQUV6QixnQ0FGaUIsUUFBUSw2Q0FFbkIsS0FBSyxFQUFDOztBQUVaLFNBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztBQUM5QyxvQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUIsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLGtCQUFXLEVBQUUsZUFBZTtBQUM1QixlQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO01BQzlCO0lBQ0Y7O2dCQVZrQixRQUFROztZQVlGLG1DQUFDLFNBQVMsRUFBRTtBQUNuQyxXQUFJLENBQUMsb0JBQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM1RCxhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osbUJBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7TUFDRjs7O1lBRWMsMkJBQUc7QUFDaEIsV0FBSSxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO0FBQ3JELGdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztRQUM5QixNQUFNO0FBQ0wsZ0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQzlCO01BQ0Y7OztZQUVXLHNCQUFDLE1BQU0sRUFBRTtBQUNuQixXQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUMsWUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDOztBQUV6QyxXQUFJLG9CQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDckQsYUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7UUFDdEMsTUFBTTtBQUNMLGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixzQkFBVyxFQUFFLEtBQUs7VUFDbkIsQ0FBQztRQUNIO01BQ0Y7OztZQUVnQiwyQkFBQyxTQUFTLEVBQUU7QUFDM0IsV0FBSSxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTtBQUM1RSxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsU0FBUyxDQUFDLFlBQVksRUFDdEIsU0FBUyxDQUFDLG1CQUFtQixDQUM5QjtRQUNGO0FBQ0QsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGlCQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDN0QsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLFdBQU0sVUFBVSxHQUFHLG9CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztBQUU1RixjQUNFOztXQUFLLFNBQVMsRUFBQyxVQUFVO1NBQ3ZCO0FBQ0UsY0FBRyxFQUFDLFFBQVE7QUFDWixzQkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUc7QUFDcEMsd0JBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7V0FDNUM7U0FDRixrRUFDTyxVQUFVO0FBQ2YsY0FBRyxFQUFDLE9BQU87QUFDWCxzQkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUc7QUFDcEMsbUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7QUFDOUIsbUJBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtZQUM1QztRQUNFLENBQ1A7TUFDRjs7O1VBekVrQixRQUFRO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWhDLFFBQVE7O0FBNEU3QixTQUFRLENBQUMsU0FBUyxHQUFHO0FBQ25CLGNBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUM3QyxzQkFBbUIsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUN6QyxXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsb0JBQWlCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDdkMsZ0JBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNyQyxPQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDN0I7O0FBRUQsU0FBUSxDQUFDLFlBQVksR0FBRztBQUN0QixjQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDdkIsZ0JBQWEsRUFBRSxRQUFRO0VBQ3hCOzs7Ozs7O0FDdkdELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7OzttQ0FDTixDQUFROzs7O2lDQUVWLENBQVE7Ozs7b0RBQ0csRUFBNEI7Ozs7dURBQ3pCLEVBQStCOzs7O0tBRXpDLEtBQUs7YUFBTCxLQUFLOztBQUNiLFlBRFEsS0FBSyxDQUNaLEtBQUssRUFBRTsyQkFEQSxLQUFLOztBQUV0QixnQ0FGaUIsS0FBSyw2Q0FFaEIsS0FBSyxFQUFDOztBQUVaLFNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCwwQkFBbUIsRUFBRSxLQUFLO0FBQzFCLHFCQUFjLEVBQUUsSUFBSTtBQUNwQixtQkFBWSxFQUFFLElBQUk7TUFDbkI7SUFDRjs7Z0JBVGtCLEtBQUs7O1lBV2IsdUJBQUc7QUFDWixXQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsb0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUNuRjtNQUNGOzs7WUFFVSxxQkFBQyxJQUFJLEVBQUU7OztBQUNoQixXQUFJLENBQUMsNkNBQW1CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDN0QsZ0JBQU8sS0FBSztRQUNiOztBQUVELFdBQUksU0FBUyxHQUFHLEVBQUU7QUFDbEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxPQUFPLEVBQUU7QUFDeEMsYUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0FBQ2xDLG9CQUFTLEdBQUc7QUFDVixnQ0FBbUIsRUFBRSxLQUFLO0FBQzFCLDJCQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7QUFDdkcseUJBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSTtZQUN0RztVQUNGLE1BQU07QUFDTCxvQkFBUyxHQUFHO0FBQ1YsZ0NBQW1CLEVBQUUsSUFBSTtBQUN6QiwyQkFBYyxFQUFFLElBQUk7QUFDcEIseUJBQVksRUFBRSxJQUFJO1lBQ25CO1VBQ0Y7UUFDRixNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7QUFDN0Usa0JBQVMsR0FBRztBQUNWLHlCQUFjLEVBQUUsSUFBSTtBQUNwQix1QkFBWSxFQUFFLElBQUk7VUFDbkI7UUFDRjtBQUNELFdBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDN0IsZUFBSyxXQUFXLEVBQUU7UUFDbkIsQ0FBQztNQUNIOzs7WUFFYyx5QkFBQyxJQUFJLEVBQUU7OztBQUNwQixXQUFJLENBQUMsNkNBQW1CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDN0QsZ0JBQU8sS0FBSztRQUNiOztBQUVELFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO0FBQ3hILGFBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLEVBQUUsWUFBTTtBQUN4QyxrQkFBSyxXQUFXLEVBQUU7VUFDbkIsQ0FBQztRQUNIO01BQ0Y7OztZQUVXLHdCQUFHOzs7QUFDYixXQUFNLEtBQUssR0FBRywwQ0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDckQsY0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3pCLGdCQUNFO0FBQ0UsY0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUc7QUFDcEIsY0FBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQzdCLG9CQUFTLEVBQUUsSUFBSztBQUNoQixzQkFBVyxFQUFFLE9BQUssS0FBSyxDQUFDLFdBQVk7QUFDcEMsbUJBQVEsRUFBRSxPQUFLLEtBQUssQ0FBQyxRQUFTO0FBQzlCLDhCQUFtQixFQUFFLE9BQUssS0FBSyxDQUFDLG1CQUFvQjtBQUNwRCxlQUFJLEVBQUUsT0FBSyxLQUFLLENBQUMsSUFBSzs7QUFFdEIscUJBQVUsRUFBRSxPQUFLLFdBQVcsQ0FBQyxJQUFJLFFBQU87QUFDeEMseUJBQWMsRUFBRSxPQUFLLGVBQWUsQ0FBQyxJQUFJLFFBQU87V0FDaEQsQ0FDSDtRQUNGLENBQUM7TUFDSDs7O1lBRUssa0JBQUc7QUFDUCxjQUNFOztXQUFLLFNBQVMsRUFBQyxPQUFPO1NBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsQ0FDUDtNQUNGOzs7VUF0RmtCLEtBQUs7SUFBUyxtQkFBTSxTQUFTOztzQkFBN0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDUFIsQ0FBTzs7OztnQ0FFVCxDQUFPOzs7OzBDQUNILEVBQWtCOzs7O2tEQUNaLEVBQTBCOzs7O2tEQUMxQixFQUEwQjs7Ozt1REFDckIsRUFBK0I7Ozs7S0FFekMsSUFBSTthQUFKLElBQUk7O1lBQUosSUFBSTsyQkFBSixJQUFJOztnQ0FBSixJQUFJOzs7Z0JBQUosSUFBSTs7WUFDWix1QkFBRzs7O0FBQ1osY0FBTyx3Q0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUN0RCxnQkFDRTtBQUNFLGNBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFHO0FBQ25CLGNBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRztBQUMzQixlQUFJLEVBQUUsR0FBSTtBQUNWLGVBQUksRUFBRSxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQVEsR0FBRyxDQUFDLENBQUU7QUFDcEMsbUJBQVEsRUFBRSx3Q0FBYyxHQUFHLEVBQUUsTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFFO0FBQ2xELHVCQUFZLEVBQUUsNkNBQW1CLEdBQUcsRUFBRSxNQUFLLEtBQUssQ0FBQyxtQkFBbUIsQ0FBRTtBQUN0RSxzQkFBVyxFQUFFLE1BQUssS0FBSyxDQUFDLFdBQVk7QUFDcEMsa0JBQU8sRUFBRSxNQUFLLEtBQUssQ0FBQyxVQUFXO0FBQy9CLHNCQUFXLEVBQUUsTUFBSyxLQUFLLENBQUMsY0FBZTtXQUN2QyxDQUNIO1FBQ0YsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLE1BQU07U0FDakIsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixDQUNQO01BQ0Y7OztVQXpCa0IsSUFBSTtJQUFTLG1CQUFNLFNBQVM7O3NCQUE1QixJQUFJOztBQTRCekIsS0FBSSxDQUFDLFlBQVksR0FBRztBQUNsQixPQUFJLEVBQUUsRUFBRTtFQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N0Q2lCLENBQU87Ozs7bUNBQ04sQ0FBUTs7Ozt1Q0FDSixDQUFZOzs7OzRDQUViLENBQW9COzs7OzBDQUN0QixDQUFrQjs7Ozt1Q0FDckIsRUFBZTs7OztpREFDTCxFQUF5Qjs7OztLQUUvQixHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUNYLHVCQUFHO0FBQ1osV0FBSSxPQUFPLEdBQUcsRUFBRTtBQUNoQixXQUFJLG9CQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3QyxnQkFBTyxHQUFHLG9CQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQUUsa0JBQVEsU0FBTyxRQUFRLEVBQUksSUFBSSxDQUFDLENBQUM7VUFBQyxDQUFDLENBQUM7UUFDOUc7QUFDRCxjQUFPLEdBQUcsb0JBQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUMvQixZQUFHLEVBQUUsSUFBSTtBQUNULHNCQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ2xDLHFCQUFZLEVBQUUsa0NBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDeEMscUJBQVksRUFBRSxDQUFDLGtDQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3pDLG1CQUFVLEVBQUUsZ0NBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDcEMsMkJBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ3BGLHdCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQy9FLHdCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQy9FLHdCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO0FBQ3hDLDRCQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1FBQzlDLENBQUM7O0FBRUYsY0FBTyw2QkFBVyxPQUFPLENBQUM7TUFDM0I7OztZQUVLLGtCQUFHO0FBQ1AsY0FDRTs7O0FBQ0Usb0JBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFHO0FBQzlCLGtCQUFPLEVBQUUsdUNBQWUsb0JBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUU7QUFDN0Usc0JBQVcsRUFBRSx1Q0FBZSxvQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTs7U0FFcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDaEMsQ0FDUDtNQUNGOzs7VUFoQ2tCLEdBQUc7SUFBUyxtQkFBTSxTQUFTOztzQkFBM0IsR0FBRzs7QUFtQ3hCLElBQUcsQ0FBQyxZQUFZLEdBQUc7QUFDakIsT0FBSSxFQUFFLEVBQUU7QUFDUixVQUFPLHlCQUFNO0FBQ2IsY0FBVyx5QkFBTTtFQUNsQjs7Ozs7OztBQ2hERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSTtBQUNKOztBQUVBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkMxQ3VCLFNBQVM7O0FBQWxCLFVBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUN0QyxVQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkNGdUIsT0FBTzs7QUFBaEIsVUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3BDLE9BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ3hCLFVBQ0csS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFDMUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUcsSUFDckMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUcsQ0FDckM7RUFDRjs7Ozs7Ozs7Ozs7Ozs7c0JDWnVCLElBQUk7O0FBQWIsVUFBUyxJQUFJLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7OztzQkNEVCxjQUFjOztBQUF2QixVQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7QUFDM0MsT0FBTSxJQUFJLEdBQUcsSUFBSTtBQUNqQixVQUFPLFVBQVMsQ0FBQyxFQUFFO0FBQ2pCLE1BQUMsQ0FBQyxjQUFjLEVBQUU7QUFDbEIsU0FBSSxJQUFJLEVBQUU7QUFDUixXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7TUFDbkI7SUFDRjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkNEdUIsT0FBTzs7QUFBaEIsVUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3BDLE9BQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckIsT0FBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMvQixPQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELE9BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsVUFBVSxJQUFJLFNBQUksRUFBRSxTQUFJLEVBQUUsQ0FBRTtFQUM3Qjs7Ozs7Ozs7Ozs7OztzQkNKdUIsYUFBYTs7OzttQ0FUbEIsQ0FBUTs7Ozs7Ozs7Ozs7O0FBU1osVUFBUyxhQUFhLENBQUMsUUFBUSxFQUFFO0FBQzlDLFVBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDdEIsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ1osWUFBTyxJQUFJLElBQUksQ0FDYixRQUFRLENBQUMsV0FBVyxFQUFFLEVBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFDbkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FDekI7SUFDRixDQUFDO0VBQ0w7Ozs7Ozs7Ozs7Ozs7c0JDUHVCLGFBQWE7Ozs7Z0RBWFIsRUFBdUI7Ozs7NENBQzFCLEVBQW1COzs7Ozs7Ozs7Ozs7O0FBVTlCLFVBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDdEQsT0FBTSxLQUFLLEdBQUcsc0NBQWlCLFVBQVUsQ0FBQztBQUMxQyxVQUFPLGtDQUFjLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQy9DOzs7Ozs7Ozs7Ozs7O3NCQ0N1QixnQkFBZ0I7Ozs7bUNBZnJCLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVaLFVBQVMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO0FBQzlDLE9BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFOztBQUV0QixPQUFJLG9CQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQixZQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQy9CLFlBQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzlELE1BQU07QUFDTCxZQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNsQjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ1h1QixhQUFhO0FBTHJDLFVBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUN2QixPQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDOUIsVUFBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDMUY7O0FBRWMsVUFBUyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDNUQsT0FBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUM5QyxPQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQzFDLE9BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUN0QyxPQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7QUFDdEMsT0FBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUN0QyxVQUFRLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztFQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ1J1QixrQkFBa0I7QUFMMUMsVUFBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLE9BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztBQUM5QixVQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMxRjs7QUFFYyxVQUFTLGtCQUFrQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDM0QsT0FBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUN0QyxPQUFNLEdBQUcsR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUMvRSxPQUFNLEdBQUcsR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTs7QUFFL0UsT0FBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksRUFBRTtBQUNyQixZQUFPLEtBQUs7SUFDYjtBQUNELE9BQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUU7QUFDckIsWUFBTyxLQUFLO0lBQ2I7QUFDRCxVQUFPLElBQUk7RUFDWjs7Ozs7Ozs7Ozs7OztzQkNmdUIsZUFBZTs7OzttQ0FWcEIsQ0FBUTs7Ozs7Ozs7Ozs7OztBQVVaLFVBQVMsZUFBZSxDQUFDLEtBQUssRUFBRTtBQUM3QyxPQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FDbkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsUUFBUSxFQUFFLEVBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FDaEI7O0FBRUQsT0FBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsRCxPQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7O0FBRWxGLE9BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxDQUFDO0FBQ25FLE9BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixDQUFDLEdBQUcsaUJBQWlCLENBQ3RCOztBQUVELFVBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FDL0IsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ2IsWUFBTyxJQUFJLElBQUksQ0FDYixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLENBQy9CO0lBQ0YsQ0FBQztFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDbkNpQixDQUFPOzs7O21DQUNOLENBQVE7Ozs7S0FFTixXQUFXO2FBQVgsV0FBVzs7WUFBWCxXQUFXOzJCQUFYLFdBQVc7O2dDQUFYLFdBQVc7OztnQkFBWCxXQUFXOztZQUNsQixzQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUMxQixRQUFDLENBQUMsY0FBYyxFQUFFO0FBQ2xCLFdBQUksb0JBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDL0MsYUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2pDO01BQ0Y7OztZQUVLLGtCQUFHO0FBQ1AsV0FBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztBQUNwSSxXQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFDbkMsY0FDRTs7V0FBSyxTQUFTLEVBQUMsY0FBYztTQUMzQjs7YUFBRyxHQUFHLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsb0JBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHOztVQUFTO1NBQ2pJOzthQUFLLFNBQVMsRUFBQyxhQUFhO1dBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O1dBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtVQUNwQztTQUNOOzthQUFHLEdBQUcsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRyxvQkFBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHOztVQUFTO1FBQzVILENBQ1A7TUFDRjs7O1VBcEJrQixXQUFXO0lBQVMsbUJBQU0sU0FBUzs7c0JBQW5DLFdBQVciLCJmaWxlIjoic2ltcGxlLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIiksIHJlcXVpcmUoXCJfXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiX1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIiksIHJlcXVpcmUoXCJfXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiX1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhmMWI3ODFlYzFjOTNmYTY0MzVmXG4gKiovIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXInXG5cbmV4cG9ydCB7Q2FsZW5kYXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnXG5pbXBvcnQgTW9udGhIZWFkZXIgZnJvbSAnLi9tb250aF9oZWFkZXInXG5cbi8qXG4gIGFjdGl2ZU1vbnRoIOKAlCBEYXRlLCBkZWZhdWx0IGBuZXcgRGF0ZSgpYFxuICBvbkFjdGl2ZU1vbnRoQ2hhbmdlIOKAlCBmdW5jdGlvblxuXG4gIHNlbGVjdGVkIOKAlCBvYmplY3QgfCBkZWZhdWx0IGZhbHNlXG4gIG9uU2VsZWN0IOKAlCBmdW5jdGlvblxuXG4gIHNlbGVjdGlvbk1vZGUg4oCUIHN0cmluZyB8IGRlZmF1bHQgJ3NpbmdsZSdcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICBmaXJzdERheU9mTW9udGguc2V0RGF0ZSgxKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVNb250aDogZmlyc3REYXlPZk1vbnRoLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbG9kYXNoLmlzRXF1YWwobmV4dFByb3BzLnNlbGVjdGVkLCB0aGlzLnByb3BzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBuZXh0UHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZU1vbnRoKCkge1xuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVNb250aFxuICAgIH1cbiAgfVxuXG4gIF9zd2l0Y2hNb250aChvZmZzZXQpIHtcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkpXG4gICAgbW9udGguc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIG9mZnNldClcblxuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UobW9udGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVNb250aDogbW9udGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZWQoc2VsZWN0aW9uKSB7XG4gICAgaWYgKGxvZGFzaC5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpICYmICFzZWxlY3Rpb24uc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChcbiAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kLFxuICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uSW5Qcm9ncmVzc1xuICAgICAgKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkOiBbc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kXVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9udGhQcm9wcyA9IGxvZGFzaC5waWNrKHRoaXMucHJvcHMsIFsnc2VsZWN0aW9uTW9kZScsICdkYXRhJywgJ3NlbGVjdGlvbkJvdW5kYXJpZXMnXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kYXInPlxuICAgICAgICA8TW9udGhIZWFkZXJcbiAgICAgICAgICByZWY9J2hlYWRlcidcbiAgICAgICAgICBhY3RpdmVNb250aD17dGhpcy5fZ2V0QWN0aXZlTW9udGgoKX1cbiAgICAgICAgICBvbk1vbnRoQ2hhbmdlPXt0aGlzLl9zd2l0Y2hNb250aC5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8TW9udGhcbiAgICAgICAgICB7IC4uLm1vbnRoUHJvcHMgfVxuICAgICAgICAgIHJlZj0nbW9udGgnXG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMuX2dldEFjdGl2ZU1vbnRoKCl9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NlbGVjdGlvbkNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DYWxlbmRhci5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgb25BY3RpdmVNb250aENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBvblNlbGVjdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGlvbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVNb250aDogbmV3IERhdGUoKSxcbiAgc2VsZWN0aW9uTW9kZTogJ3NpbmdsZSdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJ1xuaW1wb3J0IGdldFdlZWtzSW5Nb250aCBmcm9tICcuL3V0aWxzL2dldF93ZWVrc19pbl9tb250aCdcbmltcG9ydCBpc0RhdGVJbkJvdW5kYXJpZXMgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3Rpb25JblByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiBudWxsLFxuICAgICAgc2VsZWN0aW9uRW5kOiBudWxsXG4gICAgfVxuICB9XG5cbiAgX3B1c2hVcGRhdGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIGxvZGFzaC5waWNrKHRoaXMuc3RhdGUsIFsnc2VsZWN0aW9uU3RhcnQnLCAnc2VsZWN0aW9uRW5kJywgJ3NlbGVjdGlvbkluUHJvZ3Jlc3MnXSlcbiAgICApXG4gIH1cblxuICBfb25EYXlDbGljayhkYXRlKSB7XG4gICAgaWYgKCFpc0RhdGVJbkJvdW5kYXJpZXMoZGF0ZSwgdGhpcy5wcm9wcy5zZWxlY3Rpb25Cb3VuZGFyaWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IG5leHRTdGF0ZSA9IHt9XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ3JhbmdlJykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6IHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJyB8fCAhdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBkYXRlLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+IHtcbiAgICAgIHRoaXMuX3B1c2hVcGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBfb25EYXlNb3VzZU1vdmUoZGF0ZSkge1xuICAgIGlmICghaXNEYXRlSW5Cb3VuZGFyaWVzKGRhdGUsIHRoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllcykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGlvbkluUHJvZ3Jlc3MgJiYgKCF0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZCB8fCB0aGlzLnN0YXRlLnNlbGVjdGlvbkVuZC5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW9uRW5kOiBkYXRlfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcldlZWtzKCkge1xuICAgIGNvbnN0IHdlZWtzID0gZ2V0V2Vla3NJbk1vbnRoKHRoaXMucHJvcHMuYWN0aXZlTW9udGgpXG4gICAgcmV0dXJuIHdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdlZWtcbiAgICAgICAgICBrZXk9e3dlZWsuZ2V0VGltZSgpfVxuICAgICAgICAgIHJlZj17J3dlZWsnICsgd2Vlay5nZXRUaW1lKCl9XG4gICAgICAgICAgc3RhcnREYXRlPXt3ZWVrfVxuICAgICAgICAgIGFjdGl2ZU1vbnRoPXt0aGlzLnByb3BzLmFjdGl2ZU1vbnRofVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgIHNlbGVjdGlvbkJvdW5kYXJpZXM9e3RoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllc31cbiAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cbiAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLl9vbkRheUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25EYXlNb3VzZU1vdmU9e3RoaXMuX29uRGF5TW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoJz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJXZWVrcygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBEYXkgZnJvbSAnLi9kYXknXG5pbXBvcnQgZGF0ZUtleSBmcm9tICcuL3V0aWxzL2RhdGVfa2V5J1xuaW1wb3J0IGdldERheXNJbldlZWsgZnJvbSAnLi91dGlscy9nZXRfZGF5c19pbl93ZWVrJ1xuaW1wb3J0IGlzRGF0ZUluUmFuZ2UgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX3JhbmdlJ1xuaW1wb3J0IGlzRGF0ZUluQm91bmRhcmllcyBmcm9tICcuL3V0aWxzL2lzX2RhdGVfaW5fYm91bmRhcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VlayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9yZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiBnZXREYXlzSW5XZWVrKHRoaXMucHJvcHMuc3RhcnREYXRlKS5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERheVxuICAgICAgICAgIGtleT17ZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICByZWY9eydkYXknICsgZGF5LmdldFRpbWUoKX1cbiAgICAgICAgICBkYXRlPXtkYXl9XG4gICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhW2RhdGVLZXkoZGF5KV19XG4gICAgICAgICAgc2VsZWN0ZWQ9e2lzRGF0ZUluUmFuZ2UoZGF5LCB0aGlzLnByb3BzLnNlbGVjdGVkKX1cbiAgICAgICAgICBpbkJvdW5kYXJpZXM9e2lzRGF0ZUluQm91bmRhcmllcyhkYXksIHRoaXMucHJvcHMuc2VsZWN0aW9uQm91bmRhcmllcyl9XG4gICAgICAgICAgYWN0aXZlTW9udGg9e3RoaXMucHJvcHMuYWN0aXZlTW9udGh9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkRheUNsaWNrfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLnByb3BzLm9uRGF5TW91c2VNb3ZlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWVrJz5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJEYXlzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbldlZWsuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvd2Vlay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBpc1dlZWtlbmQgZnJvbSAnLi91dGlscy9pc193ZWVrZW5kJ1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnLi91dGlscy9pc190b2RheSdcbmltcG9ydCBub09wIGZyb20gJy4vdXRpbHMvbm9fb3AnXG5pbXBvcnQgcHJldmVudERlZmF1bHQgZnJvbSAnLi91dGlscy9wcmV2ZW50X2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9nZXRDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge31cbiAgICBpZiAobG9kYXNoLmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhLm1vZGlmaWVycykpIHtcbiAgICAgIGNsYXNzZXMgPSBsb2Rhc2guemlwT2JqZWN0KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4geyByZXR1cm4gKFtgaXMtJHttb2RpZmllcn1gLCB0cnVlXSl9KSlcbiAgICB9XG4gICAgY2xhc3NlcyA9IGxvZGFzaC5hc3NpZ24oY2xhc3Nlcywge1xuICAgICAgZGF5OiB0cnVlLFxuICAgICAgJ2lzLXNlbGVjdGVkJzogdGhpcy5wcm9wcy5zZWxlY3RlZCxcbiAgICAgICdpcy13ZWVrZW5kJzogaXNXZWVrZW5kKHRoaXMucHJvcHMuZGF0ZSksXG4gICAgICAnaXMtd29ya2RheSc6ICFpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy10b2RheSc6IGlzVG9kYXkodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy1jdXJyZW50X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPT09IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKSxcbiAgICAgICdpcy1wcmV2X21vbnRoJzogdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgPCB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtbmV4dF9tb250aCc6IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpID4gdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLXNlbGVjdGFibGUnOiB0aGlzLnByb3BzLmluQm91bmRhcmllcyxcbiAgICAgICdpcy1ub3Qtc2VsZWN0YWJsZSc6ICF0aGlzLnByb3BzLmluQm91bmRhcmllc1xuICAgIH0pXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcyhjbGFzc2VzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5fZ2V0Q2xhc3NlcygpfVxuICAgICAgICBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdChsb2Rhc2gucGFydGlhbCh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMuZGF0ZSkpfVxuICAgICAgICBvbk1vdXNlTW92ZT17cHJldmVudERlZmF1bHQobG9kYXNoLnBhcnRpYWwodGhpcy5wcm9wcy5vbk1vdXNlTW92ZSwgdGhpcy5wcm9wcy5kYXRlKSl9XG4gICAgICA+XG4gICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGUpLmdldERhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5EYXkuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgb25DbGljazogbm9PcCxcbiAgb25Nb3VzZU1vdmU6IG5vT3Bcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL2RheS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKXtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgb24gdGhlIHdlZWtlbmQgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXZWVrZW5kKGRhdGUpIHtcbiAgcmV0dXJuIChkYXRlLmdldERheSgpID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgPT09IDYpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc193ZWVrZW5kLmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBpcyB0b2RheSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgcmV0dXJuIChcbiAgICAodG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpKSAmJlxuICAgICh0b2RheS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCkpICYmXG4gICAgKHRvZGF5LmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpXG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX3RvZGF5LmpzXG4gKiovIiwiLyoqIEEgbm8gb3AgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIGRlZmF1bHQgdmFsdWUgZm9yIG9wdGlvbmFsIGZ1bmN0aW9uIHByb3BzLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9PcCgpIHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9ub19vcC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGZ1bmMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoZnVuYykge1xuICAgICAgZnVuYy5jYWxsKHRoYXQsIGUpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9wcmV2ZW50X2RlZmF1bHQuanNcbiAqKi8iLCIvKipcbiAqIEFjY2VwdHMgYSBkYXRlIG9yIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF0ZSBhbmQgcmV0dXJuc1xuICogYSBzdHJpbmcgc3VpdGFibGUgdG8gYmUgdXNlZCBhcyBhIGtleSBpbiB0aGUgZm9ybWF0OiBZWVlZLU1NLUREXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUtleShkYXRlKSB7XG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1tID0gKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpXG4gIGNvbnN0IGRkID0gKCcwJyArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMilcbiAgcmV0dXJuIGAke3l5eXl9LSR7bW19LSR7ZGR9YFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyA3IGRheXMgc3RhcnRpbmdcbiAqIHdpdGggdGhlIGZpcnN0IGRheS4gSW50ZW5kZWQgZm9yIGdlbmVyYXRpbmcgZGF5cyBpbiBhIHdlZWsuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheXNJbldlZWsoZmlyc3REYXkpIHtcbiAgcmV0dXJuIGxvZGFzaC5yYW5nZSgwLCA3KVxuICAgIC5tYXAoKGRheSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBmaXJzdERheS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBmaXJzdERheS5nZXRNb250aCgpLFxuICAgICAgICBmaXJzdERheS5nZXREYXRlKCkgKyBkYXlcbiAgICAgIClcbiAgICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZ2V0X2RheXNfaW5fd2Vlay5qc1xuICoqLyIsImltcG9ydCBkYXRlUmFuZ2VUb0FycmF5IGZyb20gJy4vZGF0ZV9yYW5nZV90b19hcnJheSdcbmltcG9ydCBpc0RhdGVCZXR3ZWVuIGZyb20gJy4vaXNfZGF0ZV9iZXR3ZWVuJ1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGlzIHdpdGhpbiB0aGUgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cbiAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBkYXRlUmFuZ2VUb0FycmF5IGZvciBkZXRhaWxzIG9uIHJhbmdlIGZvcm1hdHMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXx1bmRlZmluZWR9IGRhdGVzUmFuZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUsIGRhdGVzUmFuZ2UpIHtcbiAgY29uc3QgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBJdCB0YWtlcyBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAqICAtIGFuIG9iamVjdCB3aXRoICdzdGFydCcgYW5kL29yICdlbmQnIHByb3BlcnRpZXMgd2l0aCBkYXRlc1xuICogIC0gYW4gYXJyYXkgd2l0aCAxIG9yIDIgZGF0ZXNcbiAqICAtIG5vdGhpbmdcbiAqXG4gKiBJbiBhbGwgdGhlIGNhc2VzIGl0IHJldHVybnMgYW4gYXJyYXkgd2l0aCB0d28gdmFsdWVzIHRoYXQgYXJlIERhdGUgb2JqZWN0XG4gKiByZXByZXNlbnRpbmcgc3RhcnQgYW5kIGVuZCBvZiBhIHJhbmdlLiBJbiBjYXNlcyB3aGVyZSBlaXRoZXIgc3RhcnQgb3IgZW5kXG4gKiBlbmQgaXMgbWlzc2luZyBpdCBkZWZhdWx0cyB0byBjdXJyZW50IERhdGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlUmFuZ2VUb0FycmF5KHZhbHVlKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblxuICBpZiAobG9kYXNoLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5lbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBbbmV3IERhdGUodmFsdWVbMF0gfHwgbm93KSwgbmV3IERhdGUodmFsdWVbMV0gfHwgbm93KV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW25vdywgbm93XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX3JhbmdlX3RvX2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBmYWxscyBiZXR3ZWVuIGRhdGVGcm9tIGFuZCBkYXRlVG8sIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVGcm9tXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlVG9cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHJlc2V0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlKVxuICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCBkYXRlT2JqLmdldE1vbnRoKCksIGRhdGVPYmouZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGVCZXR3ZWVuKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgY29uc3QgZnJvbVRpbWUgPSByZXNldERhdGUoZGF0ZUZyb20pLmdldFRpbWUoKVxuICBjb25zdCB0b1RpbWUgPSByZXNldERhdGUoZGF0ZVRvKS5nZXRUaW1lKClcbiAgY29uc3QgbWluID0gTWF0aC5taW4oZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoZnJvbVRpbWUsIHRvVGltZSlcbiAgY29uc3QgdGltZSA9IHJlc2V0RGF0ZShkYXRlKS5nZXRUaW1lKClcbiAgcmV0dXJuICh0aW1lID49IG1pbiAmJiB0aW1lIDw9IG1heClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfYmV0d2Vlbi5qc1xuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgaW5zaWRlIGJvdW5kYXJpZXMuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gYm91bmRhcmllc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gcmVzZXREYXRlKGRhdGUpIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIGRhdGVPYmouZ2V0TW9udGgoKSwgZGF0ZU9iai5nZXREYXRlKCksIDAsIDAsIDAsIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUluQm91bmRhcmllcyhkYXRlLCBib3VuZGFyaWVzKSB7XG4gIGNvbnN0IHRpbWUgPSByZXNldERhdGUoZGF0ZSkuZ2V0VGltZSgpXG4gIGNvbnN0IG1pbiA9IGJvdW5kYXJpZXMgJiYgYm91bmRhcmllcy5taW4gJiYgcmVzZXREYXRlKGJvdW5kYXJpZXMubWluKS5nZXRUaW1lKClcbiAgY29uc3QgbWF4ID0gYm91bmRhcmllcyAmJiBib3VuZGFyaWVzLm1heCAmJiByZXNldERhdGUoYm91bmRhcmllcy5tYXgpLmdldFRpbWUoKVxuXG4gIGlmIChtaW4gJiYgbWluID4gdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChtYXggJiYgbWF4IDwgdGltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2luX2JvdW5kYXJpZXMuanNcbiAqKi8iLCJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgb2YgbW9udGggYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZ1xuICogYWxsIG1vbmRheXMgZm9yIGFsbCB3ZWVrcyB0aGF0IGludGVyc2VjdCB0aGF0IG1vbnRoLiBTbywgaWYgYSBtb250aFxuICogc3RhcnRzIG9uIGEgV2VkbmVzZGF5LCB0aGUgZmlyc3QgZW50cnkgd2lsbCBiZSB0aGUgcHJldmlvdXMgbW9uZGF5LlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgobW9udGgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGguZ2V0TW9udGgoKSxcbiAgICBtb250aC5nZXREYXRlKClcbiAgKVxuXG4gIGNvbnN0IGRheXNGcm9tV2Vla1N0YXJ0ID0gKGRhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcblxuICBjb25zdCB3ZWVrc0NvdW50ID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCArIGRheXNGcm9tV2Vla1N0YXJ0KSAvIDcpXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgMSAtIGRheXNGcm9tV2Vla1N0YXJ0XG4gIClcblxuICByZXR1cm4gbG9kYXNoLnJhbmdlKDAsIHdlZWtzQ291bnQpXG4gICAgLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyB3ZWVrICogN1xuICAgICAgKVxuICAgIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChsb2Rhc2guaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2Uob2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbiAgICBjb25zdCBkYXRlID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtaGVhZGVyJz5cbiAgICAgICAgPGEgcmVmPSdwcmV2TW9udGhMaW5rJyBjbGFzc05hbWU9J3ByZXYtbW9udGgnIGhyZWY9JyMnIG9uQ2xpY2s9eyBsb2Rhc2gucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAtMSkuYmluZCh0aGlzKSB9PnByZXY8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aC10aXRsZSc+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIHJlZj0nbmV4dE1vbnRoTGluaycgY2xhc3NOYW1lPSduZXh0LW1vbnRoJyBocmVmPScjJyBvbkNsaWNrPXsgbG9kYXNoLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgMSkuYmluZCh0aGlzKSB9Pm5leHQ8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9