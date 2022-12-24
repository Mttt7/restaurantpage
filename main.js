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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 1 0 auto;\n  width: 100%;\n  height: 100%;\n}\n\n#content {\n  height: 100%;\n  background-color: rgb(211, 68, 25);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Martian Mono\", monospace;\n}\n\n.home-wrapper {\n  height: calc(100vh - 120px - 105px);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  padding: 20px 0px;\n}\n.home-wrapper .hero-img-wrapper {\n  padding: 20px;\n}\n.home-wrapper .hero-img-wrapper .hero-img {\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  border-radius: 40px;\n}\n.home-wrapper .contact-wrapper {\n  font-size: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  padding-bottom: 25px;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-upper {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-down {\n  font-size: 1.9rem;\n}\n.home-wrapper .contact-wrapper .button {\n  background-color: rgb(227, 213, 16);\n  border: none;\n  color: rgb(0, 0, 0);\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.home-wrapper .contact-wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n  transition: 2s;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 20px;\n}\n.menu-wrapper .menu {\n  grid-column: 2;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  row-gap: 30px;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n@media (max-width: 601px) {\n  .menu-wrapper .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.menu-wrapper .menu .dish {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 550px;\n  width: 250px;\n  padding: 10px;\n  border: 3px solid rgb(227, 213, 16);\n  border-radius: 10px;\n  background-color: rgb(227, 213, 16);\n  color: rgb(211, 68, 25);\n}\n.menu-wrapper .menu .dish .name {\n  font-size: 1.8rem;\n  padding: 10px;\n  font-weight: 700;\n}\n.menu-wrapper .menu .dish .photo {\n  width: 100%;\n  border-radius: 10px;\n}\n.menu-wrapper .menu .dish .description {\n  flex: 1 0 auto;\n  padding: 10px;\n}\n.menu-wrapper .menu .dish .price {\n  font-weight: 700;\n  color: rgb(46, 25, 235);\n}\n\n.wrapper {\n  height: calc(100vh - 120px - 55px);\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n.wrapper .greetings {\n  font-size: 2rem;\n  padding: 10px;\n}\n.wrapper .map-wrapper {\n  height: 350px;\n  width: 500px;\n}\n@media (max-width: 601px) {\n  .wrapper .map-wrapper {\n    height: 300px;\n    width: 300px;\n  }\n}\n.wrapper .number {\n  font-size: 1.45rem;\n}\n.wrapper .mail {\n  font-size: 1.15rem;\n  padding: 10px;\n}\n.wrapper .map {\n  width: 100%;\n  height: 100%;\n  border: 4px solid black;\n  border-radius: 10px;\n  background-color: black;\n  transition: 3s;\n}\n.wrapper .button {\n  background-color: red;\n  border: none;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.14);\n  transition: 2s;\n}\n\n.header {\n  width: 100%;\n  height: 120px;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header .logo {\n  font-family: \"Pacifico\", cursive;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-style: italic;\n  padding: 10px;\n  padding-bottom: 0;\n}\n.header .choose-bar {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.header .choose-bar > * {\n  padding: 15px;\n  padding-top: 0;\n  cursor: pointer;\n}\n.header .choose-bar > *:hover {\n  transform: scale(1.1);\n  transition: 0.3s;\n}\n\n.footer {\n  padding: 1rem 0 0 0.2rem;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.footer .footer-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer-icons > * {\n  cursor: pointer;\n  transition: 2s;\n}\n.footer .footer-icons > *:hover {\n  transform: scale(1.2);\n  transition: 2s;\n}\n.footer .footer-icons .ig-icon {\n  width: 28px;\n}\n.footer .footer-icons .github-icon {\n  width: 80px;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony import */ var _images_mapa_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/mapa.png */ "./src/images/mapa.png");

 
    const Mapa = new Image()
    Mapa.src = _images_mapa_png__WEBPACK_IMPORTED_MODULE_0__
    Mapa.classList.add("map-inv")
 function drawContact(){

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
        const greetings = document.createElement('div')
        greetings.classList.add('greetings')
        greetings.textContent = "See you at"
        wrapper.appendChild(greetings)
        Mapa.classList.add("map")
        //const showMapBtn = document.createElement('button')
        // showMapBtn.textContent = "SHOW MAP"
        // showMapBtn.classList.add("button")
        //wrapper.appendChild(showMapBtn)

        // showMapBtn.addEventListener('click',()=>{
        //     Mapa.classList.remove("map-inv")
        //     Mapa.classList.add("map")
        // })

        const mapWrapper = document.createElement('div')
        wrapper.appendChild(mapWrapper)
        mapWrapper.classList.add("map-wrapper")
        
            
            mapWrapper.appendChild(Mapa)
        




        
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



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
            seeLocationBtn.addEventListener('click',()=>{
                ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
            })



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
        const PolishDinner = new Dish(PolishDinnerImg,'Polish de volaille ',"Our Polish De volaille with home made fries is a must-try dish at our restaurant. Slow-cooked poultry is served  with vegetables and spices, and paired with home made fries.",29) 
        const Pizzatopia = new Dish(PizzatopiaImg,'Pizza','Try our delicious Italian pizza, made with a crispy crust and topped with the freshest ingredients. Our pizza is sure to satisfy your craving for something savory and delicious. Come and enjoy a slice at our restaurant!',34.0) 
        const Zygi = new Dish(ZygiImg,'Student dish','If you are hungry brokie or just a student. It doesnt taste good. It is not fresh. Cheap.',7.0) 
        
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

/***/ "./src/images/mapa.png":
/*!*****************************!*\
  !*** ./src/images/mapa.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21a7cb964a49cc8e5f67.png";

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
                ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
            })
            
    
    
            const chMenu = document.createElement('div')
            chMenu.classList.add('choose-menu')
            chMenu.textContent = "MENU"
            chooseBar.appendChild(chMenu)
            chMenu.addEventListener('click',() => {
                ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
            })
    
            const chContact = document.createElement('div')
            chContact.classList.add('choose-contact')
            chContact.textContent = "CONTACT"
            chooseBar.appendChild(chContact)
            chContact.addEventListener('click',() => {
                ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
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

                GithubImg.addEventListener('click',()=>{
                    window.open("https://github.com/Mttt7/restaurantpage","_self")
                })
                IgImg.addEventListener('click',()=>{
                    window.open("https://www.instagram.com/mtt.jpeg/","_self")
                })

                

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



    
}

InitializeWebsite()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()






//content.appendChild(createHeader())
//content.appendChild(component())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBb0I7QUFDWTtBQUNBO0FBQ007QUFDUztBQUNSOztBQUV2QztBQUNBOztBQUVBLGdCQUFnQixtREFBUztBQUN6QixZQUFZLCtDQUFLOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQSxxREFBUTs7Ozs7OztBQU9SO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCA2OCwgMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXJ0aWFuIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5ob21lLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHggLSAxMDVweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxufVxcbi5ob21lLXdyYXBwZXIgLmhlcm8taW1nLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmhvbWUtd3JhcHBlciAuaGVyby1pbWctd3JhcHBlciAuaGVyby1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuLmhvbWUtd3JhcHBlciAuY29udGFjdC13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuaW52aXRhdGlvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIgLmludml0YXRpb24td3JhcHBlciAuaW52aXRhdGlvbi11cHBlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhvbWUtd3JhcHBlciAuY29udGFjdC13cmFwcGVyIC5pbnZpdGF0aW9uLXdyYXBwZXIgLmludml0YXRpb24tZG93biB7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuLmhvbWUtd3JhcHBlciAuY29udGFjdC13cmFwcGVyIC5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjEzLCAxNik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAxcHgpIHtcXG4gIC5tZW51LXdyYXBwZXIgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuLm1lbnUtd3JhcHBlciAubWVudSAuZGlzaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjcsIDIxMywgMTYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIxMywgMTYpO1xcbiAgY29sb3I6IHJnYigyMTEsIDY4LCAyNSk7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2ggLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1lbnUtd3JhcHBlciAubWVudSAuZGlzaCAucGhvdG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWVudS13cmFwcGVyIC5tZW51IC5kaXNoIC5kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2ggLnByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogcmdiKDQ2LCAyNSwgMjM1KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHggLSA1NXB4KTtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4ud3JhcHBlciAuZ3JlZXRpbmdzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi53cmFwcGVyIC5tYXAtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAxcHgpIHtcXG4gIC53cmFwcGVyIC5tYXAtd3JhcHBlciB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuLndyYXBwZXIgLm51bWJlciB7XFxuICBmb250LXNpemU6IDEuNDVyZW07XFxufVxcbi53cmFwcGVyIC5tYWlsIHtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi53cmFwcGVyIC5tYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IDNzO1xcbn1cXG4ud3JhcHBlciAuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG4ud3JhcHBlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNCk7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMTMsIDE2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmhlYWRlciAuY2hvb3NlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5oZWFkZXIgLmNob29zZS1iYXIgPiAqIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlciAuY2hvb3NlLWJhciA+ICo6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtIDAgMCAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMTMsIDE2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaWNvbnMgPiAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaWNvbnMgPiAqOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaWNvbnMgLmlnLWljb24ge1xcbiAgd2lkdGg6IDI4cHg7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pY29ucyAuZ2l0aHViLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNFRDs7QURBQTtFQUNDLGNBQUE7QUNHRDs7QUREQTtFQUNDLGdCQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0FDS0Q7O0FESEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUNNRDs7QURKQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNPRDs7QURNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFFQSxrQ0FuQkk7RUFvQkosYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQ0FBQTtBQ0pKOztBRFNBO0VBRUksbUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFFJO0VBSUksYUFBQTtBQ1RSO0FEVVE7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBR0EsbUJBQUE7QUNYWjtBRGdCUTtFQUVJLGlCQUFBO0VBb0JBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNsQ1o7QURhWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNYaEI7QURZZ0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7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bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYXBhIGZyb20gJy4vaW1hZ2VzL21hcGEucG5nJ1xuIFxuICAgIGNvbnN0IE1hcGEgPSBuZXcgSW1hZ2UoKVxuICAgIE1hcGEuc3JjID0gbWFwYVxuICAgIE1hcGEuY2xhc3NMaXN0LmFkZChcIm1hcC1pbnZcIilcbiBmdW5jdGlvbiBkcmF3Q29udGFjdCgpe1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJylcbiAgICBcbiAgICAgICAgY29uc3QgZ3JlZXRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZ3JlZXRpbmdzLmNsYXNzTGlzdC5hZGQoJ2dyZWV0aW5ncycpXG4gICAgICAgIGdyZWV0aW5ncy50ZXh0Q29udGVudCA9IFwiU2VlIHlvdSBhdFwiXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdzKVxuICAgICAgICBNYXBhLmNsYXNzTGlzdC5hZGQoXCJtYXBcIilcbiAgICAgICAgLy9jb25zdCBzaG93TWFwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgLy8gc2hvd01hcEJ0bi50ZXh0Q29udGVudCA9IFwiU0hPVyBNQVBcIlxuICAgICAgICAvLyBzaG93TWFwQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIilcbiAgICAgICAgLy93cmFwcGVyLmFwcGVuZENoaWxkKHNob3dNYXBCdG4pXG5cbiAgICAgICAgLy8gc2hvd01hcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgLy8gICAgIE1hcGEuY2xhc3NMaXN0LnJlbW92ZShcIm1hcC1pbnZcIilcbiAgICAgICAgLy8gICAgIE1hcGEuY2xhc3NMaXN0LmFkZChcIm1hcFwiKVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIGNvbnN0IG1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1hcFdyYXBwZXIpXG4gICAgICAgIG1hcFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hcC13cmFwcGVyXCIpXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXBXcmFwcGVyLmFwcGVuZENoaWxkKE1hcGEpXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQ9XCIrNDggNTAxIDQyMCA2OTBcIlxuICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJylcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChudW1iZXIpXG5cbiAgICAgICAgY29uc3QgbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haWwudGV4dENvbnRlbnQ9IFwibXRjb3VzaW5lQHJlc3RhdXJhbnQuY29tXCJcbiAgICAgICAgbWFpbC5jbGFzc0xpc3QuYWRkKCdtYWlsJylcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWlsKVxuXG5cbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50PScnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkcmF3Q29udGFjdCgpKVxufVxuXG4iLCJpbXBvcnQgQnJlYWtmYXN0IGZyb20gJy4vaW1hZ2VzL2JyZWFrZmFzdC5qcGcnXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAgJy4vY29udGFjdC5qcydcblxuIGZ1bmN0aW9uIGRyYXdIb21lKCl7XG4gICAgLy9DT05UQUlORVJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS13cmFwcGVyXCIpXG4gICAgXG5cbiAgICAgICAgLy9IRVJPIElNR1xuICAgICAgICBjb25zdCBoZXJvSW1nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlcm9JbWdXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nLXdyYXBwZXInKVxuICAgICAgICBjb25zdCBoZXJvSW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaGVyb0ltZy5zcmMgPSBCcmVha2Zhc3RcbiAgICAgICAgaGVyb0ltZy5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWdcIilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWdXcmFwcGVyKVxuICAgICAgICBoZXJvSW1nV3JhcHBlci5hcHBlbmRDaGlsZChoZXJvSW1nKVxuICAgICAgICBcblxuXG4gICAgICAgIC8vQ09OVEFDVFxuICAgICAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC13cmFwcGVyXCIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RGl2KVxuXG4gICAgICAgICAgICAvL0lOVklUQVRJT05cbiAgICAgICAgICAgIGNvbnN0IGludml0YXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgaW52aXRhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXRhdGlvbi13cmFwcGVyXCIpXG4gICAgICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGludml0YXRpb25EaXYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnZpdGF0aW9uRGl2VXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGludml0YXRpb25EaXZEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2LmFwcGVuZENoaWxkKGludml0YXRpb25EaXZVcHBlcilcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2LmFwcGVuZENoaWxkKGludml0YXRpb25EaXZEb3duKVxuICAgICAgICAgICAgICAgIGludml0YXRpb25EaXZVcHBlci5jbGFzc0xpc3QuYWRkKFwiaW52aXRhdGlvbi11cHBlclwiKVxuICAgICAgICAgICAgICAgIGludml0YXRpb25EaXZEb3duLmNsYXNzTGlzdC5hZGQoXCJpbnZpdGF0aW9uLWRvd25cIilcblxuICAgICAgICAgICAgICAgIGludml0YXRpb25EaXZVcHBlci50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lLi4uXCJcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2RG93bi50ZXh0Q29udGVudCA9IFwib3IgdmlzaXQgdXNcIlxuXG4gICAgICAgICAgICAvL0JVVFRPTlxuICAgICAgICAgICAgY29uc3Qgc2VlTG9jYXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgc2VlTG9jYXRpb25CdG4uaW5uZXJUZXh0PVwiU0VFIExPQ0FUSU9OXCJcbiAgICAgICAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoc2VlTG9jYXRpb25CdG4pXG4gICAgICAgICAgICBzZWVMb2NhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpXG4gICAgICAgICAgICBzZWVMb2NhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFjdCgpXG4gICAgICAgICAgICB9KVxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKVxuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd0hvbWUoKSlcbn1cbiIsImltcG9ydCB0b21hdG9zb3VwIGZyb20gJy4vaW1hZ2VzL3RvbWF0b3NvdXAuanBnJ1xuaW1wb3J0IHBvbGlzaGRpbm5lciBmcm9tICcuL2ltYWdlcy9wb2xpc2hkaW5uZXIuanBnJ1xuaW1wb3J0IHBpenphdG9waWEgZnJvbSAnLi9pbWFnZXMvcGl6emF0b3BpYS5qcGcnXG5pbXBvcnQgenlnaSBmcm9tICcuL2ltYWdlcy96eWdpLmpwZydcblxuY29uc3QgVG9tYXRvU291cEltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBQb2xpc2hEaW5uZXJJbWcgPSBuZXcgSW1hZ2UoKVxuY29uc3QgUGl6emF0b3BpYUltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBaeWdpSW1nID0gbmV3IEltYWdlKClcblxuVG9tYXRvU291cEltZy5zcmMgPSB0b21hdG9zb3VwXG5Qb2xpc2hEaW5uZXJJbWcuc3JjID0gcG9saXNoZGlubmVyXG5QaXp6YXRvcGlhSW1nLnNyYyA9IHBpenphdG9waWFcblp5Z2lJbWcuc3JjID0genlnaVxuXG5cblxuIGZ1bmN0aW9uIGRyYXdNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICBjb25zdCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJylcbiAgICBcbiAgICAgICAgY29uc3QgVG9tYXRvU291cCA9IG5ldyBEaXNoKFRvbWF0b1NvdXBJbWcsJ1RvbWF0byBTb3VwJywnTG92ZWx5IGRlbGljaW91cyB0cmFkaXRpb25hbCBwb2xpc2ggdG9tYXRvIHNvdXAgbWFkZSBmcm9tIGZyZXNoIHRvbWF0b2VzIHNlcnZlZCB3aXRoIGhvbWUgbWFkZSBub29kbGVzLiBZb3UgYXJlIGdvbm5hIGxvdmUgaXQnLDguNTApIFxuICAgICAgICBjb25zdCBQb2xpc2hEaW5uZXIgPSBuZXcgRGlzaChQb2xpc2hEaW5uZXJJbWcsJ1BvbGlzaCBkZSB2b2xhaWxsZSAnLFwiT3VyIFBvbGlzaCBEZSB2b2xhaWxsZSB3aXRoIGhvbWUgbWFkZSBmcmllcyBpcyBhIG11c3QtdHJ5IGRpc2ggYXQgb3VyIHJlc3RhdXJhbnQuIFNsb3ctY29va2VkIHBvdWx0cnkgaXMgc2VydmVkICB3aXRoIHZlZ2V0YWJsZXMgYW5kIHNwaWNlcywgYW5kIHBhaXJlZCB3aXRoIGhvbWUgbWFkZSBmcmllcy5cIiwyOSkgXG4gICAgICAgIGNvbnN0IFBpenphdG9waWEgPSBuZXcgRGlzaChQaXp6YXRvcGlhSW1nLCdQaXp6YScsJ1RyeSBvdXIgZGVsaWNpb3VzIEl0YWxpYW4gcGl6emEsIG1hZGUgd2l0aCBhIGNyaXNweSBjcnVzdCBhbmQgdG9wcGVkIHdpdGggdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLiBPdXIgcGl6emEgaXMgc3VyZSB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZyBmb3Igc29tZXRoaW5nIHNhdm9yeSBhbmQgZGVsaWNpb3VzLiBDb21lIGFuZCBlbmpveSBhIHNsaWNlIGF0IG91ciByZXN0YXVyYW50IScsMzQuMCkgXG4gICAgICAgIGNvbnN0IFp5Z2kgPSBuZXcgRGlzaChaeWdpSW1nLCdTdHVkZW50IGRpc2gnLCdJZiB5b3UgYXJlIGh1bmdyeSBicm9raWUgb3IganVzdCBhIHN0dWRlbnQuIEl0IGRvZXNudCB0YXN0ZSBnb29kLiBJdCBpcyBub3QgZnJlc2guIENoZWFwLicsNy4wKSBcbiAgICAgICAgXG4gICAgICAgIGxldCBkYW5pYSA9IFtUb21hdG9Tb3VwLFBvbGlzaERpbm5lcixQaXp6YXRvcGlhLFp5Z2ldXG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTxkYW5pYS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiZGlzaFwiKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKSAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRhbmlhW2ldLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKFwicGhvdG9cIilcbiAgICAgICAgICAgICAgICAgICAgcGhvdG8uc3JjID0gZGFuaWFbaV0ucGhvdG8uc3JjXG4gICAgICAgICAgICAgICAgICAgIGRpc2guYXBwZW5kQ2hpbGQocGhvdG8pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGFuaWFbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIilcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBkYW5pYVtpXS5wcmljZVxuICAgICAgICAgICAgICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaClcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICAgICAgcmV0dXJuIG1lbnVXcmFwcGVyXG59XG5cblxuY2xhc3MgRGlzaHtcbiAgICBjb25zdHJ1Y3RvcihkaXNoUGhvdG8sZGlzaE5hbWUsZGlzaERlc2NyaXB0aW9uLGRpc2hQcmljZSl7XG4gICAgICAgIHRoaXMuX3Bob3RvID0gZGlzaFBob3RvXG4gICAgICAgIHRoaXMuX25hbWUgPSBkaXNoTmFtZVxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRpc2hEZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9wcmljZSA9IGRpc2hQcmljZVxuICAgIH1cblxuICAgIGdldCBwaG90bygpIHtyZXR1cm4gdGhpcy5fcGhvdG99XG4gICAgZ2V0IG5hbWUoKSB7cmV0dXJuIHRoaXMuX25hbWV9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiB0aGlzLl9kZXNjcmlwdGlvbn1cbiAgICBnZXQgcHJpY2UoKSB7cmV0dXJuIHRoaXMuX3ByaWNlfVxuXG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd01lbnUoKSlcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBnaXRodWJJbWcgZnJvbSAnLi9pbWFnZXMvZ2l0aHVibG9nby5wbmcnXG5pbXBvcnQgaWdJbWcgZnJvbSAnLi9pbWFnZXMvaWdsb2dvLnBuZydcblxuY29uc3QgR2l0aHViSW1nID0gbmV3IEltYWdlKClcbmNvbnN0IElnSW1nID0gbmV3IEltYWdlKClcblxuR2l0aHViSW1nLnNyYyA9IGdpdGh1YkltZ1xuSWdJbWcuc3JjID0gaWdJbWdcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIk1UICdzICAgIENPVVNJTkVcIlxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBcbiAgICAgICAgY29uc3QgY2hvb3NlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hvb3NlQmFyLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1iYXInKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2hvb3NlQmFyKVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY2hIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoSG9tZS5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtaG9tZScpXG4gICAgICAgICAgICBjaEhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIlxuICAgICAgICAgICAgY2hvb3NlQmFyLmFwcGVuZENoaWxkKGNoSG9tZSlcbiAgICAgICAgICAgIGNoSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRIb21lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaE1lbnUuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLW1lbnUnKVxuICAgICAgICAgICAgY2hNZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCJcbiAgICAgICAgICAgIGNob29zZUJhci5hcHBlbmRDaGlsZChjaE1lbnUpXG4gICAgICAgICAgICBjaE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkTWVudSgpXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY2hDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtY29udGFjdCcpXG4gICAgICAgICAgICBjaENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIlxuICAgICAgICAgICAgY2hvb3NlQmFyLmFwcGVuZENoaWxkKGNoQ29udGFjdClcbiAgICAgICAgICAgIGNoQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRDb250YWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBcbiAgIFxuXG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIilcblxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaW5mby50ZXh0Q29udGVudD1cIk1hZGUgYnkgTVRcIlxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaW5mbylcblxuICAgICAgICBjb25zdCBmb290ZXJJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZvb3Rlckljb25zLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pY29ucycpXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJY29ucylcbiAgICAgICAgICAgIGZvb3Rlckljb25zLmFwcGVuZENoaWxkKEdpdGh1YkltZylcbiAgICAgICAgICAgIGZvb3Rlckljb25zLmFwcGVuZENoaWxkKElnSW1nKVxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWljb25cIilcbiAgICAgICAgICAgICAgICBJZ0ltZy5jbGFzc0xpc3QuYWRkKFwiaWctaWNvblwiKVxuXG4gICAgICAgICAgICAgICAgR2l0aHViSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9NdHR0Ny9yZXN0YXVyYW50cGFnZVwiLFwiX3NlbGZcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIElnSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbXR0LmpwZWcvXCIsXCJfc2VsZlwiKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG5tYWluLmlkPVwibWFpblwiXG5yZXR1cm4gbWFpblxufVxuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuZnVuY3Rpb24gSW5pdGlhbGl6ZVdlYnNpdGUoKXtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcblxuXG5cbiAgICBcbn1cblxuSW5pdGlhbGl6ZVdlYnNpdGUoKVxubG9hZEhvbWUoKVxuXG5cblxuXG5cblxuLy9jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuLy9jb250ZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9