/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fgherg%2FDesktop%2FFun%2FIM_BORED%2Fpages%2Findex.js&page=%2F!":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fgherg%2FDesktop%2FFun%2FIM_BORED%2Fpages%2Findex.js&page=%2F! ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmdoZXJnJTJGRGVza3RvcCUyRkZ1biUyRklNX0JPUkVEJTJGcGFnZXMlMkZpbmRleC5qcyZwYWdlPSUyRiEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzg3ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fgherg%2FDesktop%2FFun%2FIM_BORED%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MyPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        activity: \"\",\n        date: \"\",\n        location: \"\",\n        people: \"\"\n    });\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setIsLoading(true);\n        const combinedPrompt = generateCombinedPrompt();\n        const response = await fetch(\"/api/get-answer\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: combinedPrompt\n            })\n        });\n        const data = await response.json();\n        setAnswer(data.text.trim());\n        setIsLoading(false);\n    }\n    function handleChange(e) {\n        const { name , value  } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    }\n    function generateCombinedPrompt() {\n        const { activity , date , location , people  } = formData;\n        // Modify this template as needed\n        return \"Please suggest 5 brief activity ideas for \".concat(people, \" people, involving some or all of these ideas: \").concat(activity, \" on \").concat(date, \" at \").concat(location, \".\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-background\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to IMBORED.TECH\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Get activity ideas using the power of AI!\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Fill out the form below to get started: \"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"our-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"prompt-label\",\n                        children: \"What do you want to do?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"prompt-field\",\n                        type: \"text\",\n                        name: \"activity\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"time-label\",\n                        children: \"When do you want to do it?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"time-field\",\n                        type: \"date\",\n                        name: \"date\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"location-label\",\n                        children: \"Where do you want to do it?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"location-field\",\n                        type: \"text\",\n                        name: \"location\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"people-label\",\n                        children: \"How many people?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"people-field\",\n                        type: \"number\",\n                        name: \"people\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prompt-button\",\n                        children: \"Go!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-area\",\n                children: answer\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(MyPage, \"ryaQnI7ULQYx21QpoApFhzrujIU=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UGFnZSgpIHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGFjdGl2aXR5OiBcIlwiLFxyXG4gICAgZGF0ZTogXCJcIixcclxuICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgcGVvcGxlOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBjb21iaW5lZFByb21wdCA9IGdlbmVyYXRlQ29tYmluZWRQcm9tcHQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2V0LWFuc3dlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQ6IGNvbWJpbmVkUHJvbXB0IH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldEFuc3dlcihkYXRhLnRleHQudHJpbSgpKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb21iaW5lZFByb21wdCgpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZpdHksIGRhdGUsIGxvY2F0aW9uLCBwZW9wbGUgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgIC8vIE1vZGlmeSB0aGlzIHRlbXBsYXRlIGFzIG5lZWRlZFxyXG4gICAgcmV0dXJuIGBQbGVhc2Ugc3VnZ2VzdCA1IGJyaWVmIGFjdGl2aXR5IGlkZWFzIGZvciAke3Blb3BsZX0gcGVvcGxlLCBpbnZvbHZpbmcgc29tZSBvciBhbGwgb2YgdGhlc2UgaWRlYXM6ICR7YWN0aXZpdHl9IG9uICR7ZGF0ZX0gYXQgJHtsb2NhdGlvbn0uYDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LWJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gSU1CT1JFRC5URUNIPC9oMT5cclxuICAgICAgPGgyPkdldCBhY3Rpdml0eSBpZGVhcyB1c2luZyB0aGUgcG93ZXIgb2YgQUkhPC9oMj5cclxuICAgICAgPGgyPkZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IHRvIGdldCBzdGFydGVkOiA8L2gyPlxyXG4gICAgICBcclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwib3VyLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvbXB0LWxhYmVsXCI+V2hhdCBkbyB5b3Ugd2FudCB0byBkbz88L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWZpZWxkXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJhY3Rpdml0eVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGltZS1sYWJlbFwiPldoZW4gZG8geW91IHdhbnQgdG8gZG8gaXQ/PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWUtZmllbGRcIlxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvY2F0aW9uLWxhYmVsXCI+V2hlcmUgZG8geW91IHdhbnQgdG8gZG8gaXQ/PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvY2F0aW9uLWZpZWxkXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicGVvcGxlLWxhYmVsXCI+SG93IG1hbnkgcGVvcGxlPzwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwZW9wbGUtZmllbGRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBuYW1lPVwicGVvcGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvblwiPkdvITwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYXJlYVwiPnthbnN3ZXJ9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk15UGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJhY3Rpdml0eSIsImRhdGUiLCJsb2NhdGlvbiIsInBlb3BsZSIsImFuc3dlciIsInNldEFuc3dlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbWJpbmVkUHJvbXB0IiwiZ2VuZXJhdGVDb21iaW5lZFByb21wdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJkYXRhIiwianNvbiIsInRleHQiLCJ0cmltIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fgherg%2FDesktop%2FFun%2FIM_BORED%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);