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
                    delbtn.classList.add(obj[key]) 
                    
                }

                

                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                proj_line.appendChild(div)
                //proj_line.appendChild(div2)
                proj_line.appendChild(delbtn)
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
                    taskdelbtn.classList.add(obj[key])
                }

                
                let div = document.createElement("div")
               // let div2 = document.createElement("div")
                div.innerHTML += `${capitalizeFirstLetter(key)}` + ": "  
                div.innerHTML += `${obj[key]}`
                task_line.appendChild(div)
                //proj_line.appendChild(div2)
                task_line.appendChild(taskdelbtn)
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
    
currentproject.addEventListener('click', function(e){
    if(e.target.id == "delbtn") {
        deleteProjects(e)
        displayProjects(e)
        currentproject.innerHTML = ""
    }
})

currenttask.addEventListener('click',function(e){
    if(e.target.id == "taskdelbtn") {
        deleteTasks(e)
        displayTodos(e)
        currenttask.innerHTML = ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGVzRzs7QUFFdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixpREFBWSxDQUFDLDZDQUFRLENBQUMsOENBQVM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDBDQUFLLENBQUMsZ0RBQVcsQ0FBQyw0Q0FBTyxDQUFDLDZDQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDd0M7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNEOTIxMjE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0U2VjdGlvbiB7XFxuICAgIGZsZXgtZ3Jvdzo0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgICBjb2xvcjogZ29sZDtcXG59XFxuLnRvZG8tZm9ybSAsIC5wcm9qZWN0LXRvZG8tZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RuYW1lICwgLmhvbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0bmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLnByb2plY3RuYW1lOmhvdmVyLCAuaG9tZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNuYXZCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgIFxcblxcbn1cXG5cXG4ubmF2YmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtIDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ob21lLXRvZG9zLCAucHJvamVjdC10b2RvcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvbWUtdG9kb3M6aG92ZXIsIC5wcm9qZWN0LXRvZG9zOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwxMCUpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY3VycmVudHByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGVsYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7O0lBRWxDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjRDkyMTIxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNyaWdodFNlY3Rpb24ge1xcbiAgICBmbGV4LWdyb3c6NDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gICAgY29sb3I6IGdvbGQ7XFxufVxcbi50b2RvLWZvcm0gLCAucHJvamVjdC10b2RvLWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0bmFtZSAsIC5ob21lIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdG5hbWUge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi5wcm9qZWN0bmFtZTpob3ZlciwgLmhvbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jbmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICBcXG5cXG59XFxuXFxuLm5hdmJhci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNlbSA7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaG9tZS10b2RvcywgLnByb2plY3QtdG9kb3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ob21lLXRvZG9zOmhvdmVyLCAucHJvamVjdC10b2Rvczpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMTAlKTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2N1cnJlbnRwcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2RlbGJ0biB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtpbnB1dHMsdG9kb0xpc3QsbXlwcm9qZWN0cyxjcmVhdGVQcm9qZWN0c30gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiXG5cbmxldCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LHByb2puYW1lY29udCxwcm9qYXJyICwgaW5kaXZpZHVhbHByb2osIGluZGl2aWR1YWxwcm9qaWRcbmxldCB0aXRsZTIsIGRlc2NyaXB0aW9uMixkdWVEYXRlMixwcmlvcml0eTIsIHByb2plY3QgLCBwcm9qZWN0VGl0bGVcblxuY29uc3QgdG9kb3MgPSBbXVxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdENvbnRhaW5lclwiKVxuY29uc3QgcmlnaHRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodFNlY3Rpb25cIilcbmNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1mb3JtLXN1Ym1pdFwiKVxuY29uc3Qgc3ViQnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10b2RvLWZvcm0tc3VibWl0XCIpXG5jb25zdCBjdXJyZW50cHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudHByb2plY3RcIilcbmNvbnN0IGN1cnJlbnR0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50dGFza1wiKVxuY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1zdWJtaXRcIilcbmNvbnN0IHByb2pTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VjdGlvblwiKVxuY29uc3QgY3JlYXRlcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlcHJvamVjdFwiKVxuY29uc3QgcHJvam5hbWVmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qLW5hbWUtZm9ybVwiKVxuY29uc3QgdGFza2FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGR0YXNrXCIpXG5jb25zdCB0b2RvZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1mb3JtXCIpXG5jb25zdCBwcm9qZWN0dG9kb2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY29uZGFyeS1mb3JtXCIpXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpXG4vL2NvbnN0IGhvbWVoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVIZWFkaW5nXCIpXG5jb25zdCBwcm9qZWN0dGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0bmFtZVwiKVxuY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxubGV0IGRlbGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmRlbGJ0bi5pbm5lckhUTUwgPSBcInhcIlxuZGVsYnRuLmlkID0gXCJkZWxidG5cIlxuXG5sZXQgdGFza2RlbGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbnRhc2tkZWxidG4uaW5uZXJIVE1MID0gXCJ4XCJcbnRhc2tkZWxidG4uaWQgPSBcInRhc2tkZWxidG5cIlxuICAgIFxuXG5mdW5jdGlvbiBlbGVtZW50Q3JlYXRvcihlbCx0eXBlLGNsYXNzX25hbWUsaWRfbmFtZSxpbm5lcnRleHQpIHtcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiaWRcIixpZF9uYW1lKVxuICAgIGVsLnRleHRDb250ZW50ID0gaW5uZXJ0ZXh0XG5cbiAgICByZXR1cm4gZWxcblxufVxuXG5jb25zdCBhZGRUYXNrID0gZWxlbWVudENyZWF0b3IoXCJhZGRUYXNrXCIsXCJidXR0b25cIixcInByb2otdGFzay1idG5cIixcInByb2otdGFzay1idG5cIixcIkFkZCBUYXNrXCIpXG5jb25zdCBob21laGVhZGVyID0gZWxlbWVudENyZWF0b3IoXCJob21laGVhZGVyXCIsXCJoMVwiLFwiaG9tZUhlYWRlclwiLFwiaG9tZUhlYWRpbmdcIixcIkhvbWVcIilcbi8vY29uc3QgZGVsYnRuID0gZWxlbWVudENyZWF0b3IoXCJkZWxidG5cIixcImJ1dHRvblwiLFwiZGVsYnRuXCIsXCJkZWxidG5cIixcIlhcIilcblxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgfVxuXG5mdW5jdGlvbiBzdWIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZVxuICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZVxuICAgIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWVcbiAgICBwcmlvcml0eT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICAgIGlucHV0cygpXG59XG5cbmZ1bmN0aW9uIHByb2pTdWIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vdGl0bGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZVxuICAgIGRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24yXCIpLnZhbHVlXG4gICAgZHVlRGF0ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGUyXCIpLnZhbHVlXG4gICAgcHJpb3JpdHkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5MlwiXTpjaGVja2VkJykudmFsdWVcbiAgICBjcmVhdGVQcm9qZWN0cyhwcm9qbmFtZWNvbnQpXG59XG5cbmZ1bmN0aW9uIHByb2pOYW1lKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKS52YWx1ZVxuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcblxuICAgIGZvciAobGV0IHg9MCA7IHg8IHRvZG9MaXN0Lmxlbmd0aCA7eCsrKSB7XG4gICAgICAgIFxuICAgICAgICB0b2Rvc1t4XSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICBcbiAgICAgICAgbGV0IGRpdix6XG5cbiAgICAgICAgZm9yKGxldCB5IGluIHRvZG9MaXN0W3hdKSB7XG5cbiAgICAgICAgICAgIGlmICgoeSA9PT0gXCJ0aXRsZVwiKSB8fCAoeSA9PT0gXCJkdWVEYXRlXCIpKSB7XG5cbiAgICAgICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCArPSB0b2RvTGlzdFt4XVt5XSArIFwiJmVtc3A7XCJcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9zW3hdLmNsYXNzTGlzdC5hZGQodG9kb0xpc3RbeF0udGl0bGUsIFwiaG9tZS10b2Rvc1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIHogPSB0b2RvTGlzdFt4XS50aXRsZS5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NbeF0uY2xhc3NMaXN0LmFkZCh6LmpvaW4oJy0nKSxcImhvbWUtdG9kb3NcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kb3NbeF0uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NbeF0pXG4gICAgfSBcbiAgICBcbn1cblxuZnVuY3Rpb24gcHJvamVjdENoZWNrZXIoYXJyKSB7XG5cbiAgcHJvamFyciA9ICBhcnIuZmlsdGVyKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBwcm9qbmFtZWNvbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2phcnJcblxufVxuXG5mdW5jdGlvbiBpdGVyYXRlKG9iaix0YWIpIHtcbiAgICByaWdodFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIlxuICAgIGluZGl2aWR1YWxwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2puYW1lY29udFxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgIFxuICAgIHJpZ2h0U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRUYXNrKVxuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhga2V5OiAke2tleX0sIHZhbHVlOiAke29ialtrZXldfWApXG4gICAgXG4gICAgXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZXJhdGUob2JqW2tleV0pXG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKChrZXkgPT09ICduYW1lJykgfHwgKGtleSA9PT0gJ3RpdGxlJykgfHwgKGtleSA9PT0gJ2luZm8nKSB8fCAoa2V5ID09PSAncHJpb3JpdHknKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGtleSA9PSAnbmFtZScpICYmIChrZXkgIT09IHRhYikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vZm9yKGxldCB4ID0gMDsgeCA8IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscHJvamlkID0gb2JqW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxwcm9qLmNsYXNzTGlzdC5hZGQoaW5kaXZpZHVhbHByb2ppZCwgXCJwcm9qZWN0LXRvZG9zXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBpbmRpdmlkdWFscHJvamlkLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbHByb2ppZCA9IHguam9pbignLScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscHJvai5jbGFzc0xpc3QuYWRkKGluZGl2aWR1YWxwcm9qaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke29ialtrZXldfSA8YnI+YFxuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscHJvai5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbHByb2opXG5cblxuICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgIH0gICAgICBcbiAgICApXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RzKGUpe1xuXG4gICAgY29uc3QgaW5kZXggPSBteXByb2plY3RzLmZpbmRJbmRleCgocHJvaikgPT57XG4gICAgICAgIHJldHVybiBwcm9qLnByb2plY3QuZGVzY3JpcHRpb24gPT0gZS50YXJnZXQuY2xhc3NMaXN0XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgIG15cHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXG4gICAgY29uc29sZS5sb2cobXlwcm9qZWN0cylcblxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrcyhlKSB7XG5cbiAgICBsZXQgeCA9IGUudGFyZ2V0LmNsYXNzTmFtZVxuICAgIGNvbnNvbGUubG9nKHgpXG4gICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgoKHByb2opID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2oudGl0bGUgPT09IHhcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LDEpXG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhlKSB7XG4gICAgLy9wcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBwcm9qVGFiKGUpXG4gICAgY29uc3QgbXlhcnIgPSBwcm9qZWN0Q2hlY2tlcihteXByb2plY3RzKVxuXG4gICAgZm9yIChsZXQgeD0wIDsgeCA8IG15YXJyLmxlbmd0aCA7IHgrKykge1xuXG4gICAgICAgIGl0ZXJhdGUobXlhcnJbeF0sZSlcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHByb2plY3RQYXJzZXIob2JqKSB7XG4gICAgXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhga2V5OiAke2tleX0sIHZhbHVlOiAke29ialtrZXldfWApXG5cbiAgICBsZXQgcHJval9saW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIFxuICAgIC8vY3VycmVudHByb2plY3QuaW5uZXJIVE1MICs9IGAke2tleX0gKyBcIiBcIiArICR7b2JqW2tleV19YFxuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9qZWN0UGFyc2VyKG9ialtrZXldKVxuICAgICAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKChrZXkgPT09ICduYW1lJykgfHwgKGtleSA9PT0gJ2luZm8nKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoKGtleSA9PT0nZGVzY3JpcHRpb24nKSl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGJ0bi5jbGFzc05hbWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGRlbGJ0bi5jbGFzc0xpc3QuYWRkKG9ialtrZXldKSBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgLy8gbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCArPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoa2V5KX1gICsgXCI6IFwiICBcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke29ialtrZXldfWBcbiAgICAgICAgICAgICAgICBwcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIC8vcHJval9saW5lLmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgICAgICAgICAgcHJval9saW5lLmFwcGVuZENoaWxkKGRlbGJ0bilcbiAgICAgICAgICAgICAgICBjdXJyZW50cHJvamVjdC5hcHBlbmRDaGlsZChwcm9qX2xpbmUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAvKiBpZiAob2JqW2tleV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdFBhcnNlcihvYmpba2V5XSlcbiAgICB9Ki9cblxuXG4gICAgfSlcbiAgICBcbiAgICAvL2N1cnJlbnRwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGJ0bilcbn1cblxuZnVuY3Rpb24gdGFza1BhcnNlcihvYmopIHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhga2V5OiAke2tleX0sIHZhbHVlOiAke29ialtrZXldfWApXG4gICAgICAgIGxldCB0YXNrX2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXNrUGFyc2VyKG9ialtrZXldKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKChrZXkgPT09ICd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZSBpcyBlbXB0aWVkIGZvciB3aGVuIHRhc2tzIGFyZSBiZWluZyBkZWxldGVkLCBhcyBpdCB3b3VsZCBhbHRlciB0aGUgY2xhc3NMaXN0IGFycmF5IGluZGljZXNcblxuICAgICAgICAgICAgICAgICAgICB0YXNrZGVsYnRuLmNsYXNzTmFtZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGFza2RlbGJ0bi5jbGFzc0xpc3QuYWRkKG9ialtrZXldKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAvLyBsZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MICs9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihrZXkpfWAgKyBcIjogXCIgIFxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgKz0gYCR7b2JqW2tleV19YFxuICAgICAgICAgICAgICAgIHRhc2tfbGluZS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgLy9wcm9qX2xpbmUuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgICAgICAgICB0YXNrX2xpbmUuYXBwZW5kQ2hpbGQodGFza2RlbGJ0bilcbiAgICAgICAgICAgICAgICBjdXJyZW50dGFzay5hcHBlbmRDaGlsZCh0YXNrX2xpbmUpXG4gICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG5mdW5jdGlvbiBmZXRjaFRhc2tzKGUpIHtcbiAgICBsZXQgdGFza2NsYXNzID0gZS50YXJnZXQuY2xhc3NMaXN0XG4gICAgbGV0IGN1cnJlbnRfdGl0bGUgPSB0YXNrY2xhc3NbMF1cblxuICAgIGNvbnN0IHggPSB0b2RvTGlzdC5maWx0ZXIoZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGlmKHRhc2sudGl0bGUgPT0gY3VycmVudF90aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pIFxuXG4gICAgY29uc29sZS5sb2coeClcblxuICAgIHguZm9yRWFjaChvYmogPT4gdGFza1BhcnNlcihvYmopKVxuXG59XG5cbmZ1bmN0aW9uIGZldGNoUHJvamVjdChlKSB7XG4gICAgbGV0IHByb2pjbGFzc2VzID0gZS50YXJnZXQuY2xhc3NMaXN0XG4gICAgY29uc29sZS5sb2cocHJvamNsYXNzZXMpXG4gICAgbGV0IGN1cnJlbnRfZGVzYyA9IHByb2pjbGFzc2VzWzBdIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRfZGVzYylcbiAgICBjb25zdCBteWFyciA9IHByb2plY3RDaGVja2VyKG15cHJvamVjdHMpXG4gICAgY29uc29sZS5sb2cobXlhcnIpXG4gICAgXG4gICAgY29uc3QgeCA9IG15YXJyLmZpbHRlcihmdW5jdGlvbihwcm9qKXtcblxuICAgICAgICBpZihwcm9qLnByb2plY3QuZGVzY3JpcHRpb24gPT0gY3VycmVudF9kZXNjKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdfZGVzYyA9IGN1cnJlbnRfZGVzYy5zcGxpdChcIi1cIikuam9pbihcIiBcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld19kZXNjKVxuICAgICAgICAgICAgaWYocHJvai5wcm9qZWN0LmRlc2NyaXB0aW9uID09IG5ld19kZXNjKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcblxuICAgIGNvbnNvbGUubG9nKHgpXG5cbiAgICB4LmZvckVhY2gob2JqID0+IHByb2plY3RQYXJzZXIob2JqKSlcbiAgICAgICAgICBcbiAgICBcbn1cblxuZnVuY3Rpb24gcHJvalRhYihlKSB7XG4gICAgcmlnaHRTZWN0aW9uLmlubmVySFRNTCA9IFwiXCJcbiAgICBcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJob21lSGVhZGluZ1wiKVxuICAgIC8vcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBlLnRhcmdldC5pZFxuICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvam5hbWVjb250XG4gICAgXG4gICAgXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG4gICAgXG5cbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcbiAgICByaWdodFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcikgXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2spXG5cbiAgICByZXR1cm4gcHJvam5hbWVjb250XG4gICAgXG59XG5cbmZ1bmN0aW9uIGhtZUJ0bigpIHtcbiAgICByaWdodFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIlxuICAgIFxuICAgXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVoZWFkZXIpXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgaG9tZWhlYWRlci5pbm5lckhUTUwgPSBcIkhvbWVcIlxuICAgIGRpc3BsYXlUb2RvcygpXG4gICAgcmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2thZGRlcilcbn1cblxuXG5cbnN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIFxuICAgIHN1YihlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtXCIpLnJlc2V0KClcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdClcbiAgICB0b2RvZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKVxuICAgIGRpc3BsYXlUb2RvcygpXG5cbn0pXG5cbnN1YkJ0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgIHByb2pTdWIoZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdG9kby1mb3JtXCIpLnJlc2V0KClcbiAgICBwcm9qZWN0dG9kb2Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIilcbiAgICBkaXNwbGF5UHJvamVjdHMocHJvam5hbWVjb250KVxuICAgIFxuXG59IClcblxucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHByb2pOYW1lKGUpXG4gICAgcHJvamVjdFRpdGxlID0gcHJvak5hbWUoZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKS5yZXNldCgpXG4gICAgXG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcm9qZWN0bmFtZVwiKVxuICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiaWRcIixwcm9qZWN0VGl0bGUpXG4gICAgbmV3UHJvai5pbm5lckhUTUwgKz0gcHJvamVjdFRpdGxlXG4gICAgcHJvalNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvailcbiAgICBwcm9qbmFtZWZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIilcblxufSlcblxuY3JlYXRlcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHByb2puYW1lZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybVwiKVxufSlcblxudGFza2FkZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgdG9kb2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImZvcm1cIilcbn0pXG5cbnByb2pTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdG5hbWUnKSkge1xuICAgICAgICBwcm9qbmFtZWNvbnQgPSBlLnRhcmdldC5pZFxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH07XG4gIH0gKTtcblxucmlnaHRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnNvbGUubG9nKGUpIFxuICAgIGlmKGUudGFyZ2V0LmlkID09IFwicHJvai10YXNrLWJ0blwiKSB7XG4gICAgICAgIHByb2plY3R0b2RvZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybVwiKVxuICAgICAgICAgICBcbiAgICB9XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC10b2Rvc1wiKSl7XG4gICAgICAgIGN1cnJlbnRwcm9qZWN0LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgZmV0Y2hQcm9qZWN0KGUpXG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvbWUtdG9kb3NcIikpe1xuICAgICAgICBjdXJyZW50dGFzay5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGZldGNoVGFza3MoZSlcbiAgICB9XG5cbiAgfSApO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaG1lQnRuKSBcbiAgICBcbmN1cnJlbnRwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgaWYoZS50YXJnZXQuaWQgPT0gXCJkZWxidG5cIikge1xuICAgICAgICBkZWxldGVQcm9qZWN0cyhlKVxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZSlcbiAgICAgICAgY3VycmVudHByb2plY3QuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cbn0pXG5cbmN1cnJlbnR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBpZihlLnRhcmdldC5pZCA9PSBcInRhc2tkZWxidG5cIikge1xuICAgICAgICBkZWxldGVUYXNrcyhlKVxuICAgICAgICBkaXNwbGF5VG9kb3MoZSlcbiAgICAgICAgY3VycmVudHRhc2suaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cbn0pXG5cbiAgXG5cblxuLypcbnByb2plY3R0YWIuZm9yRWFjaCgocHJvaikgPT4ge1xuXG4gICAgcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIFxuICAgICAgIC8vIHByb2pUYWIoZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKVxuICAgICAgICBcbiAgICB9KVxufSlcbiovXG5cblxuZXhwb3J0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ICx0aXRsZTIsIGRlc2NyaXB0aW9uMixkdWVEYXRlMixwcmlvcml0eTJ9IiwiaW1wb3J0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LHRpdGxlMiwgZGVzY3JpcHRpb24yLGR1ZURhdGUyLHByaW9yaXR5Mn0gZnJvbSAnLi9ET00uanMnXG5cbmNvbnN0IHRvZG9MaXN0ID0gW11cbmNvbnN0IG15cHJvamVjdHMgPSBbXVxuXG5mdW5jdGlvbiBQcm9qZWN0cyhuYW1lLHByb2plY3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIHRoaXMuaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgIH1cbn1cblxuY2xhc3MgVG9kb3Mge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhuYW1lKSB7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kb3MobmFtZSwgZGVzY3JpcHRpb24yLGR1ZURhdGUyLHByaW9yaXR5MilcbiAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3RzKG5hbWUsdG9kbylcbiAgICBteXByb2plY3RzLnB1c2gocHJvailcbiAgICBjb25zb2xlLmxvZyh0b2RvLnRpdGxlKVxuICAgIGNvbnNvbGUubG9nKHByb2opXG4gICAgY29uc29sZS5sb2cobXlwcm9qZWN0cylcbn1cblxuZnVuY3Rpb24gaW5wdXRzKCkge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpXG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKVxuICAgIFxuICAgIFxufVxuXG5cblxuXG5leHBvcnQge2lucHV0cyxjcmVhdGVQcm9qZWN0cyxteXByb2plY3RzLCB0b2RvTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtkaXNwbGF5VG9kb3MsaW5wdXRzLHRvZG9MaXN0fSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCJcbmltcG9ydCB7c3VifSBmcm9tIFwiLi9ET00uanNcIlxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==