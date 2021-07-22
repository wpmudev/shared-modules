import React, { useState } from 'react';
import styled from 'styled-components';

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
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

var Button = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1(_ref, ["label", "icon", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && "" !== icon && /*#__PURE__*/React.createElement("span", {
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

  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

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
}; // UTILS: Create elements.

var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tdisplay: block;\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n"])));
var Header = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #8D00B1;\n\n\t.sui-button-icon {\n\t\tflex: 0 0 auto;\n\t\tmargin: 16px 20px !important;\n\n\t\t&:only-child {\n\t\t\tmargin-left: auto !important;\n\t\t}\n\t}\n"])));
var Ribbon = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tflex: 0 0 auto;\n\tposition: relative;\n\tmargin: 12px 0;\n\tpadding: 10px 23px 10px 15px;\n\tbackground-color: #FECF2F;\n\tcolor: #000;\n\tfont-size: 13px;\n\tline-height: 18px;\n\tfont-weight: bold;\n\tletter-spacing: normal;\n\n\t&:after {\n\t\tcontent: \" \";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tborder-width: 19px 12px;\n\t\tborder-style: solid;\n\t\tborder-color: #FECF2F;\n\t\tborder-right-color: #8D00B1;\n\t\tborder-left-width: 0;\n\t}\n\n\t@media ", " {\n\t\tpadding-right: 25px;\n\t\tfont-size: 14px;\n\t}\n"])), device.tablet);
var Title = styled.h2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tmargin: 0 20px !important;\n\tpadding: 11px 0 !important;\n\tborder: 0 !important;\n\tcolor: #fff !important;\n\tfont-size: 13px !important;\n\tline-height: 21px !important;\n\tfont-weight: bold !important;\n\tletter-spacing: normal !important;\n\n\t& + & .sui-button-icon {\n\t\tmargin-left: 0 !important;\n\t}\n\n\t@media ", " {\n\t\tpadding: 20px 0 21px !important;\n\t\tfont-size: 16px !important;\n\t}\n"])), device.tablet);
var Body = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\ttext-align: center;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t}\n"])), device.tablet);
var Image = styled.img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\tflex: 0 0 auto;\n\talign-self: flex-end;\n\tmargin: 0 10px;\n\tpadding: 0 30px;\n\n\t+ div {\n\n\t\t@media ", " {\n\t\t\tpadding-left: 0 !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet, device.tablet);
var Content = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tpadding: 20px 20px 10px;\n\n\tp {\n\t\tmargin: 12px 0 0 !important;\n\t\tcolor: #666 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t&:first-child {\n\t\t\tmargin: 0 !important;\n\t\t}\n\n\t\t&.sui-disclaimer {\n\t\t\tdisplay: none;\n\t\t\tcolor: #888 !important;\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 30px;\n\t\ttext-align: left;\n\t}\n"])), device.tablet, device.tablet);
var Border = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\talign-self: stretch;\n\tpadding: 30px 0;\n\n\tspan {\n\t\twidth: 1px;\n\t\theight: 100%;\n\t\tdisplay: block;\n\t\tbackground-color: #DDD;\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet);
var PriceWrapper = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tpadding: 10px 20px 30px;\n\ttext-align: center;\n\n\t.sui-button {\n\t\tmargin-top: 15px !important;\n\t\tmargin-right: 0 !important;\n\t}\n\n\t.sui-disclaimer {\n\t\tmargin: 20px 0 0 !important;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t@media ", " {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 12px 30px 20px;\n\t}\n"])), device.tablet, device.tablet);
var PriceLabel = styled.h3(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\tcolor: #666 !important;\n\tfont-size: 12px !important;\n\tline-height: 16px !important;\n\tfont-weight: 400 !important;\n\tletter-spacing: -0.23px !important;\n\n\t@media ", " {\n\t\ttext-transform: uppercase;\n\t}\n"])), device.tablet);
var Price = styled.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n\tfont-size: 15px !important;\n\tline-height: 40px !important;\n\tletter-spacing: -0.27px !important;\n\n\tspan {\n\t\tmargin-right: 6px;\n\t\tcolor: #FF6D6D;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: line-through;\n\t\tletter-spacing: -0.32px;\n\t}\n\n\tstrong {\n\t\tfont-size: 28px;\n\t\tfont-weight: bold;\n\t\tletter-spacing: -0.5px;\n\t}\n"])));
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
      props = _objectWithoutProperties(_ref, ["title", "price", "priceTime", "discount", "image", "imageRetina", "imageAlt", "disclaimer", "priceLabel", "buttonLabel", "buttonLink", "closeLabel", "onCloseClick", "children"]);

  var _useState = useState(false),
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
  return !isClose && /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: "sui-notice-offer"
  }, props), /*#__PURE__*/React.createElement(Header, null, hasDiscount && /*#__PURE__*/React.createElement(Ribbon, null, discount, "% Off"), null !== title && '' !== title && /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement("button", {
    className: "sui-button-icon sui-button-white",
    onClick: closeOnClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-close sui-sm",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, closeLabel || 'Close this offer'))), /*#__PURE__*/React.createElement(Body, null, hasImage1x && !hasImage2x && /*#__PURE__*/React.createElement(Image, {
    src: image,
    alt: imageAlt || 'Plugin image',
    "aria-hidden": "true"
  }), hasImage1x && hasImage2x && /*#__PURE__*/React.createElement(Image, {
    src: image,
    srcSet: image + ' 1x,' + imageRetina + ' 2x',
    alt: imageAlt || 'Plugin image',
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Content, null, children, hasDisclaimer && /*#__PURE__*/React.createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer)), /*#__PURE__*/React.createElement(Border, null, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement(PriceWrapper, null, /*#__PURE__*/React.createElement(PriceLabel, null, priceLabel || 'Pay Only'), hasDiscount ? /*#__PURE__*/React.createElement(Price, null, /*#__PURE__*/React.createElement("span", null, "$", price), /*#__PURE__*/React.createElement("strong", null, "$", newPrice), "/", priceTime || 'month') : /*#__PURE__*/React.createElement(Price, null, /*#__PURE__*/React.createElement("strong", null, "$", price), "/", priceTime || 'month'), hasButton && /*#__PURE__*/React.createElement(Button, {
    label: buttonLabel,
    color: "purple",
    href: buttonLink,
    target: "_blank"
  }), hasDisclaimer && /*#__PURE__*/React.createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer, " *"))));
};

export { NoticeDiscount };
