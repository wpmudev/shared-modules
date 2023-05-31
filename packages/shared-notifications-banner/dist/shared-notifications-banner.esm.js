import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
var _excluded$1 = ["label", "icon", "iconRight", "design", "color", "className", "loading"];
var Button = function Button(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconRight = _ref.iconRight,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? 'solid' : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && !iconRight && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: 'sui-icon-' + icon,
    "aria-hidden": "true"
  }), label, icon && iconRight && '' !== icon && /*#__PURE__*/React.createElement("span", {
    className: 'sui-icon-' + icon,
    "aria-hidden": "true"
  }));
  className = "sui-button".concat(iconRight ? ' sui-button-icon-right' : '').concat(className ? ' ' + className : ''); // Set button color.

  switch (color) {
    case 'blue':
    case 'green':
    case 'red':
    case 'orange':
    case 'purple':
    case 'yellow':
    case 'white':
      className += ' sui-button-' + color;
      break;
    case 'gray':
    default:
      className += '';
      break;
  } // Set button style.

  switch (design) {
    case 'ghost':
    case 'outlined':
      className += ' sui-button-' + design;
      break;
    case 'solid':
    default:
      className += '';
      break;
  } // Set loading class.

  if (loading) {
    className += ' sui-button-onload';
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

var _templateObject;

// UTILS: Set devices size.
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
var Banner = {};

// UTILS: Create global styles.
Banner.Global = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n[class*=\"sui-2-\"] .sui-wrap {\n\n\t.sui-module-notice-banner {\n\n\t\t&__wrapper {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground-color: #fff;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 21px;\n\t\t\tline-height: 32px;\n\t\t\tletter-spacing: -0.5px;\n\t\t\tmargin: 0 0 8px;\n\n\t\t\t@media ", " {\n\t\t\t\tmargin: 0 0 4px;\n\t\t\t}\n\t\t}\n\n\t\t&__wrapper {\n\t\t\ttext-align: center;\n\t\t\tpadding: 25px;\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-flow: row wrap;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\n\t\t\t@media ", " {\n\t\t\t\tmargin-right: 30px\n\t\t\t}\n\n\t\t\t.sui-disclaimer {\n\t\t\t\tdisplay: none;\n\t\t\t\tcolor: #888;\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__close {\n\t\t\t&.sui-button-icon {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 25px;\n\t\t\t\tright: 25px;\n\t\t\t}\n\t\t}\n\n\t\t&__cta {\n\t\t\tpadding-top: 0;\n\n\t\t\t@media ", " {\n\t\t\t\tpadding-top: 12px;\n\t\t\t}\n\n\t\t\t.sui-disclaimer {\n\t\t\t\tdisplay: block;\n\t\t\t\tcolor: #888;\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.sui-button {\n\t\t\t\tmargin-right: 0;\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__cta-action {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\n\t\t\t.sui-button {\n\t\t\t\tmargin-right: 0 !important;\n\t\t\t\tmargin-top: 12px;\n\t\t\t\t\n\t\t\t\t@media ", " {\n\t\t\t\t\tmargin-right: 12px !important;\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\t\t}\n\n\t\t&__image {\n\t\t\tflex: 0 0 auto;\n\t\t\talign-self: flex-start;\n\t\t\tpadding: 0;\n\n\t\t\t+ div {\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tpadding-left: 0 !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 0 25px 0 0;\n\t\t\t}\n\t\t}\n\n\t\t&__body {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t\tmargin-top: 16px;\n\n\t\t\tp {\n\t\t\t\tmargin: 4px 0 0;\n\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.sui-disclaimer {\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 22px;\n\t\t\t\tmargin-top: 16px;\n\n\t\t\t\t@media ", " {\n\t\t\t\t\tmargin-top: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media ", " {\n\t\t\t\ttext-align: left;\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"])), device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.mobile, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet, device.tablet);

var _excluded = ["title", "image", "imageRetina", "imageAlt", "disclaimer", "buttonLabel", "buttonLink", "closeLabel", "onCloseClick", "onRemindLaterClick", "children"];
var NoticeBanner = function NoticeBanner(_ref) {
  var title = _ref.title,
    image = _ref.image,
    imageRetina = _ref.imageRetina,
    imageAlt = _ref.imageAlt,
    disclaimer = _ref.disclaimer,
    buttonLabel = _ref.buttonLabel,
    buttonLink = _ref.buttonLink,
    closeLabel = _ref.closeLabel,
    onCloseClick = _ref.onCloseClick,
    onRemindLaterClick = _ref.onRemindLaterClick,
    children = _ref.children,
    props = _objectWithoutProperties$1(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isClose = _useState2[0],
    setIsClose = _useState2[1];
  var closeOnClick = function closeOnClick(e) {
    setIsClose(true);
    onCloseClick(e);
  };
  var remindlaterOnClick = function remindlaterOnClick(e) {
    setIsClose(true);
    onRemindLaterClick(e);
  };
  var hasImage1x = null !== image && '' !== image;
  var hasImage2x = null !== imageRetina && '' !== imageRetina;
  var hasDisclaimer = null !== disclaimer && '' !== disclaimer;
  var hasTitle = null !== title && '' !== title;
  var hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
  var hasButtonLink = null !== buttonLink && '' !== buttonLink;
  var hasButton = hasButtonLabel && hasButtonLink;
  return !isClose && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Banner.Global, null), /*#__PURE__*/React.createElement("div", _extends({
    className: "sui-module-notice-banner__wrapper"
  }, props), hasImage1x && !hasImage2x && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || 'Plugin image',
    className: "sui-module-notice-banner__image",
    "aria-hidden": "true"
  }), hasImage1x && hasImage2x && /*#__PURE__*/React.createElement("img", {
    src: image,
    srcSet: image + ' 1x,' + imageRetina + ' 2x',
    alt: imageAlt || 'Plugin image',
    className: "sui-module-notice-banner__image",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sui-module-notice-banner__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sui-module-notice-banner__content"
  }, hasTitle && /*#__PURE__*/React.createElement("h2", {
    className: "sui-module-notice-banner__title"
  }, title), children, hasDisclaimer && /*#__PURE__*/React.createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer)), /*#__PURE__*/React.createElement("div", {
    className: "sui-module-notice-banner__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sui-module-notice-banner__cta-action"
  }, hasButton && /*#__PURE__*/React.createElement(Button, {
    label: buttonLabel,
    color: "purple",
    href: buttonLink,
    target: "_blank"
  }), hasButton && /*#__PURE__*/React.createElement(Button, {
    label: "Remind me later",
    design: "ghost",
    onClick: remindlaterOnClick
  })), hasDisclaimer && /*#__PURE__*/React.createElement("p", {
    className: "sui-disclaimer"
  }, "* ", disclaimer)), /*#__PURE__*/React.createElement("button", {
    className: "sui-button-icon sui-module-notice-banner__close",
    onClick: closeOnClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-close sui-sm",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, closeLabel || 'Close this offer')))));
};

export { NoticeBanner };
