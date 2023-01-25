import React, { Component, Fragment, Children } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

var isUndefined = function isUndefined(el) {
  return void 0 === el;
};

var isBoolean = function isBoolean(el) {
  if ('boolean' === typeof el) {
    return true;
  }

  return false;
};

var isEmpty = function isEmpty(el) {
  if ('' !== el) {
    return false;
  }

  return true;
};

var screen = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var minDevice = {
  mobile: "(min-width: ".concat(screen.mobile, "px)"),
  tablet: "(min-width: ".concat(screen.tablet, "px)"),
  laptop: "(min-width: ".concat(screen.laptop, "px)"),
  desktop: "(min-width: ".concat(screen.desktop, "px)")
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

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

var _excluded$3 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$2(_ref, _excluded$3);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

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

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

var _excluded$2 = ["login", "label"];

var _templateObject$2, _templateObject2$2, _templateObject3$2;

var Wrapper = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__wrapper {\n\tposition: relative;\n}\n"])));
var Button = styled.button(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__button {\n\tmargin: 0 !important;\n\tborder-radius: 50%;\n\tbackground: #E6E6E6;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: #E6E6E6;\n\t}\n\n\t.suicons {\n\t\tfont-size: 16px;\n\t}\n}\n"])));
var Flag = styled.span(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__flag {\n\tpointer-events: none;\n\twidth: 12px;\n\theight: 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: absolute;\n\tright: 1px;\n\tbottom: -4px;\n\tborder: 1px solid #FFF;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\ttext-align: center;\n\n\t[class*=\"sui-icon-\"] {\n\t\tmargin-top: 1px;\n\t\tfont-size: 6px;\n\n\t\t&:before {\n\t\t\tcolor: #FFF;\n\t\t}\n\t}\n}\n"])), function (props) {
  return props.login ? '#18BB4B' : '#FF6D6D';
}); // Build "Session Button" component.

var SessionButton = function SessionButton(_ref) {
  var login = _ref.login,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? {} : _ref$label,
      props = _objectWithoutProperties$1(_ref, _excluded$2);

  var connected = isBoolean(login) && login ? true : false;
  var loginLabel = !isUndefined(label.login) && !isEmpty(label.login) ? label.login : 'Connected';
  var logoutLabel = !isUndefined(label.logout) && !isEmpty(label.logout) ? label.logout : 'Not Connected';
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "ssm-session__wrapper"
  }, /*#__PURE__*/React.createElement(Button, _extends$1({
    className: "sui-button-icon ssm-session__button"
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "suicons suicons--".concat(connected ? 'user-alt' : 'logo'),
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, connected ? loginLabel : logoutLabel)), /*#__PURE__*/React.createElement(Flag, {
    login: connected,
    className: "ssm-session__flag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(connected ? 'check' : 'plug-disconnected'),
    "aria-hidden": "true"
  })));
}; // Publish required component(s).

var _excluded$1 = ["icon", "suicon", "href", "target", "children"];

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var StyledIcon$1 = styled.span(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__ddmenu-icon.suicons {\n\twidth: 24px;\n\tposition: relative;\n\ttop: 2px;\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n\tfont-size: 16px;\n\ttext-align: center;\n\n\t&:before {\n\t\tdisplay: block;\n\t}\n}\n"])));
var StyledButton = styled.button(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session--purple {\n\n\t&,\n\t&:hover,\n\t&:focus {\n\t\tcolor: #8D00B1;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #F9E1FF;\n\t}\n}\n"])));
var StyledLink = styled.a(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session--purple {\n\n\t&,\n\t&:hover,\n\t&:focus {\n\t\tcolor: #8D00B1;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #F9E1FF;\n\t}\n}\n"])));
var StyledInfo = styled.li(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tpadding: 0 15px 10px;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tline-height: 20px;\n\tletter-spacing: -0.25px;\n}\n"]))); // Build "Session Menu" component.

var SessionMenu = /*#__PURE__*/function (_Component) {
  _inherits$1(SessionMenu, _Component);

  var _super = _createSuper$1(SessionMenu);

  function SessionMenu(props) {
    var _this;

    _classCallCheck$1(this, SessionMenu);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$1(_this));
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized$1(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass$1(SessionMenu, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var name = this.props.name;
      var email = this.props.email;
      var pro = this.props.pro;
      var landing = this.props.landing;
      var hasName = !isUndefined(name) && !isEmpty(name) ? true : false;
      var hasEmail = !isUndefined(email) && !isEmpty(email) ? true : false;
      var isPro = isBoolean(pro) && pro ? true : false;
      return /*#__PURE__*/React.createElement("div", {
        ref: this.setWrapperRef,
        className: "sui-dropdown".concat(open ? ' open' : ''),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React.createElement(SessionButton, {
        login: true,
        "aria-expanded": open ? true : false,
        onClick: this.toggle
      }), /*#__PURE__*/React.createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, (hasName || hasEmail) && /*#__PURE__*/React.createElement(StyledInfo, null, name, /*#__PURE__*/React.createElement("br", null), email), /*#__PURE__*/React.createElement(MenuButton, {
        suicon: "logo",
        href: "https://wpmudev.com/hub2/",
        rel: "nofollow"
      }, "The Hub"), /*#__PURE__*/React.createElement(MenuButton, {
        icon: "target",
        href: "https://wpmudev.com/roadmap/",
        rel: "nofollow"
      }, "Product Roadmap"), isPro && /*#__PURE__*/React.createElement(MenuButton, {
        suicon: "lifesaver",
        href: "https://wpmudev.com/hub2/support",
        rel: "nofollow"
      }, "Support"), !isPro && /*#__PURE__*/React.createElement(MenuButton, _extends$1({
        suicon: "plugin-hummingbird",
        className: "ssm-session--purple"
      }, !isUndefined(landing) && {
        href: landing
      }, !isUndefined(landing) && {
        target: '_self'
      }), "Unlock Pro Features")));
    }
  }]);

  return SessionMenu;
}(Component);

var MenuIcon = function MenuIcon(_ref) {
  var icon = _ref.icon,
      suicon = _ref.suicon;
  var hasSuicon = !isUndefined(suicon) && !isEmpty(suicon) ? true : false;
  var style = 'ssm-session__ddmenu-icon';

  if (hasSuicon) {
    style += " suicons suicons--".concat(suicon);
  } else {
    style += " sui-icon-".concat(icon, " sui-sm");
  }

  return /*#__PURE__*/React.createElement(StyledIcon$1, {
    className: style,
    "aria-hidden": "true"
  });
};

var MenuButton = function MenuButton(_ref2) {
  var icon = _ref2.icon,
      suicon = _ref2.suicon,
      href = _ref2.href,
      target = _ref2.target,
      children = _ref2.children,
      props = _objectWithoutProperties$1(_ref2, _excluded$1);

  var isButton = isUndefined(href) ? true : false;
  var hasIcon = !isUndefined(icon) && !isEmpty(icon) || !isUndefined(suicon) && !isEmpty(suicon) ? true : false;
  var hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;
  return /*#__PURE__*/React.createElement("li", null, isButton && /*#__PURE__*/React.createElement(StyledButton, props, hasIcon && /*#__PURE__*/React.createElement(MenuIcon, {
    icon: icon,
    suicon: suicon
  }), children), !isButton && /*#__PURE__*/React.createElement(StyledLink, _extends$1({
    href: href,
    target: hasTarget ? target : '_blank'
  }, props), hasIcon && /*#__PURE__*/React.createElement(MenuIcon, {
    icon: icon,
    suicon: suicon
  }), children));
}; // Publish required component(s).

var SessionOn = function SessionOn(_ref) {
  var name = _ref.name,
      email = _ref.email,
      landing = _ref.landing,
      pro = _ref.pro;
  return /*#__PURE__*/React.createElement(SessionMenu, {
    name: name,
    email: email,
    pro: pro,
    landing: landing
  });
}; // Publish required component(s).

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

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
} // https://github.com/davidtheclark/no-scroll/blob/master/index.js


var isOn = false;
var scrollbarSize;
var scrollTop;

function getScrollbarSize() {
  if (typeof scrollbarSize !== 'undefined') return scrollbarSize;
  var doc = document.documentElement;
  var dummyScroller = document.createElement('div');
  dummyScroller.setAttribute('style', 'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;');
  doc.appendChild(dummyScroller);
  scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
  doc.removeChild(dummyScroller);
  return scrollbarSize;
}

function hasScrollbar() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

function on() {
  if (typeof document === 'undefined' || isOn) return;
  var doc = document.documentElement;
  scrollTop = window.pageYOffset;

  if (hasScrollbar()) {
    doc.style.width = 'calc(100% - ' + getScrollbarSize() + 'px)';
  } else {
    doc.style.width = '100%';
  }

  doc.style.position = 'fixed';
  doc.style.top = -scrollTop + 'px';
  doc.style.overflow = 'hidden';
  isOn = true;
}

function off() {
  if (typeof document === 'undefined' || !isOn) return;
  var doc = document.documentElement;
  doc.style.width = '';
  doc.style.position = '';
  doc.style.top = '';
  doc.style.overflow = '';

  if (typeof scrollTop === 'number') {
    window.scroll(0, scrollTop);
  }

  isOn = false;
} // https://github.com/davidtheclark/tabbable/blob/master/src/index.js


var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {
  return false;
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function getHTMLElements(root, selector) {
  var result = [];

  var _iterator = _createForOfIteratorHelper(root.querySelectorAll(selector)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;

      if (el instanceof HTMLElement) {
        result.push(el);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

function tabbable(el, optionalOptions) {
  var options = optionalOptions || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getHTMLElements(el, candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate;
  var candidateTabindex;

  for (var i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) {
      continue;
    }

    candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
}

function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node)) {
    return false;
  }

  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  } // Added this to make TypeScript work.


  if (!(node instanceof HTMLElement)) return false;

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  }

  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }

  return undefined;
}

function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  if (!node.ownerDocument) {
    // Need this for TypeScript to be OK with the rest of this code.
    // I guess we'll just assume that anything without an owner
    // document isn't tabbable...
    return false;
  } // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.


  var radioSet = Array.from(node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]'));
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function getHTMLElement(doc, selector) {
  var el = doc.querySelector(selector);

  if (!(el && el instanceof HTMLElement)) {
    throw new Error("No HTML element matches \"".concat(selector, "\"!"));
  }

  return el;
}

function createFocusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? getHTMLElement(doc, element) : element;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    clearTimeout(activeFocusDelay);
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay(function () {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function containerContains(el) {
    if (el && el instanceof Node) return container.contains(el);
    return false;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (containerContains(e.target)) return;

    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }

    e.preventDefault();
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (containerContains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (containerContains(e.target)) return;

    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: userOptions.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return window.setTimeout(fn, 0);
}

function isFocusableElement(el) {
  // This isn't actually a great way of testing this, but we want to
  // preserve the original behavior while also satisfying TypeScript.
  return el.focus;
}

var ReactFocusTrap = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactFocusTrap, _React$Component);

  var _super = _createSuper(ReactFocusTrap);

  function ReactFocusTrap(props) {
    var _this;

    _classCallCheck(this, ReactFocusTrap);

    _this = _super.call(this, props);

    _this.setFocusTrapElement = function (element) {
      _this.focusTrapElement = element;
    };

    if (typeof document !== 'undefined') {
      _this.previouslyFocusedElement = document.activeElement;
    }

    return _this;
  }

  _createClass(ReactFocusTrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // We need to hijack the returnFocusOnDeactivate option,
      // because React can move focus into the element before we arrived at
      // this lifecycle hook (e.g. with autoFocus inputs). So the component
      // captures the previouslyFocusedElement in componentWillMount,
      // then (optionally) returns focus to it in componentWillUnmount.
      var specifiedFocusTrapOptions = this.props.focusTrapOptions;
      var tailoredFocusTrapOptions = {
        returnFocusOnDeactivate: false
      };

      for (var optionName in specifiedFocusTrapOptions) {
        if (!Object.prototype.hasOwnProperty.call(specifiedFocusTrapOptions, optionName)) continue;
        if (optionName === 'returnFocusOnDeactivate') continue;
        tailoredFocusTrapOptions[optionName] = specifiedFocusTrapOptions[optionName];
      } // eslint-disable-next-line react/no-find-dom-node


      var focusTrapElementDOMNode = ReactDOM.findDOMNode(this.focusTrapElement);

      if (!(focusTrapElementDOMNode instanceof HTMLElement)) {
        throw new Error('Focus trap element DOM node is not an HTML element!');
      }

      this.focusTrap = this.props._createFocusTrap(focusTrapElementDOMNode, tailoredFocusTrapOptions);

      if (this.props.active) {
        this.focusTrap.activate();
      }

      if (this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.focusTrap) {
        throw new Error('Assertion failure!');
      }

      if (prevProps.active && !this.props.active) {
        var returnFocusOnDeactivate = this.props.focusTrapOptions.returnFocusOnDeactivate;
        var returnFocus = returnFocusOnDeactivate || false;
        var config = {
          returnFocus: returnFocus
        };
        this.focusTrap.deactivate(config);
      } else if (!prevProps.active && this.props.active) {
        this.focusTrap.activate();
      }

      if (prevProps.paused && !this.props.paused) {
        this.focusTrap.unpause();
      } else if (!prevProps.paused && this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.focusTrap) {
        throw new Error('Assertion failure!');
      }

      this.focusTrap.deactivate();

      if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false && this.previouslyFocusedElement && isFocusableElement(this.previouslyFocusedElement)) {
        this.previouslyFocusedElement.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var child = React.Children.only(this.props.children);

      var composedRefCallback = function composedRefCallback(element) {
        _this2.setFocusTrapElement(element);

        if (typeof child.ref === 'function') {
          child.ref(element);
        }
      };

      var childWithRef = /*#__PURE__*/React.cloneElement(child, {
        ref: composedRefCallback
      });
      return childWithRef;
    }
  }]);

  return ReactFocusTrap;
}(React.Component);

ReactFocusTrap.defaultProps = {
  active: true,
  paused: false,
  focusTrapOptions: {},
  _createFocusTrap: createFocusTrap
};

function displace(WrappedComponent, optionalOptions) {
  var options = optionalOptions || {};

  var Displaced = /*#__PURE__*/function (_React$Component) {
    _inherits(Displaced, _React$Component);

    var _super = _createSuper(Displaced);

    function Displaced() {
      _classCallCheck(this, Displaced);

      return _super.apply(this, arguments);
    }

    _createClass(Displaced, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.container = function () {
          var renderTo = options.renderTo;

          if (!renderTo) {
            var result = document.createElement('div');
            document.body.appendChild(result);
            return result;
          } else if (typeof renderTo === 'string') {
            var el = document.querySelector(renderTo);

            if (!el) {
              throw new Error("No element matches \"".concat(renderTo, "\"!"));
            }

            return el;
          } else {
            return renderTo;
          }
        }();

        this.forceUpdate();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!options.renderTo && this.container && this.container.parentNode) {
          this.container.parentNode.removeChild(this.container);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.mounted === false) return null;

        if (this.container) {
          return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(WrappedComponent, this.props, this.props.children), this.container);
        }

        return false;
      }
    }]);

    return Displaced;
  }(React.Component);

  return Displaced;
}

