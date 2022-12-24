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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n#content {\n  height: 100%;\n  background-color: rgb(211, 68, 25);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Martian Mono\", monospace;\n}\n\n.home-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0px;\n}\n.home-wrapper .hero-img-wrapper {\n  padding: 20px;\n}\n.home-wrapper .hero-img-wrapper .hero-img {\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  border-radius: 40px;\n}\n.home-wrapper .contact-wrapper {\n  font-size: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  padding-bottom: 25px;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-upper {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-down {\n  font-size: 1.9rem;\n}\n.home-wrapper .contact-wrapper .button {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.home-wrapper .contact-wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n  transition: 2s;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 20px;\n}\n.menu-wrapper .menu {\n  grid-column: 2;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  row-gap: 30px;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n@media (max-width: 601px) {\n  .menu-wrapper .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.menu-wrapper .menu .dish {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 500px;\n  width: 250px;\n  padding: 10px;\n  border: 3px solid rgb(227, 213, 16);\n  border-radius: 10px;\n  background-color: rgb(227, 213, 16);\n  color: rgb(211, 68, 25);\n}\n.menu-wrapper .menu .dish .name {\n  font-size: 1.8rem;\n  padding: 10px;\n  font-weight: 700;\n}\n.menu-wrapper .menu .dish .photo {\n  width: 100%;\n  border-radius: 10px;\n}\n.menu-wrapper .menu .dish .description {\n  flex: 1 0 auto;\n  padding: 10px;\n}\n.menu-wrapper .menu .dish .price {\n  font-weight: 700;\n  color: rgb(46, 25, 235);\n}\n\n.wrapper {\n  height: calc(100vh - 120px);\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.wrapper .greetings {\n  font-size: 2rem;\n  padding: 10px;\n}\n.wrapper .map-wrapper {\n  height: 350px;\n  width: 500px;\n}\n@media (max-width: 601px) {\n  .wrapper .map-wrapper {\n    height: 300px;\n    width: 300px;\n  }\n}\n.wrapper .number {\n  font-size: 1.45rem;\n}\n.wrapper .mail {\n  font-size: 1.15rem;\n  padding: 10px;\n}\n.wrapper .map {\n  width: 100%;\n  height: 100%;\n  border: 4px solid black;\n  border-radius: 10px;\n  background-color: black;\n  transition: 3s;\n}\n.wrapper .map-inv {\n  transform: scale(0);\n}\n.wrapper .button {\n  background-color: red;\n  border: none;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.14);\n  transition: 2s;\n}\n\n.header {\n  width: 100%;\n  height: 120px;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header .logo {\n  font-family: \"Pacifico\", cursive;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-style: italic;\n  padding: 10px;\n  padding-bottom: 0;\n}\n.header .choose-bar {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.header .choose-bar > * {\n  padding: 15px;\n  padding-top: 0;\n}\n\n.footer {\n  padding: 1rem 0 0 0.2rem;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.footer .footer-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer-icons > * {\n  transition: 2s;\n}\n.footer .footer-icons > *:hover {\n  transform: scale(1.2);\n  transition: 2s;\n}\n.footer .footer-icons .ig-icon {\n  width: 28px;\n}\n.footer .footer-icons .github-icon {\n  width: 80px;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });

 function drawContact(){

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
        const greetings = document.createElement('div')
        greetings.classList.add('greetings')
        greetings.textContent = "See you at"
        wrapper.appendChild(greetings)

        const showMapBtn = document.createElement('button')
        showMapBtn.textContent = "SHOW MAP"
        showMapBtn.classList.add("button")
        wrapper.appendChild(showMapBtn)

        showMapBtn.addEventListener('click',()=>{
            map.classList.remove("map-inv")
            map.classList.add("map")
        })

        const mapWrapper = document.createElement('div')
        wrapper.appendChild(mapWrapper)
        mapWrapper.classList.add("map-wrapper")
        
            const map = document.createElement('iframe')
            map.classList.add("map-inv")
            map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.6692502524713!2d21.945400000000014!3d51.437958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x253c7dae50e5b69f!2zNTHCsDI2JzE2LjciTiAyMcKwNTYnNDMuNCJF!5e1!3m2!1spl!2spl!4v1671818182255!5m2!1spl!2spl" 
            mapWrapper.appendChild(map)
        




        
        const number = document.createElement('div')
        number.textContent="+48 501 420 690"
        number.classList.add('number')
        wrapper.appendChild(number)

        const mail = document.createElement('div')
        mail.textContent= "mtcousine@restaurant.com"
        mail.classList.add('mail')
        wrapper.appendChild(mail)


    return wrapper
}

