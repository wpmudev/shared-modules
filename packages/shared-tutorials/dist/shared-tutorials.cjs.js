'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$2(obj);
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}
function _classCallCheck$2$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$2$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$2$1(obj, key, value) {
  key = _toPropertyKey$1(key);
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
function _inherits$2$1(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$2$1(subClass, superClass);
}
function _getPrototypeOf$2$1(o) {
  _getPrototypeOf$2$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2$1(o);
}
function _setPrototypeOf$2$1(o, p) {
  _setPrototypeOf$2$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$2$1(o, p);
}
function _isNativeReflectConstruct$2$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized$2$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$2$1(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2$1(self);
}
function _createSuper$2$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2$1(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2$1(this, result);
  };
}
function _taggedTemplateLiteral$1$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _toPrimitive$1(input, hint) {
  if (_typeof$2(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _classCallCheck$1$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$1$2(obj, key, value) {
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
function _inherits$1$1(subClass, superClass) {
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
  if (superClass) _setPrototypeOf$1$1(subClass, superClass);
}
function _getPrototypeOf$1$1(o) {
  _getPrototypeOf$1$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1$1(o);
}
function _setPrototypeOf$1$1(o, p) {
  _setPrototypeOf$1$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1$1(o, p);
}
function _isNativeReflectConstruct$1$1() {
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
function _assertThisInitialized$1$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$1$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1$1(self);
}
function _createSuper$1$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1$1(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1$1(this, result);
  };
}
function _defineProperty$1$1$1(obj, key, value) {
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
function ownKeys$1(object, enumerableOnly) {
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
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1$1$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
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
var ButtonIcon$1 = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? "solid" : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$1(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);
  var loader = /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

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
  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};
var Notifications$1 = /*#__PURE__*/function (_Component) {
  _inherits$1$1(Notifications, _Component);
  var _super = _createSuper$1$1(Notifications);
  function Notifications(props) {
    var _this;
    _classCallCheck$1$1(this, Notifications);
    _this = _super.call(this, props);
    _defineProperty$1$2(_assertThisInitialized$1$1(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });
    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$1$1(_this));
    return _this;
  }
  _createClass$1$1(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var hide = this.state.hide;
      var classMain = "sui-notice";
      var classIcon = "sui-notice-icon sui-md";
      switch (this.props.type) {
        case "info":
        case "success":
        case "warning":
        case "error":
        case "upsell":
          classMain += " sui-notice-" + this.props.type;
          classIcon += " sui-icon-info";
          break;
        case "loading":
          classIcon += " sui-icon-loader sui-loading";
          break;
        default:
          classIcon += " sui-icon-info";
          break;
      }
      var message = /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$1, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));
      if (!hide) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: classMain
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }
      return null;
    }
  }]);
  return Notifications;
}(React.Component);
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$3(obj, key, value) {
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
function _inherits$3(subClass, superClass) {
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
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$3(o);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$3(o, p);
}
function _isNativeReflectConstruct$3() {
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
function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$3(self);
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$3(this, result);
  };
}
function _taggedTemplateLiteral$2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _templateObject8$1() {
  var data = _taggedTemplateLiteral$2(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"]);
  _templateObject8$1 = function _templateObject8() {
    return data;
  };
  return data;
}
function _templateObject7$1() {
  var data = _taggedTemplateLiteral$2(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"]);
  _templateObject7$1 = function _templateObject7() {
    return data;
  };
  return data;
}
function _templateObject6$2() {
  var data = _taggedTemplateLiteral$2(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"]);
  _templateObject6$2 = function _templateObject6() {
    return data;
  };
  return data;
}
function _templateObject5$2() {
  var data = _taggedTemplateLiteral$2(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"]);
  _templateObject5$2 = function _templateObject5() {
    return data;
  };
  return data;
}
function _templateObject4$2() {
  var data = _taggedTemplateLiteral$2(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: url(", ");\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"]);
  _templateObject4$2 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3$1$1() {
  var data = _taggedTemplateLiteral$2(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);
  _templateObject3$1$1 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2$1$1() {
  var data = _taggedTemplateLiteral$2(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);
  _templateObject2$1$1 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject$1$1() {
  var data = _taggedTemplateLiteral$2(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);
  _templateObject$1$1 = function _templateObject() {
    return data;
  };
  return data;
}
var aria$1$1 = aria$1$1 || {};
aria$1$1.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
var screen$1$1 = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device$1$1 = {
  mobile: "(min-width: ".concat(screen$1$1.mobile, "px)"),
  tablet: "(min-width: ".concat(screen$1$1.tablet, "px)"),
  laptop: "(min-width: ".concat(screen$1$1.laptop, "px)"),
  desktop: "(min-width: ".concat(screen$1$1.desktop, "px)")
};
var PostWrapper$1 = styled__default["default"].div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject$1$1(), function (props) {
  return props.banner ? "overflow: hidden;" : "";
}, function (props) {
  return props.banner ? "display: flex;" : "";
}, function (props) {
  return props.banner ? "flex-flow: column nowrap;" : "";
}, function (props) {
  return props.banner ? "20px 20px 30px" : "10px";
}, function (props) {
  return props.banner ? "box-shadow: 0 0 0 1px #E6E6E6;" : "";
}, function (props) {
  return props.banner ? "transform: scale(1.02);" : "background-color: #FAFAFA;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1$1.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : "";
}, function (props) {
  return props.banner ? "@media ".concat(device$1$1.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : "";
}, function (props) {
  return props.banner ? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;" : "";
}, device$1$1.tablet, function (props) {
  return props.banner ? "min-height: 100%;" : "padding: 15px;";
});
var PostHeader$1 = styled__default["default"].div(_templateObject2$1$1());
var PostFooter$1 = styled__default["default"].div(_templateObject3$1$1());
var FeaturedImage$1 = styled__default["default"].div.attrs(function () {
  return {
    tabIndex: "-1",
    "aria-hidden": true
  };
})(_templateObject4$2(), function (props) {
  return props.banner ? "" : "width: 66px;";
}, function (props) {
  return props.banner ? "140px" : "54px";
}, function (props) {
  return props.banner ? "-20px -20px 20px" : "0 10px 0 0";
}, function (props) {
  return props.banner ? "" : "border-radius: 4px;";
}, function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.src || "none";
});
var PostTitle$1 = styled__default["default"].h3(_templateObject5$2(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "0 0 10px" : "0";
}, function (props) {
  return props.banner ? "" : "-webkit-line-clamp: 2;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1$1.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : "";
});
var PostTime$1 = styled__default["default"].p(_templateObject6$2(), function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : "";
});
var Excerpt$1 = styled__default["default"].div(_templateObject7$1(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "3" : "2";
});
var ReadMore$1 = styled__default["default"].p(_templateObject8$1(), function (props) {
  return props.banner ? "" : "margin: 4px 0 0;";
});
var Post$1 = /*#__PURE__*/function (_Component) {
  _inherits$3(Post, _Component);
  var _super = _createSuper$3(Post);
  function Post(props) {
    var _this;
    _classCallCheck$3(this, Post);
    _this = _super.call(this, props);
    _defineProperty$3(_assertThisInitialized$3(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;
      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });
    _defineProperty$3(_assertThisInitialized$3(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;
      switch (key) {
        case aria$1$1.KeyCode.RETURN:
          _this.openLink(e);
          break;
      }
    });
    _this.state = {
      media: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized$3(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$3(_this));
    return _this;
  }
  _createClass$3(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/media/";
      var QUERY_ID = this.props.media; // GET media using fetch.

      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          media: data.guid.rendered
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        media = _this$state.media,
        error = _this$state.error,
        isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "Read article";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "min read";
      var PostImage = ""; // Empty.

      if (this.props.image) {
        PostImage = /*#__PURE__*/React__default["default"].createElement(FeaturedImage$1, _extends$1({
          src: this.props.image,
          alt: ""
        }, this.props));
      } else {
        if (error) {
          PostImage = error.message;
        } else if (!isLoaded) {
          PostImage = /*#__PURE__*/React__default["default"].createElement("p", {
            style: {
              textAlign: 'center'
            }
          }, /*#__PURE__*/React__default["default"].createElement("span", {
            className: "sui-icon-loader sui-loading",
            "aria-hidden": "true"
          }), /*#__PURE__*/React__default["default"].createElement("span", {
            className: "sui-screen-reader-text"
          }, "Image is loading"));
        } else {
          PostImage = /*#__PURE__*/React__default["default"].createElement(FeaturedImage$1, _extends$1({
            src: media
          }, this.props));
        }
      }
      if (this.props.banner) {
        return /*#__PURE__*/React__default["default"].createElement(PostWrapper$1, this.props, PostImage, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default["default"].createElement(PostTitle$1, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.title
          }
        }), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default["default"].createElement(Excerpt$1, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.excerpt
          }
        }), /*#__PURE__*/React__default["default"].createElement(PostFooter$1, {
          banner: true
        }, /*#__PURE__*/React__default["default"].createElement(ReadMore$1, {
          banner: true
        }, read_article), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default["default"].createElement(PostTime$1, {
          banner: true
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-clock sui-sm",
          style: {
            verticalAlign: "middle",
            marginRight: 5
          },
          "aria-hidden": "true"
        }), this.props.time, " ", min_read)));
      }
      return /*#__PURE__*/React__default["default"].createElement(PostWrapper$1, this.props, /*#__PURE__*/React__default["default"].createElement(PostHeader$1, null, PostImage, /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          minWidth: "1px",
          flex: 1
        }
      }, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default["default"].createElement(PostTitle$1, {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default["default"].createElement(PostTime$1, null, "*", this.props.time, " ", min_read))), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default["default"].createElement(Excerpt$1, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React__default["default"].createElement(ReadMore$1, null, read_article));
    }
  }]);
  return Post;
}(React.Component);
var _templateObject$2, _templateObject2$2, _templateObject3$2;
var aria$2 = aria$2 || {};
aria$2.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
var screen$2 = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device$2 = {
  mobile: "(min-width: ".concat(screen$2.mobile, "px)"),
  tablet: "(min-width: ".concat(screen$2.tablet, "px)"),
  laptop: "(min-width: ".concat(screen$2.laptop, "px)"),
  desktop: "(min-width: ".concat(screen$2.desktop, "px)")
};
var ListWrapper$1 = styled__default["default"].ul(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$1$1(["\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tmargin: -15px;\n\t}\n"])), device$2.tablet);
var ListItem$1 = styled__default["default"].li(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral$1$1(["\n\tdisplay: block;\n\tmargin: 0 0 20px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 50%;\n\t\tmargin: 0;\n\t\tflex: 0 0 auto;\n\t\tpadding: 15px;\n\t}\n\n\t@media ", " {\n\t\twidth: 33.33%;\n\t}\n\n\t@media ", " {\n\t\twidth: 25%;\n\t}\n\n\t@media (min-width: 1800px) {\n\t\t.sui-tutorials--page li {\n\t\t\twidth: 20%;\n\t\t}\n\t}\n"])), device$2.tablet, device$2.laptop, device$2.desktop);
var Link$1 = styled__default["default"].a.attrs(function (props) {
  return {
    href: props.viewAll,
    target: "_blank"
  };
})(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral$1$1(["\n\tmargin-top: 1px;\n\tmargin-right: 23px;\n\tfont-size: 13px;\n\tline-height: 22px;\n\tletter-spacing: -0.2px;\n\n\t[class*=\"sui-icon-\"] {\n\t\tmargin-right: 5px;\n\n\t\t&:before {\n\t\t\tcolor: inherit;\n\t\t}\n\t}\n\n\t@media (max-width: ", "px) {\n\t\tdisplay: none;\n\t}\n"])), screen$2.mobile);
var TutorialsList = /*#__PURE__*/function (_Component) {
  _inherits$2$1(TutorialsList, _Component);
  var _super = _createSuper$2$1(TutorialsList);
  function TutorialsList(props) {
    var _this;
    _classCallCheck$2$1(this, TutorialsList);
    _this = _super.call(this, props);
    _defineProperty$2$1(_assertThisInitialized$2$1(_this), "_isMounted", false);
    _defineProperty$2$1(_assertThisInitialized$2$1(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;
      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });
    _defineProperty$2$1(_assertThisInitialized$2$1(_this), "keyNavigate", function (direction) {
      var focusedPost = document.activeElement.closest(".sui-tutorial");

      // Abort if the focused element doesn't have a .sui-tutorial parent.
      if (!focusedPost) {
        return;
      }
      var newFocusedPost;
      if ("prev" === direction) {
        newFocusedPost = focusedPost.previousElementSibling;
        // We reached the start of the list.
        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest("ul").lastElementChild;
        }
      } else {
        newFocusedPost = focusedPost.nextElementSibling;
        // We reached the end of the list.
        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest("ul").firstElementChild;
        }
      }
      newFocusedPost.firstElementChild.focus();
    });
    _defineProperty$2$1(_assertThisInitialized$2$1(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;
      switch (key) {
        case aria$2.KeyCode.RETURN:
          _this.openLink(e);
          break;
        case aria$2.KeyCode.LEFT:
          _this.keyNavigate("prev");
          break;
        case aria$2.KeyCode.RIGHT:
          _this.keyNavigate("next");
          break;
      }
    });
    _this.state = {
      posts: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized$2$1(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$2$1(_this));
    return _this;
  }
  _createClass$2$1(TutorialsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this._isMounted = true;
      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/posts?tutorials_categories=";
      var QUERY_ID = this.props.category;

      // GET posts using fetch.
      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          posts: data
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        posts = _this$state.posts,
        error = _this$state.error,
        isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var loading = translate && translate[0].loading ? translate[0].loading : "Loading tutorials...";
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "";
      var view_all = translate && translate[0].view_all ? translate[0].view_all : "View all";
      var params = this.props.postLinkParams && '' !== this.props.postLinkParams ? true : false;
      var listPosts = posts.map(function (post) {
        return /*#__PURE__*/React__default["default"].createElement(ListItem$1, {
          key: post.id,
          className: "sui-tutorial"
        }, /*#__PURE__*/React__default["default"].createElement(Post$1, {
          banner: true,
          role: "link",
          "data-href": params ? "".concat(post.link, "?").concat(_this3.props.postLinkParams) : "".concat(post.link),
          title: post.title.rendered,
          time: post.meta.blog_reading_time,
          excerpt: post.excerpt.rendered,
          media: post.featured_media,
          translate: [{
            read_article: read_article,
            min_read: min_read
          }],
          onClick: function onClick(e) {
            return _this3.openLink(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this3.handleKeydown(e);
          }
        }));
      });
      if (error) {
        return /*#__PURE__*/React__default["default"].createElement(Notifications$1, {
          type: "error",
          message: error.message
        });
      } else if (!isLoaded) {
        return /*#__PURE__*/React__default["default"].createElement(Notifications$1, {
          type: "loading",
          message: loading
        });
      } else {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-box"
        }, this.props.title && /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-box-header"
        }, /*#__PURE__*/React__default["default"].createElement("h3", {
          className: "sui-box-title"
        }, this.props.title), this.props.viewAll && /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-actions-right"
        }, /*#__PURE__*/React__default["default"].createElement(Link$1, this.props, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-open-new-window sui-sm",
          "aria-hidden": "true"
        }), view_all))), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-box-body",
          style: {
            backgroundColor: "#FAFAFA",
            borderBottomRightRadius: "4px",
            borderBottomLeftRadius: "4px"
          }
        }, /*#__PURE__*/React__default["default"].createElement(ListWrapper$1, null, listPosts)));
      }
    }
  }]);
  return TutorialsList;
}(React.Component);

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey(key);
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
function _inherits$2(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$2(o, p);
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _toPrimitive(input, hint) {
  if (_typeof$2(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
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
function _inherits$1(subClass, superClass) {
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
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}
function _isNativeReflectConstruct$1() {
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
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1(self);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _defineProperty$1$1(obj, key, value) {
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
        _defineProperty$1$1(target, key, source[key]);
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
var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? "solid" : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);
  var loader = /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

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
  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};
var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$1(Notifications, _Component);
  var _super = _createSuper$1(Notifications);
  function Notifications(props) {
    var _this;
    _classCallCheck$1(this, Notifications);
    _this = _super.call(this, props);
    _defineProperty$1(_assertThisInitialized$1(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });
    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$1(_this));
    return _this;
  }
  _createClass$1(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var hide = this.state.hide;
      var classMain = "sui-notice";
      var classIcon = "sui-notice-icon sui-md";
      switch (this.props.type) {
        case "info":
        case "success":
        case "warning":
        case "error":
        case "upsell":
          classMain += " sui-notice-" + this.props.type;
          classIcon += " sui-icon-info";
          break;
        case "loading":
          classIcon += " sui-icon-loader sui-loading";
          break;
        default:
          classIcon += " sui-icon-info";
          break;
      }
      var message = /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));
      if (!hide) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: classMain
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }
      return null;
    }
  }]);
  return Notifications;
}(React.Component);
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
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"]);
  _templateObject8 = function _templateObject8() {
    return data;
  };
  return data;
}
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"]);
  _templateObject7 = function _templateObject7() {
    return data;
  };
  return data;
}
function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"]);
  _templateObject6$1 = function _templateObject6() {
    return data;
  };
  return data;
}
function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"]);
  _templateObject5$1 = function _templateObject5() {
    return data;
  };
  return data;
}
function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: url(", ");\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"]);
  _templateObject4$1 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);
  _templateObject3$1 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);
  _templateObject2$1 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);
  _templateObject$1 = function _templateObject() {
    return data;
  };
  return data;
}
var aria$1 = aria$1 || {};
aria$1.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
var screen$1 = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device$1 = {
  mobile: "(min-width: ".concat(screen$1.mobile, "px)"),
  tablet: "(min-width: ".concat(screen$1.tablet, "px)"),
  laptop: "(min-width: ".concat(screen$1.laptop, "px)"),
  desktop: "(min-width: ".concat(screen$1.desktop, "px)")
};
var PostWrapper = styled__default["default"].div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject$1(), function (props) {
  return props.banner ? "overflow: hidden;" : "";
}, function (props) {
  return props.banner ? "display: flex;" : "";
}, function (props) {
  return props.banner ? "flex-flow: column nowrap;" : "";
}, function (props) {
  return props.banner ? "20px 20px 30px" : "10px";
}, function (props) {
  return props.banner ? "box-shadow: 0 0 0 1px #E6E6E6;" : "";
}, function (props) {
  return props.banner ? "transform: scale(1.02);" : "background-color: #FAFAFA;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : "";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : "";
}, function (props) {
  return props.banner ? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;" : "";
}, device$1.tablet, function (props) {
  return props.banner ? "min-height: 100%;" : "padding: 15px;";
});
var PostHeader = styled__default["default"].div(_templateObject2$1());
var PostFooter = styled__default["default"].div(_templateObject3$1());
var FeaturedImage = styled__default["default"].div.attrs(function () {
  return {
    tabIndex: "-1",
    "aria-hidden": true
  };
})(_templateObject4$1(), function (props) {
  return props.banner ? "" : "width: 66px;";
}, function (props) {
  return props.banner ? "140px" : "54px";
}, function (props) {
  return props.banner ? "-20px -20px 20px" : "0 10px 0 0";
}, function (props) {
  return props.banner ? "" : "border-radius: 4px;";
}, function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.src || "none";
});
var PostTitle = styled__default["default"].h3(_templateObject5$1(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "0 0 10px" : "0";
}, function (props) {
  return props.banner ? "" : "-webkit-line-clamp: 2;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : "";
});
var PostTime = styled__default["default"].p(_templateObject6$1(), function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : "";
});
var Excerpt = styled__default["default"].div(_templateObject7(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "3" : "2";
});
var ReadMore = styled__default["default"].p(_templateObject8(), function (props) {
  return props.banner ? "" : "margin: 4px 0 0;";
});
var Post = /*#__PURE__*/function (_Component) {
  _inherits(Post, _Component);
  var _super = _createSuper(Post);
  function Post(props) {
    var _this;
    _classCallCheck(this, Post);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;
      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;
      switch (key) {
        case aria$1.KeyCode.RETURN:
          _this.openLink(e);
          break;
      }
    });
    _this.state = {
      media: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/media/";
      var QUERY_ID = this.props.media; // GET media using fetch.

      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          media: data.guid.rendered
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        media = _this$state.media,
        error = _this$state.error,
        isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "Read article";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "min read";
      var PostImage = ""; // Empty.

      if (this.props.image) {
        PostImage = /*#__PURE__*/React__default["default"].createElement(FeaturedImage, _extends({
          src: this.props.image,
          alt: ""
        }, this.props));
      } else {
        if (error) {
          PostImage = error.message;
        } else if (!isLoaded) {
          PostImage = /*#__PURE__*/React__default["default"].createElement("p", {
            style: {
              textAlign: 'center'
            }
          }, /*#__PURE__*/React__default["default"].createElement("span", {
            className: "sui-icon-loader sui-loading",
            "aria-hidden": "true"
          }), /*#__PURE__*/React__default["default"].createElement("span", {
            className: "sui-screen-reader-text"
          }, "Image is loading"));
        } else {
          PostImage = /*#__PURE__*/React__default["default"].createElement(FeaturedImage, _extends({
            src: media
          }, this.props));
        }
      }
      if (this.props.banner) {
        return /*#__PURE__*/React__default["default"].createElement(PostWrapper, this.props, PostImage, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default["default"].createElement(PostTitle, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.title
          }
        }), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default["default"].createElement(Excerpt, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.excerpt
          }
        }), /*#__PURE__*/React__default["default"].createElement(PostFooter, {
          banner: true
        }, /*#__PURE__*/React__default["default"].createElement(ReadMore, {
          banner: true
        }, read_article), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default["default"].createElement(PostTime, {
          banner: true
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-clock sui-sm",
          style: {
            verticalAlign: "middle",
            marginRight: 5
          },
          "aria-hidden": "true"
        }), this.props.time, " ", min_read)));
      }
      return /*#__PURE__*/React__default["default"].createElement(PostWrapper, this.props, /*#__PURE__*/React__default["default"].createElement(PostHeader, null, PostImage, /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          minWidth: "1px",
          flex: 1
        }
      }, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default["default"].createElement(PostTitle, {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default["default"].createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default["default"].createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React__default["default"].createElement(ReadMore, null, read_article));
    }
  }]);
  return Post;
}(React.Component);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var aria = aria || {};
aria.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
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
var Box = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral$1(["\n\tposition: relative;\n\tpadding: 10px;\n\n\t@media ", " {\n\t\tpadding: 15px 25px;\n\t}\n"])), device.tablet);
var Link = styled__default["default"].a.attrs(function (_ref) {
  var viewAll = _ref.viewAll;
  return {
    href: viewAll,
    target: "_blank"
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral$1(["\n\tmargin-top: 1px;\n\tmargin-right: 23px;\n\tfont-size: 13px;\n\tline-height: 22px;\n\tletter-spacing: -0.2px;\n\n\t[class*=\"sui-icon-\"] {\n\t\tmargin-right: 5px;\n\n\t\t&:before {\n\t\t\tcolor: inherit;\n\t\t}\n\t}\n"])));
var ListWrapper = styled__default["default"].ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral$1(["\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\t@media ", " {\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\tflex-flow: row nowrap;\n\t}\n"])), device.tablet);
var ListItem = styled__default["default"].li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral$1(["\n\tdisplay: block;\n\tmargin: 0 0 20px;\n\tpadding: 0;\n\tborder: 0;\n\tlist-style: none;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 33.33%;\n\t\tflex: 0 0 auto;\n\t\tmargin: 0 1px 0 0;\n\t}\n\n\t@media ", " {\n\t\twidth: 25%;\n\t}\n"])), device.tablet, device.desktop);
var Navigation = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral$1(["\n\tdisplay: block;\n\n\tbutton[class*=\"sui-button-\"] {\n\t\tdisplay: none !important;\n\n\t\t@media ", " {\n\t\t\tdisplay: block !important;\n\t\t\tpointer-events: initial;\n\t\t}\n\t}\n\n\tbutton:not([class*=\"sui-button-\"]) {\n\t\twidth: 100%;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin: 20px 0 10px !important;\n\t\tpadding: 10px !important;\n\t\tborder: 0;\n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff;\n\t\tcolor: #17a8e3 !important;\n\t\ttransition: 0.2s ease all;\n\n\t\t* {\n\t\t\tpointer-events: none;\n\t\t}\n\n\t\tstrong {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 0 1 auto;\n\t\t\tcolor: inherit;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 22px;\n\t\t\tfont-weight: 500;\n\t\t}\n\n\t\t[class*=\"sui-icon-\"] {\n\t\t\tflex: 0 0 auto;\n\t\t\tmargin-left: 5px;\n\t\t\ttransition: 0.2s ease all;\n\n\t\t\t&:before {\n\t\t\t\tcolor: inherit;\n\t\t\t}\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground-color: #fafafa;\n\t\t}\n\n\t\t&:focus {\n\t\t\tbackground-color: #e1f6ff;\n\t\t}\n\n\t\t@media ", " {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t.open & {\n\t\tbutton:not([class*=\"sui-button-\"]) {\n\t\t\t[class*=\"sui-icon-\"] {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tpointer-events: none;\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 6px;\n\t\tleft: 6px;\n\t\ttransform: translateY(-50%);\n\t}\n"])), device.tablet, device.tablet, device.tablet);
var SkipArticles = styled__default["default"].a(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral$1(["\n\tposition: absolute;\n\ttop: -1000em;\n\tz-index: 1;\n\t&:focus {\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tline-height: normal;\n\t\tfont-size: 13px;\n\t\tfont-weight: 500;\n\t\tpadding: 15px 23px 14px;\n\t\tbackground: #fff;\n\t\tcolor: #1286b5;\n\t\toutline: none;\n\t\tborder-radius: 3px;\n\t\tbox-shadow: 0 2px 7px 0 rgb(0 0 0 / 5%), 0 0 2px 0 #17a8e3 !important;\n\t}\n"])));
var TutorialsSlider = /*#__PURE__*/function (_Component) {
  _inherits$2(TutorialsSlider, _Component);
  var _super = _createSuper$2(TutorialsSlider);
  function TutorialsSlider(props) {
    var _this;
    _classCallCheck$2(this, TutorialsSlider);
    _this = _super.call(this, props);
    _defineProperty$2(_assertThisInitialized$2(_this), "closeButtonClicked", function (e) {
      _this.hideComponent(e);
      if (_this.props.onCloseClick) {
        _this.props.onCloseClick(e);
      }
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "hideComponent", function (e) {
      var sliderBox = e.currentTarget.closest(".sui-tutorials-slider-box"),
        event = new Event("sliderTutorialClosed");
      sliderBox.dispatchEvent(event);
      sliderBox.remove();
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;
      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "keyNavigate", function (direction) {
      var focusedPost = document.activeElement.closest("li");

      // Abort if the focused element doesn't have a li parent.
      if (!focusedPost) {
        return;
      }
      var newFocusedPost;
      if ("prev" === direction) {
        newFocusedPost = focusedPost.previousElementSibling;
        // We reached the start of the list.
        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest("ul").lastElementChild;
        }
      } else {
        newFocusedPost = focusedPost.nextElementSibling;
        // We reached the end of the list.
        if (!newFocusedPost) {
          newFocusedPost = focusedPost.closest("ul").firstElementChild;
        }
      }
      newFocusedPost.firstElementChild.focus();
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;
      switch (key) {
        case aria.KeyCode.RETURN:
          _this.openLink(e);
          break;
        case aria.KeyCode.LEFT:
          _this.keyNavigate("prev");
          break;
        case aria.KeyCode.RIGHT:
          _this.keyNavigate("next");
          break;
      }
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "handleScroll", function (e) {
      var tutorialsContainer = e.currentTarget;
      var isFirstSlide = false,
        isLastSlide = false;

      // We're at the first slide.
      if (0 === tutorialsContainer.scrollLeft) {
        isFirstSlide = true;
      }

      // We're at the last slide.
      var getSum = tutorialsContainer.scrollLeft + tutorialsContainer.offsetWidth;
      if (tutorialsContainer.scrollWidth === getSum) {
        isLastSlide = true;
      }
      _this.setState({
        isFirstSlide: isFirstSlide,
        isLastSlide: isLastSlide
      });
    });
    _defineProperty$2(_assertThisInitialized$2(_this), "navigationButtonClicked", function (e) {
      var tutorialsContainer = e.currentTarget.parentNode.previousElementSibling;

      // Scroll to the next or previous "slide".
      if (e.currentTarget.classList.contains("next")) {
        tutorialsContainer.scrollLeft += tutorialsContainer.offsetWidth;
      } else {
        tutorialsContainer.scrollLeft -= tutorialsContainer.offsetWidth;
      }
    });
    _this.secondTutorial = /*#__PURE__*/React__default["default"].createRef();
    _this.state = {
      posts: [],
      error: null,
      isLoaded: false,
      isFirstSlide: true,
      isLastSlide: false,
      isShowingAll: window.innerWidth > screen.tablet
    };
    _this.closeButtonClicked = _this.closeButtonClicked.bind(_assertThisInitialized$2(_this));
    _this.hideComponent = _this.hideComponent.bind(_assertThisInitialized$2(_this));
    _this.openLink = _this.openLink.bind(_assertThisInitialized$2(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$2(_this));
    _this.navigationButtonClicked = _this.navigationButtonClicked.bind(_assertThisInitialized$2(_this));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  // TODO: Check this on RTL.

  // TODO: check this on RTL.
  _createClass$2(TutorialsSlider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Handle the focused element when clicking on "show more"/"show lesss" on mobile.
      if (this.state.isShowingAll !== prevState.isShowingAll && window.innerWidth < screen.tablet) {
        if (this.secondTutorial.current) {
          var tutorialToFocus;
          if (this.state.isShowingAll) {
            tutorialToFocus = this.secondTutorial.current.nextElementSibling;
          } else {
            tutorialToFocus = this.secondTutorial.current;
          }
          tutorialToFocus.firstElementChild.focus();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/posts?tutorials_categories=";
      var QUERY_ID = this.props.category;

      // GET posts using fetch.
      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          posts: data
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        posts = _this$state.posts,
        error = _this$state.error,
        isLoaded = _this$state.isLoaded,
        isShowingAll = _this$state.isShowingAll;
      var _this$props$skipTo = this.props.skipTo,
        skipTo = _this$props$skipTo === void 0 ? '' : _this$props$skipTo;
      var translate = this.props.translate;
      var loading = translate && translate[0].loading ? translate[0].loading : "Loading tutorials...";
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "";
      var prev_post = translate && translate[0].prev_post ? translate[0].prev_post : "Previous post";
      var next_post = translate && translate[0].next_post ? translate[0].next_post : "Next post";
      var view_all = translate && translate[0].view_all ? translate[0].view_all : "View all";
      var close_tutorials = translate && translate[0].close_tutorials ? translate[0].close_tutorials : "Close tutorials";
      var show_more = translate && translate[0].show_more ? translate[0].show_more : "Show more";
      var show_less = translate && translate[0].show_less ? translate[0].show_less : "Show less";
      var params = this.props.postLinkParams && '' !== this.props.postLinkParams ? true : false;
      var listPosts = posts.map(function (post, i) {
        return /*#__PURE__*/React__default["default"].createElement(ListItem, {
          key: post.id,
          className: "sui-tutorial" + (1 < i && !_this3.state.isShowingAll && " sui-hidden"),
          ref: 1 === i && _this3.secondTutorial
        }, /*#__PURE__*/React__default["default"].createElement(Post, {
          role: "link",
          "data-href": params ? "".concat(post.link, "?").concat(_this3.props.postLinkParams) : "".concat(post.link),
          title: post.title.rendered,
          time: post.meta.blog_reading_time,
          excerpt: post.excerpt.rendered,
          media: post.featured_media,
          translate: [{
            min_read: min_read,
            read_article: read_article
          }],
          onClick: function onClick(e) {
            return _this3.openLink(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this3.handleKeydown(e);
          }
        }));
      });
      if (error) {
        return /*#__PURE__*/React__default["default"].createElement(Notifications, {
          type: "error",
          message: error.message
        });
      } else if (!isLoaded) {
        return /*#__PURE__*/React__default["default"].createElement(Notifications, {
          type: "loading",
          message: loading
        });
      } else {
        var navigation = /*#__PURE__*/React__default["default"].createElement(Navigation, null, (3 < posts.length && window.innerWidth < screen.desktop || 4 < posts.length) && [/*#__PURE__*/React__default["default"].createElement("button", {
          key: "1",
          className: "sui-button-icon prev",
          onClick: function onClick(e) {
            return _this3.navigationButtonClicked(e);
          }
          // eslint-disable-next-line prettier/prettier
          ,

          style: {
            visibility: this.state.isFirstSlide ? "hidden" : "visible"
            // eslint-disable-next-line prettier/prettier
          }
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-chevron-left sui-sm",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-screen-reader-text"
        }, prev_post)), /*#__PURE__*/React__default["default"].createElement("button", {
          key: "2",
          className: "sui-button-icon next",
          onClick: function onClick(e) {
            return _this3.navigationButtonClicked(e);
          }
          // eslint-disable-next-line prettier/prettier
          ,

          style: {
            visibility: this.state.isLastSlide ? "hidden" : "visible"
            // eslint-disable-next-line prettier/prettier
          }
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-chevron-right sui-sm",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-screen-reader-text"
        }, next_post))], /*#__PURE__*/React__default["default"].createElement("button", {
          className: "sui-label",
          onClick: function onClick() {
            return _this3.setState({
              isShowingAll: !isShowingAll
            });
          }
        }, /*#__PURE__*/React__default["default"].createElement("strong", null, isShowingAll ? show_less : show_more), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-chevron-down sui-sm",
          "aria-hidden": "true"
        })));
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-box sui-tutorials-slider-box"
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-box-header"
        }, this.props.title && /*#__PURE__*/React__default["default"].createElement("h3", {
          className: "sui-box-title"
        }, this.props.title), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-actions-right"
        }, this.props.viewAll && /*#__PURE__*/React__default["default"].createElement(Link, {
          viewAll: this.props.viewAll
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-open-new-window sui-sm",
          "aria-hidden": "true"
        }), view_all), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "sui-tooltip",
          "data-tooltip": "Hide Tutorials"
          // eslint-disable-next-line prettier/prettier
          ,

          style: {
            marginRight: "-9px"
          }
        }, /*#__PURE__*/React__default["default"].createElement("button", {
          onClick: function onClick(e) {
            return _this3.closeButtonClicked(e);
          },
          className: "sui-button-icon"
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-close sui-md",
          "aria-hidden": "true"
        }), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-screen-reader-text"
        }, close_tutorials))))), /*#__PURE__*/React__default["default"].createElement(Box, {
          className: isShowingAll && "open"
        }, /*#__PURE__*/React__default["default"].createElement(SkipArticles, {
          href: skipTo
        }, "Skip articles"), /*#__PURE__*/React__default["default"].createElement(ListWrapper, {
          onScroll: this.handleScroll
        }, listPosts), 2 < posts.length && navigation));
      }
    }
  }]);
  return TutorialsSlider;
}(React.Component);

exports.TutorialsList = TutorialsList;
exports.TutorialsSlider = TutorialsSlider;
