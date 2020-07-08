"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _add_days = _interopRequireDefault(require("date-fns/add_days"));

var _are_ranges_overlapping = _interopRequireDefault(require("date-fns/are_ranges_overlapping"));

var _difference_in_calendar_days = _interopRequireDefault(require("date-fns/difference_in_calendar_days"));

var _end_of_month = _interopRequireDefault(require("date-fns/end_of_month"));

var _end_of_week = _interopRequireDefault(require("date-fns/end_of_week"));

var _is_before = _interopRequireDefault(require("date-fns/is_before"));

var _is_equal = _interopRequireDefault(require("date-fns/is_equal"));

var _is_same_day = _interopRequireDefault(require("date-fns/is_same_day"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _start_of_month = _interopRequireDefault(require("date-fns/start_of_month"));

var _start_of_week = _interopRequireDefault(require("date-fns/start_of_week"));

var _sub_days = _interopRequireDefault(require("date-fns/sub_days"));

var _days_of_week = _interopRequireDefault(require("./days_of_week"));

var _week = _interopRequireDefault(require("./week"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RANGE_MODE = 'range';

// TODO: FC Rewrite

/* eslint-disable react/require-optimization */
var Month = /*#__PURE__*/function (_Component) {
  _inherits(Month, _Component);

  var _super = _createSuper(Month);

  function Month() {
    var _this;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleOnDayMouseEnter", function (event) {
      event.preventDefault();
      var simpleReactCalendarDay = event.currentTarget.dataset.simpleReactCalendarDay;
      var date = (0, _parse["default"])(simpleReactCalendarDay);
      var onDayMouseEnter = _this.props.onDayMouseEnter;

      if (onDayMouseEnter) {
        onDayMouseEnter(date);
      } // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore


      if (!_this._selectionInProgress) return;
      var rangeLimit = _this.props.rangeLimit; // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      var dateLimit = (0, _sub_days["default"])(_this._selectionStart, rangeLimit);

      var isDisabledWithin = _this._getDisabledRange({
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        end: !(0, _is_before["default"])(_this._selectionStart, date) ? _this._selectionStart : date,
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        start: (0, _is_before["default"])(_this._selectionStart, date) ? _this._selectionStart : date
      });

      if (!isDisabledWithin) return; // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      if (!(0, _is_equal["default"])(date, _this._selectionEnd)) {
        if (!rangeLimit || rangeLimit && !(0, _is_before["default"])(date, dateLimit)) {
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          _this._selectionEnd = date;

          _this._pushUpdate();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnDayClick", function (event) {
      event.preventDefault();
      var simpleReactCalendarDay = event.currentTarget.dataset.simpleReactCalendarDay;
      var date = (0, _parse["default"])(simpleReactCalendarDay);
      var mode = _this.props.mode;

      if (mode === RANGE_MODE) {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        if (_this._selectionInProgress) {
          var isDisabledWithin = _this._getDisabledRange({
            // TODO: simplify with FC approach, remove state logic from child components
            //       this is passed from the parent component
            // @ts-ignore
            end: !(0, _is_before["default"])(_this._selectionStart, date) // @ts-ignore
            ? _this._selectionStart : date,
            // TODO: simplify with FC approach, remove state logic from child components
            //       this is passed from the parent component
            // @ts-ignore
            start: (0, _is_before["default"])(_this._selectionStart, date) // @ts-ignore
            ? _this._selectionStart : date
          });

          if (!isDisabledWithin) {
            // TODO: simplify with FC approach, remove state logic from child components
            //       this is passed from the parent component
            // @ts-ignore
            _this._selectionInProgress = false; // TODO: simplify with FC approach, remove state logic from child components
            //       this is passed from the parent component
            // @ts-ignore

            _this._selectionStart = null; // TODO: simplify with FC approach, remove state logic from child components
            //       this is passed from the parent component
            // @ts-ignore

            _this._selectionEnd = null;

            _this._pushUpdate();

            _this._pushNoticeUpdate('overlapping_with_disabled');

            return;
          } // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore


          _this._selectionInProgress = false; // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore

          _this._selectionEnd = date;
        } else {
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          _this._selectionInProgress = true; // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore

          _this._selectionStart = date; // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore

          _this._selectionEnd = date;
        }
      } else {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        _this._selectionInProgress = false; // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore

        _this._selectionStart = date; // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore

        _this._selectionEnd = date;
      }

      _this._pushUpdate();

      _this._pushNoticeUpdate(null);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnDisabledDayClick", function (event) {
      var onNoticeChange = _this.props.onNoticeChange;
      event.preventDefault();
      onNoticeChange('disabled_day_click');
    });

    return _this;
  }

  _createClass(Month, [{
    key: "_pushUpdate",
    value: function _pushUpdate() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          rangeLimit = _this$props.rangeLimit;
      var end, start; // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      if (this._selectionStart && this._selectionEnd) {
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        if ((0, _is_before["default"])(this._selectionStart, this._selectionEnd)) {
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          start = this._selectionStart; // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore

          end = this._selectionEnd;
        } else {
          // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore
          start = this._selectionEnd; // TODO: simplify with FC approach, remove state logic from child components
          //       this is passed from the parent component
          // @ts-ignore

          end = this._selectionStart;
        }

        if (rangeLimit && rangeLimit < (0, _difference_in_calendar_days["default"])(end, start)) {
          end = (0, _add_days["default"])(start, rangeLimit);
        }
      }

      return onChange({
        end: end,
        // TODO: simplify with FC approach, remove state logic from child components
        //       this is passed from the parent component
        // @ts-ignore
        inProgress: this._selectionInProgress,
        start: start
      });
    }
  }, {
    key: "_getMinDate",
    value: function _getMinDate() {
      var _this$props2 = this.props,
          rangeLimit = _this$props2.rangeLimit,
          minDate = _this$props2.minDate; // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      var calcStartDate = (0, _sub_days["default"])(this._selectionStart, rangeLimit);

      if (minDate) {
        var isCalcStartDayAfter = (0, _is_before["default"])(minDate, calcStartDate);
        return isCalcStartDayAfter ? calcStartDate : minDate;
      }

      return calcStartDate;
    }
  }, {
    key: "_pushNoticeUpdate",
    value: function _pushNoticeUpdate(noticeType) {
      var onNoticeChange = this.props.onNoticeChange;
      return onNoticeChange(noticeType);
    }
  }, {
    key: "_getDisabledRange",
    value: function _getDisabledRange(interval) {
      var start = interval.start,
          end = interval.end;
      var disabledIntervals = this.props.disabledIntervals;
      if (!disabledIntervals) return true;

      for (var i = 0; i < disabledIntervals.length; i++) {
        var _disabledIntervals$i = disabledIntervals[i],
            intervalStart = _disabledIntervals$i.start,
            intervalEnd = _disabledIntervals$i.end;

        if ((0, _are_ranges_overlapping["default"])(start, end, intervalStart, intervalEnd)) {
          return;
        }
      }

      return true;
    }
  }, {
    key: "_getMaxDate",
    value: function _getMaxDate() {
      var _this$props3 = this.props,
          rangeLimit = _this$props3.rangeLimit,
          maxDate = _this$props3.maxDate; // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      var calcEndDate = (0, _add_days["default"])(this._selectionStart, rangeLimit);

      if (maxDate) {
        var isCalcEndDayBefore = (0, _is_before["default"])(calcEndDate, maxDate);
        return isCalcEndDayBefore ? calcEndDate : maxDate;
      }

      return calcEndDate;
    }
  }, {
    key: "_renderDaysOfWeek",
    value: function _renderDaysOfWeek() {
      var _this$props4 = this.props,
          disableDaysOfWeek = _this$props4.disableDaysOfWeek,
          blockClassName = _this$props4.blockClassName,
          weekStartsOn = _this$props4.weekStartsOn,
          daysOfWeek = _this$props4.daysOfWeek,
          renderDaysOfWeek = _this$props4.renderDaysOfWeek,
          renderDayOfWeek = _this$props4.renderDayOfWeek;
      if (disableDaysOfWeek) return;
      return /*#__PURE__*/_react["default"].createElement(_days_of_week["default"], {
        blockClassName: blockClassName,
        weekStartsOn: weekStartsOn,
        daysOfWeek: daysOfWeek,
        customRender: renderDaysOfWeek,
        renderDayOfWeek: renderDayOfWeek
      });
    }
  }, {
    key: "_renderWeeks",
    value: function _renderWeeks() {
      var _this2 = this;

      var _this$props5 = this.props,
          selectedMin = _this$props5.selectedMin,
          selectedMax = _this$props5.selectedMax,
          highlightedStart = _this$props5.highlightedStart,
          highlightedEnd = _this$props5.highlightedEnd,
          disabledIntervals = _this$props5.disabledIntervals,
          activeMonth = _this$props5.activeMonth,
          today = _this$props5.today,
          blockClassName = _this$props5.blockClassName,
          minNumberOfWeeks = _this$props5.minNumberOfWeeks,
          rangeLimit = _this$props5.rangeLimit,
          weekStartsOn = _this$props5.weekStartsOn,
          renderDay = _this$props5.renderDay,
          renderWeek = _this$props5.renderWeek,
          getDayFormatted = _this$props5.getDayFormatted,
          getISODate = _this$props5.getISODate;
      var weeks = [];
      var _this$props6 = this.props,
          minDate = _this$props6.minDate,
          maxDate = _this$props6.maxDate;
      var date = (0, _start_of_week["default"])((0, _start_of_month["default"])(activeMonth), {
        weekStartsOn: weekStartsOn
      });
      var end = (0, _end_of_week["default"])((0, _end_of_month["default"])(activeMonth), {
        weekStartsOn: weekStartsOn
      }); // TODO: simplify with FC approach, remove state logic from child components
      //       this is passed from the parent component
      // @ts-ignore

      if (this._selectionInProgress && rangeLimit) {
        minDate = this._getMinDate();
        maxDate = this._getMaxDate();
      }

      while ( // TODO: External helper with weeknumber etc

      /* eslint-disable no-unmodified-loop-condition */
      typeof minNumberOfWeeks === 'number' && minNumberOfWeeks > weeks.length || (0, _is_before["default"])(date, end) || (0, _is_same_day["default"])(date, end)) {
        weeks.push(date);
        date = (0, _add_days["default"])(date, 7);
      }

      return weeks.map(function (week) {
        return /*#__PURE__*/_react["default"].createElement(_week["default"], {
          activeMonth: activeMonth,
          blockClassName: blockClassName,
          customRender: renderWeek,
          getDayFormatted: getDayFormatted,
          date: week,
          disabledIntervals: disabledIntervals,
          highlightedEnd: highlightedEnd,
          highlightedStart: highlightedStart,
          key: week.getTime(),
          maxDate: maxDate,
          minDate: minDate,
          onDayClick: _this2.handleOnDayClick,
          onDayMouseEnter: _this2.handleOnDayMouseEnter,
          onDisabledDayClick: _this2.handleOnDisabledDayClick,
          renderDay: renderDay,
          selectedMax: selectedMax,
          selectedMin: selectedMin,
          today: today,
          weekStartsOn: weekStartsOn,
          getISODate: getISODate
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          blockClassName = _this$props7.blockClassName,
          customRender = _this$props7.customRender;

      var children = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this._renderDaysOfWeek(), this._renderWeeks());

      if (customRender) {
        return customRender(_objectSpread(_objectSpread({}, this.props), {}, {
          children: children
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(blockClassName, "-month")
      }, children);
    }
  }]);

  return Month;
}(_react.Component);

exports["default"] = Month;