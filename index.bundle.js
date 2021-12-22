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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.comment {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.title-close {\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  width: 150px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  width: 200px;\n  height: 10vh;\n}\n\n.submitOpinion {\n  width: 100px;\n  height: 4vh;\n}\n\n.closePopup {\n  width: 40px;\n  height: 3vh;\n  border: 1px solid;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n\n  /* display: flex; */\n\n  /* flex-direction: column; */\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,cAAc;EACd,OAAO;EACP,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,SAAS;EACT,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,4DAA4D;EAC5D,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,qBAAqB;EACrB;;wCAEsC;AACxC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,oBAAoB;EACpB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;EACT,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,4BAA4B;;EAE5B,mBAAmB;;EAEnB,4BAA4B;EAC5B,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  width: 100vw;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f4ef;\n  border-bottom: 4px ridge #555;\n}\n\n#title {\n  display: flex;\n  align-items: center;\n}\n\n#logo {\n  height: 75px;\n}\n\n#select-genre * {\n  padding: 0.2rem;\n  margin: 0.1rem 0.5rem;\n}\n\nmain {\n  position: absolute;\n  top: 4.5rem;\n  padding: 0.5rem;\n  bottom: 52.8px;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  gap: 20px;\n  margin: auto;\n  padding: 2.5rem;\n  justify-content: center;\n}\n\nmain ul li {\n  display: grid;\n  grid-template-rows: 295px auto 2.6rem;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nmain ul li img {\n  width: 210px;\n  height: 295px;\n  transition: all 0.5s;\n}\n\nli img:hover {\n  scale: 1.02;\n}\n\n.title {\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  padding: 0.1rem;\n  height: 2rem;\n  border: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nh3 {\n  clear: both;\n}\n\n.comment {\n  height: 2rem;\n  width: 50%;\n  align-self: flex-end;\n  border-color: #ccc;\n  background-color: #ccc;\n  color: #494949;\n  position: relative;\n  padding: 0.3rem;\n  margin: 0.3rem auto;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 1px 1px 0 rgba(255, 255, 255, 0.2),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.6);\n}\n\n.check {\n  display: none;\n}\n\n.check:checked + .label {\n  color: red;\n}\n\n.number {\n  font-size: 1rem;\n  width: 2rem;\n}\n\n.createPopup {\n  display: flex;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.9s;\n}\n\n.invisible {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(0%);\n}\n\n.popupContent {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 30px 50px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.title-close {\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.showTitle {\n  width: 100%;\n  align-items: center;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  width: 150px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\ntextarea {\n  margin-bottom: 20px;\n  width: 200px;\n  height: 10vh;\n}\n\n.submitOpinion {\n  width: 100px;\n  height: 4vh;\n}\n\n.closePopup {\n  width: 40px;\n  height: 3vh;\n  border: 1px solid;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  padding: 1rem 0;\n  text-align: center;\n  background-color: #f5f4ef;\n  border-top: 3px ridge #555;\n  border-radius: 50px 50px 0 0;\n\n  /* display: flex; */\n\n  /* flex-direction: column; */\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi");

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




const addComment = async ({user, itemID, comment}) => {
    const data = await fetch(`${_baseUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/comments`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user,
            item_id: itemID,
            comment
        })
    })
    return data;
}

