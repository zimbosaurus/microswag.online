(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component"],{

/***/ "./src/components/image.tsx":
/*!**********************************!*\
  !*** ./src/components/image.tsx ***!
  \**********************************/
/*! exports provided: ImageComponent, Image, Hero, ImageSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageComponent\", function() { return ImageComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageSlide\", function() { return ImageSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroSlide; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components/components.tsx\");\n/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/content */ \"./src/content/content.tsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n/**\r\n * A react component that renders an image.\r\n */\n\nvar ImageComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ImageComponent, _Component);\n\n  function ImageComponent() {\n    _classCallCheck(this, ImageComponent);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ImageComponent).apply(this, arguments));\n  }\n\n  _createClass(ImageComponent, [{\n    key: \"getClassName\",\n    value: function getClassName() {\n      return '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: this.getClassName(),\n        alt: this.props.alt,\n        src: this.props.src\n      });\n    }\n  }]);\n\n  return ImageComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/**\r\n * Encapsulates data that is commonly related to images. I did this so that the ImageSlide component should be easier to maintain.\r\n * \r\n * Storing a title with the image enables the possibility to specify an image from it's title.\r\n * \r\n * @see ImageComponent\r\n */\n\nvar Image =\n/*#__PURE__*/\nfunction () {\n  function Image(src, title, alt) {\n    _classCallCheck(this, Image);\n\n    this.src = src;\n    this.title = title;\n    this.alt = alt;\n  }\n\n  _createClass(Image, [{\n    key: \"getComponent\",\n    value: function getComponent(key) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageComponent, {\n        alt: this.alt,\n        key: key,\n        src: this.src\n      });\n    }\n  }, {\n    key: \"getTitle\",\n    value: function getTitle() {\n      return this.title;\n    }\n  }, {\n    key: \"getSource\",\n    value: function getSource() {\n      return this.src;\n    }\n  }, {\n    key: \"getAlt\",\n    value: function getAlt() {\n      return this.alt;\n    }\n  }]);\n\n  return Image;\n}();\nvar Hero =\n/*#__PURE__*/\nfunction (_ImageComponent) {\n  _inherits(Hero, _ImageComponent);\n\n  function Hero() {\n    _classCallCheck(this, Hero);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).apply(this, arguments));\n  }\n\n  _createClass(Hero, [{\n    key: \"getClassName\",\n    value: function getClassName() {\n      return _get(_getPrototypeOf(Hero.prototype), \"getClassName\", this).call(this) + ' wide';\n    }\n  }]);\n\n  return Hero;\n}(ImageComponent);\nvar ImageSlide =\n/*#__PURE__*/\nfunction (_Component2) {\n  _inherits(ImageSlide, _Component2);\n\n  function ImageSlide(props) {\n    var _this;\n\n    _classCallCheck(this, ImageSlide);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageSlide).call(this, props));\n    _this.state = {\n      currentImage: _this.props.images[0]\n    };\n    return _this;\n  }\n\n  _createClass(ImageSlide, [{\n    key: \"getImages\",\n    value: function getImages() {\n      return this.props.images;\n    }\n    /**\r\n     * Select an image to display.\r\n     * @param imageIdentifier either a title or index to identify the image by.\r\n     */\n\n  }, {\n    key: \"selectImage\",\n    value: function selectImage(imageIdentifier) {\n      // find an image that matches the identifier in some way.\n      var newImage = this.getImages().find(function (val, i) {\n        return imageIdentifier == val.getTitle() || imageIdentifier == i;\n      });\n      if (newImage != undefined || newImage != this.state.currentImage) this.setState({\n        currentImage: newImage\n      });\n    }\n  }, {\n    key: \"getCurrentIndex\",\n    value: function getCurrentIndex() {\n      return this.getImages().indexOf(this.state.currentImage);\n    }\n  }, {\n    key: \"nextImage\",\n    value: function nextImage() {\n      var nextIndex = this.getCurrentIndex() + 1;\n      this.selectImage(nextIndex >= this.props.images.length ? 0 : nextIndex);\n    }\n  }, {\n    key: \"previousImage\",\n    value: function previousImage() {\n      var nextIndex = this.getCurrentIndex() - 1;\n      this.selectImage(nextIndex < 0 ? this.props.images.length - 1 : nextIndex);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // Use map to get the component from every image object and add them into a new array.\n      // let images = this.getImages().map((img, i) => {\n      //     return <Hero key={i} alt={img.getAlt()} src={img.getSource()} />\n      // });\n      var image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hero, {\n        src: this.state.currentImage.getSource(),\n        alt: this.state.currentImage.getAlt()\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"image-slide\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"image-slide image-container\"\n      }, image), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, this.state.currentImage.getTitle()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"image-slide buttons\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: function onClick() {\n          return _this2.nextImage();\n        }\n      }, \"next\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: function onClick() {\n          return _this2.previousImage();\n        }\n      }, \"previous\")));\n    }\n  }]);\n\n  return ImageSlide;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar HeroSlide =\n/*#__PURE__*/\nfunction (_Component3) {\n  _inherits(HeroSlide, _Component3);\n\n  function HeroSlide() {\n    _classCallCheck(this, HeroSlide);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HeroSlide).apply(this, arguments));\n  }\n\n  _createClass(HeroSlide, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageSlide, {\n        images: Object(_content_content__WEBPACK_IMPORTED_MODULE_2__[\"getHeroImages\"])()\n      });\n    }\n  }]);\n\n  return HeroSlide;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/image.tsx?");

/***/ }),

/***/ "./src/content/content.tsx":
/*!*********************************!*\
  !*** ./src/content/content.tsx ***!
  \*********************************/
/*! exports provided: getHeroImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeroImages\", function() { return getHeroImages; });\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/image */ \"./src/components/image.tsx\");\n\nfunction getHeroImages() {\n  return [new _components_image__WEBPACK_IMPORTED_MODULE_0__[\"Image\"]('static/images/boi.jpg', 'boi', 'A boi.'), new _components_image__WEBPACK_IMPORTED_MODULE_0__[\"Image\"]('static/images/squirrel.jpeg', 'squirrel', 'A squirrel.')];\n}\n\n//# sourceURL=webpack:///./src/content/content.tsx?");

/***/ })

}]);