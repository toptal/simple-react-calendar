"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _consts = require("../../calendar/consts");

var _MonthHeader = _interopRequireDefault(require("./MonthHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('MonthHeader', function () {
  var instance, props, wrapper;
  beforeEach(function () {
    props = getProps();
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_MonthHeader["default"], props));
    instance = wrapper.instance();
  });
  describe('#_switchMonth', function () {
    it('calls #onMonthChange', function () {
      wrapper.setProps({
        maxDate: new Date(2015, 7, 1)
      });

      instance._switchMonth(1);

      expect(props.onMonthChange).toHaveBeenCalledTimes(1);
      expect(props.onMonthChange).toBeCalledWith(new Date(2015, 8, 17));
    });
  });
  describe('#render', function () {
    it('renders <MonthHeader />', function () {
      expect(wrapper).toMatchSnapshot();
    });
    describe('when prop `minDate` is after prop `activeMonth`', function () {
      it('renders <MonthHeader />', function () {
        wrapper.setProps({
          minDate: new Date(2015, 8, 17)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `maxDate` is before prop `activeMonth`', function () {
      it('renders <MonthHeader />', function () {
        wrapper.setProps({
          maxDate: new Date(2015, 6, 17)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

var getProps = function getProps() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    activeMonth: new Date(2015, 7, 17),
    blockClassName: 'example-class',
    headerNextTitle: _consts.NEXT_MONTH_TITLE,
    headerPrevTitle: _consts.PREV_MONTH_TITLE,
    onMonthChange: jest.fn()
  }, overrides);
};