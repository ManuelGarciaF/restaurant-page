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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderAbout; });\n/* harmony import */ var _appendElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendElement */ \"./src/appendElement.js\");\n\n\nfunction renderAbout(contentDiv) {\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/appendElement.js":
/*!******************************!*\
  !*** ./src/appendElement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((parent, tag, cssClasses) => {\n  const elem = document.createElement(tag);\n  parent.appendChild(elem);\n  if (cssClasses) cssClasses.forEach(cssClass => elem.classList.add(cssClass));\n  return elem;\n});\n\n\n//# sourceURL=webpack:///./src/appendElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/\nfunction addClass(el, className) {\n  if (el.classList) el.classList.add(className);\n  else if (!hasClass(el, className)) el.className += \" \" + className;\n}\n\nfunction removeClass(el, className) {\n  if (el.classList) el.classList.remove(className);\n  else\n    el.className = el.className.replace(\n      new RegExp(\"\\\\b\" + className + \"\\\\b\", \"g\"),\n      \"\"\n    );\n}\n\nfunction renderTab(tabId) {\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.innerHTML = \"\";\n  switch (tabId) {\n    case 0:\n      Object(_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentDiv);\n      break;\n    case 1:\n      Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(contentDiv);\n      break;\n    case 2:\n      Object(_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contentDiv);\n      break;\n  }\n}\n\nconst tabButtons = document.querySelectorAll(\".tab\");\n\ntabButtons.forEach(elem => {\n  elem.addEventListener(\"click\", event => {\n    renderTab(Number(event.target.getAttribute(\"data-index\")));\n\n    // Add `selected` class to clicked on tab and remove it from all others.\n    const tabButtons = event.target.parentElement.children;\n    for (let i = 0; i < tabButtons.length; i++) {\n      removeClass(tabButtons[i], \"selected\");\n    }\n    addClass(event.target, \"selected\");\n  });\n});\n\nObject(_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"content\"));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderMenu; });\n/* harmony import */ var _appendElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendElement */ \"./src/appendElement.js\");\n\n\nfunction appendMenuItem(\n  contentDiv,\n  imgSource,\n  title,\n  text,\n  isImgOnLeft = true\n) {\n  function appendImage() {\n    const item1Image = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuItem1, \"img\", [\"menu-img\"]);\n    item1Image.src = imgSource;\n    item1Image.alt = title + \" Image\";\n  }\n\n  const tabDiv = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentDiv, \"div\", [\"menu-div\"]);\n\n  const menuItem1 = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabDiv, \"div\", [\"menu-item\"]);\n\n  if (isImgOnLeft) appendImage()\n\n  const item1TextDiv = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuItem1, \"div\", [\"text-div\"]);\n\n  const item1Title = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item1TextDiv, \"h4\", [\"menu-title\"]);\n  item1Title.textContent = title;\n\n  const item1Text = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item1TextDiv, \"p\");\n  item1Text.textContent = text;\n\n  if (!isImgOnLeft) appendImage()\n}\n\nfunction renderMenu(contentDiv) {\n  appendMenuItem(\n    contentDiv,\n    \"./img/arancini.jpeg\",\n    \"Arancini\",\n    \"Id duis esse id consectetur commodo in. Ad id cupidatat ea nulla officia. Adipisicing nostrud magna minim commodo incididunt. Commodo excepteur sit irure magna in.\",\n    true\n  );\n  appendMenuItem(\n    contentDiv,\n    \"./img/lasagne.jpg\",\n    \"Lasagne\",\n    \"Sunt reprehenderit nisi anim commodo id laboris. Exercitation aliqua exercitation sunt qui exercitation et id. Sit id nostrud esse labore adipisicing eu incididunt pariatur duis deserunt. Esse eiusmod elit quis in deserunt commodo officia magna velit ullamco. Ut eu amet id et exercitation. Enim velit do dolor qui ad voluptate dolor id Lorem. Elit incididunt laborum aliquip voluptate et qui.\",\n    false\n  );\n  appendMenuItem(\n    contentDiv,\n    \"./img/osso-buco-alla-Milanese.jpeg\",\n    \"Osso buco alla Milanese\",\n    \"Consectetur ut labore officia aute quis aliqua laborum ullamco voluptate occaecat qui aute pariatur. Elit et consectetur duis nisi velit fugiat laborum aliqua anim officia irure voluptate. Non est ad aliquip excepteur amet fugiat reprehenderit elit incididunt nostrud nulla. Deserunt consequat Lorem exercitation ea consectetur aliquip aliqua ut eiusmod. Est dolor eiusmod est occaecat. Amet sit ullamco minim sint. Exercitation irure ex occaecat et ad occaecat id commodo ipsum irure occaecat Lorem irure id.\",\n    true\n  );\n  appendMenuItem(\n    contentDiv,\n    \"./img/ribollita.jpeg\",\n    \"Ribollita\",\n    \"Minim aliqua enim esse labore sunt aliqua ea consequat laborum occaecat elit et ad. Magna aliqua sint culpa minim dolor quis irure sint esse mollit aliquip. Ex dolor fugiat exercitation ad magna dolor pariatur ad qui deserunt dolor excepteur occaecat duis. Aliqua dolore incididunt esse amet non occaecat minim consequat fugiat non. Enim proident elit reprehenderit incididunt amet dolor officia qui aliqua et.\",\n    false\n  );\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderRestaurant; });\n/* harmony import */ var _appendElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendElement */ \"./src/appendElement.js\");\n\n\nfunction renderRestaurant(contentDiv) {\n  const tabDiv = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentDiv, \"div\", [\"restaurant-tab\"])\n\n  const img = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabDiv, \"img\", [\"restaurant-image\"])\n  img.src = \"./img/restaurant.jpeg\"\n  img.alt = \"Restaurant Image\"\n\n  const textDiv = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabDiv, \"div\", [\"text-div\"])\n\n  const text = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(textDiv, \"p\", [\"restaurant-text\"])\n  text.textContent = \"Pariatur duis nostrud adipisicing quis. Lorem voluptate ipsum ullamco irure exercitation. Reprehenderit commodo non elit duis anim elit reprehenderit consectetur amet eiusmod amet duis do. Nisi culpa proident duis anim qui dolore nulla excepteur ipsum incididunt ut magna voluptate. Ex mollit aute ad commodo velit anim do esse. Pariatur amet do cillum do enim commodo quis mollit est. Excepteur dolore duis ex voluptate dolore.\"\n\n  const link = Object(_appendElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(textDiv, \"a\")\n  link.textContent = \"Learn More\"\n  link.href = \"#\"\n};\n\n\n//# sourceURL=webpack:///./src/restaurant.js?");

/***/ })

/******/ });