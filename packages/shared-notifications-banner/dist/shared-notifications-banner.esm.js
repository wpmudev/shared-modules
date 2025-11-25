import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
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