const getComments = async (itemId) => {
    const data = await fetch(`${_baseUrl_js__WEBPACK_IMPORTED_MODULE_1__["default"]}/apps/${_app_id_js__WEBPACK_IMPORTED_MODULE_0__["default"]}/comments?item_id=${itemId}`)
    return await data.json()
}



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
  const showsLikes = await (0,_mapLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showsWrapper = document.querySelector('.shows-wrapper');
  const frag = document.createDocumentFragment();
  showsLikes.forEach((show) => {
    const card = (0,_makeCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(show);
    frag.appendChild(card);
  });
  showsWrapper.appendChild(frag);
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


// const appId = 'aCvUcU44XeA6m6Pc5YC4'

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
const getShows = async (pg = 0) => {
  const response = await fetch(`https://api.tvmaze.com/shows?page=${pg}`, {
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
        <button type="button" class="closePopup">X</button>
      </div>
      <img src="${show.image.medium}">
      <p>${show.summary}</p>

      <div class="form">
        <input type="text" id="name" placeholder="Your name">
        <textarea id="opinion" placeholder="Type your opinion here..."></textarea>
        <button class="submitOpinion" type="submit">Submit</button>
      </div>
      <div class="comments"></div>
    </div>
  `;
  return html;
};

const paintComments = (popup, show) => {
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(show.id).then(comments => {
    popup.querySelector('.comments').innerHTML = `
      ${comments.map(comment => `
          <h1>${comment.username}</h1>
          <p>${comment.comment}</p>
          <p><i>${comment.creation_date}</i></p>
      `).join(' ')}
    `;
  })
}

const makeCard = (show) => {
  const showCard = document.createElement('li');
  const popup = document.querySelector('.createPopup');

  showCard.innerHTML = cardInner(show);

  showCard.querySelector('.comment').addEventListener('click', () => {
    popup.classList.add('invisible');
    popup.innerHTML = popupInner(show)

    const closePopup = document.querySelector('.closePopup');
    const submitOpinion = document.querySelector('.submitOpinion');
    
    submitOpinion.addEventListener('click', (e) => {
      e.preventDefault();
      const user = document.querySelector('.form #name').value;
      const comment = document.querySelector('.form #opinion').value;
      const itemID = show.id;
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.addComment)({user, itemID, comment}).then( data => {
        paintComments(popup, show)
      })
    })
    closePopup.addEventListener('click', () => {
      popup.classList.remove('invisible');
    });
    paintComments(popup, show)
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



const mapLikes = async () => {
  const allShows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUTs7QUFFaEM7QUFDQSwwR0FBMEcsa0RBQUssQ0FBQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxvQ0FBb0M7QUFDbkQsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7VUNaekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDd0I7O0FBRTdDLDREQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9hcHAtaWQuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2NsaWNrTGlrZS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2Rpc3BsYXlTaG93cy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2dldFNob3dzLmpzIiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay8uL3NyYy9tYWtlQ2FyZC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svLi9zcmMvbWFwTGlrZXMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlZmF1bHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVmYXVsdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGVmO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHJpZGdlICM1NTU7XFxufVxcblxcbiN0aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4jc2VsZWN0LWdlbnJlICoge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWFyZ2luOiAwLjFyZW0gMC41cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm90dG9tOiA1Mi44cHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5tYWluIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjEwcHgpO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gdWwgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjk1cHggYXV0byAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5tYWluIHVsIGxpIGltZyB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDI5NXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbmxpIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4wMjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXItY29sb3I6ICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgY29sb3I6ICM0OTQ5NDk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBtYXJnaW46IDAuM3JlbSBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXG4gICAgaW5zZXQgLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAubGFiZWwge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm51bWJlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmNyZWF0ZVBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcblxcbi5wb3B1cENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLWNsb3NlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvd1RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4uc3VibWl0T3BpbmlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDR2aDtcXG59XFxuXFxuLmNsb3NlUG9wdXAge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGVmO1xcbiAgYm9yZGVyLXRvcDogM3B4IHJpZGdlICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMCAwO1xcblxcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXG5cXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCOzt3Q0FFc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw0QkFBNEI7O0VBRTVCLG1CQUFtQjs7RUFFbkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogNTA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRlZjtcXG4gIGJvcmRlci1ib3R0b206IDRweCByaWRnZSAjNTU1O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuI3NlbGVjdC1nZW5yZSAqIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1hcmdpbjogMC4xcmVtIDAuNXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvdHRvbTogNTIuOHB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxubWFpbiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIxMHB4KTtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI5NXB4IGF1dG8gMi42cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubWFpbiB1bCBsaSBpbWcge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiAyOTVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG5saSBpbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDI7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMyB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmNvbW1lbnQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGNvbG9yOiAjNDk0OTQ5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgIGluc2V0IC0xcHggLTFweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgLmxhYmVsIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5jcmVhdGVQb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cztcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbn1cXG5cXG4ucG9wdXBDb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1jbG9zZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNob3dUaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLnN1Ym1pdE9waW5pb24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0dmg7XFxufVxcblxcbi5jbG9zZVBvcHVwIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRlZjtcXG4gIGJvcmRlci10b3A6IDNweCByaWRnZSAjNTU1O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMDtcXG5cXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuXFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgJ2V4R3Jtbk5YbGdFMmRmeHZrazVTJztcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBcImh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaVwiOyIsImltcG9ydCBwb3N0TGlrZXMgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuXG5jb25zdCBjbGlja0xpa2UgPSAoc2hvdywgaGVhcnQpID0+IHtcbiAgY29uc3QgbGlrZXNOdW1iZXIgPSBoZWFydC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXInKTtcbiAgY29uc3QgbGlrZXNDaGVjayA9IGhlYXJ0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XG5cbiAgaGVhcnQuaW5uZXJIVE1MID0gJyYjOTgyOTsnO1xuICBsaWtlc0NoZWNrLmRpc2FibGVkID0gdHJ1ZTtcbiAgbGlrZXNOdW1iZXIudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGxpa2VzTnVtYmVyLnZhbHVlKSArIDEpO1xuXG4gIHBvc3RMaWtlcyhzaG93KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjbGlja0xpa2U7IiwiaW1wb3J0IGFwcElkIGZyb20gXCIuL2FwcC1pZC5qc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybC5qc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHt1c2VyLCBpdGVtSUQsIGNvbW1lbnR9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwcHMvJHthcHBJZH0vY29tbWVudHNgLHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JRCxcbiAgICAgICAgICAgIGNvbW1lbnRcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKVxuICAgIHJldHVybiBhd2FpdCBkYXRhLmpzb24oKVxufVxuXG4iLCJpbXBvcnQgbWFrZUNhcmQgZnJvbSAnLi9tYWtlQ2FyZC5qcyc7XG5pbXBvcnQgbWFwTGlrZXMgZnJvbSAnLi9tYXBMaWtlcy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2hvd3NMaWtlcyA9IGF3YWl0IG1hcExpa2VzKCk7XG4gIGNvbnN0IHNob3dzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93cy13cmFwcGVyJyk7XG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHNob3dzTGlrZXMuZm9yRWFjaCgoc2hvdykgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBtYWtlQ2FyZChzaG93KTtcbiAgICBmcmFnLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbiAgc2hvd3NXcmFwcGVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICByZXR1cm4gc2hvd3NMaWtlcztcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5U2hvd3M7XG4iLCJpbXBvcnQgYXBwSWQgZnJvbSBcIi4vYXBwLWlkLmpzXCJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmwuanNcIjtcbi8vIGNvbnN0IGFwcElkID0gJ2FDdlVjVTQ0WGVBNm02UGM1WUM0J1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzO1xuIiwiY29uc3QgZ2V0U2hvd3MgPSBhc3luYyAocGcgPSAwKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT0ke3BnfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0U2hvd3M7XG4iLCJpbXBvcnQgY2xpY2tMaWtlIGZyb20gJy4vY2xpY2tMaWtlLmpzJztcbmltcG9ydCB7YWRkQ29tbWVudCwgZ2V0Q29tbWVudHN9IGZyb20gJy4vY29tbWVudHMuanMnO1xuXG5jb25zdCBjYXJkSW5uZXIgPSAoc2hvdykgPT4ge1xuICBjb25zdCBodG1sID0gYFxuICAgIDxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm1lZGl1bX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxoMz4ke3Nob3cubmFtZX08L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImxpa2VzIGxpa2VzLWRpdlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJsaWtlcyBjaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJsaWtlc1wiIGlkPVwibGlrZXMtJHtzaG93LmlkfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsaWtlcyBsYWJlbFwiIGZvcj1cImxpa2VzLSR7c2hvdy5pZH1cIj4mIzk4MjU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJsaWtlcyBudW1iZXJcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtzaG93Lmxpa2VzfVwiIGRpc2FibGVkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IGNsYXNzPVwiY29tbWVudCBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21tZW50XCI+XG4gIGA7XG4gIHJldHVybiBodG1sO1xufTtcblxuY29uc3QgcG9wdXBJbm5lciA9IChzaG93KSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwQ29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNsb3NlXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInNob3dUaXRsZVwiPiR7c2hvdy5uYW1lfTwvaDE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VQb3B1cFwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiPlxuICAgICAgPHA+JHtzaG93LnN1bW1hcnl9PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJvcGluaW9uXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgb3BpbmlvbiBoZXJlLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdE9waW5pb25cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICByZXR1cm4gaHRtbDtcbn07XG5cbmNvbnN0IHBhaW50Q29tbWVudHMgPSAocG9wdXAsIHNob3cpID0+IHtcbiAgZ2V0Q29tbWVudHMoc2hvdy5pZCkudGhlbihjb21tZW50cyA9PiB7XG4gICAgcG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gYFxuICAgICAgJHtjb21tZW50cy5tYXAoY29tbWVudCA9PiBgXG4gICAgICAgICAgPGgxPiR7Y29tbWVudC51c2VybmFtZX08L2gxPlxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICA8cD48aT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2k+PC9wPlxuICAgICAgYCkuam9pbignICcpfVxuICAgIGA7XG4gIH0pXG59XG5cbmNvbnN0IG1ha2VDYXJkID0gKHNob3cpID0+IHtcbiAgY29uc3Qgc2hvd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQb3B1cCcpO1xuXG4gIHNob3dDYXJkLmlubmVySFRNTCA9IGNhcmRJbm5lcihzaG93KTtcblxuICBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIHBvcHVwLmlubmVySFRNTCA9IHBvcHVwSW5uZXIoc2hvdylcblxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQb3B1cCcpO1xuICAgIGNvbnN0IHN1Ym1pdE9waW5pb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0T3BpbmlvbicpO1xuICAgIFxuICAgIHN1Ym1pdE9waW5pb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtICNuYW1lJykudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0gI29waW5pb24nKS52YWx1ZTtcbiAgICAgIGNvbnN0IGl0ZW1JRCA9IHNob3cuaWQ7XG4gICAgICBhZGRDb21tZW50KHt1c2VyLCBpdGVtSUQsIGNvbW1lbnR9KS50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgcGFpbnRDb21tZW50cyhwb3B1cCwgc2hvdylcbiAgICAgIH0pXG4gICAgfSlcbiAgICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgfSk7XG4gICAgcGFpbnRDb21tZW50cyhwb3B1cCwgc2hvdylcbiAgfSk7XG5cbiAgY29uc3QgaGVhcnQgPSBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcbiAgY29uc3QgY2hlY2sgPSBzaG93Q2FyZC5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNsaWNrTGlrZShzaG93LCBoZWFydCk7XG4gIH0pO1xuXG4gIHJldHVybiBzaG93Q2FyZDtcbn07XG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FyZDtcbiIsImltcG9ydCBnZXRTaG93cyBmcm9tICcuL2dldFNob3dzLmpzJztcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldExpa2VzLmpzJztcblxuY29uc3QgbWFwTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFNob3dzID0gYXdhaXQgZ2V0U2hvd3MoKTtcbiAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBhbGxTaG93cy5tYXAoKHNob3cpID0+IHtcbiAgICBjb25zdCBpdGVtID0gYWxsTGlrZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBzaG93LmlkKTtcbiAgICBzaG93Lmxpa2VzID0gaXRlbSAhPT0gdW5kZWZpbmVkID8gaXRlbS5saWtlcyA6IDA7XG4gICAgcmV0dXJuIHNob3c7XG4gIH0pO1xuICByZXR1cm4gYWxsU2hvd3M7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWFwTGlrZXM7XG4iLCJpbXBvcnQgYXBwSWQgZnJvbSAnLi9hcHAtaWQuanMnO1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoc2hvdykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBzaG93LmlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheVNob3dzIGZyb20gJy4vZGlzcGxheVNob3dzLmpzJztcblxuZGlzcGxheVNob3dzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=