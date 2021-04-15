import React, { Children, Component, Fragment } from 'react';
import styled from 'styled-components';

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

var _templateObject;

var Table = styled.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tmargin: 0;\n\tborder-spacing: 0;\n\tborder-collapse: collapse;\n\n\ttbody {\n\n\t\ttr {\n\n\t\t\t&:nth-child(2n+2) {\n\t\t\t\tbackground-color: #f8f8f8;\n\t\t\t}\n\t\t}\n\n\t\ttd {\n\t\t\tpadding: 9px;\n\t\t\tvertical-align: center;\n\t\t\tcolor: #888;\n\t\t\tfont: 500 13px/22px \"Roboto\", sans-serif;\n\t\t\tletter-spacing: -0.25px;\n\n\t\t\t&:first-child {\n\t\t\t\tpadding-left: 20px;\n\t\t\t\tcolor: #333;\n\t\t\t}\n\n\t\t\t&:last-child {\n\t\t\t\tpadding-right: 20px;\n\t\t\t}\n\t\t}\n\t}\n"])));
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
      var rows = Children.map(this.props.children, function (row) {
        return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
          colSpan: "2"
        }, row.props.name), /*#__PURE__*/React.createElement("td", {
          colSpan: "1"
        }, row.props.status));
      });
      return /*#__PURE__*/React.createElement(Table, this.props, /*#__PURE__*/React.createElement("tbody", null, rows));
    }
  }]);

  return PresetsTable;
}(Component);

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

var ButtonIcon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "icon", "design", "color", "className"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = '' !== className ? 'sui-button-icon ' + className : 'sui-button-icon'; // Set button color.

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
    return /*#__PURE__*/React.createElement("a", _extends$1({
      ref: ref,
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React.createElement("button", _extends$1({
    ref: ref,
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral$1(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var ItemImage = styled.span(_templateObject$1());

var AccordionItemHeader = /*#__PURE__*/function (_Component3) {
  _inherits$1(AccordionItemHeader, _Component3);

  var _super3 = _createSuper$1(AccordionItemHeader);

  function AccordionItemHeader(props) {
    var _this3;

    _classCallCheck$1(this, AccordionItemHeader);

    _this3 = _super3.call(this, props);
    _this3.state = {
      open: false
    };
    return _this3;
  }

  _createClass$1(AccordionItemHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        open: this.props.state
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var icon = this.props.icon && '' !== this.props.icon ? /*#__PURE__*/React.createElement("span", {
        className: "sui-icon-".concat(this.props.icon),
        "aria-hidden": "true"
      }) : '';
      var image = this.props.image && '' !== this.props.image ? /*#__PURE__*/React.createElement(ItemImage, {
        style: {
          backgroundImage: "url(".concat(this.props.image, ")")
        }
      }) : '';
      var title = /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-item-title"
      }, icon, image, this.props.title);
      var indicator = /*#__PURE__*/React.createElement(ButtonIcon, {
        icon: "chevron-down",
        label: open ? 'Close section' : 'Open section',
        className: "sui-button-icon sui-accordion-open-indicator"
      });
      var actions = /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-col-auto"
      }, this.props.children, indicator);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: "sui-accordion-item-header"
      }, this.props), title, actions);
    }
  }]);

  return AccordionItemHeader;
}(Component);

var AccordionItemBody = /*#__PURE__*/function (_Component4) {
  _inherits$1(AccordionItemBody, _Component4);

  var _super4 = _createSuper$1(AccordionItemBody);

  function AccordionItemBody(props) {
    _classCallCheck$1(this, AccordionItemBody);

    return _super4.call(this, props);
  }

  _createClass$1(AccordionItemBody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion-item-body"
      }, this.props.children);
    }
  }]);

  return AccordionItemBody;
}(Component);

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

