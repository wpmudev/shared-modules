'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function _iterableToArrayLimit$3(arr, i) {
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
function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$7(obj, key, value) {
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
function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$7.apply(this, arguments);
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$3(o);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
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
      it = it.call(o);
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
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

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
var deviceMax = {
  mobile: "(max-width: ".concat(screen$1.mobile, "px)"),
  tablet: "(max-width: ".concat(screen$1.tablet, "px)"),
  laptop: "(max-width: ".concat(screen$1.laptop, "px)"),
  desktop: "(max-width: ".concat(screen$1.desktop, "px)")
};

function _extends$6() {
  _extends$6 = Object.assign || function (target) {
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
  return _extends$6.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$a(source, excluded) {
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
function _objectWithoutProperties$a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$a(source, excluded);
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
function _templateObject3$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);
  _templateObject3$2 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2$3() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\tborder-bottom-width: ", "px;\n\ttext-align: ", ";\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);
  _templateObject2$3 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject$5() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-bottom-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);
  _templateObject$5 = function _templateObject() {
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
    props = _objectWithoutProperties$a(_ref, ["children", "className"]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends$6({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box ".concat(className) : 'sui-box'
  }, props), children);
};
styled__default["default"].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject$5(), function (props) {
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
var Body = styled__default["default"].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject2$3(), function (props) {
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
    props = _objectWithoutProperties$a(_ref4, ["className", "children"]);
  return /*#__PURE__*/React__default["default"].createElement(Body, _extends$6({
    className: className
  }, props), children);
};
var Footer = styled__default["default"].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3$2(), function (props) {
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
    props = _objectWithoutProperties$a(_ref5, ["className", "children"]);
  return /*#__PURE__*/React__default["default"].createElement(Footer, _extends$6({
    className: className
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
function _defineProperty$6(obj, key, value) {
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
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
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
function ownKeys$6(object, enumerableOnly) {
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
function _objectSpread2$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function (key) {
        _defineProperty$1$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$9(source, excluded) {
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
function _objectWithoutProperties$9(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$9(source, excluded);
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
var ButtonIcon$4 = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? "solid" : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$9(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);
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
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$6({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};
var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$2(Notifications, _Component);
  var _super = _createSuper$2(Notifications);
  function Notifications(props) {
    var _this;
    _classCallCheck$2(this, Notifications);
    _this = _super.call(this, props);
    _defineProperty$6(_assertThisInitialized$2(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });
    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$2(_this));
    return _this;
  }
  _createClass$2(Notifications, [{
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
      }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$4, {
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

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) {
      _defineProperty$5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _objectWithoutPropertiesLoose$8(source, excluded) {
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
function _objectWithoutProperties$8(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$8(source, excluded);
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
var _excluded$5 = ["label", "icon", "iconRight", "design", "color", "className", "loading"];
var Button$1 = function Button(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconRight = _ref.iconRight,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? 'solid' : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$8(_ref, _excluded$5);
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
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$5({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
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
  return _extends$5.apply(this, arguments);
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
var _excluded$4 = ["type", "label", "labelId", "id", "name", "image", "defaultChecked", "disabled"];
var RadioCheckboxInput$1 = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
    label = _ref.label,
    labelId = _ref.labelId,
    id = _ref.id,
    name = _ref.name,
    image = _ref.image,
    defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    props = _objectWithoutProperties$7(_ref, _excluded$4);
  var mainClasses = ["sui-".concat(type)];
  if (props.size === 'small') {
    mainClasses.push("sui-".concat(type, "-sm"));
  }
  if (props.stacked) {
    mainClasses.push("sui-".concat(type, "-stacked"));
  }
  return image ? /*#__PURE__*/React__default["default"].createElement("label", {
    className: "sui-".concat(type, "-image"),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image.src,
    srcSet: image.srcset,
    alt: image.alt
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: mainClasses.join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends$5({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    disabled: disabled,
    checked: defaultChecked
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label))) : /*#__PURE__*/React__default["default"].createElement("label", {
    className: mainClasses.join(' '),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends$5({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    checked: defaultChecked,
    disabled: disabled
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label));
};

function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) {
      _defineProperty$4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) {
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
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
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$2(arr, i) {
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
}

// https://github.com/davidtheclark/no-scroll/blob/master/index.js
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
}

// https://github.com/davidtheclark/tabbable/blob/master/src/index.js
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
  var config = _objectSpread2$4({
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
  _inherits$1(ReactFocusTrap, _React$Component);
  var _super = _createSuper$1(ReactFocusTrap);
  function ReactFocusTrap(props) {
    var _this;
    _classCallCheck$1(this, ReactFocusTrap);
    _this = _super.call(this, props);
    _this.setFocusTrapElement = function (element) {
      _this.focusTrapElement = element;
    };
    if (typeof document !== 'undefined') {
      _this.previouslyFocusedElement = document.activeElement;
    }
    return _this;
  }
  _createClass$1(ReactFocusTrap, [{
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
    _inherits$1(Displaced, _React$Component);
    var _super = _createSuper$1(Displaced);
    function Displaced() {
      _classCallCheck$1(this, Displaced);
      return _super.apply(this, arguments);
    }
    _createClass$1(Displaced, [{
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
  _inherits$1(Modal, _React$Component);
  var _super = _createSuper$1(Modal);
  function Modal(props) {
    var _this;
    _classCallCheck$1(this, Modal);
    _this = _super.call(this, props);
    _defineProperty$4(_assertThisInitialized$1(_this), "clearTimer", function () {
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
      if (_this.dialogNode && event.target instanceof Node && _this.dialogNode.contains(event.target) ||
      // If the click is on the scrollbar we don't want to close the modal.
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
  _createClass$1(Modal, [{
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
      var childrenArray = [/*#__PURE__*/React__default["default"].createElement('div', _objectSpread2$4({}, dialogProps), props.children)];
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
      }, /*#__PURE__*/React__default["default"].createElement('div', _objectSpread2$4({}, underlayProps), childrenArray));
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
var _excluded$3 = ["modalContent", "triggerContent"];
var Modal = function Modal(_ref) {
  var modalContent = _ref.modalContent,
    triggerContent = _ref.triggerContent,
    props = _objectWithoutProperties$6(_ref, _excluded$3);
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray$2(_React$useState, 2),
    isOpen = _React$useState2[0],
    setIsOpen = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(false),
    _React$useState4 = _slicedToArray$2(_React$useState3, 2),
    isClosing = _React$useState4[0],
    setIsClosing = _React$useState4[1]; // States for sliders.

  var _React$useState5 = React__default["default"].useState(props.firstSlide),
    _React$useState6 = _slicedToArray$2(_React$useState5, 2),
    currentSlide = _React$useState6[0],
    setCurrentSlide = _React$useState6[1];
  var _React$useState7 = React__default["default"].useState(null),
    _React$useState8 = _slicedToArray$2(_React$useState7, 2),
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
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(AltModal, _extends$4({
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

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) {
      _defineProperty$3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
var _excluded = ["label", "icon", "iconSize", "design", "color", "className", "loading"];
var ButtonIcon$3 = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? 'solid' : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$5(_ref, _excluded);
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
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$3({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var ApplyModal = function ApplyModal(_ref) {
  var setOpen = _ref.setOpen,
    config = _ref.config,
    save = _ref.save,
    _ref$strings = _ref.strings,
    strings = _ref$strings === void 0 ? {} : _ref$strings;
  var _strings$closeIcon = strings.closeIcon,
    closeIcon = _strings$closeIcon === void 0 ? 'Close this dialog window' : _strings$closeIcon,
    _strings$title = strings.title,
    title = _strings$title === void 0 ? 'Apply Config' : _strings$title,
    _strings$description = strings.description,
    description = _strings$description === void 0 ? 'Are you sure you want to apply the {configName} config to this site? We recommend you have a backup available as your existing settings configuration will be overridden.' : _strings$description,
    _strings$cancelButton = strings.cancelButton,
    cancelButton = _strings$cancelButton === void 0 ? 'Cancel' : _strings$cancelButton,
    _strings$actionButton = strings.actionButton,
    actionButton = _strings$actionButton === void 0 ? 'Apply' : _strings$actionButton;
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray$3(_React$useState, 2),
    isSaving = _React$useState2[0],
    setIsSaving = _React$useState2[1];
  var doAction = function doAction() {
    setIsSaving(true);
    save();
  };
  var modalContent = function modalContent() {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$3, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement("h2", {
      id: "sui-config-edit-title"
    }, title), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "sui-description"
    }, description.replace('{configName}', config.name))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60"
    }, /*#__PURE__*/React__default["default"].createElement(Button$1, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement(Button$1, {
      color: "blue",
      icon: "check",
      label: actionButton,
      onClick: doAction,
      loading: isSaving
    })));
  };
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
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
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray$3(_React$useState, 2),
    isSaving = _React$useState2[0],
    setIsSaving = _React$useState2[1];
  var configNames = config.map(function (config) {
    return config.name;
  });
  var doAction = function doAction() {
    setIsSaving(true);
    save(config);
  };
  var modalContent = function modalContent() {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$3, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement("h2", {
      id: "smush-config-delete-title"
    }, title), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "sui-description"
    }, description.replace('{configName}', configNames.join(', ')))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-footer sui-content-center sui-flatten sui-spacing-top--0 sui-spacing-bottom--60"
    }, /*#__PURE__*/React__default["default"].createElement(Button$1, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement(Button$1, {
      color: "red",
      label: actionButton,
      onClick: doAction,
      loading: isSaving
    })));
  };
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    mounted: true,
    dialogId: "sui-configs-delete-modal",
    titleId: "sui-config-delete-title",
    size: "sm",
    modalContent: modalContent
  });
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
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit$1(arr, i) {
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
var _excluded$1$1 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];
var ButtonIcon$2 = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? 'solid' : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$4(_ref, _excluded$1$1);
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
var _excluded2 = ["id", "label", "description", "type", "errorStatus", "errorDescription", "size", "fieldSize", "suffix", "prefix"];
var InputWithRef = /*#__PURE__*/React__default["default"].forwardRef(function (_ref2, ref) {
  var id = _ref2.id,
    label = _ref2.label,
    description = _ref2.description,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? 'text' : _ref2$type,
    errorStatus = _ref2.errorStatus,
    errorDescription = _ref2.errorDescription,
    size = _ref2.size,
    fieldSize = _ref2.fieldSize,
    suffix = _ref2.suffix,
    prefix = _ref2.prefix,
    props = _objectWithoutProperties$1$1(_ref2, _excluded2);
  var uniqueId = id && '' !== id ? id : props.property;
  var _useState3 = React.useState(true),
    _useState4 = _slicedToArray$1(_useState3, 2),
    showIcon = _useState4[0],
    setShowIcon = _useState4[1];
  var fieldClasses = 'sui-form-field';
  switch (fieldSize) {
    case 'sm':
    case 'small':
      fieldClasses += ' sui-input-sm';
      break;
    case 'md':
    case 'medium':
      fieldClasses += ' sui-input-md';
      break;
  }
  if (errorStatus) {
    fieldClasses += ' sui-form-field-error';
  }
  var inputClasses = 'sui-form-control';
  suffix && (inputClasses += ' sui-field-has-suffix');
  prefix && (inputClasses += ' sui-field-has-prefix');
  switch (size) {
    case 'sm':
    case 'small':
      inputClasses += ' sui-input-sm';
      break;
    case 'md':
    case 'medium':
      inputClasses += ' sui-input-md';
      break;
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: fieldClasses
  }, label && /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), prefix && /*#__PURE__*/React__default["default"].createElement("span", {
    "class": "sui-field-prefix"
  }, prefix), type === 'password' ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-with-button sui-with-button-icon"
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends$3({
    id: uniqueId,
    type: showIcon ? type : 'text',
    className: inputClasses,
    ref: ref
  }, props)), /*#__PURE__*/React__default["default"].createElement(ButtonIcon$2, {
    icon: showIcon ? "eye" : "eye-hide",
    label: showIcon ? "Show password" : "Hide password",
    onClick: function onClick() {
      setShowIcon(!showIcon);
    }
  })) : /*#__PURE__*/React__default["default"].createElement("input", _extends$3({
    id: uniqueId,
    type: type,
    className: inputClasses,
    ref: ref
  }, props)), suffix && /*#__PURE__*/React__default["default"].createElement("span", {
    "class": "sui-field-suffix"
  }, suffix), errorStatus && errorDescription && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-error-message"
  }, errorDescription), description && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-description"
  }, description));
});

var EditModal = function EditModal(_ref) {
  var setOpen = _ref.setOpen,
    config = _ref.config,
    save = _ref.save,
    _ref$strings = _ref.strings,
    strings = _ref$strings === void 0 ? {} : _ref$strings;
  var configName = config ? config.name : '',
    configDescription = config ? config.description : '';
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray$3(_React$useState, 2),
    errorMessage = _React$useState2[0],
    setErrorMessage = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(false),
    _React$useState4 = _slicedToArray$3(_React$useState3, 2),
    isSaving = _React$useState4[0],
    setIsSaving = _React$useState4[1];
  var nameValue = React__default["default"].useRef(configName);
  var descriptionValue = React__default["default"].useRef(configDescription);
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
    if (!nameValue.current.trim().length) {
      setErrorMessage(emptyNameError);
      return;
    }
    setErrorMessage(false);
    setIsSaving(true);
    var data = new FormData();
    data.append('name', nameValue.current);
    data.append('description', descriptionValue.current);
    save(data, displayErrorMessage);
  };
  var modalContent = function modalContent() {
    // If a config is provided, we're editing a config. We're saving a new one otherwise.
    var title = config ? editTitle : createTitle,
      description = config ? editDescription : createDescription;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-header sui-flatten sui-content-center sui-spacing-top--60"
    }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$3, {
      label: closeIcon,
      icon: "close",
      iconSize: "md",
      className: "sui-button-float--right",
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement("h2", {
      id: "sui-config-edit-title"
    }, title), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "sui-description"
    }, description)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-body"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      role: "alert",
      id: "configs-edit-modal-error-message",
      className: "sui-notice sui-notice-error",
      "aria-live": "assertive",
      style: {
        display: errorMessage ? 'block' : ''
      }
    }, errorMessage && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-notice-content"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-notice-message"
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sui-notice-icon sui-icon-info sui-md",
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default["default"].createElement("p", null, errorMessage)))), /*#__PURE__*/React__default["default"].createElement(InputWithRef, {
      label: nameInput,
      name: "name",
      defaultValue: nameValue.current,
      onChange: function onChange(e) {
        return nameValue.current = e.target.value;
      },
      maxLength: "200"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-form-field"
    }, /*#__PURE__*/React__default["default"].createElement("label", {
      className: "sui-label",
      htmlFor: "sui-edit-config-textarea"
    }, descriptionInput), /*#__PURE__*/React__default["default"].createElement("textarea", {
      id: "sui-edit-config-textarea",
      className: "sui-form-control",
      name: "description",
      defaultValue: descriptionValue.current,
      onChange: function onChange(e) {
        return descriptionValue.current = e.target.value;
      },
      maxLength: "200"
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sui-box-footer sui-content-separated sui-flatten sui-spacing-top--0"
    }, /*#__PURE__*/React__default["default"].createElement(Button$1, {
      design: "ghost",
      label: cancelButton,
      onClick: function onClick() {
        return setOpen(false);
      }
    }), /*#__PURE__*/React__default["default"].createElement(Button$1, {
      color: "blue",
      icon: "save",
      label: actionButton,
      onClick: doAction,
      loading: isSaving
    })));
  };
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    mounted: true,
    dialogId: "sui-configs-edit-modal",
    titleId: "sui-config-edit-title",
    size: "sm",
    modalContent: modalContent
  });
};

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
var _excluded$2 = ["label", "icon", "iconSize", "design", "color", "className", "loading"];
var ButtonIcon$1 = function ButtonIcon(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$design = _ref.design,
    design = _ref$design === void 0 ? 'solid' : _ref$design,
    color = _ref.color,
    className = _ref.className,
    loading = _ref.loading,
    props = _objectWithoutProperties$1(_ref, _excluded$2);
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
  return /*#__PURE__*/React__default["default"].createElement(htmlTag, _objectSpread2$1({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
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
var _excluded$1 = ["type", "label", "labelId", "id", "name", "image", "defaultChecked", "disabled"];
var RadioCheckboxInput = function RadioCheckboxInput(_ref) {
  var type = _ref.type,
    label = _ref.label,
    labelId = _ref.labelId,
    id = _ref.id,
    name = _ref.name,
    image = _ref.image,
    defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    props = _objectWithoutProperties$3(_ref, _excluded$1);
  var mainClasses = ["sui-".concat(type)];
  if (props.size === 'small') {
    mainClasses.push("sui-".concat(type, "-sm"));
  }
  if (props.stacked) {
    mainClasses.push("sui-".concat(type, "-stacked"));
  }
  return image ? /*#__PURE__*/React__default["default"].createElement("label", {
    className: "sui-".concat(type, "-image"),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image.src,
    srcSet: image.srcset,
    alt: image.alt
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: mainClasses.join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends$2({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    disabled: disabled,
    checked: defaultChecked
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label))) : /*#__PURE__*/React__default["default"].createElement("label", {
    className: mainClasses.join(' '),
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends$2({
    id: id,
    type: type,
    name: name,
    "aria-labelledby": labelId,
    checked: defaultChecked,
    disabled: disabled
  }, props)), /*#__PURE__*/React__default["default"].createElement("span", {
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    id: labelId
  }, label));
};
var _excluded3 = ["title", "titleSize", "icon", "image", "children", "checkboxInput", "checkboxId", "checkboxName", "checkboxLabel", "checkboxSelected", "checkboxClickHandler"],
  _excluded4 = ["children"];
var _templateObject$4;
var ItemImage = styled__default["default"].span(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral$1(["\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n\tborder-radius: 10px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n"])));
var AccordionItemHeader = function AccordionItemHeader(_ref3) {
  var title = _ref3.title,
    titleSize = _ref3.titleSize,
    icon = _ref3.icon,
    image = _ref3.image,
    children = _ref3.children,
    checkboxInput = _ref3.checkboxInput,
    checkboxId = _ref3.checkboxId,
    checkboxName = _ref3.checkboxName,
    checkboxLabel = _ref3.checkboxLabel,
    checkboxSelected = _ref3.checkboxSelected,
    checkboxClickHandler = _ref3.checkboxClickHandler,
    props = _objectWithoutProperties$2(_ref3, _excluded3);
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 1),
    isOpen = _useState4[0];
  var childrenData = Array.isArray(children) ? children.filter(function (child) {
    return 'boolean' !== typeof child && null != child && '' !== child;
  }) : 'boolean' === typeof children || '' === children ? [] : children;
  var countChildren = React__default["default"].Children.toArray(childrenData).length;
  var titleColumnIcon = 'undefined' !== typeof icon && '' !== icon ? /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }) : '';
  var titleColumnImage = 'undefined' !== typeof image && '' !== image ? /*#__PURE__*/React__default["default"].createElement(ItemImage, {
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : '';
  var titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize ? ' sui-accordion-col-' + titleSize : '';
  var checkboxItem = checkboxInput ? /*#__PURE__*/React__default["default"].createElement(RadioCheckboxInput, {
    type: "checkbox",
    id: checkboxId,
    name: checkboxName,
    defaultChecked: checkboxSelected,
    onChange: checkboxClickHandler,
    label: checkboxLabel
  }) : '';
  var titleColumn = /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-accordion-item-title".concat(titleColumnSize)
  }, checkboxItem, titleColumnIcon, titleColumnImage, title);
  var indicator = /*#__PURE__*/React__default["default"].createElement(ButtonIcon$1, {
    icon: "chevron-down",
    label: isOpen ? 'Close section' : 'Open section',
    className: "sui-button-icon sui-accordion-open-indicator"
  });
  var columns = React__default["default"].Children.map(childrenData, function (column, index) {
    index++;
    var columnSize = column.props.size;
    var columnClass = 'undefined' !== typeof columnSize && '' !== columnSize ? 'sui-accordion-col-' + columnSize : 'sui-accordion-col-auto';
    var columnContent = column.props.children;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: columnClass
    }, columnContent, countChildren === index && indicator);
  });
  var actions = /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-accordion-col-auto"
  }, indicator);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends$1({
    className: "sui-accordion-item-header"
  }, props), titleColumn, countChildren > 0 ? columns : actions);
};
var AccordionItemBody = function AccordionItemBody(_ref4) {
  var children = _ref4.children,
    props = _objectWithoutProperties$2(_ref4, _excluded4);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends$1({
    className: "sui-accordion-item-body"
  }, props), children);
};

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
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
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
function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);
  _templateObject2$2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    [class*=\"sui-icon-\"]:before {\n        color: inherit !important;\n    }\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);
  _templateObject$3 = function _templateObject() {
    return data;
  };
  return data;
}
var Link = styled__default["default"].a(_templateObject$3(), function (props) {
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
var Button = styled__default["default"].button(_templateObject2$2(), function (props) {
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
  _inherits(Dropdown, _Component);
  var _super = _createSuper(Dropdown);
  function Dropdown(props) {
    var _this;
    _classCallCheck(this, Dropdown);
    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.wrapperRef = /*#__PURE__*/React__default["default"].createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Dropdown, [{
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
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, icon, option.props.name, tag);
        if (option.props.href) {
          return /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement(Link, _extends({
            href: option.props.href
          }, option.props), label));
        }
        return /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement(Button, option.props, label));
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
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: clazz,
        ref: this.setWrapperRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: this.toggle
      }), open && /*#__PURE__*/React__default["default"].createElement("ul", {
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

var _templateObject$2;
var Table = styled__default["default"].table(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$3(["\n\t[class*=\"sui-2-\"] .sui-wrap && {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t\ttable-layout: fixed;\n\n\t\ttbody {\n\t\t\ttr {\n\t\t\t\t&:nth-child(2n + 2) {\n\t\t\t\t\tbackground-color: #f8f8f8;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\ttd {\n\t\t\t\tpadding: 9px;\n\t\t\t\tvertical-align: center;\n\t\t\t\tcolor: #888;\n\t\t\t\tfont: 500 13px/22px \"Roboto\", sans-serif;\n\t\t\t\tletter-spacing: -0.25px;\n\n\t\t\t\tdiv {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tdisplay: -webkit-box;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\t-webkit-line-clamp: 2;\n\t\t\t\t\t-webkit-box-orient: vertical;\n\t\t\t\t}\n\n\t\t\t\t&:first-child {\n\t\t\t\t\twidth: 45%;\n\t\t\t\t\tpadding-left: 20px;\n\t\t\t\t\tcolor: #333;\n\t\t\t\t}\n\n\t\t\t\t&:last-child {\n\t\t\t\t\twidth: 55%;\n\t\t\t\t\tpadding-right: 20px;\n\t\t\t\t\twhite-space: pre-wrap;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));
var PresetsTable = /*#__PURE__*/function (_Component) {
  _inherits$3(PresetsTable, _Component);
  var _super = _createSuper$3(PresetsTable);
  function PresetsTable(props) {
    _classCallCheck$3(this, PresetsTable);
    return _super.call(this, props);
  }
  _createClass$3(PresetsTable, [{
    key: "render",
    value: function render() {
      var proItems = this.props.proItems;
      var rows = React.Children.map(this.props.children, function (row) {
        var rowName = row.props.name ? row.props.name : '';
        var rowStatus = row.props.status;
        var rowContent = rowStatus[0].split('\n').filter(function (item) {
          return item;
        });
        var rowTag = /*#__PURE__*/React__default["default"].createElement("span", {
          className: "sui-tag sui-tag-pro",
          style: {
            marginLeft: '6px'
          }
        }, "Pro");
        var isPro = proItems.includes(rowName) && 1 === rowContent.length ? true : false;
        return '' !== rowName || rowContent.length ? /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement("td", null, rowName), /*#__PURE__*/React__default["default"].createElement("td", null, rowContent.map(function (item) {
          var newItem = item.replace(/( - )/g, '\n').split('\n').filter(function (item) {
            return item;
          });
          isPro = !isPro && proItems.includes(newItem[0]) ? true : isPro;
          var dataItem = newItem.map(function (data, index, array) {
            var isLastItem = index === array.length - 1;
            return isPro && isLastItem ? /*#__PURE__*/React__default["default"].createElement("span", {
              key: data + '-' + index
            }, data, rowTag, '\n') : data + '\n';
          });
          isPro = false;
          return dataItem;
        }))) : '';
      });
      return /*#__PURE__*/React__default["default"].createElement(Table, this.props, /*#__PURE__*/React__default["default"].createElement("tbody", null, rows));
    }
  }]);
  return PresetsTable;
}(React.Component);

/**
 * Internal dependencies
 */
/**
 * Returns a string with ampersands escaped. Note that this is an imperfect
 * implementation, where only ampersands which do not appear as a pattern of
 * named, decimal, or hexadecimal character references are escaped. Invalid
 * named references (i.e. ambiguous ampersand) are are still permitted.
 *
 * @see https://w3c.github.io/html/syntax.html#character-references
 * @see https://w3c.github.io/html/syntax.html#ambiguous-ampersand
 * @see https://w3c.github.io/html/syntax.html#named-character-references
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeAmpersand(value) {
  return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
}
/**
 * Returns a string with less-than sign replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeLessThan(value) {
  return value.replace(/</g, '&lt;');
}
/**
 * Returns an escaped HTML element value.
 *
 * @see https://w3c.github.io/html/syntax.html#writing-html-documents-elements
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */

function escapeHTML(value) {
  return escapeLessThan(escapeAmpersand(value));
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1;
var Header = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$3(["\n\tmargin: 0 0 20px;\n\n\t> div:not(.sui-tooltip) {\n\n\t\t@media ", " {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t}\n\t}\n\n\t> div.sui-tooltip {\n\t\tmargin: 10px 0 0 !important;\n\n\t\t@media ", " {\n\t\t\tflex: 0 0 auto;\n\t\t\tmargin-top: 0 !important;\n\t\t\tmargin-left: 10px !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"])), device$1.tablet, device$1.tablet, device$1.tablet);
var Label = styled__default["default"].p(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$3(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n"])));
var Description = styled__default["default"].p(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$3(["\n\tmargin: 3px 0 0 !important;\n"])));
var Authentic = styled__default["default"].svg(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral$3(["\n    margin-left: 10px;\n"])));
var AccordionItemHeaderAlt = styled__default["default"](AccordionItemHeader)(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral$3(["\n[class*=\"sui-2-\"] .sui-wrap && {\n\n\t> .sui-accordion-col-3,\n    > .sui-accordion-col-2 {\n\n\t\t@media ", " {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n    > .sui-accordion-col-auto {\n\n\t\t.sui-presets-item__apply {\n\n\t\t\t@media ", " {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\n\t\t> .sui-dropdown {\n\n            [class*=sui-icon-] {\n                margin-right: 0 !important;\n            }\n\n            ul {\n                min-width: 192px;\n            }\n        }\n    }\n\n\t&:not(:hover):not(:focus) {\n\n\t\t> .sui-accordion-col-auto {\n\n\t\t\t.sui-presets-item__apply {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"])), deviceMax.tablet, deviceMax.tablet);
var PresetsAccordionItem = /*#__PURE__*/function (_Component) {
  _inherits$3(PresetsAccordionItem, _Component);
  var _super = _createSuper$3(PresetsAccordionItem);
  function PresetsAccordionItem(props) {
    var _this;
    _classCallCheck$3(this, PresetsAccordionItem);
    _this = _super.call(this, props);
    _defineProperty$7(_assertThisInitialized$3(_this), "toggle", function (e) {
      if ('sui-dropdown' !== e.target.className || 'sui-button-icon undefined' !== e.target.className || 'sui-icon-widget-settings-config' !== e.target.className) {
        _this.setState({
          open: !_this.state.open
        });
      }
    });
    _defineProperty$7(_assertThisInitialized$3(_this), "accordionHeadApplyClicked", function (e) {
      e.stopPropagation();
      _this.props.applyAction();
    });
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$3(_this));
    return _this;
  }
  _createClass$3(PresetsAccordionItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var open = this.state.open;
      var _this$props = this.props,
        editAction = _this$props.editAction,
        applyAction = _this$props.applyAction,
        deleteAction = _this$props.deleteAction,
        downloadAction = _this$props.downloadAction,
        _this$props$date = _this$props.date,
        date = _this$props$date === void 0 ? '' : _this$props$date,
        _this$props$descripti = _this$props.description,
        description = _this$props$descripti === void 0 ? '' : _this$props$descripti,
        _this$props$isWidget = _this$props.isWidget,
        isWidget = _this$props$isWidget === void 0 ? false : _this$props$isWidget;
      var clazz = !open ? 'sui-accordion-item' : 'sui-accordion-item sui-accordion-item--open';
      var icon = /*#__PURE__*/React__default["default"].createElement(Authentic, {
        width: "16",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default["default"].createElement("path", {
        d: "M15.86 8.914l-.839-.69a1.6 1.6 0 01-.579-1.235c0-.334.102-.644.276-.9l-.003.005.616-.911a.428.428 0 00-.307-.655h-.003l-1.075-.123a1.595 1.595 0 01-1.407-1.637v.002l.032-1.092v-.017a.422.422 0 00-.613-.376h.002l-.97.468a1.583 1.583 0 01-2.058-.603l-.004-.007-.557-.935a.423.423 0 00-.726-.002l-.001.002-.558.935a1.585 1.585 0 01-2.074.606l.01.004-.97-.482a.425.425 0 00-.616.395v-.001l.031 1.092v.047c0 .82-.61 1.494-1.399 1.587h-.007l-1.07.137a.428.428 0 00-.301.67l-.001-.002.61.898a1.6 1.6 0 01-.301 2.142l-.843.678a.427.427 0 00.106.723l.002.001 1 .424a1.601 1.601 0 01.89 1.979l.003-.011-.338 1.038a.427.427 0 00.481.553l-.003.001 1.058-.19a1.589 1.589 0 011.806 1.16l.002.013.264 1.065c.049.185.214.32.41.32a.42.42 0 00.288-.115l.793-.738a1.573 1.573 0 012.15.001h-.001l.793.737a.424.424 0 00.713-.213v-.003l.265-1.065a1.591 1.591 0 011.818-1.17l-.01-.002 1.057.19a.427.427 0 00.475-.557l.001.002-.336-1.038a1.598 1.598 0 01.88-1.964l.011-.004 1-.424a.427.427 0 00.127-.713zm-8.803 2.2L4.266 8.401l1.1-1.15 1.67 1.622 3.997-4.024 1.126 1.129-5.102 5.134z",
        fill: "#286EFA",
        fillRule: "nonzero"
      }));
      var name = this.props["default"] ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, escapeHTML(this.props.name), icon) : escapeHTML(this.props.name);
      var descstyles = {
        overflow: 'hidden',
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      };
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: clazz
      }, /*#__PURE__*/React__default["default"].createElement(AccordionItemHeaderAlt, _extends$7({
        className: "sui-accordion-item-header",
        state: open ? 'true' : 'false',
        title: name,
        checkboxInput: true,
        checkboxId: this.props.checkboxId,
        checkboxSelected: this.props.checkboxSelected,
        checkboxClickHandler: this.props.checkboxClickHandler
      }, null !== this.props.image && '' !== this.props.image && {
        image: this.props.image
      }, {
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      }), !isWidget && /*#__PURE__*/React__default["default"].createElement("div", {
        size: '' !== date ? '3' : '5'
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        style: descstyles
      }, description)), '' !== date && !isWidget && /*#__PURE__*/React__default["default"].createElement("div", {
        size: "2"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        style: descstyles
      }, date)), /*#__PURE__*/React__default["default"].createElement("div", null, this.props.showApplyButton && /*#__PURE__*/React__default["default"].createElement(Button$1, {
        label: this.props.applyLabel || 'Apply',
        design: "ghost",
        className: "sui-presets-item__apply",
        onClick: this.accordionHeadApplyClicked
      }), /*#__PURE__*/React__default["default"].createElement(Dropdown, {
        position: "right"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        name: this.props.applyLabel || 'Apply',
        icon: "check",
        onClick: applyAction
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        name: this.props.downloadLabel || 'Download',
        icon: "download",
        onClick: function onClick() {
          return downloadAction(_this2.props.id);
        }
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        name: this.props.editLabel || 'Edit Details',
        icon: "pencil",
        onClick: editAction
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        name: this.props.deleteLabel || 'Delete',
        icon: "trash",
        color: "red",
        onClick: deleteAction
      })))), /*#__PURE__*/React__default["default"].createElement(AccordionItemBody, null, /*#__PURE__*/React__default["default"].createElement(Box, null, /*#__PURE__*/React__default["default"].createElement(BoxBody, null, /*#__PURE__*/React__default["default"].createElement(Header, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(Label, {
        className: "sui-label"
      }, escapeHTML(this.props.name)), /*#__PURE__*/React__default["default"].createElement(Description, {
        className: "sui-description"
      }, description)), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sui-tooltip",
        "data-tooltip": this.props.editLabel || 'Edit Details'
      }, /*#__PURE__*/React__default["default"].createElement(ButtonIcon$3, {
        icon: "pencil",
        label: this.props.editLabel,
        design: "outlined",
        onClick: function onClick() {
          return editAction(_this2.props.id);
        }
      }))), /*#__PURE__*/React__default["default"].createElement(PresetsTable, {
        proItems: this.props.proItems
      }, this.props.children)), /*#__PURE__*/React__default["default"].createElement(BoxFooter, null, /*#__PURE__*/React__default["default"].createElement(Button$1, {
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
    _classCallCheck$3(this, RequestHandler);
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
  _createClass$3(RequestHandler, [{
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
          })["catch"](function () {
            // Update the local list even if the Hub request fails.
            configs.push(newConfig);
            return _this.updateLocalConfigsList(configs);
          }).then(function (updatedConfigs) {
            return resolve(updatedConfigs);
          })["catch"](function (res) {
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
          "package": this.pluginData
        }, configData);

        // This returns a 404 when the config doesn't exist in the Hub anymore.
        this.makeHubRequest("/".concat(currentConfig.hub_id), 'PATCH', JSON.stringify(hubData))["catch"](function (res) {
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
        this.makeHubRequest("/".concat(configId), 'DELETE')["catch"](function (res) {
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
        })["catch"](function (res) {
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
      var _iterator = _createForOfIteratorHelper$1(localConfigs.entries()),
        _step;
      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray$3(_step.value, 2),
            index = _step$value[0],
            localOne = _step$value[1];
          // Skip checks for the basic config.
          if (localOne["default"]) {
            return "continue";
          }

          // Send to the Hub the configs that haven't been sent.
          if (!localOne.hub_id) {
            var sendToHubPromise = _this3.sendConfigToHub(localOne).then(function (res) {
              localConfigs[index]['id'] = res.id;
              localConfigs[index]['hub_id'] = res.id;
            });
            hubPromises.push(sendToHubPromise);
            return "continue";
          }

          // Find the configs that were removed from the hub and remove them locally.
          if (!hubConfigsIds[localOne.hub_id]) {
            delete localConfigs[index];
            return "continue";
          }

          // Keep the IDs and index of the local configs for reference later on.
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
      var _iterator2 = _createForOfIteratorHelper$1(hubConfigs),
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
          }

          // Sync the name and description of local configs.
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
        "package": this.pluginData,
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
      var verb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(verb, url, true);
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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var LoadingContent = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n    position: relative;\n    z-index: 2;\n}\n"])));
var LoadingWrap = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n    pointer-events: none;\n}"])));
var LoadingMask = styled__default["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(255,255,255,0.95);\n    border-radius: 0 0 4px 4px;\n\n    > p {\n\n    }\n}\n"])));
var StyledSyncButton = styled__default["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral$3(["\n.sui-wrap && {\n\tcolor: #17A8E3;\n\tfont-weight: 600;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tdisplay: inline;\n\tmargin: 0;\n\tpadding: 0;\n}\n"])));
var StyledBoxHeader = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral$3(["\n[class*=\"sui-2-\"] .sui-wrap && {\n\n\t.sui-actions-right {\n\n\t\t@media ", " {\n\t\t\tjustify-content: space-between;\n\t\t\tmargin-top: 9px;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: block;\n\t}\n}\n"])), deviceMax.tablet, deviceMax.tablet);
var PresetsAccordionHeader = styled__default["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral$3(["\n[class*=\"sui-2-\"] .sui-wrap && {\n\n\t> .sui-accordion-col-3,\n    > .sui-accordion-col-2,\n\t> .sui-accordion-col-auto {\n\n\t\t@media ", " {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n}\n"])), deviceMax.tablet);
var PresetsAccordion = styled__default["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral$3(["\n[class*=\"sui-2-\"] .sui-wrap && {\n\t.sui-checkbox {\n\t\t@media (max-width: 783px) {\n\t\t\tmargin: 0 10px 0 0;\n\t\t}\n\t}\n}\n"])));
var RequestsHandler;
var Presets = function Presets(_ref) {
  var isWidget = _ref.isWidget,
    isPro = _ref.isPro,
    isWhitelabel = _ref.isWhitelabel,
    requestsData = _ref.requestsData,
    sourceUrls = _ref.sourceUrls,
    sourceLang = _ref.sourceLang,
    _ref$proItems = _ref.proItems,
    proItems = _ref$proItems === void 0 ? [] : _ref$proItems,
    srcDemoData = _ref.srcDemoData,
    _ref$setDemoData = _ref.setDemoData,
    setDemoData = _ref$setDemoData === void 0 ? false : _ref$setDemoData;
  var _React$useState = React__default["default"].useState([]),
    _React$useState2 = _slicedToArray$3(_React$useState, 2),
    configs = _React$useState2[0],
    setConfigs = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(true),
    _React$useState4 = _slicedToArray$3(_React$useState3, 2),
    isLoading = _React$useState4[0],
    setIsLoading = _React$useState4[1];
  var _React$useState5 = React__default["default"].useState(true),
    _React$useState6 = _slicedToArray$3(_React$useState5, 2),
    isDisabled = _React$useState6[0],
    setDisabled = _React$useState6[1];

  // Modals-related states.
  var _React$useState7 = React__default["default"].useState(null),
    _React$useState8 = _slicedToArray$3(_React$useState7, 2),
    currentConfig = _React$useState8[0],
    setCurrentConfig = _React$useState8[1];
  var _React$useState9 = React__default["default"].useState(false),
    _React$useState10 = _slicedToArray$3(_React$useState9, 2),
    isApplyOpen = _React$useState10[0],
    setIsApplyOpen = _React$useState10[1];
  var _React$useState11 = React__default["default"].useState(false),
    _React$useState12 = _slicedToArray$3(_React$useState11, 2),
    isDeleteOpen = _React$useState12[0],
    setIsDeleteOpen = _React$useState12[1];
  var _React$useState13 = React__default["default"].useState(false),
    _React$useState14 = _slicedToArray$3(_React$useState13, 2),
    isEditOpen = _React$useState14[0],
    setIsEditOpen = _React$useState14[1];
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
    emptyNotice: 'You don\'t have any available config. Save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
    baseDescription: 'Use configs to save preset configurations of your settings, then upload and apply them to your other sites in just a few clicks!',
    proDescription: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, 'You can easily apply configs to multiple sites at once via ', /*#__PURE__*/React__default["default"].createElement("a", {
      href: urls.hubMyConfigs,
      target: "_blank",
      rel: "noreferrer"
    }, 'the Hub.')),
    widgetDescription: 'Use configs to save preset configurations of your settings.',
    syncWithHubText: 'Created or updated the configs via the Hub?',
    syncWithHubButton: 'Re-check to get the updated list.',
    apply: 'Apply',
    download: 'Download',
    edit: 'Edit Details',
    "delete": 'Delete',
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
    deleteAction: {
      successMessage: '{configName} config deleted successfully.'
    },
    bulkDeleteAction: {
      successMessage: 'Config(s) deleted successfully.'
    },
    settingsLabels: {
      uptime: 'Uptime',
      database: 'Database',
      gravatar: 'Gravatar Caching',
      page_cache: 'Page Caching',
      advanced: 'Advanced Tools',
      rss: 'RSS Caching',
      settings: 'Settings',
      performance: 'Performance Test'
    }
  }, sourceLang);

  // Default demo data.
  var demoData = [];
  if (srcDemoData) {
    if ('empty' === srcDemoData) {
      demoData = [];
    } else {
      var _demoData;
      (_demoData = demoData).push.apply(_demoData, _toConsumableArray(srcDemoData));
    }
  }
  React__default["default"].useEffect(function () {
    RequestsHandler = new RequestHandler(requestsData);
    retrieveConfigs();
    return function () {
      setIsLoading(false);
    };
  }, []);
  var retrieveConfigs = function retrieveConfigs() {
    setIsLoading(true);
    if (setDemoData) {
      setTimeout(function () {
        setConfigs(demoData);
        setIsLoading(false);
      }, 1000);
    } else {
      RequestsHandler.makeLocalRequest().then(function (newConfigs) {
        return setConfigs(newConfigs || []);
      })["catch"](function (res) {
        return requestFailureNotice(res);
      }).then(function () {
        return setIsLoading(false);
      });
    }
  };
  var hasSameProperties = function hasSameProperties(obj1, obj2) {
    return Object.keys(obj1).every(function (property) {
      return obj2.hasOwnProperty(property);
    });
  };
  var handleUpload = function handleUpload(e) {
    var newConfigName;
    if (setDemoData) {
      var configFile = e.target.files[0];
      var reader = new FileReader();
      var defaultStructure = {
        id: '',
        "default": '',
        name: '',
        description: '',
        created_date: '',
        config: [{
          id: '',
          name: '',
          content: ''
        }]
      };
      reader.readAsText(configFile);
      reader.onload = function () {
        setIsLoading(true);
        try {
          var fileContent = JSON.parse(reader.result);
          if (hasSameProperties(defaultStructure, fileContent)) {
            demoData.push(fileContent);
            setTimeout(function () {
              setConfigs(demoData);
              setIsLoading(false);
            }, 500);
            console.log('\n' + 'Button: Upload\n' + 'Action: To upload new configurations.\n' + 'Message: Config imported successfully.\n' + '\n' + 'REMEMBER, THIS IS JUST A PROTOTYPE. THE DEMO FILE WILL BE UPLOADED ONCE ONLY.' + '\n');
          }
        } catch (e) {
          setTimeout(function () {
            setIsLoading(false);
          }, 500);
          console.log('\n' + 'Button: Upload\n' + 'Action: To upload new configurations.\n' + 'Message: Invalid JSON structure.\n' + '\n' + 'REMEMBER, THIS IS JUST A PROTOTYPE. THE DEMO FILE WILL BE UPLOADED ONCE ONLY.' + '\n');
          return;
        }
      };
    } else {
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
            }

            // We don't need this.
            delete res.data.plugin;
          }
          res.data.name = res.data.name.substring(0, 200);
          res.data.description = res.data.description.substring(0, 200);
          newConfigName = escapeHTML(res.data.name);
          return RequestsHandler.addNew(configs, res.data);
        }

        // Throw otherwise.
        throw res;
      }).then(function (updatedConfigs) {
        setConfigs(updatedConfigs);
        successNotice(lang.uploadActionSuccessMessage.replace('{configName}', newConfigName));
      })["catch"](function (res) {
        return requestFailureNotice(res);
      });
    }
  };
  var handleDelete = function handleDelete(currentConfig) {
    if (setDemoData) {
      setTimeout(function () {
        setIsDeleteOpen(false);
        setIsLoading(true);
      }, 500);
      setTimeout(function () {
        setIsLoading(false);
        // Remove the configs from the demo data.
        var demoData = configs.filter(function (config) {
          return !currentConfig.includes(config);
        });
        setConfigs(demoData);
        setDisabled(true);
      }, 1000);
      console.log('\n' + 'Modal: Delete Configuration File\n' + 'Button: Delete\n' + 'Action: It removes an item from the table.\n' + '\n' + 'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' + '\n');
    } else {
      var newConfigs = _toConsumableArray(configs);
      currentConfig.forEach(function (config) {
        newConfigs = newConfigs.filter(function (c) {
          return c.id !== config.id;
        });
      });
      RequestsHandler["delete"](newConfigs, currentConfig).then(function () {
        setConfigs(newConfigs);
        setDisabled(true);
        successNotice(lang.bulkDeleteAction.successMessage);
      })["catch"](function (res) {
        return requestFailureNotice(res);
      }).then(function () {
        return setIsDeleteOpen(false);
      });
    }
  };
  var handleEdit = function handleEdit(data, displayErrorMessage) {
    var configData = {
      name: data.get('name').substring(0, 200),
      description: data.get('description').substring(0, 200)
    };
    if (setDemoData) {
      setTimeout(function () {
        setIsEditOpen(false);
        setIsLoading(true);
      }, 500);
      setTimeout(function () {
        return setIsLoading(false);
      }, 1000);
      console.log('\n' + 'Modal: Rename Config\n' + 'Button: Save\n' + 'Action: To save the changes made on config name and/or description.\n' + '\n' + 'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' + '\n');
    } else {
      // Editing a config.
      if (currentConfig) {
        RequestsHandler.edit(_toConsumableArray(configs), currentConfig, configData).then(function (newConfigs) {
          return setConfigs(newConfigs);
        })["catch"](function (res) {
          return requestFailureNotice(res);
        }).then(function () {
          return setIsEditOpen(false);
        });
      } else {
        // Creating a new config.
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
          successNotice(lang.editAction.successMessage.replace('{configName}', escapeHTML(configData.name)));
        })["catch"](function (res) {
          return requestFailureNotice(res);
        });
      }
    }
  };
  var handleApply = function handleApply() {
    if (setDemoData) {
      setTimeout(function () {
        setIsApplyOpen(false);
        setIsLoading(true);
      }, 500);
      setTimeout(function () {
        return setIsLoading(false);
      }, 1000);
      console.log('\n' + 'Modal: Apply Config\n' + 'Button: Apply\n' + 'Action: To apply the saved configurations into the plugin.\n' + '\n' + 'REMEMBER, THIS IS JUST A PROTOTYPE AND NO REAL ACTION WILL BE PERFORMED.' + '\n');
    } else {
      RequestsHandler.apply(currentConfig).then(function (res) {
        setIsApplyOpen(false);
        if (!res.success) {
          requestFailureNotice(res);
          return;
        }
        successNotice(lang.applyAction.successMessage.replace('{configName}', escapeHTML(currentConfig.name)));
      })["catch"](function (res) {
        return requestFailureNotice(res);
      });
    }
  };
  var handleSyncWithHub = function handleSyncWithHub() {
    setIsLoading(true);
    if (setDemoData) {
      setTimeout(function () {
        return setIsLoading(false);
      }, 1000);
    } else {
      RequestsHandler.syncWithHub(_toConsumableArray(configs)).then(function (newConfigs) {
        return setConfigs(newConfigs);
      })["catch"](function (res) {
        return requestFailureNotice(res);
      }).then(function () {
        return setIsLoading(false);
      });
    }
  };
  var doDownload = function doDownload(clickedConfig) {
    var config = Object.assign({}, configs.find(function (item) {
      return clickedConfig.id === item.id;
    }));
    if (setDemoData) {
      console.log('You clicked on "Download" button.');
    }
    if (!config || !Object.keys(config).length || setDemoData) {
      return;
    }

    // Include the ID of the plugin this config belongs to.
    config.plugin = requestsData.pluginData.id;

    // This is unique per site.
    delete config.hub_id;

    // Avoid having multiple defaults on upload.
    delete config["default"];
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
  };

  // Notifications.
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
    window.SUI.openNotice('sui-configs-floating-notice', "<p>".concat(message, "</p>"), {
      type: 'error',
      icon: 'info',
      dismiss: {
        show: true,
        label: lang.notificationDismiss
      }
    });
  };
  var tableImage = !isWhitelabel ? urls.accordionImg : null;
  var _checkboxClickHandler = function checkboxClickHandler(clickedConfig, checked) {
    setConfigs(configs.map(function (config) {
      if (clickedConfig === config) {
        config.selected = checked;
      }
      return config;
    }));
    deleteButton();
  };
  var deleteButton = function deleteButton() {
    for (var i = 0; i < configs.length; i++) {
      if (configs[i].selected) {
        setDisabled(false);
        break;
      } else {
        setDisabled(true);
      }
    }
  };
  var bulkDeleteHandler = function bulkDeleteHandler() {
    var selectedConfig = configs.filter(function (item) {
      return item.selected === true;
    });
    openModal('delete', selectedConfig);
  };

  // Check if every item has isSelected set to true
  var allSelected = configs.every(function (item) {
    return item.selected === true;
  });
  var selectAll = function selectAll() {
    setConfigs(configs.map(function (config) {
      config.selected = !allSelected;
      return config;
    }));
    deleteButton();
  };
  var Table = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, !isEmpty && /*#__PURE__*/React__default["default"].createElement(PresetsAccordion, {
    className: "sui-accordion sui-accordion-flushed",
    style: {
      borderBottomWidth: 0,
      borderTop: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement(PresetsAccordionHeader, {
    className: "sui-accordion-header",
    style: {
      minHeight: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-accordion-item-title"
  }, /*#__PURE__*/React__default["default"].createElement(RadioCheckboxInput$1, {
    id: "checkbox-default-one",
    name: "select-all",
    type: "checkbox",
    defaultChecked: allSelected,
    onChange: selectAll
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Config Name")), !isWidget && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: setDemoData ? 'sui-accordion-col-3' : 'sui-accordion-col-5'
  }, "Description"), setDemoData && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-accordion-col-2"
  }, "Date Created")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-accordion-col-auto",
    style: {
      flex: '0 1 213px'
    }
  })), configs.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(PresetsAccordionItem, {
      key: index,
      id: index,
      "default": item["default"],
      name: item.name,
      description: item.description,
      date: item.created_date,
      isWidget: isWidget,
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
      deleteLabel: lang["delete"],
      deleteAction: function deleteAction() {
        return openModal('delete', [item]);
      },
      checkboxId: 'config-checkbox-' + index,
      checkboxSelected: item.selected,
      checkboxClickHandler: function checkboxClickHandler(e) {
        return _checkboxClickHandler(item, e.target.checked);
      },
      proItems: proItems
    }, Object.keys(item.config.strings).map(function (name) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: name,
        name: lang.settingsLabels[name],
        status: item.config.strings[name]
      });
    }));
  })));
  var getFooter = function getFooter() {
    if (isWidget) {
      return /*#__PURE__*/React__default["default"].createElement(BoxFooter, null, /*#__PURE__*/React__default["default"].createElement(Button$1, {
        icon: "save",
        label: lang.save,
        color: "blue",
        onClick: function onClick() {
          return openModal('edit', null);
        }
      }), /*#__PURE__*/React__default["default"].createElement(Button$1, {
        icon: "wrench-tool",
        label: lang.manageConfigs,
        design: "ghost",
        href: urls.configsPage
      }));
    }
    if (isPro) {
      return /*#__PURE__*/React__default["default"].createElement(BoxFooter, {
        display: "block",
        alignment: "center",
        paddingTop: isEmpty ? 0 : 30,
        border: isEmpty ? 0 : 1
      }, /*#__PURE__*/React__default["default"].createElement("p", {
        className: "sui-description"
      }, lang.syncWithHubText, " ", ' ', /*#__PURE__*/React__default["default"].createElement(StyledSyncButton, {
        onClick: handleSyncWithHub
      }, lang.syncWithHubButton)));
    }
    return /*#__PURE__*/React__default["default"].createElement(BoxFooter, {
      display: "block"
    }, /*#__PURE__*/React__default["default"].createElement(Notifications, {
      type: "upsell"
    }, /*#__PURE__*/React__default["default"].createElement("p", null, lang.freeNoticeMessage), /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement(Button$1, {
      label: lang.freeButtonLabel,
      color: "purple",
      href: urls.freeNoticeHub,
      target: "_blank"
    }))));
  };
  var getDescription = function getDescription() {
    if (isWidget) {
      return /*#__PURE__*/React__default["default"].createElement("p", null, lang.widgetDescription);
    }
    return /*#__PURE__*/React__default["default"].createElement("p", null, lang.baseDescription + ' ', isPro && !isWhitelabel && lang.proDescription);
  };
  ({
    title: lang.title
  });
  if (isWidget) {
    if (!isEmpty) {
      configs.length;
    }
  }
  var PresetsHeader = /*#__PURE__*/React__default["default"].createElement(StyledBoxHeader, {
    className: "sui-box-header"
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "sui-box-title"
  }, isWidget && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-wrench-tool",
    "aria-hidden": "true"
  }), lang.title, !isEmpty && isWidget && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-tag",
    style: {
      marginLeft: 10
    }
  }, configs.length)), !isWidget && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-actions-right"
  }, /*#__PURE__*/React__default["default"].createElement(Button$1, {
    icon: "upload-cloud",
    label: lang.upload,
    design: "ghost",
    htmlFor: "sui-upload-configs-input"
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "sui-upload-configs-input",
    type: "file",
    name: "config_file",
    className: "sui-hidden",
    value: "",
    readOnly: "readonly",
    onChange: handleUpload,
    accept: ".json"
  }), /*#__PURE__*/React__default["default"].createElement(Button$1, {
    type: "button",
    icon: "save",
    label: lang.save,
    color: "blue",
    onClick: function onClick() {
      return openModal('edit', null);
    }
  })));
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sui-floating-notices"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    role: "alert",
    id: "sui-configs-floating-notice",
    className: "sui-notice",
    "aria-live": "assertive"
  })), /*#__PURE__*/React__default["default"].createElement(Box, null, PresetsHeader, /*#__PURE__*/React__default["default"].createElement(BoxBody, null, getDescription(), !isLoading && !isEmpty && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(Button$1, {
    onClick: bulkDeleteHandler,
    className: "sui-button-red",
    label: "Bulk Delete",
    icon: "trash",
    disabled: isDisabled
  })), !isLoading && isEmpty && /*#__PURE__*/React__default["default"].createElement(Notifications, {
    type: "info"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, lang.emptyNotice))), isLoading && /*#__PURE__*/React__default["default"].createElement(LoadingContent, null, /*#__PURE__*/React__default["default"].createElement(LoadingWrap, {
    "aria-hidden": "true"
  }, Table, getFooter()), /*#__PURE__*/React__default["default"].createElement(LoadingMask, null, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "sui-description"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sui-icon-loader sui-loading",
    "aria-hidden": "true",
    style: {
      marginRight: 10
    }
  }), lang.loading))), !isLoading && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, Table, getFooter())), isApplyOpen && /*#__PURE__*/React__default["default"].createElement(ApplyModal, {
    setOpen: setIsApplyOpen,
    config: currentConfig,
    save: handleApply,
    strings: lang.applyAction
  }), isDeleteOpen && /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
    setOpen: setIsDeleteOpen,
    config: currentConfig,
    save: handleDelete,
    strings: lang.deleteAction
  }), isEditOpen && /*#__PURE__*/React__default["default"].createElement(EditModal, {
    setOpen: setIsEditOpen,
    config: currentConfig,
    save: handleEdit,
    strings: lang.editAction
  }));
};

exports.Presets = Presets;
