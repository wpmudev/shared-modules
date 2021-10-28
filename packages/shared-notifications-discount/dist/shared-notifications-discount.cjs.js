'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Button = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ["label", "icon", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, icon && "" !== icon && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), label);
  className = "sui-button".concat(className ? ' ' + className : ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = 'button';

  if (props.href) {
    htmlTag = 'a';
  } else if (props.htmlFor) {
    htmlTag = 'label';
  }

  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

var screen = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device = {
  mobile: "(min-width: ".concat(screen.mobile, "px)"),
  tablet: "(min-width: ".concat(screen.tablet, "px)"),
  laptop: "(min-width: ".concat(screen.laptop, "px)"),
  desktop: "(min-width: ".concat(screen.desktop, "px)")
};
var Discount = {}; // UTILS: Create global styles.

Discount.Global = styled.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n[class*=\"sui-2-\"] .sui-wrap {\n\n\t.sui-module-notice-discount {\n\n\t\t&__wrapper {\n\t\t\toverflow: hidden;\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 4px;\n\t\t\tbackground-color: #fff;\n\t\t}\n\n\t\t&__header {\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row wrap;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\tbackground-color: #8D00B1;\n\n\t\t\t.sui-button-icon {\n\t\t\t\tflex: 0 0 auto;\n\t\t\t\tmargin: 16px 20px !important;\n\n\t\t\t\t&:only-child {\n\t\t\t\t\tmargin-left: auto !important;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__ribbon {\n\t\t\tflex: 0 0 auto;\n\t\t\tposition: relative;\n\t\t\tmargin: 12px 0;\n\t\t\tpadding: 10px 23px 10px 15px;\n\t\t\tbackground-color: #FECF2F;\n\t\t\tcolor: #000;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 18px;\n\t\t\tfont-weight: bold;\n\t\t\tletter-spacing: normal;\n\n\t\t\t&:after {\n\t\t\t\tcontent: \" \";\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tborder-width: 19px 12px;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #FECF2F;\n\t\t\t\tborder-right-color: #8D00B1;\n\t\t\t\tborder-left-width: 0;\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tpadding-right: 25px;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t}\n\n\t\t&__title {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t\tmargin: 0 20px !important;\n\t\t\tpadding: 11px 0 !important;\n\t\t\tborder: 0 !important;\n\t\t\tcolor: #fff !important;\n\t\t\tfont-size: 13px !important;\n\t\t\tline-height: 21px !important;\n\t\t\tfont-weight: bold !important;\n\t\t\tletter-spacing: normal !important;\n\n\t\t\t& + & .sui-button-icon {\n\t\t\t\tmargin-left: 0 !important;\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tpadding: 20px 0 21px !important;\n\t\t\t\tfont-size: 16px !important;\n\t\t\t}\n\t\t}\n\n\t\t&__body {\n\t\t\ttext-align: center;\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-flow: row wrap;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\n\t\t&__image {\n\t\t\tdisplay: none;\n\t\t\tflex: 0 0 auto;\n\t\t\talign-self: flex-end;\n\t\t\tmargin: 0 10px;\n\t\t\tpadding: 0 30px;\n\n\t\t\t+ div {\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tpadding-left: 0 !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t\tpadding: 20px 20px 10px;\n\n\t\t\tp {\n\t\t\t\tmargin: 12px 0 0 !important;\n\t\t\t\tcolor: #666 !important;\n\t\t\t\tfont-size: 13px !important;\n\t\t\t\tline-height: 22px !important;\n\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin: 0 !important;\n\t\t\t\t}\n\n\t\t\t\t&.sui-disclaimer {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tcolor: #888 !important;\n\n\t\t\t\t\t@media ", " {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tpadding: 30px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t}\n\n\t\t&__border {\n\t\t\tdisplay: none;\n\t\t\talign-self: stretch;\n\t\t\tpadding: 30px 0;\n\n\t\t\tspan {\n\t\t\t\twidth: 1px;\n\t\t\t\theight: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t\tbackground-color: #DDD;\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\n\t\t&__price {\n\t\t\tmargin: 0 !important;\n\t\t\tcolor: #333 !important;\n\t\t\tfont-size: 15px !important;\n\t\t\tline-height: 40px !important;\n\t\t\tletter-spacing: -0.27px !important;\n\n\t\t\tspan {\n\t\t\t\tmargin-right: 6px;\n\t\t\t\tcolor: #FF6D6D;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-decoration: line-through;\n\t\t\t\tletter-spacing: -0.32px;\n\t\t\t}\n\n\t\t\tstrong {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tletter-spacing: -0.5px;\n\t\t\t}\n\n\t\t\t&-wrapper {\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 10px 20px 30px;\n\t\t\t\ttext-align: center;\n\n\t\t\t\t.sui-button {\n\t\t\t\t\tmargin-top: 15px !important;\n\t\t\t\t\tmargin-right: 0 !important;\n\t\t\t\t}\n\n\t\t\t\t.sui-disclaimer {\n\t\t\t\t\tmargin: 20px 0 0 !important;\n\t\t\t\t\tcolor: #888 !important;\n\t\t\t\t\tfont-size: 13px !important;\n\t\t\t\t\tline-height: 22px !important;\n\n\t\t\t\t\t@media ", " {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tpadding: 12px 30px 20px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&-label {\n\t\t\t\tcolor: #666 !important;\n\t\t\t\tfont-size: 12px !important;\n\t\t\t\tline-height: 16px !important;\n\t\t\t\tfont-weight: 400 !important;\n\t\t\t\tletter-spacing: -0.23px !important;\n\n\t\t\t\t@media ", " {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"])), device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet); // UTILS: Create styled elements.

