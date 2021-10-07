'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var AriaModal = require('@justfixnyc/react-aria-modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var AriaModal__default = /*#__PURE__*/_interopDefaultLegacy(AriaModal);

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
  if (call && (typeof call === "object" || typeof call === "function")) {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
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
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
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

function _templateObject3() {
  var data = _taggedTemplateLiteral$1(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral$1(["\n.sui-wrap && {\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\tborder-bottom-width: ", "px;\n\ttext-align: ", ";\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral$1(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-bottom-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var utils = {
  gutter: 30,
  gutter_md: 20
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

var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box ".concat(className) : 'sui-box'
  }, props), children);
};

var BoxTitle = function BoxTitle(_ref2) {
  var icon = _ref2.icon,
      tagLabel = _ref2.tagLabel,
      tagColor = _ref2.tagColor,
      tagSize = _ref2.tagSize,
      tagDesign = _ref2.tagDesign,
      className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  var tagClass = 'sui-tag';

  switch (tagColor) {
    case 'red':
    case 'yellow':
    case 'green':
    case 'blue':
    case 'purple':
      tagClass += ' sui-tag-' + tagColor;
      break;
  }

  switch (tagSize) {
    case 'sm':
    case 'small':
      tagClass += ' sui-tag-sm';
      break;
  }

  switch (tagDesign) {
    case 'outlined':
      tagClass += ' sui-tag-ghost';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("h3", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-title ".concat(className) : 'sui-box-title'
  }, props), icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children, tagLabel && '' !== tagLabel && /*#__PURE__*/React__default['default'].createElement("span", {
    className: tagClass,
    style: {
      marginLeft: 10
    }
  }, tagLabel));
};

var Header = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      tagLabel = _ref3.tagLabel,
      tagColor = _ref3.tagColor,
      tagSize = _ref3.tagSize,
      tagDesign = _ref3.tagDesign;
      _ref3.className;
      var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Header, props, title && '' !== title && /*#__PURE__*/React__default['default'].createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: tagLabel,
    tagColor: tagColor,
    tagSize: tagSize,
    tagDesign: tagDesign
  }, title), children);
};

var Body = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject2(), function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.borderTop || 0 === props.borderTop ? props.borderTop : 0;
}, function (props) {
  return props.borderBottom || 0 === props.borderBottom ? props.borderBottom : 0;
}, function (props) {
  return props.alignment || 'left';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxBody = function BoxBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Body, _extends({
    className: className
  }, props), children);
};

var Footer = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border || '' === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxFooter = function BoxFooter(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Footer, _extends({
    className: className
  }, props), children);
};

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
  if (call && (typeof call === "object" || typeof call === "function")) {
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

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2({
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

      var message = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));

      if (!hide) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: classMain
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }

      return null;
    }
  }]);

  return Notifications;
}(React.Component);

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
        _defineProperty$2(target, key, source[key]);
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

var Button = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$2(_ref, ["label", "icon", "design", "color", "className", "loading"]);

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

  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
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

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
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

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
      triggerContent = _ref.triggerContent,
      props = _objectWithoutProperties$3(_ref, ["modalContent", "triggerContent"]);

  var _React$useState = React__default['default'].useState(false),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React__default['default'].useState(false),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      isClosing = _React$useState4[0],
      setIsClosing = _React$useState4[1]; // States for sliders.


  var _React$useState5 = React__default['default'].useState(props.firstSlide),
      _React$useState6 = _slicedToArray$1(_React$useState5, 2),
      currentSlide = _React$useState6[0],
      setCurrentSlide = _React$useState6[1];

  var _React$useState7 = React__default['default'].useState(null),
      _React$useState8 = _slicedToArray$1(_React$useState7, 2),
      slideDirection = _React$useState8[0],
      setSlideDirection = _React$useState8[1];

  React__default['default'].useEffect(function () {
    if (!props.dialogId) {
      throw new Error('SUI Modal instances should have a `dialogId`');
    }
  }, []);
  var isSlider = 'object' === _typeof$1(modalContent) && null !== modalContent;

  var openModal = function openModal() {
    return setIsOpen(true);
  },
      closeModal = function closeModal() {
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
  },
      slideTo = function slideTo(slide) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
    setCurrentSlide(slide);
    setSlideDirection(direction);
  };

  var _props$getApplication = props.getApplicationNode,
      getApplicationNode = _props$getApplication === void 0 ? function () {
    return document.getElementsByClassName('sui-wrap')[0];
  } : _props$getApplication;
  var dialogClass = "sui-modal-content sui-content-".concat(isClosing ? 'fade-out' : 'fade-in', " ").concat(props.dialogClass || "");
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

  var AltModal = props.renderToNode ? AriaModal__default['default'].renderTo(props.renderToNode) : AriaModal__default['default'];
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(AltModal, _extends$1({
    getApplicationNode: getApplicationNode,
    dialogClass: dialogClass,
    underlayClass: "sui-modal sui-active sui-modal-".concat(modalSize || 'md', " sui-wrap ").concat(props.underlayClass || ''),
    includeDefaultStyles: false,
    initialFocus: initialFocus
  }, props), renderContent({
    closeModal: closeModal,
    slideTo: slideTo
  })), triggerContent && triggerContent({
    openModal: openModal
  }));
};

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