function loadContact(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawContact())
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_breakfast_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/breakfast.jpg */ "./src/images/breakfast.jpg");


 function drawHome(){
    //CONTAINER
    const container = document.createElement('div')
    container.classList.add("home-wrapper")
    

        //HERO IMG
        const heroImgWrapper = document.createElement('div')
        heroImgWrapper.classList.add('hero-img-wrapper')
        const heroImg = new Image()
        heroImg.src = _images_breakfast_jpg__WEBPACK_IMPORTED_MODULE_0__
        heroImg.classList.add("hero-img")
        container.appendChild(heroImgWrapper)
        heroImgWrapper.appendChild(heroImg)
        


        //CONTACT
        const contactDiv = document.createElement('div')
        contactDiv.classList.add("contact-wrapper")
        container.appendChild(contactDiv)

            //INVITATION
            const invitationDiv = document.createElement('div')
            invitationDiv.classList.add("invitation-wrapper")
            contactDiv.appendChild(invitationDiv)

                const invitationDivUpper = document.createElement('div')
                const invitationDivDown = document.createElement('div')
                invitationDiv.appendChild(invitationDivUpper)
                invitationDiv.appendChild(invitationDivDown)
                invitationDivUpper.classList.add("invitation-upper")
                invitationDivDown.classList.add("invitation-down")

                invitationDivUpper.textContent = "Order online..."
                invitationDivDown.textContent = "or visit us"

            //BUTTON
            const seeLocationBtn = document.createElement('button')
            seeLocationBtn.innerText="SEE LOCATION"
            contactDiv.appendChild(seeLocationBtn)
            seeLocationBtn.classList.add("button")



    console.log("home")
    return container
}

function loadHome(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawHome())
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_tomatosoup_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tomatosoup.jpg */ "./src/images/tomatosoup.jpg");
/* harmony import */ var _images_polishdinner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/polishdinner.jpg */ "./src/images/polishdinner.jpg");
/* harmony import */ var _images_pizzatopia_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizzatopia.jpg */ "./src/images/pizzatopia.jpg");
/* harmony import */ var _images_zygi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/zygi.jpg */ "./src/images/zygi.jpg");





const TomatoSoupImg = new Image()
const PolishDinnerImg = new Image()
const PizzatopiaImg = new Image()
const ZygiImg = new Image()

TomatoSoupImg.src = _images_tomatosoup_jpg__WEBPACK_IMPORTED_MODULE_0__
PolishDinnerImg.src = _images_polishdinner_jpg__WEBPACK_IMPORTED_MODULE_1__
PizzatopiaImg.src = _images_pizzatopia_jpg__WEBPACK_IMPORTED_MODULE_2__
ZygiImg.src = _images_zygi_jpg__WEBPACK_IMPORTED_MODULE_3__



 function drawMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const menuWrapper = document.createElement('div')
    menuWrapper.classList.add('menu-wrapper')
    
        const TomatoSoup = new Dish(TomatoSoupImg,'Tomato Soup','Lovely delicious traditional polish tomato soup made from fresh tomatoes served with home made noodles. You are gonna love it',8.50) 
        const PolishDinner = new Dish(PolishDinnerImg,'Polish de volaille ','Chicken meat with fries and salad',29) 
        const Pizzatopia = new Dish(PizzatopiaImg,'Pizza','classic Italian Pizza made of real italian flour and oil olive',34.0) 
        const Zygi = new Dish(ZygiImg,'Student dish','If you are hungry brokie or just a student. It doesnt taste good. It is not fresh. Cheap',7.0) 
        
        let dania = [TomatoSoup,PolishDinner,Pizzatopia,Zygi]

        for(let i=0;i<dania.length;i++){
            const dish = document.createElement('div')
            dish.classList.add("dish")

                const name = document.createElement("div")
                    name.classList.add("name")    
                    name.textContent = dania[i].name
                    dish.appendChild(name)
                    

                const photo = document.createElement("img")
                    photo.classList.add("photo")
                    photo.src = dania[i].photo.src
                    dish.appendChild(photo)

                const description = document.createElement("div")
                    description.classList.add("description")
                    description.textContent = dania[i].description
                    dish.appendChild(description)

                const price = document.createElement("div")
                    price.classList.add("price")
                    price.textContent = dania[i].price
                    dish.appendChild(price)
                
                    
            menu.appendChild(dish)
            

        }



        menuWrapper.appendChild(menu)
        return menuWrapper
}


