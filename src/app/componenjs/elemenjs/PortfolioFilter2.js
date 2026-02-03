"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PortfolioFilter2;
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function PortfolioFilter2() {
  var isotopeContainer = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)("*"),
    _useState2 = _slicedToArray(_useState, 2),
    filterKey = _useState2[0],
    setFilterKey = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    isotopeInstance = _useState4[0],
    setIsotopeInstance = _useState4[1];
  (0, _react.useEffect)(function () {
    if (typeof window !== 'undefined') {
      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('isotope-layout'));
      }).then(function (_ref) {
        var Isotope = _ref.default;
        if (isotopeContainer.current) {
          var instance = new Isotope(isotopeContainer.current, {
            itemSelector: ".masonry-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".masonry-item"
            },
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: false
            }
          });
          setIsotopeInstance(instance);
        }
      }).catch(function (error) {
        console.error('Failed to load Isotope:', error);
      });
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (isotopeInstance) {
      isotopeInstance.arrange({
        filter: filterKey === "*" ? "*" : ".".concat(filterKey)
      });
    }
  }, [filterKey, isotopeInstance]);
  var handleFilterKeyChange = function handleFilterKeyChange(key) {
    return function () {
      setFilterKey(key);
    };
  };
  var activeBtn = function activeBtn(value) {
    return value === filterKey ? "filter active" : "filter";
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "filters clearfix"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "filter-tabs filter-btns clearfix"
  }, /*#__PURE__*/React.createElement("li", {
    className: activeBtn("*"),
    onClick: handleFilterKeyChange("*")
  }, " All "), /*#__PURE__*/React.createElement("li", {
    className: activeBtn("cat-1"),
    onClick: handleFilterKeyChange("cat-1")
  }, "Cyber"), /*#__PURE__*/React.createElement("li", {
    className: activeBtn("cat-2"),
    onClick: handleFilterKeyChange("cat-2")
  }, "Digital"), /*#__PURE__*/React.createElement("li", {
    className: activeBtn("cat-3"),
    onClick: handleFilterKeyChange("cat-3")
  }, "Software"), /*#__PURE__*/React.createElement("li", {
    className: activeBtn("cat-4"),
    onClick: handleFilterKeyChange("cat-4")
  }, "Technology"), /*#__PURE__*/React.createElement("li", {
    className: activeBtn("cat-5"),
    onClick: handleFilterKeyChange("cat-5")
  }, "Development"))), /*#__PURE__*/React.createElement("div", {
    className: "items-container row",
    ref: isotopeContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-2 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/1.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Show Piece")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$32.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-2 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Leather Belt")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$52.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-2 cat-4 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/3.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Sunglasses")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$43.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-3 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/4.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Backpack")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$22.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-3 cat-5 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/4.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Hand Watch")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$34.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-2 cat-3 cat-4 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/3.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Party Bag")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$52.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-2 cat-5 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Coffee Mug")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$25.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "product-block masonry-item small-column all cat-1 cat-4 cat-5 product lenses mb-50 col-lg-4 col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/inner/products/1.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Smart Watch")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$30.00"), /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star"
  })))))));
}