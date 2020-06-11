"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _add_months = _interopRequireDefault(require("date-fns/add_months"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _is_after = _interopRequireDefault(require("date-fns/is_after"));

var _is_before = _interopRequireDefault(require("date-fns/is_before"));

var _start_of_month = _interopRequireDefault(require("date-fns/start_of_month"));

var _header_button = _interopRequireDefault(require("./header_button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// TODO: FC Rewrite

/* eslint-disable react/require-optimization */
var MonthHeader = /*#__PURE__*/function (_Component) {
  _inherits(MonthHeader, _Component);

  var _super = _createSuper(MonthHeader);

  function MonthHeader() {
    _classCallCheck(this, MonthHeader);

    return _super.apply(this, arguments);
  }

  _createClass(MonthHeader, [{
    key: "_switchMonth",
    value: function _switchMonth(offset) {
      var _this$props = this.props,
          onMonthChange = _this$props.onMonthChange,
          activeMonth = _this$props.activeMonth;
      onMonthChange((0, _add_months["default"])(activeMonth, offset));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          activeMonth = _this$props2.activeMonth,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          blockClassName = _this$props2.blockClassName,
          headerNextArrow = _this$props2.headerNextArrow,
          headerNextTitle = _this$props2.headerNextTitle,
          headerPrevArrow = _this$props2.headerPrevArrow,
          headerPrevTitle = _this$props2.headerPrevTitle,
          customRender = _this$props2.customRender;
      var prevEnabled = minDate ? (0, _is_before["default"])((0, _start_of_month["default"])(minDate), (0, _start_of_month["default"])(activeMonth)) : true;
      var nextEnabled = maxDate ? (0, _is_after["default"])((0, _start_of_month["default"])(maxDate), (0, _start_of_month["default"])(activeMonth)) : true;

      if (customRender) {
        return customRender(_objectSpread(_objectSpread({}, this.props), {}, {
          children: 'no content, please use activeMonth prop and custom buttons instead',
          nextEnabled: nextEnabled,
          prevEnabled: prevEnabled,
          switchMonth: this._switchMonth.bind(this)
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(blockClassName, "-month_header")
      }, /*#__PURE__*/_react["default"].createElement(_header_button["default"], {
        type: "prev",
        arrow: headerPrevArrow,
        title: headerPrevTitle,
        enabled: prevEnabled,
        onClick: this._switchMonth.bind(this, -1),
        blockClassName: blockClassName
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(blockClassName, "-month_header_title")
      }, (0, _format["default"])(activeMonth, 'MMMM YYYY')), /*#__PURE__*/_react["default"].createElement(_header_button["default"], {
        type: "next",
        arrow: headerNextArrow,
        title: headerNextTitle,
        enabled: nextEnabled,
        onClick: this._switchMonth.bind(this, 1),
        blockClassName: blockClassName
      }));
    }
  }]);

  return MonthHeader;
}(_react.Component);

exports["default"] = MonthHeader;