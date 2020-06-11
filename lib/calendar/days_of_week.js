"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      customRender = props.customRender,
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

  if (customRender) {
    return customRender(_objectSpread(_objectSpread({}, props), {}, {
      children: children
    }));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(blockClassName, "-days_of_week")
  }, children);
};

DaysOfWeek.displayName = 'DaysOfWeek'; // TODO: extract to a separate helper
// @ts-ignore

DaysOfWeek.getDaysOfWeek = getDaysOfWeek;
var _default = DaysOfWeek;
exports["default"] = _default;