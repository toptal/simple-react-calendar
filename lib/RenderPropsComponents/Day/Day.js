"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Day = function Day(_ref) {
  var blockClassName = _ref.blockClassName,
      date = _ref.date,
      getDayFormatted = _ref.getDayFormatted,
      handleOnClick = _ref.handleOnClick,
      handleOnEnter = _ref.handleOnEnter,
      isCurrentMonth = _ref.isCurrentMonth,
      isDisabled = _ref.isDisabled,
      isHighlighted = _ref.isHighlighted,
      isMonthNext = _ref.isMonthNext,
      isMonthPrev = _ref.isMonthPrev,
      isNonSelectable = _ref.isNonSelectable,
      ISODate = _ref.ISODate,
      isSelectable = _ref.isSelectable,
      isSelected = _ref.isSelected,
      isSelectionEnd = _ref.isSelectionEnd,
      isSelectionStart = _ref.isSelectionStart,
      isToday = _ref.isToday,
      isWeekend = _ref.isWeekend,
      isWorkDay = _ref.isWorkDay;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "data-simple-react-calendar-day": ISODate,
    className: (0, _classnames["default"])("".concat(blockClassName, "-week-day"), {
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
      'is-working_day': isWorkDay
    }),
    onClick: handleOnClick,
    onMouseEnter: handleOnEnter,
    type: "button",
    value: ISODate
  }, getDayFormatted(date));
};

Day.displayName = 'Day';
var _default = Day;
exports["default"] = _default;