"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DayOfWeek = function DayOfWeek(_ref) {
  var blockClassName = _ref.blockClassName,
      isWeekend = _ref.isWeekend,
      day = _ref.day;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(blockClassName, "-days_of_week_day"), {
      'is-weekend': isWeekend
    })
  }, day);
};

var _default = DayOfWeek;
exports["default"] = _default;