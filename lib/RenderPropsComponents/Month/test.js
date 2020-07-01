"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _add_days = _interopRequireDefault(require("date-fns/add_days"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _sub_days = _interopRequireDefault(require("date-fns/sub_days"));

var _Month = _interopRequireDefault(require("./Month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var date = '2017-01-01';
describe('Month', function () {
  var instance, mockEvent, props, wrapper;
  beforeEach(function () {
    props = getProps();
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
    instance = wrapper.instance();
    mockEvent = {
      currentTarget: {
        dataset: {
          simpleReactCalendarDay: date
        }
      },
      preventDefault: jest.fn()
    };
  });
  describe('#_pushUpdate', function () {
    describe('when `_selectionStart` is before `_selectionEnd`', function () {
      it('calls prop #onChange', function () {
        instance._selectionStart = '2015-06-10';
        instance._selectionEnd = '2015-06-15';

        instance._pushUpdate();

        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith({
          end: '2015-06-15',
          start: '2015-06-10'
        });
      });
    });
    describe('when `_selectionEnd` is before `_selectionStart`', function () {
      it('calls prop #onChange', function () {
        instance._selectionStart = '2015-06-15';
        instance._selectionEnd = '2015-06-10';

        instance._pushUpdate();

        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith({
          end: '2015-06-15',
          start: '2015-06-10'
        });
      });
    });
    describe('when prop `rangeLimit` is smaller than the difference', function () {
      it('calls prop #onChange', function () {
        props = getProps({
          onChange: jest.fn(),
          rangeLimit: 5
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        instance = wrapper.instance();
        instance._selectionStart = '2015-06-10';
        instance._selectionEnd = '2015-06-25';

        wrapper.instance()._pushUpdate();

        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith({
          end: (0, _add_days["default"])('2015-06-10', 5),
          start: '2015-06-10'
        });
      });
    });
  });
  describe('#_pushNoticeUpdate', function () {
    it('calls prop #onNoticeChange', function () {
      instance._pushNoticeUpdate('test');

      expect(props.onNoticeChange).toHaveBeenCalledTimes(1);
      expect(props.onNoticeChange).toHaveBeenCalledWith('test');
    });
  });
  describe('#_getDisabledRange', function () {
    describe('when prop `disabledIntervals` is `undefined`', function () {
      it('calls prop #onNoticeChange', function () {
        expect(instance._getDisabledRange('test')).toBe(true);
      });
    });
    describe('when prop `disabledIntervals` is defined', function () {
      it('calls prop #onNoticeChange', function () {
        props = getProps({
          disabledIntervals: [{
            end: '2015-06-31',
            start: '2015-01-01'
          }]
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        instance = wrapper.instance();
        expect(instance._getDisabledRange('test')).toBe(true);
      });
      describe('when argument `interval` are overlapping', function () {
        it('calls prop #onNoticeChange', function () {
          var range = {
            end: '2015-06-31',
            start: '2015-01-01'
          };
          props = getProps({
            disabledIntervals: [range]
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          instance = wrapper.instance();
          expect(instance._getDisabledRange(range)).toBe(undefined);
        });
      });
    });
  });
  describe('#handleOnDayMouseEnter', function () {
    it('calls #event.preventDefault', function () {
      instance._selectionInProgress = false;
      instance.handleOnDayMouseEnter(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });
    describe('when prop `onDayMouseEnter` is `undefined`', function () {
      describe('when #_selectionInProgress is `false`', function () {
        it('returns `undefined`', function () {
          instance._selectionInProgress = false;
          expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined);
        });
      });
      describe('when #_selectionInProgress is `true`', function () {
        describe('when #_getDisabledRange is `false`', function () {
          it('returns `undefined`', function () {
            instance._selectionInProgress = true;

            instance._getDisabledRange = function () {
              return false;
            };

            expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined);
          });
        });
        describe('when #_getDisabledRange is defined', function () {
          describe('when argument `date` is equal with `_selectionEnd`', function () {
            it('returns `undefined`', function () {
              instance._selectionInProgress = true;

              instance._getDisabledRange = function () {
                return true;
              };

              instance._selectionEnd = date;
              expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined);
            });
          });
          describe('when argument `date` is not equal with `_selectionEnd`', function () {
            describe('when prop `rangeLimit` is `undefined`', function () {
              it('returns `undefined`', function () {
                instance._selectionInProgress = true;

                instance._getDisabledRange = function () {
                  return true;
                };

                instance._selectionEnd = (0, _add_days["default"])(date, 2);
                expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined);
              });
            });
            describe('when prop `rangeLimit` is defined', function () {
              beforeEach(function () {
                props = getProps({
                  rangeLimit: 5
                });
                wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
                instance = wrapper.instance();
                instance._selectionInProgress = true;

                instance._getDisabledRange = function () {
                  return true;
                };

                instance._selectionEnd = (0, _add_days["default"])(date, 2);
              });
              describe('when argument `date` is before `dateLimit`', function () {
                it('returns `undefined`', function () {
                  instance._selectionStart = (0, _add_days["default"])(date, 6);
                  expect(instance.handleOnDayMouseEnter(mockEvent)).toBe(undefined);
                });
              });
              describe('when argument `date` is after `dateLimit`', function () {
                beforeEach(function () {
                  instance._pushUpdate = jest.fn();
                  instance._selectionStart = (0, _sub_days["default"])(date, 3);
                  instance.handleOnDayMouseEnter(mockEvent);
                });
                it('calls #_pushUpdate', function () {
                  expect(instance._pushUpdate).toHaveBeenCalledTimes(1);
                });
                it('sets `_selectionEnd`', function () {
                  expect(instance._selectionEnd).toEqual((0, _parse["default"])(date));
                });
              });
            });
          });
        });
      });
    });
    describe('when prop `onDayMouseEnter` is defined', function () {
      it('calls prop #onDayMouseEnter', function () {
        instance.handleOnDayMouseEnter(mockEvent);
        expect(props.onDayMouseEnter).toHaveBeenCalledTimes(1);
        expect(props.onDayMouseEnter).toHaveBeenCalledWith((0, _parse["default"])(date));
      });
    });
  });
  describe('#handleOnDayClick', function () {
    it('calls #event.preventDefault', function () {
      instance.handleOnDayClick(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });
    describe('when prop `mode` is `RANGE_MODE`', function () {
      describe('when `_selectionInProgress` is `true`', function () {
        describe('when #_getDisabledRange is `true`', function () {
          it('sets instance states', function () {
            instance._pushNoticeUpdate = function () {};

            instance._selectionInProgress = true;
            instance.handleOnDayClick(mockEvent);
            expect(instance._selectionInProgress).toBe(false);
            expect(instance._selectionStart).toBe(undefined);
            expect(instance._selectionEnd).toEqual((0, _parse["default"])(date));
          });
        });
        describe('when #_getDisabledRange is `false`', function () {
          beforeEach(function () {
            instance._pushNoticeUpdate = function () {};

            instance._selectionInProgress = true;

            instance._getDisabledRange = function () {
              return false;
            };

            instance.handleOnDayClick(mockEvent);
            instance._pushUpdate = jest.fn();
            instance._pushNoticeUpdate = jest.fn();
          });
          it('sets instance states', function () {
            expect(instance._selectionInProgress).toBe(false);
            expect(instance._selectionStart).toBe(null);
            expect(instance._selectionEnd).toBe(null);
          });
        });
      });
      describe('when `_selectionInProgress` is `false`', function () {
        it('sets instance states', function () {
          instance._pushNoticeUpdate = function () {};

          instance._selectionInProgress = false;
          instance.handleOnDayClick(mockEvent);
          expect(instance._selectionInProgress).toBe(true);
          expect(instance._selectionStart).toEqual((0, _parse["default"])(date));
          expect(instance._selectionEnd).toEqual((0, _parse["default"])(date));
        });
      });
    });
    describe('when prop `mode` is `SINGLE_MODE`', function () {
      it('sets instance states', function () {
        props = getProps({
          mode: 'single'
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        var instance = wrapper.instance();

        instance._pushNoticeUpdate = function () {};

        instance.handleOnDayClick(mockEvent);
        expect(instance._selectionInProgress).toBe(false);
        expect(instance._selectionStart).toEqual((0, _parse["default"])(date));
        expect(instance._selectionEnd).toEqual((0, _parse["default"])(date));
      });
    });
    it('calls #_pushUpdate', function () {
      instance._pushUpdate = jest.fn();

      instance._pushNoticeUpdate = function () {};

      instance.handleOnDayClick(mockEvent);
      expect(instance._pushUpdate).toHaveBeenCalledTimes(1);
    });
    it('calls #_pushNoticeUpdate', function () {
      instance._pushUpdate = function () {};

      instance._pushNoticeUpdate = jest.fn();
      instance.handleOnDayClick(mockEvent);
      expect(instance._pushNoticeUpdate).toHaveBeenCalledTimes(1);
      expect(instance._pushNoticeUpdate).toHaveBeenCalledWith(null);
    });
  });
  describe('#handleOnDisabledDayClick', function () {
    it('calls prop #onNoticeChange', function () {
      instance.handleOnDisabledDayClick(mockEvent);
      expect(props.onNoticeChange).toHaveBeenCalledTimes(1);
      expect(props.onNoticeChange).toHaveBeenCalledWith('disabled_day_click');
    });
  });
  describe('#_getMinDate', function () {
    describe('when `minDate` is `undefined`', function () {
      it('returns `calcStartDate`', function () {
        props = getProps({
          rangeLimit: 5
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        instance = wrapper.instance();
        instance._selectionStart = date;
        expect(instance._getMinDate()).toEqual((0, _sub_days["default"])(date, 5));
      });
    });
    describe('when `minDate` is defined', function () {
      describe('when `minDate` is before `calcStartDate`', function () {
        it('returns `calcStartDate`', function () {
          props = getProps({
            minDate: '2016-12-12',
            rangeLimit: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          instance = wrapper.instance();
          instance._selectionStart = date;
          expect(instance._getMinDate()).toEqual((0, _sub_days["default"])(date, 5));
        });
      });
      describe('when `minDate` is after `calcStartDate`', function () {
        it('returns `minDate`', function () {
          props = getProps({
            minDate: '2017-01-15',
            rangeLimit: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          instance = wrapper.instance();
          instance._selectionStart = date;
          expect(instance._getMinDate()).toEqual('2017-01-15');
        });
      });
    });
  });
  describe('#_getMaxDate', function () {
    describe('when `maxDate` is `undefined`', function () {
      it.only('returns `calcEndDate`', function () {
        props = getProps({
          rangeLimit: 5
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        instance = wrapper.instance();
        instance._selectionStart = date;
        expect(instance._getMaxDate()).toEqual((0, _add_days["default"])(date, 5));
      });
    });
    describe('when `maxDate` is defined', function () {
      describe('when `maxDate` is before `calcEndDate`', function () {
        it('returns `maxDate`', function () {
          props = getProps({
            maxDate: '2017-01-03',
            rangeLimit: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          instance = wrapper.instance();
          instance._selectionStart = date;
          expect(instance._getMaxDate()).toEqual('2017-01-03');
        });
      });
      describe('when `maxDate` is after `calcEndDate`', function () {
        it('returns `calcEndDate`', function () {
          props = getProps({
            maxDate: '2017-01-15',
            rangeLimit: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          instance = wrapper.instance();
          instance._selectionStart = date;
          expect(instance._getMaxDate()).toEqual((0, _add_days["default"])(date, 5));
        });
      });
    });
  });
  describe('#render', function () {
    it('renders <Month />', function () {
      expect(wrapper).toMatchSnapshot();
    });
    describe('when `_selectionInProgress` is `true` and prop `rangeLimit` is defined', function () {
      it('renders <Month />', function () {
        wrapper.setState({
          maxDate: new Date(2015, 10, 15),
          minDate: new Date(2015, 5, 15),
          rangeLimit: 5
        });
        instance._selectionStart = new Date(2015, 6, 15);
        instance._selectionInProgress = true;
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `disabledIntervals` is `[]`', function () {
      it('renders <Month />', function () {
        props = getProps({
          disabledIntervals: []
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `month` has 4 weeks', function () {
      it('renders <Month />', function () {
        props = getProps({
          activeMonth: new Date(2010, 1, 15)
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `month` has 5 weeks', function () {
      it('renders <Month />', function () {
        props = getProps({
          activeMonth: new Date(2015, 5, 15)
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `month` has 6 weeks', function () {
      it('renders <Month />', function () {
        props = getProps({
          activeMonth: new Date(2015, 7, 15)
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `minNumberOfWeeks` is defined', function () {
      describe('when prop `activeMonth` has less weeks than defined', function () {
        it('renders <Month />', function () {
          props = getProps({
            activeMonth: new Date(2010, 1, 15),
            minNumberOfWeeks: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          expect(wrapper).toMatchSnapshot();
        });
      });
      describe('when prop `activeMonth` has the same number of weeks as defined', function () {
        it('renders <Month />', function () {
          props = getProps({
            activeMonth: new Date(2015, 5, 15),
            minNumberOfWeeks: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          expect(wrapper).toMatchSnapshot();
        });
      });
      describe('when prop `activeMonth` has more weeks than as defined', function () {
        it('renders <Month />', function () {
          props = getProps({
            activeMonth: new Date(2015, 7, 15),
            minNumberOfWeeks: 5
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
    describe('when prop `disableDaysOfWeek` is defined', function () {
      it('renders <Month />', function () {
        props = getProps({
          disableDaysOfWeek: true
        });
        wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe('when prop `minDate` and `maxDate` are defined', function () {
      describe("when prop `rangeLimit` doesn't exceed `minDate` and `maxDate`", function () {
        it('renders <Month />', function () {
          props = getProps({
            maxDate: new Date(2015, 7, 23),
            minDate: new Date(2015, 7, 12),
            rangeLimit: 10
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          expect(wrapper).toMatchSnapshot();
        });
      });
      describe('when prop `rangeLimit` exceed `minDate` and `maxDate`', function () {
        it('renders <Month />', function () {
          props = getProps({
            maxDate: new Date(2015, 7, 31),
            minDate: new Date(2015, 7, 1),
            rangeLimit: 10
          });
          wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Month["default"], props));
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
  });
});

var getProps = function getProps() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    activeMonth: new Date(2015, 7, 17),
    blockClassName: 'example-class',
    mode: 'range',
    onChange: jest.fn(),
    onDayMouseEnter: jest.fn(),
    onNoticeChange: jest.fn(),
    today: new Date(2015, 7, 17),
    weekStartsOn: 1,
    // TODO: remove and use shallow randering instead
    renderDaysOfWeek: function renderDaysOfWeek() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: Math.random()
      });
    },
    renderWeek: function renderWeek() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: Math.random()
      });
    }
  }, overrides);
};