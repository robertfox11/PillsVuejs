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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/api.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n// import \"./scss/main.scss\";\r\n//create Template component\r\nVue.component(\"common-list\", {\r\n  props: [\"lists\"],\r\n  template: `<div class=\"row\">\r\n  <div class=\"card col-3 m-1 mx-auto\" v-for=\"item in lists\">\r\n  <img class=\"card-img-top\" v-bind:src=\"item.thumbnailUrl\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\" >{{ item.id}}</h5>\r\n    <p class=\"card-text\">{{ item.title}}</p>\r\n  </div>\r\n  </div>\r\n</div>`\r\n});\r\nconst URL = \"https://jsonplaceholder.typicode.com/photos?_limit=5&_page=\";\r\nnew Vue({\r\n  el: \"#main\",\r\n  created: function() {\r\n    this.getPhotos();\r\n  },\r\n  data: {\r\n    photos: [],\r\n    load: [],\r\n    page: 1\r\n  },\r\n  methods: {\r\n    getPhotos: function() {\r\n      axios.get(URL+this.page++).then(res => {\r\n        this.photos = [...this.photos, ...res.data];\r\n        res.data.forEach(item => {\r\n          var img = new Image();\r\n          img.src = item.url;\r\n          img.onload = () => {\r\n            this.load.push(img.src);\r\n            if (this.load.length == this.photos.length) {\r\n              this.updateScrollEvent();\r\n            }\r\n          };\r\n        });\r\n      });\r\n      \r\n    },\r\n    updateScrollEvent() {\r\n      var updated = false;\r\n      window.onscroll = ev => {\r\n        var userPosition = window.innerHeight + window.scrollY;\r\n        var height = document.body.offsetHeight;\r\n        if (!updated && userPosition >= height) {\r\n          updated = true;\r\n          this.getPhotos();\r\n        }\r\n      };\r\n    }\r\n  }\r\n});\r\n// require('./css/styles.css')//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XHJcbi8vIGltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuLy9jcmVhdGUgVGVtcGxhdGUgY29tcG9uZW50XHJcblZ1ZS5jb21wb25lbnQoXCJjb21tb24tbGlzdFwiLCB7XHJcbiAgcHJvcHM6IFtcImxpc3RzXCJdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIGNvbC0zIG0tMSBteC1hdXRvXCIgdi1mb3I9XCJpdGVtIGluIGxpc3RzXCI+XHJcbiAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHYtYmluZDpzcmM9XCJpdGVtLnRodW1ibmFpbFVybFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIiA+e3sgaXRlbS5pZH19PC9oNT5cclxuICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3sgaXRlbS50aXRsZX19PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pO1xyXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3M/X2xpbWl0PTUmX3BhZ2U9XCI7XHJcbm5ldyBWdWUoe1xyXG4gIGVsOiBcIiNtYWluXCIsXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmdldFBob3RvcygpO1xyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgcGhvdG9zOiBbXSxcclxuICAgIGxvYWQ6IFtdLFxyXG4gICAgcGFnZTogMVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0UGhvdG9zOiBmdW5jdGlvbigpIHtcclxuICAgICAgYXhpb3MuZ2V0KFVSTCt0aGlzLnBhZ2UrKykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMucGhvdG9zID0gWy4uLnRoaXMucGhvdG9zLCAuLi5yZXMuZGF0YV07XHJcbiAgICAgICAgcmVzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgIGltZy5zcmMgPSBpdGVtLnVybDtcclxuICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZC5wdXNoKGltZy5zcmMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkLmxlbmd0aCA9PSB0aGlzLnBob3Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbEV2ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTY3JvbGxFdmVudCgpIHtcclxuICAgICAgdmFyIHVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZXYgPT4ge1xyXG4gICAgICAgIHZhciB1c2VyUG9zaXRpb24gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKCF1cGRhdGVkICYmIHVzZXJQb3NpdGlvbiA+PSBoZWlnaHQpIHtcclxuICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5nZXRQaG90b3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuLy8gcmVxdWlyZSgnLi9jc3Mvc3R5bGVzLmNzcycpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/Y2JiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ });