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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem 0;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\n.navigation {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.navigation input {\n  text-align: center;\n  font-size: 1.2rem;\n  width: 2rem;\n  appearance: textfield;\n  border: none;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.button {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  display: grid;\n  gap: 0.5rem;\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  width: 600px;\n  max-width: 75vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #fff;\n}\n\n.title-close {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n#big-pic {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n#name {\n  font-size: 1rem;\n  padding: 0.2rem;\n  width: 150px;\n  margin-bottom: 20px;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  height: 10vh;\n  font-size: 1rem;\n}\n\ninput:disabled {\n  background-color: #fff;\n}\n\ntextarea,\ninput:hover {\n  cursor: pointer;\n}\n\n.submitOpinion {\n  width: 100px;\n  font-size: 1rem;\n  margin: 0 auto 10px auto;\n}\n\n.closePopup {\n  width: 40px;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  main {\n    top: 79px;\n    bottom: 24px;\n  }\n\n  footer {\n    font-size: 1rem;\n    padding: 0.1rem 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem 0;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\n.navigation {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.navigation input {\n  text-align: center;\n  font-size: 1.2rem;\n  width: 2rem;\n  appearance: textfield;\n  border: none;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.button {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  display: grid;\n  gap: 0.5rem;\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  width: 600px;\n  max-width: 75vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #fff;\n}\n\n.title-close {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n#big-pic {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n#name {\n  font-size: 1rem;\n  padding: 0.2rem;\n  width: 150px;\n  margin-bottom: 20px;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  height: 10vh;\n  font-size: 1rem;\n}\n\ninput:disabled {\n  background-color: #fff;\n}\n\ntextarea,\ninput:hover {\n  cursor: pointer;\n}\n\n.submitOpinion {\n  width: 100px;\n  font-size: 1rem;\n  margin: 0 auto 10px auto;\n}\n\n.closePopup {\n  width: 40px;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  main {\n    top: 79px;\n    bottom: 24px;\n  }\n\n  footer {\n    font-size: 1rem;\n    padding: 0.1rem 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/app-id.js":
/*!***********************!*\
  !*** ./src/app-id.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('exGrmnNXlgE2dfxvkk5S');


/***/ }),

/***/ "./src/baseUrl.js":
/*!************************!*\
  !*** ./src/baseUrl.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi');

/***/ }),

/***/ "./src/clickLike.js":
/*!**************************!*\
  !*** ./src/clickLike.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ "./src/postLikes.js");


const clickLike = (show, heart) => {
  const likesNumber = heart.parentNode.querySelector('.number');
  const likesCheck = heart.parentNode.querySelector('.check');

  heart.innerHTML = '&#9829;';
  likesCheck.disabled = true;
  likesNumber.value = String(Number(likesNumber.value) + 1);

  (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(show);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickLike);

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
/* harmony import */ var _app_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-id.js */ "./src/app-id.js");
/* harmony import */ var _baseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl.js */ "./src/baseUrl.js");



const addComment = async ({ user, itemID, comment }) => {
  const data = await fetch(`${_baseUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: user,
      item_id: itemID,
      comment,
    }),
  });
  return data;
};

const getComments = async (itemId) => {
  const data = await fetch(`${_baseUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/comments?item_id=${itemId}`);
  return data.json();
};


/***/ }),

/***/ "./src/displayShows.js":
/*!*****************************!*\
  !*** ./src/displayShows.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _makeCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeCard.js */ "./src/makeCard.js");
/* harmony import */ var _mapLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapLikes.js */ "./src/mapLikes.js");



const displayShows = async () => {
  const count = document.querySelector('#count');
  const showsLikes = await (0,_mapLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showsWrapper = document.querySelector('.shows-wrapper');
  const frag = document.createDocumentFragment();

  showsLikes.forEach((show) => {
    const card = (0,_makeCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(show);
    frag.appendChild(card);
  });
  showsWrapper.appendChild(frag);

  count.textContent = `[1 -  ${showsLikes.length}]`;
  return showsLikes;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);


/***/ }),

/***/ "./src/getLikes.js":
/*!*************************!*\
  !*** ./src/getLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-id.js */ "./src/app-id.js");
/* harmony import */ var _baseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl.js */ "./src/baseUrl.js");



const getLikes = async () => {
  const response = await fetch(`${_baseUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/likes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);


/***/ }),

/***/ "./src/getShows.js":
/*!*************************!*\
  !*** ./src/getShows.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getShows = async (pg = 1) => {
  const response = await fetch(`https://api.tvmaze.com/shows?page=${pg - 1}`, {
    method: 'GET',
  });
  const json = await response.json();
  return json;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);


/***/ }),

/***/ "./src/makeCard.js":
/*!*************************!*\
  !*** ./src/makeCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clickLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickLike.js */ "./src/clickLike.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");



