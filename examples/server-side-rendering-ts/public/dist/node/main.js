module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/node/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/main-node.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\")); // eslint-disable-next-line import/no-extraneous-dependencies\n\n\nconst component_1 = __importDefault(__webpack_require__(/*! @loadable/component */ \"@loadable/component\"));\n\n__webpack_require__(/*! ./main.css */ \"./src/client/main.css\");\n\nconst A = component_1.default(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./letters/A */ \"./src/client/letters/A.tsx\"))));\nconst B = component_1.default(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./letters/B */ \"./src/client/letters/B.tsx\"))));\nconst C = component_1.default(() => Promise.resolve().then(() => __importStar(__webpack_require__(\n/* webpackPreload: true */\n/*! ./letters/C */ \"./src/client/letters/C.tsx\"))));\nconst D = component_1.default(() => Promise.resolve().then(() => __importStar(__webpack_require__(\n/* webpackPrefetch: true */\n/*! ./letters/D */ \"./src/client/letters/D.tsx\"))));\nconst E = component_1.default(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./letters/E */ \"./src/client/letters/E.tsx\"))), {\n  ssr: false\n}); // const X = loadable(props => import(`./letters/${props.letter}`))\n// We keep some references to prevent uglify remove\n// A.C = C\n// A.D = D\n\nconst Moment = component_1.default.lib(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! moment */ \"moment\"))));\n\nconst App = () => react_1.default.createElement(\"div\", null, react_1.default.createElement(A, null), react_1.default.createElement(\"br\", null), react_1.default.createElement(B, null), react_1.default.createElement(\"br\", null), react_1.default.createElement(\"br\", null), react_1.default.createElement(E, null), react_1.default.createElement(C, null), react_1.default.createElement(D, null), react_1.default.createElement(\"br\", null), react_1.default.createElement(Moment, null, moment => react_1.default.createElement(\"div\", null, \"moment\")));\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/letters/A.css":
/*!**********************************!*\
  !*** ./src/client/letters/A.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/letters/A.css?");

/***/ }),

/***/ "./src/client/letters/A.tsx":
/*!**********************************!*\
  !*** ./src/client/letters/A.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n}); // We simulate that \"moment\" is called in \"A\" and \"B\"\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst moment_1 = __importDefault(__webpack_require__(/*! moment */ \"moment\"));\n\n__webpack_require__(/*! ./A.css */ \"./src/client/letters/A.css\");\n\nclass A extends react_1.Component {\n  moment() {\n    return moment_1.default;\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", null, \"A\");\n  }\n\n} // We keep a reference to prevent uglify remove\n\n\nexports.default = A;\n\n//# sourceURL=webpack:///./src/client/letters/A.tsx?");

/***/ }),

/***/ "./src/client/letters/B.tsx":
/*!**********************************!*\
  !*** ./src/client/letters/B.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n}); // We simulate that \"moment\" is called in \"A\" and \"B\"\n// import moment from 'moment'\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst moment_1 = __importDefault(__webpack_require__(/*! moment */ \"moment\"));\n\nclass B extends react_1.Component {\n  moment() {\n    return moment_1.default;\n  }\n\n  render() {\n    return react_1.default.createElement(\"div\", null, \"B\");\n  }\n\n} // We keep a reference to prevent uglify remove\n// B.moment = moment\n\n\nexports.default = B;\n\n//# sourceURL=webpack:///./src/client/letters/B.tsx?");

/***/ }),

/***/ "./src/client/letters/C.tsx":
/*!**********************************!*\
  !*** ./src/client/letters/C.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nclass C extends react_1.Component {\n  render() {\n    return react_1.default.createElement(\"div\", null, \"C\");\n  }\n\n}\n\nexports.default = C;\n\n//# sourceURL=webpack:///./src/client/letters/C.tsx?");

/***/ }),

/***/ "./src/client/letters/D.tsx":
/*!**********************************!*\
  !*** ./src/client/letters/D.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nclass D extends react_1.Component {\n  render() {\n    return react_1.default.createElement(\"div\", null, \"D\");\n  }\n\n}\n\nexports.default = D;\n\n//# sourceURL=webpack:///./src/client/letters/D.tsx?");

/***/ }),

/***/ "./src/client/letters/E.tsx":
/*!**********************************!*\
  !*** ./src/client/letters/E.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nclass E extends react_1.Component {\n  render() {\n    return react_1.default.createElement(\"div\", null, \"E\");\n  }\n\n}\n\nexports.default = E;\n\n//# sourceURL=webpack:///./src/client/letters/E.tsx?");

/***/ }),

/***/ "./src/client/main-node.tsx":
/*!**********************************!*\
  !*** ./src/client/main-node.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/client/App.tsx\");\n\nexports.default = App_1.default;\n\n//# sourceURL=webpack:///./src/client/main-node.tsx?");

/***/ }),

/***/ "./src/client/main.css":
/*!*****************************!*\
  !*** ./src/client/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/main.css?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });