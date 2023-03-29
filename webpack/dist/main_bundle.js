/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src_hw_28_03_23/styles/main.scss":
/*!******************************************!*\
  !*** ./src_hw_28_03_23/styles/main.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src_hw_28_03_23/assets/appliance.jpeg":
/*!***********************************************!*\
  !*** ./src_hw_28_03_23/assets/appliance.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d074d9f930d8c713a402.jpeg";

/***/ }),

/***/ "./src_hw_28_03_23/assets/car_good.jpeg":
/*!**********************************************!*\
  !*** ./src_hw_28_03_23/assets/car_good.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b740ea71cae52880335.jpeg";

/***/ }),

/***/ "./src_hw_28_03_23/assets/smartphone.png":
/*!***********************************************!*\
  !*** ./src_hw_28_03_23/assets/smartphone.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "603c36f4d013b164ada3.png";

/***/ }),

/***/ "./src_hw_28_03_23/assets/tablet.png":
/*!*******************************************!*\
  !*** ./src_hw_28_03_23/assets/tablet.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dc1bb6705cde6322611.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src_hw_28_03_23/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_appliance_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/appliance.jpeg */ "./src_hw_28_03_23/assets/appliance.jpeg");
/* harmony import */ var _assets_car_good_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/car_good.jpeg */ "./src_hw_28_03_23/assets/car_good.jpeg");
/* harmony import */ var _assets_smartphone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/smartphone.png */ "./src_hw_28_03_23/assets/smartphone.png");
/* harmony import */ var _assets_tablet_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/tablet.png */ "./src_hw_28_03_23/assets/tablet.png");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/main.scss */ "./src_hw_28_03_23/styles/main.scss");







let categories = {
  "Мелкая бытовая техника": _assets_appliance_jpeg__WEBPACK_IMPORTED_MODULE_0__,
  Автотовары: _assets_car_good_jpeg__WEBPACK_IMPORTED_MODULE_1__,
  Смартфоны: _assets_smartphone_png__WEBPACK_IMPORTED_MODULE_2__,
  Планшеты: _assets_tablet_png__WEBPACK_IMPORTED_MODULE_3__,
};

let Appliance = [];
let CarGood = [];
let SmartPhone = [];
let Tablet = [];

let filterItems = function (query, arr) {
  return arr.filter((el) => {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};

let makeCategoriesListView = function (redItem = null) {
  let content = "<ul style='list-style: none;'>";
  for (let category in categories) {
    content += `<li><button class='storeItem' style='border: none; padding: 10; ${
      category === redItem ? "background-color: red;" : ""
    }'><img src='${categories[category]}' title='${category}'></button>`;
  }
  content += "</ul>";
  document.getElementById("store").innerHTML = content;
  let items = document.getElementsByClassName("storeItem");
  for (let item of items) {
    item.onclick = addItem;
  }
};

let makeToolsView = function () {
  let content =
    "<button id='showCategory'>Вывод товаров выбранной категории</button>";
  content += "<button id='cleanCategory'>Очистить категорию</button>";
  content += "<button id='search'>Поиск</button>";
  document.getElementById("tools").innerHTML = content;
};

let getArrByName = function (name) {
  let arr;
  switch (name) {
    case "0":
    case "Мелкая бытовая техника": {
      arr = Appliance;
      break;
    }
    case "1":
    case "Автотовары": {
      arr = CarGood;
      break;
    }
    case "2":
    case "Смартфоны": {
      arr = SmartPhone;
      break;
    }
    case "3":
    case "Планшеты": {
      arr = Tablet;
      break;
    }
    default: {
      return null;
    }
  }
  return arr;
};

let addItem = function (e) {
  let categoryName = e.target.title;
  let arr = getArrByName(categoryName);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  let itemName;
  do {
    itemName = prompt("Введите название товара");
    if (itemName === "") {
      alert("Название товара не введено");
    } else if (itemName === null) {
      break;
    } else if (arr.includes(itemName.toLowerCase())) {
      alert(`Товар "${itemName}" уже существует в данной категории`);
      return;
    } else {
      arr.push(itemName.toLowerCase());
    }
  } while (itemName === "");
};

let showCategory = function () {
  let category = prompt("Введите номер или название категории");
  let arr = getArrByName(category);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  if (arr.length === 0) {
    alert("Временно в магазине отсутствуют товары данной категории");
    return;
  }
  let content = "<ul>";
  for (let item of arr) {
    content += `<li>${item}`;
  }
  content += "</ul>";
  document.getElementById("list").innerHTML = content;
};

let cleanCategory = function () {
  let category = prompt("Введите номер или название категории");
  let arr = getArrByName(category);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  arr.length = 0;
};

let search = function () {
  let content = "";
  let category = prompt("Введите номер или название категории");
  if (category === null || category === "") {
    let itemName = prompt("Введите часть названия или полное название товара");
    if (itemName === null || itemName === "") {
      return;
    }
    for (let key in categories) {
      let items = filterItems(itemName, getArrByName(key));
      if (items.length > 0) {
        content += `<h3>${key}</h3>`;
        content += `<ul><li>${items.join("<li>")}</ul>`;
      }
      // if (getArrByName(key).includes(itemName.toLowerCase())) {
      //   //alert(`Товар "${itemName}" находиться в категории "${key}"`);
      //   makeCategoriesListView(key);
      //   return;
      // }
    }
    if (content === "") {
      alert(`Товар "${itemName}" отсутствует`);
    }
  } else {
    let arr = getArrByName(category);
    if (arr === null) {
      alert("Подобной категории не существует");
      return;
    }
    let itemName = prompt("Введите название товара");
    if (itemName === null || itemName === "") {
      return;
    }
    let items = filterItems(itemName, getArrByName(category));
    if (items.length > 0) {
      content += `<ul><li>${items.join("<li>")}</ul>`;
    } else {
      alert(`Товар "${itemName}" отсутствует в данной категории`);
    }
  }
  document.getElementById("list").innerHTML = content;
};

makeCategoriesListView();
makeToolsView();
document.getElementById("showCategory").onclick = showCategory;
document.getElementById("cleanCategory").onclick = cleanCategory;
document.getElementById("search").onclick = search;

})();

/******/ })()
;
//# sourceMappingURL=main_bundle.js.map