Discount.Wrapper = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tdisplay: block;\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n"])));
Discount.Header = styled__default["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #8D00B1;\n\n\t.sui-button-icon {\n\t\tflex: 0 0 auto;\n\t\tmargin: 16px 20px !important;\n\n\t\t&:only-child {\n\t\t\tmargin-left: auto !important;\n\t\t}\n\t}\n"])));
Discount.Ribbon = styled__default["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tflex: 0 0 auto;\n\tposition: relative;\n\tmargin: 12px 0;\n\tpadding: 10px 23px 10px 15px;\n\tbackground-color: #FECF2F;\n\tcolor: #000;\n\tfont-size: 13px;\n\tline-height: 18px;\n\tfont-weight: bold;\n\tletter-spacing: normal;\n\n\t&:after {\n\t\tcontent: \" \";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tborder-width: 19px 12px;\n\t\tborder-style: solid;\n\t\tborder-color: #FECF2F;\n\t\tborder-right-color: #8D00B1;\n\t\tborder-left-width: 0;\n\t}\n\n\t@media ", " {\n\t\tpadding-right: 25px;\n\t\tfont-size: 14px;\n\t}\n"])), device.tablet);
Discount.Title = styled__default["default"].h2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tmargin: 0 20px !important;\n\tpadding: 11px 0 !important;\n\tborder: 0 !important;\n\tcolor: #fff !important;\n\tfont-size: 13px !important;\n\tline-height: 21px !important;\n\tfont-weight: bold !important;\n\tletter-spacing: normal !important;\n\n\t& + & .sui-button-icon {\n\t\tmargin-left: 0 !important;\n\t}\n\n\t@media ", " {\n\t\tpadding: 20px 0 21px !important;\n\t\tfont-size: 16px !important;\n\t}\n"])), device.tablet);
Discount.Body = styled__default["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\ttext-align: center;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t}\n"])), device.tablet);
Discount.Image = styled__default["default"].img(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\tflex: 0 0 auto;\n\talign-self: flex-end;\n\tmargin: 0 10px;\n\tpadding: 0 30px;\n\n\t+ div {\n\n\t\t@media ", " {\n\t\t\tpadding-left: 0 !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet, device.tablet);
Discount.Content = styled__default["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tpadding: 20px 20px 10px;\n\n\tp {\n\t\tmargin: 12px 0 0 !important;\n\t\tcolor: #666 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t&:first-child {\n\t\t\tmargin: 0 !important;\n\t\t}\n\n\t\t&.sui-disclaimer {\n\t\t\tdisplay: none;\n\t\t\tcolor: #888 !important;\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 30px;\n\t\ttext-align: left;\n\t}\n"])), device.tablet, device.tablet);
Discount.Border = styled__default["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\talign-self: stretch;\n\tpadding: 30px 0;\n\n\tspan {\n\t\twidth: 1px;\n\t\theight: 100%;\n\t\tdisplay: block;\n\t\tbackground-color: #DDD;\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet);
Discount.PriceWrapper = styled__default["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tpadding: 10px 20px 30px;\n\ttext-align: center;\n\n\t.sui-button {\n\t\tmargin-top: 15px !important;\n\t\tmargin-right: 0 !important;\n\t}\n\n\t.sui-disclaimer {\n\t\tmargin: 20px 0 0 !important;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t@media ", " {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 12px 30px 20px;\n\t}\n"])), device.tablet, device.tablet);
Discount.PriceLabel = styled__default["default"].h3(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n\tcolor: #666 !important;\n\tfont-size: 12px !important;\n\tline-height: 16px !important;\n\tfont-weight: 400 !important;\n\tletter-spacing: -0.23px !important;\n\n\t@media ", " {\n\t\ttext-transform: uppercase;\n\t}\n"])), device.tablet);
Discount.Price = styled__default["default"].p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n\tfont-size: 15px !important;\n\tline-height: 40px !important;\n\tletter-spacing: -0.27px !important;\n\n\tspan {\n\t\tmargin-right: 6px;\n\t\tcolor: #FF6D6D;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: line-through;\n\t\tletter-spacing: -0.32px;\n\t}\n\n\tstrong {\n\t\tfont-size: 28px;\n\t\tfont-weight: bold;\n\t\tletter-spacing: -0.5px;\n\t}\n"])));

var _excluded = ["title", "price", "priceTime", "discount", "image", "imageRetina", "imageAlt", "disclaimer", "priceLabel", "buttonLabel", "buttonLink", "closeLabel", "onCloseClick", "children"];
var NoticeDiscount = function NoticeDiscount(_ref) {
  var title = _ref.title,
      price = _ref.price,
      priceTime = _ref.priceTime,
      discount = _ref.discount,
      image = _ref.image,
      imageRetina = _ref.imageRetina,
      imageAlt = _ref.imageAlt,
      disclaimer = _ref.disclaimer,
      priceLabel = _ref.priceLabel,
      buttonLabel = _ref.buttonLabel,
      buttonLink = _ref.buttonLink,
      closeLabel = _ref.closeLabel,
      onCloseClick = _ref.onCloseClick,
      children = _ref.children,
      props = _objectWithoutProperties$1(_ref, _excluded);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isClose = _useState2[0],
      setIsClose = _useState2[1];

  var closeOnClick = function closeOnClick(e) {
    setIsClose(true);
    onCloseClick(e);
  };

  var calcPrice = price - discount / 100 * price;
  var newPrice = calcPrice.toFixed(0);
  var hasDiscount = null !== discount && '' !== discount && 0 !== discount || discount > 0;
  var hasImage1x = null !== image && '' !== image;
  var hasImage2x = null !== imageRetina && '' !== imageRetina;
  var hasDisclaimer = null !== disclaimer && '' !== disclaimer;
  var hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
  var hasButtonLink = null !== buttonLink && '' !== buttonLink;
  var hasButton = hasButtonLabel && hasButtonLink;
  return !isClose && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Discount.Global, null), /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: "sui-module-notice-discount__wrapper"
  }, props), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__header"
  }, hasDiscount && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__ribbon"
  }, discount, "% Off"), null !== title && '' !== title && /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "sui-module-notice-discount__title"
  }, title), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "sui-button-icon sui-button-white",
    onClick: closeOnClick
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-close sui-sm",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-screen-reader-text"
  }, closeLabel || 'Close this offer'))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__body"
  }, hasImage1x && !hasImage2x && /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    alt: imageAlt || 'Plugin image',
    className: "sui-module-notice-discount__image",
    "aria-hidden": "true"
  }), hasImage1x && hasImage2x && /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    srcSet: image + ' 1x,' + imageRetina + ' 2x',
    alt: imageAlt || 'Plugin image',
    className: "sui-module-notice-discount__image",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__content"
  }, children, hasDisclaimer && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__border"
  }, /*#__PURE__*/React__default["default"].createElement("span", null)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-module-notice-discount__price-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "sui-module-notice-discount__price-label"
  }, priceLabel || 'Pay Only'), hasDiscount ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-module-notice-discount__price"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "$", price), /*#__PURE__*/React__default["default"].createElement("strong", null, "$", newPrice), "/", priceTime || 'month') : /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-module-notice-discount__price"
  }, /*#__PURE__*/React__default["default"].createElement("strong", null, "$", price), "/", priceTime || 'month'), hasButton && /*#__PURE__*/React__default["default"].createElement(Button, {
    label: buttonLabel,
    color: "purple",
    href: buttonLink,
    target: "_blank"
  }), hasDisclaimer && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer, " *")))));
};

exports.NoticeDiscount = NoticeDiscount;
