"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _each_day = _interopRequireDefault(require("date-fns/each_day"));

var _end_of_week = _interopRequireDefault(require("date-fns/end_of_week"));

var _is_after = _interopRequireDefault(require("date-fns/is_after"));

var _is_before = _interopRequireDefault(require("date-fns/is_before"));

var _is_equal = _interopRequireDefault(require("date-fns/is_equal"));

var _is_same_day = _interopRequireDefault(require("date-fns/is_same_day"));

var _is_same_month = _interopRequireDefault(require("date-fns/is_same_month"));

var _is_weekend = _interopRequireDefault(require("date-fns/is_weekend"));

var _is_within_range = _interopRequireDefault(require("date-fns/is_within_range"));

var _start_of_day = _interopRequireDefault(require("date-fns/start_of_day"));

var _start_of_week = _interopRequireDefault(require("date-fns/start_of_week"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// TODO: FC Rewrite

/* eslint-disable react/require-optimization */
var Week = /*#__PURE__*/function (_Component) {
  _inherits(Week, _Component);

  var _super = _createSuper(Week);

  function Week() {
    _classCallCheck(this, Week);

    return _super.apply(this, arguments);
  }

  _createClass(Week, [{
    key: "_dateSelectable",
    value: function _dateSelectable(date) {
      var _this$props = this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;

      if (this._dateDisabled(date)) {
        return false;
      }

      if (minDate && maxDate) {
        return (0, _is_within_range["default"])(date, minDate, maxDate);
      } else if (minDate && !maxDate) {
        return (0, _is_after["default"])(date, minDate) || (0, _is_equal["default"])(date, minDate);
      } else if (maxDate && !minDate) {
        return (0, _is_before["default"])(date, maxDate) || (0, _is_equal["default"])(date, maxDate);
      }

      return true;
    }
  }, {
    key: "_dateSelected",
    value: function _dateSelected(date) {
      var _this$props2 = this.props,
          selectedMin = _this$props2.selectedMin,
          selectedMax = _this$props2.selectedMax;
      return Boolean(selectedMin && selectedMax && (0, _is_within_range["default"])((0, _start_of_day["default"])(date), (0, _start_of_day["default"])(selectedMin), (0, _start_of_day["default"])(selectedMax)));
    }
  }, {
    key: "_dateHighlighted",
    value: function _dateHighlighted(date) {
      var _this$props3 = this.props,
          highlightedStart = _this$props3.highlightedStart,
          highlightedEnd = _this$props3.highlightedEnd;
      if (!highlightedStart || !highlightedEnd) return false;
      return (0, _is_within_range["default"])((0, _start_of_day["default"])(date), (0, _start_of_day["default"])(highlightedStart), (0, _start_of_day["default"])(highlightedEnd));
    }
  }, {
    key: "_dateDisabled",
    value: function _dateDisabled(date) {
      var dateDisabled;
      var disabledIntervals = this.props.disabledIntervals;
      if (!disabledIntervals) return false;

      for (var i = 0; i < disabledIntervals.length; i++) {
        var _disabledIntervals$i = disabledIntervals[i],
            start = _disabledIntervals$i.start,
            end = _disabledIntervals$i.end;
        dateDisabled = (0, _is_within_range["default"])((0, _start_of_day["default"])(date), (0, _start_of_day["default"])(start), (0, _start_of_day["default"])(end));

        if (dateDisabled) {
          return dateDisabled;
        }
      }

      return false;
    }
  }, {
    key: "_renderDays",
    value: function _renderDays() {
      var _this = this;

      var _this$props4 = this.props,
          date = _this$props4.date,
          today = _this$props4.today,
          onDayClick = _this$props4.onDayClick,
          onDisabledDayClick = _this$props4.onDisabledDayClick,
          onDayMouseEnter = _this$props4.onDayMouseEnter,
          getISODate = _this$props4.getISODate,
          getDayFormatted = _this$props4.getDayFormatted,
          blockClassName = _this$props4.blockClassName,
          activeMonth = _this$props4.activeMonth,
          selectedMax = _this$props4.selectedMax,
          selectedMin = _this$props4.selectedMin,
          weekStartsOn = _this$props4.weekStartsOn,
          renderDay = _this$props4.renderDay;
      var start = (0, _start_of_week["default"])(date, {
        weekStartsOn: weekStartsOn
      });
      var end = (0, _end_of_week["default"])(date, {
        weekStartsOn: weekStartsOn
      });
      return (0, _each_day["default"])(start, end).map(function (day) {
        var date = getISODate(day);

        var isSelectable = _this._dateSelectable(day);

        var isDisabled = _this._dateDisabled(date);

        var isWorkDay = !(0, _is_weekend["default"])(date);
        var isCurrentMonth = (0, _is_same_month["default"])(date, activeMonth);
        var isNextMonth = !isCurrentMonth && (0, _is_after["default"])(date, activeMonth);
        return renderDay({
          ISODate: getISODate(day),
          blockClassName: blockClassName,
          date: day,
          getDayFormatted: getDayFormatted,
          handleOnClick: isSelectable ? onDayClick : isDisabled ? onDisabledDayClick : function () {},
          handleOnEnter: isSelectable ? onDayMouseEnter : function () {},
          isCurrentMonth: isCurrentMonth,
          isDisabled: isDisabled,
          isHighlighted: _this._dateHighlighted(day),
          isMonthNext: isNextMonth,
          isMonthPrev: !isCurrentMonth && !isNextMonth,
          isNonSelectable: !isSelectable,
          isSelectable: isSelectable,
          isSelected: _this._dateSelected(day),
          isSelectionEnd: Boolean(selectedMax && (0, _is_same_day["default"])(selectedMax, day)),
          isSelectionStart: Boolean(selectedMin && (0, _is_same_day["default"])(selectedMin, day)),
          isToday: (0, _is_same_day["default"])(today, day),
          isWeekend: !isWorkDay,
          isWorkDay: isWorkDay,
          key: getISODate(day)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          customRender = _this$props5.customRender,
          blockClassName = _this$props5.blockClassName;

      var children = this._renderDays();

      if (customRender) {
        return customRender(_objectSpread(_objectSpread({}, this.props), {}, {
          children: children
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(blockClassName, "-week")
      }, children);
    }
  }]);

  return Week;
}(_react.Component);

exports["default"] = Week;