const cardInner = (show) => {
  const html = `
    <img src="${show.image.medium}">
    <div class="title">
      <h3>${show.name}</h3>
      <div class="likes likes-div">
        <input class="likes check" type="checkbox" name="likes" id="likes-${show.id}">
        <label class="likes label" for="likes-${show.id}">&#9825</label>
        <input class="likes number" type="text" value="${show.likes}" disabled>
      </div>
    </div>
    <input class="comment button" type="button" value="Comment">
  `;
  return html;
};

const popupInner = (show) => {
  const html = `
    <div class="popupContent">
      <div class="title-close">
        <h1 class="showTitle">${show.name}</h1>
        <input type="button" class="closePopup button" value="X">
      </div>
      <img id="big-pic" src="${show.image.original}">
      <div class="summary">${show.summary}</div>
      <div class="comments"></div>
      <div class="form">
        <input type="text" id="name" placeholder="Your name" required>
        <textarea id="opinion" placeholder="Type your opinion here..." required></textarea>
        <input class="submitOpinion button" type="submit" value="Submit">
      </div>
    </div>
  `;
  return html;
};

const paintComments = (popup, show) => {
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(show.id).then((comments) => {
    popup.querySelector('.comments').innerHTML = `
      ${comments.map((comment) => `
          <h3>${comment.username}</h3>
          <p>${comment.comment}</p>
          <p><i>${comment.creation_date}</i></p>
      `).join(' ')}
    `;
  });
};

const makeCard = (show) => {
  const showCard = document.createElement('li');
  const popup = document.querySelector('.createPopup');

  showCard.innerHTML = cardInner(show);

  showCard.querySelector('.comment').addEventListener('click', () => {
    popup.classList.add('invisible');
    popup.innerHTML = popupInner(show);

    const closePopup = document.querySelector('.closePopup');
    const submitOpinion = document.querySelector('.submitOpinion');

    submitOpinion.addEventListener('click', (e) => {
      e.preventDefault();
      const user = document.querySelector('.form #name').value;
      const comment = document.querySelector('.form #opinion').value;
      const itemID = show.id;
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.addComment)({ user, itemID, comment }).then(() => {
        paintComments(popup, show);
      });
    });
    closePopup.addEventListener('click', () => {
      popup.classList.remove('invisible');
    });
    paintComments(popup, show);
  });

  const heart = showCard.querySelector('.label');
  const check = showCard.querySelector('.check');
  check.addEventListener('change', () => {
    (0,_clickLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(show, heart);
  });

  return showCard;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCard);


/***/ }),

/***/ "./src/mapLikes.js":
/*!*************************!*\
  !*** ./src/mapLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ "./src/getShows.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/getLikes.js");



const mapLikes = async (pg = 1) => {
  const allShows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pg);
  const allLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  allShows.map((show) => {
    const item = allLikes.find((item) => item.item_id === show.id);
    show.likes = item !== undefined ? item.likes : 0;
    return show;
  });
  return allShows;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapLikes);


/***/ }),

/***/ "./src/postLikes.js":
/*!**************************!*\
  !*** ./src/postLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-id.js */ "./src/app-id.js");


const postLikes = async (show) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: show.id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.text();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayShows.js */ "./src/displayShows.js");



