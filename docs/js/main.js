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

eval("const swiper = new Swiper('.swiper', {\n  loop: true,\n\n  autoplay: {\n    delay: 3500,\n  },\n});\n\n//# sourceURL=webpack://gulp-codequest/./src/js/libs/sliders.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/sliders */ \"./src/js/libs/sliders.js\");\n/* harmony import */ var _libs_sliders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_sliders__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_scrollPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollPage */ \"./src/js/modules/scrollPage.js\");\n/* harmony import */ var _modules_resizePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/resizePage */ \"./src/js/modules/resizePage.js\");\n/* harmony import */ var _modules_touchSubMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/touchSubMenu */ \"./src/js/modules/touchSubMenu.js\");\n/* harmony import */ var _modules_spollers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/spollers */ \"./src/js/modules/spollers.js\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./src/js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_dropdownList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdownList */ \"./src/js/modules/dropdownList.js\");\n\n\n// import modals from './modules/modals';\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    // modals();\n    (0,_modules_scrollPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_modules_resizePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_modules_touchSubMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('submenu-button', '.submenu-item', '.submenu-item._hover');\n    (0,_modules_dropdownList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,_modules_spollers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('menu-button', '.navigation');\n});\n\n//# sourceURL=webpack://gulp-codequest/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/animationOnScroll.js":
/*!*********************************************!*\
  !*** ./src/js/modules/animationOnScroll.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst animationOnScroll = () => {\n\n  const animeteItems = document.querySelectorAll('.animate');\n\n  if(animeteItems.length > 0) {\n    // function offset(elem) {\n    //   const rect = elem.getBoundingClientRect();\n    //   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\n    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n\n    //   return {top: rect.top + scrollTop, left: rect.left + scrollLeft}\n    // }\n\n    // animeteItems.forEach(item => {\n\n    //   const animateHeight = item.offsetHeight;\n    //   const animateOffset = offset(item).top;\n    //   const animStart = 4;\n\n    //   let animateItemPoint = window.innerHeight - animateHeight / animStart;\n\n    //   if(animateHeight > window.innerHeight) {\n    //     animateItemPoint = window.innerHeight - window.innerHeight / animStart;\n    //   }\n\n    //   if((pageYOffset > animateOffset - animateItemPoint) && pageYOffset < (animateOffset + animateHeight)) {\n    //     item.classList.add('show');\n    //   } else {\n    //     item.classList.remove('show');\n    //   }\n    // });\n\n    const triggerHeight = window.innerHeight / 5*4;\n\n    animeteItems.forEach(item => {\n      const boxTop = item.getBoundingClientRect().top;\n  \n      if(boxTop < triggerHeight) {\n        item.classList.add('show');\n      } else {\n        if(!item.classList.contains('animate-no-hide')) {\n          item.classList.remove('show');\n        }\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationOnScroll);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/animationOnScroll.js?");

/***/ }),

/***/ "./src/js/modules/dropdownList.js":
/*!****************************************!*\
  !*** ./src/js/modules/dropdownList.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dropdownList = () => {\n  let isMobile = {\n    Android: function () {\n      return navigator.userAgent.match(/Android/i);\n    },\n    BlackBerry: function () {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n    iOS: function () {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n    Opera: function () {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n    Windows: function () {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n    any: function () {\n      return (\n        isMobile.Android() ||\n        isMobile.BlackBerry() ||\n        isMobile.iOS() ||\n        isMobile.Opera() ||\n        isMobile.Windows()\n      );\n    },\n  };\n\n  const dropdown = document.querySelectorAll('[data-dropdown]');\n\n  if(dropdown.length > 0 && isMobile.any()) {\n\n    document.addEventListener('click', (e) => {\n      const targetElement = e.target;\n\n      if(targetElement.classList.contains('dropdown__btn')) {\n        targetElement.closest('.dropdown').classList.toggle('_dropdown-open');\n      }\n\n      if(!targetElement.closest('.dropdown') && document.querySelectorAll('.dropdown._dropdown-open').length > 0) {\n        document.querySelectorAll('.dropdown._dropdown-open').forEach(item => {\n          item.classList.remove('_dropdown-open');\n        })\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropdownList);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/dropdownList.js?");

/***/ }),

