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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{});\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 69,\n                columnNumber: 34\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 76,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"+lgF9HVxouGi8s/h00erPKq0dVk=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdUMsVUFBVWhCOzs7Ozs7OztBQUczQztHQXhFU3RCO0tBQUFBO0FBMEVULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDYW1lcmEgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuaW1wb3J0IFBob3RvUGlja2VyIGZyb20gXCIuL1Bob3RvUGlja2VyXCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7dHlwZSxpbWFnZSxzZXRJbWFnZX0pIHtcbiAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYlBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXNdID0gdXNlU3RhdGUoe3g6MCx5OjB9KTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0oZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzKHt4OmUucGFnZVgseTplLnBhZ2VZfSk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgXG4gIH0pXG5cbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zPVtcbiAgICB7bmFtZTpcIlRha2UgUGhvdG9cIixjYWxsYmFjazooKT0+e319LFxuICAgIHtuYW1lOlwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLGNhbGxiYWNrOigpPT57fX0sXG4gICAge25hbWU6XCJVcGxvYWQgUGhvdG9cIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0R3JhYlBob3RvKHRydWUpO1xuICAgIH0sfSxcbiAgICB7bmFtZTpcIlJlbW92ZSBQaG90b1wiLGNhbGxiYWNrOigpPT57XG4gICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XG4gICAgfSx9LFxuICBdO1xuICBjb25zdCBwaG90b1BpY2tlckNoYW5nZT0oKT0+e1xuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7dHlwZT09PVwic21cIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwibGdcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwieGxcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PnNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMlxuICAgICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX0gIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfSBpZD1cImNvbnRleHQtb3BlbmVyXCIgPkNoYW5nZSA8YnIvPiBQcm9maWxlIDxici8+IFBob3RvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgKDxDb250ZXh0TWVudVxuICAgICAgICBvcHRpb25zPXtjb250ZXh0TWVudU9wdGlvbnN9XG4gICAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2dyYWJQaG90byAmJiA8UGhvdG9QaWNrZXIgb25DaGFuZ2U9e3Bob3RvUGlja2VyQ2hhbmdlfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiZ3JhYlBob3RvIiwic2V0R3JhYlBob3RvIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwaG90b1BpY2tlckNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});