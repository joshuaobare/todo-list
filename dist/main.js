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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n#container {\n    display: flex;\n    color: #D92121;\n    flex-direction: column;\n}\n\n#main {\n    display: flex;\n}\n\n#rightSection {\n    flex-grow:4;\n    border: 2px solid black;\n    padding-left: 10px;\n}\n\n#header {\n    background-color: black; \n    color: gold;\n}\n.todo-form , .project-todo-form{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    width: 100px;\n    color: blue;\n}\n\n.form {\n    display: none;\n}\n\n.projectname , .home {\n    cursor: pointer;\n}\n\n.projectname {\n    margin-left: 20px;\n    font-size: 1.25em;\n}\n\n.projectname:hover, .home:hover {\n    transform: scale(1.05);\n}\n\n#navBar {\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    width: 200px;\n    padding: 10px;\n   \n\n}\n\n.navbar-title {\n    font-size: 1.5em;\n    color: black;\n\n}\n\n#header > h1 {\n    text-align: center;\n    font-size: 3em ;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 10px;\n}\n\n.home-todos, .project-todos {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.home-todos:hover, .project-todos:hover {\n    cursor: pointer;\n    background-color: rgb(0, 0, 0,10%);\n    \n    border-radius: 5px;\n}\n\n#currentproject {\n    display: flex;\n    flex-direction: column;\n}\n\n#delbtn {\n    align-self: flex-start;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;;AAEhB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kCAAkC;;IAElC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["body {\n    margin: 0;\n}\n#container {\n    display: flex;\n    color: #D92121;\n    flex-direction: column;\n}\n\n#main {\n    display: flex;\n}\n\n#rightSection {\n    flex-grow:4;\n    border: 2px solid black;\n    padding-left: 10px;\n}\n\n#header {\n    background-color: black; \n    color: gold;\n}\n.todo-form , .project-todo-form{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    width: 100px;\n    color: blue;\n}\n\n.form {\n    display: none;\n}\n\n.projectname , .home {\n    cursor: pointer;\n}\n\n.projectname {\n    margin-left: 20px;\n    font-size: 1.25em;\n}\n\n.projectname:hover, .home:hover {\n    transform: scale(1.05);\n}\n\n#navBar {\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    width: 200px;\n    padding: 10px;\n   \n\n}\n\n.navbar-title {\n    font-size: 1.5em;\n    color: black;\n\n}\n\n#header > h1 {\n    text-align: center;\n    font-size: 3em ;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 10px;\n}\n\n.home-todos, .project-todos {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.home-todos:hover, .project-todos:hover {\n    cursor: pointer;\n    background-color: rgb(0, 0, 0,10%);\n    \n    border-radius: 5px;\n}\n\n#currentproject {\n    display: flex;\n    flex-direction: column;\n}\n\n#delbtn {\n    align-self: flex-start;\n}"],"sourceRoot":""}]);
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
let delbtn = document.createElement("button")
delbtn.innerHTML = "x"
delbtn.id = "delbtn"

let taskdelbtn = document.createElement("button")
taskdelbtn.innerHTML = "x"
taskdelbtn.id = "taskdelbtn"

let projprioritybtn = document.createElement("button")
projprioritybtn.innerHTML = "Priority"
projprioritybtn.id = "projprioritybtn"

let taskprioritybtn = document.createElement("button")
taskprioritybtn.innerHTML = "Priority"
taskprioritybtn.id = "taskprioritybtn"

function elementCreator(el,type,class_name,id_name,innertext) {
    el = document.createElement(type)
    el.classList.add(class_name)
    el.setAttribute("id",id_name)
    el.textContent = innertext

    return el

}

const addTask = elementCreator("addTask","button","proj-task-btn","proj-task-btn","Add Task")
const homeheader = elementCreator("homeheader","h1","homeHeader","homeHeading","Home")
//const delbtn = elementCreator("delbtn","button","delbtn","delbtn","X")


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

function projectPriority(e) {
    
    const index = _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.findIndex((proj) => {
        return proj.project.description == e.target.classList
    })
    console.log(e.target.classList)
    console.log(index)
    console.log(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects[index])

    if(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects[index].project.priority === "High Priority") {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects[index].project.priority = "Low Priority"
    }

    else if(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects[index].project.priority === "Low Priority") {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects[index].project.priority = "High Priority"
    }

}

function taskPriority(e) {
    const index = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList.findIndex((proj) => {
        return proj.title == e.target.classList
    })

    if(_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[index].priority === "High Priority") {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[index].priority = "Low Priority"
    }

    else if(_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[index].priority === "Low Priority") {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList[index].priority = "High Priority"
    }

}

