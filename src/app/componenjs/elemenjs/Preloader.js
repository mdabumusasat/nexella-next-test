"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Preloader;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Preloader(_ref) {
  var onComplete = _ref.onComplete;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  (0, _react.useEffect)(function () {
    // Check if all critical resources are loaded
    var checkResourcesLoaded = function checkResourcesLoaded() {
      if (typeof window === "undefined") return false;

      // Check if document is ready
      if (document.readyState !== "complete") return false;

      // Check if all images are loaded
      var images = document.querySelectorAll("img");
      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        if (!img.complete) return false;
      }
      return true;
    };

    // If resources are already loaded, hide immediately
    if (checkResourcesLoaded()) {
      setIsLoading(false);
      onComplete === null || onComplete === void 0 || onComplete();
      return;
    }

    // Listen for load event
    var handleLoad = function handleLoad() {
      if (checkResourcesLoaded()) {
        setIsLoading(false);
        onComplete === null || onComplete === void 0 || onComplete();
      }
    };

    // Listen for DOMContentLoaded and window load
    window.addEventListener("load", handleLoad);
    document.addEventListener("DOMContentLoaded", handleLoad);

    // Fallback: Hide after maximum wait time (prevents infinite loading)
    var fallbackTimer = setTimeout(function () {
      setIsLoading(false);
      onComplete === null || onComplete === void 0 || onComplete();
    }, 3000);
    return function () {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);
  if (!isLoading) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "preloader"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 1000",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    id: "preloaderSvg",
    d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "preloader-heading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "load-text"
  }, /*#__PURE__*/React.createElement("span", null, "L"), /*#__PURE__*/React.createElement("span", null, "o"), /*#__PURE__*/React.createElement("span", null, "a"), /*#__PURE__*/React.createElement("span", null, "d"), /*#__PURE__*/React.createElement("span", null, "i"), /*#__PURE__*/React.createElement("span", null, "n"), /*#__PURE__*/React.createElement("span", null, "g"))));
}