function ownKeys$2(object, enumerableOnly) {
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

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$4(source, excluded) {
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

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$4(source, excluded);

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
      props = _objectWithoutProperties$4(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var ApplyModal = function ApplyModal(_ref) {
  var setOpen = _ref.setOpen,
      config = _ref.config,
      save = _ref.save,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? {} : _ref$strings,
      _ref$callback = _ref.callback,
      callback = _ref$callback === void 0 ? null : _ref$callback;
  var _strings$closeIcon = strings.closeIcon,
      closeIcon = _strings$closeIcon === void 0 ? 'Close this dialog window' : _strings$closeIcon,
      _strings$title = strings.title,
      title = _strings$title === void 0 ? 'Apply Config' : _strings$title,
      _strings$description = strings.description,
      description = _strings$description === void 0 ? 'Are you sure you want to apply the {configName} config to this site? We recommend you have a backup available as your existing settings configuration will be overridden.' : _strings$description,
      _strings$notice = strings.notice,
      notice = _strings$notice === void 0 ? 'The storage region in the selected config doesn\'t match the storage region in your current settings. All existing backups will be deleted after applying this config.' : _strings$notice,
      _strings$cancelButton = strings.cancelButton,
      cancelButton = _strings$cancelButton === void 0 ? 'Cancel' : _strings$cancelButton,
      _strings$actionButton = strings.actionButton,
      actionButton = _strings$actionButton === void 0 ? 'Apply' : _strings$actionButton;
  var extraClass = "sui-box";
  var applyLoader = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    "aria-hidden": "true"
  }));

  var _React$useState = React__default['default'].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isSaving = _React$useState2[0],
      setIsSaving = _React$useState2[1];

  var _React$useState3 = React__default['default'].useState(extraClass),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      wrapper = _React$useState4[0],
      setWrapper = _React$useState4[1];

  var _React$useState5 = React__default['default'].useState(description),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      desc = _React$useState6[0],
      setDesc = _React$useState6[1];

  React__default['default'].useEffect(function () {
    if (null !== callback) {
      var className = extraClass;
      var result = window[callback](config);
      result.then(function (data) {
        className += ' region-loaded ' + data.status;
        setWrapper(className);
        setIsSaving(false);

        if ('description' in data) {
          setDesc(data.description);
        }
      }).catch(function (err) {
        className += ' region-loaded ' + err.status;
        setWrapper(className);
        setIsSaving(false);

        if ('description' in err) {
          setDesc(err.description);
        }
      });
    }
  }, []);

  var doAction = function doAction() {
    setIsSaving(true);
    save();
  };

  var modalContent = function modalContent() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: wrapper
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement("h2", {
      id: "sui-config-edit-title"
    }, title), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "apply-loader"
    }, applyLoader), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "region-match"
    }, desc.replace('{configName}', config.name))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-body region-mismatch"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      id: "sui-apply-modal-warning",
      className: "sui-notice sui-active sui-notice-warning"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-notice-content"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-notice-message"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "sui-notice-icon sui-icon-info sui-md",
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default['default'].createElement("p", null, notice))))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60"
    }, /*#__PURE__*/React__default['default'].createElement(Button, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement(Button, {
      color: "blue",
      icon: "check",
      label: actionButton,
      onClick: doAction,
      loading: isSaving,
      className: "sui-config-apply"
    })));
  };

  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    mounted: true,
    dialogId: "sui-configs-apply-modal",
    titleId: "sui-config-apply-title",
    size: "sm",
    modalContent: modalContent
  });
};

var DeleteModal = function DeleteModal(_ref) {
  var setOpen = _ref.setOpen,
      config = _ref.config,
      save = _ref.save,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? {} : _ref$strings;
  var _strings$closeIcon = strings.closeIcon,
      closeIcon = _strings$closeIcon === void 0 ? 'Close this dialog window' : _strings$closeIcon,
      _strings$title = strings.title,
      title = _strings$title === void 0 ? 'Delete Configuration File' : _strings$title,
      _strings$description = strings.description,
      description = _strings$description === void 0 ? 'Are you sure you want to delete {configName}? You will no longer be able to apply it to this or other connected sites.' : _strings$description,
      _strings$cancelButton = strings.cancelButton,
      cancelButton = _strings$cancelButton === void 0 ? 'Cancel' : _strings$cancelButton,
      _strings$actionButton = strings.actionButton,
      actionButton = _strings$actionButton === void 0 ? 'Delete' : _strings$actionButton;

  var _React$useState = React__default['default'].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isSaving = _React$useState2[0],
      setIsSaving = _React$useState2[1];

  var doAction = function doAction() {
    setIsSaving(true);
    save();
  };

  var modalContent = function modalContent() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement("h2", {
      id: "smush-config-delete-title"
    }, title), /*#__PURE__*/React__default['default'].createElement("p", {
      className: "sui-description"
    }, description.replace('{configName}', config.name))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60"
    }, /*#__PURE__*/React__default['default'].createElement(Button, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement(Button, {
      color: "red",
      label: actionButton,
      onClick: doAction,
      loading: isSaving
    })));
  };

  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    mounted: true,
    dialogId: "sui-configs-delete-modal",
    titleId: "sui-config-delete-title",
    size: "sm",
    modalContent: modalContent
  });
};

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$5(source, excluded) {
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

function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$5(source, excluded);

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

var Input = function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutProperties$5(_ref, ["id", "size", "label", "description", "type"]);

  var uniqueId = id && '' !== id ? id : props.property;
  var clazz = 'sui-form-control';

  switch (size) {
    case 'sm':
    case 'small':
      clazz += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      clazz += ' sui-input-md';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-form-field"
  }, label && /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), /*#__PURE__*/React__default['default'].createElement("input", _extends$2({
    id: uniqueId,
    type: type,
    className: clazz
  }, props)), description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, description));
};

