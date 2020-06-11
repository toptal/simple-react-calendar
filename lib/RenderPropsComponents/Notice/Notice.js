"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayName = 'Notice';

var Notice = function Notice(_ref) {
  var blockClassName = _ref.blockClassName,
      children = _ref.children;
  if (!children) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(blockClassName, "-notice")
  }, children);
};

Notice.displayName = displayName;
var _default = Notice;
exports["default"] = _default;