class Dish{
    constructor(dishPhoto,dishName,dishDescription,dishPrice){
        this._photo = dishPhoto
        this._name = dishName
        this._description = dishDescription
        this._price = dishPrice
    }

    get photo() {return this._photo}
    get name() {return this._name}
    get description() {return this._description}
    get price() {return this._price}





}

function loadMenu(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawMenu())
    
}

/***/ }),

/***/ "./src/images/breakfast.jpg":
/*!**********************************!*\
  !*** ./src/images/breakfast.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a218327bee72bb98c83a.jpg";

/***/ }),

/***/ "./src/images/githublogo.png":
/*!***********************************!*\
  !*** ./src/images/githublogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3431e8f4c131607d5da5.png";

/***/ }),

/***/ "./src/images/iglogo.png":
/*!*******************************!*\
  !*** ./src/images/iglogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82b7427cf5bb2f702053.png";

/***/ }),

/***/ "./src/images/pizzatopia.jpg":
/*!***********************************!*\
  !*** ./src/images/pizzatopia.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d19fe08db02145ec2992.jpg";

/***/ }),

/***/ "./src/images/polishdinner.jpg":
/*!*************************************!*\
  !*** ./src/images/polishdinner.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed4b45b7636c4bd66249.jpg";

/***/ }),

/***/ "./src/images/tomatosoup.jpg":
/*!***********************************!*\
  !*** ./src/images/tomatosoup.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94f50970088cd779a52c.jpg";

/***/ }),

/***/ "./src/images/zygi.jpg":
/*!*****************************!*\
  !*** ./src/images/zygi.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d175746f82af97404ce6.jpg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _images_githublogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/githublogo.png */ "./src/images/githublogo.png");
/* harmony import */ var _images_iglogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/iglogo.png */ "./src/images/iglogo.png");







const GithubImg = new Image()
const IgImg = new Image()

GithubImg.src = _images_githublogo_png__WEBPACK_IMPORTED_MODULE_4__
IgImg.src = _images_iglogo_png__WEBPACK_IMPORTED_MODULE_5__

function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    
        const logo = document.createElement('div')
        logo.classList.add('logo')
        logo.textContent = "MT 's    COUSINE"
        header.appendChild(logo)
    
        const chooseBar = document.createElement('div')
        chooseBar.classList.add('choose-bar')
        header.appendChild(chooseBar)
    
            const chHome = document.createElement('div')
            chHome.classList.add('choose-home')
            chHome.textContent = "HOME"
            chooseBar.appendChild(chHome)
            chHome.addEventListener('click',() => {
                currentPage=0
                clearWebsite()
                InitializeWebsite()
            })
            
    
    
            const chMenu = document.createElement('div')
            chMenu.classList.add('choose-menu')
            chMenu.textContent = "MENU"
            chooseBar.appendChild(chMenu)
            chMenu.addEventListener('click',() => {
                currentPage=1
                clearWebsite()
                InitializeWebsite()
            })
    
            const chContact = document.createElement('div')
            chContact.classList.add('choose-contact')
            chContact.textContent = "CONTACT"
            chooseBar.appendChild(chContact)
            chContact.addEventListener('click',() => {
                currentPage=2
                clearWebsite()
                InitializeWebsite()
            })
    
    return header
}

function createFooter(){
    
   



    const footer = document.createElement('div')
    footer.classList.add("footer")

        const info = document.createElement('div')
        info.textContent="Made by MT"
        footer.appendChild(info)

        const footerIcons = document.createElement('div')
        footerIcons.classList.add('footer-icons')
        footer.appendChild(footerIcons)
            footerIcons.appendChild(GithubImg)
            footerIcons.appendChild(IgImg)
                GithubImg.classList.add("github-icon")
                IgImg.classList.add("ig-icon")

    return footer
}

function createMain(){
const main = document.createElement('div')
main.classList.add("main")
main.id="main"
return main
}



