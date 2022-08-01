/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n#container {\n    display: flex;\n    color: #D92121;\n    flex-direction: column;\n}\n\n#main {\n    display: flex;\n}\n\n#rightSection {\n    flex-grow:4;\n    border: 2px solid black;\n    padding-left: 10px;\n}\n\n#header {\n    background-color: black; \n    color: gold;\n}\n.todo-form , .project-todo-form{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    width: 100px;\n    color: blue;\n}\n\n.form {\n    display: none;\n}\n\n.projectname , .home {\n    cursor: pointer;\n}\n\n.projectname {\n    margin-left: 20px;\n    font-size: 1.25em;\n}\n\n.projectname:hover, .home:hover {\n    transform: scale(1.05);\n}\n\n#navBar {\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    width: 200px;\n    padding: 10px;\n   \n\n}\n\n.navbar-title {\n    font-size: 1.5em;\n    color: black;\n\n}\n\n#header > h1 {\n    text-align: center;\n    font-size: 3em ;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 10px;\n}\n\n.home-todos, .project-todos {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.home-todos:hover, .project-todos:hover {\n    cursor: pointer;\n    background-color: rgb(0, 0, 0,10%);\n    \n    border-radius: 5px;\n}\n\n#currentproject {\n    display: flex;\n    flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;;AAEhB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kCAAkC;;IAElC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":["body {\n    margin: 0;\n}\n#container {\n    display: flex;\n    color: #D92121;\n    flex-direction: column;\n}\n\n#main {\n    display: flex;\n}\n\n#rightSection {\n    flex-grow:4;\n    border: 2px solid black;\n    padding-left: 10px;\n}\n\n#header {\n    background-color: black; \n    color: gold;\n}\n.todo-form , .project-todo-form{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    width: 100px;\n    color: blue;\n}\n\n.form {\n    display: none;\n}\n\n.projectname , .home {\n    cursor: pointer;\n}\n\n.projectname {\n    margin-left: 20px;\n    font-size: 1.25em;\n}\n\n.projectname:hover, .home:hover {\n    transform: scale(1.05);\n}\n\n#navBar {\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    width: 200px;\n    padding: 10px;\n   \n\n}\n\n.navbar-title {\n    font-size: 1.5em;\n    color: black;\n\n}\n\n#header > h1 {\n    text-align: center;\n    font-size: 3em ;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 10px;\n}\n\n.home-todos, .project-todos {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.home-todos:hover, .project-todos:hover {\n    cursor: pointer;\n    background-color: rgb(0, 0, 0,10%);\n    \n    border-radius: 5px;\n}\n\n#currentproject {\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "description2": () => (/* binding */ description2),
/* harmony export */   "dueDate": () => (/* binding */ dueDate),
/* harmony export */   "dueDate2": () => (/* binding */ dueDate2),
/* harmony export */   "priority": () => (/* binding */ priority),
/* harmony export */   "priority2": () => (/* binding */ priority2),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "title2": () => (/* binding */ title2)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");


let title, description, dueDate, priority,projnamecont,projarr , individualproj, individualprojid
let title2, description2,dueDate2,priority2, project , projectTitle

const todos = []
const projectContainer = document.querySelector("#projectContainer")
const rightSection = document.querySelector("#rightSection")
const subBtn = document.querySelector("#todo-form-submit")
const subBtn2 = document.querySelector("#project-todo-form-submit")
const currentproject = document.querySelector("#currentproject")
const currenttask = document.querySelector("#currenttask")
const projectBtn = document.querySelector("#project-submit")
const projSection = document.querySelector("#projectSection")
const createproject = document.querySelector("#createproject")
const projnameform = document.querySelector("#proj-name-form")
const taskadder = document.querySelector("#addtask")
const todoform = document.querySelector("#main-form")
const projecttodoform = document.querySelector("#secondary-form")
const home = document.querySelector("#home")
//const homeheader = document.querySelector("#homeHeading")
const projecttab = document.querySelectorAll(".projectname")
const projectHeader = document.createElement("h1")

function elementCreator(el,type,class_name,id_name,innertext) {
    el = document.createElement(type)
    el.classList.add(class_name)
    el.setAttribute("id",id_name)
    el.textContent = innertext

    return el

}

