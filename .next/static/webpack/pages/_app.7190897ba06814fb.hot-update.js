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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  line-height: 1.65;\\n  color: #333;\\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\\n\\tbackground-size: 400% 400%;\\n\\tanimation: gradient 15s ease infinite;\\n\\theight: 100vh;\\n  margin-bottom: 2rem;\\n}\\n\\nlabel, h1, h2, p {\\n  color: white;\\n}\\n\\n.answer-area {\\n  white-space: pre-wrap;\\n  margin-top: 1rem;\\n  font-size: 1.15rem;\\n  color: #ffffff;\\n}\\n\\n.our-form {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  \\n}\\n\\n.prompt-field {\\n  flex: 1 1;\\n  color: #333;\\n  padding: 5px;\\n  font-size: 1rem;\\n  margin-right: 10px;\\n}\\n\\n.prompt-button {\\n  padding: 10px;\\n  font-size: 1rem;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: rgb(46, 98, 255);\\n}\\n\\n.prompt-button:disabled {\\n  background-color: #ccc; /* Change to the desired grey color */\\n  cursor: not-allowed;\\n  /* You can adjust other styles to make it visually distinct */\\n}\\n\\n.prompt-label, .location-label, .people-label, .time-label {\\n  margin-right: 10px; /* Adjust the spacing between label and hint text */\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.hint-text {\\n  font-size: 0.8rem;\\n  opacity: 0.5; /* Adjust the opacity as needed */\\n  color: white;\\n}\\n\\n.label-container {\\n  display: flex;\\n  align-items: center;\\n}\\n@keyframes rotate-forever {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading-spinner {\\n  animation-duration: 0.75s;\\n  animation-iteration-count: infinite;\\n  animation-name: rotate-forever;\\n  animation-timing-function: linear;\\n  height: 30px;\\n  width: 30px;\\n  border: 8px solid #ffffff;\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n  display: inline-block;\\n}\\n\\n@keyframes gradient {\\n\\t0% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n\\t50% {\\n\\t\\tbackground-position: 100% 50%;\\n\\t}\\n\\t100% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n}\\n\\n.container {\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 10px 20px;\\n}\\n\\n.container img {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.footer {\\n  border-top: 1px dotted rgb(255, 255, 255);\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n  text-align: center;\\n  width: auto;\\n  margin-bottom: 2rem;\\n}\\n\\n.footer a {\\n  color: #ffffff;\\n  margin: 0 10px;\\n}\\n\\n.button-container {\\n  display: flex;\\n  gap: 10px; /* Adjust the gap as needed */\\n  margin-top: 1rem;\\n}\\n\\n/* Mobile Styles */\\n@media only screen and (max-width: 600px) {\\n  .prompt-field {\\n    margin-right: 0;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .button-container {\\n    flex-direction: column;\\n    margin-top: 1rem;\\n  }\\n}\\n\\n#text-cycler {\\n  text-align: left;\\n  font-size: 0.6rem;\\n  margin: 0;\\n  /* white-space: nowrap; */\\n}\\n\\n.text-fade-in-out {\\n  animation: fadeInOut 5s infinite;\\n  opacity: 0;\\n}\\n\\n@keyframes fadeInOut {\\n  0%, 100% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,uEAAuE;CACxE,0BAA0B;CAC1B,qCAAqC;CACrC,aAAa;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;AAErB;;AAEA;EACE,SAAO;EACP,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,sBAAsB,EAAE,qCAAqC;EAC7D,mBAAmB;EACnB,6DAA6D;AAC/D;;AAEA;EACE,kBAAkB,EAAE,mDAAmD;EACvE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY,EAAE,iCAAiC;EAC/C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AAkCA;EACE;IAKE,uBAAuB;EACzB;EACA;IAKE,yBAAyB;EAC3B;AACF;AACA;EAGE,yBAAyB;EAGzB,mCAAmC;EAGnC,8BAA8B;EAG9B,iCAAiC;EACjC,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,+BAA+B;EAC/B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS,EAAE,6BAA6B;EACxC,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,gBAAgB;EAClB;AACF;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF\",\"sourcesContent\":[\"body,\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  line-height: 1.65;\\n  color: #333;\\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\\n\\tbackground-size: 400% 400%;\\n\\tanimation: gradient 15s ease infinite;\\n\\theight: 100vh;\\n  margin-bottom: 2rem;\\n}\\n\\nlabel, h1, h2, p {\\n  color: white;\\n}\\n\\n.answer-area {\\n  white-space: pre-wrap;\\n  margin-top: 1rem;\\n  font-size: 1.15rem;\\n  color: #ffffff;\\n}\\n\\n.our-form {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  \\n}\\n\\n.prompt-field {\\n  flex: 1;\\n  color: #333;\\n  padding: 5px;\\n  font-size: 1rem;\\n  margin-right: 10px;\\n}\\n\\n.prompt-button {\\n  padding: 10px;\\n  font-size: 1rem;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: rgb(46, 98, 255);\\n}\\n\\n.prompt-button:disabled {\\n  background-color: #ccc; /* Change to the desired grey color */\\n  cursor: not-allowed;\\n  /* You can adjust other styles to make it visually distinct */\\n}\\n\\n.prompt-label, .location-label, .people-label, .time-label {\\n  margin-right: 10px; /* Adjust the spacing between label and hint text */\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.hint-text {\\n  font-size: 0.8rem;\\n  opacity: 0.5; /* Adjust the opacity as needed */\\n  color: white;\\n}\\n\\n.label-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n@-webkit-keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n@-moz-keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes rotate-forever {\\n  0% {\\n    -webkit-transform: rotate(0deg);\\n    -moz-transform: rotate(0deg);\\n    -ms-transform: rotate(0deg);\\n    -o-transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n    -moz-transform: rotate(360deg);\\n    -ms-transform: rotate(360deg);\\n    -o-transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading-spinner {\\n  -webkit-animation-duration: 0.75s;\\n  -moz-animation-duration: 0.75s;\\n  animation-duration: 0.75s;\\n  -webkit-animation-iteration-count: infinite;\\n  -moz-animation-iteration-count: infinite;\\n  animation-iteration-count: infinite;\\n  -webkit-animation-name: rotate-forever;\\n  -moz-animation-name: rotate-forever;\\n  animation-name: rotate-forever;\\n  -webkit-animation-timing-function: linear;\\n  -moz-animation-timing-function: linear;\\n  animation-timing-function: linear;\\n  height: 30px;\\n  width: 30px;\\n  border: 8px solid #ffffff;\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n  display: inline-block;\\n}\\n\\n@keyframes gradient {\\n\\t0% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n\\t50% {\\n\\t\\tbackground-position: 100% 50%;\\n\\t}\\n\\t100% {\\n\\t\\tbackground-position: 0% 50%;\\n\\t}\\n}\\n\\n.container {\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 10px 20px;\\n}\\n\\n.container img {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.footer {\\n  border-top: 1px dotted rgb(255, 255, 255);\\n  max-width: 700px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n  text-align: center;\\n  width: auto;\\n  margin-bottom: 2rem;\\n}\\n\\n.footer a {\\n  color: #ffffff;\\n  margin: 0 10px;\\n}\\n\\n.button-container {\\n  display: flex;\\n  gap: 10px; /* Adjust the gap as needed */\\n  margin-top: 1rem;\\n}\\n\\n/* Mobile Styles */\\n@media only screen and (max-width: 600px) {\\n  .prompt-field {\\n    margin-right: 0;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .button-container {\\n    flex-direction: column;\\n    margin-top: 1rem;\\n  }\\n}\\n\\n#text-cycler {\\n  text-align: left;\\n  font-size: 0.6rem;\\n  margin: 0;\\n  /* white-space: nowrap; */\\n}\\n\\n.text-fade-in-out {\\n  animation: fadeInOut 5s infinite;\\n  opacity: 0;\\n}\\n\\n@keyframes fadeInOut {\\n  0%, 100% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsdURBQXVELGVBQWUsY0FBYyxHQUFHLFVBQVUsNEJBQTRCLHNCQUFzQixnQkFBZ0IsNEVBQTRFLCtCQUErQiwwQ0FBMEMsa0JBQWtCLHdCQUF3QixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxrQkFBa0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixPQUFPLG1CQUFtQixjQUFjLGdCQUFnQixpQkFBaUIsb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0Isb0JBQW9CLGdCQUFnQixpQkFBaUIsdUJBQXVCLHVDQUF1QyxHQUFHLDZCQUE2Qiw0QkFBNEIsOERBQThELHFFQUFxRSxnRUFBZ0Usd0JBQXdCLHNFQUFzRSxxQkFBcUIsR0FBRyxnQkFBZ0Isc0JBQXNCLGtCQUFrQixtREFBbUQsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLDZCQUE2QixRQUFRLDhCQUE4QixLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxvQkFBb0IsOEJBQThCLHdDQUF3QyxtQ0FBbUMsc0NBQXNDLGlCQUFpQixnQkFBZ0IsOEJBQThCLG9DQUFvQyx1QkFBdUIsMEJBQTBCLEdBQUcseUJBQXlCLFFBQVEsa0NBQWtDLEtBQUssU0FBUyxvQ0FBb0MsS0FBSyxVQUFVLGtDQUFrQyxL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QyxLQUFLLEdBQUcsb0JBQW9CLHNDQUFzQyxtQ0FBbUMsOEJBQThCLGdEQUFnRCw2Q0FBNkMsd0NBQXdDLDJDQUEyQyx3Q0FBd0MsbUNBQW1DLDhDQUE4QywyQ0FBMkMsc0NBQXNDLGlCQUFpQixnQkFBZ0IsOEJBQThCLG9DQUFvQyx1QkFBdUIsMEJBQTBCLEdBQUcseUJBQXlCLFFBQVEsa0NBQWtDLEtBQUssU0FBUyxvQ0FBb0MsS0FBSyxVQUFVLGtDQUFrQyxLQUFLLEdBQUcsZ0JBQWdCLHFCQUFxQixtQkFBbUIsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQixpQkFBaUIsR0FBRyxhQUFhLDhDQUE4QyxxQkFBcUIsbUJBQW1CLG9CQUFvQix1QkFBdUIsZ0JBQWdCLHdCQUF3QixHQUFHLGVBQWUsbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsZUFBZSxtREFBbUQsR0FBRyxvRUFBb0UsbUJBQW1CLHNCQUFzQiwwQkFBMEIsS0FBSywyQkFBMkIsNkJBQTZCLHVCQUF1QixLQUFLLEdBQUcsa0JBQWtCLHFCQUFxQixzQkFBc0IsY0FBYyw0QkFBNEIsS0FBSyx1QkFBdUIscUNBQXFDLGVBQWUsR0FBRywwQkFBMEIsY0FBYyxpQkFBaUIsS0FBSyxTQUFTLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQy94UjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2ZhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcblxcdGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmxhYmVsLCBoMSwgaDIsIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYW5zd2VyLWFyZWEge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ub3VyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgXFxufVxcblxcbi5wcm9tcHQtZmllbGQge1xcbiAgZmxleDogMSAxO1xcbiAgY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9tcHQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgOTgsIDI1NSk7XFxufVxcblxcbi5wcm9tcHQtYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIENoYW5nZSB0byB0aGUgZGVzaXJlZCBncmV5IGNvbG9yICovXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgLyogWW91IGNhbiBhZGp1c3Qgb3RoZXIgc3R5bGVzIHRvIG1ha2UgaXQgdmlzdWFsbHkgZGlzdGluY3QgKi9cXG59XFxuXFxuLnByb21wdC1sYWJlbCwgLmxvY2F0aW9uLWxhYmVsLCAucGVvcGxlLWxhYmVsLCAudGltZS1sYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIEFkanVzdCB0aGUgc3BhY2luZyBiZXR3ZWVuIGxhYmVsIGFuZCBoaW50IHRleHQgKi9cXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaGludC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgb3BhY2l0eTogMC41OyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYWJlbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtZm9yZXZlcjtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4OyAvKiBBZGp1c3QgdGhlIGdhcCBhcyBuZWVkZWQgKi9cXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi8qIE1vYmlsZSBTdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvbXB0LWZpZWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxufVxcblxcbiN0ZXh0LWN5Y2xlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBtYXJnaW46IDA7XFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4udGV4dC1mYWRlLWluLW91dCB7XFxuICBhbmltYXRpb246IGZhZGVJbk91dCA1cyBpbmZpbml0ZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUVBQXVFO0NBQ3hFLDBCQUEwQjtDQUMxQixxQ0FBcUM7Q0FDckMsYUFBYTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0IsRUFBRSxxQ0FBcUM7RUFDN0QsbUJBQW1CO0VBQ25CLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLG1EQUFtRDtFQUN2RSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVksRUFBRSxpQ0FBaUM7RUFDL0MsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQWtDQTtFQUNFO0lBS0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFLRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBR0UseUJBQXlCO0VBR3pCLG1DQUFtQztFQUduQyw4QkFBOEI7RUFHOUIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDZCQUE2QjtDQUM5QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0FBQ0Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTLEVBQUUsNkJBQTZCO0VBQ3hDLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcblxcdGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmxhYmVsLCBoMSwgaDIsIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYW5zd2VyLWFyZWEge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ub3VyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgXFxufVxcblxcbi5wcm9tcHQtZmllbGQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJvbXB0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDk4LCAyNTUpO1xcbn1cXG5cXG4ucHJvbXB0LWJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyAvKiBDaGFuZ2UgdG8gdGhlIGRlc2lyZWQgZ3JleSBjb2xvciAqL1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIC8qIFlvdSBjYW4gYWRqdXN0IG90aGVyIHN0eWxlcyB0byBtYWtlIGl0IHZpc3VhbGx5IGRpc3RpbmN0ICovXFxufVxcblxcbi5wcm9tcHQtbGFiZWwsIC5sb2NhdGlvbi1sYWJlbCwgLnBlb3BsZS1sYWJlbCwgLnRpbWUtbGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGp1c3QgdGhlIHNwYWNpbmcgYmV0d2VlbiBsYWJlbCBhbmQgaGludCB0ZXh0ICovXFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmhpbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG9wYWNpdHk6IDAuNTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IGFzIG5lZWRlZCAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkAtbW96LWtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1mb3JldmVyO1xcbiAgLW1vei1hbmltYXRpb24tbmFtZTogcm90YXRlLWZvcmV2ZXI7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLWZvcmV2ZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IDhweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7IC8qIEFkanVzdCB0aGUgZ2FwIGFzIG5lZWRlZCAqL1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcm9tcHQtZmllbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIH1cXG59XFxuXFxuI3RleHQtY3ljbGVyIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXFxufVxcblxcbi50ZXh0LWZhZGUtaW4tb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDVzIGluZmluaXRlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xcbiAgMCUsIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/global.css\n"));

/***/ })

});