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

/***/ "./src/components/common/ContextMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/ContextMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , contextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleOutSideClick = (event)=>{};\n    }, []);\n    const handleClick = (e, callback)=>{\n        e.stopPropagation();\n        setContextMenu(false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-[100] shadow-xl\",\n        ref: contextMenuRef,\n        style: {\n            top: cordinates.y,\n            left: cordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: (e)=>handleClick(e, callback),\n                    className: \"px-5 py-2 cursor-pointer hover:bg-background-default-hover \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 140\n                    }, this)\n                }, name, false, {\n                    fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Chat_app_video_audio\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, this);\n}\n_s(ContextMenu, \"b9EuBvd+7o9sFh+8hxUUM+gDocw=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFFakQsU0FBU0csWUFBWSxLQUErQyxFQUFFO1FBQWpELEVBQUNDLFFBQU8sRUFBQ0MsV0FBVSxFQUFDQyxZQUFXLEVBQUNDLGVBQWMsRUFBQyxHQUEvQzs7SUFDbkIsTUFBTUMsaUJBQWVOLDZDQUFNQSxDQUFDLElBQUk7SUFDaENELGdEQUFTQSxDQUFDLElBQUk7UUFDWixNQUFNUSxxQkFBbUIsQ0FBQ0MsUUFBUSxDQUVsQztJQUNGLEdBQUUsRUFBRTtJQUNKLE1BQU1DLGNBQVksQ0FBQ0MsR0FBRUMsV0FBVztRQUM5QkQsRUFBRUUsZUFBZTtRQUNqQlAsZUFBZSxLQUFLO1FBQ3BCTTtJQUNGO0lBQ0EscUJBQ0EsOERBQUNFO1FBQUlDLFdBQVk7UUFDZkMsS0FBS1Q7UUFDTFUsT0FBTztZQUNMQyxLQUFJZCxXQUFXZSxDQUFDO1lBQ2hCQyxNQUFLaEIsV0FBV2lCLENBQUM7UUFDbkI7a0JBRUUsNEVBQUNDO3NCQUVHbkIsUUFBUW9CLEdBQUcsQ0FBQyx1QkFDVjtvQkFEVyxFQUFDQyxLQUFJLEVBQUNaLFNBQVEsRUFBQzt1QkFDMUIsOERBQUNhO29CQUFjQyxTQUFTLENBQUNmLElBQUlELFlBQVlDLEdBQUVDO29CQUFXRyxXQUFVOzhCQUErRCw0RUFBQ1k7d0JBQUtaLFdBQVU7a0NBQWNTOzs7Ozs7bUJBQXBKQTs7Ozs7WUFBb0s7Ozs7Ozs7Ozs7O0FBTXpMO0dBN0JTdEI7S0FBQUE7QUErQlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRNZW51LmpzeD82MzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDb250ZXh0TWVudSh7b3B0aW9ucyxjb3JkaW5hdGVzLGNvbnRleHRNZW51LHNldENvbnRleHRNZW51fSkge1xuICBjb25zdCBjb250ZXh0TWVudVJlZj11c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGhhbmRsZU91dFNpZGVDbGljaz0oZXZlbnQpPT57XG4gICAgICBcbiAgICB9XG4gIH0sW10pO1xuICBjb25zdCBoYW5kbGVDbGljaz0oZSxjYWxsYmFjayk9PntcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldENvbnRleHRNZW51KGZhbHNlKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgYmctZHJvcGRvd24tYmFja2dyb3VuZCBmaXhlZCBweS0yIHotWzEwMF0gc2hhZG93LXhsYH1cbiAgICByZWY9e2NvbnRleHRNZW51UmVmfSBcbiAgICBzdHlsZT17e1xuICAgICAgdG9wOmNvcmRpbmF0ZXMueSxcbiAgICAgIGxlZnQ6Y29yZGluYXRlcy54XG4gICAgfX1cbiAgICA+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zLm1hcCgoe25hbWUsY2FsbGJhY2t9KT0+KFxuICAgICAgICAgICAgPGxpIGtleT17bmFtZX0gb25DbGljaz17KGUpPT5oYW5kbGVDbGljayhlLGNhbGxiYWNrKX0gY2xhc3NOYW1lPVwicHgtNSBweS0yIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJhY2tncm91bmQtZGVmYXVsdC1ob3ZlciBcIiA+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntuYW1lfTwvc3Bhbj48L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJjb250ZXh0TWVudVJlZiIsImhhbmRsZU91dFNpZGVDbGljayIsImV2ZW50IiwiaGFuZGxlQ2xpY2siLCJlIiwiY2FsbGJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSIsInRvcCIsInkiLCJsZWZ0IiwieCIsInVsIiwibWFwIiwibmFtZSIsImxpIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});