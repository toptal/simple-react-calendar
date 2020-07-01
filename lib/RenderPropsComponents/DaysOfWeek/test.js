"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _consts = require("../../calendar/consts");

var _DayOfWeek = _interopRequireDefault(require("../../RenderPropsComponents/DayOfWeek"));

var _DaysOfWeek = _interopRequireDefault(require("./DaysOfWeek"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('DaysOfWeek', function () {
  var props, wrapper;
  beforeEach(function () {
    props = getProps();
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_DaysOfWeek["default"], props));
  });
  describe('#_getDaysOfWeek', function () {
    it('return days of week', function () {
      // TODO: extract to a shared helper
      // @ts-ignore
      expect(_DaysOfWeek["default"].getDaysOfWeek({
        dayIndex: 3,
        daysOfWeek: _consts.DAYS_OF_WEEK
      })).toEqual(['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue']);
    });
  });
  describe('#render', function () {
    it('renders <DaysOfWeek />', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

var getProps = function getProps() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    blockClassName: _consts.BLOCK_CLASS_NAME,
    daysOfWeek: _consts.DAYS_OF_WEEK,
    renderDayOfWeek: function renderDayOfWeek(props) {
      return /*#__PURE__*/_react["default"].createElement(_DayOfWeek["default"], props);
    },
    weekStartsOn: 1
  }, overrides);
};