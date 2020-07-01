"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _is_same_month = _interopRequireDefault(require("date-fns/is_same_month"));

var _is_valid = _interopRequireDefault(require("date-fns/is_valid"));

var _start_of_month = _interopRequireDefault(require("date-fns/start_of_month"));

var helper = _interopRequireWildcard(require("../helper"));

var _consts = require("./consts");

var _Day = _interopRequireDefault(require("../RenderPropsComponents/Day"));

var _DayOfWeek = _interopRequireDefault(require("../RenderPropsComponents/DayOfWeek"));

var _month = _interopRequireDefault(require("./month"));

var _month_header = _interopRequireDefault(require("./month_header"));

var _Notice = _interopRequireDefault(require("../RenderPropsComponents/Notice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isValid = function isValid(date) {
  try {
    return (0, _is_valid["default"])(date);
  } catch (e) {
    return false;
  }
};

// TODO: FC Rewrite

/* eslint-disable react/require-optimization */
var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    _this.state = {
      activeMonth: _this._initialMonth(props),
      selection: null,
      shownNoticeType: null
    };
    return _this;
  } // TODO: FC Rewrite


  _createClass(Calendar, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var activeMonth = this.props.activeMonth;

      if (nextProps.activeMonth && !(0, _is_same_month["default"])(nextProps.activeMonth, activeMonth)) {
        this.setState({
          activeMonth: (0, _start_of_month["default"])(nextProps.activeMonth)
        });
      }
    }
  }, {
    key: "_initialMonth",
    value: function _initialMonth(props) {
      var _ref = props || this.props,
          selected = _ref.selected,
          activeMonth = _ref.activeMonth,
          mode = _ref.mode,
          today = _ref.today;

      if (isValid(activeMonth)) {
        return activeMonth;
      }

      if (selected) {
        var selectionStart = mode === 'single' ? selected : selected.start;

        if (isValid(selectionStart)) {
          return (0, _start_of_month["default"])(selectionStart);
        }
      }

      return (0, _start_of_month["default"])(today || new Date());
    }
  }, {
    key: "_switchMonth",
    value: function _switchMonth(date) {
      var onMonthChange = this.props.onMonthChange;

      if (typeof onMonthChange === 'function') {
        onMonthChange(date);
      } else {
        this.setState({
          activeMonth: date
        });
      }
    }
  }, {
    key: "_activeMonth",
    value: function _activeMonth() {
      var _this$props = this.props,
          onMonthChange = _this$props.onMonthChange,
          activeMonth = _this$props.activeMonth;

      if (onMonthChange) {
        return activeMonth;
      }
      /* eslint-disable react/destructuring-assignment */


      return this.state.activeMonth;
    }
  }, {
    key: "_highlight",
    value: function _highlight() {
      var highlighted = this.props.highlighted;
      if (!highlighted) return {
        end: null,
        start: null
      };
      var start = highlighted.start,
          end = highlighted.end;

      if (isValid(start) && isValid(end)) {
        return {
          end: end,
          start: start
        };
      }

      return {
        end: null,
        start: null
      };
    }
  }, {
    key: "_selection",
    value: function _selection() {
      var start = this._selectionStart();

      var end = this._selectionEnd();

      if (isValid(start) && isValid(end)) {
        return {
          end: end,
          start: start
        };
      }

      return {
        end: null,
        start: null
      };
    }
  }, {
    key: "_selectionStart",
    value: function _selectionStart() {
      return this._selectionDate('start');
    }
  }, {
    key: "_selectionEnd",
    value: function _selectionEnd() {
      return this._selectionDate('end');
    }
  }, {
    key: "_selectionDate",
    value: function _selectionDate(dateType) {
      var _this$props2 = this.props,
          selected = _this$props2.selected,
          onSelectionProgress = _this$props2.onSelectionProgress,
          mode = _this$props2.mode;
      var selection = this.state.selection;

      switch (mode) {
        case 'single':
          return selected;

        case 'range':
          if (!onSelectionProgress && selection) {
            return selection[dateType];
          }

          return selected && selected[dateType];
      }
    }
  }, {
    key: "_selectionChanged",
    value: function _selectionChanged(selection) {
      var start = selection.start,
          end = selection.end,
          inProgress = selection.inProgress;
      var _this$props3 = this.props,
          mode = _this$props3.mode,
          onSelect = _this$props3.onSelect,
          onSelectionProgress = _this$props3.onSelectionProgress;

      if (onSelect && start && (mode !== 'range' || !inProgress)) {
        onSelect(mode === 'single' ? start : {
          end: end,
          start: start
        });
      }

      if (mode === 'range') {
        if (onSelectionProgress) {
          onSelectionProgress(selection);
        } else {
          this.setState({
            selection: inProgress ? {
              end: end,
              start: start
            } : null
          });
        }
      }
    }
  }, {
    key: "_noticeChanged",
    value: function _noticeChanged(shownNoticeType) {
      this.setState({
        shownNoticeType: shownNoticeType
      });
    }
  }, {
    key: "_today",
    value: function _today() {
      /* eslint-disable react/destructuring-assignment */
      return this.props.today || new Date();
    }
  }, {
    key: "_renderMonth",
    value: function _renderMonth() {
      var _this$props4 = this.props,
          blockClassName = _this$props4.blockClassName,
          disableDaysOfWeek = _this$props4.disableDaysOfWeek,
          maxDate = _this$props4.maxDate,
          minDate = _this$props4.minDate,
          minNumberOfWeeks = _this$props4.minNumberOfWeeks,
          mode = _this$props4.mode,
          onDayHover = _this$props4.onDayHover,
          disabledIntervals = _this$props4.disabledIntervals,
          rangeLimit = _this$props4.rangeLimit,
          weekStartsOn = _this$props4.weekStartsOn,
          daysOfWeek = _this$props4.daysOfWeek,
          renderDay = _this$props4.renderDay,
          renderWeek = _this$props4.renderWeek,
          renderMonth = _this$props4.renderMonth,
          renderDaysOfWeek = _this$props4.renderDaysOfWeek,
          renderDayOfWeek = _this$props4.renderDayOfWeek,
          getDayFormatted = _this$props4.getDayFormatted,
          getISODate = _this$props4.getISODate;

      var selection = this._selection();

      var highlight = this._highlight();

      return (
        /*#__PURE__*/
        // @ts-ignore: No overload matches this call
        _react["default"].createElement(_month["default"], {
          customRender: renderMonth,
          renderDay: renderDay,
          renderWeek: renderWeek,
          renderDaysOfWeek: renderDaysOfWeek,
          renderDayOfWeek: renderDayOfWeek,
          activeMonth: this._activeMonth(),
          blockClassName: blockClassName,
          daysOfWeek: daysOfWeek,
          getDayFormatted: getDayFormatted,
          disableDaysOfWeek: disableDaysOfWeek,
          disabledIntervals: disabledIntervals,
          highlightedEnd: highlight.end,
          highlightedStart: highlight.start,
          maxDate: maxDate,
          minDate: minDate,
          minNumberOfWeeks: minNumberOfWeeks,
          mode: mode,
          onChange: this._selectionChanged.bind(this),
          onDayMouseEnter: onDayHover,
          onNoticeChange: this._noticeChanged.bind(this),
          rangeLimit: rangeLimit,
          selectedMax: selection.end,
          selectedMin: selection.start,
          today: this._today(),
          weekStartsOn: weekStartsOn,
          getISODate: getISODate
        })
      );
    }
  }, {
    key: "_renderMonthHeader",
    value: function _renderMonthHeader() {
      var _this$props5 = this.props,
          blockClassName = _this$props5.blockClassName,
          headerNextArrow = _this$props5.headerNextArrow,
          headerNextTitle = _this$props5.headerNextTitle,
          headerPrevArrow = _this$props5.headerPrevArrow,
          headerPrevTitle = _this$props5.headerPrevTitle,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate,
          _this$props5$MonthHea = _this$props5.MonthHeaderComponent,
          MonthHeaderComponent = _this$props5$MonthHea === void 0 ? _month_header["default"] : _this$props5$MonthHea,
          renderMonthHeader = _this$props5.renderMonthHeader;
      return (
        /*#__PURE__*/
        // @ts-ignore
        _react["default"].createElement(MonthHeaderComponent, {
          customRender: renderMonthHeader,
          activeMonth: this._activeMonth(),
          blockClassName: blockClassName,
          headerNextArrow: headerNextArrow,
          headerNextTitle: headerNextTitle,
          headerPrevArrow: headerPrevArrow,
          headerPrevTitle: headerPrevTitle,
          maxDate: maxDate,
          minDate: minDate,
          onMonthChange: this._switchMonth.bind(this)
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          blockClassName = _this$props6.blockClassName,
          customRender = _this$props6.customRender,
          getNoticeContent = _this$props6.getNoticeContent,
          _this$props6$renderNo = _this$props6.renderNotice,
          renderNotice = _this$props6$renderNo === void 0 ? function (props) {
        return /*#__PURE__*/_react["default"].createElement(_Notice["default"], props);
      } : _this$props6$renderNo;
      var shownNoticeType = this.state.shownNoticeType;

      var children = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderNotice({
        blockClassName: blockClassName,
        children: getNoticeContent(shownNoticeType)
      }), this._renderMonthHeader(), this._renderMonth());

      if (customRender) {
        return customRender(_objectSpread(_objectSpread({}, this.props), {}, {
          children: children
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: blockClassName
      }, children);
    }
  }]);

  return Calendar;
}(_react.Component);

exports["default"] = Calendar;

_defineProperty(Calendar, "defaultProps", {
  blockClassName: _consts.BLOCK_CLASS_NAME,
  daysOfWeek: _consts.DAYS_OF_WEEK,
  disableDaysOfWeek: false,
  getDayFormatted: helper.getDayFormatted,
  getISODate: helper.getISODate,
  getNoticeContent: helper.getNoticeContent,
  headerNextTitle: _consts.NEXT_MONTH_TITLE,
  headerPrevTitle: _consts.PREV_MONTH_TITLE,
  mode: 'single',
  renderDay: function renderDay(props) {
    return /*#__PURE__*/_react["default"].createElement(_Day["default"], props);
  },
  renderDayOfWeek: function renderDayOfWeek(props) {
    return /*#__PURE__*/_react["default"].createElement(_DayOfWeek["default"], props);
  },
  renderNotice: function renderNotice(props) {
    return /*#__PURE__*/_react["default"].createElement(_Notice["default"], props);
  },
  weekStartsOn: 1
});