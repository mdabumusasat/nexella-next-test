"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var PageTitle = function PageTitle(_ref) {
  var pageName = _ref.pageName;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "page-title",
    style: {
      backgroundImage: "url(/assets/images/inner/page-title-bg.png)"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-outer text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "title"
  }, pageName), /*#__PURE__*/_react.default.createElement("ul", {
    className: "page-breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, pageName)))));
};
var _default = exports.default = PageTitle;