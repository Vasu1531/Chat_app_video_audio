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

/***/ "./src/components/common/CapturePhoto.jsx":
/*!************************************************!*\
  !*** ./src/components/common/CapturePhoto.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CapturePhoto(param) {\n    let { hide , setImage  } = param;\n    _s();\n    const videoref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    useE;\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = videoref.current.videoWidth;\n        canvas.height = videoref.current.videoHeight;\n        canvas.getContext(\"2d\").drawImage(videoref.current, 0, 0, 300, 150);\n        const photoData = canvas.toDataURL(\"image/png\");\n        setImage(photoData);\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center\",\n        children: [\n            \"CapturePhoto\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 w-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                        onClick: ()=>hide(false),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                            className: \"h-10 w-10 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            id: \"video\",\n                            width: \"400\",\n                            autoPlay: true,\n                            ref: videoref\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2  mb-10 \",\n                        onClick: capturePhoto,\n                        children: \"Capture\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(CapturePhoto, \"aEW10Qy08upCk5kW48Yc4KPDqcs=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUNJO0FBRTFDLFNBQVNHLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFsQjs7SUFDcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUc1Qk07SUFFQSxNQUFNQyxlQUFlLElBQU07UUFDekIsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3RDRixPQUFPRyxLQUFLLEdBQUdOLFNBQVNPLE9BQU8sQ0FBQ0MsVUFBVTtRQUMxQ0wsT0FBT00sTUFBTSxHQUFHVCxTQUFTTyxPQUFPLENBQUNHLFdBQVc7UUFDNUNQLE9BQU9RLFVBQVUsQ0FBQyxNQUFNQyxTQUFTLENBQUNaLFNBQVNPLE9BQU8sRUFBRSxHQUFHLEdBQUUsS0FBSTtRQUU3RCxNQUFNTSxZQUFZVixPQUFPVyxTQUFTLENBQUM7UUFDbkNmLFNBQVNjO1FBRVRmLEtBQUssS0FBSztJQUNaO0lBRUEscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVOztZQUEyRzswQkFFeEgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTW5CLEtBQUssS0FBSztrQ0FFekIsNEVBQUNGLG9EQUFPQTs0QkFBQ29CLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFNQyxJQUFHOzRCQUFRYixPQUFNOzRCQUFNYyxRQUFROzRCQUFDQyxLQUFLckI7Ozs7Ozs7Ozs7O2tDQUU5Qyw4REFBQ3NCO3dCQUNDTixXQUFVO3dCQUNWQyxTQUFTZjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F4Q1NMO0tBQUFBO0FBMENULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9DYXB0dXJlUGhvdG8uanN4P2QyODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZnVuY3Rpb24gQ2FwdHVyZVBob3RvKHsgaGlkZSwgc2V0SW1hZ2UgfSkge1xuICBjb25zdCB2aWRlb3JlZiA9IHVzZVJlZihudWxsKTtcblxuXG4gIHVzZUVcblxuICBjb25zdCBjYXB0dXJlUGhvdG8gPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB2aWRlb3JlZi5jdXJyZW50LnZpZGVvV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHZpZGVvcmVmLmN1cnJlbnQudmlkZW9IZWlnaHQ7XG4gICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UodmlkZW9yZWYuY3VycmVudCwgMCwgMCwzMDAsMTUwKTtcblxuICAgIGNvbnN0IHBob3RvRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgc2V0SW1hZ2UocGhvdG9EYXRhKTtcblxuICAgIGhpZGUoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTQvNiB3LTIvNiB0b3AtMS80IGxlZnQtMS8zIGJnLWdyYXktOTAwIGdhcC0zIHJvdW5kZWQtbGcgcHQtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgQ2FwdHVyZVBob3RvXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgdy1mdWxsIFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwci0yIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktZW5kXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJb0Nsb3NlIGNsYXNzTmFtZT1cImgtMTAgdy0xMCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNDAwXCIgYXV0b1BsYXkgcmVmPXt2aWRlb3JlZn0+PC92aWRlbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IHctMTYgYmctd2hpdGUgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGJvcmRlci04IGJvcmRlci10ZWFsLWxpZ2h0IHAtMiAgbWItMTAgXCJcbiAgICAgICAgICBvbkNsaWNrPXtjYXB0dXJlUGhvdG99XG4gICAgICAgID5cbiAgICAgICAgICBDYXB0dXJlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHR1cmVQaG90bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJDYXB0dXJlUGhvdG8iLCJoaWRlIiwic2V0SW1hZ2UiLCJ2aWRlb3JlZiIsInVzZUUiLCJjYXB0dXJlUGhvdG8iLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImN1cnJlbnQiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwicGhvdG9EYXRhIiwidG9EYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInZpZGVvIiwiaWQiLCJhdXRvUGxheSIsInJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});