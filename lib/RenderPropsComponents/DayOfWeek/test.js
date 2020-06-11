"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DayOfWeek = _interopRequireDefault(require("./DayOfWeek"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderDayOfWeek = function renderDayOfWeek() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var baseProps = _objectSpread({
    blockClassName: 'example-class-name',
    day: '2015-12-12',
    isWeekend: true
  }, props); // eslint-disable-next-line react/jsx-props-no-spreading


  return (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_DayOfWeek["default"], baseProps));
};

test('default render', function () {
  var _renderDayOfWeek = renderDayOfWeek(),
      container = _renderDayOfWeek.container;

  expect(container.firstChild).toMatchSnapshot();
});