var Modal$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clearTimer", function () {
      var _this$timeout;

      (_this$timeout = _this.timeout) === null || _this$timeout === void 0 ? void 0 : _this$timeout.forEach(function (timer) {
        clearTimeout(timer);
      });
    });

    _this.getApplicationNode = function () {
      if (_this.props.getApplicationNode) return _this.props.getApplicationNode();
      return _this.props.applicationNode;
    };

    _this.checkUnderlayClick = function (event) {
      if (_this.dialogNode && event.target instanceof Node && _this.dialogNode.contains(event.target) || // If the click is on the scrollbar we don't want to close the modal.
      event.target instanceof Element && event.target.ownerDocument && (event.pageX > event.target.ownerDocument.documentElement.offsetWidth || event.pageY > event.target.ownerDocument.documentElement.offsetHeight)) return;

      _this.exit(event);
    };

    _this.checkDocumentKeyDown = function (event) {
      if (_this.props.escapeExits && (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)) {
        _this.exit(event);
      }
    };

    _this.exit = function (event) {
      if (_this.props.onExit) {
        _this.props.onExit(event);
      }
    };

    if (!_this.props.titleText && !_this.props.titleId) {
      throw new Error('react-aria-modal instances should have a `titleText` or `titleId`');
    }

    _this.timeout = [];
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      } // Timeout to ensure this happens *after* focus has moved


      var applicationNode = this.getApplicationNode();
      this.timeout.push(setTimeout(function () {
        if (applicationNode && applicationNode instanceof Element) {
          applicationNode.setAttribute("aria-hidden", "true");
        }
      }, 0));

      if (this.props.escapeExits) {
        this.timeout.push(this.addKeyDownListener());
      }

      if (this.props.scrollDisabled) {
        on();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollDisabled && !this.props.scrollDisabled) {
        off();
      } else if (!prevProps.scrollDisabled && this.props.scrollDisabled) {
        on();
      }

      if (this.props.escapeExits && !prevProps.escapeExits) {
        this.timeout.push(this.addKeyDownListener());
      } else if (!this.props.escapeExits && prevProps.escapeExits) {
        this.timeout.push(this.removeKeyDownListener());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrollDisabled) {
        off();
      }

      var applicationNode = this.getApplicationNode();

      if (applicationNode && applicationNode instanceof Element) {
        applicationNode.setAttribute('aria-hidden', 'false');
      }

      this.timeout.push(this.removeKeyDownListener());
      this.clearTimer();
    }
  }, {
    key: "addKeyDownListener",
    value: function addKeyDownListener() {
      var _this2 = this;

      return setTimeout(function () {
        document.addEventListener("keydown", _this2.checkDocumentKeyDown);
      });
    }
  }, {
    key: "removeKeyDownListener",
    value: function removeKeyDownListener() {
      var _this3 = this;

      return setTimeout(function () {
        document.removeEventListener("keydown", _this3.checkDocumentKeyDown);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var style = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	style = {
      // 		position: "fixed",
      // 		top: 0,
      // 		left: 0,
      // 		width: "100%",
      // 		height: "100%",
      // 		zIndex: 1050,
      // 		overflowX: "hidden",
      // 		overflowY: "auto",
      // 		WebkitOverflowScrolling: "touch",
      // 		textAlign: "center"
      // 	};
      // 	if (props.underlayColor) {
      // 		style.background = props.underlayColor;
      // 	}
      // 	if (props.underlayClickExits) {
      // 		style.cursor = "pointer";
      // 	}
      // }

      if (props.underlayStyle) {
        for (var key in props.underlayStyle) {
          if (!Object.prototype.hasOwnProperty.call(props.underlayStyle, key)) continue;
          style[key] = props.underlayStyle[key];
        }
      }

      var underlayProps = {
        className: props.underlayClass,
        style: style
      };

      if (props.underlayClickExits) {
        underlayProps.onMouseDown = this.checkUnderlayClick;
      }

      for (var prop in this.props.underlayProps) {
        underlayProps[prop] = this.props.underlayProps[prop];
      }

      var verticalCenterStyle = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	verticalCenterStyle = {
      // 		display: "inline-block",
      // 		height: "100%",
      // 		verticalAlign: "middle"
      // 	};
      // }

      var dialogStyle = {}; // @edited
      // if (props.includeDefaultStyles) {
      // 	dialogStyle = {
      // 		display: "inline-block",
      // 		textAlign: "left",
      // 		top: 0,
      // 		maxWidth: "100%",
      // 		cursor: "default",
      // 		outline: props.focusDialog ? 0 : undefined
      // 	};
      // 	if (props.verticallyCenter) {
      // 		dialogStyle.verticalAlign = "middle";
      // 		dialogStyle.top = 0;
      // 	}
      // }

      if (props.dialogStyle) {
        for (var _key in props.dialogStyle) {
          if (!Object.prototype.hasOwnProperty.call(props.dialogStyle, _key)) continue;
          dialogStyle[_key] = props.dialogStyle[_key];
        }
      }

      var dialogProps = {
        key: 'b',
        ref: function ref(el) {
          _this4.dialogNode = el;
        },
        role: props.alert ? 'alertdialog' : 'dialog',
        id: props.dialogId,
        className: props.dialogClass,
        style: dialogStyle
      };

      if (props.titleId) {
        dialogProps['aria-labelledby'] = props.titleId;
      } else if (props.titleText) {
        dialogProps['aria-label'] = props.titleText;
      }

      if (props.focusDialog) {
        dialogProps.tabIndex = -1;
      } // Apply data- and aria- attributes passed as props


      for (var _key2 in props) {
        if (/^(data-|aria-)/.test(_key2)) {
          dialogProps[_key2] = props[_key2];
        }
      }

      var childrenArray = [/*#__PURE__*/React.createElement('div', _objectSpread2({}, dialogProps), props.children)];

      if (props.verticallyCenter) {
        childrenArray.unshift( /*#__PURE__*/React.createElement('div', {
          key: 'a',
          style: verticalCenterStyle
        }));
      }

      var focusTrapOptions = props.focusTrapOptions || {};

      if (props.focusDialog || props.initialFocus) {
        focusTrapOptions.initialFocus = props.focusDialog ? "#".concat(this.props.dialogId) : props.initialFocus;
      }

      focusTrapOptions.escapeDeactivates = props.escapeExits;
      return /*#__PURE__*/React.createElement(ReactFocusTrap, {
        focusTrapOptions: focusTrapOptions,
        paused: props.focusTrapPaused
      }, /*#__PURE__*/React.createElement('div', _objectSpread2({}, underlayProps), childrenArray));
    }
  }]);

  return Modal;
}(React.Component);

Modal$1.defaultProps = {
  underlayProps: {},
  dialogId: 'react-aria-modal-dialog',
  // @edited
  // underlayClickExits: true,
  escapeExits: true,
  // @edited
  // underlayColor: "rgba(0,0,0,0.5)",
  // includeDefaultStyles: true,
  focusTrapPaused: false,
  scrollDisabled: true
};
var AriaModal = displace(Modal$1);

AriaModal.renderTo = function (input) {
  return displace(Modal$1, {
    renderTo: input
  });
};

var _excluded = ["modalContent", "triggerContent"];

var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
      triggerContent = _ref.triggerContent,
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isClosing = _React$useState4[0],
      setIsClosing = _React$useState4[1]; // States for sliders.


  var _React$useState5 = React.useState(props.firstSlide),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentSlide = _React$useState6[0],
      setCurrentSlide = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      slideDirection = _React$useState8[0],
      setSlideDirection = _React$useState8[1];

  React.useEffect(function () {
    if (!props.dialogId) {
      throw new Error('SUI Modal instances should have a `dialogId`');
    }
  }, [props.dialogId]);
  var isSlider = 'object' === _typeof(modalContent) && null !== modalContent;

  var openModal = function openModal() {
    return setIsOpen(true);
  };

  var closeModal = function closeModal() {
    // Close the modal with the exit animation and reset the slider.
    setIsClosing(true);
    setTimeout(function () {
      setIsOpen(false);
      setIsClosing(false);

      if (isSlider) {
        setSlideDirection(null);
        setCurrentSlide(props.firstSlide);
      }
    }, 300);
  };

  var slideTo = function slideTo(slide) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
    setCurrentSlide(slide);
    setSlideDirection(direction);
  };

  var _props$getApplication = props.getApplicationNode,
      getApplicationNode = _props$getApplication === void 0 ? function () {
    return document.getElementsByClassName('sui-wrap')[0];
  } : _props$getApplication;
  var dialogClass = "sui-modal-content sui-content-".concat(isClosing ? 'fade-out' : 'fade-in', " ").concat(props.dialogClass || '');
  var renderContent, modalSize, initialFocus;

  if (!isSlider) {
    // Not a slider, we can just render the content.
    renderContent = modalContent;
    modalSize = props.size;
    initialFocus = props.initialFocus || false;
  } else {
    // Render the content from the given slides.
    renderContent = modalContent[currentSlide].render;
    initialFocus = modalContent[currentSlide].focus || false;
    modalSize = modalContent[currentSlide].size; // Add the slide direction class when provided and we're not closing the modal.

    if (slideDirection && !isClosing) {
      dialogClass += "sui-modal-slide sui-active sui-fadein-".concat(slideDirection);
    }
  } // Use 'isOpen' as an alias of 'mounted' if not defined.


  if ('undefined' === typeof props.mounted) {
    props.mounted = isOpen;
  }

  var wrapper = !props.renderToNode ? '.sui-wrap' : props.renderToNode;
  var AltModal = wrapper ? AriaModal.renderTo(wrapper) : AriaModal;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AltModal, _extends({
    getApplicationNode: getApplicationNode,
    dialogClass: dialogClass,
    underlayClass: "sui-modal sui-modal-".concat(modalSize || 'md', " sui-active ").concat(props.underlayClass || ''),
    includeDefaultStyle: false,
    initialFocus: initialFocus
  }, props), renderContent({
    closeModal: closeModal,
    slideTo: slideTo
  })), triggerContent && triggerContent({
    openModal: openModal
  }));
};

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

