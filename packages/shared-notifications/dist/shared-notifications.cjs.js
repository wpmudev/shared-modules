'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Notifications = function Notifications(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      padding: 5,
      backgroundColor: "lightgreen"
    }
  }, "Notify something: ", children);
};

exports.Notifications = Notifications;
