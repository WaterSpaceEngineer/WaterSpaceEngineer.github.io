/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/libs/sliders.js":
/*!********************************!*\
  !*** ./src/js/libs/sliders.js ***!
  \********************************/
/***/ (function() {

eval("const swiper = new Swiper('.swiper', {\n  loop: true,\n\n  autoplay: {\n    delay: 3500,\n  },\n\n  effect: 'fade',\n  fadeEffect: {\n    crossFade: false\n  },\n\n  // effect: \"cube\",\n  // grabCursor: true,\n  // cubeEffect: {\n  //   shadow: true,\n  //   slideShadows: true,\n  //   shadowOffset: 20,\n  //   shadowScale: 0.94,\n  // },\n});\n\n//# sourceURL=webpack://gulp-codequest/./src/js/libs/sliders.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/sliders */ \"./src/js/libs/sliders.js\");\n/* harmony import */ var _libs_sliders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_sliders__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ \"./src/js/modules/modals.js\");\n/* harmony import */ var _modules_navigationFixation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navigationFixation */ \"./src/js/modules/navigationFixation.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_modules_navigationFixation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.header', '.header__container');\n});\n\n//# sourceURL=webpack://gulp-codequest/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modals = () => {\n    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {\n        const trigger = document.querySelectorAll(triggerSelector);\n        const modal = document.querySelector(modalSelector);\n        const close = document.querySelector(closeSelector);\n        const windows = document.querySelectorAll('[data-modal]'); // необходим для работы со всеми модальными окнами\n        const scroll = calcScroll();\n\n        trigger.forEach(item => {\n            item.addEventListener('click', (e) => {\n                if (e.target) {\n                    e.preventDefault();\n                }\n\n                windows.forEach(item => {\n                    item.style.display = 'none';\n                    item.classList.add('fadeIn');\n                });\n    \n                modal.style.display = \"block\";\n                document.body.style.overflow = \"hidden\";\n                document.body.style.marginRight = `${scroll}px`;\n            });\n        });\n\n        close.addEventListener('click', () => {\n            windows.forEach(item => {\n                item.classList.remove('fadeIn');\n                item.classList.add('fadeOut');\n    \n                setTimeout(() => {\n                    item.classList.remove('fadeOut')\n                    item.style.display = \"none\";\n                }, 800)\n\n            });\n\n            modal.classList.remove('fadeIn');\n            modal.classList.add('fadeOut');\n\n            setTimeout(() => {\n                modal.classList.remove('fadeOut');\n                modal.style.display = \"none\";\n            }, 800)\n\n\n            document.body.style.overflow = \"\";\n            document.body.style.marginRight = `0px`;\n        });\n\n        modal.addEventListener('click', (e) => {\n            if (e.target === modal && closeClickOverlay) {\n                windows.forEach(item => {\n                    item.classList.remove('fadeIn')\n                    item.classList.add('fadeOut')\n        \n                    setTimeout(() => {\n                        item.classList.remove('fadeOut')\n                        item.style.display = \"none\";\n                    }, 800)\n                });\n\n                \n                modal.classList.remove('fadeIn')\n                modal.classList.add('fadeOut')\n    \n                setTimeout(() => {\n                    modal.classList.remove('fadeOut')\n                    modal.style.display = \"none\";\n                }, 800)\n\n                document.body.style.overflow = \"\"; \n                document.body.style.marginRight = `0px`;\n            }\n        });\n    }\n\n     // Popup который вызывается через время\n     function showModalByTime(selector, time) {\n        setTimeout(function() {\n            let display;\n\n            document.querySelectorAll('[data-modal]').forEach(item => {\n                if (getComputedStyle(item).display !== 'none') {\n                    display = 'block';\n                }\n            });\n\n            if(!display) {\n                document.querySelector(selector).style.display = 'block';\n                document.body.style.overflow = \"hidden\";\n\n                const scroll = calcScroll();\n                document.body.style.marginRight = `${scroll}px`;\n            }\n        }, time);\n    }\n\n    function calcScroll() {\n        let div = document.createElement('div');\n\n        div.style.width = '50px';\n        div.style.height = '50px';\n        div.style.overflowY = 'scroll';\n        div.style.visibility = 'hidden';\n\n        document.body.appendChild(div);\n        let scrollWidth = div.offsetWidth - div.clientWidth;\n        div.remove();\n\n        return scrollWidth;\n    }\n\n    bindModal('.phone__link', '.popup', '.popup .popup__close');\n    // showModalByTime('.popup', 60000);\n   \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/navigationFixation.js":
/*!**********************************************!*\
  !*** ./src/js/modules/navigationFixation.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navigationFixation = (navigationSelector, headerTopSelector) => {\n  const header = document.querySelector(navigationSelector);\n  const getParametersHeader = document.querySelector(headerTopSelector).getBoundingClientRect();\n  \n  window.addEventListener('scroll', () => {\n    if (document.documentElement.scrollTop > getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {\n      header.classList.add('nav-fix');\n    } else {\n      header.classList.remove('nav-fix');\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigationFixation);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/navigationFixation.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/libs/sliders.js");
/******/ 	__webpack_require__("./src/js/modules/modals.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/navigationFixation.js");
/******/ 	
/******/ })()
;