const addTask = elementCreator("addTask","button","proj-task-btn","proj-task-btn","Add Task")
const homeheader = elementCreator("homeheader","h1","homeHeader","homeHeading","Home")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function sub(e) {
    e.preventDefault()
    title = document.querySelector("#title").value
    description = document.querySelector("#description").value
    dueDate = document.querySelector("#dueDate").value
    priority= document.querySelector('input[name="priority"]:checked').value
    ;(0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.inputs)()
}

function projSub(e) {
    e.preventDefault()
    //title2 = document.querySelector("#title").value
    description2 = document.querySelector("#description2").value
    dueDate2 = document.querySelector("#dueDate2").value
    priority2 = document.querySelector('input[name="priority2"]:checked').value
    ;(0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createProjects)(projnamecont)
}

function projName(e){
    e.preventDefault()
    project = document.querySelector("#project-name").value
    return project
}

function displayTodos() {
    projectContainer.innerHTML = ""

    for (let x=0 ; x< _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList.length ;x++) {
        
        todos[x] = document.createElement("div")
       
        let div,z

        for(let y in _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[x]) {

            if ((y === "title") || (y === "dueDate")) {

                div = document.createElement("div")
                div.innerHTML += _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[x][y] + "&emsp;"

                try {
                    todos[x].classList.add(_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[x].title, "home-todos")
                }
                catch {
                    z = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[x].title.split(" ")
                    todos[x].classList.add(z.join('-'),"home-todos")
                }
            }

             
            
            todos[x].appendChild(div)
                
        }
        
        
        
        projectContainer.appendChild(todos[x])
    } 
    
}

function projectChecker(arr) {

  projarr =  arr.filter(function(project) {
        if(project.name === projnamecont) {
            return true
        }
    })

    return projarr

}

function iterate(obj,tab) {
    rightSection.innerHTML = ""
    individualproj = document.createElement('div')
    projectHeader.innerHTML = projnamecont
    rightSection.appendChild(projectHeader)
    rightSection.appendChild(projectContainer)
    
    rightSection.appendChild(addTask)

    Object.keys(obj).forEach(key => {

    console.log(`key: ${key}, value: ${obj[key]}`)
    
    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    else {
            if((key === 'name') || (key === 'title') || (key === 'info') || (key === 'priority')) {
                return
            }

            if ((key == 'name') && (key !== tab)) {
                return
            }
            else {
                
                //for(let x = 0; x < Object.keys(obj).length; x++) {
                    if (key === "description") {
                        individualprojid = obj[key]
                    }

                    try{
                        individualproj.classList.add(individualprojid, "project-todos")
                    }
                    catch {
                        let x = individualprojid.split(" ")
                        individualprojid = x.join('-')
                        individualproj.classList.add(individualprojid)
                    }
                    let div = document.createElement("div")
                    div.innerHTML = `${obj[key]} <br>`
                    individualproj.appendChild(div)
                    projectContainer.appendChild(individualproj)


               // }

                
            }
            
        }            
    }      
    )
}

function displayProjects(e) {
    //projectContainer.innerHTML = ""
    projTab(e)
    const myarr = projectChecker(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects)

    for (let x=0 ; x < myarr.length ; x++) {

        iterate(myarr[x],e)
        
    }

}

function projectParser(obj) {
    Object.keys(obj).forEach(key => {

    console.log(`key: ${key}, value: ${obj[key]}`)

    let proj_line = document.createElement("div")

    //currentproject.innerHTML += `${key} + " " + ${obj[key]}`
    if (typeof obj[key] === 'object' && obj[key] !== null) {
            projectParser(obj[key])
        }

    else {
            if((key === 'name') || (key === 'info')) {
                return
            }
            else {
                

                

                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                proj_line.appendChild(div)
                //proj_line.appendChild(div2)
                currentproject.appendChild(proj_line)
            }
             
            
        
    }

   /* if (obj[key] === project) {
        projectParser(obj[key])
    }*/


    })
}

function taskParser(obj) {
    Object.keys(obj).forEach(key => {

        console.log(`key: ${key}, value: ${obj[key]}`)
        let task_line = document.createElement("div")

        if (typeof obj[key] === 'object' && obj[key] !== null) {
                taskParser(obj[key])
            }

        else {
                
                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                task_line.appendChild(div)
                //proj_line.appendChild(div2)
                currenttask.appendChild(task_line)
        }
        })
    }