function iterate(obj,tab) {
    rightSection.innerHTML = ""
    individualproj = document.createElement('div')
    projectHeader.innerHTML = projnamecont
    const delProj = elementCreator("delProj","button",projnamecont,"delProj","Delete Project")
        
    rightSection.appendChild(projectHeader)
    rightSection.appendChild(projectContainer)
    
    rightSection.appendChild(addTask)
    rightSection.appendChild(delProj)

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

function deleteProjects(e){

    const index = _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.findIndex((proj) =>{
        return proj.project.description == e.target.classList
    })

    console.log(index)
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.splice(index,1)
    console.log(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects)

}

function deleteTasks(e) {

    let x = e.target.className
    console.log(x)
    const index = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList.findIndex((proj) => {
        return proj.title === x
    })

    console.log(index)
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index,1)
    console.log(_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoList)
}

function deleteProjCont(e) {
    
    console.log(e.target.className)
    const arr = _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.filter((proj) => {
        if (proj.name === e.target.className) {
            
            return true
        }
    })

    
    console.log(arr)

    arr.forEach((proj) => {
        const index = _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.indexOf(proj)
        console.log(index)
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects.splice(index,1)
    })

   
    console.log(_controller_js__WEBPACK_IMPORTED_MODULE_0__.myprojects)
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
                if((key ==='description')){
                    delbtn.className = ""
                    projprioritybtn.className = ""

                    try {
                        delbtn.classList.add(obj[key])
                        projprioritybtn.classList.add(obj[key])
                    }
                    catch {
                        let x = obj[key].split()
                        let new_class = x.join('-')
                        delbtn.classList.add(new_class)
                        projprioritybtn.classList.add(new_class)
                    }
                     
                    
                }

                

                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                proj_line.appendChild(div)
                //proj_line.appendChild(div2)
                proj_line.appendChild(delbtn)
                proj_line.appendChild(projprioritybtn)
                currentproject.appendChild(proj_line)
                
            }
            
            
        
    }
    
   /* if (obj[key] === project) {
        projectParser(obj[key])
    }*/


    })
    
    //currentproject.appendChild(delbtn)
}

function taskParser(obj) {
    Object.keys(obj).forEach(key => {

        console.log(`key: ${key}, value: ${obj[key]}`)
        let task_line = document.createElement("div")

        if (typeof obj[key] === 'object' && obj[key] !== null) {
                taskParser(obj[key])
            }

        else {
                if((key === 'title')) {
                    // className is emptied for when tasks are being deleted, as it would alter the classList array indices

                    taskdelbtn.className = ""
                    taskprioritybtn.className = ""

                    try {
                        taskdelbtn.classList.add(obj[key])
                        taskprioritybtn.classList.add(obj[key])
                    }

                    catch {
                        let x = obj[key].split(" ")
                        let new_class = x.join("-")
                        taskdelbtn.classList.add(new_class)
                        taskprioritybtn.classList.add(new_class)
                    }
                    
                }

                
                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                task_line.appendChild(div)
                //proj_line.appendChild(div2)
                task_line.appendChild(taskdelbtn)
                task_line.appendChild(taskprioritybtn)
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

        else {
            let new_title = current_title.split("-").join(" ")
            console.log(new_title)
            if(task.title == new_title){
                return true
            }
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
        const delProj = elementCreator("delProj","button",projnamecont,"delProj","Delete Project")
        
        displayProjects(e);
        rightSection.appendChild(delProj)
                       
    };
  } );

  function removeProj(e) {
    const projdivs = document.querySelectorAll(".projectname")
    console.log(projdivs)
    console.log(e.target.className)
    projdivs.forEach((div) => {
        if(div.innerHTML === e.target.className) {
            console.log(div)
            div.remove()
        }
    })}

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
    if(e.target.id == "delProj"){
        deleteProjCont(e)
        hmeBtn()
        removeProj(e)
    }

  } );




home.addEventListener("click",hmeBtn) 
    
currentproject.addEventListener('click', function(e){
    if(e.target.id == "delbtn") {
        deleteProjects(e)
        displayProjects(e)
        currentproject.innerHTML = ""
    }
    if(e.target.id == "projprioritybtn") {
        projectPriority(e)
        currentproject.innerHTML = ""
        fetchProject(e)
    }
})

