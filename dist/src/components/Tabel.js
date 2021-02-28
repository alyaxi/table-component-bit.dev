"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../App.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tabel(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
          children: "Name"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
          children: "Registered Course"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
      children: data ? /*#__PURE__*/(0, _jsxRuntime.jsx)(RenderTableData, {
        data: data
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          children: "No User name avaialable"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          children: "No User course avaialable"
        })]
      })
    })]
  });
}

function RenderTableData(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: data.map(function (stdData, id) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          children: stdData.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          children: stdData.course
        })]
      });
    })
  });
}

var _default = Tabel;
exports.default = _default;

//# sourceMappingURL=Tabel.js.map