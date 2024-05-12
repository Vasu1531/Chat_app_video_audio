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

/***/ "./src/pages/onboarding.jsx":
/*!**********************************!*\
  !*** ./src/pages/onboarding.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction onboarding() {\n    _s();\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"/default_avatar.png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp \"\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl\",\n                children: \"Create your profile\"\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center mt-5 gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"Display Name\",\n                                state: name,\n                                setState: setName,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"About\",\n                                state: about,\n                                setState: setAbout,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"\",\n                                    flex: true,\n                                    \"items-center\": true,\n                                    \"justify-center\": true,\n                                    \"gap-7\": true,\n                                    \"bg-search-input-container-background\": true,\n                                    \"p-5\": true,\n                                    \"rounded-lg\": true,\n                                    children: \"Create Profile\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            type: \"xl\",\n                            image: image,\n                            setImage: setImage\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/pages/onboarding.jsx\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, this);\n}\n_s(onboarding, \"G08GwN6vrO6HCuYHp8xSNgXjQII=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0Y7QUFDWTtBQUMzQjtBQUNTO0FBRXhDLFNBQVNNLGFBQWE7O0lBQ3BCLE1BQU0sQ0FBQyxFQUFDQyxTQUFRLEVBQUMsQ0FBQyxHQUFFTCx1RUFBZ0JBO0lBQ3BDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQ0UsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVQyxJQUFJLEtBQUk7SUFDbkQsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1osbURBQUtBO3dCQUFDYSxLQUFJO3dCQUFnQkMsS0FBSTt3QkFBV0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUU5RCw4REFBQ0M7d0JBQUtMLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNNO2dCQUFHTixXQUFVOzBCQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2QsZ0VBQUtBO2dDQUFDTyxNQUFLO2dDQUFlYyxPQUFPZDtnQ0FBTWUsVUFBVWQ7Z0NBQVNlLEtBQUs7Ozs7OzswQ0FDaEUsOERBQUN2QixnRUFBS0E7Z0NBQUNPLE1BQUs7Z0NBQVFjLE9BQU9aO2dDQUFPYSxVQUFVWjtnQ0FBVWEsS0FBSzs7Ozs7OzBDQUMzRCw4REFBQ1Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNVO29DQUFPVixXQUFVO29DQUFFVyxJQUFJO29DQUFDQyxjQUFZO29DQUFDQyxnQkFBYztvQ0FBQ0MsT0FBSztvQ0FBQ0Msc0NBQW9DO29DQUFDQyxLQUFHO29DQUFDQyxZQUFVOzhDQUM3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUNsQjtrQ0FDQyw0RUFBQ2QsaUVBQU1BOzRCQUFDaUMsTUFBSzs0QkFBS3JCLE9BQU9BOzRCQUFPQyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7R0E1QlNQOztRQUNhSixtRUFBZ0JBOzs7QUE2QnRDLCtEQUFlSSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9vbmJvYXJkaW5nLmpzeD84Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vSW5wdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gb25ib2FyZGluZygpIHtcbiAgY29uc3QgW3t1c2VySW5mb31dID11c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHVzZXJJbmZvPy5uYW1lIHx8IFwiXCIpO1xuICBjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcbiAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLXNjcmVlbiB3LXNjcmVlbiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3doYXRzYXBwLmdpZlwiIGFsdD1cIndoYXRzYXBwXCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTd4bFwiPldoYXRzYXBwIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkNyZWF0ZSB5b3VyIHByb2ZpbGU8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgbXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNSBnYXAtNlwiPlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJEaXNwbGF5IE5hbWVcIiBzdGF0ZT17bmFtZX0gc2V0U3RhdGU9e3NldE5hbWV9IGxhYmVsIC8+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cIkFib3V0XCIgc3RhdGU9e2Fib3V0fSBzZXRTdGF0ZT17c2V0QWJvdXR9IGxhYmVsIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNyBiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgcC01IHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgPkNyZWF0ZSBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEF2YXRhciB0eXBlPVwieGxcIiBpbWFnZT17aW1hZ2V9IHNldEltYWdlPXtzZXRJbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gXG4gICk7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBvbmJvYXJkaW5nO1xuIl0sIm5hbWVzIjpbIkF2YXRhciIsIklucHV0IiwidXNlU3RhdGVQcm92aWRlciIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9uYm9hcmRpbmciLCJ1c2VySW5mbyIsIm5hbWUiLCJzZXROYW1lIiwiYWJvdXQiLCJzZXRBYm91dCIsImltYWdlIiwic2V0SW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInNwYW4iLCJoMiIsInN0YXRlIiwic2V0U3RhdGUiLCJsYWJlbCIsImJ1dHRvbiIsImZsZXgiLCJpdGVtcy1jZW50ZXIiLCJqdXN0aWZ5LWNlbnRlciIsImdhcC03IiwiYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIiwicC01Iiwicm91bmRlZC1sZyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});