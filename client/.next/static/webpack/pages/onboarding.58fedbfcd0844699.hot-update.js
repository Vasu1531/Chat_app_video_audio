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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 67,\n                columnNumber: 34\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 74,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"J1idXTT1aphtZy/N7ScGiSB50/4=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U3RCO0tBQUFBO0FBd0VULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2FtZXJhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcbmltcG9ydCBQaG90b1BpY2tlciBmcm9tIFwiLi9QaG90b1BpY2tlclwiO1xuXG5mdW5jdGlvbiBBdmF0YXIoe3R5cGUsaW1hZ2Usc2V0SW1hZ2V9KSB7XG4gIGNvbnN0IFtncmFiUGhvdG8sIHNldEdyYWJQaG90b10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUsIHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRleHRNZW51Q29yZGluYXRlcywgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHt4OjAseTowfSk7XG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9KGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldENvbnRleHRNZW51Q29yZGluYXRlcyh7eDplLnBhZ2VYLHk6ZS5wYWdlWX0pO1xuICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpO1xuICB9O1xuXG4gIFxuXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucz1bXG4gICAge25hbWU6XCJUYWtlIFBob3RvXCIsY2FsbGJhY2s6KCk9Pnt9fSxcbiAgICB7bmFtZTpcIkNob29zZSBGcm9tIExpYnJhcnlcIixjYWxsYmFjazooKT0+e319LFxuICAgIHtuYW1lOlwiVXBsb2FkIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldEdyYWJQaG90byh0cnVlKTtcbiAgICB9LH0sXG4gICAge25hbWU6XCJSZW1vdmUgUGhvdG9cIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0SW1hZ2UoXCIvZGVmYXVsdF9hdmF0YXIucG5nXCIpO1xuICAgIH0sfSxcbiAgXTtcbiAgY29uc3QgcGhvdG9QaWNrZXJDaGFuZ2U9KCk9PntcblxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge3R5cGU9PT1cInNtXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3R5cGU9PT1cImxnXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3R5cGU9PT1cInhsXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB6LTBcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKT0+c2V0SG92ZXIodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT5zZXRIb3ZlcihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgdGV4dC1jZW50ZXIgZ2FwLTJcbiAgICAgICAgICAgICAgJHtob3ZlciA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfVxuICAgICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUNhbWVyYSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIGlkPVwiY29udGV4dC1vcGVuZXJcIiBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9ICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX0gaWQ9XCJjb250ZXh0LW9wZW5lclwiID5DaGFuZ2UgPGJyLz4gUHJvZmlsZSA8YnIvPiBQaG90bzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzQ29udGV4dE1lbnVWaXNpYmxlICYmICg8Q29udGV4dE1lbnVcbiAgICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfVxuICAgICAgICBjb3JkaW5hdGVzPXtjb250ZXh0TWVudUNvcmRpbmF0ZXN9XG4gICAgICAgIGNvbnRleHRNZW51PXtpc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgICAgc2V0Q29udGV4dE1lbnU9e3NldElzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtncmFiUGhvdG8gJiYgPFBob3RvUGlja2VyIG9uQ2hhbmdlPXtwaG90b1BpY2tlckNoYW5nZX0gLz59XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJGYUNhbWVyYSIsIkNvbnRleHRNZW51IiwiUGhvdG9QaWNrZXIiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImdyYWJQaG90byIsInNldEdyYWJQaG90byIsImhvdmVyIiwic2V0SG92ZXIiLCJpc0NvbnRleHRNZW51VmlzaWJsZSIsInNldElzQ29udGV4dE1lbnVWaXNpYmxlIiwiY29udGV4dE1lbnVDb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzIiwieCIsInkiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImlkIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});