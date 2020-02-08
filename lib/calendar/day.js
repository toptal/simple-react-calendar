"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Day = function Day(props) {
  var blockClassName = props.blockClassName,
      customRender = props.customRender,
      date = props.date,
      handleOnClick = props.handleOnClick,
      handleOnEnter = props.handleOnEnter,
      isCurrentMonth = props.isCurrentMonth,
      isDisabled = props.isDisabled,
      isHighlighted = props.isHighlighted,
      isMonthNext = props.isMonthNext,
      isMonthPrev = props.isMonthPrev,
      isNonSelectable = props.isNonSelectable,
      isSelectable = props.isSelectable,
      isSelected = props.isSelected,
      isSelectionEnd = props.isSelectionEnd,
      isSelectionStart = props.isSelectionStart,
      isToday = props.isToday,
      isWeekend = props.isWeekend,
      isWorkday = props.isWorkday;
  var children = (0, _format["default"])(date, 'D');

  if (customRender) {
    return customRender(_objectSpread({}, props, {
      // TODO: remove this and leave it to the passed function to format the date in the desired format
      children: children
    }));
  }

  return _react["default"].createElement("button", {
    className: (0, _classnames["default"])("".concat(blockClassName, "-day"), {
      'is-current_month': isCurrentMonth,
      'is-disabled': isDisabled,
      'is-end_selection': isSelectionEnd,
      'is-highlighted': isHighlighted,
      'is-next_month': isMonthNext,
      'is-not_selectable': isNonSelectable,
      'is-prev_month': isMonthPrev,
      'is-selectable': isSelectable,
      'is-selected': isSelected,
      'is-start_selection': isSelectionStart,
      'is-today': isToday,
      'is-weekend': isWeekend,
      'is-working_day': isWorkday
    }),
    onClick: handleOnClick,
    onMouseEnter: handleOnEnter,
    value: date,
    type: "button"
  }, children);
};

var _default = Day;
exports["default"] = _default;