/***/ "./src/js/modules/headerFixationOnMobile.js":
/*!**************************************************!*\
  !*** ./src/js/modules/headerFixationOnMobile.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst headerFixationOnMobile = () => {\n  const getParametersHeader = document.querySelector('.header').getBoundingClientRect();\n  const mainPage = document.querySelector('.page');\n\n  if(window.matchMedia('(max-width: 767px)').matches) {\n    mainPage.style.paddingTop = `${getParametersHeader.height}px`;\n  }\n  else {\n    mainPage.style.paddingTop = ``;\n  }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerFixationOnMobile);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/headerFixationOnMobile.js?");

/***/ }),

/***/ "./src/js/modules/headerTopFixation.js":
/*!*********************************************!*\
  !*** ./src/js/modules/headerTopFixation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst headerTopFixation = () => {\n  const header = document.querySelector('.header');\n  const getParametersHeader = document.querySelector('.header__container').getBoundingClientRect();\n  const getParametersHeaderMain = document.querySelector('.header-main').getBoundingClientRect();\n  const mainPage = document.querySelector('.page');\n\n  if (document.documentElement.scrollTop > getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {\n    header.classList.add('nav-fix');\n    mainPage.style.paddingTop = `${getParametersHeaderMain.height}px`;\n  } else if (document.documentElement.scrollTop <= getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {\n    header.classList.remove('nav-fix');\n    mainPage.style.paddingTop = ``;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerTopFixation);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/headerTopFixation.js?");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mobileMenu = (menuBtnSelector, menuBlockSelector) => {\n  const menuBtn = document.getElementById(menuBtnSelector);\n  const menuBlock = document.querySelector(menuBlockSelector);\n  let toggleTriger = false;\n\n  menuBtn.addEventListener('click', () => {\n      if(!toggleTriger) {\n          menuBtn.classList.add('open');\n          menuBtn.classList.remove('close');\n          menuBlock.classList.add('open');\n          document.body.style.overflow = 'hidden';\n          toggleTriger = true;\n      } else {\n          menuBtn.classList.remove('open');\n          menuBtn.classList.add('close');\n          menuBlock.classList.remove('open');\n          document.body.style.overflow = '';\n          toggleTriger = false;\n      }\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileMenu);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modals = () => {\n    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {\n        const trigger = document.querySelectorAll(triggerSelector);\n        const modal = document.querySelector(modalSelector);\n        const close = document.querySelector(closeSelector);\n        const windows = document.querySelectorAll('[data-modal]'); // необходим для работы со всеми модальными окнами\n        const scroll = calcScroll();\n\n        trigger.forEach(item => {\n            item.addEventListener('click', (e) => {\n                if (e.target) {\n                    e.preventDefault();\n                }\n\n                windows.forEach(item => {\n                    item.style.display = 'none';\n                    item.classList.add('fadeIn');\n                });\n    \n                modal.style.display = \"block\";\n                document.body.style.overflow = \"hidden\";\n                document.body.style.marginRight = `${scroll}px`;\n            });\n        });\n\n        close.addEventListener('click', () => {\n            windows.forEach(item => {\n                item.classList.remove('fadeIn');\n                item.classList.add('fadeOut');\n    \n                setTimeout(() => {\n                    item.classList.remove('fadeOut')\n                    item.style.display = \"none\";\n                }, 800)\n\n            });\n\n            modal.classList.remove('fadeIn');\n            modal.classList.add('fadeOut');\n\n            setTimeout(() => {\n                modal.classList.remove('fadeOut');\n                modal.style.display = \"none\";\n            }, 800)\n\n\n            document.body.style.overflow = \"\";\n            document.body.style.marginRight = `0px`;\n        });\n\n        modal.addEventListener('click', (e) => {\n            if (e.target === modal && closeClickOverlay) {\n                windows.forEach(item => {\n                    item.classList.remove('fadeIn')\n                    item.classList.add('fadeOut')\n        \n                    setTimeout(() => {\n                        item.classList.remove('fadeOut')\n                        item.style.display = \"none\";\n                    }, 800)\n                });\n\n                \n                modal.classList.remove('fadeIn')\n                modal.classList.add('fadeOut')\n    \n                setTimeout(() => {\n                    modal.classList.remove('fadeOut')\n                    modal.style.display = \"none\";\n                }, 800)\n\n                document.body.style.overflow = \"\"; \n                document.body.style.marginRight = `0px`;\n            }\n        });\n    }\n\n     // Popup который вызывается через время\n     function showModalByTime(selector, time) {\n        setTimeout(function() {\n            let display;\n\n            document.querySelectorAll('[data-modal]').forEach(item => {\n                if (getComputedStyle(item).display !== 'none') {\n                    display = 'block';\n                }\n            });\n\n            if(!display) {\n                document.querySelector(selector).style.display = 'block';\n                document.body.style.overflow = \"hidden\";\n\n                const scroll = calcScroll();\n                document.body.style.marginRight = `${scroll}px`;\n            }\n        }, time);\n    }\n\n    function calcScroll() {\n        let div = document.createElement('div');\n\n        div.style.width = '50px';\n        div.style.height = '50px';\n        div.style.overflowY = 'scroll';\n        div.style.visibility = 'hidden';\n\n        document.body.appendChild(div);\n        let scrollWidth = div.offsetWidth - div.clientWidth;\n        div.remove();\n\n        return scrollWidth;\n    }\n\n    bindModal('.phone__link', '.popup', '.popup .popup__close');\n    // showModalByTime('.popup', 60000);\n   \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/resizePage.js":
/*!**************************************!*\
  !*** ./src/js/modules/resizePage.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headerFixationOnMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerFixationOnMobile */ \"./src/js/modules/headerFixationOnMobile.js\");\n\n\nconst resizePage = () => {\n  window.addEventListener('resize', () => {\n    (0,_headerFixationOnMobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  (0,_headerFixationOnMobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resizePage);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/resizePage.js?");

