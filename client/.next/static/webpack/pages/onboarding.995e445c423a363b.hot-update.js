"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/PhotoLibrary.jsx":
/*!************************************************!*\
  !*** ./src/components/common/PhotoLibrary.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\n\n\nfunction PhotoLibrary(param) {\n    let { set  } = param;\n    const images = [\n        \"/avatars/1.png\",\n        \"/avatars/2.png\",\n        \"/avatars/3.png\",\n        \"/avatars/4.png\",\n        \"/avatars/5.png\",\n        \"/avatars/6.png\",\n        \"/avatars/7.png\",\n        \"/avatars/8.png\",\n        \"/avatars/9.png\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-max w-max bg-gray-900 gap-6 rounded-lg p-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                onClick: hidePhotoLibrary,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                    className: \"h-10 w-10 cursor-pointer \"\n                }, void 0, false, {\n                    fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/PhotoLibrary.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/PhotoLibrary.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/PhotoLibrary.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/PhotoLibrary.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = PhotoLibrary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoLibrary);\nvar _c;\n$RefreshReg$(_c, \"PhotoLibrary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vUGhvdG9MaWJyYXJ5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2dCO0FBRTFDLFNBQVNFLGFBQWEsS0FBSyxFQUFFO1FBQVAsRUFBQ0MsSUFBRyxFQUFDLEdBQUw7SUFDcEIsTUFBTUMsU0FBUztRQUNiO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVO2dCQUFHQyxTQUFTQzswQkFDekIsNEVBQUNQLG9EQUFPQTtvQkFBQ0ssV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0tBdEJTSjtBQXdCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vUGhvdG9MaWJyYXJ5LmpzeD9iZDk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmZ1bmN0aW9uIFBob3RvTGlicmFyeSh7c2V0fSkge1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgXCIvYXZhdGFycy8xLnBuZ1wiLFxuICAgIFwiL2F2YXRhcnMvMi5wbmdcIixcbiAgICBcIi9hdmF0YXJzLzMucG5nXCIsXG4gICAgXCIvYXZhdGFycy80LnBuZ1wiLFxuICAgIFwiL2F2YXRhcnMvNS5wbmdcIixcbiAgICBcIi9hdmF0YXJzLzYucG5nXCIsXG4gICAgXCIvYXZhdGFycy83LnBuZ1wiLFxuICAgIFwiL2F2YXRhcnMvOC5wbmdcIixcbiAgICBcIi9hdmF0YXJzLzkucG5nXCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCBtYXgtaC1bMTAwdmhdIG1heC13LVsxMDB2d10gaC1mdWxsIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLW1heCB3LW1heCBiZy1ncmF5LTkwMCBnYXAtNiByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2hpZGVQaG90b0xpYnJhcnl9PlxuICAgICAgICAgIDxJb0Nsb3NlIGNsYXNzTmFtZT1cImgtMTAgdy0xMCBjdXJzb3ItcG9pbnRlciBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b0xpYnJhcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0Nsb3NlIiwiUGhvdG9MaWJyYXJ5Iiwic2V0IiwiaW1hZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImhpZGVQaG90b0xpYnJhcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/PhotoLibrary.jsx\n"));

/***/ })

});