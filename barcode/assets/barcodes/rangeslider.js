/*! rangeslider.js - v1.1.0 | (c) 2015 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */ ! function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    "use strict";

    function b() {
        var a = document.createElement("input");
        return a.setAttribute("type", "range"), "text" !== a.type
    }

    function c(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }

    function d(a, b) {
        return b = b || 100,
            function () {
                if (!a.debouncing) {
                    var c = Array.prototype.slice.apply(arguments);
                    a.lastReturnVal = a.apply(window, c), a.debouncing = !0
                }
                return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function () {
                    a.debouncing = !1
                }, b), a.lastReturnVal
            }
    }

    function e(a) {
        return 0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1 ? !0 : !1
    }

    function f(a) {
        for (var b = [], c = a.parentNode; e(c);) b.push(c), c = c.parentNode;
        return b
    }

    function g(a, b) {
        function c(a) {
            "undefined" != typeof a.open && (a.open = a.open ? !1 : !0)
        }
        var d = f(a),
            e = d.length,
            g = [],
            h = a[b];
        if (e) {
            for (var i = 0; e > i; i++) g[i] = d[i].style.cssText, d[i].style.display = "block", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);
            h = a[b];
            for (var j = 0; e > j; j++) d[j].style.cssText = g[j], c(d[j])
        }
        return h
    }

    function h(b, e) {
        if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, l, e), this.polyfill = this.options.polyfill, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.polyfill && k) return !1;
        this.identifier = "js-" + i + "-" + j++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.min = parseFloat(this.$element[0].getAttribute("min") || 0), this.max = parseFloat(this.$element[0].getAttribute("max") || 100), this.value = parseFloat(this.$element[0].value || this.min + (this.max - this.min) / 2), this.step = parseFloat(this.$element[0].getAttribute("step") || 1), this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0"
        }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();
        var f = this;
        this.$window.on("resize." + this.identifier, d(function () {
            c(function () {
                f.update()
            }, 300)
        }, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function (a, b) {
            if (!b || b.origin !== f.identifier) {
                var c = a.target.value,
                    d = f.getPositionFromValue(c);
                f.setPosition(d)
            }
        })
    }
    var i = "rangeslider",
        j = 0,
        k = b(),
        l = {
            polyfill: !0,
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"]
        };
    h.prototype.init = function () {
        this.onInit && "function" == typeof this.onInit && this.onInit(), this.update()
    }, h.prototype.update = function () {
        this.handleWidth = g(this.$handle[0], "offsetWidth"), this.rangeWidth = g(this.$range[0], "offsetWidth"), this.maxHandleX = this.rangeWidth - this.handleWidth, this.grabX = this.handleWidth / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position)
    }, h.prototype.handleDown = function (a) {
        if (a.preventDefault(), this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
            var b = this.getRelativePosition(a),
                c = this.$range[0].getBoundingClientRect().left,
                d = this.getPositionFromNode(this.$handle[0]) - c;
            this.setPosition(b - this.grabX), b >= d && b < d + this.handleWidth && (this.grabX = b - d)
        }
    }, h.prototype.handleMove = function (a) {
        a.preventDefault();
        var b = this.getRelativePosition(a);
        this.setPosition(b - this.grabX)
    }, h.prototype.handleEnd = function (a) {
        a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", {
            origin: this.identifier
        }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
    }, h.prototype.cap = function (a, b, c) {
        return b > a ? b : a > c ? c : a
    }, h.prototype.setPosition = function (a) {
        var b, c;
        b = this.getValueFromPosition(this.cap(a, 0, this.maxHandleX)), c = this.getPositionFromValue(b), this.$fill[0].style.width = c + this.grabX + "px", this.$handle[0].style.left = c + "px", this.setValue(b), this.position = c, this.value = b, this.onSlide && "function" == typeof this.onSlide && this.onSlide(c, b)
    }, h.prototype.getPositionFromNode = function (a) {
        for (var b = 0; null !== a;) b += a.offsetLeft, a = a.offsetParent;
        return b
    }, h.prototype.getRelativePosition = function (a) {
        var b = this.$range[0].getBoundingClientRect().left,
            c = 0;
        return "undefined" != typeof a.pageX ? c = a.pageX : "undefined" != typeof a.originalEvent.clientX ? c = a.originalEvent.clientX : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0].clientX ? c = a.originalEvent.touches[0].clientX : a.currentPoint && "undefined" != typeof a.currentPoint.x && (c = a.currentPoint.x), c - b
    }, h.prototype.getPositionFromValue = function (a) {
        var b, c;
        return b = (a - this.min) / (this.max - this.min), c = b * this.maxHandleX
    }, h.prototype.getValueFromPosition = function (a) {
        var b, c;
        return b = a / (this.maxHandleX || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed))
    }, h.prototype.setValue = function (a) {
        a !== this.value && this.$element.val(a).trigger("input", {
            origin: this.identifier
        })
    }, h.prototype.destroy = function () {
        this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + i), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
    }, a.fn[i] = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this),
                e = d.data("plugin_" + i);
            e || d.data("plugin_" + i, e = new h(this, b)), "string" == typeof b && e[b].apply(e, c)
        })
    }
});
