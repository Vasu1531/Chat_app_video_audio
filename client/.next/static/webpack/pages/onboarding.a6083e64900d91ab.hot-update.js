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

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: [\n                type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this),\n                type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-14 w-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this),\n                type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative cursor-pointer z-0\",\n                    onMouseEnter: ()=>setHover(true),\n                    onMouseLeave: ()=>setHover(false),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCamera, {\n                                    className: \"text-2xl\",\n                                    id: \"context-opener\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Change \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 30\n                                        }, this),\n                                        \" Profile Photo\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center h-60 w-60\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: image,\n                                alt: \"avatar\",\n                                className: \"rounded-full\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Avatar, \"bRXmKus9fOZFlca/6zXTYU+twGY=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDRTtBQUUxQyxTQUFTSSxPQUFPLEtBQXFCLEVBQUU7UUFBdkIsRUFBQ0MsS0FBSSxFQUFDQyxNQUFLLEVBQUNDLFNBQVEsRUFBQyxHQUFyQjs7SUFDZCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxxQkFDRTtrQkFDRSw0RUFBQ1E7WUFBSUMsV0FBVTs7Z0JBQ1ZOLFNBQU8sc0JBQ04sOERBQUNLO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDWCxtREFBS0E7d0JBQUNZLEtBQUtOO3dCQUFPTyxLQUFJO3dCQUFTRixXQUFVO3dCQUFlRyxJQUFJOzs7Ozs7Ozs7OztnQkFHaEVULFNBQU8sc0JBQ04sOERBQUNLO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDWCxtREFBS0E7d0JBQUNZLEtBQUtOO3dCQUFPTyxLQUFJO3dCQUFTRixXQUFVO3dCQUFlRyxJQUFJOzs7Ozs7Ozs7OztnQkFHaEVULFNBQU8sc0JBQ04sOERBQUNLO29CQUFJQyxXQUFVO29CQUNmSSxjQUFjLElBQUlOLFNBQVMsSUFBSTtvQkFDL0JPLGNBQWMsSUFBSVAsU0FBUyxLQUFLOztzQ0FFOUIsOERBQUNDOzRCQUFJQyxXQUFXLGtLQUNlLE9BQTdCSCxRQUFRLFlBQVksUUFBUSxFQUFDOzs4Q0FFN0IsOERBQUNMLG9EQUFRQTtvQ0FBQ1EsV0FBVTtvQ0FBV00sSUFBRzs7Ozs7OzhDQUNsQyw4REFBQ0M7O3dDQUFLO3NEQUFPLDhEQUFDQzs7Ozs7d0NBQUk7Ozs7Ozs7Ozs7Ozs7c0NBRXBCLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1gsbURBQUtBO2dDQUFDWSxLQUFLTjtnQ0FBT08sS0FBSTtnQ0FBU0YsV0FBVTtnQ0FBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdFO0dBbENTVjtLQUFBQTtBQW9DVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5mdW5jdGlvbiBBdmF0YXIoe3R5cGUsaW1hZ2Usc2V0SW1hZ2V9KSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge3R5cGU9PT1cInNtXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3R5cGU9PT1cImxnXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3R5cGU9PT1cInhsXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB6LTBcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKT0+c2V0SG92ZXIodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT5zZXRIb3ZlcihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgdGV4dC1jZW50ZXIgZ2FwLTJcbiAgICAgICAgICAgICAgJHtob3ZlciA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cbiAgICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q2hhbmdlIDxici8+IFByb2ZpbGUgUGhvdG88L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNjAgdy02MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiRmFDYW1lcmEiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhvdmVyIiwic2V0SG92ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiLCJzcGFuIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});