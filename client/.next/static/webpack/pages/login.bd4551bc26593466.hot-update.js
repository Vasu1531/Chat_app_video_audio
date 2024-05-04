"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction login() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoURL: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, provider);\n        try {\n            if (email) {\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.CHECK_USER_ROUTE, {\n                    email\n                });\n                console.log({\n                    data\n                });\n                if (!data.status) {\n                    router;\n                }\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_8__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"Login with Google\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(login, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDQztBQUM1QjtBQUMwQztBQUNyQztBQUNTO0FBQ2Q7QUFFYTtBQUV2QyxTQUFTUyxRQUFROztJQUNmLE1BQU1DLFNBQVFKLHNEQUFTQTtJQUN2QixNQUFNSyxjQUFjLFVBQVM7UUFDM0IsTUFBTUMsV0FBVSxJQUFJVCw2REFBa0JBO1FBQ3RDLE1BQU0sRUFBQ1UsTUFBSyxFQUFDQyxhQUFZQyxLQUFJLEVBQUNDLE1BQUssRUFBQ0MsVUFBU0MsYUFBWSxFQUFDLEdBQUUsR0FBRSxNQUFNZCw4REFBZUEsQ0FBQ0gsK0RBQVlBLEVBQUNXO1FBQ2pHLElBQUk7WUFDRixJQUFHSSxPQUFNO2dCQUNQLE1BQU0sRUFBQ0csS0FBSSxFQUFDLEdBQUUsTUFBTWpCLGtEQUFVLENBQUNGLDhEQUFnQkEsRUFBQztvQkFBQ2dCO2dCQUFLO2dCQUN0REssUUFBUUMsR0FBRyxDQUFDO29CQUFDSDtnQkFBSTtnQkFDakIsSUFBRyxDQUFDQSxLQUFLSSxNQUFNLEVBQUM7b0JBQ2RiO2dCQUNGLENBQUM7WUFDSCxDQUFDO1FBQ0gsRUFBRSxPQUFPYyxPQUFPO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUVGO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQixtREFBS0E7d0JBQUNzQixLQUFJO3dCQUFnQkMsS0FBSTt3QkFBV0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUM5RCw4REFBQ0M7d0JBQUtMLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNNO2dCQUFPTixXQUFVO2dCQUE2Rk8sU0FBU3RCOztrQ0FDdEgsOERBQUNILG9EQUFRQTt3QkFBQ2tCLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0dBOUJTakI7O1FBQ09ILGtEQUFTQTs7O0FBK0J6QiwrREFBZUcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4uanN4P2M5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7RmNHb29nbGV9IGZyb20gJ3JlYWN0LWljb25zL2ZjJ1xuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3Qgcm91dGVyID11c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYygpPT57XG4gICAgY29uc3QgcHJvdmlkZXIgPW5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7dXNlcjp7ZGlzcGxheU5hbWU6bmFtZSxlbWFpbCxwaG90b1VSTDpwcm9maWxlSW1hZ2V9LH0gPWF3YWl0IHNpZ25JbldpdGhQb3B1cChmaXJlYmFzZUF1dGgscHJvdmlkZXIpO1xuICAgIHRyeSB7XG4gICAgICBpZihlbWFpbCl7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9YXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLHtlbWFpbH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgICAgICBpZighZGF0YS5zdGF0dXMpe1xuICAgICAgICAgIHJvdXRlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvd2hhdHNhcHAuZ2lmXCIgYWx0PVwid2hhdHNhcHBcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0vPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsXCI+V2hhdHNhcHA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC03IGJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBwLTUgcm91bmRlZC1sZ1wiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC00eGxcIi8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPkxvZ2luIHdpdGggR29vZ2xlPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJDSEVDS19VU0VSX1JPVVRFIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJJbWFnZSIsInVzZVJvdXRlciIsIlJlYWN0IiwiRmNHb29nbGUiLCJsb2dpbiIsInJvdXRlciIsImhhbmRsZUxvZ2luIiwicHJvdmlkZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZW1haWwiLCJwaG90b1VSTCIsInByb2ZpbGVJbWFnZSIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});