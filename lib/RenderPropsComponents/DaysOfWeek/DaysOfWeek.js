"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FRIDAY_INDEX = 4;

var getDaysOfWeek = function getDaysOfWeek(_ref) {
  var daysOfWeek = _ref.daysOfWeek,
      dayIndex = _ref.dayIndex;
  var adjustedIndex = dayIndex - 1;
  return daysOfWeek.slice(adjustedIndex).concat(daysOfWeek.slice(0, adjustedIndex));
};

var DaysOfWeek = function DaysOfWeek(props) {
  var blockClassName = props.blockClassName,
      weekStartsOn = props.weekStartsOn,
      renderDayOfWeek = props.renderDayOfWeek,
      daysOfWeek = props.daysOfWeek;
  var slicedDaysOfWeek = getDaysOfWeek({
    dayIndex: weekStartsOn,
    daysOfWeek: daysOfWeek
  });
  var children = slicedDaysOfWeek.map(function (day, index) {
    return renderDayOfWeek({
      blockClassName: blockClassName,
      day: day,
      isWeekend: index > FRIDAY_INDEX,
      key: day
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(blockClassName, "-days_of_week")
  }, children);
};

DaysOfWeek.displayName = 'DaysOfWeek'; // TODO: extract to a separate helper
// @ts-ignore

DaysOfWeek.getDaysOfWeek = getDaysOfWeek;
var _default = DaysOfWeek;
exports["default"] = _default;