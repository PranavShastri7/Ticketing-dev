"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/treflo/Desktop/Ticketing-dev/client/hooks/use-request.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var url = _ref.url,\n      method = _ref.method,\n      body = _ref.body,\n      onSuccess = _ref.onSuccess;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      errors = _useState[0],\n      setErrors = _useState[1];\n\n  var doRequest = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response;\n      return _Users_treflo_Desktop_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setErrors(null);\n              _context.next = 4;\n              return (axios__WEBPACK_IMPORTED_MODULE_2___default())[method](url, body);\n\n            case 4:\n              response = _context.sent;\n\n              if (onSuccess) {\n                onSuccess(response.data);\n              }\n\n              return _context.abrupt(\"return\", response.data);\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h4\", {\n                  children: \"Ooops....\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 20,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n                  className: \"my-0\",\n                  children: _context.t0.response.data.errors.map(function (err) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                      children: err.message\n                    }, err.message, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 23,\n                      columnNumber: 15\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 21,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 19,\n                columnNumber: 9\n              }, _this));\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function doRequest() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return {\n    doRequest: doRequest,\n    errors: errors\n  };\n}, \"CBiIfGMAaAtFFE/cKx87b00YZJU=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLCtEQUFlLG1CQUFzQztBQUFBOztBQUFBLE1BQW5DRSxHQUFtQyxRQUFuQ0EsR0FBbUM7QUFBQSxNQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQ25ELGtCQUE0QkosK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHdTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWRELGNBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFGYztBQUFBLHFCQUdTUCw4Q0FBSyxDQUFDRyxNQUFELENBQUwsQ0FBY0QsR0FBZCxFQUFtQkUsSUFBbkIsQ0FIVDs7QUFBQTtBQUdSSyxjQUFBQSxRQUhROztBQUtkLGtCQUFJSixTQUFKLEVBQWU7QUFDYkEsZ0JBQUFBLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFWLENBQVQ7QUFDRDs7QUFQYSwrQ0FTUEQsUUFBUSxDQUFDQyxJQVRGOztBQUFBO0FBQUE7QUFBQTtBQVdkSCxjQUFBQSxTQUFTLGVBQ1A7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFJLDJCQUFTLEVBQUMsTUFBZDtBQUFBLDRCQUNHLFlBQUlFLFFBQUosQ0FBYUMsSUFBYixDQUFrQkosTUFBbEIsQ0FBeUJLLEdBQXpCLENBQTZCLFVBQUFDLEdBQUc7QUFBQSx3Q0FDL0I7QUFBQSxnQ0FBdUJBLEdBQUcsQ0FBQ0M7QUFBM0IsdUJBQVNELEdBQUcsQ0FBQ0MsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUQrQjtBQUFBLG1CQUFoQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURPLENBQVQ7O0FBWGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEwsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQXdCQSxTQUFPO0FBQUVBLElBQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhRixJQUFBQSxNQUFNLEVBQU5BO0FBQWIsR0FBUDtBQUNELENBNUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZS1yZXF1ZXN0LmpzP2E5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB1cmwsIG1ldGhvZCwgYm9keSwgb25TdWNjZXNzIH0pID0+IHtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3JzKG51bGwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgYm9keSk7XG5cbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9ycyhcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoZXJyID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJkb1JlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJtYXAiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ })

});