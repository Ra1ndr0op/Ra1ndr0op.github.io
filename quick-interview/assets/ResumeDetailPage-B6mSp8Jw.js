import { j as i, m as k, L as Ct, q as Ve, n as Tt, o as Ne, T as Ge, r as be, s as Lt, t as $t, M as Ue, u as _t, v as He, w as Mt, k as Bt, x as Kt, y as Ft, A as zt } from "./ui-vendor-Icq6OStM.js";
import { r as l, g as Ze, u as Wt } from "./react-vendor-C54eoJNz.js";
import { h as B } from "./index-BZ3exKah.js";
import { n as Ae, c as Vt, a as Gt } from "./score-3bjDqiWg.js";
import { c as F, s as te, r as Ut, a as j, b as z, p as W, d as Ht, e as he, f as Zt, g as q, h as qt, i as Xt, j as Yt, k as qe, l as Jt, m as Qt, n as er, o as tr, q as rr, t as ar, u as nr, v as ir, w as sr, x as lr, y as oe, z as or, A as Xe, B as cr, C as Ye, D as ye, E as dr, F as ur, G as mr, H as xr, I as fr, J as I, K as Je, Z as me, L as xe, M as C, N as T, O as Qe, P as et, Q as se, R as je, S as pr, T as gr, U as vr, V as K, W as br, X as hr, Y as tt, _ as rt, $ as at, a0 as nt, a1 as yr, a2 as jr, a3 as kr, a4 as it, a5 as wr, a6 as ce, a7 as Pr, a8 as Se, a9 as Or, aa as Nr, ab as Ar, ac as st, ad as Sr, ae as Er, af as Dr, ag as Ee, ah as Rr, ai as Ir, aj as Cr, ak as Tr, al as le, am as Lr, an as $r, ao as _r, ap as Mr, aq as Br, ar as Kr, as as Fr, at as zr, au as lt, av as ot, aw as Wr, ax as Vr, ay as Gr, az as Ur, aA as Hr } from "./LineChart-U85PVO6f.js";
import { a as Zr, f as de } from "./date-DBJmXC5z.js";
import { C as qr } from "./ConfirmDialog-CZ5WuzmS.js";
import Xr from "./InterviewDetailPanel-CKCDvXL0.js";
import "./syntax-highlighter-aNFqcRiR.js";
var Yr = ["points", "className", "baseLinePoints", "connectNulls"], De;
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Z.apply(null, arguments);
}
function Jr(e, t) {
  if (e == null) return {};
  var r, a, n = Qr(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Qr(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
function ea(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Re = (e) => e && e.x === +e.x && e.y === +e.y, ta = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach((a) => {
    Re(a) ? r[r.length - 1].push(a) : r[r.length - 1].length > 0 && r.push([]);
  }), Re(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, re = (e, t) => {
  var r = ta(e);
  t && (r = [r.reduce((n, s) => [...n, ...s], [])]);
  var a = r.map((n) => n.reduce((s, o, c) => Ut(De || (De = ea(["", "", "", ",", ""])), s, c === 0 ? "M" : "L", o.x, o.y), "")).join("");
  return r.length === 1 ? "".concat(a, "Z") : a;
}, ra = (e, t, r) => {
  var a = re(e, r);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(re(Array.from(t).reverse(), r).slice(1));
}, ct = (e) => {
  var { points: t, className: r, baseLinePoints: a, connectNulls: n } = e, s = Jr(e, Yr);
  if (!t || !t.length) return null;
  var o = F("recharts-polygon", r);
  if (a && a.length) {
    var c = s.stroke && s.stroke !== "none", d = ra(t, a, n);
    return l.createElement("g", { className: o }, l.createElement("path", Z({}, te(s), { fill: d.slice(-1) === "Z" ? s.fill : "none", stroke: "none", d })), c ? l.createElement("path", Z({}, te(s), { fill: "none", d: re(t, n) })) : null, c ? l.createElement("path", Z({}, te(s), { fill: "none", d: re(a, n) })) : null);
  }
  var u = re(t, n);
  return l.createElement("path", Z({}, te(s), { fill: u.slice(-1) === "Z" ? s.fill : "none", className: o, d: u }));
}, dt = (e) => e.graphicalItems.polarItems, aa = j([W, sr], lr), fe = j([dt, z, aa], rr), na = j([fe], ar), pe = j([na, qe], Jt), ut = j([pe, z, fe], Yt);
j([pe, z, fe], (e, t, r) => r.length > 0 ? e.flatMap((a) => r.flatMap((n) => {
  var s, o = oe(a, (s = t.dataKey) !== null && s !== void 0 ? s : n.dataKey);
  return { value: o, errorDomain: [] };
})).filter(Boolean) : (t == null ? void 0 : t.dataKey) != null ? e.map((a) => ({ value: oe(a, t.dataKey), errorDomain: [] })) : e.map((a) => ({ value: a, errorDomain: [] })));
var Ie = () => {
}, ia = j([pe, z, fe, nr, W], ir), sa = j([z, Qt, er, Ie, ia, Ie, q, W], tr), mt = j([z, q, pe, ut, qt, W, sa], Xt), xt = j([mt, z, he], Zt), la = j([z, mt, xt, W], Ht), ke = (e, t, r) => {
  switch (t) {
    case "angleAxis":
      return ye(e, r);
    case "radiusAxis":
      return Ye(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, we = (e, t, r) => {
  switch (t) {
    case "angleAxis":
      return ur(e, r);
    case "radiusAxis":
      return dr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, X = j([ke, he, la, we], or), ft = j([q, ut, mr, W], xr), Y = j([q, ke, he, X, xt, we, Xe, ft, W], cr), oa = j([Y], (e) => {
  if (e) {
    var t = /* @__PURE__ */ new Map();
    return e.forEach((r) => {
      var a = (r.coordinate + 360) % 360;
      t.has(a) || t.set(a, r);
    }), Array.from(t.values());
  }
});
j([q, ke, X, we, Xe, ft, W], fr);
var ca = (e, t) => Y(e, "angleAxis", t, false), da = j([ca], (e) => {
  if (e) return e.map((t) => t.coordinate);
}), ua = (e, t) => Y(e, "radiusAxis", t, false), ma = j([ua], (e) => {
  if (e) return e.map((t) => t.coordinate);
}), xa = ["gridType", "radialLines", "angleAxisId", "radiusAxisId", "cx", "cy", "innerRadius", "outerRadius", "polarAngles", "polarRadius"];
function fa(e, t) {
  if (e == null) return {};
  var r, a, n = pa(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pa(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, R.apply(null, arguments);
}
function Ce(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ce(Object(r), true).forEach(function(a) {
      ga(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ga(e, t, r) {
  return (t = va(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function va(e) {
  var t = ba(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ba(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ha = (e, t, r, a) => {
  var n = "";
  return a.forEach((s, o) => {
    var c = T(t, r, e, s);
    o ? n += "L ".concat(c.x, ",").concat(c.y) : n += "M ".concat(c.x, ",").concat(c.y);
  }), n += "Z", n;
}, ya = (e) => {
  var { cx: t, cy: r, innerRadius: a, outerRadius: n, polarAngles: s, radialLines: o } = e;
  if (!s || !s.length || !o) return null;
  var c = ae({ stroke: "#ccc" }, C(e));
  return l.createElement("g", { className: "recharts-polar-grid-angle" }, s.map((d) => {
    var u = T(t, r, a, d), x = T(t, r, n, d);
    return l.createElement("line", R({ key: "line-".concat(d) }, c, { x1: u.x, y1: u.y, x2: x.x, y2: x.y }));
  }));
}, Te = (e) => {
  var { cx: t, cy: r, radius: a } = e, n = ae({ stroke: "#ccc", fill: "none" }, C(e));
  return l.createElement("circle", R({}, n, { className: F("recharts-polar-grid-concentric-circle", e.className), cx: t, cy: r, r: a }));
}, Le = (e) => {
  var { radius: t } = e, r = ae({ stroke: "#ccc", fill: "none" }, C(e));
  return l.createElement("path", R({}, r, { className: F("recharts-polar-grid-concentric-polygon", e.className), d: ha(t, e.cx, e.cy, e.polarAngles) }));
}, ja = (e) => {
  var { polarRadius: t, gridType: r } = e;
  if (!t || !t.length) return null;
  var a = Math.max(...t), n = e.fill && e.fill !== "none";
  return l.createElement("g", { className: "recharts-polar-grid-concentric" }, n && r === "circle" && l.createElement(Te, R({}, e, { radius: a })), n && r !== "circle" && l.createElement(Le, R({}, e, { radius: a })), t.map((s, o) => {
    var c = o;
    return r === "circle" ? l.createElement(Te, R({ key: c }, e, { fill: "none", radius: s })) : l.createElement(Le, R({ key: c }, e, { fill: "none", radius: s }));
  }));
}, pt = (e) => {
  var t, r, a, n, s, o, c, d, u, { gridType: x = "polygon", radialLines: m = true, angleAxisId: v = 0, radiusAxisId: p = 0, cx: g, cy: b, innerRadius: P, outerRadius: w, polarAngles: O, polarRadius: M } = e, h = fa(e, xa), y = I(xe), S = I((H) => da(H, v)), L = I((H) => ma(H, p)), E = Array.isArray(O) ? O : S, V = Array.isArray(M) ? M : L;
  if (E == null || V == null) return null;
  var G = ae(ae({ cx: (t = (r = y == null ? void 0 : y.cx) !== null && r !== void 0 ? r : g) !== null && t !== void 0 ? t : 0, cy: (a = (n = y == null ? void 0 : y.cy) !== null && n !== void 0 ? n : b) !== null && a !== void 0 ? a : 0, innerRadius: (s = (o = y == null ? void 0 : y.innerRadius) !== null && o !== void 0 ? o : P) !== null && s !== void 0 ? s : 0, outerRadius: (c = (d = y == null ? void 0 : y.outerRadius) !== null && d !== void 0 ? d : w) !== null && c !== void 0 ? c : 0, polarAngles: E, polarRadius: V }, h), {}, { zIndex: (u = h.zIndex) !== null && u !== void 0 ? u : Je.grid }), { outerRadius: J } = G;
  return J <= 0 ? null : l.createElement(me, { zIndex: G.zIndex }, l.createElement("g", { className: "recharts-polar-grid" }, l.createElement(ja, R({ gridType: x, radialLines: m }, G, { polarAngles: E, polarRadius: V })), l.createElement(ya, R({ gridType: x, radialLines: m }, G, { polarAngles: E, polarRadius: V }))));
};
pt.displayName = "PolarGrid";
var gt = {}, vt = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, a) {
    if (r.length === 0) return;
    let n = r[0], s = a(n);
    for (let o = 1; o < r.length; o++) {
      const c = r[o], d = a(c);
      d > s && (s = d, n = c);
    }
    return n;
  }
  e.maxBy = t;
})(vt);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = vt, r = et, a = Qe;
  function n(s, o) {
    if (s != null) return t.maxBy(Array.from(s), a.iteratee(o ?? r.identity));
  }
  e.maxBy = n;
})(gt);
var ka = gt.maxBy;
const wa = Ze(ka);
var bt = {}, ht = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, a) {
    if (r.length === 0) return;
    let n = r[0], s = a(n);
    for (let o = 1; o < r.length; o++) {
      const c = r[o], d = a(c);
      d < s && (s = d, n = c);
    }
    return n;
  }
  e.minBy = t;
})(ht);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = ht, r = et, a = Qe;
  function n(s, o) {
    if (s != null) return t.minBy(Array.from(s), a.iteratee(o ?? r.identity));
  }
  e.minBy = n;
})(bt);
var Pa = bt.minBy;
const Oa = Ze(Pa);
var Na = ["cx", "cy", "angle", "axisLine"], Aa = ["angle", "tickFormatter", "stroke", "tick"];
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ne.apply(null, arguments);
}
function $e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $e(Object(r), true).forEach(function(a) {
      Sa(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Sa(e, t, r) {
  return (t = Ea(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function Ea(e) {
  var t = Da(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Da(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yt(e, t) {
  if (e == null) return {};
  var r, a, n = Ra(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ra(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
var Ia = "radiusAxis";
function Ca(e) {
  var t = je();
  return l.useEffect(() => (t(pr(e)), () => {
    t(gr(e));
  })), null;
}
var Ta = (e, t, r, a) => {
  var { coordinate: n } = e;
  return T(r, a, n, t);
}, La = (e) => {
  var t;
  switch (e) {
    case "left":
      t = "end";
      break;
    case "right":
      t = "start";
      break;
    default:
      t = "middle";
      break;
  }
  return t;
}, $a = (e, t, r, a) => {
  var n = wa(a, (o) => o.coordinate || 0), s = Oa(a, (o) => o.coordinate || 0);
  return { cx: t, cy: r, startAngle: e, endAngle: e, innerRadius: (s == null ? void 0 : s.coordinate) || 0, outerRadius: (n == null ? void 0 : n.coordinate) || 0, clockWise: false };
}, _a = (e, t) => {
  var { cx: r, cy: a, angle: n, axisLine: s } = e, o = yt(e, Na), c = t.reduce((m, v) => [Math.min(m[0], v.coordinate), Math.max(m[1], v.coordinate)], [1 / 0, -1 / 0]), d = T(r, a, c[0], n), u = T(r, a, c[1], n), x = _(_(_({}, C(o)), {}, { fill: "none" }, C(s)), {}, { x1: d.x, y1: d.y, x2: u.x, y2: u.y });
  return l.createElement("line", ne({ className: "recharts-polar-radius-axis-line" }, x));
}, Ma = (e, t, r) => {
  var a;
  return l.isValidElement(e) ? a = l.cloneElement(e, t) : typeof e == "function" ? a = e(t) : a = l.createElement(nt, ne({}, t, { className: "recharts-polar-radius-axis-tick-value" }), r), a;
}, Ba = (e, t) => {
  var { angle: r, tickFormatter: a, stroke: n, tick: s } = e, o = yt(e, Aa), c = La(e.orientation), d = C(o), u = tt(s), x = t.map((m, v) => {
    var p = Ta(m, e.angle, e.cx, e.cy), g = _(_(_(_({ textAnchor: c, transform: "rotate(".concat(90 - r, ", ").concat(p.x, ", ").concat(p.y, ")") }, d), {}, { stroke: "none", fill: n }, u), {}, { index: v }, p), {}, { payload: m });
    return l.createElement(K, ne({ className: F("recharts-polar-radius-axis-tick", at(s)), key: "tick-".concat(m.coordinate) }, rt(e, m, v)), Ma(s, g, a ? a(m.value, v) : m.value));
  });
  return l.createElement(K, { className: "recharts-polar-radius-axis-ticks" }, x);
}, Ka = (e) => {
  var { radiusAxisId: t } = e, r = I(xe), a = I((d) => X(d, "radiusAxis", t)), n = I((d) => Y(d, "radiusAxis", t, false));
  if (r == null || !n || !n.length || a == null) return null;
  var s = _(_({}, e), {}, { scale: a }, r), { tick: o, axisLine: c } = s;
  return l.createElement(me, { zIndex: s.zIndex }, l.createElement(K, { className: F("recharts-polar-radius-axis", Ia, s.className) }, c && _a(s, n), o && Ba(s, n), l.createElement(br, $a(s.angle, s.cx, s.cy, n), l.createElement(hr, { label: s.label }), s.children)));
};
function jt(e) {
  var t = se(e, vr);
  return l.createElement(l.Fragment, null, l.createElement(Ca, { domain: t.domain, id: t.radiusAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDataOverflow: t.allowDataOverflow, reversed: t.reversed, includeHidden: t.includeHidden, allowDecimals: t.allowDecimals, ticks: t.ticks, tickCount: t.tickCount, tick: t.tick }), l.createElement(Ka, t));
}
jt.displayName = "PolarRadiusAxis";
var Fa = ["children"];
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, U.apply(null, arguments);
}
function _e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _e(Object(r), true).forEach(function(a) {
      za(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function za(e, t, r) {
  return (t = Wa(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function Wa(e) {
  var t = Va(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Va(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ga(e, t) {
  if (e == null) return {};
  var r, a, n = Ua(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ua(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
var Me = 1e-5, Ha = Math.cos(ce(45)), Za = "angleAxis";
function qa(e) {
  var t = je(), r = l.useMemo(() => {
    var { children: s } = e, o = Ga(e, Fa);
    return o;
  }, [e]), a = I((s) => ye(s, r.id)), n = r === a;
  return l.useEffect(() => (t(yr(r)), () => {
    t(jr(r));
  }), [t, r]), n ? e.children : null;
}
var Xa = (e, t) => {
  var { cx: r, cy: a, radius: n, orientation: s, tickSize: o } = t, c = o || 8, d = T(r, a, n, e.coordinate), u = T(r, a, n + (s === "inner" ? -1 : 1) * c, e.coordinate);
  return { x1: d.x, y1: d.y, x2: u.x, y2: u.y };
}, Ya = (e, t) => {
  var r = Math.cos(ce(-e.coordinate));
  return r > Me ? t === "outer" ? "start" : "end" : r < -Me ? t === "outer" ? "end" : "start" : "middle";
}, Ja = (e) => {
  var t = Math.cos(ce(-e.coordinate)), r = Math.sin(ce(-e.coordinate));
  return Math.abs(t) <= Ha ? r > 0 ? "start" : "end" : "middle";
}, Qa = (e) => {
  var { cx: t, cy: r, radius: a, axisLineType: n, axisLine: s, ticks: o } = e;
  if (!s) return null;
  var c = $($({}, C(e)), {}, { fill: "none" }, C(s));
  if (n === "circle") return l.createElement(wr, U({ className: "recharts-polar-angle-axis-line" }, c, { cx: t, cy: r, r: a }));
  var d = o.map((u) => T(t, r, a, u.coordinate));
  return l.createElement(ct, U({ className: "recharts-polar-angle-axis-line" }, c, { points: d }));
}, en = (e) => {
  var { tick: t, tickProps: r, value: a } = e;
  return t ? l.isValidElement(t) ? l.cloneElement(t, r) : typeof t == "function" ? t(r) : l.createElement(nt, U({}, r, { className: "recharts-polar-angle-axis-tick-value" }), a) : null;
}, tn = (e) => {
  var { tick: t, tickLine: r, tickFormatter: a, stroke: n, ticks: s } = e, o = C(e), c = tt(t), d = $($({}, o), {}, { fill: "none" }, C(r)), u = s.map((x, m) => {
    var v = Xa(x, e), p = Ya(x, e.orientation), g = Ja(x), b = $($($({}, o), {}, { textAnchor: p, verticalAnchor: g, stroke: "none", fill: n }, c), {}, { index: m, payload: x, x: v.x2, y: v.y2 });
    return l.createElement(K, U({ className: F("recharts-polar-angle-axis-tick", at(t)), key: "tick-".concat(x.coordinate) }, rt(e, x, m)), r && l.createElement("line", U({ className: "recharts-polar-angle-axis-tick-line" }, d, v)), l.createElement(en, { tick: t, tickProps: b, value: a ? a(x.value, m) : x.value }));
  });
  return l.createElement(K, { className: "recharts-polar-angle-axis-ticks" }, u);
}, rn = (e) => {
  var { angleAxisId: t } = e, r = I(xe), a = I((c) => X(c, "angleAxis", t)), n = it(), s = I((c) => oa(c, "angleAxis", t, n));
  if (r == null || !s || !s.length || a == null) return null;
  var o = $($($({}, e), {}, { scale: a }, r), {}, { radius: r.outerRadius, ticks: s });
  return l.createElement(me, { zIndex: o.zIndex }, l.createElement(K, { className: F("recharts-polar-angle-axis", Za, o.className) }, l.createElement(Qa, o), l.createElement(tn, o)));
};
function kt(e) {
  var t = se(e, kr);
  return l.createElement(qa, { id: t.angleAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: false, allowDataOverflow: false, reversed: t.reversed, includeHidden: false, allowDecimals: t.allowDecimals, tickCount: t.tickCount, ticks: t.ticks, tick: t.tick, domain: t.domain }, l.createElement(rn, t));
}
kt.displayName = "PolarAngleAxis";
function Be(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Be(Object(r), true).forEach(function(a) {
      an(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function an(e, t, r) {
  return (t = nn(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function nn(e) {
  var t = sn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sn(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wt = (e, t) => X(e, "radiusAxis", t), ln = j([wt], (e) => {
  if (e != null) return { scale: e };
}), on = j([Ye, wt], (e, t) => {
  if (!(e == null || t == null)) return ue(ue({}, e), {}, { scale: t });
}), cn = (e, t, r, a) => Y(e, "radiusAxis", t, a), Pt = (e, t, r) => ye(e, r), Ot = (e, t, r) => X(e, "angleAxis", r), dn = j([Pt, Ot], (e, t) => {
  if (!(e == null || t == null)) return ue(ue({}, e), {}, { scale: t });
}), un = (e, t, r, a) => Y(e, "angleAxis", r, a), mn = j([Pt, Ot, xe], (e, t, r) => {
  if (!(r == null || t == null)) return { scale: t, type: e.type, dataKey: e.dataKey, cx: r.cx, cy: r.cy };
}), xn = (e, t, r, a, n) => n, fn = j([q, on, cn, dn, un], (e, t, r, a, n) => Pr(e, "radiusAxis") ? Se(t, r, false) : Se(a, n, false)), pn = j([dt, xn], (e, t) => {
  if (e != null) {
    var r = e.find((a) => a.type === "radar" && t === a.id);
    return r == null ? void 0 : r.dataKey;
  }
}), gn = j([ln, mn, qe, pn, fn], (e, t, r, a, n) => {
  var { chartData: s, dataStartIndex: o, dataEndIndex: c } = r;
  if (!(e == null || t == null || s == null || n == null || a == null)) {
    var d = s.slice(o, c + 1);
    return Nn({ radiusAxis: e, angleAxis: t, displayedData: d, dataKey: a, bandSize: n });
  }
}), vn = ["id"];
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ie.apply(null, arguments);
}
function Ke(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ke(Object(r), true).forEach(function(a) {
      bn(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function bn(e, t, r) {
  return (t = hn(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function hn(e) {
  var t = yn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yn(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jn(e, t) {
  if (e == null) return {};
  var r, a, n = kn(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kn(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
function Pe(e, t) {
  return e && e !== "none" ? e : t;
}
var wn = (e) => {
  var { dataKey: t, name: r, stroke: a, fill: n, legendType: s, hide: o } = e;
  return [{ inactive: o, dataKey: t, type: s, color: Pe(a, n), value: st(r, t), payload: e }];
}, Pn = l.memo((e) => {
  var { dataKey: t, stroke: r, strokeWidth: a, fill: n, name: s, hide: o, tooltipType: c, id: d } = e, u = { dataDefinedOnItem: void 0, positions: void 0, settings: { stroke: r, strokeWidth: a, fill: n, nameKey: void 0, dataKey: t, name: st(s, t), hide: o, type: c, color: Pe(r, n), unit: "", graphicalItemId: d } };
  return l.createElement(Sr, { tooltipEntrySettings: u });
});
function On(e) {
  var { points: t, props: r } = e, { dot: a, dataKey: n } = r, { id: s } = r, o = jn(r, vn), c = C(o);
  return l.createElement(Lr, { points: t, dot: a, className: "recharts-radar-dots", dotClassName: "recharts-radar-dot", dataKey: n, baseProps: c });
}
function Nn(e) {
  var { radiusAxis: t, angleAxis: r, displayedData: a, dataKey: n, bandSize: s } = e, { cx: o, cy: c } = r, d = false, u = [], x = r.type !== "number" ? s ?? 0 : 0;
  a.forEach((v, p) => {
    var g = oe(v, r.dataKey, p), b = oe(v, n), P = r.scale(g) + x, w = Array.isArray(b) ? Dr(b) : b, O = Ee(w) ? 0 : t.scale(w);
    Array.isArray(b) && b.length >= 2 && (d = true), u.push(A(A({}, T(o, c, O, P)), {}, { name: g, value: b, cx: o, cy: c, radius: O, angle: P, payload: v }));
  });
  var m = [];
  return d && u.forEach((v) => {
    if (Array.isArray(v.value)) {
      var p = v.value[0], g = Ee(p) ? 0 : t.scale(p);
      m.push(A(A({}, v), {}, { radius: g }, T(o, c, g, v.angle)));
    } else m.push(v);
  }), { points: u, isRange: d, baseLinePoints: m };
}
function An(e) {
  var { showLabels: t, points: r, children: a } = e, n = r.map((s) => {
    var o, c = { x: s.x, y: s.y, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return A(A({}, c), {}, { value: (o = s.value) !== null && o !== void 0 ? o : "", payload: s.payload, parentViewBox: void 0, viewBox: c, fill: void 0 });
  });
  return l.createElement(Tr, { value: t ? n : void 0 }, a);
}
function Sn(e) {
  var { points: t, baseLinePoints: r, props: a } = e;
  if (t == null) return null;
  var { shape: n, isRange: s, connectNulls: o } = a, c = (x) => {
    var { onMouseEnter: m } = a;
    m && m(a, x);
  }, d = (x) => {
    var { onMouseLeave: m } = a;
    m && m(a, x);
  }, u;
  return l.isValidElement(n) ? u = l.cloneElement(n, A(A({}, a), {}, { points: t })) : typeof n == "function" ? u = n(A(A({}, a), {}, { points: t })) : u = l.createElement(ct, ie({}, te(a), { onMouseEnter: c, onMouseLeave: d, points: t, baseLinePoints: s ? r : void 0, connectNulls: o })), l.createElement(K, { className: "recharts-radar-polygon" }, u, l.createElement(On, { props: a, points: t }));
}
var Fe = (e, t, r) => (a, n) => {
  var s = e && e[Math.floor(n * t)];
  return s ? A(A({}, a), {}, { x: le(s.x, a.x, r), y: le(s.y, a.y, r) }) : A(A({}, a), {}, { x: le(a.cx, a.x, r), y: le(a.cy, a.y, r) });
};
function En(e) {
  var { props: t, previousPointsRef: r, previousBaseLinePointsRef: a } = e, { points: n, baseLinePoints: s, isAnimationActive: o, animationBegin: c, animationDuration: d, animationEasing: u, onAnimationEnd: x, onAnimationStart: m } = t, v = r.current, p = a.current, g = v ? v.length / n.length : 1, b = p ? p.length / s.length : 1, P = Rr(t, "recharts-radar-"), [w, O] = l.useState(false), M = !w, h = l.useCallback(() => {
    typeof x == "function" && x(), O(false);
  }, [x]), y = l.useCallback(() => {
    typeof m == "function" && m(), O(true);
  }, [m]);
  return l.createElement(An, { showLabels: M, points: n }, l.createElement(Ir, { animationId: P, begin: c, duration: d, isActive: o, easing: u, key: "radar-".concat(P), onAnimationEnd: h, onAnimationStart: y }, (S) => {
    var L = S === 1 ? n : n.map(Fe(v, g, S)), E = S === 1 ? s : s == null ? void 0 : s.map(Fe(p, b, S));
    return S > 0 && (r.current = L, a.current = E), l.createElement(Sn, { points: L, baseLinePoints: E, props: t });
  }), l.createElement(Cr, { label: t.label }), t.children);
}
function Dn(e) {
  var t = l.useRef(void 0), r = l.useRef(void 0);
  return l.createElement(En, { props: e, previousPointsRef: t, previousBaseLinePointsRef: r });
}
var Rn = { activeDot: true, angleAxisId: 0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", dot: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", radiusAxisId: 0, zIndex: Je.area };
function In(e) {
  var { hide: t, className: r, points: a } = e;
  if (t) return null;
  var n = F("recharts-radar", r);
  return l.createElement(me, { zIndex: e.zIndex }, l.createElement(K, { className: n }, l.createElement(Dn, e)), l.createElement(Er, { points: a, mainColor: Pe(e.stroke, e.fill), itemDataKey: e.dataKey, activeDot: e.activeDot }));
}
function Cn(e) {
  var t = it(), r = I((a) => gn(a, e.radiusAxisId, e.angleAxisId, t, e.id));
  return (r == null ? void 0 : r.points) == null ? null : l.createElement(In, ie({}, e, { points: r == null ? void 0 : r.points, baseLinePoints: r == null ? void 0 : r.baseLinePoints, isRange: r == null ? void 0 : r.isRange }));
}
function Nt(e) {
  var t = se(e, Rn);
  return l.createElement(Or, { id: t.id, type: "radar" }, (r) => l.createElement(l.Fragment, null, l.createElement(Nr, { type: "radar", id: r, data: void 0, dataKey: t.dataKey, hide: t.hide, angleAxisId: t.angleAxisId, radiusAxisId: t.radiusAxisId }), l.createElement(Ar, { legendPayload: wn(t) }), l.createElement(Pn, { dataKey: t.dataKey, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, tooltipType: t.tooltipType, id: r }), l.createElement(Cn, ie({}, t, { id: r }))));
}
Nt.displayName = "Radar";
function Tn(e) {
  var t = je();
  return l.useEffect(() => {
    t($r(e));
  }, [t, e]), null;
}
var Ln = ["layout"];
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ve.apply(null, arguments);
}
function $n(e, t) {
  if (e == null) return {};
  var r, a, n = _n(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function _n(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
var Mn = { top: 5, right: 5, bottom: 5, left: 5 }, At = { accessibilityLayer: true, stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: Mn, reverseStackOrder: false, syncMethod: "index", layout: "radial", responsive: false, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" }, Bn = l.forwardRef(function(t, r) {
  var a, n = se(t.categoricalChartProps, At), { layout: s } = n, o = $n(n, Ln), { chartName: c, defaultTooltipEventType: d, validateTooltipEventTypes: u, tooltipPayloadSearcher: x } = t, m = { chartName: c, defaultTooltipEventType: d, validateTooltipEventTypes: u, tooltipPayloadSearcher: x, eventEmitter: void 0 };
  return l.createElement(_r, { preloadedState: { options: m }, reduxStoreName: (a = n.id) !== null && a !== void 0 ? a : c }, l.createElement(Mr, { chartData: n.data }), l.createElement(Br, { layout: s, margin: n.margin }), l.createElement(Kr, { baseValue: void 0, accessibilityLayer: n.accessibilityLayer, barCategoryGap: n.barCategoryGap, maxBarSize: n.maxBarSize, stackOffset: n.stackOffset, barGap: n.barGap, barSize: n.barSize, syncId: n.syncId, syncMethod: n.syncMethod, className: n.className, reverseStackOrder: n.reverseStackOrder }), l.createElement(Tn, { cx: n.cx, cy: n.cy, startAngle: n.startAngle, endAngle: n.endAngle, innerRadius: n.innerRadius, outerRadius: n.outerRadius }), l.createElement(Fr, ve({}, o, { ref: r })));
});
function ze(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ze(Object(r), true).forEach(function(a) {
      Kn(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Kn(e, t, r) {
  return (t = Fn(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function Fn(e) {
  var t = zn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zn(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wn = ["axis"], Vn = We(We({}, At), {}, { layout: "centric", startAngle: 90, endAngle: -270 }), Gn = l.forwardRef((e, t) => {
  var r = se(e, Vn);
  return l.createElement(Bn, { chartName: "RadarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: Wn, tooltipPayloadSearcher: zr, categoricalChartProps: r, ref: t });
});
function Un({ data: e, height: t = 320, className: r = "" }) {
  const a = l.useMemo(() => {
    if (!e || e.length === 0) return [];
    const u = Math.max(...e.map((p) => p.fullMark)), x = e.map((p) => Ae(p.score, p.fullMark, u)), m = Math.max(...x, u), v = Math.max(u, m);
    return e.map((p) => ({ subject: p.subject, score: Ae(p.score, p.fullMark, u), fullMark: v, originalScore: p.score, originalFullMark: p.fullMark }));
  }, [e]), n = typeof window < "u" && document.documentElement.classList.contains("dark"), s = n ? "#334155" : "#e2e8f0", o = n ? "#94a3b8" : "#64748b", c = n ? "#1e293b" : "#fff", d = n ? "#334155" : "#e2e8f0";
  return i.jsx("div", { className: r, style: { height: t }, children: i.jsx(lt, { width: "100%", height: "100%", children: i.jsxs(Gn, { data: a, children: [i.jsx(pt, { stroke: s }), i.jsx(kt, { dataKey: "subject", tick: { fill: o, fontSize: 12, fontWeight: 500 } }), i.jsx(jt, { angle: 90, domain: [0, a.length > 0 ? a[0].fullMark : 40], tick: { fill: o, fontSize: 10 }, tickFormatter: (u) => u.toString() }), i.jsx(Nt, { name: "\u5F97\u5206", dataKey: "score", stroke: "#6366f1", fill: "#6366f1", fillOpacity: 0.6, strokeWidth: 2 }), i.jsx(ot, { contentStyle: { backgroundColor: c, border: `1px solid ${d}`, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (u, x, m) => {
    var _a2, _b;
    const v = ((_a2 = m == null ? void 0 : m.payload) == null ? void 0 : _a2.originalScore) ?? 0, p = ((_b = m == null ? void 0 : m.payload) == null ? void 0 : _b.originalFullMark) ?? 40, g = p > 0 ? Math.round(v / p * 100) : 0;
    return [`${v}/${p} (${g}%)`, "\u5F97\u5206"];
  } })] }) }) });
}
function ee({ label: e, score: t, maxScore: r, color: a = "bg-primary-500", delay: n = 0, className: s = "" }) {
  const o = Vt(t, r);
  return i.jsxs("div", { className: `bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 ${s}`, children: [i.jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400 mb-1", children: e }), i.jsxs("div", { className: "flex items-center gap-2", children: [i.jsx("div", { className: "flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden", children: i.jsx(k.div, { className: `h-full ${a} rounded-full`, initial: { width: 0 }, animate: { width: `${o}%` }, transition: { duration: 0.8, delay: n } }) }), i.jsxs("span", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300 w-8 text-right", children: [t, "/", r] })] })] });
}
function Hn({ analysis: e, analyzeStatus: t, analyzeError: r, onExport: a, exporting: n, onReanalyze: s, reanalyzing: o }) {
  var _a2, _b;
  const c = l.useMemo(() => {
    if (!e) return [];
    const h = e.projectScore || 0, y = e.skillMatchScore || 0, S = e.contentScore || 0, L = e.structureScore || 0;
    return [{ subject: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: e.expressionScore || 0, fullMark: 10 }, { subject: "\u6280\u80FD\u5339\u914D", score: y, fullMark: 20 }, { subject: "\u5185\u5BB9\u5B8C\u6574\u6027", score: S, fullMark: 15 }, { subject: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: L, fullMark: 15 }, { subject: "\u9879\u76EE\u7ECF\u9A8C", score: h, fullMark: 40 }];
  }, [e]), d = l.useMemo(() => {
    if (!(e == null ? void 0 : e.suggestions)) return { high: [], medium: [], low: [] };
    const h = e.suggestions;
    return { high: h.filter((y) => y.priority === "\u9AD8"), medium: h.filter((y) => y.priority === "\u4E2D"), low: h.filter((y) => y.priority === "\u4F4E") };
  }, [e]), u = (h) => {
    switch (h) {
      case "\u9AD8":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400";
      case "\u4E2D":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400";
      case "\u4F4E":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400";
      default:
        return "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300";
    }
  }, x = (h) => {
    switch (h) {
      case "\u9AD8":
        return "bg-red-500 text-white";
      case "\u4E2D":
        return "bg-amber-500 text-white";
      case "\u4F4E":
        return "bg-blue-500 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  }, m = (h) => ({ \u9879\u76EE: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300", \u6280\u80FD: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300", \u5185\u5BB9: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300", \u683C\u5F0F: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300", \u7ED3\u6784: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300", \u8868\u8FBE: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300" })[h] || "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300", v = (e == null ? void 0 : e.summary) && (e.summary.includes("I/O error") || e.summary.includes("\u5206\u6790\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF") || e.summary.includes("\u7B80\u5386\u5206\u6790\u5931\u8D25") || e.summary.includes("Remote host terminated") || e.summary.includes("handshake")), p = e && e.overallScore >= 10 && e.summary && !v;
  if (t === "PENDING" || t === "PROCESSING" || t === void 0 && !e) {
    const h = t === "PROCESSING";
    return i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [i.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center", children: h ? i.jsx(Ct, { className: "w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" }) : i.jsx(Ve, { className: "w-8 h-8 text-yellow-500 dark:text-yellow-400" }) }), i.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: h ? "AI \u6B63\u5728\u5206\u6790\u4E2D..." : "\u7B49\u5F85\u5206\u6790" }), i.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: h ? "\u8BF7\u7A0D\u5019\uFF0CAI \u6B63\u5728\u5BF9\u60A8\u7684\u7B80\u5386\u8FDB\u884C\u6DF1\u5EA6\u5206\u6790" : "\u7B80\u5386\u5DF2\u4E0A\u4F20\u6210\u529F\uFF0C\u5373\u5C06\u5F00\u59CB AI \u5206\u6790" }), i.jsx("p", { className: "text-sm text-slate-400 dark:text-slate-500", children: "\u9875\u9762\u5C06\u81EA\u52A8\u5237\u65B0\u663E\u793A\u5206\u6790\u7ED3\u679C" })] });
  }
  if (t === "FAILED" || !p) return i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [i.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center", children: i.jsx(Tt, { className: "w-8 h-8 text-red-500 dark:text-red-400" }) }), i.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u5206\u6790\u5931\u8D25" }), i.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: "AI \u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" }), (r || (e == null ? void 0 : e.summary)) && i.jsx("div", { className: "mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-left mb-4", children: i.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: r || e.summary }) }), s && i.jsxs(k.button, { onClick: s, disabled: o, className: "px-6 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [i.jsx(Ne, { className: `w-4 h-4 ${o ? "animate-spin" : ""}` }), o ? "\u91CD\u65B0\u5206\u6790\u4E2D..." : "\u91CD\u65B0\u5206\u6790"] })] });
  const b = e.projectScore || 0, P = e.skillMatchScore || 0, w = e.contentScore || 0, O = e.structureScore || 0, M = e.expressionScore || 0;
  return i.jsxs("div", { className: "space-y-6", children: [i.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [i.jsxs(k.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [i.jsxs("div", { className: "flex items-center justify-between mb-6", children: [i.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400", children: [i.jsx(Ge, { className: "w-5 h-5" }), i.jsx("span", { className: "font-semibold", children: "\u6838\u5FC3\u8BC4\u4EF7" })] }), i.jsxs("div", { className: "flex items-center gap-2", children: [s && i.jsxs(k.button, { onClick: s, disabled: o, className: "px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [i.jsx(Ne, { className: `w-4 h-4 ${o ? "animate-spin" : ""}` }), o ? "\u91CD\u65B0\u5206\u6790\u4E2D..." : "\u91CD\u65B0\u5206\u6790"] }), i.jsxs(k.button, { onClick: a, disabled: n, className: "px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [i.jsx(be, { className: "w-4 h-4" }), n ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA\u5206\u6790\u62A5\u544A"] })] })] }), i.jsxs("div", { className: "bg-gradient-to-br from-emerald-50 dark:from-emerald-900/30 to-green-50 dark:to-slate-800 rounded-xl p-6", children: [i.jsx("p", { className: "text-lg text-slate-800 dark:text-white leading-relaxed mb-6", children: e.summary || "\u5019\u9009\u4EBA\u5177\u5907\u624E\u5B9E\u7684\u6280\u672F\u57FA\u7840\uFF0C\u6709\u5927\u578B\u9879\u76EE\u67B6\u6784\u7ECF\u9A8C\u3002" }), i.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [i.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u603B\u5206" }), i.jsx("span", { className: "text-4xl font-bold text-slate-900 dark:text-white", children: e.overallScore || 0 }), i.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: "/ 100" })] }), i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [i.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u5206\u6790\u65F6\u95F4" }), i.jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: Zr(e.analyzedAt) })] })] }), e.strengths && e.strengths.length > 0 && i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-4", children: [i.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-3", children: "\u4F18\u52BF\u4EAE\u70B9" }), i.jsx("div", { className: "flex flex-wrap gap-2", children: e.strengths.map((h, y) => i.jsx("span", { className: "px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm font-medium", children: h }, y)) })] })] })] }), i.jsxs(k.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: [i.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [i.jsx(Lt, { className: "w-5 h-5" }), i.jsx("span", { className: "font-semibold", children: "\u591A\u7EF4\u5EA6\u8BC4\u5206" })] }), i.jsx(Un, { data: c, height: 320 }), i.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [i.jsx(ee, { label: "\u9879\u76EE\u7ECF\u9A8C", score: b, maxScore: 40, color: "bg-purple-500", delay: 0.3, className: "col-span-2" }), i.jsx(ee, { label: "\u6280\u80FD\u5339\u914D", score: P, maxScore: 20, color: "bg-blue-500", delay: 0.4 }), i.jsx(ee, { label: "\u5185\u5BB9\u5B8C\u6574\u6027", score: w, maxScore: 15, color: "bg-emerald-500", delay: 0.5 }), i.jsx(ee, { label: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: O, maxScore: 15, color: "bg-cyan-500", delay: 0.6 }), i.jsx(ee, { label: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: M, maxScore: 10, color: "bg-orange-500", delay: 0.7 })] })] })] }), i.jsxs(k.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: [i.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [i.jsx($t, { className: "w-5 h-5" }), i.jsx("span", { className: "font-semibold", children: "\u6539\u8FDB\u5EFA\u8BAE" }), i.jsxs("span", { className: "text-sm text-slate-400 dark:text-slate-500", children: ["(", ((_a2 = e.suggestions) == null ? void 0 : _a2.length) || 0, " \u6761)"] })] }), i.jsxs("div", { className: "space-y-6", children: [d.high.length > 0 && i.jsx(ge, { priority: "\u9AD8", suggestions: d.high, getPriorityColor: u, getPriorityBadgeColor: x, getCategoryColor: m, delay: 0.4 }), d.medium.length > 0 && i.jsx(ge, { priority: "\u4E2D", suggestions: d.medium, getPriorityColor: u, getPriorityBadgeColor: x, getCategoryColor: m, delay: 0.5 }), d.low.length > 0 && i.jsx(ge, { priority: "\u4F4E", suggestions: d.low, getPriorityColor: u, getPriorityBadgeColor: x, getCategoryColor: m, delay: 0.6 }), ((_b = e.suggestions) == null ? void 0 : _b.length) === 0 && i.jsx("div", { className: "text-center py-8 text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u6539\u8FDB\u5EFA\u8BAE" })] })] })] });
}
function ge({ priority: e, suggestions: t, getPriorityColor: r, getPriorityBadgeColor: a, getCategoryColor: n, delay: s }) {
  const o = { \u9AD8: { bg: "bg-red-100 dark:bg-red-900/50", text: "text-red-700 dark:text-red-300", border: "bg-red-100 dark:bg-red-900/50" }, \u4E2D: { bg: "bg-amber-100 dark:bg-amber-900/50", text: "text-amber-700 dark:text-amber-300", border: "bg-amber-100 dark:bg-amber-900/50" }, \u4F4E: { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-700 dark:text-blue-300", border: "bg-blue-100 dark:bg-blue-900/50" } }, c = o[e] || o.\u4E2D;
  return i.jsxs("div", { children: [i.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [i.jsxs("span", { className: `px-3 py-1 ${c.bg} ${c.text} rounded-full text-sm font-semibold`, children: [e, "\u4F18\u5148\u7EA7 (", t.length, ")"] }), i.jsx("div", { className: `flex-1 h-px ${c.border}` })] }), i.jsx("div", { className: "space-y-3", children: t.map((d, u) => i.jsxs(k.div, { className: `p-4 rounded-xl border-2 ${r(e)}`, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: s + u * 0.1 }, children: [i.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [i.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-semibold ${a(e)}`, children: e }), i.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-medium ${n(d.category || "\u5176\u4ED6")}`, children: d.category || "\u5176\u4ED6" })] }), i.jsxs("div", { className: "mb-2", children: [i.jsx("p", { className: "font-semibold text-slate-900 dark:text-white mb-1", children: d.issue || "\u95EE\u9898\u63CF\u8FF0" }), i.jsx("p", { className: "text-sm leading-relaxed text-slate-700 dark:text-slate-300", children: d.recommendation || d })] })] }, `${e}-${u}`)) })] });
}
function Zn({ interviews: e, onStartInterview: t, onViewInterview: r, onExportInterview: a, onDeleteInterview: n, exporting: s, loadingInterview: o }) {
  const [c, d] = l.useState(null), [u, x] = l.useState(null), m = (g, b) => {
    b.stopPropagation(), x({ sessionId: g });
  }, v = async () => {
    if (!u) return;
    const { sessionId: g } = u;
    d(g);
    try {
      await B.deleteInterview(g), n(g), x(null);
    } catch (b) {
      alert(b instanceof Error ? b.message : "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    } finally {
      d(null);
    }
  }, p = l.useMemo(() => e.filter((g) => g.overallScore !== null).map((g) => ({ name: de(g.createdAt), score: g.overallScore || 0, index: e.length - e.indexOf(g) })).reverse(), [e]);
  return e.length === 0 ? i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [i.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: i.jsx(Ue, { className: "w-8 h-8 text-slate-400" }) }), i.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }), i.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6", children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5\uFF0C\u83B7\u53D6\u4E13\u4E1A\u8BC4\u4F30" }), i.jsx(k.button, { onClick: t, className: "px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5" })] }) : i.jsxs("div", { className: "space-y-6", children: [p.length > 0 && i.jsxs(k.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [i.jsxs("div", { className: "flex items-center justify-between mb-6", children: [i.jsxs("div", { className: "flex items-center gap-2", children: [i.jsx(Ge, { className: "w-5 h-5 text-primary-500" }), i.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u9762\u8BD5\u8868\u73B0\u8D8B\u52BF" })] }), i.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5171 ", p.length, " \u573A\u7EC3\u4E60"] })] }), i.jsx("div", { className: "h-48", children: i.jsx(lt, { width: "100%", height: "100%", children: i.jsxs(Wr, { data: p, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [i.jsx(Vr, { strokeDasharray: "3 3", stroke: "#e2e8f0", className: "dark:stroke-slate-700" }), i.jsx(Gr, { dataKey: "name", axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), i.jsx(Ur, { domain: [0, 100], axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), i.jsx(ot, { contentStyle: { backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (g) => [`${g} \u5206`, "\u5F97\u5206"] }), i.jsx(Hr, { type: "monotone", dataKey: "score", stroke: "#6366f1", strokeWidth: 3, dot: { fill: "#6366f1", strokeWidth: 2, r: 5 }, activeDot: { r: 8, fill: "#6366f1" } })] }) }) })] }), i.jsxs(k.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [i.jsx("div", { className: "flex items-center justify-between mb-6", children: i.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u5386\u53F2\u9762\u8BD5\u573A\u6B21" }) }), i.jsx("div", { className: "space-y-4", children: e.map((g, b) => i.jsx(qn, { interview: g, index: b, total: e.length, exporting: s === g.sessionId, deleting: c === g.sessionId, onView: () => r(g.sessionId), onExport: () => a(g.sessionId), onDelete: (P) => m(g.sessionId, P) }, g.id)) }), i.jsx(qr, { open: u !== null, title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", message: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u9762\u8BD5\u8BB0\u5F55\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002", confirmText: "\u786E\u5B9A\u5220\u9664", cancelText: "\u53D6\u6D88", confirmVariant: "danger", loading: c !== null, onConfirm: v, onCancel: () => x(null) }), o && i.jsx("div", { className: "fixed inset-0 bg-black/20 dark:bg-black/50 flex items-center justify-center z-50", children: i.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 flex items-center gap-4", children: [i.jsx(k.div, { className: "w-8 h-8 border-3 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }), i.jsx("span", { className: "text-slate-600 dark:text-slate-300", children: "\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5..." })] }) })] })] });
}
function qn({ interview: e, index: t, total: r, exporting: a, deleting: n, onView: s, onExport: o, onDelete: c }) {
  return i.jsxs(k.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: t * 0.1 }, onClick: s, className: "flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors group", children: [i.jsx("div", { className: `w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${e.overallScore !== null ? Gt(e.overallScore, [85, 70]) : "bg-slate-100 dark:bg-slate-600 text-slate-400"}`, children: e.overallScore ?? "-" }), i.jsxs("div", { className: "flex-1 min-w-0", children: [i.jsxs("p", { className: "font-medium text-slate-800 dark:text-white truncate", children: ["\u6A21\u62DF\u9762\u8BD5 #", r - t] }), i.jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [i.jsxs("span", { className: "flex items-center gap-1", children: [i.jsx(_t, { className: "w-4 h-4" }), de(e.createdAt)] }), i.jsxs("span", { className: "flex items-center gap-1", children: [i.jsx(He, { className: "w-4 h-4" }), e.totalQuestions, " \u9898"] })] })] }), i.jsxs("div", { className: "flex items-center gap-2 opacity-0 group-hover:opacity-100", children: [i.jsx(k.button, { onClick: (d) => {
    d.stopPropagation(), o();
  }, disabled: a, className: "px-3 py-2 text-slate-400 hover:text-primary-500 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-all", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: i.jsx(be, { className: "w-5 h-5" }) }), i.jsx("button", { onClick: c, disabled: n, className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed", title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", children: n ? i.jsx(k.div, { className: "w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) : i.jsx(Mt, { className: "w-5 h-5" }) })] }), i.jsx(Bt, { className: "w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" })] });
}
function ii({ resumeId: e, onBack: t, onStartInterview: r }) {
  var _a2, _b, _c;
  const a = Wt(), [n, s] = l.useState(null), [o, c] = l.useState(true), [d, u] = l.useState("analysis"), [x, m] = l.useState(null), [[v, p], g] = l.useState([0, 0]), [b, P] = l.useState("list"), [w, O] = l.useState(null), [M, h] = l.useState(false), [y, S] = l.useState(false), L = l.useCallback(async () => {
    try {
      const f = await B.getResumeDetail(e);
      s(f);
    } catch (f) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", f);
    }
  }, [e]), E = l.useCallback(async () => {
    c(true);
    try {
      const f = await B.getResumeDetail(e);
      s(f);
    } catch (f) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", f);
    } finally {
      c(false);
    }
  }, [e]);
  l.useEffect(() => {
    E();
  }, [E]), l.useEffect(() => {
    if (n && (n.analyzeStatus === "PENDING" || n.analyzeStatus === "PROCESSING" || n.analyzeStatus === void 0 && (!n.analyses || n.analyses.length === 0)) && !o) {
      const N = setInterval(() => {
        L();
      }, 5e3);
      return () => clearInterval(N);
    }
  }, [n, o, L]);
  const V = async () => {
    try {
      S(true), await B.reanalyze(e), await L();
    } catch (f) {
      console.error("\u91CD\u65B0\u5206\u6790\u5931\u8D25", f);
    } finally {
      S(false);
    }
  };
  l.useEffect(() => {
    var _a3;
    const f = (_a3 = a.state) == null ? void 0 : _a3.viewInterview;
    f && n && (u("interview"), (async () => {
      h(true);
      try {
        const D = await B.getInterviewDetail(f);
        O(D), P("interviewDetail");
      } catch (D) {
        console.error("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25", D);
      } finally {
        h(false);
      }
    })());
  }, [a.state, n]);
  const G = async () => {
    m("analysis");
    try {
      const f = await B.exportAnalysisPdf(e), N = window.URL.createObjectURL(f), D = document.createElement("a");
      D.href = N, D.download = `\u7B80\u5386\u5206\u6790\u62A5\u544A_${(n == null ? void 0 : n.filename) || e}.pdf`, document.body.appendChild(D), D.click(), document.body.removeChild(D), window.URL.revokeObjectURL(N);
    } catch {
      alert("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    } finally {
      m(null);
    }
  }, J = async (f) => {
    m(f);
    try {
      const N = await B.exportInterviewPdf(f), D = window.URL.createObjectURL(N), Q = document.createElement("a");
      Q.href = D, Q.download = `\u9762\u8BD5\u62A5\u544A_${f}.pdf`, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q), window.URL.revokeObjectURL(D);
    } catch {
      alert("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    } finally {
      m(null);
    }
  }, H = async (f) => {
    h(true);
    try {
      const N = await B.getInterviewDetail(f);
      O(N), P("interviewDetail");
    } catch {
      alert("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25");
    } finally {
      h(false);
    }
  }, Oe = () => {
    P("list"), O(null);
  }, St = async (f) => {
    await E(), (w == null ? void 0 : w.sessionId) === f && (P("list"), O(null));
  }, Et = (f) => {
    const N = f === "analysis" ? 0 : 1;
    g([N, N > v ? 1 : -1]), u(f), P("list"), O(null);
  }, Dt = { enter: (f) => ({ x: f > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (f) => ({ x: f < 0 ? 300 : -300, opacity: 0 }) };
  if (o) return i.jsx("div", { className: "flex items-center justify-center h-96", children: i.jsx(k.div, { className: "w-12 h-12 border-4 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) });
  if (!n) return i.jsxs("div", { className: "text-center py-20", children: [i.jsx("p", { className: "text-red-500 mb-4", children: "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u8BD5" }), i.jsx("button", { onClick: t, className: "px-6 py-2 bg-primary-500 text-white rounded-lg", children: "\u8FD4\u56DE\u5217\u8868" })] });
  const Rt = (_a2 = n.analyses) == null ? void 0 : _a2[0], It = [{ id: "analysis", label: "\u7B80\u5386\u5206\u6790", icon: Kt }, { id: "interview", label: "\u9762\u8BD5\u8BB0\u5F55", icon: He, count: ((_b = n.interviews) == null ? void 0 : _b.length) || 0 }];
  return i.jsxs(k.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "w-full", children: [i.jsxs("div", { className: "flex justify-between items-center mb-8 flex-wrap gap-4", children: [i.jsxs("div", { className: "flex items-center gap-4", children: [i.jsx(k.button, { onClick: b === "interviewDetail" ? Oe : t, className: "w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-300 transition-all shadow-sm", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: i.jsx(Ft, { className: "w-5 h-5" }) }), i.jsxs("div", { children: [i.jsx("h2", { className: "text-xl font-bold text-slate-900 dark:text-white", children: b === "interviewDetail" ? `\u9762\u8BD5\u8BE6\u60C5 #${((_c = w == null ? void 0 : w.sessionId) == null ? void 0 : _c.slice(-6)) || ""}` : n.filename }), i.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5", children: [i.jsx(Ve, { className: "w-4 h-4" }), b === "interviewDetail" ? `\u5B8C\u6210\u4E8E ${de((w == null ? void 0 : w.completedAt) || (w == null ? void 0 : w.createdAt) || "")}` : `\u4E0A\u4F20\u4E8E ${de(n.uploadedAt)}`] })] })] }), i.jsxs("div", { className: "flex gap-3", children: [b === "interviewDetail" && w && i.jsxs(k.button, { onClick: () => J(w.sessionId), disabled: x === w.sessionId, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [i.jsx(be, { className: "w-4 h-4" }), x === w.sessionId ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA PDF"] }), b !== "interviewDetail" && i.jsxs(k.button, { onClick: () => r(e), className: "px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all flex items-center gap-2", whileHover: { scale: 1.02, y: -1 }, whileTap: { scale: 0.98 }, children: [i.jsx(Ue, { className: "w-4 h-4" }), "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5"] })] })] }), b !== "interviewDetail" && i.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-2 mb-6 inline-flex gap-1", children: It.map((f) => i.jsxs(k.button, { onClick: () => Et(f.id), className: `relative px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors
                ${d === f.id ? "text-primary-600 dark:text-primary-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [d === f.id && i.jsx(k.div, { layoutId: "activeTab", className: "absolute inset-0 bg-primary-50 dark:bg-primary-900 rounded-xl", transition: { type: "spring", bounce: 0.2, duration: 0.6 } }), i.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [i.jsx(f.icon, { className: "w-5 h-5" }), f.label, f.count !== void 0 && f.count > 0 && i.jsx("span", { className: "px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full", children: f.count })] })] }, f.id)) }), i.jsx("div", { className: "relative overflow-hidden", children: b === "interviewDetail" && w ? i.jsx(Xr, { interview: w }) : i.jsx(zt, { initial: false, custom: p, mode: "wait", children: i.jsx(k.div, { custom: p, variants: Dt, initial: "enter", animate: "center", exit: "exit", transition: { type: "spring", stiffness: 300, damping: 30 }, children: d === "analysis" ? i.jsx(Hn, { analysis: Rt, analyzeStatus: n.analyzeStatus, analyzeError: n.analyzeError, onExport: G, exporting: x === "analysis", onReanalyze: V, reanalyzing: y }) : i.jsx(Zn, { interviews: n.interviews || [], onStartInterview: () => r(e), onViewInterview: H, onExportInterview: J, onDeleteInterview: St, exporting: x, loadingInterview: M }) }, d) }) })] });
}
export {
  ii as default
};
