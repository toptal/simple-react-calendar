"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNoticeMessage = function getNoticeMessage(_ref) {
  var type = _ref.type;

  switch (type) {
    case 'overlapping_with_disabled':
    case 'disabled_day_click':
      return 'Selected range must not overlap with disabled dates.';
  }
};

var Notice = function Notice(_ref2) {
  var blockClassName = _ref2.blockClassName,
      type = _ref2.type;
  var message = getNoticeMessage({
    type: type
  });
  return _react["default"].createElement("div", {
    className: "".concat(blockClassName, "-notice")
  }, message);
};

Notice.displayName = 'Notice';
var _default = Notice;
exports["default"] = _default;