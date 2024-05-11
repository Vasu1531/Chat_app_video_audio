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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{\n                setShowPhotoLibrary(true);\n            }\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 91,\n                columnNumber: 34\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 99,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"ufLSHxC1L4E6KxPeKWf+AxNmld0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLElBQUk7d0JBQy9Cd0MsY0FBYyxJQUFJeEMsU0FBUyxLQUFLOzswQ0FFOUIsOERBQUNtQztnQ0FBSUMsV0FBVyxrS0FDZSxPQUE3QnJDLFFBQVEsWUFBWSxRQUFRLEVBQUM7Z0NBRS9CMEMsU0FBUyxDQUFDakMsSUFBS0QsZ0JBQWdCQztnQ0FDL0JrQyxJQUFHOztrREFFRCw4REFBQ3RELG9EQUFRQTt3Q0FBQ2dELFdBQVU7d0NBQVdNLElBQUc7d0NBQWlCRCxTQUFTLENBQUNqQyxJQUFLRCxnQkFBZ0JDOzs7Ozs7a0RBQ2xGLDhEQUFDbUM7d0NBQUtGLFNBQVMsQ0FBQ2pDLElBQUtELGdCQUFnQkM7d0NBQUlrQyxJQUFHOzs0Q0FBa0I7MERBQU8sOERBQUNFOzs7Ozs0Q0FBSTswREFBUyw4REFBQ0E7Ozs7OzRDQUFJOzs7Ozs7Ozs7Ozs7OzBDQUUxRiw4REFBQ1Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNwRCxtREFBS0E7b0NBQUMrQyxLQUFLdEM7b0NBQU80QyxLQUFJO29DQUFTRCxXQUFVO29DQUFlRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1yRXJDLHNDQUF5Qiw4REFBQ1osb0RBQVdBO2dCQUNyQ3dELFNBQVMxQjtnQkFDVDJCLFlBQVkzQztnQkFDWjRDLGFBQWE5QztnQkFDYitDLGdCQUFnQjlDOzs7Ozs7WUFJakJMLDJCQUFhLDhEQUFDUCxvREFBV0E7Z0JBQUMyRCxVQUFVM0I7Ozs7Ozs7O0FBRzNDO0dBL0ZTL0I7S0FBQUE7QUFpR1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLGltYWdlLHNldEltYWdlfSkge1xuICBjb25zdCBbc2hvd1Bob3RvTGlicmFyeSxzZXRTaG93UGhvdG9MaWJyYXJ5XT11c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYlBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXNdID0gdXNlU3RhdGUoe3g6MCx5OjB9KTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0oZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzKHt4OmUucGFnZVgseTplLnBhZ2VZfSk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoZ3JhYlBob3RvKXtcbiAgICAgIGNvbnN0IGRhdGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIik7XG4gICAgICBkYXRhLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSAoZSk9PntcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHNldEdyYWJQaG90byhmYWxzZSlcbiAgICAgICAgICBcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sW2dyYWJQaG90b10pO1xuXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucz1bXG4gICAge25hbWU6XCJUYWtlIFBob3RvXCIsY2FsbGJhY2s6KCk9Pnt9fSxcbiAgICB7bmFtZTpcIkNob29zZSBGcm9tIExpYnJhcnlcIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0U2hvd1Bob3RvTGlicmFyeSh0cnVlKVxuICAgIH19LFxuICAgIHtuYW1lOlwiVXBsb2FkIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldEdyYWJQaG90byh0cnVlKTtcbiAgICB9LH0sXG4gICAge25hbWU6XCJSZW1vdmUgUGhvdG9cIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0SW1hZ2UoXCIvZGVmYXVsdF9hdmF0YXIucG5nXCIpO1xuICAgIH0sfSxcbiAgXTtcbiAgY29uc3QgcGhvdG9QaWNrZXJDaGFuZ2U9IGFzeW5jIChlKT0+e1xuICAgIGNvbnN0IGZpbGUgPWUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IHJlYWRlcj1uZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGRhdGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZWFkZXIub25sb2FkPWZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGRhdGEuc3JjPWV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBkYXRhLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBzZXRJbWFnZShkYXRhLnNyYylcbiAgICB9LDEwMClcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHt0eXBlPT09XCJzbVwiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0eXBlPT09XCJsZ1wiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0eXBlPT09XCJ4bFwiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgei0wXCJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCk9PnNldEhvdmVyKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+c2V0SG92ZXIoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHotMTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGgtNjAgdy02MCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yXG4gICAgICAgICAgICAgICR7aG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX1cbiAgICAgICAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBpZD1cImNvbnRleHQtb3BlbmVyXCIgb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfSAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9IGlkPVwiY29udGV4dC1vcGVuZXJcIiA+Q2hhbmdlIDxici8+IFByb2ZpbGUgPGJyLz4gUGhvdG88L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNjAgdy02MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBpc0NvbnRleHRNZW51VmlzaWJsZSAmJiAoPENvbnRleHRNZW51XG4gICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cbiAgICAgICAgY29yZGluYXRlcz17Y29udGV4dE1lbnVDb3JkaW5hdGVzfVxuICAgICAgICBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICBcbiAgICAgIHtncmFiUGhvdG8gJiYgPFBob3RvUGlja2VyIG9uQ2hhbmdlPXtwaG90b1BpY2tlckNoYW5nZX0gLz59XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYUNhbWVyYSIsIkNvbnRleHRNZW51IiwiUGhvdG9QaWNrZXIiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNob3dQaG90b0xpYnJhcnkiLCJzZXRTaG93UGhvdG9MaWJyYXJ5IiwiZ3JhYlBob3RvIiwic2V0R3JhYlBob3RvIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJzZXRUaW1lb3V0IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsImV2ZW50Iiwic3JjIiwicmVzdWx0Iiwic2V0QXR0cmlidXRlIiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});