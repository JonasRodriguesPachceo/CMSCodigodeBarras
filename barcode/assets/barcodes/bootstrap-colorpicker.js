/*!
 * Bootstrap Colorpicker - Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4.
 * @package bootstrap-colorpicker
 * @version v3.4.0
 * @license MIT
 * @link https://itsjavi.com/bootstrap-colorpicker/
 * @link https://github.com/itsjavi/bootstrap-colorpicker.git
 */
"use strict"
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("jquery"));
    else if (typeof define === "function" && define.amd) define("bootstrap-colorpicker", ["jquery"], factory);
    else if (typeof exports === "object") exports["bootstrap-colorpicker"] = factory(require("jquery"));
    else root["bootstrap-colorpicker"] = factory(root["jQuery"])
})(window, function (__WEBPACK_EXTERNAL_MODULE__0__) {
    return function (modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                })
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            })
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value
            });
            if (mode & 2 && typeof value != "string")
                for (var key in value) __webpack_require__.d(ns, key, function (key) {
                    return value[key]
                }.bind(null, key));
            return ns
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"]
            } : function getModuleExports() {
                return module
            };
            __webpack_require__.d(getter, "a", getter);
            return getter
        };
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property)
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 7)
    }([function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var Extension = function () {
            function Extension(colorpicker) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Extension);
                this.colorpicker = colorpicker;
                this.options = options;
                if (!(this.colorpicker.element && this.colorpicker.element.length)) {
                    throw new Error("Extension: this.colorpicker.element is not valid")
                }
                this.colorpicker.element.on("colorpickerCreate.colorpicker-ext", _jquery2.default.proxy(this.onCreate, this));
                this.colorpicker.element.on("colorpickerDestroy.colorpicker-ext", _jquery2.default.proxy(this.onDestroy, this));
                this.colorpicker.element.on("colorpickerUpdate.colorpicker-ext", _jquery2.default.proxy(this.onUpdate, this));
                this.colorpicker.element.on("colorpickerChange.colorpicker-ext", _jquery2.default.proxy(this.onChange, this));
                this.colorpicker.element.on("colorpickerInvalid.colorpicker-ext", _jquery2.default.proxy(this.onInvalid, this));
                this.colorpicker.element.on("colorpickerShow.colorpicker-ext", _jquery2.default.proxy(this.onShow, this));
                this.colorpicker.element.on("colorpickerHide.colorpicker-ext", _jquery2.default.proxy(this.onHide, this));
                this.colorpicker.element.on("colorpickerEnable.colorpicker-ext", _jquery2.default.proxy(this.onEnable, this));
                this.colorpicker.element.on("colorpickerDisable.colorpicker-ext", _jquery2.default.proxy(this.onDisable, this))
            }
            _createClass(Extension, [{
                key: "resolveColor",
                value: function resolveColor(color) {
                    var realColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    return false
                }
            }, {
                key: "onCreate",
                value: function onCreate(event) {}
            }, {
                key: "onDestroy",
                value: function onDestroy(event) {
                    this.colorpicker.element.off(".colorpicker-ext")
                }
            }, {
                key: "onUpdate",
                value: function onUpdate(event) {}
            }, {
                key: "onChange",
                value: function onChange(event) {}
            }, {
                key: "onInvalid",
                value: function onInvalid(event) {}
            }, {
                key: "onHide",
                value: function onHide(event) {}
            }, {
                key: "onShow",
                value: function onShow(event) {}
            }, {
                key: "onDisable",
                value: function onDisable(event) {}
            }, {
                key: "onEnable",
                value: function onEnable(event) {}
            }]);
            return Extension
        }();
        exports.default = Extension;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ColorItem = exports.HSVAColor = undefined;
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _color = __webpack_require__(16);
        var _color2 = _interopRequireDefault(_color);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var HSVAColor = function () {
            function HSVAColor(h, s, v, a) {
                _classCallCheck(this, HSVAColor);
                this.h = isNaN(h) ? 0 : h;
                this.s = isNaN(s) ? 0 : s;
                this.v = isNaN(v) ? 0 : v;
                this.a = isNaN(h) ? 1 : a
            }
            _createClass(HSVAColor, [{
                key: "toString",
                value: function toString() {
                    return this.h + ", " + this.s + "%, " + this.v + "%, " + this.a
                }
            }]);
            return HSVAColor
        }();
        var ColorItem = function () {
            _createClass(ColorItem, [{
                key: "api",
                value: function api(fn) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key]
                    }
                    if (arguments.length === 0) {
                        return this._color
                    }
                    var result = this._color[fn].apply(this._color, args);
                    if (!(result instanceof _color2.default)) {
                        return result
                    }
                    return new ColorItem(result, this.format)
                }
            }, {
                key: "original",
                get: function get() {
                    return this._original
                }
            }], [{
                key: "HSVAColor",
                get: function get() {
                    return HSVAColor
                }
            }]);

            function ColorItem() {
                var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var disableHexInputFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                _classCallCheck(this, ColorItem);
                this.replace(color, format, disableHexInputFallback)
            }
            _createClass(ColorItem, [{
                key: "replace",
                value: function replace(color) {
                    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var disableHexInputFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    format = ColorItem.sanitizeFormat(format);
                    this._original = {
                        color,
                        format,
                        valid: true
                    };
                    this._color = ColorItem.parse(color, disableHexInputFallback);
                    if (this._color === null) {
                        this._color = (0, _color2.default)();
                        this._original.valid = false;
                        return
                    }
                    this._format = format ? format : ColorItem.isHex(color) ? "hex" : this._color.model
                }
            }, {
                key: "isValid",
                value: function isValid() {
                    return this._original.valid === true
                }
            }, {
                key: "setHueRatio",
                value: function setHueRatio(h) {
                    this.hue = (1 - h) * 360
                }
            }, {
                key: "setSaturationRatio",
                value: function setSaturationRatio(s) {
                    this.saturation = s * 100
                }
            }, {
                key: "setValueRatio",
                value: function setValueRatio(v) {
                    this.value = (1 - v) * 100
                }
            }, {
                key: "setAlphaRatio",
                value: function setAlphaRatio(a) {
                    this.alpha = 1 - a
                }
            }, {
                key: "isDesaturated",
                value: function isDesaturated() {
                    return this.saturation === 0
                }
            }, {
                key: "isTransparent",
                value: function isTransparent() {
                    return this.alpha === 0
                }
            }, {
                key: "hasTransparency",
                value: function hasTransparency() {
                    return this.hasAlpha() && this.alpha < 1
                }
            }, {
                key: "hasAlpha",
                value: function hasAlpha() {
                    return !isNaN(this.alpha)
                }
            }, {
                key: "toObject",
                value: function toObject() {
                    return new HSVAColor(this.hue, this.saturation, this.value, this.alpha)
                }
            }, {
                key: "toHsva",
                value: function toHsva() {
                    return this.toObject()
                }
            }, {
                key: "toHsvaRatio",
                value: function toHsvaRatio() {
                    return new HSVAColor(this.hue / 360, this.saturation / 100, this.value / 100, this.alpha)
                }
            }, {
                key: "toString",
                value: function toString() {
                    return this.string()
                }
            }, {
                key: "string",
                value: function string() {
                    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    format = ColorItem.sanitizeFormat(format ? format : this.format);
                    if (!format) {
                        return this._color.round().string()
                    }
                    if (this._color[format] === undefined) {
                        throw new Error("Unsupported color format: '" + format + "'")
                    }
                    var str = this._color[format]();
                    return str.round ? str.round().string() : str
                }
            }, {
                key: "equals",
                value: function equals(color) {
                    color = color instanceof ColorItem ? color : new ColorItem(color);
                    if (!color.isValid() || !this.isValid()) {
                        return false
                    }
                    return this.hue === color.hue && this.saturation === color.saturation && this.value === color.value && this.alpha === color.alpha
                }
            }, {
                key: "getClone",
                value: function getClone() {
                    return new ColorItem(this._color, this.format)
                }
            }, {
                key: "getCloneHueOnly",
                value: function getCloneHueOnly() {
                    return new ColorItem([this.hue, 100, 100, 1], this.format)
                }
            }, {
                key: "getCloneOpaque",
                value: function getCloneOpaque() {
                    return new ColorItem(this._color.alpha(1), this.format)
                }
            }, {
                key: "toRgbString",
                value: function toRgbString() {
                    return this.string("rgb")
                }
            }, {
                key: "toHexString",
                value: function toHexString() {
                    return this.string("hex")
                }
            }, {
                key: "toHslString",
                value: function toHslString() {
                    return this.string("hsl")
                }
            }, {
                key: "isDark",
                value: function isDark() {
                    return this._color.isDark()
                }
            }, {
                key: "isLight",
                value: function isLight() {
                    return this._color.isLight()
                }
            }, {
                key: "generate",
                value: function generate(formula) {
                    var hues = [];
                    if (Array.isArray(formula)) {
                        hues = formula
                    } else if (!ColorItem.colorFormulas.hasOwnProperty(formula)) {
                        throw new Error("No color formula found with the name '" + formula + "'.")
                    } else {
                        hues = ColorItem.colorFormulas[formula]
                    }
                    var colors = [],
                        mainColor = this._color,
                        format = this.format;
                    hues.forEach(function (hue) {
                        var levels = [hue ? (mainColor.hue() + hue) % 360 : mainColor.hue(), mainColor.saturationv(), mainColor.value(), mainColor.alpha()];
                        colors.push(new ColorItem(levels, format))
                    });
                    return colors
                }
            }, {
                key: "hue",
                get: function get() {
                    return this._color.hue()
                },
                set: function set(value) {
                    this._color = this._color.hue(value)
                }
            }, {
                key: "saturation",
                get: function get() {
                    return this._color.saturationv()
                },
                set: function set(value) {
                    this._color = this._color.saturationv(value)
                }
            }, {
                key: "value",
                get: function get() {
                    return this._color.value()
                },
                set: function set(value) {
                    this._color = this._color.value(value)
                }
            }, {
                key: "alpha",
                get: function get() {
                    var a = this._color.alpha();
                    return isNaN(a) ? 1 : a
                },
                set: function set(value) {
                    this._color = this._color.alpha(Math.round(value * 100) / 100)
                }
            }, {
                key: "format",
                get: function get() {
                    return this._format ? this._format : this._color.model
                },
                set: function set(value) {
                    this._format = ColorItem.sanitizeFormat(value)
                }
            }], [{
                key: "parse",
                value: function parse(color) {
                    var disableHexInputFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (color instanceof _color2.default) {
                        return color
                    }
                    if (color instanceof ColorItem) {
                        return color._color
                    }
                    var format = null;
                    if (color instanceof HSVAColor) {
                        color = [color.h, color.s, color.v, isNaN(color.a) ? 1 : color.a]
                    } else {
                        color = ColorItem.sanitizeString(color)
                    }
                    if (color === null) {
                        return null
                    }
                    if (Array.isArray(color)) {
                        format = "hsv"
                    }
                    if (ColorItem.isHex(color) && color.length !== 6 && color.length !== 7 && disableHexInputFallback) {
                        return null
                    }
                    try {
                        return (0, _color2.default)(color, format)
                    } catch (e) {
                        return null
                    }
                }
            }, {
                key: "sanitizeString",
                value: function sanitizeString(str) {
                    if (!(typeof str === "string" || str instanceof String)) {
                        return str
                    }
                    if (str.match(/^[0-9a-f]{2,}$/i)) {
                        return "#" + str
                    }
                    if (str.toLowerCase() === "transparent") {
                        return "#FFFFFF00"
                    }
                    return str
                }
            }, {
                key: "isHex",
                value: function isHex(str) {
                    if (!(typeof str === "string" || str instanceof String)) {
                        return false
                    }
                    return !!str.match(/^#?[0-9a-f]{2,}$/i)
                }
            }, {
                key: "sanitizeFormat",
                value: function sanitizeFormat(format) {
                    switch (format) {
                        case "hex":
                        case "hex3":
                        case "hex4":
                        case "hex6":
                        case "hex8":
                            return "hex";
                        case "rgb":
                        case "rgba":
                        case "keyword":
                        case "name":
                            return "rgb";
                        case "hsl":
                        case "hsla":
                        case "hsv":
                        case "hsva":
                        case "hwb":
                        case "hwba":
                            return "hsl";
                        default:
                            return ""
                    }
                }
            }]);
            return ColorItem
        }();
        ColorItem.colorFormulas = {
            complementary: [180],
            triad: [0, 120, 240],
            tetrad: [0, 90, 180, 270],
            splitcomplement: [0, 72, 216]
        };
        exports.default = ColorItem;
        exports.HSVAColor = HSVAColor;
        exports.ColorItem = ColorItem
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var sassVars = {
            bar_size_short: 16,
            base_margin: 6,
            columns: 6
        };
        var sliderSize = sassVars.bar_size_short * sassVars.columns + sassVars.base_margin * (sassVars.columns - 1);
        exports.default = {
            customClass: null,
            color: false,
            fallbackColor: false,
            format: "auto",
            horizontal: false,
            inline: false,
            container: false,
            popover: {
                animation: true,
                placement: "bottom",
                fallbackPlacement: "flip"
            },
            debug: false,
            input: "input",
            addon: ".colorpicker-input-addon",
            autoInputFallback: true,
            autoHexInputFallback: true,
            useHashPrefix: true,
            useAlpha: true,
            template: '<div class="colorpicker">\n      <div class="colorpicker-saturation"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-alpha">\n        <div class="colorpicker-alpha-color"></div>\n        <i class="colorpicker-guide"></i>\n      </div>\n    </div>',
            extensions: [{
                name: "preview",
                options: {
                    showText: true
                }
            }],
            sliders: {
                saturation: {
                    selector: ".colorpicker-saturation",
                    maxLeft: sliderSize,
                    maxTop: sliderSize,
                    callLeft: "setSaturationRatio",
                    callTop: "setValueRatio"
                },
                hue: {
                    selector: ".colorpicker-hue",
                    maxLeft: 0,
                    maxTop: sliderSize,
                    callLeft: false,
                    callTop: "setHueRatio"
                },
                alpha: {
                    selector: ".colorpicker-alpha",
                    childSelector: ".colorpicker-alpha-color",
                    maxLeft: 0,
                    maxTop: sliderSize,
                    callLeft: false,
                    callTop: "setAlphaRatio"
                }
            },
            slidersHorz: {
                saturation: {
                    selector: ".colorpicker-saturation",
                    maxLeft: sliderSize,
                    maxTop: sliderSize,
                    callLeft: "setSaturationRatio",
                    callTop: "setValueRatio"
                },
                hue: {
                    selector: ".colorpicker-hue",
                    maxLeft: sliderSize,
                    maxTop: 0,
                    callLeft: "setHueRatio",
                    callTop: false
                },
                alpha: {
                    selector: ".colorpicker-alpha",
                    childSelector: ".colorpicker-alpha-color",
                    maxLeft: sliderSize,
                    maxTop: 0,
                    callLeft: "setAlphaRatio",
                    callTop: false
                }
            }
        };
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        };
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _Extension2 = __webpack_require__(1);
        var _Extension3 = _interopRequireDefault(_Extension2);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var defaults = {
            colors: null,
            namesAsValues: true
        };
        var Palette = function (_Extension) {
            _inherits(Palette, _Extension);
            _createClass(Palette, [{
                key: "colors",
                get: function get() {
                    return this.options.colors
                }
            }]);

            function Palette(colorpicker) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Palette);
                var _this = _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).call(this, colorpicker, _jquery2.default.extend(true, {}, defaults, options)));
                if (!Array.isArray(_this.options.colors) && _typeof(_this.options.colors) !== "object") {
                    _this.options.colors = null
                }
                return _this
            }
            _createClass(Palette, [{
                key: "getLength",
                value: function getLength() {
                    if (!this.options.colors) {
                        return 0
                    }
                    if (Array.isArray(this.options.colors)) {
                        return this.options.colors.length
                    }
                    if (_typeof(this.options.colors) === "object") {
                        return Object.keys(this.options.colors).length
                    }
                    return 0
                }
            }, {
                key: "resolveColor",
                value: function resolveColor(color) {
                    var realColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    if (this.getLength() <= 0) {
                        return false
                    }
                    if (Array.isArray(this.options.colors)) {
                        if (this.options.colors.indexOf(color) >= 0) {
                            return color
                        }
                        if (this.options.colors.indexOf(color.toUpperCase()) >= 0) {
                            return color.toUpperCase()
                        }
                        if (this.options.colors.indexOf(color.toLowerCase()) >= 0) {
                            return color.toLowerCase()
                        }
                        return false
                    }
                    if (_typeof(this.options.colors) !== "object") {
                        return false
                    }
                    if (!this.options.namesAsValues || realColor) {
                        return this.getValue(color, false)
                    }
                    return this.getName(color, this.getName("#" + color))
                }
            }, {
                key: "getName",
                value: function getName(value) {
                    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (!(typeof value === "string") || !this.options.colors) {
                        return defaultValue
                    }
                    for (var name in this.options.colors) {
                        if (!this.options.colors.hasOwnProperty(name)) {
                            continue
                        }
                        if (this.options.colors[name].toLowerCase() === value.toLowerCase()) {
                            return name
                        }
                    }
                    return defaultValue
                }
            }, {
                key: "getValue",
                value: function getValue(name) {
                    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (!(typeof name === "string") || !this.options.colors) {
                        return defaultValue
                    }
                    if (this.options.colors.hasOwnProperty(name)) {
                        return this.options.colors[name]
                    }
                    return defaultValue
                }
            }]);
            return Palette
        }(_Extension3.default);
        exports.default = Palette;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, function (module, exports, __webpack_require__) {
        var cssKeywords = __webpack_require__(5);
        var reverseKeywords = {};
        for (var key in cssKeywords) {
            if (cssKeywords.hasOwnProperty(key)) {
                reverseKeywords[cssKeywords[key]] = key
            }
        }
        var convert = module.exports = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: ["hex"]
            },
            keyword: {
                channels: 1,
                labels: ["keyword"]
            },
            ansi16: {
                channels: 1,
                labels: ["ansi16"]
            },
            ansi256: {
                channels: 1,
                labels: ["ansi256"]
            },
            hcg: {
                channels: 3,
                labels: ["h", "c", "g"]
            },
            apple: {
                channels: 3,
                labels: ["r16", "g16", "b16"]
            },
            gray: {
                channels: 1,
                labels: ["gray"]
            }
        };
        for (var model in convert) {
            if (convert.hasOwnProperty(model)) {
                if (!("channels" in convert[model])) {
                    throw new Error("missing channels property: " + model)
                }
                if (!("labels" in convert[model])) {
                    throw new Error("missing channel labels property: " + model)
                }
                if (convert[model].labels.length !== convert[model].channels) {
                    throw new Error("channel and label counts mismatch: " + model)
                }
                var channels = convert[model].channels;
                var labels = convert[model].labels;
                delete convert[model].channels;
                delete convert[model].labels;
                Object.defineProperty(convert[model], "channels", {
                    value: channels
                });
                Object.defineProperty(convert[model], "labels", {
                    value: labels
                })
            }
        }
        convert.rgb.hsl = function (rgb) {
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            var min = Math.min(r, g, b);
            var max = Math.max(r, g, b);
            var delta = max - min;
            var h;
            var s;
            var l;
            if (max === min) {
                h = 0
            } else if (r === max) {
                h = (g - b) / delta
            } else if (g === max) {
                h = 2 + (b - r) / delta
            } else if (b === max) {
                h = 4 + (r - g) / delta
            }
            h = Math.min(h * 60, 360);
            if (h < 0) {
                h += 360
            }
            l = (min + max) / 2;
            if (max === min) {
                s = 0
            } else if (l <= .5) {
                s = delta / (max + min)
            } else {
                s = delta / (2 - max - min)
            }
            return [h, s * 100, l * 100]
        };
        convert.rgb.hsv = function (rgb) {
            var rdif;
            var gdif;
            var bdif;
            var h;
            var s;
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            var v = Math.max(r, g, b);
            var diff = v - Math.min(r, g, b);
            var diffc = function (c) {
                return (v - c) / 6 / diff + 1 / 2
            };
            if (diff === 0) {
                h = s = 0
            } else {
                s = diff / v;
                rdif = diffc(r);
                gdif = diffc(g);
                bdif = diffc(b);
                if (r === v) {
                    h = bdif - gdif
                } else if (g === v) {
                    h = 1 / 3 + rdif - bdif
                } else if (b === v) {
                    h = 2 / 3 + gdif - rdif
                }
                if (h < 0) {
                    h += 1
                } else if (h > 1) {
                    h -= 1
                }
            }
            return [h * 360, s * 100, v * 100]
        };
        convert.rgb.hwb = function (rgb) {
            var r = rgb[0];
            var g = rgb[1];
            var b = rgb[2];
            var h = convert.rgb.hsl(rgb)[0];
            var w = 1 / 255 * Math.min(r, Math.min(g, b));
            b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
            return [h, w * 100, b * 100]
        };
        convert.rgb.cmyk = function (rgb) {
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            var c;
            var m;
            var y;
            var k;
            k = Math.min(1 - r, 1 - g, 1 - b);
            c = (1 - r - k) / (1 - k) || 0;
            m = (1 - g - k) / (1 - k) || 0;
            y = (1 - b - k) / (1 - k) || 0;
            return [c * 100, m * 100, y * 100, k * 100]
        };

        function comparativeDistance(x, y) {
            return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2)
        }
        convert.rgb.keyword = function (rgb) {
            var reversed = reverseKeywords[rgb];
            if (reversed) {
                return reversed
            }
            var currentClosestDistance = Infinity;
            var currentClosestKeyword;
            for (var keyword in cssKeywords) {
                if (cssKeywords.hasOwnProperty(keyword)) {
                    var value = cssKeywords[keyword];
                    var distance = comparativeDistance(rgb, value);
                    if (distance < currentClosestDistance) {
                        currentClosestDistance = distance;
                        currentClosestKeyword = keyword
                    }
                }
            }
            return currentClosestKeyword
        };
        convert.keyword.rgb = function (keyword) {
            return cssKeywords[keyword]
        };
        convert.rgb.xyz = function (rgb) {
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
            g = g > .04045 ? Math.pow((g + .055) / 1.055, 2.4) : g / 12.92;
            b = b > .04045 ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92;
            var x = r * .4124 + g * .3576 + b * .1805;
            var y = r * .2126 + g * .7152 + b * .0722;
            var z = r * .0193 + g * .1192 + b * .9505;
            return [x * 100, y * 100, z * 100]
        };
        convert.rgb.lab = function (rgb) {
            var xyz = convert.rgb.xyz(rgb);
            var x = xyz[0];
            var y = xyz[1];
            var z = xyz[2];
            var l;
            var a;
            var b;
            x /= 95.047;
            y /= 100;
            z /= 108.883;
            x = x > .008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
            y = y > .008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
            z = z > .008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
            l = 116 * y - 16;
            a = 500 * (x - y);
            b = 200 * (y - z);
            return [l, a, b]
        };
        convert.hsl.rgb = function (hsl) {
            var h = hsl[0] / 360;
            var s = hsl[1] / 100;
            var l = hsl[2] / 100;
            var t1;
            var t2;
            var t3;
            var rgb;
            var val;
            if (s === 0) {
                val = l * 255;
                return [val, val, val]
            }
            if (l < .5) {
                t2 = l * (1 + s)
            } else {
                t2 = l + s - l * s
            }
            t1 = 2 * l - t2;
            rgb = [0, 0, 0];
            for (var i = 0; i < 3; i++) {
                t3 = h + 1 / 3 * -(i - 1);
                if (t3 < 0) {
                    t3++
                }
                if (t3 > 1) {
                    t3--
                }
                if (6 * t3 < 1) {
                    val = t1 + (t2 - t1) * 6 * t3
                } else if (2 * t3 < 1) {
                    val = t2
                } else if (3 * t3 < 2) {
                    val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
                } else {
                    val = t1
                }
                rgb[i] = val * 255
            }
            return rgb
        };
        convert.hsl.hsv = function (hsl) {
            var h = hsl[0];
            var s = hsl[1] / 100;
            var l = hsl[2] / 100;
            var smin = s;
            var lmin = Math.max(l, .01);
            var sv;
            var v;
            l *= 2;
            s *= l <= 1 ? l : 2 - l;
            smin *= lmin <= 1 ? lmin : 2 - lmin;
            v = (l + s) / 2;
            sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
            return [h, sv * 100, v * 100]
        };
        convert.hsv.rgb = function (hsv) {
            var h = hsv[0] / 60;
            var s = hsv[1] / 100;
            var v = hsv[2] / 100;
            var hi = Math.floor(h) % 6;
            var f = h - Math.floor(h);
            var p = 255 * v * (1 - s);
            var q = 255 * v * (1 - s * f);
            var t = 255 * v * (1 - s * (1 - f));
            v *= 255;
            switch (hi) {
                case 0:
                    return [v, t, p];
                case 1:
                    return [q, v, p];
                case 2:
                    return [p, v, t];
                case 3:
                    return [p, q, v];
                case 4:
                    return [t, p, v];
                case 5:
                    return [v, p, q]
            }
        };
        convert.hsv.hsl = function (hsv) {
            var h = hsv[0];
            var s = hsv[1] / 100;
            var v = hsv[2] / 100;
            var vmin = Math.max(v, .01);
            var lmin;
            var sl;
            var l;
            l = (2 - s) * v;
            lmin = (2 - s) * vmin;
            sl = s * vmin;
            sl /= lmin <= 1 ? lmin : 2 - lmin;
            sl = sl || 0;
            l /= 2;
            return [h, sl * 100, l * 100]
        };
        convert.hwb.rgb = function (hwb) {
            var h = hwb[0] / 360;
            var wh = hwb[1] / 100;
            var bl = hwb[2] / 100;
            var ratio = wh + bl;
            var i;
            var v;
            var f;
            var n;
            if (ratio > 1) {
                wh /= ratio;
                bl /= ratio
            }
            i = Math.floor(6 * h);
            v = 1 - bl;
            f = 6 * h - i;
            if ((i & 1) !== 0) {
                f = 1 - f
            }
            n = wh + f * (v - wh);
            var r;
            var g;
            var b;
            switch (i) {
                default:
                case 6:
                case 0:
                    r = v;
                    g = n;
                    b = wh;
                    break;
                case 1:
                    r = n;
                    g = v;
                    b = wh;
                    break;
                case 2:
                    r = wh;
                    g = v;
                    b = n;
                    break;
                case 3:
                    r = wh;
                    g = n;
                    b = v;
                    break;
                case 4:
                    r = n;
                    g = wh;
                    b = v;
                    break;
                case 5:
                    r = v;
                    g = wh;
                    b = n;
                    break
            }
            return [r * 255, g * 255, b * 255]
        };
        convert.cmyk.rgb = function (cmyk) {
            var c = cmyk[0] / 100;
            var m = cmyk[1] / 100;
            var y = cmyk[2] / 100;
            var k = cmyk[3] / 100;
            var r;
            var g;
            var b;
            r = 1 - Math.min(1, c * (1 - k) + k);
            g = 1 - Math.min(1, m * (1 - k) + k);
            b = 1 - Math.min(1, y * (1 - k) + k);
            return [r * 255, g * 255, b * 255]
        };
        convert.xyz.rgb = function (xyz) {
            var x = xyz[0] / 100;
            var y = xyz[1] / 100;
            var z = xyz[2] / 100;
            var r;
            var g;
            var b;
            r = x * 3.2406 + y * -1.5372 + z * -.4986;
            g = x * -.9689 + y * 1.8758 + z * .0415;
            b = x * .0557 + y * -.204 + z * 1.057;
            r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : r * 12.92;
            g = g > .0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - .055 : g * 12.92;
            b = b > .0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - .055 : b * 12.92;
            r = Math.min(Math.max(0, r), 1);
            g = Math.min(Math.max(0, g), 1);
            b = Math.min(Math.max(0, b), 1);
            return [r * 255, g * 255, b * 255]
        };
        convert.xyz.lab = function (xyz) {
            var x = xyz[0];
            var y = xyz[1];
            var z = xyz[2];
            var l;
            var a;
            var b;
            x /= 95.047;
            y /= 100;
            z /= 108.883;
            x = x > .008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
            y = y > .008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
            z = z > .008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
            l = 116 * y - 16;
            a = 500 * (x - y);
            b = 200 * (y - z);
            return [l, a, b]
        };
        convert.lab.xyz = function (lab) {
            var l = lab[0];
            var a = lab[1];
            var b = lab[2];
            var x;
            var y;
            var z;
            y = (l + 16) / 116;
            x = a / 500 + y;
            z = y - b / 200;
            var y2 = Math.pow(y, 3);
            var x2 = Math.pow(x, 3);
            var z2 = Math.pow(z, 3);
            y = y2 > .008856 ? y2 : (y - 16 / 116) / 7.787;
            x = x2 > .008856 ? x2 : (x - 16 / 116) / 7.787;
            z = z2 > .008856 ? z2 : (z - 16 / 116) / 7.787;
            x *= 95.047;
            y *= 100;
            z *= 108.883;
            return [x, y, z]
        };
        convert.lab.lch = function (lab) {
            var l = lab[0];
            var a = lab[1];
            var b = lab[2];
            var hr;
            var h;
            var c;
            hr = Math.atan2(b, a);
            h = hr * 360 / 2 / Math.PI;
            if (h < 0) {
                h += 360
            }
            c = Math.sqrt(a * a + b * b);
            return [l, c, h]
        };
        convert.lch.lab = function (lch) {
            var l = lch[0];
            var c = lch[1];
            var h = lch[2];
            var a;
            var b;
            var hr;
            hr = h / 360 * 2 * Math.PI;
            a = c * Math.cos(hr);
            b = c * Math.sin(hr);
            return [l, a, b]
        };
        convert.rgb.ansi16 = function (args) {
            var r = args[0];
            var g = args[1];
            var b = args[2];
            var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
            value = Math.round(value / 50);
            if (value === 0) {
                return 30
            }
            var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
            if (value === 2) {
                ansi += 60
            }
            return ansi
        };
        convert.hsv.ansi16 = function (args) {
            return convert.rgb.ansi16(convert.hsv.rgb(args), args[2])
        };
        convert.rgb.ansi256 = function (args) {
            var r = args[0];
            var g = args[1];
            var b = args[2];
            if (r === g && g === b) {
                if (r < 8) {
                    return 16
                }
                if (r > 248) {
                    return 231
                }
                return Math.round((r - 8) / 247 * 24) + 232
            }
            var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
            return ansi
        };
        convert.ansi16.rgb = function (args) {
            var color = args % 10;
            if (color === 0 || color === 7) {
                if (args > 50) {
                    color += 3.5
                }
                color = color / 10.5 * 255;
                return [color, color, color]
            }
            var mult = (~~(args > 50) + 1) * .5;
            var r = (color & 1) * mult * 255;
            var g = (color >> 1 & 1) * mult * 255;
            var b = (color >> 2 & 1) * mult * 255;
            return [r, g, b]
        };
        convert.ansi256.rgb = function (args) {
            if (args >= 232) {
                var c = (args - 232) * 10 + 8;
                return [c, c, c]
            }
            args -= 16;
            var rem;
            var r = Math.floor(args / 36) / 5 * 255;
            var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
            var b = rem % 6 / 5 * 255;
            return [r, g, b]
        };
        convert.rgb.hex = function (args) {
            var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
            var string = integer.toString(16).toUpperCase();
            return "000000".substring(string.length) + string
        };
        convert.hex.rgb = function (args) {
            var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!match) {
                return [0, 0, 0]
            }
            var colorString = match[0];
            if (match[0].length === 3) {
                colorString = colorString.split("").map(function (char) {
                    return char + char
                }).join("")
            }
            var integer = parseInt(colorString, 16);
            var r = integer >> 16 & 255;
            var g = integer >> 8 & 255;
            var b = integer & 255;
            return [r, g, b]
        };
        convert.rgb.hcg = function (rgb) {
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            var max = Math.max(Math.max(r, g), b);
            var min = Math.min(Math.min(r, g), b);
            var chroma = max - min;
            var grayscale;
            var hue;
            if (chroma < 1) {
                grayscale = min / (1 - chroma)
            } else {
                grayscale = 0
            }
            if (chroma <= 0) {
                hue = 0
            } else if (max === r) {
                hue = (g - b) / chroma % 6
            } else if (max === g) {
                hue = 2 + (b - r) / chroma
            } else {
                hue = 4 + (r - g) / chroma + 4
            }
            hue /= 6;
            hue %= 1;
            return [hue * 360, chroma * 100, grayscale * 100]
        };
        convert.hsl.hcg = function (hsl) {
            var s = hsl[1] / 100;
            var l = hsl[2] / 100;
            var c = 1;
            var f = 0;
            if (l < .5) {
                c = 2 * s * l
            } else {
                c = 2 * s * (1 - l)
            }
            if (c < 1) {
                f = (l - .5 * c) / (1 - c)
            }
            return [hsl[0], c * 100, f * 100]
        };
        convert.hsv.hcg = function (hsv) {
            var s = hsv[1] / 100;
            var v = hsv[2] / 100;
            var c = s * v;
            var f = 0;
            if (c < 1) {
                f = (v - c) / (1 - c)
            }
            return [hsv[0], c * 100, f * 100]
        };
        convert.hcg.rgb = function (hcg) {
            var h = hcg[0] / 360;
            var c = hcg[1] / 100;
            var g = hcg[2] / 100;
            if (c === 0) {
                return [g * 255, g * 255, g * 255]
            }
            var pure = [0, 0, 0];
            var hi = h % 1 * 6;
            var v = hi % 1;
            var w = 1 - v;
            var mg = 0;
            switch (Math.floor(hi)) {
                case 0:
                    pure[0] = 1;
                    pure[1] = v;
                    pure[2] = 0;
                    break;
                case 1:
                    pure[0] = w;
                    pure[1] = 1;
                    pure[2] = 0;
                    break;
                case 2:
                    pure[0] = 0;
                    pure[1] = 1;
                    pure[2] = v;
                    break;
                case 3:
                    pure[0] = 0;
                    pure[1] = w;
                    pure[2] = 1;
                    break;
                case 4:
                    pure[0] = v;
                    pure[1] = 0;
                    pure[2] = 1;
                    break;
                default:
                    pure[0] = 1;
                    pure[1] = 0;
                    pure[2] = w
            }
            mg = (1 - c) * g;
            return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255]
        };
        convert.hcg.hsv = function (hcg) {
            var c = hcg[1] / 100;
            var g = hcg[2] / 100;
            var v = c + g * (1 - c);
            var f = 0;
            if (v > 0) {
                f = c / v
            }
            return [hcg[0], f * 100, v * 100]
        };
        convert.hcg.hsl = function (hcg) {
            var c = hcg[1] / 100;
            var g = hcg[2] / 100;
            var l = g * (1 - c) + .5 * c;
            var s = 0;
            if (l > 0 && l < .5) {
                s = c / (2 * l)
            } else if (l >= .5 && l < 1) {
                s = c / (2 * (1 - l))
            }
            return [hcg[0], s * 100, l * 100]
        };
        convert.hcg.hwb = function (hcg) {
            var c = hcg[1] / 100;
            var g = hcg[2] / 100;
            var v = c + g * (1 - c);
            return [hcg[0], (v - c) * 100, (1 - v) * 100]
        };
        convert.hwb.hcg = function (hwb) {
            var w = hwb[1] / 100;
            var b = hwb[2] / 100;
            var v = 1 - b;
            var c = v - w;
            var g = 0;
            if (c < 1) {
                g = (v - c) / (1 - c)
            }
            return [hwb[0], c * 100, g * 100]
        };
        convert.apple.rgb = function (apple) {
            return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255]
        };
        convert.rgb.apple = function (rgb) {
            return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535]
        };
        convert.gray.rgb = function (args) {
            return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255]
        };
        convert.gray.hsl = convert.gray.hsv = function (args) {
            return [0, 0, args[0]]
        };
        convert.gray.hwb = function (gray) {
            return [0, 100, gray[0]]
        };
        convert.gray.cmyk = function (gray) {
            return [0, 0, 0, gray[0]]
        };
        convert.gray.lab = function (gray) {
            return [gray[0], 0, 0]
        };
        convert.gray.hex = function (gray) {
            var val = Math.round(gray[0] / 100 * 255) & 255;
            var integer = (val << 16) + (val << 8) + val;
            var string = integer.toString(16).toUpperCase();
            return "000000".substring(string.length) + string
        };
        convert.rgb.gray = function (rgb) {
            var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
            return [val / 255 * 100]
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        };
        var _Colorpicker = __webpack_require__(8);
        var _Colorpicker2 = _interopRequireDefault(_Colorpicker);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var plugin = "colorpicker";
        _jquery2.default[plugin] = _Colorpicker2.default;
        _jquery2.default.fn[plugin] = function (option) {
            var fnArgs = Array.prototype.slice.call(arguments, 1),
                isSingleElement = this.length === 1,
                returnValue = null;
            var $elements = this.each(function () {
                var $this = (0, _jquery2.default)(this),
                    inst = $this.data(plugin),
                    options = (typeof option === "undefined" ? "undefined" : _typeof(option)) === "object" ? option : {};
                if (!inst) {
                    inst = new _Colorpicker2.default(this, options);
                    $this.data(plugin, inst)
                }
                if (!isSingleElement) {
                    return
                }
                returnValue = $this;
                if (typeof option === "string") {
                    if (option === "colorpicker") {
                        returnValue = inst
                    } else if (_jquery2.default.isFunction(inst[option])) {
                        returnValue = inst[option].apply(inst, fnArgs)
                    } else {
                        returnValue = inst[option]
                    }
                }
            });
            return isSingleElement ? returnValue : $elements
        };
        _jquery2.default.fn[plugin].constructor = _Colorpicker2.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _Extension = __webpack_require__(1);
        var _Extension2 = _interopRequireDefault(_Extension);
        var _options = __webpack_require__(3);
        var _options2 = _interopRequireDefault(_options);
        var _extensions = __webpack_require__(9);
        var _extensions2 = _interopRequireDefault(_extensions);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);
        var _SliderHandler = __webpack_require__(13);
        var _SliderHandler2 = _interopRequireDefault(_SliderHandler);
        var _PopupHandler = __webpack_require__(14);
        var _PopupHandler2 = _interopRequireDefault(_PopupHandler);
        var _InputHandler = __webpack_require__(15);
        var _InputHandler2 = _interopRequireDefault(_InputHandler);
        var _ColorHandler = __webpack_require__(22);
        var _ColorHandler2 = _interopRequireDefault(_ColorHandler);
        var _PickerHandler = __webpack_require__(23);
        var _PickerHandler2 = _interopRequireDefault(_PickerHandler);
        var _AddonHandler = __webpack_require__(24);
        var _AddonHandler2 = _interopRequireDefault(_AddonHandler);
        var _ColorItem = __webpack_require__(2);
        var _ColorItem2 = _interopRequireDefault(_ColorItem);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var colorPickerIdCounter = 0;
        var root = typeof self !== "undefined" ? self : undefined;
        var Colorpicker = function () {
            _createClass(Colorpicker, [{
                key: "color",
                get: function get() {
                    return this.colorHandler.color
                }
            }, {
                key: "format",
                get: function get() {
                    return this.colorHandler.format
                }
            }, {
                key: "picker",
                get: function get() {
                    return this.pickerHandler.picker
                }
            }], [{
                key: "Color",
                get: function get() {
                    return _ColorItem2.default
                }
            }, {
                key: "Extension",
                get: function get() {
                    return _Extension2.default
                }
            }]);

            function Colorpicker(element, options) {
                _classCallCheck(this, Colorpicker);
                colorPickerIdCounter += 1;
                this.id = colorPickerIdCounter;
                this.lastEvent = {
                    alias: null,
                    e: null
                };
                this.element = (0, _jquery2.default)(element).addClass("colorpicker-element").attr("data-colorpicker-id", this.id);
                this.options = _jquery2.default.extend(true, {}, _options2.default, options, this.element.data());
                this.disabled = false;
                this.extensions = [];
                this.container = this.options.container === true || this.options.container !== true && this.options.inline === true ? this.element : this.options.container;
                this.container = this.container !== false ? (0, _jquery2.default)(this.container) : false;
                this.inputHandler = new _InputHandler2.default(this);
                this.colorHandler = new _ColorHandler2.default(this);
                this.sliderHandler = new _SliderHandler2.default(this);
                this.popupHandler = new _PopupHandler2.default(this, root);
                this.pickerHandler = new _PickerHandler2.default(this);
                this.addonHandler = new _AddonHandler2.default(this);
                this.init();
                (0, _jquery2.default)(_jquery2.default.proxy(function () {
                    this.trigger("colorpickerCreate")
                }, this))
            }
            _createClass(Colorpicker, [{
                key: "init",
                value: function init() {
                    this.addonHandler.bind();
                    this.inputHandler.bind();
                    this.initExtensions();
                    this.colorHandler.bind();
                    this.pickerHandler.bind();
                    this.sliderHandler.bind();
                    this.popupHandler.bind();
                    this.pickerHandler.attach();
                    this.update();
                    if (this.inputHandler.isDisabled()) {
                        this.disable()
                    }
                }
            }, {
                key: "initExtensions",
                value: function initExtensions() {
                    var _this = this;
                    if (!Array.isArray(this.options.extensions)) {
                        this.options.extensions = []
                    }
                    if (this.options.debug) {
                        this.options.extensions.push({
                            name: "debugger"
                        })
                    }
                    this.options.extensions.forEach(function (ext) {
                        _this.registerExtension(Colorpicker.extensions[ext.name.toLowerCase()], ext.options || {})
                    })
                }
            }, {
                key: "registerExtension",
                value: function registerExtension(ExtensionClass) {
                    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var ext = new ExtensionClass(this, config);
                    this.extensions.push(ext);
                    return ext
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var color = this.color;
                    this.sliderHandler.unbind();
                    this.inputHandler.unbind();
                    this.popupHandler.unbind();
                    this.colorHandler.unbind();
                    this.addonHandler.unbind();
                    this.pickerHandler.unbind();
                    this.element.removeClass("colorpicker-element").removeData("colorpicker").removeData("color").off(".colorpicker");
                    this.trigger("colorpickerDestroy", color)
                }
            }, {
                key: "show",
                value: function show(e) {
                    this.popupHandler.show(e)
                }
            }, {
                key: "hide",
                value: function hide(e) {
                    this.popupHandler.hide(e)
                }
            }, {
                key: "toggle",
                value: function toggle(e) {
                    this.popupHandler.toggle(e)
                }
            }, {
                key: "getValue",
                value: function getValue() {
                    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var val = this.colorHandler.color;
                    val = val instanceof _ColorItem2.default ? val : defaultValue;
                    if (val instanceof _ColorItem2.default) {
                        return val.string(this.format)
                    }
                    return val
                }
            }, {
                key: "setValue",
                value: function setValue(val) {
                    if (this.isDisabled()) {
                        return
                    }
                    var ch = this.colorHandler;
                    if (ch.hasColor() && !!val && ch.color.equals(val) || !ch.hasColor() && !val) {
                        return
                    }
                    ch.color = val ? ch.createColor(val, this.options.autoInputFallback, this.options.autoHexInputFallback) : null;
                    this.trigger("colorpickerChange", ch.color, val);
                    this.update()
                }
            }, {
                key: "update",
                value: function update() {
                    if (this.colorHandler.hasColor()) {
                        this.inputHandler.update()
                    } else {
                        this.colorHandler.assureColor()
                    }
                    this.addonHandler.update();
                    this.pickerHandler.update();
                    this.trigger("colorpickerUpdate")
                }
            }, {
                key: "enable",
                value: function enable() {
                    this.inputHandler.enable();
                    this.disabled = false;
                    this.picker.removeClass("colorpicker-disabled");
                    this.trigger("colorpickerEnable");
                    return true
                }
            }, {
                key: "disable",
                value: function disable() {
                    this.inputHandler.disable();
                    this.disabled = true;
                    this.picker.addClass("colorpicker-disabled");
                    this.trigger("colorpickerDisable");
                    return true
                }
            }, {
                key: "isEnabled",
                value: function isEnabled() {
                    return !this.isDisabled()
                }
            }, {
                key: "isDisabled",
                value: function isDisabled() {
                    return this.disabled === true
                }
            }, {
                key: "trigger",
                value: function trigger(eventName) {
                    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    this.element.trigger({
                        type: eventName,
                        colorpicker: this,
                        color: color ? color : this.color,
                        value: value ? value : this.getValue()
                    })
                }
            }]);
            return Colorpicker
        }();
        Colorpicker.extensions = _extensions2.default;
        exports.default = Colorpicker;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Palette = exports.Swatches = exports.Preview = exports.Debugger = undefined;
        var _Debugger = __webpack_require__(10);
        var _Debugger2 = _interopRequireDefault(_Debugger);
        var _Preview = __webpack_require__(11);
        var _Preview2 = _interopRequireDefault(_Preview);
        var _Swatches = __webpack_require__(12);
        var _Swatches2 = _interopRequireDefault(_Swatches);
        var _Palette = __webpack_require__(4);
        var _Palette2 = _interopRequireDefault(_Palette);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        exports.Debugger = _Debugger2.default;
        exports.Preview = _Preview2.default;
        exports.Swatches = _Swatches2.default;
        exports.Palette = _Palette2.default;
        exports.default = {
            debugger: _Debugger2.default,
            preview: _Preview2.default,
            swatches: _Swatches2.default,
            palette: _Palette2.default
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value" in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var _Extension2 = __webpack_require__(1);
        var _Extension3 = _interopRequireDefault(_Extension2);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var Debugger = function (_Extension) {
            _inherits(Debugger, _Extension);

            function Debugger(colorpicker) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Debugger);
                var _this = _possibleConstructorReturn(this, (Debugger.__proto__ || Object.getPrototypeOf(Debugger)).call(this, colorpicker, options));
                _this.eventCounter = 0;
                if (_this.colorpicker.inputHandler.hasInput()) {
                    _this.colorpicker.inputHandler.input.on("change.colorpicker-ext", _jquery2.default.proxy(_this.onChangeInput, _this))
                }
                return _this
            }
            _createClass(Debugger, [{
                key: "log",
                value: function log(eventName) {
                    var _console;
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key]
                    }
                    this.eventCounter += 1;
                    var logMessage = "#" + this.eventCounter + ": Colorpicker#" + this.colorpicker.id + " [" + eventName + "]";
                    (_console = console).debug.apply(_console, [logMessage].concat(args));
                    this.colorpicker.element.trigger({
                        type: "colorpickerDebug",
                        colorpicker: this.colorpicker,
                        color: this.color,
                        value: null,
                        debug: {
                            debugger: this,
                            eventName,
                            logArgs: args,
                            logMessage
                        }
                    })
                }
            }, {
                key: "resolveColor",
                value: function resolveColor(color) {
                    var realColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    this.log("resolveColor()", color, realColor);
                    return false
                }
            }, {
                key: "onCreate",
                value: function onCreate(event) {
                    this.log("colorpickerCreate");
                    return _get(Debugger.prototype.__proto__ || Object.getPrototypeOf(Debugger.prototype), "onCreate", this).call(this, event)
                }
            }, {
                key: "onDestroy",
                value: function onDestroy(event) {
                    this.log("colorpickerDestroy");
                    this.eventCounter = 0;
                    if (this.colorpicker.inputHandler.hasInput()) {
                        this.colorpicker.inputHandler.input.off(".colorpicker-ext")
                    }
                    return _get(Debugger.prototype.__proto__ || Object.getPrototypeOf(Debugger.prototype), "onDestroy", this).call(this, event)
                }
            }, {
                key: "onUpdate",
                value: function onUpdate(event) {
                    this.log("colorpickerUpdate")
                }
            }, {
                key: "onChangeInput",
                value: function onChangeInput(event) {
                    this.log("input:change.colorpicker", event.value, event.color)
                }
            }, {
                key: "onChange",
                value: function onChange(event) {
                    this.log("colorpickerChange", event.value, event.color)
                }
            }, {
                key: "onInvalid",
                value: function onInvalid(event) {
                    this.log("colorpickerInvalid", event.value, event.color)
                }
            }, {
                key: "onHide",
                value: function onHide(event) {
                    this.log("colorpickerHide");
                    this.eventCounter = 0
                }
            }, {
                key: "onShow",
                value: function onShow(event) {
                    this.log("colorpickerShow")
                }
            }, {
                key: "onDisable",
                value: function onDisable(event) {
                    this.log("colorpickerDisable")
                }
            }, {
                key: "onEnable",
                value: function onEnable(event) {
                    this.log("colorpickerEnable")
                }
            }]);
            return Debugger
        }(_Extension3.default);
        exports.default = Debugger;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value" in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var _Extension2 = __webpack_require__(1);
        var _Extension3 = _interopRequireDefault(_Extension2);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var Preview = function (_Extension) {
            _inherits(Preview, _Extension);

            function Preview(colorpicker) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Preview);
                var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, colorpicker, _jquery2.default.extend(true, {}, {
                    template: '<div class="colorpicker-bar colorpicker-preview"><div /></div>',
                    showText: true,
                    format: colorpicker.format
                }, options)));
                _this.element = (0, _jquery2.default)(_this.options.template);
                _this.elementInner = _this.element.find("div");
                return _this
            }
            _createClass(Preview, [{
                key: "onCreate",
                value: function onCreate(event) {
                    _get(Preview.prototype.__proto__ || Object.getPrototypeOf(Preview.prototype), "onCreate", this).call(this, event);
                    this.colorpicker.picker.append(this.element)
                }
            }, {
                key: "onUpdate",
                value: function onUpdate(event) {
                    _get(Preview.prototype.__proto__ || Object.getPrototypeOf(Preview.prototype), "onUpdate", this).call(this, event);
                    if (!event.color) {
                        this.elementInner.css("backgroundColor", null).css("color", null).html("");
                        return
                    }
                    this.elementInner.css("backgroundColor", event.color.toRgbString());
                    if (this.options.showText) {
                        this.elementInner.html(event.color.string(this.options.format || this.colorpicker.format));
                        if (event.color.isDark() && event.color.alpha > .5) {
                            this.elementInner.css("color", "white")
                        } else {
                            this.elementInner.css("color", "black")
                        }
                    }
                }
            }]);
            return Preview
        }(_Extension3.default);
        exports.default = Preview;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value" in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var _Palette2 = __webpack_require__(4);
        var _Palette3 = _interopRequireDefault(_Palette2);
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var defaults = {
            barTemplate: '<div class="colorpicker-bar colorpicker-swatches">\n                    <div class="colorpicker-swatches--inner"></div>\n                </div>',
            swatchTemplate: '<i class="colorpicker-swatch"><i class="colorpicker-swatch--inner"></i></i>'
        };
        var Swatches = function (_Palette) {
            _inherits(Swatches, _Palette);

            function Swatches(colorpicker) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Swatches);
                var _this = _possibleConstructorReturn(this, (Swatches.__proto__ || Object.getPrototypeOf(Swatches)).call(this, colorpicker, _jquery2.default.extend(true, {}, defaults, options)));
                _this.element = null;
                return _this
            }
            _createClass(Swatches, [{
                key: "isEnabled",
                value: function isEnabled() {
                    return this.getLength() > 0
                }
            }, {
                key: "onCreate",
                value: function onCreate(event) {
                    _get(Swatches.prototype.__proto__ || Object.getPrototypeOf(Swatches.prototype), "onCreate", this).call(this, event);
                    if (!this.isEnabled()) {
                        return
                    }
                    this.element = (0, _jquery2.default)(this.options.barTemplate);
                    this.load();
                    this.colorpicker.picker.append(this.element)
                }
            }, {
                key: "load",
                value: function load() {
                    var _this2 = this;
                    var colorpicker = this.colorpicker,
                        swatchContainer = this.element.find(".colorpicker-swatches--inner"),
                        isAliased = this.options.namesAsValues === true && !Array.isArray(this.colors);
                    swatchContainer.empty();
                    _jquery2.default.each(this.colors, function (name, value) {
                        var $swatch = (0, _jquery2.default)(_this2.options.swatchTemplate).attr("data-name", name).attr("data-value", value).attr("title", isAliased ? name + ": " + value : value).on("mousedown.colorpicker touchstart.colorpicker", function (e) {
                            var $sw = (0, _jquery2.default)(this);
                            colorpicker.setValue(isAliased ? $sw.attr("data-name") : $sw.attr("data-value"))
                        });
                        $swatch.find(".colorpicker-swatch--inner").css("background-color", value);
                        swatchContainer.append($swatch)
                    });
                    swatchContainer.append((0, _jquery2.default)('<i class="colorpicker-clear"></i>'))
                }
            }]);
            return Swatches
        }(_Palette3.default);
        exports.default = Swatches;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var SliderHandler = function () {
            function SliderHandler(colorpicker) {
                _classCallCheck(this, SliderHandler);
                this.colorpicker = colorpicker;
                this.currentSlider = null;
                this.mousePointer = {
                    left: 0,
                    top: 0
                };
                this.onMove = _jquery2.default.proxy(this.defaultOnMove, this)
            }
            _createClass(SliderHandler, [{
                key: "defaultOnMove",
                value: function defaultOnMove(top, left) {
                    if (!this.currentSlider) {
                        return
                    }
                    var slider = this.currentSlider,
                        cp = this.colorpicker,
                        ch = cp.colorHandler;
                    var color = !ch.hasColor() ? ch.getFallbackColor() : ch.color.getClone();
                    slider.guideStyle.left = left + "px";
                    slider.guideStyle.top = top + "px";
                    if (slider.callLeft) {
                        color[slider.callLeft](left / slider.maxLeft)
                    }
                    if (slider.callTop) {
                        color[slider.callTop](top / slider.maxTop)
                    }
                    cp.setValue(color);
                    cp.popupHandler.focus()
                }
            }, {
                key: "bind",
                value: function bind() {
                    var sliders = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders;
                    var sliderClasses = [];
                    for (var sliderName in sliders) {
                        if (!sliders.hasOwnProperty(sliderName)) {
                            continue
                        }
                        sliderClasses.push(sliders[sliderName].selector)
                    }
                    this.colorpicker.picker.find(sliderClasses.join(", ")).on("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.pressed, this))
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    (0, _jquery2.default)(this.colorpicker.picker).off({
                        "mousemove.colorpicker": _jquery2.default.proxy(this.moved, this),
                        "touchmove.colorpicker": _jquery2.default.proxy(this.moved, this),
                        "mouseup.colorpicker": _jquery2.default.proxy(this.released, this),
                        "touchend.colorpicker": _jquery2.default.proxy(this.released, this)
                    })
                }
            }, {
                key: "pressed",
                value: function pressed(e) {
                    if (this.colorpicker.isDisabled()) {
                        return
                    }
                    this.colorpicker.lastEvent.alias = "pressed";
                    this.colorpicker.lastEvent.e = e;
                    if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
                        e.pageX = e.originalEvent.touches[0].pageX;
                        e.pageY = e.originalEvent.touches[0].pageY
                    }
                    var target = (0, _jquery2.default)(e.target);
                    var zone = target.closest("div");
                    var sliders = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders;
                    if (zone.is(".colorpicker")) {
                        return
                    }
                    this.currentSlider = null;
                    for (var sliderName in sliders) {
                        if (!sliders.hasOwnProperty(sliderName)) {
                            continue
                        }
                        var slider = sliders[sliderName];
                        if (zone.is(slider.selector)) {
                            this.currentSlider = _jquery2.default.extend({}, slider, {
                                name: sliderName
                            });
                            break
                        } else if (slider.childSelector !== undefined && zone.is(slider.childSelector)) {
                            this.currentSlider = _jquery2.default.extend({}, slider, {
                                name: sliderName
                            });
                            zone = zone.parent();
                            break
                        }
                    }
                    var guide = zone.find(".colorpicker-guide").get(0);
                    if (this.currentSlider === null || guide === null) {
                        return
                    }
                    var offset = zone.offset();
                    this.currentSlider.guideStyle = guide.style;
                    this.currentSlider.left = e.pageX - offset.left;
                    this.currentSlider.top = e.pageY - offset.top;
                    this.mousePointer = {
                        left: e.pageX,
                        top: e.pageY
                    };
                    (0, _jquery2.default)(this.colorpicker.picker).on({
                        "mousemove.colorpicker": _jquery2.default.proxy(this.moved, this),
                        "touchmove.colorpicker": _jquery2.default.proxy(this.moved, this),
                        "mouseup.colorpicker": _jquery2.default.proxy(this.released, this),
                        "touchend.colorpicker": _jquery2.default.proxy(this.released, this)
                    }).trigger("mousemove")
                }
            }, {
                key: "moved",
                value: function moved(e) {
                    this.colorpicker.lastEvent.alias = "moved";
                    this.colorpicker.lastEvent.e = e;
                    if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
                        e.pageX = e.originalEvent.touches[0].pageX;
                        e.pageY = e.originalEvent.touches[0].pageY
                    }
                    e.preventDefault();
                    var left = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left)));
                    var top = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)));
                    this.onMove(top, left)
                }
            }, {
                key: "released",
                value: function released(e) {
                    this.colorpicker.lastEvent.alias = "released";
                    this.colorpicker.lastEvent.e = e;
                    (0, _jquery2.default)(this.colorpicker.picker).off({
                        "mousemove.colorpicker": this.moved,
                        "touchmove.colorpicker": this.moved,
                        "mouseup.colorpicker": this.released,
                        "touchend.colorpicker": this.released
                    })
                }
            }]);
            return SliderHandler
        }();
        exports.default = SliderHandler;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);
        var _options = __webpack_require__(3);
        var _options2 = _interopRequireDefault(_options);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var PopupHandler = function () {
            function PopupHandler(colorpicker, root) {
                _classCallCheck(this, PopupHandler);
                this.root = root;
                this.colorpicker = colorpicker;
                this.popoverTarget = null;
                this.popoverTip = null;
                this.clicking = false;
                this.hidding = false;
                this.showing = false
            }
            _createClass(PopupHandler, [{
                key: "bind",
                value: function bind() {
                    var cp = this.colorpicker;
                    if (cp.options.inline) {
                        cp.picker.addClass("colorpicker-inline colorpicker-visible");
                        return
                    }
                    cp.picker.addClass("colorpicker-popup colorpicker-hidden");
                    if (!this.hasInput && !this.hasAddon) {
                        return
                    }
                    if (cp.options.popover) {
                        this.createPopover()
                    }
                    if (this.hasAddon) {
                        if (!this.addon.attr("tabindex")) {
                            this.addon.attr("tabindex", 0)
                        }
                        this.addon.on({
                            "mousedown.colorpicker touchstart.colorpicker": _jquery2.default.proxy(this.toggle, this)
                        });
                        this.addon.on({
                            "focus.colorpicker": _jquery2.default.proxy(this.show, this)
                        });
                        this.addon.on({
                            "focusout.colorpicker": _jquery2.default.proxy(this.hide, this)
                        })
                    }
                    if (this.hasInput && !this.hasAddon) {
                        this.input.on({
                            "mousedown.colorpicker touchstart.colorpicker": _jquery2.default.proxy(this.show, this),
                            "focus.colorpicker": _jquery2.default.proxy(this.show, this)
                        });
                        this.input.on({
                            "focusout.colorpicker": _jquery2.default.proxy(this.hide, this)
                        })
                    }(0, _jquery2.default)(this.root).on("resize.colorpicker", _jquery2.default.proxy(this.reposition, this))
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    if (this.hasInput) {
                        this.input.off({
                            "mousedown.colorpicker touchstart.colorpicker": _jquery2.default.proxy(this.show, this),
                            "focus.colorpicker": _jquery2.default.proxy(this.show, this)
                        });
                        this.input.off({
                            "focusout.colorpicker": _jquery2.default.proxy(this.hide, this)
                        })
                    }
                    if (this.hasAddon) {
                        this.addon.off({
                            "mousedown.colorpicker touchstart.colorpicker": _jquery2.default.proxy(this.toggle, this)
                        });
                        this.addon.off({
                            "focus.colorpicker": _jquery2.default.proxy(this.show, this)
                        });
                        this.addon.off({
                            "focusout.colorpicker": _jquery2.default.proxy(this.hide, this)
                        })
                    }
                    if (this.popoverTarget) {
                        this.popoverTarget.popover("dispose")
                    }(0, _jquery2.default)(this.root).off("resize.colorpicker", _jquery2.default.proxy(this.reposition, this));
                    (0, _jquery2.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.hide, this));
                    (0, _jquery2.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.onClickingInside, this))
                }
            }, {
                key: "isClickingInside",
                value: function isClickingInside(e) {
                    if (!e) {
                        return false
                    }
                    return this.isOrIsInside(this.popoverTip, e.currentTarget) || this.isOrIsInside(this.popoverTip, e.target) || this.isOrIsInside(this.colorpicker.picker, e.currentTarget) || this.isOrIsInside(this.colorpicker.picker, e.target)
                }
            }, {
                key: "isOrIsInside",
                value: function isOrIsInside(container, element) {
                    if (!container || !element) {
                        return false
                    }
                    element = (0, _jquery2.default)(element);
                    return element.is(container) || container.find(element).length > 0
                }
            }, {
                key: "onClickingInside",
                value: function onClickingInside(e) {
                    this.clicking = this.isClickingInside(e)
                }
            }, {
                key: "createPopover",
                value: function createPopover() {
                    var cp = this.colorpicker;
                    this.popoverTarget = this.hasAddon ? this.addon : this.input;
                    cp.picker.addClass("colorpicker-bs-popover-content");
                    this.popoverTarget.popover(_jquery2.default.extend(true, {}, _options2.default.popover, cp.options.popover, {
                        trigger: "manual",
                        content: cp.picker,
                        html: true
                    }));
                    var useGetInstance = window.bootstrap && window.bootstrap.Popover && window.bootstrap.Popover.getInstance;
                    this.popoverTip = useGetInstance ? (0, _jquery2.default)(bootstrap.Popover.getInstance(this.popoverTarget[0]).getTipElement()) : (0, _jquery2.default)(this.popoverTarget.popover("getTipElement").data("bs.popover").tip);
                    this.popoverTip.addClass("colorpicker-bs-popover");
                    this.popoverTarget.on("shown.bs.popover", _jquery2.default.proxy(this.fireShow, this));
                    this.popoverTarget.on("hidden.bs.popover", _jquery2.default.proxy(this.fireHide, this))
                }
            }, {
                key: "reposition",
                value: function reposition(e) {
                    if (this.popoverTarget && this.isVisible()) {
                        this.popoverTarget.popover("update")
                    }
                }
            }, {
                key: "toggle",
                value: function toggle(e) {
                    if (this.isVisible()) {
                        this.hide(e)
                    } else {
                        this.show(e)
                    }
                }
            }, {
                key: "show",
                value: function show(e) {
                    if (this.isVisible() || this.showing || this.hidding) {
                        return
                    }
                    this.showing = true;
                    this.hidding = false;
                    this.clicking = false;
                    var cp = this.colorpicker;
                    cp.lastEvent.alias = "show";
                    cp.lastEvent.e = e;
                    if (e && (!this.hasInput || this.input.attr("type") === "color") && e && e.preventDefault) {
                        e.stopPropagation();
                        e.preventDefault()
                    }
                    if (this.isPopover) {
                        (0, _jquery2.default)(this.root).on("resize.colorpicker", _jquery2.default.proxy(this.reposition, this))
                    }
                    cp.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden");
                    if (this.popoverTarget) {
                        this.popoverTarget.popover("show")
                    } else {
                        this.fireShow()
                    }
                }
            }, {
                key: "fireShow",
                value: function fireShow() {
                    this.hidding = false;
                    this.showing = false;
                    if (this.isPopover) {
                        (0, _jquery2.default)(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.hide, this));
                        (0, _jquery2.default)(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.onClickingInside, this))
                    }
                    this.colorpicker.trigger("colorpickerShow")
                }
            }, {
                key: "hide",
                value: function hide(e) {
                    if (this.isHidden() || this.showing || this.hidding) {
                        return
                    }
                    var cp = this.colorpicker,
                        clicking = this.clicking || this.isClickingInside(e);
                    this.hidding = true;
                    this.showing = false;
                    this.clicking = false;
                    cp.lastEvent.alias = "hide";
                    cp.lastEvent.e = e;
                    if (clicking) {
                        this.hidding = false;
                        return
                    }
                    if (this.popoverTarget) {
                        this.popoverTarget.popover("hide")
                    } else {
                        this.fireHide()
                    }
                }
            }, {
                key: "fireHide",
                value: function fireHide() {
                    this.hidding = false;
                    this.showing = false;
                    var cp = this.colorpicker;
                    cp.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible");
                    (0, _jquery2.default)(this.root).off("resize.colorpicker", _jquery2.default.proxy(this.reposition, this));
                    (0, _jquery2.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.hide, this));
                    (0, _jquery2.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", _jquery2.default.proxy(this.onClickingInside, this));
                    cp.trigger("colorpickerHide")
                }
            }, {
                key: "focus",
                value: function focus() {
                    if (this.hasAddon) {
                        return this.addon.focus()
                    }
                    if (this.hasInput) {
                        return this.input.focus()
                    }
                    return false
                }
            }, {
                key: "isVisible",
                value: function isVisible() {
                    return this.colorpicker.picker.hasClass("colorpicker-visible") && !this.colorpicker.picker.hasClass("colorpicker-hidden")
                }
            }, {
                key: "isHidden",
                value: function isHidden() {
                    return this.colorpicker.picker.hasClass("colorpicker-hidden") && !this.colorpicker.picker.hasClass("colorpicker-visible")
                }
            }, {
                key: "input",
                get: function get() {
                    return this.colorpicker.inputHandler.input
                }
            }, {
                key: "hasInput",
                get: function get() {
                    return this.colorpicker.inputHandler.hasInput()
                }
            }, {
                key: "addon",
                get: function get() {
                    return this.colorpicker.addonHandler.addon
                }
            }, {
                key: "hasAddon",
                get: function get() {
                    return this.colorpicker.addonHandler.hasAddon()
                }
            }, {
                key: "isPopover",
                get: function get() {
                    return !this.colorpicker.options.inline && !!this.popoverTip
                }
            }]);
            return PopupHandler
        }();
        exports.default = PopupHandler;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);
        var _ColorItem = __webpack_require__(2);
        var _ColorItem2 = _interopRequireDefault(_ColorItem);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var InputHandler = function () {
            function InputHandler(colorpicker) {
                _classCallCheck(this, InputHandler);
                this.colorpicker = colorpicker;
                this.input = this.colorpicker.element.is("input") ? this.colorpicker.element : this.colorpicker.options.input ? this.colorpicker.element.find(this.colorpicker.options.input) : false;
                if (this.input && this.input.length === 0) {
                    this.input = false
                }
                this._initValue()
            }
            _createClass(InputHandler, [{
                key: "bind",
                value: function bind() {
                    if (!this.hasInput()) {
                        return
                    }
                    this.input.on({
                        "keyup.colorpicker": _jquery2.default.proxy(this.onkeyup, this)
                    });
                    this.input.on({
                        "change.colorpicker": _jquery2.default.proxy(this.onchange, this)
                    })
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    if (!this.hasInput()) {
                        return
                    }
                    this.input.off(".colorpicker")
                }
            }, {
                key: "_initValue",
                value: function _initValue() {
                    if (!this.hasInput()) {
                        return
                    }
                    var val = "";
                    [this.input.val(), this.input.data("color"), this.input.attr("data-color")].map(function (item) {
                        if (item && val === "") {
                            val = item
                        }
                    });
                    if (val instanceof _ColorItem2.default) {
                        val = this.getFormattedColor(val.string(this.colorpicker.format))
                    } else if (!(typeof val === "string" || val instanceof String)) {
                        val = ""
                    }
                    this.input.prop("value", val)
                }
            }, {
                key: "getValue",
                value: function getValue() {
                    if (!this.hasInput()) {
                        return false
                    }
                    return this.input.val()
                }
            }, {
                key: "setValue",
                value: function setValue(val) {
                    if (!this.hasInput()) {
                        return
                    }
                    var inputVal = this.input.prop("value");
                    val = val ? val : "";
                    if (val === (inputVal ? inputVal : "")) {
                        return
                    }
                    this.input.prop("value", val);
                    this.input.trigger({
                        type: "change",
                        colorpicker: this.colorpicker,
                        color: this.colorpicker.color,
                        value: val
                    })
                }
            }, {
                key: "getFormattedColor",
                value: function getFormattedColor() {
                    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    val = val ? val : this.colorpicker.colorHandler.getColorString();
                    if (!val) {
                        return ""
                    }
                    val = this.colorpicker.colorHandler.resolveColorDelegate(val, false);
                    if (this.colorpicker.options.useHashPrefix === false) {
                        val = val.replace(/^#/g, "")
                    }
                    return val
                }
            }, {
                key: "hasInput",
                value: function hasInput() {
                    return this.input !== false
                }
            }, {
                key: "isEnabled",
                value: function isEnabled() {
                    return this.hasInput() && !this.isDisabled()
                }
            }, {
                key: "isDisabled",
                value: function isDisabled() {
                    return this.hasInput() && this.input.prop("disabled") === true
                }
            }, {
                key: "disable",
                value: function disable() {
                    if (this.hasInput()) {
                        this.input.prop("disabled", true)
                    }
                }
            }, {
                key: "enable",
                value: function enable() {
                    if (this.hasInput()) {
                        this.input.prop("disabled", false)
                    }
                }
            }, {
                key: "update",
                value: function update() {
                    if (!this.hasInput()) {
                        return
                    }
                    if (this.colorpicker.options.autoInputFallback === false && this.colorpicker.colorHandler.isInvalidColor()) {
                        return
                    }
                    this.setValue(this.getFormattedColor())
                }
            }, {
                key: "onchange",
                value: function onchange(e) {
                    this.colorpicker.lastEvent.alias = "input.change";
                    this.colorpicker.lastEvent.e = e;
                    var val = this.getValue();
                    if (val !== e.value) {
                        this.colorpicker.setValue(val)
                    }
                }
            }, {
                key: "onkeyup",
                value: function onkeyup(e) {
                    this.colorpicker.lastEvent.alias = "input.keyup";
                    this.colorpicker.lastEvent.e = e;
                    var val = this.getValue();
                    if (val !== e.value) {
                        this.colorpicker.setValue(val)
                    }
                }
            }]);
            return InputHandler
        }();
        exports.default = InputHandler;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var colorString = __webpack_require__(17);
        var convert = __webpack_require__(20);
        var _slice = [].slice;
        var skippedModels = ["keyword", "gray", "hex"];
        var hashedModelKeys = {};
        Object.keys(convert).forEach(function (model) {
            hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model
        });
        var limiters = {};

        function Color(obj, model) {
            if (!(this instanceof Color)) {
                return new Color(obj, model)
            }
            if (model && model in skippedModels) {
                model = null
            }
            if (model && !(model in convert)) {
                throw new Error("Unknown model: " + model)
            }
            var i;
            var channels;
            if (obj == null) {
                this.model = "rgb";
                this.color = [0, 0, 0];
                this.valpha = 1
            } else if (obj instanceof Color) {
                this.model = obj.model;
                this.color = obj.color.slice();
                this.valpha = obj.valpha
            } else if (typeof obj === "string") {
                var result = colorString.get(obj);
                if (result === null) {
                    throw new Error("Unable to parse color from string: " + obj)
                }
                this.model = result.model;
                channels = convert[this.model].channels;
                this.color = result.value.slice(0, channels);
                this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1
            } else if (obj.length) {
                this.model = model || "rgb";
                channels = convert[this.model].channels;
                var newArr = _slice.call(obj, 0, channels);
                this.color = zeroArray(newArr, channels);
                this.valpha = typeof obj[channels] === "number" ? obj[channels] : 1
            } else if (typeof obj === "number") {
                obj &= 16777215;
                this.model = "rgb";
                this.color = [obj >> 16 & 255, obj >> 8 & 255, obj & 255];
                this.valpha = 1
            } else {
                this.valpha = 1;
                var keys = Object.keys(obj);
                if ("alpha" in obj) {
                    keys.splice(keys.indexOf("alpha"), 1);
                    this.valpha = typeof obj.alpha === "number" ? obj.alpha : 0
                }
                var hashedKeys = keys.sort().join("");
                if (!(hashedKeys in hashedModelKeys)) {
                    throw new Error("Unable to parse color from object: " + JSON.stringify(obj))
                }
                this.model = hashedModelKeys[hashedKeys];
                var labels = convert[this.model].labels;
                var color = [];
                for (i = 0; i < labels.length; i++) {
                    color.push(obj[labels[i]])
                }
                this.color = zeroArray(color)
            }
            if (limiters[this.model]) {
                channels = convert[this.model].channels;
                for (i = 0; i < channels; i++) {
                    var limit = limiters[this.model][i];
                    if (limit) {
                        this.color[i] = limit(this.color[i])
                    }
                }
            }
            this.valpha = Math.max(0, Math.min(1, this.valpha));
            if (Object.freeze) {
                Object.freeze(this)
            }
        }
        Color.prototype = {
            toString: function () {
                return this.string()
            },
            toJSON: function () {
                return this[this.model]()
            },
            string: function (places) {
                var self = this.model in colorString.to ? this : this.rgb();
                self = self.round(typeof places === "number" ? places : 1);
                var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
                return colorString.to[self.model](args)
            },
            percentString: function (places) {
                var self = this.rgb().round(typeof places === "number" ? places : 1);
                var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
                return colorString.to.rgb.percent(args)
            },
            array: function () {
                return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha)
            },
            object: function () {
                var result = {};
                var channels = convert[this.model].channels;
                var labels = convert[this.model].labels;
                for (var i = 0; i < channels; i++) {
                    result[labels[i]] = this.color[i]
                }
                if (this.valpha !== 1) {
                    result.alpha = this.valpha
                }
                return result
            },
            unitArray: function () {
                var rgb = this.rgb().color;
                rgb[0] /= 255;
                rgb[1] /= 255;
                rgb[2] /= 255;
                if (this.valpha !== 1) {
                    rgb.push(this.valpha)
                }
                return rgb
            },
            unitObject: function () {
                var rgb = this.rgb().object();
                rgb.r /= 255;
                rgb.g /= 255;
                rgb.b /= 255;
                if (this.valpha !== 1) {
                    rgb.alpha = this.valpha
                }
                return rgb
            },
            round: function (places) {
                places = Math.max(places || 0, 0);
                return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model)
            },
            alpha: function (val) {
                if (arguments.length) {
                    return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model)
                }
                return this.valpha
            },
            red: getset("rgb", 0, maxfn(255)),
            green: getset("rgb", 1, maxfn(255)),
            blue: getset("rgb", 2, maxfn(255)),
            hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (val) {
                return (val % 360 + 360) % 360
            }),
            saturationl: getset("hsl", 1, maxfn(100)),
            lightness: getset("hsl", 2, maxfn(100)),
            saturationv: getset("hsv", 1, maxfn(100)),
            value: getset("hsv", 2, maxfn(100)),
            chroma: getset("hcg", 1, maxfn(100)),
            gray: getset("hcg", 2, maxfn(100)),
            white: getset("hwb", 1, maxfn(100)),
            wblack: getset("hwb", 2, maxfn(100)),
            cyan: getset("cmyk", 0, maxfn(100)),
            magenta: getset("cmyk", 1, maxfn(100)),
            yellow: getset("cmyk", 2, maxfn(100)),
            black: getset("cmyk", 3, maxfn(100)),
            x: getset("xyz", 0, maxfn(100)),
            y: getset("xyz", 1, maxfn(100)),
            z: getset("xyz", 2, maxfn(100)),
            l: getset("lab", 0, maxfn(100)),
            a: getset("lab", 1),
            b: getset("lab", 2),
            keyword: function (val) {
                if (arguments.length) {
                    return new Color(val)
                }
                return convert[this.model].keyword(this.color)
            },
            hex: function (val) {
                if (arguments.length) {
                    return new Color(val)
                }
                return colorString.to.hex(this.rgb().round().color)
            },
            rgbNumber: function () {
                var rgb = this.rgb().color;
                return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255
            },
            luminosity: function () {
                var rgb = this.rgb().color;
                var lum = [];
                for (var i = 0; i < rgb.length; i++) {
                    var chan = rgb[i] / 255;
                    lum[i] = chan <= .03928 ? chan / 12.92 : Math.pow((chan + .055) / 1.055, 2.4)
                }
                return .2126 * lum[0] + .7152 * lum[1] + .0722 * lum[2]
            },
            contrast: function (color2) {
                var lum1 = this.luminosity();
                var lum2 = color2.luminosity();
                if (lum1 > lum2) {
                    return (lum1 + .05) / (lum2 + .05)
                }
                return (lum2 + .05) / (lum1 + .05)
            },
            level: function (color2) {
                var contrastRatio = this.contrast(color2);
                if (contrastRatio >= 7.1) {
                    return "AAA"
                }
                return contrastRatio >= 4.5 ? "AA" : ""
            },
            isDark: function () {
                var rgb = this.rgb().color;
                var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
                return yiq < 128
            },
            isLight: function () {
                return !this.isDark()
            },
            negate: function () {
                var rgb = this.rgb();
                for (var i = 0; i < 3; i++) {
                    rgb.color[i] = 255 - rgb.color[i]
                }
                return rgb
            },
            lighten: function (ratio) {
                var hsl = this.hsl();
                hsl.color[2] += hsl.color[2] * ratio;
                return hsl
            },
            darken: function (ratio) {
                var hsl = this.hsl();
                hsl.color[2] -= hsl.color[2] * ratio;
                return hsl
            },
            saturate: function (ratio) {
                var hsl = this.hsl();
                hsl.color[1] += hsl.color[1] * ratio;
                return hsl
            },
            desaturate: function (ratio) {
                var hsl = this.hsl();
                hsl.color[1] -= hsl.color[1] * ratio;
                return hsl
            },
            whiten: function (ratio) {
                var hwb = this.hwb();
                hwb.color[1] += hwb.color[1] * ratio;
                return hwb
            },
            blacken: function (ratio) {
                var hwb = this.hwb();
                hwb.color[2] += hwb.color[2] * ratio;
                return hwb
            },
            grayscale: function () {
                var rgb = this.rgb().color;
                var val = rgb[0] * .3 + rgb[1] * .59 + rgb[2] * .11;
                return Color.rgb(val, val, val)
            },
            fade: function (ratio) {
                return this.alpha(this.valpha - this.valpha * ratio)
            },
            opaquer: function (ratio) {
                return this.alpha(this.valpha + this.valpha * ratio)
            },
            rotate: function (degrees) {
                var hsl = this.hsl();
                var hue = hsl.color[0];
                hue = (hue + degrees) % 360;
                hue = hue < 0 ? 360 + hue : hue;
                hsl.color[0] = hue;
                return hsl
            },
            mix: function (mixinColor, weight) {
                if (!mixinColor || !mixinColor.rgb) {
                    throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor)
                }
                var color1 = mixinColor.rgb();
                var color2 = this.rgb();
                var p = weight === undefined ? .5 : weight;
                var w = 2 * p - 1;
                var a = color1.alpha() - color2.alpha();
                var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
                var w2 = 1 - w1;
                return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p))
            }
        };
        Object.keys(convert).forEach(function (model) {
            if (skippedModels.indexOf(model) !== -1) {
                return
            }
            var channels = convert[model].channels;
            Color.prototype[model] = function () {
                if (this.model === model) {
                    return new Color(this)
                }
                if (arguments.length) {
                    return new Color(arguments, model)
                }
                var newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
                return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model)
            };
            Color[model] = function (color) {
                if (typeof color === "number") {
                    color = zeroArray(_slice.call(arguments), channels)
                }
                return new Color(color, model)
            }
        });

        function roundTo(num, places) {
            return Number(num.toFixed(places))
        }

        function roundToPlace(places) {
            return function (num) {
                return roundTo(num, places)
            }
        }

        function getset(model, channel, modifier) {
            model = Array.isArray(model) ? model : [model];
            model.forEach(function (m) {
                (limiters[m] || (limiters[m] = []))[channel] = modifier
            });
            model = model[0];
            return function (val) {
                var result;
                if (arguments.length) {
                    if (modifier) {
                        val = modifier(val)
                    }
                    result = this[model]();
                    result.color[channel] = val;
                    return result
                }
                result = this[model]().color[channel];
                if (modifier) {
                    result = modifier(result)
                }
                return result
            }
        }

        function maxfn(max) {
            return function (v) {
                return Math.max(0, Math.min(max, v))
            }
        }

        function assertArray(val) {
            return Array.isArray(val) ? val : [val]
        }

        function zeroArray(arr, length) {
            for (var i = 0; i < length; i++) {
                if (typeof arr[i] !== "number") {
                    arr[i] = 0
                }
            }
            return arr
        }
        module.exports = Color
    }, function (module, exports, __webpack_require__) {
        var colorNames = __webpack_require__(5);
        var swizzle = __webpack_require__(18);
        var reverseNames = {};
        for (var name in colorNames) {
            if (colorNames.hasOwnProperty(name)) {
                reverseNames[colorNames[name]] = name
            }
        }
        var cs = module.exports = {
            to: {},
            get: {}
        };
        cs.get = function (string) {
            var prefix = string.substring(0, 3).toLowerCase();
            var val;
            var model;
            switch (prefix) {
                case "hsl":
                    val = cs.get.hsl(string);
                    model = "hsl";
                    break;
                case "hwb":
                    val = cs.get.hwb(string);
                    model = "hwb";
                    break;
                default:
                    val = cs.get.rgb(string);
                    model = "rgb";
                    break
            }
            if (!val) {
                return null
            }
            return {
                model,
                value: val
            }
        };
        cs.get.rgb = function (string) {
            if (!string) {
                return null
            }
            var abbr = /^#([a-f0-9]{3,4})$/i;
            var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
            var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
            var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
            var keyword = /(\D+)/;
            var rgb = [0, 0, 0, 1];
            var match;
            var i;
            var hexAlpha;
            if (match = string.match(hex)) {
                hexAlpha = match[2];
                match = match[1];
                for (i = 0; i < 3; i++) {
                    var i2 = i * 2;
                    rgb[i] = parseInt(match.slice(i2, i2 + 2), 16)
                }
                if (hexAlpha) {
                    rgb[3] = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100
                }
            } else if (match = string.match(abbr)) {
                match = match[1];
                hexAlpha = match[3];
                for (i = 0; i < 3; i++) {
                    rgb[i] = parseInt(match[i] + match[i], 16)
                }
                if (hexAlpha) {
                    rgb[3] = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100
                }
            } else if (match = string.match(rgba)) {
                for (i = 0; i < 3; i++) {
                    rgb[i] = parseInt(match[i + 1], 0)
                }
                if (match[4]) {
                    rgb[3] = parseFloat(match[4])
                }
            } else if (match = string.match(per)) {
                for (i = 0; i < 3; i++) {
                    rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55)
                }
                if (match[4]) {
                    rgb[3] = parseFloat(match[4])
                }
            } else if (match = string.match(keyword)) {
                if (match[1] === "transparent") {
                    return [0, 0, 0, 0]
                }
                rgb = colorNames[match[1]];
                if (!rgb) {
                    return null
                }
                rgb[3] = 1;
                return rgb
            } else {
                return null
            }
            for (i = 0; i < 3; i++) {
                rgb[i] = clamp(rgb[i], 0, 255)
            }
            rgb[3] = clamp(rgb[3], 0, 1);
            return rgb
        };
        cs.get.hsl = function (string) {
            if (!string) {
                return null
            }
            var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
            var match = string.match(hsl);
            if (match) {
                var alpha = parseFloat(match[4]);
                var h = (parseFloat(match[1]) + 360) % 360;
                var s = clamp(parseFloat(match[2]), 0, 100);
                var l = clamp(parseFloat(match[3]), 0, 100);
                var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
                return [h, s, l, a]
            }
            return null
        };
        cs.get.hwb = function (string) {
            if (!string) {
                return null
            }
            var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
            var match = string.match(hwb);
            if (match) {
                var alpha = parseFloat(match[4]);
                var h = (parseFloat(match[1]) % 360 + 360) % 360;
                var w = clamp(parseFloat(match[2]), 0, 100);
                var b = clamp(parseFloat(match[3]), 0, 100);
                var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
                return [h, w, b, a]
            }
            return null
        };
        cs.to.hex = function () {
            var rgba = swizzle(arguments);
            return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "")
        };
        cs.to.rgb = function () {
            var rgba = swizzle(arguments);
            return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")"
        };
        cs.to.rgb.percent = function () {
            var rgba = swizzle(arguments);
            var r = Math.round(rgba[0] / 255 * 100);
            var g = Math.round(rgba[1] / 255 * 100);
            var b = Math.round(rgba[2] / 255 * 100);
            return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")"
        };
        cs.to.hsl = function () {
            var hsla = swizzle(arguments);
            return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")"
        };
        cs.to.hwb = function () {
            var hwba = swizzle(arguments);
            var a = "";
            if (hwba.length >= 4 && hwba[3] !== 1) {
                a = ", " + hwba[3]
            }
            return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")"
        };
        cs.to.keyword = function (rgb) {
            return reverseNames[rgb.slice(0, 3)]
        };

        function clamp(num, min, max) {
            return Math.min(Math.max(min, num), max)
        }

        function hexDouble(num) {
            var str = num.toString(16).toUpperCase();
            return str.length < 2 ? "0" + str : str
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var isArrayish = __webpack_require__(19);
        var concat = Array.prototype.concat;
        var slice = Array.prototype.slice;
        var swizzle = module.exports = function swizzle(args) {
            var results = [];
            for (var i = 0, len = args.length; i < len; i++) {
                var arg = args[i];
                if (isArrayish(arg)) {
                    results = concat.call(results, slice.call(arg))
                } else {
                    results.push(arg)
                }
            }
            return results
        };
        swizzle.wrap = function (fn) {
            return function () {
                return fn(swizzle(arguments))
            }
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        module.exports = function isArrayish(obj) {
            if (!obj) {
                return false
            }
            return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && obj.splice instanceof Function
        }
    }, function (module, exports, __webpack_require__) {
        var conversions = __webpack_require__(6);
        var route = __webpack_require__(21);
        var convert = {};
        var models = Object.keys(conversions);

        function wrapRaw(fn) {
            var wrappedFn = function (args) {
                if (args === undefined || args === null) {
                    return args
                }
                if (arguments.length > 1) {
                    args = Array.prototype.slice.call(arguments)
                }
                return fn(args)
            };
            if ("conversion" in fn) {
                wrappedFn.conversion = fn.conversion
            }
            return wrappedFn
        }

        function wrapRounded(fn) {
            var wrappedFn = function (args) {
                if (args === undefined || args === null) {
                    return args
                }
                if (arguments.length > 1) {
                    args = Array.prototype.slice.call(arguments)
                }
                var result = fn(args);
                if (typeof result === "object") {
                    for (var len = result.length, i = 0; i < len; i++) {
                        result[i] = Math.round(result[i])
                    }
                }
                return result
            };
            if ("conversion" in fn) {
                wrappedFn.conversion = fn.conversion
            }
            return wrappedFn
        }
        models.forEach(function (fromModel) {
            convert[fromModel] = {};
            Object.defineProperty(convert[fromModel], "channels", {
                value: conversions[fromModel].channels
            });
            Object.defineProperty(convert[fromModel], "labels", {
                value: conversions[fromModel].labels
            });
            var routes = route(fromModel);
            var routeModels = Object.keys(routes);
            routeModels.forEach(function (toModel) {
                var fn = routes[toModel];
                convert[fromModel][toModel] = wrapRounded(fn);
                convert[fromModel][toModel].raw = wrapRaw(fn)
            })
        });
        module.exports = convert
    }, function (module, exports, __webpack_require__) {
        var conversions = __webpack_require__(6);

        function buildGraph() {
            var graph = {};
            var models = Object.keys(conversions);
            for (var len = models.length, i = 0; i < len; i++) {
                graph[models[i]] = {
                    distance: -1,
                    parent: null
                }
            }
            return graph
        }

        function deriveBFS(fromModel) {
            var graph = buildGraph();
            var queue = [fromModel];
            graph[fromModel].distance = 0;
            while (queue.length) {
                var current = queue.pop();
                var adjacents = Object.keys(conversions[current]);
                for (var len = adjacents.length, i = 0; i < len; i++) {
                    var adjacent = adjacents[i];
                    var node = graph[adjacent];
                    if (node.distance === -1) {
                        node.distance = graph[current].distance + 1;
                        node.parent = current;
                        queue.unshift(adjacent)
                    }
                }
            }
            return graph
        }

        function link(from, to) {
            return function (args) {
                return to(from(args))
            }
        }

        function wrapConversion(toModel, graph) {
            var path = [graph[toModel].parent, toModel];
            var fn = conversions[graph[toModel].parent][toModel];
            var cur = graph[toModel].parent;
            while (graph[cur].parent) {
                path.unshift(graph[cur].parent);
                fn = link(conversions[graph[cur].parent][cur], fn);
                cur = graph[cur].parent
            }
            fn.conversion = path;
            return fn
        }
        module.exports = function (fromModel) {
            var graph = deriveBFS(fromModel);
            var conversion = {};
            var models = Object.keys(graph);
            for (var len = models.length, i = 0; i < len; i++) {
                var toModel = models[i];
                var node = graph[toModel];
                if (node.parent === null) {
                    continue
                }
                conversion[toModel] = wrapConversion(toModel, graph)
            }
            return conversion
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);
        var _ColorItem = __webpack_require__(2);
        var _ColorItem2 = _interopRequireDefault(_ColorItem);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var ColorHandler = function () {
            function ColorHandler(colorpicker) {
                _classCallCheck(this, ColorHandler);
                this.colorpicker = colorpicker
            }
            _createClass(ColorHandler, [{
                key: "bind",
                value: function bind() {
                    if (this.colorpicker.options.color) {
                        this.color = this.createColor(this.colorpicker.options.color);
                        return
                    }
                    if (!this.color && !!this.colorpicker.inputHandler.getValue()) {
                        this.color = this.createColor(this.colorpicker.inputHandler.getValue(), this.colorpicker.options.autoInputFallback)
                    }
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    this.colorpicker.element.removeData("color")
                }
            }, {
                key: "getColorString",
                value: function getColorString() {
                    if (!this.hasColor()) {
                        return ""
                    }
                    return this.color.string(this.format)
                }
            }, {
                key: "setColorString",
                value: function setColorString(val) {
                    var color = val ? this.createColor(val) : null;
                    this.color = color ? color : null
                }
            }, {
                key: "createColor",
                value: function createColor(val) {
                    var fallbackOnInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var autoHexInputFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var disableHexInputFallback = !fallbackOnInvalid && !autoHexInputFallback;
                    var color = new _ColorItem2.default(this.resolveColorDelegate(val), this.format, disableHexInputFallback);
                    if (!color.isValid()) {
                        if (fallbackOnInvalid) {
                            color = this.getFallbackColor()
                        }
                        this.colorpicker.trigger("colorpickerInvalid", color, val)
                    }
                    if (!this.isAlphaEnabled()) {
                        color.alpha = 1
                    }
                    return color
                }
            }, {
                key: "getFallbackColor",
                value: function getFallbackColor() {
                    if (this.fallback && this.fallback === this.color) {
                        return this.color
                    }
                    var fallback = this.resolveColorDelegate(this.fallback);
                    var color = new _ColorItem2.default(fallback, this.format);
                    if (!color.isValid()) {
                        console.warn("The fallback color is invalid. Falling back to the previous color or black if any.");
                        return this.color ? this.color : new _ColorItem2.default("#000000", this.format)
                    }
                    return color
                }
            }, {
                key: "assureColor",
                value: function assureColor() {
                    if (!this.hasColor()) {
                        this.color = this.getFallbackColor()
                    }
                    return this.color
                }
            }, {
                key: "resolveColorDelegate",
                value: function resolveColorDelegate(color) {
                    var realColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var extResolvedColor = false;
                    _jquery2.default.each(this.colorpicker.extensions, function (name, ext) {
                        if (extResolvedColor !== false) {
                            return
                        }
                        extResolvedColor = ext.resolveColor(color, realColor)
                    });
                    return extResolvedColor ? extResolvedColor : color
                }
            }, {
                key: "isInvalidColor",
                value: function isInvalidColor() {
                    return !this.hasColor() || !this.color.isValid()
                }
            }, {
                key: "isAlphaEnabled",
                value: function isAlphaEnabled() {
                    return this.colorpicker.options.useAlpha !== false
                }
            }, {
                key: "hasColor",
                value: function hasColor() {
                    return this.color instanceof _ColorItem2.default
                }
            }, {
                key: "fallback",
                get: function get() {
                    return this.colorpicker.options.fallbackColor ? this.colorpicker.options.fallbackColor : this.hasColor() ? this.color : null
                }
            }, {
                key: "format",
                get: function get() {
                    if (this.colorpicker.options.format) {
                        return this.colorpicker.options.format
                    }
                    if (this.hasColor() && this.color.hasTransparency() && this.color.format.match(/^hex/)) {
                        return this.isAlphaEnabled() ? "rgba" : "hex"
                    }
                    if (this.hasColor()) {
                        return this.color.format
                    }
                    return "rgb"
                }
            }, {
                key: "color",
                get: function get() {
                    return this.colorpicker.element.data("color")
                },
                set: function set(value) {
                    this.colorpicker.element.data("color", value);
                    if (value instanceof _ColorItem2.default && this.colorpicker.options.format === "auto") {
                        this.colorpicker.options.format = this.color.format
                    }
                }
            }]);
            return ColorHandler
        }();
        exports.default = ColorHandler;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _jquery = __webpack_require__(0);
        var _jquery2 = _interopRequireDefault(_jquery);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var PickerHandler = function () {
            function PickerHandler(colorpicker) {
                _classCallCheck(this, PickerHandler);
                this.colorpicker = colorpicker;
                this.picker = null
            }
            _createClass(PickerHandler, [{
                key: "bind",
                value: function bind() {
                    var picker = this.picker = (0, _jquery2.default)(this.options.template);
                    if (this.options.customClass) {
                        picker.addClass(this.options.customClass)
                    }
                    if (this.options.horizontal) {
                        picker.addClass("colorpicker-horizontal")
                    }
                    if (this._supportsAlphaBar()) {
                        this.options.useAlpha = true;
                        picker.addClass("colorpicker-with-alpha")
                    } else {
                        this.options.useAlpha = false
                    }
                }
            }, {
                key: "attach",
                value: function attach() {
                    var pickerParent = this.colorpicker.container ? this.colorpicker.container : null;
                    if (pickerParent) {
                        this.picker.appendTo(pickerParent)
                    }
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    this.picker.remove()
                }
            }, {
                key: "_supportsAlphaBar",
                value: function _supportsAlphaBar() {
                    return (this.options.useAlpha || this.colorpicker.colorHandler.hasColor() && this.color.hasTransparency()) && this.options.useAlpha !== false && (!this.options.format || this.options.format && !this.options.format.match(/^hex([36])?$/i))
                }
            }, {
                key: "update",
                value: function update() {
                    if (!this.colorpicker.colorHandler.hasColor()) {
                        return
                    }
                    var vertical = this.options.horizontal !== true,
                        slider = vertical ? this.options.sliders : this.options.slidersHorz;
                    var saturationGuide = this.picker.find(".colorpicker-saturation .colorpicker-guide"),
                        hueGuide = this.picker.find(".colorpicker-hue .colorpicker-guide"),
                        alphaGuide = this.picker.find(".colorpicker-alpha .colorpicker-guide");
                    var hsva = this.color.toHsvaRatio();
                    if (hueGuide.length) {
                        hueGuide.css(vertical ? "top" : "left", (vertical ? slider.hue.maxTop : slider.hue.maxLeft) * (1 - hsva.h))
                    }
                    if (alphaGuide.length) {
                        alphaGuide.css(vertical ? "top" : "left", (vertical ? slider.alpha.maxTop : slider.alpha.maxLeft) * (1 - hsva.a))
                    }
                    if (saturationGuide.length) {
                        saturationGuide.css({
                            top: slider.saturation.maxTop - hsva.v * slider.saturation.maxTop,
                            left: hsva.s * slider.saturation.maxLeft
                        })
                    }
                    this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.getCloneHueOnly().toHexString());
                    var hexColor = this.color.toHexString();
                    var alphaBg = "";
                    if (this.options.horizontal) {
                        alphaBg = "linear-gradient(to right, " + hexColor + " 0%, transparent 100%)"
                    } else {
                        alphaBg = "linear-gradient(to bottom, " + hexColor + " 0%, transparent 100%)"
                    }
                    this.picker.find(".colorpicker-alpha-color").css("background", alphaBg)
                }
            }, {
                key: "options",
                get: function get() {
                    return this.colorpicker.options
                }
            }, {
                key: "color",
                get: function get() {
                    return this.colorpicker.colorHandler.color
                }
            }]);
            return PickerHandler
        }();
        exports.default = PickerHandler;
        module.exports = exports.default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var AddonHandler = function () {
            function AddonHandler(colorpicker) {
                _classCallCheck(this, AddonHandler);
                this.colorpicker = colorpicker;
                this.addon = null
            }
            _createClass(AddonHandler, [{
                key: "hasAddon",
                value: function hasAddon() {
                    return !!this.addon
                }
            }, {
                key: "bind",
                value: function bind() {
                    this.addon = this.colorpicker.options.addon ? this.colorpicker.element.find(this.colorpicker.options.addon) : null;
                    if (this.addon && this.addon.length === 0) {
                        this.addon = null
                    }
                }
            }, {
                key: "unbind",
                value: function unbind() {
                    if (this.hasAddon()) {
                        this.addon.off(".colorpicker")
                    }
                }
            }, {
                key: "update",
                value: function update() {
                    if (!this.colorpicker.colorHandler.hasColor() || !this.hasAddon()) {
                        return
                    }
                    var colorStr = this.colorpicker.colorHandler.getColorString();
                    var styles = {
                        background: colorStr
                    };
                    var icn = this.addon.find("i").eq(0);
                    if (icn.length > 0) {
                        icn.css(styles)
                    } else {
                        this.addon.css(styles)
                    }
                }
            }]);
            return AddonHandler
        }();
        exports.default = AddonHandler;
        module.exports = exports.default
    }])
});
//# sourceMappingURL=bootstrap-colorpicker.min.js.map