function fetchTasks(e) {
    let taskclass = e.target.classList
    let current_title = taskclass[0]

    const x = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList.filter(function(task){
        if(task.title == current_title) {
            return true
        }
    }) 

    console.log(x)

    x.forEach(obj => taskParser(obj))

}

function fetchProject(e) {
    let projclasses = e.target.classList
    console.log(projclasses)
    let current_desc = projclasses[0] 
    console.log(current_desc)
    const myarr = projectChecker(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects)
    console.log(myarr)
    
    const x = myarr.filter(function(proj){

        if(proj.project.description == current_desc){
            return true
        }

        else {
            let new_desc = current_desc.split("-").join(" ")
            console.log(new_desc)
            if(proj.project.description == new_desc){
                return true
            }
        }
    })
    

    console.log(x)

    x.forEach(obj => projectParser(obj))
          
    
}

function projTab(e) {
    rightSection.innerHTML = ""
    
    projectHeader.classList.add("homeHeading")
    //projectHeader.innerHTML = e.target.id
    projectHeader.innerHTML = projnamecont
    
    
    projectContainer.innerHTML = ""
    

    rightSection.appendChild(projectHeader)
    rightSection.appendChild(projectContainer) 
    rightSection.appendChild(addTask)

    return projnamecont
    
}

function hmeBtn() {
    rightSection.innerHTML = ""
    
   
    rightSection.appendChild(homeheader)
    rightSection.appendChild(projectContainer)
    homeheader.innerHTML = "Home"
    displayTodos()
    rightSection.appendChild(taskadder)
}



subBtn.addEventListener("click", function(e) {
    
    sub(e)
    document.querySelector(".todo-form").reset()
    console.log(_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList)
    todoform.classList.add("form")
    displayTodos()

})

subBtn2.addEventListener("click", function(e){
    projSub(e)
    document.querySelector(".project-todo-form").reset()
    projecttodoform.classList.add("form")
    displayProjects(projnamecont)
    

} )

projectBtn.addEventListener("click", function(e) {
    projName(e)
    projectTitle = projName(e)
    document.querySelector(".project-form").reset()
    
    const newProj = document.createElement("div")
    newProj.setAttribute("class","projectname")
    newProj.setAttribute("id",projectTitle)
    newProj.innerHTML += projectTitle
    projSection.appendChild(newProj)
    projnameform.classList.add("form")

})

createproject.addEventListener("click", function(e) {
    projnameform.classList.remove("form")
})

taskadder.addEventListener("click", function(e) {
    todoform.classList.remove("form")
})

projSection.addEventListener('click', function(e) {
    if(e.target.classList.contains('projectname')) {
        projnamecont = e.target.id
        displayProjects(e);
                       
    };
  } );

rightSection.addEventListener('click', function(e) {
    console.log(e) 
    if(e.target.id == "proj-task-btn") {
        projecttodoform.classList.remove("form")
           
    }
    if(e.target.classList.contains("project-todos")){
        currentproject.innerHTML = ""
        fetchProject(e)
    }
    if(e.target.classList.contains("home-todos")){
        currenttask.innerHTML = ""
        fetchTasks(e)
    }

  } );

  home.addEventListener("click",hmeBtn) 
    
      

  


/*
projecttab.forEach((proj) => {

    proj.addEventListener("click", function(e) {
    
       // projTab(e)
        //console.log(e)
        
    })
})
*/




/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjects": () => (/* binding */ createProjects),
/* harmony export */   "inputs": () => (/* binding */ inputs),
/* harmony export */   "myprojects": () => (/* binding */ myprojects),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


const todoList = []
const myprojects = []

function Projects(name,project) {
    this.name = name
    this.project = project
    this.info = function() {
        console.log(name)
    }
}

