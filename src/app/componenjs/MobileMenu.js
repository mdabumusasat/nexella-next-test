"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MobileMenu = function MobileMenu(_ref) {
  var extraClassName = _ref.extraClassName;
  var _useState = (0, _react.useState)({
      status: false,
      key: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var _useState3 = (0, _react.useState)({
      status: false,
      key: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    isSubActive = _useState4[0],
    setSubIsActive = _useState4[1];
  var handleClick = function handleClick(key) {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: null
      });
    } else {
      setIsActive({
        status: true,
        key: key
      });
    }
  };
  var handleSubClick = function handleSubClick(key) {
    if (isSubActive.key === key) {
      setSubIsActive({
        status: false,
        key: null
      });
    } else {
      setSubIsActive({
        status: true,
        key: key
      });
    }
  };
  return /*#__PURE__*/React.createElement("ul", {
    className: "navigation ".concat(extraClassName || "")
  }, /*#__PURE__*/React.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "Home"), /*#__PURE__*/React.createElement("ul", {
    className: isActive.key === 1 ? "d-block" : "d-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "Home Layout 1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/index-2"
  }, "Home Layout 2")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/index-3"
  }, "Home Layout 3")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/index-4"
  }, "Home Layout 4"))), /*#__PURE__*/React.createElement("div", {
    className: isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn",
    onClick: function onClick() {
      return handleClick(1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-angle-down"
  }))), /*#__PURE__*/React.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "Pages"), /*#__PURE__*/React.createElement("ul", {
    className: isActive.key === 2 ? "d-block" : "d-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-about"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-faq"
  }, "Faq")), /*#__PURE__*/React.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "Team"), /*#__PURE__*/React.createElement("ul", {
    className: isSubActive.key === 3 ? "d-block" : "d-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-team"
  }, "Team List")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-team-details"
  }, "Team Details"))), /*#__PURE__*/React.createElement("div", {
    className: isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn",
    onClick: function onClick() {
      return handleSubClick(3);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-angle-down"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-testimonial"
  }, "Testimonials")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-error"
  }, "404"))), /*#__PURE__*/React.createElement("div", {
    className: isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn",
    onClick: function onClick() {
      return handleClick(2);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-angle-down"
  }))), /*#__PURE__*/React.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "Services"), /*#__PURE__*/React.createElement("ul", {
    className: isActive.key === 3 ? "d-block" : "d-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-services"
  }, "Services")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-service-details"
  }, "Services Details"))), /*#__PURE__*/React.createElement("div", {
    className: isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn",
    onClick: function onClick() {
      return handleClick(3);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-angle-down"
  }))), /*#__PURE__*/React.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "News"), /*#__PURE__*/React.createElement("ul", {
    className: isActive.key === 5 ? "d-block" : "d-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-blog"
  }, "News Grid")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-blog-details"
  }, "News Details"))), /*#__PURE__*/React.createElement("div", {
    className: isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn",
    onClick: function onClick() {
      return handleClick(5);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-angle-down"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/page-contact"
  }, "Contact")));
};
var _default = exports.default = MobileMenu;