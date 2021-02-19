import React from 'react';

var Notifications = function Notifications(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 5,
      backgroundColor: "lightgreen"
    }
  }, "Notify something: ", children);
};

export { Notifications };
