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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n        }\n    }, [\n        grabPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 73,\n                columnNumber: 34\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 80,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"+lgF9HVxouGi8s/h00erPKq0dVk=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtnQkFDckN3QyxTQUFTZjtnQkFDVGdCLFlBQVk3QjtnQkFDWjhCLGFBQWFoQztnQkFDYmlDLGdCQUFnQmhDOzs7Ozs7WUFHakJMLDJCQUFhLDhEQUFDTCxvREFBV0E7Z0JBQUMyQyxVQUFVaEI7Ozs7Ozs7O0FBRzNDO0dBNUVTMUI7S0FBQUE7QUE4RVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLGltYWdlLHNldEltYWdlfSkge1xuICBjb25zdCBbZ3JhYlBob3RvLCBzZXRHcmFiUGhvdG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250ZXh0TWVudUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7eDowLHk6MH0pO1xuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMoe3g6ZS5wYWdlWCx5OmUucGFnZVl9KTtcbiAgICBzZXRJc0NvbnRleHRNZW51VmlzaWJsZSh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihncmFiUGhvdG8pe1xuICAgICAgY29uc3QgZGF0YT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvLXBpY2tlclwiKTtcbiAgICAgIGRhdGEuY2xpY2soKTtcbiAgICAgIFxuICAgIH1cbiAgfSxbZ3JhYlBob3RvXSk7XG5cbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zPVtcbiAgICB7bmFtZTpcIlRha2UgUGhvdG9cIixjYWxsYmFjazooKT0+e319LFxuICAgIHtuYW1lOlwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLGNhbGxiYWNrOigpPT57fX0sXG4gICAge25hbWU6XCJVcGxvYWQgUGhvdG9cIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0R3JhYlBob3RvKHRydWUpO1xuICAgIH0sfSxcbiAgICB7bmFtZTpcIlJlbW92ZSBQaG90b1wiLGNhbGxiYWNrOigpPT57XG4gICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIik7XG4gICAgfSx9LFxuICBdO1xuICBjb25zdCBwaG90b1BpY2tlckNoYW5nZT0oKT0+e1xuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7dHlwZT09PVwic21cIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwibGdcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwieGxcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PnNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMlxuICAgICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX0gIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfSBpZD1cImNvbnRleHQtb3BlbmVyXCIgPkNoYW5nZSA8YnIvPiBQcm9maWxlIDxici8+IFBob3RvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgKDxDb250ZXh0TWVudVxuICAgICAgICBvcHRpb25zPXtjb250ZXh0TWVudU9wdGlvbnN9XG4gICAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2dyYWJQaG90byAmJiA8UGhvdG9QaWNrZXIgb25DaGFuZ2U9e3Bob3RvUGlja2VyQ2hhbmdlfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiZ3JhYlBob3RvIiwic2V0R3JhYlBob3RvIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImlkIiwic3BhbiIsImJyIiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});