const content = document.querySelector("#content")
function InitializeWebsite(){

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    //loadContact()
    //loadMenu()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

function clearWebsite(){
    const header = document.querySelector(".header")
    const home = document.querySelector(".home-wrapper")

    if(header){
        content.removeChild(header)
        console.log("deleted header")
    }
    if(home){
        content.removeChild(home)
        console.log("deleted home")
    }

    
   
}
clearWebsite()
InitializeWebsite()




//content.appendChild(createHeader())
//content.appendChild(component())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgNjgsIDI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFydGlhbiBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaG9tZS13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG4uaG9tZS13cmFwcGVyIC5oZXJvLWltZy13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5ob21lLXdyYXBwZXIgLmhlcm8taW1nLXdyYXBwZXIgLmhlcm8taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIgLmludml0YXRpb24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG59XFxuLmhvbWUtd3JhcHBlciAuY29udGFjdC13cmFwcGVyIC5pbnZpdGF0aW9uLXdyYXBwZXIgLmludml0YXRpb24tdXBwZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuaW52aXRhdGlvbi13cmFwcGVyIC5pbnZpdGF0aW9uLWRvd24ge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAxcHgpIHtcXG4gIC5tZW51LXdyYXBwZXIgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuLm1lbnUtd3JhcHBlciAubWVudSAuZGlzaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjcsIDIxMywgMTYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIxMywgMTYpO1xcbiAgY29sb3I6IHJnYigyMTEsIDY4LCAyNSk7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2ggLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1lbnUtd3JhcHBlciAubWVudSAuZGlzaCAucGhvdG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWVudS13cmFwcGVyIC5tZW51IC5kaXNoIC5kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2ggLnByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiKDQ2LCAyNSwgMjM1KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLndyYXBwZXIgLmdyZWV0aW5ncyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ud3JhcHBlciAubWFwLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAud3JhcHBlciAubWFwLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcbi53cmFwcGVyIC5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xcbn1cXG4ud3JhcHBlciAubWFpbCB7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ud3JhcHBlciAubWFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAzcztcXG59XFxuLndyYXBwZXIgLm1hcC1pbnYge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuLndyYXBwZXIgLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuLndyYXBwZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTQpO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjEzLCAxNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWNpZmljb1xcXCIsIGN1cnNpdmU7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5oZWFkZXIgLmNob29zZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uaGVhZGVyIC5jaG9vc2UtYmFyID4gKiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbSAwIDAgMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjEzLCAxNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWljb25zID4gKiB7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuLmZvb3RlciAuZm9vdGVyLWljb25zID4gKjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuLmZvb3RlciAuZm9vdGVyLWljb25zIC5pZy1pY29uIHtcXG4gIHdpZHRoOiAyOHB4O1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaWNvbnMgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0Q7O0FEQ0EsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FDRUQ7O0FEQUE7RUFDQyxjQUFBO0FDR0Q7O0FEREE7RUFDQyxnQkFBQTtBQ0lEOztBREZBO0VBQ0MsWUFBQTtBQ0tEOztBREhBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FDTUQ7O0FESkE7RUFDQyx5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QUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakVSO0FEb0VJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNsRVI7QURtRVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ2pFWjs7QUR3RUE7RUFDSSx3QkFBQTtFQUNBLG1DQWxTSTtFQW1TSixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3JFSjtBRHVFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDckVSO0FEc0VRO0VBQ0ksY0FBQTtBQ3BFWjtBRHNFUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ3BFWjtBRHNFUTtFQUNJLFdBQUE7QUNwRVo7QURzRVE7RUFDSSxXQUFBO0FDcEVaLENBQUEsb0NBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuIGZ1bmN0aW9uIGRyYXdDb250YWN0KCl7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKVxuICAgIFxuICAgICAgICBjb25zdCBncmVldGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBncmVldGluZ3MuY2xhc3NMaXN0LmFkZCgnZ3JlZXRpbmdzJylcbiAgICAgICAgZ3JlZXRpbmdzLnRleHRDb250ZW50ID0gXCJTZWUgeW91IGF0XCJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChncmVldGluZ3MpXG5cbiAgICAgICAgY29uc3Qgc2hvd01hcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHNob3dNYXBCdG4udGV4dENvbnRlbnQgPSBcIlNIT1cgTUFQXCJcbiAgICAgICAgc2hvd01hcEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2hvd01hcEJ0bilcblxuICAgICAgICBzaG93TWFwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgbWFwLmNsYXNzTGlzdC5yZW1vdmUoXCJtYXAtaW52XCIpXG4gICAgICAgICAgICBtYXAuY2xhc3NMaXN0LmFkZChcIm1hcFwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1hcFdyYXBwZXIpXG4gICAgICAgIG1hcFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hcC13cmFwcGVyXCIpXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICAgICAgICAgIG1hcC5jbGFzc0xpc3QuYWRkKFwibWFwLWludlwiKVxuICAgICAgICAgICAgbWFwLnNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE0ODkuNjY5MjUwMjUyNDcxMyEyZDIxLjk0NTQwMDAwMDAwMDAxNCEzZDUxLjQzNzk1OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MjUzYzdkYWU1MGU1YjY5ZiEyek5USENzREkySnpFMkxqY2lUaUF5TWNLd05UWW5ORE11TkNKRiE1ZTEhM20yITFzcGwhMnNwbCE0djE2NzE4MTgxODIyNTUhNW0yITFzcGwhMnNwbFwiIFxuICAgICAgICAgICAgbWFwV3JhcHBlci5hcHBlbmRDaGlsZChtYXApXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQ9XCIrNDggNTAxIDQyMCA2OTBcIlxuICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJylcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChudW1iZXIpXG5cbiAgICAgICAgY29uc3QgbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haWwudGV4dENvbnRlbnQ9IFwibXRjb3VzaW5lQHJlc3RhdXJhbnQuY29tXCJcbiAgICAgICAgbWFpbC5jbGFzc0xpc3QuYWRkKCdtYWlsJylcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWlsKVxuXG5cbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50PScnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkcmF3Q29udGFjdCgpKVxufVxuXG4iLCJpbXBvcnQgQnJlYWtmYXN0IGZyb20gJy4vaW1hZ2VzL2JyZWFrZmFzdC5qcGcnXG5cbiBmdW5jdGlvbiBkcmF3SG9tZSgpe1xuICAgIC8vQ09OVEFJTkVSXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtd3JhcHBlclwiKVxuICAgIFxuXG4gICAgICAgIC8vSEVSTyBJTUdcbiAgICAgICAgY29uc3QgaGVyb0ltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZXJvSW1nV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoZXJvLWltZy13cmFwcGVyJylcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGhlcm9JbWcuc3JjID0gQnJlYWtmYXN0XG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChcImhlcm8taW1nXCIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1nV3JhcHBlcilcbiAgICAgICAgaGVyb0ltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVyb0ltZylcbiAgICAgICAgXG5cblxuICAgICAgICAvL0NPTlRBQ1RcbiAgICAgICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd3JhcHBlclwiKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdERpdilcblxuICAgICAgICAgICAgLy9JTlZJVEFUSU9OXG4gICAgICAgICAgICBjb25zdCBpbnZpdGF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGludml0YXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImludml0YXRpb24td3JhcHBlclwiKVxuICAgICAgICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbkRpdlVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZpdGF0aW9uRGl2RG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2VXBwZXIpXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2RG93bilcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2VXBwZXIuY2xhc3NMaXN0LmFkZChcImludml0YXRpb24tdXBwZXJcIilcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2RG93bi5jbGFzc0xpc3QuYWRkKFwiaW52aXRhdGlvbi1kb3duXCIpXG5cbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2VXBwZXIudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZS4uLlwiXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdkRvd24udGV4dENvbnRlbnQgPSBcIm9yIHZpc2l0IHVzXCJcblxuICAgICAgICAgICAgLy9CVVRUT05cbiAgICAgICAgICAgIGNvbnN0IHNlZUxvY2F0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHNlZUxvY2F0aW9uQnRuLmlubmVyVGV4dD1cIlNFRSBMT0NBVElPTlwiXG4gICAgICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHNlZUxvY2F0aW9uQnRuKVxuICAgICAgICAgICAgc2VlTG9jYXRpb25CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKVxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKVxuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd0hvbWUoKSlcbn1cbiIsImltcG9ydCB0b21hdG9zb3VwIGZyb20gJy4vaW1hZ2VzL3RvbWF0b3NvdXAuanBnJ1xuaW1wb3J0IHBvbGlzaGRpbm5lciBmcm9tICcuL2ltYWdlcy9wb2xpc2hkaW5uZXIuanBnJ1xuaW1wb3J0IHBpenphdG9waWEgZnJvbSAnLi9pbWFnZXMvcGl6emF0b3BpYS5qcGcnXG5pbXBvcnQgenlnaSBmcm9tICcuL2ltYWdlcy96eWdpLmpwZydcblxuY29uc3QgVG9tYXRvU291cEltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBQb2xpc2hEaW5uZXJJbWcgPSBuZXcgSW1hZ2UoKVxuY29uc3QgUGl6emF0b3BpYUltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBaeWdpSW1nID0gbmV3IEltYWdlKClcblxuVG9tYXRvU291cEltZy5zcmMgPSB0b21hdG9zb3VwXG5Qb2xpc2hEaW5uZXJJbWcuc3JjID0gcG9saXNoZGlubmVyXG5QaXp6YXRvcGlhSW1nLnNyYyA9IHBpenphdG9waWFcblp5Z2lJbWcuc3JjID0genlnaVxuXG5cblxuIGZ1bmN0aW9uIGRyYXdNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICBjb25zdCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJylcbiAgICBcbiAgICAgICAgY29uc3QgVG9tYXRvU291cCA9IG5ldyBEaXNoKFRvbWF0b1NvdXBJbWcsJ1RvbWF0byBTb3VwJywnTG92ZWx5IGRlbGljaW91cyB0cmFkaXRpb25hbCBwb2xpc2ggdG9tYXRvIHNvdXAgbWFkZSBmcm9tIGZyZXNoIHRvbWF0b2VzIHNlcnZlZCB3aXRoIGhvbWUgbWFkZSBub29kbGVzLiBZb3UgYXJlIGdvbm5hIGxvdmUgaXQnLDguNTApIFxuICAgICAgICBjb25zdCBQb2xpc2hEaW5uZXIgPSBuZXcgRGlzaChQb2xpc2hEaW5uZXJJbWcsJ1BvbGlzaCBkZSB2b2xhaWxsZSAnLCdDaGlja2VuIG1lYXQgd2l0aCBmcmllcyBhbmQgc2FsYWQnLDI5KSBcbiAgICAgICAgY29uc3QgUGl6emF0b3BpYSA9IG5ldyBEaXNoKFBpenphdG9waWFJbWcsJ1BpenphJywnY2xhc3NpYyBJdGFsaWFuIFBpenphIG1hZGUgb2YgcmVhbCBpdGFsaWFuIGZsb3VyIGFuZCBvaWwgb2xpdmUnLDM0LjApIFxuICAgICAgICBjb25zdCBaeWdpID0gbmV3IERpc2goWnlnaUltZywnU3R1ZGVudCBkaXNoJywnSWYgeW91IGFyZSBodW5ncnkgYnJva2llIG9yIGp1c3QgYSBzdHVkZW50LiBJdCBkb2VzbnQgdGFzdGUgZ29vZC4gSXQgaXMgbm90IGZyZXNoLiBDaGVhcCcsNy4wKSBcbiAgICAgICAgXG4gICAgICAgIGxldCBkYW5pYSA9IFtUb21hdG9Tb3VwLFBvbGlzaERpbm5lcixQaXp6YXRvcGlhLFp5Z2ldXG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTxkYW5pYS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiZGlzaFwiKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKSAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRhbmlhW2ldLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKFwicGhvdG9cIilcbiAgICAgICAgICAgICAgICAgICAgcGhvdG8uc3JjID0gZGFuaWFbaV0ucGhvdG8uc3JjXG4gICAgICAgICAgICAgICAgICAgIGRpc2guYXBwZW5kQ2hpbGQocGhvdG8pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGFuaWFbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIilcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBkYW5pYVtpXS5wcmljZVxuICAgICAgICAgICAgICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaClcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICAgICAgcmV0dXJuIG1lbnVXcmFwcGVyXG59XG5cblxuY2xhc3MgRGlzaHtcbiAgICBjb25zdHJ1Y3RvcihkaXNoUGhvdG8sZGlzaE5hbWUsZGlzaERlc2NyaXB0aW9uLGRpc2hQcmljZSl7XG4gICAgICAgIHRoaXMuX3Bob3RvID0gZGlzaFBob3RvXG4gICAgICAgIHRoaXMuX25hbWUgPSBkaXNoTmFtZVxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRpc2hEZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9wcmljZSA9IGRpc2hQcmljZVxuICAgIH1cblxuICAgIGdldCBwaG90bygpIHtyZXR1cm4gdGhpcy5fcGhvdG99XG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuX25hbWV9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiB0aGlzLl9kZXNjcmlwdGlvbn1cbiAgICBnZXQgcHJpY2UoKSB7cmV0dXJuIHRoaXMuX3ByaWNlfVxuXG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd01lbnUoKSlcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBnaXRodWJJbWcgZnJvbSAnLi9pbWFnZXMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgaWdJbWcgZnJvbSAnLi9pbWFnZXMvaWdsb2dvLnBuZydcblxuY29uc3QgR2l0aHViSW1nID0gbmV3IEltYWdlKClcbmNvbnN0IElnSW1nID0gbmV3IEltYWdlKClcblxuR2l0aHViSW1nLnNyYyA9IGdpdGh1YkltZ1xuSWdJbWcuc3JjID0gaWdJbWdcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIk1UICdzICAgIENPVVNJTkVcIlxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBcbiAgICAgICAgY29uc3QgY2hvb3NlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hvb3NlQmFyLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1iYXInKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2hvb3NlQmFyKVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY2hIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoSG9tZS5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtaG9tZScpXG4gICAgICAgICAgICBjaEhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIlxuICAgICAgICAgICAgY2hvb3NlQmFyLmFwcGVuZENoaWxkKGNoSG9tZSlcbiAgICAgICAgICAgIGNoSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPTBcbiAgICAgICAgICAgICAgICBjbGVhcldlYnNpdGUoKVxuICAgICAgICAgICAgICAgIEluaXRpYWxpemVXZWJzaXRlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaE1lbnUuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLW1lbnUnKVxuICAgICAgICAgICAgY2hNZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCJcbiAgICAgICAgICAgIGNob29zZUJhci5hcHBlbmRDaGlsZChjaE1lbnUpXG4gICAgICAgICAgICBjaE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT0xXG4gICAgICAgICAgICAgICAgY2xlYXJXZWJzaXRlKClcbiAgICAgICAgICAgICAgICBJbml0aWFsaXplV2Vic2l0ZSgpXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY2hDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtY29udGFjdCcpXG4gICAgICAgICAgICBjaENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIlxuICAgICAgICAgICAgY2hvb3NlQmFyLmFwcGVuZENoaWxkKGNoQ29udGFjdClcbiAgICAgICAgICAgIGNoQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPTJcbiAgICAgICAgICAgICAgICBjbGVhcldlYnNpdGUoKVxuICAgICAgICAgICAgICAgIEluaXRpYWxpemVXZWJzaXRlKClcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBcbiAgIFxuXG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIilcblxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaW5mby50ZXh0Q29udGVudD1cIk1hZGUgYnkgTVRcIlxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaW5mbylcblxuICAgICAgICBjb25zdCBmb290ZXJJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZvb3Rlckljb25zLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pY29ucycpXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJY29ucylcbiAgICAgICAgICAgIGZvb3Rlckljb25zLmFwcGVuZENoaWxkKEdpdGh1YkltZylcbiAgICAgICAgICAgIGZvb3Rlckljb25zLmFwcGVuZENoaWxkKElnSW1nKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWljb25cIilcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKFwiaWctaWNvblwiKVxuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbm1haW4uaWQ9XCJtYWluXCJcbnJldHVybiBtYWluXG59XG5cblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5mdW5jdGlvbiBJbml0aWFsaXplV2Vic2l0ZSgpe1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKVxuXG4gICAgLy9sb2FkQ29udGFjdCgpXG4gICAgLy9sb2FkTWVudSgpXG4gICAgbG9hZEhvbWUoKVxufVxuXG5mdW5jdGlvbiBjbGVhcldlYnNpdGUoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKVxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtd3JhcHBlclwiKVxuXG4gICAgaWYoaGVhZGVyKXtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChoZWFkZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBoZWFkZXJcIilcbiAgICB9XG4gICAgaWYoaG9tZSl7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVkIGhvbWVcIilcbiAgICB9XG5cbiAgICBcbiAgIFxufVxuY2xlYXJXZWJzaXRlKClcbkluaXRpYWxpemVXZWJzaXRlKClcblxuXG5cblxuLy9jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuLy9jb250ZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9