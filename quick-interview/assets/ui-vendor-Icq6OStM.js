import { r as y } from "./react-vendor-C54eoJNz.js";
var js = { exports: {} }, Yt = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vr = y, xr = Symbol.for("react.element"), kr = Symbol.for("react.fragment"), Mr = Object.prototype.hasOwnProperty, Tr = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wr = { key: true, ref: true, __self: true, __source: true };
function Bs(t, e, n) {
  var s, i = {}, o = null, r = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (s in e) Mr.call(e, s) && !wr.hasOwnProperty(s) && (i[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) i[s] === void 0 && (i[s] = e[s]);
  return { $$typeof: xr, type: t, key: o, ref: r, props: i, _owner: Tr.current };
}
Yt.Fragment = kr;
Yt.jsx = Bs;
Yt.jsxs = Bs;
js.exports = Yt;
var G = js.exports;
const Oe = y.createContext({});
function ze(t) {
  const e = y.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Ne = typeof window < "u", Fs = Ne ? y.useLayoutEffect : y.useEffect, Zt = y.createContext(null);
function Ue(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function He(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const X = (t, e, n) => n > e ? e : n < t ? t : n;
let We = () => {
};
const Y = {}, Is = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Os(t) {
  return typeof t == "object" && t !== null;
}
const zs = (t) => /^0[^.\s]+$/u.test(t);
function Ke(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const W = (t) => t, Pr = (t, e) => (n) => e(t(n)), Et = (...t) => t.reduce(Pr), Ct = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
};
class qe {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Ue(this.subscriptions, e), () => He(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i) if (i === 1) this.subscriptions[0](e, n, s);
    else for (let o = 0; o < i; o++) {
      const r = this.subscriptions[o];
      r && r(e, n, s);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $ = (t) => t * 1e3, H = (t) => t / 1e3;
function Ns(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Us = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, br = 1e-7, Ar = 12;
function Cr(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Us(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > br && ++a < Ar);
  return r;
}
function Lt(t, e, n, s) {
  if (t === e && n === s) return W;
  const i = (o) => Cr(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Us(i(o), e, s);
}
const Hs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ws = (t) => (e) => 1 - t(1 - e), Ks = Lt(0.33, 1.53, 0.69, 0.99), $e = Ws(Ks), qs = Hs($e), $s = (t) => (t *= 2) < 1 ? 0.5 * $e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), _e = (t) => 1 - Math.sin(Math.acos(t)), _s = Ws(_e), Gs = Hs(_e), Sr = Lt(0.42, 0, 1, 1), Vr = Lt(0, 0, 0.58, 1), Xs = Lt(0.42, 0, 0.58, 1), Dr = (t) => Array.isArray(t) && typeof t[0] != "number", Ys = (t) => Array.isArray(t) && typeof t[0] == "number", Rr = { linear: W, easeIn: Sr, easeInOut: Xs, easeOut: Vr, circIn: _e, circInOut: Gs, circOut: _s, backIn: $e, backInOut: qs, backOut: Ks, anticipate: $s }, Er = (t) => typeof t == "string", Mn = (t) => {
  if (Ys(t)) {
    We(t.length === 4);
    const [e, n, s, i] = t;
    return Lt(e, n, s, i);
  } else if (Er(t)) return Rr[t];
  return t;
}, Ft = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Lr(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = false, o = false;
  const r = /* @__PURE__ */ new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: false };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = { schedule: (c, h = false, d = false) => {
    const m = d && i ? n : s;
    return h && r.add(c), m.has(c) || m.add(c), c;
  }, cancel: (c) => {
    s.delete(c), r.delete(c);
  }, process: (c) => {
    if (a = c, i) {
      o = true;
      return;
    }
    i = true, [n, s] = [s, n], n.forEach(l), n.clear(), i = false, o && (o = false, u.process(c));
  } };
  return u;
}
const jr = 40;
function Zs(t, e) {
  let n = false, s = true;
  const i = { delta: 0, timestamp: 0, isProcessing: false }, o = () => n = true, r = Ft.reduce((x, b) => (x[b] = Lr(o), x), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: d, render: f, postRender: m } = r, v = () => {
    const x = Y.useManualTiming ? i.timestamp : performance.now();
    n = false, Y.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, jr), 1)), i.timestamp = x, i.isProcessing = true, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), d.process(i), f.process(i), m.process(i), i.isProcessing = false, n && e && (s = false, t(v));
  }, k = () => {
    n = true, s = true, i.isProcessing || t(v);
  };
  return { schedule: Ft.reduce((x, b) => {
    const T = r[b];
    return x[b] = (A, C = false, P = false) => (n || k(), T.schedule(A, C, P)), x;
  }, {}), cancel: (x) => {
    for (let b = 0; b < Ft.length; b++) r[Ft[b]].cancel(x);
  }, state: i, steps: r };
}
const { schedule: S, cancel: Q, state: B, steps: ee } = Zs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : W, true);
let Nt;
function Br() {
  Nt = void 0;
}
const z = { now: () => (Nt === void 0 && z.set(B.isProcessing || Y.useManualTiming ? B.timestamp : performance.now()), Nt), set: (t) => {
  Nt = t, queueMicrotask(Br);
} }, Js = (t) => (e) => typeof e == "string" && e.startsWith(t), Qs = Js("--"), Fr = Js("var(--"), Ge = (t) => Fr(t) ? Ir.test(t.split("/*")[0].trim()) : false, Ir = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, vt = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t }, St = { ...vt, transform: (t) => X(0, 1, t) }, It = { ...vt, default: 1 }, wt = (t) => Math.round(t * 1e5) / 1e5, Xe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Or(t) {
  return t == null;
}
const zr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ye = (t, e) => (n) => !!(typeof n == "string" && zr.test(n) && n.startsWith(t) || e && !Or(n) && Object.prototype.hasOwnProperty.call(n, e)), ti = (t, e, n) => (s) => {
  if (typeof s != "string") return s;
  const [i, o, r, a] = s.match(Xe);
  return { [t]: parseFloat(i), [e]: parseFloat(o), [n]: parseFloat(r), alpha: a !== void 0 ? parseFloat(a) : 1 };
}, Nr = (t) => X(0, 255, t), ne = { ...vt, transform: (t) => Math.round(Nr(t)) }, rt = { test: Ye("rgb", "red"), parse: ti("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + ne.transform(t) + ", " + ne.transform(e) + ", " + ne.transform(n) + ", " + wt(St.transform(s)) + ")" };
function Ur(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(s, 16), alpha: i ? parseInt(i, 16) / 255 : 1 };
}
const ye = { test: Ye("#"), parse: Ur, transform: rt.transform }, jt = (t) => ({ test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${t}` }), J = jt("deg"), _ = jt("%"), w = jt("px"), Hr = jt("vh"), Wr = jt("vw"), Tn = { ..._, parse: (t) => _.parse(t) / 100, transform: (t) => _.transform(t * 100) }, ut = { test: Ye("hsl", "hue"), parse: ti("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + _.transform(wt(e)) + ", " + _.transform(wt(n)) + ", " + wt(St.transform(s)) + ")" }, R = { test: (t) => rt.test(t) || ye.test(t) || ut.test(t), parse: (t) => rt.test(t) ? rt.parse(t) : ut.test(t) ? ut.parse(t) : ye.parse(t), transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? rt.transform(t) : ut.transform(t), getAnimatableNone: (t) => {
  const e = R.parse(t);
  return e.alpha = 0, R.transform(e);
} }, Kr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function qr(t) {
  var _a2, _b;
  return isNaN(t) && typeof t == "string" && (((_a2 = t.match(Xe)) == null ? void 0 : _a2.length) || 0) + (((_b = t.match(Kr)) == null ? void 0 : _b.length) || 0) > 0;
}
const ei = "number", ni = "color", $r = "var", _r = "var(", wn = "${}", Gr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vt(t) {
  const e = t.toString(), n = [], s = { color: [], number: [], var: [] }, i = [];
  let o = 0;
  const a = e.replace(Gr, (l) => (R.test(l) ? (s.color.push(o), i.push(ni), n.push(R.parse(l))) : l.startsWith(_r) ? (s.var.push(o), i.push($r), n.push(l)) : (s.number.push(o), i.push(ei), n.push(parseFloat(l))), ++o, wn)).split(wn);
  return { values: n, split: a, indexes: s, types: i };
}
function si(t) {
  return Vt(t).values;
}
function ii(t) {
  const { split: e, types: n } = Vt(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++) if (o += e[r], i[r] !== void 0) {
      const a = n[r];
      a === ei ? o += wt(i[r]) : a === ni ? o += R.transform(i[r]) : o += i[r];
    }
    return o;
  };
}
const Xr = (t) => typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function Yr(t) {
  const e = si(t);
  return ii(t)(e.map(Xr));
}
const tt = { test: qr, parse: si, createTransformer: ii, getAnimatableNone: Yr };
function se(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Zr({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = se(l, a, t + 1 / 3), o = se(l, a, t), r = se(l, a, t - 1 / 3);
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(r * 255), alpha: s };
}
function Kt(t, e) {
  return (n) => n > 0 ? e : t;
}
const V = (t, e, n) => t + (e - t) * n, ie = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Jr = [ye, rt, ut], Qr = (t) => Jr.find((e) => e.test(t));
function Pn(t) {
  const e = Qr(t);
  if (!e) return false;
  let n = e.parse(t);
  return e === ut && (n = Zr(n)), n;
}
const bn = (t, e) => {
  const n = Pn(t), s = Pn(e);
  if (!n || !s) return Kt(t, e);
  const i = { ...n };
  return (o) => (i.red = ie(n.red, s.red, o), i.green = ie(n.green, s.green, o), i.blue = ie(n.blue, s.blue, o), i.alpha = V(n.alpha, s.alpha, o), rt.transform(i));
}, ge = /* @__PURE__ */ new Set(["none", "hidden"]);
function to(t, e) {
  return ge.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function eo(t, e) {
  return (n) => V(t, e, n);
}
function Ze(t) {
  return typeof t == "number" ? eo : typeof t == "string" ? Ge(t) ? Kt : R.test(t) ? bn : io : Array.isArray(t) ? ri : typeof t == "object" ? R.test(t) ? bn : no : Kt;
}
function ri(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Ze(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function no(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Ze(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function so(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const io = (t, e) => {
  const n = tt.createTransformer(e), s = Vt(t), i = Vt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ge.has(t) && !i.values.length || ge.has(e) && !s.values.length ? to(t, e) : Et(ri(so(s, i), i.values), n) : Kt(t, e);
};
function oi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? V(t, e, n) : Ze(t)(t, e);
}
const ro = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return { start: (n = true) => S.update(e, n), stop: () => Q(e), now: () => B.isProcessing ? B.timestamp : z.now() };
}, ai = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, qt = 2e4;
function Je(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < qt; ) e += n, s = t.next(e);
  return e >= qt ? 1 / 0 : e;
}
function oo(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(Je(s), qt);
  return { type: "keyframes", ease: (o) => s.next(i * o).value / e, duration: H(i) };
}
const ao = 5;
function li(t, e, n) {
  const s = Math.max(e - ao, 0);
  return Ns(n - t(s), e - s);
}
const D = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, re = 1e-3;
function lo({ duration: t = D.duration, bounce: e = D.bounce, velocity: n = D.velocity, mass: s = D.mass }) {
  let i, o, r = 1 - e;
  r = X(D.minDamping, D.maxDamping, r), t = X(D.minDuration, D.maxDuration, H(t)), r < 1 ? (i = (u) => {
    const c = u * r, h = c * t, d = c - n, f = ve(u, r), m = Math.exp(-h);
    return re - d / f * m;
  }, o = (u) => {
    const h = u * r * t, d = h * n + n, f = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), v = ve(Math.pow(u, 2), r);
    return (-i(u) + re > 0 ? -1 : 1) * ((d - f) * m) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -re + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = uo(i, o, a);
  if (t = $(t), isNaN(l)) return { stiffness: D.stiffness, damping: D.damping, duration: t };
  {
    const u = Math.pow(l, 2) * s;
    return { stiffness: u, damping: r * 2 * Math.sqrt(s * u), duration: t };
  }
}
const co = 12;
function uo(t, e, n) {
  let s = n;
  for (let i = 1; i < co; i++) s = s - t(s) / e(s);
  return s;
}
function ve(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ho = ["duration", "bounce"], fo = ["stiffness", "damping", "mass"];
function An(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function po(t) {
  let e = { velocity: D.velocity, stiffness: D.stiffness, damping: D.damping, mass: D.mass, isResolvedFromDuration: false, ...t };
  if (!An(t, fo) && An(t, ho)) if (t.visualDuration) {
    const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * X(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
    e = { ...e, mass: D.mass, stiffness: i, damping: o };
  } else {
    const n = lo(t);
    e = { ...e, ...n, mass: D.mass }, e.isResolvedFromDuration = true;
  }
  return e;
}
function $t(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: false, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: f } = po({ ...n, velocity: -H(n.velocity || 0) }), m = d || 0, v = u / (2 * Math.sqrt(l * c)), k = r - o, g = H(Math.sqrt(l / c)), M = Math.abs(k) < 5;
  s || (s = M ? D.restSpeed.granular : D.restSpeed.default), i || (i = M ? D.restDelta.granular : D.restDelta.default);
  let x;
  if (v < 1) {
    const T = ve(g, v);
    x = (A) => {
      const C = Math.exp(-v * g * A);
      return r - C * ((m + v * g * k) / T * Math.sin(T * A) + k * Math.cos(T * A));
    };
  } else if (v === 1) x = (T) => r - Math.exp(-g * T) * (k + (m + g * k) * T);
  else {
    const T = g * Math.sqrt(v * v - 1);
    x = (A) => {
      const C = Math.exp(-v * g * A), P = Math.min(T * A, 300);
      return r - C * ((m + v * g * k) * Math.sinh(P) + T * k * Math.cosh(P)) / T;
    };
  }
  const b = { calculatedDuration: f && h || null, next: (T) => {
    const A = x(T);
    if (f) a.done = T >= h;
    else {
      let C = T === 0 ? m : 0;
      v < 1 && (C = T === 0 ? $(m) : li(x, T, A));
      const P = Math.abs(C) <= s, L = Math.abs(r - A) <= i;
      a.done = P && L;
    }
    return a.value = a.done ? r : A, a;
  }, toString: () => {
    const T = Math.min(Je(b), qt), A = ai((C) => b.next(T * C).value, T, 30);
    return T + "ms " + A;
  }, toTransition: () => {
  } };
  return b;
}
$t.applyToOptions = (t) => {
  const e = oo(t, 100, $t);
  return t.ease = e.ease, t.duration = $(e.duration), t.type = "keyframes", t;
};
function xe({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = { done: false, value: h }, f = (P) => a !== void 0 && P < a || l !== void 0 && P > l, m = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let v = n * e;
  const k = h + v, g = r === void 0 ? k : r(k);
  g !== k && (v = g - h);
  const M = (P) => -v * Math.exp(-P / s), x = (P) => g + M(P), b = (P) => {
    const L = M(P), I = x(P);
    d.done = Math.abs(L) <= u, d.value = d.done ? g : I;
  };
  let T, A;
  const C = (P) => {
    f(d.value) && (T = P, A = $t({ keyframes: [d.value, m(d.value)], velocity: li(x, P, d.value), damping: i, stiffness: o, restDelta: u, restSpeed: c }));
  };
  return C(0), { calculatedDuration: null, next: (P) => {
    let L = false;
    return !A && T === void 0 && (L = true, b(P), C(P)), T !== void 0 && P >= T ? A.next(P - T) : (!L && b(P), d);
  } };
}
function mo(t, e, n) {
  const s = [], i = n || Y.mix || oi, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || W : e;
      a = Et(l, a);
    }
    s.push(a);
  }
  return s;
}
function yo(t, e, { clamp: n = true, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (We(o === e.length), o === 1) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = mo(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0]) return e[0];
    let h = 0;
    if (l > 1) for (; h < t.length - 2 && !(c < t[h + 1]); h++) ;
    const d = Ct(t[h], t[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(X(t[0], t[o - 1], c)) : u;
}
function go(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Ct(0, e, s);
    t.push(V(n, 1, i));
  }
}
function vo(t) {
  const e = [0];
  return go(e, t.length - 1), e;
}
function xo(t, e) {
  return t.map((n) => n * e);
}
function ko(t, e) {
  return t.map(() => e || Xs).splice(0, t.length - 1);
}
function Pt({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = Dr(s) ? s.map(Mn) : Mn(s), o = { done: false, value: e[0] }, r = xo(n && n.length === e.length ? n : vo(e), t), a = yo(r, e, { ease: Array.isArray(i) ? i : ko(e, i) });
  return { calculatedDuration: t, next: (l) => (o.value = a(l), o.done = l >= t, o) };
}
const Mo = (t) => t !== null;
function Qe(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Mo), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const To = { decay: xe, inertia: xe, tween: Pt, keyframes: Pt, spring: $t };
function ci(t) {
  typeof t.type == "string" && (t.type = To[t.type]);
}
class tn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const wo = (t) => t / 100;
class en extends tn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var _a2, _b;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== z.now() && this.tick(z.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b = (_a2 = this.options).onStop) == null ? void 0 : _b.call(_a2));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    ci(e);
    const { type: n = Pt, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Pt;
    l !== Pt && typeof a[0] != "number" && (this.mixKeyframes = Et(wo, oi(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({ ...e, keyframes: [...a].reverse(), velocity: -r })), u.calculatedDuration === null && (u.calculatedDuration = Je(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = false) {
    const { generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null) return s.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: d, repeatDelay: f, type: m, onUpdate: v, finalKeyframe: k } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), M = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let x = this.currentTime, b = s;
    if (h) {
      const P = Math.min(this.currentTime, i) / a;
      let L = Math.floor(P), I = P % 1;
      !I && P >= 1 && (I = 1), I === 1 && L--, L = Math.min(L, h + 1), !!(L % 2) && (d === "reverse" ? (I = 1 - I, f && (I -= f / a)) : d === "mirror" && (b = r)), x = X(0, 1, I) * a;
    }
    const T = M ? { done: false, value: c[0] } : b.next(x);
    o && (T.value = o(T.value));
    let { done: A } = T;
    !M && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return C && m !== xe && (T.value = Qe(c, this.options, k, this.speed)), v && v(T.value), C && this.finish(), T;
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return H(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + H(e);
  }
  get time() {
    return H(this.currentTime);
  }
  set time(e) {
    var _a2;
    e = $(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (_a2 = this.driver) == null ? void 0 : _a2.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(z.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = H(this.currentTime));
  }
  play() {
    var _a2, _b;
    if (this.isStopped) return;
    const { driver: e = ro, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), (_b = (_a2 = this.options).onPlay) == null ? void 0 : _b.call(_a2);
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(z.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var _a2, _b;
    this.notifyFinished(), this.teardown(), this.state = "finished", (_b = (_a2 = this.options).onComplete) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    var _a2, _b;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b = (_a2 = this.options).onCancel) == null ? void 0 : _b.call(_a2);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, true);
  }
  attachTimeline(e) {
    var _a2;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a2 = this.driver) == null ? void 0 : _a2.stop(), e.observe(this);
  }
}
function Po(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const ot = (t) => t * 180 / Math.PI, ke = (t) => {
  const e = ot(Math.atan2(t[1], t[0]));
  return Me(e);
}, bo = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2, rotate: ke, rotateZ: ke, skewX: (t) => ot(Math.atan(t[1])), skewY: (t) => ot(Math.atan(t[2])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2 }, Me = (t) => (t = t % 360, t < 0 && (t += 360), t), Cn = ke, Sn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Vn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Ao = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Sn, scaleY: Vn, scale: (t) => (Sn(t) + Vn(t)) / 2, rotateX: (t) => Me(ot(Math.atan2(t[6], t[5]))), rotateY: (t) => Me(ot(Math.atan2(-t[2], t[0]))), rotateZ: Cn, rotate: Cn, skewX: (t) => ot(Math.atan(t[4])), skewY: (t) => ot(Math.atan(t[1])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2 };
function Te(t) {
  return t.includes("scale") ? 1 : 0;
}
function we(t, e) {
  if (!t || t === "none") return Te(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) s = Ao, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = bo, i = a;
  }
  if (!i) return Te(e);
  const o = s[e], r = i[1].split(",").map(So);
  return typeof o == "function" ? o(r) : r[o];
}
const Co = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return we(n, e);
};
function So(t) {
  return parseFloat(t.trim());
}
const xt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], kt = new Set(xt), Dn = (t) => t === vt || t === w, Vo = /* @__PURE__ */ new Set(["x", "y", "z"]), Do = xt.filter((t) => !Vo.has(t));
function Ro(t) {
  const e = [];
  return Do.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const at = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: (t, { transform: e }) => we(e, "x"), y: (t, { transform: e }) => we(e, "y") };
at.translateX = at.x;
at.translateY = at.y;
const lt = /* @__PURE__ */ new Set();
let Pe = false, be = false, Ae = false;
function ui() {
  if (be) {
    const t = Array.from(lt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = Ro(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var _a2;
        (_a2 = s.getValue(o)) == null ? void 0 : _a2.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  be = false, Pe = false, lt.forEach((t) => t.complete(Ae)), lt.clear();
}
function hi() {
  lt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (be = true);
  });
}
function Eo() {
  Ae = true, hi(), ui(), Ae = false;
}
class nn {
  constructor(e, n, s, i, o, r = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (lt.add(this), Pe || (Pe = true, S.read(hi), S.resolveKeyframes(ui))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(), r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    Po(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), lt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (lt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Lo = (t) => t.startsWith("--");
function jo(t, e, n) {
  Lo(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Bo = Ke(() => window.ScrollTimeline !== void 0), Fo = {};
function Io(t, e) {
  const n = Ke(t);
  return () => Fo[e] ?? n();
}
const di = Io(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), Tt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, Rn = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: Tt([0, 0.65, 0.55, 1]), circOut: Tt([0.55, 0, 1, 0.45]), backIn: Tt([0.31, 0.01, 0.66, -0.59]), backOut: Tt([0.33, 1.53, 0.69, 0.99]) };
function fi(t, e) {
  if (t) return typeof t == "function" ? di() ? ai(t, e) : "ease-out" : Ys(t) ? Tt(t) : Array.isArray(t) ? t.map((n) => fi(n, e) || Rn.easeOut) : Rn[t];
}
function Oo(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = { [e]: n };
  l && (c.offset = l);
  const h = fi(a, i);
  Array.isArray(h) && (c.easing = h);
  const d = { delay: s, duration: i, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: o + 1, direction: r === "reverse" ? "alternate" : "normal" };
  return u && (d.pseudoElement = u), t.animate(c, d);
}
function pi(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function zo({ type: t, ...e }) {
  return pi(t) && di() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class No extends tn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = false, !e) return;
    const { element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r = false, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, We(typeof e.type != "string");
    const u = zo(e);
    this.animation = Oo(n, s, i, u, o), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Qe(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : jo(n, s, c), this.animation.cancel();
      }
      l == null ? void 0 : l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var _a2, _b;
    (_b = (_a2 = this.animation).finish) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var _a2, _b;
    this.isPseudoElement || ((_b = (_a2 = this.animation).commitStyles) == null ? void 0 : _b.call(_a2));
  }
  get duration() {
    var _a2, _b;
    const e = ((_b = (_a2 = this.animation.effect) == null ? void 0 : _a2.getComputedTiming) == null ? void 0 : _b.call(_a2).duration) || 0;
    return H(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + H(e);
  }
  get time() {
    return H(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = $(e);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    var _a2;
    return this.allowFlatten && ((_a2 = this.animation.effect) == null ? void 0 : _a2.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && Bo() ? (this.animation.timeline = e, W) : n(this);
  }
}
const mi = { anticipate: $s, backInOut: qs, circInOut: Gs };
function Uo(t) {
  return t in mi;
}
function Ho(t) {
  typeof t.ease == "string" && Uo(t.ease) && (t.ease = mi[t.ease]);
}
const En = 10;
class Wo extends No {
  constructor(e) {
    Ho(e), ci(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new en({ ...r, autoplay: false }), l = $(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - En).value, a.sample(l).value, En), a.stop();
  }
}
const Ln = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (tt.test(t) || t === "0") && !t.startsWith("url("));
function Ko(t) {
  const e = t[0];
  if (t.length === 1) return true;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
}
function qo(t, e, n, s) {
  const i = t[0];
  if (i === null) return false;
  if (e === "display" || e === "visibility") return true;
  const o = t[t.length - 1], r = Ln(i, e), a = Ln(o, e);
  return !r || !a ? false : Ko(t) || (n === "spring" || pi(n)) && s;
}
function Ce(t) {
  t.duration = 0, t.type = "keyframes";
}
const $o = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), _o = Ke(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Go(t) {
  var _a2;
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r } = t;
  if (!(((_a2 = e == null ? void 0 : e.owner) == null ? void 0 : _a2.current) instanceof HTMLElement)) return false;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return _o() && n && $o.has(n) && (n !== "transform" || !u) && !l && !s && i !== "mirror" && o !== 0 && r !== "inertia";
}
const Xo = 40;
class Yo extends tn {
  constructor({ autoplay: e = true, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    var _a2;
    super(), this.stop = () => {
      var _a3, _b;
      this._animation && (this._animation.stop(), (_a3 = this.stopTimeline) == null ? void 0 : _a3.call(this)), (_b = this.keyframeResolver) == null ? void 0 : _b.cancel();
    }, this.createdAt = z.now();
    const d = { autoplay: e, delay: n, type: s, repeat: i, repeatDelay: o, repeatType: r, name: l, motionValue: u, element: c, ...h }, f = (c == null ? void 0 : c.KeyframeResolver) || nn;
    this.keyframeResolver = new f(a, (m, v, k) => this.onKeyframesResolved(m, v, d, !k), l, u, c), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = z.now(), qo(e, o, r, a) || ((Y.instantAnimations || !l) && (c == null ? void 0 : c(Qe(e, s, n))), e[0] = e[e.length - 1], Ce(s), s.repeat = 0);
    const d = { startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Xo ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: n, ...s, keyframes: e }, f = !u && Go(d) ? new Wo({ ...d, element: d.motionValue.owner.current }) : new en(d);
    f.finished.then(() => this.notifyFinished()).catch(W), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var _a2;
    return this._animation || ((_a2 = this.keyframeResolver) == null ? void 0 : _a2.resume(), Eo()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var _a2;
    this._animation && this.animation.cancel(), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.cancel();
  }
}
const Zo = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jo(t) {
  const e = Zo.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function yi(t, e, n = 1) {
  const [s, i] = Jo(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Is(r) ? parseFloat(r) : r;
  }
  return Ge(i) ? yi(i, e, n + 1) : i;
}
function sn(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const gi = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...xt]), Qo = { test: (t) => t === "auto", parse: (t) => t }, vi = (t) => (e) => e.test(t), xi = [vt, w, _, J, Wr, Hr, Qo], jn = (t) => xi.find(vi(t));
function ta(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || zs(t) : true;
}
const ea = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function na(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(Xe) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = ea.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const sa = /\b([a-z-]*)\(.*?\)/gu, Se = { ...tt, getAnimatableNone: (t) => {
  const e = t.match(sa);
  return e ? e.map(na).join(" ") : t;
} }, Bn = { ...vt, transform: Math.round }, ia = { rotate: J, rotateX: J, rotateY: J, rotateZ: J, scale: It, scaleX: It, scaleY: It, scaleZ: It, skew: J, skewX: J, skewY: J, distance: w, translateX: w, translateY: w, translateZ: w, x: w, y: w, z: w, perspective: w, transformPerspective: w, opacity: St, originX: Tn, originY: Tn, originZ: w }, rn = { borderWidth: w, borderTopWidth: w, borderRightWidth: w, borderBottomWidth: w, borderLeftWidth: w, borderRadius: w, radius: w, borderTopLeftRadius: w, borderTopRightRadius: w, borderBottomRightRadius: w, borderBottomLeftRadius: w, width: w, maxWidth: w, height: w, maxHeight: w, top: w, right: w, bottom: w, left: w, padding: w, paddingTop: w, paddingRight: w, paddingBottom: w, paddingLeft: w, margin: w, marginTop: w, marginRight: w, marginBottom: w, marginLeft: w, backgroundPositionX: w, backgroundPositionY: w, ...ia, zIndex: Bn, fillOpacity: St, strokeOpacity: St, numOctaves: Bn }, ra = { ...rn, color: R, backgroundColor: R, outlineColor: R, fill: R, stroke: R, borderColor: R, borderTopColor: R, borderRightColor: R, borderBottomColor: R, borderLeftColor: R, filter: Se, WebkitFilter: Se }, ki = (t) => ra[t];
function Mi(t, e) {
  let n = ki(t);
  return n !== Se && (n = tt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const oa = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function aa(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !oa.has(o) && Vt(o).values.length && (i = t[s]), s++;
  }
  if (i && n) for (const o of e) t[o] = Mi(n, i);
}
class la extends nn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Ge(u))) {
        const c = yi(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !gi.has(s) || e.length !== 2) return;
    const [i, o] = e, r = jn(i), a = jn(o);
    if (r !== a) if (Dn(r) && Dn(a)) for (let l = 0; l < e.length; l++) {
      const u = e[l];
      typeof u == "string" && (e[l] = parseFloat(u));
    }
    else at[s] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || ta(e[i])) && s.push(i);
    s.length && aa(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = at[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, false);
  }
  measureEndState() {
    var _a2;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, false);
    const o = s.length - 1, r = s[o];
    s[o] = at[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), ((_a2 = this.removedTransforms) == null ? void 0 : _a2.length) && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function ca(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let s = document;
    const i = (n == null ? void 0 : n[t]) ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const Ti = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function wi(t) {
  return Os(t) && "offsetHeight" in t;
}
const Fn = 30, ua = (t) => !isNaN(parseFloat(t));
class ha {
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      var _a2;
      const i = z.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && ((_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current), this.dependents)) for (const o of this.dependents) o.dirty();
    }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = z.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ua(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new qe());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), S.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  jump(e, n = true) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var _a2;
    (_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = z.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Fn) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fn);
    return Ns(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = true, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var _a2, _b;
    (_a2 = this.dependents) == null ? void 0 : _a2.clear(), (_b = this.events.destroy) == null ? void 0 : _b.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yt(t, e) {
  return new ha(t, e);
}
const { schedule: on } = Zs(queueMicrotask, false), q = { x: false, y: false };
function Pi() {
  return q.x || q.y;
}
function da(t) {
  return t === "x" || t === "y" ? q[t] ? null : (q[t] = true, () => {
    q[t] = false;
  }) : q.x || q.y ? null : (q.x = q.y = true, () => {
    q.x = q.y = false;
  });
}
function bi(t, e) {
  const n = ca(t), s = new AbortController(), i = { passive: true, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function In(t) {
  return !(t.pointerType === "touch" || Pi());
}
function fa(t, e, n = {}) {
  const [s, i, o] = bi(t, n), r = (a) => {
    if (!In(a)) return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l) return;
    const c = (h) => {
      In(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const Ai = (t, e) => e ? t === e ? true : Ai(t, e.parentElement) : false, an = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, pa = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ma(t) {
  return pa.has(t.tagName) || t.tabIndex !== -1;
}
const Ut = /* @__PURE__ */ new WeakSet();
function On(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function oe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: true, bubbles: true }));
}
const ya = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = On(() => {
    if (Ut.has(n)) return;
    oe(n, "down");
    const i = On(() => {
      oe(n, "up");
    }), o = () => oe(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function zn(t) {
  return an(t) && !Pi();
}
function ga(t, e, n = {}) {
  const [s, i, o] = bi(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!zn(a)) return;
    Ut.add(l);
    const u = e(l, a), c = (f, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), Ut.has(l) && Ut.delete(l), zn(f) && typeof u == "function" && u(f, { success: m });
    }, h = (f) => {
      c(f, l === window || l === document || n.useGlobalTarget || Ai(l, f.target));
    }, d = (f) => {
      c(f, false);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", d, i);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), wi(a) && (a.addEventListener("focus", (u) => ya(u, i)), !ma(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Ci(t) {
  return Os(t) && "ownerSVGElement" in t;
}
function va(t) {
  return Ci(t) && t.tagName === "svg";
}
const F = (t) => !!(t && t.getVelocity), xa = [...xi, R, tt], ka = (t) => xa.find(vi(t)), ln = y.createContext({ transformPagePoint: (t) => t, isStatic: false, reducedMotion: "never" });
function Nn(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Ma(...t) {
  return (e) => {
    let n = false;
    const s = t.map((i) => {
      const o = Nn(i, e);
      return !n && typeof o == "function" && (n = true), o;
    });
    if (n) return () => {
      for (let i = 0; i < s.length; i++) {
        const o = s[i];
        typeof o == "function" ? o() : Nn(t[i], null);
      }
    };
  };
}
function Ta(...t) {
  return y.useCallback(Ma(...t), t);
}
class wa extends y.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = wi(s) && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Pa({ children: t, isPresent: e, anchorX: n, root: s }) {
  const i = y.useId(), o = y.useRef(null), r = y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }), { nonce: a } = y.useContext(ln), l = Ta(o, t == null ? void 0 : t.ref);
  return y.useInsertionEffect(() => {
    const { width: u, height: c, top: h, left: d, right: f } = r.current;
    if (e || !o.current || !u || !c) return;
    const m = n === "left" ? `left: ${d}` : `right: ${f}`;
    o.current.dataset.motionPopId = i;
    const v = document.createElement("style");
    a && (v.nonce = a);
    const k = s ?? document.head;
    return k.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${m}px !important;
            top: ${h}px !important;
          }
        `), () => {
      k.contains(v) && k.removeChild(v);
    };
  }, [e]), G.jsx(wa, { isPresent: e, childRef: o, sizeRef: r, children: y.cloneElement(t, { ref: l }) });
}
const ba = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = ze(Aa), c = y.useId();
  let h = true, d = y.useMemo(() => (h = false, { id: c, initial: e, isPresent: n, custom: i, onExitComplete: (f) => {
    u.set(f, true);
    for (const m of u.values()) if (!m) return;
    s && s();
  }, register: (f) => (u.set(f, false), () => u.delete(f)) }), [n, u, s]);
  return o && h && (d = { ...d }), y.useMemo(() => {
    u.forEach((f, m) => u.set(m, false));
  }, [n]), y.useEffect(() => {
    !n && !u.size && s && s();
  }, [n]), r === "popLayout" && (t = G.jsx(Pa, { isPresent: n, anchorX: a, root: l, children: t })), G.jsx(Zt.Provider, { value: d, children: t });
};
function Aa() {
  return /* @__PURE__ */ new Map();
}
function Si(t = true) {
  const e = y.useContext(Zt);
  if (e === null) return [true, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = y.useId();
  y.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = y.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [false, r] : [true];
}
const Ot = (t) => t.key || "";
function Un(t) {
  const e = [];
  return y.Children.forEach(t, (n) => {
    y.isValidElement(n) && e.push(n);
  }), e;
}
const lu = ({ children: t, custom: e, initial: n = true, onExitComplete: s, presenceAffectsLayout: i = true, mode: o = "sync", propagate: r = false, anchorX: a = "left", root: l }) => {
  const [u, c] = Si(r), h = y.useMemo(() => Un(t), [t]), d = r && !u ? [] : h.map(Ot), f = y.useRef(true), m = y.useRef(h), v = ze(() => /* @__PURE__ */ new Map()), [k, g] = y.useState(h), [M, x] = y.useState(h);
  Fs(() => {
    f.current = false, m.current = h;
    for (let A = 0; A < M.length; A++) {
      const C = Ot(M[A]);
      d.includes(C) ? v.delete(C) : v.get(C) !== true && v.set(C, false);
    }
  }, [M, d.length, d.join("-")]);
  const b = [];
  if (h !== k) {
    let A = [...h];
    for (let C = 0; C < M.length; C++) {
      const P = M[C], L = Ot(P);
      d.includes(L) || (A.splice(C, 0, P), b.push(P));
    }
    return o === "wait" && b.length && (A = b), x(Un(A)), g(h), null;
  }
  const { forceRender: T } = y.useContext(Oe);
  return G.jsx(G.Fragment, { children: M.map((A) => {
    const C = Ot(A), P = r && !u ? false : h === M || d.includes(C), L = () => {
      if (v.has(C)) v.set(C, true);
      else return;
      let I = true;
      v.forEach((Z) => {
        Z || (I = false);
      }), I && (T == null ? void 0 : T(), x(m.current), r && (c == null ? void 0 : c()), s && s());
    };
    return G.jsx(ba, { isPresent: P, initial: !f.current || n ? void 0 : false, custom: e, presenceAffectsLayout: i, mode: o, root: l, onExitComplete: P ? void 0 : L, anchorX: a, children: A }, C);
  }) });
}, Vi = y.createContext({ strict: false }), Hn = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, gt = {};
for (const t in Hn) gt[t] = { isEnabled: (e) => Hn[t].some((n) => !!e[n]) };
function Ca(t) {
  for (const e in t) gt[e] = { ...gt[e], ...t[e] };
}
const Sa = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function _t(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Sa.has(t);
}
let Di = (t) => !_t(t);
function Va(t) {
  typeof t == "function" && (Di = (e) => e.startsWith("on") ? !_t(e) : t(e));
}
try {
  Va(require("@emotion/is-prop-valid").default);
} catch {
}
function Da(t, e, n) {
  const s = {};
  for (const i in t) i === "values" && typeof t.values == "object" || (Di(i) || n === true && _t(i) || !e && !_t(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const Jt = y.createContext({});
function Qt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Dt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const cn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], un = ["initial", ...cn];
function te(t) {
  return Qt(t.animate) || un.some((e) => Dt(t[e]));
}
function Ri(t) {
  return !!(te(t) || t.variants);
}
function Ra(t, e) {
  if (te(t)) {
    const { initial: n, animate: s } = t;
    return { initial: n === false || Dt(n) ? n : void 0, animate: Dt(s) ? s : void 0 };
  }
  return t.inherit !== false ? e : {};
}
function Ea(t) {
  const { initial: e, animate: n } = Ra(t, y.useContext(Jt));
  return y.useMemo(() => ({ initial: e, animate: n }), [Wn(e), Wn(n)]);
}
function Wn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
function Kn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Mt = { correct: (t, e) => {
  if (!e.target) return t;
  if (typeof t == "string") if (w.test(t)) t = parseFloat(t);
  else return t;
  const n = Kn(t, e.target.x), s = Kn(t, e.target.y);
  return `${n}% ${s}%`;
} }, La = { correct: (t, { treeScale: e, projectionDelta: n }) => {
  const s = t, i = tt.parse(t);
  if (i.length > 5) return s;
  const o = tt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
  i[0 + r] /= a, i[1 + r] /= l;
  const u = V(a, l, 0.5);
  return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
} }, Ve = { borderRadius: { ...Mt, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: Mt, borderTopRightRadius: Mt, borderBottomLeftRadius: Mt, borderBottomRightRadius: Mt, boxShadow: La };
function Ei(t, { layout: e, layoutId: n }) {
  return kt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ve[t] || t === "opacity");
}
const ja = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, Ba = xt.length;
function Fa(t, e, n) {
  let s = "", i = true;
  for (let o = 0; o < Ba; o++) {
    const r = xt[o], a = t[r];
    if (a === void 0) continue;
    let l = true;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Ti(a, rn[r]);
      if (!l) {
        i = false;
        const c = ja[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function hn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = false, a = false;
  for (const l in e) {
    const u = e[l];
    if (kt.has(l)) {
      r = true;
      continue;
    } else if (Qs(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Ti(u, rn[l]);
      l.startsWith("origin") ? (a = true, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = Fa(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const dn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Li(t, e, n) {
  for (const s in e) !F(e[s]) && !Ei(s, n) && (t[s] = e[s]);
}
function Ia({ transformTemplate: t }, e) {
  return y.useMemo(() => {
    const n = dn();
    return hn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Oa(t, e) {
  const n = t.style || {}, s = {};
  return Li(s, n, t), Object.assign(s, Ia(t, e)), s;
}
function za(t, e) {
  const n = {}, s = Oa(t, e);
  return t.drag && t.dragListener !== false && (n.draggable = false, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Na = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, Ua = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Ha(t, e, n = 1, s = 0, i = true) {
  t.pathLength = 1;
  const o = i ? Na : Ua;
  t[o.offset] = w.transform(-s);
  const r = w.transform(e), a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function ji(t, { attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o = 1, pathOffset: r = 0, ...a }, l, u, c) {
  if (hn(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d } = t;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && (h.scale = s), i !== void 0 && Ha(h, i, o, r, false);
}
const Bi = () => ({ ...dn(), attrs: {} }), Fi = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Wa(t, e, n, s) {
  const i = y.useMemo(() => {
    const o = Bi();
    return ji(o, e, Fi(s), t.transformTemplate, t.style), { ...o.attrs, style: { ...o.style } };
  }, [e]);
  if (t.style) {
    const o = {};
    Li(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const Ka = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function fn(t) {
  return typeof t != "string" || t.includes("-") ? false : !!(Ka.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function qa(t, e, n, { latestValues: s }, i, o = false) {
  const a = (fn(t) ? Wa : za)(e, s, i, t), l = Da(e, typeof t == "string", o), u = t !== y.Fragment ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = y.useMemo(() => F(c) ? c.get() : c, [c]);
  return y.createElement(t, { ...u, children: h });
}
function qn(t) {
  const e = [{}, {}];
  return t == null ? void 0 : t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function pn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = qn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = qn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function Ht(t) {
  return F(t) ? t.get() : t;
}
function $a({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: _a(n, s, i, t), renderState: e() };
}
function _a(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const d in o) i[d] = Ht(o[d]);
  let { initial: r, animate: a } = t;
  const l = te(t), u = Ri(t);
  e && u && !l && t.inherit !== false && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === false : false;
  c = c || r === false;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Qt(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const m = pn(t, d[f]);
      if (m) {
        const { transitionEnd: v, transition: k, ...g } = m;
        for (const M in g) {
          let x = g[M];
          if (Array.isArray(x)) {
            const b = c ? x.length - 1 : 0;
            x = x[b];
          }
          x !== null && (i[M] = x);
        }
        for (const M in v) i[M] = v[M];
      }
    }
  }
  return i;
}
const Ii = (t) => (e, n) => {
  const s = y.useContext(Jt), i = y.useContext(Zt), o = () => $a(t, e, s, i);
  return n ? o() : ze(o);
};
function mn(t, e, n) {
  var _a2;
  const { style: s } = t, i = {};
  for (const o in s) (F(s[o]) || e.style && F(e.style[o]) || Ei(o, t) || ((_a2 = n == null ? void 0 : n.getValue(o)) == null ? void 0 : _a2.liveStyle) !== void 0) && (i[o] = s[o]);
  return i;
}
const Ga = Ii({ scrapeMotionValuesFromProps: mn, createRenderState: dn });
function Oi(t, e, n) {
  const s = mn(t, e, n);
  for (const i in t) if (F(t[i]) || F(e[i])) {
    const o = xt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
    s[o] = t[i];
  }
  return s;
}
const Xa = Ii({ scrapeMotionValuesFromProps: Oi, createRenderState: Bi }), Ya = Symbol.for("motionComponentSymbol");
function ht(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Za(t, e, n) {
  return y.useCallback((s) => {
    s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : ht(n) && (n.current = s));
  }, [e]);
}
const yn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ja = "framerAppearId", zi = "data-" + yn(Ja), Ni = y.createContext({});
function Qa(t, e, n, s, i) {
  var _a2, _b;
  const { visualElement: o } = y.useContext(Jt), r = y.useContext(Vi), a = y.useContext(Zt), l = y.useContext(ln).reducedMotion, u = y.useRef(null);
  s = s || r.renderer, !u.current && s && (u.current = s(t, { visualState: e, parent: o, props: n, presenceContext: a, blockInitialAnimation: a ? a.initial === false : false, reducedMotionConfig: l }));
  const c = u.current, h = y.useContext(Ni);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && tl(u.current, n, i, h);
  const d = y.useRef(false);
  y.useInsertionEffect(() => {
    c && d.current && c.update(n, a);
  });
  const f = n[zi], m = y.useRef(!!f && !((_a2 = window.MotionHandoffIsComplete) == null ? void 0 : _a2.call(window, f)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, f)));
  return Fs(() => {
    c && (d.current = true, window.MotionIsMounted = true, c.updateFeatures(), c.scheduleRenderMicrotask(), m.current && c.animationState && c.animationState.animateChanges());
  }), y.useEffect(() => {
    c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var _a3;
      (_a3 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a3.call(window, f);
    }), m.current = false), c.enteringChildren = void 0);
  }), c;
}
function tl(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ui(t.parent)), t.projection.setOptions({ layoutId: i, layout: o, alwaysMeasureLayout: !!r || a && ht(a), visualElement: t, animationType: typeof o == "string" ? o : "both", initialPromotionConfig: s, crossfade: c, layoutScroll: l, layoutRoot: u });
}
function Ui(t) {
  if (t) return t.options.allowProjection !== false ? t.projection : Ui(t.parent);
}
function ae(t, { forwardMotionProps: e = false } = {}, n, s) {
  n && Ca(n);
  const i = fn(t) ? Xa : Ga;
  function o(a, l) {
    let u;
    const c = { ...y.useContext(ln), ...a, layoutId: el(a) }, { isStatic: h } = c, d = Ea(a), f = i(a, h);
    if (!h && Ne) {
      nl();
      const m = sl(c);
      u = m.MeasureLayout, d.visualElement = Qa(t, f, c, s, m.ProjectionNode);
    }
    return G.jsxs(Jt.Provider, { value: d, children: [u && d.visualElement ? G.jsx(u, { visualElement: d.visualElement, ...c }) : null, qa(t, a, Za(f, d.visualElement, l), f, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = y.forwardRef(o);
  return r[Ya] = t, r;
}
function el({ layoutId: t }) {
  const e = y.useContext(Oe).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function nl(t, e) {
  y.useContext(Vi).strict;
}
function sl(t) {
  const { drag: e, layout: n } = gt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return { MeasureLayout: (e == null ? void 0 : e.isEnabled(t)) || (n == null ? void 0 : n.isEnabled(t)) ? s.MeasureLayout : void 0, ProjectionNode: s.ProjectionNode };
}
function il(t, e) {
  if (typeof Proxy > "u") return ae;
  const n = /* @__PURE__ */ new Map(), s = (o, r) => ae(o, r, t, e), i = (o, r) => s(o, r);
  return new Proxy(i, { get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, ae(r, void 0, t, e)), n.get(r)) });
}
function Hi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function rl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ol(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function le(t) {
  return t === void 0 || t === 1;
}
function De({ scale: t, scaleX: e, scaleY: n }) {
  return !le(t) || !le(e) || !le(n);
}
function it(t) {
  return De(t) || Wi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Wi(t) {
  return $n(t.x) || $n(t.y);
}
function $n(t) {
  return t && t !== "0%";
}
function Gt(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function _n(t, e, n, s, i) {
  return i !== void 0 && (t = Gt(t, i, s)), Gt(t, n, s) + e;
}
function Re(t, e = 0, n = 1, s, i) {
  t.min = _n(t.min, e, n, s, i), t.max = _n(t.max, e, n, s, i);
}
function Ki(t, { x: e, y: n }) {
  Re(t.x, e.translate, e.scale, e.originPoint), Re(t.y, n.translate, n.scale, n.originPoint);
}
const Gn = 0.999999999999, Xn = 1.0000000000001;
function al(t, e, n, s = false) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && ft(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ki(t, r)), s && it(o.latestValues) && ft(t, o.latestValues));
  }
  e.x < Xn && e.x > Gn && (e.x = 1), e.y < Xn && e.y > Gn && (e.y = 1);
}
function dt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Yn(t, e, n, s, i = 0.5) {
  const o = V(t.min, t.max, i);
  Re(t, e, n, o, s);
}
function ft(t, e) {
  Yn(t.x, e.x, e.scaleX, e.scale, e.originX), Yn(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function qi(t, e) {
  return Hi(ol(t.getBoundingClientRect(), e));
}
function ll(t, e, n) {
  const s = qi(t, n), { scroll: i } = e;
  return i && (dt(s.x, i.offset.x), dt(s.y, i.offset.y)), s;
}
const Zn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), pt = () => ({ x: Zn(), y: Zn() }), Jn = () => ({ min: 0, max: 0 }), E = () => ({ x: Jn(), y: Jn() }), Ee = { current: null }, $i = { current: false };
function cl() {
  if ($i.current = true, !!Ne) if (window.matchMedia) {
    const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ee.current = t.matches;
    t.addEventListener("change", e), e();
  } else Ee.current = false;
}
const ul = /* @__PURE__ */ new WeakMap();
function hl(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (F(i)) t.addValue(s, i);
    else if (F(o)) t.addValue(s, yt(i, { owner: t }));
    else if (o !== i) if (t.hasValue(s)) {
      const r = t.getValue(s);
      r.liveStyle === true ? r.jump(i) : r.hasAnimated || r.set(i);
    } else {
      const r = t.getStaticValue(s);
      t.addValue(s, yt(r !== void 0 ? r : i, { owner: t }));
    }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Qn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class dl {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = nn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = z.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, S.render(this.render, false, true));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = te(n), this.isVariantNode = Ri(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && F(f) && f.set(l[d]);
    }
  }
  mount(e) {
    var _a2;
    this.current = e, ul.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), $i.current || cl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Ee.current, (_a2 = this.parent) == null ? void 0 : _a2.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var _a2;
    this.projection && this.projection.unmount(), Q(this.notifyUpdate), Q(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = false);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = kt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && S.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in gt) {
      const n = gt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Qn.length; s++) {
      const i = Qn[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = hl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = yt(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Is(s) || zs(s)) ? s = parseFloat(s) : !ka(s) && tt.test(n) && (s = Mi(e, n)), this.setBaseTarget(e, F(s) ? s.get() : s)), F(s) ? s.get() : s;
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var _a2;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = pn(this.props, n, (_a2 = this.presenceContext) == null ? void 0 : _a2.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !F(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new qe()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    on.render(this.render);
  }
}
class _i extends dl {
  constructor() {
    super(...arguments), this.KeyframeResolver = la;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Gi(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i == null ? void 0 : i.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function fl(t) {
  return window.getComputedStyle(t);
}
class pl extends _i {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Gi;
  }
  readValueFromInstance(e, n) {
    var _a2;
    if (kt.has(n)) return ((_a2 = this.projection) == null ? void 0 : _a2.isProjecting) ? Te(n) : Co(e, n);
    {
      const s = fl(e), i = (Qs(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return qi(e, n);
  }
  build(e, n, s) {
    hn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return mn(e, n, s);
  }
}
const Xi = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ml(t, e, n, s) {
  Gi(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Xi.has(i) ? i : yn(i), e.attrs[i]);
}
class yl extends _i {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = E;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (kt.has(n)) {
      const s = ki(n);
      return s && s.default || 0;
    }
    return n = Xi.has(n) ? n : yn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Oi(e, n, s);
  }
  build(e, n, s) {
    ji(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    ml(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Fi(e.tagName), super.mount(e);
  }
}
const gl = (t, e) => fn(t) ? new yl(e) : new pl(e, { allowProjection: t !== y.Fragment });
function mt(t, e, n) {
  const s = t.getProps();
  return pn(s, e, n !== void 0 ? n : s.custom, t);
}
const Le = (t) => Array.isArray(t);
function vl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, yt(n));
}
function xl(t) {
  return Le(t) ? t[t.length - 1] || 0 : t;
}
function kl(t, e) {
  const n = mt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = xl(o[r]);
    vl(t, r, a);
  }
}
function Ml(t) {
  return !!(F(t) && t.add);
}
function je(t, e) {
  const n = t.getValue("willChange");
  if (Ml(n)) return n.add(e);
  if (!n && Y.WillChange) {
    const s = new Y.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Yi(t) {
  return t.props[zi];
}
const Tl = (t) => t !== null;
function wl(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(Tl), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const Pl = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, bl = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), Al = { type: "keyframes", duration: 0.8 }, Cl = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Sl = (t, { keyframes: e }) => e.length > 2 ? Al : kt.has(t) ? t.startsWith("scale") ? bl(e[1]) : Pl : Cl;
function Vl({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const gn = (t, e, n, s = {}, i, o) => (r) => {
  const a = sn(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - $(l);
  const c = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: e.getVelocity(), ...a, delay: -u, onUpdate: (d) => {
    e.set(d), a.onUpdate && a.onUpdate(d);
  }, onComplete: () => {
    r(), a.onComplete && a.onComplete();
  }, name: t, motionValue: e, element: o ? void 0 : i };
  Vl(a) || Object.assign(c, Sl(t, c)), c.duration && (c.duration = $(c.duration)), c.repeatDelay && (c.repeatDelay = $(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = false;
  if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (Ce(c), c.delay === 0 && (h = true)), (Y.instantAnimations || Y.skipAnimations) && (h = true, Ce(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const d = wl(c.keyframes, a);
    if (d !== void 0) {
      S.update(() => {
        c.onUpdate(d), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new en(c) : new Yo(c);
};
function Dl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== true;
  return e[n] = false, s;
}
function Zi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), d = a[c];
    if (d === void 0 || u && Dl(u, c)) continue;
    const f = { delay: n, ...sn(o || {}, c) }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(d) && d === m && !f.velocity) continue;
    let v = false;
    if (window.MotionHandoffAnimation) {
      const g = Yi(t);
      if (g) {
        const M = window.MotionHandoffAnimation(g, c, S);
        M !== null && (f.startTime = M, v = true);
      }
    }
    je(t, c), h.start(gn(c, h, d, t.shouldReduceMotion && gi.has(c) ? { type: false } : f, t, v));
    const k = h.animation;
    k && l.push(k);
  }
  return r && Promise.all(l).then(() => {
    S.update(() => {
      r && kl(t, r);
    });
  }), l;
}
function Ji(t, e, n, s = 0, i = 1) {
  const o = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
function Be(t, e, n = {}) {
  var _a2;
  const s = mt(t, e, n.type === "exit" ? (_a2 = t.presenceContext) == null ? void 0 : _a2.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Zi(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = i;
    return Rl(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function Rl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(Be(l, e, { ...r, delay: n + (typeof s == "function" ? 0 : s) + Ji(t.variantChildren, l, s, i, o) }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function El(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Be(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = Be(t, e, n);
  else {
    const i = typeof e == "function" ? mt(t, e, n.custom) : e;
    s = Promise.all(Zi(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Qi(t, e) {
  if (!Array.isArray(e)) return false;
  const n = e.length;
  if (n !== t.length) return false;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return false;
  return true;
}
const Ll = un.length;
function tr(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? tr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Ll; n++) {
    const s = un[n], i = t.props[s];
    (Dt(i) || i === false) && (e[s] = i);
  }
  return e;
}
const jl = [...cn].reverse(), Bl = cn.length;
function Fl(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => El(t, n, s)));
}
function Il(t) {
  let e = Fl(t), n = ts(), s = true;
  const i = (l) => (u, c) => {
    var _a2;
    const h = mt(t, c, l === "exit" ? (_a2 = t.presenceContext) == null ? void 0 : _a2.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: f, ...m } = h;
      u = { ...u, ...m, ...f };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = tr(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, m = 1 / 0;
    for (let k = 0; k < Bl; k++) {
      const g = jl[k], M = n[g], x = u[g] !== void 0 ? u[g] : c[g], b = Dt(x), T = g === l ? M.isActive : null;
      T === false && (m = k);
      let A = x === c[g] && x !== u[g] && b;
      if (A && s && t.manuallyAnimateOnMount && (A = false), M.protectedKeys = { ...f }, !M.isActive && T === null || !x && !M.prevProp || Qt(x) || typeof x == "boolean") continue;
      const C = Ol(M.prevProp, x);
      let P = C || g === l && M.isActive && !A && b || k > m && b, L = false;
      const I = Array.isArray(x) ? x : [x];
      let Z = I.reduce(i(g), {});
      T === false && (Z = {});
      const { prevResolvedValues: vn = {} } = M, yr = { ...vn, ...Z }, xn = (j) => {
        P = true, d.has(j) && (L = true, d.delete(j)), M.needsAnimating[j] = true;
        const N = t.getValue(j);
        N && (N.liveStyle = false);
      };
      for (const j in yr) {
        const N = Z[j], nt = vn[j];
        if (f.hasOwnProperty(j)) continue;
        let ct = false;
        Le(N) && Le(nt) ? ct = !Qi(N, nt) : ct = N !== nt, ct ? N != null ? xn(j) : d.add(j) : N !== void 0 && d.has(j) ? xn(j) : M.protectedKeys[j] = true;
      }
      M.prevProp = x, M.prevResolvedValues = Z, M.isActive && (f = { ...f, ...Z }), s && t.blockInitialAnimation && (P = false);
      const kn = A && C;
      P && (!kn || L) && h.push(...I.map((j) => {
        const N = { type: g };
        if (typeof j == "string" && s && !kn && t.manuallyAnimateOnMount && t.parent) {
          const { parent: nt } = t, ct = mt(nt, j);
          if (nt.enteringChildren && ct) {
            const { delayChildren: gr } = ct.transition || {};
            N.delay = Ji(nt.enteringChildren, t, gr);
          }
        }
        return { animation: j, options: N };
      }));
    }
    if (d.size) {
      const k = {};
      if (typeof u.initial != "boolean") {
        const g = mt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (k.transition = g.transition);
      }
      d.forEach((g) => {
        const M = t.getBaseTarget(g), x = t.getValue(g);
        x && (x.liveStyle = true), k[g] = M ?? null;
      }), h.push({ animation: k });
    }
    let v = !!h.length;
    return s && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = false), s = false, v ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var _a2;
    if (n[l].isActive === u) return Promise.resolve();
    (_a2 = t.variantChildren) == null ? void 0 : _a2.forEach((h) => {
      var _a3;
      return (_a3 = h.animationState) == null ? void 0 : _a3.setActive(l, u);
    }), n[l].isActive = u;
    const c = r(l);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return { animateChanges: r, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => {
    n = ts();
  } };
}
function Ol(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Qi(e, t) : false;
}
function st(t = false) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ts() {
  return { animate: st(true), whileInView: st(), whileHover: st(), whileTap: st(), whileDrag: st(), whileFocus: st(), exit: st() };
}
class et {
  constructor(e) {
    this.isMounted = false, this.node = e;
  }
  update() {
  }
}
class zl extends et {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Il(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Qt(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var _a2;
    this.node.animationState.reset(), (_a2 = this.unmountControls) == null ? void 0 : _a2.call(this);
  }
}
let Nl = 0;
class Ul extends et {
  constructor() {
    super(...arguments), this.id = Nl++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Hl = { animation: { Feature: zl }, exit: { Feature: Ul } };
function Rt(t, e, n, s = { passive: true }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function Bt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Wl = (t) => (e) => an(e) && t(e, Bt(e));
function bt(t, e, n, s) {
  return Rt(t, e, Wl(n), s);
}
const er = 1e-4, Kl = 1 - er, ql = 1 + er, nr = 0.01, $l = 0 - nr, _l = 0 + nr;
function O(t) {
  return t.max - t.min;
}
function Gl(t, e, n) {
  return Math.abs(t - e) <= n;
}
function es(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = V(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = V(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Kl && t.scale <= ql || isNaN(t.scale)) && (t.scale = 1), (t.translate >= $l && t.translate <= _l || isNaN(t.translate)) && (t.translate = 0);
}
function At(t, e, n, s) {
  es(t.x, e.x, n.x, s ? s.originX : void 0), es(t.y, e.y, n.y, s ? s.originY : void 0);
}
function ns(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + O(e);
}
function Xl(t, e, n) {
  ns(t.x, e.x, n.x), ns(t.y, e.y, n.y);
}
function ss(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + O(e);
}
function Xt(t, e, n) {
  ss(t.x, e.x, n.x), ss(t.y, e.y, n.y);
}
function U(t) {
  return [t("x"), t("y")];
}
const sr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, is = (t, e) => Math.abs(t - e);
function Yl(t, e) {
  const n = is(t.x, e.x), s = is(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class ir {
  constructor(e, n, { transformPagePoint: s, contextWindow: i = window, dragSnapToOrigin: o = false, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const d = ue(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, m = Yl(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !m) return;
      const { point: v } = d, { timestamp: k } = B;
      this.history.push({ ...v, timestamp: k });
      const { onStart: g, onMove: M } = this.handlers;
      f || (g && g(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = ce(f, this.transformPagePoint), S.update(this.updatePoint, true);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: m, onSessionEnd: v, resumeAnimation: k } = this.handlers;
      if (this.dragSnapToOrigin && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const g = ue(d.type === "pointercancel" ? this.lastMoveEventInfo : ce(f, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, g), v && v(d, g);
    }, !an(e)) return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = r, this.contextWindow = i || window;
    const a = Bt(e), l = ce(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = B;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, ue(l, this.history)), this.removeListeners = Et(bt(this.contextWindow, "pointermove", this.handlePointerMove), bt(this.contextWindow, "pointerup", this.handlePointerUp), bt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Q(this.updatePoint);
  }
}
function ce(t, e) {
  return e ? { point: e(t.point) } : t;
}
function rs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ue({ point: t }, e) {
  return { point: t, delta: rs(t, rr(e)), offset: rs(t, Zl(e)), velocity: Jl(e, 0.1) };
}
function Zl(t) {
  return t[0];
}
function rr(t) {
  return t[t.length - 1];
}
function Jl(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = rr(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > $(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = H(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ql(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? V(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? V(n, t, s.max) : Math.min(t, n)), t;
}
function os(t, e, n) {
  return { min: e !== void 0 ? t.min + e : void 0, max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0 };
}
function tc(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: os(t.x, n, i), y: os(t.y, e, s) };
}
function as(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function ec(t, e) {
  return { x: as(t.x, e.x), y: as(t.y, e.y) };
}
function nc(t, e) {
  let n = 0.5;
  const s = O(t), i = O(e);
  return i > s ? n = Ct(e.min, e.max - s, t.min) : s > i && (n = Ct(t.min, t.max - i, e.min)), X(0, 1, n);
}
function sc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Fe = 0.35;
function ic(t = Fe) {
  return t === false ? t = 0 : t === true && (t = Fe), { x: ls(t, "left", "right"), y: ls(t, "top", "bottom") };
}
function ls(t, e, n) {
  return { min: cs(t, e), max: cs(t, n) };
}
function cs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const rc = /* @__PURE__ */ new WeakMap();
class oc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = E(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = false, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === false) return;
    const o = (h) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Bt(h).point);
    }, r = (h, d) => {
      const { drag: f, dragPropagation: m, onDragStart: v } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = da(f), !this.openDragLock)) return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), U((g) => {
        let M = this.getAxisMotionValue(g).get() || 0;
        if (_.test(M)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const b = x.layout.layoutBox[g];
            b && (M = O(b) * (parseFloat(M) / 100));
          }
        }
        this.originPoint[g] = M;
      }), v && S.postRender(() => v(h, d)), je(this.visualElement, "transform");
      const { animationState: k } = this.visualElement;
      k && k.setActive("whileDrag", true);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: v, onDrag: k } = this.getProps();
      if (!f && !this.openDragLock) return;
      const { offset: g } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = ac(g), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), k && k(h, d);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => U((h) => {
      var _a2;
      return this.getAnimationState(h) === "paused" && ((_a2 = this.getAxisMotionValue(h).animation) == null ? void 0 : _a2.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ir(e, { onSessionStart: o, onStart: r, onMove: a, onSessionEnd: l, resumeAnimation: u }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: c, distanceThreshold: s, contextWindow: sr(this.visualElement) });
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !s) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && S.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = false;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", false);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !zt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Ql(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var _a2;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a2 = this.visualElement.projection) == null ? void 0 : _a2.layout, i = this.constraints;
    e && ht(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = tc(s.layoutBox, e) : this.constraints = false, this.elastic = ic(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && U((o) => {
      this.constraints !== false && this.getAxisMotionValue(o) && (this.constraints[o] = sc(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ht(e)) return false;
    const s = e.current, { projection: i } = this.visualElement;
    if (!i || !i.layout) return false;
    const o = ll(s, i.root, this.visualElement.getTransformPagePoint());
    let r = ec(i.layout.layoutBox, o);
    if (n) {
      const a = n(rl(r));
      this.hasMutatedConstraints = !!a, a && (r = Hi(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = U((c) => {
      if (!zt(c, n, this.currentDirection)) return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, f = i ? 40 : 1e7, m = { type: "inertia", velocity: s ? e[c] : 0, bounceStiffness: d, bounceDamping: f, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...h };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return je(this.visualElement, e), s.start(gn(e, s, 0, n, this.visualElement, false));
  }
  stopAnimation() {
    U((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    U((e) => {
      var _a2;
      return (_a2 = this.getAxisMotionValue(e).animation) == null ? void 0 : _a2.pause();
    });
  }
  getAnimationState(e) {
    var _a2;
    return (_a2 = this.getAxisMotionValue(e).animation) == null ? void 0 : _a2.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    U((n) => {
      const { drag: s } = this.getProps();
      if (!zt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - V(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!ht(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    U((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== false) {
        const l = a.get();
        i[r] = nc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), U((r) => {
      if (!zt(r, e, null)) return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(V(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    rc.set(this.visualElement, this);
    const e = this.visualElement.current, n = bt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = true } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      ht(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), S.read(s);
    const r = Rt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (U((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: s = false, dragPropagation: i = false, dragConstraints: o = false, dragElastic: r = Fe, dragMomentum: a = true } = e;
    return { ...e, drag: n, dragDirectionLock: s, dragPropagation: i, dragConstraints: o, dragElastic: r, dragMomentum: a };
  }
}
function zt(t, e, n) {
  return (e === true || e === t) && (n === null || n === t);
}
function ac(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class lc extends et {
  constructor(e) {
    super(e), this.removeGroupControls = W, this.removeListeners = W, this.controls = new oc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || W;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const us = (t) => (e, n) => {
  t && S.postRender(() => t(e, n));
};
class cc extends et {
  constructor() {
    super(...arguments), this.removePointerDownListener = W;
  }
  onPointerDown(e) {
    this.session = new ir(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: sr(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return { onSessionStart: us(e), onStart: us(n), onMove: s, onEnd: (o, r) => {
      delete this.session, i && S.postRender(() => i(o, r));
    } };
  }
  mount() {
    this.removePointerDownListener = bt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Wt = { hasAnimatedSinceResize: true, hasEverUpdated: false };
let he = false;
class uc extends y.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    o && (n.group && n.group.add(o), s && s.register && i && s.register(o), he && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })), Wt.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, { projection: r } = s;
    return r && (r.isPresent = o, he = true, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || S.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), on.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    he = true, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function or(t) {
  const [e, n] = Si(), s = y.useContext(Oe);
  return G.jsx(uc, { ...t, layoutGroup: s, switchLayoutGroup: y.useContext(Ni), isPresent: e, safeToRemove: n });
}
function hc(t, e, n) {
  const s = F(t) ? t : yt(t);
  return s.start(gn("", s, e, n)), s.animation;
}
const dc = (t, e) => t.depth - e.depth;
class fc {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(e) {
    Ue(this.children, e), this.isDirty = true;
  }
  remove(e) {
    He(this.children, e), this.isDirty = true;
  }
  forEach(e) {
    this.isDirty && this.children.sort(dc), this.isDirty = false, this.children.forEach(e);
  }
}
function pc(t, e) {
  const n = z.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (Q(s), t(o - e));
  };
  return S.setup(s, true), () => Q(s);
}
const ar = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], mc = ar.length, hs = (t) => typeof t == "string" ? parseFloat(t) : t, ds = (t) => typeof t == "number" || w.test(t);
function yc(t, e, n, s, i, o) {
  i ? (t.opacity = V(0, n.opacity ?? 1, gc(s)), t.opacityExit = V(e.opacity ?? 1, 0, vc(s))) : o && (t.opacity = V(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < mc; r++) {
    const a = `border${ar[r]}Radius`;
    let l = fs(e, a), u = fs(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ds(l) === ds(u) ? (t[a] = Math.max(V(hs(l), hs(u), s), 0), (_.test(u) || _.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = V(e.rotate || 0, n.rotate || 0, s));
}
function fs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const gc = lr(0, 0.5, _s), vc = lr(0.5, 0.95, W);
function lr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(Ct(t, e, s));
}
function ps(t, e) {
  t.min = e.min, t.max = e.max;
}
function K(t, e) {
  ps(t.x, e.x), ps(t.y, e.y);
}
function ms(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ys(t, e, n, s, i) {
  return t -= e, t = Gt(t, 1 / n, s), i !== void 0 && (t = Gt(t, 1 / i, s)), t;
}
function xc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (_.test(e) && (e = parseFloat(e), e = V(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
  let a = V(o.min, o.max, s);
  t === o && (a -= e), t.min = ys(t.min, e, n, a, i), t.max = ys(t.max, e, n, a, i);
}
function gs(t, e, [n, s, i], o, r) {
  xc(t, e[n], e[s], e[i], e.scale, o, r);
}
const kc = ["x", "scaleX", "originX"], Mc = ["y", "scaleY", "originY"];
function vs(t, e, n, s) {
  gs(t.x, e, kc, n ? n.x : void 0, s ? s.x : void 0), gs(t.y, e, Mc, n ? n.y : void 0, s ? s.y : void 0);
}
function xs(t) {
  return t.translate === 0 && t.scale === 1;
}
function cr(t) {
  return xs(t.x) && xs(t.y);
}
function ks(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Tc(t, e) {
  return ks(t.x, e.x) && ks(t.y, e.y);
}
function Ms(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ur(t, e) {
  return Ms(t.x, e.x) && Ms(t.y, e.y);
}
function Ts(t) {
  return O(t.x) / O(t.y);
}
function ws(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class wc {
  constructor() {
    this.members = [];
  }
  add(e) {
    Ue(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (He(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return false;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== false) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), true) : false;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = true), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = true);
      const { crossfade: i } = e.options;
      i === false && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Pc(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: f, skewY: m } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), f && (s += `skewX(${f}deg) `), m && (s += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const de = ["", "X", "Y", "Z"], bc = 1e3;
let Ac = 0;
function fe(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function hr(t) {
  if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Yi(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", S, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && hr(s);
}
function dr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Ac++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(Vc), this.nodes.forEach(Lc), this.nodes.forEach(jc), this.nodes.forEach(Dc);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
      this.root === this && (this.nodes = new fc());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new qe()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      this.isSVG = Ci(r) && !va(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = true), t) {
        let c, h = 0;
        const d = () => this.root.updateBlockedByResize = false;
        S.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = true, c && c(), c = pc(d, 250), Wt.hasAnimatedSinceResize && (Wt.hasAnimatedSinceResize = false, this.nodes.forEach(As)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== false && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || zc, { onLayoutAnimationStart: v, onLayoutAnimationComplete: k } = u.getProps(), g = !this.targetLayout || !ur(this.targetLayout, f), M = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || M || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const x = { ...sn(m, "layout"), onPlay: v, onComplete: k };
          (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = false), this.startAnimation(x), this.setAnimationOrigin(c, M);
        } else h || As(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Q(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Bc), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = true, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(false);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ps);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(bs);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Ec), this.nodes.forEach(Cc), this.nodes.forEach(Sc)) : this.nodes.forEach(bs), this.clearAllSnapshots();
      const a = z.now();
      B.delta = X(0, 1e3 / 60, a - B.timestamp), B.timestamp = a, B.isProcessing = true, ee.update.process(B), ee.preRender.process(B), ee.render.process(B), B.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, on.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Rc), this.sharedNodes.forEach(Fc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, S.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected = E(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = false), a && this.instance) {
        const l = s(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: r, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l };
      }
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !cr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || it(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(r = true) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Nc(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var _a2;
      const { visualElement: r } = this.options;
      if (!r) return E();
      const a = r.measureViewportBox();
      if (!(((_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) || this.path.some(Uc))) {
        const { scroll: u } = this.root;
        u && (dt(a.x, u.offset.x), dt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var _a2;
      const a = E();
      if (K(a, r), (_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && K(a, r), dt(a.x, c.offset.x), dt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = false) {
      const l = E();
      K(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && ft(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), it(c.latestValues) && ft(l, c.latestValues);
      }
      return it(this.latestValues) && ft(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = E();
      K(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !it(u.latestValues)) continue;
        De(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        K(c, h), vs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return it(this.latestValues) && vs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(r) {
      this.options = { ...this.options, ...r, crossfade: r.crossfade !== void 0 ? r.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(r = false) {
      var _a2;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: c, layoutId: h } = this.options;
      if (!this.layout || !(c || h)) return;
      this.resolvedRelativeTargetAt = B.timestamp;
      const d = this.getClosestProjectingParent();
      d && this.linkedParentVersion !== d.layoutVersion && !d.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (d && d.layout ? this.createRelativeTarget(d, this.layout.layoutBox, d.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Xl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : K(this.target, this.layout.layoutBox), Ki(this.target, this.targetDelta)) : K(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? this.createRelativeTarget(d, this.target, d.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || De(this.parent.latestValues) || Wi(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(r, a, l) {
      this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Xt(this.relativeTargetOrigin, a, l), K(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var _a2;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = true;
      if ((this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty)) && (l = false), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = false), this.resolvedRelativeTargetAt === B.timestamp && (l = false), l) return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
      K(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      al(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = E());
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ms(this.prevProjectionDelta.x, this.projectionDelta.x), ms(this.prevProjectionDelta.y, this.projectionDelta.y)), At(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !ws(this.projectionDelta.x, this.prevProjectionDelta.x) || !ws(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(r = true) {
      var _a2;
      if ((_a2 = this.options.visualElement) == null ? void 0 : _a2.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = pt(), this.projectionDelta = pt(), this.projectionDeltaWithTransform = pt();
    }
    setAnimationOrigin(r, a = false) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = pt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = E(), f = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, v = f !== m, k = this.getStack(), g = !k || k.members.length <= 1, M = !!(v && !g && this.options.crossfade === true && !this.path.some(Oc));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (b) => {
        const T = b / 1e3;
        Cs(h.x, r.x, T), Cs(h.y, r.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ic(this.relativeTarget, this.relativeTargetOrigin, d, T), x && Tc(this.relativeTarget, x) && (this.isProjectionDirty = false), x || (x = E()), K(x, this.relativeTarget)), v && (this.animationValues = c, yc(c, u, this.latestValues, T, M, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var _a2, _b, _c2;
      this.notifyListeners("animationStart"), (_a2 = this.currentAnimation) == null ? void 0 : _a2.stop(), (_c2 = (_b = this.resumingFrom) == null ? void 0 : _b.currentAnimation) == null ? void 0 : _c2.stop(), this.pendingAnimation && (Q(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = S.update(() => {
        Wt.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = yt(0)), this.currentAnimation = hc(this.motionValue, [0, 1e3], { ...r, velocity: 0, isSync: true, onUpdate: (a) => {
          this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
        }, onStop: () => {
        }, onComplete: () => {
          r.onComplete && r.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && fr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = O(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = O(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        K(a, l), ft(a, c), At(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new wc()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0 });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : true;
    }
    getLead() {
      var _a2;
      const { layoutId: r } = this.options;
      return r ? ((_a2 = this.getStack()) == null ? void 0 : _a2.lead) || this : this;
    }
    getPrevLead() {
      var _a2;
      const { layoutId: r } = this.options;
      return r ? (_a2 = this.getStack()) == null ? void 0 : _a2.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = true), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : false;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = false;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = true), !a) return;
      const u = {};
      l.z && fe("z", r, u, this.animationValues);
      for (let c = 0; c < de.length; c++) fe(`rotate${de[c]}`, r, u, this.animationValues), fe(`skew${de[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u) r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, r.visibility = "", r.opacity = "", r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !it(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = false);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Pc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: d, y: f } = this.projectionDelta;
      r.transformOrigin = `${d.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in Ve) {
        if (c[m] === void 0) continue;
        const { correct: v, applyTo: k, isCSSVariable: g } = Ve[m], M = h === "none" ? c[m] : v(c[m], u);
        if (k) {
          const x = k.length;
          for (let b = 0; b < x; b++) r[k[b]] = M;
        } else g ? this.options.visualElement.renderState.vars[m] = M : r[m] = M;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Ht(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var _a2;
        return (_a2 = r.currentAnimation) == null ? void 0 : _a2.stop();
      }), this.root.nodes.forEach(Ps), this.root.sharedNodes.clear();
    }
  };
}
function Cc(t) {
  t.updateLayout();
}
function Sc(t) {
  var _a2;
  const e = ((_a2 = t.resumeFrom) == null ? void 0 : _a2.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout, { animationType: i } = t.options, o = e.source !== t.layout.source;
    i === "size" ? U((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], d = O(h);
      h.min = n[c].min, h.max = h.min + d;
    }) : fr(i, e.layoutBox, n) && U((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], d = O(n[c]);
      h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + d);
    });
    const r = pt();
    At(r, n, e.layoutBox);
    const a = pt();
    o ? At(a, t.applyTransform(s, true), e.measuredBox) : At(a, n, e.layoutBox);
    const l = !cr(r);
    let u = false;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: d } = c;
        if (h && d) {
          const f = E();
          Xt(f, e.layoutBox, h.layoutBox);
          const m = E();
          Xt(m, n, d.layoutBox), ur(f, m) || (u = true), c.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = f, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", { layout: n, snapshot: e, delta: a, layoutDelta: r, hasLayoutChanged: l, hasRelativeLayoutChanged: u });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Vc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Dc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function Rc(t) {
  t.clearSnapshot();
}
function Ps(t) {
  t.clearMeasurements();
}
function bs(t) {
  t.isLayoutDirty = false;
}
function Ec(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function As(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
}
function Lc(t) {
  t.resolveTargetDelta();
}
function jc(t) {
  t.calcProjection();
}
function Bc(t) {
  t.resetSkewAndRotation();
}
function Fc(t) {
  t.removeLeadSnapshot();
}
function Cs(t, e, n) {
  t.translate = V(e.translate, 0, n), t.scale = V(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ss(t, e, n, s) {
  t.min = V(e.min, n.min, s), t.max = V(e.max, n.max, s);
}
function Ic(t, e, n, s) {
  Ss(t.x, e.x, n.x, s), Ss(t.y, e.y, n.y, s);
}
function Oc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const zc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, Vs = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ds = Vs("applewebkit/") && !Vs("chrome/") ? Math.round : W;
function Rs(t) {
  t.min = Ds(t.min), t.max = Ds(t.max);
}
function Nc(t) {
  Rs(t.x), Rs(t.y);
}
function fr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Gl(Ts(e), Ts(n), 0.2);
}
function Uc(t) {
  var _a2;
  return t !== t.root && ((_a2 = t.scroll) == null ? void 0 : _a2.wasRoot);
}
const Hc = dr({ attachResizeListener: (t, e) => Rt(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), pe = { current: void 0 }, pr = dr({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
  if (!pe.current) {
    const t = new Hc({});
    t.mount(window), t.setOptions({ layoutScroll: true }), pe.current = t;
  }
  return pe.current;
}, resetTransform: (t, e) => {
  t.style.transform = e !== void 0 ? e : "none";
}, checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed" }), Wc = { pan: { Feature: cc }, drag: { Feature: lc, ProjectionNode: pr, MeasureLayout: or } };
function Es(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && S.postRender(() => o(e, Bt(e)));
}
class Kc extends et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = fa(e, (n, s) => (Es(this.node, s, "Start"), (i) => Es(this.node, i, "End"))));
  }
  unmount() {
  }
}
class qc extends et {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let e = false;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = true;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = Et(Rt(this.node.current, "focus", () => this.onFocus()), Rt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ls(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && S.postRender(() => o(e, Bt(e)));
}
class $c extends et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ga(e, (n, s) => (Ls(this.node, s, "Start"), (i, { success: o }) => Ls(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ie = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), _c = (t) => {
  const e = Ie.get(t.target);
  e && e(t);
}, Gc = (t) => {
  t.forEach(_c);
};
function Xc({ root: t, ...e }) {
  const n = t || document;
  me.has(n) || me.set(n, {});
  const s = me.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Gc, { root: t, ...e })), s[i];
}
function Yc(t, e, n) {
  const s = Xc(e);
  return Ie.set(t, n), s.observe(t), () => {
    Ie.delete(t), s.unobserve(t);
  };
}
const Zc = { some: 0, all: 1 };
class Jc extends et {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = { root: n ? n.current : void 0, rootMargin: s, threshold: typeof i == "number" ? i : Zc[i] }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
      u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return Yc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Qc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Qc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const tu = { inView: { Feature: Jc }, tap: { Feature: $c }, focus: { Feature: qc }, hover: { Feature: Kc } }, eu = { layout: { ProjectionNode: pr, MeasureLayout: or } }, nu = { ...Hl, ...tu, ...Wc, ...eu }, uu = il(nu, gl);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const su = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mr = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var iu = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ru = y.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: s, className: i = "", children: o, iconNode: r, ...a }, l) => y.createElement("svg", { ref: l, ...iu, width: e, height: e, stroke: t, strokeWidth: s ? Number(n) * 24 / Number(e) : n, className: mr("lucide", i), ...a }, [...r.map(([u, c]) => y.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p = (t, e) => {
  const n = y.forwardRef(({ className: s, ...i }, o) => y.createElement(ru, { ref: o, iconNode: e, className: mr(`lucide-${su(t)}`, s), ...i }));
  return n.displayName = `${t}`, n;
};
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hu = p("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const du = p("Archive", [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fu = p("ArrowDownRight", [["path", { d: "m7 7 10 10", key: "1fmybs" }], ["path", { d: "M17 7v10H7", key: "6fjiku" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pu = p("ArrowDownUp", [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }], ["path", { d: "M17 4v16", key: "7dpous" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mu = p("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yu = p("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gu = p("ArrowUpRight", [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vu = p("BookOpen", [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xu = p("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ku = p("BrainCircuit", [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M12 13h4", key: "1ku699" }], ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }], ["path", { d: "M12 8h8", key: "1lhi5i" }], ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }], ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }], ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }], ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }], ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mu = p("BriefcaseBusiness", [["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }], ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tu = p("Building2", [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M10 14h4", key: "kelpxr" }], ["path", { d: "M10 18h4", key: "1ulq68" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wu = p("CalendarClock", [["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M3 10h5", key: "r794hk" }], ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }], ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pu = p("CalendarDays", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bu = p("Calendar", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Au = p("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cu = p("ChartNoAxesCombined", [["path", { d: "M12 16v5", key: "zza2cw" }], ["path", { d: "M16 14v7", key: "1g90b9" }], ["path", { d: "M20 10v11", key: "1iqoj0" }], ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }], ["path", { d: "M4 18v3", key: "1yp0dc" }], ["path", { d: "M8 14v7", key: "n3cwzv" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Su = p("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vu = p("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Du = p("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ru = p("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eu = p("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lu = p("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ju = p("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bu = p("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fu = p("CircleDot", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Iu = p("CirclePlay", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ou = p("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zu = p("Clock3", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nu = p("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uu = p("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hu = p("Crosshair", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wu = p("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ku = p("Download", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }], ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qu = p("ExternalLink", [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $u = p("EyeOff", [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _u = p("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gu = p("FileCheck2", [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xu = p("FileStack", [["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2", key: "9rb54x" }], ["path", { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z", key: "1059l0" }], ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }], ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yu = p("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zu = p("FileUser", [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M15 18a3 3 0 1 0-6 0", key: "16awa0" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }], ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ju = p("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qu = p("Gauge", [["path", { d: "m12 14 4-4", key: "9kzdfg" }], ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const th = p("HardDrive", [["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "oot6mr" }], ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }], ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const eh = p("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nh = p("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sh = p("LibraryBig", [["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }], ["path", { d: "M7 3v18", key: "bbkbws" }], ["path", { d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z", key: "1qboyk" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ih = p("List", [["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 18h.01", key: "1tta3j" }], ["path", { d: "M3 6h.01", key: "1rqtza" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 18h13", key: "1lx6n3" }], ["path", { d: "M8 6h13", key: "ik3vkj" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rh = p("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oh = p("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ah = p("MessageCircleMore", [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }], ["path", { d: "M8 12h.01", key: "czm47f" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lh = p("MessageCircle", [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ch = p("MessageSquare", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uh = p("MicOff", [["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }], ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }], ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }], ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }], ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hh = p("MicVocal", [["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12", key: "80a601" }], ["path", { d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5", key: "j0ngtp" }], ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dh = p("Mic", [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fh = p("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ph = p("MoveDown", [["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }], ["path", { d: "M12 2V22", key: "r89rzk" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mh = p("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yh = p("Pen", [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gh = p("Pencil", [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vh = p("PhoneOff", [["path", { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91", key: "z86iuo" }], ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xh = p("Pin", [["path", { d: "M12 17v5", key: "bb1du9" }], ["path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z", key: "1nkz8b" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kh = p("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mh = p("Plug", [["path", { d: "M12 22v-5", key: "1ega77" }], ["path", { d: "M9 8V2", key: "14iosj" }], ["path", { d: "M15 8V2", key: "18g5xt" }], ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Th = p("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wh = p("Radar", [["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }], ["path", { d: "M4 6h.01", key: "oypzma" }], ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }], ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ph = p("Radio", [["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }], ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }], ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bh = p("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ah = p("RotateCcw", [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ch = p("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sh = p("SendHorizontal", [["path", { d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z", key: "117uat" }], ["path", { d: "M6 12h16", key: "s4cdu5" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vh = p("Send", [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dh = p("Server", [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rh = p("Settings2", [["path", { d: "M20 7h-9", key: "3s1dr2" }], ["path", { d: "M14 17H5", key: "gfn3mx" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eh = p("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lh = p("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jh = p("SquareCheckBig", [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bh = p("SquarePen", [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fh = p("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ih = p("Tag", [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Oh = p("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zh = p("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nh = p("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uh = p("Trophy", [["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }], ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }], ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }], ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hh = p("Upload", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wh = p("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kh = p("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qh = p("Volume2", [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $h = p("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
export {
  mh as $,
  lu as A,
  Ch as B,
  Eu as C,
  Wu as D,
  Ju as E,
  Yu as F,
  Qu as G,
  Ah as H,
  Ih as I,
  Iu as J,
  Su as K,
  rh as L,
  dh as M,
  Uu as N,
  Mu as O,
  Th as P,
  xh as Q,
  wh as R,
  Lh as S,
  Nh as T,
  Hh as U,
  Bh as V,
  zu as W,
  $h as X,
  mu as Y,
  _u as Z,
  th as _,
  Vu as a,
  kh as a0,
  eh as a1,
  vu as a2,
  pu as a3,
  gh as a4,
  du as a5,
  Au as a6,
  Vh as a7,
  uh as a8,
  xu as a9,
  Fu as aA,
  oh as aB,
  ph as aC,
  Sh as aa,
  vh as ab,
  Wh as ac,
  nh as ad,
  ih as ae,
  qu as af,
  yh as ag,
  Uh as ah,
  Pu as ai,
  Tu as aj,
  lh as ak,
  gu as al,
  Eh as am,
  Dh as an,
  Mh as ao,
  Ou as ap,
  qh as aq,
  $u as ar,
  hu as as,
  Ph as at,
  yu as au,
  fu as av,
  Hu as aw,
  hh as ax,
  Gu as ay,
  ku as az,
  Xu as b,
  Fh as c,
  fh as d,
  Zu as e,
  Cu as f,
  wu as g,
  sh as h,
  ah as i,
  G as j,
  Ru as k,
  Rh as l,
  uu as m,
  Lu as n,
  bh as o,
  ju as p,
  Nu as q,
  Ku as r,
  Oh as s,
  Bu as t,
  bu as u,
  ch as v,
  zh as w,
  jh as x,
  Du as y,
  Kh as z
};