currenttask.addEventListener('click',function(e){
    if(e.target.id == "taskdelbtn") {
        deleteTasks(e)
        displayTodos(e)
        currenttask.innerHTML = ""
    }

    if(e.target.id == "taskprioritybtn") {
        taskPriority(e)
        currenttask.innerHTML = ""
        fetchTasks(e)
    }

    

})

  


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNEQUFVO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7Ozs7O0FBS0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFtQnNHOztBQUV0RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLGlEQUFZLENBQUMsNkNBQVEsQ0FBQyw4Q0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsMENBQUssQ0FBQyxnREFBVyxDQUFDLDRDQUFPLENBQUMsNkNBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O1VDckNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUN3QztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI0Q5MjEyMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmlnaHRTZWN0aW9uIHtcXG4gICAgZmxleC1ncm93OjQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXFxuICAgIGNvbG9yOiBnb2xkO1xcbn1cXG4udG9kby1mb3JtICwgLnByb2plY3QtdG9kby1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdG5hbWUgLCAuaG9tZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RuYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4ucHJvamVjdG5hbWU6aG92ZXIsIC5ob21lOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI25hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgXFxuXFxufVxcblxcbi5uYXZiYXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzZW0gO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmhvbWUtdG9kb3MsIC5wcm9qZWN0LXRvZG9zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaG9tZS10b2Rvczpob3ZlciwgLnByb2plY3QtdG9kb3M6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDEwJSk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjdXJyZW50cHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkZWxidG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQzs7SUFFbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNEOTIxMjE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0U2VjdGlvbiB7XFxuICAgIGZsZXgtZ3Jvdzo0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgICBjb2xvcjogZ29sZDtcXG59XFxuLnRvZG8tZm9ybSAsIC5wcm9qZWN0LXRvZG8tZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RuYW1lICwgLmhvbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0bmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLnByb2plY3RuYW1lOmhvdmVyLCAuaG9tZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNuYXZCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgIFxcblxcbn1cXG5cXG4ubmF2YmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtIDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ob21lLXRvZG9zLCAucHJvamVjdC10b2RvcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvbWUtdG9kb3M6aG92ZXIsIC5wcm9qZWN0LXRvZG9zOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwxMCUpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY3VycmVudHByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGVsYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2lucHV0cyx0b2RvTGlzdCxteXByb2plY3RzLGNyZWF0ZVByb2plY3RzfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCJcblxubGV0IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkscHJvam5hbWVjb250LHByb2phcnIgLCBpbmRpdmlkdWFscHJvaiwgaW5kaXZpZHVhbHByb2ppZFxubGV0IHRpdGxlMiwgZGVzY3JpcHRpb24yLGR1ZURhdGUyLHByaW9yaXR5MiwgcHJvamVjdCAsIHByb2plY3RUaXRsZVxuXG5jb25zdCB0b2RvcyA9IFtdXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Q29udGFpbmVyXCIpXG5jb25zdCByaWdodFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0U2VjdGlvblwiKVxuY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZvcm0tc3VibWl0XCIpXG5jb25zdCBzdWJCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRvZG8tZm9ybS1zdWJtaXRcIilcbmNvbnN0IGN1cnJlbnRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50cHJvamVjdFwiKVxuY29uc3QgY3VycmVudHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnR0YXNrXCIpXG5jb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXN1Ym1pdFwiKVxuY29uc3QgcHJvalNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWN0aW9uXCIpXG5jb25zdCBjcmVhdGVwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVwcm9qZWN0XCIpXG5jb25zdCBwcm9qbmFtZWZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2otbmFtZS1mb3JtXCIpXG5jb25zdCB0YXNrYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHRhc2tcIilcbmNvbnN0IHRvZG9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWZvcm1cIilcbmNvbnN0IHByb2plY3R0b2RvZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Vjb25kYXJ5LWZvcm1cIilcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIilcbi8vY29uc3QgaG9tZWhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZUhlYWRpbmdcIilcbmNvbnN0IHByb2plY3R0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RuYW1lXCIpXG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG5sZXQgZGVsYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuZGVsYnRuLmlubmVySFRNTCA9IFwieFwiXG5kZWxidG4uaWQgPSBcImRlbGJ0blwiXG5cbmxldCB0YXNrZGVsYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxudGFza2RlbGJ0bi5pbm5lckhUTUwgPSBcInhcIlxudGFza2RlbGJ0bi5pZCA9IFwidGFza2RlbGJ0blwiXG5cbmxldCBwcm9qcHJpb3JpdHlidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5wcm9qcHJpb3JpdHlidG4uaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiXG5wcm9qcHJpb3JpdHlidG4uaWQgPSBcInByb2pwcmlvcml0eWJ0blwiXG5cbmxldCB0YXNrcHJpb3JpdHlidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG50YXNrcHJpb3JpdHlidG4uaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiXG50YXNrcHJpb3JpdHlidG4uaWQgPSBcInRhc2twcmlvcml0eWJ0blwiXG5cbmZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKGVsLHR5cGUsY2xhc3NfbmFtZSxpZF9uYW1lLGlubmVydGV4dCkge1xuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NfbmFtZSlcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGlkX25hbWUpXG4gICAgZWwudGV4dENvbnRlbnQgPSBpbm5lcnRleHRcblxuICAgIHJldHVybiBlbFxuXG59XG5cbmNvbnN0IGFkZFRhc2sgPSBlbGVtZW50Q3JlYXRvcihcImFkZFRhc2tcIixcImJ1dHRvblwiLFwicHJvai10YXNrLWJ0blwiLFwicHJvai10YXNrLWJ0blwiLFwiQWRkIFRhc2tcIilcbmNvbnN0IGhvbWVoZWFkZXIgPSBlbGVtZW50Q3JlYXRvcihcImhvbWVoZWFkZXJcIixcImgxXCIsXCJob21lSGVhZGVyXCIsXCJob21lSGVhZGluZ1wiLFwiSG9tZVwiKVxuLy9jb25zdCBkZWxidG4gPSBlbGVtZW50Q3JlYXRvcihcImRlbGJ0blwiLFwiYnV0dG9uXCIsXCJkZWxidG5cIixcImRlbGJ0blwiLFwiWFwiKVxuXG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbmZ1bmN0aW9uIHN1YihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlXG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZVxuICAgIHByaW9yaXR5PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgaW5wdXRzKClcbn1cblxuZnVuY3Rpb24gcHJvalN1YihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy90aXRsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbjJcIikudmFsdWVcbiAgICBkdWVEYXRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZTJcIikudmFsdWVcbiAgICBwcmlvcml0eTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHkyXCJdOmNoZWNrZWQnKS52YWx1ZVxuICAgIGNyZWF0ZVByb2plY3RzKHByb2puYW1lY29udClcbn1cblxuZnVuY3Rpb24gcHJvak5hbWUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpLnZhbHVlXG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zKCkge1xuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgZm9yIChsZXQgeD0wIDsgeDwgdG9kb0xpc3QubGVuZ3RoIDt4KyspIHtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zW3hdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgIFxuICAgICAgICBsZXQgZGl2LHpcblxuICAgICAgICBmb3IobGV0IHkgaW4gdG9kb0xpc3RbeF0pIHtcblxuICAgICAgICAgICAgaWYgKCh5ID09PSBcInRpdGxlXCIpIHx8ICh5ID09PSBcImR1ZURhdGVcIikpIHtcblxuICAgICAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IHRvZG9MaXN0W3hdW3ldICsgXCImZW1zcDtcIlxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NbeF0uY2xhc3NMaXN0LmFkZCh0b2RvTGlzdFt4XS50aXRsZSwgXCJob21lLXRvZG9zXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IHRvZG9MaXN0W3hdLnRpdGxlLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICB0b2Rvc1t4XS5jbGFzc0xpc3QuYWRkKHouam9pbignLScpLFwiaG9tZS10b2Rvc1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2Rvc1t4XS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc1t4XSlcbiAgICB9IFxuICAgIFxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2hlY2tlcihhcnIpIHtcblxuICBwcm9qYXJyID0gIGFyci5maWx0ZXIoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IHByb2puYW1lY29udCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamFyclxuXG59XG5cbmZ1bmN0aW9uIHByb2plY3RQcmlvcml0eShlKSB7XG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBteXByb2plY3RzLmZpbmRJbmRleCgocHJvaikgPT4ge1xuICAgICAgICByZXR1cm4gcHJvai5wcm9qZWN0LmRlc2NyaXB0aW9uID09IGUudGFyZ2V0LmNsYXNzTGlzdFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0KVxuICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgIGNvbnNvbGUubG9nKG15cHJvamVjdHNbaW5kZXhdKVxuXG4gICAgaWYobXlwcm9qZWN0c1tpbmRleF0ucHJvamVjdC5wcmlvcml0eSA9PT0gXCJIaWdoIFByaW9yaXR5XCIpIHtcbiAgICAgICAgbXlwcm9qZWN0c1tpbmRleF0ucHJvamVjdC5wcmlvcml0eSA9IFwiTG93IFByaW9yaXR5XCJcbiAgICB9XG5cbiAgICBlbHNlIGlmKG15cHJvamVjdHNbaW5kZXhdLnByb2plY3QucHJpb3JpdHkgPT09IFwiTG93IFByaW9yaXR5XCIpIHtcbiAgICAgICAgbXlwcm9qZWN0c1tpbmRleF0ucHJvamVjdC5wcmlvcml0eSA9IFwiSGlnaCBQcmlvcml0eVwiXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHRhc2tQcmlvcml0eShlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgoKHByb2opID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2oudGl0bGUgPT0gZS50YXJnZXQuY2xhc3NMaXN0XG4gICAgfSlcblxuICAgIGlmKHRvZG9MaXN0W2luZGV4XS5wcmlvcml0eSA9PT0gXCJIaWdoIFByaW9yaXR5XCIpIHtcbiAgICAgICAgdG9kb0xpc3RbaW5kZXhdLnByaW9yaXR5ID0gXCJMb3cgUHJpb3JpdHlcIlxuICAgIH1cblxuICAgIGVsc2UgaWYodG9kb0xpc3RbaW5kZXhdLnByaW9yaXR5ID09PSBcIkxvdyBQcmlvcml0eVwiKSB7XG4gICAgICAgIHRvZG9MaXN0W2luZGV4XS5wcmlvcml0eSA9IFwiSGlnaCBQcmlvcml0eVwiXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGUob2JqLHRhYikge1xuICAgIHJpZ2h0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgaW5kaXZpZHVhbHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvam5hbWVjb250XG4gICAgY29uc3QgZGVsUHJvaiA9IGVsZW1lbnRDcmVhdG9yKFwiZGVsUHJvalwiLFwiYnV0dG9uXCIscHJvam5hbWVjb250LFwiZGVsUHJvalwiLFwiRGVsZXRlIFByb2plY3RcIilcbiAgICAgICAgXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2spXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlbFByb2opXG5cbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGBrZXk6ICR7a2V5fSwgdmFsdWU6ICR7b2JqW2tleV19YClcbiAgICBcbiAgICBcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlcmF0ZShvYmpba2V5XSlcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoKGtleSA9PT0gJ25hbWUnKSB8fCAoa2V5ID09PSAndGl0bGUnKSB8fCAoa2V5ID09PSAnaW5mbycpIHx8IChrZXkgPT09ICdwcmlvcml0eScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoa2V5ID09ICduYW1lJykgJiYgKGtleSAhPT0gdGFiKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9mb3IobGV0IHggPSAwOyB4IDwgT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qaWQgPSBvYmpba2V5XVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbHByb2ouY2xhc3NMaXN0LmFkZChpbmRpdmlkdWFscHJvamlkLCBcInByb2plY3QtdG9kb3NcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGluZGl2aWR1YWxwcm9qaWQuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscHJvamlkID0geC5qb2luKCctJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qLmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbHByb2ppZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7b2JqW2tleV19IDxicj5gXG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRpdmlkdWFscHJvailcblxuXG4gICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfSAgICAgIFxuICAgIClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdHMoZSl7XG5cbiAgICBjb25zdCBpbmRleCA9IG15cHJvamVjdHMuZmluZEluZGV4KChwcm9qKSA9PntcbiAgICAgICAgcmV0dXJuIHByb2oucHJvamVjdC5kZXNjcmlwdGlvbiA9PSBlLnRhcmdldC5jbGFzc0xpc3RcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgbXlwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSlcbiAgICBjb25zb2xlLmxvZyhteXByb2plY3RzKVxuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzKGUpIHtcblxuICAgIGxldCB4ID0gZS50YXJnZXQuY2xhc3NOYW1lXG4gICAgY29uc29sZS5sb2coeClcbiAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCgocHJvaikgPT4ge1xuICAgICAgICByZXR1cm4gcHJvai50aXRsZSA9PT0geFxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsMSlcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvakNvbnQoZSkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTmFtZSlcbiAgICBjb25zdCBhcnIgPSBteXByb2plY3RzLmZpbHRlcigocHJvaikgPT4ge1xuICAgICAgICBpZiAocHJvai5uYW1lID09PSBlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhhcnIpXG5cbiAgICBhcnIuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IG15cHJvamVjdHMuaW5kZXhPZihwcm9qKVxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgbXlwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSlcbiAgICB9KVxuXG4gICBcbiAgICBjb25zb2xlLmxvZyhteXByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoZSkge1xuICAgIC8vcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG4gICAgcHJvalRhYihlKVxuICAgIGNvbnN0IG15YXJyID0gcHJvamVjdENoZWNrZXIobXlwcm9qZWN0cylcblxuICAgIGZvciAobGV0IHg9MCA7IHggPCBteWFyci5sZW5ndGggOyB4KyspIHtcblxuICAgICAgICBpdGVyYXRlKG15YXJyW3hdLGUpXG4gICAgICAgIFxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBwcm9qZWN0UGFyc2VyKG9iaikge1xuICAgIFxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coYGtleTogJHtrZXl9LCB2YWx1ZTogJHtvYmpba2V5XX1gKVxuXG4gICAgbGV0IHByb2pfbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICBcbiAgICAvL2N1cnJlbnRwcm9qZWN0LmlubmVySFRNTCArPSBgJHtrZXl9ICsgXCIgXCIgKyAke29ialtrZXldfWBcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvamVjdFBhcnNlcihvYmpba2V5XSlcbiAgICAgICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgICAgICBpZigoa2V5ID09PSAnbmFtZScpIHx8IChrZXkgPT09ICdpbmZvJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKChrZXkgPT09J2Rlc2NyaXB0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICBkZWxidG4uY2xhc3NOYW1lID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBwcm9qcHJpb3JpdHlidG4uY2xhc3NOYW1lID0gXCJcIlxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxidG4uY2xhc3NMaXN0LmFkZChvYmpba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pwcmlvcml0eWJ0bi5jbGFzc0xpc3QuYWRkKG9ialtrZXldKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gb2JqW2tleV0uc3BsaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld19jbGFzcyA9IHguam9pbignLScpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxidG4uY2xhc3NMaXN0LmFkZChuZXdfY2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qcHJpb3JpdHlidG4uY2xhc3NMaXN0LmFkZChuZXdfY2xhc3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAvLyBsZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihrZXkpfWAgKyBcIjogXCIgIFxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgKz0gYCR7b2JqW2tleV19YFxuICAgICAgICAgICAgICAgIHByb2pfbGluZS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgLy9wcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgICAgICAgICBwcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGVsYnRuKVxuICAgICAgICAgICAgICAgIHByb2pfbGluZS5hcHBlbmRDaGlsZChwcm9qcHJpb3JpdHlidG4pXG4gICAgICAgICAgICAgICAgY3VycmVudHByb2plY3QuYXBwZW5kQ2hpbGQocHJval9saW5lKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgLyogaWYgKG9ialtrZXldID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RQYXJzZXIob2JqW2tleV0pXG4gICAgfSovXG5cblxuICAgIH0pXG4gICAgXG4gICAgLy9jdXJyZW50cHJvamVjdC5hcHBlbmRDaGlsZChkZWxidG4pXG59XG5cbmZ1bmN0aW9uIHRhc2tQYXJzZXIob2JqKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coYGtleTogJHtrZXl9LCB2YWx1ZTogJHtvYmpba2V5XX1gKVxuICAgICAgICBsZXQgdGFza19saW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFza1BhcnNlcihvYmpba2V5XSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZigoa2V5ID09PSAndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWUgaXMgZW1wdGllZCBmb3Igd2hlbiB0YXNrcyBhcmUgYmVpbmcgZGVsZXRlZCwgYXMgaXQgd291bGQgYWx0ZXIgdGhlIGNsYXNzTGlzdCBhcnJheSBpbmRpY2VzXG5cbiAgICAgICAgICAgICAgICAgICAgdGFza2RlbGJ0bi5jbGFzc05hbWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRhc2twcmlvcml0eWJ0bi5jbGFzc05hbWUgPSBcIlwiXG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tkZWxidG4uY2xhc3NMaXN0LmFkZChvYmpba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2twcmlvcml0eWJ0bi5jbGFzc0xpc3QuYWRkKG9ialtrZXldKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBvYmpba2V5XS5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdfY2xhc3MgPSB4LmpvaW4oXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrZGVsYnRuLmNsYXNzTGlzdC5hZGQobmV3X2NsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3ByaW9yaXR5YnRuLmNsYXNzTGlzdC5hZGQobmV3X2NsYXNzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAvLyBsZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihrZXkpfWAgKyBcIjogXCIgIFxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgKz0gYCR7b2JqW2tleV19YFxuICAgICAgICAgICAgICAgIHRhc2tfbGluZS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgLy9wcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgICAgICAgICB0YXNrX2xpbmUuYXBwZW5kQ2hpbGQodGFza2RlbGJ0bilcbiAgICAgICAgICAgICAgICB0YXNrX2xpbmUuYXBwZW5kQ2hpbGQodGFza3ByaW9yaXR5YnRuKVxuICAgICAgICAgICAgICAgIGN1cnJlbnR0YXNrLmFwcGVuZENoaWxkKHRhc2tfbGluZSlcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbmZ1bmN0aW9uIGZldGNoVGFza3MoZSkge1xuICAgIGxldCB0YXNrY2xhc3MgPSBlLnRhcmdldC5jbGFzc0xpc3RcbiAgICBsZXQgY3VycmVudF90aXRsZSA9IHRhc2tjbGFzc1swXVxuXG4gICAgY29uc3QgeCA9IHRvZG9MaXN0LmZpbHRlcihmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgaWYodGFzay50aXRsZSA9PSBjdXJyZW50X3RpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3X3RpdGxlID0gY3VycmVudF90aXRsZS5zcGxpdChcIi1cIikuam9pbihcIiBcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld190aXRsZSlcbiAgICAgICAgICAgIGlmKHRhc2sudGl0bGUgPT0gbmV3X3RpdGxlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkgXG5cbiAgICBjb25zb2xlLmxvZyh4KVxuXG4gICAgeC5mb3JFYWNoKG9iaiA9PiB0YXNrUGFyc2VyKG9iaikpXG5cbn1cblxuZnVuY3Rpb24gZmV0Y2hQcm9qZWN0KGUpIHtcbiAgICBsZXQgcHJvamNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3RcbiAgICBjb25zb2xlLmxvZyhwcm9qY2xhc3NlcylcbiAgICBsZXQgY3VycmVudF9kZXNjID0gcHJvamNsYXNzZXNbMF0gXG4gICAgY29uc29sZS5sb2coY3VycmVudF9kZXNjKVxuICAgIGNvbnN0IG15YXJyID0gcHJvamVjdENoZWNrZXIobXlwcm9qZWN0cylcbiAgICBjb25zb2xlLmxvZyhteWFycilcbiAgICBcbiAgICBjb25zdCB4ID0gbXlhcnIuZmlsdGVyKGZ1bmN0aW9uKHByb2ope1xuXG4gICAgICAgIGlmKHByb2oucHJvamVjdC5kZXNjcmlwdGlvbiA9PSBjdXJyZW50X2Rlc2Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld19kZXNjID0gY3VycmVudF9kZXNjLnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2Rlc2MpXG4gICAgICAgICAgICBpZihwcm9qLnByb2plY3QuZGVzY3JpcHRpb24gPT0gbmV3X2Rlc2Mpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuXG4gICAgY29uc29sZS5sb2coeClcblxuICAgIHguZm9yRWFjaChvYmogPT4gcHJvamVjdFBhcnNlcihvYmopKVxuICAgICAgICAgIFxuICAgIFxufVxuXG5mdW5jdGlvbiBwcm9qVGFiKGUpIHtcbiAgICByaWdodFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIlxuICAgIFxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhvbWVIZWFkaW5nXCIpXG4gICAgLy9wcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IGUudGFyZ2V0LmlkXG4gICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBwcm9qbmFtZWNvbnRcbiAgICBcbiAgICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBcblxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKSBcbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFzaylcblxuICAgIHJldHVybiBwcm9qbmFtZWNvbnRcbiAgICBcbn1cblxuZnVuY3Rpb24gaG1lQnRuKCkge1xuICAgIHJpZ2h0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgXG4gICBcbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZWhlYWRlcilcbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgICBob21laGVhZGVyLmlubmVySFRNTCA9IFwiSG9tZVwiXG4gICAgZGlzcGxheVRvZG9zKClcbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza2FkZGVyKVxufVxuXG5cblxuc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgc3ViKGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm1cIikucmVzZXQoKVxuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KVxuICAgIHRvZG9mb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpXG4gICAgZGlzcGxheVRvZG9zKClcblxufSlcblxuc3ViQnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgcHJvalN1YihlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10b2RvLWZvcm1cIikucmVzZXQoKVxuICAgIHByb2plY3R0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKVxuICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qbmFtZWNvbnQpXG4gICAgXG5cbn0gKVxuXG5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvak5hbWUoZSlcbiAgICBwcm9qZWN0VGl0bGUgPSBwcm9qTmFtZShlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpLnJlc2V0KClcbiAgICBcbiAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2plY3RuYW1lXCIpXG4gICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLHByb2plY3RUaXRsZSlcbiAgICBuZXdQcm9qLmlubmVySFRNTCArPSBwcm9qZWN0VGl0bGVcbiAgICBwcm9qU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qKVxuICAgIHByb2puYW1lZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKVxuXG59KVxuXG5jcmVhdGVwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvam5hbWVmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtXCIpXG59KVxuXG50YXNrYWRkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICB0b2RvZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybVwiKVxufSlcblxucHJvalNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0bmFtZScpKSB7XG4gICAgICAgIHByb2puYW1lY29udCA9IGUudGFyZ2V0LmlkXG4gICAgICAgIGNvbnN0IGRlbFByb2ogPSBlbGVtZW50Q3JlYXRvcihcImRlbFByb2pcIixcImJ1dHRvblwiLHByb2puYW1lY29udCxcImRlbFByb2pcIixcIkRlbGV0ZSBQcm9qZWN0XCIpXG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZSk7XG4gICAgICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChkZWxQcm9qKVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9O1xuICB9ICk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvaihlKSB7XG4gICAgY29uc3QgcHJvamRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RuYW1lXCIpXG4gICAgY29uc29sZS5sb2cocHJvamRpdnMpXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NOYW1lKVxuICAgIHByb2pkaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBpZihkaXYuaW5uZXJIVE1MID09PSBlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdilcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfSl9XG5cbnJpZ2h0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKSBcbiAgICBpZihlLnRhcmdldC5pZCA9PSBcInByb2otdGFzay1idG5cIikge1xuICAgICAgICBwcm9qZWN0dG9kb2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImZvcm1cIilcbiAgICAgICAgICAgXG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtdG9kb3NcIikpe1xuICAgICAgICBjdXJyZW50cHJvamVjdC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGZldGNoUHJvamVjdChlKVxuICAgIH1cbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lLXRvZG9zXCIpKXtcbiAgICAgICAgY3VycmVudHRhc2suaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBmZXRjaFRhc2tzKGUpXG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmlkID09IFwiZGVsUHJvalwiKXtcbiAgICAgICAgZGVsZXRlUHJvakNvbnQoZSlcbiAgICAgICAgaG1lQnRuKClcbiAgICAgICAgcmVtb3ZlUHJvaihlKVxuICAgIH1cblxuICB9ICk7XG5cblxuXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaG1lQnRuKSBcbiAgICBcbmN1cnJlbnRwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgaWYoZS50YXJnZXQuaWQgPT0gXCJkZWxidG5cIikge1xuICAgICAgICBkZWxldGVQcm9qZWN0cyhlKVxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZSlcbiAgICAgICAgY3VycmVudHByb2plY3QuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cbiAgICBpZihlLnRhcmdldC5pZCA9PSBcInByb2pwcmlvcml0eWJ0blwiKSB7XG4gICAgICAgIHByb2plY3RQcmlvcml0eShlKVxuICAgICAgICBjdXJyZW50cHJvamVjdC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGZldGNoUHJvamVjdChlKVxuICAgIH1cbn0pXG5cbmN1cnJlbnR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBpZihlLnRhcmdldC5pZCA9PSBcInRhc2tkZWxidG5cIikge1xuICAgICAgICBkZWxldGVUYXNrcyhlKVxuICAgICAgICBkaXNwbGF5VG9kb3MoZSlcbiAgICAgICAgY3VycmVudHRhc2suaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIGlmKGUudGFyZ2V0LmlkID09IFwidGFza3ByaW9yaXR5YnRuXCIpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5KGUpXG4gICAgICAgIGN1cnJlbnR0YXNrLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgZmV0Y2hUYXNrcyhlKVxuICAgIH1cblxuICAgIFxuXG59KVxuXG4gIFxuXG5cbi8qXG5wcm9qZWN0dGFiLmZvckVhY2goKHByb2opID0+IHtcblxuICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBcbiAgICAgICAvLyBwcm9qVGFiKGUpXG4gICAgICAgIC8vY29uc29sZS5sb2coZSlcbiAgICAgICAgXG4gICAgfSlcbn0pXG4qL1xuXG5cbmV4cG9ydCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSAsdGl0bGUyLCBkZXNjcmlwdGlvbjIsZHVlRGF0ZTIscHJpb3JpdHkyfSIsImltcG9ydCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSx0aXRsZTIsIGRlc2NyaXB0aW9uMixkdWVEYXRlMixwcmlvcml0eTJ9IGZyb20gJy4vRE9NLmpzJ1xuXG5jb25zdCB0b2RvTGlzdCA9IFtdXG5jb25zdCBteXByb2plY3RzID0gW11cblxuZnVuY3Rpb24gUHJvamVjdHMobmFtZSxwcm9qZWN0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB0aGlzLmluZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcbiAgICB9XG59XG5cbmNsYXNzIFRvZG9zIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMobmFtZSkge1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG9zKG5hbWUsIGRlc2NyaXB0aW9uMixkdWVEYXRlMixwcmlvcml0eTIpXG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0cyhuYW1lLHRvZG8pXG4gICAgbXlwcm9qZWN0cy5wdXNoKHByb2opXG4gICAgY29uc29sZS5sb2codG9kby50aXRsZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qKVxuICAgIGNvbnNvbGUubG9nKG15cHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGlucHV0cygpIHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KVxuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbylcbiAgICBcbiAgICBcbn1cblxuXG5cblxuZXhwb3J0IHtpbnB1dHMsY3JlYXRlUHJvamVjdHMsbXlwcm9qZWN0cywgdG9kb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7ZGlzcGxheVRvZG9zLGlucHV0cyx0b2RvTGlzdH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiXG5pbXBvcnQge3N1Yn0gZnJvbSBcIi4vRE9NLmpzXCJcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=