(0,_displayShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUN3Qjs7QUFFN0MsNERBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2FwcC1pZC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvY2xpY2tMaWtlLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvZGlzcGxheVNob3dzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9nZXRMaWtlcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvZ2V0U2hvd3MuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL21ha2VDYXJkLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9tYXBMaWtlcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvcG9zdExpa2VzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY0ZWY7XFxuICBib3JkZXItYm90dG9tOiA0cHggcmlkZ2UgIzU1NTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbiNzZWxlY3QtZ2VucmUgKiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXJnaW46IDAuMXJlbSAwLjVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0LjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJvdHRvbTogNTIuOHB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbm1haW4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB1bCBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOTVweCBhdXRvIDIuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbm1haW4gdWwgbGkgaW1nIHtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogMjk1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxubGkgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjAyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGNvbG9yOiAjNDk0OTQ5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgIGluc2V0IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgLmxhYmVsIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5jcmVhdGVQb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblxcbi5wb3B1cENvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA3NXZ3O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZS1jbG9zZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvd1RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JpZy1waWMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dDpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXRPcGluaW9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcXG59XFxuXFxuLmNsb3NlUG9wdXAge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY0ZWY7XFxuICBib3JkZXItdG9wOiAzcHggcmlkZ2UgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwIDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgdG9wOiA3OXB4O1xcbiAgICBib3R0b206IDI0cHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWiw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQjs7d0NBRXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGVmO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHJpZGdlICM1NTU7XFxufVxcblxcbiN0aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4jc2VsZWN0LWdlbnJlICoge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWFyZ2luOiAwLjFyZW0gMC41cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBib3R0b206IDUyLjhweDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5tYWluIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjEwcHgpO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gdWwgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjk1cHggYXV0byAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5tYWluIHVsIGxpIGltZyB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDI5NXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbmxpIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4wMjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBjb2xvcjogIzQ5NDk0OTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIG1hcmdpbjogMC4zcmVtIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OlxcbiAgICBpbnNldCAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcbiAgICBpbnNldCAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArIC5sYWJlbCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uY3JlYXRlUG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cztcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbn1cXG5cXG4ucG9wdXBDb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogNzV2dztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGl0bGUtY2xvc2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNob3dUaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNiaWctcGljIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0T3BpbmlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XFxufVxcblxcbi5jbG9zZVBvcHVwIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGVmO1xcbiAgYm9yZGVyLXRvcDogM3B4IHJpZGdlICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgbWFpbiB7XFxuICAgIHRvcDogNzlweDtcXG4gICAgYm90dG9tOiAyNHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAnZXhHcm1uTlhsZ0UyZGZ4dmtrNVMnO1xuIiwiZXhwb3J0IGRlZmF1bHQgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7IiwiaW1wb3J0IHBvc3RMaWtlcyBmcm9tICcuL3Bvc3RMaWtlcy5qcyc7XG5cbmNvbnN0IGNsaWNrTGlrZSA9IChzaG93LCBoZWFydCkgPT4ge1xuICBjb25zdCBsaWtlc051bWJlciA9IGhlYXJ0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLm51bWJlcicpO1xuICBjb25zdCBsaWtlc0NoZWNrID0gaGVhcnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcblxuICBoZWFydC5pbm5lckhUTUwgPSAnJiM5ODI5Oyc7XG4gIGxpa2VzQ2hlY2suZGlzYWJsZWQgPSB0cnVlO1xuICBsaWtlc051bWJlci52YWx1ZSA9IFN0cmluZyhOdW1iZXIobGlrZXNOdW1iZXIudmFsdWUpICsgMSk7XG5cbiAgcG9zdExpa2VzKHNob3cpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsaWNrTGlrZTsiLCJpbXBvcnQgYXBwSWQgZnJvbSAnLi9hcHAtaWQuanMnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi9iYXNlVXJsLmpzJztcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyB1c2VyLCBpdGVtSUQsIGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBwcy8ke2FwcElkfS9jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JRCxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcbiAgcmV0dXJuIGRhdGEuanNvbigpO1xufTtcbiIsImltcG9ydCBtYWtlQ2FyZCBmcm9tICcuL21ha2VDYXJkLmpzJztcbmltcG9ydCBtYXBMaWtlcyBmcm9tICcuL21hcExpa2VzLmpzJztcblxuY29uc3QgZGlzcGxheVNob3dzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudCcpO1xuICBjb25zdCBzaG93c0xpa2VzID0gYXdhaXQgbWFwTGlrZXMoKTtcbiAgY29uc3Qgc2hvd3NXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dzLXdyYXBwZXInKTtcbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBzaG93c0xpa2VzLmZvckVhY2goKHNob3cpID0+IHtcbiAgICBjb25zdCBjYXJkID0gbWFrZUNhcmQoc2hvdyk7XG4gICAgZnJhZy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG4gIHNob3dzV3JhcHBlci5hcHBlbmRDaGlsZChmcmFnKTtcblxuICBjb3VudC50ZXh0Q29udGVudCA9IGBbMSAtICAke3Nob3dzTGlrZXMubGVuZ3RofV1gO1xuICByZXR1cm4gc2hvd3NMaWtlcztcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5U2hvd3M7XG4iLCJpbXBvcnQgYXBwSWQgZnJvbSAnLi9hcHAtaWQuanMnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi9iYXNlVXJsLmpzJztcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBwcy8ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRMaWtlcztcbiIsImNvbnN0IGdldFNob3dzID0gYXN5bmMgKHBnID0gMSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9JHtwZyAtIDF9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0pO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ganNvbjtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRTaG93cztcbiIsImltcG9ydCBjbGlja0xpa2UgZnJvbSAnLi9jbGlja0xpa2UuanMnO1xuaW1wb3J0IHsgYWRkQ29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcblxuY29uc3QgY2FyZElubmVyID0gKHNob3cpID0+IHtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8aW1nIHNyYz1cIiR7c2hvdy5pbWFnZS5tZWRpdW19XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICA8aDM+JHtzaG93Lm5hbWV9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcyBsaWtlcy1kaXZcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibGlrZXMgY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibGlrZXNcIiBpZD1cImxpa2VzLSR7c2hvdy5pZH1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibGlrZXMgbGFiZWxcIiBmb3I9XCJsaWtlcy0ke3Nob3cuaWR9XCI+JiM5ODI1PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibGlrZXMgbnVtYmVyXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7c2hvdy5saWtlc31cIiBkaXNhYmxlZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbnB1dCBjbGFzcz1cImNvbW1lbnQgYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudFwiPlxuICBgO1xuICByZXR1cm4gaHRtbDtcbn07XG5cbmNvbnN0IHBvcHVwSW5uZXIgPSAoc2hvdykgPT4ge1xuICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cENvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jbG9zZVwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJzaG93VGl0bGVcIj4ke3Nob3cubmFtZX08L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VQb3B1cCBidXR0b25cIiB2YWx1ZT1cIlhcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBpZD1cImJpZy1waWNcIiBzcmM9XCIke3Nob3cuaW1hZ2Uub3JpZ2luYWx9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPiR7c2hvdy5zdW1tYXJ5fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJvcGluaW9uXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgb3BpbmlvbiBoZXJlLi4uXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic3VibWl0T3BpbmlvbiBidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICByZXR1cm4gaHRtbDtcbn07XG5cbmNvbnN0IHBhaW50Q29tbWVudHMgPSAocG9wdXAsIHNob3cpID0+IHtcbiAgZ2V0Q29tbWVudHMoc2hvdy5pZCkudGhlbigoY29tbWVudHMpID0+IHtcbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKS5pbm5lckhUTUwgPSBgXG4gICAgICAke2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gYFxuICAgICAgICAgIDxoMz4ke2NvbW1lbnQudXNlcm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD4ke2NvbW1lbnQuY29tbWVudH08L3A+XG4gICAgICAgICAgPHA+PGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9pPjwvcD5cbiAgICAgIGApLmpvaW4oJyAnKX1cbiAgICBgO1xuICB9KTtcbn07XG5cbmNvbnN0IG1ha2VDYXJkID0gKHNob3cpID0+IHtcbiAgY29uc3Qgc2hvd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQb3B1cCcpO1xuXG4gIHNob3dDYXJkLmlubmVySFRNTCA9IGNhcmRJbm5lcihzaG93KTtcblxuICBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIHBvcHVwLmlubmVySFRNTCA9IHBvcHVwSW5uZXIoc2hvdyk7XG5cbiAgICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlUG9wdXAnKTtcbiAgICBjb25zdCBzdWJtaXRPcGluaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdE9waW5pb24nKTtcblxuICAgIHN1Ym1pdE9waW5pb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtICNuYW1lJykudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0gI29waW5pb24nKS52YWx1ZTtcbiAgICAgIGNvbnN0IGl0ZW1JRCA9IHNob3cuaWQ7XG4gICAgICBhZGRDb21tZW50KHsgdXNlciwgaXRlbUlELCBjb21tZW50IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBwYWludENvbW1lbnRzKHBvcHVwLCBzaG93KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNsb3NlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICB9KTtcbiAgICBwYWludENvbW1lbnRzKHBvcHVwLCBzaG93KTtcbiAgfSk7XG5cbiAgY29uc3QgaGVhcnQgPSBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcbiAgY29uc3QgY2hlY2sgPSBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNsaWNrTGlrZShzaG93LCBoZWFydCk7XG4gIH0pO1xuXG4gIHJldHVybiBzaG93Q2FyZDtcbn07XG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImltcG9ydCBnZXRTaG93cyBmcm9tICcuL2dldFNob3dzLmpzJztcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldExpa2VzLmpzJztcblxuY29uc3QgbWFwTGlrZXMgPSBhc3luYyAocGcgPSAxKSA9PiB7XG4gIGNvbnN0IGFsbFNob3dzID0gYXdhaXQgZ2V0U2hvd3MocGcpO1xuICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGFsbFNob3dzLm1hcCgoc2hvdykgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBhbGxMaWtlcy5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IHNob3cuaWQpO1xuICAgIHNob3cubGlrZXMgPSBpdGVtICE9PSB1bmRlZmluZWQgPyBpdGVtLmxpa2VzIDogMDtcbiAgICByZXR1cm4gc2hvdztcbiAgfSk7XG4gIHJldHVybiBhbGxTaG93cztcbn07XG5leHBvcnQgZGVmYXVsdCBtYXBMaWtlcztcbiIsImltcG9ydCBhcHBJZCBmcm9tICcuL2FwcC1pZC5qcyc7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChzaG93KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IHNob3cuaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5U2hvd3MgZnJvbSAnLi9kaXNwbGF5U2hvd3MuanMnO1xuXG5kaXNwbGF5U2hvd3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==