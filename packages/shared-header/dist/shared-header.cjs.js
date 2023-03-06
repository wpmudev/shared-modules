'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

var isFunction = function isFunction(el) {
  return el && {}.toString.call(el) === '[object Function]';
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

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty$2(obj, key, value) {
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

function _objectWithoutPropertiesLoose$3(source, excluded) {
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

function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$3(source, excluded);

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

var _excluded$5 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? 'solid' : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$3(_ref, _excluded$5);

  var loader = /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
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
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$2({
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

var _excluded$4 = ["login", "avatar", "label"];

var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2;

var Wrapper = styled__default["default"].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__wrapper {\n\tposition: relative;\n}\n"])));
var Button$1 = styled__default["default"].button(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__button {\n\tmargin: 0 !important;\n\t", "\n\tborder-radius: 50%;\n\tbackground: #E6E6E6;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: #E6E6E6;\n\t}\n\n\t.suicons {\n\t\tfont-size: 16px;\n\t}\n}\n"])), function (props) {
  return props.hasAvatar ? 'padding: 0 !important;' : '';
});
var Image = styled__default["default"].span(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__avatar {\n\twidth: 26px;\n\theight: 26px;\n\tdisplay: block;\n\tborder-radius: 50%;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n"])));
var Flag = styled__default["default"].span(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__flag {\n\tpointer-events: none;\n\twidth: 12px;\n\theight: 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: absolute;\n\tright: 1px;\n\tbottom: -4px;\n\tborder: 1px solid #FFF;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\ttext-align: center;\n\n\t[class*=\"sui-icon-\"] {\n\t\tmargin-top: 1px;\n\t\tfont-size: 6px;\n\n\t\t&:before {\n\t\t\tcolor: #FFF;\n\t\t}\n\t}\n}\n"])), function (props) {
  return props.login ? '#18BB4B' : '#FF6D6D';
}); // Build "Session Button" component.

var SessionButton = function SessionButton(_ref) {
  var login = _ref.login,
      avatar = _ref.avatar,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? {} : _ref$label,
      props = _objectWithoutProperties$2(_ref, _excluded$4);

  var connected = isBoolean(login) && login ? true : false;
  var loginLabel = !isUndefined(label.login) && !isEmpty(label.login) ? label.login : 'Connected';
  var logoutLabel = !isUndefined(label.logout) && !isEmpty(label.logout) ? label.logout : 'Not Connected';
  var hasImage = !isUndefined(avatar) && !isEmpty(avatar) ? true : false;
  var showImage = connected && hasImage ? true : false;
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    className: "ssm-session__wrapper"
  }, /*#__PURE__*/React__default["default"].createElement(Button$1, _extends$1({
    hasAvatar: showImage,
    className: "sui-button-icon ssm-session__button"
  }, props), showImage && /*#__PURE__*/React__default["default"].createElement(Image, {
    className: "ssm-session__avatar",
    style: {
      backgroundImage: "url(".concat(avatar, ")")
    },
    "aria-hidden": "true"
  }), !showImage && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "suicons suicons--".concat(connected ? 'user-alt' : 'logo'),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-screen-reader-text"
  }, connected ? loginLabel : logoutLabel)), /*#__PURE__*/React__default["default"].createElement(Flag, {
    login: connected,
    className: "ssm-session__flag"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-".concat(connected ? 'check' : 'plug-disconnected'),
    "aria-hidden": "true"
  })));
}; // Publish required component(s).

var _excluded$3 = ["icon", "suicon", "href", "target", "children"];

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var StyledIcon$1 = styled__default["default"].span(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session__ddmenu-icon.suicons {\n\twidth: 24px;\n\tposition: relative;\n\ttop: 2px;\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n\tfont-size: 16px;\n\ttext-align: center;\n\n\t&:before {\n\t\tdisplay: block;\n\t}\n}\n"])));
var StyledButton = styled__default["default"].button(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session--purple {\n\n\t&,\n\t&:hover,\n\t&:focus {\n\t\tcolor: #8D00B1;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #F9E1FF;\n\t}\n}\n"])));
var StyledLink = styled__default["default"].a(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-session--purple {\n\n\t&,\n\t&:hover,\n\t&:focus,\n\t&:visited {\n\t\tcolor: #8D00B1;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #F9E1FF;\n\t}\n}\n"])));
var StyledInfo = styled__default["default"].li(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tpadding: 0 15px 10px;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tline-height: 20px;\n\tletter-spacing: -0.25px;\n}\n"]))); // Build "Session Menu" component.

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
    _this.wrapperRef = /*#__PURE__*/React__default["default"].createRef();
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
      var avatar = this.props.avatar;
      var pro = this.props.pro;
      var hasName = !isUndefined(name) && !isEmpty(name) ? true : false;
      var hasEmail = !isUndefined(email) && !isEmpty(email) ? true : false;
      var isPro = isBoolean(pro) && pro ? true : false;
      var menu = Object.assign({
        'hub': {
          label: 'The Hub',
          icon: 'logo',
          href: 'https://wpmudev.com/hub2/',
          target: '_blank',
          cbFunc: ''
        },
        'roadmap': {
          label: 'Product Roadmap',
          icon: 'roadmap',
          href: 'https://wpmudev.com/roadmap/',
          target: '_blank',
          cbFunc: ''
        },
        'support': {
          label: 'Support',
          icon: 'lifesaver',
          href: 'https://wpmudev.com/hub2/support',
          target: '_blank',
          cbFunc: '',
          falsy: isPro ? false : true
        },
        'upsell': {
          label: 'Unlock Pro Features',
          icon: 'plugin-hummingbird',
          href: '',
          target: '',
          cbFunc: '',
          falsy: isPro ? true : false,
          highlight: true
        }
      }, this.props.menu);
      var showMenu = Object.keys(menu).map(function (item, index) {
        var itemId = item;
        var itemInfo = menu[item];
        var label = itemInfo.label;
        var icon = itemInfo.icon;
        var link = itemInfo.href;
        var target = itemInfo.target;
        var cbFunc = itemInfo.cbFunc;
        var falsy = itemInfo.falsy;
        var purple = itemInfo.highlight;
        var hasLabel = !isUndefined(label) && !isEmpty(label) ? true : false;
        var hasIcon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
        var hasLink = !isUndefined(link) && !isEmpty(link) ? true : false;
        var hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;
        var hasFunc = isFunction(cbFunc) ? true : false;
        return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
          key: "".concat(itemId, "-").concat(index)
        }, hasLabel && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !falsy && /*#__PURE__*/React__default["default"].createElement(MenuButton, _extends$1({}, hasIcon && {
          suicon: icon
        }, hasLink && {
          href: link
        }, hasLink && hasTarget && {
          target: target
        }, !hasLink && hasFunc && {
          onClick: cbFunc
        }, purple && {
          className: 'ssm-session--purple'
        }), label)));
      });
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.setWrapperRef,
        className: "sui-dropdown".concat(open ? ' open' : ''),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React__default["default"].createElement(SessionButton, {
        login: true,
        avatar: avatar,
        "aria-expanded": open ? true : false,
        onClick: this.toggle
      }), /*#__PURE__*/React__default["default"].createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, (hasName || hasEmail) && /*#__PURE__*/React__default["default"].createElement(StyledInfo, null, name, /*#__PURE__*/React__default["default"].createElement("br", null), email), showMenu));
    }
  }]);

  return SessionMenu;
}(React.Component);

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

  return /*#__PURE__*/React__default["default"].createElement(StyledIcon$1, {
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
      props = _objectWithoutProperties$2(_ref2, _excluded$3);

  var isButton = isUndefined(href) ? true : false;
  var hasIcon = !isUndefined(icon) && !isEmpty(icon) || !isUndefined(suicon) && !isEmpty(suicon) ? true : false;
  var hasTarget = !isUndefined(target) && !isEmpty(target) ? true : false;
  return /*#__PURE__*/React__default["default"].createElement("li", null, isButton && /*#__PURE__*/React__default["default"].createElement(StyledButton, props, hasIcon && /*#__PURE__*/React__default["default"].createElement(MenuIcon, {
    icon: icon,
    suicon: suicon
  }), children), !isButton && /*#__PURE__*/React__default["default"].createElement(StyledLink, _extends$1({
    href: href,
    target: hasTarget ? target : '_blank',
    rel: "nofollow"
  }, props), hasIcon && /*#__PURE__*/React__default["default"].createElement(MenuIcon, {
    icon: icon,
    suicon: suicon
  }), children));
}; // Publish required component(s).

var SessionOn = function SessionOn(_ref) {
  var name = _ref.name,
      email = _ref.email,
      avatar = _ref.avatar,
      menu = _ref.menu,
      pro = _ref.pro;
  return /*#__PURE__*/React__default["default"].createElement(SessionMenu, {
    name: name,
    email: email,
    avatar: avatar,
    menu: menu,
    pro: pro
  });
}; // Publish required component(s).

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

  var config = _objectSpread2$1({
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


      var focusTrapElementDOMNode = ReactDOM__default["default"].findDOMNode(this.focusTrapElement);

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

      var child = React__default["default"].Children.only(this.props.children);

      var composedRefCallback = function composedRefCallback(element) {
        _this2.setFocusTrapElement(element);

        if (typeof child.ref === 'function') {
          child.ref(element);
        }
      };

      var childWithRef = /*#__PURE__*/React__default["default"].cloneElement(child, {
        ref: composedRefCallback
      });
      return childWithRef;
    }
  }]);

  return ReactFocusTrap;
}(React__default["default"].Component);

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
          return /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement(WrappedComponent, this.props, this.props.children), this.container);
        }

        return false;
      }
    }]);

    return Displaced;
  }(React__default["default"].Component);

  return Displaced;
}

