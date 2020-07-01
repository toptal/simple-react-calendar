"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _consts = require("../../calendar/consts");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('HeaderButton', function () {
  var props, wrapper;
  beforeEach(function () {
    props = getProps();
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], props));
  });
  it('renders <HeaderButton />', function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe('when prop `enabled` is `false`', function () {
    it('renders <HeaderButton />', function () {
      wrapper.setProps({
        enabled: false
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('when prop `type` is "next"', function () {
    it('renders <HeaderButton />', function () {
      wrapper.setProps({
        title: _consts.NEXT_MONTH_TITLE,
        type: 'next'
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('when prop `blockClassName` is defined', function () {
    it('renders <HeaderButton />', function () {
      wrapper.setProps({
        blockClassName: 'cal'
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('when prop `title` is defined', function () {
    it('renders <HeaderButton />', function () {
      wrapper.setProps({
        title: 'testTitle'
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('when prop `arrow` is defined', function () {
    it('renders <HeaderButton />', function () {
      wrapper.setProps({
        arrow: /*#__PURE__*/_react["default"].createElement("i", {
          className: "icon"
        }, " Test ")
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});

var getProps = function getProps() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    blockClassName: _consts.BLOCK_CLASS_NAME,
    enabled: true,
    onClick: function onClick() {},
    title: _consts.PREV_MONTH_TITLE,
    type: 'prev'
  }, overrides);
};