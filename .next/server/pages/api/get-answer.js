"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-answer";
exports.ids = ["pages/api/get-answer"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/get-answer.js":
/*!*********************************!*\
  !*** ./pages/api/get-answer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { Configuration , OpenAIApi  } = __webpack_require__(/*! openai */ \"openai\");\nconst configuration = new Configuration({\n    apiKey: process.env.OPENAI\n});\nconst openai = new OpenAIApi(configuration);\nasync function handler(req, res) {\n    if (typeof req.body.prompt === \"string\") {\n        const response = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: req.body.prompt,\n            temperature: 0,\n            max_tokens: 1000\n        });\n        res.status(200).json({\n            text: response.data.choices[0].text\n        });\n    } else {\n        res.status(200).json({\n            text: \"Invalid prompt provided.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LWFuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxjQUFhLEVBQUVDLFVBQVMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUNyRCxNQUFNQyxnQkFBZ0IsSUFBSUgsY0FBYztJQUN0Q0ksUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0FBQzVCO0FBQ0EsTUFBTUMsU0FBUyxJQUFJUCxVQUFVRTtBQUVkLGVBQWVNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUksT0FBT0QsSUFBSUUsSUFBSSxDQUFDQyxNQUFNLEtBQUssVUFBVTtRQUN2QyxNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLGdCQUFnQixDQUFDO1lBQzdDQyxPQUFPO1lBQ1BILFFBQVFILElBQUlFLElBQUksQ0FBQ0MsTUFBTTtZQUN2QkksYUFBYTtZQUNiQyxZQUFZO1FBQ2Q7UUFFQVAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNUCxTQUFTUSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNGLElBQUk7UUFBQztJQUM3RCxPQUFPO1FBQ0xWLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsTUFBTTtRQUEyQjtJQUMxRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9hcGkvZ2V0LWFuc3dlci5qcz9hNDgyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gPSByZXF1aXJlKFwib3BlbmFpXCIpXHJcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlcclxufSlcclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmICh0eXBlb2YgcmVxLmJvZHkucHJvbXB0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcclxuICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxyXG4gICAgICBwcm9tcHQ6IHJlcS5ib2R5LnByb21wdCxcclxuICAgICAgdGVtcGVyYXR1cmU6IDAsXHJcbiAgICAgIG1heF90b2tlbnM6IDEwMDBcclxuICAgIH0pXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiByZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRleHQ6IFwiSW52YWxpZCBwcm9tcHQgcHJvdmlkZWQuXCIgfSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJyZXF1aXJlIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUkiLCJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsInByb21wdCIsInJlc3BvbnNlIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInRleHQiLCJkYXRhIiwiY2hvaWNlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-answer.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-answer.js"));
module.exports = __webpack_exports__;

})();