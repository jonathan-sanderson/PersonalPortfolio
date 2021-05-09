parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        X4Si: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function t(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                function i(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var n = (function () {
                        function t(i, n) {
                            var s = this;
                            e(this, t),
                                (this.container = i),
                                (this.items = n),
                                (this.revealHeight = 64),
                                (this.selectedIndex = -1),
                                (this.containerHeight = 0),
                                this.prepare(),
                                this.configure(),
                                requestAnimationFrame(function (e) {
                                    i.classList.add("card-presentation");
                                }),
                                document.body.addEventListener("keypress", function (e) {
                                    27 == (e = e || window.event).keyCode && s.setSelectedItemIndex(-1);
                                });
                        }
                        return (
                            i(t, [
                                {
                                    key: "itemSelected",
                                    value: function (e, t) {
                                        t && t.stopPropagation(), e == this.selectedIndex && (e = -1), this.setSelectedItemIndex(e);
                                    },
                                },
                                {
                                    key: "setSelectedItemIndex",
                                    value: function (e) {
                                        if (this.selectedIndex != e) {
                                            (this.selectedIndex = e), this.configure();
                                            var t = this.selectedOutside;
                                            t && document.removeEventListener("click", t), -1 != e && ((t = this.setSelectedItemIndex.bind(this, -1)), document.addEventListener("click", t), (this.selectedOutside = t));
                                        }
                                    },
                                },
                                {
                                    key: "prepare",
                                    value: function () {
                                        var e = 0,
                                            t = this.items.length * this.revealHeight,
                                            i = !0,
                                            n = !1,
                                            s = void 0;
                                        try {
                                            for (var r, a = this.items[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
                                                var o = r.value,
                                                    c = this.itemSelected.bind(this, e);
                                                o.addEventListener("click", c);
                                                var l = o.style;
                                                (l.position = "absolute"), (l.transformOrigin = "top center"), (l.zIndex = 10 + e), (l.top = "0px"), (e += 1), (t = Math.max(t, o.clientHeight));
                                            }
                                        } catch (d) {
                                            (n = !0), (s = d);
                                        } finally {
                                            try {
                                                i || null == a.return || a.return();
                                            } finally {
                                                if (n) throw s;
                                            }
                                        }
                                        (this.container.style.minHeight = "".concat(t, "px")), (this.containerHeight = t);
                                    },
                                },
                                {
                                    key: "configure",
                                    value: function () {
                                        var e = this.selectedIndex,
                                            t = 0,
                                            i = this.containerHeight,
                                            n = !0,
                                            s = !1,
                                            r = void 0;
                                        try {
                                            for (var a, o = this.items[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                                var c = a.value,
                                                    l = -10,
                                                    d = 0.85,
                                                    h = 10 * -(this.items.length - t),
                                                    u = t * this.revealHeight;
                                                if (-1 != e && ((d = 1), (u = 0), (l = 0), t != e)) {
                                                    d = 0.85;
                                                    t < e ? (u = 16) : ((d = 1), (u = t * this.revealHeight + i));
                                                }
                                                (c.style.transform = "rotateX(".concat(l, "deg) scale(").concat(d, ") translate3d(0, ").concat(u, "px, ").concat(h, "px)")), c.classList.toggle("is-selected", t == e), (t += 1);
                                            }
                                        } catch (f) {
                                            (s = !0), (r = f);
                                        } finally {
                                            try {
                                                n || null == o.return || o.return();
                                            } finally {
                                                if (s) throw r;
                                            }
                                        }
                                        this.container.classList.toggle("has-selection", -1 != e);
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    s = n;
                exports.default = s;
            },
            {},
        ],
        OAO3: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                class t {
                    constructor(t, e, i) {
                        if (!t) throw "Butter.AnimatedProperty: Cannot animate a property without a key.";
                        const a = this.parseValue(e),
                            r = this.parseValue(i);
                        if ((r.unit || (r.unit = a.unit), (a.unit || r.unit) && a.unit !== r.unit)) throw `Butter.AnimatedProperty: Unit for values mismatch. Animating from "${a.unit}" to "${r.unit}" is not supported.`;
                        (this.fromValue = a.floatValue), (this.toValue = r.floatValue), (this.unit = a.unit), (this.key = t);
                    }
                    parseValue(t) {
                        let e = 0,
                            i = void 0;
                        return "string" == typeof t || t instanceof String ? ((e = parseFloat(t)), (i = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "")) : isNaN(t) || (e = t), { unit: i, floatValue: e };
                    }
                    get reversed() {
                        return new t(this.key, this.toValue, this.fromValue);
                    }
                }
                var e = t;
                exports.default = e;
            },
            {},
        ],
        Cf7S: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.linear = void 0);
                const e = (e) => e;
                exports.linear = e;
                const t = (e) => e * e;
                exports.easeInQuad = t;
                const s = (e) => e * (2 - e);
                exports.easeOutQuad = s;
                const o = (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1);
                exports.easeInOutQuad = o;
                const u = (e) => e * e * e;
                exports.easeInCubic = u;
                const a = (e) => --e * e * e + 1;
                exports.easeOutCubic = a;
                const n = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1);
                exports.easeInOutCubic = n;
                const r = (e) => e * e * e * e;
                exports.easeInQuart = r;
                const p = (e) => 1 - --e * e * e * e;
                exports.easeOutQuart = p;
                const x = (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e);
                exports.easeInOutQuart = x;
                const c = (e) => e * e * e * e * e;
                exports.easeInQuint = c;
                const Q = (e) => 1 + --e * e * e * e * e;
                exports.easeOutQuint = Q;
                const i = (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e);
                exports.easeInOutQuint = i;
            },
            {},
        ],
        kLVJ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var t = r(require("./AnimatedProperty.js")),
                    e = n(require("./TimingFunctions.js"));
                function i() {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap();
                    return (
                        (i = function () {
                            return t;
                        }),
                        t
                    );
                }
                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = i();
                    if (e && e.has(t)) return e.get(t);
                    var n = {};
                    if (null != t) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in t)
                            if (Object.prototype.hasOwnProperty.call(t, s)) {
                                var o = r ? Object.getOwnPropertyDescriptor(t, s) : null;
                                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = t[s]);
                            }
                    }
                    return (n.default = t), e && e.set(t, n), n;
                }
                function r(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                class s {
                    constructor(t, i = {}) {
                        if (!t) throw "Butter.KeyedAnimator: Cannot instantiate an animator without a target.";
                        const { timing: n = e.easeOutCubic, autoreverses: r = !0, repeatCount: s = 0, interruptAnimationEvents: o = [] } = i;
                        (this.target = t), (this.timing = n), (this.autoreverses = r), (this.repeatCount = s), (this.interruptAnimationEvents = ["mousewheel", "touchstart"] + o);
                    }
                    animate(e, i, n) {
                        this.animating && this.stopAnimation();
                        const r = [];
                        for (const s in e) {
                            const i = new t.default(s, this.target[s], e[s]);
                            i && r.push(i);
                        }
                        (this.duration = Math.max(i, 0.1)), (this.beginTime = 0), (this.properties = r), (this.completion = n), (this.completed = !1), this.startAnimation();
                    }
                    update() {
                        if (0 == this.beginTime) this.beginTime = new Date().getTime();
                        else {
                            let t = (new Date().getTime() - this.beginTime) / this.duration;
                            this.target;
                            this.updateTarget(t);
                        }
                    }
                    updateTarget(t) {
                        const e = this.target;
                        function i(t, e) {
                            return e && (t = String(t) + e), t;
                        }
                        function n(t, e, i) {
                            let n = e.split("."),
                                r = n.length;
                            if (r > 1) {
                                let e = r - 1;
                                for (let i = 0; i < e; i += 1) t = t[n[i]];
                            }
                            return (t[r > 0 ? n[r - 1] : e] = i), t;
                        }
                        if (t < 1)
                            if (1 - t < 0.001) {
                                for (const t of this.properties) n(e, t.key, i(t.toValue, t.unit));
                                this.complete();
                            } else {
                                const r = this.timing(t);
                                for (const t of this.properties) {
                                    const s = t.fromValue + (t.toValue - t.fromValue) * r;
                                    n(e, t.key, i(s, t.unit));
                                }
                            }
                        else {
                            for (const t of this.properties) n(e, t.key, i(t.toValue, t.unit));
                            this.complete();
                        }
                    }
                    complete() {
                        let t = this.iterationCount + 1,
                            e = t > this.repeatCount;
                        if (!e)
                            if (((this.beginTime = 0), this.autoreverses)) {
                                const t = [];
                                for (const e of properties) t.push(e.reversed);
                                this.properties = t;
                            } else this.updateTarget(0);
                        (this.iterationCount = t), e && ((this.completed = !0), this.stopAnimation());
                    }
                    stopAnimation() {
                        if (!this.animating) return;
                        this.animating = !1;
                        let t = this.targetScrollEventHandler;
                        t && this.target.removeEventListener(t);
                        let e = this.frameRequest;
                        e && cancelAnimationFrame(e);
                        let i = this.completion;
                        i && i(this.completed), (this.completion = void 0);
                    }
                    startAnimation() {
                        if (this.animating) return;
                        (this.animating = !0), (this.iterationCount = 0);
                        const t = this.stopAnimation.bind(this);
                        if (this.target.addEventListener) for (const r of this.interruptAnimationEvents) this.target.addEventListener(r, t);
                        const e = this.update.bind(this),
                            i = () => {
                                e(), n(), this.didAnimate && this.didAnimate();
                            },
                            n = () => {
                                this.animating && (this.frameRequest = requestAnimationFrame(i, this));
                            };
                        n();
                    }
                }
                var o = s;
                exports.default = o;
            },
            { "./AnimatedProperty.js": "OAO3", "./TimingFunctions.js": "Cf7S" },
        ],
        xFyw: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                const { sqrt: t, exp: e, cos: s, sin: n, cosh: o, sinh: i } = Math;
                function r(r = {}) {
                    const { damping: c = 10, mass: a = 1, stiffness: u = 100, initialVelocity: l = 0 } = r,
                        d = c,
                        f = a,
                        p = u,
                        x = l;
                    return (r) => {
                        const c = d / (2 * f),
                            a = t(p / f),
                            u = t(a * a - c * c),
                            l = t(c * c - a * a),
                            h = e(-c * r);
                        let v;
                        return (v = c < a ? 1 + h * (-1 * s(u * r) + ((-1 * c + x) / u) * n(u * r)) : c == a ? 1 + h * ((-1 * c + x) * r - 1) : 1 + h * (-1 * o(l * r) + ((-1 * c + x) / l) * i(l * r)));
                    };
                }
                var c = r;
                exports.default = c;
            },
            {},
        ],
        lAJF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./lib/KeyedAnimator.js")),
                    r = u(require("./lib/SpringTimingFunctionProvider.js")),
                    t = i(require("./lib/TimingFunctions.js"));
                function n() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (n = function () {
                            return e;
                        }),
                        e
                    );
                }
                function i(e) {
                    if (e && e.__esModule) return e;
                    var r = n();
                    if (r && r.has(e)) return r.get(e);
                    var t = {};
                    if (null != e) {
                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var u in e)
                            if (Object.prototype.hasOwnProperty.call(e, u)) {
                                var o = i ? Object.getOwnPropertyDescriptor(e, u) : null;
                                o && (o.get || o.set) ? Object.defineProperty(t, u, o) : (t[u] = e[u]);
                            }
                    }
                    return (t.default = e), r && r.set(e, t), t;
                }
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = { animator: e.default, timingFunctions: t, spring: r.default };
                exports.default = o;
            },
            { "./lib/KeyedAnimator.js": "kLVJ", "./lib/SpringTimingFunctionProvider.js": "xFyw", "./lib/TimingFunctions.js": "Cf7S" },
        ],
        vNKp: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("mantequilla"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                function a(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e;
                }
                var i = (function () {
                        function t(e) {
                            n(this, t), (this.items = e);
                            var r = !0,
                                a = !1,
                                i = void 0;
                            try {
                                for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done); r = !0) {
                                    var u = o.value,
                                        f = this.navigate.bind(this, u);
                                    u.addEventListener("click", f);
                                }
                            } catch (c) {
                                (a = !0), (i = c);
                            } finally {
                                try {
                                    r || null == l.return || l.return();
                                } finally {
                                    if (a) throw i;
                                }
                            }
                        }
                        return (
                            a(t, [
                                {
                                    key: "navigate",
                                    value: function (t, n) {
                                        var r = t.getAttribute("href").split("#")[1],
                                            a = r ? document.getElementById(r) : document.body;
                                        if (a) {
                                            n.preventDefault();
                                            for (var i = 0, o = ["body", "html"]; i < o.length; i++) {
                                                var l = o[i],
                                                    u = document.getElementsByTagName(l)[0];
                                                new e.default.animator(u, { timing: e.default.spring({ damping: 16 }) }).animate({ scrollTop: a.offsetTop }, 900);
                                            }
                                        }
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    o = i;
                exports.default = o;
            },
            { mantequilla: "lAJF" },
        ],
        Focm: [
            function (require, module, exports) {
                "use strict";
                var e = n(require("./js/CardPresentationController")),
                    r = n(require("./js/NavigationAnchorController"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function o() {
                    var n = document.querySelector(".work .selection"),
                        o = n.querySelectorAll("li");
                    window.cardPresentationController = new e.default(n, o);
                    var t = document.querySelectorAll("main > header a");
                    window.anchorController = new r.default(t);
                }
                document.addEventListener("DOMContentLoaded", o);
            },
            { "./js/CardPresentationController": "X4Si", "./js/NavigationAnchorController": "vNKp" },
        ],
    },
    {},
    ["Focm"],
    null
);