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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n#content {\n  height: 100%;\n  background-color: rgb(211, 68, 25);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Martian Mono\", monospace;\n}\n\n.home-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  padding: 20px 0px;\n}\n.home-wrapper .hero-img-wrapper {\n  padding: 20px;\n}\n.home-wrapper .hero-img-wrapper .hero-img {\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  border-radius: 40px;\n}\n.home-wrapper .contact-wrapper {\n  font-size: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  padding-bottom: 25px;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-upper {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-wrapper .contact-wrapper .invitation-wrapper .invitation-down {\n  font-size: 1.9rem;\n}\n.home-wrapper .contact-wrapper .button {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.home-wrapper .contact-wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n  transition: 2s;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 20px;\n}\n.menu-wrapper .menu {\n  grid-column: 2;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  row-gap: 30px;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n@media (max-width: 601px) {\n  .menu-wrapper .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.menu-wrapper .menu .dish {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 550px;\n  width: 250px;\n  padding: 10px;\n  border: 3px solid rgb(227, 213, 16);\n  border-radius: 10px;\n  background-color: rgb(227, 213, 16);\n  color: rgb(211, 68, 25);\n}\n.menu-wrapper .menu .dish .name {\n  font-size: 1.8rem;\n  padding: 10px;\n  font-weight: 700;\n}\n.menu-wrapper .menu .dish .photo {\n  width: 100%;\n  border-radius: 10px;\n}\n.menu-wrapper .menu .dish .description {\n  flex: 1 0 auto;\n  padding: 10px;\n}\n.menu-wrapper .menu .dish .price {\n  font-weight: 700;\n  color: rgb(46, 25, 235);\n}\n\n.wrapper {\n  height: 100%;\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.wrapper .greetings {\n  font-size: 2rem;\n  padding: 10px;\n}\n.wrapper .map-wrapper {\n  height: 350px;\n  width: 500px;\n}\n@media (max-width: 601px) {\n  .wrapper .map-wrapper {\n    height: 300px;\n    width: 300px;\n  }\n}\n.wrapper .number {\n  font-size: 1.45rem;\n}\n.wrapper .mail {\n  font-size: 1.15rem;\n  padding: 10px;\n}\n.wrapper .map {\n  width: 100%;\n  height: 100%;\n  border: 4px solid black;\n  border-radius: 10px;\n  background-color: black;\n  transition: 3s;\n}\n.wrapper .map-inv {\n  transform: scale(0);\n}\n.wrapper .button {\n  background-color: red;\n  border: none;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  transition: 2s;\n}\n.wrapper .button:hover {\n  cursor: pointer;\n  transform: scale(1.14);\n  transition: 2s;\n}\n\n.header {\n  width: 100%;\n  height: 120px;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header .logo {\n  font-family: \"Pacifico\", cursive;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-style: italic;\n  padding: 10px;\n  padding-bottom: 0;\n}\n.header .choose-bar {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.header .choose-bar > * {\n  padding: 15px;\n  padding-top: 0;\n  cursor: pointer;\n}\n.header .choose-bar > *:hover {\n  transform: scale(1.1);\n  transition: 0.3s;\n}\n\n.footer {\n  padding: 1rem 0 0 0.2rem;\n  background-color: rgb(227, 213, 16);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.footer .footer-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer-icons > * {\n  cursor: pointer;\n  transition: 2s;\n}\n.footer .footer-icons > *:hover {\n  transform: scale(1.2);\n  transition: 2s;\n}\n.footer .footer-icons .ig-icon {\n  width: 28px;\n}\n.footer .footer-icons .github-icon {\n  width: 80px;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

        const showMapBtn = document.createElement('button')
        showMapBtn.textContent = "SHOW MAP"
        showMapBtn.classList.add("button")
        wrapper.appendChild(showMapBtn)

        showMapBtn.addEventListener('click',()=>{
            Mapa.classList.remove("map-inv")
            Mapa.classList.add("map")
        })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtBQUNBO0FBQ007QUFDUztBQUNSOztBQUV2QztBQUNBOztBQUVBLGdCQUFnQixtREFBUztBQUN6QixZQUFZLCtDQUFLOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQSxxREFBUTs7Ozs7OztBQU9SO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCA2OCwgMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXJ0aWFuIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5ob21lLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG59XFxuLmhvbWUtd3JhcHBlciAuaGVyby1pbWctd3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uaG9tZS13cmFwcGVyIC5oZXJvLWltZy13cmFwcGVyIC5oZXJvLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhvbWUtd3JhcHBlciAuY29udGFjdC13cmFwcGVyIC5pbnZpdGF0aW9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxufVxcbi5ob21lLXdyYXBwZXIgLmNvbnRhY3Qtd3JhcHBlciAuaW52aXRhdGlvbi13cmFwcGVyIC5pbnZpdGF0aW9uLXVwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIgLmludml0YXRpb24td3JhcHBlciAuaW52aXRhdGlvbi1kb3duIHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIgLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG4uaG9tZS13cmFwcGVyIC5jb250YWN0LXdyYXBwZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuXFxuLm1lbnUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubWVudS13cmFwcGVyIC5tZW51IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMzBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAubWVudS13cmFwcGVyIC5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjI3LCAyMTMsIDE2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMTMsIDE2KTtcXG4gIGNvbG9yOiByZ2IoMjExLCA2OCwgMjUpO1xcbn1cXG4ubWVudS13cmFwcGVyIC5tZW51IC5kaXNoIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5tZW51LXdyYXBwZXIgLm1lbnUgLmRpc2ggLnBob3RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1lbnUtd3JhcHBlciAubWVudSAuZGlzaCAuZGVzY3JpcHRpb24ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubWVudS13cmFwcGVyIC5tZW51IC5kaXNoIC5wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYig0NiwgMjUsIDIzNSk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi53cmFwcGVyIC5ncmVldGluZ3Mge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLndyYXBwZXIgLm1hcC13cmFwcGVyIHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDFweCkge1xcbiAgLndyYXBwZXIgLm1hcC13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG4ud3JhcHBlciAubnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcXG59XFxuLndyYXBwZXIgLm1haWwge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLndyYXBwZXIgLm1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogM3M7XFxufVxcbi53cmFwcGVyIC5tYXAtaW52IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi53cmFwcGVyIC5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbi53cmFwcGVyIC5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE0KTtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIxMywgMTYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGFjaWZpY29cXFwiLCBjdXJzaXZlO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uaGVhZGVyIC5jaG9vc2UtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmhlYWRlciAuY2hvb3NlLWJhciA+ICoge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyIC5jaG9vc2UtYmFyID4gKjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW0gMCAwIDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIxMywgMTYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pY29ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pY29ucyA+ICo6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pY29ucyAuaWctaWNvbiB7XFxuICB3aWR0aDogMjhweDtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWljb25zIC5naXRodWItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNc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MEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDdkRSO0FEMERJO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3hEUjs7QUQ4REE7RUFFSSxXQUFBO0VBQ0EsYUEzUFc7RUE0UFgsbUNBOVBJO0VBK1BKLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDNURKO0FEZ0VJO0VBQ0ksZ0NBQUE7RUFFQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQy9EUjtBRGtFSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDaEVSO0FEaUVRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDL0RaO0FEaUVRO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQy9EWjs7QUR3RUE7RUFDSSx3QkFBQTtFQUNBLG1DQXZTSTtFQXdTSixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3JFSjtBRHVFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDckVSO0FEc0VRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNwRVo7QURzRVE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNwRVo7QUR1RVE7RUFDSSxXQUFBO0FDckVaO0FEdUVRO0VBQ0ksV0FBQTtBQ3JFWixDQUFBLG9DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwYSBmcm9tICcuL2ltYWdlcy9tYXBhLnBuZydcbiBcbiAgICBjb25zdCBNYXBhID0gbmV3IEltYWdlKClcbiAgICBNYXBhLnNyYyA9IG1hcGFcbiAgICBNYXBhLmNsYXNzTGlzdC5hZGQoXCJtYXAtaW52XCIpXG4gZnVuY3Rpb24gZHJhd0NvbnRhY3QoKXtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpXG4gICAgXG4gICAgICAgIGNvbnN0IGdyZWV0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdyZWV0aW5ncy5jbGFzc0xpc3QuYWRkKCdncmVldGluZ3MnKVxuICAgICAgICBncmVldGluZ3MudGV4dENvbnRlbnQgPSBcIlNlZSB5b3UgYXRcIlxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdyZWV0aW5ncylcblxuICAgICAgICBjb25zdCBzaG93TWFwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgc2hvd01hcEJ0bi50ZXh0Q29udGVudCA9IFwiU0hPVyBNQVBcIlxuICAgICAgICBzaG93TWFwQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIilcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzaG93TWFwQnRuKVxuXG4gICAgICAgIHNob3dNYXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBNYXBhLmNsYXNzTGlzdC5yZW1vdmUoXCJtYXAtaW52XCIpXG4gICAgICAgICAgICBNYXBhLmNsYXNzTGlzdC5hZGQoXCJtYXBcIilcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYXBXcmFwcGVyKVxuICAgICAgICBtYXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYXAtd3JhcHBlclwiKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFwV3JhcHBlci5hcHBlbmRDaGlsZChNYXBhKVxuICAgICAgICBcblxuXG5cblxuICAgICAgICBcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbnVtYmVyLnRleHRDb250ZW50PVwiKzQ4IDUwMSA0MjAgNjkwXCJcbiAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtYmVyKVxuXG4gICAgICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWlsLnRleHRDb250ZW50PSBcIm10Y291c2luZUByZXN0YXVyYW50LmNvbVwiXG4gICAgICAgIG1haWwuY2xhc3NMaXN0LmFkZCgnbWFpbCcpXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbClcblxuXG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudD0nJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHJhd0NvbnRhY3QoKSlcbn1cblxuIiwiaW1wb3J0IEJyZWFrZmFzdCBmcm9tICcuL2ltYWdlcy9icmVha2Zhc3QuanBnJ1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gICcuL2NvbnRhY3QuanMnXG5cbiBmdW5jdGlvbiBkcmF3SG9tZSgpe1xuICAgIC8vQ09OVEFJTkVSXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtd3JhcHBlclwiKVxuICAgIFxuXG4gICAgICAgIC8vSEVSTyBJTUdcbiAgICAgICAgY29uc3QgaGVyb0ltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZXJvSW1nV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoZXJvLWltZy13cmFwcGVyJylcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGhlcm9JbWcuc3JjID0gQnJlYWtmYXN0XG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChcImhlcm8taW1nXCIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1nV3JhcHBlcilcbiAgICAgICAgaGVyb0ltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVyb0ltZylcbiAgICAgICAgXG5cblxuICAgICAgICAvL0NPTlRBQ1RcbiAgICAgICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd3JhcHBlclwiKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdERpdilcblxuICAgICAgICAgICAgLy9JTlZJVEFUSU9OXG4gICAgICAgICAgICBjb25zdCBpbnZpdGF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGludml0YXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImludml0YXRpb24td3JhcHBlclwiKVxuICAgICAgICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbkRpdlVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZpdGF0aW9uRGl2RG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2VXBwZXIpXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdi5hcHBlbmRDaGlsZChpbnZpdGF0aW9uRGl2RG93bilcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2VXBwZXIuY2xhc3NMaXN0LmFkZChcImludml0YXRpb24tdXBwZXJcIilcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2RG93bi5jbGFzc0xpc3QuYWRkKFwiaW52aXRhdGlvbi1kb3duXCIpXG5cbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uRGl2VXBwZXIudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZS4uLlwiXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbkRpdkRvd24udGV4dENvbnRlbnQgPSBcIm9yIHZpc2l0IHVzXCJcblxuICAgICAgICAgICAgLy9CVVRUT05cbiAgICAgICAgICAgIGNvbnN0IHNlZUxvY2F0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHNlZUxvY2F0aW9uQnRuLmlubmVyVGV4dD1cIlNFRSBMT0NBVElPTlwiXG4gICAgICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHNlZUxvY2F0aW9uQnRuKVxuICAgICAgICAgICAgc2VlTG9jYXRpb25CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKVxuICAgICAgICAgICAgc2VlTG9jYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgICAgICAgICAgfSlcblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImhvbWVcIilcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdIb21lKCkpXG59XG4iLCJpbXBvcnQgdG9tYXRvc291cCBmcm9tICcuL2ltYWdlcy90b21hdG9zb3VwLmpwZydcbmltcG9ydCBwb2xpc2hkaW5uZXIgZnJvbSAnLi9pbWFnZXMvcG9saXNoZGlubmVyLmpwZydcbmltcG9ydCBwaXp6YXRvcGlhIGZyb20gJy4vaW1hZ2VzL3BpenphdG9waWEuanBnJ1xuaW1wb3J0IHp5Z2kgZnJvbSAnLi9pbWFnZXMvenlnaS5qcGcnXG5cbmNvbnN0IFRvbWF0b1NvdXBJbWcgPSBuZXcgSW1hZ2UoKVxuY29uc3QgUG9saXNoRGlubmVySW1nID0gbmV3IEltYWdlKClcbmNvbnN0IFBpenphdG9waWFJbWcgPSBuZXcgSW1hZ2UoKVxuY29uc3QgWnlnaUltZyA9IG5ldyBJbWFnZSgpXG5cblRvbWF0b1NvdXBJbWcuc3JjID0gdG9tYXRvc291cFxuUG9saXNoRGlubmVySW1nLnNyYyA9IHBvbGlzaGRpbm5lclxuUGl6emF0b3BpYUltZy5zcmMgPSBwaXp6YXRvcGlhXG5aeWdpSW1nLnNyYyA9IHp5Z2lcblxuXG5cbiBmdW5jdGlvbiBkcmF3TWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gICAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtd3JhcHBlcicpXG4gICAgXG4gICAgICAgIGNvbnN0IFRvbWF0b1NvdXAgPSBuZXcgRGlzaChUb21hdG9Tb3VwSW1nLCdUb21hdG8gU291cCcsJ0xvdmVseSBkZWxpY2lvdXMgdHJhZGl0aW9uYWwgcG9saXNoIHRvbWF0byBzb3VwIG1hZGUgZnJvbSBmcmVzaCB0b21hdG9lcyBzZXJ2ZWQgd2l0aCBob21lIG1hZGUgbm9vZGxlcy4gWW91IGFyZSBnb25uYSBsb3ZlIGl0Jyw4LjUwKSBcbiAgICAgICAgY29uc3QgUG9saXNoRGlubmVyID0gbmV3IERpc2goUG9saXNoRGlubmVySW1nLCdQb2xpc2ggZGUgdm9sYWlsbGUgJyxcIk91ciBQb2xpc2ggRGUgdm9sYWlsbGUgd2l0aCBob21lIG1hZGUgZnJpZXMgaXMgYSBtdXN0LXRyeSBkaXNoIGF0IG91ciByZXN0YXVyYW50LiBTbG93LWNvb2tlZCBwb3VsdHJ5IGlzIHNlcnZlZCAgd2l0aCB2ZWdldGFibGVzIGFuZCBzcGljZXMsIGFuZCBwYWlyZWQgd2l0aCBob21lIG1hZGUgZnJpZXMuXCIsMjkpIFxuICAgICAgICBjb25zdCBQaXp6YXRvcGlhID0gbmV3IERpc2goUGl6emF0b3BpYUltZywnUGl6emEnLCdUcnkgb3VyIGRlbGljaW91cyBJdGFsaWFuIHBpenphLCBtYWRlIHdpdGggYSBjcmlzcHkgY3J1c3QgYW5kIHRvcHBlZCB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cy4gT3VyIHBpenphIGlzIHN1cmUgdG8gc2F0aXNmeSB5b3VyIGNyYXZpbmcgZm9yIHNvbWV0aGluZyBzYXZvcnkgYW5kIGRlbGljaW91cy4gQ29tZSBhbmQgZW5qb3kgYSBzbGljZSBhdCBvdXIgcmVzdGF1cmFudCEnLDM0LjApIFxuICAgICAgICBjb25zdCBaeWdpID0gbmV3IERpc2goWnlnaUltZywnU3R1ZGVudCBkaXNoJywnSWYgeW91IGFyZSBodW5ncnkgYnJva2llIG9yIGp1c3QgYSBzdHVkZW50LiBJdCBkb2VzbnQgdGFzdGUgZ29vZC4gSXQgaXMgbm90IGZyZXNoLiBDaGVhcC4nLDcuMCkgXG4gICAgICAgIFxuICAgICAgICBsZXQgZGFuaWEgPSBbVG9tYXRvU291cCxQb2xpc2hEaW5uZXIsUGl6emF0b3BpYSxaeWdpXVxuXG4gICAgICAgIGZvcihsZXQgaT0wO2k8ZGFuaWEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBjb25zdCBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpc2guY2xhc3NMaXN0LmFkZChcImRpc2hcIilcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIikgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYW5pYVtpXS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIGRpc2guYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcInBob3RvXCIpXG4gICAgICAgICAgICAgICAgICAgIHBob3RvLnNyYyA9IGRhbmlhW2ldLnBob3RvLnNyY1xuICAgICAgICAgICAgICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHBob3RvKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhbmlhW2ldLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gZGFuaWFbaV0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChwcmljZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGRpc2gpXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgICAgIHJldHVybiBtZW51V3JhcHBlclxufVxuXG5cbmNsYXNzIERpc2h7XG4gICAgY29uc3RydWN0b3IoZGlzaFBob3RvLGRpc2hOYW1lLGRpc2hEZXNjcmlwdGlvbixkaXNoUHJpY2Upe1xuICAgICAgICB0aGlzLl9waG90byA9IGRpc2hQaG90b1xuICAgICAgICB0aGlzLl9uYW1lID0gZGlzaE5hbWVcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkaXNoRGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fcHJpY2UgPSBkaXNoUHJpY2VcbiAgICB9XG5cbiAgICBnZXQgcGhvdG8oKSB7cmV0dXJuIHRoaXMuX3Bob3RvfVxuICAgIGdldCBuYW1lKCkge3JldHVybiB0aGlzLl9uYW1lfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gdGhpcy5fZGVzY3JpcHRpb259XG4gICAgZ2V0IHByaWNlKCkge3JldHVybiB0aGlzLl9wcmljZX1cblxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKVxuICAgIG1haW4udGV4dENvbnRlbnQ9JydcbiAgICBtYWluLmFwcGVuZENoaWxkKGRyYXdNZW51KCkpXG4gICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5pbXBvcnQgZ2l0aHViSW1nIGZyb20gJy4vaW1hZ2VzL2dpdGh1YmxvZ28ucG5nJ1xuaW1wb3J0IGlnSW1nIGZyb20gJy4vaW1hZ2VzL2lnbG9nby5wbmcnXG5cbmNvbnN0IEdpdGh1YkltZyA9IG5ldyBJbWFnZSgpXG5jb25zdCBJZ0ltZyA9IG5ldyBJbWFnZSgpXG5cbkdpdGh1YkltZy5zcmMgPSBnaXRodWJJbWdcbklnSW1nLnNyYyA9IGlnSW1nXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gXCJNVCAncyAgICBDT1VTSU5FXCJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgXG4gICAgICAgIGNvbnN0IGNob29zZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNob29zZUJhci5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtYmFyJylcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNob29zZUJhcilcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaEhvbWUuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWhvbWUnKVxuICAgICAgICAgICAgY2hIb21lLnRleHRDb250ZW50ID0gXCJIT01FXCJcbiAgICAgICAgICAgIGNob29zZUJhci5hcHBlbmRDaGlsZChjaEhvbWUpXG4gICAgICAgICAgICBjaEhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkSG9tZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICBjb25zdCBjaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2hNZW51LmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1tZW51JylcbiAgICAgICAgICAgIGNoTWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiXG4gICAgICAgICAgICBjaG9vc2VCYXIuYXBwZW5kQ2hpbGQoY2hNZW51KVxuICAgICAgICAgICAgY2hNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZE1lbnUoKVxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaENvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWNvbnRhY3QnKVxuICAgICAgICAgICAgY2hDb250YWN0LnRleHRDb250ZW50ID0gXCJDT05UQUNUXCJcbiAgICAgICAgICAgIGNob29zZUJhci5hcHBlbmRDaGlsZChjaENvbnRhY3QpXG4gICAgICAgICAgICBjaENvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFjdCgpXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgXG4gICBcblxuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG5cbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGluZm8udGV4dENvbnRlbnQ9XCJNYWRlIGJ5IE1UXCJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGluZm8pXG5cbiAgICAgICAgY29uc3QgZm9vdGVySWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb290ZXJJY29ucy5jbGFzc0xpc3QuYWRkKCdmb290ZXItaWNvbnMnKVxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbnMpXG4gICAgICAgICAgICBmb290ZXJJY29ucy5hcHBlbmRDaGlsZChHaXRodWJJbWcpXG4gICAgICAgICAgICBmb290ZXJJY29ucy5hcHBlbmRDaGlsZChJZ0ltZylcbiAgICAgICAgICAgICAgICBHaXRodWJJbWcuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1pY29uXCIpXG4gICAgICAgICAgICAgICAgSWdJbWcuY2xhc3NMaXN0LmFkZChcImlnLWljb25cIilcblxuICAgICAgICAgICAgICAgIEdpdGh1YkltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vTXR0dDcvcmVzdGF1cmFudHBhZ2VcIixcIl9zZWxmXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBJZ0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL210dC5qcGVnL1wiLFwiX3NlbGZcIilcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxubWFpbi5pZD1cIm1haW5cIlxucmV0dXJuIG1haW5cbn1cblxuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbmZ1bmN0aW9uIEluaXRpYWxpemVXZWJzaXRlKCl7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG5cblxuXG4gICAgXG59XG5cbkluaXRpYWxpemVXZWJzaXRlKClcbmxvYWRIb21lKClcblxuXG5cblxuXG5cbi8vY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbi8vY29udGVudC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==