/***/ }),

/***/ "./src/js/modules/scrollPage.js":
/*!**************************************!*\
  !*** ./src/js/modules/scrollPage.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headerTopFixation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerTopFixation */ \"./src/js/modules/headerTopFixation.js\");\n/* harmony import */ var _animationOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationOnScroll */ \"./src/js/modules/animationOnScroll.js\");\n\n\n\nconst scrollPage = () => {\n  \n  window.addEventListener('scroll', () => {\n    // Фіксація header-top при scroll\n    (0,_headerTopFixation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // Анімація при scroll\n    (0,_animationOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollPage);\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/scrollPage.js?");

/***/ }),

/***/ "./src/js/modules/spollers.js":
/*!************************************!*\
  !*** ./src/js/modules/spollers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst spollers = () => {\n  const toggleButtons = document.querySelectorAll('[data-spoller-btn]');\n  const content = document.querySelector('[data-spoller-content]')\n  \n  toggleButtons.forEach(button => {\n    button.addEventListener('click', (e) => {\n      const target = e.target;\n      e.preventDefault();\n\n      target.classList.toggle('button-active');\n      \n      target.nextElementSibling.classList.toggle('content-open');\n    })\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (spollers);\n\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/spollers.js?");

/***/ }),

/***/ "./src/js/modules/touchSubMenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/touchSubMenu.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst touchSubMenu = (buttonSelector, itemSelector, itemHoverSelector) => {\n  let isMobile = {\n    Android: function () {\n      return navigator.userAgent.match(/Android/i);\n    },\n    BlackBerry: function () {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n    iOS: function () {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n    Opera: function () {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n    Windows: function () {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n    any: function () {\n      return (\n        isMobile.Android() ||\n        isMobile.BlackBerry() ||\n        isMobile.iOS() ||\n        isMobile.Opera() ||\n        isMobile.Windows()\n      );\n    },\n  };\n  \n  document.addEventListener('click', documentActions);\n\n  // Фунція делегування події click\n  function documentActions (e) {\n    const targetElement = e.target;\n\n    if(window.innerWidth > 767 && isMobile.any()) {\n      if(targetElement.classList.contains(buttonSelector)) {\n        targetElement.closest(itemSelector).classList.toggle('_hover');\n      }\n\n      if(!targetElement.closest(itemSelector) && document.querySelectorAll(itemHoverSelector).length > 0) {\n        document.querySelectorAll(itemHoverSelector).forEach(item => {\n          item.classList.remove('_hover');\n        })\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (touchSubMenu);\n\n\n\n//# sourceURL=webpack://gulp-codequest/./src/js/modules/touchSubMenu.js?");

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
/******/ 	__webpack_require__("./src/js/modules/animationOnScroll.js");
/******/ 	__webpack_require__("./src/js/modules/dropdownList.js");
/******/ 	__webpack_require__("./src/js/modules/headerFixationOnMobile.js");
/******/ 	__webpack_require__("./src/js/modules/headerTopFixation.js");
/******/ 	__webpack_require__("./src/js/modules/mobileMenu.js");
/******/ 	__webpack_require__("./src/js/modules/modals.js");
/******/ 	__webpack_require__("./src/js/modules/resizePage.js");
/******/ 	__webpack_require__("./src/js/modules/scrollPage.js");
/******/ 	__webpack_require__("./src/js/modules/spollers.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/touchSubMenu.js");
/******/ 	
/******/ })()
;