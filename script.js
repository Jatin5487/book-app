function t(t) {
    return t && t.__esModule ? t.default : t
 }
 var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    n = {},
    r = {},
    o = e.parcelRequired7c6;
 null == o && ((o = function (t) {
    if (t in n) return n[t].exports;
    if (t in r) {
       var e = r[t];
       delete r[t];
       var o = {
          id: t,
          exports: {}
       };
       return n[t] = o, e.call(o.exports, o, o.exports), o.exports
    }
    var i = new Error("Cannot find module '" + t + "'");
    throw i.code = "MODULE_NOT_FOUND", i
 }).register = function (t, e) {
    r[t] = e
 }, e.parcelRequired7c6 = o), o("kyEFX").register(JSON.parse('{"5ZPII":"index.9892b547.js","iuauJ":"shoping-list-empty-lg.71d6e0b7.png","5VUT6":"amazon-shop-1x.d33dc585.png","l42Hr":"amazon-shop-2x.01f59d3f.png","gAkt5":"apple-shop-1x.aeb5cfd2.png","a3poI":"apple-shop-2x.df06fe16.png","gCapl":"bookshop-1x.d3877644.png","3vlOU":"bookshop-2x.bc4a3396.png","a8cj2":"shopping-list.269b9c2a.js"}')), o("krGWQ"), o("hrwpc");
 var i = o("hrwpc");
 const s = document.querySelectorAll(".navigation__link");
 
 function a(t, e) {
    return function () {
       return t.apply(e, arguments)
    }
 }(0, i.setActiveState)(s);
 const {
    toString: u
 } = Object.prototype, {
    getPrototypeOf: c
 } = Object, f = (l = Object.create(null), t => {
    const e = u.call(t);
    return l[e] || (l[e] = e.slice(8, -1).toLowerCase())
 });
 var l;
 const h = t => (t = t.toLowerCase(), e => f(e) === t),
    p = t => e => typeof e === t,
    {
       isArray: d
    } = Array,
    g = p("undefined");
 const y = h("ArrayBuffer");
 const m = p("string"),
    b = p("function"),
    w = p("number"),
    E = t => null !== t && "object" == typeof t,
    v = t => {
       if ("object" !== f(t)) return !1;
       const e = c(t);
       return !(null !== e && e !== Object.prototype && null !== Object.getPrototypeOf(e) || Symbol.toStringTag in t || Symbol.iterator in t)
    },
    _ = h("Date"),
    A = h("File"),
    S = h("Blob"),
    O = h("FileList"),
    R = h("URLSearchParams");
 
 function B(t, e, {
    allOwnKeys: n = !1
 } = {}) {
    if (null == t) return;
    let r, o;
    if ("object" != typeof t && (t = [t]), d(t))
       for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
    else {
       const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
          i = o.length;
       let s;
       for (r = 0; r < i; r++) s = o[r], e.call(null, t[s], s, t)
    }
 }
 
 function T(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let r, o = n.length;
    for (; o-- > 0;)
       if (r = n[o], e === r.toLowerCase()) return r;
    return null
 }
 const k = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : e,
    U = t => !g(t) && t !== k;
 const L = (x = "undefined" != typeof Uint8Array && c(Uint8Array), t => x && t instanceof x);
 var x;
 const C = h("HTMLFormElement"),
    I = (({
       hasOwnProperty: t
    }) => (e, n) => t.call(e, n))(Object.prototype),
    N = h("RegExp"),
    j = (t, e) => {
       const n = Object.getOwnPropertyDescriptors(t),
          r = {};
       B(n, ((n, o) => {
          !1 !== e(n, o, t) && (r[o] = n)
       })), Object.defineProperties(t, r)
    },
    P = {
       DIGIT: "0123456789",
       ALPHA: "abcdefghijklmnopqrstuvwxyz",
       ALPHA_DIGIT: "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toUpperCase() + "0123456789"
    };
 var F = {
    isArray: d,
    isArrayBuffer: y,
    isBuffer: function (t) {
       return null !== t && !g(t) && null !== t.constructor && !g(t.constructor) && b(t.constructor.isBuffer) && t.constructor.isBuffer(t)
    },
    isFormData: t => {
       const e = "[object FormData]";
       return t && ("function" == typeof FormData && t instanceof FormData || u.call(t) === e || b(t.toString) && t.toString() === e)
    },
    isArrayBufferView: function (t) {
       let e;
       return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && y(t.buffer), e
    },
    isString: m,
    isNumber: w,
    isBoolean: t => !0 === t || !1 === t,
    isObject: E,
    isPlainObject: v,
    isUndefined: g,
    isDate: _,
    isFile: A,
    isBlob: S,
    isRegExp: N,
    isFunction: b,
    isStream: t => E(t) && b(t.pipe),
    isURLSearchParams: R,
    isTypedArray: L,
    isFileList: O,
    forEach: B,
    merge: function t() {
       const {
          caseless: e
       } = U(this) && this || {}, n = {}, r = (r, o) => {
          const i = e && T(n, o) || o;
          v(n[i]) && v(r) ? n[i] = t(n[i], r) : v(r) ? n[i] = t({}, r) : d(r) ? n[i] = r.slice() : n[i] = r
       };
       for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && B(arguments[t], r);
       return n
    },
    extend: (t, e, n, {
       allOwnKeys: r
    } = {}) => (B(e, ((e, r) => {
       n && b(e) ? t[r] = a(e, n) : t[r] = e
    }), {
       allOwnKeys: r
    }), t),
    trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
    inherits: (t, e, n, r) => {
       t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
          value: e.prototype
       }), n && Object.assign(t.prototype, n)
    },
    toFlatObject: (t, e, n, r) => {
       let o, i, s;
       const a = {};
       if (e = e || {}, null == t) return e;
       do {
          for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0;) s = o[i], r && !r(s, t, e) || a[s] || (e[s] = t[s], a[s] = !0);
          t = !1 !== n && c(t)
       } while (t && (!n || n(t, e)) && t !== Object.prototype);
       return e
    },
    kindOf: f,
    kindOfTest: h,
    endsWith: (t, e, n) => {
       t = String(t), (void 0 === n || n > t.length) && (n = t.length), n -= e.length;
       const r = t.indexOf(e, n);
       return -1 !== r && r === n
    },
    toArray: t => {
       if (!t) return null;
       if (d(t)) return t;
       let e = t.length;
       if (!w(e)) return null;
       const n = new Array(e);
       for (; e-- > 0;) n[e] = t[e];
       return n
    },
    forEachEntry: (t, e) => {
       const n = (t && t[Symbol.iterator]).call(t);
       let r;
       for (;
          (r = n.next()) && !r.done;) {
          const n = r.value;
          e.call(t, n[0], n[1])
       }
    },
    matchAll: (t, e) => {
       let n;
       const r = [];
       for (; null !== (n = t.exec(e));) r.push(n);
       return r
    },
    isHTMLForm: C,
    hasOwnProperty: I,
    hasOwnProp: I,
    reduceDescriptors: j,
    freezeMethods: t => {
       j(t, ((e, n) => {
          if (b(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
          const r = t[n];
          b(r) && (e.enumerable = !1, "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
             throw Error("Can not rewrite read-only method '" + n + "'")
          }))
       }))
    },
    toObjectSet: (t, e) => {
       const n = {},
          r = t => {
             t.forEach((t => {
                n[t] = !0
             }))
          };
       return d(t) ? r(t) : r(String(t).split(e)), n
    },
    toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function (t, e, n) {
       return e.toUpperCase() + n
    })),
    noop: () => {},
    toFiniteNumber: (t, e) => (t = +t, Number.isFinite(t) ? t : e),
    findKey: T,
    global: k,
    isContextDefined: U,
    ALPHABET: P,
    generateString: (t = 16, e = P.ALPHA_DIGIT) => {
       let n = "";
       const {
          length: r
       } = e;
       for (; t--;) n += e[Math.random() * r | 0];
       return n
    },
    isSpecCompliantForm: function (t) {
       return !!(t && b(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator])
    },
    toJSONObject: t => {
       const e = new Array(10),
          n = (t, r) => {
             if (E(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                   e[r] = t;
                   const o = d(t) ? [] : {};
                   return B(t, ((t, e) => {
                      const i = n(t, r + 1);
                      !g(i) && (o[e] = i)
                   })), e[r] = void 0, o
                }
             }
             return t
          };
       return n(t, 0)
    }
 };
 
 function $(t, e, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o)
 }
 F.inherits($, Error, {
    toJSON: function () {
       return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: F.toJSONObject(this.config),
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
       }
    }
 });
 const D = $.prototype,
    M = {};
 ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((t => {
    M[t] = {
       value: t
    }
 })), Object.defineProperties($, M), Object.defineProperty(D, "isAxiosError", {
    value: !0
 }), $.from = (t, e, n, r, o, i) => {
    const s = Object.create(D);
    return F.toFlatObject(t, s, (function (t) {
       return t !== Error.prototype
    }), (t => "isAxiosError" !== t)), $.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s
 };
 var H, q, z, W = $;
 q = function (t) {
    var e, n, r = tt(t),
       o = r[0],
       i = r[1],
       s = new K(function (t, e, n) {
          return 3 * (e + n) / 4 - n
       }(0, o, i)),
       a = 0,
       u = i > 0 ? o - 4 : o;
    for (n = 0; n < u; n += 4) e = Y[t.charCodeAt(n)] << 18 | Y[t.charCodeAt(n + 1)] << 12 | Y[t.charCodeAt(n + 2)] << 6 | Y[t.charCodeAt(n + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
    2 === i && (e = Y[t.charCodeAt(n)] << 2 | Y[t.charCodeAt(n + 1)] >> 4, s[a++] = 255 & e);
    1 === i && (e = Y[t.charCodeAt(n)] << 10 | Y[t.charCodeAt(n + 1)] << 4 | Y[t.charCodeAt(n + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
    return s
 }, z = function (t) {
    for (var e, n = t.length, r = n % 3, o = [], i = 16383, s = 0, a = n - r; s < a; s += i) o.push(et(t, s, s + i > a ? a : s + i));
    1 === r ? (e = t[n - 1], o.push(G[e >> 2] + G[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o.push(G[e >> 10] + G[e >> 4 & 63] + G[e << 2 & 63] + "="));
    return o.join("")
 }
 /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
 ;
 for (var J, V, G = [], Y = [], K = "undefined" != typeof Uint8Array ? Uint8Array : Array, X = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Q = 0, Z = X.length; Q < Z; ++Q) G[Q] = X[Q], Y[X.charCodeAt(Q)] = Q;
 
 function tt(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("=");
    return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
 }
 
 function et(t, e, n) {
    for (var r, o, i = [], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), i.push(G[(o = r) >> 18 & 63] + G[o >> 12 & 63] + G[o >> 6 & 63] + G[63 & o]);
    return i.join("")
 }
 Y["-".charCodeAt(0)] = 62, Y["_".charCodeAt(0)] = 63, J = function (t, e, n, r, o) {
    var i, s, a = 8 * o - r - 1,
       u = (1 << a) - 1,
       c = u >> 1,
       f = -7,
       l = n ? o - 1 : 0,
       h = n ? -1 : 1,
       p = t[e + l];
    for (l += h, i = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; i = 256 * i + t[e + l], l += h, f -= 8);
    for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + t[e + l], l += h, f -= 8);
    if (0 === i) i = 1 - c;
    else {
       if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
       s += Math.pow(2, r), i -= c
    }
    return (p ? -1 : 1) * s * Math.pow(2, i - r)
 }, V = function (t, e, n, r, o, i) {
    var s, a, u, c = 8 * i - o - 1,
       f = (1 << c) - 1,
       l = f >> 1,
       h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
       p = r ? 0 : i - 1,
       d = r ? 1 : -1,
       g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
    for (s = s << o | a, c += o; c > 0; t[n + p] = 255 & s, p += d, s /= 256, c -= 8);
    t[n + p - d] |= 128 * g
 };
 const nt = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
 H = ot;
 
 function rt(t) {
    if (t > 2147483647) throw new RangeError('The value "' + t + '" is invalid for option "size"');
    const e = new Uint8Array(t);
    return Object.setPrototypeOf(e, ot.prototype), e
 }
 
 function ot(t, e, n) {
    if ("number" == typeof t) {
       if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
       return at(t)
    }
    return it(t, e, n)
 }
 
 function it(t, e, n) {
    if ("string" == typeof t) return function (t, e) {
       "string" == typeof e && "" !== e || (e = "utf8");
       if (!ot.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
       const n = 0 | lt(t, e);
       let r = rt(n);
       const o = r.write(t, e);
       o !== n && (r = r.slice(0, o));
       return r
    }(t, e);
    if (ArrayBuffer.isView(t)) return function (t) {
       if (zt(t, Uint8Array)) {
          const e = new Uint8Array(t);
          return ct(e.buffer, e.byteOffset, e.byteLength)
       }
       return ut(t)
    }(t);
    if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    if (zt(t, ArrayBuffer) || t && zt(t.buffer, ArrayBuffer)) return ct(t, e, n);
    if ("undefined" != typeof SharedArrayBuffer && (zt(t, SharedArrayBuffer) || t && zt(t.buffer, SharedArrayBuffer))) return ct(t, e, n);
    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
    const r = t.valueOf && t.valueOf();
    if (null != r && r !== t) return ot.from(r, e, n);
    const o = function (t) {
       if (ot.isBuffer(t)) {
          const e = 0 | ft(t.length),
             n = rt(e);
          return 0 === n.length || t.copy(n, 0, 0, e), n
       }
       if (void 0 !== t.length) return "number" != typeof t.length || Wt(t.length) ? rt(0) : ut(t);
       if ("Buffer" === t.type && Array.isArray(t.data)) return ut(t.data)
    }(t);
    if (o) return o;
    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return ot.from(t[Symbol.toPrimitive]("string"), e, n);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
 }
 
 function st(t) {
    if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
 }
 
 function at(t) {
    return st(t), rt(t < 0 ? 0 : 0 | ft(t))
 }
 
 function ut(t) {
    const e = t.length < 0 ? 0 : 0 | ft(t.length),
       n = rt(e);
    for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
    return n
 }
 
 function ct(t, e, n) {
    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let r;
    return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, ot.prototype), r
 }
 
 function ft(t) {
    if (t >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
    return 0 | t
 }
 
 function lt(t, e) {
    if (ot.isBuffer(t)) return t.length;
    if (ArrayBuffer.isView(t) || zt(t, ArrayBuffer)) return t.byteLength;
    if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
    const n = t.length,
       r = arguments.length > 2 && !0 === arguments[2];
    if (!r && 0 === n) return 0;
    let o = !1;
    for (;;) switch (e) {
       case "ascii":
       case "latin1":
       case "binary":
          return n;
       case "utf8":
       case "utf-8":
          return Mt(t).length;
       case "ucs2":
       case "ucs-2":
       case "utf16le":
       case "utf-16le":
          return 2 * n;
       case "hex":
          return n >>> 1;
       case "base64":
          return Ht(t).length;
       default:
          if (o) return r ? -1 : Mt(t).length;
          e = ("" + e).toLowerCase(), o = !0
    }
 }
 
 function ht(t, e, n) {
    let r = !1;
    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
    if ((n >>>= 0) <= (e >>>= 0)) return "";
    for (t || (t = "utf8");;) switch (t) {
       case "hex":
          return Ot(this, e, n);
       case "utf8":
       case "utf-8":
          return _t(this, e, n);
       case "ascii":
          return At(this, e, n);
       case "latin1":
       case "binary":
          return St(this, e, n);
       case "base64":
          return vt(this, e, n);
       case "ucs2":
       case "ucs-2":
       case "utf16le":
       case "utf-16le":
          return Rt(this, e, n);
       default:
          if (r) throw new TypeError("Unknown encoding: " + t);
          t = (t + "").toLowerCase(), r = !0
    }
 }
 
 function pt(t, e, n) {
    const r = t[e];
    t[e] = t[n], t[n] = r
 }
 
 function dt(t, e, n, r, o) {
    if (0 === t.length) return -1;
    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Wt(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
       if (o) return -1;
       n = t.length - 1
    } else if (n < 0) {
       if (!o) return -1;
       n = 0
    }
    if ("string" == typeof e && (e = ot.from(e, r)), ot.isBuffer(e)) return 0 === e.length ? -1 : gt(t, e, n, r, o);
    if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : gt(t, [e], n, r, o);
    throw new TypeError("val must be string, number or Buffer")
 }
 
 function gt(t, e, n, r, o) {
    let i, s = 1,
       a = t.length,
       u = e.length;
    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
       if (t.length < 2 || e.length < 2) return -1;
       s = 2, a /= 2, u /= 2, n /= 2
    }
 
    function c(t, e) {
       return 1 === s ? t[e] : t.readUInt16BE(e * s)
    }
    if (o) {
       let r = -1;
       for (i = n; i < a; i++)
          if (c(t, i) === c(e, -1 === r ? 0 : i - r)) {
             if (-1 === r && (r = i), i - r + 1 === u) return r * s
          } else -1 !== r && (i -= i - r), r = -1
    } else
       for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
          let n = !0;
          for (let r = 0; r < u; r++)
             if (c(t, i + r) !== c(e, r)) {
                n = !1;
                break
             } if (n) return i
       }
    return -1
 }
 
 function yt(t, e, n, r) {
    n = Number(n) || 0;
    const o = t.length - n;
    r ? (r = Number(r)) > o && (r = o) : r = o;
    const i = e.length;
    let s;
    for (r > i / 2 && (r = i / 2), s = 0; s < r; ++s) {
       const r = parseInt(e.substr(2 * s, 2), 16);
       if (Wt(r)) return s;
       t[n + s] = r
    }
    return s
 }
 
 function mt(t, e, n, r) {
    return qt(Mt(e, t.length - n), t, n, r)
 }
 
 function bt(t, e, n, r) {
    return qt(function (t) {
       const e = [];
       for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
       return e
    }(e), t, n, r)
 }
 
 function wt(t, e, n, r) {
    return qt(Ht(e), t, n, r)
 }
 
 function Et(t, e, n, r) {
    return qt(function (t, e) {
       let n, r, o;
       const i = [];
       for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r);
       return i
    }(e, t.length - n), t, n, r)
 }
 
 function vt(t, e, n) {
    return 0 === e && n === t.length ? z(t) : z(t.slice(e, n))
 }
 
 function _t(t, e, n) {
    n = Math.min(t.length, n);
    const r = [];
    let o = e;
    for (; o < n;) {
       const e = t[o];
       let i = null,
          s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
       if (o + s <= n) {
          let n, r, a, u;
          switch (s) {
             case 1:
                e < 128 && (i = e);
                break;
             case 2:
                n = t[o + 1], 128 == (192 & n) && (u = (31 & e) << 6 | 63 & n, u > 127 && (i = u));
                break;
             case 3:
                n = t[o + 1], r = t[o + 2], 128 == (192 & n) && 128 == (192 & r) && (u = (15 & e) << 12 | (63 & n) << 6 | 63 & r, u > 2047 && (u < 55296 || u > 57343) && (i = u));
                break;
             case 4:
                n = t[o + 1], r = t[o + 2], a = t[o + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a, u > 65535 && u < 1114112 && (i = u))
          }
       }
       null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, r.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(i), o += s
    }
    return function (t) {
       const e = t.length;
       if (e <= 4096) return String.fromCharCode.apply(String, t);
       let n = "",
          r = 0;
       for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
       return n
    }(r)
 }
 ot.TYPED_ARRAY_SUPPORT = function () {
    try {
       const t = new Uint8Array(1),
          e = {
             foo: function () {
                return 42
             }
          };
       return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
    } catch (t) {
       return !1
    }
 }(), ot.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(ot.prototype, "parent", {
    enumerable: !0,
    get: function () {
       if (ot.isBuffer(this)) return this.buffer
    }
 }), Object.defineProperty(ot.prototype, "offset", {
    enumerable: !0,
    get: function () {
       if (ot.isBuffer(this)) return this.byteOffset
    }
 }), ot.poolSize = 8192, ot.from = function (t, e, n) {
    return it(t, e, n)
 }, Object.setPrototypeOf(ot.prototype, Uint8Array.prototype), Object.setPrototypeOf(ot, Uint8Array), ot.alloc = function (t, e, n) {
    return function (t, e, n) {
       return st(t), t <= 0 ? rt(t) : void 0 !== e ? "string" == typeof n ? rt(t).fill(e, n) : rt(t).fill(e) : rt(t)
    }(t, e, n)
 }, ot.allocUnsafe = function (t) {
    return at(t)
 }, ot.allocUnsafeSlow = function (t) {
    return at(t)
 }, ot.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== ot.prototype
 }, ot.compare = function (t, e) {
    if (zt(t, Uint8Array) && (t = ot.from(t, t.offset, t.byteLength)), zt(e, Uint8Array) && (e = ot.from(e, e.offset, e.byteLength)), !ot.isBuffer(t) || !ot.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (t === e) return 0;
    let n = t.length,
       r = e.length;
    for (let o = 0, i = Math.min(n, r); o < i; ++o)
       if (t[o] !== e[o]) {
          n = t[o], r = e[o];
          break
       } return n < r ? -1 : r < n ? 1 : 0
 }, ot.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
       case "hex":
       case "utf8":
       case "utf-8":
       case "ascii":
       case "latin1":
       case "binary":
       case "base64":
       case "ucs2":
       case "ucs-2":
       case "utf16le":
       case "utf-16le":
          return !0;
       default:
          return !1
    }
 }, ot.concat = function (t, e) {
    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return ot.alloc(0);
    let n;
    if (void 0 === e)
       for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
    const r = ot.allocUnsafe(e);
    let o = 0;
    for (n = 0; n < t.length; ++n) {
       let e = t[n];
       if (zt(e, Uint8Array)) o + e.length > r.length ? (ot.isBuffer(e) || (e = ot.from(e)), e.copy(r, o)) : Uint8Array.prototype.set.call(r, e, o);
       else {
          if (!ot.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          e.copy(r, o)
       }
       o += e.length
    }
    return r
 }, ot.byteLength = lt, ot.prototype._isBuffer = !0, ot.prototype.swap16 = function () {
    const t = this.length;
    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) pt(this, e, e + 1);
    return this
 }, ot.prototype.swap32 = function () {
    const t = this.length;
    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) pt(this, e, e + 3), pt(this, e + 1, e + 2);
    return this
 }, ot.prototype.swap64 = function () {
    const t = this.length;
    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8) pt(this, e, e + 7), pt(this, e + 1, e + 6), pt(this, e + 2, e + 5), pt(this, e + 3, e + 4);
    return this
 }, ot.prototype.toString = function () {
    const t = this.length;
    return 0 === t ? "" : 0 === arguments.length ? _t(this, 0, t) : ht.apply(this, arguments)
 }, ot.prototype.toLocaleString = ot.prototype.toString, ot.prototype.equals = function (t) {
    if (!ot.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === ot.compare(this, t)
 }, ot.prototype.inspect = function () {
    let t = "";
    return t = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (t += " ... "), "<Buffer " + t + ">"
 }, nt && (ot.prototype[nt] = ot.prototype.inspect), ot.prototype.compare = function (t, e, n, r, o) {
    if (zt(t, Uint8Array) && (t = ot.from(t, t.offset, t.byteLength)), !ot.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
    if (r >= o && e >= n) return 0;
    if (r >= o) return -1;
    if (e >= n) return 1;
    if (this === t) return 0;
    let i = (o >>>= 0) - (r >>>= 0),
       s = (n >>>= 0) - (e >>>= 0);
    const a = Math.min(i, s),
       u = this.slice(r, o),
       c = t.slice(e, n);
    for (let t = 0; t < a; ++t)
       if (u[t] !== c[t]) {
          i = u[t], s = c[t];
          break
       } return i < s ? -1 : s < i ? 1 : 0
 }, ot.prototype.includes = function (t, e, n) {
    return -1 !== this.indexOf(t, e, n)
 }, ot.prototype.indexOf = function (t, e, n) {
    return dt(this, t, e, n, !0)
 }, ot.prototype.lastIndexOf = function (t, e, n) {
    return dt(this, t, e, n, !1)
 }, ot.prototype.write = function (t, e, n, r) {
    if (void 0 === e) r = "utf8", n = this.length, e = 0;
    else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
    else {
       if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
       e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
    }
    const o = this.length - e;
    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    let i = !1;
    for (;;) switch (r) {
       case "hex":
          return yt(this, t, e, n);
       case "utf8":
       case "utf-8":
          return mt(this, t, e, n);
       case "ascii":
       case "latin1":
       case "binary":
          return bt(this, t, e, n);
       case "base64":
          return wt(this, t, e, n);
       case "ucs2":
       case "ucs-2":
       case "utf16le":
       case "utf-16le":
          return Et(this, t, e, n);
       default:
          if (i) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), i = !0
    }
 }, ot.prototype.toJSON = function () {
    return {
       type: "Buffer",
       data: Array.prototype.slice.call(this._arr || this, 0)
    }
 };
 
 function At(t, e, n) {
    let r = "";
    n = Math.min(t.length, n);
    for (let o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
    return r
 }
 
 function St(t, e, n) {
    let r = "";
    n = Math.min(t.length, n);
    for (let o = e; o < n; ++o) r += String.fromCharCode(t[o]);
    return r
 }
 
 function Ot(t, e, n) {
    const r = t.length;
    (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
    let o = "";
    for (let r = e; r < n; ++r) o += Jt[t[r]];
    return o
 }
 
 function Rt(t, e, n) {
    const r = t.slice(e, n);
    let o = "";
    for (let t = 0; t < r.length - 1; t += 2) o += String.fromCharCode(r[t] + 256 * r[t + 1]);
    return o
 }
 
 function Bt(t, e, n) {
    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
    if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
 }
 
 function Tt(t, e, n, r, o, i) {
    if (!ot.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
    if (n + r > t.length) throw new RangeError("Index out of range")
 }
 
 function kt(t, e, n, r, o) {
    Pt(e, r, o, t, n, 7);
    let i = Number(e & BigInt(4294967295));
    t[n++] = i, i >>= 8, t[n++] = i, i >>= 8, t[n++] = i, i >>= 8, t[n++] = i;
    let s = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, n
 }
 
 function Ut(t, e, n, r, o) {
    Pt(e, r, o, t, n, 7);
    let i = Number(e & BigInt(4294967295));
    t[n + 7] = i, i >>= 8, t[n + 6] = i, i >>= 8, t[n + 5] = i, i >>= 8, t[n + 4] = i;
    let s = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[n + 3] = s, s >>= 8, t[n + 2] = s, s >>= 8, t[n + 1] = s, s >>= 8, t[n] = s, n + 8
 }
 
 function Lt(t, e, n, r, o, i) {
    if (n + r > t.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range")
 }
 
 function xt(t, e, n, r, o) {
    return e = +e, n >>>= 0, o || Lt(t, 0, n, 4), V(t, e, n, r, 23, 4), n + 4
 }
 
 function Ct(t, e, n, r, o) {
    return e = +e, n >>>= 0, o || Lt(t, 0, n, 8), V(t, e, n, r, 52, 8), n + 8
 }
 ot.prototype.slice = function (t, e) {
    const n = this.length;
    (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
    const r = this.subarray(t, e);
    return Object.setPrototypeOf(r, ot.prototype), r
 }, ot.prototype.readUintLE = ot.prototype.readUIntLE = function (t, e, n) {
    t >>>= 0, e >>>= 0, n || Bt(t, e, this.length);
    let r = this[t],
       o = 1,
       i = 0;
    for (; ++i < e && (o *= 256);) r += this[t + i] * o;
    return r
 }, ot.prototype.readUintBE = ot.prototype.readUIntBE = function (t, e, n) {
    t >>>= 0, e >>>= 0, n || Bt(t, e, this.length);
    let r = this[t + --e],
       o = 1;
    for (; e > 0 && (o *= 256);) r += this[t + --e] * o;
    return r
 }, ot.prototype.readUint8 = ot.prototype.readUInt8 = function (t, e) {
    return t >>>= 0, e || Bt(t, 1, this.length), this[t]
 }, ot.prototype.readUint16LE = ot.prototype.readUInt16LE = function (t, e) {
    return t >>>= 0, e || Bt(t, 2, this.length), this[t] | this[t + 1] << 8
 }, ot.prototype.readUint16BE = ot.prototype.readUInt16BE = function (t, e) {
    return t >>>= 0, e || Bt(t, 2, this.length), this[t] << 8 | this[t + 1]
 }, ot.prototype.readUint32LE = ot.prototype.readUInt32LE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
 }, ot.prototype.readUint32BE = ot.prototype.readUInt32BE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
 }, ot.prototype.readBigUInt64LE = Vt((function (t) {
    Ft(t >>>= 0, "offset");
    const e = this[t],
       n = this[t + 7];
    void 0 !== e && void 0 !== n || $t(t, this.length - 8);
    const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
       o = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
    return BigInt(r) + (BigInt(o) << BigInt(32))
 })), ot.prototype.readBigUInt64BE = Vt((function (t) {
    Ft(t >>>= 0, "offset");
    const e = this[t],
       n = this[t + 7];
    void 0 !== e && void 0 !== n || $t(t, this.length - 8);
    const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
       o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
    return (BigInt(r) << BigInt(32)) + BigInt(o)
 })), ot.prototype.readIntLE = function (t, e, n) {
    t >>>= 0, e >>>= 0, n || Bt(t, e, this.length);
    let r = this[t],
       o = 1,
       i = 0;
    for (; ++i < e && (o *= 256);) r += this[t + i] * o;
    return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r
 }, ot.prototype.readIntBE = function (t, e, n) {
    t >>>= 0, e >>>= 0, n || Bt(t, e, this.length);
    let r = e,
       o = 1,
       i = this[t + --r];
    for (; r > 0 && (o *= 256);) i += this[t + --r] * o;
    return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
 }, ot.prototype.readInt8 = function (t, e) {
    return t >>>= 0, e || Bt(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
 }, ot.prototype.readInt16LE = function (t, e) {
    t >>>= 0, e || Bt(t, 2, this.length);
    const n = this[t] | this[t + 1] << 8;
    return 32768 & n ? 4294901760 | n : n
 }, ot.prototype.readInt16BE = function (t, e) {
    t >>>= 0, e || Bt(t, 2, this.length);
    const n = this[t + 1] | this[t] << 8;
    return 32768 & n ? 4294901760 | n : n
 }, ot.prototype.readInt32LE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
 }, ot.prototype.readInt32BE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
 }, ot.prototype.readBigInt64LE = Vt((function (t) {
    Ft(t >>>= 0, "offset");
    const e = this[t],
       n = this[t + 7];
    void 0 !== e && void 0 !== n || $t(t, this.length - 8);
    const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
    return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
 })), ot.prototype.readBigInt64BE = Vt((function (t) {
    Ft(t >>>= 0, "offset");
    const e = this[t],
       n = this[t + 7];
    void 0 !== e && void 0 !== n || $t(t, this.length - 8);
    const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
 })), ot.prototype.readFloatLE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), J(this, t, !0, 23, 4)
 }, ot.prototype.readFloatBE = function (t, e) {
    return t >>>= 0, e || Bt(t, 4, this.length), J(this, t, !1, 23, 4)
 }, ot.prototype.readDoubleLE = function (t, e) {
    return t >>>= 0, e || Bt(t, 8, this.length), J(this, t, !0, 52, 8)
 }, ot.prototype.readDoubleBE = function (t, e) {
    return t >>>= 0, e || Bt(t, 8, this.length), J(this, t, !1, 52, 8)
 }, ot.prototype.writeUintLE = ot.prototype.writeUIntLE = function (t, e, n, r) {
    if (t = +t, e >>>= 0, n >>>= 0, !r) {
       Tt(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
    }
    let o = 1,
       i = 0;
    for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
    return e + n
 }, ot.prototype.writeUintBE = ot.prototype.writeUIntBE = function (t, e, n, r) {
    if (t = +t, e >>>= 0, n >>>= 0, !r) {
       Tt(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
    }
    let o = n - 1,
       i = 1;
    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
    return e + n
 }, ot.prototype.writeUint8 = ot.prototype.writeUInt8 = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
 }, ot.prototype.writeUint16LE = ot.prototype.writeUInt16LE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
 }, ot.prototype.writeUint16BE = ot.prototype.writeUInt16BE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
 }, ot.prototype.writeUint32LE = ot.prototype.writeUInt32LE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
 }, ot.prototype.writeUint32BE = ot.prototype.writeUInt32BE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
 }, ot.prototype.writeBigUInt64LE = Vt((function (t, e = 0) {
    return kt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
 })), ot.prototype.writeBigUInt64BE = Vt((function (t, e = 0) {
    return Ut(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
 })), ot.prototype.writeIntLE = function (t, e, n, r) {
    if (t = +t, e >>>= 0, !r) {
       const r = Math.pow(2, 8 * n - 1);
       Tt(this, t, e, n, r - 1, -r)
    }
    let o = 0,
       i = 1,
       s = 0;
    for (this[e] = 255 & t; ++o < n && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
    return e + n
 }, ot.prototype.writeIntBE = function (t, e, n, r) {
    if (t = +t, e >>>= 0, !r) {
       const r = Math.pow(2, 8 * n - 1);
       Tt(this, t, e, n, r - 1, -r)
    }
    let o = n - 1,
       i = 1,
       s = 0;
    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
    return e + n
 }, ot.prototype.writeInt8 = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
 }, ot.prototype.writeInt16LE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
 }, ot.prototype.writeInt16BE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
 }, ot.prototype.writeInt32LE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
 }, ot.prototype.writeInt32BE = function (t, e, n) {
    return t = +t, e >>>= 0, n || Tt(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
 }, ot.prototype.writeBigInt64LE = Vt((function (t, e = 0) {
    return kt(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
 })), ot.prototype.writeBigInt64BE = Vt((function (t, e = 0) {
    return Ut(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
 })), ot.prototype.writeFloatLE = function (t, e, n) {
    return xt(this, t, e, !0, n)
 }, ot.prototype.writeFloatBE = function (t, e, n) {
    return xt(this, t, e, !1, n)
 }, ot.prototype.writeDoubleLE = function (t, e, n) {
    return Ct(this, t, e, !0, n)
 }, ot.prototype.writeDoubleBE = function (t, e, n) {
    return Ct(this, t, e, !1, n)
 }, ot.prototype.copy = function (t, e, n, r) {
    if (!ot.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
    const o = r - n;
    return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), o
 }, ot.prototype.fill = function (t, e, n, r) {
    if ("string" == typeof t) {
       if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
       if ("string" == typeof r && !ot.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
       if (1 === t.length) {
          const e = t.charCodeAt(0);
          ("utf8" === r && e < 128 || "latin1" === r) && (t = e)
       }
    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
    if (n <= e) return this;
    let o;
    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
       for (o = e; o < n; ++o) this[o] = t;
    else {
       const i = ot.isBuffer(t) ? t : ot.from(t, r),
          s = i.length;
       if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
       for (o = 0; o < n - e; ++o) this[o + e] = i[o % s]
    }
    return this
 };
 const It = {};
 
 function Nt(t, e, n) {
    It[t] = class extends n {
       constructor() {
          super(), Object.defineProperty(this, "message", {
             value: e.apply(this, arguments),
             writable: !0,
             configurable: !0
          }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
       }
       get code() {
          return t
       }
       set code(t) {
          Object.defineProperty(this, "code", {
             configurable: !0,
             enumerable: !0,
             value: t,
             writable: !0
          })
       }
       toString() {
          return `${this.name} [${t}]: ${this.message}`
       }
    }
 }
 
 function jt(t) {
    let e = "",
       n = t.length;
    const r = "-" === t[0] ? 1 : 0;
    for (; n >= r + 4; n -= 3) e = `_${t.slice(n-3,n)}${e}`;
    return `${t.slice(0,n)}${e}`
 }
 
 function Pt(t, e, n, r, o, i) {
    if (t > n || t < e) {
       const r = "bigint" == typeof e ? "n" : "";
       let o;
       throw o = i > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(i+1)}${r}` : `>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}` : `>= ${e}${r} and <= ${n}${r}`, new It.ERR_OUT_OF_RANGE("value", o, t)
    }! function (t, e, n) {
       Ft(e, "offset"), void 0 !== t[e] && void 0 !== t[e + n] || $t(e, t.length - (n + 1))
    }(r, o, i)
 }
 
 function Ft(t, e) {
    if ("number" != typeof t) throw new It.ERR_INVALID_ARG_TYPE(e, "number", t)
 }
 
 function $t(t, e, n) {
    if (Math.floor(t) !== t) throw Ft(t, n), new It.ERR_OUT_OF_RANGE(n || "offset", "an integer", t);
    if (e < 0) throw new It.ERR_BUFFER_OUT_OF_BOUNDS;
    throw new It.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${e}`, t)
 }
 Nt("ERR_BUFFER_OUT_OF_BOUNDS", (function (t) {
    return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
 }), RangeError), Nt("ERR_INVALID_ARG_TYPE", (function (t, e) {
    return `The "${t}" argument must be of type number. Received type ${typeof e}`
 }), TypeError), Nt("ERR_OUT_OF_RANGE", (function (t, e, n) {
    let r = `The value of "${t}" is out of range.`,
       o = n;
    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? o = jt(String(n)) : "bigint" == typeof n && (o = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (o = jt(o)), o += "n"), r += ` It must be ${e}. Received ${o}`, r
 }), RangeError);
 const Dt = /[^+/0-9A-Za-z-_]/g;
 
 function Mt(t, e) {
    let n;
    e = e || 1 / 0;
    const r = t.length;
    let o = null;
    const i = [];
    for (let s = 0; s < r; ++s) {
       if (n = t.charCodeAt(s), n > 55295 && n < 57344) {
          if (!o) {
             if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue
             }
             if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue
             }
             o = n;
             continue
          }
          if (n < 56320) {
             (e -= 3) > -1 && i.push(239, 191, 189), o = n;
             continue
          }
          n = 65536 + (o - 55296 << 10 | n - 56320)
       } else o && (e -= 3) > -1 && i.push(239, 191, 189);
       if (o = null, n < 128) {
          if ((e -= 1) < 0) break;
          i.push(n)
       } else if (n < 2048) {
          if ((e -= 2) < 0) break;
          i.push(n >> 6 | 192, 63 & n | 128)
       } else if (n < 65536) {
          if ((e -= 3) < 0) break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
       } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
       }
    }
    return i
 }
 
 function Ht(t) {
    return q(function (t) {
       if ((t = (t = t.split("=")[0]).trim().replace(Dt, "")).length < 2) return "";
       for (; t.length % 4 != 0;) t += "=";
       return t
    }(t))
 }
 
 function qt(t, e, n, r) {
    let o;
    for (o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
    return o
 }
 
 function zt(t, e) {
    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
 }
 
 function Wt(t) {
    return t != t
 }
 const Jt = function () {
    const t = "0123456789abcdef",
       e = new Array(256);
    for (let n = 0; n < 16; ++n) {
       const r = 16 * n;
       for (let o = 0; o < 16; ++o) e[r + o] = t[n] + t[o]
    }
    return e
 }();
 
 function Vt(t) {
    return "undefined" == typeof BigInt ? Gt : t
 }
 
 function Gt() {
    throw new Error("BigInt not supported")
 }
 var Yt = H;
 
 function Kt(t) {
    return F.isPlainObject(t) || F.isArray(t)
 }
 
 function Xt(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
 }
 
 function Qt(t, e, n) {
    return t ? t.concat(e).map((function (t, e) {
       return t = Xt(t), !n && e ? "[" + t + "]" : t
    })).join(n ? "." : "") : e
 }
 const Zt = F.toFlatObject(F, {}, null, (function (t) {
    return /^is[A-Z]/.test(t)
 }));
 var te = function (t, e, n) {
    if (!F.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData;
    const r = (n = F.toFlatObject(n, {
          metaTokens: !0,
          dots: !1,
          indexes: !1
       }, !1, (function (t, e) {
          return !F.isUndefined(e[t])
       }))).metaTokens,
       o = n.visitor || c,
       i = n.dots,
       s = n.indexes,
       a = (n.Blob || "undefined" != typeof Blob && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(o)) throw new TypeError("visitor must be a function");
 
    function u(t) {
       if (null === t) return "";
       if (F.isDate(t)) return t.toISOString();
       if (!a && F.isBlob(t)) throw new W("Blob is not supported. Use a Buffer instead.");
       return F.isArrayBuffer(t) || F.isTypedArray(t) ? a && "function" == typeof Blob ? new Blob([t]) : Yt.from(t) : t
    }
 
    function c(t, n, o) {
       let a = t;
       if (t && !o && "object" == typeof t)
          if (F.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), t = JSON.stringify(t);
          else if (F.isArray(t) && function (t) {
             return F.isArray(t) && !t.some(Kt)
          }(t) || (F.isFileList(t) || F.endsWith(n, "[]")) && (a = F.toArray(t))) return n = Xt(n), a.forEach((function (t, r) {
          !F.isUndefined(t) && null !== t && e.append(!0 === s ? Qt([n], r, i) : null === s ? n : n + "[]", u(t))
       })), !1;
       return !!Kt(t) || (e.append(Qt(o, n, i), u(t)), !1)
    }
    const f = [],
       l = Object.assign(Zt, {
          defaultVisitor: c,
          convertValue: u,
          isVisitable: Kt
       });
    if (!F.isObject(t)) throw new TypeError("data must be an object");
    return function t(n, r) {
       if (!F.isUndefined(n)) {
          if (-1 !== f.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
          f.push(n), F.forEach(n, (function (n, i) {
             !0 === (!(F.isUndefined(n) || null === n) && o.call(e, n, F.isString(i) ? i.trim() : i, r, l)) && t(n, r ? r.concat(i) : [i])
          })), f.pop()
       }
    }(t), e
 };
 
 function ee(t) {
    const e = {
       "!": "%21",
       "'": "%27",
       "(": "%28",
       ")": "%29",
       "~": "%7E",
       "%20": "+",
       "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, (function (t) {
       return e[t]
    }))
 }
 
 function ne(t, e) {
    this._pairs = [], t && te(t, this, e)
 }
 const re = ne.prototype;
 re.append = function (t, e) {
    this._pairs.push([t, e])
 }, re.toString = function (t) {
    const e = t ? function (e) {
       return t.call(this, e, ee)
    } : ee;
    return this._pairs.map((function (t) {
       return e(t[0]) + "=" + e(t[1])
    }), "").join("&")
 };
 var oe = ne;
 
 function ie(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
 }
 
 function se(t, e, n) {
    if (!e) return t;
    const r = n && n.encode || ie,
       o = n && n.serialize;
    let i;
    if (i = o ? o(e, n) : F.isURLSearchParams(e) ? e.toString() : new oe(e, n).toString(r), i) {
       const e = t.indexOf("#"); - 1 !== e && (t = t.slice(0, e)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
    }
    return t
 }
 var ae = class {
       constructor() {
          this.handlers = []
       }
       use(t, e, n) {
          return this.handlers.push({
             fulfilled: t,
             rejected: e,
             synchronous: !!n && n.synchronous,
             runWhen: n ? n.runWhen : null
          }), this.handlers.length - 1
       }
       eject(t) {
          this.handlers[t] && (this.handlers[t] = null)
       }
       clear() {
          this.handlers && (this.handlers = [])
       }
       forEach(t) {
          F.forEach(this.handlers, (function (e) {
             null !== e && t(e)
          }))
       }
    },
    ue = {
       silentJSONParsing: !0,
       forcedJSONParsing: !0,
       clarifyTimeoutError: !1
    };
 var ce = {
    isBrowser: !0,
    classes: {
       URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : oe,
       FormData: "undefined" != typeof FormData ? FormData : null,
       Blob: "undefined" != typeof Blob ? Blob : null
    },
    isStandardBrowserEnv: (() => {
       let t;
       return ("undefined" == typeof navigator || "ReactNative" !== (t = navigator.product) && "NativeScript" !== t && "NS" !== t) && ("undefined" != typeof window && "undefined" != typeof document)
    })(),
    isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
    protocols: ["http", "https", "file", "blob", "url", "data"]
 };
 
 function fe(t, e) {
    return te(t, new ce.classes.URLSearchParams, Object.assign({
       visitor: function (t, e, n, r) {
          return ce.isNode && F.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
       }
    }, e))
 }
 var le = function (t) {
    function e(t, n, r, o) {
       let i = t[o++];
       const s = Number.isFinite(+i),
          a = o >= t.length;
       if (i = !i && F.isArray(r) ? r.length : i, a) return F.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !s;
       r[i] && F.isObject(r[i]) || (r[i] = []);
       return e(t, n, r[i], o) && F.isArray(r[i]) && (r[i] = function (t) {
          const e = {},
             n = Object.keys(t);
          let r;
          const o = n.length;
          let i;
          for (r = 0; r < o; r++) i = n[r], e[i] = t[i];
          return e
       }(r[i])), !s
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
       const n = {};
       return F.forEachEntry(t, ((t, r) => {
          e(function (t) {
             return F.matchAll(/\w+|\[(\w*)]/g, t).map((t => "[]" === t[0] ? "" : t[1] || t[0]))
          }(t), r, n, 0)
       })), n
    }
    return null
 };
 const he = {
    "Content-Type": void 0
 };
 const pe = {
    transitional: ue,
    adapter: ["xhr", "http"],
    transformRequest: [function (t, e) {
       const n = e.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          o = F.isObject(t);
       o && F.isHTMLForm(t) && (t = new FormData(t));
       if (F.isFormData(t)) return r && r ? JSON.stringify(le(t)) : t;
       if (F.isArrayBuffer(t) || F.isBuffer(t) || F.isStream(t) || F.isFile(t) || F.isBlob(t)) return t;
       if (F.isArrayBufferView(t)) return t.buffer;
       if (F.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
       let i;
       if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1) return fe(t, this.formSerializer).toString();
          if ((i = F.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
             const e = this.env && this.env.FormData;
             return te(i ? {
                "files[]": t
             } : t, e && new e, this.formSerializer)
          }
       }
       return o || r ? (e.setContentType("application/json", !1), function (t, e, n) {
          if (F.isString(t)) try {
             return (e || JSON.parse)(t), F.trim(t)
          } catch (t) {
             if ("SyntaxError" !== t.name) throw t
          }
          return (n || JSON.stringify)(t)
       }(t)) : t
    }],
    transformResponse: [function (t) {
       const e = this.transitional || pe.transitional,
          n = e && e.forcedJSONParsing,
          r = "json" === this.responseType;
       if (t && F.isString(t) && (n && !this.responseType || r)) {
          const n = !(e && e.silentJSONParsing) && r;
          try {
             return JSON.parse(t)
          } catch (t) {
             if (n) {
                if ("SyntaxError" === t.name) throw W.from(t, W.ERR_BAD_RESPONSE, this, null, this.response);
                throw t
             }
          }
       }
       return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
       FormData: ce.classes.FormData,
       Blob: ce.classes.Blob
    },
    validateStatus: function (t) {
       return t >= 200 && t < 300
    },
    headers: {
       common: {
          Accept: "application/json, text/plain, */*"
       }
    }
 };
 F.forEach(["delete", "get", "head"], (function (t) {
    pe.headers[t] = {}
 })), F.forEach(["post", "put", "patch"], (function (t) {
    pe.headers[t] = F.merge(he)
 }));
 var de = pe;
 const ge = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
 var ye = t => {
    const e = {};
    let n, r, o;
    return t && t.split("\n").forEach((function (t) {
       o = t.indexOf(":"), n = t.substring(0, o).trim().toLowerCase(), r = t.substring(o + 1).trim(), !n || e[n] && ge[n] || ("set-cookie" === n ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r)
    })), e
 };
 const me = Symbol("internals");
 
 function be(t) {
    return t && String(t).trim().toLowerCase()
 }
 
 function we(t) {
    return !1 === t || null == t ? t : F.isArray(t) ? t.map(we) : String(t)
 }
 
 function Ee(t, e, n, r, o) {
    return F.isFunction(r) ? r.call(this, e, n) : (o && (e = n), F.isString(e) ? F.isString(r) ? -1 !== e.indexOf(r) : F.isRegExp(r) ? r.test(e) : void 0 : void 0)
 }
 class ve {
    constructor(t) {
       t && this.set(t)
    }
    set(t, e, n) {
       const r = this;
 
       function o(t, e, n) {
          const o = be(e);
          if (!o) throw new Error("header name must be a non-empty string");
          const i = F.findKey(r, o);
          (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || e] = we(t))
       }
       const i = (t, e) => F.forEach(t, ((t, n) => o(t, n, e)));
       return F.isPlainObject(t) || t instanceof this.constructor ? i(t, e) : F.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()) ? i(ye(t), e) : null != t && o(e, t, n), this
    }
    get(t, e) {
       if (t = be(t)) {
          const n = F.findKey(this, t);
          if (n) {
             const t = this[n];
             if (!e) return t;
             if (!0 === e) return function (t) {
                const e = Object.create(null),
                   n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let r;
                for (; r = n.exec(t);) e[r[1]] = r[2];
                return e
             }(t);
             if (F.isFunction(e)) return e.call(this, t, n);
             if (F.isRegExp(e)) return e.exec(t);
             throw new TypeError("parser must be boolean|regexp|function")
          }
       }
    }
    has(t, e) {
       if (t = be(t)) {
          const n = F.findKey(this, t);
          return !(!n || void 0 === this[n] || e && !Ee(0, this[n], n, e))
       }
       return !1
    }
    delete(t, e) {
       const n = this;
       let r = !1;
 
       function o(t) {
          if (t = be(t)) {
             const o = F.findKey(n, t);
             !o || e && !Ee(0, n[o], o, e) || (delete n[o], r = !0)
          }
       }
       return F.isArray(t) ? t.forEach(o) : o(t), r
    }
    clear(t) {
       const e = Object.keys(this);
       let n = e.length,
          r = !1;
       for (; n--;) {
          const o = e[n];
          t && !Ee(0, this[o], o, t, !0) || (delete this[o], r = !0)
       }
       return r
    }
    normalize(t) {
       const e = this,
          n = {};
       return F.forEach(this, ((r, o) => {
          const i = F.findKey(n, o);
          if (i) return e[i] = we(r), void delete e[o];
          const s = t ? function (t) {
             return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((t, e, n) => e.toUpperCase() + n))
          }(o) : String(o).trim();
          s !== o && delete e[o], e[s] = we(r), n[s] = !0
       })), this
    }
    concat(...t) {
       return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
       const e = Object.create(null);
       return F.forEach(this, ((n, r) => {
          null != n && !1 !== n && (e[r] = t && F.isArray(n) ? n.join(", ") : n)
       })), e
    } [Symbol.iterator]() {
       return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
       return Object.entries(this.toJSON()).map((([t, e]) => t + ": " + e)).join("\n")
    }
    get[Symbol.toStringTag]() {
       return "AxiosHeaders"
    }
    static from(t) {
       return t instanceof this ? t : new this(t)
    }
    static concat(t, ...e) {
       const n = new this(t);
       return e.forEach((t => n.set(t))), n
    }
    static accessor(t) {
       const e = (this[me] = this[me] = {
             accessors: {}
          }).accessors,
          n = this.prototype;
 
       function r(t) {
          const r = be(t);
          e[r] || (! function (t, e) {
             const n = F.toCamelCase(" " + e);
             ["get", "set", "has"].forEach((r => {
                Object.defineProperty(t, r + n, {
                   value: function (t, n, o) {
                      return this[r].call(this, e, t, n, o)
                   },
                   configurable: !0
                })
             }))
          }(n, t), e[r] = !0)
       }
       return F.isArray(t) ? t.forEach(r) : r(t), this
    }
 }
 ve.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), F.freezeMethods(ve.prototype), F.freezeMethods(ve);
 var _e = ve;
 
 function Ae(t, e) {
    const n = this || de,
       r = e || n,
       o = _e.from(r.headers);
    let i = r.data;
    return F.forEach(t, (function (t) {
       i = t.call(n, i, o.normalize(), e ? e.status : void 0)
    })), o.normalize(), i
 }
 
 function Se(t) {
    return !(!t || !t.__CANCEL__)
 }
 
 function Oe(t, e, n) {
    W.call(this, null == t ? "canceled" : t, W.ERR_CANCELED, e, n), this.name = "CanceledError"
 }
 F.inherits(Oe, W, {
    __CANCEL__: !0
 });
 var Re = Oe;
 
 function Be(t, e, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status) ? e(new W("Request failed with status code " + n.status, [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : t(n)
 }
 var Te = ce.isStandardBrowserEnv ? {
    write: function (t, e, n, r, o, i) {
       const s = [];
       s.push(t + "=" + encodeURIComponent(e)), F.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), F.isString(r) && s.push("path=" + r), F.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ")
    },
    read: function (t) {
       const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
       return e ? decodeURIComponent(e[3]) : null
    },
    remove: function (t) {
       this.write(t, "", Date.now() - 864e5)
    }
 } : {
    write: function () {},
    read: function () {
       return null
    },
    remove: function () {}
 };
 
 function ke(t, e) {
    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
 }
 
 function Ue(t, e) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? ke(t, e) : e
 }
 var Le = ce.isStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent),
       e = document.createElement("a");
    let n;
 
    function r(n) {
       let r = n;
       return t && (e.setAttribute("href", r), r = e.href), e.setAttribute("href", r), {
          href: e.href,
          protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
          host: e.host,
          search: e.search ? e.search.replace(/^\?/, "") : "",
          hash: e.hash ? e.hash.replace(/^#/, "") : "",
          hostname: e.hostname,
          port: e.port,
          pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
       }
    }
    return n = r(window.location.href),
       function (t) {
          const e = F.isString(t) ? r(t) : t;
          return e.protocol === n.protocol && e.host === n.host
       }
 }() : function () {
    return !0
 };
 
 function xe(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
 }
 var Ce = function (t, e) {
    t = t || 10;
    const n = new Array(t),
       r = new Array(t);
    let o, i = 0,
       s = 0;
    return e = void 0 !== e ? e : 1e3,
       function (a) {
          const u = Date.now(),
             c = r[s];
          o || (o = u), n[i] = a, r[i] = u;
          let f = s,
             l = 0;
          for (; f !== i;) l += n[f++], f %= t;
          if (i = (i + 1) % t, i === s && (s = (s + 1) % t), u - o < e) return;
          const h = c && u - c;
          return h ? Math.round(1e3 * l / h) : void 0
       }
 };
 
 function Ie(t, e) {
    let n = 0;
    const r = Ce(50, 250);
    return o => {
       const i = o.loaded,
          s = o.lengthComputable ? o.total : void 0,
          a = i - n,
          u = r(a);
       n = i;
       const c = {
          loaded: i,
          total: s,
          progress: s ? i / s : void 0,
          bytes: a,
          rate: u || void 0,
          estimated: u && s && i <= s ? (s - i) / u : void 0,
          event: o
       };
       c[e ? "download" : "upload"] = !0, t(c)
    }
 }
 const Ne = {
    http: null,
    xhr: "undefined" != typeof XMLHttpRequest && function (t) {
       return new Promise((function (e, n) {
          let r = t.data;
          const o = _e.from(t.headers).normalize(),
             i = t.responseType;
          let s;
 
          function a() {
             t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s)
          }
          F.isFormData(r) && (ce.isStandardBrowserEnv || ce.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
          let u = new XMLHttpRequest;
          if (t.auth) {
             const e = t.auth.username || "",
                n = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
             o.set("Authorization", "Basic " + btoa(e + ":" + n))
          }
          const c = Ue(t.baseURL, t.url);
 
          function f() {
             if (!u) return;
             const r = _e.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
             Be((function (t) {
                e(t), a()
             }), (function (t) {
                n(t), a()
             }), {
                data: i && "text" !== i && "json" !== i ? u.response : u.responseText,
                status: u.status,
                statusText: u.statusText,
                headers: r,
                config: t,
                request: u
             }), u = null
          }
          if (u.open(t.method.toUpperCase(), se(c, t.params, t.paramsSerializer), !0), u.timeout = t.timeout, "onloadend" in u ? u.onloadend = f : u.onreadystatechange = function () {
                u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(f)
             }, u.onabort = function () {
                u && (n(new W("Request aborted", W.ECONNABORTED, t, u)), u = null)
             }, u.onerror = function () {
                n(new W("Network Error", W.ERR_NETWORK, t, u)), u = null
             }, u.ontimeout = function () {
                let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
                const r = t.transitional || ue;
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(new W(e, r.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED, t, u)), u = null
             }, ce.isStandardBrowserEnv) {
             const e = (t.withCredentials || Le(c)) && t.xsrfCookieName && Te.read(t.xsrfCookieName);
             e && o.set(t.xsrfHeaderName, e)
          }
          void 0 === r && o.setContentType(null), "setRequestHeader" in u && F.forEach(o.toJSON(), (function (t, e) {
             u.setRequestHeader(e, t)
          })), F.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), i && "json" !== i && (u.responseType = t.responseType), "function" == typeof t.onDownloadProgress && u.addEventListener("progress", Ie(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && u.upload && u.upload.addEventListener("progress", Ie(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = e => {
             u && (n(!e || e.type ? new Re(null, t, u) : e), u.abort(), u = null)
          }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
          const l = xe(c);
          l && -1 === ce.protocols.indexOf(l) ? n(new W("Unsupported protocol " + l + ":", W.ERR_BAD_REQUEST, t)) : u.send(r || null)
       }))
    }
 };
 F.forEach(Ne, ((t, e) => {
    if (t) {
       try {
          Object.defineProperty(t, "name", {
             value: e
          })
       } catch (t) {}
       Object.defineProperty(t, "adapterName", {
          value: e
       })
    }
 }));
 var je = {
    getAdapter: t => {
       t = F.isArray(t) ? t : [t];
       const {
          length: e
       } = t;
       let n, r;
       for (let o = 0; o < e && (n = t[o], !(r = F.isString(n) ? Ne[n.toLowerCase()] : n)); o++);
       if (!r) {
          if (!1 === r) throw new W(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
          throw new Error(F.hasOwnProp(Ne, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
       }
       if (!F.isFunction(r)) throw new TypeError("adapter is not a function");
       return r
    },
    adapters: Ne
 };
 
 function Pe(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Re(null, t)
 }
 
 function Fe(t) {
    Pe(t), t.headers = _e.from(t.headers), t.data = Ae.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1);
    return je.getAdapter(t.adapter || de.adapter)(t).then((function (e) {
       return Pe(t), e.data = Ae.call(t, t.transformResponse, e), e.headers = _e.from(e.headers), e
    }), (function (e) {
       return Se(e) || (Pe(t), e && e.response && (e.response.data = Ae.call(t, t.transformResponse, e.response), e.response.headers = _e.from(e.response.headers))), Promise.reject(e)
    }))
 }
 const $e = t => t instanceof _e ? t.toJSON() : t;
 
 function De(t, e) {
    e = e || {};
    const n = {};
 
    function r(t, e, n) {
       return F.isPlainObject(t) && F.isPlainObject(e) ? F.merge.call({
          caseless: n
       }, t, e) : F.isPlainObject(e) ? F.merge({}, e) : F.isArray(e) ? e.slice() : e
    }
 
    function o(t, e, n) {
       return F.isUndefined(e) ? F.isUndefined(t) ? void 0 : r(void 0, t, n) : r(t, e, n)
    }
 
    function i(t, e) {
       if (!F.isUndefined(e)) return r(void 0, e)
    }
 
    function s(t, e) {
       return F.isUndefined(e) ? F.isUndefined(t) ? void 0 : r(void 0, t) : r(void 0, e)
    }
 
    function a(n, o, i) {
       return i in e ? r(n, o) : i in t ? r(void 0, n) : void 0
    }
    const u = {
       url: i,
       method: i,
       data: i,
       baseURL: s,
       transformRequest: s,
       transformResponse: s,
       paramsSerializer: s,
       timeout: s,
       timeoutMessage: s,
       withCredentials: s,
       adapter: s,
       responseType: s,
       xsrfCookieName: s,
       xsrfHeaderName: s,
       onUploadProgress: s,
       onDownloadProgress: s,
       decompress: s,
       maxContentLength: s,
       maxBodyLength: s,
       beforeRedirect: s,
       transport: s,
       httpAgent: s,
       httpsAgent: s,
       cancelToken: s,
       socketPath: s,
       responseEncoding: s,
       validateStatus: a,
       headers: (t, e) => o($e(t), $e(e), !0)
    };
    return F.forEach(Object.keys(t).concat(Object.keys(e)), (function (r) {
       const i = u[r] || o,
          s = i(t[r], e[r], r);
       F.isUndefined(s) && i !== a || (n[r] = s)
    })), n
 }
 const Me = {};
 ["object", "boolean", "number", "function", "string", "symbol"].forEach(((t, e) => {
    Me[t] = function (n) {
       return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
    }
 }));
 const He = {};
 Me.transitional = function (t, e, n) {
    function r(t, e) {
       return "[Axios v1.3.5] Transitional option '" + t + "'" + e + (n ? ". " + n : "")
    }
    return (n, o, i) => {
       if (!1 === t) throw new W(r(o, " has been removed" + (e ? " in " + e : "")), W.ERR_DEPRECATED);
       return e && !He[o] && (He[o] = !0, console.warn(r(o, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(n, o, i)
    }
 };
 var qe = {
    assertOptions: function (t, e, n) {
       if ("object" != typeof t) throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
       const r = Object.keys(t);
       let o = r.length;
       for (; o-- > 0;) {
          const i = r[o],
             s = e[i];
          if (s) {
             const e = t[i],
                n = void 0 === e || s(e, i, t);
             if (!0 !== n) throw new W("option " + i + " must be " + n, W.ERR_BAD_OPTION_VALUE)
          } else if (!0 !== n) throw new W("Unknown option " + i, W.ERR_BAD_OPTION)
       }
    },
    validators: Me
 };
 const ze = qe.validators;
 class We {
    constructor(t) {
       this.defaults = t, this.interceptors = {
          request: new ae,
          response: new ae
       }
    }
    request(t, e) {
       "string" == typeof t ? (e = e || {}).url = t : e = t || {}, e = De(this.defaults, e);
       const {
          transitional: n,
          paramsSerializer: r,
          headers: o
       } = e;
       let i;
       void 0 !== n && qe.assertOptions(n, {
          silentJSONParsing: ze.transitional(ze.boolean),
          forcedJSONParsing: ze.transitional(ze.boolean),
          clarifyTimeoutError: ze.transitional(ze.boolean)
       }, !1), null != r && (F.isFunction(r) ? e.paramsSerializer = {
          serialize: r
       } : qe.assertOptions(r, {
          encode: ze.function,
          serialize: ze.function
       }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase(), i = o && F.merge(o.common, o[e.method]), i && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (t => {
          delete o[t]
       })), e.headers = _e.concat(i, o);
       const s = [];
       let a = !0;
       this.interceptors.request.forEach((function (t) {
          "function" == typeof t.runWhen && !1 === t.runWhen(e) || (a = a && t.synchronous, s.unshift(t.fulfilled, t.rejected))
       }));
       const u = [];
       let c;
       this.interceptors.response.forEach((function (t) {
          u.push(t.fulfilled, t.rejected)
       }));
       let f, l = 0;
       if (!a) {
          const t = [Fe.bind(this), void 0];
          for (t.unshift.apply(t, s), t.push.apply(t, u), f = t.length, c = Promise.resolve(e); l < f;) c = c.then(t[l++], t[l++]);
          return c
       }
       f = s.length;
       let h = e;
       for (l = 0; l < f;) {
          const t = s[l++],
             e = s[l++];
          try {
             h = t(h)
          } catch (t) {
             e.call(this, t);
             break
          }
       }
       try {
          c = Fe.call(this, h)
       } catch (t) {
          return Promise.reject(t)
       }
       for (l = 0, f = u.length; l < f;) c = c.then(u[l++], u[l++]);
       return c
    }
    getUri(t) {
       return se(Ue((t = De(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer)
    }
 }
 F.forEach(["delete", "get", "head", "options"], (function (t) {
    We.prototype[t] = function (e, n) {
       return this.request(De(n || {}, {
          method: t,
          url: e,
          data: (n || {}).data
       }))
    }
 })), F.forEach(["post", "put", "patch"], (function (t) {
    function e(e) {
       return function (n, r, o) {
          return this.request(De(o || {}, {
             method: t,
             headers: e ? {
                "Content-Type": "multipart/form-data"
             } : {},
             url: n,
             data: r
          }))
       }
    }
    We.prototype[t] = e(), We.prototype[t + "Form"] = e(!0)
 }));
 var Je = We;
 class Ve {
    constructor(t) {
       if ("function" != typeof t) throw new TypeError("executor must be a function.");
       let e;
       this.promise = new Promise((function (t) {
          e = t
       }));
       const n = this;
       this.promise.then((t => {
          if (!n._listeners) return;
          let e = n._listeners.length;
          for (; e-- > 0;) n._listeners[e](t);
          n._listeners = null
       })), this.promise.then = t => {
          let e;
          const r = new Promise((t => {
             n.subscribe(t), e = t
          })).then(t);
          return r.cancel = function () {
             n.unsubscribe(e)
          }, r
       }, t((function (t, r, o) {
          n.reason || (n.reason = new Re(t, r, o), e(n.reason))
       }))
    }
    throwIfRequested() {
       if (this.reason) throw this.reason
    }
    subscribe(t) {
       this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
       if (!this._listeners) return;
       const e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
    }
    static source() {
       let t;
       return {
          token: new Ve((function (e) {
             t = e
          })),
          cancel: t
       }
    }
 }
 var Ge = Ve;
 const Ye = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
 };
 Object.entries(Ye).forEach((([t, e]) => {
    Ye[e] = t
 }));
 var Ke = Ye;
 const Xe = function t(e) {
    const n = new Je(e),
       r = a(Je.prototype.request, n);
    return F.extend(r, Je.prototype, n, {
       allOwnKeys: !0
    }), F.extend(r, n, null, {
       allOwnKeys: !0
    }), r.create = function (n) {
       return t(De(e, n))
    }, r
 }(de);
 Xe.Axios = Je, Xe.CanceledError = Re, Xe.CancelToken = Ge, Xe.isCancel = Se, Xe.VERSION = "1.3.5", Xe.toFormData = te, Xe.AxiosError = W, Xe.Cancel = Xe.CanceledError, Xe.all = function (t) {
    return Promise.all(t)
 }, Xe.spread = function (t) {
    return function (e) {
       return t.apply(null, e)
    }
 }, Xe.isAxiosError = function (t) {
    return F.isObject(t) && !0 === t.isAxiosError
 }, Xe.mergeConfig = De, Xe.AxiosHeaders = _e, Xe.formToJSON = t => le(F.isHTMLForm(t) ? new FormData(t) : t), Xe.HttpStatusCode = Ke, Xe.default = Xe;
 var Qe = Xe;
 const {
    Axios: Ze,
    AxiosError: tn,
    CanceledError: en,
    isCancel: nn,
    CancelToken: rn,
    VERSION: on,
    all: sn,
    Cancel: an,
    isAxiosError: un,
    spread: cn,
    toFormData: fn,
    AxiosHeaders: ln,
    HttpStatusCode: hn,
    formToJSON: pn,
    mergeConfig: dn
 } = Qe;
 async function gn() {
    const {
       data: t
    } = await Qe.get("/books/category-list");
    return t
 }
 async function yn() {
    const {
       data: t
    } = await Qe.get("/books/top-books");
    return t
 }
 async function mn(t) {
    const {
       data: e
    } = await Qe.get("/books/category", {
       params: {
          category: t
       }
    });
    return e
 }
 async function bn(t) {
    const {
       data: e
    } = await Qe.get(`/books/${t}`);
    return e
 }
 Qe.defaults.baseURL = "https://books-backend.p.goit.global";
 var wn, En = o("krGWQ"),
    vn = (En = o("krGWQ"), o("gjiCh")),
    _n = /^\s+|\s+$/g,
    An = /^[-+]0x[0-9a-f]+$/i,
    Sn = /^0b[01]+$/i,
    On = /^0o[0-7]+$/i,
    Rn = parseInt,
    Bn = "object" == typeof e && e && e.Object === Object && e,
    Tn = "object" == typeof self && self && self.Object === Object && self,
    kn = Bn || Tn || Function("return this")(),
    Un = Object.prototype.toString,
    Ln = Math.max,
    xn = Math.min,
    Cn = function () {
       return kn.Date.now()
    };
 
 function In(t, e, n) {
    var r, o, i, s, a, u, c = 0,
       f = !1,
       l = !1,
       h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
 
    function p(e) {
       var n = r,
          i = o;
       return r = o = void 0, c = e, s = t.apply(i, n)
    }
 
    function d(t) {
       return c = t, a = setTimeout(y, e), f ? p(t) : s
    }
 
    function g(t) {
       var n = t - u;
       return void 0 === u || n >= e || n < 0 || l && t - c >= i
    }
 
    function y() {
       var t = Cn();
       if (g(t)) return m(t);
       a = setTimeout(y, function (t) {
          var n = e - (t - u);
          return l ? xn(n, i - (t - c)) : n
       }(t))
    }
 
    function m(t) {
       return a = void 0, h && r ? p(t) : (r = o = void 0, s)
    }
 
    function b() {
       var t = Cn(),
          n = g(t);
       if (r = arguments, o = this, u = t, n) {
          if (void 0 === a) return d(u);
          if (l) return a = setTimeout(y, e), p(u)
       }
       return void 0 === a && (a = setTimeout(y, e)), s
    }
    return e = jn(e) || 0, Nn(n) && (f = !!n.leading, i = (l = "maxWait" in n) ? Ln(jn(n.maxWait) || 0, e) : i, h = "trailing" in n ? !!n.trailing : h), b.cancel = function () {
       void 0 !== a && clearTimeout(a), c = 0, r = u = o = a = void 0
    }, b.flush = function () {
       return void 0 === a ? s : m(Cn())
    }, b
 }
 
 function Nn(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e)
 }
 
 function jn(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
          return "symbol" == typeof t || function (t) {
             return !!t && "object" == typeof t
          }(t) && "[object Symbol]" == Un.call(t)
       }(t)) return NaN;
    if (Nn(t)) {
       var e = "function" == typeof t.valueOf ? t.valueOf() : t;
       t = Nn(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(_n, "");
    var n = Sn.test(t);
    return n || On.test(t) ? Rn(t.slice(2), n ? 2 : 8) : An.test(t) ? NaN : +t
 }
 wn = function (t, e, n) {
    var r = !0,
       o = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    return Nn(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), In(t, e, {
       leading: r,
       maxWait: e,
       trailing: o
    })
 };
 const Pn = document.querySelector(".home__main-container");
 let Fn, $n = 375;
 window.addEventListener("resize", t(wn)((function () {
    if (Fn = Pn.classList.contains("container_active"), !Fn) return;
    (window.innerWidth > 767 && $n < 768 || window.innerWidth > 1439 && $n < 1440 || window.innerWidth < 1440 && $n > 1439 || window.innerWidth < 768 && $n > 767) && location.reload()
 }), 200)), $n = window.innerWidth;
 let Dn = 1;
 Dn = $n < 768 ? 1 : $n > 767 && $n < 1440 ? 3 : 5;
 const Mn = async () => {
    (0, vn.spinerStart)();
    let t = await yn();
    var e;
    t = t.map((t => ({
       ...t,
       books: t.books
    }))), En.default.homeBooksByType.classList.remove("container_active"), En.default.homeContainer.classList.add("container_active"), En.default.homeContainer.innerHTML = await (e = t, `\n    <h1 class="books__main-title">\n      Best Sellers <span class="books__main-title-attribute">Books</span>\n    </h1> <ul class="books__container"> ${e.map((t=>`\n      <li class="books__list"> \n      <h3 class="books__list-title">${t.list_name}</h3>\n        <div class="books__card-container">\n          ${t.books.map((t=>`\n\n            <a href="#" class="books__item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${t._id}'>\n      \n            <div class="books__card">\n              <img\n                src="${t.book_image}"\n                alt="${t.title}"\n                class="books__card-title-img"\n                width="180"\n                height="256"\n      \n              />\n              <div class="books__overlay">\n                <p class="books__overlay-text">quick view</p>\n              </div>\n             </div> \n              <div class="books__descr">\n                <h3 class="books__card-title">${Hn(t.title)}</h3>\n                <p class="books__card-author">${qn(t.author)}</p>\n              </div>\n           </a>\n       `)).slice(0,Dn).join("")}\n        </div>\n        <button class="books__btn" type="button" data-id="${t.list_name}">see more</button>\n      </li>\n      `)).join("")}</ul>`);
    document.querySelectorAll(".books__btn").forEach((t => {
       t.addEventListener("click", (t => {
          Wn(t.target.dataset.id).then(vn.spinerStopForCategories);
          const e = document.querySelector(".category-item.active");
          e && e.classList.remove("active"), t.target.classList.add("active")
       }))
    }))
 };
 
 function Hn(t) {
    return window.innerWidth <= 767 && t.length >= 27 ? t.substring(0, 27).toUpperCase().replace(/\s[A-Z]*$/g, "...") : window.innerWidth > 767 && t.length >= 19 ? t.substring(0, 19).toUpperCase().replace(/\s[A-Z]*$/g, "...") : t
 }
 
 function qn(t) {
    return window.innerWidth <= 767 && t.length >= 37 ? t.substring(0, 37).toUpperCase().replace(/\s[A-Z]*$/g, "...") : window.innerWidth > 767 && t.length >= 29 ? t.substring(0, 29).toUpperCase().replace(/\s[A-Z]*$/g, "...") : t
 }
 Mn().then(vn.spinerStop);
 vn = o("gjiCh");
 var zn = o("7Y9D8");
 (async () => {
    (0, vn.spinerStartForCategories)();
    try {
       const t = await gn();
       En.default.categoriesSidebar.innerHTML = await (e = t, `<li class="category-item active" data-id="all-categories">\n        All categories</li>\n        ${e.map((t=>`<li class="category-item" data-id="${t.list_name}">\n        ${t.list_name}\n        </li>`)).join("")}`);
       document.querySelectorAll(".category-item").forEach((t => {
          t.addEventListener("click", (t => {
             const e = document.querySelector(".category-item.active");
             e && e.classList.remove("active"), t.target.classList.add("active"), "all-categories" === t.target.dataset.id ? Mn().then(vn.spinerStop) : Wn(t.target.dataset.id).then(vn.spinerStopForCategories)
          }))
       }))
    } catch (e) {
       t(zn).Notify.failure(`Oops! Something went wrong. You caught the following error: ${e.message}.`), (0, vn.spinerStopForCategories)()
    }
    var e
 })();
 const Wn = async e => {
    const n = await mn(e);
    En.default.homeContainer.classList.remove("container_active"), En.default.homeBooksByType.classList.add("container_active"), En.default.homeBooksByType.innerHTML = function (e, n) {
       if ((0, vn.spinerStartForCategories)(), e.length > 0) return `<h3 class="books__main-title">${n.substring(0,n.lastIndexOf(" "))}<span class="books__main-title-attribute"> ${n.split(" ").pop()}</span></h3>\n        <ul class="books__card-container">\n        ${e.map((t=>`<li class="books__item category__item">\n            <a href="#" class="books__item-link" rel="noopener noreferrer" data-id='${t._id}'>\n            <div class="books__card">\n            <img\n                class="books__card-title-img"\n                src="${t.book_image}"\n                alt="${t.title}"\n                width="180"\n                height="256"\n                loading="lazy"               \n            />\n            <div class="books__overlay">\n            <p class="books__overlay-text">Quick view</p>\n            </div> \n            </div>\n            <div class="books__descr">\n            <h3 class="books__card-title">${Hn(t.title)}</h3>\n            <p class="books__card-author">\n            ${qn(t.author)}\n            </p>\n            </div>\n            </a>\n            </li>`)).join("")}\n         </ul>`;
       t(zn).Notify.failure("Not found")
    }(n, e)
 };
 o("dSC8U"), o("9PYac");
 En = o("krGWQ"), zn = o("7Y9D8");
 var Jn = o("4PVUM");
 new URL(o("kyEFX").resolve("iuauJ"), import.meta.url).toString();
 var Vn;
 Vn = new URL(o("kyEFX").resolve("5VUT6"), import.meta.url).toString();
 var Gn;
 Gn = new URL(o("kyEFX").resolve("l42Hr"), import.meta.url).toString();
 var Yn;
 Yn = new URL(o("kyEFX").resolve("gAkt5"), import.meta.url).toString();
 var Kn;
 Kn = new URL(o("kyEFX").resolve("a3poI"), import.meta.url).toString();
 var Xn;
 Xn = new URL(o("kyEFX").resolve("gCapl"), import.meta.url).toString();
 var Qn;
 
 function Zn() {
    const t = -1 * Number.parseInt(document.body.style.top);
    document.body.classList.remove("no-scroll"), En.default.backdrop.classList.toggle("backdrop--is-hidden"), En.default.backdrop.removeEventListener("click", er), En.default.closeModalPopBtn.removeEventListener("click", Zn), window.removeEventListener("keydown", tr), Jn.default.remove("active-book"),
       function (t) {
          document.documentElement.style.scrollBehavior = "auto", window.scrollTo(0, t), document.documentElement.style.scrollBehavior = ""
       }(t);
    window.scrollY > document.documentElement.clientHeight && En.default.scrollBtnEl.classList.remove("btn-up_hide"), En.default.modalPopInfoEl.innerHTML = ""
 }
 
 function tr(t) {
    "Escape" === t.code && Zn()
 }
 
 function er(t) {
    t.target === t.currentTarget && Zn()
 }
 Qn = new URL(o("kyEFX").resolve("3vlOU"), import.meta.url).toString(), En.default.listBookEl.addEventListener("click", (function (e) {
    if (e.preventDefault(), !e.target.closest(".books__item-link")) return;
    const n = document.documentElement.scrollTop;
    En.default.scrollBtnEl.classList.add("btn-up_hide"), document.body.classList.add("no-scroll"), document.body.style.top = -n + "px";
    const r = e.target.closest(".books__item-link").getAttribute("data-id");
    En.default.backdrop.classList.remove("backdrop--is-hidden"), En.default.backdrop.addEventListener("click", er), En.default.closeModalPopBtn.addEventListener("click", Zn), window.addEventListener("keydown", tr), async function (e) {
       En.default.modalPopEl.innerHTML = "";
       try {
          const n = await bn(e);
          Jn.default.save("active-book", n);
          const {
             book_image: r,
             title: o,
             author: i,
             description: s,
             buy_links: a
          } = n;
          En.default.descriptionBookEl.innerHTML = "" === s ? "there is no description of this book" : "";
          const u = Boolean(Jn.default.load("selected-books")?.find((t => t._id === n._id))),
             c = `\n      <div class="modal-info">\n        <img class="modal-info__image" src="${r}" alt="${o}" />\n        <div class="modal-info__box">\n          <h2 class="modal-info__title">${o}</h2>\n          <p class="modal-info__author">${i}</p>\n          <p class="modal-info__text">${s}</p>\n          <ul class="modal-info__list">\n            <li>\n              <a class="modal-info__link" href="${a[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img srcset="${t(Vn)} 1x, ${t(Gn)} 2x" src="${t(Vn)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="modal-info__link" href="${a[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img srcset="${t(Yn)} 1x, ${t(Kn)} 2x" src="${t(Yn)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="modal-info__link" href="${a[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img srcset="${t(Xn)} 1x, ${t(Qn)} 2x" src="${t(Xn)}" alt="bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <button class="modal-info__button" type="button">\n      ${u?"remove from the shopping list":"add to shopping list"}\n      </button>\n     `;
          En.default.modalPopEl.innerHTML = c;
          ! function (t) {
             for (let e = 0; e < t.length; e++) {
                t[e].addEventListener("click", (function (t) {
                   t.preventDefault(), window.open(this.href)
                }))
             }
          }(document.querySelectorAll(".modal-info__link"))
       } catch (e) {
          console.log(e), t(zn).Notify.failure(`Oops! Something went wrong. You caught the following error: ${e.message}.`)
       }
    }(r)
 })), window.onload = function () {
    const t = document.documentElement.scrollHeight;
    ({
       el: document.querySelector(".btn-up"),
       show() {
          this.el.classList.remove("btn-up_hide")
       },
       hide() {
          this.el.classList.add("btn-up_hide")
       },
       addEventListener() {
          window.addEventListener("scroll", (() => {
             (window.scrollY || document.documentElement.scrollTop) > .8 * t ? this.show() : this.hide()
          })), this.el.onclick = () => {
             window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
             })
          }
       }
    }).addEventListener()
 };
 Jn = o("4PVUM"), zn = o("7Y9D8"), En = o("krGWQ");
 const nr = Jn.default.load(En.default.SHOP_LIST_KEY);
 En.default.modalPopEl.addEventListener("click", (e => {
    e.preventDefault(), null === localStorage.getItem("user") ? e.target.classList.contains("modal-info__button") && (En.default.modalPopInfoEl.innerHTML = "PLEASE REGISTER TO ACCESS USER FEATURE", t(zn).Notify.warning("YOU ARE NOT REGISTERED")) : (e.target.classList.contains("modal-info__button") && function () {
       const e = Jn.default.load("active-book"),
          n = En.default.modalPopEl.querySelector(".modal-info__button");
       if (nr.find((t => t._id === e._id))) {
          const r = nr.findIndex((t => t._id === e._id));
          return nr.splice(r, 1), Jn.default.save(En.default.SHOP_LIST_KEY, nr), t(zn).Notify.warning("This book was removed from your Shopping list!"), void(n.textContent = "add to shopping list")
       }
       nr.push(e), Jn.default.save("selected-books", nr), t(zn).Notify.success("This book was added to your Shopping list!"), n.textContent = "remove from the shopping list"
    }(), "remove from the shopping list" === e.target.textContent && (En.default.modalPopInfoEl.innerHTML = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list.'), "add to shopping list" === e.target.textContent && (En.default.modalPopInfoEl.innerHTML = ""))
 })), o("4PVUM"), o("ghT7p"), o("7tzR7"), o("gjiCh"), o("2ix2C"), o("eXTIV"), o("dmQj5"), o("bWWMl"), o("ayyEt");
 //# sourceMappingURL=index.9892b547.js.map