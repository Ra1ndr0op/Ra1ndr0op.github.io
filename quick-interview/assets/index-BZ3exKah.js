const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UploadPage-BxVKRDQ1.js","assets/ui-vendor-Icq6OStM.js","assets/react-vendor-C54eoJNz.js","assets/batchUpload-BL7JRNxx.js","assets/knowledgebase-BzUHXAZF.js","assets/syntax-highlighter-aNFqcRiR.js","assets/HistoryPage-VlG5oHiR.js","assets/DeleteConfirmDialog-BjfJUZ2-.js","assets/ConfirmDialog-CZ5WuzmS.js","assets/date-DBJmXC5z.js","assets/score-3bjDqiWg.js","assets/ResumeDetailPage-B6mSp8Jw.js","assets/LineChart-U85PVO6f.js","assets/InterviewDetailPanel-CKCDvXL0.js","assets/InterviewPage-cQOrpe0H.js","assets/interview-B-X3T17C.js","assets/index-Brj8k8ut.js","assets/InterviewPageHeader-DRXUWfBc.js","assets/InterviewHistoryPage-BB08Xh3c.js","assets/voiceInterview-CdfvuQ4l.js","assets/voiceEvaluationStatus-B6NgctRI.js","assets/voiceInterview-B6Enqy4T.js","assets/KnowledgeBaseQueryPage-C01FnZK2.js","assets/interviewTarget-DknyWtnh.js","assets/KnowledgeBaseUploadPage-BoUCJbwy.js","assets/KnowledgeBaseManagePage-kIOcflE7.js","assets/KnowledgeBaseInterviewLandingPage-PvpWuGs1.js","assets/questionGenerationStatus-B5zRwPEQ.js","assets/KnowledgeBaseInterviewQuestionsPage-GQ0Eh4eR.js","assets/KnowledgeBaseInterviewSessionPage-CZyh-NPD.js","assets/VoiceInterviewPage-CFClswAb.js","assets/VoiceInterviewEvaluationPage-Cyy6L2ZA.js","assets/InterviewSchedulePage-dH4qGyTb.js","assets/InterviewSchedulePage-EFYCALuo.css","assets/InterviewHubPage-gDRllFP5.js","assets/InterviewTargetPage-Bk5ccwFC.js","assets/SettingsPage-DLyEcEWj.js","assets/CommercialLandingPage-CJvRJYR6.js","assets/CommercialLandingPage-DPHlYYEk.css"])))=>i.map(i=>d[i]);
import { j as a, A as Ie, m as Q, S as et, X as tr, F as rr, M as sr, L as Be, C as nr, a as ar, b as ir, c as or, d as lr, R as cr, e as dr, G as ur, f as fr, g as mr, D as hr, h as pr, i as xr, k as tt, l as gr } from "./ui-vendor-Icq6OStM.js";
import { a as br, r as b, R as X, u as Ve, b as U, L as Pe, O as yr, B as wr, c as vr, d as k, e as de, f as Rt, N as We, __tla as __tla_0 } from "./react-vendor-C54eoJNz.js";
import { _ as E } from "./syntax-highlighter-aNFqcRiR.js";
let Ys, He, jn, _, Ra, qe, Na, Ze, Qt, D, wt, Rn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
    new MutationObserver((n) => {
      for (const i of n) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(n) {
      const i = {};
      return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function s(n) {
      if (n.ep) return;
      n.ep = true;
      const i = r(n);
      fetch(n.href, i);
    }
  })();
  var Me = {}, rt = br;
  Me.createRoot = rt.createRoot, Me.hydrateRoot = rt.hydrateRoot;
  function kr() {
    const [e, t] = b.useState(() => {
      const s = localStorage.getItem("theme");
      return s || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });
    return b.useEffect(() => {
      const s = document.documentElement;
      e === "dark" ? s.classList.add("dark") : s.classList.remove("dark"), localStorage.setItem("theme", e);
    }, [
      e
    ]), {
      theme: e,
      toggleTheme: () => {
        t((s) => s === "light" ? "dark" : "light");
      }
    };
  }
  function Nt(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  const { toString: jr } = Object.prototype, { getPrototypeOf: Je } = Object, { iterator: Ee, toStringTag: Ct } = Symbol, Re = /* @__PURE__ */ ((e) => (t) => {
    const r = jr.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), F = (e) => (e = e.toLowerCase(), (t) => Re(t) === e), Ne = (e) => (t) => typeof t === e, { isArray: se } = Array, re = Ne("undefined");
  function ue(e) {
    return e !== null && !re(e) && e.constructor !== null && !re(e.constructor) && I(e.constructor.isBuffer) && e.constructor.isBuffer(e);
  }
  const Ot = F("ArrayBuffer");
  function Sr(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ot(e.buffer), t;
  }
  const Er = Ne("string"), I = Ne("function"), Tt = Ne("number"), fe = (e) => e !== null && typeof e == "object", Rr = (e) => e === true || e === false, ye = (e) => {
    if (Re(e) !== "object") return false;
    const t = Je(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ct in e) && !(Ee in e);
  }, Nr = (e) => {
    if (!fe(e) || ue(e)) return false;
    try {
      return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    } catch {
      return false;
    }
  }, Cr = F("Date"), Or = F("File"), Tr = F("Blob"), _r = F("FileList"), Ir = (e) => fe(e) && I(e.pipe), Pr = (e) => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || I(e.append) && ((t = Re(e)) === "formdata" || t === "object" && I(e.toString) && e.toString() === "[object FormData]"));
  }, Ar = F("URLSearchParams"), [Lr, Dr, Br, Mr] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
  ].map(F), Ur = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function me(e, t, { allOwnKeys: r = false } = {}) {
    if (e === null || typeof e > "u") return;
    let s, n;
    if (typeof e != "object" && (e = [
      e
    ]), se(e)) for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
    else {
      if (ue(e)) return;
      const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
      let u;
      for (s = 0; s < o; s++) u = i[s], t.call(null, e[u], u, e);
    }
  }
  function _t(e, t) {
    if (ue(e)) return null;
    t = t.toLowerCase();
    const r = Object.keys(e);
    let s = r.length, n;
    for (; s-- > 0; ) if (n = r[s], t === n.toLowerCase()) return n;
    return null;
  }
  const Z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, It = (e) => !re(e) && e !== Z;
  function Ue() {
    const { caseless: e, skipUndefined: t } = It(this) && this || {}, r = {}, s = (n, i) => {
      const o = e && _t(r, i) || i;
      ye(r[o]) && ye(n) ? r[o] = Ue(r[o], n) : ye(n) ? r[o] = Ue({}, n) : se(n) ? r[o] = n.slice() : (!t || !re(n)) && (r[o] = n);
    };
    for (let n = 0, i = arguments.length; n < i; n++) arguments[n] && me(arguments[n], s);
    return r;
  }
  const Fr = (e, t, r, { allOwnKeys: s } = {}) => (me(t, (n, i) => {
    r && I(n) ? e[i] = Nt(n, r) : e[i] = n;
  }, {
    allOwnKeys: s
  }), e), zr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $r = (e, t, r, s) => {
    e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
      value: t.prototype
    }), r && Object.assign(e.prototype, r);
  }, qr = (e, t, r, s) => {
    let n, i, o;
    const u = {};
    if (t = t || {}, e == null) return t;
    do {
      for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; ) o = n[i], (!s || s(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = true);
      e = r !== false && Je(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  }, Hr = (e, t, r) => {
    e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
    const s = e.indexOf(t, r);
    return s !== -1 && s === r;
  }, Vr = (e) => {
    if (!e) return null;
    if (se(e)) return e;
    let t = e.length;
    if (!Tt(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  }, Wr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Je(Uint8Array)), Jr = (e, t) => {
    const s = (e && e[Ee]).call(e);
    let n;
    for (; (n = s.next()) && !n.done; ) {
      const i = n.value;
      t.call(e, i[0], i[1]);
    }
  }, Kr = (e, t) => {
    let r;
    const s = [];
    for (; (r = e.exec(t)) !== null; ) s.push(r);
    return s;
  }, Xr = F("HTMLFormElement"), Gr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, s, n) {
    return s.toUpperCase() + n;
  }), st = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Qr = F("RegExp"), Pt = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e), s = {};
    me(r, (n, i) => {
      let o;
      (o = t(n, i, e)) !== false && (s[i] = o || n);
    }), Object.defineProperties(e, s);
  }, Zr = (e) => {
    Pt(e, (t, r) => {
      if (I(e) && [
        "arguments",
        "caller",
        "callee"
      ].indexOf(r) !== -1) return false;
      const s = e[r];
      if (I(s)) {
        if (t.enumerable = false, "writable" in t) {
          t.writable = false;
          return;
        }
        t.set || (t.set = () => {
          throw Error("Can not rewrite read-only method '" + r + "'");
        });
      }
    });
  }, Yr = (e, t) => {
    const r = {}, s = (n) => {
      n.forEach((i) => {
        r[i] = true;
      });
    };
    return se(e) ? s(e) : s(String(e).split(t)), r;
  }, es = () => {
  }, ts = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
  function rs(e) {
    return !!(e && I(e.append) && e[Ct] === "FormData" && e[Ee]);
  }
  const ss = (e) => {
    const t = new Array(10), r = (s, n) => {
      if (fe(s)) {
        if (t.indexOf(s) >= 0) return;
        if (ue(s)) return s;
        if (!("toJSON" in s)) {
          t[n] = s;
          const i = se(s) ? [] : {};
          return me(s, (o, u) => {
            const h = r(o, n + 1);
            !re(h) && (i[u] = h);
          }), t[n] = void 0, i;
        }
      }
      return s;
    };
    return r(e, 0);
  }, ns = F("AsyncFunction"), as = (e) => e && (fe(e) || I(e)) && I(e.then) && I(e.catch), At = ((e, t) => e ? setImmediate : t ? ((r, s) => (Z.addEventListener("message", ({ source: n, data: i }) => {
    n === Z && i === r && s.length && s.shift()();
  }, false), (n) => {
    s.push(n), Z.postMessage(r, "*");
  }))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", I(Z.postMessage)), is = typeof queueMicrotask < "u" ? queueMicrotask.bind(Z) : typeof process < "u" && process.nextTick || At, os = (e) => e != null && I(e[Ee]), c = {
    isArray: se,
    isArrayBuffer: Ot,
    isBuffer: ue,
    isFormData: Pr,
    isArrayBufferView: Sr,
    isString: Er,
    isNumber: Tt,
    isBoolean: Rr,
    isObject: fe,
    isPlainObject: ye,
    isEmptyObject: Nr,
    isReadableStream: Lr,
    isRequest: Dr,
    isResponse: Br,
    isHeaders: Mr,
    isUndefined: re,
    isDate: Cr,
    isFile: Or,
    isBlob: Tr,
    isRegExp: Qr,
    isFunction: I,
    isStream: Ir,
    isURLSearchParams: Ar,
    isTypedArray: Wr,
    isFileList: _r,
    forEach: me,
    merge: Ue,
    extend: Fr,
    trim: Ur,
    stripBOM: zr,
    inherits: $r,
    toFlatObject: qr,
    kindOf: Re,
    kindOfTest: F,
    endsWith: Hr,
    toArray: Vr,
    forEachEntry: Jr,
    matchAll: Kr,
    isHTMLForm: Xr,
    hasOwnProperty: st,
    hasOwnProp: st,
    reduceDescriptors: Pt,
    freezeMethods: Zr,
    toObjectSet: Yr,
    toCamelCase: Gr,
    noop: es,
    toFiniteNumber: ts,
    findKey: _t,
    global: Z,
    isContextDefined: It,
    isSpecCompliantForm: rs,
    toJSONObject: ss,
    isAsyncFn: ns,
    isThenable: as,
    setImmediate: At,
    asap: is,
    isIterable: os
  };
  function y(e, t, r, s, n) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n, this.status = n.status ? n.status : null);
  }
  c.inherits(y, Error, {
    toJSON: function() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: c.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const Lt = y.prototype, Dt = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
  ].forEach((e) => {
    Dt[e] = {
      value: e
    };
  });
  Object.defineProperties(y, Dt);
  Object.defineProperty(Lt, "isAxiosError", {
    value: true
  });
  y.from = (e, t, r, s, n, i) => {
    const o = Object.create(Lt);
    c.toFlatObject(e, o, function(f) {
      return f !== Error.prototype;
    }, (l) => l !== "isAxiosError");
    const u = e && e.message ? e.message : "Error", h = t == null && e ? e.code : t;
    return y.call(o, u, h, r, s, n), e && o.cause == null && Object.defineProperty(o, "cause", {
      value: e,
      configurable: true
    }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
  };
  const ls = null;
  function Fe(e) {
    return c.isPlainObject(e) || c.isArray(e);
  }
  function Bt(e) {
    return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function nt(e, t, r) {
    return e ? e.concat(t).map(function(n, i) {
      return n = Bt(n), !r && i ? "[" + n + "]" : n;
    }).join(r ? "." : "") : t;
  }
  function cs(e) {
    return c.isArray(e) && !e.some(Fe);
  }
  const ds = c.toFlatObject(c, {}, null, function(t) {
    return /^is[A-Z]/.test(t);
  });
  function Ce(e, t, r) {
    if (!c.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData(), r = c.toFlatObject(r, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function(g, p) {
      return !c.isUndefined(p[g]);
    });
    const s = r.metaTokens, n = r.visitor || f, i = r.dots, o = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
    if (!c.isFunction(n)) throw new TypeError("visitor must be a function");
    function l(m) {
      if (m === null) return "";
      if (c.isDate(m)) return m.toISOString();
      if (c.isBoolean(m)) return m.toString();
      if (!h && c.isBlob(m)) throw new y("Blob is not supported. Use a Buffer instead.");
      return c.isArrayBuffer(m) || c.isTypedArray(m) ? h && typeof Blob == "function" ? new Blob([
        m
      ]) : Buffer.from(m) : m;
    }
    function f(m, g, p) {
      let v = m;
      if (m && !p && typeof m == "object") {
        if (c.endsWith(g, "{}")) g = s ? g : g.slice(0, -2), m = JSON.stringify(m);
        else if (c.isArray(m) && cs(m) || (c.isFileList(m) || c.endsWith(g, "[]")) && (v = c.toArray(m))) return g = Bt(g), v.forEach(function(S, N) {
          !(c.isUndefined(S) || S === null) && t.append(o === true ? nt([
            g
          ], N, i) : o === null ? g : g + "[]", l(S));
        }), false;
      }
      return Fe(m) ? true : (t.append(nt(p, g, i), l(m)), false);
    }
    const d = [], x = Object.assign(ds, {
      defaultVisitor: f,
      convertValue: l,
      isVisitable: Fe
    });
    function w(m, g) {
      if (!c.isUndefined(m)) {
        if (d.indexOf(m) !== -1) throw Error("Circular reference detected in " + g.join("."));
        d.push(m), c.forEach(m, function(v, O) {
          (!(c.isUndefined(v) || v === null) && n.call(t, v, c.isString(O) ? O.trim() : O, g, x)) === true && w(v, g ? g.concat(O) : [
            O
          ]);
        }), d.pop();
      }
    }
    if (!c.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t;
  }
  function at(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
      return t[s];
    });
  }
  function Ke(e, t) {
    this._pairs = [], e && Ce(e, this, t);
  }
  const Mt = Ke.prototype;
  Mt.append = function(t, r) {
    this._pairs.push([
      t,
      r
    ]);
  };
  Mt.toString = function(t) {
    const r = t ? function(s) {
      return t.call(this, s, at);
    } : at;
    return this._pairs.map(function(n) {
      return r(n[0]) + "=" + r(n[1]);
    }, "").join("&");
  };
  function us(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function Ut(e, t, r) {
    if (!t) return e;
    const s = r && r.encode || us;
    c.isFunction(r) && (r = {
      serialize: r
    });
    const n = r && r.serialize;
    let i;
    if (n ? i = n(t, r) : i = c.isURLSearchParams(t) ? t.toString() : new Ke(t, r).toString(s), i) {
      const o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
    }
    return e;
  }
  class it {
    constructor() {
      this.handlers = [];
    }
    use(t, r, s) {
      return this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : false,
        runWhen: s ? s.runWhen : null
      }), this.handlers.length - 1;
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      c.forEach(this.handlers, function(s) {
        s !== null && t(s);
      });
    }
  }
  const Ft = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  }, fs = typeof URLSearchParams < "u" ? URLSearchParams : Ke, ms = typeof FormData < "u" ? FormData : null, hs = typeof Blob < "u" ? Blob : null, ps = {
    isBrowser: true,
    classes: {
      URLSearchParams: fs,
      FormData: ms,
      Blob: hs
    },
    protocols: [
      "http",
      "https",
      "file",
      "blob",
      "url",
      "data"
    ]
  }, Xe = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, xs = Xe && (!ze || [
    "ReactNative",
    "NativeScript",
    "NS"
  ].indexOf(ze.product) < 0), gs = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", bs = Xe && window.location.href || "http://localhost", ys = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Xe,
    hasStandardBrowserEnv: xs,
    hasStandardBrowserWebWorkerEnv: gs,
    navigator: ze,
    origin: bs
  }, Symbol.toStringTag, {
    value: "Module"
  })), C = {
    ...ys,
    ...ps
  };
  function ws(e, t) {
    return Ce(e, new C.classes.URLSearchParams(), {
      visitor: function(r, s, n, i) {
        return C.isNode && c.isBuffer(r) ? (this.append(s, r.toString("base64")), false) : i.defaultVisitor.apply(this, arguments);
      },
      ...t
    });
  }
  function vs(e) {
    return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
  }
  function ks(e) {
    const t = {}, r = Object.keys(e);
    let s;
    const n = r.length;
    let i;
    for (s = 0; s < n; s++) i = r[s], t[i] = e[i];
    return t;
  }
  function zt(e) {
    function t(r, s, n, i) {
      let o = r[i++];
      if (o === "__proto__") return true;
      const u = Number.isFinite(+o), h = i >= r.length;
      return o = !o && c.isArray(n) ? n.length : o, h ? (c.hasOwnProp(n, o) ? n[o] = [
        n[o],
        s
      ] : n[o] = s, !u) : ((!n[o] || !c.isObject(n[o])) && (n[o] = []), t(r, s, n[o], i) && c.isArray(n[o]) && (n[o] = ks(n[o])), !u);
    }
    if (c.isFormData(e) && c.isFunction(e.entries)) {
      const r = {};
      return c.forEachEntry(e, (s, n) => {
        t(vs(s), n, r, 0);
      }), r;
    }
    return null;
  }
  function js(e, t, r) {
    if (c.isString(e)) try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
    return (r || JSON.stringify)(e);
  }
  const he = {
    transitional: Ft,
    adapter: [
      "xhr",
      "http",
      "fetch"
    ],
    transformRequest: [
      function(t, r) {
        const s = r.getContentType() || "", n = s.indexOf("application/json") > -1, i = c.isObject(t);
        if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)) return n ? JSON.stringify(zt(t)) : t;
        if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t)) return t;
        if (c.isArrayBufferView(t)) return t.buffer;
        if (c.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
        let u;
        if (i) {
          if (s.indexOf("application/x-www-form-urlencoded") > -1) return ws(t, this.formSerializer).toString();
          if ((u = c.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
            const h = this.env && this.env.FormData;
            return Ce(u ? {
              "files[]": t
            } : t, h && new h(), this.formSerializer);
          }
        }
        return i || n ? (r.setContentType("application/json", false), js(t)) : t;
      }
    ],
    transformResponse: [
      function(t) {
        const r = this.transitional || he.transitional, s = r && r.forcedJSONParsing, n = this.responseType === "json";
        if (c.isResponse(t) || c.isReadableStream(t)) return t;
        if (t && c.isString(t) && (s && !this.responseType || n)) {
          const o = !(r && r.silentJSONParsing) && n;
          try {
            return JSON.parse(t, this.parseReviver);
          } catch (u) {
            if (o) throw u.name === "SyntaxError" ? y.from(u, y.ERR_BAD_RESPONSE, this, null, this.response) : u;
          }
        }
        return t;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: C.classes.FormData,
      Blob: C.classes.Blob
    },
    validateStatus: function(t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  c.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
  ], (e) => {
    he.headers[e] = {};
  });
  const Ss = c.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]), Es = (e) => {
    const t = {};
    let r, s, n;
    return e && e.split(`
`).forEach(function(o) {
      n = o.indexOf(":"), r = o.substring(0, n).trim().toLowerCase(), s = o.substring(n + 1).trim(), !(!r || t[r] && Ss[r]) && (r === "set-cookie" ? t[r] ? t[r].push(s) : t[r] = [
        s
      ] : t[r] = t[r] ? t[r] + ", " + s : s);
    }), t;
  }, ot = Symbol("internals");
  function ce(e) {
    return e && String(e).trim().toLowerCase();
  }
  function we(e) {
    return e === false || e == null ? e : c.isArray(e) ? e.map(we) : String(e);
  }
  function Rs(e) {
    const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = r.exec(e); ) t[s[1]] = s[2];
    return t;
  }
  const Ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function Ae(e, t, r, s, n) {
    if (c.isFunction(s)) return s.call(this, t, r);
    if (n && (t = r), !!c.isString(t)) {
      if (c.isString(s)) return t.indexOf(s) !== -1;
      if (c.isRegExp(s)) return s.test(t);
    }
  }
  function Cs(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
  }
  function Os(e, t) {
    const r = c.toCamelCase(" " + t);
    [
      "get",
      "set",
      "has"
    ].forEach((s) => {
      Object.defineProperty(e, s + r, {
        value: function(n, i, o) {
          return this[s].call(this, t, n, i, o);
        },
        configurable: true
      });
    });
  }
  let P = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, r, s) {
      const n = this;
      function i(u, h, l) {
        const f = ce(h);
        if (!f) throw new Error("header name must be a non-empty string");
        const d = c.findKey(n, f);
        (!d || n[d] === void 0 || l === true || l === void 0 && n[d] !== false) && (n[d || h] = we(u));
      }
      const o = (u, h) => c.forEach(u, (l, f) => i(l, f, h));
      if (c.isPlainObject(t) || t instanceof this.constructor) o(t, r);
      else if (c.isString(t) && (t = t.trim()) && !Ns(t)) o(Es(t), r);
      else if (c.isObject(t) && c.isIterable(t)) {
        let u = {}, h, l;
        for (const f of t) {
          if (!c.isArray(f)) throw TypeError("Object iterator must return a key-value pair");
          u[l = f[0]] = (h = u[l]) ? c.isArray(h) ? [
            ...h,
            f[1]
          ] : [
            h,
            f[1]
          ] : f[1];
        }
        o(u, r);
      } else t != null && i(r, t, s);
      return this;
    }
    get(t, r) {
      if (t = ce(t), t) {
        const s = c.findKey(this, t);
        if (s) {
          const n = this[s];
          if (!r) return n;
          if (r === true) return Rs(n);
          if (c.isFunction(r)) return r.call(this, n, s);
          if (c.isRegExp(r)) return r.exec(n);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, r) {
      if (t = ce(t), t) {
        const s = c.findKey(this, t);
        return !!(s && this[s] !== void 0 && (!r || Ae(this, this[s], s, r)));
      }
      return false;
    }
    delete(t, r) {
      const s = this;
      let n = false;
      function i(o) {
        if (o = ce(o), o) {
          const u = c.findKey(s, o);
          u && (!r || Ae(s, s[u], u, r)) && (delete s[u], n = true);
        }
      }
      return c.isArray(t) ? t.forEach(i) : i(t), n;
    }
    clear(t) {
      const r = Object.keys(this);
      let s = r.length, n = false;
      for (; s--; ) {
        const i = r[s];
        (!t || Ae(this, this[i], i, t, true)) && (delete this[i], n = true);
      }
      return n;
    }
    normalize(t) {
      const r = this, s = {};
      return c.forEach(this, (n, i) => {
        const o = c.findKey(s, i);
        if (o) {
          r[o] = we(n), delete r[i];
          return;
        }
        const u = t ? Cs(i) : String(i).trim();
        u !== i && delete r[i], r[u] = we(n), s[u] = true;
      }), this;
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const r = /* @__PURE__ */ Object.create(null);
      return c.forEach(this, (s, n) => {
        s != null && s !== false && (r[n] = t && c.isArray(s) ? s.join(", ") : s);
      }), r;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...r) {
      const s = new this(t);
      return r.forEach((n) => s.set(n)), s;
    }
    static accessor(t) {
      const s = (this[ot] = this[ot] = {
        accessors: {}
      }).accessors, n = this.prototype;
      function i(o) {
        const u = ce(o);
        s[u] || (Os(n, o), s[u] = true);
      }
      return c.isArray(t) ? t.forEach(i) : i(t), this;
    }
  };
  P.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]);
  c.reduceDescriptors(P.prototype, ({ value: e }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(s) {
        this[r] = s;
      }
    };
  });
  c.freezeMethods(P);
  function Le(e, t) {
    const r = this || he, s = t || r, n = P.from(s.headers);
    let i = s.data;
    return c.forEach(e, function(u) {
      i = u.call(r, i, n.normalize(), t ? t.status : void 0);
    }), n.normalize(), i;
  }
  function $t(e) {
    return !!(e && e.__CANCEL__);
  }
  function ne(e, t, r) {
    y.call(this, e ?? "canceled", y.ERR_CANCELED, t, r), this.name = "CanceledError";
  }
  c.inherits(ne, y, {
    __CANCEL__: true
  });
  function qt(e, t, r) {
    const s = r.config.validateStatus;
    !r.status || !s || s(r.status) ? e(r) : t(new y("Request failed with status code " + r.status, [
      y.ERR_BAD_REQUEST,
      y.ERR_BAD_RESPONSE
    ][Math.floor(r.status / 100) - 4], r.config, r.request, r));
  }
  function Ts(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
  }
  function _s(e, t) {
    e = e || 10;
    const r = new Array(e), s = new Array(e);
    let n = 0, i = 0, o;
    return t = t !== void 0 ? t : 1e3, function(h) {
      const l = Date.now(), f = s[i];
      o || (o = l), r[n] = h, s[n] = l;
      let d = i, x = 0;
      for (; d !== n; ) x += r[d++], d = d % e;
      if (n = (n + 1) % e, n === i && (i = (i + 1) % e), l - o < t) return;
      const w = f && l - f;
      return w ? Math.round(x * 1e3 / w) : void 0;
    };
  }
  function Is(e, t) {
    let r = 0, s = 1e3 / t, n, i;
    const o = (l, f = Date.now()) => {
      r = f, n = null, i && (clearTimeout(i), i = null), e(...l);
    };
    return [
      (...l) => {
        const f = Date.now(), d = f - r;
        d >= s ? o(l, f) : (n = l, i || (i = setTimeout(() => {
          i = null, o(n);
        }, s - d)));
      },
      () => n && o(n)
    ];
  }
  const ke = (e, t, r = 3) => {
    let s = 0;
    const n = _s(50, 250);
    return Is((i) => {
      const o = i.loaded, u = i.lengthComputable ? i.total : void 0, h = o - s, l = n(h), f = o <= u;
      s = o;
      const d = {
        loaded: o,
        total: u,
        progress: u ? o / u : void 0,
        bytes: h,
        rate: l || void 0,
        estimated: l && u && f ? (u - o) / l : void 0,
        event: i,
        lengthComputable: u != null,
        [t ? "download" : "upload"]: true
      };
      e(d);
    }, r);
  }, lt = (e, t) => {
    const r = e != null;
    return [
      (s) => t[0]({
        lengthComputable: r,
        total: e,
        loaded: s
      }),
      t[1]
    ];
  }, ct = (e) => (...t) => c.asap(() => e(...t)), Ps = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, C.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(C.origin), C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)) : () => true, As = C.hasStandardBrowserEnv ? {
    write(e, t, r, s, n, i, o) {
      if (typeof document > "u") return;
      const u = [
        `${e}=${encodeURIComponent(t)}`
      ];
      c.isNumber(r) && u.push(`expires=${new Date(r).toUTCString()}`), c.isString(s) && u.push(`path=${s}`), c.isString(n) && u.push(`domain=${n}`), i === true && u.push("secure"), c.isString(o) && u.push(`SameSite=${o}`), document.cookie = u.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  } : {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  };
  function Ls(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function Ds(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Ht(e, t, r) {
    let s = !Ls(t);
    return e && (s || r == false) ? Ds(e, t) : t;
  }
  const dt = (e) => e instanceof P ? {
    ...e
  } : e;
  function ee(e, t) {
    t = t || {};
    const r = {};
    function s(l, f, d, x) {
      return c.isPlainObject(l) && c.isPlainObject(f) ? c.merge.call({
        caseless: x
      }, l, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
    }
    function n(l, f, d, x) {
      if (c.isUndefined(f)) {
        if (!c.isUndefined(l)) return s(void 0, l, d, x);
      } else return s(l, f, d, x);
    }
    function i(l, f) {
      if (!c.isUndefined(f)) return s(void 0, f);
    }
    function o(l, f) {
      if (c.isUndefined(f)) {
        if (!c.isUndefined(l)) return s(void 0, l);
      } else return s(void 0, f);
    }
    function u(l, f, d) {
      if (d in t) return s(l, f);
      if (d in e) return s(void 0, l);
    }
    const h = {
      url: i,
      method: i,
      data: i,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: u,
      headers: (l, f, d) => n(dt(l), dt(f), d, true)
    };
    return c.forEach(Object.keys({
      ...e,
      ...t
    }), function(f) {
      const d = h[f] || n, x = d(e[f], t[f], f);
      c.isUndefined(x) && d !== u || (r[f] = x);
    }), r;
  }
  const Vt = (e) => {
    const t = ee({}, e);
    let { data: r, withXSRFToken: s, xsrfHeaderName: n, xsrfCookieName: i, headers: o, auth: u } = t;
    if (t.headers = o = P.from(o), t.url = Ut(Ht(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), u && o.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))), c.isFormData(r)) {
      if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
      else if (c.isFunction(r.getHeaders)) {
        const h = r.getHeaders(), l = [
          "content-type",
          "content-length"
        ];
        Object.entries(h).forEach(([f, d]) => {
          l.includes(f.toLowerCase()) && o.set(f, d);
        });
      }
    }
    if (C.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(t)), s || s !== false && Ps(t.url))) {
      const h = n && i && As.read(i);
      h && o.set(n, h);
    }
    return t;
  }, Bs = typeof XMLHttpRequest < "u", Ms = Bs && function(e) {
    return new Promise(function(r, s) {
      const n = Vt(e);
      let i = n.data;
      const o = P.from(n.headers).normalize();
      let { responseType: u, onUploadProgress: h, onDownloadProgress: l } = n, f, d, x, w, m;
      function g() {
        w && w(), m && m(), n.cancelToken && n.cancelToken.unsubscribe(f), n.signal && n.signal.removeEventListener("abort", f);
      }
      let p = new XMLHttpRequest();
      p.open(n.method.toUpperCase(), n.url, true), p.timeout = n.timeout;
      function v() {
        if (!p) return;
        const S = P.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()), A = {
          data: !u || u === "text" || u === "json" ? p.responseText : p.response,
          status: p.status,
          statusText: p.statusText,
          headers: S,
          config: e,
          request: p
        };
        qt(function(T) {
          r(T), g();
        }, function(T) {
          s(T), g();
        }, A), p = null;
      }
      "onloadend" in p ? p.onloadend = v : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(v);
      }, p.onabort = function() {
        p && (s(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
      }, p.onerror = function(N) {
        const A = N && N.message ? N.message : "Network Error", H = new y(A, y.ERR_NETWORK, e, p);
        H.event = N || null, s(H), p = null;
      }, p.ontimeout = function() {
        let N = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
        const A = n.transitional || Ft;
        n.timeoutErrorMessage && (N = n.timeoutErrorMessage), s(new y(N, A.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, e, p)), p = null;
      }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && c.forEach(o.toJSON(), function(N, A) {
        p.setRequestHeader(A, N);
      }), c.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), u && u !== "json" && (p.responseType = n.responseType), l && ([x, m] = ke(l, true), p.addEventListener("progress", x)), h && p.upload && ([d, w] = ke(h), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", w)), (n.cancelToken || n.signal) && (f = (S) => {
        p && (s(!S || S.type ? new ne(null, e, p) : S), p.abort(), p = null);
      }, n.cancelToken && n.cancelToken.subscribe(f), n.signal && (n.signal.aborted ? f() : n.signal.addEventListener("abort", f)));
      const O = Ts(n.url);
      if (O && C.protocols.indexOf(O) === -1) {
        s(new y("Unsupported protocol " + O + ":", y.ERR_BAD_REQUEST, e));
        return;
      }
      p.send(i || null);
    });
  }, Us = (e, t) => {
    const { length: r } = e = e ? e.filter(Boolean) : [];
    if (t || r) {
      let s = new AbortController(), n;
      const i = function(l) {
        if (!n) {
          n = true, u();
          const f = l instanceof Error ? l : this.reason;
          s.abort(f instanceof y ? f : new ne(f instanceof Error ? f.message : f));
        }
      };
      let o = t && setTimeout(() => {
        o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
      }, t);
      const u = () => {
        e && (o && clearTimeout(o), o = null, e.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
        }), e = null);
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: h } = s;
      return h.unsubscribe = () => c.asap(u), h;
    }
  }, Fs = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let s = 0, n;
    for (; s < r; ) n = s + t, yield e.slice(s, n), s = n;
  }, zs = async function* (e, t) {
    for await (const r of $s(e)) yield* Fs(r, t);
  }, $s = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: r, value: s } = await t.read();
        if (r) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  }, ut = (e, t, r, s) => {
    const n = zs(e, t);
    let i = 0, o, u = (h) => {
      o || (o = true, s && s(h));
    };
    return new ReadableStream({
      async pull(h) {
        try {
          const { done: l, value: f } = await n.next();
          if (l) {
            u(), h.close();
            return;
          }
          let d = f.byteLength;
          if (r) {
            let x = i += d;
            r(x);
          }
          h.enqueue(new Uint8Array(f));
        } catch (l) {
          throw u(l), l;
        }
      },
      cancel(h) {
        return u(h), n.return();
      }
    }, {
      highWaterMark: 2
    });
  }, ft = 64 * 1024, { isFunction: ge } = c, qs = (({ Request: e, Response: t }) => ({
    Request: e,
    Response: t
  }))(c.global), { ReadableStream: mt, TextEncoder: ht } = c.global, pt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return false;
    }
  }, Hs = (e) => {
    e = c.merge.call({
      skipUndefined: true
    }, qs, e);
    const { fetch: t, Request: r, Response: s } = e, n = t ? ge(t) : typeof fetch == "function", i = ge(r), o = ge(s);
    if (!n) return false;
    const u = n && ge(mt), h = n && (typeof ht == "function" ? /* @__PURE__ */ ((m) => (g) => m.encode(g))(new ht()) : async (m) => new Uint8Array(await new r(m).arrayBuffer())), l = i && u && pt(() => {
      let m = false;
      const g = new r(C.origin, {
        body: new mt(),
        method: "POST",
        get duplex() {
          return m = true, "half";
        }
      }).headers.has("Content-Type");
      return m && !g;
    }), f = o && u && pt(() => c.isReadableStream(new s("").body)), d = {
      stream: f && ((m) => m.body)
    };
    n && [
      "text",
      "arrayBuffer",
      "blob",
      "formData",
      "stream"
    ].forEach((m) => {
      !d[m] && (d[m] = (g, p) => {
        let v = g && g[m];
        if (v) return v.call(g);
        throw new y(`Response type '${m}' is not supported`, y.ERR_NOT_SUPPORT, p);
      });
    });
    const x = async (m) => {
      if (m == null) return 0;
      if (c.isBlob(m)) return m.size;
      if (c.isSpecCompliantForm(m)) return (await new r(C.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
      if (c.isArrayBufferView(m) || c.isArrayBuffer(m)) return m.byteLength;
      if (c.isURLSearchParams(m) && (m = m + ""), c.isString(m)) return (await h(m)).byteLength;
    }, w = async (m, g) => {
      const p = c.toFiniteNumber(m.getContentLength());
      return p ?? x(g);
    };
    return async (m) => {
      let { url: g, method: p, data: v, signal: O, cancelToken: S, timeout: N, onDownloadProgress: A, onUploadProgress: H, responseType: T, headers: ae, withCredentials: te = "same-origin", fetchOptions: V } = Vt(m), pe = t || fetch;
      T = T ? (T + "").toLowerCase() : "text";
      let K = Us([
        O,
        S && S.toAbortSignal()
      ], N), G = null;
      const z = K && K.unsubscribe && (() => {
        K.unsubscribe();
      });
      let xe;
      try {
        if (H && l && p !== "get" && p !== "head" && (xe = await w(ae, v)) !== 0) {
          let M = new r(g, {
            method: "POST",
            body: v,
            duplex: "half"
          }), W;
          if (c.isFormData(v) && (W = M.headers.get("content-type")) && ae.setContentType(W), M.body) {
            const [le, R] = lt(xe, ke(ct(H)));
            v = ut(M.body, ft, le, R);
          }
        }
        c.isString(te) || (te = te ? "include" : "omit");
        const L = i && "credentials" in r.prototype, ie = {
          ...V,
          signal: K,
          method: p.toUpperCase(),
          headers: ae.normalize().toJSON(),
          body: v,
          duplex: "half",
          credentials: L ? te : void 0
        };
        G = i && new r(g, ie);
        let B = await (i ? pe(G, V) : pe(g, ie));
        const oe = f && (T === "stream" || T === "response");
        if (f && (A || oe && z)) {
          const M = {};
          [
            "status",
            "statusText",
            "headers"
          ].forEach((Ye) => {
            M[Ye] = B[Ye];
          });
          const W = c.toFiniteNumber(B.headers.get("content-length")), [le, R] = A && lt(W, ke(ct(A), true)) || [];
          B = new s(ut(B.body, ft, le, () => {
            R && R(), z && z();
          }), M);
        }
        T = T || "text";
        let _e = await d[c.findKey(d, T) || "text"](B, m);
        return !oe && z && z(), await new Promise((M, W) => {
          qt(M, W, {
            data: _e,
            headers: P.from(B.headers),
            status: B.status,
            statusText: B.statusText,
            config: m,
            request: G
          });
        });
      } catch (L) {
        throw z && z(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(new y("Network Error", y.ERR_NETWORK, m, G), {
          cause: L.cause || L
        }) : y.from(L, L && L.code, m, G);
      }
    };
  }, Vs = /* @__PURE__ */ new Map(), Wt = (e) => {
    let t = e && e.env || {};
    const { fetch: r, Request: s, Response: n } = t, i = [
      s,
      n,
      r
    ];
    let o = i.length, u = o, h, l, f = Vs;
    for (; u--; ) h = i[u], l = f.get(h), l === void 0 && f.set(h, l = u ? /* @__PURE__ */ new Map() : Hs(t)), f = l;
    return l;
  };
  Wt();
  const Ge = {
    http: ls,
    xhr: Ms,
    fetch: {
      get: Wt
    }
  };
  c.forEach(Ge, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        });
      } catch {
      }
      Object.defineProperty(e, "adapterName", {
        value: t
      });
    }
  });
  const xt = (e) => `- ${e}`, Ws = (e) => c.isFunction(e) || e === null || e === false;
  function Js(e, t) {
    e = c.isArray(e) ? e : [
      e
    ];
    const { length: r } = e;
    let s, n;
    const i = {};
    for (let o = 0; o < r; o++) {
      s = e[o];
      let u;
      if (n = s, !Ws(s) && (n = Ge[(u = String(s)).toLowerCase()], n === void 0)) throw new y(`Unknown adapter '${u}'`);
      if (n && (c.isFunction(n) || (n = n.get(t)))) break;
      i[u || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(i).map(([h, l]) => `adapter ${h} ` + (l === false ? "is not supported by the environment" : "is not available in the build"));
      let u = r ? o.length > 1 ? `since :
` + o.map(xt).join(`
`) : " " + xt(o[0]) : "as no adapter specified";
      throw new y("There is no suitable adapter to dispatch the request " + u, "ERR_NOT_SUPPORT");
    }
    return n;
  }
  const Jt = {
    getAdapter: Js,
    adapters: Ge
  };
  function De(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ne(null, e);
  }
  function gt(e) {
    return De(e), e.headers = P.from(e.headers), e.data = Le.call(e, e.transformRequest), [
      "post",
      "put",
      "patch"
    ].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", false), Jt.getAdapter(e.adapter || he.adapter, e)(e).then(function(s) {
      return De(e), s.data = Le.call(e, e.transformResponse, s), s.headers = P.from(s.headers), s;
    }, function(s) {
      return $t(s) || (De(e), s && s.response && (s.response.data = Le.call(e, e.transformResponse, s.response), s.response.headers = P.from(s.response.headers))), Promise.reject(s);
    });
  }
  const Kt = "1.13.2", Oe = {};
  [
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
  ].forEach((e, t) => {
    Oe[e] = function(s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  const bt = {};
  Oe.transitional = function(t, r, s) {
    function n(i, o) {
      return "[Axios v" + Kt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
    }
    return (i, o, u) => {
      if (t === false) throw new y(n(o, " has been removed" + (r ? " in " + r : "")), y.ERR_DEPRECATED);
      return r && !bt[o] && (bt[o] = true, console.warn(n(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(i, o, u) : true;
    };
  };
  Oe.spelling = function(t) {
    return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), true);
  };
  function Ks(e, t, r) {
    if (typeof e != "object") throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let n = s.length;
    for (; n-- > 0; ) {
      const i = s[n], o = t[i];
      if (o) {
        const u = e[i], h = u === void 0 || o(u, i, e);
        if (h !== true) throw new y("option " + i + " must be " + h, y.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (r !== true) throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
    }
  }
  const ve = {
    assertOptions: Ks,
    validators: Oe
  }, $ = ve.validators;
  let Y = class {
    constructor(t) {
      this.defaults = t || {}, this.interceptors = {
        request: new it(),
        response: new it()
      };
    }
    async request(t, r) {
      try {
        return await this._request(t, r);
      } catch (s) {
        if (s instanceof Error) {
          let n = {};
          Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
          const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
          try {
            s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
          } catch {
          }
        }
        throw s;
      }
    }
    _request(t, r) {
      typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ee(this.defaults, r);
      const { transitional: s, paramsSerializer: n, headers: i } = r;
      s !== void 0 && ve.assertOptions(s, {
        silentJSONParsing: $.transitional($.boolean),
        forcedJSONParsing: $.transitional($.boolean),
        clarifyTimeoutError: $.transitional($.boolean)
      }, false), n != null && (c.isFunction(n) ? r.paramsSerializer = {
        serialize: n
      } : ve.assertOptions(n, {
        encode: $.function,
        serialize: $.function
      }, true)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = true), ve.assertOptions(r, {
        baseUrl: $.spelling("baseURL"),
        withXsrfToken: $.spelling("withXSRFToken")
      }, true), r.method = (r.method || this.defaults.method || "get").toLowerCase();
      let o = i && c.merge(i.common, i[r.method]);
      i && c.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
      ], (m) => {
        delete i[m];
      }), r.headers = P.concat(o, i);
      const u = [];
      let h = true;
      this.interceptors.request.forEach(function(g) {
        typeof g.runWhen == "function" && g.runWhen(r) === false || (h = h && g.synchronous, u.unshift(g.fulfilled, g.rejected));
      });
      const l = [];
      this.interceptors.response.forEach(function(g) {
        l.push(g.fulfilled, g.rejected);
      });
      let f, d = 0, x;
      if (!h) {
        const m = [
          gt.bind(this),
          void 0
        ];
        for (m.unshift(...u), m.push(...l), x = m.length, f = Promise.resolve(r); d < x; ) f = f.then(m[d++], m[d++]);
        return f;
      }
      x = u.length;
      let w = r;
      for (; d < x; ) {
        const m = u[d++], g = u[d++];
        try {
          w = m(w);
        } catch (p) {
          g.call(this, p);
          break;
        }
      }
      try {
        f = gt.call(this, w);
      } catch (m) {
        return Promise.reject(m);
      }
      for (d = 0, x = l.length; d < x; ) f = f.then(l[d++], l[d++]);
      return f;
    }
    getUri(t) {
      t = ee(this.defaults, t);
      const r = Ht(t.baseURL, t.url, t.allowAbsoluteUrls);
      return Ut(r, t.params, t.paramsSerializer);
    }
  };
  c.forEach([
    "delete",
    "get",
    "head",
    "options"
  ], function(t) {
    Y.prototype[t] = function(r, s) {
      return this.request(ee(s || {}, {
        method: t,
        url: r,
        data: (s || {}).data
      }));
    };
  });
  c.forEach([
    "post",
    "put",
    "patch"
  ], function(t) {
    function r(s) {
      return function(i, o, u) {
        return this.request(ee(u || {}, {
          method: t,
          headers: s ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: o
        }));
      };
    }
    Y.prototype[t] = r(), Y.prototype[t + "Form"] = r(true);
  });
  let Xs = class Xt {
    constructor(t) {
      if (typeof t != "function") throw new TypeError("executor must be a function.");
      let r;
      this.promise = new Promise(function(i) {
        r = i;
      });
      const s = this;
      this.promise.then((n) => {
        if (!s._listeners) return;
        let i = s._listeners.length;
        for (; i-- > 0; ) s._listeners[i](n);
        s._listeners = null;
      }), this.promise.then = (n) => {
        let i;
        const o = new Promise((u) => {
          s.subscribe(u), i = u;
        }).then(n);
        return o.cancel = function() {
          s.unsubscribe(i);
        }, o;
      }, t(function(i, o, u) {
        s.reason || (s.reason = new ne(i, o, u), r(s.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : this._listeners = [
        t
      ];
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const r = this._listeners.indexOf(t);
      r !== -1 && this._listeners.splice(r, 1);
    }
    toAbortSignal() {
      const t = new AbortController(), r = (s) => {
        t.abort(s);
      };
      return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
    }
    static source() {
      let t;
      return {
        token: new Xt(function(n) {
          t = n;
        }),
        cancel: t
      };
    }
  };
  function Gs(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }
  function Qs(e) {
    return c.isObject(e) && e.isAxiosError === true;
  }
  const $e = {
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
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries($e).forEach(([e, t]) => {
    $e[t] = e;
  });
  function Gt(e) {
    const t = new Y(e), r = Nt(Y.prototype.request, t);
    return c.extend(r, Y.prototype, t, {
      allOwnKeys: true
    }), c.extend(r, t, null, {
      allOwnKeys: true
    }), r.create = function(n) {
      return Gt(ee(e, n));
    }, r;
  }
  const j = Gt(he);
  j.Axios = Y;
  j.CanceledError = ne;
  j.CancelToken = Xs;
  j.isCancel = $t;
  j.VERSION = Kt;
  j.toFormData = Ce;
  j.AxiosError = y;
  j.Cancel = j.CanceledError;
  j.all = function(t) {
    return Promise.all(t);
  };
  j.spread = Gs;
  j.isAxiosError = Qs;
  j.mergeConfig = ee;
  j.AxiosHeaders = P;
  j.formToJSON = (e) => zt(c.isHTMLForm(e) ? new FormData(e) : e);
  j.getAdapter = Jt.getAdapter;
  j.HttpStatusCode = $e;
  j.default = j;
  let da, ua, fa, ma, ha, pa, xa, ga, ba, ya, wa, va, ka, ja, Sa, Ea, Qe, Zs, J;
  ({ Axios: da, AxiosError: ua, CanceledError: fa, isCancel: ma, CancelToken: ha, VERSION: pa, all: xa, Cancel: ga, isAxiosError: ba, spread: ya, toFormData: wa, AxiosHeaders: va, HttpStatusCode: ka, formToJSON: ja, getAdapter: Sa, mergeConfig: Ea } = j);
  Qe = 200;
  Zs = 64 * 1024;
  Ys = "/quick-interview";
  J = j.create({
    baseURL: Ys,
    timeout: 6e4
  });
  function en(e) {
    return e !== null && typeof e == "object";
  }
  function Te(e) {
    return en(e) && typeof e.code == "number" && typeof e.message == "string";
  }
  Ra = function(e) {
    return !Te(e) || e.code === Qe ? null : new Error(e.message || "\u8BF7\u6C42\u5931\u8D25");
  };
  function yt(e) {
    const t = e.trim();
    if (!t.startsWith("{")) return null;
    try {
      const r = JSON.parse(t);
      return Te(r) ? r : null;
    } catch {
      return null;
    }
  }
  function tn(e) {
    const t = e.type.toLowerCase();
    return t.includes("json") || t.startsWith("text/") || e.size <= Zs;
  }
  Qt = async function(e) {
    return Te(e) ? e : e instanceof Blob && tn(e) ? yt(await e.text()) : typeof e == "string" ? yt(e) : null;
  };
  async function rn(e) {
    const t = await Qt(e);
    if (!t) return e;
    throw t.code !== Qe ? new Error(t.message || "\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25") : new Error(t.message && t.message !== "success" ? t.message : "\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25\uFF1A\u670D\u52A1\u7AEF\u672A\u8FD4\u56DE\u6587\u4EF6\u5185\u5BB9");
  }
  async function sn(e) {
    const t = await Qt(e);
    return t ? new Error(t.message || "\u8BF7\u6C42\u5931\u8D25") : null;
  }
  J.interceptors.response.use((e) => {
    if (e.config.skipResultTransform) return e;
    const t = e.data;
    return Te(t) ? t.code === Qe ? (e.data = t.data, e) : Promise.reject(new Error(t.message || "\u8BF7\u6C42\u5931\u8D25")) : e;
  }, async (e) => {
    var _a, _b, _c;
    if (e.response) {
      const { data: s, status: n } = e.response, i = await sn(s);
      if (i) return Promise.reject(i);
      const o = n === 403 ? "\u8BF7\u6C42\u88AB\u670D\u52A1\u7AEF\u62D2\u7EDD\uFF08403\uFF09\uFF0C\u8BF7\u68C0\u67E5\u8BBF\u95EE\u6743\u9650\u6216\u8DE8\u57DF\u914D\u7F6E" : `\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n}\uFF09\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5`;
      return Promise.reject(new Error(o));
    }
    const t = e.config;
    return t && (((_a = t.url) == null ? void 0 : _a.includes("/upload")) || ((_c = (_b = t.headers) == null ? void 0 : _b["Content-Type"]) == null ? void 0 : _c.toString().includes("multipart"))) ? Promise.reject(new Error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u8D85\u65F6\u6216\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5")) : Promise.reject(new Error("\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"));
  });
  D = {
    get(e, t) {
      return J.get(e, t).then((r) => r.data);
    },
    post(e, t, r) {
      return J.post(e, t, r).then((s) => s.data);
    },
    put(e, t, r) {
      return J.put(e, t, r).then((s) => s.data);
    },
    patch(e, t, r) {
      return J.patch(e, t, r).then((s) => s.data);
    },
    delete(e, t) {
      return J.delete(e, t).then((r) => r.data);
    },
    upload(e, t, r) {
      return J.post(e, t, {
        timeout: 3e5,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        ...r
      }).then((s) => s.data);
    },
    async download(e, t) {
      const r = await J.get(e, {
        ...t,
        responseType: "blob",
        skipResultTransform: true
      });
      return rn(r.data);
    },
    getInstance() {
      return J;
    }
  };
  Na = function(e) {
    return e instanceof Error ? e.message : "\u672A\u77E5\u9519\u8BEF";
  };
  wt = {
    async listSkills() {
      return D.get("/api/interview/skills");
    },
    async getSkill(e) {
      return D.get(`/api/interview/skills/${e}`);
    },
    async parseJd(e) {
      return D.post("/api/interview/skills/parse-jd", {
        jdText: e
      });
    }
  };
  Ze = {
    async getResumes() {
      return D.get("/api/resumes");
    },
    async getResumeDetail(e, t) {
      return D.get(`/api/resumes/${e}/detail`, {
        signal: t
      });
    },
    async getInterviewDetail(e) {
      return D.get(`/api/interview/sessions/${e}/details`);
    },
    async exportAnalysisPdf(e) {
      return D.download(`/api/resumes/${e}/export`);
    },
    async downloadResume(e) {
      return D.download(`/api/resumes/${e}/download`);
    },
    async exportInterviewPdf(e) {
      return D.download(`/api/interview/sessions/${e}/export`);
    },
    async deleteResume(e) {
      return D.delete(`/api/resumes/${e}`);
    },
    async deleteInterview(e) {
      return D.delete(`/api/interview/sessions/${e}`);
    },
    async getStatistics() {
      return D.get("/api/resumes/statistics");
    },
    async reanalyze(e) {
      return D.post(`/api/resumes/${e}/reanalyze`);
    }
  };
  var Zt = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, vt = X.createContext && X.createContext(Zt), nn = [
    "attr",
    "size",
    "title"
  ];
  function an(e, t) {
    if (e == null) return {};
    var r, s, n = on(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (s = 0; s < i.length; s++) r = i[s], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function on(e, t) {
    if (e == null) return {};
    var r = {};
    for (var s in e) if ({}.hasOwnProperty.call(e, s)) {
      if (t.indexOf(s) !== -1) continue;
      r[s] = e[s];
    }
    return r;
  }
  function je() {
    return je = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var s in r) ({}).hasOwnProperty.call(r, s) && (e[s] = r[s]);
      }
      return e;
    }, je.apply(null, arguments);
  }
  function kt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function(n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })), r.push.apply(r, s);
    }
    return r;
  }
  function Se(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? kt(Object(r), true).forEach(function(s) {
        ln(e, s, r[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach(function(s) {
        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
      });
    }
    return e;
  }
  function ln(e, t, r) {
    return (t = cn(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = r, e;
  }
  function cn(e) {
    var t = dn(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function dn(e, t) {
    if (typeof e != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var s = r.call(e, t);
      if (typeof s != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Yt(e) {
    return e && e.map((t, r) => X.createElement(t.tag, Se({
      key: r
    }, t.attr), Yt(t.child)));
  }
  function q(e) {
    return (t) => X.createElement(un, je({
      attr: Se({}, e.attr)
    }, t), Yt(e.child));
  }
  function un(e) {
    var t = (r) => {
      var { attr: s, size: n, title: i } = e, o = an(e, nn), u = n || r.size || "1em", h;
      return r.className && (h = r.className), e.className && (h = (h ? h + " " : "") + e.className), X.createElement("svg", je({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, r.attr, s, o, {
        className: h,
        style: Se(Se({
          color: e.color || r.color
        }, r.style), e.style),
        height: u,
        width: u,
        xmlns: "http://www.w3.org/2000/svg"
      }), i && X.createElement("title", null, i), e.children);
    };
    return vt !== void 0 ? X.createElement(vt.Consumer, null, (r) => t(r)) : t(Zt);
  }
  function fn(e) {
    return q({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
          },
          child: []
        }
      ]
    })(e);
  }
  function mn(e) {
    return q({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
          },
          child: []
        }
      ]
    })(e);
  }
  function hn(e) {
    return q({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"
          },
          child: []
        }
      ]
    })(e);
  }
  function pn(e) {
    return q({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M19.8772 1.4685L24 2.5326v18.9426l-4.1228 1.0563V1.4685zm-13.3481 9.428l4.115 1.0641v8.9786l-4.115 1.0642v-11.107zM0 2.572l4.115 1.0642v16.7354L0 21.428V2.572zm17.4553 5.6205v11.107l-4.1228-1.0642V9.2568l4.1228-1.0642z"
          },
          child: []
        }
      ]
    })(e);
  }
  function xn(e) {
    return q({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.391 16.22c-.963.044-.865-.459-.302-1.234 1.32-1.768 3.82-4.236 3.906-5.982.151-2.283-2.143-3.026-4.501-3.004-1.645.022-3.344.492-4.501.906C5 8.315 2.489 10.576.909 13.076-.768 15.554-.216 17.923 3.322 18c2.716-.109 4.48-.862 6.32-1.802.01 0-5.086 1.453-6.958.383l-.008-.002c-.193-.11-.404-.264-.457-.683-.012-.885 1.46-1.802 2.283-2.097v-1.533a5.374 5.374 0 0 0 1.955.366 5.378 5.378 0 0 0 3.472-1.265c.037.13.056.278.044.447h.371c.048-.394-.172-.706-.172-.706-.333-.529-.915-.52-.915-.52s.315.137.529.466a4.953 4.953 0 0 1-4.665.932l1.21-1.2-.336-.874c2.435-.852 4.48-1.507 7.812-2.085l-.746-.624.389-.24c2.01.568 3.325.985 3.253 2.051a2.672 2.672 0 0 1-.202.611c-.584 1.158-2.326 3.09-3.029 3.898-.465.535-.92 1.06-1.245 1.562-.335.503-.54.971-.551 1.42.043 3.504 10.334-1.64 12.324-3.003-2.943 1.266-6.113 2.489-9.609 2.718Z"
          },
          child: []
        }
      ]
    })(e);
  }
  function gn(e) {
    return q({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M6 12h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 12h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 7l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 7l2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M11 14l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M13 14l2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 5h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 19h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M17 17l2 -3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M19 10l-2 -3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M7 7l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 14l2 3"
          },
          child: []
        }
      ]
    })(e);
  }
  function bn(e) {
    return q({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M7 13h8"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 3l6 6"
          },
          child: []
        }
      ]
    })(e);
  }
  function yn(e) {
    return q({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
          },
          child: []
        }
      ]
    })(e);
  }
  function wn(e) {
    return q({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M12 2v2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 12v9"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 12v9"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 16l4 -2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 14l4 2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 18h6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 8v.01"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 8v.01"
          },
          child: []
        }
      ]
    })(e);
  }
  function vn(e) {
    return q({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 12h6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 12l6 6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 18l6 -6"
          },
          child: []
        }
      ]
    })(e);
  }
  const kn = {
    "java-backend": hn,
    frontend: fn,
    "python-backend": mn,
    "bytedance-backend": pn,
    "ali-backend": xn,
    algorithm: vn,
    "system-design": gn,
    "test-development": bn,
    "ai-agent-dev": wn,
    custom: yn
  };
  qe = function(e) {
    return kn[e] ?? null;
  };
  let Sn, En, jt;
  jn = [
    {
      value: "junior",
      label: "\u6821\u62DB",
      desc: "0-1 \u5E74"
    },
    {
      value: "mid",
      label: "\u4E2D\u7EA7",
      desc: "1-3 \u5E74"
    },
    {
      value: "senior",
      label: "\u9AD8\u7EA7",
      desc: "3 \u5E74+"
    }
  ];
  He = "custom";
  Sn = "java-backend";
  En = "";
  jt = 50;
  Rn = function(e) {
    const { defaultMode: t = "text", defaultResumeId: r, autoLoad: s = true } = e ?? {}, [n, i] = b.useState(t), [o, u] = b.useState(Sn), [h, l] = b.useState("mid"), [f, d] = b.useState([]), [x, w] = b.useState(false), [m, g] = b.useState(false), [p, v] = b.useState(void 0), [O, S] = b.useState([]), [N, A] = b.useState(6), [H, T] = b.useState(30), [ae, te] = b.useState(En), [V, pe] = b.useState(""), [K, G] = b.useState(""), [z, xe] = b.useState([]), [L, ie] = b.useState(false), B = o === He, oe = K.length > 0 && V !== K, _e = B && (z.length === 0 || oe || L), M = async () => {
      w(true);
      try {
        const R = await wt.listSkills();
        return d(R), R;
      } catch (R) {
        return console.error("Failed to load skills:", R), [];
      } finally {
        w(false);
      }
    }, W = async () => {
      try {
        const R = await Ze.getResumes();
        S(R);
      } catch (R) {
        console.error("Failed to load resumes:", R);
      }
    }, le = async () => {
      if (!V || V.length < jt) {
        alert(`JD \u5185\u5BB9\u592A\u5C11\uFF08\u81F3\u5C11 ${jt} \u5B57\uFF09\uFF0C\u8BF7\u8865\u5145\u540E\u91CD\u8BD5`);
        return;
      }
      ie(true);
      try {
        const R = await wt.parseJd(V);
        xe(R), G(V);
      } catch {
        alert("JD \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u9009\u62E9\u9884\u8BBE\u4E3B\u9898");
      } finally {
        ie(false);
      }
    };
    return b.useEffect(() => {
      s && (i(t), r != null && (v(r), g(true)), M(), W());
    }, [
      s,
      t,
      r
    ]), {
      mode: n,
      setMode: i,
      skillId: o,
      setSkillId: u,
      difficulty: h,
      setDifficulty: l,
      skills: f,
      setSkills: d,
      loadingSkills: x,
      showMore: m,
      setShowMore: g,
      resumeId: p,
      setResumeId: v,
      resumes: O,
      questionCount: N,
      setQuestionCount: A,
      plannedDuration: H,
      setPlannedDuration: T,
      llmProvider: ae,
      setLlmProvider: te,
      customJdText: V,
      setCustomJdText: pe,
      parsedCustomJdText: K,
      customCategories: z,
      parsingJd: L,
      jdNeedsReparse: oe,
      isCustomStartDisabled: _e,
      isCustomSkill: B,
      loadSkills: M,
      loadResumes: W,
      handleParseJd: le,
      getSkillIcon: qe,
      get selectedSkill() {
        return f.find((R) => R.id === o);
      }
    };
  };
  function Nn({ isOpen: e, onClose: t, onStart: r, defaultMode: s = "text", defaultResumeId: n, hideModeSwitch: i = false, title: o = "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5", subtitle: u = "\u9009\u62E9\u9762\u8BD5\u6A21\u5F0F\u548C\u4E3B\u9898\uFF0C\u5FEB\u901F\u5F00\u59CB", startButtonText: h = "\u5F00\u59CB\u9762\u8BD5" }) {
    const l = Rn({
      defaultMode: s,
      defaultResumeId: n,
      autoLoad: false
    });
    b.useEffect(() => {
      e && (l.setMode(s), n != null && (l.setResumeId(n), l.setShowMore(true)), l.loadSkills(), l.loadResumes());
    }, [
      e,
      s,
      n
    ]);
    const f = () => {
      const d = l.selectedSkill;
      l.isCustomStartDisabled || r({
        mode: l.mode,
        skillId: l.skillId,
        skillName: (d == null ? void 0 : d.name) || "\u81EA\u5B9A\u4E49",
        difficulty: l.difficulty,
        resumeId: l.resumeId,
        llmProvider: l.llmProvider,
        questionCount: l.questionCount,
        techEnabled: true,
        projectEnabled: true,
        hrEnabled: true,
        plannedDuration: l.plannedDuration,
        customJdText: l.isCustomSkill ? l.parsedCustomJdText : void 0,
        customCategories: l.isCustomSkill ? l.customCategories : void 0
      });
    };
    return e ? a.jsx(Ie, {
      children: e && a.jsxs(a.Fragment, {
        children: [
          a.jsx(Q.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            onClick: t,
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          }),
          a.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: a.jsxs(Q.div, {
              initial: {
                opacity: 0,
                scale: 0.95,
                y: 20
              },
              animate: {
                opacity: 1,
                scale: 1,
                y: 0
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                y: 20
              },
              onClick: (d) => d.stopPropagation(),
              className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                a.jsx("div", {
                  className: "px-6 py-5 border-b border-slate-100 dark:border-slate-700/50",
                  children: a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          a.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25",
                            children: a.jsx(et, {
                              className: "w-5 h-5 text-white"
                            })
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("h2", {
                                className: "text-lg font-bold text-slate-900 dark:text-white",
                                children: o
                              }),
                              a.jsx("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400",
                                children: u
                              })
                            ]
                          })
                        ]
                      }),
                      a.jsx("button", {
                        onClick: t,
                        className: "p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
                        children: a.jsx(tr, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  })
                }),
                a.jsxs("div", {
                  className: "px-6 py-5 space-y-5",
                  children: [
                    !i && a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u9762\u8BD5\u6A21\u5F0F"
                        }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            {
                              value: "text",
                              label: "\u6587\u5B57\u9762\u8BD5",
                              icon: rr,
                              desc: "\u63A8\u8350\uFF1A\u66F4\u7A33\u5B9A\uFF0C\u66F4\u9002\u5408\u7CFB\u7EDF\u5316\u7EC3\u4E60",
                              recommended: true
                            },
                            {
                              value: "voice",
                              label: "\u8BED\u97F3\u9762\u8BD5",
                              icon: sr,
                              desc: "\u5B9E\u65F6\u8BED\u97F3\u5BF9\u8BDD\uFF0C\u504F\u4E34\u573A\u6A21\u62DF",
                              recommended: false
                            }
                          ].map((d) => {
                            const x = d.icon, w = l.mode === d.value;
                            return a.jsxs("button", {
                              onClick: () => l.setMode(d.value),
                              className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left
                              ${w ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                              children: [
                                a.jsx(x, {
                                  className: `w-5 h-5 flex-shrink-0 ${w ? "text-primary-500" : "text-slate-400"}`
                                }),
                                a.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    a.jsxs("p", {
                                      className: `font-semibold text-sm flex items-center gap-2 ${w ? "text-primary-700 dark:text-primary-300" : "text-slate-900 dark:text-white"}`,
                                      children: [
                                        a.jsx("span", {
                                          children: d.label
                                        }),
                                        d.recommended && a.jsx("span", {
                                          className: "px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                                          children: "\u63A8\u8350"
                                        })
                                      ]
                                    }),
                                    a.jsx("p", {
                                      className: "text-[11px] text-slate-500 dark:text-slate-400",
                                      children: d.desc
                                    })
                                  ]
                                })
                              ]
                            }, d.value);
                          })
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u9762\u8BD5\u65B9\u5411"
                        }),
                        l.loadingSkills ? a.jsxs("div", {
                          className: "flex items-center gap-2 py-4 text-slate-400",
                          children: [
                            a.jsx(Be, {
                              className: "w-4 h-4 animate-spin"
                            }),
                            a.jsx("span", {
                              className: "text-sm",
                              children: "\u52A0\u8F7D\u4E2D..."
                            })
                          ]
                        }) : a.jsxs("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            l.skills.map((d) => {
                              var _a, _b, _c, _d;
                              const x = l.skillId === d.id, w = qe(d.id), m = ((_a = d.display) == null ? void 0 : _a.icon) || "\u{1F4CB}";
                              return a.jsxs("button", {
                                onClick: () => l.setSkillId(d.id),
                                className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left
                              ${x ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                                children: [
                                  a.jsx("div", {
                                    className: `w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${x ? ((_b = d.display) == null ? void 0 : _b.iconBg) || "bg-primary-100 dark:bg-primary-900/50" : "bg-slate-100 dark:bg-slate-700"}`,
                                    children: w ? a.jsx(w, {
                                      className: `w-5 h-5 ${x ? ((_c = d.display) == null ? void 0 : _c.iconColor) || "text-primary-600" : "text-slate-500 dark:text-slate-400"}`
                                    }) : a.jsx("span", {
                                      className: x ? ((_d = d.display) == null ? void 0 : _d.iconColor) || "text-primary-600" : "",
                                      children: m
                                    })
                                  }),
                                  a.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      a.jsx("span", {
                                        className: `text-xs font-medium block truncate ${x ? "text-primary-700 dark:text-primary-300" : "text-slate-700 dark:text-slate-300"}`,
                                        children: d.name
                                      }),
                                      a.jsx("span", {
                                        className: "text-[10px] text-slate-400 truncate block",
                                        children: d.description
                                      })
                                    ]
                                  })
                                ]
                              }, d.id);
                            }),
                            a.jsxs("button", {
                              onClick: () => l.setSkillId(He),
                              className: `flex items-center gap-3 p-3 rounded-xl border-2 border-dashed transition-all duration-200 text-left
                          ${l.isCustomSkill ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600"}`,
                              children: [
                                a.jsx("div", {
                                  className: `w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${l.isCustomSkill ? "bg-primary-100 dark:bg-primary-900/50" : "bg-slate-100 dark:bg-slate-700"}`,
                                  children: (() => {
                                    const d = qe(He);
                                    return d ? a.jsx(d, {
                                      className: `w-5 h-5 ${l.isCustomSkill ? "text-primary-600 dark:text-primary-400" : "text-slate-500 dark:text-slate-400"}`
                                    }) : a.jsx("span", {
                                      className: "text-base",
                                      children: "\u2728"
                                    });
                                  })()
                                }),
                                a.jsx("div", {
                                  className: "flex-1 min-w-0",
                                  children: a.jsx("span", {
                                    className: `text-xs font-medium block ${l.isCustomSkill ? "text-primary-700 dark:text-primary-300" : "text-slate-500 dark:text-slate-400"}`,
                                    children: "\u81EA\u5B9A\u4E49 JD"
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    a.jsx(Ie, {
                      children: l.isCustomSkill && a.jsx(Q.div, {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        className: "overflow-hidden",
                        children: a.jsxs("div", {
                          className: "space-y-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700",
                          children: [
                            a.jsx("textarea", {
                              value: l.customJdText,
                              onChange: (d) => l.setCustomJdText(d.target.value),
                              placeholder: "\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0C\u81F3\u5C11 50 \u5B57...",
                              rows: 4,
                              className: `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700\r
                            bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white\r
                            placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2\r
                            focus:ring-primary-500/50 focus:border-primary-400 transition-shadow`
                            }),
                            a.jsxs("button", {
                              onClick: l.handleParseJd,
                              disabled: l.parsingJd || !l.customJdText,
                              className: `flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg\r
                            bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50\r
                            disabled:cursor-not-allowed transition-colors`,
                              children: [
                                l.parsingJd ? a.jsx(Be, {
                                  className: "w-4 h-4 animate-spin"
                                }) : a.jsx(et, {
                                  className: "w-4 h-4"
                                }),
                                "\u89E3\u6790\u9762\u8BD5\u65B9\u5411"
                              ]
                            }),
                            l.customCategories.length > 0 && a.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: l.customCategories.map((d, x) => a.jsxs("span", {
                                className: "px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
                                children: [
                                  d.label,
                                  a.jsxs("span", {
                                    className: "ml-1 text-[10px] text-primary-500",
                                    children: [
                                      "(",
                                      d.priority,
                                      ")"
                                    ]
                                  })
                                ]
                              }, x))
                            }),
                            l.jdNeedsReparse && a.jsx("p", {
                              className: "text-xs text-amber-600 dark:text-amber-400",
                              children: "JD \u5DF2\u4FEE\u6539\uFF0C\u8BF7\u91CD\u65B0\u89E3\u6790\u540E\u518D\u5F00\u59CB\u9762\u8BD5\u3002"
                            })
                          ]
                        })
                      })
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u96BE\u5EA6"
                        }),
                        a.jsx("div", {
                          className: "grid grid-cols-3 gap-2",
                          children: jn.map((d) => {
                            const x = l.difficulty === d.value;
                            return a.jsxs("button", {
                              onClick: () => l.setDifficulty(d.value),
                              className: `py-2.5 px-3 rounded-xl border-2 transition-all duration-200 text-center
                            ${x ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                              children: [
                                a.jsx("p", {
                                  className: `text-sm font-semibold ${x ? "text-primary-700 dark:text-primary-300" : "text-slate-700 dark:text-slate-300"}`,
                                  children: d.label
                                }),
                                a.jsx("p", {
                                  className: "text-[11px] text-slate-400",
                                  children: d.desc
                                })
                              ]
                            }, d.value);
                          })
                        })
                      ]
                    }),
                    a.jsxs("button", {
                      onClick: () => l.setShowMore(!l.showMore),
                      className: "w-full flex items-center gap-2 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors",
                      children: [
                        l.showMore ? a.jsx(nr, {
                          className: "w-4 h-4"
                        }) : a.jsx(ar, {
                          className: "w-4 h-4"
                        }),
                        a.jsx("span", {
                          children: "\u66F4\u591A\u9009\u9879"
                        }),
                        a.jsx("div", {
                          className: "flex-1 border-t border-slate-200 dark:border-slate-700"
                        })
                      ]
                    }),
                    a.jsx(Ie, {
                      children: l.showMore && a.jsxs(Q.div, {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        className: "overflow-hidden space-y-4",
                        children: [
                          a.jsxs("div", {
                            className: "bg-gradient-to-br from-primary-50/80 to-blue-50/80 dark:from-primary-900/20 dark:to-blue-900/10 rounded-xl p-4 border border-primary-100 dark:border-primary-800/30",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                  a.jsx(ir, {
                                    className: "w-5 h-5 text-primary-500"
                                  }),
                                  a.jsx("p", {
                                    className: "font-semibold text-sm text-primary-900 dark:text-primary-100",
                                    children: "\u57FA\u4E8E\u7B80\u5386\u9762\u8BD5\uFF08\u53EF\u9009\uFF09"
                                  })
                                ]
                              }),
                              a.jsxs("select", {
                                value: l.resumeId || "",
                                onChange: (d) => l.setResumeId(d.target.value ? parseInt(d.target.value) : void 0),
                                className: `w-full px-4 py-2.5 rounded-lg border border-primary-200 dark:border-primary-700/50\r
                            bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white\r
                            focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow`,
                                children: [
                                  a.jsx("option", {
                                    value: "",
                                    children: "\u4E0D\u4F7F\u7528\u7B80\u5386\uFF08\u901A\u7528\u63D0\u95EE\uFF09"
                                  }),
                                  l.resumes.map((d) => a.jsx("option", {
                                    value: d.id,
                                    children: d.filename
                                  }, d.id))
                                ]
                              })
                            ]
                          }),
                          l.mode === "text" && a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                                children: "\u9898\u76EE\u6570\u91CF"
                              }),
                              a.jsx("div", {
                                className: "flex gap-2",
                                children: [
                                  6,
                                  8,
                                  10,
                                  12
                                ].map((d) => a.jsxs("button", {
                                  onClick: () => l.setQuestionCount(d),
                                  className: `flex-1 py-2 rounded-lg text-sm font-medium transition-all
                                  ${l.questionCount === d ? "bg-primary-500 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}`,
                                  children: [
                                    d,
                                    " \u9898"
                                  ]
                                }, d))
                              })
                            ]
                          }),
                          l.mode === "voice" && a.jsxs("div", {
                            className: "bg-slate-50/80 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                  a.jsx("p", {
                                    className: "font-semibold text-sm text-slate-900 dark:text-white",
                                    children: "\u8BA1\u5212\u9762\u8BD5\u65F6\u957F"
                                  }),
                                  a.jsxs("div", {
                                    className: "text-2xl font-bold tabular-nums text-primary-600 dark:text-primary-400",
                                    children: [
                                      l.plannedDuration,
                                      a.jsx("span", {
                                        className: "text-xs font-normal text-slate-400 ml-0.5",
                                        children: "min"
                                      })
                                    ]
                                  })
                                ]
                              }),
                              a.jsx("input", {
                                type: "range",
                                min: "15",
                                max: "60",
                                step: "5",
                                value: l.plannedDuration,
                                onChange: (d) => l.setPlannedDuration(parseInt(d.target.value)),
                                className: `w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer\r
                              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4\r
                              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full\r
                              [&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:cursor-pointer\r
                              [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-primary-500/30`
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                }),
                a.jsx("div", {
                  className: "px-6 py-4 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700/50 rounded-b-2xl",
                  children: a.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      a.jsx(Q.button, {
                        onClick: t,
                        whileHover: {
                          scale: 1.02
                        },
                        whileTap: {
                          scale: 0.98
                        },
                        className: `flex-1 px-5 py-3 border border-slate-200 dark:border-slate-700\r
                      text-slate-700 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-100 dark:hover:bg-slate-800 transition-all`,
                        children: "\u53D6\u6D88"
                      }),
                      a.jsx(Q.button, {
                        onClick: f,
                        whileHover: {
                          scale: 1.02
                        },
                        whileTap: {
                          scale: 0.98
                        },
                        disabled: l.isCustomStartDisabled,
                        className: `flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all\r
                      bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700\r
                      text-white shadow-lg shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed`,
                        children: h
                      })
                    ]
                  })
                })
              ]
            })
          })
        ]
      })
    }) : null;
  }
  let St;
  _ = {
    commercialHome: "/",
    targets: "/targets",
    workspace: "/targets",
    interview: "/interview",
    interviewCreate: (e) => `/interview/create/${e}`,
    interviewSession: (e) => `/interview/session/${e}`,
    resumeUpload: "/upload",
    resumeHistory: "/history",
    knowledgebaseUpload: "/knowledgebase/upload"
  };
  St = {
    interviewCreate: "interview/create/:requestId",
    interviewSession: "interview/session/:activeSessionId"
  };
  function Cn({ className: e = "w-5 h-5" }) {
    return a.jsxs("svg", {
      className: e,
      viewBox: "0 0 32 32",
      fill: "none",
      "aria-hidden": "true",
      children: [
        a.jsx("circle", {
          cx: "15",
          cy: "15",
          r: "8.5",
          stroke: "currentColor",
          strokeWidth: "2.5"
        }),
        a.jsx("path", {
          d: "m10.8 14.8 2.7 2.7 6.1-6.1",
          stroke: "#fbbf24",
          strokeWidth: "2.75",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        a.jsx("path", {
          d: "m21.2 21.2 4.6 4.6",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function On() {
    const t = Ve().pathname, { theme: r, toggleTheme: s } = kr(), n = U(), [i, o] = b.useState(null), u = (d) => {
      o({
        defaultMode: "text",
        defaultResumeId: d,
        title: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5",
        subtitle: "\u914D\u7F6E\u9762\u8BD5\u53C2\u6570\uFF0C\u5F00\u59CB\u7EC3\u4E60",
        startButtonText: "\u5F00\u59CB\u9762\u8BD5"
      });
    }, h = (d) => {
      if (o(null), d.mode === "text") {
        n(_.interviewCreate(crypto.randomUUID()), {
          state: {
            resumeId: d.resumeId,
            interviewConfig: {
              skillId: d.skillId,
              difficulty: d.difficulty,
              questionCount: d.questionCount,
              llmProvider: d.llmProvider
            }
          }
        });
        return;
      }
      const x = new URLSearchParams({
        skillId: d.skillId,
        difficulty: d.difficulty
      });
      n(`/voice-interview?${x.toString()}`, {
        state: {
          voiceConfig: {
            skillId: d.skillId,
            difficulty: d.difficulty,
            techEnabled: true,
            projectEnabled: true,
            hrEnabled: true,
            plannedDuration: d.plannedDuration,
            resumeId: d.resumeId,
            llmProvider: d.llmProvider
          }
        }
      });
    }, l = [
      {
        id: "interview",
        title: "\u9762\u8BD5\u51C6\u5907",
        items: [
          {
            id: "targets",
            path: _.targets,
            label: "\u76EE\u6807\u5C97\u4F4D",
            icon: cr,
            description: "\u56F4\u7ED5\u5C97\u4F4D\u5236\u5B9A\u51C6\u5907\u8BA1\u5212"
          },
          {
            id: "resumes",
            path: "/history",
            label: "\u7B80\u5386\u7BA1\u7406",
            icon: dr,
            description: "\u7BA1\u7406\u7B80\u5386\uFF0CAI \u5206\u6790"
          },
          {
            id: "interview-hub",
            path: "/interview-hub",
            label: "\u6A21\u62DF\u9762\u8BD5",
            icon: ur,
            description: "\u6587\u5B57/\u8BED\u97F3\u9762\u8BD5\u7EC3\u4E60"
          },
          {
            id: "interviews",
            path: "/interviews",
            label: "\u9762\u8BD5\u8BB0\u5F55",
            icon: fr,
            description: "\u67E5\u770B\u9762\u8BD5\u5386\u53F2"
          },
          {
            id: "interview-schedule",
            path: "/interview-schedule",
            label: "\u9762\u8BD5\u65E5\u7A0B",
            icon: mr,
            description: "\u7BA1\u7406\u9762\u8BD5\u5B89\u6392"
          }
        ]
      },
      {
        id: "knowledge",
        title: "\u77E5\u8BC6\u5E93",
        items: [
          {
            id: "kb-manage",
            path: "/knowledgebase",
            label: "\u77E5\u8BC6\u5E93\u7BA1\u7406",
            icon: hr,
            description: "\u7BA1\u7406\u77E5\u8BC6\u6587\u6863"
          },
          {
            id: "kb-interview",
            path: "/knowledgebase-interview",
            label: "\u77E5\u8BC6\u5E93\u9762\u8BD5",
            icon: pr,
            description: "\u9898\u5E93\u7EF4\u62A4\u4E0E\u9762\u8BD5"
          },
          {
            id: "chat",
            path: "/knowledgebase/chat",
            label: "\u95EE\u7B54\u52A9\u624B",
            icon: xr,
            description: "\u57FA\u4E8E\u77E5\u8BC6\u5E93\u95EE\u7B54"
          }
        ]
      }
    ], f = (d) => d.startsWith("#") ? false : d === "/history" ? t === "/history" || t.startsWith("/history/") || t === "/upload" : d === _.targets ? t === "/targets" || t === "/" : d === "/interview-hub" ? t === "/interview-hub" || t === _.interview || t.startsWith("/interview/") || t.startsWith("/voice-interview") : d === "/knowledgebase" ? t === "/knowledgebase" || t === "/knowledgebase/upload" : t.startsWith(d);
    return a.jsxs("div", {
      className: "flex min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800",
      children: [
        a.jsxs("aside", {
          className: "w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-700 fixed h-screen left-0 top-0 z-50 flex flex-col",
          children: [
            a.jsx("div", {
              className: "p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between",
              children: a.jsxs(Pe, {
                to: _.targets,
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className: "w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30",
                    children: a.jsx(Cn, {})
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("span", {
                        className: "text-lg font-bold text-slate-800 dark:text-white tracking-tight block",
                        children: "Quick Interview"
                      }),
                      a.jsx("span", {
                        className: "text-xs text-slate-400 dark:text-slate-500",
                        children: "\u667A\u80FD\u9762\u8BD5\u5E73\u53F0"
                      })
                    ]
                  })
                ]
              })
            }),
            a.jsx("div", {
              className: "px-4 pb-2",
              children: a.jsx("button", {
                onClick: s,
                className: "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors",
                children: r === "dark" ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(or, {
                      className: "w-4 h-4"
                    }),
                    a.jsx("span", {
                      className: "text-sm font-medium",
                      children: "\u6D45\u8272\u6A21\u5F0F"
                    })
                  ]
                }) : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(lr, {
                      className: "w-4 h-4"
                    }),
                    a.jsx("span", {
                      className: "text-sm font-medium",
                      children: "\u6DF1\u8272\u6A21\u5F0F"
                    })
                  ]
                })
              })
            }),
            a.jsx("nav", {
              className: "flex-1 p-4 overflow-y-auto",
              children: a.jsx("div", {
                className: "space-y-6",
                children: l.map((d) => a.jsxs("div", {
                  children: [
                    a.jsx("div", {
                      className: "px-3 mb-2",
                      children: a.jsx("span", {
                        className: "text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                        children: d.title
                      })
                    }),
                    a.jsx("div", {
                      className: "space-y-1",
                      children: d.items.map((x) => {
                        const w = f(x.path);
                        return a.jsxs(Pe, {
                          to: x.path,
                          className: `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                          ${w ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`,
                          children: [
                            a.jsx("div", {
                              className: `w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                          ${w ? "bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-700 dark:group-hover:text-white"}`,
                              children: a.jsx(x.icon, {
                                className: "w-5 h-5"
                              })
                            }),
                            a.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                a.jsx("span", {
                                  className: `text-sm block ${w ? "font-semibold" : "font-medium"}`,
                                  children: x.label
                                }),
                                x.description && a.jsx("span", {
                                  className: "text-xs text-slate-400 dark:text-slate-500 truncate block",
                                  children: x.description
                                })
                              ]
                            }),
                            w && a.jsx(tt, {
                              className: "w-4 h-4 text-primary-400"
                            })
                          ]
                        }, x.id);
                      })
                    })
                  ]
                }, d.id))
              })
            }),
            a.jsx("div", {
              className: "p-4 border-t border-slate-100 dark:border-slate-700",
              children: a.jsxs(Pe, {
                to: "/settings",
                className: `group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${f("/settings") ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" : "bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400"}`,
                children: [
                  a.jsx("div", {
                    className: `w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${f("/settings") ? "bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400" : "bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 group-hover:text-primary-600 dark:group-hover:text-primary-400"}`,
                    children: a.jsx(gr, {
                      className: "w-5 h-5"
                    })
                  }),
                  a.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      a.jsx("span", {
                        className: `text-sm block ${f("/settings") ? "font-semibold" : "font-medium"}`,
                        children: "\u8BBE\u7F6E"
                      }),
                      a.jsx("span", {
                        className: "text-xs text-slate-400 dark:text-slate-500 truncate block",
                        children: "\u6A21\u578B\u3001\u8BED\u97F3\u4E0E\u7CFB\u7EDF\u914D\u7F6E"
                      })
                    ]
                  }),
                  a.jsx(tt, {
                    className: "w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary-400"
                  })
                ]
              })
            })
          ]
        }),
        a.jsx("main", {
          className: "flex-1 ml-64 p-10 min-h-screen overflow-y-auto",
          children: a.jsx(Q.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: -20
            },
            transition: {
              duration: 0.3
            },
            children: a.jsx(yr, {
              context: {
                openInterviewModalWithResume: u
              }
            })
          }, t)
        }),
        a.jsx(Nn, {
          isOpen: i !== null,
          onClose: () => o(null),
          onStart: h,
          defaultMode: (i == null ? void 0 : i.defaultMode) || "text",
          defaultResumeId: i == null ? void 0 : i.defaultResumeId,
          hideModeSwitch: (i == null ? void 0 : i.defaultResumeId) == null,
          title: (i == null ? void 0 : i.title) || "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5",
          subtitle: (i == null ? void 0 : i.subtitle) || "\u9009\u62E9\u9762\u8BD5\u6A21\u5F0F\u548C\u4E3B\u9898\uFF0C\u5FEB\u901F\u5F00\u59CB",
          startButtonText: (i == null ? void 0 : i.startButtonText) || "\u5F00\u59CB\u9762\u8BD5"
        })
      ]
    });
  }
  const Tn = b.lazy(() => E(() => import("./UploadPage-BxVKRDQ1.js"), __vite__mapDeps([0,1,2,3,4,5]))), _n = b.lazy(() => E(() => import("./HistoryPage-VlG5oHiR.js"), __vite__mapDeps([6,1,2,7,8,9,10,5]))), In = b.lazy(() => E(() => import("./ResumeDetailPage-B6mSp8Jw.js"), __vite__mapDeps([11,1,2,10,12,9,8,13,5]))), Pn = b.lazy(() => E(() => import("./InterviewPage-cQOrpe0H.js"), __vite__mapDeps([14,1,2,15,8,16,17,5]))), er = b.lazy(() => E(() => import("./InterviewHistoryPage-BB08Xh3c.js"), __vite__mapDeps([18,1,2,15,19,9,10,20,21,7,8,12,5]))), An = b.lazy(() => E(() => import("./KnowledgeBaseQueryPage-C01FnZK2.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([22,1,2,16,4,23,9,7,8,5]))), Ln = b.lazy(() => E(() => import("./KnowledgeBaseUploadPage-BoUCJbwy.js"), __vite__mapDeps([24,1,2,3,4,5]))), Dn = b.lazy(() => E(() => import("./KnowledgeBaseManagePage-kIOcflE7.js"), __vite__mapDeps([25,1,2,4,7,8,5]))), Bn = b.lazy(() => E(() => import("./KnowledgeBaseInterviewLandingPage-PvpWuGs1.js"), __vite__mapDeps([26,1,2,4,27,5]))), Mn = b.lazy(() => E(() => import("./KnowledgeBaseInterviewQuestionsPage-GQ0Eh4eR.js"), __vite__mapDeps([28,1,2,4,27,7,8,5]))), Un = b.lazy(() => E(() => import("./KnowledgeBaseInterviewSessionPage-CZyh-NPD.js"), __vite__mapDeps([29,1,2,15,14,8,16,17,5]))), Fn = b.lazy(() => E(() => import("./VoiceInterviewPage-CFClswAb.js"), __vite__mapDeps([30,1,2,17,21,19,5]))), zn = b.lazy(() => E(() => import("./VoiceInterviewEvaluationPage-Cyy6L2ZA.js"), __vite__mapDeps([31,1,2,19,13,10,20,5]))), $n = b.lazy(() => E(() => import("./InterviewSchedulePage-dH4qGyTb.js"), __vite__mapDeps([32,1,2,5,8,33]))), qn = b.lazy(() => E(() => import("./InterviewHubPage-gDRllFP5.js"), __vite__mapDeps([34,1,2,15,19,21,10,9,5]))), Hn = b.lazy(() => E(() => import("./InterviewTargetPage-Bk5ccwFC.js"), __vite__mapDeps([35,1,2,23,9,10,5]))), Vn = b.lazy(() => E(() => import("./SettingsPage-DLyEcEWj.js"), __vite__mapDeps([36,1,2,8,5]))), Wn = b.lazy(() => E(() => import("./InterviewDetailPanel-CKCDvXL0.js"), __vite__mapDeps([13,1,2,10]))), Jn = b.lazy(() => E(() => import("./CommercialLandingPage-CJvRJYR6.js"), __vite__mapDeps([37,1,2,38]))), Kn = () => a.jsx("div", {
    className: "flex items-center justify-center min-h-[50vh]",
    children: a.jsx("div", {
      className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full animate-spin"
    })
  });
  function Xn() {
    const e = U();
    return a.jsx(Tn, {
      onBack: () => e(_.resumeHistory)
    });
  }
  function Gn() {
    const e = U(), t = (r) => {
      e(`/history/${r}`);
    };
    return a.jsx(_n, {
      onSelectResume: t
    });
  }
  function Qn() {
    const { resumeId: e } = de(), t = U(), { openInterviewModalWithResume: r } = Rt();
    if (!e) return a.jsx(We, {
      to: "/history",
      replace: true
    });
    const s = () => {
      t("/history");
    }, n = (i) => {
      r(i);
    };
    return a.jsx(In, {
      resumeId: parseInt(e, 10),
      onBack: s,
      onStartInterview: n
    });
  }
  function be() {
    const { resumeId: e, requestId: t, activeSessionId: r } = de(), s = U(), i = Ve().state ?? {}, [o, u] = b.useState(""), [h, l] = b.useState(true), f = e ? parseInt(e, 10) : i.resumeId, d = i.targetId, x = i.taskId;
    b.useEffect(() => {
      const p = i.resumeText;
      p ? (u(p), l(false)) : f ? Ze.getResumeDetail(f).then((v) => {
        u(v.resumeText), l(false);
      }).catch((v) => {
        console.error("\u83B7\u53D6\u7B80\u5386\u6587\u672C\u5931\u8D25", v), l(false);
      }) : l(false);
    }, [
      f,
      i.resumeText
    ]);
    const w = () => {
      if (d) {
        s("/targets?targetId=" + d, {
          replace: false
        });
        return;
      }
      if (f) {
        s(`/history/${f}`, {
          replace: false
        });
        return;
      }
      s("/history", {
        replace: false
      });
    }, m = () => {
      if (d) {
        s("/targets?targetId=" + d, {
          replace: true
        });
        return;
      }
      s("/interviews");
    }, g = (p) => {
      s(_.interviewSession(p), {
        replace: true,
        state: i
      });
    };
    return !t && !r && !i.sessionIdToResume ? a.jsx(We, {
      to: _.interviewCreate(crypto.randomUUID()),
      replace: true,
      state: {
        ...i,
        resumeId: f
      }
    }) : h ? a.jsx("div", {
      className: "flex items-center justify-center min-h-screen",
      children: a.jsxs("div", {
        className: "text-center",
        children: [
          a.jsx("div", {
            className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full mx-auto mb-4 animate-spin"
          }),
          a.jsx("p", {
            className: "text-slate-500",
            children: "\u52A0\u8F7D\u4E2D..."
          })
        ]
      })
    }) : a.jsx(Pn, {
      resumeText: o,
      resumeId: f,
      targetId: d,
      taskId: x,
      sessionIdToResume: r ?? i.sessionIdToResume,
      requestId: t,
      initialConfig: i.interviewConfig,
      onBack: w,
      onSessionCreated: g,
      onInterviewComplete: m
    });
  }
  function Zn() {
    return a.jsxs(wr, {
      basename: "/quick-interview/",
      children: [
        a.jsx("aside", {
          "aria-label": "\u4F7F\u7528\u63D0\u793A",
          className: "border-b border-amber-300/40 bg-amber-50 px-4 py-2 text-center text-sm text-amber-950",
          children: "\u516C\u5F00\u4F53\u9A8C\u7248\uFF1A\u6682\u672A\u63D0\u4F9B\u8D26\u53F7\u9694\u79BB\uFF0C\u8BBF\u5BA2\u53EF\u80FD\u8BBF\u95EE\u540C\u4E00\u4EFD\u6570\u636E\uFF1B\u8BF7\u52FF\u4E0A\u4F20\u771F\u5B9E\u7B80\u5386\u3001\u4E2A\u4EBA\u4FE1\u606F\u6216\u5176\u4ED6\u654F\u611F\u5185\u5BB9\u3002"
        }),
        a.jsx(b.Suspense, {
          fallback: a.jsx(Kn, {}),
          children: a.jsxs(vr, {
            children: [
              a.jsx(k, {
                path: _.commercialHome,
                element: a.jsx(Jn, {})
              }),
              a.jsxs(k, {
                element: a.jsx(On, {}),
                children: [
                  a.jsx(k, {
                    path: _.targets.slice(1),
                    element: a.jsx(Hn, {})
                  }),
                  a.jsx(k, {
                    path: "upload",
                    element: a.jsx(Xn, {})
                  }),
                  a.jsx(k, {
                    path: "history",
                    element: a.jsx(Gn, {})
                  }),
                  a.jsx(k, {
                    path: "history/:resumeId",
                    element: a.jsx(Qn, {})
                  }),
                  a.jsx(k, {
                    path: "interview-hub",
                    element: a.jsx(qn, {})
                  }),
                  a.jsx(k, {
                    path: "interviews",
                    element: a.jsx(Yn, {})
                  }),
                  a.jsx(k, {
                    path: "interviews/:sessionId",
                    element: a.jsx(Et, {})
                  }),
                  a.jsx(k, {
                    path: _.interview.slice(1),
                    element: a.jsx(be, {})
                  }),
                  a.jsx(k, {
                    path: St.interviewCreate,
                    element: a.jsx(be, {})
                  }),
                  a.jsx(k, {
                    path: St.interviewSession,
                    element: a.jsx(be, {})
                  }),
                  a.jsx(k, {
                    path: "interview/:resumeId",
                    element: a.jsx(be, {})
                  }),
                  a.jsx(k, {
                    path: "voice-interview",
                    element: a.jsx(na, {})
                  }),
                  a.jsx(k, {
                    path: "voice-interview/:sessionId/evaluation",
                    element: a.jsx(zn, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase",
                    element: a.jsx(ta, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase-interview",
                    element: a.jsx(Bn, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase-interview/:knowledgeBaseId/questions",
                    element: a.jsx(Mn, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase-interview/:knowledgeBaseId/interviews",
                    element: a.jsx(ea, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase-interview/:knowledgeBaseId/interviews/:sessionId",
                    element: a.jsx(Et, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase-interview/:sessionId",
                    element: a.jsx(Un, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase/upload",
                    element: a.jsx(sa, {})
                  }),
                  a.jsx(k, {
                    path: "interview-schedule",
                    element: a.jsx($n, {})
                  }),
                  a.jsx(k, {
                    path: "settings",
                    element: a.jsx(Vn, {})
                  }),
                  a.jsx(k, {
                    path: "knowledgebase/chat",
                    element: a.jsx(ra, {})
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  function Yn() {
    const e = U(), { openInterviewModalWithResume: t } = Rt(), r = () => {
      e("/history");
    }, s = async (o, u) => {
      e(`/interviews/${o}`);
    }, n = (o) => {
      t(o);
    }, i = (o) => {
      e(_.interviewSession(o));
    };
    return a.jsx(er, {
      onBack: r,
      onViewInterview: s,
      onRestartInterview: n,
      onContinueInterview: i
    });
  }
  function ea() {
    const e = U(), { knowledgeBaseId: t } = de(), r = t ? Number(t) : NaN;
    if (Number.isNaN(r)) return a.jsx(We, {
      to: "/knowledgebase-interview",
      replace: true
    });
    const s = () => {
      e(`/knowledgebase-interview/${r}/questions`);
    }, n = (o) => {
      e(`/knowledgebase-interview/${r}/interviews/${o}`);
    }, i = (o) => {
      e(`/knowledgebase-interview/${o}`, {
        state: {
          knowledgeBaseId: r
        }
      });
    };
    return a.jsx(er, {
      knowledgeBaseId: r,
      onBack: s,
      onViewInterview: n,
      onContinueInterview: i
    });
  }
  function Et() {
    const { sessionId: e } = de(), { knowledgeBaseId: t } = de(), r = U(), [s, n] = b.useState(null), [i, o] = b.useState(true), [u, h] = b.useState(""), l = t ? `/knowledgebase-interview/${t}/interviews` : "/interviews";
    return b.useEffect(() => {
      if (!e) {
        r(l);
        return;
      }
      Ze.getInterviewDetail(e).then((f) => {
        n(f), o(false);
      }).catch(() => {
        h("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25"), o(false);
      });
    }, [
      e,
      r,
      l
    ]), i ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[50vh]",
      children: a.jsx(Be, {
        className: "w-8 h-8 text-primary-500 animate-spin"
      })
    }) : u || !s ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[50vh]",
      children: a.jsxs("div", {
        className: "text-center",
        children: [
          a.jsx("p", {
            className: "text-red-500 mb-4",
            children: u || "\u9762\u8BD5\u8BB0\u5F55\u4E0D\u5B58\u5728"
          }),
          a.jsx("button", {
            onClick: () => r(l),
            className: "px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600",
            children: "\u8FD4\u56DE\u9762\u8BD5\u8BB0\u5F55"
          })
        ]
      })
    }) : a.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        a.jsxs("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            a.jsx("button", {
              onClick: () => r(l),
              className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",
              children: a.jsx("svg", {
                className: "w-5 h-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: a.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15 19l-7-7 7-7"
                })
              })
            }),
            a.jsxs("h1", {
              className: "text-xl font-bold text-slate-900 dark:text-white",
              children: [
                "\u9762\u8BD5\u8BE6\u60C5 #",
                e.slice(-8)
              ]
            })
          ]
        }),
        a.jsx(Wn, {
          interview: s
        })
      ]
    });
  }
  function ta() {
    const e = U(), t = () => {
      e(_.knowledgebaseUpload);
    }, r = () => {
      e("/knowledgebase/chat");
    };
    return a.jsx(Dn, {
      onUpload: t,
      onChat: r
    });
  }
  function ra() {
    const e = U(), r = Ve().pathname === "/knowledgebase/chat", s = () => {
      e(r ? "/knowledgebase" : "/history");
    }, n = () => {
      e(_.knowledgebaseUpload);
    };
    return a.jsx(An, {
      onBack: s,
      onUpload: n
    });
  }
  function sa() {
    const e = U(), t = () => {
      e("/knowledgebase");
    };
    return a.jsx(Ln, {
      onBack: t
    });
  }
  function na() {
    return a.jsx(Fn, {});
  }
  (function() {
    const t = localStorage.getItem("theme"), r = window.matchMedia("(prefers-color-scheme: dark)").matches;
    (t === "dark" || !t && r) && document.documentElement.classList.add("dark");
  })();
  Me.createRoot(document.getElementById("root")).render(a.jsx(X.StrictMode, {
    children: a.jsx(Zn, {})
  }));
});
export {
  Ys as A,
  He as C,
  jn as D,
  _ as R,
  __tla,
  Ra as a,
  qe as b,
  Na as g,
  Ze as h,
  Qt as p,
  D as r,
  wt as s,
  Rn as u
};
