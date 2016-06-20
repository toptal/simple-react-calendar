(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory(require("react"));
	else
		root["Calendar"] = factory(root["React"]);
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _calendar = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_calendar).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _month = __webpack_require__(3);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(33);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	var _consts = __webpack_require__(7);
	
	var _start_of_month = __webpack_require__(30);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _is_same_day = __webpack_require__(11);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _is_same_month = __webpack_require__(22);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	var _is_valid = __webpack_require__(37);
	
	var _is_valid2 = _interopRequireDefault(_is_valid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	var isValid = function isValid(date) {
	  try {
	    return (0, _is_valid2.default)(date);
	  } catch (e) {
	    return false;
	  }
	};
	
	var Calendar = function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, props));
	
	    _this.state = {
	      activeMonth: _this._initialMonth(props),
	      selection: null
	    };
	    return _this;
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.activeMonth && !(0, _is_same_month2.default)(nextProps.activeMonth, this.props.activeMonth)) {
	        this.setState({ activeMonth: (0, _start_of_month2.default)(nextProps.activeMonth) });
	      }
	    }
	  }, {
	    key: '_initialMonth',
	    value: function _initialMonth(props) {
	      var _ref = props || this.props;
	
	      var selected = _ref.selected;
	      var activeMonth = _ref.activeMonth;
	      var mode = _ref.mode;
	      var today = _ref.today;
	
	
	      if (isValid(activeMonth)) {
	        return activeMonth;
	      } else {
	        if (selected) {
	          var selectionStart = mode === SINGLE_MODE ? selected : selected.start;
	          if (isValid(selectionStart)) {
	            return (0, _start_of_month2.default)(selectionStart);
	          }
	        }
	      }
	      return (0, _start_of_month2.default)(today || new Date());
	    }
	  }, {
	    key: '_switchMonth',
	    value: function _switchMonth(date) {
	      var onMonthChange = this.props.onMonthChange;
	
	      if (typeof onMonthChange === 'function') {
	        onMonthChange(date);
	      } else {
	        this.setState({
	          activeMonth: date
	        });
	      }
	    }
	  }, {
	    key: '_activeMonth',
	    value: function _activeMonth() {
	      var _props = this.props;
	      var onMonthChange = _props.onMonthChange;
	      var activeMonth = _props.activeMonth;
	
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
	      var _props2 = this.props;
	      var selected = _props2.selected;
	      var onSelectionProgress = _props2.onSelectionProgress;
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
	    key: '_selectionChanged',
	    value: function _selectionChanged(selection) {
	      var start = selection.start;
	      var end = selection.end;
	      var inProgress = selection.inProgress;
	      var _props3 = this.props;
	      var mode = _props3.mode;
	      var onSelect = _props3.onSelect;
	      var onSelectionProgress = _props3.onSelectionProgress;
	
	
	      if (onSelect && (mode !== RANGE_MODE || !inProgress)) {
	        onSelect(mode === SINGLE_MODE ? start : { start: start, end: end });
	      }
	
	      if (mode === RANGE_MODE) {
	        if (onSelectionProgress) {
	          onSelectionProgress(selection);
	        } else {
	          this.setState({ selection: inProgress ? { start: start, end: end } : null });
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
	      var _props4 = this.props;
	      var mode = _props4.mode;
	      var minDate = _props4.minDate;
	      var maxDate = _props4.maxDate;
	      var blockClassName = _props4.blockClassName;
	      var headerNextArrow = _props4.headerNextArrow;
	      var headerNextTitle = _props4.headerNextTitle;
	      var headerPrevArrow = _props4.headerPrevArrow;
	      var headerPrevTitle = _props4.headerPrevTitle;
	
	      var activeMonth = isValid(this._activeMonth()) ? this._activeMonth() : (0, _start_of_month2.default)(this._today());
	      var selection = this._selection();
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName },
	        _react2.default.createElement(_month_header2.default, {
	          ref: 'header',
	          minDate: minDate,
	          maxDate: maxDate,
	          headerPrevArrow: headerPrevArrow,
	          headerPrevTitle: headerPrevTitle,
	          headerNextArrow: headerNextArrow,
	          headerNextTitle: headerNextTitle,
	          activeMonth: this._activeMonth(),
	          onMonthChange: this._switchMonth.bind(this),
	          blockClassName: this.props.blockClassName
	        }),
	        _react2.default.createElement(_month2.default, {
	          mode: mode,
	          minDate: minDate,
	          maxDate: maxDate,
	          minNumberOfWeeks: this.props.minNumberOfWeeks,
	          today: this._today(),
	          ref: 'month',
	          activeMonth: this._activeMonth(),
	          selectedMin: selection.start,
	          selectedMax: selection.end,
	          onChange: this._selectionChanged.bind(this),
	          blockClassName: this.props.blockClassName
	        })
	      );
	    }
	  }]);
	
	  return Calendar;
	}(_react2.default.Component);
	
	Calendar.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date),
	  blockClassName: _react2.default.PropTypes.string,
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.oneOf([SINGLE_MODE, RANGE_MODE]),
	  onMonthChange: _react2.default.PropTypes.func,
	  onSelect: _react2.default.PropTypes.func,
	  onSelectionProgress: _react2.default.PropTypes.func,
	  selected: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(Date), _react2.default.PropTypes.shape({
	    start: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    end: _react2.default.PropTypes.instanceOf(Date).isRequired,
	    inProgress: _react2.default.PropTypes.bool
	  })]),
	  today: _react2.default.PropTypes.instanceOf(Date)
	};
	Calendar.defaultProps = {
	  mode: SINGLE_MODE,
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Calendar;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _week = __webpack_require__(4);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _days_of_week = __webpack_require__(29);
	
	var _days_of_week2 = _interopRequireDefault(_days_of_week);
	
	var _consts = __webpack_require__(7);
	
	var _start_of_week = __webpack_require__(19);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(24);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _start_of_month = __webpack_require__(30);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _end_of_month = __webpack_require__(31);
	
	var _end_of_month2 = _interopRequireDefault(_end_of_month);
	
	var _is_before = __webpack_require__(26);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(27);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _is_equal = __webpack_require__(28);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _add_days = __webpack_require__(32);
	
	var _add_days2 = _interopRequireDefault(_add_days);
	
	var _is_same_day = __webpack_require__(11);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SINGLE_MODE = 'single';
	var RANGE_MODE = 'range';
	
	var Month = function (_React$Component) {
	  _inherits(Month, _React$Component);
	
	  function Month() {
	    _classCallCheck(this, Month);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Month).apply(this, arguments));
	  }
	
	  _createClass(Month, [{
	    key: '_pushUpdate',
	    value: function _pushUpdate() {
	      this.props.onChange({
	        start: (0, _is_before2.default)(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
	        end: (0, _is_after2.default)(this._selectionStart, this._selectionEnd) ? this._selectionStart : this._selectionEnd,
	        inProgress: this._selectionInProgress
	      });
	    }
	  }, {
	    key: '_onDayMouseMove',
	    value: function _onDayMouseMove(date) {
	      if (this._selectionInProgress) {
	        if (!(0, _is_equal2.default)(date, this._selectionEnd)) {
	          this._selectionEnd = date;
	          this._pushUpdate();
	        }
	      }
	    }
	  }, {
	    key: '_onDayClick',
	    value: function _onDayClick(date) {
	      var mode = this.props.mode;
	
	      if (mode === RANGE_MODE) {
	        if (this._selectionInProgress) {
	          this._selectionInProgress = false;
	          this._selectionEnd = date;
	        } else {
	          this._selectionInProgress = true;
	          this._selectionStart = date;
	          this._selectionEnd = date;
	        }
	      } else if (mode === SINGLE_MODE) {
	        this._selectionInProgress = false;
	        this._selectionStart = date;
	        this._selectionEnd = date;
	      } else {
	        return;
	      }
	      this._pushUpdate();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-month' },
	        _react2.default.createElement(_days_of_week2.default, { blockClassName: blockClassName }),
	        this._renderWeeks()
	      );
	    }
	  }, {
	    key: '_renderWeeks',
	    value: function _renderWeeks() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	      var selectedMin = _props.selectedMin;
	      var selectedMax = _props.selectedMax;
	      var activeMonth = _props.activeMonth;
	      var today = _props.today;
	      var blockClassName = _props.blockClassName;
	      var minNumberOfWeeks = _props.minNumberOfWeeks;
	
	      var weeks = [];
	      var date = (0, _start_of_week2.default)((0, _start_of_month2.default)(activeMonth), { weekStartsOn: 1 });
	      var endDate = (0, _end_of_week2.default)((0, _end_of_month2.default)(activeMonth), { weekStartsOn: 1 });
	      while (typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length || (0, _is_before2.default)(date, endDate) || (0, _is_same_day2.default)(date, endDate)) {
	        weeks.push(date);
	        date = (0, _add_days2.default)(date, 7);
	      }
	
	      return weeks.map(function (week) {
	        return _react2.default.createElement(_week2.default, {
	          key: week.getTime(),
	          date: week,
	          minDate: minDate,
	          maxDate: maxDate,
	          selectedMin: selectedMin,
	          selectedMax: selectedMax,
	          activeMonth: activeMonth,
	          onDayClick: _this2._onDayClick.bind(_this2),
	          onDayMouseMove: _this2._onDayMouseMove.bind(_this2),
	          today: today,
	          blockClassName: blockClassName
	        });
	      });
	    }
	  }]);
	
	  return Month;
	}(_react2.default.Component);
	
	Month.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  minNumberOfWeeks: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired,
	  selectedMax: _react2.default.PropTypes.instanceOf(Date),
	  selectedMin: _react2.default.PropTypes.instanceOf(Date),
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Month.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Month;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(5);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _day = __webpack_require__(6);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _consts = __webpack_require__(7);
	
	var _each_day = __webpack_require__(23);
	
	var _each_day2 = _interopRequireDefault(_each_day);
	
	var _start_of_day = __webpack_require__(12);
	
	var _start_of_day2 = _interopRequireDefault(_start_of_day);
	
	var _start_of_week = __webpack_require__(19);
	
	var _start_of_week2 = _interopRequireDefault(_start_of_week);
	
	var _end_of_week = __webpack_require__(24);
	
	var _end_of_week2 = _interopRequireDefault(_end_of_week);
	
	var _is_within_range = __webpack_require__(25);
	
	var _is_within_range2 = _interopRequireDefault(_is_within_range);
	
	var _format = __webpack_require__(13);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _is_before = __webpack_require__(26);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(27);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _is_equal = __webpack_require__(28);
	
	var _is_equal2 = _interopRequireDefault(_is_equal);
	
	var _is_weekend = __webpack_require__(8);
	
	var _is_weekend2 = _interopRequireDefault(_is_weekend);
	
	var _is_same_day = __webpack_require__(11);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _is_same_month = __webpack_require__(22);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Week = function (_React$Component) {
	  _inherits(Week, _React$Component);
	
	  function Week() {
	    _classCallCheck(this, Week);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Week).apply(this, arguments));
	  }
	
	  _createClass(Week, [{
	    key: '_dateSelectable',
	    value: function _dateSelectable(date) {
	      var _props = this.props;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	
	      if (minDate && maxDate) {
	        return (0, _is_within_range2.default)(date, minDate, maxDate);
	      } else if (minDate && !maxDate) {
	        return (0, _is_after2.default)(date, minDate) || (0, _is_equal2.default)(date, minDate);
	      } else if (maxDate && !minDate) {
	        return (0, _is_before2.default)(date, maxDate) || (0, _is_equal2.default)(date, maxDate);
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
	
	      return selectedMin && selectedMax && (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(selectedMin), (0, _start_of_day2.default)(selectedMax));
	    }
	  }, {
	    key: '_dateClasses',
	    value: function _dateClasses(date, data) {
	      var _classnames;
	
	      var _props3 = this.props;
	      var today = _props3.today;
	      var activeMonth = _props3.activeMonth;
	
	      return (0, _classnames3.default)((_classnames = {
	        'is-selected': this._dateSelected(date),
	        'is-today': (0, _is_same_day2.default)(today, date),
	        'is-current_month': (0, _is_same_month2.default)(date, activeMonth),
	        'is-prev_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_before2.default)(date, activeMonth),
	        'is-next_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_after2.default)(date, activeMonth)
	      }, _defineProperty(_classnames, (0, _is_weekend2.default)(date) ? 'is-weekend' : 'is-working_day', true), _defineProperty(_classnames, this._dateSelectable(date) ? 'is-selectable' : 'is-not_selectable', true), _classnames));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.blockClassName + '-week' },
	        this._renderDays()
	      );
	    }
	  }, {
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this2 = this;
	
	      var _props4 = this.props;
	      var date = _props4.date;
	      var activeMonth = _props4.activeMonth;
	      var today = _props4.today;
	      var onDayClick = _props4.onDayClick;
	      var onDayMouseMove = _props4.onDayMouseMove;
	      var selectedMin = _props4.selectedMin;
	      var selectedMax = _props4.selectedMax;
	      var blockClassName = _props4.blockClassName;
	
	      var startDate = (0, _start_of_week2.default)(date, { weekStartsOn: 1 });
	      var endDate = (0, _end_of_week2.default)(date, { weekStartsOn: 1 });
	      return (0, _each_day2.default)(startDate, endDate).map(function (day) {
	        var data = _this2.props.data[(0, _format2.default)(day, 'YYYY-MM-DD')];
	        var selectable = _this2._dateSelectable(day);
	        return _react2.default.createElement(_day2.default, {
	          blockClassName: blockClassName,
	          key: day.getTime(),
	          date: day,
	          data: data,
	          className: _this2._dateClasses(day, data),
	          today: today,
	          onClick: selectable ? onDayClick : null,
	          onMouseMove: selectable ? onDayMouseMove : null
	        });
	      });
	    }
	  }]);
	
	  return Week;
	}(_react2.default.Component);
	
	Week.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  data: _react2.default.PropTypes.object,
	  date: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  onDayClick: _react2.default.PropTypes.func.isRequired,
	  onDayMouseMove: _react2.default.PropTypes.func.isRequired,
	  selectedMax: _react2.default.PropTypes.instanceOf(Date),
	  selectedMin: _react2.default.PropTypes.instanceOf(Date),
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Week.defaultProps = {
	  data: {},
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Week;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	var _is_weekend = __webpack_require__(8);
	
	var _is_weekend2 = _interopRequireDefault(_is_weekend);
	
	var _is_same_day = __webpack_require__(11);
	
	var _is_same_day2 = _interopRequireDefault(_is_same_day);
	
	var _format = __webpack_require__(13);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _is_same_month = __webpack_require__(22);
	
	var _is_same_month2 = _interopRequireDefault(_is_same_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Day = function (_React$Component) {
	  _inherits(Day, _React$Component);
	
	  function Day() {
	    _classCallCheck(this, Day);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Day).apply(this, arguments));
	  }
	
	  _createClass(Day, [{
	    key: '_onClick',
	    value: function _onClick(e) {
	      e.preventDefault();
	      var _props = this.props;
	      var date = _props.date;
	      var onClick = _props.onClick;
	
	      if (onClick) {
	        onClick(date);
	      }
	    }
	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove(e) {
	      e.preventDefault();
	      var _props2 = this.props;
	      var date = _props2.date;
	      var onMouseMove = _props2.onMouseMove;
	
	      if (onMouseMove) {
	        onMouseMove(date);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var date = _props3.date;
	      var className = _props3.className;
	      var blockClassName = _props3.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(blockClassName + '-day', className),
	          onClick: this._onClick.bind(this),
	          onMouseMove: this._onMouseMove.bind(this)
	        },
	        (0, _format2.default)(date, 'D')
	      );
	    }
	  }]);
	
	  return Day;
	}(_react2.default.Component);
	
	Day.propTypes = {
	  blockClassName: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  date: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  onClick: _react2.default.PropTypes.func,
	  onMouseMove: _react2.default.PropTypes.func,
	  today: _react2.default.PropTypes.instanceOf(Date).isRequired
	};
	Day.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = Day;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BLOCK_CLASS_NAME = exports.BLOCK_CLASS_NAME = 'calendar';
	var NEXT_MONTH_TITLE = exports.NEXT_MONTH_TITLE = 'Next month';
	var PREV_MONTH_TITLE = exports.PREV_MONTH_TITLE = 'Previous month';

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date in a weekend?
	 *
	 * @description
	 * Is the given date in a weekend?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in the weekend
	 *
	 * @example
	 * // Is 5 October 2014 in a weekend?
	 * var result = isWeekend(new Date(2014, 9, 5))
	 * //=> true
	 */
	function isWeekend (dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day === 0 || day === 6
	}
	
	module.exports = isWeekend


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(10)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// date tokens
	var parseTokenYYYY = /^(\d{4})-?/
	var parseTokenYYYYY = /^([+-]\d{4,6})-/
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
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
	 * @category Common Helpers
	 * @summary Parse the ISO-8601-formatted date.
	 *
	 * @description
	 * Parse the date string representation.
	 * It accepts the ISO 8601 format as well as a partial implementation.
	 *
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * @param {String} dateString - the ISO 8601 formatted string to parse
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Parse string '2014-02-11T11:30:30':
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 */
	function parse (dateString) {
	  if (isDate(dateString)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(dateString.getTime())
	  } else if (typeof dateString !== 'string') {
	    return new Date(dateString)
	  }
	
	  var dateStrings = splitDateString(dateString)
	
	  var date = parseDate(dateStrings.date)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(dateString)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseDate (dateString) {
	  var year
	  var yearToken
	
	  // YYYY or ±YYYYY
	  yearToken = parseTokenYYYY.exec(dateString) ||
	    parseTokenYYYYY.exec(dateString)
	  if (yearToken) {
	    var yearString = yearToken[1]
	    year = parseInt(yearString, 10)
	    dateString = dateString.slice(yearString.length)
	
	  // Invalid ISO-formatted year
	  } else {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var diff = week * 7 + day + 1 - date.getUTCDay()
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12)
	
	/**
	 * @category Day Helpers
	 * @summary Are the given dates in the same day?
	 *
	 * @description
	 * Are the given dates in the same day?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same day
	 *
	 * @example
	 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
	 * var result = isSameDay(
	 *   new Date(2014, 8, 4, 6, 0),
	 *   new Date(2014, 8, 4, 18, 0)
	 * )
	 * //=> true
	 */
	function isSameDay (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
	  var dateRightStartOfDay = startOfDay(dirtyDateRight)
	
	  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
	}
	
	module.exports = isSameDay


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of a day for the given date.
	 *
	 * @description
	 * Return the start of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a day
	 *
	 * @example
	 * // The start of a day for 2 September 2014 11:55:00:
	 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 00:00:00
	 */
	function startOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(14)
	var getISOWeek = __webpack_require__(17)
	var getISOYear = __webpack_require__(21)
	var parse = __webpack_require__(9)
	
	/**
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format.
	 *
	 * Accepted tokens:
	 * | Unit                    | Token | Result examples                  |
	 * |-------------------------|-------|----------------------------------|
	 * | Month                   | M     | 1, 2, ..., 12                    |
	 * |                         | Mo    | 1st, 2nd, ..., 12th              |
	 * |                         | MM    | 01, 02, ..., 12                  |
	 * |                         | MMM   | Jan, Feb, ..., Dec               |
	 * |                         | MMMM  | January, February, ..., December |
	 * | Quarter                 | Q     | 1, 2, 3, 4                       |
	 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
	 * | Day of month            | D     | 1, 2, ..., 31                    |
	 * |                         | Do    | 1st, 2nd, ..., 31st              |
	 * |                         | DD    | 01, 02, ..., 31                  |
	 * | Day of year             | DDD   | 1, 2, ..., 366                   |
	 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
	 * |                         | DDDD  | 001, 002, ..., 366               |
	 * | Day of week             | d     | 0, 1, ..., 6                     |
	 * |                         | do    | 0th, 1st, ..., 6th               |
	 * |                         | dd    | Su, Mo, ..., Sa                  |
	 * |                         | ddd   | Sun, Mon, ..., Sat               |
	 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
	 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
	 * | ISO week                | W     | 1, 2, ..., 53                    |
	 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
	 * |                         | WW    | 01, 02, ..., 53                  |
	 * | Year                    | YY    | 00, 01, ..., 99                  |
	 * |                         | YYYY  | 1900, 1901, ..., 2099            |
	 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
	 * |                         | GGGG  | 1900, 1901, ..., 2099            |
	 * | AM/PM                   | A     | AM, PM                           |
	 * |                         | a     | am, pm                           |
	 * |                         | aa    | a.m., p.m.                       |
	 * | Hour                    | H     | 0, 1, ... 23                     |
	 * |                         | HH    | 00, 01, ... 23                   |
	 * |                         | h     | 1, 2, ..., 12                    |
	 * |                         | hh    | 01, 02, ..., 12                  |
	 * | Minute                  | m     | 0, 1, ..., 59                    |
	 * |                         | mm    | 00, 01, ..., 59                  |
	 * | Second                  | s     | 0, 1, ..., 59                    |
	 * |                         | ss    | 00, 01, ..., 59                  |
	 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
	 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
	 * | Millisecond             | SSS   | 000, 001, ..., 999               |
	 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
	 * |                         | ZZ    | -0100, +0000, ..., +1200         |
	 * | Seconds timestamp       | X     | 512969520                        |
	 * | Milliseconds timestamp  | x     | 512969520900                     |
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
	 * @returns {String} the formatted date string
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(
	 *   new Date(2014, 1, 11),
	 *   'MM/DD/YYYY'
	 * )
	 * //=> '02/11/2014'
	 */
	function format (dirtyDate, format) {
	  var date = parse(dirtyDate)
	
	  if (!format) {
	    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  }
	
	  var formatFunction = makeFormatFunction(format)
	  return formatFunction(date)
	}
	
	var formats = {
	  // Month: 1, 2, ..., 12
	  'M': function () {
	    return this.getMonth() + 1
	  },
	
	  // Month: 01, 02, ..., 12
	  'MM': function () {
	    return addLeadingZeros(this.getMonth() + 1, 2)
	  },
	
	  // Month: Jan, Feb, ..., Dec
	  'MMM': function () {
	    return locale.monthsShort[this.getMonth()]
	  },
	
	  // Month: January, February, ..., December
	  'MMMM': function () {
	    return locale.months[this.getMonth()]
	  },
	
	  // Quarter: 1, 2, 3, 4
	  'Q': function () {
	    return Math.ceil((this.getMonth() + 1) / 3)
	  },
	
	  // Day of month: 1, 2, ..., 31
	  'D': function () {
	    return this.getDate()
	  },
	
	  // Day of month: 01, 02, ..., 31
	  'DD': function () {
	    return addLeadingZeros(this.getDate(), 2)
	  },
	
	  // Day of year: 1, 2, ..., 366
	  'DDD': function () {
	    return getDayOfYear(this)
	  },
	
	  // Day of year: 001, 002, ..., 366
	  'DDDD': function () {
	    return addLeadingZeros(getDayOfYear(this), 3)
	  },
	
	  // Day of week: 0, 1, ..., 6
	  'd': function () {
	    return this.getDay()
	  },
	
	  // Day of week: Su, Mo, ..., Sa
	  'dd': function () {
	    return locale.dayNamesMin[this.getDay()]
	  },
	
	  // Day of week: Sun, Mon, ..., Sat
	  'ddd': function () {
	    return locale.dayNamesShort[this.getDay()]
	  },
	
	  // Day of week: Sunday, Monday, ..., Saturday
	  'dddd': function () {
	    return locale.dayNames[this.getDay()]
	  },
	
	  // Day of ISO week: 1, 2, ..., 7
	  'E': function () {
	    return this.getDay() || 7
	  },
	
	  // ISO week: 1, 2, ..., 53
	  'W': function () {
	    return getISOWeek(this)
	  },
	
	  // ISO week: 01, 02, ..., 53
	  'WW': function () {
	    return addLeadingZeros(getISOWeek(this), 2)
	  },
	
	  // Year: 00, 01, ..., 99
	  'YY': function () {
	    return String(this.getFullYear()).substr(2)
	  },
	
	  // Year: 1900, 1901, ..., 2099
	  'YYYY': function () {
	    return this.getFullYear()
	  },
	
	  // ISO week-numbering year: 00, 01, ..., 99
	  'GG': function () {
	    return String(getISOYear(this)).substr(2)
	  },
	
	  // ISO week-numbering year: 1900, 1901, ..., 2099
	  'GGGG': function () {
	    return getISOYear(this)
	  },
	
	  // AM, PM
	  'A': function () {
	    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM'
	  },
	
	  // am, pm
	  'a': function () {
	    return (this.getHours() / 12) >= 1 ? 'pm' : 'am'
	  },
	
	  // a.m., p.m.
	  'aa': function () {
	    return (this.getHours() / 12) >= 1 ? 'p.m.' : 'a.m.'
	  },
	
	  // Hour: 0, 1, ... 23
	  'H': function () {
	    return this.getHours()
	  },
	
	  // Hour: 00, 01, ..., 23
	  'HH': function () {
	    return addLeadingZeros(this.getHours(), 2)
	  },
	
	  // Hour: 1, 2, ..., 12
	  'h': function () {
	    var hours = this.getHours()
	    if (hours === 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	
	  // Hour: 01, 02, ..., 12
	  'hh': function () {
	    return addLeadingZeros(formats['h'].apply(this), 2)
	  },
	
	  // Minute: 0, 1, ..., 59
	  'm': function () {
	    return this.getMinutes()
	  },
	
	  // Minute: 00, 01, ..., 59
	  'mm': function () {
	    return addLeadingZeros(this.getMinutes(), 2)
	  },
	
	  // Second: 0, 1, ..., 59
	  's': function () {
	    return this.getSeconds()
	  },
	
	  // Second: 00, 01, ..., 59
	  'ss': function () {
	    return addLeadingZeros(this.getSeconds(), 2)
	  },
	
	  // 1/10 of second: 0, 1, ..., 9
	  'S': function () {
	    return Math.floor(this.getMilliseconds() / 100)
	  },
	
	  // 1/100 of second: 00, 01, ..., 99
	  'SS': function () {
	    return Math.floor(this.getMilliseconds() / 10)
	  },
	
	  // Millisecond: 000, 001, ..., 999
	  'SSS': function () {
	    return this.getMilliseconds()
	  },
	
	  // Timezone: -01:00, +00:00, ... +12:00
	  'Z': function () {
	    return formatTimezone(this.getTimezoneOffset(), ':')
	  },
	
	  // Timezone: -0100, +0000, ... +1200
	  'ZZ': function () {
	    return formatTimezone(this.getTimezoneOffset())
	  },
	
	  // Seconds timestamp: 512969520
	  'X': function () {
	    return Math.floor(this.getTime() / 1000)
	  },
	
	  // Milliseconds timestamp: 512969520900
	  'x': function () {
	    return this.getTime()
	  }
	}
	
	var ordinalFunctions = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	ordinalFunctions.forEach(function (functionName) {
	  formats[functionName + 'o'] = function () {
	    return locale.ordinal(formats[functionName].apply(this))
	  }
	})
	
	var formattingTokens = Object.keys(formats).sort().reverse()
	var formattingTokensRegexp = new RegExp(
	  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	)
	
	function makeFormatFunction (format) {
	  var array = format.match(formattingTokensRegexp)
	  var length = array.length
	
	  for (var i = 0; i < length; i++) {
	    if (formats[array[i]]) {
	      array[i] = formats[array[i]]
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function (mom) {
	    var output = ''
	    for (var i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i].call(mom, format)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	function removeFormattingTokens (input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|\]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	function addLeadingZeros (number, targetLength) {
	  var output = String(Math.abs(number))
	
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	function formatTimezone (offset, delimeter) {
	  delimeter = delimeter || ''
	  var sign = offset > 0 ? '-' : '+'
	  var absOffset = Math.abs(offset)
	  var hours = Math.floor(absOffset / 60)
	  var minutes = absOffset % 60
	  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
	}
	
	var locale = {
	  ordinal: function (number) {
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var startOfYear = __webpack_require__(15)
	var differenceInCalendarDays = __webpack_require__(16)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the year of the given date.
	 *
	 * @description
	 * Get the day of the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of year
	 *
	 * @example
	 * // Which day of the year is 2 July 2014?
	 * var result = getDayOfYear(new Date(2014, 6, 2))
	 * //=> 183
	 */
	function getDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInCalendarDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Year Helpers
	 * @summary Return the start of a year for the given date.
	 *
	 * @description
	 * Return the start of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a year
	 *
	 * @example
	 * // The start of a year for 2 September 2014 11:55:00:
	 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Jan 01 2014 00:00:00
	 */
	function startOfYear (dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(12)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of calendar days between the given dates.
	 *
	 * @description
	 * Get the number of calendar days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar days
	 *
	 * @example
	 * // How many calendar days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInCalendarDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 366
	 */
	function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime() -
	    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime() -
	    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a day is not constant
	  // (e.g. it's different in the day of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInCalendarDays


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var startOfISOWeek = __webpack_require__(18)
	var startOfISOYear = __webpack_require__(20)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the ISO week of the given date.
	 *
	 * @description
	 * Get the ISO week of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week
	 *
	 * @example
	 * // Which week of the ISO-week numbering year is 2 January 2005?
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	function getISOWeek (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
	}
	
	module.exports = getISOWeek


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(19)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the start of an ISO week for the given date.
	 *
	 * @description
	 * Return the start of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO week
	 *
	 * @example
	 * // The start of an ISO week for 2 September 2014 11:55:00:
	 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfISOWeek (dirtyDate) {
	  return startOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = startOfISOWeek


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Week Helpers
	 * @summary Return the start of a week for the given date.
	 *
	 * @description
	 * Return the start of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the start of a week
	 *
	 * @example
	 * // The start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If week starts at Monday, the start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfWeek (dirtyDate, options) {
	  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(21)
	var startOfISOWeek = __webpack_require__(18)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the start of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the start of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO year
	 *
	 * @example
	 * // The start of an ISO week-numbering year for 2 July 2005:
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	function startOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var date = startOfISOWeek(new Date(year, 0, 4))
	  return date
	}
	
	module.exports = startOfISOYear


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var startOfISOWeek = __webpack_require__(18)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the ISO week-numbering year of the given date,
	 * which always starts 3 days before the year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week-numbering year
	 *
	 * @example
	 * // Which ISO-week numbering year is 2 January 2005?
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	function getISOYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var startOfNextYear = startOfISOWeek(new Date(year + 1, 0, 4))
	  var startOfThisYear = startOfISOWeek(new Date(year, 0, 4))
	
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}
	
	module.exports = getISOYear


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Month Helpers
	 * @summary Are the given dates in the same month?
	 *
	 * @description
	 * Are the given dates in the same month?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same month
	 *
	 * @example
	 * // Are 2 September 2014 and 25 September 2014 in the same month?
	 * var result = isSameMonth(
	 *   new Date(2014, 8, 2),
	 *   new Date(2014, 8, 25)
	 * )
	 * //=> true
	 */
	function isSameMonth (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getFullYear() === dateRight.getFullYear() &&
	    dateLeft.getMonth() === dateRight.getMonth()
	}
	
	module.exports = isSameMonth


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Day Helpers
	 * @summary Return the array of dates within the specified range.
	 *
	 * @description
	 * Return the array of dates within the specified range.
	 *
	 * @param {Date|String|Number} startDate - the first date
	 * @param {Date|String|Number} endDate - the last date
	 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // Each day between 6 October 2014 and 10 October 2014:
	 * var result = eachDay(
	 *   new Date(2014, 9, 6),
	 *   new Date(2014, 9, 10)
	 * )
	 * //=> [
	 * //   Mon Oct 06 2014 00:00:00,
	 * //   Tue Oct 07 2014 00:00:00,
	 * //   Wed Oct 08 2014 00:00:00,
	 * //   Thu Oct 09 2014 00:00:00,
	 * //   Fri Oct 10 2014 00:00:00
	 * // ]
	 */
	function eachDay (dirtyStartDate, dirtyEndDate) {
	  var startDate = parse(dirtyStartDate)
	  var endDate = parse(dirtyEndDate)
	
	  var endTime = endDate.getTime()
	
	  if (startDate.getTime() > endTime) {
	    throw new Error('The first date cannot be after the second date')
	  }
	
	  var dates = []
	
	  var currentDate = startDate
	  currentDate.setHours(0, 0, 0, 0)
	
	  while (currentDate.getTime() <= endTime) {
	    dates.push(new Date(currentDate))
	    currentDate.setDate(currentDate.getDate() + 1)
	  }
	
	  return dates
	}
	
	module.exports = eachDay


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Week Helpers
	 * @summary Return the end of a week for the given date.
	 *
	 * @description
	 * Return the end of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the end of a week
	 *
	 * @example
	 * // The end of a week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sat Sep 06 2014 23:59:59.999
	 *
	 * @example
	 * // If week starts at Monday, the end of a week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Sun Sep 07 2014 23:59:59.999
	 */
	function endOfWeek (dirtyDate, options) {
	  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
	
	  date.setDate(date.getDate() + diff)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfWeek


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Range Helpers
	 * @summary Is the given date within the range?
	 *
	 * @description
	 * Is the given date within the range?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @param {Date|String|Number} startDate - the start of range
	 * @param {Date|String|Number} endDate - the end of range
	 * @returns {Boolean} the date is within the range
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // For the date within the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> true
	 *
	 * @example
	 * // For the date outside of the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> false
	 */
	function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var time = parse(dirtyDate).getTime()
	  var startTime = parse(dirtyStartDate).getTime()
	  var endTime = parse(dirtyEndDate).getTime()
	
	  if (startTime > endTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  return time >= startTime && time <= endTime
	}
	
	module.exports = isWithinRange


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date before the second one?
	 *
	 * @description
	 * Is the first date before the second one?
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the date that should be before the first one to return true
	 * @returns {Boolean} the first date is before the second date
	 *
	 * @example
	 * // Is 10 July 1989 before 11 February 1987?
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	function isBefore (dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() < date.getTime()
	}
	
	module.exports = isBefore


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date after the second one?
	 *
	 * @description
	 * Is the first date after the second one?
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the date that should be after the first one to return true
	 * @returns {Boolean} the first date is after the second date
	 *
	 * @example
	 * // Is 10 July 1989 after 11 February 1987?
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> true
	 */
	function isAfter (dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() > date.getTime()
	}
	
	module.exports = isAfter


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Common Helpers
	 * @summary Are the given dates equal?
	 *
	 * @description
	 * Are the given dates equal?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Boolean} the dates are equal
	 *
	 * @example
	 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
	 * var result = isEqual(
	 *   new Date(2014, 6, 2, 6, 30, 45, 0)
	 *   new Date(2014, 6, 2, 6, 30, 45, 500)
	 * )
	 * //=> false
	 */
	function isEqual (dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = parse(dirtyLeftDate)
	  var dateRight = parse(dirtyRightDate)
	  return dateLeft.getTime() === dateRight.getTime()
	}
	
	module.exports = isEqual


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	
	var DaysOfWeek = function (_React$Component) {
	  _inherits(DaysOfWeek, _React$Component);
	
	  function DaysOfWeek() {
	    _classCallCheck(this, DaysOfWeek);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DaysOfWeek).apply(this, arguments));
	  }
	
	  _createClass(DaysOfWeek, [{
	    key: 'render',
	    value: function render() {
	      var blockClassName = this.props.blockClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-days_of_week' },
	        daysOfWeek.map(function (day, index) {
	          return _react2.default.createElement(
	            'div',
	            {
	              className: (0, _classnames2.default)(blockClassName + '-days_of_week_day', {
	                'is-weekend': index > 4 // 4 is an index of Friday
	              }),
	              key: day
	            },
	            day
	          );
	        })
	      );
	    }
	  }]);
	
	  return DaysOfWeek;
	}(_react2.default.Component);
	
	DaysOfWeek.propTypes = {
	  blockClassName: _react2.default.PropTypes.string
	};
	DaysOfWeek.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = DaysOfWeek;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Month Helpers
	 * @summary Return the start of a month for the given date.
	 *
	 * @description
	 * Return the start of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a month
	 *
	 * @example
	 * // The start of a month for 2 September 2014 11:55:00:
	 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setDate(1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfMonth


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Month Helpers
	 * @summary Return the end of a month for the given date.
	 *
	 * @description
	 * Return the end of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a month
	 *
	 * @example
	 * // The end of a month for 2 September 2014 11:55:00:
	 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 23:59:59.999
	 */
	function endOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfMonth


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Day Helpers
	 * @summary Add the specified number of days to the given date.
	 *
	 * @description
	 * Add the specified number of days to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of days to be added
	 * @returns {Date} the new date with the days added
	 *
	 * @example
	 * // Add 10 days to 1 September 2014:
	 * var result = addDays(new Date(2014, 8, 1), 10)
	 * //=> Thu Sep 11 2014 00:00:00
	 */
	function addDays (dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setDate(date.getDate() + amount)
	  return date
	}
	
	module.exports = addDays


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _header_button = __webpack_require__(34);
	
	var _header_button2 = _interopRequireDefault(_header_button);
	
	var _consts = __webpack_require__(7);
	
	var _add_months = __webpack_require__(35);
	
	var _add_months2 = _interopRequireDefault(_add_months);
	
	var _is_before = __webpack_require__(26);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _is_after = __webpack_require__(27);
	
	var _is_after2 = _interopRequireDefault(_is_after);
	
	var _start_of_month = __webpack_require__(30);
	
	var _start_of_month2 = _interopRequireDefault(_start_of_month);
	
	var _format = __webpack_require__(13);
	
	var _format2 = _interopRequireDefault(_format);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MonthHeader = function (_React$Component) {
	  _inherits(MonthHeader, _React$Component);
	
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MonthHeader).apply(this, arguments));
	  }
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(offset) {
	      var _props = this.props;
	      var onMonthChange = _props.onMonthChange;
	      var activeMonth = _props.activeMonth;
	
	      onMonthChange((0, _add_months2.default)(activeMonth, parseInt(offset)));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var activeMonth = _props2.activeMonth;
	      var minDate = _props2.minDate;
	      var maxDate = _props2.maxDate;
	      var blockClassName = _props2.blockClassName;
	      var headerNextArrow = _props2.headerNextArrow;
	      var headerNextTitle = _props2.headerNextTitle;
	      var headerPrevArrow = _props2.headerPrevArrow;
	      var headerPrevTitle = _props2.headerPrevTitle;
	
	      var prevEnabled = minDate ? (0, _is_before2.default)((0, _start_of_month2.default)(minDate), (0, _start_of_month2.default)(activeMonth)) : true;
	      var nextEnabled = maxDate ? (0, _is_after2.default)((0, _start_of_month2.default)(maxDate), (0, _start_of_month2.default)(activeMonth)) : true;
	
	      return _react2.default.createElement(
	        'div',
	        { className: blockClassName + '-month_header' },
	        _react2.default.createElement(_header_button2.default, {
	          type: 'prev',
	          arrow: headerPrevArrow,
	          title: headerPrevTitle,
	          enabled: prevEnabled,
	          onClick: this._switchMonth.bind(this, -1),
	          blockClassName: blockClassName
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: blockClassName + '-month_header_title' },
	          (0, _format2.default)(activeMonth, 'MMMM YYYY')
	        ),
	        _react2.default.createElement(_header_button2.default, {
	          type: 'next',
	          arrow: headerNextArrow,
	          title: headerNextTitle,
	          enabled: nextEnabled,
	          onClick: this._switchMonth.bind(this, 1),
	          blockClassName: blockClassName
	        })
	      );
	    }
	  }]);
	
	  return MonthHeader;
	}(_react2.default.Component);
	
	MonthHeader.propTypes = {
	  activeMonth: _react2.default.PropTypes.instanceOf(Date).isRequired,
	  blockClassName: _react2.default.PropTypes.string,
	  headerNextArrow: _react2.default.PropTypes.element,
	  headerNextTitle: _react2.default.PropTypes.string,
	  headerPrevArrow: _react2.default.PropTypes.element,
	  headerPrevTitle: _react2.default.PropTypes.string,
	  maxDate: _react2.default.PropTypes.instanceOf(Date),
	  minDate: _react2.default.PropTypes.instanceOf(Date),
	  onMonthChange: _react2.default.PropTypes.func.isRequired
	};
	MonthHeader.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME,
	  headerNextTitle: _consts.NEXT_MONTH_TITLE,
	  headerPrevTitle: _consts.PREV_MONTH_TITLE
	};
	exports.default = MonthHeader;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _consts = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderButton = function (_React$Component) {
	  _inherits(HeaderButton, _React$Component);
	
	  function HeaderButton() {
	    _classCallCheck(this, HeaderButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderButton).apply(this, arguments));
	  }
	
	  _createClass(HeaderButton, [{
	    key: '_onClick',
	    value: function _onClick(e) {
	      var _props = this.props;
	      var enabled = _props.enabled;
	      var onClick = _props.onClick;
	
	      if (enabled) {
	        onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var arrow = _props2.arrow;
	      var blockClassName = _props2.blockClassName;
	      var enabled = _props2.enabled;
	      var type = _props2.type;
	      var title = _props2.title;
	
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)(blockClassName + '-header_button', 'is-' + type, {
	            'is-disabled': !enabled
	          }),
	          disabled: !enabled,
	          title: title,
	          onClick: this._onClick.bind(this)
	        },
	        arrow
	      );
	    }
	  }]);
	
	  return HeaderButton;
	}(_react2.default.Component);
	
	HeaderButton.propTypes = {
	  arrow: _react2.default.PropTypes.element,
	  blockClassName: _react2.default.PropTypes.string,
	  enabled: _react2.default.PropTypes.bool,
	  offset: _react2.default.PropTypes.number,
	  onClick: _react2.default.PropTypes.func.isRequired,
	  title: _react2.default.PropTypes.string,
	  type: _react2.default.PropTypes.oneOf(['prev', 'next']).isRequired
	};
	HeaderButton.defaultProps = {
	  blockClassName: _consts.BLOCK_CLASS_NAME
	};
	exports.default = HeaderButton;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	var getDaysInMonth = __webpack_require__(36)
	
	/**
	 * @category Month Helpers
	 * @summary Add the specified number of months to the given date.
	 *
	 * @description
	 * Add the specified number of months to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of months to be added
	 * @returns {Date} the new date with the months added
	 *
	 * @example
	 * // Add 5 months to 1 September 2014:
	 * var result = addMonths(new Date(2014, 8, 1), 5)
	 * //=> Sun Feb 01 2015 00:00:00
	 */
	function addMonths (dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var desiredMonth = date.getMonth() + amount
	  var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1))
	  // Set the last day of the new month
	  // if the original date was the last day of the longer month
	  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
	  return date
	}
	
	module.exports = addMonths


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(9)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of days in a month of the given date.
	 *
	 * @description
	 * Get the number of days in a month of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the number of days in a month
	 *
	 * @example
	 * // How many days are in February 2000?
	 * var result = getDaysInMonth(new Date(2000, 1))
	 * //=> 29
	 */
	function getDaysInMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var monthIndex = date.getMonth()
	  return new Date(year, monthIndex + 1, 0).getDate()
	}
	
	module.exports = getDaysInMonth


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} argument must be an instance of Date
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */
	function isValid (date) {
	  if (isDate(date)) {
	    return !isNaN(date)
	  } else {
	    throw new TypeError(toString.call(date) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ }
/******/ ])
});
;
//# sourceMappingURL=simple-calendar.js.map