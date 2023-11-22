"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MyPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        activity: \"\",\n        date: \"\",\n        location: \"\",\n        people: \"\"\n    });\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setIsLoading(true);\n        const combinedPrompt = generateCombinedPrompt();\n        const response = await fetch(\"/api/get-answer\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: combinedPrompt\n            })\n        });\n        const data = await response.json();\n        setAnswer(data.text.trim());\n        setIsLoading(false);\n    }\n    function handleChange(e) {\n        const { name , value  } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    }\n    function generateCombinedPrompt() {\n        const { activity , date , location , people  } = formData;\n        // Modify this template as needed\n        return \"Please suggest 5 brief activity ideas for \".concat(people, \" people, involving some or all of these ideas: \").concat(activity, \" on \").concat(date, \" at \").concat(location, \".\");\n    }\n    function generateGoogleSearchLink(query) {\n        const encodedQuery = encodeURIComponent(query);\n        return \"https://www.google.com/search?q=\".concat(encodedQuery);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-background\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to IMBORED.TECH\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Get activity ideas using the power of AI!\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Fill out the form below to get started: \"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"our-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"prompt-label\",\n                        children: \"What do you want to do?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"prompt-field\",\n                        type: \"text\",\n                        name: \"activity\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"time-label\",\n                        children: \"When do you want to do it?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"time-field\",\n                        type: \"date\",\n                        name: \"date\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"location-label\",\n                        children: \"Where do you want to do it?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"location-field\",\n                        type: \"text\",\n                        name: \"location\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"people-label\",\n                        children: \"How many people?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"people-field\",\n                        type: \"number\",\n                        name: \"people\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prompt-button\",\n                        children: \"Go!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-area\",\n                children: answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"answer-area\",\n                    children: answer.split(\"\\n\").map((response, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: response\n                                }, void 0, false, {\n                                    fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: generateGoogleSearchLink(response),\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: \"Google Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gherg/Desktop/Fun/IM_BORED/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(MyPage, \"ryaQnI7ULQYx21QpoApFhzrujIU=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO2dCQUFJQyxXQUFVOzBCQUVaL0Isd0JBQ0QsOERBQUM4QjtvQkFBSUMsV0FBVTs4QkFFWi9CLE9BQU8wQyxLQUFLLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNsQyxVQUFVbUMsc0JBQ2pDLDhEQUFDZDs7OENBQ0MsOERBQUNlOzhDQUFHcEM7Ozs7Ozs4Q0FDSiw4REFBQ3FDO29DQUFFQyxNQUFNckIseUJBQXlCakI7b0NBQVdlLFFBQU87b0NBQVN3QixLQUFJOzhDQUFzQjs7Ozs7OzsyQkFGL0VKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdEIsQ0FBQztHQTFIdUJuRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhY3Rpdml0eTogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICAgIHBlb3BsZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY29tYmluZWRQcm9tcHQgPSBnZW5lcmF0ZUNvbWJpbmVkUHJvbXB0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dldC1hbnN3ZXJcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBjb21iaW5lZFByb21wdCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRBbnN3ZXIoZGF0YS50ZXh0LnRyaW0oKSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ29tYmluZWRQcm9tcHQoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2aXR5LCBkYXRlLCBsb2NhdGlvbiwgcGVvcGxlIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgICAvLyBNb2RpZnkgdGhpcyB0ZW1wbGF0ZSBhcyBuZWVkZWRcclxuICAgIHJldHVybiBgUGxlYXNlIHN1Z2dlc3QgNSBicmllZiBhY3Rpdml0eSBpZGVhcyBmb3IgJHtwZW9wbGV9IHBlb3BsZSwgaW52b2x2aW5nIHNvbWUgb3IgYWxsIG9mIHRoZXNlIGlkZWFzOiAke2FjdGl2aXR5fSBvbiAke2RhdGV9IGF0ICR7bG9jYXRpb259LmA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZW5lcmF0ZUdvb2dsZVNlYXJjaExpbmsocXVlcnkpIHtcclxuICAgIGNvbnN0IGVuY29kZWRRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChxdWVyeSk7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JHtlbmNvZGVkUXVlcnl9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LWJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gSU1CT1JFRC5URUNIPC9oMT5cclxuICAgICAgPGgyPkdldCBhY3Rpdml0eSBpZGVhcyB1c2luZyB0aGUgcG93ZXIgb2YgQUkhPC9oMj5cclxuICAgICAgPGgyPkZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IHRvIGdldCBzdGFydGVkOiA8L2gyPlxyXG4gICAgICBcclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwib3VyLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvbXB0LWxhYmVsXCI+V2hhdCBkbyB5b3Ugd2FudCB0byBkbz88L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWZpZWxkXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJhY3Rpdml0eVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGltZS1sYWJlbFwiPldoZW4gZG8geW91IHdhbnQgdG8gZG8gaXQ/PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWUtZmllbGRcIlxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvY2F0aW9uLWxhYmVsXCI+V2hlcmUgZG8geW91IHdhbnQgdG8gZG8gaXQ/PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvY2F0aW9uLWZpZWxkXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicGVvcGxlLWxhYmVsXCI+SG93IG1hbnkgcGVvcGxlPzwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwZW9wbGUtZmllbGRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBuYW1lPVwicGVvcGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvblwiPkdvITwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYXJlYVwiPlxyXG4gICAgICAgIHsvKiBEaXNwbGF5IHJlc3BvbnNlcyB3aXRoIEdvb2dsZSBzZWFyY2ggbGlua3MgKi99XHJcbiAgICAgICAge2Fuc3dlciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYXJlYVwiPlxyXG4gICAgICAgICAgey8qIERpc3BsYXkgcmVzcG9uc2VzIHdpdGggR29vZ2xlIHNlYXJjaCBsaW5rcyAqL31cclxuICAgICAgICAgIHthbnN3ZXIuc3BsaXQoXCJcXG5cIikubWFwKChyZXNwb25zZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8cD57cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2dlbmVyYXRlR29vZ2xlU2VhcmNoTGluayhyZXNwb25zZSl9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIEdvb2dsZSBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNeVBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYWN0aXZpdHkiLCJkYXRlIiwibG9jYXRpb24iLCJwZW9wbGUiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb21iaW5lZFByb21wdCIsImdlbmVyYXRlQ29tYmluZWRQcm9tcHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbXB0IiwiZGF0YSIsImpzb24iLCJ0ZXh0IiwidHJpbSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiZ2VuZXJhdGVHb29nbGVTZWFyY2hMaW5rIiwicXVlcnkiLCJlbmNvZGVkUXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIiwic3BsaXQiLCJtYXAiLCJpbmRleCIsInAiLCJhIiwiaHJlZiIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});