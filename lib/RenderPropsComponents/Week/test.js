"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var helper = _interopRequireWildcard(require("../../helper"));

var _Day = _interopRequireDefault(require("../../RenderPropsComponents/Day"));

var _Week = _interopRequireDefault(require("./Week"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Week', function () {
  var props, wrapper;
  beforeEach(function () {
    props = getProps();
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Week["default"], props));
  });
  describe('#render', function () {
    it('renders <Week />', function () {
      expect(wrapper).toMatchSnapshot();
    });
    describe('when prop `date` is different month', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          date: new Date(2015, 5, 29)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `date` falls in prop `activeMonth`', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `date` falls in the previous month', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 7, 1),
          date: new Date(2015, 6, 27)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `highlightedStart` and `highlightedEnd` are defined', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          highlightedEnd: new Date(2015, 6, 1),
          highlightedStart: new Date(2015, 5, 29),
          today: new Date(2015, 5, 31)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `selectedMin` and `selectedMax` are defined', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          selectedMax: new Date(2015, 6, 2),
          selectedMin: new Date(2015, 5, 30)
        });
        expect(wrapper).toMatchSnapshot();
      });
      describe('when prop `selectedMin` and `selectedMax` are the same day', function () {
        it('renders <Week />', function () {
          wrapper.setProps({
            activeMonth: new Date(2015, 5, 1),
            date: new Date(2015, 5, 29, 21, 0),
            selectedMax: new Date(2015, 5, 30),
            selectedMin: new Date(2015, 5, 30)
          });
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
    describe('when prop `minDate` is defined', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          minDate: new Date(2015, 5, 30)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `maxDate` is defined', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 5, 30)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `selectedMin` and `selectedMax` are defined', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 6, 1),
          minDate: new Date(2015, 5, 30)
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `disabledIntervals` is defined', function () {
      it('renders <Week />', function () {
        var disabledIntervals = [{
          end: new Date(2015, 7, 23),
          start: new Date(2015, 7, 21)
        }];
        wrapper.setProps({
          disabledIntervals: disabledIntervals
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `dateDisabled`', function () {
      it('renders <Week />', function () {
        wrapper.setProps({
          activeMonth: new Date(2015, 5, 1),
          date: new Date(2015, 5, 29),
          maxDate: new Date(2015, 6, 1),
          minDate: new Date(2015, 5, 30)
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
    date: new Date(2015, 7, 17),
    getDayFormatted: helper.getDayFormatted,
    getISODate: helper.getISODate,
    onDayClick: jest.fn(),
    onDayMouseEnter: jest.fn(),
    onDisabledDayClick: jest.fn(),
    renderDay: function renderDay(props) {
      return /*#__PURE__*/_react["default"].createElement(_Day["default"], props);
    },
    today: new Date(2015, 7, 17),
    weekStartsOn: 1
  }, overrides);
};