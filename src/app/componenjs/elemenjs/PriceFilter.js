"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _rcSlider = _interopRequireDefault(require("rc-slider"));
require("rc-slider/assets/index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PriceFilter = function PriceFilter() {
  var _useState = (0, _react.useState)([0, 1000]),
    _useState2 = _slicedToArray(_useState, 2),
    price = _useState2[0],
    setPrice = _useState2[1];
  var handlePriceChange = function handlePriceChange(value) {
    if (Array.isArray(value) && value.length === 2) {
      setPrice([value[0], value[1]]);
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    alert("Selected Price Range: ".concat(price[0], " - ").concat(price[1]));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "range-slider"
  }, /*#__PURE__*/React.createElement(_rcSlider.default, {
    range: true,
    min: 0,
    max: 2000,
    value: price,
    onChange: handlePriceChange,
    allowCross: false
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "align-items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "property-amount",
    name: "field-name",
    value: "$".concat(price[0], " - $").concat(price[1]),
    readOnly: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Filter"
  })));
};
var _default = exports.default = PriceFilter;