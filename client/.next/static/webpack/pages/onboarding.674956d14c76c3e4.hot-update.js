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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n              \".concat(hover ? \"visible\" : \"hidden\", \"\\n              \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 86\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 100\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 58,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"J1idXTT1aphtZy/N7ScGiSB50/4=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNTO0FBQ0U7QUFDRjtBQUV4QyxTQUFTSyxPQUFPLEtBQXFCLEVBQUU7UUFBdkIsRUFBQ0MsS0FBSSxFQUFDQyxNQUFLLEVBQUNDLFNBQVEsRUFBQyxHQUFyQjs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNXLHNCQUFzQkMsd0JBQXdCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEUsTUFBTSxDQUFDYSx1QkFBdUJDLHlCQUF5QixHQUFHZCwrQ0FBUUEsQ0FBQztRQUFDZSxHQUFFO1FBQUVDLEdBQUU7SUFBQztJQUMzRSxNQUFNQyxrQkFBaUIsQ0FBQ0MsSUFBSTtRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkwseUJBQXlCO1lBQUNDLEdBQUVHLEVBQUVFLEtBQUs7WUFBQ0osR0FBRUUsRUFBRUcsS0FBSztRQUFBO1FBQzdDVCx3QkFBd0IsSUFBSTtJQUM5QjtJQUNBLE1BQU1VLHFCQUFtQjtRQUN2QjtZQUFDQyxNQUFLO1lBQWFDLFVBQVMsSUFBSSxDQUFDO1FBQUM7UUFDbEM7WUFBQ0QsTUFBSztZQUFzQkMsVUFBUyxJQUFJLENBQUM7UUFBQztRQUMzQztZQUFDRCxNQUFLO1lBQWVDLFVBQVMsSUFBSSxDQUFDO1FBQUM7UUFDcEM7WUFBQ0QsTUFBSztZQUFlQyxVQUFTLElBQUk7Z0JBQ2hDbEIsU0FBUztZQUNYO1FBQUU7S0FDSDtJQUNELHFCQUNFOzswQkFDRSw4REFBQ21CO2dCQUFJQyxXQUFVOztvQkFDVnRCLFNBQU8sc0JBQ04sOERBQUNxQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzVCLG1EQUFLQTs0QkFBQzZCLEtBQUt0Qjs0QkFBT3VCLEtBQUk7NEJBQVNGLFdBQVU7NEJBQWVHLElBQUk7Ozs7Ozs7Ozs7O29CQUdoRXpCLFNBQU8sc0JBQ04sOERBQUNxQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzVCLG1EQUFLQTs0QkFBQzZCLEtBQUt0Qjs0QkFBT3VCLEtBQUk7NEJBQVNGLFdBQVU7NEJBQWVHLElBQUk7Ozs7Ozs7Ozs7O29CQUdoRXpCLFNBQU8sc0JBQ04sOERBQUNxQjt3QkFBSUMsV0FBVTt3QkFDZkksY0FBYyxJQUFJcEIsU0FBUyxJQUFJO3dCQUMvQnFCLGNBQWMsSUFBSXJCLFNBQVMsS0FBSzs7MENBRTlCLDhEQUFDZTtnQ0FBSUMsV0FBVyxrS0FDZSxPQUE3QmpCLFFBQVEsWUFBWSxRQUFRLEVBQUM7Z0NBRS9CdUIsU0FBUyxDQUFDZCxJQUFLRCxnQkFBZ0JDO2dDQUMvQmUsSUFBRzs7a0RBRUQsOERBQUNoQyxvREFBUUE7d0NBQUN5QixXQUFVO3dDQUFXTyxJQUFHO3dDQUFpQkQsU0FBUyxDQUFDZCxJQUFLRCxnQkFBZ0JDOzs7Ozs7a0RBQ2xGLDhEQUFDZ0I7d0NBQUtGLFNBQVMsQ0FBQ2QsSUFBS0QsZ0JBQWdCQzt3Q0FBSWUsSUFBRzs7NENBQWtCOzBEQUFPLDhEQUFDRTs7Ozs7NENBQUk7MERBQVMsOERBQUNBOzs7Ozs0Q0FBSTs7Ozs7Ozs7Ozs7OzswQ0FFMUYsOERBQUNWO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDNUIsbURBQUtBO29DQUFDNkIsS0FBS3RCO29DQUFPdUIsS0FBSTtvQ0FBU0YsV0FBVTtvQ0FBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNckVsQixzQ0FBd0IsOERBQUNULG9EQUFXQTtnQkFDcENrQyxTQUFTZDtnQkFDVGUsWUFBWXhCO2dCQUNaeUIsYUFBYTNCO2dCQUNiNEIsZ0JBQWdCM0I7Ozs7Ozs7O0FBS3hCO0dBN0RTVDtLQUFBQTtBQStEVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7dHlwZSxpbWFnZSxzZXRJbWFnZX0pIHtcbiAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYlBob3RvXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250ZXh0TWVudUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7eDowLHk6MH0pO1xuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMoe3g6ZS5wYWdlWCx5OmUucGFnZVl9KTtcbiAgICBzZXRJc0NvbnRleHRNZW51VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zPVtcbiAgICB7bmFtZTpcIlRha2UgUGhvdG9cIixjYWxsYmFjazooKT0+e319LFxuICAgIHtuYW1lOlwiQ2hvb3NlIEZyb20gTGlicmFyeVwiLGNhbGxiYWNrOigpPT57fX0sXG4gICAge25hbWU6XCJVcGxvYWQgUGhvdG9cIixjYWxsYmFjazooKT0+e319LFxuICAgIHtuYW1lOlwiUmVtb3ZlIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldEltYWdlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcbiAgICB9LH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7dHlwZT09PVwic21cIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwibGdcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZT09PVwieGxcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PnNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMlxuICAgICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PiBzaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiIG9uQ2xpY2s9eyhlKT0+IHNob3dDb250ZXh0TWVudShlKX0gIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpPT4gc2hvd0NvbnRleHRNZW51KGUpfSBpZD1cImNvbnRleHQtb3BlbmVyXCIgPkNoYW5nZSA8YnIvPiBQcm9maWxlIDxici8+IFBob3RvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTYwIHctNjBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgPENvbnRleHRNZW51XG4gICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cbiAgICAgICAgY29yZGluYXRlcz17Y29udGV4dE1lbnVDb3JkaW5hdGVzfVxuICAgICAgICBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudVZpc2libGV9XG4gICAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImdyYWJQaG90byIsInNldEdyYWJQaG90byIsImhvdmVyIiwic2V0SG92ZXIiLCJpc0NvbnRleHRNZW51VmlzaWJsZSIsInNldElzQ29udGV4dE1lbnVWaXNpYmxlIiwiY29udGV4dE1lbnVDb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzIiwieCIsInkiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiZmlsbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJpZCIsInNwYW4iLCJiciIsIm9wdGlvbnMiLCJjb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});