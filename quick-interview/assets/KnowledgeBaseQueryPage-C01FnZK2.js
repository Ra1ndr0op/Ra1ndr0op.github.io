const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/syntax-highlighter-aNFqcRiR.js","assets/react-vendor-C54eoJNz.js"])))=>i.map(i=>d[i]);
import { j as k, K as li, N as oi, O as cn, m as ce, P as ai, Q as hn, V as si, w as ui, v as ci, A as wt, y as hi, k as fn } from "./ui-vendor-Icq6OStM.js";
import { i as lt, g as or, r as V, j as fi, __tla as __tla_0 } from "./react-vendor-C54eoJNz.js";
import { Y as pi } from "./index-Brj8k8ut.js";
import { s as mi, k as pn } from "./knowledgebase-BzUHXAZF.js";
import { r as Ie, __tla as __tla_1 } from "./index-BZ3exKah.js";
import { i as di } from "./interviewTarget-DknyWtnh.js";
import { f as gi } from "./date-DBJmXC5z.js";
import { D as xi } from "./DeleteConfirmDialog-BjfJUZ2-.js";
import { s as Ut, h as ki, f as bi, a as yi, b as wi, c as Si, d as Wt, _ as Ci } from "./syntax-highlighter-aNFqcRiR.js";
import "./ConfirmDialog-CZ5WuzmS.js";
let xh;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const Ei = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ii = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vi = {};
  function mn(e, n) {
    return (vi.jsx ? Ii : Ei).test(e);
  }
  const Ai = /[ \t\n\f\r]/g;
  function Ti(e) {
    return typeof e == "object" ? e.type === "text" ? dn(e.value) : false : dn(e);
  }
  function dn(e) {
    return e.replace(Ai, "") === "";
  }
  var Qt = {}, gn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ni = /\n/g, zi = /^\s*/, ji = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Fi = /^:\s*/, Pi = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, _i = /^[;\s]*/, Di = /^\s+|\s+$/g, Li = `
`, xn = "/", kn = "*", Te = "", Ri = "comment", Mi = "declaration";
  function Oi(e, n) {
    if (typeof e != "string") throw new TypeError("First argument must be a string");
    if (!e) return [];
    n = n || {};
    var t = 1, r = 1;
    function i(g) {
      var w = g.match(Ni);
      w && (t += w.length);
      var I = g.lastIndexOf(Li);
      r = ~I ? g.length - I : r + g.length;
    }
    function o() {
      var g = {
        line: t,
        column: r
      };
      return function(w) {
        return w.position = new l(g), u(), w;
      };
    }
    function l(g) {
      this.start = g, this.end = {
        line: t,
        column: r
      }, this.source = n.source;
    }
    l.prototype.content = e;
    function a(g) {
      var w = new Error(n.source + ":" + t + ":" + r + ": " + g);
      if (w.reason = g, w.filename = n.source, w.line = t, w.column = r, w.source = e, !n.silent) throw w;
    }
    function s(g) {
      var w = g.exec(e);
      if (w) {
        var I = w[0];
        return i(I), e = e.slice(I.length), w;
      }
    }
    function u() {
      s(zi);
    }
    function h(g) {
      var w;
      for (g = g || []; w = c(); ) w !== false && g.push(w);
      return g;
    }
    function c() {
      var g = o();
      if (!(xn != e.charAt(0) || kn != e.charAt(1))) {
        for (var w = 2; Te != e.charAt(w) && (kn != e.charAt(w) || xn != e.charAt(w + 1)); ) ++w;
        if (w += 2, Te === e.charAt(w - 1)) return a("End of comment missing");
        var I = e.slice(2, w - 2);
        return r += 2, i(I), e = e.slice(w), r += 2, g({
          type: Ri,
          comment: I
        });
      }
    }
    function p() {
      var g = o(), w = s(ji);
      if (w) {
        if (c(), !s(Fi)) return a("property missing ':'");
        var I = s(Pi), b = g({
          type: Mi,
          property: bn(w[0].replace(gn, Te)),
          value: I ? bn(I[0].replace(gn, Te)) : Te
        });
        return s(_i), b;
      }
    }
    function f() {
      var g = [];
      h(g);
      for (var w; w = p(); ) w !== false && (g.push(w), h(g));
      return g;
    }
    return u(), f();
  }
  function bn(e) {
    return e ? e.replace(Di, Te) : Te;
  }
  var Bi = Oi, $i = lt && lt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(Qt, "__esModule", {
    value: true
  });
  Qt.default = Vi;
  const Hi = $i(Bi);
  function Vi(e, n) {
    let t = null;
    if (!e || typeof e != "string") return t;
    const r = (0, Hi.default)(e), i = typeof n == "function";
    return r.forEach((o) => {
      if (o.type !== "declaration") return;
      const { property: l, value: a } = o;
      i ? n(l, a, o) : a && (t = t || {}, t[l] = a);
    }), t;
  }
  var ct = {};
  Object.defineProperty(ct, "__esModule", {
    value: true
  });
  ct.camelCase = void 0;
  var qi = /^--[a-zA-Z0-9_-]+$/, Ui = /-([a-z])/g, Wi = /^[^-]+$/, Qi = /^-(webkit|moz|ms|o|khtml)-/, Ki = /^-(ms)-/, Gi = function(e) {
    return !e || Wi.test(e) || qi.test(e);
  }, Yi = function(e, n) {
    return n.toUpperCase();
  }, yn = function(e, n) {
    return "".concat(n, "-");
  }, Ji = function(e, n) {
    return n === void 0 && (n = {}), Gi(e) ? e : (e = e.toLowerCase(), n.reactCompat ? e = e.replace(Ki, yn) : e = e.replace(Qi, yn), e.replace(Ui, Yi));
  };
  ct.camelCase = Ji;
  var Xi = lt && lt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }, Zi = Xi(Qt), el = ct;
  function Lt(e, n) {
    var t = {};
    return !e || typeof e != "string" || (0, Zi.default)(e, function(r, i) {
      r && i && (t[(0, el.camelCase)(r, n)] = i);
    }), t;
  }
  Lt.default = Lt;
  var tl = Lt;
  const nl = or(tl), ar = sr("end"), Kt = sr("start");
  function sr(e) {
    return n;
    function n(t) {
      const r = t && t.position && t.position[e] || {};
      if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
    }
  }
  function rl(e) {
    const n = Kt(e), t = ar(e);
    if (n && t) return {
      start: n,
      end: t
    };
  }
  function $e(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? wn(e.position) : "start" in e || "end" in e ? wn(e) : "line" in e || "column" in e ? Rt(e) : "";
  }
  function Rt(e) {
    return Sn(e && e.line) + ":" + Sn(e && e.column);
  }
  function wn(e) {
    return Rt(e && e.start) + "-" + Rt(e && e.end);
  }
  function Sn(e) {
    return e && typeof e == "number" ? e : 1;
  }
  class Z extends Error {
    constructor(n, t, r) {
      super(), typeof t == "string" && (r = t, t = void 0);
      let i = "", o = {}, l = false;
      if (t && ("line" in t && "column" in t ? o = {
        place: t
      } : "start" in t && "end" in t ? o = {
        place: t
      } : "type" in t ? o = {
        ancestors: [
          t
        ],
        place: t.position
      } : o = {
        ...t
      }), typeof n == "string" ? i = n : !o.cause && n && (l = true, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
        const s = r.indexOf(":");
        s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
      }
      if (!o.place && o.ancestors && o.ancestors) {
        const s = o.ancestors[o.ancestors.length - 1];
        s && (o.place = s.position);
      }
      const a = o.place && "start" in o.place ? o.place.start : o.place;
      this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = $e(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  Z.prototype.file = "";
  Z.prototype.name = "";
  Z.prototype.reason = "";
  Z.prototype.message = "";
  Z.prototype.stack = "";
  Z.prototype.column = void 0;
  Z.prototype.line = void 0;
  Z.prototype.ancestors = void 0;
  Z.prototype.cause = void 0;
  Z.prototype.fatal = void 0;
  Z.prototype.place = void 0;
  Z.prototype.ruleId = void 0;
  Z.prototype.source = void 0;
  const Gt = {}.hasOwnProperty, il = /* @__PURE__ */ new Map(), ll = /[A-Z]/g, ol = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), al = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), ur = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function sl(e, n) {
    if (!n || n.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const t = n.filePath || void 0;
    let r;
    if (n.development) {
      if (typeof n.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      r = gl(t, n.jsxDEV);
    } else {
      if (typeof n.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof n.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      r = dl(t, n.jsx, n.jsxs);
    }
    const i = {
      Fragment: n.Fragment,
      ancestors: [],
      components: n.components || {},
      create: r,
      elementAttributeNameCase: n.elementAttributeNameCase || "react",
      evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
      filePath: t,
      ignoreInvalidStyle: n.ignoreInvalidStyle || false,
      passKeys: n.passKeys !== false,
      passNode: n.passNode || false,
      schema: n.space === "svg" ? Ut : ki,
      stylePropertyNameCase: n.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: n.tableCellAlignToStyle !== false
    }, o = cr(i, e, void 0);
    return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
      children: o || void 0
    }, void 0);
  }
  function cr(e, n, t) {
    if (n.type === "element") return ul(e, n, t);
    if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression") return cl(e, n);
    if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") return fl(e, n, t);
    if (n.type === "mdxjsEsm") return hl(e, n);
    if (n.type === "root") return pl(e, n, t);
    if (n.type === "text") return ml(e, n);
  }
  function ul(e, n, t) {
    const r = e.schema;
    let i = r;
    n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ut, e.schema = i), e.ancestors.push(n);
    const o = fr(e, n.tagName, false), l = xl(e, n);
    let a = Jt(e, n);
    return ol.has(n.tagName) && (a = a.filter(function(s) {
      return typeof s == "string" ? !Ti(s) : true;
    })), hr(e, l, o, n), Yt(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
  }
  function cl(e, n) {
    if (n.data && n.data.estree && e.evaluater) {
      const r = n.data.estree.body[0];
      return r.type, e.evaluater.evaluateExpression(r.expression);
    }
    qe(e, n.position);
  }
  function hl(e, n) {
    if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
    qe(e, n.position);
  }
  function fl(e, n, t) {
    const r = e.schema;
    let i = r;
    n.name === "svg" && r.space === "html" && (i = Ut, e.schema = i), e.ancestors.push(n);
    const o = n.name === null ? e.Fragment : fr(e, n.name, true), l = kl(e, n), a = Jt(e, n);
    return hr(e, l, o, n), Yt(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
  }
  function pl(e, n, t) {
    const r = {};
    return Yt(r, Jt(e, n)), e.create(n, e.Fragment, r, t);
  }
  function ml(e, n) {
    return n.value;
  }
  function hr(e, n, t, r) {
    typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
  }
  function Yt(e, n) {
    if (n.length > 0) {
      const t = n.length > 1 ? n : n[0];
      t && (e.children = t);
    }
  }
  function dl(e, n, t) {
    return r;
    function r(i, o, l, a) {
      const u = Array.isArray(l.children) ? t : n;
      return a ? u(o, l, a) : u(o, l);
    }
  }
  function gl(e, n) {
    return t;
    function t(r, i, o, l) {
      const a = Array.isArray(o.children), s = Kt(r);
      return n(i, o, l, a, {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      }, void 0);
    }
  }
  function xl(e, n) {
    const t = {};
    let r, i;
    for (i in n.properties) if (i !== "children" && Gt.call(n.properties, i)) {
      const o = bl(e, i, n.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && al.has(n.tagName) ? r = a : t[l] = a;
      }
    }
    if (r) {
      const o = t.style || (t.style = {});
      o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return t;
  }
  function kl(e, n) {
    const t = {};
    for (const r of n.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
      const o = r.data.estree.body[0];
      o.type;
      const l = o.expression;
      l.type;
      const a = l.properties[0];
      a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument));
    } else qe(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
        const a = r.value.data.estree.body[0];
        a.type, o = e.evaluater.evaluateExpression(a.expression);
      } else qe(e, n.position);
      else o = r.value === null ? true : r.value;
      t[i] = o;
    }
    return t;
  }
  function Jt(e, n) {
    const t = [];
    let r = -1;
    const i = e.passKeys ? /* @__PURE__ */ new Map() : il;
    for (; ++r < n.children.length; ) {
      const o = n.children[r];
      let l;
      if (e.passKeys) {
        const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
        if (s) {
          const u = i.get(s) || 0;
          l = s + "-" + u, i.set(s, u + 1);
        }
      }
      const a = cr(e, o, l);
      a !== void 0 && t.push(a);
    }
    return t;
  }
  function bl(e, n, t) {
    const r = bi(e.schema, n);
    if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
      if (Array.isArray(t) && (t = r.commaSeparated ? yi(t) : wi(t)), r.property === "style") {
        let i = typeof t == "object" ? t : yl(e, String(t));
        return e.stylePropertyNameCase === "css" && (i = wl(i)), [
          "style",
          i
        ];
      }
      return [
        e.elementAttributeNameCase === "react" && r.space ? Si[r.property] || r.property : r.attribute,
        t
      ];
    }
  }
  function yl(e, n) {
    try {
      return nl(n, {
        reactCompat: true
      });
    } catch (t) {
      if (e.ignoreInvalidStyle) return {};
      const r = t, i = new Z("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw i.file = e.filePath || void 0, i.url = ur + "#cannot-parse-style-attribute", i;
    }
  }
  function fr(e, n, t) {
    let r;
    if (!t) r = {
      type: "Literal",
      value: n
    };
    else if (n.includes(".")) {
      const i = n.split(".");
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = mn(i[o]) ? {
          type: "Identifier",
          name: i[o]
        } : {
          type: "Literal",
          value: i[o]
        };
        l = l ? {
          type: "MemberExpression",
          object: l,
          property: a,
          computed: !!(o && a.type === "Literal"),
          optional: false
        } : a;
      }
      r = l;
    } else r = mn(n) && !/^[a-z]/.test(n) ? {
      type: "Identifier",
      name: n
    } : {
      type: "Literal",
      value: n
    };
    if (r.type === "Literal") {
      const i = r.value;
      return Gt.call(e.components, i) ? e.components[i] : i;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    qe(e);
  }
  function qe(e, n) {
    const t = new Z("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw t.file = e.filePath || void 0, t.url = ur + "#cannot-handle-mdx-estrees-without-createevaluater", t;
  }
  function wl(e) {
    const n = {};
    let t;
    for (t in e) Gt.call(e, t) && (n[Sl(t)] = e[t]);
    return n;
  }
  function Sl(e) {
    let n = e.replace(ll, Cl);
    return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
  }
  function Cl(e) {
    return "-" + e.toLowerCase();
  }
  const St = {
    action: [
      "form"
    ],
    cite: [
      "blockquote",
      "del",
      "ins",
      "q"
    ],
    data: [
      "object"
    ],
    formAction: [
      "button",
      "input"
    ],
    href: [
      "a",
      "area",
      "base",
      "link"
    ],
    icon: [
      "menuitem"
    ],
    itemId: null,
    manifest: [
      "html"
    ],
    ping: [
      "a",
      "area"
    ],
    poster: [
      "video"
    ],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video"
    ]
  }, El = {};
  function Xt(e, n) {
    const t = El, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : true, i = typeof t.includeHtml == "boolean" ? t.includeHtml : true;
    return pr(e, r, i);
  }
  function pr(e, n, t) {
    if (Il(e)) {
      if ("value" in e) return e.type === "html" && !t ? "" : e.value;
      if (n && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return Cn(e.children, n, t);
    }
    return Array.isArray(e) ? Cn(e, n, t) : "";
  }
  function Cn(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) r[i] = pr(e[i], n, t);
    return r.join("");
  }
  function Il(e) {
    return !!(e && typeof e == "object");
  }
  function se(e, n, t, r) {
    const i = e.length;
    let o = 0, l;
    if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4) l = Array.from(r), l.unshift(n, t), e.splice(...l);
    else for (t && e.splice(n, t); o < r.length; ) l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
  }
  function ue(e, n) {
    return e.length > 0 ? (se(e, e.length, 0, n), e) : n;
  }
  const En = {}.hasOwnProperty;
  function mr(e) {
    const n = {};
    let t = -1;
    for (; ++t < e.length; ) vl(n, e[t]);
    return n;
  }
  function vl(e, n) {
    let t;
    for (t in n) {
      const i = (En.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
      let l;
      if (o) for (l in o) {
        En.call(i, l) || (i[l] = []);
        const a = o[l];
        Al(i[l], Array.isArray(a) ? a : a ? [
          a
        ] : []);
      }
    }
  }
  function Al(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length; ) (n[t].add === "after" ? e : r).push(n[t]);
    se(e, 0, 0, r);
  }
  function dr(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 || t === 11 || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || (t & 65535) === 65535 || (t & 65535) === 65534 || t > 1114111 ? "\uFFFD" : String.fromCodePoint(t);
  }
  function he(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const ne = Ce(/[A-Za-z]/), X = Ce(/[\dA-Za-z]/), Tl = Ce(/[#-'*+\--9=?A-Z^-~]/);
  function ot(e) {
    return e !== null && (e < 32 || e === 127);
  }
  const Mt = Ce(/\d/), Nl = Ce(/[\dA-Fa-f]/), zl = Ce(/[!-/:-@[-`{-~]/);
  function F(e) {
    return e !== null && e < -2;
  }
  function W(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function L(e) {
    return e === -2 || e === -1 || e === 32;
  }
  const ht = Ce(new RegExp("\\p{P}|\\p{S}", "u")), Ne = Ce(/\s/);
  function Ce(e) {
    return n;
    function n(t) {
      return t !== null && t > -1 && e.test(String.fromCharCode(t));
    }
  }
  function De(e) {
    const n = [];
    let t = -1, r = 0, i = 0;
    for (; ++t < e.length; ) {
      const o = e.charCodeAt(t);
      let l = "";
      if (o === 37 && X(e.charCodeAt(t + 1)) && X(e.charCodeAt(t + 2))) i = 2;
      else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
      else if (o > 55295 && o < 57344) {
        const a = e.charCodeAt(t + 1);
        o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "\uFFFD";
      } else l = String.fromCharCode(o);
      l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
    }
    return n.join("") + e.slice(r);
  }
  function $(e, n, t, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return l;
    function l(s) {
      return L(s) ? (e.enter(t), a(s)) : n(s);
    }
    function a(s) {
      return L(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
    }
  }
  const jl = {
    tokenize: Fl
  };
  function Fl(e) {
    const n = e.attempt(this.parser.constructs.contentInitial, r, i);
    let t;
    return n;
    function r(a) {
      if (a === null) {
        e.consume(a);
        return;
      }
      return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), $(e, n, "linePrefix");
    }
    function i(a) {
      return e.enter("paragraph"), o(a);
    }
    function o(a) {
      const s = e.enter("chunkText", {
        contentType: "text",
        previous: t
      });
      return t && (t.next = s), t = s, l(a);
    }
    function l(a) {
      if (a === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
        return;
      }
      return F(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
    }
  }
  const Pl = {
    tokenize: _l
  }, In = {
    tokenize: Dl
  };
  function _l(e) {
    const n = this, t = [];
    let r = 0, i, o, l;
    return a;
    function a(v) {
      if (r < t.length) {
        const P = t[r];
        return n.containerState = P[1], e.attempt(P[0].continuation, s, u)(v);
      }
      return u(v);
    }
    function s(v) {
      if (r++, n.containerState._closeFlow) {
        n.containerState._closeFlow = void 0, i && A();
        const P = n.events.length;
        let _ = P, C;
        for (; _--; ) if (n.events[_][0] === "exit" && n.events[_][1].type === "chunkFlow") {
          C = n.events[_][1].end;
          break;
        }
        b(r);
        let R = P;
        for (; R < n.events.length; ) n.events[R][1].end = {
          ...C
        }, R++;
        return se(n.events, _ + 1, 0, n.events.slice(P)), n.events.length = R, u(v);
      }
      return a(v);
    }
    function u(v) {
      if (r === t.length) {
        if (!i) return p(v);
        if (i.currentConstruct && i.currentConstruct.concrete) return g(v);
        n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
      }
      return n.containerState = {}, e.check(In, h, c)(v);
    }
    function h(v) {
      return i && A(), b(r), p(v);
    }
    function c(v) {
      return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, g(v);
    }
    function p(v) {
      return n.containerState = {}, e.attempt(In, f, g)(v);
    }
    function f(v) {
      return r++, t.push([
        n.currentConstruct,
        n.containerState
      ]), p(v);
    }
    function g(v) {
      if (v === null) {
        i && A(), b(0), e.consume(v);
        return;
      }
      return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
        _tokenizer: i,
        contentType: "flow",
        previous: o
      }), w(v);
    }
    function w(v) {
      if (v === null) {
        I(e.exit("chunkFlow"), true), b(0), e.consume(v);
        return;
      }
      return F(v) ? (e.consume(v), I(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(v), w);
    }
    function I(v, P) {
      const _ = n.sliceStream(v);
      if (P && _.push(null), v.previous = o, o && (o.next = v), o = v, i.defineSkip(v.start), i.write(_), n.parser.lazy[v.start.line]) {
        let C = i.events.length;
        for (; C--; ) if (i.events[C][1].start.offset < l && (!i.events[C][1].end || i.events[C][1].end.offset > l)) return;
        const R = n.events.length;
        let H = R, M, y;
        for (; H--; ) if (n.events[H][0] === "exit" && n.events[H][1].type === "chunkFlow") {
          if (M) {
            y = n.events[H][1].end;
            break;
          }
          M = true;
        }
        for (b(r), C = R; C < n.events.length; ) n.events[C][1].end = {
          ...y
        }, C++;
        se(n.events, H + 1, 0, n.events.slice(R)), n.events.length = C;
      }
    }
    function b(v) {
      let P = t.length;
      for (; P-- > v; ) {
        const _ = t[P];
        n.containerState = _[1], _[0].exit.call(n, e);
      }
      t.length = v;
    }
    function A() {
      i.write([
        null
      ]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
    }
  }
  function Dl(e, n, t) {
    return $(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function _e(e) {
    if (e === null || W(e) || Ne(e)) return 1;
    if (ht(e)) return 2;
  }
  function ft(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) {
      const o = e[i].resolveAll;
      o && !r.includes(o) && (n = o(n, t), r.push(o));
    }
    return n;
  }
  const Ot = {
    name: "attention",
    resolveAll: Ll,
    tokenize: Rl
  };
  function Ll(e, n) {
    let t = -1, r, i, o, l, a, s, u, h;
    for (; ++t < e.length; ) if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; ) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
        if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3)) continue;
        s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
        const c = {
          ...e[r][1].end
        }, p = {
          ...e[t][1].start
        };
        vn(c, -s), vn(p, s), l = {
          type: s > 1 ? "strongSequence" : "emphasisSequence",
          start: c,
          end: {
            ...e[r][1].end
          }
        }, a = {
          type: s > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...e[t][1].start
          },
          end: p
        }, o = {
          type: s > 1 ? "strongText" : "emphasisText",
          start: {
            ...e[r][1].end
          },
          end: {
            ...e[t][1].start
          }
        }, i = {
          type: s > 1 ? "strong" : "emphasis",
          start: {
            ...l.start
          },
          end: {
            ...a.end
          }
        }, e[r][1].end = {
          ...l.start
        }, e[t][1].start = {
          ...a.end
        }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ue(u, [
          [
            "enter",
            e[r][1],
            n
          ],
          [
            "exit",
            e[r][1],
            n
          ]
        ])), u = ue(u, [
          [
            "enter",
            i,
            n
          ],
          [
            "enter",
            l,
            n
          ],
          [
            "exit",
            l,
            n
          ],
          [
            "enter",
            o,
            n
          ]
        ]), u = ue(u, ft(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = ue(u, [
          [
            "exit",
            o,
            n
          ],
          [
            "enter",
            a,
            n
          ],
          [
            "exit",
            a,
            n
          ],
          [
            "exit",
            i,
            n
          ]
        ]), e[t][1].end.offset - e[t][1].start.offset ? (h = 2, u = ue(u, [
          [
            "enter",
            e[t][1],
            n
          ],
          [
            "exit",
            e[t][1],
            n
          ]
        ])) : h = 0, se(e, r - 1, t - r + 3, u), t = r + u.length - h - 2;
        break;
      }
    }
    for (t = -1; ++t < e.length; ) e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
    return e;
  }
  function Rl(e, n) {
    const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = _e(r);
    let o;
    return l;
    function l(s) {
      return o = s, e.enter("attentionSequence"), a(s);
    }
    function a(s) {
      if (s === o) return e.consume(s), a;
      const u = e.exit("attentionSequence"), h = _e(s), c = !h || h === 2 && i || t.includes(s), p = !i || i === 2 && h || t.includes(r);
      return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), n(s);
    }
  }
  function vn(e, n) {
    e.column += n, e.offset += n, e._bufferIndex += n;
  }
  const Ml = {
    name: "autolink",
    tokenize: Ol
  };
  function Ol(e, n, t) {
    let r = 0;
    return i;
    function i(f) {
      return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
    }
    function o(f) {
      return ne(f) ? (e.consume(f), l) : f === 64 ? t(f) : u(f);
    }
    function l(f) {
      return f === 43 || f === 45 || f === 46 || X(f) ? (r = 1, a(f)) : u(f);
    }
    function a(f) {
      return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || X(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
    }
    function s(f) {
      return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : f === null || f === 32 || f === 60 || ot(f) ? t(f) : (e.consume(f), s);
    }
    function u(f) {
      return f === 64 ? (e.consume(f), h) : Tl(f) ? (e.consume(f), u) : t(f);
    }
    function h(f) {
      return X(f) ? c(f) : t(f);
    }
    function c(f) {
      return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : p(f);
    }
    function p(f) {
      if ((f === 45 || X(f)) && r++ < 63) {
        const g = f === 45 ? p : c;
        return e.consume(f), g;
      }
      return t(f);
    }
  }
  const We = {
    partial: true,
    tokenize: Bl
  };
  function Bl(e, n, t) {
    return r;
    function r(o) {
      return L(o) ? $(e, i, "linePrefix")(o) : i(o);
    }
    function i(o) {
      return o === null || F(o) ? n(o) : t(o);
    }
  }
  const gr = {
    continuation: {
      tokenize: Hl
    },
    exit: Vl,
    name: "blockQuote",
    tokenize: $l
  };
  function $l(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      if (l === 62) {
        const a = r.containerState;
        return a.open || (e.enter("blockQuote", {
          _container: true
        }), a.open = true), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
      }
      return t(l);
    }
    function o(l) {
      return L(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
    }
  }
  function Hl(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return L(l) ? $(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
    }
    function o(l) {
      return e.attempt(gr, n, t)(l);
    }
  }
  function Vl(e) {
    e.exit("blockQuote");
  }
  const xr = {
    name: "characterEscape",
    tokenize: ql
  };
  function ql(e, n, t) {
    return r;
    function r(o) {
      return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
    }
    function i(o) {
      return zl(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
    }
  }
  const kr = {
    name: "characterReference",
    tokenize: Ul
  };
  function Ul(e, n, t) {
    const r = this;
    let i = 0, o, l;
    return a;
    function a(c) {
      return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
    }
    function s(c) {
      return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = X, h(c));
    }
    function u(c) {
      return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Nl, h) : (e.enter("characterReferenceValue"), o = 7, l = Mt, h(c));
    }
    function h(c) {
      if (c === 59 && i) {
        const p = e.exit("characterReferenceValue");
        return l === X && !Wt(r.sliceSerialize(p)) ? t(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
      }
      return l(c) && i++ < o ? (e.consume(c), h) : t(c);
    }
  }
  const An = {
    partial: true,
    tokenize: Ql
  }, Tn = {
    concrete: true,
    name: "codeFenced",
    tokenize: Wl
  };
  function Wl(e, n, t) {
    const r = this, i = {
      partial: true,
      tokenize: _
    };
    let o = 0, l = 0, a;
    return s;
    function s(C) {
      return u(C);
    }
    function u(C) {
      const R = r.events[r.events.length - 1];
      return o = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], true).length : 0, a = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(C);
    }
    function h(C) {
      return C === a ? (l++, e.consume(C), h) : l < 3 ? t(C) : (e.exit("codeFencedFenceSequence"), L(C) ? $(e, c, "whitespace")(C) : c(C));
    }
    function c(C) {
      return C === null || F(C) ? (e.exit("codeFencedFence"), r.interrupt ? n(C) : e.check(An, w, P)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
        contentType: "string"
      }), p(C));
    }
    function p(C) {
      return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : L(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, f, "whitespace")(C)) : C === 96 && C === a ? t(C) : (e.consume(C), p);
    }
    function f(C) {
      return C === null || F(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
        contentType: "string"
      }), g(C));
    }
    function g(C) {
      return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === a ? t(C) : (e.consume(C), g);
    }
    function w(C) {
      return e.attempt(i, P, I)(C);
    }
    function I(C) {
      return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), b;
    }
    function b(C) {
      return o > 0 && L(C) ? $(e, A, "linePrefix", o + 1)(C) : A(C);
    }
    function A(C) {
      return C === null || F(C) ? e.check(An, w, P)(C) : (e.enter("codeFlowValue"), v(C));
    }
    function v(C) {
      return C === null || F(C) ? (e.exit("codeFlowValue"), A(C)) : (e.consume(C), v);
    }
    function P(C) {
      return e.exit("codeFenced"), n(C);
    }
    function _(C, R, H) {
      let M = 0;
      return y;
      function y(D) {
        return C.enter("lineEnding"), C.consume(D), C.exit("lineEnding"), T;
      }
      function T(D) {
        return C.enter("codeFencedFence"), L(D) ? $(C, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : z(D);
      }
      function z(D) {
        return D === a ? (C.enter("codeFencedFenceSequence"), q(D)) : H(D);
      }
      function q(D) {
        return D === a ? (M++, C.consume(D), q) : M >= l ? (C.exit("codeFencedFenceSequence"), L(D) ? $(C, U, "whitespace")(D) : U(D)) : H(D);
      }
      function U(D) {
        return D === null || F(D) ? (C.exit("codeFencedFence"), R(D)) : H(D);
      }
    }
  }
  function Ql(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
    }
    function o(l) {
      return r.parser.lazy[r.now().line] ? t(l) : n(l);
    }
  }
  const Ct = {
    name: "codeIndented",
    tokenize: Gl
  }, Kl = {
    partial: true,
    tokenize: Yl
  };
  function Gl(e, n, t) {
    const r = this;
    return i;
    function i(u) {
      return e.enter("codeIndented"), $(e, o, "linePrefix", 5)(u);
    }
    function o(u) {
      const h = r.events[r.events.length - 1];
      return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], true).length >= 4 ? l(u) : t(u);
    }
    function l(u) {
      return u === null ? s(u) : F(u) ? e.attempt(Kl, l, s)(u) : (e.enter("codeFlowValue"), a(u));
    }
    function a(u) {
      return u === null || F(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
    }
    function s(u) {
      return e.exit("codeIndented"), n(u);
    }
  }
  function Yl(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return r.parser.lazy[r.now().line] ? t(l) : F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : $(e, o, "linePrefix", 5)(l);
    }
    function o(l) {
      const a = r.events[r.events.length - 1];
      return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? n(l) : F(l) ? i(l) : t(l);
    }
  }
  const Jl = {
    name: "codeText",
    previous: Zl,
    resolve: Xl,
    tokenize: eo
  };
  function Xl(e) {
    let n = e.length - 4, t = 3, r, i;
    if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
      for (r = t; ++r < n; ) if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
    }
    for (r = t - 1, n++; ++r <= n; ) i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
    return e;
  }
  function Zl(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function eo(e, n, t) {
    let r = 0, i, o;
    return l;
    function l(c) {
      return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
    }
    function a(c) {
      return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
    }
    function s(c) {
      return c === null ? t(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
    }
    function u(c) {
      return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
    }
    function h(c) {
      return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(c)) : (o.type = "codeTextData", u(c));
    }
  }
  class to {
    constructor(n) {
      this.left = n ? [
        ...n
      ] : [], this.right = [];
    }
    get(n) {
      if (n < 0 || n >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(n, t) {
      const r = t ?? Number.POSITIVE_INFINITY;
      return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(n, t, r) {
      const i = t || 0;
      this.setCursor(Math.trunc(n));
      const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
      return r && Oe(this.left, r), o.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(n) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
    }
    pushMany(n) {
      this.setCursor(Number.POSITIVE_INFINITY), Oe(this.left, n);
    }
    unshift(n) {
      this.setCursor(0), this.right.push(n);
    }
    unshiftMany(n) {
      this.setCursor(0), Oe(this.right, n.reverse());
    }
    setCursor(n) {
      if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0)) if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Oe(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Oe(this.left, t.reverse());
      }
    }
  }
  function Oe(e, n) {
    let t = 0;
    if (n.length < 1e4) e.push(...n);
    else for (; t < n.length; ) e.push(...n.slice(t, t + 1e4)), t += 1e4;
  }
  function br(e) {
    const n = {};
    let t = -1, r, i, o, l, a, s, u;
    const h = new to(e);
    for (; ++t < h.length; ) {
      for (; t in n; ) t = n[t];
      if (r = h.get(t), t && r[1].type === "chunkFlow" && h.get(t - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content")) for (; ++o < s.length && s[o][1].type !== "content"; ) s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = true, o++);
      if (r[0] === "enter") r[1].contentType && (Object.assign(n, no(h, t)), t = n[t], u = true);
      else if (r[1]._container) {
        for (o = t, i = void 0; o--; ) if (l = h.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
        i && (r[1].end = {
          ...h.get(i)[1].start
        }, a = h.slice(i, t), a.unshift(r), h.splice(i, t - i + 1, a));
      }
    }
    return se(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
  }
  function no(e, n) {
    const t = e.get(n)[1], r = e.get(n)[2];
    let i = n - 1;
    const o = [];
    let l = t._tokenizer;
    l || (l = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (l._contentTypeTextTrailing = true));
    const a = l.events, s = [], u = {};
    let h, c, p = -1, f = t, g = 0, w = 0;
    const I = [
      w
    ];
    for (; f; ) {
      for (; e.get(++i)[1] !== f; ) ;
      o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = true), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
    }
    for (f = t; ++p < a.length; ) a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (w = p + 1, I.push(w), f._tokenizer = void 0, f.previous = void 0, f = f.next);
    for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : I.pop(), p = I.length; p--; ) {
      const b = a.slice(I[p], I[p + 1]), A = o.pop();
      s.push([
        A,
        A + b.length - 1
      ]), e.splice(A, 2, b);
    }
    for (s.reverse(), p = -1; ++p < s.length; ) u[g + s[p][0]] = g + s[p][1], g += s[p][1] - s[p][0] - 1;
    return u;
  }
  const ro = {
    resolve: lo,
    tokenize: oo
  }, io = {
    partial: true,
    tokenize: ao
  };
  function lo(e) {
    return br(e), e;
  }
  function oo(e, n) {
    let t;
    return r;
    function r(a) {
      return e.enter("content"), t = e.enter("chunkContent", {
        contentType: "content"
      }), i(a);
    }
    function i(a) {
      return a === null ? o(a) : F(a) ? e.check(io, l, o)(a) : (e.consume(a), i);
    }
    function o(a) {
      return e.exit("chunkContent"), e.exit("content"), n(a);
    }
    function l(a) {
      return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
        contentType: "content",
        previous: t
      }), t = t.next, i;
    }
  }
  function ao(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), $(e, o, "linePrefix");
    }
    function o(l) {
      if (l === null || F(l)) return t(l);
      const a = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
    }
  }
  function yr(e, n, t, r, i, o, l, a, s) {
    const u = s || Number.POSITIVE_INFINITY;
    let h = 0;
    return c;
    function c(b) {
      return b === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(b), e.exit(o), p) : b === null || b === 32 || b === 41 || ot(b) ? t(b) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), w(b));
    }
    function p(b) {
      return b === 62 ? (e.enter(o), e.consume(b), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), f(b));
    }
    function f(b) {
      return b === 62 ? (e.exit("chunkString"), e.exit(a), p(b)) : b === null || b === 60 || F(b) ? t(b) : (e.consume(b), b === 92 ? g : f);
    }
    function g(b) {
      return b === 60 || b === 62 || b === 92 ? (e.consume(b), f) : f(b);
    }
    function w(b) {
      return !h && (b === null || b === 41 || W(b)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(b)) : h < u && b === 40 ? (e.consume(b), h++, w) : b === 41 ? (e.consume(b), h--, w) : b === null || b === 32 || b === 40 || ot(b) ? t(b) : (e.consume(b), b === 92 ? I : w);
    }
    function I(b) {
      return b === 40 || b === 41 || b === 92 ? (e.consume(b), w) : w(b);
    }
  }
  function wr(e, n, t, r, i, o) {
    const l = this;
    let a = 0, s;
    return u;
    function u(f) {
      return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), h;
    }
    function h(f) {
      return a > 999 || f === null || f === 91 || f === 93 && !s || f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), n) : F(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
        contentType: "string"
      }), c(f));
    }
    function c(f) {
      return f === null || f === 91 || f === 93 || F(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !L(f)), f === 92 ? p : c);
    }
    function p(f) {
      return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
    }
  }
  function Sr(e, n, t, r, i, o) {
    let l;
    return a;
    function a(p) {
      return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : t(p);
    }
    function s(p) {
      return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : (e.enter(o), u(p));
    }
    function u(p) {
      return p === l ? (e.exit(o), s(l)) : p === null ? t(p) : F(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), $(e, u, "linePrefix")) : (e.enter("chunkString", {
        contentType: "string"
      }), h(p));
    }
    function h(p) {
      return p === l || p === null || F(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
    }
    function c(p) {
      return p === l || p === 92 ? (e.consume(p), h) : h(p);
    }
  }
  function He(e, n) {
    let t;
    return r;
    function r(i) {
      return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = true, r) : L(i) ? $(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
    }
  }
  const so = {
    name: "definition",
    tokenize: co
  }, uo = {
    partial: true,
    tokenize: ho
  };
  function co(e, n, t) {
    const r = this;
    let i;
    return o;
    function o(f) {
      return e.enter("definition"), l(f);
    }
    function l(f) {
      return wr.call(r, e, a, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(f);
    }
    function a(f) {
      return i = he(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : t(f);
    }
    function s(f) {
      return W(f) ? He(e, u)(f) : u(f);
    }
    function u(f) {
      return yr(e, h, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(f);
    }
    function h(f) {
      return e.attempt(uo, c, c)(f);
    }
    function c(f) {
      return L(f) ? $(e, p, "whitespace")(f) : p(f);
    }
    function p(f) {
      return f === null || F(f) ? (e.exit("definition"), r.parser.defined.push(i), n(f)) : t(f);
    }
  }
  function ho(e, n, t) {
    return r;
    function r(a) {
      return W(a) ? He(e, i)(a) : t(a);
    }
    function i(a) {
      return Sr(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
    }
    function o(a) {
      return L(a) ? $(e, l, "whitespace")(a) : l(a);
    }
    function l(a) {
      return a === null || F(a) ? n(a) : t(a);
    }
  }
  const fo = {
    name: "hardBreakEscape",
    tokenize: po
  };
  function po(e, n, t) {
    return r;
    function r(o) {
      return e.enter("hardBreakEscape"), e.consume(o), i;
    }
    function i(o) {
      return F(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
    }
  }
  const mo = {
    name: "headingAtx",
    resolve: go,
    tokenize: xo
  };
  function go(e, n) {
    let t = e.length - 2, r = 3, i, o;
    return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
      type: "atxHeadingText",
      start: e[r][1].start,
      end: e[t][1].end
    }, o = {
      type: "chunkText",
      start: e[r][1].start,
      end: e[t][1].end,
      contentType: "text"
    }, se(e, r, t - r + 1, [
      [
        "enter",
        i,
        n
      ],
      [
        "enter",
        o,
        n
      ],
      [
        "exit",
        o,
        n
      ],
      [
        "exit",
        i,
        n
      ]
    ])), e;
  }
  function xo(e, n, t) {
    let r = 0;
    return i;
    function i(h) {
      return e.enter("atxHeading"), o(h);
    }
    function o(h) {
      return e.enter("atxHeadingSequence"), l(h);
    }
    function l(h) {
      return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || W(h) ? (e.exit("atxHeadingSequence"), a(h)) : t(h);
    }
    function a(h) {
      return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || F(h) ? (e.exit("atxHeading"), n(h)) : L(h) ? $(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
    }
    function s(h) {
      return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
    }
    function u(h) {
      return h === null || h === 35 || W(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
    }
  }
  const ko = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], Nn = [
    "pre",
    "script",
    "style",
    "textarea"
  ], bo = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: So,
    tokenize: Co
  }, yo = {
    partial: true,
    tokenize: Io
  }, wo = {
    partial: true,
    tokenize: Eo
  };
  function So(e) {
    let n = e.length;
    for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); ) ;
    return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
  }
  function Co(e, n, t) {
    const r = this;
    let i, o, l, a, s;
    return u;
    function u(d) {
      return h(d);
    }
    function h(d) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), c;
    }
    function c(d) {
      return d === 33 ? (e.consume(d), p) : d === 47 ? (e.consume(d), o = true, w) : d === 63 ? (e.consume(d), i = 3, r.interrupt ? n : m) : ne(d) ? (e.consume(d), l = String.fromCharCode(d), I) : t(d);
    }
    function p(d) {
      return d === 45 ? (e.consume(d), i = 2, f) : d === 91 ? (e.consume(d), i = 5, a = 0, g) : ne(d) ? (e.consume(d), i = 4, r.interrupt ? n : m) : t(d);
    }
    function f(d) {
      return d === 45 ? (e.consume(d), r.interrupt ? n : m) : t(d);
    }
    function g(d) {
      const Y = "CDATA[";
      return d === Y.charCodeAt(a++) ? (e.consume(d), a === Y.length ? r.interrupt ? n : z : g) : t(d);
    }
    function w(d) {
      return ne(d) ? (e.consume(d), l = String.fromCharCode(d), I) : t(d);
    }
    function I(d) {
      if (d === null || d === 47 || d === 62 || W(d)) {
        const Y = d === 47, oe = l.toLowerCase();
        return !Y && !o && Nn.includes(oe) ? (i = 1, r.interrupt ? n(d) : z(d)) : ko.includes(l.toLowerCase()) ? (i = 6, Y ? (e.consume(d), b) : r.interrupt ? n(d) : z(d)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(d) : o ? A(d) : v(d));
      }
      return d === 45 || X(d) ? (e.consume(d), l += String.fromCharCode(d), I) : t(d);
    }
    function b(d) {
      return d === 62 ? (e.consume(d), r.interrupt ? n : z) : t(d);
    }
    function A(d) {
      return L(d) ? (e.consume(d), A) : y(d);
    }
    function v(d) {
      return d === 47 ? (e.consume(d), y) : d === 58 || d === 95 || ne(d) ? (e.consume(d), P) : L(d) ? (e.consume(d), v) : y(d);
    }
    function P(d) {
      return d === 45 || d === 46 || d === 58 || d === 95 || X(d) ? (e.consume(d), P) : _(d);
    }
    function _(d) {
      return d === 61 ? (e.consume(d), C) : L(d) ? (e.consume(d), _) : v(d);
    }
    function C(d) {
      return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? t(d) : d === 34 || d === 39 ? (e.consume(d), s = d, R) : L(d) ? (e.consume(d), C) : H(d);
    }
    function R(d) {
      return d === s ? (e.consume(d), s = null, M) : d === null || F(d) ? t(d) : (e.consume(d), R);
    }
    function H(d) {
      return d === null || d === 34 || d === 39 || d === 47 || d === 60 || d === 61 || d === 62 || d === 96 || W(d) ? _(d) : (e.consume(d), H);
    }
    function M(d) {
      return d === 47 || d === 62 || L(d) ? v(d) : t(d);
    }
    function y(d) {
      return d === 62 ? (e.consume(d), T) : t(d);
    }
    function T(d) {
      return d === null || F(d) ? z(d) : L(d) ? (e.consume(d), T) : t(d);
    }
    function z(d) {
      return d === 45 && i === 2 ? (e.consume(d), K) : d === 60 && i === 1 ? (e.consume(d), Q) : d === 62 && i === 4 ? (e.consume(d), re) : d === 63 && i === 3 ? (e.consume(d), m) : d === 93 && i === 5 ? (e.consume(d), ee) : F(d) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(yo, ie, q)(d)) : d === null || F(d) ? (e.exit("htmlFlowData"), q(d)) : (e.consume(d), z);
    }
    function q(d) {
      return e.check(wo, U, ie)(d);
    }
    function U(d) {
      return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), D;
    }
    function D(d) {
      return d === null || F(d) ? q(d) : (e.enter("htmlFlowData"), z(d));
    }
    function K(d) {
      return d === 45 ? (e.consume(d), m) : z(d);
    }
    function Q(d) {
      return d === 47 ? (e.consume(d), l = "", J) : z(d);
    }
    function J(d) {
      if (d === 62) {
        const Y = l.toLowerCase();
        return Nn.includes(Y) ? (e.consume(d), re) : z(d);
      }
      return ne(d) && l.length < 8 ? (e.consume(d), l += String.fromCharCode(d), J) : z(d);
    }
    function ee(d) {
      return d === 93 ? (e.consume(d), m) : z(d);
    }
    function m(d) {
      return d === 62 ? (e.consume(d), re) : d === 45 && i === 2 ? (e.consume(d), m) : z(d);
    }
    function re(d) {
      return d === null || F(d) ? (e.exit("htmlFlowData"), ie(d)) : (e.consume(d), re);
    }
    function ie(d) {
      return e.exit("htmlFlow"), n(d);
    }
  }
  function Eo(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
    }
    function o(l) {
      return r.parser.lazy[r.now().line] ? t(l) : n(l);
    }
  }
  function Io(e, n, t) {
    return r;
    function r(i) {
      return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(We, n, t);
    }
  }
  const vo = {
    name: "htmlText",
    tokenize: Ao
  };
  function Ao(e, n, t) {
    const r = this;
    let i, o, l;
    return a;
    function a(m) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), s;
    }
    function s(m) {
      return m === 33 ? (e.consume(m), u) : m === 47 ? (e.consume(m), _) : m === 63 ? (e.consume(m), v) : ne(m) ? (e.consume(m), H) : t(m);
    }
    function u(m) {
      return m === 45 ? (e.consume(m), h) : m === 91 ? (e.consume(m), o = 0, g) : ne(m) ? (e.consume(m), A) : t(m);
    }
    function h(m) {
      return m === 45 ? (e.consume(m), f) : t(m);
    }
    function c(m) {
      return m === null ? t(m) : m === 45 ? (e.consume(m), p) : F(m) ? (l = c, Q(m)) : (e.consume(m), c);
    }
    function p(m) {
      return m === 45 ? (e.consume(m), f) : c(m);
    }
    function f(m) {
      return m === 62 ? K(m) : m === 45 ? p(m) : c(m);
    }
    function g(m) {
      const re = "CDATA[";
      return m === re.charCodeAt(o++) ? (e.consume(m), o === re.length ? w : g) : t(m);
    }
    function w(m) {
      return m === null ? t(m) : m === 93 ? (e.consume(m), I) : F(m) ? (l = w, Q(m)) : (e.consume(m), w);
    }
    function I(m) {
      return m === 93 ? (e.consume(m), b) : w(m);
    }
    function b(m) {
      return m === 62 ? K(m) : m === 93 ? (e.consume(m), b) : w(m);
    }
    function A(m) {
      return m === null || m === 62 ? K(m) : F(m) ? (l = A, Q(m)) : (e.consume(m), A);
    }
    function v(m) {
      return m === null ? t(m) : m === 63 ? (e.consume(m), P) : F(m) ? (l = v, Q(m)) : (e.consume(m), v);
    }
    function P(m) {
      return m === 62 ? K(m) : v(m);
    }
    function _(m) {
      return ne(m) ? (e.consume(m), C) : t(m);
    }
    function C(m) {
      return m === 45 || X(m) ? (e.consume(m), C) : R(m);
    }
    function R(m) {
      return F(m) ? (l = R, Q(m)) : L(m) ? (e.consume(m), R) : K(m);
    }
    function H(m) {
      return m === 45 || X(m) ? (e.consume(m), H) : m === 47 || m === 62 || W(m) ? M(m) : t(m);
    }
    function M(m) {
      return m === 47 ? (e.consume(m), K) : m === 58 || m === 95 || ne(m) ? (e.consume(m), y) : F(m) ? (l = M, Q(m)) : L(m) ? (e.consume(m), M) : K(m);
    }
    function y(m) {
      return m === 45 || m === 46 || m === 58 || m === 95 || X(m) ? (e.consume(m), y) : T(m);
    }
    function T(m) {
      return m === 61 ? (e.consume(m), z) : F(m) ? (l = T, Q(m)) : L(m) ? (e.consume(m), T) : M(m);
    }
    function z(m) {
      return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e.consume(m), i = m, q) : F(m) ? (l = z, Q(m)) : L(m) ? (e.consume(m), z) : (e.consume(m), U);
    }
    function q(m) {
      return m === i ? (e.consume(m), i = void 0, D) : m === null ? t(m) : F(m) ? (l = q, Q(m)) : (e.consume(m), q);
    }
    function U(m) {
      return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? t(m) : m === 47 || m === 62 || W(m) ? M(m) : (e.consume(m), U);
    }
    function D(m) {
      return m === 47 || m === 62 || W(m) ? M(m) : t(m);
    }
    function K(m) {
      return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(m);
    }
    function Q(m) {
      return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), J;
    }
    function J(m) {
      return L(m) ? $(e, ee, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : ee(m);
    }
    function ee(m) {
      return e.enter("htmlTextData"), l(m);
    }
  }
  const Zt = {
    name: "labelEnd",
    resolveAll: jo,
    resolveTo: Fo,
    tokenize: Po
  }, To = {
    tokenize: _o
  }, No = {
    tokenize: Do
  }, zo = {
    tokenize: Lo
  };
  function jo(e) {
    let n = -1;
    const t = [];
    for (; ++n < e.length; ) {
      const r = e[n][1];
      if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
        const i = r.type === "labelImage" ? 4 : 2;
        r.type = "data", n += i;
      }
    }
    return e.length !== t.length && se(e, 0, e.length, t), e;
  }
  function Fo(e, n) {
    let t = e.length, r = 0, i, o, l, a;
    for (; t--; ) if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = true);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = t);
    const s = {
      type: e[o][1].type === "labelLink" ? "link" : "image",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    }, u = {
      type: "label",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[l][1].end
      }
    }, h = {
      type: "labelText",
      start: {
        ...e[o + r + 2][1].end
      },
      end: {
        ...e[l - 2][1].start
      }
    };
    return a = [
      [
        "enter",
        s,
        n
      ],
      [
        "enter",
        u,
        n
      ]
    ], a = ue(a, e.slice(o + 1, o + r + 3)), a = ue(a, [
      [
        "enter",
        h,
        n
      ]
    ]), a = ue(a, ft(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), n)), a = ue(a, [
      [
        "exit",
        h,
        n
      ],
      e[l - 2],
      e[l - 1],
      [
        "exit",
        u,
        n
      ]
    ]), a = ue(a, e.slice(l + 1)), a = ue(a, [
      [
        "exit",
        s,
        n
      ]
    ]), se(e, o, e.length, a), e;
  }
  function Po(e, n, t) {
    const r = this;
    let i = r.events.length, o, l;
    for (; i--; ) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
    return a;
    function a(p) {
      return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(he(r.sliceSerialize({
        start: o.end,
        end: r.now()
      }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(p);
    }
    function s(p) {
      return p === 40 ? e.attempt(To, h, l ? h : c)(p) : p === 91 ? e.attempt(No, h, l ? u : c)(p) : l ? h(p) : c(p);
    }
    function u(p) {
      return e.attempt(zo, h, c)(p);
    }
    function h(p) {
      return n(p);
    }
    function c(p) {
      return o._balanced = true, t(p);
    }
  }
  function _o(e, n, t) {
    return r;
    function r(c) {
      return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
    }
    function i(c) {
      return W(c) ? He(e, o)(c) : o(c);
    }
    function o(c) {
      return c === 41 ? h(c) : yr(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
    }
    function l(c) {
      return W(c) ? He(e, s)(c) : h(c);
    }
    function a(c) {
      return t(c);
    }
    function s(c) {
      return c === 34 || c === 39 || c === 40 ? Sr(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
    }
    function u(c) {
      return W(c) ? He(e, h)(c) : h(c);
    }
    function h(c) {
      return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), n) : t(c);
    }
  }
  function Do(e, n, t) {
    const r = this;
    return i;
    function i(a) {
      return wr.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
    }
    function o(a) {
      return r.parser.defined.includes(he(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
    }
    function l(a) {
      return t(a);
    }
  }
  function Lo(e, n, t) {
    return r;
    function r(o) {
      return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
    }
    function i(o) {
      return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
    }
  }
  const Ro = {
    name: "labelStartImage",
    resolveAll: Zt.resolveAll,
    tokenize: Mo
  };
  function Mo(e, n, t) {
    const r = this;
    return i;
    function i(a) {
      return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
    }
    function o(a) {
      return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
    }
    function l(a) {
      return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
    }
  }
  const Oo = {
    name: "labelStartLink",
    resolveAll: Zt.resolveAll,
    tokenize: Bo
  };
  function Bo(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
    }
    function o(l) {
      return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
    }
  }
  const Et = {
    name: "lineEnding",
    tokenize: $o
  };
  function $o(e, n) {
    return t;
    function t(r) {
      return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), $(e, n, "linePrefix");
    }
  }
  const rt = {
    name: "thematicBreak",
    tokenize: Ho
  };
  function Ho(e, n, t) {
    let r = 0, i;
    return o;
    function o(u) {
      return e.enter("thematicBreak"), l(u);
    }
    function l(u) {
      return i = u, a(u);
    }
    function a(u) {
      return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || F(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
    }
    function s(u) {
      return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), L(u) ? $(e, a, "whitespace")(u) : a(u));
    }
  }
  const le = {
    continuation: {
      tokenize: Wo
    },
    exit: Ko,
    name: "list",
    tokenize: Uo
  }, Vo = {
    partial: true,
    tokenize: Go
  }, qo = {
    partial: true,
    tokenize: Qo
  };
  function Uo(e, n, t) {
    const r = this, i = r.events[r.events.length - 1];
    let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0, l = 0;
    return a;
    function a(f) {
      const g = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
      if (g === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Mt(f)) {
        if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
          _container: true
        })), g === "listUnordered") return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(rt, t, u)(f) : u(f);
        if (!r.interrupt || f === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
      }
      return t(f);
    }
    function s(f) {
      return Mt(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : t(f);
    }
    function u(f) {
      return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(We, r.interrupt ? t : h, e.attempt(Vo, p, c));
    }
    function h(f) {
      return r.containerState.initialBlankLine = true, o++, p(f);
    }
    function c(f) {
      return L(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : t(f);
    }
    function p(f) {
      return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), true).length, n(f);
    }
  }
  function Wo(e, n, t) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(We, i, o);
    function i(a) {
      return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, n, "listItemIndent", r.containerState.size + 1)(a);
    }
    function o(a) {
      return r.containerState.furtherBlankLines || !L(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qo, n, l)(a));
    }
    function l(a) {
      return r.containerState._closeFlow = true, r.interrupt = void 0, $(e, e.attempt(le, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
    }
  }
  function Qo(e, n, t) {
    const r = this;
    return $(e, i, "listItemIndent", r.containerState.size + 1);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], true).length === r.containerState.size ? n(o) : t(o);
    }
  }
  function Ko(e) {
    e.exit(this.containerState.type);
  }
  function Go(e, n, t) {
    const r = this;
    return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return !L(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
    }
  }
  const zn = {
    name: "setextUnderline",
    resolveTo: Yo,
    tokenize: Jo
  };
  function Yo(e, n) {
    let t = e.length, r, i, o;
    for (; t--; ) if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
    const l = {
      type: "setextHeading",
      start: {
        ...e[r][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    };
    return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, [
      "enter",
      l,
      n
    ]), e.splice(o + 1, 0, [
      "exit",
      e[r][1],
      n
    ]), e[r][1].end = {
      ...e[o][1].end
    }) : e[r][1] = l, e.push([
      "exit",
      l,
      n
    ]), e;
  }
  function Jo(e, n, t) {
    const r = this;
    let i;
    return o;
    function o(u) {
      let h = r.events.length, c;
      for (; h--; ) if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
      return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : t(u);
    }
    function l(u) {
      return e.enter("setextHeadingLineSequence"), a(u);
    }
    function a(u) {
      return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), L(u) ? $(e, s, "lineSuffix")(u) : s(u));
    }
    function s(u) {
      return u === null || F(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
    }
  }
  const Xo = {
    tokenize: Zo
  };
  function Zo(e) {
    const n = this, t = e.attempt(We, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ro, i)), "linePrefix")));
    return t;
    function r(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
    }
    function i(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
    }
  }
  const ea = {
    resolveAll: Er()
  }, ta = Cr("string"), na = Cr("text");
  function Cr(e) {
    return {
      resolveAll: Er(e === "text" ? ra : void 0),
      tokenize: n
    };
    function n(t) {
      const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
      return l;
      function l(h) {
        return u(h) ? o(h) : a(h);
      }
      function a(h) {
        if (h === null) {
          t.consume(h);
          return;
        }
        return t.enter("data"), t.consume(h), s;
      }
      function s(h) {
        return u(h) ? (t.exit("data"), o(h)) : (t.consume(h), s);
      }
      function u(h) {
        if (h === null) return true;
        const c = i[h];
        let p = -1;
        if (c) for (; ++p < c.length; ) {
          const f = c[p];
          if (!f.previous || f.previous.call(r, r.previous)) return true;
        }
        return false;
      }
    }
  }
  function Er(e) {
    return n;
    function n(t, r) {
      let i = -1, o;
      for (; ++i <= t.length; ) o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
      return e ? e(t, r) : t;
    }
  }
  function ra(e, n) {
    let t = 0;
    for (; ++t <= e.length; ) if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; ) a++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2) s = true, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, [
          "enter",
          u,
          n
        ], [
          "exit",
          u,
          n
        ]), t += 2);
      }
      t++;
    }
    return e;
  }
  const ia = {
    42: le,
    43: le,
    45: le,
    48: le,
    49: le,
    50: le,
    51: le,
    52: le,
    53: le,
    54: le,
    55: le,
    56: le,
    57: le,
    62: gr
  }, la = {
    91: so
  }, oa = {
    [-2]: Ct,
    [-1]: Ct,
    32: Ct
  }, aa = {
    35: mo,
    42: rt,
    45: [
      zn,
      rt
    ],
    60: bo,
    61: zn,
    95: rt,
    96: Tn,
    126: Tn
  }, sa = {
    38: kr,
    92: xr
  }, ua = {
    [-5]: Et,
    [-4]: Et,
    [-3]: Et,
    33: Ro,
    38: kr,
    42: Ot,
    60: [
      Ml,
      vo
    ],
    91: Oo,
    92: [
      fo,
      xr
    ],
    93: Zt,
    95: Ot,
    96: Jl
  }, ca = {
    null: [
      Ot,
      ea
    ]
  }, ha = {
    null: [
      42,
      95
    ]
  }, fa = {
    null: []
  }, pa = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: ha,
    contentInitial: la,
    disable: fa,
    document: ia,
    flow: aa,
    flowInitial: oa,
    insideSpan: ca,
    string: sa,
    text: ua
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function ma(e, n, t) {
    let r = {
      _bufferIndex: -1,
      _index: 0,
      line: t && t.line || 1,
      column: t && t.column || 1,
      offset: t && t.offset || 0
    };
    const i = {}, o = [];
    let l = [], a = [];
    const s = {
      attempt: R(_),
      check: R(C),
      consume: A,
      enter: v,
      exit: P,
      interrupt: R(C, {
        interrupt: true
      })
    }, u = {
      code: null,
      containerState: {},
      defineSkip: w,
      events: [],
      now: g,
      parser: e,
      previous: null,
      sliceSerialize: p,
      sliceStream: f,
      write: c
    };
    let h = n.tokenize.call(u, s);
    return n.resolveAll && o.push(n), u;
    function c(T) {
      return l = ue(l, T), I(), l[l.length - 1] !== null ? [] : (H(n, 0), u.events = ft(o, u.events, u), u.events);
    }
    function p(T, z) {
      return ga(f(T), z);
    }
    function f(T) {
      return da(l, T);
    }
    function g() {
      const { _bufferIndex: T, _index: z, line: q, column: U, offset: D } = r;
      return {
        _bufferIndex: T,
        _index: z,
        line: q,
        column: U,
        offset: D
      };
    }
    function w(T) {
      i[T.line] = T.column, y();
    }
    function I() {
      let T;
      for (; r._index < l.length; ) {
        const z = l[r._index];
        if (typeof z == "string") for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < z.length; ) b(z.charCodeAt(r._bufferIndex));
        else b(z);
      }
    }
    function b(T) {
      h = h(T);
    }
    function A(T) {
      F(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, y()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
    }
    function v(T, z) {
      const q = z || {};
      return q.type = T, q.start = g(), u.events.push([
        "enter",
        q,
        u
      ]), a.push(q), q;
    }
    function P(T) {
      const z = a.pop();
      return z.end = g(), u.events.push([
        "exit",
        z,
        u
      ]), z;
    }
    function _(T, z) {
      H(T, z.from);
    }
    function C(T, z) {
      z.restore();
    }
    function R(T, z) {
      return q;
      function q(U, D, K) {
        let Q, J, ee, m;
        return Array.isArray(U) ? ie(U) : "tokenize" in U ? ie([
          U
        ]) : re(U);
        function re(G) {
          return xe;
          function xe(fe) {
            const pe = fe !== null && G[fe], ke = fe !== null && G.null, ze = [
              ...Array.isArray(pe) ? pe : pe ? [
                pe
              ] : [],
              ...Array.isArray(ke) ? ke : ke ? [
                ke
              ] : []
            ];
            return ie(ze)(fe);
          }
        }
        function ie(G) {
          return Q = G, J = 0, G.length === 0 ? K : d(G[J]);
        }
        function d(G) {
          return xe;
          function xe(fe) {
            return m = M(), ee = G, G.partial || (u.currentConstruct = G), G.name && u.parser.constructs.disable.null.includes(G.name) ? oe() : G.tokenize.call(z ? Object.assign(Object.create(u), z) : u, s, Y, oe)(fe);
          }
        }
        function Y(G) {
          return T(ee, m), D;
        }
        function oe(G) {
          return m.restore(), ++J < Q.length ? d(Q[J]) : K;
        }
      }
    }
    function H(T, z) {
      T.resolveAll && !o.includes(T) && o.push(T), T.resolve && se(u.events, z, u.events.length - z, T.resolve(u.events.slice(z), u)), T.resolveTo && (u.events = T.resolveTo(u.events, u));
    }
    function M() {
      const T = g(), z = u.previous, q = u.currentConstruct, U = u.events.length, D = Array.from(a);
      return {
        from: U,
        restore: K
      };
      function K() {
        r = T, u.previous = z, u.currentConstruct = q, u.events.length = U, a = D, y();
      }
    }
    function y() {
      r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
    }
  }
  function da(e, n) {
    const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
    let l;
    if (t === i) l = [
      e[t].slice(r, o)
    ];
    else {
      if (l = e.slice(t, i), r > -1) {
        const a = l[0];
        typeof a == "string" ? l[0] = a.slice(r) : l.shift();
      }
      o > 0 && l.push(e[i].slice(0, o));
    }
    return l;
  }
  function ga(e, n) {
    let t = -1;
    const r = [];
    let i;
    for (; ++t < e.length; ) {
      const o = e[t];
      let l;
      if (typeof o == "string") l = o;
      else switch (o) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = n ? " " : "	";
          break;
        }
        case -1: {
          if (!n && i) continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(o);
      }
      i = o === -2, r.push(l);
    }
    return r.join("");
  }
  function xa(e) {
    const r = {
      constructs: mr([
        pa,
        ...(e || {}).extensions || []
      ]),
      content: i(jl),
      defined: [],
      document: i(Pl),
      flow: i(Xo),
      lazy: {},
      string: i(ta),
      text: i(na)
    };
    return r;
    function i(o) {
      return l;
      function l(a) {
        return ma(r, o, a);
      }
    }
  }
  function ka(e) {
    for (; !br(e); ) ;
    return e;
  }
  const jn = /[\0\t\n\r]/g;
  function ba() {
    let e = 1, n = "", t = true, r;
    return i;
    function i(o, l, a) {
      const s = [];
      let u, h, c, p, f;
      for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
        if (jn.lastIndex = c, u = jn.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
          n = o.slice(c);
          break;
        }
        if (f === 10 && c === p && r) s.push(-3), r = void 0;
        else switch (r && (s.push(-5), r = void 0), c < p && (s.push(o.slice(c, p)), e += p - c), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, s.push(-2); e++ < h; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = true, e = 1;
        }
        c = p + 1;
      }
      return a && (r && s.push(-5), n && s.push(n), s.push(null)), s;
    }
  }
  const ya = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function wa(e) {
    return e.replace(ya, Sa);
  }
  function Sa(e, n, t) {
    if (n) return n;
    if (t.charCodeAt(0) === 35) {
      const i = t.charCodeAt(1), o = i === 120 || i === 88;
      return dr(t.slice(o ? 2 : 1), o ? 16 : 10);
    }
    return Wt(t) || e;
  }
  const Ir = {}.hasOwnProperty;
  function Ca(e, n, t) {
    return typeof n != "string" && (t = n, n = void 0), Ea(t)(ka(xa(t).document().write(ba()(e, n, true))));
  }
  function Ea(e) {
    const n = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: o(Re),
        autolinkProtocol: M,
        autolinkEmail: M,
        atxHeading: o(Le),
        blockQuote: o(ke),
        characterEscape: M,
        characterReference: M,
        codeFenced: o(ze),
        codeFencedFenceInfo: l,
        codeFencedFenceMeta: l,
        codeIndented: o(ze, l),
        codeText: o(gt, l),
        codeTextData: M,
        data: M,
        codeFlowValue: M,
        definition: o(Ee),
        definitionDestinationString: l,
        definitionLabelString: l,
        definitionTitleString: l,
        emphasis: o(Ke),
        hardBreakEscape: o(Ge),
        hardBreakTrailing: o(Ge),
        htmlFlow: o(Ye, l),
        htmlFlowData: M,
        htmlText: o(Ye, l),
        htmlTextData: M,
        image: o(xt),
        label: l,
        link: o(Re),
        listItem: o(kt),
        listItemValue: p,
        listOrdered: o(Je, c),
        listUnordered: o(Je),
        paragraph: o(Xe),
        reference: d,
        referenceString: l,
        resourceDestinationString: l,
        resourceTitleString: l,
        setextHeading: o(Le),
        strong: o(bt),
        thematicBreak: o(S)
      },
      exit: {
        atxHeading: s(),
        atxHeadingSequence: _,
        autolink: s(),
        autolinkEmail: pe,
        autolinkProtocol: fe,
        blockQuote: s(),
        characterEscapeValue: y,
        characterReferenceMarkerHexadecimal: oe,
        characterReferenceMarkerNumeric: oe,
        characterReferenceValue: G,
        characterReference: xe,
        codeFenced: s(I),
        codeFencedFence: w,
        codeFencedFenceInfo: f,
        codeFencedFenceMeta: g,
        codeFlowValue: y,
        codeIndented: s(b),
        codeText: s(D),
        codeTextData: y,
        data: y,
        definition: s(),
        definitionDestinationString: P,
        definitionLabelString: A,
        definitionTitleString: v,
        emphasis: s(),
        hardBreakEscape: s(z),
        hardBreakTrailing: s(z),
        htmlFlow: s(q),
        htmlFlowData: y,
        htmlText: s(U),
        htmlTextData: y,
        image: s(Q),
        label: ee,
        labelText: J,
        lineEnding: T,
        link: s(K),
        listItem: s(),
        listOrdered: s(),
        listUnordered: s(),
        paragraph: s(),
        referenceString: Y,
        resourceDestinationString: m,
        resourceTitleString: re,
        resource: ie,
        setextHeading: s(H),
        setextHeadingLineSequence: R,
        setextHeadingText: C,
        strong: s(),
        thematicBreak: s()
      }
    };
    vr(n, (e || {}).mdastExtensions || []);
    const t = {};
    return r;
    function r(x) {
      let E = {
        type: "root",
        children: []
      };
      const N = {
        stack: [
          E
        ],
        tokenStack: [],
        config: n,
        enter: a,
        exit: u,
        buffer: l,
        resume: h,
        data: t
      }, j = [];
      let O = -1;
      for (; ++O < x.length; ) if (x[O][1].type === "listOrdered" || x[O][1].type === "listUnordered") if (x[O][0] === "enter") j.push(O);
      else {
        const B = j.pop();
        O = i(x, B, O);
      }
      for (O = -1; ++O < x.length; ) {
        const B = n[x[O][0]];
        Ir.call(B, x[O][1].type) && B[x[O][1].type].call(Object.assign({
          sliceSerialize: x[O][2].sliceSerialize
        }, N), x[O][1]);
      }
      if (N.tokenStack.length > 0) {
        const B = N.tokenStack[N.tokenStack.length - 1];
        (B[1] || Fn).call(N, void 0, B[0]);
      }
      for (E.position = {
        start: Se(x.length > 0 ? x[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: Se(x.length > 0 ? x[x.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, O = -1; ++O < n.transforms.length; ) E = n.transforms[O](E) || E;
      return E;
    }
    function i(x, E, N) {
      let j = E - 1, O = -1, B = false, be, te, me, Me;
      for (; ++j <= N; ) {
        const ae = x[j];
        switch (ae[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            ae[0] === "enter" ? O++ : O--, Me = void 0;
            break;
          }
          case "lineEndingBlank": {
            ae[0] === "enter" && (be && !Me && !O && !me && (me = j), Me = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Me = void 0;
        }
        if (!O && ae[0] === "enter" && ae[1].type === "listItemPrefix" || O === -1 && ae[0] === "exit" && (ae[1].type === "listUnordered" || ae[1].type === "listOrdered")) {
          if (be) {
            let je = j;
            for (te = void 0; je--; ) {
              const ye = x[je];
              if (ye[1].type === "lineEnding" || ye[1].type === "lineEndingBlank") {
                if (ye[0] === "exit") continue;
                te && (x[te][1].type = "lineEndingBlank", B = true), ye[1].type = "lineEnding", te = je;
              } else if (!(ye[1].type === "linePrefix" || ye[1].type === "blockQuotePrefix" || ye[1].type === "blockQuotePrefixWhitespace" || ye[1].type === "blockQuoteMarker" || ye[1].type === "listItemIndent")) break;
            }
            me && (!te || me < te) && (be._spread = true), be.end = Object.assign({}, te ? x[te][1].start : ae[1].end), x.splice(te || j, 0, [
              "exit",
              be,
              ae[2]
            ]), j++, N++;
          }
          if (ae[1].type === "listItemPrefix") {
            const je = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, ae[1].start),
              end: void 0
            };
            be = je, x.splice(j, 0, [
              "enter",
              je,
              ae[2]
            ]), j++, N++, me = void 0, Me = true;
          }
        }
      }
      return x[E][1]._spread = B, N;
    }
    function o(x, E) {
      return N;
      function N(j) {
        a.call(this, x(j), j), E && E.call(this, j);
      }
    }
    function l() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function a(x, E, N) {
      this.stack[this.stack.length - 1].children.push(x), this.stack.push(x), this.tokenStack.push([
        E,
        N || void 0
      ]), x.position = {
        start: Se(E.start),
        end: void 0
      };
    }
    function s(x) {
      return E;
      function E(N) {
        x && x.call(this, N), u.call(this, N);
      }
    }
    function u(x, E) {
      const N = this.stack.pop(), j = this.tokenStack.pop();
      if (j) j[0].type !== x.type && (E ? E.call(this, x, j[0]) : (j[1] || Fn).call(this, x, j[0]));
      else throw new Error("Cannot close `" + x.type + "` (" + $e({
        start: x.start,
        end: x.end
      }) + "): it\u2019s not open");
      N.position.end = Se(x.end);
    }
    function h() {
      return Xt(this.stack.pop());
    }
    function c() {
      this.data.expectingFirstListItemValue = true;
    }
    function p(x) {
      if (this.data.expectingFirstListItemValue) {
        const E = this.stack[this.stack.length - 2];
        E.start = Number.parseInt(this.sliceSerialize(x), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function f() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.lang = x;
    }
    function g() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.meta = x;
    }
    function w() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function I() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function b() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = x.replace(/(\r?\n|\r)$/g, "");
    }
    function A(x) {
      const E = this.resume(), N = this.stack[this.stack.length - 1];
      N.label = E, N.identifier = he(this.sliceSerialize(x)).toLowerCase();
    }
    function v() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.title = x;
    }
    function P() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.url = x;
    }
    function _(x) {
      const E = this.stack[this.stack.length - 1];
      if (!E.depth) {
        const N = this.sliceSerialize(x).length;
        E.depth = N;
      }
    }
    function C() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function R(x) {
      const E = this.stack[this.stack.length - 1];
      E.depth = this.sliceSerialize(x).codePointAt(0) === 61 ? 1 : 2;
    }
    function H() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function M(x) {
      const N = this.stack[this.stack.length - 1].children;
      let j = N[N.length - 1];
      (!j || j.type !== "text") && (j = yt(), j.position = {
        start: Se(x.start),
        end: void 0
      }, N.push(j)), this.stack.push(j);
    }
    function y(x) {
      const E = this.stack.pop();
      E.value += this.sliceSerialize(x), E.position.end = Se(x.end);
    }
    function T(x) {
      const E = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const N = E.children[E.children.length - 1];
        N.position.end = Se(x.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(E.type) && (M.call(this, x), y.call(this, x));
    }
    function z() {
      this.data.atHardBreak = true;
    }
    function q() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = x;
    }
    function U() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = x;
    }
    function D() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = x;
    }
    function K() {
      const x = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const E = this.data.referenceType || "shortcut";
        x.type += "Reference", x.referenceType = E, delete x.url, delete x.title;
      } else delete x.identifier, delete x.label;
      this.data.referenceType = void 0;
    }
    function Q() {
      const x = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const E = this.data.referenceType || "shortcut";
        x.type += "Reference", x.referenceType = E, delete x.url, delete x.title;
      } else delete x.identifier, delete x.label;
      this.data.referenceType = void 0;
    }
    function J(x) {
      const E = this.sliceSerialize(x), N = this.stack[this.stack.length - 2];
      N.label = wa(E), N.identifier = he(E).toLowerCase();
    }
    function ee() {
      const x = this.stack[this.stack.length - 1], E = this.resume(), N = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, N.type === "link") {
        const j = x.children;
        N.children = j;
      } else N.alt = E;
    }
    function m() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.url = x;
    }
    function re() {
      const x = this.resume(), E = this.stack[this.stack.length - 1];
      E.title = x;
    }
    function ie() {
      this.data.inReference = void 0;
    }
    function d() {
      this.data.referenceType = "collapsed";
    }
    function Y(x) {
      const E = this.resume(), N = this.stack[this.stack.length - 1];
      N.label = E, N.identifier = he(this.sliceSerialize(x)).toLowerCase(), this.data.referenceType = "full";
    }
    function oe(x) {
      this.data.characterReferenceType = x.type;
    }
    function G(x) {
      const E = this.sliceSerialize(x), N = this.data.characterReferenceType;
      let j;
      N ? (j = dr(E, N === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : j = Wt(E);
      const O = this.stack[this.stack.length - 1];
      O.value += j;
    }
    function xe(x) {
      const E = this.stack.pop();
      E.position.end = Se(x.end);
    }
    function fe(x) {
      y.call(this, x);
      const E = this.stack[this.stack.length - 1];
      E.url = this.sliceSerialize(x);
    }
    function pe(x) {
      y.call(this, x);
      const E = this.stack[this.stack.length - 1];
      E.url = "mailto:" + this.sliceSerialize(x);
    }
    function ke() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function ze() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function gt() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function Ee() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function Ke() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function Le() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function Ge() {
      return {
        type: "break"
      };
    }
    function Ye() {
      return {
        type: "html",
        value: ""
      };
    }
    function xt() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function Re() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function Je(x) {
      return {
        type: "list",
        ordered: x.type === "listOrdered",
        start: null,
        spread: x._spread,
        children: []
      };
    }
    function kt(x) {
      return {
        type: "listItem",
        spread: x._spread,
        checked: null,
        children: []
      };
    }
    function Xe() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function bt() {
      return {
        type: "strong",
        children: []
      };
    }
    function yt() {
      return {
        type: "text",
        value: ""
      };
    }
    function S() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function Se(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function vr(e, n) {
    let t = -1;
    for (; ++t < n.length; ) {
      const r = n[t];
      Array.isArray(r) ? vr(e, r) : Ia(e, r);
    }
  }
  function Ia(e, n) {
    let t;
    for (t in n) if (Ir.call(n, t)) switch (t) {
      case "canContainEols": {
        const r = n[t];
        r && e[t].push(...r);
        break;
      }
      case "transforms": {
        const r = n[t];
        r && e[t].push(...r);
        break;
      }
      case "enter":
      case "exit": {
        const r = n[t];
        r && Object.assign(e[t], r);
        break;
      }
    }
  }
  function Fn(e, n) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + $e({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + n.type + "`, " + $e({
      start: n.start,
      end: n.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + $e({
      start: n.start,
      end: n.end
    }) + ") is still open");
  }
  function va(e) {
    const n = this;
    n.parser = t;
    function t(r) {
      return Ca(r, {
        ...n.data("settings"),
        ...e,
        extensions: n.data("micromarkExtensions") || [],
        mdastExtensions: n.data("fromMarkdownExtensions") || []
      });
    }
  }
  function Aa(e, n) {
    const t = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(n), true)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Ta(e, n) {
    const t = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return e.patch(n, t), [
      e.applyData(n, t),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function Na(e, n) {
    const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = [
      "language-" + i[0]
    ]);
    let o = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [
        {
          type: "text",
          value: t
        }
      ]
    };
    return n.meta && (o.data = {
      meta: n.meta
    }), e.patch(n, o), o = e.applyData(n, o), o = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        o
      ]
    }, e.patch(n, o), o;
  }
  function za(e, n) {
    const t = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function ja(e, n) {
    const t = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Fa(e, n) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = De(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
    let l, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
    const s = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + t + "fn-" + i,
        id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(l)
        }
      ]
    };
    e.patch(n, s);
    const u = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        s
      ]
    };
    return e.patch(n, u), e.applyData(n, u);
  }
  function Pa(e, n) {
    const t = {
      type: "element",
      tagName: "h" + n.depth,
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function _a(e, n) {
    if (e.options.allowDangerousHtml) {
      const t = {
        type: "raw",
        value: n.value
      };
      return e.patch(n, t), e.applyData(n, t);
    }
  }
  function Ar(e, n) {
    const t = n.referenceType;
    let r = "]";
    if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference") return [
      {
        type: "text",
        value: "![" + n.alt + r
      }
    ];
    const i = e.all(n), o = i[0];
    o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
      type: "text",
      value: "["
    });
    const l = i[i.length - 1];
    return l && l.type === "text" ? l.value += r : i.push({
      type: "text",
      value: r
    }), i;
  }
  function Da(e, n) {
    const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
    if (!r) return Ar(e, n);
    const i = {
      src: De(r.url || ""),
      alt: n.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function La(e, n) {
    const t = {
      src: De(n.url)
    };
    n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
      type: "element",
      tagName: "img",
      properties: t,
      children: []
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function Ra(e, n) {
    const t = {
      type: "text",
      value: n.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(n, t);
    const r = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        t
      ]
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function Ma(e, n) {
    const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
    if (!r) return Ar(e, n);
    const i = {
      href: De(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
      type: "element",
      tagName: "a",
      properties: i,
      children: e.all(n)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Oa(e, n) {
    const t = {
      href: De(n.url)
    };
    n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: t,
      children: e.all(n)
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function Ba(e, n, t) {
    const r = e.all(n), i = t ? $a(t) : Tr(n), o = {}, l = [];
    if (typeof n.checked == "boolean") {
      const h = r[0];
      let c;
      h && h.type === "element" && h.tagName === "p" ? c = h : (c = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, r.unshift(c)), c.children.length > 0 && c.children.unshift({
        type: "text",
        value: " "
      }), c.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: n.checked,
          disabled: true
        },
        children: []
      }), o.className = [
        "task-list-item"
      ];
    }
    let a = -1;
    for (; ++a < r.length; ) {
      const h = r[a];
      (i || a !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({
        type: "text",
        value: `
`
      }), h.type === "element" && h.tagName === "p" && !i ? l.push(...h.children) : l.push(h);
    }
    const s = r[r.length - 1];
    s && (i || s.type !== "element" || s.tagName !== "p") && l.push({
      type: "text",
      value: `
`
    });
    const u = {
      type: "element",
      tagName: "li",
      properties: o,
      children: l
    };
    return e.patch(n, u), e.applyData(n, u);
  }
  function $a(e) {
    let n = false;
    if (e.type === "list") {
      n = e.spread || false;
      const t = e.children;
      let r = -1;
      for (; !n && ++r < t.length; ) n = Tr(t[r]);
    }
    return n;
  }
  function Tr(e) {
    const n = e.spread;
    return n ?? e.children.length > 1;
  }
  function Ha(e, n) {
    const t = {}, r = e.all(n);
    let i = -1;
    for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
      const l = r[i];
      if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
        t.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const o = {
      type: "element",
      tagName: n.ordered ? "ol" : "ul",
      properties: t,
      children: e.wrap(r, true)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Va(e, n) {
    const t = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function qa(e, n) {
    const t = {
      type: "root",
      children: e.wrap(e.all(n))
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Ua(e, n) {
    const t = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Wa(e, n) {
    const t = e.all(n), r = t.shift(), i = [];
    if (r) {
      const l = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([
          r
        ], true)
      };
      e.patch(n.children[0], l), i.push(l);
    }
    if (t.length > 0) {
      const l = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(t, true)
      }, a = Kt(n.children[1]), s = ar(n.children[n.children.length - 1]);
      a && s && (l.position = {
        start: a,
        end: s
      }), i.push(l);
    }
    const o = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(i, true)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Qa(e, n, t) {
    const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
    let s = -1;
    const u = [];
    for (; ++s < a; ) {
      const c = n.children[s], p = {}, f = l ? l[s] : void 0;
      f && (p.align = f);
      let g = {
        type: "element",
        tagName: o,
        properties: p,
        children: []
      };
      c && (g.children = e.all(c), e.patch(c, g), g = e.applyData(c, g)), u.push(g);
    }
    const h = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(u, true)
    };
    return e.patch(n, h), e.applyData(n, h);
  }
  function Ka(e, n) {
    const t = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  const Pn = 9, _n = 32;
  function Ga(e) {
    const n = String(e), t = /\r?\n|\r/g;
    let r = t.exec(n), i = 0;
    const o = [];
    for (; r; ) o.push(Dn(n.slice(i, r.index), i > 0, true), r[0]), i = r.index + r[0].length, r = t.exec(n);
    return o.push(Dn(n.slice(i), i > 0, false)), o.join("");
  }
  function Dn(e, n, t) {
    let r = 0, i = e.length;
    if (n) {
      let o = e.codePointAt(r);
      for (; o === Pn || o === _n; ) r++, o = e.codePointAt(r);
    }
    if (t) {
      let o = e.codePointAt(i - 1);
      for (; o === Pn || o === _n; ) i--, o = e.codePointAt(i - 1);
    }
    return i > r ? e.slice(r, i) : "";
  }
  function Ya(e, n) {
    const t = {
      type: "text",
      value: Ga(String(n.value))
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Ja(e, n) {
    const t = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  const Xa = {
    blockquote: Aa,
    break: Ta,
    code: Na,
    delete: za,
    emphasis: ja,
    footnoteReference: Fa,
    heading: Pa,
    html: _a,
    imageReference: Da,
    image: La,
    inlineCode: Ra,
    linkReference: Ma,
    link: Oa,
    listItem: Ba,
    list: Ha,
    paragraph: Va,
    root: qa,
    strong: Ua,
    table: Wa,
    tableCell: Ka,
    tableRow: Qa,
    text: Ya,
    thematicBreak: Ja,
    toml: Ze,
    yaml: Ze,
    definition: Ze,
    footnoteDefinition: Ze
  };
  function Ze() {
  }
  const Nr = -1, pt = 0, Ve = 1, at = 2, en = 3, tn = 4, nn = 5, rn = 6, zr = 7, jr = 8, Ln = typeof self == "object" ? self : globalThis, Za = (e, n) => {
    const t = (i, o) => (e.set(o, i), i), r = (i) => {
      if (e.has(i)) return e.get(i);
      const [o, l] = n[i];
      switch (o) {
        case pt:
        case Nr:
          return t(l, i);
        case Ve: {
          const a = t([], i);
          for (const s of l) a.push(r(s));
          return a;
        }
        case at: {
          const a = t({}, i);
          for (const [s, u] of l) a[r(s)] = r(u);
          return a;
        }
        case en:
          return t(new Date(l), i);
        case tn: {
          const { source: a, flags: s } = l;
          return t(new RegExp(a, s), i);
        }
        case nn: {
          const a = t(/* @__PURE__ */ new Map(), i);
          for (const [s, u] of l) a.set(r(s), r(u));
          return a;
        }
        case rn: {
          const a = t(/* @__PURE__ */ new Set(), i);
          for (const s of l) a.add(r(s));
          return a;
        }
        case zr: {
          const { name: a, message: s } = l;
          return t(new Ln[a](s), i);
        }
        case jr:
          return t(BigInt(l), i);
        case "BigInt":
          return t(Object(BigInt(l)), i);
        case "ArrayBuffer":
          return t(new Uint8Array(l).buffer, l);
        case "DataView": {
          const { buffer: a } = new Uint8Array(l);
          return t(new DataView(a), l);
        }
      }
      return t(new Ln[o](l), i);
    };
    return r;
  }, Rn = (e) => Za(/* @__PURE__ */ new Map(), e)(0), Fe = "", { toString: es } = {}, { keys: ts } = Object, Be = (e) => {
    const n = typeof e;
    if (n !== "object" || !e) return [
      pt,
      n
    ];
    const t = es.call(e).slice(8, -1);
    switch (t) {
      case "Array":
        return [
          Ve,
          Fe
        ];
      case "Object":
        return [
          at,
          Fe
        ];
      case "Date":
        return [
          en,
          Fe
        ];
      case "RegExp":
        return [
          tn,
          Fe
        ];
      case "Map":
        return [
          nn,
          Fe
        ];
      case "Set":
        return [
          rn,
          Fe
        ];
      case "DataView":
        return [
          Ve,
          t
        ];
    }
    return t.includes("Array") ? [
      Ve,
      t
    ] : t.includes("Error") ? [
      zr,
      t
    ] : [
      at,
      t
    ];
  }, et = ([e, n]) => e === pt && (n === "function" || n === "symbol"), ns = (e, n, t, r) => {
    const i = (l, a) => {
      const s = r.push(l) - 1;
      return t.set(a, s), s;
    }, o = (l) => {
      if (t.has(l)) return t.get(l);
      let [a, s] = Be(l);
      switch (a) {
        case pt: {
          let h = l;
          switch (s) {
            case "bigint":
              a = jr, h = l.toString();
              break;
            case "function":
            case "symbol":
              if (e) throw new TypeError("unable to serialize " + s);
              h = null;
              break;
            case "undefined":
              return i([
                Nr
              ], l);
          }
          return i([
            a,
            h
          ], l);
        }
        case Ve: {
          if (s) {
            let p = l;
            return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([
              s,
              [
                ...p
              ]
            ], l);
          }
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of l) h.push(o(p));
          return c;
        }
        case at: {
          if (s) switch (s) {
            case "BigInt":
              return i([
                s,
                l.toString()
              ], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([
                s,
                l.valueOf()
              ], l);
          }
          if (n && "toJSON" in l) return o(l.toJSON());
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of ts(l)) (e || !et(Be(l[p]))) && h.push([
            o(p),
            o(l[p])
          ]);
          return c;
        }
        case en:
          return i([
            a,
            l.toISOString()
          ], l);
        case tn: {
          const { source: h, flags: c } = l;
          return i([
            a,
            {
              source: h,
              flags: c
            }
          ], l);
        }
        case nn: {
          const h = [], c = i([
            a,
            h
          ], l);
          for (const [p, f] of l) (e || !(et(Be(p)) || et(Be(f)))) && h.push([
            o(p),
            o(f)
          ]);
          return c;
        }
        case rn: {
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of l) (e || !et(Be(p))) && h.push(o(p));
          return c;
        }
      }
      const { message: u } = l;
      return i([
        a,
        {
          name: s,
          message: u
        }
      ], l);
    };
    return o;
  }, Mn = (e, { json: n, lossy: t } = {}) => {
    const r = [];
    return ns(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
  }, st = typeof structuredClone == "function" ? (e, n) => n && ("json" in n || "lossy" in n) ? Rn(Mn(e, n)) : structuredClone(e) : (e, n) => Rn(Mn(e, n));
  function rs(e, n) {
    const t = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return n > 1 && t.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(n)
        }
      ]
    }), t;
  }
  function is(e, n) {
    return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
  }
  function ls(e) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || rs, r = e.options.footnoteBackLabel || is, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, a = [];
    let s = -1;
    for (; ++s < e.footnoteOrder.length; ) {
      const u = e.footnoteById.get(e.footnoteOrder[s]);
      if (!u) continue;
      const h = e.all(u), c = String(u.identifier).toUpperCase(), p = De(c.toLowerCase());
      let f = 0;
      const g = [], w = e.footnoteCounts.get(c);
      for (; w !== void 0 && ++f <= w; ) {
        g.length > 0 && g.push({
          type: "text",
          value: " "
        });
        let A = typeof t == "string" ? t : t(s, f);
        typeof A == "string" && (A = {
          type: "text",
          value: A
        }), g.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + n + "fnref-" + p + (f > 1 ? "-" + f : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(s, f),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(A) ? A : [
            A
          ]
        });
      }
      const I = h[h.length - 1];
      if (I && I.type === "element" && I.tagName === "p") {
        const A = I.children[I.children.length - 1];
        A && A.type === "text" ? A.value += " " : I.children.push({
          type: "text",
          value: " "
        }), I.children.push(...g);
      } else h.push(...g);
      const b = {
        type: "element",
        tagName: "li",
        properties: {
          id: n + "fn-" + p
        },
        children: e.wrap(h, true)
      };
      e.patch(u, b), a.push(b);
    }
    if (a.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...st(l),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: i
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const mt = function(e) {
    if (e == null) return us;
    if (typeof e == "function") return dt(e);
    if (typeof e == "object") return Array.isArray(e) ? os(e) : as(e);
    if (typeof e == "string") return ss(e);
    throw new Error("Expected function, string, or object as test");
  };
  function os(e) {
    const n = [];
    let t = -1;
    for (; ++t < e.length; ) n[t] = mt(e[t]);
    return dt(r);
    function r(...i) {
      let o = -1;
      for (; ++o < n.length; ) if (n[o].apply(this, i)) return true;
      return false;
    }
  }
  function as(e) {
    const n = e;
    return dt(t);
    function t(r) {
      const i = r;
      let o;
      for (o in e) if (i[o] !== n[o]) return false;
      return true;
    }
  }
  function ss(e) {
    return dt(n);
    function n(t) {
      return t && t.type === e;
    }
  }
  function dt(e) {
    return n;
    function n(t, r, i) {
      return !!(cs(t) && e.call(this, t, typeof r == "number" ? r : void 0, i || void 0));
    }
  }
  function us() {
    return true;
  }
  function cs(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  const Fr = [], hs = true, Bt = false, fs = "skip";
  function Pr(e, n, t, r) {
    let i;
    typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
    const o = mt(i), l = r ? -1 : 1;
    a(e, void 0, [])();
    function a(s, u, h) {
      const c = s && typeof s == "object" ? s : {};
      if (typeof c.type == "string") {
        const f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
        Object.defineProperty(p, "name", {
          value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
        });
      }
      return p;
      function p() {
        let f = Fr, g, w, I;
        if ((!n || o(s, u, h[h.length - 1] || void 0)) && (f = ps(t(s, h)), f[0] === Bt)) return f;
        if ("children" in s && s.children) {
          const b = s;
          if (b.children && f[0] !== fs) for (w = (r ? b.children.length : -1) + l, I = h.concat(b); w > -1 && w < b.children.length; ) {
            const A = b.children[w];
            if (g = a(A, w, I)(), g[0] === Bt) return g;
            w = typeof g[1] == "number" ? g[1] : w + l;
          }
        }
        return f;
      }
    }
  }
  function ps(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [
      hs,
      e
    ] : e == null ? Fr : [
      e
    ];
  }
  function ln(e, n, t, r) {
    let i, o, l;
    typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), Pr(e, o, a, i);
    function a(s, u) {
      const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
      return l(s, c, h);
    }
  }
  const $t = {}.hasOwnProperty, ms = {};
  function ds(e, n) {
    const t = n || ms, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = {
      ...Xa,
      ...t.handlers
    }, a = {
      all: u,
      applyData: xs,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: l,
      one: s,
      options: t,
      patch: gs,
      wrap: bs
    };
    return ln(e, function(h) {
      if (h.type === "definition" || h.type === "footnoteDefinition") {
        const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
        c.has(p) || c.set(p, h);
      }
    }), a;
    function s(h, c) {
      const p = h.type, f = a.handlers[p];
      if ($t.call(a.handlers, p) && f) return f(a, h, c);
      if (a.options.passThrough && a.options.passThrough.includes(p)) {
        if ("children" in h) {
          const { children: w, ...I } = h, b = st(I);
          return b.children = a.all(h), b;
        }
        return st(h);
      }
      return (a.options.unknownHandler || ks)(a, h, c);
    }
    function u(h) {
      const c = [];
      if ("children" in h) {
        const p = h.children;
        let f = -1;
        for (; ++f < p.length; ) {
          const g = a.one(p[f], h);
          if (g) {
            if (f && p[f - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = On(g.value)), !Array.isArray(g) && g.type === "element")) {
              const w = g.children[0];
              w && w.type === "text" && (w.value = On(w.value));
            }
            Array.isArray(g) ? c.push(...g) : c.push(g);
          }
        }
      }
      return c;
    }
  }
  function gs(e, n) {
    e.position && (n.position = rl(e));
  }
  function xs(e, n) {
    let t = n;
    if (e && e.data) {
      const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
      if (typeof r == "string") if (t.type === "element") t.tagName = r;
      else {
        const l = "children" in t ? t.children : [
          t
        ];
        t = {
          type: "element",
          tagName: r,
          properties: {},
          children: l
        };
      }
      t.type === "element" && o && Object.assign(t.properties, st(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
    }
    return t;
  }
  function ks(e, n) {
    const t = n.data || {}, r = "value" in n && !($t.call(t, "hProperties") || $t.call(t, "hChildren")) ? {
      type: "text",
      value: n.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function bs(e, n) {
    const t = [];
    let r = -1;
    for (n && t.push({
      type: "text",
      value: `
`
    }); ++r < e.length; ) r && t.push({
      type: "text",
      value: `
`
    }), t.push(e[r]);
    return n && e.length > 0 && t.push({
      type: "text",
      value: `
`
    }), t;
  }
  function On(e) {
    let n = 0, t = e.charCodeAt(n);
    for (; t === 9 || t === 32; ) n++, t = e.charCodeAt(n);
    return e.slice(n);
  }
  function Bn(e, n) {
    const t = ds(e, n), r = t.one(e, void 0), i = ls(t), o = Array.isArray(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
    return i && o.children.push({
      type: "text",
      value: `
`
    }, i), o;
  }
  function ys(e, n) {
    return e && "run" in e ? async function(t, r) {
      const i = Bn(t, {
        file: r,
        ...n
      });
      await e.run(i, r);
    } : function(t, r) {
      return Bn(t, {
        file: r,
        ...e || n
      });
    };
  }
  function $n(e) {
    if (e) throw e;
  }
  var it = Object.prototype.hasOwnProperty, _r = Object.prototype.toString, Hn = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, qn = function(n) {
    return typeof Array.isArray == "function" ? Array.isArray(n) : _r.call(n) === "[object Array]";
  }, Un = function(n) {
    if (!n || _r.call(n) !== "[object Object]") return false;
    var t = it.call(n, "constructor"), r = n.constructor && n.constructor.prototype && it.call(n.constructor.prototype, "isPrototypeOf");
    if (n.constructor && !t && !r) return false;
    var i;
    for (i in n) ;
    return typeof i > "u" || it.call(n, i);
  }, Wn = function(n, t) {
    Hn && t.name === "__proto__" ? Hn(n, t.name, {
      enumerable: true,
      configurable: true,
      value: t.newValue,
      writable: true
    }) : n[t.name] = t.newValue;
  }, Qn = function(n, t) {
    if (t === "__proto__") if (it.call(n, t)) {
      if (Vn) return Vn(n, t).value;
    } else return;
    return n[t];
  }, ws = function e() {
    var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = false;
    for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s) if (n = arguments[s], n != null) for (t in n) r = Qn(a, t), i = Qn(n, t), a !== i && (h && i && (Un(i) || (o = qn(i))) ? (o ? (o = false, l = r && qn(r) ? r : []) : l = r && Un(r) ? r : {}, Wn(a, {
      name: t,
      newValue: e(h, l, i)
    })) : typeof i < "u" && Wn(a, {
      name: t,
      newValue: i
    }));
    return a;
  };
  const It = or(ws);
  function Ht(e) {
    if (typeof e != "object" || e === null) return false;
    const n = Object.getPrototypeOf(e);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function Ss() {
    const e = [], n = {
      run: t,
      use: r
    };
    return n;
    function t(...i) {
      let o = -1;
      const l = i.pop();
      if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
      a(null, ...i);
      function a(s, ...u) {
        const h = e[++o];
        let c = -1;
        if (s) {
          l(s);
          return;
        }
        for (; ++c < i.length; ) (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
        i = u, h ? Cs(h, a)(...u) : l(null, ...u);
      }
    }
    function r(i) {
      if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
      return e.push(i), n;
    }
  }
  function Cs(e, n) {
    let t;
    return r;
    function r(...l) {
      const a = e.length > l.length;
      let s;
      a && l.push(i);
      try {
        s = e.apply(this, l);
      } catch (u) {
        const h = u;
        if (a && t) throw h;
        return i(h);
      }
      a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
    }
    function i(l, ...a) {
      t || (t = true, n(l, ...a));
    }
    function o(l) {
      i(null, l);
    }
  }
  const de = {
    basename: Es,
    dirname: Is,
    extname: vs,
    join: As,
    sep: "/"
  };
  function Es(e, n) {
    if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
    Qe(e);
    let t = 0, r = -1, i = e.length, o;
    if (n === void 0 || n.length === 0 || n.length > e.length) {
      for (; i--; ) if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = true, r = i + 1);
      return r < 0 ? "" : e.slice(t, r);
    }
    if (n === e) return "";
    let l = -1, a = n.length - 1;
    for (; i--; ) if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else l < 0 && (o = true, l = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
    return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
  }
  function Is(e) {
    if (Qe(e), e.length === 0) return ".";
    let n = -1, t = e.length, r;
    for (; --t; ) if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = true);
    return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
  }
  function vs(e) {
    Qe(e);
    let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
    for (; n--; ) {
      const a = e.codePointAt(n);
      if (a === 47) {
        if (l) {
          r = n + 1;
          break;
        }
        continue;
      }
      t < 0 && (l = true, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
    }
    return i < 0 || t < 0 || o === 0 || o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
  }
  function As(...e) {
    let n = -1, t;
    for (; ++n < e.length; ) Qe(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
    return t === void 0 ? "." : Ts(t);
  }
  function Ts(e) {
    Qe(e);
    const n = e.codePointAt(0) === 47;
    let t = Ns(e, !n);
    return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
  }
  function Ns(e, n) {
    let t = "", r = 0, i = -1, o = 0, l = -1, a, s;
    for (; ++l <= e.length; ) {
      if (l < e.length) a = e.codePointAt(l);
      else {
        if (a === 47) break;
        a = 47;
      }
      if (a === 47) {
        if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
          if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
                continue;
              }
            } else if (t.length > 0) {
              t = "", r = 0, i = l, o = 0;
              continue;
            }
          }
          n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
        } else t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
        i = l, o = 0;
      } else a === 46 && o > -1 ? o++ : o = -1;
    }
    return t;
  }
  function Qe(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  const zs = {
    cwd: js
  };
  function js() {
    return "/";
  }
  function Vt(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
  }
  function Fs(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Vt(e)) {
      const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
      throw n.code = "ERR_INVALID_ARG_TYPE", n;
    }
    if (e.protocol !== "file:") {
      const n = new TypeError("The URL must be of scheme file");
      throw n.code = "ERR_INVALID_URL_SCHEME", n;
    }
    return Ps(e);
  }
  function Ps(e) {
    if (e.hostname !== "") {
      const r = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
    }
    const n = e.pathname;
    let t = -1;
    for (; ++t < n.length; ) if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError("File URL path must not include encoded / characters");
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
    return decodeURIComponent(n);
  }
  const vt = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Dr {
    constructor(n) {
      let t;
      n ? Vt(n) ? t = {
        path: n
      } : typeof n == "string" || _s(n) ? t = {
        value: n
      } : t = n : t = {}, this.cwd = "cwd" in t ? "" : zs.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let r = -1;
      for (; ++r < vt.length; ) {
        const o = vt[r];
        o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [
          ...t[o]
        ] : t[o]);
      }
      let i;
      for (i in t) vt.includes(i) || (this[i] = t[i]);
    }
    get basename() {
      return typeof this.path == "string" ? de.basename(this.path) : void 0;
    }
    set basename(n) {
      Tt(n, "basename"), At(n, "basename"), this.path = de.join(this.dirname || "", n);
    }
    get dirname() {
      return typeof this.path == "string" ? de.dirname(this.path) : void 0;
    }
    set dirname(n) {
      Kn(this.basename, "dirname"), this.path = de.join(n || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? de.extname(this.path) : void 0;
    }
    set extname(n) {
      if (At(n, "extname"), Kn(this.dirname, "extname"), n) {
        if (n.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (n.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = de.join(this.dirname, this.stem + (n || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(n) {
      Vt(n) && (n = Fs(n)), Tt(n, "path"), this.path !== n && this.history.push(n);
    }
    get stem() {
      return typeof this.path == "string" ? de.basename(this.path, this.extname) : void 0;
    }
    set stem(n) {
      Tt(n, "stem"), At(n, "stem"), this.path = de.join(this.dirname || "", n + (this.extname || ""));
    }
    fail(n, t, r) {
      const i = this.message(n, t, r);
      throw i.fatal = true, i;
    }
    info(n, t, r) {
      const i = this.message(n, t, r);
      return i.fatal = void 0, i;
    }
    message(n, t, r) {
      const i = new Z(n, t, r);
      return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = false, this.messages.push(i), i;
    }
    toString(n) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
    }
  }
  function At(e, n) {
    if (e && e.includes(de.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + de.sep + "`");
  }
  function Tt(e, n) {
    if (!e) throw new Error("`" + n + "` cannot be empty");
  }
  function Kn(e, n) {
    if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too");
  }
  function _s(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const Ds = function(e) {
    const r = this.constructor.prototype, i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }, Ls = {}.hasOwnProperty;
  class on extends Ds {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Ss();
    }
    copy() {
      const n = new on();
      let t = -1;
      for (; ++t < this.attachers.length; ) {
        const r = this.attachers[t];
        n.use(...r);
      }
      return n.data(It(true, {}, this.namespace)), n;
    }
    data(n, t) {
      return typeof n == "string" ? arguments.length === 2 ? (jt("data", this.frozen), this.namespace[n] = t, this) : Ls.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (jt("data", this.frozen), this.namespace = n, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const n = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [t, ...r] = this.attachers[this.freezeIndex];
        if (r[0] === false) continue;
        r[0] === true && (r[0] = void 0);
        const i = t.call(n, ...r);
        typeof i == "function" && this.transformers.use(i);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(n) {
      this.freeze();
      const t = tt(n), r = this.parser || this.Parser;
      return Nt("parse", r), r(String(t), t);
    }
    process(n, t) {
      const r = this;
      return this.freeze(), Nt("process", this.parser || this.Parser), zt("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
      function i(o, l) {
        const a = tt(n), s = r.parse(a);
        r.run(s, a, function(h, c, p) {
          if (h || !c || !p) return u(h);
          const f = c, g = r.stringify(f, p);
          Os(g) ? p.value = g : p.result = g, u(h, p);
        });
        function u(h, c) {
          h || !c ? l(h) : o ? o(c) : t(void 0, c);
        }
      }
    }
    processSync(n) {
      let t = false, r;
      return this.freeze(), Nt("processSync", this.parser || this.Parser), zt("processSync", this.compiler || this.Compiler), this.process(n, i), Yn("processSync", "process", t), r;
      function i(o, l) {
        t = true, $n(o), r = l;
      }
    }
    run(n, t, r) {
      Gn(n), this.freeze();
      const i = this.transformers;
      return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
      function o(l, a) {
        const s = tt(t);
        i.run(n, s, u);
        function u(h, c, p) {
          const f = c || n;
          h ? a(h) : l ? l(f) : r(void 0, f, p);
        }
      }
    }
    runSync(n, t) {
      let r = false, i;
      return this.run(n, t, o), Yn("runSync", "run", r), i;
      function o(l, a) {
        $n(l), i = a, r = true;
      }
    }
    stringify(n, t) {
      this.freeze();
      const r = tt(t), i = this.compiler || this.Compiler;
      return zt("stringify", i), Gn(n), i(n, r);
    }
    use(n, ...t) {
      const r = this.attachers, i = this.namespace;
      if (jt("use", this.frozen), n != null) if (typeof n == "function") s(n, t);
      else if (typeof n == "object") Array.isArray(n) ? a(n) : l(n);
      else throw new TypeError("Expected usable value, not `" + n + "`");
      return this;
      function o(u) {
        if (typeof u == "function") s(u, []);
        else if (typeof u == "object") if (Array.isArray(u)) {
          const [h, ...c] = u;
          s(h, c);
        } else l(u);
        else throw new TypeError("Expected usable value, not `" + u + "`");
      }
      function l(u) {
        if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        a(u.plugins), u.settings && (i.settings = It(true, i.settings, u.settings));
      }
      function a(u) {
        let h = -1;
        if (u != null) if (Array.isArray(u)) for (; ++h < u.length; ) {
          const c = u[h];
          o(c);
        }
        else throw new TypeError("Expected a list of plugins, not `" + u + "`");
      }
      function s(u, h) {
        let c = -1, p = -1;
        for (; ++c < r.length; ) if (r[c][0] === u) {
          p = c;
          break;
        }
        if (p === -1) r.push([
          u,
          ...h
        ]);
        else if (h.length > 0) {
          let [f, ...g] = h;
          const w = r[p][1];
          Ht(w) && Ht(f) && (f = It(true, w, f)), r[p] = [
            u,
            f,
            ...g
          ];
        }
      }
    }
  }
  const Rs = new on().freeze();
  function Nt(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function zt(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function jt(e, n) {
    if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function Gn(e) {
    if (!Ht(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function Yn(e, n, t) {
    if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead");
  }
  function tt(e) {
    return Ms(e) ? e : new Dr(e);
  }
  function Ms(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function Os(e) {
    return typeof e == "string" || Bs(e);
  }
  function Bs(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const $s = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Jn = [], Xn = {
    allowDangerousHtml: true
  }, Hs = /^(https?|ircs?|mailto|xmpp)$/i, Vs = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement"
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements"
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements"
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex"
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex"
    },
    {
      from: "linkTarget",
      id: "remove-linktarget"
    },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins"
    },
    {
      from: "rawSourcePos",
      id: "#remove-rawsourcepos"
    },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components"
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children"
    },
    {
      from: "sourcePos",
      id: "#remove-sourcepos"
    },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform"
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform"
    }
  ];
  function qs(e) {
    const n = Us(e), t = Ws(e);
    return Qs(n.runSync(n.parse(t), t), e);
  }
  function Us(e) {
    const n = e.rehypePlugins || Jn, t = e.remarkPlugins || Jn, r = e.remarkRehypeOptions ? {
      ...e.remarkRehypeOptions,
      ...Xn
    } : Xn;
    return Rs().use(va).use(t).use(ys, r).use(n);
  }
  function Ws(e) {
    const n = e.children || "", t = new Dr();
    return typeof n == "string" && (t.value = n), t;
  }
  function Qs(e, n) {
    const t = n.allowedElements, r = n.allowElement, i = n.components, o = n.disallowedElements, l = n.skipHtml, a = n.unwrapDisallowed, s = n.urlTransform || Ks;
    for (const h of Vs) Object.hasOwn(n, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + $s + h.id, void 0);
    return n.className && (e = {
      type: "element",
      tagName: "div",
      properties: {
        className: n.className
      },
      children: e.type === "root" ? e.children : [
        e
      ]
    }), ln(e, u), sl(e, {
      Fragment: k.Fragment,
      components: i,
      ignoreInvalidStyle: true,
      jsx: k.jsx,
      jsxs: k.jsxs,
      passKeys: true,
      passNode: true
    });
    function u(h, c, p) {
      if (h.type === "raw" && p && typeof c == "number") return l ? p.children.splice(c, 1) : p.children[c] = {
        type: "text",
        value: h.value
      }, c;
      if (h.type === "element") {
        let f;
        for (f in St) if (Object.hasOwn(St, f) && Object.hasOwn(h.properties, f)) {
          const g = h.properties[f], w = St[f];
          (w === null || w.includes(h.tagName)) && (h.properties[f] = s(String(g || ""), f, h));
        }
      }
      if (h.type === "element") {
        let f = t ? !t.includes(h.tagName) : o ? o.includes(h.tagName) : false;
        if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number") return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
      }
    }
  }
  function Ks(e) {
    const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
    return n === -1 || i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || Hs.test(e.slice(0, n)) ? e : "";
  }
  function Zn(e, n) {
    const t = String(e);
    if (typeof n != "string") throw new TypeError("Expected character");
    let r = 0, i = t.indexOf(n);
    for (; i !== -1; ) r++, i = t.indexOf(n, i + n.length);
    return r;
  }
  function Gs(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  function Ys(e, n, t) {
    const i = mt((t || {}).ignore || []), o = Js(n);
    let l = -1;
    for (; ++l < o.length; ) Pr(e, "text", a);
    function a(u, h) {
      let c = -1, p;
      for (; ++c < h.length; ) {
        const f = h[c], g = p ? p.children : void 0;
        if (i(f, g ? g.indexOf(f) : void 0, p)) return;
        p = f;
      }
      if (p) return s(u, h);
    }
    function s(u, h) {
      const c = h[h.length - 1], p = o[l][0], f = o[l][1];
      let g = 0;
      const I = c.children.indexOf(u);
      let b = false, A = [];
      p.lastIndex = 0;
      let v = p.exec(u.value);
      for (; v; ) {
        const P = v.index, _ = {
          index: v.index,
          input: v.input,
          stack: [
            ...h,
            u
          ]
        };
        let C = f(...v, _);
        if (typeof C == "string" && (C = C.length > 0 ? {
          type: "text",
          value: C
        } : void 0), C === false ? p.lastIndex = P + 1 : (g !== P && A.push({
          type: "text",
          value: u.value.slice(g, P)
        }), Array.isArray(C) ? A.push(...C) : C && A.push(C), g = P + v[0].length, b = true), !p.global) break;
        v = p.exec(u.value);
      }
      return b ? (g < u.value.length && A.push({
        type: "text",
        value: u.value.slice(g)
      }), c.children.splice(I, 1, ...A)) : A = [
        u
      ], I + A.length;
    }
  }
  function Js(e) {
    const n = [];
    if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
    const t = !e[0] || Array.isArray(e[0]) ? e : [
      e
    ];
    let r = -1;
    for (; ++r < t.length; ) {
      const i = t[r];
      n.push([
        Xs(i[0]),
        Zs(i[1])
      ]);
    }
    return n;
  }
  function Xs(e) {
    return typeof e == "string" ? new RegExp(Gs(e), "g") : e;
  }
  function Zs(e) {
    return typeof e == "function" ? e : function() {
      return e;
    };
  }
  const Ft = "phrasing", Pt = [
    "autolink",
    "link",
    "image",
    "label"
  ];
  function eu() {
    return {
      transforms: [
        au
      ],
      enter: {
        literalAutolink: nu,
        literalAutolinkEmail: _t,
        literalAutolinkHttp: _t,
        literalAutolinkWww: _t
      },
      exit: {
        literalAutolink: ou,
        literalAutolinkEmail: lu,
        literalAutolinkHttp: ru,
        literalAutolinkWww: iu
      }
    };
  }
  function tu() {
    return {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct: Ft,
          notInConstruct: Pt
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct: Ft,
          notInConstruct: Pt
        },
        {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct: Ft,
          notInConstruct: Pt
        }
      ]
    };
  }
  function nu(e) {
    this.enter({
      type: "link",
      title: null,
      url: "",
      children: []
    }, e);
  }
  function _t(e) {
    this.config.enter.autolinkProtocol.call(this, e);
  }
  function ru(e) {
    this.config.exit.autolinkProtocol.call(this, e);
  }
  function iu(e) {
    this.config.exit.data.call(this, e);
    const n = this.stack[this.stack.length - 1];
    n.type, n.url = "http://" + this.sliceSerialize(e);
  }
  function lu(e) {
    this.config.exit.autolinkEmail.call(this, e);
  }
  function ou(e) {
    this.exit(e);
  }
  function au(e) {
    Ys(e, [
      [
        /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
        su
      ],
      [
        new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"),
        uu
      ]
    ], {
      ignore: [
        "link",
        "linkReference"
      ]
    });
  }
  function su(e, n, t, r, i) {
    let o = "";
    if (!Lr(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !cu(t))) return false;
    const l = hu(t + r);
    if (!l[0]) return false;
    const a = {
      type: "link",
      title: null,
      url: o + n + l[0],
      children: [
        {
          type: "text",
          value: n + l[0]
        }
      ]
    };
    return l[1] ? [
      a,
      {
        type: "text",
        value: l[1]
      }
    ] : a;
  }
  function uu(e, n, t, r) {
    return !Lr(r, true) || /[-\d_]$/.test(t) ? false : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [
        {
          type: "text",
          value: n + "@" + t
        }
      ]
    };
  }
  function cu(e) {
    const n = e.split(".");
    return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
  }
  function hu(e) {
    const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!n) return [
      e,
      void 0
    ];
    e = e.slice(0, n.index);
    let t = n[0], r = t.indexOf(")");
    const i = Zn(e, "(");
    let o = Zn(e, ")");
    for (; r !== -1 && i > o; ) e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
    return [
      e,
      t
    ];
  }
  function Lr(e, n) {
    const t = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || Ne(t) || ht(t)) && (!n || t !== 47);
  }
  Rr.peek = yu;
  function fu() {
    this.buffer();
  }
  function pu(e) {
    this.enter({
      type: "footnoteReference",
      identifier: "",
      label: ""
    }, e);
  }
  function mu() {
    this.buffer();
  }
  function du(e) {
    this.enter({
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: []
    }, e);
  }
  function gu(e) {
    const n = this.resume(), t = this.stack[this.stack.length - 1];
    t.type, t.identifier = he(this.sliceSerialize(e)).toLowerCase(), t.label = n;
  }
  function xu(e) {
    this.exit(e);
  }
  function ku(e) {
    const n = this.resume(), t = this.stack[this.stack.length - 1];
    t.type, t.identifier = he(this.sliceSerialize(e)).toLowerCase(), t.label = n;
  }
  function bu(e) {
    this.exit(e);
  }
  function yu() {
    return "[";
  }
  function Rr(e, n, t, r) {
    const i = t.createTracker(r);
    let o = i.move("[^");
    const l = t.enter("footnoteReference"), a = t.enter("reference");
    return o += i.move(t.safe(t.associationId(e), {
      after: "]",
      before: o
    })), a(), l(), o += i.move("]"), o;
  }
  function wu() {
    return {
      enter: {
        gfmFootnoteCallString: fu,
        gfmFootnoteCall: pu,
        gfmFootnoteDefinitionLabelString: mu,
        gfmFootnoteDefinition: du
      },
      exit: {
        gfmFootnoteCallString: gu,
        gfmFootnoteCall: xu,
        gfmFootnoteDefinitionLabelString: ku,
        gfmFootnoteDefinition: bu
      }
    };
  }
  function Su(e) {
    let n = false;
    return e && e.firstLineBlank && (n = true), {
      handlers: {
        footnoteDefinition: t,
        footnoteReference: Rr
      },
      unsafe: [
        {
          character: "[",
          inConstruct: [
            "label",
            "phrasing",
            "reference"
          ]
        }
      ]
    };
    function t(r, i, o, l) {
      const a = o.createTracker(l);
      let s = a.move("[^");
      const u = o.enter("footnoteDefinition"), h = o.enter("label");
      return s += a.move(o.safe(o.associationId(r), {
        before: s,
        after: "]"
      })), h(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move((n ? `
` : " ") + o.indentLines(o.containerFlow(r, a.current()), n ? Mr : Cu))), u(), s;
    }
  }
  function Cu(e, n, t) {
    return n === 0 ? e : Mr(e, n, t);
  }
  function Mr(e, n, t) {
    return (t ? "" : "    ") + e;
  }
  const Eu = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
  ];
  Or.peek = Nu;
  function Iu() {
    return {
      canContainEols: [
        "delete"
      ],
      enter: {
        strikethrough: Au
      },
      exit: {
        strikethrough: Tu
      }
    };
  }
  function vu() {
    return {
      unsafe: [
        {
          character: "~",
          inConstruct: "phrasing",
          notInConstruct: Eu
        }
      ],
      handlers: {
        delete: Or
      }
    };
  }
  function Au(e) {
    this.enter({
      type: "delete",
      children: []
    }, e);
  }
  function Tu(e) {
    this.exit(e);
  }
  function Or(e, n, t, r) {
    const i = t.createTracker(r), o = t.enter("strikethrough");
    let l = i.move("~~");
    return l += t.containerPhrasing(e, {
      ...i.current(),
      before: l,
      after: "~"
    }), l += i.move("~~"), o(), l;
  }
  function Nu() {
    return "~";
  }
  function zu(e) {
    return e.length;
  }
  function ju(e, n) {
    const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || zu, o = [], l = [], a = [], s = [];
    let u = 0, h = -1;
    for (; ++h < e.length; ) {
      const w = [], I = [];
      let b = -1;
      for (e[h].length > u && (u = e[h].length); ++b < e[h].length; ) {
        const A = Fu(e[h][b]);
        if (t.alignDelimiters !== false) {
          const v = i(A);
          I[b] = v, (s[b] === void 0 || v > s[b]) && (s[b] = v);
        }
        w.push(A);
      }
      l[h] = w, a[h] = I;
    }
    let c = -1;
    if (typeof r == "object" && "length" in r) for (; ++c < u; ) o[c] = er(r[c]);
    else {
      const w = er(r);
      for (; ++c < u; ) o[c] = w;
    }
    c = -1;
    const p = [], f = [];
    for (; ++c < u; ) {
      const w = o[c];
      let I = "", b = "";
      w === 99 ? (I = ":", b = ":") : w === 108 ? I = ":" : w === 114 && (b = ":");
      let A = t.alignDelimiters === false ? 1 : Math.max(1, s[c] - I.length - b.length);
      const v = I + "-".repeat(A) + b;
      t.alignDelimiters !== false && (A = I.length + A + b.length, A > s[c] && (s[c] = A), f[c] = A), p[c] = v;
    }
    l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
    const g = [];
    for (; ++h < l.length; ) {
      const w = l[h], I = a[h];
      c = -1;
      const b = [];
      for (; ++c < u; ) {
        const A = w[c] || "";
        let v = "", P = "";
        if (t.alignDelimiters !== false) {
          const _ = s[c] - (I[c] || 0), C = o[c];
          C === 114 ? v = " ".repeat(_) : C === 99 ? _ % 2 ? (v = " ".repeat(_ / 2 + 0.5), P = " ".repeat(_ / 2 - 0.5)) : (v = " ".repeat(_ / 2), P = v) : P = " ".repeat(_);
        }
        t.delimiterStart !== false && !c && b.push("|"), t.padding !== false && !(t.alignDelimiters === false && A === "") && (t.delimiterStart !== false || c) && b.push(" "), t.alignDelimiters !== false && b.push(v), b.push(A), t.alignDelimiters !== false && b.push(P), t.padding !== false && b.push(" "), (t.delimiterEnd !== false || c !== u - 1) && b.push("|");
      }
      g.push(t.delimiterEnd === false ? b.join("").replace(/ +$/, "") : b.join(""));
    }
    return g.join(`
`);
  }
  function Fu(e) {
    return e == null ? "" : String(e);
  }
  function er(e) {
    const n = typeof e == "string" ? e.codePointAt(0) : 0;
    return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
  }
  function Pu(e, n, t, r) {
    const i = t.enter("blockquote"), o = t.createTracker(r);
    o.move("> "), o.shift(2);
    const l = t.indentLines(t.containerFlow(e, o.current()), _u);
    return i(), l;
  }
  function _u(e, n, t) {
    return ">" + (t ? "" : " ") + e;
  }
  function Du(e, n) {
    return tr(e, n.inConstruct, true) && !tr(e, n.notInConstruct, false);
  }
  function tr(e, n, t) {
    if (typeof n == "string" && (n = [
      n
    ]), !n || n.length === 0) return t;
    let r = -1;
    for (; ++r < n.length; ) if (e.includes(n[r])) return true;
    return false;
  }
  function nr(e, n, t, r) {
    let i = -1;
    for (; ++i < t.unsafe.length; ) if (t.unsafe[i].character === `
` && Du(t.stack, t.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
    return `\\
`;
  }
  function Lu(e, n) {
    const t = String(e);
    let r = t.indexOf(n), i = r, o = 0, l = 0;
    if (typeof n != "string") throw new TypeError("Expected substring");
    for (; r !== -1; ) r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
    return l;
  }
  function Ru(e, n) {
    return !!(n.options.fences === false && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
  }
  function Mu(e) {
    const n = e.options.fence || "`";
    if (n !== "`" && n !== "~") throw new Error("Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`");
    return n;
  }
  function Ou(e, n, t, r) {
    const i = Mu(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
    if (Ru(e, t)) {
      const c = t.enter("codeIndented"), p = t.indentLines(o, Bu);
      return c(), p;
    }
    const a = t.createTracker(r), s = i.repeat(Math.max(Lu(o, i) + 1, 3)), u = t.enter("codeFenced");
    let h = a.move(s);
    if (e.lang) {
      const c = t.enter(`codeFencedLang${l}`);
      h += a.move(t.safe(e.lang, {
        before: h,
        after: " ",
        encode: [
          "`"
        ],
        ...a.current()
      })), c();
    }
    if (e.lang && e.meta) {
      const c = t.enter(`codeFencedMeta${l}`);
      h += a.move(" "), h += a.move(t.safe(e.meta, {
        before: h,
        after: `
`,
        encode: [
          "`"
        ],
        ...a.current()
      })), c();
    }
    return h += a.move(`
`), o && (h += a.move(o + `
`)), h += a.move(s), u(), h;
  }
  function Bu(e, n, t) {
    return (t ? "" : "    ") + e;
  }
  function an(e) {
    const n = e.options.quote || '"';
    if (n !== '"' && n !== "'") throw new Error("Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`");
    return n;
  }
  function $u(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
    let a = t.enter("label");
    const s = t.createTracker(r);
    let u = s.move("[");
    return u += s.move(t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })), u += s.move("]: "), a(), !e.url || /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...s.current()
    })), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    }))), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })), u += s.move(i), a()), l(), u;
  }
  function Hu(e) {
    const n = e.options.emphasis || "*";
    if (n !== "*" && n !== "_") throw new Error("Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`");
    return n;
  }
  function Ue(e) {
    return "&#x" + e.toString(16).toUpperCase() + ";";
  }
  function ut(e, n, t) {
    const r = _e(e), i = _e(n);
    return r === void 0 ? i === void 0 ? t === "_" ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: true
    } : r === 1 ? i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: false
    } : {
      inside: false,
      outside: false
    };
  }
  Br.peek = Vu;
  function Br(e, n, t, r) {
    const i = Hu(t), o = t.enter("emphasis"), l = t.createTracker(r), a = l.move(i);
    let s = l.move(t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    }));
    const u = s.charCodeAt(0), h = ut(r.before.charCodeAt(r.before.length - 1), u, i);
    h.inside && (s = Ue(u) + s.slice(1));
    const c = s.charCodeAt(s.length - 1), p = ut(r.after.charCodeAt(0), c, i);
    p.inside && (s = s.slice(0, -1) + Ue(c));
    const f = l.move(i);
    return o(), t.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: h.outside
    }, a + s + f;
  }
  function Vu(e, n, t) {
    return t.options.emphasis || "*";
  }
  function qu(e, n) {
    let t = false;
    return ln(e, function(r) {
      if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") return t = true, Bt;
    }), !!((!e.depth || e.depth < 3) && Xt(e) && (n.options.setext || t));
  }
  function Uu(e, n, t, r) {
    const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
    if (qu(e, t)) {
      const h = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e, {
        ...o.current(),
        before: `
`,
        after: `
`
      });
      return c(), h(), p + `
` + (i === 1 ? "=" : "-").repeat(p.length - (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1));
    }
    const l = "#".repeat(i), a = t.enter("headingAtx"), s = t.enter("phrasing");
    o.move(l + " ");
    let u = t.containerPhrasing(e, {
      before: "# ",
      after: `
`,
      ...o.current()
    });
    return /^[\t ]/.test(u) && (u = Ue(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, t.options.closeAtx && (u += " " + l), s(), a(), u;
  }
  $r.peek = Wu;
  function $r(e) {
    return e.value || "";
  }
  function Wu() {
    return "<";
  }
  Hr.peek = Qu;
  function Hr(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
    let a = t.enter("label");
    const s = t.createTracker(r);
    let u = s.move("![");
    return u += s.move(t.safe(e.alt, {
      before: u,
      after: "]",
      ...s.current()
    })), u += s.move("]("), a(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...s.current()
    })), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    }))), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })), u += s.move(i), a()), u += s.move(")"), l(), u;
  }
  function Qu() {
    return "!";
  }
  Vr.peek = Ku;
  function Vr(e, n, t, r) {
    const i = e.referenceType, o = t.enter("imageReference");
    let l = t.enter("label");
    const a = t.createTracker(r);
    let s = a.move("![");
    const u = t.safe(e.alt, {
      before: s,
      after: "]",
      ...a.current()
    });
    s += a.move(u + "]["), l();
    const h = t.stack;
    t.stack = [], l = t.enter("reference");
    const c = t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...a.current()
    });
    return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
  }
  function Ku() {
    return "!";
  }
  qr.peek = Gu;
  function qr(e, n, t) {
    let r = e.value || "", i = "`", o = -1;
    for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
    for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
      const l = t.unsafe[o], a = t.compilePattern(l);
      let s;
      if (l.atBreak) for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
    }
    return i + r + i;
  }
  function Gu() {
    return "`";
  }
  function Ur(e, n) {
    const t = Xt(e);
    return !!(!n.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (t === e.url || "mailto:" + t === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
  }
  Wr.peek = Yu;
  function Wr(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
    let a, s;
    if (Ur(e, t)) {
      const h = t.stack;
      t.stack = [], a = t.enter("autolink");
      let c = l.move("<");
      return c += l.move(t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })), c += l.move(">"), a(), t.stack = h, c;
    }
    a = t.enter("link"), s = t.enter("label");
    let u = l.move("[");
    return u += l.move(t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })), u += l.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), u += l.move("<"), u += l.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...l.current()
    })), u += l.move(">")) : (s = t.enter("destinationRaw"), u += l.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    }))), s(), e.title && (s = t.enter(`title${o}`), u += l.move(" " + i), u += l.move(t.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })), u += l.move(i), s()), u += l.move(")"), a(), u;
  }
  function Yu(e, n, t) {
    return Ur(e, t) ? "<" : "[";
  }
  Qr.peek = Ju;
  function Qr(e, n, t, r) {
    const i = e.referenceType, o = t.enter("linkReference");
    let l = t.enter("label");
    const a = t.createTracker(r);
    let s = a.move("[");
    const u = t.containerPhrasing(e, {
      before: s,
      after: "]",
      ...a.current()
    });
    s += a.move(u + "]["), l();
    const h = t.stack;
    t.stack = [], l = t.enter("reference");
    const c = t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...a.current()
    });
    return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
  }
  function Ju() {
    return "[";
  }
  function sn(e) {
    const n = e.options.bullet || "*";
    if (n !== "*" && n !== "+" && n !== "-") throw new Error("Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return n;
  }
  function Xu(e) {
    const n = sn(e), t = e.options.bulletOther;
    if (!t) return n === "*" ? "-" : "*";
    if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (t === n) throw new Error("Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different");
    return t;
  }
  function Zu(e) {
    const n = e.options.bulletOrdered || ".";
    if (n !== "." && n !== ")") throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`");
    return n;
  }
  function Kr(e) {
    const n = e.options.rule || "*";
    if (n !== "*" && n !== "-" && n !== "_") throw new Error("Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`");
    return n;
  }
  function ec(e, n, t, r) {
    const i = t.enter("list"), o = t.bulletCurrent;
    let l = e.ordered ? Zu(t) : sn(t);
    const a = e.ordered ? l === "." ? ")" : "." : Xu(t);
    let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : false;
    if (!e.ordered) {
      const h = e.children ? e.children[0] : void 0;
      if ((l === "*" || l === "-") && h && (!h.children || !h.children[0]) && t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = true), Kr(t) === l && h) {
        let c = -1;
        for (; ++c < e.children.length; ) {
          const p = e.children[c];
          if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
            s = true;
            break;
          }
        }
      }
    }
    s && (l = a), t.bulletCurrent = l;
    const u = t.containerFlow(e, r);
    return t.bulletLastUsed = l, t.bulletCurrent = o, i(), u;
  }
  function tc(e) {
    const n = e.options.listItemIndent || "one";
    if (n !== "tab" && n !== "one" && n !== "mixed") throw new Error("Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return n;
  }
  function nc(e, n, t, r) {
    const i = tc(t);
    let o = t.bulletCurrent || sn(t);
    n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === false ? 0 : n.children.indexOf(e)) + o);
    let l = o.length + 1;
    (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
    const a = t.createTracker(r);
    a.move(o + " ".repeat(l - o.length)), a.shift(l);
    const s = t.enter("listItem"), u = t.indentLines(t.containerFlow(e, a.current()), h);
    return s(), u;
    function h(c, p, f) {
      return p ? (f ? "" : " ".repeat(l)) + c : (f ? o : o + " ".repeat(l - o.length)) + c;
    }
  }
  function rc(e, n, t, r) {
    const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
    return o(), i(), l;
  }
  const ic = mt([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective"
  ]);
  function lc(e, n, t, r) {
    return (e.children.some(function(l) {
      return ic(l);
    }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
  }
  function oc(e) {
    const n = e.options.strong || "*";
    if (n !== "*" && n !== "_") throw new Error("Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`");
    return n;
  }
  Gr.peek = ac;
  function Gr(e, n, t, r) {
    const i = oc(t), o = t.enter("strong"), l = t.createTracker(r), a = l.move(i + i);
    let s = l.move(t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    }));
    const u = s.charCodeAt(0), h = ut(r.before.charCodeAt(r.before.length - 1), u, i);
    h.inside && (s = Ue(u) + s.slice(1));
    const c = s.charCodeAt(s.length - 1), p = ut(r.after.charCodeAt(0), c, i);
    p.inside && (s = s.slice(0, -1) + Ue(c));
    const f = l.move(i + i);
    return o(), t.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: h.outside
    }, a + s + f;
  }
  function ac(e, n, t) {
    return t.options.strong || "*";
  }
  function sc(e, n, t, r) {
    return t.safe(e.value, r);
  }
  function uc(e) {
    const n = e.options.ruleRepetition || 3;
    if (n < 3) throw new Error("Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more");
    return n;
  }
  function cc(e, n, t) {
    const r = (Kr(t) + (t.options.ruleSpaces ? " " : "")).repeat(uc(t));
    return t.options.ruleSpaces ? r.slice(0, -1) : r;
  }
  const Yr = {
    blockquote: Pu,
    break: nr,
    code: Ou,
    definition: $u,
    emphasis: Br,
    hardBreak: nr,
    heading: Uu,
    html: $r,
    image: Hr,
    imageReference: Vr,
    inlineCode: qr,
    link: Wr,
    linkReference: Qr,
    list: ec,
    listItem: nc,
    paragraph: rc,
    root: lc,
    strong: Gr,
    text: sc,
    thematicBreak: cc
  };
  function hc() {
    return {
      enter: {
        table: fc,
        tableData: rr,
        tableHeader: rr,
        tableRow: mc
      },
      exit: {
        codeText: dc,
        table: pc,
        tableData: Dt,
        tableHeader: Dt,
        tableRow: Dt
      }
    };
  }
  function fc(e) {
    const n = e._align;
    this.enter({
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    }, e), this.data.inTable = true;
  }
  function pc(e) {
    this.exit(e), this.data.inTable = void 0;
  }
  function mc(e) {
    this.enter({
      type: "tableRow",
      children: []
    }, e);
  }
  function Dt(e) {
    this.exit(e);
  }
  function rr(e) {
    this.enter({
      type: "tableCell",
      children: []
    }, e);
  }
  function dc(e) {
    let n = this.resume();
    this.data.inTable && (n = n.replace(/\\([\\|])/g, gc));
    const t = this.stack[this.stack.length - 1];
    t.type, t.value = n, this.exit(e);
  }
  function gc(e, n) {
    return n === "|" ? n : e;
  }
  function xc(e) {
    const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
    return {
      unsafe: [
        {
          character: "\r",
          inConstruct: "tableCell"
        },
        {
          character: `
`,
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: "|",
          after: "[	 :-]"
        },
        {
          character: "|",
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: ":",
          after: "-"
        },
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        inlineCode: p,
        table: l,
        tableCell: s,
        tableRow: a
      }
    };
    function l(f, g, w, I) {
      return u(h(f, w, I), f.align);
    }
    function a(f, g, w, I) {
      const b = c(f, w, I), A = u([
        b
      ]);
      return A.slice(0, A.indexOf(`
`));
    }
    function s(f, g, w, I) {
      const b = w.enter("tableCell"), A = w.enter("phrasing"), v = w.containerPhrasing(f, {
        ...I,
        before: o,
        after: o
      });
      return A(), b(), v;
    }
    function u(f, g) {
      return ju(f, {
        align: g,
        alignDelimiters: r,
        padding: t,
        stringLength: i
      });
    }
    function h(f, g, w) {
      const I = f.children;
      let b = -1;
      const A = [], v = g.enter("table");
      for (; ++b < I.length; ) A[b] = c(I[b], g, w);
      return v(), A;
    }
    function c(f, g, w) {
      const I = f.children;
      let b = -1;
      const A = [], v = g.enter("tableRow");
      for (; ++b < I.length; ) A[b] = s(I[b], f, g, w);
      return v(), A;
    }
    function p(f, g, w) {
      let I = Yr.inlineCode(f, g, w);
      return w.stack.includes("tableCell") && (I = I.replace(/\|/g, "\\$&")), I;
    }
  }
  function kc() {
    return {
      exit: {
        taskListCheckValueChecked: ir,
        taskListCheckValueUnchecked: ir,
        paragraph: yc
      }
    };
  }
  function bc() {
    return {
      unsafe: [
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        listItem: wc
      }
    };
  }
  function ir(e) {
    const n = this.stack[this.stack.length - 2];
    n.type, n.checked = e.type === "taskListCheckValueChecked";
  }
  function yc(e) {
    const n = this.stack[this.stack.length - 2];
    if (n && n.type === "listItem" && typeof n.checked == "boolean") {
      const t = this.stack[this.stack.length - 1];
      t.type;
      const r = t.children[0];
      if (r && r.type === "text") {
        const i = n.children;
        let o = -1, l;
        for (; ++o < i.length; ) {
          const a = i[o];
          if (a.type === "paragraph") {
            l = a;
            break;
          }
        }
        l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
      }
    }
    this.exit(e);
  }
  function wc(e, n, t, r) {
    const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
    o && a.move(l);
    let s = Yr.listItem(e, n, t, {
      ...r,
      ...a.current()
    });
    return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
    function u(h) {
      return h + l;
    }
  }
  function Sc() {
    return [
      eu(),
      wu(),
      Iu(),
      hc(),
      kc()
    ];
  }
  function Cc(e) {
    return {
      extensions: [
        tu(),
        Su(e),
        vu(),
        xc(e),
        bc()
      ]
    };
  }
  const Ec = {
    tokenize: zc,
    partial: true
  }, Jr = {
    tokenize: jc,
    partial: true
  }, Xr = {
    tokenize: Fc,
    partial: true
  }, Zr = {
    tokenize: Pc,
    partial: true
  }, Ic = {
    tokenize: _c,
    partial: true
  }, ei = {
    name: "wwwAutolink",
    tokenize: Tc,
    previous: ni
  }, ti = {
    name: "protocolAutolink",
    tokenize: Nc,
    previous: ri
  }, we = {
    name: "emailAutolink",
    tokenize: Ac,
    previous: ii
  }, ge = {};
  function vc() {
    return {
      text: ge
    };
  }
  let ve = 48;
  for (; ve < 123; ) ge[ve] = we, ve++, ve === 58 ? ve = 65 : ve === 91 && (ve = 97);
  ge[43] = we;
  ge[45] = we;
  ge[46] = we;
  ge[95] = we;
  ge[72] = [
    we,
    ti
  ];
  ge[104] = [
    we,
    ti
  ];
  ge[87] = [
    we,
    ei
  ];
  ge[119] = [
    we,
    ei
  ];
  function Ac(e, n, t) {
    const r = this;
    let i, o;
    return l;
    function l(c) {
      return !qt(c) || !ii.call(r, r.previous) || un(r.events) ? t(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
    }
    function a(c) {
      return qt(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : t(c);
    }
    function s(c) {
      return c === 46 ? e.check(Ic, h, u)(c) : c === 45 || c === 95 || X(c) ? (o = true, e.consume(c), s) : h(c);
    }
    function u(c) {
      return e.consume(c), i = true, s;
    }
    function h(c) {
      return o && i && ne(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c)) : t(c);
    }
  }
  function Tc(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return l !== 87 && l !== 119 || !ni.call(r, r.previous) || un(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Ec, e.attempt(Jr, e.attempt(Xr, o), t), t)(l));
    }
    function o(l) {
      return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
    }
  }
  function Nc(e, n, t) {
    const r = this;
    let i = "", o = false;
    return l;
    function l(c) {
      return (c === 72 || c === 104) && ri.call(r, r.previous) && !un(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : t(c);
    }
    function a(c) {
      if (ne(c) && i.length < 5) return i += String.fromCodePoint(c), e.consume(c), a;
      if (c === 58) {
        const p = i.toLowerCase();
        if (p === "http" || p === "https") return e.consume(c), s;
      }
      return t(c);
    }
    function s(c) {
      return c === 47 ? (e.consume(c), o ? u : (o = true, s)) : t(c);
    }
    function u(c) {
      return c === null || ot(c) || W(c) || Ne(c) || ht(c) ? t(c) : e.attempt(Jr, e.attempt(Xr, h), t)(c);
    }
    function h(c) {
      return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c);
    }
  }
  function zc(e, n, t) {
    let r = 0;
    return i;
    function i(l) {
      return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
    }
    function o(l) {
      return l === null ? t(l) : n(l);
    }
  }
  function jc(e, n, t) {
    let r, i, o;
    return l;
    function l(u) {
      return u === 46 || u === 95 ? e.check(Zr, s, a)(u) : u === null || W(u) || Ne(u) || u !== 45 && ht(u) ? s(u) : (o = true, e.consume(u), l);
    }
    function a(u) {
      return u === 95 ? r = true : (i = r, r = void 0), e.consume(u), l;
    }
    function s(u) {
      return i || r || !o ? t(u) : n(u);
    }
  }
  function Fc(e, n) {
    let t = 0, r = 0;
    return i;
    function i(l) {
      return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Zr, n, o)(l) : l === null || W(l) || Ne(l) ? n(l) : (e.consume(l), i);
    }
    function o(l) {
      return l === 41 && r++, e.consume(l), i;
    }
  }
  function Pc(e, n, t) {
    return r;
    function r(a) {
      return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : a === 60 || a === null || W(a) || Ne(a) ? n(a) : t(a);
    }
    function i(a) {
      return a === null || a === 40 || a === 91 || W(a) || Ne(a) ? n(a) : r(a);
    }
    function o(a) {
      return ne(a) ? l(a) : t(a);
    }
    function l(a) {
      return a === 59 ? (e.consume(a), r) : ne(a) ? (e.consume(a), l) : t(a);
    }
  }
  function _c(e, n, t) {
    return r;
    function r(o) {
      return e.consume(o), i;
    }
    function i(o) {
      return X(o) ? t(o) : n(o);
    }
  }
  function ni(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || W(e);
  }
  function ri(e) {
    return !ne(e);
  }
  function ii(e) {
    return !(e === 47 || qt(e));
  }
  function qt(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || X(e);
  }
  function un(e) {
    let n = e.length, t = false;
    for (; n--; ) {
      const r = e[n][1];
      if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
        t = true;
        break;
      }
      if (r._gfmAutolinkLiteralWalkedInto) {
        t = false;
        break;
      }
    }
    return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), t;
  }
  const Dc = {
    tokenize: Vc,
    partial: true
  };
  function Lc() {
    return {
      document: {
        91: {
          name: "gfmFootnoteDefinition",
          tokenize: Bc,
          continuation: {
            tokenize: $c
          },
          exit: Hc
        }
      },
      text: {
        91: {
          name: "gfmFootnoteCall",
          tokenize: Oc
        },
        93: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: Rc,
          resolveTo: Mc
        }
      }
    };
  }
  function Rc(e, n, t) {
    const r = this;
    let i = r.events.length;
    const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let l;
    for (; i--; ) {
      const s = r.events[i][1];
      if (s.type === "labelImage") {
        l = s;
        break;
      }
      if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link") break;
    }
    return a;
    function a(s) {
      if (!l || !l._balanced) return t(s);
      const u = he(r.sliceSerialize({
        start: l.end,
        end: r.now()
      }));
      return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
    }
  }
  function Mc(e, n) {
    let t = e.length;
    for (; t--; ) if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
    e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
    const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[t + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end)
    }, i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[t + 3][1].end),
      end: Object.assign({}, e[t + 3][1].end)
    };
    i.end.column++, i.end.offset++, i.end._bufferIndex++;
    const o = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start)
    }, l = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, o.start),
      end: Object.assign({}, o.end)
    }, a = [
      e[t + 1],
      e[t + 2],
      [
        "enter",
        r,
        n
      ],
      e[t + 3],
      e[t + 4],
      [
        "enter",
        i,
        n
      ],
      [
        "exit",
        i,
        n
      ],
      [
        "enter",
        o,
        n
      ],
      [
        "enter",
        l,
        n
      ],
      [
        "exit",
        l,
        n
      ],
      [
        "exit",
        o,
        n
      ],
      e[e.length - 2],
      e[e.length - 1],
      [
        "exit",
        r,
        n
      ]
    ];
    return e.splice(t, e.length - t + 1, ...a), e;
  }
  function Oc(e, n, t) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let o = 0, l;
    return a;
    function a(c) {
      return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
    }
    function s(c) {
      return c !== 94 ? t(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
    }
    function u(c) {
      if (o > 999 || c === 93 && !l || c === null || c === 91 || W(c)) return t(c);
      if (c === 93) {
        e.exit("chunkString");
        const p = e.exit("gfmFootnoteCallString");
        return i.includes(he(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(c);
      }
      return W(c) || (l = true), o++, e.consume(c), c === 92 ? h : u;
    }
    function h(c) {
      return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
    }
  }
  function Bc(e, n, t) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let o, l = 0, a;
    return s;
    function s(g) {
      return e.enter("gfmFootnoteDefinition")._container = true, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
    }
    function u(g) {
      return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : t(g);
    }
    function h(g) {
      if (l > 999 || g === 93 && !a || g === null || g === 91 || W(g)) return t(g);
      if (g === 93) {
        e.exit("chunkString");
        const w = e.exit("gfmFootnoteDefinitionLabelString");
        return o = he(r.sliceSerialize(w)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
      }
      return W(g) || (a = true), l++, e.consume(g), g === 92 ? c : h;
    }
    function c(g) {
      return g === 91 || g === 92 || g === 93 ? (e.consume(g), l++, h) : h(g);
    }
    function p(g) {
      return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(o) || i.push(o), $(e, f, "gfmFootnoteDefinitionWhitespace")) : t(g);
    }
    function f(g) {
      return n(g);
    }
  }
  function $c(e, n, t) {
    return e.check(We, n, e.attempt(Dc, n, t));
  }
  function Hc(e) {
    e.exit("gfmFootnoteDefinition");
  }
  function Vc(e, n, t) {
    const r = this;
    return $(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], true).length === 4 ? n(o) : t(o);
    }
  }
  function qc(e) {
    let t = (e || {}).singleTilde;
    const r = {
      name: "strikethrough",
      tokenize: o,
      resolveAll: i
    };
    return t == null && (t = true), {
      text: {
        126: r
      },
      insideSpan: {
        null: [
          r
        ]
      },
      attentionMarkers: {
        null: [
          126
        ]
      }
    };
    function i(l, a) {
      let s = -1;
      for (; ++s < l.length; ) if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; ) if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
          l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
          const h = {
            type: "strikethrough",
            start: Object.assign({}, l[u][1].start),
            end: Object.assign({}, l[s][1].end)
          }, c = {
            type: "strikethroughText",
            start: Object.assign({}, l[u][1].end),
            end: Object.assign({}, l[s][1].start)
          }, p = [
            [
              "enter",
              h,
              a
            ],
            [
              "enter",
              l[u][1],
              a
            ],
            [
              "exit",
              l[u][1],
              a
            ],
            [
              "enter",
              c,
              a
            ]
          ], f = a.parser.constructs.insideSpan.null;
          f && se(p, p.length, 0, ft(f, l.slice(u + 1, s), a)), se(p, p.length, 0, [
            [
              "exit",
              c,
              a
            ],
            [
              "enter",
              l[s][1],
              a
            ],
            [
              "exit",
              l[s][1],
              a
            ],
            [
              "exit",
              h,
              a
            ]
          ]), se(l, u - 1, s - u + 3, p), s = u + p.length - 2;
          break;
        }
      }
      for (s = -1; ++s < l.length; ) l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
      return l;
    }
    function o(l, a, s) {
      const u = this.previous, h = this.events;
      let c = 0;
      return p;
      function p(g) {
        return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(g) : (l.enter("strikethroughSequenceTemporary"), f(g));
      }
      function f(g) {
        const w = _e(u);
        if (g === 126) return c > 1 ? s(g) : (l.consume(g), c++, f);
        if (c < 2 && !t) return s(g);
        const I = l.exit("strikethroughSequenceTemporary"), b = _e(g);
        return I._open = !b || b === 2 && !!w, I._close = !w || w === 2 && !!b, a(g);
      }
    }
  }
  class Uc {
    constructor() {
      this.map = [];
    }
    add(n, t, r) {
      Wc(this, n, t, r);
    }
    consume(n) {
      if (this.map.sort(function(o, l) {
        return o[0] - l[0];
      }), this.map.length === 0) return;
      let t = this.map.length;
      const r = [];
      for (; t > 0; ) t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
      r.push(n.slice()), n.length = 0;
      let i = r.pop();
      for (; i; ) {
        for (const o of i) n.push(o);
        i = r.pop();
      }
      this.map.length = 0;
    }
  }
  function Wc(e, n, t, r) {
    let i = 0;
    if (!(t === 0 && r.length === 0)) {
      for (; i < e.map.length; ) {
        if (e.map[i][0] === n) {
          e.map[i][1] += t, e.map[i][2].push(...r);
          return;
        }
        i += 1;
      }
      e.map.push([
        n,
        t,
        r
      ]);
    }
  }
  function Qc(e, n) {
    let t = false;
    const r = [];
    for (; n < e.length; ) {
      const i = e[n];
      if (t) {
        if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        else if (i[1].type === "tableContent") {
          if (e[n - 1][1].type === "tableDelimiterMarker") {
            const o = r.length - 1;
            r[o] = r[o] === "left" ? "center" : "right";
          }
        } else if (i[1].type === "tableDelimiterRow") break;
      } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = true);
      n += 1;
    }
    return r;
  }
  function Kc() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: Gc,
          resolveAll: Yc
        }
      }
    };
  }
  function Gc(e, n, t) {
    const r = this;
    let i = 0, o = 0, l;
    return a;
    function a(y) {
      let T = r.events.length - 1;
      for (; T > -1; ) {
        const U = r.events[T][1].type;
        if (U === "lineEnding" || U === "linePrefix") T--;
        else break;
      }
      const z = T > -1 ? r.events[T][1].type : null, q = z === "tableHead" || z === "tableRow" ? C : s;
      return q === C && r.parser.lazy[r.now().line] ? t(y) : q(y);
    }
    function s(y) {
      return e.enter("tableHead"), e.enter("tableRow"), u(y);
    }
    function u(y) {
      return y === 124 || (l = true, o += 1), h(y);
    }
    function h(y) {
      return y === null ? t(y) : F(y) ? o > 1 ? (o = 0, r.interrupt = true, e.exit("tableRow"), e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), f) : t(y) : L(y) ? $(e, h, "whitespace")(y) : (o += 1, l && (l = false, i += 1), y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), l = true, h) : (e.enter("data"), c(y)));
    }
    function c(y) {
      return y === null || y === 124 || W(y) ? (e.exit("data"), h(y)) : (e.consume(y), y === 92 ? p : c);
    }
    function p(y) {
      return y === 92 || y === 124 ? (e.consume(y), c) : c(y);
    }
    function f(y) {
      return r.interrupt = false, r.parser.lazy[r.now().line] ? t(y) : (e.enter("tableDelimiterRow"), l = false, L(y) ? $(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y) : g(y));
    }
    function g(y) {
      return y === 45 || y === 58 ? I(y) : y === 124 ? (l = true, e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), w) : _(y);
    }
    function w(y) {
      return L(y) ? $(e, I, "whitespace")(y) : I(y);
    }
    function I(y) {
      return y === 58 ? (o += 1, l = true, e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), b) : y === 45 ? (o += 1, b(y)) : y === null || F(y) ? P(y) : _(y);
    }
    function b(y) {
      return y === 45 ? (e.enter("tableDelimiterFiller"), A(y)) : _(y);
    }
    function A(y) {
      return y === 45 ? (e.consume(y), A) : y === 58 ? (l = true, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), v) : (e.exit("tableDelimiterFiller"), v(y));
    }
    function v(y) {
      return L(y) ? $(e, P, "whitespace")(y) : P(y);
    }
    function P(y) {
      return y === 124 ? g(y) : y === null || F(y) ? !l || i !== o ? _(y) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(y)) : _(y);
    }
    function _(y) {
      return t(y);
    }
    function C(y) {
      return e.enter("tableRow"), R(y);
    }
    function R(y) {
      return y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), R) : y === null || F(y) ? (e.exit("tableRow"), n(y)) : L(y) ? $(e, R, "whitespace")(y) : (e.enter("data"), H(y));
    }
    function H(y) {
      return y === null || y === 124 || W(y) ? (e.exit("data"), R(y)) : (e.consume(y), y === 92 ? M : H);
    }
    function M(y) {
      return y === 92 || y === 124 ? (e.consume(y), H) : H(y);
    }
  }
  function Yc(e, n) {
    let t = -1, r = true, i = 0, o = [
      0,
      0,
      0,
      0
    ], l = [
      0,
      0,
      0,
      0
    ], a = false, s = 0, u, h, c;
    const p = new Uc();
    for (; ++t < e.length; ) {
      const f = e[t], g = f[1];
      f[0] === "enter" ? g.type === "tableHead" ? (a = false, s !== 0 && (lr(p, n, s, u, h), h = void 0, s = 0), u = {
        type: "table",
        start: Object.assign({}, g.start),
        end: Object.assign({}, g.end)
      }, p.add(t, 0, [
        [
          "enter",
          u,
          n
        ]
      ])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = true, c = void 0, o = [
        0,
        0,
        0,
        0
      ], l = [
        0,
        t + 1,
        0,
        0
      ], a && (a = false, h = {
        type: "tableBody",
        start: Object.assign({}, g.start),
        end: Object.assign({}, g.end)
      }, p.add(t, 0, [
        [
          "enter",
          h,
          n
        ]
      ])), i = g.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = false, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = nt(p, n, o, i, void 0, c), o = [
        0,
        0,
        0,
        0
      ]), l[2] = t)) : g.type === "tableCellDivider" && (r ? r = false : (o[1] !== 0 && (l[0] = l[1], c = nt(p, n, o, i, void 0, c)), o = l, l = [
        o[1],
        t,
        0,
        0
      ])) : g.type === "tableHead" ? (a = true, s = t) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], c = nt(p, n, o, i, t, c)) : l[1] !== 0 && (c = nt(p, n, l, i, t, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (l[3] = t);
    }
    for (s !== 0 && lr(p, n, s, u, h), p.consume(n.events), t = -1; ++t < n.events.length; ) {
      const f = n.events[t];
      f[0] === "enter" && f[1].type === "table" && (f[1]._align = Qc(n.events, t));
    }
    return e;
  }
  function nt(e, n, t, r, i, o) {
    const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
    t[0] !== 0 && (o.end = Object.assign({}, Pe(n.events, t[0])), e.add(t[0], 0, [
      [
        "exit",
        o,
        n
      ]
    ]));
    const s = Pe(n.events, t[1]);
    if (o = {
      type: l,
      start: Object.assign({}, s),
      end: Object.assign({}, s)
    }, e.add(t[1], 0, [
      [
        "enter",
        o,
        n
      ]
    ]), t[2] !== 0) {
      const u = Pe(n.events, t[2]), h = Pe(n.events, t[3]), c = {
        type: a,
        start: Object.assign({}, u),
        end: Object.assign({}, h)
      };
      if (e.add(t[2], 0, [
        [
          "enter",
          c,
          n
        ]
      ]), r !== 2) {
        const p = n.events[t[2]], f = n.events[t[3]];
        if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
          const g = t[2] + 1, w = t[3] - t[2] - 1;
          e.add(g, w, []);
        }
      }
      e.add(t[3] + 1, 0, [
        [
          "exit",
          c,
          n
        ]
      ]);
    }
    return i !== void 0 && (o.end = Object.assign({}, Pe(n.events, i)), e.add(i, 0, [
      [
        "exit",
        o,
        n
      ]
    ]), o = void 0), o;
  }
  function lr(e, n, t, r, i) {
    const o = [], l = Pe(n.events, t);
    i && (i.end = Object.assign({}, l), o.push([
      "exit",
      i,
      n
    ])), r.end = Object.assign({}, l), o.push([
      "exit",
      r,
      n
    ]), e.add(t + 1, 0, o);
  }
  function Pe(e, n) {
    const t = e[n], r = t[0] === "enter" ? "start" : "end";
    return t[1][r];
  }
  const Jc = {
    name: "tasklistCheck",
    tokenize: Zc
  };
  function Xc() {
    return {
      text: {
        91: Jc
      }
    };
  }
  function Zc(e, n, t) {
    const r = this;
    return i;
    function i(s) {
      return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? t(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o);
    }
    function o(s) {
      return W(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
    }
    function l(s) {
      return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
    }
    function a(s) {
      return F(s) ? n(s) : L(s) ? e.check({
        tokenize: eh
      }, n, t)(s) : t(s);
    }
  }
  function eh(e, n, t) {
    return $(e, r, "whitespace");
    function r(i) {
      return i === null ? t(i) : n(i);
    }
  }
  function th(e) {
    return mr([
      vc(),
      Lc(),
      qc(e),
      Kc(),
      Xc()
    ]);
  }
  const nh = {};
  function rh(e) {
    const n = this, t = e || nh, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push(th(t)), o.push(Sc()), l.push(Cc(t));
  }
  const Ae = {
    async createSession(e, n, t) {
      return Ie.post("/api/rag-chat/sessions", {
        knowledgeBaseIds: e,
        title: n,
        targetId: t
      });
    },
    async listSessions(e) {
      return Ie.get("/api/rag-chat/sessions", {
        params: e == null ? void 0 : {
          targetId: e
        }
      });
    },
    async getSessionDetail(e) {
      return Ie.get(`/api/rag-chat/sessions/${e}`);
    },
    async updateSessionTitle(e, n) {
      return Ie.put(`/api/rag-chat/sessions/${e}/title`, {
        title: n
      });
    },
    async updateKnowledgeBases(e, n) {
      return Ie.put(`/api/rag-chat/sessions/${e}/knowledge-bases`, {
        knowledgeBaseIds: n
      });
    },
    async togglePin(e) {
      return Ie.put(`/api/rag-chat/sessions/${e}/pin`);
    },
    async deleteSession(e) {
      return Ie.delete(`/api/rag-chat/sessions/${e}`);
    },
    async sendMessageStream(e, n, t, r, i) {
      return mi({
        url: `/api/rag-chat/sessions/${e}/messages/stream`,
        init: {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: n
          })
        },
        onMessage: t,
        onComplete: r,
        onError: i,
        parseMode: "event",
        trimDataPrefixSpace: false,
        unescapeEscapedNewlines: true,
        dataJoiner: ""
      });
    }
  }, ih = {
    'code[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none"
    },
    'pre[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em"
    },
    'code[class*="language-"]::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"]::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    ':not(pre) > code[class*="language-"]': {
      padding: "0.2em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal"
    },
    comment: {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    prolog: {
      color: "hsl(220, 10%, 40%)"
    },
    cdata: {
      color: "hsl(220, 10%, 40%)"
    },
    doctype: {
      color: "hsl(220, 14%, 71%)"
    },
    punctuation: {
      color: "hsl(220, 14%, 71%)"
    },
    entity: {
      color: "hsl(220, 14%, 71%)",
      cursor: "help"
    },
    "attr-name": {
      color: "hsl(29, 54%, 61%)"
    },
    "class-name": {
      color: "hsl(29, 54%, 61%)"
    },
    boolean: {
      color: "hsl(29, 54%, 61%)"
    },
    constant: {
      color: "hsl(29, 54%, 61%)"
    },
    number: {
      color: "hsl(29, 54%, 61%)"
    },
    atrule: {
      color: "hsl(29, 54%, 61%)"
    },
    keyword: {
      color: "hsl(286, 60%, 67%)"
    },
    property: {
      color: "hsl(355, 65%, 65%)"
    },
    tag: {
      color: "hsl(355, 65%, 65%)"
    },
    symbol: {
      color: "hsl(355, 65%, 65%)"
    },
    deleted: {
      color: "hsl(355, 65%, 65%)"
    },
    important: {
      color: "hsl(355, 65%, 65%)"
    },
    selector: {
      color: "hsl(95, 38%, 62%)"
    },
    string: {
      color: "hsl(95, 38%, 62%)"
    },
    char: {
      color: "hsl(95, 38%, 62%)"
    },
    builtin: {
      color: "hsl(95, 38%, 62%)"
    },
    inserted: {
      color: "hsl(95, 38%, 62%)"
    },
    regex: {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value": {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value > .token.punctuation": {
      color: "hsl(95, 38%, 62%)"
    },
    variable: {
      color: "hsl(207, 82%, 66%)"
    },
    operator: {
      color: "hsl(207, 82%, 66%)"
    },
    function: {
      color: "hsl(207, 82%, 66%)"
    },
    url: {
      color: "hsl(187, 47%, 55%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
      color: "hsl(220, 14%, 71%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.selector": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-css .token.property": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.string.url": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-css .token.important": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-css .token.atrule .token.rule": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.operator": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
      color: "hsl(5, 48%, 51%)"
    },
    ".language-json .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-json .token.null.keyword": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.url": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url-reference.url > .token.string": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.content": {
      color: "hsl(207, 82%, 66%)"
    },
    ".language-markdown .token.url > .token.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.url-reference.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.blockquote.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.hr.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.code-snippet": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-markdown .token.bold .token.content": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.italic .token.content": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-markdown .token.strike .token.content": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.strike .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.list.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.title.important > .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    bold: {
      fontWeight: "bold"
    },
    italic: {
      fontStyle: "italic"
    },
    namespace: {
      Opacity: "0.8"
    },
    "token.tab:not(:empty):before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.cr:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.lf:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.space:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      marginRight: "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    ".line-highlight.line-highlight": {
      background: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-highlight.line-highlight:before": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
      backgroundColor: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".command-line .command-line-prompt": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".command-line .command-line-prompt > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      color: "hsl(286, 60%, 67%)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    ".prism-previewer.prism-previewer:before": {
      borderColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
      borderColor: "hsl(224, 13%, 17%)",
      borderRadius: "0.3em"
    },
    ".prism-previewer-color.prism-previewer-color:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer.prism-previewer:after": {
      borderTopColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
      borderBottomColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-time.prism-previewer-time:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-easing.prism-previewer-easing": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-time.prism-previewer-time circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
      stroke: "hsl(220, 14%, 71%)",
      fill: "transparent"
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
      stroke: "hsl(220, 14%, 71%)"
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
      stroke: "hsl(220, 14%, 71%)"
    }
  }, lh = V.lazy(() => Ci(() => import("./syntax-highlighter-aNFqcRiR.js").then((e) => e.w), __vite__mapDeps([0,1])).then((e) => ({
    default: e.default
  })));
  function oh({ language: e, children: n }) {
    const [t, r] = V.useState(false), i = async () => {
      try {
        await navigator.clipboard.writeText(n), r(true), setTimeout(() => r(false), 2e3);
      } catch (l) {
        console.error("\u590D\u5236\u5931\u8D25:", l);
      }
    }, o = (n == null ? void 0 : n.trim()) || "";
    return k.jsxs("div", {
      className: "relative group my-3",
      children: [
        k.jsxs("div", {
          className: "flex items-center justify-between px-4 py-2 bg-slate-700 rounded-t-xl border-b border-slate-600",
          children: [
            k.jsx("span", {
              className: "text-xs text-slate-400 font-mono",
              children: e || "code"
            }),
            k.jsx("button", {
              onClick: i,
              className: "flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-600 rounded transition-colors",
              title: "\u590D\u5236\u4EE3\u7801",
              children: t ? k.jsxs(k.Fragment, {
                children: [
                  k.jsx(li, {
                    className: "w-3.5 h-3.5 text-green-400"
                  }),
                  k.jsx("span", {
                    className: "text-green-400",
                    children: "\u5DF2\u590D\u5236"
                  })
                ]
              }) : k.jsxs(k.Fragment, {
                children: [
                  k.jsx(oi, {
                    className: "w-3.5 h-3.5"
                  }),
                  k.jsx("span", {
                    children: "\u590D\u5236"
                  })
                ]
              })
            })
          ]
        }),
        k.jsx("div", {
          className: "bg-[#282c34] rounded-b-xl text-sm leading-6",
          children: k.jsx(V.Suspense, {
            fallback: k.jsx("div", {
              className: "p-4 text-slate-400 font-mono text-xs",
              children: "Loading code..."
            }),
            children: k.jsx(lh, {
              language: e || "text",
              style: ih,
              customStyle: {
                margin: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: "0.75rem",
                borderBottomRightRadius: "0.75rem",
                fontSize: "0.875rem",
                lineHeight: "1.5"
              },
              showLineNumbers: o.split(`
`).length > 3,
              wrapLines: true,
              children: o
            })
          })
        })
      ]
    });
  }
  xh = function({ onBack: e, onUpload: n }) {
    var _a2;
    const [t, r] = fi(), i = V.useMemo(() => {
      const S = Number(t.get("targetId"));
      return Number.isInteger(S) && S > 0 ? S : void 0;
    }, [
      t
    ]), [o, l] = V.useState([]), [a, s] = V.useState(/* @__PURE__ */ new Set()), [u, h] = V.useState(true), [c, p] = V.useState([]), f = V.useMemo(() => c.find((S) => S.id === i) ?? null, [
      i,
      c
    ]), [g, w] = V.useState(""), [I, b] = V.useState("time"), [A, v] = V.useState(/* @__PURE__ */ new Set([
      "\u672A\u5206\u7C7B"
    ])), [P, _] = V.useState(true), [C, R] = V.useState([]), [H, M] = V.useState(null), [y, T] = V.useState(""), [z, q] = V.useState(false), [U, D] = V.useState(null), [K, Q] = V.useState(null), [J, ee] = V.useState(""), [m, re] = V.useState(""), [ie, d] = V.useState([]), [Y, oe] = V.useState(false), G = V.useRef(null), xe = V.useRef(), [, fe] = V.useTransition();
    V.useEffect(() => {
      pe();
    }, []), V.useEffect(() => {
      di.list().then(p).catch((S) => console.error("\u52A0\u8F7D\u76EE\u6807\u5C97\u4F4D\u5931\u8D25", S));
    }, []), V.useEffect(() => {
      M(null), T(""), d([]), Ee();
    }, [
      i
    ]), V.useEffect(() => {
      g || pe();
    }, [
      I
    ]);
    const pe = async () => {
      h(true);
      try {
        const S = await pn.getAllKnowledgeBases(I, "COMPLETED");
        l(S);
      } catch (S) {
        console.error("\u52A0\u8F7D\u77E5\u8BC6\u5E93\u5217\u8868\u5931\u8D25", S);
      } finally {
        h(false);
      }
    }, ke = async () => {
      if (!g.trim()) {
        pe();
        return;
      }
      h(true);
      try {
        const S = await pn.search(g.trim());
        l(S);
      } catch (S) {
        console.error("\u641C\u7D22\u77E5\u8BC6\u5E93\u5931\u8D25", S);
      } finally {
        h(false);
      }
    }, ze = V.useMemo(() => {
      const S = /* @__PURE__ */ new Map();
      o.forEach((N) => {
        const j = N.category || "\u672A\u5206\u7C7B";
        S.has(j) || S.set(j, []), S.get(j).push(N);
      });
      const x = [];
      return Array.from(S.keys()).sort((N, j) => N === "\u672A\u5206\u7C7B" ? 1 : j === "\u672A\u5206\u7C7B" ? -1 : N.localeCompare(j)).forEach((N) => {
        x.push({
          name: N,
          items: S.get(N),
          isExpanded: A.has(N)
        });
      }), x;
    }, [
      o,
      A
    ]), gt = (S) => {
      v((x) => {
        const E = new Set(x);
        return E.has(S) ? E.delete(S) : E.add(S), E;
      });
    }, Ee = async () => {
      q(true);
      try {
        const S = await Ae.listSessions(i);
        R(S);
      } catch (S) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5217\u8868\u5931\u8D25", S);
      } finally {
        q(false);
      }
    }, Ke = (S) => {
      s((x) => {
        const E = new Set(x);
        return E.has(S) ? E.delete(S) : E.add(S), E.size !== x.size && H && (M(null), T(""), d([])), E;
      });
    }, Le = () => {
      M(null), T(""), d([]);
    }, Ge = async (S) => {
      try {
        const x = await Ae.getSessionDetail(S);
        M(x.id), T(x.title), s(new Set(x.knowledgeBases.map((E) => E.id))), d(x.messages.map((E) => ({
          id: E.id,
          type: E.type,
          content: E.content,
          timestamp: new Date(E.createdAt)
        })));
      } catch (x) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25", x);
      }
    }, Ye = async () => {
      if (U) try {
        await Ae.deleteSession(U.id), await Ee(), H === U.id && Le(), D(null);
      } catch (S) {
        console.error("\u5220\u9664\u4F1A\u8BDD\u5931\u8D25", S);
      }
    }, xt = (S, x) => {
      Q({
        id: S,
        title: x
      }), ee(x);
    }, Re = async () => {
      if (!(!K || !J.trim())) try {
        await Ae.updateSessionTitle(K.id, J.trim()), await Ee(), H === K.id && T(J.trim()), Q(null), ee("");
      } catch (S) {
        console.error("\u66F4\u65B0\u4F1A\u8BDD\u6807\u9898\u5931\u8D25", S);
      }
    }, Je = async (S, x) => {
      x.stopPropagation();
      try {
        await Ae.togglePin(S), await Ee();
      } catch (E) {
        console.error("\u5207\u6362\u7F6E\u9876\u72B6\u6001\u5931\u8D25", E);
      }
    }, kt = (S) => S ? S.replace(/\\n/g, `
`).replace(/^(#{1,6})([^\s#\n])/gm, "$1 $2").replace(/^(\s*)(\d+)\.([^\s\n])/gm, "$1$2. $3").replace(/^(\s*[-*])([^\s\n-])/gm, "$1 $2").replace(/\n{3,}/g, `

`) : "", Xe = async () => {
      if (!m.trim() || a.size === 0 || Y) return;
      const S = m.trim();
      re(""), oe(true);
      let x = H;
      if (!x) try {
        const B = await Ae.createSession(Array.from(a), void 0, i);
        x = B.id, M(x), T(B.title);
      } catch (B) {
        console.error("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25", B), oe(false);
        return;
      }
      const E = {
        type: "user",
        content: S,
        timestamp: /* @__PURE__ */ new Date()
      };
      d((B) => [
        ...B,
        E
      ]);
      const N = {
        type: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date()
      };
      d((B) => [
        ...B,
        N
      ]);
      let j = "";
      const O = (B) => {
        d((be) => {
          const te = [
            ...be
          ], me = te.length - 1;
          return me >= 0 && te[me].type === "assistant" && (te[me] = {
            ...te[me],
            content: B
          }), te;
        });
      };
      try {
        await Ae.sendMessageStream(x, S, (B) => {
          j += B, xe.current && cancelAnimationFrame(xe.current), xe.current = requestAnimationFrame(() => {
            fe(() => {
              O(j);
            });
          });
        }, () => {
          oe(false), Ee();
        }, (B) => {
          console.error("\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", B), O(j || B.message || "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), oe(false);
        });
      } catch (B) {
        console.error("\u53D1\u8D77\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", B), O(B instanceof Error ? B.message : "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), oe(false);
      }
    }, bt = (S) => S < 1024 ? S + " B" : S < 1024 * 1024 ? (S / 1024).toFixed(1) + " KB" : (S / (1024 * 1024)).toFixed(1) + " MB", yt = (S) => {
      const x = new Date(S), N = (/* @__PURE__ */ new Date()).getTime() - x.getTime(), j = Math.floor(N / 6e4), O = Math.floor(N / 36e5), B = Math.floor(N / 864e5);
      return j < 1 ? "\u521A\u521A" : j < 60 ? `${j} \u5206\u949F\u524D` : O < 24 ? `${O} \u5C0F\u65F6\u524D` : B < 7 ? `${B} \u5929\u524D` : gi(S);
    };
    return k.jsxs("div", {
      className: "max-w-7xl mx-auto pt-8 pb-10 px-4",
      children: [
        k.jsxs("div", {
          className: "flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between",
          children: [
            k.jsxs("div", {
              children: [
                k.jsx("h1", {
                  className: "text-2xl font-bold text-slate-900 dark:text-white mb-1",
                  children: "\u95EE\u7B54\u52A9\u624B"
                }),
                k.jsx("p", {
                  className: "text-slate-500 dark:text-slate-400 text-sm",
                  children: f ? `\u56F4\u7ED5 ${f.title} \u7EC4\u7EC7\u77E5\u8BC6\u548C\u8BAD\u7EC3` : "\u9009\u62E9\u77E5\u8BC6\u5E93\uFF0C\u5411 AI \u63D0\u95EE"
                })
              ]
            }),
            k.jsxs("div", {
              className: "flex flex-wrap items-center gap-3",
              children: [
                k.jsxs("label", {
                  className: "flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800",
                  children: [
                    k.jsx(cn, {
                      className: "h-4 w-4 text-primary-500"
                    }),
                    k.jsx("span", {
                      className: "text-slate-500 dark:text-slate-400",
                      children: "\u51C6\u5907\u5C97\u4F4D"
                    }),
                    k.jsxs("select", {
                      value: i ?? "",
                      onChange: (S) => {
                        const x = S.target.value;
                        r(x ? {
                          targetId: x
                        } : {});
                      },
                      className: "max-w-[180px] bg-transparent font-medium text-slate-800 outline-none dark:text-white",
                      children: [
                        k.jsx("option", {
                          value: "",
                          children: "\u901A\u7528\u77E5\u8BC6\u95EE\u7B54"
                        }),
                        c.map((S) => k.jsx("option", {
                          value: S.id,
                          children: S.title
                        }, S.id))
                      ]
                    })
                  ]
                }),
                k.jsx(ce.button, {
                  onClick: n,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u4E0A\u4F20\u77E5\u8BC6\u5E93"
                }),
                k.jsx(ce.button, {
                  onClick: e,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u8FD4\u56DE"
                })
              ]
            })
          ]
        }),
        f && k.jsxs("div", {
          className: "mb-6 flex flex-col gap-3 rounded-2xl border border-primary-100 bg-primary-50/70 px-4 py-3 dark:border-primary-900/50 dark:bg-primary-950/20 sm:flex-row sm:items-center sm:justify-between",
          children: [
            k.jsxs("div", {
              className: "flex min-w-0 items-start gap-3",
              children: [
                k.jsx("div", {
                  className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary-500 shadow-sm dark:bg-slate-800",
                  children: k.jsx(cn, {
                    className: "h-4 w-4"
                  })
                }),
                k.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    k.jsxs("p", {
                      className: "text-sm font-semibold text-slate-800 dark:text-white",
                      children: [
                        "\u5C97\u4F4D\u77E5\u8BC6\u5305\uFF1A",
                        f.title
                      ]
                    }),
                    k.jsx("p", {
                      className: "mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400",
                      children: "AI \u4F1A\u7ED3\u5408\u8FD9\u4EFD JD\u3001\u5DF2\u7ED1\u5B9A\u7B80\u5386\u548C\u4F60\u9009\u62E9\u7684\u77E5\u8BC6\u5E93\u56DE\u7B54\u95EE\u9898\uFF0C\u5E76\u628A\u4F1A\u8BDD\u6309\u5C97\u4F4D\u4FDD\u5B58\u3002"
                    })
                  ]
                })
              ]
            }),
            k.jsxs("div", {
              className: "flex shrink-0 items-center gap-2 text-xs font-medium text-primary-600 dark:text-primary-300",
              children: [
                k.jsxs("span", {
                  children: [
                    f.gaps.length,
                    " \u9879\u5F85\u8865\u5F3A"
                  ]
                }),
                k.jsx("span", {
                  className: "text-primary-300 dark:text-primary-700",
                  children: "\xB7"
                }),
                k.jsx("span", {
                  children: f.readinessScore == null ? "\u5F85\u5206\u6790" : `\u51C6\u5907\u5EA6 ${f.readinessScore}`
                })
              ]
            })
          ]
        }),
        k.jsxs("div", {
          className: "flex gap-4 h-[calc(100vh-10rem)]",
          children: [
            k.jsx("div", {
              className: "w-64 flex-shrink-0",
              children: k.jsxs("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col border border-slate-100 dark:border-slate-700",
                children: [
                  k.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      k.jsx("h2", {
                        className: "text-base font-semibold text-slate-800 dark:text-white",
                        children: "\u5BF9\u8BDD\u5386\u53F2"
                      }),
                      k.jsx(ce.button, {
                        onClick: Le,
                        disabled: a.size === 0,
                        className: "p-1.5 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        whileHover: {
                          scale: 1.05
                        },
                        whileTap: {
                          scale: 0.95
                        },
                        title: "\u65B0\u5EFA\u5BF9\u8BDD",
                        children: k.jsx(ai, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  }),
                  k.jsx("div", {
                    className: "flex-1 overflow-y-auto",
                    children: z ? k.jsx("div", {
                      className: "text-center py-6",
                      children: k.jsx(ce.div, {
                        className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                        animate: {
                          rotate: 360
                        },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "linear"
                        }
                      })
                    }) : C.length === 0 ? k.jsx("div", {
                      className: "text-center py-6 text-slate-400 dark:text-slate-500 text-sm",
                      children: "\u6682\u65E0\u5BF9\u8BDD\u5386\u53F2"
                    }) : k.jsx("div", {
                      className: "space-y-2",
                      children: C.map((S) => k.jsx("div", {
                        onClick: () => Ge(S.id),
                        className: `p-3 rounded-lg cursor-pointer transition-all group ${H === S.id ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-transparent"} ${S.isPinned ? "border-l-4 border-l-primary-500" : ""}`,
                        children: k.jsxs("div", {
                          className: "flex items-start justify-between gap-2",
                          children: [
                            k.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                k.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    S.isPinned && k.jsx(hn, {
                                      className: "w-3.5 h-3.5 text-primary-500 fill-primary-500 flex-shrink-0"
                                    }),
                                    k.jsx("p", {
                                      className: "font-medium text-slate-800 dark:text-white text-sm truncate",
                                      children: S.title
                                    })
                                  ]
                                }),
                                k.jsxs("p", {
                                  className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                  children: [
                                    S.messageCount,
                                    " \u6761\u6D88\u606F \xB7 ",
                                    yt(S.updatedAt)
                                  ]
                                })
                              ]
                            }),
                            k.jsxs("div", {
                              className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all",
                              children: [
                                k.jsx("button", {
                                  onClick: (x) => Je(S.id, x),
                                  className: `p-1 rounded transition-colors ${S.isPinned ? "text-primary-500 hover:text-primary-600" : "text-slate-400 hover:text-primary-500"}`,
                                  title: S.isPinned ? "\u53D6\u6D88\u7F6E\u9876" : "\u7F6E\u9876",
                                  children: k.jsx(hn, {
                                    className: `w-4 h-4 ${S.isPinned ? "fill-primary-500" : ""}`
                                  })
                                }),
                                k.jsx("button", {
                                  onClick: (x) => {
                                    x.stopPropagation(), xt(S.id, S.title);
                                  },
                                  className: "p-1 text-slate-400 hover:text-primary-500 rounded transition-colors",
                                  title: "\u7F16\u8F91\u6807\u9898",
                                  children: k.jsx(si, {
                                    className: "w-4 h-4"
                                  })
                                }),
                                k.jsx("button", {
                                  onClick: (x) => {
                                    x.stopPropagation(), D({
                                      id: S.id,
                                      title: S.title
                                    });
                                  },
                                  className: "p-1 text-slate-400 hover:text-red-500 rounded transition-colors",
                                  title: "\u5220\u9664",
                                  children: k.jsx(ui, {
                                    className: "w-4 h-4"
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      }, S.id))
                    })
                  })
                ]
              })
            }),
            k.jsx("div", {
              className: "flex-1 min-w-0",
              children: k.jsx("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex flex-col h-full border border-slate-100 dark:border-slate-700",
                children: a.size > 0 ? k.jsxs(k.Fragment, {
                  children: [
                    k.jsxs("div", {
                      className: "p-4 border-b border-slate-200 dark:border-slate-600",
                      children: [
                        k.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: y || (a.size === 1 ? ((_a2 = o.find((S) => S.id === Array.from(a)[0])) == null ? void 0 : _a2.name) || "\u65B0\u5BF9\u8BDD" : `${a.size} \u4E2A\u77E5\u8BC6\u5E93 - \u65B0\u5BF9\u8BDD`)
                        }),
                        k.jsx("div", {
                          className: "flex flex-wrap gap-1.5 mt-2",
                          children: Array.from(a).map((S) => {
                            const x = o.find((E) => E.id === S);
                            return x ? k.jsx("span", {
                              className: "px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full",
                              children: x.name
                            }, S) : null;
                          })
                        })
                      ]
                    }),
                    k.jsx("div", {
                      className: "flex-1 min-h-0 relative dark:bg-slate-800",
                      children: ie.length === 0 ? k.jsxs("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500",
                        children: [
                          k.jsx(ci, {
                            className: "w-12 h-12 mx-auto mb-3 opacity-50"
                          }),
                          k.jsx("p", {
                            className: "text-sm",
                            children: "\u5F00\u59CB\u63D0\u95EE\u5427\uFF01"
                          })
                        ]
                      }) : k.jsx(pi, {
                        ref: G,
                        data: ie,
                        initialTopMostItemIndex: ie.length - 1,
                        followOutput: "smooth",
                        className: "h-full w-full",
                        itemContent: (S, x) => k.jsx("div", {
                          className: "pb-4 px-4 first:pt-4 dark:bg-slate-800",
                          children: k.jsx(ce.div, {
                            initial: {
                              opacity: 0,
                              y: 10
                            },
                            animate: {
                              opacity: 1,
                              y: 0
                            },
                            className: `flex ${x.type === "user" ? "justify-end" : "justify-start"}`,
                            children: k.jsx("div", {
                              className: `max-w-[85%] rounded-2xl p-4 shadow-sm ${x.type === "user" ? "bg-primary-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-600 text-slate-800 dark:text-slate-100"}`,
                              children: x.type === "user" ? k.jsx("p", {
                                className: "whitespace-pre-wrap leading-relaxed text-sm",
                                children: x.content
                              }) : k.jsxs("div", {
                                className: "prose prose-slate dark:prose-invert prose-sm max-w-none",
                                children: [
                                  k.jsx(qs, {
                                    remarkPlugins: [
                                      rh
                                    ],
                                    components: {
                                      code: ({ className: E, children: N }) => {
                                        const j = /language-(\w+)/.exec(E || "");
                                        return j ? k.jsx(oh, {
                                          language: j[1],
                                          children: String(N).replace(/\n$/, "")
                                        }) : k.jsx("code", {
                                          className: "bg-slate-100 dark:bg-slate-600 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded-md text-sm font-normal",
                                          children: N
                                        });
                                      },
                                      pre: ({ children: E }) => k.jsx(k.Fragment, {
                                        children: E
                                      })
                                    },
                                    children: kt(x.content)
                                  }),
                                  Y && S === ie.length - 1 && k.jsx("span", {
                                    className: "inline-block w-0.5 h-5 bg-primary-500 ml-1 animate-pulse"
                                  })
                                ]
                              })
                            })
                          })
                        })
                      })
                    }),
                    k.jsx("div", {
                      className: "p-4 border-t border-slate-200 dark:border-slate-600",
                      children: k.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          k.jsx("input", {
                            type: "text",
                            value: m,
                            onChange: (S) => re(S.target.value),
                            onKeyPress: (S) => S.key === "Enter" && !S.shiftKey && Xe(),
                            placeholder: "\u8F93\u5165\u60A8\u7684\u95EE\u9898...",
                            className: "flex-1 px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                            disabled: Y
                          }),
                          k.jsx(ce.button, {
                            onClick: Xe,
                            disabled: !m.trim() || a.size === 0 || Y,
                            className: "px-5 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                            whileHover: {
                              scale: Y ? 1 : 1.02
                            },
                            whileTap: {
                              scale: Y ? 1 : 0.98
                            },
                            children: "\u53D1\u9001"
                          })
                        ]
                      })
                    })
                  ]
                }) : k.jsx("div", {
                  className: "flex-1 flex items-center justify-center text-slate-400 dark:text-slate-500",
                  children: k.jsxs("div", {
                    className: "text-center",
                    children: [
                      k.jsx("svg", {
                        className: "w-12 h-12 mx-auto mb-3 opacity-50",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: k.jsx("path", {
                          d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      }),
                      k.jsx("p", {
                        className: "text-sm",
                        children: "\u8BF7\u5148\u5728\u53F3\u4FA7\u9009\u62E9\u77E5\u8BC6\u5E93"
                      })
                    ]
                  })
                })
              })
            }),
            k.jsx(wt, {
              children: P && k.jsx(ce.div, {
                initial: {
                  width: 0,
                  opacity: 0
                },
                animate: {
                  width: 280,
                  opacity: 1
                },
                exit: {
                  width: 0,
                  opacity: 0
                },
                transition: {
                  duration: 0.2
                },
                className: "flex-shrink-0 overflow-hidden",
                children: k.jsxs("div", {
                  className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col w-[280px] border border-slate-100 dark:border-slate-700",
                  children: [
                    k.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        k.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: "\u9009\u62E9\u77E5\u8BC6\u5E93"
                        }),
                        k.jsx("button", {
                          onClick: () => _(false),
                          className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded",
                          children: k.jsx(hi, {
                            className: "w-5 h-5"
                          })
                        })
                      ]
                    }),
                    k.jsxs("div", {
                      className: "flex gap-2 mb-3",
                      children: [
                        k.jsx("input", {
                          type: "text",
                          value: g,
                          onChange: (S) => w(S.target.value),
                          onKeyPress: (S) => S.key === "Enter" && ke(),
                          placeholder: "\u641C\u7D22...",
                          className: "flex-1 px-3 py-1.5 text-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400"
                        }),
                        k.jsx("button", {
                          onClick: ke,
                          className: "px-3 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600",
                          children: "\u641C\u7D22"
                        })
                      ]
                    }),
                    k.jsx("div", {
                      className: "mb-3",
                      children: k.jsxs("select", {
                        value: I,
                        onChange: (S) => {
                          b(S.target.value), w("");
                        },
                        className: "w-full px-2 py-1 text-xs border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300",
                        children: [
                          k.jsx("option", {
                            value: "time",
                            children: "\u65F6\u95F4\u6392\u5E8F"
                          }),
                          k.jsx("option", {
                            value: "size",
                            children: "\u5927\u5C0F\u6392\u5E8F"
                          }),
                          k.jsx("option", {
                            value: "access",
                            children: "\u8BBF\u95EE\u6392\u5E8F"
                          }),
                          k.jsx("option", {
                            value: "question",
                            children: "\u63D0\u95EE\u6392\u5E8F"
                          })
                        ]
                      })
                    }),
                    k.jsx("div", {
                      className: "flex-1 overflow-y-auto",
                      children: u ? k.jsx("div", {
                        className: "text-center py-6",
                        children: k.jsx(ce.div, {
                          className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                          animate: {
                            rotate: 360
                          },
                          transition: {
                            duration: 1,
                            repeat: 1 / 0,
                            ease: "linear"
                          }
                        })
                      }) : o.length === 0 ? k.jsxs("div", {
                        className: "text-center py-6 text-slate-500 dark:text-slate-400",
                        children: [
                          k.jsx("p", {
                            className: "mb-2 text-sm",
                            children: g ? "\u672A\u627E\u5230" : "\u6682\u65E0\u77E5\u8BC6\u5E93"
                          }),
                          !g && k.jsx("button", {
                            onClick: n,
                            className: "text-primary-500 hover:text-primary-600 font-medium text-sm",
                            children: "\u7ACB\u5373\u4E0A\u4F20"
                          })
                        ]
                      }) : k.jsx("div", {
                        className: "space-y-2",
                        children: ze.map((S) => k.jsxs("div", {
                          className: "border border-slate-100 dark:border-slate-700 rounded-lg overflow-hidden",
                          children: [
                            k.jsxs("button", {
                              onClick: () => gt(S.name),
                              className: "w-full flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
                              children: [
                                k.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    k.jsx(fn, {
                                      className: `w-3.5 h-3.5 text-slate-400 transition-transform ${S.isExpanded ? "rotate-90" : ""}`
                                    }),
                                    k.jsx("span", {
                                      className: "font-medium text-slate-700 dark:text-slate-300 text-sm",
                                      children: S.name
                                    })
                                  ]
                                }),
                                k.jsx("span", {
                                  className: "text-xs text-slate-400",
                                  children: S.items.length
                                })
                              ]
                            }),
                            k.jsx(wt, {
                              children: S.isExpanded && k.jsx(ce.div, {
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
                                transition: {
                                  duration: 0.2
                                },
                                className: "overflow-hidden",
                                children: k.jsx("div", {
                                  className: "p-2 space-y-1",
                                  children: S.items.map((x) => k.jsxs("div", {
                                    onClick: () => Ke(x.id),
                                    className: `p-2 rounded-lg cursor-pointer transition-all ${a.has(x.id) ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent"}`,
                                    children: [
                                      k.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          k.jsx("input", {
                                            type: "checkbox",
                                            checked: a.has(x.id),
                                            onChange: () => Ke(x.id),
                                            onClick: (E) => E.stopPropagation(),
                                            className: "w-3.5 h-3.5 text-primary-500 rounded focus:ring-primary-500"
                                          }),
                                          k.jsx("span", {
                                            className: "font-medium text-slate-800 dark:text-white text-xs truncate flex-1",
                                            children: x.name
                                          })
                                        ]
                                      }),
                                      k.jsx("p", {
                                        className: "text-xs text-slate-400 dark:text-slate-500 mt-0.5 ml-5",
                                        children: bt(x.fileSize)
                                      })
                                    ]
                                  }, x.id))
                                })
                              })
                            })
                          ]
                        }, S.name))
                      })
                    })
                  ]
                })
              })
            }),
            !P && k.jsx("button", {
              onClick: () => _(true),
              className: "flex-shrink-0 w-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
              title: "\u5C55\u5F00\u77E5\u8BC6\u5E93\u9762\u677F",
              children: k.jsx(fn, {
                className: "w-5 h-5 text-slate-400"
              })
            })
          ]
        }),
        k.jsx(xi, {
          open: !!U,
          item: U ? {
            id: 0,
            title: U.title
          } : null,
          itemType: "\u5BF9\u8BDD",
          onConfirm: Ye,
          onCancel: () => D(null)
        }),
        k.jsx(wt, {
          children: K && k.jsxs(k.Fragment, {
            children: [
              k.jsx(ce.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                onClick: () => {
                  Q(null), ee("");
                },
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              }),
              k.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: k.jsxs(ce.div, {
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
                  onClick: (S) => S.stopPropagation(),
                  className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-100 dark:border-slate-700",
                  children: [
                    k.jsx("h3", {
                      className: "text-xl font-bold text-slate-900 dark:text-white mb-4",
                      children: "\u7F16\u8F91\u6807\u9898"
                    }),
                    k.jsx("input", {
                      type: "text",
                      value: J,
                      onChange: (S) => ee(S.target.value),
                      onKeyPress: (S) => S.key === "Enter" && Re(),
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u6807\u9898",
                      className: "w-full px-4 py-3 text-sm border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                      autoFocus: true
                    }),
                    k.jsxs("div", {
                      className: "flex justify-end gap-3",
                      children: [
                        k.jsx("button", {
                          onClick: () => {
                            Q(null), ee("");
                          },
                          className: "px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                          children: "\u53D6\u6D88"
                        }),
                        k.jsx("button", {
                          onClick: Re,
                          disabled: !J.trim(),
                          className: "px-4 py-2 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50",
                          children: "\u4FDD\u5B58"
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    });
  };
});
export {
  __tla,
  xh as default
};
