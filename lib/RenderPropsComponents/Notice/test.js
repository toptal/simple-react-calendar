"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Notice = _interopRequireDefault(require("./Notice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderNotice = function renderNotice() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_Notice["default"], props));
};

test('default render', function () {
  var _renderNotice = renderNotice({
    children: 'Example notice error',
    blockClassName: 'example-class-name'
  }),
      container = _renderNotice.container;

  expect(container).toMatchSnapshot();
});
describe('when no `children` defined', function () {
  test('renders null', function () {
    var _renderNotice2 = renderNotice({}),
        container = _renderNotice2.container;

    expect(container).toMatchSnapshot();
  });
});