var Modal$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized(_this), "clearTimer", function () {
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

      var childrenArray = [/*#__PURE__*/React__default["default"].createElement('div', _objectSpread2$1({}, dialogProps), props.children)];

      if (props.verticallyCenter) {
        childrenArray.unshift( /*#__PURE__*/React__default["default"].createElement('div', {
          key: 'a',
          style: verticalCenterStyle
        }));
      }

      var focusTrapOptions = props.focusTrapOptions || {};

      if (props.focusDialog || props.initialFocus) {
        focusTrapOptions.initialFocus = props.focusDialog ? "#".concat(this.props.dialogId) : props.initialFocus;
      }

      focusTrapOptions.escapeDeactivates = props.escapeExits;
      return /*#__PURE__*/React__default["default"].createElement(ReactFocusTrap, {
        focusTrapOptions: focusTrapOptions,
        paused: props.focusTrapPaused
      }, /*#__PURE__*/React__default["default"].createElement('div', _objectSpread2$1({}, underlayProps), childrenArray));
    }
  }]);

  return Modal;
}(React__default["default"].Component);

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

var _excluded$2 = ["modalContent", "triggerContent"];

var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
      triggerContent = _ref.triggerContent,
      props = _objectWithoutProperties$1(_ref, _excluded$2);

  var _React$useState = React__default["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React__default["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isClosing = _React$useState4[0],
      setIsClosing = _React$useState4[1]; // States for sliders.


  var _React$useState5 = React__default["default"].useState(props.firstSlide),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentSlide = _React$useState6[0],
      setCurrentSlide = _React$useState6[1];

  var _React$useState7 = React__default["default"].useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      slideDirection = _React$useState8[0],
      setSlideDirection = _React$useState8[1];

  React__default["default"].useEffect(function () {
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
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(AltModal, _extends({
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
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
  }, /*#__PURE__*/React__default["default"].createElement("figure", {
    className: "sui-box-banner",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    srcSet: "".concat(img$1, " 1x, ").concat(img, " 2x"),
    alt: "Upgrade to WPMU DEV Pro"
  })), /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
    icon: "close",
    label: "Close modal",
    color: "white",
    className: "sui-button-float--right",
    onClick: cbFunc
  }), !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React__default["default"].createElement("h3", {
    id: "ssm-session__modal-title",
    className: "sui-box-title sui-lg"
  }, title), !isUndefined(subtitle) && !isEmpty(subtitle) && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-description"
  }, subtitle)), /*#__PURE__*/React__default["default"].createElement("div", {
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
    return /*#__PURE__*/React__default["default"].createElement(SessionModal, {
      title: editModal.title,
      subtitle: editModal.subtitle,
      cbFunc: closeModal
    }, editModal.content);
  };

  var triggerModal = function triggerModal(_ref3) {
    var openModal = _ref3.openModal;
    return /*#__PURE__*/React__default["default"].createElement(SessionButton, {
      login: false,
      label: {
        logout: label
      },
      onClick: openModal
    });
  };

  var content = /*#__PURE__*/React__default["default"].createElement(Modal, {
    dialogId: "ssm-session__modal",
    titleId: "ssm-session__modal-title",
    size: "lg",
    modalContent: contentModal,
    triggerContent: triggerModal
  });
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, hasTooltip && /*#__PURE__*/React__default["default"].createElement("div", {
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
      _ref$menu = _ref.menu,
      menu = _ref$menu === void 0 ? {} : _ref$menu,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? {} : _ref$modal,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? {} : _ref$lang;
  // Check if user is connected.
  var connected = isBoolean(login) && login ? true : false;
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, connected && /*#__PURE__*/React__default["default"].createElement(SessionOn, {
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    menu: menu,
    pro: pro
  }), !connected && /*#__PURE__*/React__default["default"].createElement(SessionOff, {
    label: lang.unplug.label,
    tooltip: lang.unplug.tooltip,
    modal: modal
  }));
}; // Publish required component(s).

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StyledTitle = styled__default["default"].p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perks__title {\n\tcolor: #333;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tline-height: 12px;\n\tletter-spacing: -0.25px;\n}\n"])));
var StyledList = styled__default["default"].ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perks {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tmargin: 0 0 20px;\n\tpadding: 0;\n\tborder: 0;\n\tlist-style: none;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tmargin-left: -7px;\n\t\tmargin-right: -7px;\n\n\t\t&:last-child {\n\t\t\tmargin-bottom: -10px;\n\t\t}\n\n\t\t.ssm-perk {\n\t\t\twidth: 50%;\n\t\t\tflex: 0 0 auto;\n\t\t\tpadding: 0 7px;\n\t\t}\n\t}\n}\n"])), minDevice.tablet);
var StyledIcon = styled__default["default"].span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__icon {\n\twidth: 22px;\n\theight: 22px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid #DDD;\n\tborder-radius: 6px;\n\ttext-align: center;\n\n\t.suicons {\n\t\tdisplay: block;\n\t\tcolor: #1A1A1A;\n\t\tfont-size: 12px;\n\n\t\t&:before {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n"])));
var StyledItem = styled__default["default"].li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk {\n\tcolor: #666;\n\tfont-size: 12px;\n\tline-height: 20px;\n\n\t.ssm-perk__icon {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n}\n"])));
var StyledItemWrapper = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__wrapper {\n\tposition: relative;\n\tmargin-bottom: 10px;\n\tpadding-left: 35px;\n}\n"])));
var StyledItemTitle = styled__default["default"].span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n.sui-wrap &&.ssm-perk__title {\n\tdisplay: block;\n\tcolor: #333;\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tline-height: 16px;\n}\n"]))); // Build "Session List" component.

var SessionList = function SessionList(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var items = React.Children.map(children, function (child, index) {
    var isSuicon = isBoolean(child.props.suicon) && child.props.suicon ? true : false;
    return /*#__PURE__*/React__default["default"].createElement(StyledItem, {
      className: "ssm-perk"
    }, /*#__PURE__*/React__default["default"].createElement(StyledItemWrapper, {
      className: "ssm-perk__wrapper"
    }, !isUndefined(child.props.icon) && !isEmpty(child.props.icon) && /*#__PURE__*/React__default["default"].createElement(StyledIcon, {
      className: "ssm-perk__icon",
      "aria-hidden": "true"
    }, isSuicon && /*#__PURE__*/React__default["default"].createElement("span", {
      className: "suicons suicons--".concat(child.props.icon)
    }), !isSuicon && /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sui-icon-".concat(child.props.icon, " sui-icon-sm")
    })), !isUndefined(child.props.title) && !isEmpty(child.props.title) && /*#__PURE__*/React__default["default"].createElement(StyledItemTitle, {
      className: "ssm-perk__title"
    }, child.props.title), child.props.children));
  });
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React__default["default"].createElement(StyledTitle, {
    className: "ssm-perks__title"
  }, title), /*#__PURE__*/React__default["default"].createElement(StyledList, {
    className: "ssm-perks"
  }, items));
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

  var loader = /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: 'relative'
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, icon && !iconRight && '' !== icon && /*#__PURE__*/React__default["default"].createElement("span", {
    className: 'sui-icon-' + icon,
    "aria-hidden": "true"
  }), label, icon && iconRight && '' !== icon && /*#__PURE__*/React__default["default"].createElement("span", {
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

  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var _excluded = ["login", "label", "sourceModal", "children"];

var SessionExternal = function SessionExternal(_ref) {
  var login = _ref.login,
      label = _ref.label,
      sourceModal = _ref.sourceModal,
      children = _ref.children,
      props = _objectWithoutProperties$2(_ref, _excluded);

  var connected = isBoolean(login) && login ? true : false;
  var hasLabel = !isUndefined(label) && !isEmpty(label) ? true : false;
  var hasToggle = !isUndefined(props.toggle) && !isEmpty(props.toggle) ? props.toggle : false;
  var hasIcon = !isUndefined(props.icon) && !isEmpty(props.icon) ? true : false;
  var type = !isUndefined(props.type) && !isEmpty(props.type) ? props.type : '';
  var desc = !isUndefined(props.description) && !isEmpty(props.description) ? props.description : '';
  var editModal = Object.assign({
    title: 'Connect to your WPMU DEV account',
    subtitle: 'Connect to WPMU DEV to unlock features for free.'
  }, sourceModal);

  var contentModal = function contentModal(_ref2) {
    var closeModal = _ref2.closeModal;
    return /*#__PURE__*/React__default["default"].createElement(SessionModal, {
      title: editModal.title,
      subtitle: editModal.subtitle,
      cbFunc: closeModal
    }, children);
  };

  var triggerModal = function triggerModal(_ref3) {
    var openModal = _ref3.openModal;

    if (hasToggle) {
      return /*#__PURE__*/React__default["default"].createElement("button", _extends$1({
        className: "sui-toggle",
        style: {
          padding: 0,
          border: 'none',
          background: 'transparent',
          textAlign: 'left',
          color: '#666'
        },
        onClick: openModal
      }, props), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "sui-toggle-slider",
        "aria-hidden": "true"
      }), hasLabel && /*#__PURE__*/React__default["default"].createElement("span", {
        className: "sui-toggle-label"
      }, label), '' !== desc && /*#__PURE__*/React__default["default"].createElement("span", {
        className: "sui-description"
      }, desc));
    }

    if (hasIcon && 'icon' === type) {
      return /*#__PURE__*/React__default["default"].createElement(ButtonIcon, _extends$1({
        label: hasLabel ? label : '',
        onClick: openModal
      }, props));
    }

    return /*#__PURE__*/React__default["default"].createElement(Button, _extends$1({
      label: hasLabel ? label : 'Click Here',
      onClick: openModal
    }, props));
  };

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !connected && /*#__PURE__*/React__default["default"].createElement(Modal, {
    dialogId: "ssm-session__modal",
    titleId: "ssm-session__modal-title",
    size: "lg",
    modalContent: contentModal,
    triggerContent: triggerModal
  }));
}; // Publish required component(s).

var Header = function Header(_ref) {
  var title = _ref.title,
      login = _ref.login,
      pro = _ref.pro,
      tutorials = _ref.tutorials,
      sourceUser = _ref.sourceUser,
      sourceModal = _ref.sourceModal,
      sourceUnplug = _ref.sourceUnplug,
      sourceMenu = _ref.sourceMenu,
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
  var contentTuts = /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !isEmpty(tuts.cbFunc) && /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
    icon: "academy",
    label: tuts.label,
    onClick: tuts.cbFunc
  }), isEmpty(tuts.cbFunc) && !isEmpty(tuts.href) && /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
    icon: "academy",
    label: tuts.label,
    href: tuts.href,
    target: tuts.target
  }));
  var contentLeft = React.Children.map(children, function (child, index) {
    if ('left' === child.props.slot) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: index,
        className: "sui-actions-left"
      }, child.props.children);
    }

    return '';
  });
  var contentRight = React.Children.map(children, function (child, index) {
    if ('right' === child.props.slot) {
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
        key: index
      }, child.props.children);
    }

    return '';
  });
  var contentModal = React.Children.map(children, function (child, index) {
    if ('modal' === child.props.slot) {
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
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
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-header"
  }, !isUndefined(title) && !isEmpty(title) && /*#__PURE__*/React__default["default"].createElement("h1", {
    className: "sui-header-title"
  }, title), contentLeft, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-actions-right"
  }, contentRight, contentTuts, /*#__PURE__*/React__default["default"].createElement(SessionContent, {
    login: login,
    pro: pro,
    user: user,
    modal: modal,
    menu: sourceMenu,
    lang: {
      plug: {},
      unplug: {
        label: unplug.label,
        tooltip: unplug.tooltip
      }
    }
  })));
};

exports.Button = SessionExternal;
exports.Header = Header;
exports.Perks = SessionList;