var EditModal = function EditModal(_ref) {
  var setOpen = _ref.setOpen,
      config = _ref.config,
      save = _ref.save,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? {} : _ref$strings;
  var configName = config ? config.name : '',
      configDescription = config ? config.description : '';

  var _React$useState = React__default['default'].useState(configName),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      nameValue = _React$useState2[0],
      setNameValue = _React$useState2[1];

  var _React$useState3 = React__default['default'].useState(configDescription),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      descriptionValue = _React$useState4[0],
      setDescriptionValue = _React$useState4[1];

  var _React$useState5 = React__default['default'].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      errorMessage = _React$useState6[0],
      setErrorMessage = _React$useState6[1];

  var _React$useState7 = React__default['default'].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isSaving = _React$useState8[0],
      setIsSaving = _React$useState8[1];

  var _strings$closeIcon = strings.closeIcon,
      closeIcon = _strings$closeIcon === void 0 ? 'Close this dialog window' : _strings$closeIcon,
      _strings$nameInput = strings.nameInput,
      nameInput = _strings$nameInput === void 0 ? 'Config name' : _strings$nameInput,
      _strings$descriptionI = strings.descriptionInput,
      descriptionInput = _strings$descriptionI === void 0 ? 'Description' : _strings$descriptionI,
      _strings$emptyNameErr = strings.emptyNameError,
      emptyNameError = _strings$emptyNameErr === void 0 ? 'The config name is required' : _strings$emptyNameErr,
      _strings$actionButton = strings.actionButton,
      actionButton = _strings$actionButton === void 0 ? 'Save' : _strings$actionButton,
      _strings$cancelButton = strings.cancelButton,
      cancelButton = _strings$cancelButton === void 0 ? 'Cancel' : _strings$cancelButton,
      _strings$editTitle = strings.editTitle,
      editTitle = _strings$editTitle === void 0 ? 'Rename Config' : _strings$editTitle,
      _strings$editDescript = strings.editDescription,
      editDescription = _strings$editDescript === void 0 ? 'Change your config name to something recognizable.' : _strings$editDescript,
      _strings$createTitle = strings.createTitle,
      createTitle = _strings$createTitle === void 0 ? 'Save Config' : _strings$createTitle,
      _strings$createDescri = strings.createDescription,
      createDescription = _strings$createDescri === void 0 ? 'Save your current settings configuration. You’ll be able to then download and apply it to your other sites.' : _strings$createDescri;

  var displayErrorMessage = function displayErrorMessage(message) {
    setErrorMessage(message);
    setIsSaving(false);
  };

  var doAction = function doAction() {
    if (!nameValue.trim().length) {
      setErrorMessage(emptyNameError);
      return;
    }

    setErrorMessage(false);
    setIsSaving(true);
    var data = new FormData();
    data.append('name', nameValue);
    data.append('description', descriptionValue);
    save(data, displayErrorMessage);
  };

  var modalContent = function modalContent() {
    // If a config is provided, we're editing a config. We're saving a new one otherwise.
    var title = config ? editTitle : createTitle,
        description = config ? editDescription : createDescription;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement("h2", {
      id: "sui-config-edit-title"
    }, title), /*#__PURE__*/React__default['default'].createElement("p", {
      className: "sui-description"
    }, description)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-body"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      role: "alert",
      id: "configs-edit-modal-error-message",
      className: "sui-notice sui-notice-error",
      "aria-live": "assertive",
      style: {
        display: errorMessage ? 'block' : ''
      }
    }, errorMessage && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-notice-content"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-notice-message"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "sui-notice-icon sui-icon-info sui-md",
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default['default'].createElement("p", null, errorMessage)))), /*#__PURE__*/React__default['default'].createElement(Input, {
      label: nameInput,
      name: "name",
      value: nameValue,
      onChange: function onChange(e) {
        return setNameValue(e.target.value);
      },
      maxLength: "200"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-form-field"
    }, /*#__PURE__*/React__default['default'].createElement("label", {
      className: "sui-label",
      htmlFor: "sui-edit-config-textarea"
    }, descriptionInput), /*#__PURE__*/React__default['default'].createElement("textarea", {
      id: "sui-edit-config-textarea",
      className: "sui-form-control",
      name: "description",
      value: descriptionValue,
      onChange: function onChange(e) {
        return setDescriptionValue(e.target.value);
      },
      maxLength: "200"
    }))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "sui-box-footer sui-content-separated sui-flatten sui-spacing-top--0"
    }, /*#__PURE__*/React__default['default'].createElement(Button, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default['default'].createElement(Button, {
      color: "blue",
      icon: "save",
      label: actionButton,
      onClick: doAction,
      loading: isSaving
    })));
  };

  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    mounted: true,
    dialogId: "sui-configs-edit-modal",
    titleId: "sui-config-edit-title",
    size: "sm",
    modalContent: modalContent
  });
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

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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

  return _extends$3.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$6(source, excluded) {
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

function _objectWithoutProperties$6(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$6(source, excluded);

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

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$2(arr, i) {
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

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$4(obj, key, value) {
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

function ownKeys$3(object, enumerableOnly) {
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

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$4(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1$1(source, excluded) {
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

function _objectWithoutProperties$1$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1$1(source, excluded);

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

var ButtonIcon$2 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$1$1(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$3({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral$2(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var ItemImage = styled__default['default'].span(_templateObject$1());

var AccordionItemHeader = function AccordionItemHeader(_ref3) {
  var title = _ref3.title,
      titleSize = _ref3.titleSize,
      icon = _ref3.icon,
      image = _ref3.image,
      children = _ref3.children,
      props = _objectWithoutProperties$6(_ref3, ["title", "titleSize", "icon", "image", "children"]);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray$2(_useState3, 1),
      isOpen = _useState4[0];

  var countChildren = React__default['default'].Children.toArray(children).length;
  var titleColumnIcon = 'undefined' !== typeof icon && '' !== icon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }) : '';
  var titleColumnImage = 'undefined' !== typeof image && '' !== icon ? /*#__PURE__*/React__default['default'].createElement(ItemImage, {
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : '';
  var titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize ? ' sui-accordion-col-' + titleSize : '';
  var titleColumn = /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-accordion-item-title".concat(titleColumnSize)
  }, titleColumnIcon, titleColumnImage, title);
  var indicator = /*#__PURE__*/React__default['default'].createElement(ButtonIcon$2, {
    icon: "chevron-down",
    label: isOpen ? 'Close section' : 'Open section',
    className: "sui-button-icon sui-accordion-open-indicator"
  });
  var columns = React__default['default'].Children.map(children, function (column, index) {
    index++;
    var columnSize = column.props.size;
    var columnClass = 'undefined' !== typeof columnSize && '' !== columnSize ? 'sui-accordion-col-' + columnSize : 'sui-accordion-col-auto';
    var columnContent = column.props.children;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: columnClass
    }, columnContent, countChildren === index && indicator);
  });
  var actions = /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-accordion-col-auto"
  }, indicator);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$3({
    className: "sui-accordion-item-header"
  }, props), titleColumn, countChildren > 0 ? columns : actions);
};

var AccordionItemBody = function AccordionItemBody(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties$6(_ref4, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$3({
    className: "sui-accordion-item-body"
  }, props), children);
};

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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
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

  return _extends$4.apply(this, arguments);
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
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
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
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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

function _taggedTemplateLiteral$3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty$5(obj, key, value) {
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

function ownKeys$4(object, enumerableOnly) {
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

function _objectSpread2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function (key) {
        _defineProperty$5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$7(source, excluded) {
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

function _objectWithoutProperties$7(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$7(source, excluded);

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

var ButtonIcon$3 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$7(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
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
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$4({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Link = styled__default['default'].a(_templateObject$2(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});
var Button$1 = styled__default['default'].button(_templateObject2$1(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits$2(Dropdown, _Component);

  var _super = _createSuper$2(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck$2(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$2(_this));
    _this.wrapperRef = /*#__PURE__*/React__default['default'].createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized$2(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        open: !this.state.open
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
      var options = React.Children.map(this.props.children, function (option) {
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, icon, option.props.name, tag);

        if (option.props.href) {
          return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Link, _extends$4({
            href: option.props.href
          }, option.props), label));
        }

        return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Button$1, option.props, label));
      });
      var clazz = !open ? 'sui-dropdown' : 'sui-dropdown open';

      switch (this.props.position) {
        case 'left':
          clazz += ' sui-dropdown-right';
          break;

        case 'center':
          clazz += ' sui-dropdown-center';
          break;

        case 'right':
          clazz += ' sui-dropdown-left';
          break;

        default:
          clazz += ' sui-dropdown-right';
          break;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clazz,
        ref: this.setWrapperRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$3, {
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: this.toggle
      }), open && /*#__PURE__*/React__default['default'].createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, options));
    }
  }]);

  return Dropdown;
}(React.Component);

var _templateObject$3;
var Table = styled__default['default'].table(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n[class*=\"sui-2-\"] .sui-wrap && {\n\twidth: 100%;\n\tmargin: 0;\n\tborder-spacing: 0;\n\tborder-collapse: collapse;\n\ttable-layout: fixed;\n\n\ttbody {\n\n\t\ttr {\n\n\t\t\t&:nth-child(2n+2) {\n\t\t\t\tbackground-color: #f8f8f8;\n\t\t\t}\n\t\t}\n\n\t\ttd {\n\t\t\tpadding: 9px;\n\t\t\tvertical-align: center;\n\t\t\tcolor: #888;\n\t\t\tfont: 500 13px/22px \"Roboto\", sans-serif;\n\t\t\tletter-spacing: -0.25px;\n\n\t\t\tdiv {\n\t\t\t\toverflow: hidden;\n\t\t\t\tdisplay: -webkit-box;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t-webkit-line-clamp: 2;\n\t\t\t\t-webkit-box-orient: vertical\n\t\t\t}\n\n\t\t\t&:first-child {\n\t\t\t\twidth: 45%;\n\t\t\t\tpadding-left: 20px;\n\t\t\t\tcolor: #333;\n\t\t\t}\n\n\t\t\t&:last-child {\n\t\t\t\twidth: 55%;\n\t\t\t\tpadding-right: 20px;\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t}\n\t\t}\n\t}\n}\n"])));
var PresetsTable = /*#__PURE__*/function (_Component) {
  _inherits(PresetsTable, _Component);

  var _super = _createSuper(PresetsTable);

  function PresetsTable(props) {
    _classCallCheck(this, PresetsTable);

    return _super.call(this, props);
  }

  _createClass(PresetsTable, [{
    key: "render",
    value: function render() {
      var rows = React.Children.map(this.props.children, function (row) {
        return /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", null, row.props.name), /*#__PURE__*/React__default['default'].createElement("td", null, row.props.status));
      });
      return /*#__PURE__*/React__default['default'].createElement(Table, this.props, /*#__PURE__*/React__default['default'].createElement("tbody", null, rows));
    }
  }]);

  return PresetsTable;
}(React.Component);

var _templateObject$4, _templateObject2$2, _templateObject3$1, _templateObject4, _templateObject5;
var Header$1 = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n\tmargin: 0 0 20px;\n\n\t> div:not(.sui-tooltip) {\n\n\t\t@media ", " {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t}\n\t}\n\n\t> div.sui-tooltip {\n\t\tmargin: 10px 0 0 !important;\n\n\t\t@media ", " {\n\t\t\tflex: 0 0 auto;\n\t\t\tmargin-top: 0 !important;\n\t\t\tmargin-left: 10px !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"])), device$1.tablet, device$1.tablet, device$1.tablet);
var Label = styled__default['default'].p(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n"])));
var Description = styled__default['default'].p(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n\tmargin: 3px 0 0 !important;\n"])));
var Authentic = styled__default['default'].svg(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n"])));
var AccordionItemHeaderAlt = styled__default['default'](AccordionItemHeader)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n.sui-wrap && {\n\n    > .sui-accordion-col-auto {\n\n        > .sui-dropdown {\n\n            [class*=sui-icon-] {\n                margin-right: 0 !important;\n            }\n\n            ul {\n                min-width: 192px;\n            }\n        }\n    }\n}\n"])));
var PresetsAccordionItem = /*#__PURE__*/function (_Component) {
  _inherits(PresetsAccordionItem, _Component);

  var _super = _createSuper(PresetsAccordionItem);

  function PresetsAccordionItem(props) {
    var _this;

    _classCallCheck(this, PresetsAccordionItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      if ('sui-dropdown' !== e.target.className || 'sui-button-icon undefined' !== e.target.className || 'sui-icon-widget-settings-config' !== e.target.className) {
        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "accordionHeadApplyClicked", function (e) {
      e.stopPropagation();

      _this.props.applyAction();
    });

    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PresetsAccordionItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _this$props = this.props,
          editAction = _this$props.editAction,
          applyAction = _this$props.applyAction,
          deleteAction = _this$props.deleteAction,
          downloadAction = _this$props.downloadAction;
      var clazz = !open ? 'sui-accordion-item' : 'sui-accordion-item sui-accordion-item--open';
      var icon = /*#__PURE__*/React__default['default'].createElement(Authentic, {
        width: "16",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M15.86 8.914l-.839-.69a1.6 1.6 0 01-.579-1.235c0-.334.102-.644.276-.9l-.003.005.616-.911a.428.428 0 00-.307-.655h-.003l-1.075-.123a1.595 1.595 0 01-1.407-1.637v.002l.032-1.092v-.017a.422.422 0 00-.613-.376h.002l-.97.468a1.583 1.583 0 01-2.058-.603l-.004-.007-.557-.935a.423.423 0 00-.726-.002l-.001.002-.558.935a1.585 1.585 0 01-2.074.606l.01.004-.97-.482a.425.425 0 00-.616.395v-.001l.031 1.092v.047c0 .82-.61 1.494-1.399 1.587h-.007l-1.07.137a.428.428 0 00-.301.67l-.001-.002.61.898a1.6 1.6 0 01-.301 2.142l-.843.678a.427.427 0 00.106.723l.002.001 1 .424a1.601 1.601 0 01.89 1.979l.003-.011-.338 1.038a.427.427 0 00.481.553l-.003.001 1.058-.19a1.589 1.589 0 011.806 1.16l.002.013.264 1.065c.049.185.214.32.41.32a.42.42 0 00.288-.115l.793-.738a1.573 1.573 0 012.15.001h-.001l.793.737a.424.424 0 00.713-.213v-.003l.265-1.065a1.591 1.591 0 011.818-1.17l-.01-.002 1.057.19a.427.427 0 00.475-.557l.001.002-.336-1.038a1.598 1.598 0 01.88-1.964l.011-.004 1-.424a.427.427 0 00.127-.713zm-8.803 2.2L4.266 8.401l1.1-1.15 1.67 1.622 3.997-4.024 1.126 1.129-5.102 5.134z",
        fill: "#286EFA",
        fillRule: "nonzero"
      }));
      var name = this.props.default ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, this.props.name, icon) : this.props.name;
      var descstyles = {
        overflow: 'hidden',
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      };
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clazz
      }, /*#__PURE__*/React__default['default'].createElement(AccordionItemHeaderAlt, {
        className: "sui-accordion-item-header",
        state: open ? 'true' : 'false',
        title: name,
        image: this.props.image,
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        size: "5"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: descstyles
      }, this.props.description)), /*#__PURE__*/React__default['default'].createElement("div", null, this.props.showApplyButton && /*#__PURE__*/React__default['default'].createElement(Button, {
        label: this.props.applyLabel || 'Apply',
        design: "ghost",
        onClick: this.accordionHeadApplyClicked
      }), /*#__PURE__*/React__default['default'].createElement(Dropdown, {
        position: "right"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        name: this.props.applyLabel || 'Apply',
        icon: "check",
        onClick: applyAction
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        name: this.props.downloadLabel || 'Download',
        icon: "download",
        onClick: function onClick() {
          return downloadAction(_this2.props.id);
        }
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        name: this.props.editLabel || 'Name and Description',
        icon: "pencil",
        onClick: editAction
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        name: this.props.deleteLabel || 'Delete',
        icon: "trash",
        color: "red",
        onClick: deleteAction
      })))), /*#__PURE__*/React__default['default'].createElement(AccordionItemBody, null, /*#__PURE__*/React__default['default'].createElement(Box, null, /*#__PURE__*/React__default['default'].createElement(BoxBody, null, /*#__PURE__*/React__default['default'].createElement(Header$1, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Label, {
        className: "sui-label"
      }, this.props.name), /*#__PURE__*/React__default['default'].createElement(Description, {
        className: "sui-description"
      }, this.props.description)), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-tooltip",
        "data-tooltip": this.props.editLabel || 'Edit Name and Description'
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
        icon: "pencil",
        label: this.props.editLabel,
        design: "outlined",
        onClick: function onClick() {
          return editAction(_this2.props.id);
        }
      }))), /*#__PURE__*/React__default['default'].createElement(PresetsTable, null, this.props.children)), /*#__PURE__*/React__default['default'].createElement(BoxFooter, null, /*#__PURE__*/React__default['default'].createElement(Button, {
        label: this.props.applyLabel || 'Apply',
        icon: "check",
        design: "ghost",
        onClick: function onClick() {
          return applyAction(_this2.props.id);
        }
      })))));
    }
  }]);

  return PresetsAccordionItem;
}(React.Component);

