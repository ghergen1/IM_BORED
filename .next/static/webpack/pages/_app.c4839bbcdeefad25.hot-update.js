"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/global.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/global.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  line-height: 1.65;\\n  color: #333;\\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\\n\\tbackground-size: 400% 400%;\\n\\tanimation: gradient 15s ease infinite;\\n\\theight: 100vh;\\n  margin-bottom: 2rem;\\n}\\n\\nlabel, h1, h2, p {\\n  color: white;\\n}\\n\\ninput {\\n  width: 100%;\\n  padding: 10px;\\n  margin-bottom: 16px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  box-sizing: border-box; /* Ensure padding and border are included in the total width/height */\\n}\\n\\ninput:focus {\\n  outline: none;\\n  border-color: #3498db; /* Change color when focused */\\n}\\n\\n.answer-area {\\n  white-space: pre-wrap;\\n  margin-top: 1rem;\\n  font-size: 1.15rem;\\n  color: #ffffff;\\n}\\n\\n.our-form {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  \\n}\\n\\n.prompt-field {\\n  flex: 1 1;\\n  color: #333;\\n  padding: 5px;\\n  font-size: 1rem;\\n  margin-right: 10px;\\n}\\n\\n.prompt-button {\\n  padding: 10px;\\n  font-size: 1rem;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: rgb(46, 98, 255);\\n}\\n\\n.prompt-button:disabled {\\n  background-color: #ccc; /* Change to the desired grey color */\\n  cursor: not-allowed;\\n  /* You can adjust other styles to make it visually distinct */\\n}\\n\\n.prompt-label, .location-label, .people-label, .time-label {\\n  margin-right: 10px; /* Adjust the spacing between label and hint text */\\n}\\n\\n.hint-text {\\n  font-size: 0.8rem;\\n  opacity: 0.5; /* Adjust the opacity as needed */\\n  color: white;\\n}\\n\\n.label-container {\\n  display: flex;\\n  align-items: center;\\n}\\n@keyframes rotate-forever {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading-spinner {\\n  animation-duration: 0.75s;\\n  animation-iteration-count: infinite;\\n  animation-name: rotate-forever;\\n  animation-timing-function: linear;\\n  height: 30px;\\n  width: 30px;\\n  border: 8px solid #ffffff;\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n  display: inline-block;\\n}\\n\\n@keyframes gradient {\\n\\t0% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n\\t50% {\\n\\t\\tbackground-position: 100% 50%;\\n\\t}\\n\\t100% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n}\\n\\n.container {\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 10px 20px;\\n}\\n\\n.container img {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.footer {\\n  border-top: 1px dotted rgb(255, 255, 255);\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n  text-align: center;\\n  width: auto;\\n  margin-bottom: 2rem;\\n}\\n\\n.footer a {\\n  color: #ffffff;\\n  margin: 0 10px;\\n}\\n\\n.button-container {\\n  display: flex;\\n  gap: 10px; /* Adjust the gap as needed */\\n  margin-top: 1rem;\\n}\\n\\n/* Mobile Styles */\\n@media only screen and (max-width: 600px) {\\n  .prompt-field {\\n    margin-right: 0;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .button-container {\\n    flex-direction: column;\\n    margin-top: 1rem;\\n  }\\n}\\n\\n#text-cycler {\\n  text-align: left;\\n  font-size: 0.6rem;\\n  margin: 0;\\n  /* white-space: nowrap; */\\n}\\n\\n.text-fade-in-out {\\n  animation: fadeInOut 5s infinite;\\n  opacity: 0;\\n}\\n\\n@keyframes fadeInOut {\\n  0%, 100% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,uEAAuE;CACxE,0BAA0B;CAC1B,qCAAqC;CACrC,aAAa;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB,EAAE,qEAAqE;AAC/F;;AAEA;EACE,aAAa;EACb,qBAAqB,EAAE,8BAA8B;AACvD;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;AAErB;;AAEA;EACE,SAAO;EACP,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,sBAAsB,EAAE,qCAAqC;EAC7D,mBAAmB;EACnB,6DAA6D;AAC/D;;AAEA;EACE,kBAAkB,EAAE,mDAAmD;AACzE;;AAEA;EACE,iBAAiB;EACjB,YAAY,EAAE,iCAAiC;EAC/C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AAkCA;EACE;IAKE,uBAAuB;EACzB;EACA;IAKE,yBAAyB;EAC3B;AACF;AACA;EAGE,yBAAyB;EAGzB,mCAAmC;EAGnC,8BAA8B;EAG9B,iCAAiC;EACjC,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,+BAA+B;EAC/B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS,EAAE,6BAA6B;EACxC,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,gBAAgB;EAClB;AACF;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF\",\"sourcesContent\":[\"body,\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  line-height: 1.65;\\n  color: #333;\\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\\n\\tbackground-size: 400% 400%;\\n\\tanimation: gradient 15s ease infinite;\\n\\theight: 100vh;\\n  margin-bottom: 2rem;\\n}\\n\\nlabel, h1, h2, p {\\n  color: white;\\n}\\n\\ninput {\\n  width: 100%;\\n  padding: 10px;\\n  margin-bottom: 16px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  box-sizing: border-box; /* Ensure padding and border are included in the total width/height */\\n}\\n\\ninput:focus {\\n  outline: none;\\n  border-color: #3498db; /* Change color when focused */\\n}\\n\\n.answer-area {\\n  white-space: pre-wrap;\\n  margin-top: 1rem;\\n  font-size: 1.15rem;\\n  color: #ffffff;\\n}\\n\\n.our-form {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  \\n}\\n\\n.prompt-field {\\n  flex: 1;\\n  color: #333;\\n  padding: 5px;\\n  font-size: 1rem;\\n  margin-right: 10px;\\n}\\n\\n.prompt-button {\\n  padding: 10px;\\n  font-size: 1rem;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: rgb(46, 98, 255);\\n}\\n\\n.prompt-button:disabled {\\n  background-color: #ccc; /* Change to the desired grey color */\\n  cursor: not-allowed;\\n  /* You can adjust other styles to make it visually distinct */\\n}\\n\\n.prompt-label, .location-label, .people-label, .time-label {\\n  margin-right: 10px; /* Adjust the spacing between label and hint text */\\n}\\n\\n.hint-text {\\n  font-size: 0.8rem;\\n  opacity: 0.5; /* Adjust the opacity as needed */\\n  color: white;\\n}\\n\\n.label-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n@-webkit-keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n@-moz-keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading-spinner {\\n  -webkit-animation-duration: 0.75s;\\n  -moz-animation-duration: 0.75s;\\n  animation-duration: 0.75s;\\n  -webkit-animation-iteration-count: infinite;\\n  -moz-animation-iteration-count: infinite;\\n  animation-iteration-count: infinite;\\n  -webkit-animation-name: rotate-forever;\\n  -moz-animation-name: rotate-forever;\\n  animation-name: rotate-forever;\\n  -webkit-animation-timing-function: linear;\\n  -moz-animation-timing-function: linear;\\n  animation-timing-function: linear;\\n  height: 30px;\\n  width: 30px;\\n  border: 8px solid #ffffff;\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n  display: inline-block;\\n}\\n\\n@keyframes gradient {\\n\\t0% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n\\t50% {\\n\\t\\tbackground-position: 100% 50%;\\n\\t}\\n\\t100% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n}\\n\\n.container {\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 10px 20px;\\n}\\n\\n.container img {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.footer {\\n  border-top: 1px dotted rgb(255, 255, 255);\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n  text-align: center;\\n  width: auto;\\n  margin-bottom: 2rem;\\n}\\n\\n.footer a {\\n  color: #ffffff;\\n  margin: 0 10px;\\n}\\n\\n.button-container {\\n  display: flex;\\n  gap: 10px; /* Adjust the gap as needed */\\n  margin-top: 1rem;\\n}\\n\\n/* Mobile Styles */\\n@media only screen and (max-width: 600px) {\\n  .prompt-field {\\n    margin-right: 0;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .button-container {\\n    flex-direction: column;\\n    margin-top: 1rem;\\n  }\\n}\\n\\n#text-cycler {\\n  text-align: left;\\n  font-size: 0.6rem;\\n  margin: 0;\\n  /* white-space: nowrap; */\\n}\\n\\n.text-fade-in-out {\\n  animation: fadeInOut 5s infinite;\\n  opacity: 0;\\n}\\n\\n@keyframes fadeInOut {\\n  0%, 100% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsdURBQXVELGVBQWUsY0FBYyxHQUFHLFVBQVUsNEJBQTRCLHNCQUFzQixnQkFBZ0IsNEVBQTRFLCtCQUErQiwwQ0FBMEMsa0JBQWtCLHdCQUF3QixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxXQUFXLGdCQUFnQixrQkFBa0Isd0JBQXdCLDJCQUEyQix1QkFBdUIsNEJBQTRCLHlFQUF5RSxpQkFBaUIsa0JBQWtCLDJCQUEyQixrQ0FBa0Msa0JBQWtCLDBCQUEwQixxQkFBcUIsdUJBQXVCLG1CQUFtQixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsT0FBTyxtQkFBbUIsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1Q0FBdUMsR0FBRyw2QkFBNkIsNEJBQTRCLDhEQUE4RCxxRUFBcUUsZ0VBQWdFLHdCQUF3Qix1REFBdUQsZ0JBQWdCLHNCQUFzQixrQkFBa0IsbURBQW1ELEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsR0FBRyw2QkFBNkIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsb0JBQW9CLDhCQUE4Qix3Q0FBd0MsbUNBQW1DLHNDQUFzQyxpQkFBaUIsZ0JBQWdCLDhCQUE4QixvQ0FBb0MsdUJB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RyxrQ0FBa0MsUUFBUSxzQ0FBc0MsbUNBQW1DLGtDQUFrQyxpQ0FBaUMsOEJBQThCLEtBQUssVUFBVSx3Q0FBd0MscUNBQXFDLG9DQUFvQyxtQ0FBbUMsZ0NBQWdDLEtBQUssR0FBRyw2QkFBNkIsUUFBUSxzQ0FBc0MsbUNBQW1DLGtDQUFrQyxpQ0FBaUMsOEJBQThCLEtBQUssVUFBVSx3Q0FBd0MscUNBQXFDLG9DQUFvQyxtQ0FBbUMsZ0NBQWdDLEtBQUssR0FBRyxvQkFBb0Isc0NBQXNDLG1DQUFtQyw4QkFBOEIsZ0RBQWdELDZDQUE2Qyx3Q0FBd0MsMkNBQTJDLHdDQUF3QyxtQ0FBbUMsOENBQThDLDJDQUEyQyxzQ0FBc0MsaUJBQWlCLGdCQUFnQiw4QkFBOEIsb0NBQW9DLHVCQUF1QiwwQkFBMEIsR0FBRyx5QkFBeUIsUUFBUSxrQ0FBa0MsS0FBSyxTQUFTLG9DQUFvQyxLQUFLLFVBQVUsa0NBQWtDLEtBQUssR0FBRyxnQkFBZ0IscUJBQXFCLG1CQUFtQix1QkFBdUIsR0FBRyxvQkFBb0Isb0JBQW9CLGlCQUFpQixHQUFHLGFBQWEsOENBQThDLHFCQUFxQixtQkFBbUIsb0JBQW9CLHVCQUF1QixnQkFBZ0Isd0JBQXdCLEdBQUcsZUFBZSxtQkFBbUIsbUJBQW1CLEdBQUcsdUJBQXVCLGtCQUFrQixlQUFlLG1EQUFtRCxHQUFHLG9FQUFvRSxtQkFBbUIsc0JBQXNCLDBCQUEwQixLQUFLLDJCQUEyQiw2QkFBNkIsdUJBQXVCLEtBQUssR0FBRyxrQkFBa0IscUJBQXFCLHNCQUFzQixjQUFjLDRCQUE0QixLQUFLLHVCQUF1QixxQ0FBcUMsZUFBZSxHQUFHLDBCQUEwQixjQUFjLGlCQUFpQixLQUFLLFNBQVMsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUI7QUFDLzdTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/ZmFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXG5odG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42NTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuXFx0YW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxubGFiZWwsIGgxLCBoMiwgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRW5zdXJlIHBhZGRpbmcgYW5kIGJvcmRlciBhcmUgaW5jbHVkZWQgaW4gdGhlIHRvdGFsIHdpZHRoL2hlaWdodCAqL1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiOyAvKiBDaGFuZ2UgY29sb3Igd2hlbiBmb2N1c2VkICovXFxufVxcblxcbi5hbnN3ZXItYXJlYSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5vdXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBcXG59XFxuXFxuLnByb21wdC1maWVsZCB7XFxuICBmbGV4OiAxIDE7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByb21wdC1idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA5OCwgMjU1KTtcXG59XFxuXFxuLnByb21wdC1idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ2hhbmdlIHRvIHRoZSBkZXNpcmVkIGdyZXkgY29sb3IgKi9cXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAvKiBZb3UgY2FuIGFkanVzdCBvdGhlciBzdHlsZXMgdG8gbWFrZSBpdCB2aXN1YWxseSBkaXN0aW5jdCAqL1xcbn1cXG5cXG4ucHJvbXB0LWxhYmVsLCAubG9jYXRpb24tbGFiZWwsIC5wZW9wbGUtbGFiZWwsIC50aW1lLWxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWRqdXN0IHRoZSBzcGFjaW5nIGJldHdlZW4gbGFiZWwgYW5kIGhpbnQgdGV4dCAqL1xcbn1cXG5cXG4uaGludC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgb3BhY2l0eTogMC41OyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYWJlbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtZm9yZXZlcjtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4OyAvKiBBZGp1c3QgdGhlIGdhcCBhcyBuZWVkZWQgKi9cXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi8qIE1vYmlsZSBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvbXB0LWZpZWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxufVxcblxcbiN0ZXh0LWN5Y2xlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBtYXJnaW46IDA7XFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4udGV4dC1mYWRlLWluLW91dCB7XFxuICBhbmltYXRpb246IGZhZGVJbk91dCA1cyBpbmZpbml0ZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUVBQXVFO0NBQ3hFLDBCQUEwQjtDQUMxQixxQ0FBcUM7Q0FDckMsYUFBYTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUUscUVBQXFFO0FBQy9GOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQixFQUFFLDhCQUE4QjtBQUN2RDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0IsRUFBRSxxQ0FBcUM7RUFDN0QsbUJBQW1CO0VBQ25CLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLG1EQUFtRDtBQUN6RTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZLEVBQUUsaUNBQWlDO0VBQy9DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFrQ0E7RUFDRTtJQUtFLHVCQUF1QjtFQUN6QjtFQUNBO0lBS0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUdFLHlCQUF5QjtFQUd6QixtQ0FBbUM7RUFHbkMsOEJBQThCO0VBRzlCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtDQUNDO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtBQUNEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUyxFQUFFLDZCQUE2QjtFQUN4QyxnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG5cXHRhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xcblxcdGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5sYWJlbCwgaDEsIGgyLCBwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBFbnN1cmUgcGFkZGluZyBhbmQgYm9yZGVyIGFyZSBpbmNsdWRlZCBpbiB0aGUgdG90YWwgd2lkdGgvaGVpZ2h0ICovXFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSBjb2xvciB3aGVuIGZvY3VzZWQgKi9cXG59XFxuXFxuLmFuc3dlci1hcmVhIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm91ci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIFxcbn1cXG5cXG4ucHJvbXB0LWZpZWxkIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByb21wdC1idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA5OCwgMjU1KTtcXG59XFxuXFxuLnByb21wdC1idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ2hhbmdlIHRvIHRoZSBkZXNpcmVkIGdyZXkgY29sb3IgKi9cXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAvKiBZb3UgY2FuIGFkanVzdCBvdGhlciBzdHlsZXMgdG8gbWFrZSBpdCB2aXN1YWxseSBkaXN0aW5jdCAqL1xcbn1cXG5cXG4ucHJvbXB0LWxhYmVsLCAubG9jYXRpb24tbGFiZWwsIC5wZW9wbGUtbGFiZWwsIC50aW1lLWxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWRqdXN0IHRoZSBzcGFjaW5nIGJldHdlZW4gbGFiZWwgYW5kIGhpbnQgdGV4dCAqL1xcbn1cXG5cXG4uaGludC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgb3BhY2l0eTogMC41OyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYWJlbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlLWZvcmV2ZXI7XFxuICAtbW96LWFuaW1hdGlvbi1uYW1lOiByb3RhdGUtZm9yZXZlcjtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtZm9yZXZlcjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDsgLyogQWRqdXN0IHRoZSBnYXAgYXMgbmVlZGVkICovXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4vKiBNb2JpbGUgU3R5bGVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnByb21wdC1maWVsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4jdGV4dC1jeWNsZXIge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cXG59XFxuXFxuLnRleHQtZmFkZS1pbi1vdXQge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNXMgaW5maW5pdGU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/global.css\n"));

/***/ })

});