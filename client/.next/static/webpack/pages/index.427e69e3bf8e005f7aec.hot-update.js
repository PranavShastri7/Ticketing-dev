"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/treflo/Desktop/Ticketing-dev/client/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar LandingPage = function LandingPage(_ref) {\n  var currentUser = _ref.currentUser;\n  console.log(currentUser);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n    children: \"Landing Page\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, _this);\n};\n\n_c = LandingPage;\n\nLandingPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {\n    var req, response;\n    return _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref2.req;\n\n            if (true) {\n              _context.next = 4;\n              break;\n            }\n\n            _context.next = 8;\n            break;\n\n          case 4:\n            _context.next = 6;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:5000/api/users/currentuser');\n\n          case 6:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response.data);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQzs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksT0FBa0I7QUFBQSxNQUFoQkMsV0FBZ0IsUUFBaEJBLFdBQWdCO0FBRWpDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFSCxDQUxBOztLQUFNRDs7QUFPUEEsV0FBVyxDQUFDSSxlQUFaO0FBQUEsc1NBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxZQUFBQSxHQUFSLFNBQVFBLEdBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBUUVOLGdEQUFBLENBQVUsNkNBQVYsQ0FSRjs7QUFBQTtBQVFmUSxZQUFBQSxRQVJlO0FBQUEsNkNBU2RBLFFBQVEsQ0FBQ0MsSUFUSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSwrREFBZVIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gY29uc3QgTGFuZGluZ1BhZ2U9KHtjdXJyZW50VXNlcn0gKT0+e1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcbiAgICByZXR1cm4gPGgxPkxhbmRpbmcgUGFnZTwvaDE+O1xuXG59XG5cbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcz0gYXN5bmMgKHtyZXF9KT0+XG57XG4gICAgaWYoIHR5cGVvZiB3aW5kb3cgPT09J3VuZGVmaW5lZCcgKVxuICAgIHtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy9icm93c2VyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTsiXSwibmFtZXMiOlsiYXhpb3MiLCJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsImdldCIsInJlc3BvbnNlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});