/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: src/main.js: Unexpected token (36:11)\n\u001b[0m \u001b[90m 34 | \u001b[39m      onIncrement \u001b[33m=\u001b[39m {\n \u001b[90m 35 | \u001b[39m        () \u001b[33m=>\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mCounter\u001b[39m\u001b[33m>\u001b[39mstore\u001b[33m.\u001b[39mdispatch({ type\u001b[33m:\u001b[39m \u001b[32m'INCREMENT'\u001b[39m })\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 37 | \u001b[39m        }\n \u001b[90m 38 | \u001b[39m      }\n \u001b[90m 39 | \u001b[39m\u001b[0m\n    at Parser.pp$5.raise (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4373:13)\n    at Parser.pp.unexpected (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:1716:8)\n    at Parser.pp$9.jsxParseIdentifier (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6807:10)\n    at Parser.pp$9.jsxParseNamespacedName (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6818:19)\n    at Parser.pp$9.jsxParseElementName (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6833:19)\n    at Parser.pp$9.jsxParseOpeningElementAt (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6923:20)\n    at Parser.pp$9.jsxParseElementAt (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6947:29)\n    at Parser.pp$9.jsxParseElement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7002:15)\n    at Parser.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7014:21)\n    at Parser.pp$3.parseExprSubscripts (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3427:19)\n    at Parser.pp$3.parseMaybeUnary (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3407:19)\n    at Parser.pp$3.parseExprOps (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3337:19)\n    at Parser.pp$3.parseMaybeConditional (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3314:19)\n    at Parser.pp$3.parseMaybeAssign (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3277:19)\n    at Parser.parseMaybeAssign (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6203:24)\n    at Parser.pp$3.parseExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3239:19)\n    at Parser.pp$1.parseStatement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:1861:19)\n    at Parser.parseStatement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:5712:22)\n    at Parser.pp$1.parseBlockBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:2223:21)\n    at Parser.pp$1.parseBlock (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:2202:8)\n    at Parser.pp$3.parseFunctionBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4154:22)\n    at Parser.parseFunctionBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:5699:20)\n    at Parser.pp$3.parseArrowExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4109:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3788:17)\n    at Parser.pp$3.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3642:19)\n    at Parser.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7016:22)\n    at Parser.pp$3.parseExprSubscripts (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3427:19)\n    at Parser.pp$3.parseMaybeUnary (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3407:19)\n    at Parser.pp$3.parseExprOps (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3337:19)\n    at Parser.pp$3.parseMaybeConditional (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3314:19)");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: src/main.js: Unexpected token (36:11)\n\u001b[0m \u001b[90m 34 | \u001b[39m      onIncrement \u001b[33m=\u001b[39m {\n \u001b[90m 35 | \u001b[39m        () \u001b[33m=>\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mCounter\u001b[39m\u001b[33m>\u001b[39mstore\u001b[33m.\u001b[39mdispatch({ type\u001b[33m:\u001b[39m \u001b[32m'INCREMENT'\u001b[39m })\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 37 | \u001b[39m        }\n \u001b[90m 38 | \u001b[39m      }\n \u001b[90m 39 | \u001b[39m\u001b[0m\n    at Parser.pp$5.raise (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4373:13)\n    at Parser.pp.unexpected (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:1716:8)\n    at Parser.pp$9.jsxParseIdentifier (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6807:10)\n    at Parser.pp$9.jsxParseNamespacedName (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6818:19)\n    at Parser.pp$9.jsxParseElementName (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6833:19)\n    at Parser.pp$9.jsxParseOpeningElementAt (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6923:20)\n    at Parser.pp$9.jsxParseElementAt (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6947:29)\n    at Parser.pp$9.jsxParseElement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7002:15)\n    at Parser.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7014:21)\n    at Parser.pp$3.parseExprSubscripts (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3427:19)\n    at Parser.pp$3.parseMaybeUnary (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3407:19)\n    at Parser.pp$3.parseExprOps (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3337:19)\n    at Parser.pp$3.parseMaybeConditional (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3314:19)\n    at Parser.pp$3.parseMaybeAssign (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3277:19)\n    at Parser.parseMaybeAssign (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:6203:24)\n    at Parser.pp$3.parseExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3239:19)\n    at Parser.pp$1.parseStatement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:1861:19)\n    at Parser.parseStatement (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:5712:22)\n    at Parser.pp$1.parseBlockBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:2223:21)\n    at Parser.pp$1.parseBlock (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:2202:8)\n    at Parser.pp$3.parseFunctionBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4154:22)\n    at Parser.parseFunctionBody (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:5699:20)\n    at Parser.pp$3.parseArrowExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:4109:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3788:17)\n    at Parser.pp$3.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3642:19)\n    at Parser.parseExprAtom (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:7016:22)\n    at Parser.pp$3.parseExprSubscripts (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3427:19)\n    at Parser.pp$3.parseMaybeUnary (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3407:19)\n    at Parser.pp$3.parseExprOps (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3337:19)\n    at Parser.pp$3.parseMaybeConditional (/Volumes/data/my_data/dev/github/react-redux-simple/node_modules/babylon/lib/index.js:3314:19)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);