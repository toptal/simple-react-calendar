"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _helper = require("../../helper");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderDay = function renderDay(props) {
  var baseProps = _objectSpread({
    ISODate: '2020-02-09',
    blockClassName: 'example-class-name',
    date: new Date(2020, 1, 9),
    getDayFormatted: _helper.getDayFormatted,
    handleOnClick: jest.fn(),
    handleOnEnter: jest.fn(),
    isCurrentMonth: true,
    isDisabled: false,
    isHighlighted: true,
    isMonthNext: false,
    isMonthPrev: false,
    isNonSelectable: true,
    isSelectable: true,
    isSelected: false,
    isSelectionEnd: false,
    isSelectionStart: true,
    isToday: true,
    isWeekend: true,
    isWorkDay: false
  }, props); // eslint-disable-next-line react/jsx-props-no-spreading


  return (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_["default"], baseProps));
};

test('default render', function () {
  var _renderDay = renderDay({}),
      container = _renderDay.container;

  expect(container.firstChild).toMatchSnapshot();
});
test('trigger callback on click', function () {
  var handleOnClick = jest.fn();

  var _renderDay2 = renderDay({
    handleOnClick: handleOnClick
  }),
      getByRole = _renderDay2.getByRole;

  var button = getByRole('button');

  _react.fireEvent.click(button);

  expect(handleOnClick).toBeCalled();
});
test('trigger callback on mouseenter', function () {
  var handleOnEnter = jest.fn();

  var _renderDay3 = renderDay({
    handleOnEnter: handleOnEnter
  }),
      getByRole = _renderDay3.getByRole;

  var button = getByRole('button');

  _react.fireEvent.mouseEnter(button);

  expect(handleOnEnter).toBeCalled();
});
test('handle currentMonth', function () {
  var _renderDay4 = renderDay({
    isCurrentMonth: true
  }),
      container = _renderDay4.container;

  expect(container.firstChild).toHaveClass('is-current_month');
});
test('handle isDisabled', function () {
  var _renderDay5 = renderDay({
    isDisabled: true
  }),
      container = _renderDay5.container;

  expect(container.firstChild).toHaveClass('is-disabled');
});
test('handle isHighlighted', function () {
  var _renderDay6 = renderDay({
    isHighlighted: true
  }),
      container = _renderDay6.container;

  expect(container.firstChild).toHaveClass('is-highlighted');
});
test('handle isMonthNext', function () {
  var _renderDay7 = renderDay({
    isMonthNext: true
  }),
      container = _renderDay7.container;

  expect(container.firstChild).toHaveClass('is-next_month');
});
test('handle isMonthPrev', function () {
  var _renderDay8 = renderDay({
    isMonthPrev: true
  }),
      container = _renderDay8.container;

  expect(container.firstChild).toHaveClass('is-prev_month');
});
test('handle isNonSelectable', function () {
  var _renderDay9 = renderDay({
    isNonSelectable: true
  }),
      container = _renderDay9.container;

  expect(container.firstChild).toHaveClass('is-not_selectable');
});
test('handle isSelectable', function () {
  var _renderDay10 = renderDay({
    isSelectable: true
  }),
      container = _renderDay10.container;

  expect(container.firstChild).toHaveClass('is-selectable');
});
test('handle isSelected', function () {
  var _renderDay11 = renderDay({
    isSelected: true
  }),
      container = _renderDay11.container;

  expect(container.firstChild).toHaveClass('is-selected');
});
test('handle isSelectionEnd', function () {
  var _renderDay12 = renderDay({
    isSelectionEnd: true
  }),
      container = _renderDay12.container;

  expect(container.firstChild).toHaveClass('is-end_selection');
});
test('handle isSelectionStart', function () {
  var _renderDay13 = renderDay({
    isSelectionStart: true
  }),
      container = _renderDay13.container;

  expect(container.firstChild).toHaveClass('is-start_selection');
});
test('handle isToday', function () {
  var _renderDay14 = renderDay({
    isToday: true
  }),
      container = _renderDay14.container;

  expect(container.firstChild).toHaveClass('is-today');
});
test('handle isWeekend', function () {
  var _renderDay15 = renderDay({
    isWeekend: true
  }),
      container = _renderDay15.container;

  expect(container.firstChild).toHaveClass('is-weekend');
});
test('handle isWorkday', function () {
  var _renderDay16 = renderDay({
    isWorkDay: true
  }),
      container = _renderDay16.container;

  expect(container.firstChild).toHaveClass('is-working_day');
});