class Todos {
    constructor(title, description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

function createProjects(name) {
    let todo = new Todos(name, _DOM_js__WEBPACK_IMPORTED_MODULE_0__.description2,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.dueDate2,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.priority2)
    const proj = new Projects(name,todo)
    myprojects.push(proj)
    console.log(todo.title)
    console.log(proj)
    console.log(myprojects)
}

function inputs() {
    let newTodo = new Todos(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.title,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.description,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.dueDate,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.priority)
    todoList.push(newTodo)
    
    
}






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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDd0M7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNEOTIxMjE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0U2VjdGlvbiB7XFxuICAgIGZsZXgtZ3Jvdzo0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgICBjb2xvcjogZ29sZDtcXG59XFxuLnRvZG8tZm9ybSAsIC5wcm9qZWN0LXRvZG8tZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RuYW1lICwgLmhvbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0bmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLnByb2plY3RuYW1lOmhvdmVyLCAuaG9tZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNuYXZCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgIFxcblxcbn1cXG5cXG4ubmF2YmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtIDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ob21lLXRvZG9zLCAucHJvamVjdC10b2RvcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvbWUtdG9kb3M6aG92ZXIsIC5wcm9qZWN0LXRvZG9zOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwxMCUpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY3VycmVudHByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQzs7SUFFbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNEOTIxMjE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0U2VjdGlvbiB7XFxuICAgIGZsZXgtZ3Jvdzo0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgICBjb2xvcjogZ29sZDtcXG59XFxuLnRvZG8tZm9ybSAsIC5wcm9qZWN0LXRvZG8tZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RuYW1lICwgLmhvbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0bmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLnByb2plY3RuYW1lOmhvdmVyLCAuaG9tZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNuYXZCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgIFxcblxcbn1cXG5cXG4ubmF2YmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtIDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ob21lLXRvZG9zLCAucHJvamVjdC10b2RvcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvbWUtdG9kb3M6aG92ZXIsIC5wcm9qZWN0LXRvZG9zOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwxMCUpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY3VycmVudHByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7aW5wdXRzLHRvZG9MaXN0LG15cHJvamVjdHMsY3JlYXRlUHJvamVjdHN9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5sZXQgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxwcm9qbmFtZWNvbnQscHJvamFyciAsIGluZGl2aWR1YWxwcm9qLCBpbmRpdmlkdWFscHJvamlkXG5sZXQgdGl0bGUyLCBkZXNjcmlwdGlvbjIsZHVlRGF0ZTIscHJpb3JpdHkyLCBwcm9qZWN0ICwgcHJvamVjdFRpdGxlXG5cbmNvbnN0IHRvZG9zID0gW11cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RDb250YWluZXJcIilcbmNvbnN0IHJpZ2h0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHRTZWN0aW9uXCIpXG5jb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybS1zdWJtaXRcIilcbmNvbnN0IHN1YkJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdG9kby1mb3JtLXN1Ym1pdFwiKVxuY29uc3QgY3VycmVudHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnRwcm9qZWN0XCIpXG5jb25zdCBjdXJyZW50dGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudHRhc2tcIilcbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc3VibWl0XCIpXG5jb25zdCBwcm9qU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlY3Rpb25cIilcbmNvbnN0IGNyZWF0ZXByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZXByb2plY3RcIilcbmNvbnN0IHByb2puYW1lZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvai1uYW1lLWZvcm1cIilcbmNvbnN0IHRhc2thZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkdGFza1wiKVxuY29uc3QgdG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZm9ybVwiKVxuY29uc3QgcHJvamVjdHRvZG9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWNvbmRhcnktZm9ybVwiKVxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKVxuLy9jb25zdCBob21laGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lSGVhZGluZ1wiKVxuY29uc3QgcHJvamVjdHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdG5hbWVcIilcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcblxuZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoZWwsdHlwZSxjbGFzc19uYW1lLGlkX25hbWUsaW5uZXJ0ZXh0KSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc19uYW1lKVxuICAgIGVsLnNldEF0dHJpYnV0ZShcImlkXCIsaWRfbmFtZSlcbiAgICBlbC50ZXh0Q29udGVudCA9IGlubmVydGV4dFxuXG4gICAgcmV0dXJuIGVsXG5cbn1cblxuY29uc3QgYWRkVGFzayA9IGVsZW1lbnRDcmVhdG9yKFwiYWRkVGFza1wiLFwiYnV0dG9uXCIsXCJwcm9qLXRhc2stYnRuXCIsXCJwcm9qLXRhc2stYnRuXCIsXCJBZGQgVGFza1wiKVxuY29uc3QgaG9tZWhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKFwiaG9tZWhlYWRlclwiLFwiaDFcIixcImhvbWVIZWFkZXJcIixcImhvbWVIZWFkaW5nXCIsXCJIb21lXCIpXG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbmZ1bmN0aW9uIHN1YihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlXG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZVxuICAgIHByaW9yaXR5PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgaW5wdXRzKClcbn1cblxuZnVuY3Rpb24gcHJvalN1YihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy90aXRsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbjJcIikudmFsdWVcbiAgICBkdWVEYXRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZTJcIikudmFsdWVcbiAgICBwcmlvcml0eTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHkyXCJdOmNoZWNrZWQnKS52YWx1ZVxuICAgIGNyZWF0ZVByb2plY3RzKHByb2puYW1lY29udClcbn1cblxuZnVuY3Rpb24gcHJvak5hbWUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpLnZhbHVlXG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zKCkge1xuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgZm9yIChsZXQgeD0wIDsgeDwgdG9kb0xpc3QubGVuZ3RoIDt4KyspIHtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zW3hdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgIFxuICAgICAgICBsZXQgZGl2LHpcblxuICAgICAgICBmb3IobGV0IHkgaW4gdG9kb0xpc3RbeF0pIHtcblxuICAgICAgICAgICAgaWYgKCh5ID09PSBcInRpdGxlXCIpIHx8ICh5ID09PSBcImR1ZURhdGVcIikpIHtcblxuICAgICAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IHRvZG9MaXN0W3hdW3ldICsgXCImZW1zcDtcIlxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NbeF0uY2xhc3NMaXN0LmFkZCh0b2RvTGlzdFt4XS50aXRsZSwgXCJob21lLXRvZG9zXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IHRvZG9MaXN0W3hdLnRpdGxlLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICB0b2Rvc1t4XS5jbGFzc0xpc3QuYWRkKHouam9pbignLScpLFwiaG9tZS10b2Rvc1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2Rvc1t4XS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc1t4XSlcbiAgICB9IFxuICAgIFxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2hlY2tlcihhcnIpIHtcblxuICBwcm9qYXJyID0gIGFyci5maWx0ZXIoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IHByb2puYW1lY29udCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamFyclxuXG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGUob2JqLHRhYikge1xuICAgIHJpZ2h0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgaW5kaXZpZHVhbHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvam5hbWVjb250XG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2spXG5cbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGBrZXk6ICR7a2V5fSwgdmFsdWU6ICR7b2JqW2tleV19YClcbiAgICBcbiAgICBcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlcmF0ZShvYmpba2V5XSlcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoKGtleSA9PT0gJ25hbWUnKSB8fCAoa2V5ID09PSAndGl0bGUnKSB8fCAoa2V5ID09PSAnaW5mbycpIHx8IChrZXkgPT09ICdwcmlvcml0eScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoa2V5ID09ICduYW1lJykgJiYgKGtleSAhPT0gdGFiKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9mb3IobGV0IHggPSAwOyB4IDwgT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qaWQgPSBvYmpba2V5XVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbHByb2ouY2xhc3NMaXN0LmFkZChpbmRpdmlkdWFscHJvamlkLCBcInByb2plY3QtdG9kb3NcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGluZGl2aWR1YWxwcm9qaWQuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscHJvamlkID0geC5qb2luKCctJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qLmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbHByb2ppZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7b2JqW2tleV19IDxicj5gXG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRpdmlkdWFscHJvailcblxuXG4gICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfSAgICAgIFxuICAgIClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGUpIHtcbiAgICAvL3Byb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIHByb2pUYWIoZSlcbiAgICBjb25zdCBteWFyciA9IHByb2plY3RDaGVja2VyKG15cHJvamVjdHMpXG5cbiAgICBmb3IgKGxldCB4PTAgOyB4IDwgbXlhcnIubGVuZ3RoIDsgeCsrKSB7XG5cbiAgICAgICAgaXRlcmF0ZShteWFyclt4XSxlKVxuICAgICAgICBcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gcHJvamVjdFBhcnNlcihvYmopIHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGBrZXk6ICR7a2V5fSwgdmFsdWU6ICR7b2JqW2tleV19YClcblxuICAgIGxldCBwcm9qX2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAvL2N1cnJlbnRwcm9qZWN0LmlubmVySFRNTCArPSBgJHtrZXl9ICsgXCIgXCIgKyAke29ialtrZXldfWBcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvamVjdFBhcnNlcihvYmpba2V5XSlcbiAgICAgICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgICAgICBpZigoa2V5ID09PSAnbmFtZScpIHx8IChrZXkgPT09ICdpbmZvJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgLy8gbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCArPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoa2V5KX1gICsgXCI6IFwiICBcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke29ialtrZXldfWBcbiAgICAgICAgICAgICAgICBwcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIC8vcHJval9saW5lLmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgICAgICAgICAgY3VycmVudHByb2plY3QuYXBwZW5kQ2hpbGQocHJval9saW5lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgLyogaWYgKG9ialtrZXldID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RQYXJzZXIob2JqW2tleV0pXG4gICAgfSovXG5cblxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRhc2tQYXJzZXIob2JqKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coYGtleTogJHtrZXl9LCB2YWx1ZTogJHtvYmpba2V5XX1gKVxuICAgICAgICBsZXQgdGFza19saW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFza1BhcnNlcihvYmpba2V5XSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgLy8gbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCArPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoa2V5KX1gICsgXCI6IFwiICBcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke29ialtrZXldfWBcbiAgICAgICAgICAgICAgICB0YXNrX2xpbmUuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIC8vcHJval9saW5lLmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgICAgICAgICAgY3VycmVudHRhc2suYXBwZW5kQ2hpbGQodGFza19saW5lKVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuZnVuY3Rpb24gZmV0Y2hUYXNrcyhlKSB7XG4gICAgbGV0IHRhc2tjbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFxuICAgIGxldCBjdXJyZW50X3RpdGxlID0gdGFza2NsYXNzWzBdXG5cbiAgICBjb25zdCB4ID0gdG9kb0xpc3QuZmlsdGVyKGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICBpZih0YXNrLnRpdGxlID09IGN1cnJlbnRfdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KSBcblxuICAgIGNvbnNvbGUubG9nKHgpXG5cbiAgICB4LmZvckVhY2gob2JqID0+IHRhc2tQYXJzZXIob2JqKSlcblxufVxuXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoZSkge1xuICAgIGxldCBwcm9qY2xhc3NlcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFxuICAgIGNvbnNvbGUubG9nKHByb2pjbGFzc2VzKVxuICAgIGxldCBjdXJyZW50X2Rlc2MgPSBwcm9qY2xhc3Nlc1swXSBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50X2Rlc2MpXG4gICAgY29uc3QgbXlhcnIgPSBwcm9qZWN0Q2hlY2tlcihteXByb2plY3RzKVxuICAgIGNvbnNvbGUubG9nKG15YXJyKVxuICAgIFxuICAgIGNvbnN0IHggPSBteWFyci5maWx0ZXIoZnVuY3Rpb24ocHJvail7XG5cbiAgICAgICAgaWYocHJvai5wcm9qZWN0LmRlc2NyaXB0aW9uID09IGN1cnJlbnRfZGVzYyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3X2Rlc2MgPSBjdXJyZW50X2Rlc2Muc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdfZGVzYylcbiAgICAgICAgICAgIGlmKHByb2oucHJvamVjdC5kZXNjcmlwdGlvbiA9PSBuZXdfZGVzYyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG5cbiAgICBjb25zb2xlLmxvZyh4KVxuXG4gICAgeC5mb3JFYWNoKG9iaiA9PiBwcm9qZWN0UGFyc2VyKG9iaikpXG4gICAgICAgICAgXG4gICAgXG59XG5cbmZ1bmN0aW9uIHByb2pUYWIoZSkge1xuICAgIHJpZ2h0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaG9tZUhlYWRpbmdcIilcbiAgICAvL3Byb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gZS50YXJnZXQuaWRcbiAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2puYW1lY29udFxuICAgIFxuICAgIFxuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIFxuXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpIFxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRUYXNrKVxuXG4gICAgcmV0dXJuIHByb2puYW1lY29udFxuICAgIFxufVxuXG5mdW5jdGlvbiBobWVCdG4oKSB7XG4gICAgcmlnaHRTZWN0aW9uLmlubmVySFRNTCA9IFwiXCJcbiAgICBcbiAgIFxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChob21laGVhZGVyKVxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgIGhvbWVoZWFkZXIuaW5uZXJIVE1MID0gXCJIb21lXCJcbiAgICBkaXNwbGF5VG9kb3MoKVxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrYWRkZXIpXG59XG5cblxuXG5zdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBcbiAgICBzdWIoZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKS5yZXNldCgpXG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXG4gICAgdG9kb2Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIilcbiAgICBkaXNwbGF5VG9kb3MoKVxuXG59KVxuXG5zdWJCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICBwcm9qU3ViKGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRvZG8tZm9ybVwiKS5yZXNldCgpXG4gICAgcHJvamVjdHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpXG4gICAgZGlzcGxheVByb2plY3RzKHByb2puYW1lY29udClcbiAgICBcblxufSApXG5cbnByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qTmFtZShlKVxuICAgIHByb2plY3RUaXRsZSA9IHByb2pOYW1lKGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikucmVzZXQoKVxuICAgIFxuICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicHJvamVjdG5hbWVcIilcbiAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImlkXCIscHJvamVjdFRpdGxlKVxuICAgIG5ld1Byb2ouaW5uZXJIVE1MICs9IHByb2plY3RUaXRsZVxuICAgIHByb2pTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2opXG4gICAgcHJvam5hbWVmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpXG5cbn0pXG5cbmNyZWF0ZXByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qbmFtZWZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImZvcm1cIilcbn0pXG5cbnRhc2thZGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHRvZG9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtXCIpXG59KVxuXG5wcm9qU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RuYW1lJykpIHtcbiAgICAgICAgcHJvam5hbWVjb250ID0gZS50YXJnZXQuaWRcbiAgICAgICAgZGlzcGxheVByb2plY3RzKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9O1xuICB9ICk7XG5cbnJpZ2h0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKSBcbiAgICBpZihlLnRhcmdldC5pZCA9PSBcInByb2otdGFzay1idG5cIikge1xuICAgICAgICBwcm9qZWN0dG9kb2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImZvcm1cIilcbiAgICAgICAgICAgXG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtdG9kb3NcIikpe1xuICAgICAgICBjdXJyZW50cHJvamVjdC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGZldGNoUHJvamVjdChlKVxuICAgIH1cbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lLXRvZG9zXCIpKXtcbiAgICAgICAgY3VycmVudHRhc2suaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBmZXRjaFRhc2tzKGUpXG4gICAgfVxuXG4gIH0gKTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGhtZUJ0bikgXG4gICAgXG4gICAgICBcblxuICBcblxuXG4vKlxucHJvamVjdHRhYi5mb3JFYWNoKChwcm9qKSA9PiB7XG5cbiAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgICAgLy8gcHJvalRhYihlKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGUpXG4gICAgICAgIFxuICAgIH0pXG59KVxuKi9cblxuXG5leHBvcnQge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgLHRpdGxlMiwgZGVzY3JpcHRpb24yLGR1ZURhdGUyLHByaW9yaXR5Mn0iLCJpbXBvcnQge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksdGl0bGUyLCBkZXNjcmlwdGlvbjIsZHVlRGF0ZTIscHJpb3JpdHkyfSBmcm9tICcuL0RPTS5qcydcblxuY29uc3QgdG9kb0xpc3QgPSBbXVxuY29uc3QgbXlwcm9qZWN0cyA9IFtdXG5cbmZ1bmN0aW9uIFByb2plY3RzKG5hbWUscHJvamVjdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgdGhpcy5pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgfVxufVxuXG5jbGFzcyBUb2RvcyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKG5hbWUpIHtcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvcyhuYW1lLCBkZXNjcmlwdGlvbjIsZHVlRGF0ZTIscHJpb3JpdHkyKVxuICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdHMobmFtZSx0b2RvKVxuICAgIG15cHJvamVjdHMucHVzaChwcm9qKVxuICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUpXG4gICAgY29uc29sZS5sb2cocHJvailcbiAgICBjb25zb2xlLmxvZyhteXByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBpbnB1dHMoKSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3ModGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSlcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pXG4gICAgXG4gICAgXG59XG5cblxuXG5cbmV4cG9ydCB7aW5wdXRzLGNyZWF0ZVByb2plY3RzLG15cHJvamVjdHMsIHRvZG9MaXN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge2Rpc3BsYXlUb2RvcyxpbnB1dHMsdG9kb0xpc3R9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuaW1wb3J0IHtzdWJ9IGZyb20gXCIuL0RPTS5qc1wiXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9