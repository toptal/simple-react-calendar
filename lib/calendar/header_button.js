"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderButton = function HeaderButton(_ref) {
  var arrow = _ref.arrow,
      blockClassName = _ref.blockClassName,
      enabled = _ref.enabled,
      type = _ref.type,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _classnames["default"])("".concat(blockClassName, "-header_button"), "is-".concat(type), {
      'is-disabled': !enabled
    }),
    type: "button",
    disabled: !enabled,
    title: title,
    onClick: onClick
  }, arrow);
};

var _default = HeaderButton;
exports["default"] = _default;