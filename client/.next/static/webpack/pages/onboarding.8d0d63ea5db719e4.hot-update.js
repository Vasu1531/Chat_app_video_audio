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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CapturePhoto(param) {\n    let { hide , setImage  } = param;\n    _s();\n    const videoref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = videoref.current.videoWidth;\n        canvas.height = videoref.current.videoHeight;\n        canvas.getContext(\"2d\").drawImage(videoref.current, 0, 0, 300, 150);\n        const photoData = canvas.toDataURL(\"image/png\");\n        setImage(photoData);\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center\",\n        children: [\n            \"CapturePhoto\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 w-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                        onClick: ()=>hide(false),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                            className: \"h-10 w-10 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            id: \"video\",\n                            width: \"400\",\n                            autoPlay: true,\n                            ref: videoref\n                        }, void 0, false, {\n                            fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2  mb-10 \",\n                        onClick: capturePhoto,\n                        children: \"Capture\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adityajaiswal/Documents/MY GITHUB PROJECT /Chat_app_video_audio/client/src/components/common/CapturePhoto.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(CapturePhoto, \"7acUdyJNLS1LzU4RH/TsCdepORw=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNQO0FBRTFDLFNBQVNJLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFsQjs7SUFDcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUc1QkQsZ0RBQVNBLENBQUMsSUFBSSxDQUFDO0lBRWYsTUFBTU8sZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csS0FBSyxHQUFHTCxTQUFTTSxPQUFPLENBQUNDLFVBQVU7UUFDMUNMLE9BQU9NLE1BQU0sR0FBR1IsU0FBU00sT0FBTyxDQUFDRyxXQUFXO1FBQzVDUCxPQUFPUSxVQUFVLENBQUMsTUFBTUMsU0FBUyxDQUFDWCxTQUFTTSxPQUFPLEVBQUUsR0FBRyxHQUFFLEtBQUk7UUFFN0QsTUFBTU0sWUFBWVYsT0FBT1csU0FBUyxDQUFDO1FBQ25DZCxTQUFTYTtRQUVUZCxLQUFLLEtBQUs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTs7WUFBMkc7MEJBRXhILDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTLElBQU1sQixLQUFLLEtBQUs7a0NBRXpCLDRFQUFDRixvREFBT0E7NEJBQUNtQixXQUFVOzs7Ozs7Ozs7OztrQ0FFckIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBTUMsSUFBRzs0QkFBUWIsT0FBTTs0QkFBTWMsUUFBUTs0QkFBQ0MsS0FBS3BCOzs7Ozs7Ozs7OztrQ0FFOUMsOERBQUNxQjt3QkFDQ04sV0FBVTt3QkFDVkMsU0FBU2Y7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBeENTSjtLQUFBQTtBQTBDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeD9kMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZnVuY3Rpb24gQ2FwdHVyZVBob3RvKHsgaGlkZSwgc2V0SW1hZ2UgfSkge1xuICBjb25zdCB2aWRlb3JlZiA9IHVzZVJlZihudWxsKTtcblxuXG4gIHVzZUVmZmVjdCgoKT0+e30pXG5cbiAgY29uc3QgY2FwdHVyZVBob3RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdmlkZW9yZWYuY3VycmVudC52aWRlb1dpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlb3JlZi5jdXJyZW50LnZpZGVvSGVpZ2h0O1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHZpZGVvcmVmLmN1cnJlbnQsIDAsIDAsMzAwLDE1MCk7XG5cbiAgICBjb25zdCBwaG90b0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgIHNldEltYWdlKHBob3RvRGF0YSk7XG5cbiAgICBoaWRlKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC00LzYgdy0yLzYgdG9wLTEvNCBsZWZ0LTEvMyBiZy1ncmF5LTkwMCBnYXAtMyByb3VuZGVkLWxnIHB0LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIENhcHR1cmVQaG90b1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbCBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcHItMiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZShmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW9DbG9zZSBjbGFzc05hbWU9XCJoLTEwIHctMTAgY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiB3aWR0aD1cIjQwMFwiIGF1dG9QbGF5IHJlZj17dmlkZW9yZWZ9PjwvdmlkZW8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBib3JkZXItOCBib3JkZXItdGVhbC1saWdodCBwLTIgIG1iLTEwIFwiXG4gICAgICAgICAgb25DbGljaz17Y2FwdHVyZVBob3RvfVxuICAgICAgICA+XG4gICAgICAgICAgQ2FwdHVyZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0dXJlUGhvdG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJb0Nsb3NlIiwiQ2FwdHVyZVBob3RvIiwiaGlkZSIsInNldEltYWdlIiwidmlkZW9yZWYiLCJjYXB0dXJlUGhvdG8iLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImN1cnJlbnQiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwicGhvdG9EYXRhIiwidG9EYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInZpZGVvIiwiaWQiLCJhdXRvUGxheSIsInJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});