var SessionModal = function SessionModal(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$cbFunc = _ref.cbFunc,
      cbFunc = _ref$cbFunc === void 0 ? function () {} : _ref$cbFunc,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "sui-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "sui-box-banner",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: img$1,
    srcSet: "".concat(img$1, " 1x, ").concat(img, " 2x"),
    alt: "Upgrade to WPMU DEV Pro"
  })), /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: "close",
    label: "Close modal",
    color: "white",
    className: "sui-button-float--right",
    onClick: cbFunc
  }), !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React.createElement("h3", {
    id: "ssm-session__modal-title",
    className: "sui-box-title sui-lg"
  }, title), !isUndefined(subtitle) && !isEmpty(subtitle) && /*#__PURE__*/React.createElement("p", {
    className: "sui-description"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "sui-box-body"
  }, children));
}; // Publish required component(s).

var SessionOff = function SessionOff(_ref) {
  var label = _ref.label,
      tooltip = _ref.tooltip,
      modal = _ref.modal;
  var hasTooltip = !isUndefined(tooltip) && !isEmpty(tooltip) ? true : false;
  var editModal = Object.assign({
    title: '',
    subtitle: '',
    content: ''
  }, modal);

  var contentModal = function contentModal(_ref2) {
    var closeModal = _ref2.closeModal;
    return /*#__PURE__*/React.createElement(SessionModal, {
      title: editModal.title,
      subtitle: editModal.subtitle,
      cbFunc: closeModal
    }, editModal.content);
  };

  var triggerModal = function triggerModal(_ref3) {
    var openModal = _ref3.openModal;
    return /*#__PURE__*/React.createElement(SessionButton, {
      login: false,
      label: {
        logout: label
      },
      onClick: openModal
    });
  };

  var content = /*#__PURE__*/React.createElement(Modal, {
    dialogId: "ssm-session__modal",
    titleId: "ssm-session__modal-title",
    size: "lg",
    modalContent: contentModal,
    triggerContent: triggerModal
  });
  return /*#__PURE__*/React.createElement(Fragment, null, hasTooltip && /*#__PURE__*/React.createElement("div", {
    className: "sui-tooltip sui-tooltip-constrained sui-tooltip-bottom-right",
    "data-tooltip": tooltip,
    style: {
      '--tooltip-width': '200px'
    }
  }, content), !hasTooltip && content);
}; // Publish required component(s).