function _templateObject3() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\tborder-bottom-width: ", "px;\n\ttext-align: ", ";\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-bottom-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var utils = {
  gutter: 30,
  gutter_md: 20
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

var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$1(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends$2({
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
      props = _objectWithoutProperties$1(_ref2, ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

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

  return /*#__PURE__*/React.createElement("h3", _extends$2({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-title ".concat(className) : 'sui-box-title'
  }, props), icon && "" !== icon && /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children, tagLabel && '' !== tagLabel && /*#__PURE__*/React.createElement("span", {
    className: tagClass,
    style: {
      marginLeft: 10
    }
  }, tagLabel));
};

var Header = styled.div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject$2(), function (props) {
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
}, device$1.tablet, function (props) {
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
      props = _objectWithoutProperties$1(_ref3, ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  return /*#__PURE__*/React.createElement(Header, props, title && '' !== title && /*#__PURE__*/React.createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: tagLabel,
    tagColor: tagColor,
    tagSize: tagSize,
    tagDesign: tagDesign
  }, title), children);
};

var Body = styled.div.attrs(function (props) {
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
}, device$1.tablet, function (props) {
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
      props = _objectWithoutProperties$1(_ref4, ["className", "children"]);

  return /*#__PURE__*/React.createElement(Body, _extends$2({
    className: className
  }, props), children);
};

var Footer = styled.div.attrs(function (props) {
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
}, device$1.tablet, function (props) {
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
      props = _objectWithoutProperties$1(_ref5, ["className", "children"]);

  return /*#__PURE__*/React.createElement(Footer, _extends$2({
    className: className
  }, props), children);
};

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
        _defineProperty$1(target, key, source[key]);
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
      props = _objectWithoutProperties$2(_ref, ["label", "icon", "design", "color", "className"]);

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


  if (props.loading) {
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
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
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

var ButtonIcon$1 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties$3(_ref, ["label", "icon", "design", "color", "className"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = '' !== className ? 'sui-button-icon ' + className : 'sui-button-icon'; // Set button color.

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
    return /*#__PURE__*/React.createElement("a", _extends$3({
      ref: ref,
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React.createElement("button", _extends$3({
    ref: ref,
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
});

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

function _extends$1$1() {
  _extends$1$1 = Object.assign || function (target) {
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

  return _extends$1$1.apply(this, arguments);
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

var ButtonIcon$2 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties$4(_ref, ["label", "icon", "design", "color", "className"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = '' !== className ? 'sui-button-icon ' + className : 'sui-button-icon'; // Set button color.

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
    return /*#__PURE__*/React.createElement("a", _extends$1$1({
      ref: ref,
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React.createElement("button", _extends$1$1({
    ref: ref,
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
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
      var options = Children.map(this.props.children, function (option) {
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React.createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React.createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React.createElement(Fragment, null, icon, option.props.name, tag);

        if (option.props.href) {
          return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", _extends$4({
            href: option.props.href
          }, option.props), label));
        }

        return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", option.props, label));
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

      return /*#__PURE__*/React.createElement("div", {
        className: clazz
      }, /*#__PURE__*/React.createElement(ButtonIcon$2, {
        ref: this.setWrapperRef,
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: function onClick() {
          return _this2.toggle();
        }
      }), open && /*#__PURE__*/React.createElement("ul", null, options));
    }
  }]);

  return Dropdown;
}(Component);

var _templateObject$3, _templateObject2$1, _templateObject3$1, _templateObject4;
var Header$1 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n\tmargin: 0 0 20px;\n\n\t> div {\n\n\t\t@media ", " {\n\t\t\tmin-width: 1px;\n\t\t\tflex: 1;\n\t\t}\n\t}\n\n\t> button {\n\t\tmargin: 10px 0 0 !important;\n\n\t\t@media ", " {\n\t\t\tflex: 0 0 auto;\n\t\t\tmargin-top: 0 !important;\n\t\t\tmargin-left: 10px !important;\n\t\t}\n\t}\n\n\t@media ", " {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"])), device.tablet, device.tablet, device.tablet);
var Label = styled.p(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n\tmargin: 0 !important;\n\tcolor: #333 !important;\n"])));
var Description = styled.p(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n\tmargin: 3px 0 0 !important;\n"])));
var Authentic = styled.svg(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n"])));
var PresetsAccordionItem = /*#__PURE__*/function (_Component) {
  _inherits(PresetsAccordionItem, _Component);

  var _super = _createSuper(PresetsAccordionItem);

  function PresetsAccordionItem(props) {
    var _this;

    _classCallCheck(this, PresetsAccordionItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      if ('sui-dropdown' !== e.target.className) {
        _this.setState({
          open: !_this.state.open
        });
      }
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
          applyAction = _this$props.applyAction;
      var clazz = !open ? 'sui-accordion-item' : 'sui-accordion-item sui-accordion-item--open';
      var icon = /*#__PURE__*/React.createElement(Authentic, {
        width: "16",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M15.86 8.914l-.839-.69a1.6 1.6 0 01-.579-1.235c0-.334.102-.644.276-.9l-.003.005.616-.911a.428.428 0 00-.307-.655h-.003l-1.075-.123a1.595 1.595 0 01-1.407-1.637v.002l.032-1.092v-.017a.422.422 0 00-.613-.376h.002l-.97.468a1.583 1.583 0 01-2.058-.603l-.004-.007-.557-.935a.423.423 0 00-.726-.002l-.001.002-.558.935a1.585 1.585 0 01-2.074.606l.01.004-.97-.482a.425.425 0 00-.616.395v-.001l.031 1.092v.047c0 .82-.61 1.494-1.399 1.587h-.007l-1.07.137a.428.428 0 00-.301.67l-.001-.002.61.898a1.6 1.6 0 01-.301 2.142l-.843.678a.427.427 0 00.106.723l.002.001 1 .424a1.601 1.601 0 01.89 1.979l.003-.011-.338 1.038a.427.427 0 00.481.553l-.003.001 1.058-.19a1.589 1.589 0 011.806 1.16l.002.013.264 1.065c.049.185.214.32.41.32a.42.42 0 00.288-.115l.793-.738a1.573 1.573 0 012.15.001h-.001l.793.737a.424.424 0 00.713-.213v-.003l.265-1.065a1.591 1.591 0 011.818-1.17l-.01-.002 1.057.19a.427.427 0 00.475-.557l.001.002-.336-1.038a1.598 1.598 0 01.88-1.964l.011-.004 1-.424a.427.427 0 00.127-.713zm-8.803 2.2L4.266 8.401l1.1-1.15 1.67 1.622 3.997-4.024 1.126 1.129-5.102 5.134z",
        fill: "#286EFA",
        "fill-rule": "nonzero"
      }));
      var title = this.props["default"] ? /*#__PURE__*/React.createElement(React.Fragment, null, this.props.title, icon) : this.props.title;
      return /*#__PURE__*/React.createElement("div", {
        className: clazz
      }, /*#__PURE__*/React.createElement(AccordionItemHeader, {
        state: open ? 'true' : 'false',
        title: title,
        image: this.props.image,
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      }, /*#__PURE__*/React.createElement(Dropdown, {
        position: "right"
      }, /*#__PURE__*/React.createElement("div", {
        name: this.props.applyLabel || 'Apply',
        icon: "check"
      }), /*#__PURE__*/React.createElement("div", {
        name: this.props.downloadLabel || 'Download',
        icon: "download"
      }), /*#__PURE__*/React.createElement("div", {
        name: this.props.editLabel || 'Name and Description',
        icon: "pencil"
      }), /*#__PURE__*/React.createElement("div", {
        name: this.props.deleteLabel || 'Delete',
        icon: "trash"
      }))), /*#__PURE__*/React.createElement(AccordionItemBody, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(BoxBody, null, /*#__PURE__*/React.createElement(Header$1, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
        className: "sui-label"
      }, this.props.title), /*#__PURE__*/React.createElement(Description, {
        className: "sui-description"
      }, this.props.description)), /*#__PURE__*/React.createElement(ButtonIcon$1, {
        icon: "pencil",
        label: this.props.editLabel,
        design: "outlined",
        onClick: function onClick(e) {
          return editAction;
        }
      })), /*#__PURE__*/React.createElement(PresetsTable, null, this.props.children)), /*#__PURE__*/React.createElement(BoxFooter, null, /*#__PURE__*/React.createElement(Button, {
        label: this.props.applyLabel || 'Apply',
        icon: "check",
        design: "ghost",
        onClick: function onClick(e) {
          return applyAction;
        }
      })))));
    }
  }]);

  return PresetsAccordionItem;
}(Component);

var PresetsAccordion = /*#__PURE__*/function (_Component) {
  _inherits(PresetsAccordion, _Component);

  var _super = _createSuper(PresetsAccordion);

  function PresetsAccordion(props) {
    _classCallCheck(this, PresetsAccordion);

    return _super.call(this, props);
  }

  _createClass(PresetsAccordion, [{
    key: "render",
    value: function render() {
      var items = Children.map(this.props.children, function (item) {
        return /*#__PURE__*/React.createElement(PresetsAccordionItem, {
          title: item.props.title,
          description: item.props.description,
          applyLabel: item.props.applyLabel,
          editLabel: item.props.editLabel,
          downloadLabel: item.props.downloadLabel,
          deleteLabel: item.props.deleteLabel
        }, item.props.children);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion sui-accordion-flushed"
      }, items);
    }
  }]);

  return PresetsAccordion;
}(Component);

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
  if (call && (typeof call === "object" || typeof call === "function")) {
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

var ButtonIcon$3 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties$5(_ref, ["label", "icon", "design", "color", "className"]);

  var loader = /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = '' !== className ? 'sui-button-icon ' + className : 'sui-button-icon'; // Set button color.

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
    return /*#__PURE__*/React.createElement("a", _extends$5({
      ref: ref,
      className: className,
      disabled: props.disabled || props.loading
    }, props), props.loading ? loader : content);
  }

  return /*#__PURE__*/React.createElement("button", _extends$5({
    ref: ref,
    className: className,
    disabled: props.disabled || props.loading
  }, props), props.loading ? loader : content);
});

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$3(Notifications, _Component);

  var _super = _createSuper$3(Notifications);

  function Notifications(props) {
    var _this;

    _classCallCheck$3(this, Notifications);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$3(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });

    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$3(_this));
    return _this;
  }

  _createClass$3(Notifications, [{
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

      var message = /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React.createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React.createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React.createElement(ButtonIcon$3, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));

      if (!hide) {
        return /*#__PURE__*/React.createElement("div", {
          className: classMain
        }, /*#__PURE__*/React.createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }

      return null;
    }
  }]);

  return Notifications;
}(Component);

var PresetsWidget = /*#__PURE__*/function (_Component) {
  _inherits(PresetsWidget, _Component);

  var _super = _createSuper(PresetsWidget);

  function PresetsWidget(props) {
    var _this;

    _classCallCheck(this, PresetsWidget);

    _this = _super.call(this, props);
    _this.state = {
      empty: false
    };
    return _this;
  }

  _createClass(PresetsWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = this.props.children;

      if (0 === items.length) {
        this.setState({
          empty: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var empty = this.state.empty;
      var items = Children.map(this.props.children, function (item) {
        return /*#__PURE__*/React.createElement(PresetsAccordionItem, {
          "default": item.props["default"] || false,
          title: item.props.title,
          description: item.props.description,
          image: item.props.image,
          applyLabel: item.props.applyLabel,
          applyAction: item.props.applyAction,
          downloadLabel: item.props.downloadLabel,
          editLabel: item.props.editLabel,
          editAction: item.props.editAction,
          deleteLabel: item.props.deleteLabel
        }, item.props.children);
      });
      return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(BoxHeader, {
        titleIcon: "wrench-tool",
        title: this.props.title
      }), /*#__PURE__*/React.createElement(BoxBody, null, /*#__PURE__*/React.createElement("p", null, this.props.message), empty && /*#__PURE__*/React.createElement(Notifications, {
        type: "info"
      }, /*#__PURE__*/React.createElement("p", null, this.props.notice))), !empty && /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion sui-accordion-flushed",
        style: {
          borderBottom: 0
        }
      }, items), /*#__PURE__*/React.createElement(BoxFooter, null, /*#__PURE__*/React.createElement(Button, {
        icon: "save",
        label: "Save Config",
        color: "blue"
      }), /*#__PURE__*/React.createElement(Button, {
        icon: "wrench-tool",
        label: "Manage Configs",
        design: "ghost"
      })));
    }
  }]);

  return PresetsWidget;
}(Component);

var _templateObject$4;

var utils$1 = {
  gutter: 30,
  gutter_md: 20
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
var NoticeBlue = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n.sui-wrap && {\n    display: flex;\n    flex-flow: row wrap;\n\n    > img {\n        max-width: 100px;\n        display: none;\n        align-self: flex-end;\n        flex: 0 0 auto;\n        margin-right: 30px;\n    }\n\n    > div.sui-notice {\n        min-width: 1px;\n        flex: 1;\n        padding-bottom: ", ";\n    }\n\n    @media ", " {\n\n        > img {\n            display: block;\n        }\n\n        > div.sui-notice {\n            padding-bottom: ", ";\n        }\n    }\n}\n"])), utils$1.gutter_md, device$2.tablet, utils$1.gutter);
var PresetsPage = /*#__PURE__*/function (_Component) {
  _inherits(PresetsPage, _Component);

  var _super = _createSuper(PresetsPage);

  function PresetsPage(props) {
    var _this;

    _classCallCheck(this, PresetsPage);

    _this = _super.call(this, props);
    _this.state = {
      free: false,
      empty: false,
      loading: false
    };
    return _this;
  }

  _createClass(PresetsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = this.props.children;
      var freez = this.props.free || {};
      var isFree = false; // Check if free state exists.

      if (freez.state && 'undefined' !== typeof freez.state) {
        // Check if free state is boolean.
        if (_typeof(freez.state)) {
          isFree = freez.state;
        }
      }

      if (0 === items.length) {
        this.setState({
          empty: true
        });
      }

      this.setState({
        free: isFree
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          free = _this$state.free,
          empty = _this$state.empty;
      var welcome = this.props.welcome || {};
      var update = this.props.update || {};
      var freez = this.props.free || {};
      var items = Children.map(this.props.children, function (item) {
        return /*#__PURE__*/React.createElement(PresetsAccordionItem, {
          "default": item.props["default"] || false,
          title: item.props.title,
          description: item.props.description,
          image: item.props.image,
          applyLabel: item.props.applyLabel,
          applyAction: item.props.applyAction,
          downloadLabel: item.props.downloadLabel,
          editLabel: item.props.editLabel,
          editAction: item.props.editAction,
          deleteLabel: item.props.deleteLabel
        }, item.props.children);
      });
      return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(BoxHeader, {
        title: this.props.title
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        icon: "upload-cloud",
        label: this.props.uploadLabel || 'Upload',
        design: "ghost"
      }), /*#__PURE__*/React.createElement(Button, {
        icon: "save",
        label: this.props.saveLabel || 'Save Config',
        color: "blue"
      }))), /*#__PURE__*/React.createElement(BoxBody, {
        paddingBottom: welcome.message ? 0 : 30
      }, this.props.description && /*#__PURE__*/React.createElement("p", null, this.props.description), welcome.message && /*#__PURE__*/React.createElement(NoticeBlue, null, /*#__PURE__*/React.createElement("img", {
        src: welcome.image,
        alt: welcome.imageAlt || '',
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement(Notifications, {
        type: "info",
        dismiss: true
      }, /*#__PURE__*/React.createElement("p", null, welcome.message)))), !empty && /*#__PURE__*/React.createElement("div", {
        className: "sui-accordion sui-accordion-flushed",
        style: {
          borderBottomWidth: 0
        }
      }, items), free && freez.message && '' !== freez.message && /*#__PURE__*/React.createElement(BoxFooter, {
        display: "block"
      }, /*#__PURE__*/React.createElement(Notifications, {
        type: "upsell"
      }, /*#__PURE__*/React.createElement("p", null, freez.message), freez.button && '' !== freez.message && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
        label: freez.button,
        color: "purple",
        href: "https://wpmudev.com/",
        target: "_blank"
      })))), !free && /*#__PURE__*/React.createElement(BoxFooter, {
        display: "block",
        alignment: "center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "sui-description"
      }, update.message)));
    }
  }]);

  return PresetsPage;
}(Component);

var Presets = {};
Presets.Table = PresetsTable;
Presets.Accordion = PresetsAccordion;

export { Presets, PresetsPage, PresetsWidget };
