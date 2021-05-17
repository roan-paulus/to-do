/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./my_modules/dom.js":
/*!***************************!*\
  !*** ./my_modules/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayItem\": () => (/* binding */ displayItem),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n\n\nconst content = document.querySelector(\".content\");\n\nfunction displayItem(item) {\n    const itemContainer = document.createElement(\"div\");\n    const propList = document.createElement(\"ul\");\n\n    for (let prop in item) {\n\n        if (item.propertyIsEnumerable(prop) === true) {\n            const itemProp = document.createElement(\"li\");\n            itemProp.textContent = item[prop];\n            propList.appendChild(itemProp);\n        }\n\n    }\n\n    itemContainer.id = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title);\n    itemContainer.appendChild(propList);\n    content.appendChild(itemContainer);\n}\n\nfunction removeItem(itemId) {\n    const itemContainer = itemId;\n    content.removeChild(itemContainer);\n}\n\nfunction displayProject(project) {\n    const sidebar = document.querySelector(\".sidebar\");\n    const projectButt = document.createElement(\"button\");\n    \n    projectButt.textContent = project.title;\n    sidebar.appendChild(projectButt);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/dom.js?");

/***/ }),

/***/ "./my_modules/item.js":
/*!****************************!*\
  !*** ./my_modules/item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItem\": () => (/* binding */ createItem),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n\n\nfunction createItem(\n    title,\n    description,\n    dueDate,\n    priority\n){\n    const proto = {\n        changeTitle: function(newTitle) {\n            this.title = newTitle;\n        },\n        changeDescription: function(newDesc) {\n            this.description = newDesc;\n        },\n        changeDueDate: function(newDate) {\n            this.dueDate = newDate;\n        },\n        changePriority: function(newPriority) {\n            this.priority = newPriority;\n        }\n    };\n    const item = {\n        title,\n        description,\n        dueDate,\n        priority\n    }\n    return Object.assign(Object.create(proto), item);\n}\n\nfunction createProject(title) {\n    const proto = {\n        addItem: function(item) {\n            let title = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title)\n            this[title] = item;\n        }\n    }\n    const project = {\n        title\n    }\n    return Object.assign(Object.create(proto), project);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/item.js?");

/***/ }),

/***/ "./my_modules/string_functions.js":
/*!****************************************!*\
  !*** ./my_modules/string_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toCamelCase\": () => (/* binding */ toCamelCase)\n/* harmony export */ });\nfunction toCamelCase(string) {\n    string = string.toLowerCase();\n    let newString = \"\";\n    for (let i = 0; i < string.length; i++) {\n        if (string[i] === \" \") {\n            newString = newString + string[i + 1].toUpperCase();\n            i++;\n        } else {\n            newString = newString + string[i];\n        }\n    }\n    return newString;\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/string_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n/* harmony import */ var _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/dom.js */ \"./my_modules/dom.js\");\n\n\n\n\nconst vacation = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"vacation\");\nconst trip = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Trip\",\n    \"Go to the airport, board the plane untill arrival\",\n    \"20/11/2022\",\n    \"High\"\n);\nconst shopping = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Shopping\",\n    \"Go to some stores in town and look around\",\n    \"21/11/2022\",\n    \"Medium\"\n);\nconst goBackHome = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Go back home\",\n    \"Go to the airport, board the plane untill we're back home\",\n    \"28/11/2022\",\n    \"High\"\n);\nvacation.addItem(trip);\nvacation.addItem(shopping);\nvacation.addItem(goBackHome);\n\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(vacation);\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayItem)(vacation.trip);\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayItem)(vacation.shopping);\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayItem)(vacation.goBackHome);\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;