var RequestHandler = /*#__PURE__*/function () {
  function RequestHandler(_ref) {
    var apiKey = _ref.apiKey,
        pluginData = _ref.pluginData,
        root = _ref.root,
        nonce = _ref.nonce,
        pluginRequests = _ref.pluginRequests,
        hubBaseURL = _ref.hubBaseURL;

    _classCallCheck(this, RequestHandler);

    this.apiKey = apiKey;
    this.pluginData = pluginData;
    this.root = root;
    this.nonce = nonce;
    this.pluginRequests = pluginRequests;
    this.hubBaseURL = hubBaseURL || 'https://wpmudev.com/api/hub/v1/package-configs';
  }
  /**
   * Deletes a config locally and from the Hub.
   *
   * @param {array} configs Current list of local configs.
   * @param {Object} currentConfig Config to delete.
   * @return {Promise}
   */


  _createClass(RequestHandler, [{
    key: "delete",
    value: function _delete(configs, currentConfig) {
      // Delete from the Hub when the config has a Hub ID and we have an API key.
      if (currentConfig.hub_id) {
        this.deleteFromHub(currentConfig.hub_id);
      }

      var configIndex = configs.findIndex(function (element) {
        return element.id === currentConfig.id;
      });

      if (-1 !== configIndex) {
        configs.splice(configIndex, 1);
      }

      return this.updateLocalConfigsList(configs);
    }
    /**
     * Adds a new config locally and to the Hub.
     *
     * @param {array} configs Current list of local configs.
     * @param {Object} newConfig Config data of the newly added config.
     * @return {Promise}
     */

  }, {
    key: "addNew",
    value: function addNew(configs, newConfig) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        newConfig.id = Date.now();

        if (_this.apiKey) {
          var hubId;

          _this.sendConfigToHub(newConfig).then(function (res) {
            hubId = res.id;
            newConfig.id = res.id;
            newConfig.hub_id = res.id;
            configs.push(newConfig);
            return _this.updateLocalConfigsList(configs);
          }).catch(function () {
            // Update the local list even if the Hub request fails.
            configs.push(newConfig);
            return _this.updateLocalConfigsList(configs);
          }).then(function (updatedConfigs) {
            return resolve(updatedConfigs);
          }).catch(function (res) {
            // There was an error saving the configs locally. Probably a schema mismatch.
            if (400 === res.status) {
              // Remove the recently submitted config from the hub.
              _this.deleteFromHub(hubId);
            }

            reject(res);
          });
        } else {
          configs.push(newConfig);
          resolve(_this.updateLocalConfigsList(configs));
        }
      });
    }
    /**
     * Edits the given config's name and description locally and in the Hub.
     *
     * @param {array} configs Current list of local configs.
     * @param {Object} currentConfig The config to edit.
     * @param {Object} data The new name and description for the config.
     *
     * @return {Promise}
     */

  }, {
    key: "edit",
    value: function edit(configs, currentConfig, configData) {
      // Edit in the Hub when the config has a Hub ID and we have an API key.
      if (this.apiKey && currentConfig.hub_id) {
        var hubData = Object.assign({
          package: this.pluginData
        }, configData); // This returns a 404 when the config doesn't exist in the Hub anymore.

        this.makeHubRequest("/".concat(currentConfig.hub_id), 'PATCH', JSON.stringify(hubData)).catch(function (res) {
          return console.log(res);
        });
      }

      var configIndex = configs.findIndex(function (element) {
        return element.id === currentConfig.id;
      });

      if (-1 !== configIndex) {
        configs[configIndex] = Object.assign({}, currentConfig, configData);
      }

      return this.updateLocalConfigsList(configs);
    }
    /**
     * Updates the locally stored list of configs replacing them with new ones.
     *
     * @param {array} newConfigs New list of configs to update locally.
     * @return {Promise}
     */

  }, {
    key: "updateLocalConfigsList",
    value: function updateLocalConfigsList(newConfigs) {
      var requestData = newConfigs.filter(function (element) {
        return element;
      });
      return this.makeLocalRequest('POST', JSON.stringify(requestData));
    }
    /**
     * Deletes the given config from the Hub.
     * The response is a 404 if the config doesn't exist in the Hub.
     *
     * @param {int} configId The ID of the config to delete.
     */

  }, {
    key: "deleteFromHub",
    value: function deleteFromHub(configId) {
      // Try to delete it in the Hub only if we have an API key.
      if (this.apiKey) {
        this.makeHubRequest("/".concat(configId), 'DELETE').catch(function (res) {
          return console.log(res);
        });
      }
    }
    /**
     * Handles the several requests needed for syncinc with the Hub.
     *
     * @param {array} localConfigs Local configs list.
     * @return {Promise} For when all the requests are handled.
     */

  }, {
    key: "syncWithHub",
    value: function syncWithHub(localConfigs) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!_this2.apiKey) {
          resolve(localConfigs);
        }

        _this2.makeHubRequest("?package_id=".concat(_this2.pluginData.id), 'GET').then(function (hubConfigs) {
          return _this2.getUpdatedLocalWithHub(localConfigs, hubConfigs);
        }).then(function () {
          return _this2.updateLocalConfigsList(localConfigs);
        }).then(function (syncRes) {
          return resolve(syncRes);
        }).catch(function (res) {
          return reject(res);
        });
      });
    }
    /**
     * Syncs the locally stored configs with the Hub.
     * What this does:
     * - Sends to the Hub the local configs that weren't sent already.
     * - Removes local configs that don't exist in the Hub.
     * - Updates the name and description of the local configs to the ones in the Hub.
     * - Retrieves the configs that exist in the Hub but not locally.
     *
     * @param {array} localConfigs Array with the local configs.
     * @param {array} hubConfigs Array with the Hub configs.
     * @returns
     */

  }, {
    key: "getUpdatedLocalWithHub",
    value: function getUpdatedLocalWithHub(localConfigs, hubConfigs) {
      var _this3 = this;

      var hubConfigsIds = hubConfigs.map(function (currentConfig) {
        return currentConfig.id;
      }),
          localConfigsIds = {};
      var hubPromises = [];

      var _iterator = _createForOfIteratorHelper(localConfigs.entries()),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              localOne = _step$value[1];

          // Skip checks for the basic config.
          if (localOne.default) {
            return "continue";
          } // Send to the Hub the configs that haven't been sent.


          if (!localOne.hub_id) {
            var sendToHubPromise = _this3.sendConfigToHub(localOne).then(function (res) {
              localConfigs[index]['id'] = res.id;
              localConfigs[index]['hub_id'] = res.id;
            });

            hubPromises.push(sendToHubPromise);
            return "continue";
          } // Find the configs that were removed from the hub and remove them locally.


          if (!hubConfigsIds[localOne.hub_id]) {
            delete localConfigs[index];
            return "continue";
          } // Keep the IDs and index of the local configs for reference later on.


          localConfigsIds[localOne.hub_id] = index;
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(hubConfigs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var hubOne = _step2.value;

          // Add the configs from the hub that aren't present locally.
          if (!localConfigsIds[hubOne.id]) {
            localConfigs.push({
              id: hubOne.id,
              hub_id: hubOne.id,
              name: hubOne.name,
              description: hubOne.description,
              config: JSON.parse(hubOne.config)
            });
            continue;
          } // Sync the name and description of local configs.


          var localIndex = localConfigsIds[hubOne.id],
              localConfig = localConfigs[localIndex];

          if (localConfig.name !== hubOne.name || localConfig.description !== hubOne.description) {
            localConfig.name = hubOne.name;
            localConfig.description = hubOne.description;
            localConfigs[localIndex] = localConfig;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return Promise.all(hubPromises);
    }
    /**
     * Sends the given config to the Hub.
     *
     * @param {Object} config Config to send to the Hub.
     * @return {Promise}
     */

  }, {
    key: "sendConfigToHub",
    value: function sendConfigToHub(config) {
      var configData = {
        name: config.name,
        description: config.description,
        package: this.pluginData,
        config: JSON.stringify(config.config)
      };
      return this.makeHubRequest('', 'POST', JSON.stringify(configData));
    }
    /**
     * Retrieves a new config from the uploaded file.
     * Triggered on the input's onChange.
     *
     * @param {Event} e File input.
     * @return {Promise} The promised AJAX request.
     */

  }, {
    key: "upload",
    value: function upload(e) {
      var data = new FormData(),
          fileInput = e.currentTarget.files;
      data.append('file', fileInput[0]);
      data.append('_ajax_nonce', this.pluginRequests.nonce);
      return this.makePluginRequest(this.pluginRequests.uploadAction, data);
    }
    /**
     * Retrieves a new config from the site's current settings.
     *
     * @param {FormData} data FormData with the given name and description for the new config.
     * @return {Promise} The promised AJAX request.
     */

  }, {
    key: "create",
    value: function create(data) {
      data.append('_ajax_nonce', this.pluginRequests.nonce);
      return this.makePluginRequest(this.pluginRequests.createAction, data);
    }
    /**
     * Applies the given config to the site.
     *
     * @param {Object} config Config to be applied.
     * @return {Promise} The promised AJAX request.
     */

  }, {
    key: "apply",
    value: function apply(config) {
      var data = new FormData();
      data.append('_ajax_nonce', this.pluginRequests.nonce);
      data.append('id', config.id);
      return this.makePluginRequest(this.pluginRequests.applyAction, data);
    }
    /**
     * Triggers requests handled by the WP Rest API.
     *
     * @param {string} verb HTTP request method.
     * @param {*} data Data to send with the request.
     * @return {Promise}
     */

  }, {
    key: "makeLocalRequest",
    value: function makeLocalRequest() {
      var verb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var headers = {
        'Content-type': 'application/json',
        'X-WP-Nonce': this.nonce
      };
      return this.makeRequest(this.root, verb, data, headers);
    }
    /**
     * Wrapper to make requests to the Hub.
     *
     * @param {string} path Extra path to append to this.hubBaseURL.
     * @param {string} verb HTTP request method.
     * @param {*} data Data to send with the request.
     * @return {Promise}
     */

  }, {
    key: "makeHubRequest",
    value: function makeHubRequest() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var verb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = {
        'Content-type': 'application/json',
        Authorization: 'Basic ' + this.apiKey
      };
      return this.makeRequest(this.hubBaseURL + path, verb, data, headers);
    }
    /**
     * Triggers AJAX requests that are handled by the plugin.
     *
     * @param {string} action Request action to be received in backend.
     * @param {*} data Request data.
     * @return {Promise} Promised request.
     */

  }, {
    key: "makePluginRequest",
    value: function makePluginRequest(action, data) {
      return this.makeRequest("".concat(ajaxurl, "?action=").concat(action), 'POST', data);
    }
    /**
    * Initiates and promesifies xhr requests.
    *
    * @param {*} data Request data.
    * @param {string} verb HTTP request method.
    * @return {Promise} Promised request.
    */

  }, {
    key: "makeRequest",
    value: function makeRequest(url) {
      var _this4 = this;

      var verb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(verb, url, true);
        xhr.addEventListener('load', function () {
          if ('ajax_callback' in _this4.pluginRequests) {
            var fn = _this4.pluginRequests.ajax_callback;
            window[fn](url, data, xhr);
          }
        });

        for (var header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }

        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr);
          }
        };

        xhr.onerror = function () {
          return reject(xhr);
        };

        xhr.send(data);
      });
    }
  }]);

  return RequestHandler;
}();