var SessionContent = function SessionContent(_ref) {
  var login = _ref.login,
      pro = _ref.pro,
      landing = _ref.landing,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? {} : _ref$modal,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? {} : _ref$lang;
  // Check if user is connected.
  var connected = isBoolean(login) && login ? true : false;
  return /*#__PURE__*/React.createElement(Fragment, null, connected && /*#__PURE__*/React.createElement(SessionOn, {
    name: user.name,
    email: user.email,
    landing: landing,
    pro: pro
  }), !connected && /*#__PURE__*/React.createElement(SessionOff, {
    label: lang.unplug.label,
    tooltip: lang.unplug.tooltip,
    modal: modal
  }));
}; // Publish required component(s).

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StyledTitle = styled.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perks__title {\n\tcolor: #333;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tline-height: 12px;\n\tletter-spacing: -0.25px;\n}\n"])));
var StyledList = styled.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perks {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tmargin: 0 0 20px;\n\tpadding: 0;\n\tborder: 0;\n\tlist-style: none;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tmargin-left: -7px;\n\t\tmargin-right: -7px;\n\n\t\t&:last-child {\n\t\t\tmargin-bottom: -10px;\n\t\t}\n\n\t\t.ssm-perk {\n\t\t\twidth: 50%;\n\t\t\tflex: 0 0 auto;\n\t\t\tpadding: 0 7px;\n\t\t}\n\t}\n}\n"])), minDevice.tablet);
var StyledIcon = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__icon {\n\twidth: 22px;\n\theight: 22px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid #DDD;\n\tborder-radius: 6px;\n\ttext-align: center;\n\n\t.suicons {\n\t\tdisplay: block;\n\t\tcolor: #1A1A1A;\n\t\tfont-size: 12px;\n\n\t\t&:before {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n"])));
var StyledItem = styled.li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk {\n\tcolor: #666;\n\tfont-size: 12px;\n\tline-height: 20px;\n\n\t.ssm-perk__icon {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n}\n"])));
var StyledItemWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__wrapper {\n\tposition: relative;\n\tmargin-bottom: 10px;\n\tpadding-left: 35px;\n}\n"])));
var StyledItemTitle = styled.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__title {\n\tdisplay: block;\n\tcolor: #333;\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tline-height: 16px;\n}\n"]))); // Build "Session List" component.

var SessionList = function SessionList(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var items = Children.map(children, function (child, index) {
    var isSuicon = isBoolean(child.props.suicon) && child.props.suicon ? true : false;
    return /*#__PURE__*/React.createElement(StyledItem, {
      className: "ssm-perk"
    }, /*#__PURE__*/React.createElement(StyledItemWrapper, {
      className: "ssm-perk__wrapper"
    }, !isUndefined(child.props.icon) && !isEmpty(child.props.icon) && /*#__PURE__*/React.createElement(StyledIcon, {
      className: "ssm-perk__icon",
      "aria-hidden": "true"
    }, isSuicon && /*#__PURE__*/React.createElement("span", {
      className: "suicons suicons--".concat(child.props.icon)
    }), !isSuicon && /*#__PURE__*/React.createElement("span", {
      className: "sui-icon-".concat(child.props.icon, " sui-icon-sm")
    })), !isUndefined(child.props.title) && !isEmpty(child.props.title) && /*#__PURE__*/React.createElement(StyledItemTitle, {
      className: "ssm-perk__title"
    }, child.props.title), child.props.children));
  });
  return /*#__PURE__*/React.createElement(Fragment, null, !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React.createElement(StyledTitle, {
    className: "ssm-perks__title"
  }, title), /*#__PURE__*/React.createElement(StyledList, {
    className: "ssm-perks"
  }, items));
}; // Publish required component(s).

var Header = function Header(_ref) {
  var title = _ref.title,
      login = _ref.login,
      pro = _ref.pro,
      landing = _ref.landing,
      tutorials = _ref.tutorials,
      sourceUser = _ref.sourceUser,
      sourceModal = _ref.sourceModal,
      sourceUnplug = _ref.sourceUnplug,
      children = _ref.children;
  var unplug = Object.assign({
    label: 'Click to connect',
    tooltip: ''
  }, sourceUnplug);
  var user = Object.assign({
    name: '',
    email: '',
    avatar: ''
  }, sourceUser);
  var tuts = Object.assign({
    label: 'Tutorials',
    href: '',
    target: '_blank',
    cbFunc: ''
  }, tutorials);
  var contentTuts = /*#__PURE__*/React.createElement(Fragment, null, !isEmpty(tuts.cbFunc) && /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: "academy",
    label: tuts.label,
    onClick: tuts.cbFunc
  }), isEmpty(tuts.cbFunc) && !isEmpty(tuts.href) && /*#__PURE__*/React.createElement(ButtonIcon, {
    icon: "academy",
    label: tuts.label,
    href: tuts.href,
    target: tuts.target
  }));
  var contentLeft = Children.map(children, function (child, index) {
    if ('left' === child.props.slot) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "sui-actions-left"
      }, child.props.children);
    }

    return '';
  });
  var contentRight = Children.map(children, function (child, index) {
    if ('right' === child.props.slot) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: index
      }, child.props.children);
    }

    return '';
  });
  var contentModal = Children.map(children, function (child, index) {
    if ('modal' === child.props.slot) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: index
      }, child.props.children);
    }

    return '';
  });
  var modal = Object.assign({
    title: 'Connect to your WPMU DEV account',
    subtitle: 'Connect to WPMU DEV to unlock features for free.',
    content: contentModal
  }, sourceModal);
  return /*#__PURE__*/React.createElement("div", {
    className: "sui-header"
  }, !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React.createElement("h1", {
    className: "sui-header-title"
  }, title), contentLeft, /*#__PURE__*/React.createElement("div", {
    className: "sui-actions-right"
  }, contentRight, contentTuts, /*#__PURE__*/React.createElement(SessionContent, {
    login: login,
    pro: pro,
    landing: landing,
    user: user,
    modal: modal,
    lang: {
      plug: {},
      unplug: {
        label: unplug.label,
        tooltip: unplug.tooltip
      }
    }
  })));
};

export { Header, SessionList as Perks };
