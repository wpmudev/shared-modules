'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
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
      props = _objectWithoutProperties(_ref, ["label", "icon", "design", "color"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), label);
  var className = "sui-button"; // Set button color.

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


  if (props.loading) {
    className += " sui-button-onload";
  }

  if (props.href) {
    return /*#__PURE__*/React__default['default'].createElement("a", _extends$1({
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React__default['default'].createElement("button", _extends$1({
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
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

var Wrapper = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tdisplay: block;\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n"])));
var Header = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #8D00B1;\n\n\t.sui-button-icon {\n\t\tflex: 0 0 auto;\n\t\tmargin: 16px 20px !important;\n\n\t\t&:only-child {\n\t\t\tmargin-left: auto !important;\n\t\t}\n\t}\n"])));
var Ribbon = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tflex: 0 0 auto;\n\tposition: relative;\n\tmargin: 12px 0;\n\tpadding: 10px 23px 10px 15px;\n\tbackground-color: #FECF2F;\n\tcolor: #000;\n\tfont-size: 13px;\n\tline-height: 18px;\n\tfont-weight: bold;\n\tletter-spacing: normal;\n\n\t&:after {\n\t\tcontent: \" \";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tborder-width: 19px 12px;\n\t\tborder-style: solid;\n\t\tborder-color: #FECF2F;\n\t\tborder-right-color: #8D00B1;\n\t\tborder-left-width: 0;\n\t}\n\n\t@media ", " {\n\t\tpadding-right: 25px;\n\t\tfont-size: 14px;\n\t}\n"])), device.tablet);
var Title = styled__default['default'].h2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tmargin: 0 20px !important;\n\tpadding: 11px 0 !important;\n\tborder: 0 !important;\n\tcolor: #fff !important;\n\tfont-size: 13px !important;\n\tline-height: 21px !important;\n\tfont-weight: bold !important;\n\tletter-spacing: normal !important;\n\n\t& + & .sui-button-icon {\n\t\tmargin-left: 0 !important;\n\t}\n\n\t@media ", " {\n\t\tpadding: 20px 0 21px !important;\n\t\tfont-size: 16px !important;\n\t}\n"])), device.tablet);
var Body = styled__default['default'].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\ttext-align: center;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t}\n"])), device.tablet);
var Image = styled__default['default'].img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\tflex: 0 0 auto;\n\talign-self: flex-end;\n\tmargin: 0 10px;\n\tpadding: 0 30px;\n\n\t+ div {\n\n\t\t@media ", " {\n\t\t\tpadding-left: 0 !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet, device.tablet);
var Content = styled__default['default'].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\tpadding: 20px 20px 10px;\n\n\tp {\n\t\tmargin: 12px 0 0 !important;\n\t\tcolor: #666 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t&:first-child {\n\t\t\tmargin: 0 !important;\n\t\t}\n\n\t\t&.sui-disclaimer {\n\t\t\tdisplay: none;\n\t\t\tcolor: #888 !important;\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 30px;\n\t\ttext-align: left;\n\t}\n"])), device.tablet, device.tablet);
var Border = styled__default['default'].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\tdisplay: none;\n\talign-self: stretch;\n\tpadding: 30px 0;\n\n\tspan {\n\t\twidth: 1px;\n\t\theight: 100%;\n\t\tdisplay: block;\n\t\tbackground-color: #DDD;\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n"])), device.tablet);
var PriceWrapper = styled__default['default'].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tpadding: 10px 20px 30px;\n\ttext-align: center;\n\n\t.sui-button {\n\t\tmargin-top: 15px !important;\n\t\tmargin-right: 0 !important;\n\t}\n\n\t.sui-disclaimer {\n\t\tmargin: 20px 0 0 !important;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\n\t\t@media ", " {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpadding: 12px 30px 20px;\n\t}\n"])), device.tablet, device.tablet);
var PriceLabel = styled__default['default'].h3(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\tcolor: #666 !important;\n\tfont-size: 12px !important;\n\tline-height: 16px !important;\n\tfont-weight: 400 !important;\n\tletter-spacing: -0.23px !important;\n\n\t@media ", " {\n\t\ttext-transform: uppercase;\n\t}\n"])), device.tablet);
var Price = styled__default['default'].p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n\tfont-size: 15px !important;\n\tline-height: 40px !important;\n\tletter-spacing: -0.27px !important;\n\n\tspan {\n\t\tmargin-right: 6px;\n\t\tcolor: #FF6D6D;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: line-through;\n\t\tletter-spacing: -0.32px;\n\t}\n\n\tstrong {\n\t\tfont-size: 28px;\n\t\tfont-weight: bold;\n\t\tletter-spacing: -0.5px;\n\t}\n"])));

var NoticeOffer = /*#__PURE__*/function (_Component) {
  _inherits(NoticeOffer, _Component);

  var _super = _createSuper(NoticeOffer);

  function NoticeOffer(props) {
    var _this;

    _classCallCheck(this, NoticeOffer);

    _this = _super.call(this, props); // Call functions.

    _defineProperty(_assertThisInitialized(_this), "closeButtonClicked", function (e) {
      var noticeBox = e.currentTarget.closest(".sui-notice-offer"),
          event = new Event("noticeOfferClosed");
      noticeBox.dispatchEvent(event);
      noticeBox.remove();
    });

    _this.closeButtonClicked = _this.closeButtonClicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NoticeOffer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var title = this.props.title;
      var price = this.props.price;
      var discount = this.props.discount;
      var image1x = this.props.image;
      var image2x = this.props.imageRetina;
      var disclaimer = this.props.disclaimer;
      var buttonLabel = this.props.buttonLabel;
      var buttonLink = this.props.buttonLink;
      var calcPrice = price - discount / 100 * price;
      var newPrice = calcPrice.toFixed(0);
      var hasDiscount = null !== discount && "" !== discount && 0 !== discount || discount > 0;
      var hasImage1x = null !== image1x && "" !== image1x;
      var hasImage2x = null !== image2x && "" !== image2x;
      var hasDisclaimer = null !== disclaimer && "" !== disclaimer;
      var hasButtonLabel = null !== buttonLabel && '' !== buttonLabel;
      var hasButtonLink = null !== buttonLink && '' !== buttonLink;
      var hasButton = hasButtonLabel && hasButtonLink;
      return /*#__PURE__*/React__default['default'].createElement(Wrapper, _extends({
        className: "sui-notice-offer"
      }, this.props), /*#__PURE__*/React__default['default'].createElement(Header, null, hasDiscount && /*#__PURE__*/React__default['default'].createElement(Ribbon, null, discount, "% Off"), null !== title && '' !== title && /*#__PURE__*/React__default['default'].createElement(Title, null, title), /*#__PURE__*/React__default['default'].createElement("button", {
        className: "sui-button-icon sui-button-white",
        onClick: function onClick(e) {
          return _this2.closeButtonClicked(e);
        }
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        className: "sui-icon-close sui-sm",
        "aria-hidden": "true"
      }), /*#__PURE__*/React__default['default'].createElement("span", {
        className: "sui-screen-reader-text"
      }, "Close this offer"))), /*#__PURE__*/React__default['default'].createElement(Body, null, hasImage1x && !hasImage2x && /*#__PURE__*/React__default['default'].createElement(Image, {
        src: image1x,
        alt: "",
        "aria-hidden": "true"
      }), hasImage1x && hasImage2x && /*#__PURE__*/React__default['default'].createElement(Image, {
        src: image1x,
        srcSet: image1x + ' 1x,' + image2x + ' 2x',
        alt: "",
        "aria-hidden": "true"
      }), /*#__PURE__*/React__default['default'].createElement(Content, null, this.props.children, hasDisclaimer && /*#__PURE__*/React__default['default'].createElement("p", {
        className: "sui-disclaimer"
      }, "* ", disclaimer, " *")), /*#__PURE__*/React__default['default'].createElement(Border, null, /*#__PURE__*/React__default['default'].createElement("span", null)), /*#__PURE__*/React__default['default'].createElement(PriceWrapper, null, /*#__PURE__*/React__default['default'].createElement(PriceLabel, null, "Pay Only"), hasDiscount ? /*#__PURE__*/React__default['default'].createElement(Price, null, /*#__PURE__*/React__default['default'].createElement("span", null, "$", price), /*#__PURE__*/React__default['default'].createElement("strong", null, "$", newPrice), "/month") : /*#__PURE__*/React__default['default'].createElement(Price, null, /*#__PURE__*/React__default['default'].createElement("strong", null, "$", price), "/month"), hasButton && /*#__PURE__*/React__default['default'].createElement(Button, {
        label: buttonLabel,
        color: "purple",
        href: buttonLink,
        target: "_blank"
      }), hasDisclaimer && /*#__PURE__*/React__default['default'].createElement("p", {
        className: "sui-disclaimer"
      }, "* ", disclaimer, " *"))));
    }
  }]);

  return NoticeOffer;
}(React.Component);

exports.NoticeOffer = NoticeOffer;
