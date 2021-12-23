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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem 0;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\n.navigation {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.navigation input {\n  text-align: center;\n  font-size: 1.2rem;\n  width: 2rem;\n  appearance: textfield;\n  border: none;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.button {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  display: grid;\n  gap: 0.5rem;\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  width: 600px;\n  max-width: 75vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #fff;\n}\n\n.title-close {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n#big-pic {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n#name {\n  padding: 0.2rem;\n  width: 250px;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  height: 3vh;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  height: 15vh;\n  font-size: 0.9rem;\n  border-radius: 5px;\n  border: 1px solid black;\n}\n\ninput:disabled {\n  background-color: #fff;\n}\n\ntextarea,\ninput:hover {\n  cursor: pointer;\n}\n\n.submitOpinion {\n  width: 100px;\n  height: 4vh;\n  font-size: 1rem;\n  margin: 0 auto 10px auto;\n  background-color: #2980b9;\n  border: 1px solid;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-weight: bold;\n}\n\n.closePopup {\n  width: 60px;\n  height: 4vh;\n  font-size: 20px;\n  background-color: #e00000;\n  border: 1px solid;\n  color: #fff;\n  font-weight: bold;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  main {\n    top: 79px;\n    bottom: 24px;\n  }\n\n  footer {\n    font-size: 1rem;\n    padding: 0.1rem 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem 0;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\n.navigation {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.navigation input {\n  text-align: center;\n  font-size: 1.2rem;\n  width: 2rem;\n  appearance: textfield;\n  border: none;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.button {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  display: grid;\n  gap: 0.5rem;\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  width: 600px;\n  max-width: 75vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #fff;\n}\n\n.title-close {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n#big-pic {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n#name {\n  padding: 0.2rem;\n  width: 250px;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  height: 3vh;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  height: 15vh;\n  font-size: 0.9rem;\n  border-radius: 5px;\n  border: 1px solid black;\n}\n\ninput:disabled {\n  background-color: #fff;\n}\n\ntextarea,\ninput:hover {\n  cursor: pointer;\n}\n\n.submitOpinion {\n  width: 100px;\n  height: 4vh;\n  font-size: 1rem;\n  margin: 0 auto 10px auto;\n  background-color: #2980b9;\n  border: 1px solid;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-weight: bold;\n}\n\n.closePopup {\n  width: 60px;\n  height: 4vh;\n  font-size: 20px;\n  background-color: #e00000;\n  border: 1px solid;\n  color: #fff;\n  font-weight: bold;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  main {\n    top: 79px;\n    bottom: 24px;\n  }\n\n  footer {\n    font-size: 1rem;\n    padding: 0.1rem 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/counter-comments.js":
/*!*********************************!*\
  !*** ./src/counter-comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = (comments) => comments.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);

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
/* harmony import */ var _counter_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-comments.js */ "./src/counter-comments.js");




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
        <button type="button" class="closePopup">X</button>
      </div>
      <img src="${show.image.medium}">
      <p>${show.summary}</p>
      <div class="comments" id='comments'></div>
      <div class="form">
        <input type="text" id="name" placeholder="Your name">
        <textarea id="opinion" placeholder="Type your opinion here..."></textarea>
        <button class="submitOpinion" type="submit">Submit</button>
      </div>
      
    </div>
  `;
  return html;
};

const paintComments = (popup, show) => {
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(show.id).then((comments) => {
    popup.querySelector('.comments').innerHTML = `
    <h3> Total comments: ${(0,_counter_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comments)} </h3> 
      ${comments.map((comment) => `
          <h1>${comment.username}</h1>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxh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ZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZhO0FBQ0E7O0FBRXJDO0FBQ0EseUJBQXlCLHdEQUFRO0FBQ2pDLHlCQUF5Qix3REFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYlE7O0FBRWhDO0FBQ0EsMEdBQTBHLGtEQUFLLENBQUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsb0NBQW9DO0FBQ25ELEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7O1VDWnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3dCOztBQUU3Qyw0REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvYXBwLWlkLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9iYXNlVXJsLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9jbGlja0xpa2UuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9jb3VudGVyLWNvbW1lbnRzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9kaXNwbGF5U2hvd3MuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2dldExpa2VzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9nZXRTaG93cy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvbWFrZUNhcmQuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL21hcExpa2VzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogNTA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRlZjtcXG4gIGJvcmRlci1ib3R0b206IDRweCByaWRnZSAjNTU1O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuI3NlbGVjdC1nZW5yZSAqIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1hcmdpbjogMC4xcmVtIDAuNXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYm90dG9tOiA1Mi44cHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24gaW5wdXQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubWFpbiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIxMHB4KTtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI5NXB4IGF1dG8gMi42cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubWFpbiB1bCBsaSBpbWcge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiAyOTVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG5saSBpbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDI7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMyB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXItY29sb3I6ICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgY29sb3I6ICM0OTQ5NDk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXG4gICAgaW5zZXQgLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAubGFiZWwge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm51bWJlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmNyZWF0ZVBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXM7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG59XFxuXFxuLnBvcHVwQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXgtd2lkdGg6IDc1dnc7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRpdGxlLWNsb3NlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaG93VGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYmlnLXBpYyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNuYW1lIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogM3ZoO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dDpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXRPcGluaW9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNHZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2VQb3B1cCB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNHZoO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMDAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRlZjtcXG4gIGJvcmRlci10b3A6IDNweCByaWRnZSAjNTU1O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICB0b3A6IDc5cHg7XFxuICAgIGJvdHRvbTogMjRweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4xcmVtIDA7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCOzt3Q0FFc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY0ZWY7XFxuICBib3JkZXItYm90dG9tOiA0cHggcmlkZ2UgIzU1NTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbiNzZWxlY3QtZ2VucmUgKiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXJnaW46IDAuMXJlbSAwLjVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0LjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJvdHRvbTogNTIuOHB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbm1haW4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB1bCBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOTVweCBhdXRvIDIuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbm1haW4gdWwgbGkgaW1nIHtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogMjk1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxubGkgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjAyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGNvbG9yOiAjNDk0OTQ5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgIGluc2V0IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgLmxhYmVsIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5jcmVhdGVQb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblxcbi5wb3B1cENvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA3NXZ3O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZS1jbG9zZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvd1RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JpZy1waWMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmFtZSB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0T3BpbmlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlUG9wdXAge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDAwMDA7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY0ZWY7XFxuICBib3JkZXItdG9wOiAzcHggcmlkZ2UgIzU1NTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwIDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgdG9wOiA3OXB4O1xcbiAgICBib3R0b206IDI0cHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0ICdleEdybW5OWGxnRTJkZnh2a2s1Uyc7XG4iLCJleHBvcnQgZGVmYXVsdCAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJzsiLCJpbXBvcnQgcG9zdExpa2VzIGZyb20gJy4vcG9zdExpa2VzLmpzJztcblxuY29uc3QgY2xpY2tMaWtlID0gKHNob3csIGhlYXJ0KSA9PiB7XG4gIGNvbnN0IGxpa2VzTnVtYmVyID0gaGVhcnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyJyk7XG4gIGNvbnN0IGxpa2VzQ2hlY2sgPSBoZWFydC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjaycpO1xuXG4gIGhlYXJ0LmlubmVySFRNTCA9ICcmIzk4Mjk7JztcbiAgbGlrZXNDaGVjay5kaXNhYmxlZCA9IHRydWU7XG4gIGxpa2VzTnVtYmVyLnZhbHVlID0gU3RyaW5nKE51bWJlcihsaWtlc051bWJlci52YWx1ZSkgKyAxKTtcblxuICBwb3N0TGlrZXMoc2hvdyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xpY2tMaWtlOyIsImltcG9ydCBhcHBJZCBmcm9tICcuL2FwcC1pZC5qcyc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuL2Jhc2VVcmwuanMnO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jICh7IHVzZXIsIGl0ZW1JRCwgY29tbWVudCB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgaXRlbV9pZDogaXRlbUlELFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWApO1xuICByZXR1cm4gZGF0YS5qc29uKCk7XG59O1xuIiwiY29uc3QgY291bnRDb21tZW50cyA9IChjb21tZW50cykgPT4gY29tbWVudHMubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50czsiLCJpbXBvcnQgbWFrZUNhcmQgZnJvbSAnLi9tYWtlQ2FyZC5qcyc7XG5pbXBvcnQgbWFwTGlrZXMgZnJvbSAnLi9tYXBMaWtlcy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnQnKTtcbiAgY29uc3Qgc2hvd3NMaWtlcyA9IGF3YWl0IG1hcExpa2VzKCk7XG4gIGNvbnN0IHNob3dzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93cy13cmFwcGVyJyk7XG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgc2hvd3NMaWtlcy5mb3JFYWNoKChzaG93KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IG1ha2VDYXJkKHNob3cpO1xuICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBzaG93c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG5cbiAgY291bnQudGV4dENvbnRlbnQgPSBgWzEgLSAgJHtzaG93c0xpa2VzLmxlbmd0aH1dYDtcbiAgcmV0dXJuIHNob3dzTGlrZXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVNob3dzO1xuIiwiaW1wb3J0IGFwcElkIGZyb20gJy4vYXBwLWlkLmpzJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4vYmFzZVVybC5qcyc7XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwcHMvJHthcHBJZH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TGlrZXM7XG4iLCJjb25zdCBnZXRTaG93cyA9IGFzeW5jIChwZyA9IDEpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPSR7cGcgLSAxfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0U2hvd3M7XG4iLCJpbXBvcnQgY2xpY2tMaWtlIGZyb20gJy4vY2xpY2tMaWtlLmpzJztcbmltcG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgY291bnRDb21tZW50cyBmcm9tICcuL2NvdW50ZXItY29tbWVudHMuanMnO1xuXG5jb25zdCBjYXJkSW5uZXIgPSAoc2hvdykgPT4ge1xuICBjb25zdCBodG1sID0gYFxuICAgIDxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm1lZGl1bX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxoMz4ke3Nob3cubmFtZX08L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImxpa2VzIGxpa2VzLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJsaWtlcyBjaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJsaWtlc1wiIGlkPVwibGlrZXMtJHtzaG93LmlkfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsaWtlcyBsYWJlbFwiIGZvcj1cImxpa2VzLSR7c2hvdy5pZH1cIj4mIzk4MjU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJsaWtlcyBudW1iZXJcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtzaG93Lmxpa2VzfVwiIGRpc2FibGVkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IGNsYXNzPVwiY29tbWVudCBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21tZW50XCI+XG4gIGA7XG4gIHJldHVybiBodG1sO1xufTtcblxuY29uc3QgcG9wdXBJbm5lciA9IChzaG93KSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwQ29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNsb3NlXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInNob3dUaXRsZVwiPiR7c2hvdy5uYW1lfTwvaDE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VQb3B1cFwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiPlxuICAgICAgPHA+JHtzaG93LnN1bW1hcnl9PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzXCIgaWQ9J2NvbW1lbnRzJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCI+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm9waW5pb25cIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBvcGluaW9uIGhlcmUuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0T3BpbmlvblwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIGA7XG4gIHJldHVybiBodG1sO1xufTtcblxuY29uc3QgcGFpbnRDb21tZW50cyA9IChwb3B1cCwgc2hvdykgPT4ge1xuICBnZXRDb21tZW50cyhzaG93LmlkKS50aGVuKChjb21tZW50cykgPT4ge1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpLmlubmVySFRNTCA9IGBcbiAgICA8aDM+IFRvdGFsIGNvbW1lbnRzOiAke2NvdW50Q29tbWVudHMoY29tbWVudHMpfSA8L2gzPiBcbiAgICAgICR7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiBgXG4gICAgICAgICAgPGgxPiR7Y29tbWVudC51c2VybmFtZX08L2gxPlxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICA8cD48aT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2k+PC9wPlxuICAgICAgYCkuam9pbignICcpfVxuICAgIGA7XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZUNhcmQgPSAoc2hvdykgPT4ge1xuICBjb25zdCBzaG93Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVBvcHVwJyk7XG5cbiAgc2hvd0NhcmQuaW5uZXJIVE1MID0gY2FyZElubmVyKHNob3cpO1xuXG4gIHNob3dDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgcG9wdXAuaW5uZXJIVE1MID0gcG9wdXBJbm5lcihzaG93KTtcblxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQb3B1cCcpO1xuICAgIGNvbnN0IHN1Ym1pdE9waW5pb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0T3BpbmlvbicpO1xuXG4gICAgc3VibWl0T3Bpbmlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0gI25hbWUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybSAjb3BpbmlvbicpLnZhbHVlO1xuICAgICAgY29uc3QgaXRlbUlEID0gc2hvdy5pZDtcbiAgICAgIGFkZENvbW1lbnQoeyB1c2VyLCBpdGVtSUQsIGNvbW1lbnQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHBhaW50Q29tbWVudHMocG9wdXAsIHNob3cpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2xvc2VQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIH0pO1xuICAgIHBhaW50Q29tbWVudHMocG9wdXAsIHNob3cpO1xuICB9KTtcblxuICBjb25zdCBoZWFydCA9IHNob3dDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpO1xuICBjb25zdCBjaGVjayA9IHNob3dDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjaycpO1xuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY2xpY2tMaWtlKHNob3csIGhlYXJ0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNob3dDYXJkO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ha2VDYXJkO1xuIiwiaW1wb3J0IGdldFNob3dzIGZyb20gJy4vZ2V0U2hvd3MuanMnO1xuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuXG5jb25zdCBtYXBMaWtlcyA9IGFzeW5jIChwZyA9IDEpID0+IHtcbiAgY29uc3QgYWxsU2hvd3MgPSBhd2FpdCBnZXRTaG93cyhwZyk7XG4gIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgYWxsU2hvd3MubWFwKChzaG93KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGFsbExpa2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gc2hvdy5pZCk7XG4gICAgc2hvdy5saWtlcyA9IGl0ZW0gIT09IHVuZGVmaW5lZCA/IGl0ZW0ubGlrZXMgOiAwO1xuICAgIHJldHVybiBzaG93O1xuICB9KTtcbiAgcmV0dXJuIGFsbFNob3dzO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1hcExpa2VzO1xuIiwiaW1wb3J0IGFwcElkIGZyb20gJy4vYXBwLWlkLmpzJztcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKHNob3cpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogc2hvdy5pZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcG9zdExpa2VzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRpc3BsYXlTaG93cyBmcm9tICcuL2Rpc3BsYXlTaG93cy5qcyc7XG5cbmRpc3BsYXlTaG93cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9