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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n/* harmony import */ var _PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoLibrary */ \"./src/components/common/PhotoLibrary.jsx\");\n/* harmony import */ var _CapturePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CapturePhoto */ \"./src/components/common/CapturePhoto.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [showCapturePhoto, setshowCapturephoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{\n                setshowCapturephoto(true);\n            }\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{\n                setShowPhotoLibrary(true);\n            }\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 96,\n                columnNumber: 34\n            }, this),\n            showCapturePhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CapturePhoto__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 105,\n                columnNumber: 29\n            }, this),\n            showPhotoLibrary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setImage: setImage,\n                hidePhotoLibrary: setShowPhotoLibrary\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 108,\n                columnNumber: 28\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/Avatar.jsx\",\n                lineNumber: 110,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"zAEG246wKW5oR8Hxf3cFYJwTnn8=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDYW1lcmEgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuaW1wb3J0IFBob3RvUGlja2VyIGZyb20gXCIuL1Bob3RvUGlja2VyXCI7XG5pbXBvcnQgUGhvdG9MaWJyYXJ5IGZyb20gXCIuL1Bob3RvTGlicmFyeVwiO1xuaW1wb3J0IENhcHR1cmVQaG90byBmcm9tIFwiLi9DYXB0dXJlUGhvdG9cIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLGltYWdlLHNldEltYWdlfSkge1xuICBjb25zdCBbc2hvd0NhcHR1cmVQaG90byxzZXRzaG93Q2FwdHVyZXBob3RvXT11c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UGhvdG9MaWJyYXJ5LHNldFNob3dQaG90b0xpYnJhcnldPXVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYlBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbnRleHRNZW51VmlzaWJsZSwgc2V0SXNDb250ZXh0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGV4dE1lbnVDb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXNdID0gdXNlU3RhdGUoe3g6MCx5OjB9KTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0oZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzKHt4OmUucGFnZVgseTplLnBhZ2VZfSk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoZ3JhYlBob3RvKXtcbiAgICAgIGNvbnN0IGRhdGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIik7XG4gICAgICBkYXRhLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSAoZSk9PntcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHNldEdyYWJQaG90byhmYWxzZSlcbiAgICAgICAgICBcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sW2dyYWJQaG90b10pO1xuXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucz1bXG4gICAge25hbWU6XCJUYWtlIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldHNob3dDYXB0dXJlcGhvdG8odHJ1ZSk7XG4gICAgfX0sXG4gICAge25hbWU6XCJDaG9vc2UgRnJvbSBMaWJyYXJ5XCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldFNob3dQaG90b0xpYnJhcnkodHJ1ZSlcbiAgICB9fSxcbiAgICB7bmFtZTpcIlVwbG9hZCBQaG90b1wiLGNhbGxiYWNrOigpPT57XG4gICAgICBzZXRHcmFiUGhvdG8odHJ1ZSk7XG4gICAgfSx9LFxuICAgIHtuYW1lOlwiUmVtb3ZlIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldEltYWdlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcbiAgICB9LH0sXG4gIF07XG4gIGNvbnN0IHBob3RvUGlja2VyQ2hhbmdlPSBhc3luYyAoZSk9PntcbiAgICBjb25zdCBmaWxlID1lLnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXI9bmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBkYXRhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVhZGVyLm9ubG9hZD1mdW5jdGlvbihldmVudCl7XG4gICAgICBkYXRhLnNyYz1ldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgZGF0YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgc2V0SW1hZ2UoZGF0YS5zcmMpXG4gICAgfSwxMDApXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7dHlwZT09PVwic21cIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwibGdcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwieGxcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PnNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMlxuICAgICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX0gIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfSBpZD1cImNvbnRleHQtb3BlbmVyXCIgPkNoYW5nZSA8YnIvPiBQcm9maWxlIDxici8+IFBob3RvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgKDxDb250ZXh0TWVudVxuICAgICAgICBvcHRpb25zPXtjb250ZXh0TWVudU9wdGlvbnN9XG4gICAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnVWaXNpYmxlfVxuICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7XG4gICAgICAgIHNob3dDYXB0dXJlUGhvdG8gJiYgPENhcHR1cmVQaG90b1xuICAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHtzaG93UGhvdG9MaWJyYXJ5ICYmIDxQaG90b0xpYnJhcnkgc2V0SW1hZ2U9e3NldEltYWdlfVxuICAgICAgaGlkZVBob3RvTGlicmFyeT17c2V0U2hvd1Bob3RvTGlicmFyeX0gLz59XG4gICAgICB7Z3JhYlBob3RvICYmIDxQaG90b1BpY2tlciBvbkNoYW5nZT17cGhvdG9QaWNrZXJDaGFuZ2V9IC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFDYW1lcmEiLCJDb250ZXh0TWVudSIsIlBob3RvUGlja2VyIiwiUGhvdG9MaWJyYXJ5IiwiQ2FwdHVyZVBob3RvIiwiQXZhdGFyIiwidHlwZSIsImltYWdlIiwic2V0SW1hZ2UiLCJzaG93Q2FwdHVyZVBob3RvIiwic2V0c2hvd0NhcHR1cmVwaG90byIsInNob3dQaG90b0xpYnJhcnkiLCJzZXRTaG93UGhvdG9MaWJyYXJ5IiwiZ3JhYlBob3RvIiwic2V0R3JhYlBob3RvIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJzZXRUaW1lb3V0IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsImV2ZW50Iiwic3JjIiwicmVzdWx0Iiwic2V0QXR0cmlidXRlIiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJoaWRlUGhvdG9MaWJyYXJ5Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});