var _templateObject$5, _templateObject2$3, _templateObject3$2, _templateObject4$1;
var LoadingContent = styled__default['default'].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n.sui-wrap && {\n    position: relative;\n    z-index: 2;\n}\n"])));
var LoadingWrap = styled__default['default'].div(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n.sui-wrap && {\n    pointer-events: none;\n}"])));
var LoadingMask = styled__default['default'].div(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n.sui-wrap && {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(255,255,255,0.95);\n    border-radius: 0 0 4px 4px;\n\n    > p {\n\n    }\n}\n"])));
var StyledSyncButton = styled__default['default'].button(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tcolor: #17A8E3;\n\tfont-weight: 500;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tdisplay: inline;\n\tmargin: 0;\n\tpadding: 0;\n}\n"])));
var RequestsHandler;
var Presets = function Presets(_ref) {
  var isWidget = _ref.isWidget,
      isPro = _ref.isPro,
      isWhitelabel = _ref.isWhitelabel,
      requestsData = _ref.requestsData,
      sourceUrls = _ref.sourceUrls,
      sourceLang = _ref.sourceLang;

  var _React$useState = React__default['default'].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      configs = _React$useState2[0],
      setConfigs = _React$useState2[1];

  var _React$useState3 = React__default['default'].useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoading = _React$useState4[0],
      setIsLoading = _React$useState4[1]; // Modals-related states.


  var _React$useState5 = React__default['default'].useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentConfig = _React$useState6[0],
      setCurrentConfig = _React$useState6[1];

  var _React$useState7 = React__default['default'].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isApplyOpen = _React$useState8[0],
      setIsApplyOpen = _React$useState8[1];

  var _React$useState9 = React__default['default'].useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isDeleteOpen = _React$useState10[0],
      setIsDeleteOpen = _React$useState10[1];

  var _React$useState11 = React__default['default'].useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isEditOpen = _React$useState12[0],
      setIsEditOpen = _React$useState12[1];

  var urls = Object.assign({
    freeNoticeHub: 'https://wpmudev.com/hub-welcome/',
    hubMyConfigs: 'https://wpmudev.com/hub2/configs/my-configs',
    configsPage: '#',
    accordionImg: null
  }, sourceUrls);
  var lang = Object.assign({
    title: 'Preset configs',
    upload: 'Upload',
    save: 'Save config',
    manageConfigs: 'Manage configs',
    loading: 'Updating the config list…',
    emptyNotice: 'You don’t have any available config. Save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
    baseDescription: 'Use configs to save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
    proDescription: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, 'You can easily apply configs to multiple sites at once via ', /*#__PURE__*/React__default['default'].createElement("a", {
      href: urls.hubMyConfigs,
      target: "_blank",
      rel: "noreferrer"
    }, 'the Hub.')),
    widgetDescription: 'Use configs to save preset configurations of your settings.',
    syncWithHubText: 'Created or updated the configs via the Hub?',
    syncWithHubButton: 'Re-check to get the updated list.',
    apply: 'Apply',
    download: 'Download',
    edit: 'Name and Description',
    delete: 'Delete',
    freeNoticeMessage: 'Tired of saving, downloading and uploading your configs across your sites? WPMU DEV members use The Hub to easily apply configs to multiple sites at once… Try it free today!',
    freeButtonLabel: 'Try The Hub',
    notificationDismiss: 'Dismiss notice',
    defaultRequestError: 'Request failed. Status: {status}. Please reload the page and try again.',
    uploadWrongPluginErrorMessage: 'The uploaded file is not a {pluginName} Config. Please make sure the uploaded file is correct.',
    uploadActionSuccessMessage: '{configName} config has been uploaded successfully – you can now apply it to this site.',
    applyAction: {
      successMessage: '{configName} config has been applied successfully.'
    },
    editAction: {
      successMessage: '{configName} config created successfully.'
    },
    deleteAction: {},
    settingsLabels: {}
  }, sourceLang);
  React__default['default'].useEffect(function () {
    RequestsHandler = new RequestHandler(requestsData);
    retrieveConfigs();
  }, []);

  var retrieveConfigs = function retrieveConfigs() {
    setIsLoading(true);
    RequestsHandler.makeLocalRequest().then(function (newConfigs) {
      return setConfigs(newConfigs || []);
    }).catch(function (res) {
      return requestFailureNotice(res);
    }).then(function () {
      return setIsLoading(false);
    });
  };

  var handleUpload = function handleUpload(e) {
    var newConfigName;
    RequestsHandler.upload(e).then(function (res) {
      if (res.data && res.data.config) {
        // The downloads from the first version won't have this.
        if (res.data.plugin) {
          // Bail out if the uploaded config doesn't belong to this plugin.
          if (res.data.plugin !== requestsData.pluginData.id) {
            throw {
              data: {
                error_msg: lang.uploadWrongPluginErrorMessage.replace('{pluginName}', requestsData.pluginData.name)
              }
            };
          } // We don't need this.


          delete res.data.plugin;
        }

        res.data.name = res.data.name.substring(0, 200);
        res.data.description = res.data.description.substring(0, 200);
        newConfigName = res.data.name;
        return RequestsHandler.addNew(configs, res.data);
      } // Throw otherwise.


      throw res;
    }).then(function (updatedConfigs) {
      setConfigs(updatedConfigs);
      successNotice(lang.uploadActionSuccessMessage.replace('{configName}', newConfigName));
    }).catch(function (res) {
      return requestFailureNotice(res);
    });
  };

  var handleDelete = function handleDelete() {
    RequestsHandler.delete(_toConsumableArray(configs), currentConfig).then(function (newConfigs) {
      return setConfigs(newConfigs);
    }).catch(function (res) {
      return requestFailureNotice(res);
    }).then(function () {
      return setIsDeleteOpen(false);
    });
  };

  var handleEdit = function handleEdit(data, displayErrorMessage) {
    var configData = {
      name: data.get('name').substring(0, 200),
      description: data.get('description').substring(0, 200)
    }; // Editing a config.

    if (currentConfig) {
      RequestsHandler.edit(_toConsumableArray(configs), currentConfig, configData).then(function (newConfigs) {
        return setConfigs(newConfigs);
      }).catch(function (res) {
        return requestFailureNotice(res);
      }).then(function () {
        return setIsEditOpen(false);
      });
      return;
    } // Creating a new config.


    RequestsHandler.create(data).then(function (res) {
      if (res.data && res.data.config) {
        configData.config = res.data.config;
        return RequestsHandler.addNew(_toConsumableArray(configs), configData);
      }

      if (!res.success) {
        displayErrorMessage(res.data.error_msg);
      }
    }).then(function (updatedConfigs) {
      setConfigs(updatedConfigs);
      setIsEditOpen(false);
      successNotice(lang.editAction.successMessage.replace('{configName}', configData.name));
    }).catch(function (res) {
      return requestFailureNotice(res);
    });
  };

  var handleApply = function handleApply() {
    RequestsHandler.apply(currentConfig).then(function (res) {
      setIsApplyOpen(false);

      if (!res.success) {
        requestFailureNotice(res);
        return;
      }

      successNotice(lang.applyAction.successMessage.replace('{configName}', currentConfig.name));
    }).catch(function (res) {
      return requestFailureNotice(res);
    });
  };

  var handleSyncWithHub = function handleSyncWithHub() {
    setIsLoading(true);
    RequestsHandler.syncWithHub(_toConsumableArray(configs)).then(function (newConfigs) {
      return setConfigs(newConfigs);
    }).catch(function (res) {
      return requestFailureNotice(res);
    }).then(function () {
      return setIsLoading(false);
    });
  };

  var doDownload = function doDownload(clickedConfig) {
    var config = Object.assign({}, configs.find(function (item) {
      return clickedConfig.id === item.id;
    }));

    if (!config || !Object.keys(config).length) {
      return;
    } // Include the ID of the plugin this config belongs to.


    config.plugin = requestsData.pluginData.id; // This is unique per site.

    delete config.hub_id; // Avoid having multiple defaults on upload.

    delete config.default;
    var blob = new Blob([JSON.stringify(config, null, 2)], {
      type: 'application/json'
    });
    var pluginName = requestsData.pluginData.name.toLowerCase().replace(' ', '-'),
        configName = config.name.replace(/[^a-z0-9_-]/gi, '_').toLowerCase(),
        url = window.URL.createObjectURL(blob),
        a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = "wp-".concat(pluginName, "-config-").concat(configName);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  var isEmpty = !configs || 0 === configs.length;

  var openModal = function openModal(action, config) {
    setCurrentConfig(config);

    if ('apply' === action) {
      setIsApplyOpen(true);
    } else if ('delete' === action) {
      setIsDeleteOpen(true);
    } else {
      setIsEditOpen(true);
    }
  }; // Notifications.


  var successNotice = function successNotice(message) {
    window.SUI.openNotice('sui-configs-floating-notice', "<p>".concat(message, "</p>"), {
      type: 'success',
      icon: 'check-tick',
      dismiss: {
        show: true,
        label: lang.notificationDismiss
      }
    });
  };

  var requestFailureNotice = function requestFailureNotice(res) {
    var message;

    if (res.data) {
      message = res.data.error_msg;
    } else if (res.status && 403 === res.status) {
      message = lang.defaultRequestError.replace('{status}', res.status);
    } else {
      window.console.log(res);
      message = 'Error. Please check the browser console';
    }

    if (undefined !== message) {
      window.SUI.openNotice('sui-configs-floating-notice', "<p>".concat(message, "</p>"), {
        type: 'error',
        icon: 'info',
        dismiss: {
          show: true,
          label: lang.notificationDismiss
        }
      });
    }
  }; // End of notifications.


  var tableImage = !isWhitelabel ? urls.accordionImg : null;
  var Pagination = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-pagination-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-pagination-results"
  }, "25 results"), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "sui-pagination"
  }, /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: "",
    disabled: ""
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-arrow-skip-back",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, "Go to first page"))), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: "",
    disabled: ""
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-chevron-left",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, "Previous page"))), /*#__PURE__*/React__default['default'].createElement("li", {
    className: "sui-active"
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, "1")), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, "2")), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, "3")), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, "4")), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, "5")), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-chevron-right",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, "Next page"))), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: ""
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-arrow-skip-forward",
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, "Go to last page"))))));
  var Table = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !isEmpty && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-accordion sui-accordion-flushed",
    style: {
      borderBottomWidth: 0
    }
  }, configs.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(PresetsAccordionItem, {
      key: item.id,
      id: item.id,
      default: item.default,
      name: item.name,
      description: item.description,
      image: tableImage,
      showApplyButton: !isWidget,
      applyLabel: lang.apply,
      applyAction: function applyAction() {
        return openModal('apply', item);
      },
      downloadLabel: lang.download,
      downloadAction: function downloadAction() {
        return doDownload(item);
      },
      editLabel: lang.edit,
      editAction: function editAction() {
        return openModal('edit', item);
      },
      deleteLabel: lang.delete,
      deleteAction: function deleteAction() {
        return openModal('delete', item);
      }
    }, Object.keys(item.config.strings).map(function (name) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: name,
        name: lang.settingsLabels[name],
        status: item.config.strings[name]
      });
    }));
  })), Pagination);

  var getFooter = function getFooter() {
    if (isWidget) {
      return /*#__PURE__*/React__default['default'].createElement(BoxFooter, null, /*#__PURE__*/React__default['default'].createElement(Button, {
        icon: "save",
        label: lang.save,
        color: "blue",
        onClick: function onClick() {
          return openModal('edit', null);
        }
      }), /*#__PURE__*/React__default['default'].createElement(Button, {
        icon: "wrench-tool",
        label: lang.manageConfigs,
        design: "ghost",
        href: urls.configsPage
      }));
    }

    if (isPro) {
      return /*#__PURE__*/React__default['default'].createElement(BoxFooter, {
        display: "block",
        alignment: "center",
        paddingTop: isEmpty ? 0 : 30,
        border: isEmpty ? 0 : 1
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        className: "sui-description"
      }, lang.syncWithHubText, " ", ' ', /*#__PURE__*/React__default['default'].createElement(StyledSyncButton, {
        onClick: handleSyncWithHub
      }, lang.syncWithHubButton)));
    }

    return /*#__PURE__*/React__default['default'].createElement(BoxFooter, {
      display: "block"
    }, /*#__PURE__*/React__default['default'].createElement(Notifications, {
      type: "upsell"
    }, /*#__PURE__*/React__default['default'].createElement("p", null, lang.freeNoticeMessage), /*#__PURE__*/React__default['default'].createElement("p", null, /*#__PURE__*/React__default['default'].createElement(Button, {
      label: lang.freeButtonLabel,
      color: "purple",
      href: urls.freeNoticeHub,
      target: "_blank"
    }))));
  };

  var getDescription = function getDescription() {
    if (isWidget) {
      return /*#__PURE__*/React__default['default'].createElement("p", null, lang.widgetDescription);
    }

    return /*#__PURE__*/React__default['default'].createElement("p", null, lang.baseDescription + ' ', isPro && !isWhitelabel && lang.proDescription);
  };

  var headerArgs = {
    title: lang.title
  };

  if (isWidget) {
    headerArgs.titleIcon = 'wrench-tool';

    if (!isEmpty) {
      headerArgs.tagLabel = configs.length;
    }
  }

  var PresetsHeader = /*#__PURE__*/React__default['default'].createElement(BoxHeader, headerArgs, !isWidget && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-actions-right"
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: "upload-cloud",
    label: lang.upload,
    design: "ghost",
    htmlFor: "sui-upload-configs-input"
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "sui-upload-configs-input",
    type: "file",
    name: "config_file",
    className: "sui-hidden",
    value: "",
    readOnly: "readonly",
    onChange: handleUpload,
    accept: ".json"
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "button",
    icon: "save",
    label: lang.save,
    color: "blue",
    onClick: function onClick() {
      return openModal('edit', null);
    }
  })));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-floating-notices"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    role: "alert",
    id: "sui-configs-floating-notice",
    className: "sui-notice",
    "aria-live": "assertive"
  })), /*#__PURE__*/React__default['default'].createElement(Box, null, PresetsHeader, /*#__PURE__*/React__default['default'].createElement(BoxBody, null, getDescription(), !isLoading && isEmpty && /*#__PURE__*/React__default['default'].createElement(Notifications, {
    type: "info"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, lang.emptyNotice))), isLoading && /*#__PURE__*/React__default['default'].createElement(LoadingContent, null, /*#__PURE__*/React__default['default'].createElement(LoadingWrap, {
    "aria-hidden": "true"
  }, Table, getFooter()), /*#__PURE__*/React__default['default'].createElement(LoadingMask, null, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    "aria-hidden": "true",
    style: {
      marginRight: 10
    }
  }), lang.loading))), !isLoading && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, Table, getFooter())), isApplyOpen && /*#__PURE__*/React__default['default'].createElement(ApplyModal, {
    setOpen: setIsApplyOpen,
    config: currentConfig,
    save: handleApply,
    strings: lang.applyAction,
    callback: requestsData.pluginRequests.callback
  }), isDeleteOpen && /*#__PURE__*/React__default['default'].createElement(DeleteModal, {
    setOpen: setIsDeleteOpen,
    config: currentConfig,
    save: handleDelete,
    strings: lang.deleteAction
  }), isEditOpen && /*#__PURE__*/React__default['default'].createElement(EditModal, {
    setOpen: setIsEditOpen,
    config: currentConfig,
    save: handleEdit,
    strings: lang.editAction
  }));
};

exports.Presets = Presets;
