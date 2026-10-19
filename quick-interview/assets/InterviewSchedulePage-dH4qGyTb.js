var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as w, m as X, y as As, k as Ps, u as zo, ad as Ru, ae as ju, P as Lu, af as Iu, ag as Fu, w as Ns, X as Wu, p as Hu, n as Bo } from "./ui-vendor-Icq6OStM.js";
import { g as ne, i as xe, r as F, R as x, k as Rs, l as Sr } from "./react-vendor-C54eoJNz.js";
import { r as ft } from "./index-BZ3exKah.js";
import { e as ht, g as zu, i as Yo, j as js, k as Bu, l as ae, m as Na, n as Yu, o as oe, p as ve, q as ie, r as Ra, t as We, u as Qr, v as Ht } from "./syntax-highlighter-aNFqcRiR.js";
import { C as Uo } from "./ConfirmDialog-CZ5WuzmS.js";
var Ls = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", u = "week", d = "month", f = "quarter", v = "year", h = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var A = ["th", "st", "nd", "rd"], O = N % 100;
      return "[" + N + (A[(O - 20) % 10] || A[O] || A[0]) + "]";
    } }, $ = function(N, A, O) {
      var R = String(N);
      return !R || R.length >= A ? N : "" + Array(A + 1 - R.length).join(O) + N;
    }, b = { s: $, z: function(N) {
      var A = -N.utcOffset(), O = Math.abs(A), R = Math.floor(O / 60), L = O % 60;
      return (A <= 0 ? "+" : "-") + $(R, 2, "0") + ":" + $(L, 2, "0");
    }, m: function N(A, O) {
      if (A.date() < O.date()) return -N(O, A);
      var R = 12 * (O.year() - A.year()) + (O.month() - A.month()), L = A.clone().add(R, d), I = O - L < 0, Y = A.clone().add(R + (I ? -1 : 1), d);
      return +(-(R + (O - L) / (I ? L - Y : Y - L)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: v, w: u, d: c, D: h, h: l, m: s, s: i, ms: o, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, E = "en", _ = {};
    _[E] = g;
    var M = "$isDayjsObject", P = function(N) {
      return N instanceof B || !(!N || !N[M]);
    }, k = function N(A, O, R) {
      var L;
      if (!A) return E;
      if (typeof A == "string") {
        var I = A.toLowerCase();
        _[I] && (L = I), O && (_[I] = O, L = I);
        var Y = A.split("-");
        if (!L && Y.length > 1) return N(Y[0]);
      } else {
        var U = A.name;
        _[U] = A, L = U;
      }
      return !R && L && (E = L), L || !R && E;
    }, T = function(N, A) {
      if (P(N)) return N.clone();
      var O = typeof A == "object" ? A : {};
      return O.date = N, O.args = arguments, new B(O);
    }, D = b;
    D.l = k, D.i = P, D.w = function(N, A) {
      return T(N, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var B = function() {
      function N(O) {
        this.$L = k(O.locale, null, true), this.parse(O), this.$x = this.$x || O.x || {}, this[M] = true;
      }
      var A = N.prototype;
      return A.parse = function(O) {
        this.$d = function(R) {
          var L = R.date, I = R.utc;
          if (L === null) return /* @__PURE__ */ new Date(NaN);
          if (D.u(L)) return /* @__PURE__ */ new Date();
          if (L instanceof Date) return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var Y = L.match(m);
            if (Y) {
              var U = Y[2] - 1 || 0, S = (Y[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(Y[1], U, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, S)) : new Date(Y[1], U, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, S);
            }
          }
          return new Date(L);
        }(O), this.init();
      }, A.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, A.$utils = function() {
        return D;
      }, A.isValid = function() {
        return this.$d.toString() !== p;
      }, A.isSame = function(O, R) {
        var L = T(O);
        return this.startOf(R) <= L && L <= this.endOf(R);
      }, A.isAfter = function(O, R) {
        return T(O) < this.startOf(R);
      }, A.isBefore = function(O, R) {
        return this.endOf(R) < T(O);
      }, A.$g = function(O, R, L) {
        return D.u(O) ? this[R] : this.set(L, O);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(O, R) {
        var L = this, I = !!D.u(R) || R, Y = D.p(O), U = function(V, re) {
          var le = D.w(L.$u ? Date.UTC(L.$y, re, V) : new Date(L.$y, re, V), L);
          return I ? le : le.endOf(c);
        }, S = function(V, re) {
          return D.w(L.toDate()[V].apply(L.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), L);
        }, C = this.$W, j = this.$M, z = this.$D, q = "set" + (this.$u ? "UTC" : "");
        switch (Y) {
          case v:
            return I ? U(1, 0) : U(31, 11);
          case d:
            return I ? U(1, j) : U(0, j + 1);
          case u:
            var K = this.$locale().weekStart || 0, G = (C < K ? C + 7 : C) - K;
            return U(I ? z - G : z + (6 - G), j);
          case c:
          case h:
            return S(q + "Hours", 0);
          case l:
            return S(q + "Minutes", 1);
          case s:
            return S(q + "Seconds", 2);
          case i:
            return S(q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(O) {
        return this.startOf(O, false);
      }, A.$set = function(O, R) {
        var L, I = D.p(O), Y = "set" + (this.$u ? "UTC" : ""), U = (L = {}, L[c] = Y + "Date", L[h] = Y + "Date", L[d] = Y + "Month", L[v] = Y + "FullYear", L[l] = Y + "Hours", L[s] = Y + "Minutes", L[i] = Y + "Seconds", L[o] = Y + "Milliseconds", L)[I], S = I === c ? this.$D + (R - this.$W) : R;
        if (I === d || I === v) {
          var C = this.clone().set(h, 1);
          C.$d[U](S), C.init(), this.$d = C.set(h, Math.min(this.$D, C.daysInMonth())).$d;
        } else U && this.$d[U](S);
        return this.init(), this;
      }, A.set = function(O, R) {
        return this.clone().$set(O, R);
      }, A.get = function(O) {
        return this[D.p(O)]();
      }, A.add = function(O, R) {
        var L, I = this;
        O = Number(O);
        var Y = D.p(R), U = function(j) {
          var z = T(I);
          return D.w(z.date(z.date() + Math.round(j * O)), I);
        };
        if (Y === d) return this.set(d, this.$M + O);
        if (Y === v) return this.set(v, this.$y + O);
        if (Y === c) return U(1);
        if (Y === u) return U(7);
        var S = (L = {}, L[s] = n, L[l] = a, L[i] = r, L)[Y] || 1, C = this.$d.getTime() + O * S;
        return D.w(C, this);
      }, A.subtract = function(O, R) {
        return this.add(-1 * O, R);
      }, A.format = function(O) {
        var R = this, L = this.$locale();
        if (!this.isValid()) return L.invalidDate || p;
        var I = O || "YYYY-MM-DDTHH:mm:ssZ", Y = D.z(this), U = this.$H, S = this.$m, C = this.$M, j = L.weekdays, z = L.months, q = L.meridiem, K = function(re, le, Te, Ce) {
          return re && (re[le] || re(R, I)) || Te[le].slice(0, Ce);
        }, G = function(re) {
          return D.s(U % 12 || 12, re, "0");
        }, V = q || function(re, le, Te) {
          var Ce = re < 12 ? "AM" : "PM";
          return Te ? Ce.toLowerCase() : Ce;
        };
        return I.replace(y, function(re, le) {
          return le || function(Te) {
            switch (Te) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return D.s(R.$y, 4, "0");
              case "M":
                return C + 1;
              case "MM":
                return D.s(C + 1, 2, "0");
              case "MMM":
                return K(L.monthsShort, C, z, 3);
              case "MMMM":
                return K(z, C);
              case "D":
                return R.$D;
              case "DD":
                return D.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return K(L.weekdaysMin, R.$W, j, 2);
              case "ddd":
                return K(L.weekdaysShort, R.$W, j, 3);
              case "dddd":
                return j[R.$W];
              case "H":
                return String(U);
              case "HH":
                return D.s(U, 2, "0");
              case "h":
                return G(1);
              case "hh":
                return G(2);
              case "a":
                return V(U, S, true);
              case "A":
                return V(U, S, false);
              case "m":
                return String(S);
              case "mm":
                return D.s(S, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return D.s(R.$s, 2, "0");
              case "SSS":
                return D.s(R.$ms, 3, "0");
              case "Z":
                return Y;
            }
            return null;
          }(re) || Y.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(O, R, L) {
        var I, Y = this, U = D.p(R), S = T(O), C = (S.utcOffset() - this.utcOffset()) * n, j = this - S, z = function() {
          return D.m(Y, S);
        };
        switch (U) {
          case v:
            I = z() / 12;
            break;
          case d:
            I = z();
            break;
          case f:
            I = z() / 3;
            break;
          case u:
            I = (j - C) / 6048e5;
            break;
          case c:
            I = (j - C) / 864e5;
            break;
          case l:
            I = j / a;
            break;
          case s:
            I = j / n;
            break;
          case i:
            I = j / r;
            break;
          default:
            I = j;
        }
        return L ? I : D.a(I);
      }, A.daysInMonth = function() {
        return this.endOf(d).$D;
      }, A.$locale = function() {
        return _[this.$L];
      }, A.locale = function(O, R) {
        if (!O) return this.$L;
        var L = this.clone(), I = k(O, R, true);
        return I && (L.$L = I), L;
      }, A.clone = function() {
        return D.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), H = B.prototype;
    return T.prototype = H, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", d], ["$y", v], ["$D", h]].forEach(function(N) {
      H[N[1]] = function(A) {
        return this.$g(A, N[0], N[1]);
      };
    }), T.extend = function(N, A) {
      return N.$i || (N(A, B, T), N.$i = true), T;
    }, T.locale = k, T.isDayjs = P, T.unix = function(N) {
      return T(1e3 * N);
    }, T.en = _[E], T.Ls = _, T.p = {}, T;
  });
})(Ls);
var Uu = Ls.exports;
const se = ne(Uu), At = { parse: async (e2, t) => {
  const r = { rawText: e2, source: t };
  return await ft.post("/api/interview-schedule/parse", r);
}, create: async (e2) => await ft.post("/api/interview-schedule", e2), getById: async (e2) => await ft.get(`/api/interview-schedule/${e2}`), getAll: async (e2) => await ft.get("/api/interview-schedule", { params: e2 }), update: async (e2, t) => await ft.put(`/api/interview-schedule/${e2}`, t), delete: async (e2) => {
  await ft.delete(`/api/interview-schedule/${e2}`);
}, updateStatus: async (e2, t) => await ft.patch(`/api/interview-schedule/${e2}/status`, null, { params: { status: t } }) };
function qu() {
  const [e2, t] = F.useState([]), [r, n] = F.useState(false), [a, o] = F.useState(null), i = F.useCallback(async (d) => {
    n(true), o(null);
    try {
      const f = await At.getAll(d);
      t(f);
    } catch (f) {
      o(f.message || "\u83B7\u53D6\u9762\u8BD5\u5217\u8868\u5931\u8D25"), console.error("Failed to fetch interviews:", f);
    } finally {
      n(false);
    }
  }, []), s = async (d) => {
    const f = await At.create(d);
    return await i(), f;
  }, l = async (d, f) => {
    const v = await At.update(d, f);
    return await i(), v;
  }, c = async (d) => {
    await At.delete(d), t(e2.filter((f) => f.id !== d));
  }, u = async (d, f) => {
    const v = await At.updateStatus(d, f);
    return await i(), v;
  };
  return F.useEffect(() => {
    i();
  }, [i]), { interviews: e2, loading: r, error: a, fetchInterviews: i, createInterview: s, updateInterview: l, deleteInterview: c, updateStatus: u };
}
const Ku = ({ view: e2, onViewChange: t, date: r, onDateChange: n, onAddClick: a }) => {
  const o = () => {
    const c = new Date(r);
    e2 === "day" ? c.setDate(c.getDate() - 1) : e2 === "week" ? c.setDate(c.getDate() - 7) : e2 === "month" && c.setMonth(c.getMonth() - 1), n(c);
  }, i = () => {
    const c = new Date(r);
    e2 === "day" ? c.setDate(c.getDate() + 1) : e2 === "week" ? c.setDate(c.getDate() + 7) : e2 === "month" && c.setMonth(c.getMonth() + 1), n(c);
  }, s = () => {
    n(/* @__PURE__ */ new Date());
  }, l = () => e2 === "list" ? "\u9762\u8BD5\u5217\u8868" : se(r).format(e2 === "month" ? "YYYY\u5E74MM\u6708" : "YYYY\u5E74MM\u6708DD\u65E5");
  return w.jsx(X.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 mb-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50", children: w.jsxs("div", { className: "flex items-center justify-between", children: [w.jsxs("div", { className: "flex items-center gap-6", children: [w.jsx(X.h2, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, className: "text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight", children: l() }, l()), e2 !== "list" && w.jsxs("div", { className: "flex items-center gap-2", children: [w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: o, className: "p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", title: "\u4E0A\u4E00\u9875", children: w.jsx(As, { className: "w-5 h-5" }) }), w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: s, className: "px-4 py-2 text-sm font-medium rounded-xl bg-primary-100/80 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 hover:bg-primary-200/90 dark:hover:bg-primary-500/30 border border-primary-200/50 dark:border-primary-400/30 backdrop-blur-sm transition-all", children: "\u4ECA\u5929" }), w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: i, className: "p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", title: "\u4E0B\u4E00\u9875", children: w.jsx(Ps, { className: "w-5 h-5" }) })] })] }), w.jsxs("div", { className: "flex items-center gap-3", children: [w.jsx("div", { className: "flex bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-1.5 gap-1", children: [{ key: "day", icon: zo, label: "\u65E5\u89C6\u56FE" }, { key: "week", icon: zo, label: "\u5468\u89C6\u56FE" }, { key: "month", icon: Ru, label: "\u6708\u89C6\u56FE" }, { key: "list", icon: ju, label: "\u5217\u8868" }].map(({ key: c, icon: u, label: d }) => w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => t(c), className: `px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-sm transition-all ${e2 === c ? "bg-white/95 dark:bg-slate-700/80 backdrop-blur-sm shadow-md text-primary-700 dark:text-primary-200 border border-slate-200/50 dark:border-slate-600/50" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-700/50"}`, children: [w.jsx(u, { className: "w-4 h-4" }), d] }, c)) }), w.jsxs(X.button, { whileHover: { scale: 1.05, y: -1 }, whileTap: { scale: 0.95 }, onClick: a, className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 flex items-center gap-2 transition-all", children: [w.jsx(Lu, { className: "w-4 h-4" }), "\u6DFB\u52A0\u9762\u8BD5"] })] })] }) });
};
function qo(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e2, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Z(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(r), true).forEach(function(n) {
      ht(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : qo(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Is() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Is = function() {
    return !!e2;
  })();
}
function pe(e2, t, r) {
  return t = Yo(t), zu(e2, Is() ? Reflect.construct(t, r || [], Yo(e2).constructor) : t.apply(e2, r));
}
function Fs(e2) {
  if (Array.isArray(e2)) return e2;
}
function Gu(e2, t) {
  var r = e2 == null ? null : typeof Symbol < "u" && e2[Symbol.iterator] || e2["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = true, c = false;
    try {
      if (o = (r = r.call(e2)).next, t === 0) {
        if (Object(r) !== r) return;
        l = false;
      } else for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (u) {
      c = true, a = u;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Ws() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e2, t) {
  return Fs(e2) || Gu(e2, t) || js(e2, t) || Ws();
}
function Hs(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) for (t = 0; t < e2.length; t++) e2[t] && (r = Hs(e2[t])) && (n && (n += " "), n += r);
  else for (t in e2) e2[t] && (n && (n += " "), n += t);
  return n;
}
function te() {
  for (var e2, t, r = 0, n = ""; r < arguments.length; ) (e2 = arguments[r++]) && (t = Hs(e2)) && (n && (n += " "), n += t);
  return n;
}
const Vu = Object.freeze(Object.defineProperty({ __proto__: null, clsx: te, default: te }, Symbol.toStringTag, { value: "Module" }));
var Xu = function(e2, t, r, n, a, o, i, s) {
  if (!e2) {
    var l;
    if (t === void 0) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [r, n, a, o, i, s], u = 0;
      l = new Error(t.replace(/%s/g, function() {
        return c[u++];
      })), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Zu = Xu;
const ur = ne(Zu);
var Ju = function() {
};
function Qu(e2, t) {
  var r = {};
  return Object.keys(e2).forEach(function(n) {
    r[en(n)] = Ju;
  }), r;
}
function Ko(e2, t) {
  return e2[t] !== void 0;
}
function en(e2) {
  return "default" + e2.charAt(0).toUpperCase() + e2.substr(1);
}
function ed(e2) {
  return !!e2 && (typeof e2 != "function" || e2.prototype && e2.prototype.isReactComponent);
}
function td(e2, t) {
  e2.prototype = Object.create(t.prototype), e2.prototype.constructor = e2, Bu(e2, t);
}
function zs() {
  var e2 = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e2 != null && this.setState(e2);
}
function Bs(e2) {
  function t(r) {
    var n = this.constructor.getDerivedStateFromProps(e2, r);
    return n ?? null;
  }
  this.setState(t.bind(this));
}
function Ys(e2, t) {
  try {
    var r = this.props, n = this.state;
    this.props = e2, this.state = t, this.__reactInternalSnapshotFlag = true, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n);
  } finally {
    this.props = r, this.state = n;
  }
}
zs.__suppressDeprecationWarning = true;
Bs.__suppressDeprecationWarning = true;
Ys.__suppressDeprecationWarning = true;
function rd(e2) {
  var t = e2.prototype;
  if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
  if (typeof e2.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function") return e2;
  var r = null, n = null, a = null;
  if (typeof t.componentWillMount == "function" ? r = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), r !== null || n !== null || a !== null) {
    var o = e2.displayName || e2.name, i = typeof e2.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + i + " but also contains the following legacy lifecycles:" + (r !== null ? `
  ` + r : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
  }
  if (typeof e2.getDerivedStateFromProps == "function" && (t.componentWillMount = zs, t.componentWillReceiveProps = Bs), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    t.componentWillUpdate = Ys;
    var s = t.componentDidUpdate;
    t.componentDidUpdate = function(c, u, d) {
      var f = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : d;
      s.call(this, c, u, f);
    };
  }
  return e2;
}
var nd = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function Us(e2, t, r) {
  r === void 0 && (r = []);
  var n = e2.displayName || e2.name || "Component", a = ed(e2), o = Object.keys(t), i = o.map(en);
  a || !r.length || ur(false);
  var s = function(c) {
    td(u, c);
    function u() {
      for (var f, v = arguments.length, h = new Array(v), p = 0; p < v; p++) h[p] = arguments[p];
      f = c.call.apply(c, [this].concat(h)) || this, f.handlers = /* @__PURE__ */ Object.create(null), o.forEach(function(y) {
        var g = t[y], $ = function(E) {
          if (f.props[g]) {
            var _;
            f._notifying = true;
            for (var M = arguments.length, P = new Array(M > 1 ? M - 1 : 0), k = 1; k < M; k++) P[k - 1] = arguments[k];
            (_ = f.props)[g].apply(_, [E].concat(P)), f._notifying = false;
          }
          f.unmounted || f.setState(function(T) {
            var D, B = T.values;
            return { values: ae(/* @__PURE__ */ Object.create(null), B, (D = {}, D[y] = E, D)) };
          });
        };
        f.handlers[g] = $;
      }), r.length && (f.attachRef = function(y) {
        f.inner = y;
      });
      var m = /* @__PURE__ */ Object.create(null);
      return o.forEach(function(y) {
        m[y] = f.props[en(y)];
      }), f.state = { values: m, prevProps: {} }, f;
    }
    var d = u.prototype;
    return d.shouldComponentUpdate = function() {
      return !this._notifying;
    }, u.getDerivedStateFromProps = function(v, h) {
      var p = h.values, m = h.prevProps, y = { values: ae(/* @__PURE__ */ Object.create(null), p), prevProps: {} };
      return o.forEach(function(g) {
        y.prevProps[g] = v[g], !Ko(v, g) && Ko(m, g) && (y.values[g] = v[en(g)]);
      }), y;
    }, d.componentWillUnmount = function() {
      this.unmounted = true;
    }, d.render = function() {
      var v = this, h = this.props, p = h.innerRef, m = Na(h, ["innerRef"]);
      i.forEach(function(g) {
        delete m[g];
      });
      var y = {};
      return o.forEach(function(g) {
        var $ = v.props[g];
        y[g] = $ !== void 0 ? $ : v.state.values[g];
      }), x.createElement(e2, ae({}, m, y, this.handlers, { ref: p || this.attachRef }));
    }, u;
  }(x.Component);
  rd(s), s.displayName = "Uncontrolled(" + n + ")", s.propTypes = ae({ innerRef: function() {
  } }, Qu(t)), r.forEach(function(c) {
    s.prototype[c] = function() {
      var d;
      return (d = this.inner)[c].apply(d, arguments);
    };
  });
  var l = s;
  return x.forwardRef && (l = x.forwardRef(function(c, u) {
    return x.createElement(s, ae({}, c, { innerRef: u, __source: { fileName: nd, lineNumber: 128 }, __self: this }));
  }), l.propTypes = s.propTypes), l.ControlledComponent = e2, l.deferControlTo = function(c, u, d) {
    return u === void 0 && (u = {}), Us(c, ae({}, t, u), d);
  }, l;
}
var qs = { exports: {} }, ad = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", od = ad, id = od;
function Ks() {
}
function Gs() {
}
Gs.resetWarningCache = Ks;
var sd = function() {
  function e2(n, a, o, i, s, l) {
    if (l !== id) {
      var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw c.name = "Invariant Violation", c;
    }
  }
  e2.isRequired = e2;
  function t() {
    return e2;
  }
  var r = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t, element: e2, elementType: e2, instanceOf: t, node: e2, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Gs, resetWarningCache: Ks };
  return r.PropTypes = r, r;
};
qs.exports = sd();
var ja = qs.exports;
const W = ne(ja);
var on = "milliseconds", dr = "seconds", fr = "minutes", vr = "hours", yt = "day", Pt = "week", pr = "month", bt = "year", wt = "decade", xt = "century", Vs = { milliseconds: 1, seconds: 1e3, minutes: 60 * 1e3, hours: 60 * 60 * 1e3, day: 24 * 60 * 60 * 1e3, week: 7 * 24 * 60 * 60 * 1e3 }, ld = { month: 1, year: 12, decade: 10 * 12, century: 100 * 12 };
function cd(e2) {
  return [31, ud(e2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function ud(e2) {
  return e2 % 4 === 0 && e2 % 100 !== 0 || e2 % 400 === 0 ? 29 : 28;
}
function Ae(e2, t, r) {
  switch (e2 = new Date(e2), r) {
    case on:
    case dr:
    case fr:
    case vr:
    case yt:
    case Pt:
      return dd(e2, t * Vs[r]);
    case pr:
    case bt:
    case wt:
    case xt:
      return fd(e2, t * ld[r]);
  }
  throw new TypeError('Invalid units: "' + r + '"');
}
function dd(e2, t) {
  var r = new Date(+e2 + t);
  return vd(e2, r);
}
function fd(e2, t) {
  var r = e2.getFullYear(), n = e2.getMonth(), a = e2.getDate(), o = r * 12 + n + t, i = Math.trunc(o / 12), s = o % 12, l = Math.min(a, cd(i)[s]), c = new Date(e2);
  return c.setFullYear(i), c.setDate(1), c.setMonth(s), c.setDate(l), c;
}
function vd(e2, t) {
  var r = e2.getTimezoneOffset(), n = t.getTimezoneOffset(), a = n - r;
  return new Date(+t + a * Vs.minutes);
}
function hr(e2, t, r) {
  return Ae(e2, -t, r);
}
function ue(e2, t, r) {
  switch (e2 = new Date(e2), t) {
    case xt:
    case wt:
    case bt:
      e2 = ln(e2, 0);
    case pr:
      e2 = el(e2, 1);
    case Pt:
    case yt:
      e2 = yr(e2, 0);
    case vr:
      e2 = Nt(e2, 0);
    case fr:
      e2 = gr(e2, 0);
    case dr:
      e2 = mr(e2, 0);
  }
  return t === wt && (e2 = hr(e2, $t(e2) % 10, "year")), t === xt && (e2 = hr(e2, $t(e2) % 100, "year")), t === Pt && (e2 = tl(e2, 0, r)), e2;
}
function sn(e2, t, r) {
  switch (e2 = new Date(e2), e2 = ue(e2, t, r), t) {
    case xt:
    case wt:
    case bt:
    case pr:
    case Pt:
      e2 = Ae(e2, 1, t), e2 = hr(e2, 1, yt), e2.setHours(23, 59, 59, 999);
      break;
    case yt:
      e2.setHours(23, 59, 59, 999);
      break;
    case vr:
    case fr:
    case dr:
      e2 = Ae(e2, 1, t), e2 = hr(e2, 1, on);
  }
  return e2;
}
var Or = Bt(function(e2, t) {
  return e2 === t;
}), La = Bt(function(e2, t) {
  return e2 !== t;
}), hn = Bt(function(e2, t) {
  return e2 > t;
}), Tr = Bt(function(e2, t) {
  return e2 >= t;
}), Ia = Bt(function(e2, t) {
  return e2 < t;
}), zt = Bt(function(e2, t) {
  return e2 <= t;
});
function Xs() {
  return new Date(Math.min.apply(Math, arguments));
}
function Zs() {
  return new Date(Math.max.apply(Math, arguments));
}
function Js(e2, t, r, n) {
  return n = n || "day", (!t || Tr(e2, t, n)) && (!r || zt(e2, r, n));
}
var mr = tt("Milliseconds"), gr = tt("Seconds"), Nt = tt("Minutes"), yr = tt("Hours"), Qs = tt("Day"), el = tt("Date"), ln = tt("Month"), $t = tt("FullYear");
function pd(e2, t) {
  return t === void 0 ? $t(ue(e2, wt)) : Ae(e2, t + 10, bt);
}
function hd(e2, t) {
  return t === void 0 ? $t(ue(e2, xt)) : Ae(e2, t + 100, bt);
}
function tl(e2, t, r) {
  var n = (Qs(e2) + 7 - (r || 0)) % 7;
  return t === void 0 ? n : Ae(e2, t - n, yt);
}
function md(e2, t, r, n) {
  var a, o, i;
  switch (r) {
    case on:
    case dr:
    case fr:
    case vr:
    case yt:
    case Pt:
      a = t.getTime() - e2.getTime();
      break;
    case pr:
    case bt:
    case wt:
    case xt:
      a = ($t(t) - $t(e2)) * 12 + ln(t) - ln(e2);
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  switch (r) {
    case on:
      o = 1;
      break;
    case dr:
      o = 1e3;
      break;
    case fr:
      o = 1e3 * 60;
      break;
    case vr:
      o = 1e3 * 60 * 60;
      break;
    case yt:
      o = 1e3 * 60 * 60 * 24;
      break;
    case Pt:
      o = 1e3 * 60 * 60 * 24 * 7;
      break;
    case pr:
      o = 1;
      break;
    case bt:
      o = 12;
      break;
    case wt:
      o = 120;
      break;
    case xt:
      o = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  return i = a / o, n ? i : Math.round(i);
}
function tt(e2) {
  var t = function(r) {
    switch (r) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  }(e2);
  return function(r, n) {
    if (n === void 0) return r["get" + e2]();
    var a = new Date(r);
    return a["set" + e2](n), t && a["get" + e2]() != n && (e2 === "Hours" || n >= t && a.getHours() - r.getHours() < Math.floor(n / t)) && a["set" + e2](n + t), a;
  };
}
function Bt(e2) {
  return function(t, r, n) {
    return e2(+ue(t, n), +ue(r, n));
  };
}
const Go = Object.freeze(Object.defineProperty({ __proto__: null, add: Ae, century: hd, date: el, day: Qs, decade: pd, diff: md, endOf: sn, eq: Or, gt: hn, gte: Tr, hours: yr, inRange: Js, lt: Ia, lte: zt, max: Zs, milliseconds: mr, min: Xs, minutes: Nt, month: ln, neq: La, seconds: gr, startOf: ue, subtract: hr, weekday: tl, year: $t }, Symbol.toStringTag, { value: "Module" }));
function gd(e2, t, r) {
  var n = -1, a = e2.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++n < a; ) o[n] = e2[n + t];
  return o;
}
var rl = gd;
function yd(e2, t) {
  return e2 === t || e2 !== e2 && t !== t;
}
var Cr = yd, bd = typeof xe == "object" && xe && xe.Object === Object && xe, nl = bd, wd = nl, xd = typeof self == "object" && self && self.Object === Object && self, $d = wd || xd || Function("return this")(), He = $d, Ed = He, Dd = Ed.Symbol, Yt = Dd, Vo = Yt, al = Object.prototype, _d = al.hasOwnProperty, Sd = al.toString, rr = Vo ? Vo.toStringTag : void 0;
function Od(e2) {
  var t = _d.call(e2, rr), r = e2[rr];
  try {
    e2[rr] = void 0;
    var n = true;
  } catch {
  }
  var a = Sd.call(e2);
  return n && (t ? e2[rr] = r : delete e2[rr]), a;
}
var Td = Od, Cd = Object.prototype, kd = Cd.toString;
function Md(e2) {
  return kd.call(e2);
}
var Ad = Md, Xo = Yt, Pd = Td, Nd = Ad, Rd = "[object Null]", jd = "[object Undefined]", Zo = Xo ? Xo.toStringTag : void 0;
function Ld(e2) {
  return e2 == null ? e2 === void 0 ? jd : Rd : Zo && Zo in Object(e2) ? Pd(e2) : Nd(e2);
}
var Ut = Ld;
function Id(e2) {
  var t = typeof e2;
  return e2 != null && (t == "object" || t == "function");
}
var qe = Id, Fd = Ut, Wd = qe, Hd = "[object AsyncFunction]", zd = "[object Function]", Bd = "[object GeneratorFunction]", Yd = "[object Proxy]";
function Ud(e2) {
  if (!Wd(e2)) return false;
  var t = Fd(e2);
  return t == zd || t == Bd || t == Hd || t == Yd;
}
var Fa = Ud, qd = 9007199254740991;
function Kd(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= qd;
}
var Wa = Kd, Gd = Fa, Vd = Wa;
function Xd(e2) {
  return e2 != null && Vd(e2.length) && !Gd(e2);
}
var kr = Xd, Zd = 9007199254740991, Jd = /^(?:0|[1-9]\d*)$/;
function Qd(e2, t) {
  var r = typeof e2;
  return t = t ?? Zd, !!t && (r == "number" || r != "symbol" && Jd.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t;
}
var Ha = Qd, ef = Cr, tf = kr, rf = Ha, nf = qe;
function af(e2, t, r) {
  if (!nf(r)) return false;
  var n = typeof t;
  return (n == "number" ? tf(r) && rf(t, r.length) : n == "string" && t in r) ? ef(r[t], e2) : false;
}
var mn = af, of = /\s/;
function sf(e2) {
  for (var t = e2.length; t-- && of.test(e2.charAt(t)); ) ;
  return t;
}
var lf = sf, cf = lf, uf = /^\s+/;
function df(e2) {
  return e2 && e2.slice(0, cf(e2) + 1).replace(uf, "");
}
var ff = df;
function vf(e2) {
  return e2 != null && typeof e2 == "object";
}
var rt = vf, pf = Ut, hf = rt, mf = "[object Symbol]";
function gf(e2) {
  return typeof e2 == "symbol" || hf(e2) && pf(e2) == mf;
}
var Mr = gf, yf = ff, Jo = qe, bf = Mr, Qo = NaN, wf = /^[-+]0x[0-9a-f]+$/i, xf = /^0b[01]+$/i, $f = /^0o[0-7]+$/i, Ef = parseInt;
function Df(e2) {
  if (typeof e2 == "number") return e2;
  if (bf(e2)) return Qo;
  if (Jo(e2)) {
    var t = typeof e2.valueOf == "function" ? e2.valueOf() : e2;
    e2 = Jo(t) ? t + "" : t;
  }
  if (typeof e2 != "string") return e2 === 0 ? e2 : +e2;
  e2 = yf(e2);
  var r = xf.test(e2);
  return r || $f.test(e2) ? Ef(e2.slice(2), r ? 2 : 8) : wf.test(e2) ? Qo : +e2;
}
var _f = Df, Sf = _f, ei = 1 / 0, Of = 17976931348623157e292;
function Tf(e2) {
  if (!e2) return e2 === 0 ? e2 : 0;
  if (e2 = Sf(e2), e2 === ei || e2 === -ei) {
    var t = e2 < 0 ? -1 : 1;
    return t * Of;
  }
  return e2 === e2 ? e2 : 0;
}
var ol = Tf, Cf = ol;
function kf(e2) {
  var t = Cf(e2), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var il = kf, Mf = rl, Af = mn, Pf = il, Nf = Math.ceil, Rf = Math.max;
function jf(e2, t, r) {
  (r ? Af(e2, t, r) : t === void 0) ? t = 1 : t = Rf(Pf(t), 0);
  var n = e2 == null ? 0 : e2.length;
  if (!n || t < 1) return [];
  for (var a = 0, o = 0, i = Array(Nf(n / t)); a < n; ) i[o++] = Mf(e2, a, a += t);
  return i;
}
var Lf = jf;
const If = ne(Lf);
function nt(e2) {
  return e2 && e2.ownerDocument || document;
}
function za(e2) {
  var t = nt(e2);
  return t && t.defaultView || window;
}
function Ba(e2, t) {
  return za(e2).getComputedStyle(e2, t);
}
var Ff = /([A-Z])/g;
function sl(e2) {
  return e2.replace(Ff, "-$1").toLowerCase();
}
var Wf = /^ms-/;
function Br(e2) {
  return sl(e2).replace(Wf, "-ms-");
}
var Hf = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ll(e2) {
  return !!(e2 && Hf.test(e2));
}
function ce(e2, t) {
  var r = "", n = "";
  if (typeof t == "string") return e2.style.getPropertyValue(Br(t)) || Ba(e2).getPropertyValue(Br(t));
  Object.keys(t).forEach(function(a) {
    var o = t[a];
    !o && o !== 0 ? e2.style.removeProperty(Br(a)) : ll(a) ? n += a + "(" + o + ") " : r += Br(a) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e2.style.cssText += ";" + r;
}
function Ye(e2, t) {
  if (e2.contains) return e2.contains(t);
  if (e2.compareDocumentPosition) return e2 === t || !!(e2.compareDocumentPosition(t) & 16);
}
const zf = Object.freeze(Object.defineProperty({ __proto__: null, default: Ye }, Symbol.toStringTag, { value: "Module" }));
function cl(e2) {
  return "nodeType" in e2 && e2.nodeType === document.DOCUMENT_NODE;
}
function gn(e2) {
  return "window" in e2 && e2.window === e2 ? e2 : cl(e2) && e2.defaultView || false;
}
function ul(e2) {
  var t = e2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function r(n, a) {
    var o = gn(n);
    if (a === void 0) return o ? o[e2] : n[t];
    o ? o.scrollTo(o[e2], a) : n[t] = a;
  }
  return r;
}
const yn = ul("pageXOffset"), Rt = ul("pageYOffset");
function Me(e2) {
  var t = nt(e2), r = { top: 0, left: 0, height: 0, width: 0 }, n = t && t.documentElement;
  return !n || !Ye(n, e2) || (e2.getBoundingClientRect !== void 0 && (r = e2.getBoundingClientRect()), r = { top: r.top + Rt(n) - (n.clientTop || 0), left: r.left + yn(n) - (n.clientLeft || 0), width: r.width, height: r.height }), r;
}
var Bf = function(t) {
  return !!t && "offsetParent" in t;
};
function Ya(e2) {
  for (var t = nt(e2), r = e2 && e2.offsetParent; Bf(r) && r.nodeName !== "HTML" && ce(r, "position") === "static"; ) r = r.offsetParent;
  return r || t.documentElement;
}
var Yf = function(t) {
  return t.nodeName && t.nodeName.toLowerCase();
};
function bn(e2, t) {
  var r = { top: 0, left: 0 }, n;
  if (ce(e2, "position") === "fixed") n = e2.getBoundingClientRect();
  else {
    var a = t || Ya(e2);
    n = Me(e2), Yf(a) !== "html" && (r = Me(a));
    var o = String(ce(a, "borderTopWidth") || 0);
    r.top += parseInt(o, 10) - Rt(a) || 0;
    var i = String(ce(a, "borderLeftWidth") || 0);
    r.left += parseInt(i, 10) - yn(a) || 0;
  }
  var s = String(ce(e2, "marginTop") || 0), l = String(ce(e2, "marginLeft") || 0);
  return ae({}, n, { top: n.top - r.top - (parseInt(s, 10) || 0), left: n.left - r.left - (parseInt(l, 10) || 0) });
}
const Ua = !!(typeof window < "u" && window.document && window.document.createElement);
var ti = (/* @__PURE__ */ new Date()).getTime();
function Uf(e2) {
  var t = (/* @__PURE__ */ new Date()).getTime(), r = Math.max(0, 16 - (t - ti)), n = setTimeout(e2, r);
  return ti = t, n;
}
var qf = ["", "webkit", "moz", "o", "ms"], ha = "clearTimeout", ma = Uf, ri = function(t, r) {
  return t + (t ? r[0].toUpperCase() + r.substr(1) : r) + "AnimationFrame";
};
Ua && qf.some(function(e2) {
  var t = ri(e2, "request");
  return t in window && (ha = ri(e2, "cancel"), ma = function(n) {
    return window[t](n);
  }), !!ma;
});
var br = function(t) {
  typeof window[ha] == "function" && window[ha](t);
}, Ar = ma, ta;
function wn(e2, t) {
  if (!ta) {
    var r = document.body, n = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
    ta = function(o, i) {
      return n.call(o, i);
    };
  }
  return ta(e2, t);
}
var Kf = Function.prototype.bind.call(Function.prototype.call, [].slice);
function xn(e2, t) {
  return Kf(e2.querySelectorAll(t));
}
var ga = false, ya = false;
try {
  var ra = { get passive() {
    return ga = true;
  }, get once() {
    return ya = ga = true;
  } };
  Ua && (window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, true));
} catch {
}
function qa(e2, t, r, n) {
  if (n && typeof n != "boolean" && !ya) {
    var a = n.once, o = n.capture, i = r;
    !ya && a && (i = r.__once || function s(l) {
      this.removeEventListener(t, s, o), r.call(this, l);
    }, r.__once = i), e2.addEventListener(t, i, ga ? n : o);
  }
  e2.addEventListener(t, r, n);
}
function Gf(e2) {
  const t = F.useRef(e2);
  return F.useEffect(() => {
    t.current = e2;
  }, [e2]), t;
}
function ni(e2) {
  const t = Gf(e2);
  return F.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
function ai() {
  return F.useState(null);
}
function Vf() {
  const e2 = F.useRef(true), t = F.useRef(() => e2.current);
  return F.useEffect(() => (e2.current = true, () => {
    e2.current = false;
  }), []), t.current;
}
function Xf(e2) {
  const t = Vf();
  return [e2[0], F.useCallback((r) => {
    if (t()) return e2[1](r);
  }, [t, e2[1]])];
}
var ye = "top", _e = "bottom", Se = "right", be = "left", Ka = "auto", Pr = [ye, _e, Se, be], jt = "start", wr = "end", Zf = "clippingParents", dl = "viewport", nr = "popper", Jf = "reference", oi = Pr.reduce(function(e2, t) {
  return e2.concat([t + "-" + jt, t + "-" + wr]);
}, []), Ga = [].concat(Pr, [Ka]).reduce(function(e2, t) {
  return e2.concat([t, t + "-" + jt, t + "-" + wr]);
}, []), Qf = "beforeRead", ev = "read", tv = "afterRead", rv = "beforeMain", nv = "main", av = "afterMain", ov = "beforeWrite", iv = "write", sv = "afterWrite", lv = [Qf, ev, tv, rv, nv, av, ov, iv, sv];
function Ie(e2) {
  return e2.split("-")[0];
}
function $e(e2) {
  if (e2 == null) return window;
  if (e2.toString() !== "[object Window]") {
    var t = e2.ownerDocument;
    return t && t.defaultView || window;
  }
  return e2;
}
function Et(e2) {
  var t = $e(e2).Element;
  return e2 instanceof t || e2 instanceof Element;
}
function Fe(e2) {
  var t = $e(e2).HTMLElement;
  return e2 instanceof t || e2 instanceof HTMLElement;
}
function Va(e2) {
  if (typeof ShadowRoot > "u") return false;
  var t = $e(e2).ShadowRoot;
  return e2 instanceof t || e2 instanceof ShadowRoot;
}
var mt = Math.max, cn = Math.min, Lt = Math.round;
function ba() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fl() {
  return !/^((?!chrome|android).)*safari/i.test(ba());
}
function It(e2, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e2.getBoundingClientRect(), a = 1, o = 1;
  t && Fe(e2) && (a = e2.offsetWidth > 0 && Lt(n.width) / e2.offsetWidth || 1, o = e2.offsetHeight > 0 && Lt(n.height) / e2.offsetHeight || 1);
  var i = Et(e2) ? $e(e2) : window, s = i.visualViewport, l = !fl() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / a, u = (n.top + (l && s ? s.offsetTop : 0)) / o, d = n.width / a, f = n.height / o;
  return { width: d, height: f, top: u, right: c + d, bottom: u + f, left: c, x: c, y: u };
}
function Xa(e2) {
  var t = It(e2), r = e2.offsetWidth, n = e2.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e2.offsetLeft, y: e2.offsetTop, width: r, height: n };
}
function vl(e2, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e2.contains(t)) return true;
  if (r && Va(r)) {
    var n = t;
    do {
      if (n && e2.isSameNode(n)) return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Qe(e2) {
  return e2 ? (e2.nodeName || "").toLowerCase() : null;
}
function Ue(e2) {
  return $e(e2).getComputedStyle(e2);
}
function cv(e2) {
  return ["table", "td", "th"].indexOf(Qe(e2)) >= 0;
}
function at(e2) {
  return ((Et(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function $n(e2) {
  return Qe(e2) === "html" ? e2 : e2.assignedSlot || e2.parentNode || (Va(e2) ? e2.host : null) || at(e2);
}
function ii(e2) {
  return !Fe(e2) || Ue(e2).position === "fixed" ? null : e2.offsetParent;
}
function uv(e2) {
  var t = /firefox/i.test(ba()), r = /Trident/i.test(ba());
  if (r && Fe(e2)) {
    var n = Ue(e2);
    if (n.position === "fixed") return null;
  }
  var a = $n(e2);
  for (Va(a) && (a = a.host); Fe(a) && ["html", "body"].indexOf(Qe(a)) < 0; ) {
    var o = Ue(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function Nr(e2) {
  for (var t = $e(e2), r = ii(e2); r && cv(r) && Ue(r).position === "static"; ) r = ii(r);
  return r && (Qe(r) === "html" || Qe(r) === "body" && Ue(r).position === "static") ? t : r || uv(e2) || t;
}
function Za(e2) {
  return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
}
function lr(e2, t, r) {
  return mt(e2, cn(t, r));
}
function dv(e2, t, r) {
  var n = lr(e2, t, r);
  return n > r ? r : n;
}
function pl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function hl(e2) {
  return Object.assign({}, pl(), e2);
}
function ml(e2, t) {
  return t.reduce(function(r, n) {
    return r[n] = e2, r;
  }, {});
}
var fv = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t, hl(typeof t != "number" ? t : ml(t, Pr));
};
function vv(e2) {
  var t, r = e2.state, n = e2.name, a = e2.options, o = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Ie(r.placement), l = Za(s), c = [be, Se].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!o || !i)) {
    var d = fv(a.padding, r), f = Xa(o), v = l === "y" ? ye : be, h = l === "y" ? _e : Se, p = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], m = i[l] - r.rects.reference[l], y = Nr(o), g = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, $ = p / 2 - m / 2, b = d[v], E = g - f[u] - d[h], _ = g / 2 - f[u] / 2 + $, M = lr(b, _, E), P = l;
    r.modifiersData[n] = (t = {}, t[P] = M, t.centerOffset = M - _, t);
  }
}
function pv(e2) {
  var t = e2.state, r = e2.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || vl(t.elements.popper, a) && (t.elements.arrow = a));
}
const hv = { name: "arrow", enabled: true, phase: "main", fn: vv, effect: pv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ft(e2) {
  return e2.split("-")[1];
}
var mv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function gv(e2, t) {
  var r = e2.x, n = e2.y, a = t.devicePixelRatio || 1;
  return { x: Lt(r * a) / a || 0, y: Lt(n * a) / a || 0 };
}
function si(e2) {
  var t, r = e2.popper, n = e2.popperRect, a = e2.placement, o = e2.variation, i = e2.offsets, s = e2.position, l = e2.gpuAcceleration, c = e2.adaptive, u = e2.roundOffsets, d = e2.isFixed, f = i.x, v = f === void 0 ? 0 : f, h = i.y, p = h === void 0 ? 0 : h, m = typeof u == "function" ? u({ x: v, y: p }) : { x: v, y: p };
  v = m.x, p = m.y;
  var y = i.hasOwnProperty("x"), g = i.hasOwnProperty("y"), $ = be, b = ye, E = window;
  if (c) {
    var _ = Nr(r), M = "clientHeight", P = "clientWidth";
    if (_ === $e(r) && (_ = at(r), Ue(_).position !== "static" && s === "absolute" && (M = "scrollHeight", P = "scrollWidth")), _ = _, a === ye || (a === be || a === Se) && o === wr) {
      b = _e;
      var k = d && _ === E && E.visualViewport ? E.visualViewport.height : _[M];
      p -= k - n.height, p *= l ? 1 : -1;
    }
    if (a === be || (a === ye || a === _e) && o === wr) {
      $ = Se;
      var T = d && _ === E && E.visualViewport ? E.visualViewport.width : _[P];
      v -= T - n.width, v *= l ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, c && mv), B = u === true ? gv({ x: v, y: p }, $e(r)) : { x: v, y: p };
  if (v = B.x, p = B.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[b] = g ? "0" : "", H[$] = y ? "0" : "", H.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[b] = g ? p + "px" : "", t[$] = y ? v + "px" : "", t.transform = "", t));
}
function yv(e2) {
  var t = e2.state, r = e2.options, n = r.gpuAcceleration, a = n === void 0 ? true : n, o = r.adaptive, i = o === void 0 ? true : o, s = r.roundOffsets, l = s === void 0 ? true : s, c = { placement: Ie(t.placement), variation: Ft(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, si(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, si(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
const bv = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: yv, data: {} };
var Yr = { passive: true };
function wv(e2) {
  var t = e2.state, r = e2.instance, n = e2.options, a = n.scroll, o = a === void 0 ? true : a, i = n.resize, s = i === void 0 ? true : i, l = $e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Yr);
  }), s && l.addEventListener("resize", r.update, Yr), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Yr);
    }), s && l.removeEventListener("resize", r.update, Yr);
  };
}
const xv = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: wv, data: {} };
var $v = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tn(e2) {
  return e2.replace(/left|right|bottom|top/g, function(t) {
    return $v[t];
  });
}
var Ev = { start: "end", end: "start" };
function li(e2) {
  return e2.replace(/start|end/g, function(t) {
    return Ev[t];
  });
}
function Ja(e2) {
  var t = $e(e2), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Qa(e2) {
  return It(at(e2)).left + Ja(e2).scrollLeft;
}
function Dv(e2, t) {
  var r = $e(e2), n = at(e2), a = r.visualViewport, o = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (a) {
    o = a.width, i = a.height;
    var c = fl();
    (c || !c && t === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return { width: o, height: i, x: s + Qa(e2), y: l };
}
function _v(e2) {
  var t, r = at(e2), n = Ja(e2), a = (t = e2.ownerDocument) == null ? void 0 : t.body, o = mt(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = mt(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -n.scrollLeft + Qa(e2), l = -n.scrollTop;
  return Ue(a || r).direction === "rtl" && (s += mt(r.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: i, x: s, y: l };
}
function eo(e2) {
  var t = Ue(e2), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function gl(e2) {
  return ["html", "body", "#document"].indexOf(Qe(e2)) >= 0 ? e2.ownerDocument.body : Fe(e2) && eo(e2) ? e2 : gl($n(e2));
}
function cr(e2, t) {
  var r;
  t === void 0 && (t = []);
  var n = gl(e2), a = n === ((r = e2.ownerDocument) == null ? void 0 : r.body), o = $e(n), i = a ? [o].concat(o.visualViewport || [], eo(n) ? n : []) : n, s = t.concat(i);
  return a ? s : s.concat(cr($n(i)));
}
function wa(e2) {
  return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
}
function Sv(e2, t) {
  var r = It(e2, false, t === "fixed");
  return r.top = r.top + e2.clientTop, r.left = r.left + e2.clientLeft, r.bottom = r.top + e2.clientHeight, r.right = r.left + e2.clientWidth, r.width = e2.clientWidth, r.height = e2.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ci(e2, t, r) {
  return t === dl ? wa(Dv(e2, r)) : Et(t) ? Sv(t, r) : wa(_v(at(e2)));
}
function Ov(e2) {
  var t = cr($n(e2)), r = ["absolute", "fixed"].indexOf(Ue(e2).position) >= 0, n = r && Fe(e2) ? Nr(e2) : e2;
  return Et(n) ? t.filter(function(a) {
    return Et(a) && vl(a, n) && Qe(a) !== "body";
  }) : [];
}
function Tv(e2, t, r, n) {
  var a = t === "clippingParents" ? Ov(e2) : [].concat(t), o = [].concat(a, [r]), i = o[0], s = o.reduce(function(l, c) {
    var u = ci(e2, c, n);
    return l.top = mt(u.top, l.top), l.right = cn(u.right, l.right), l.bottom = cn(u.bottom, l.bottom), l.left = mt(u.left, l.left), l;
  }, ci(e2, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function yl(e2) {
  var t = e2.reference, r = e2.element, n = e2.placement, a = n ? Ie(n) : null, o = n ? Ft(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (a) {
    case ye:
      l = { x: i, y: t.y - r.height };
      break;
    case _e:
      l = { x: i, y: t.y + t.height };
      break;
    case Se:
      l = { x: t.x + t.width, y: s };
      break;
    case be:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = a ? Za(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case jt:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case wr:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function xr(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e2.placement : n, o = r.strategy, i = o === void 0 ? e2.strategy : o, s = r.boundary, l = s === void 0 ? Zf : s, c = r.rootBoundary, u = c === void 0 ? dl : c, d = r.elementContext, f = d === void 0 ? nr : d, v = r.altBoundary, h = v === void 0 ? false : v, p = r.padding, m = p === void 0 ? 0 : p, y = hl(typeof m != "number" ? m : ml(m, Pr)), g = f === nr ? Jf : nr, $ = e2.rects.popper, b = e2.elements[h ? g : f], E = Tv(Et(b) ? b : b.contextElement || at(e2.elements.popper), l, u, i), _ = It(e2.elements.reference), M = yl({ reference: _, element: $, placement: a }), P = wa(Object.assign({}, $, M)), k = f === nr ? P : _, T = { top: E.top - k.top + y.top, bottom: k.bottom - E.bottom + y.bottom, left: E.left - k.left + y.left, right: k.right - E.right + y.right }, D = e2.modifiersData.offset;
  if (f === nr && D) {
    var B = D[a];
    Object.keys(T).forEach(function(H) {
      var N = [Se, _e].indexOf(H) >= 0 ? 1 : -1, A = [ye, _e].indexOf(H) >= 0 ? "y" : "x";
      T[H] += B[A] * N;
    });
  }
  return T;
}
function Cv(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Ga : l, u = Ft(n), d = u ? s ? oi : oi.filter(function(h) {
    return Ft(h) === u;
  }) : Pr, f = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(h, p) {
    return h[p] = xr(e2, { placement: p, boundary: a, rootBoundary: o, padding: i })[Ie(p)], h;
  }, {});
  return Object.keys(v).sort(function(h, p) {
    return v[h] - v[p];
  });
}
function kv(e2) {
  if (Ie(e2) === Ka) return [];
  var t = tn(e2);
  return [li(e2), t, li(t)];
}
function Mv(e2) {
  var t = e2.state, r = e2.options, n = e2.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? true : a, i = r.altAxis, s = i === void 0 ? true : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, h = v === void 0 ? true : v, p = r.allowedAutoPlacements, m = t.options.placement, y = Ie(m), g = y === m, $ = l || (g || !h ? [tn(m)] : kv(m)), b = [m].concat($).reduce(function(j, z) {
      return j.concat(Ie(z) === Ka ? Cv(t, { placement: z, boundary: u, rootBoundary: d, padding: c, flipVariations: h, allowedAutoPlacements: p }) : z);
    }, []), E = t.rects.reference, _ = t.rects.popper, M = /* @__PURE__ */ new Map(), P = true, k = b[0], T = 0; T < b.length; T++) {
      var D = b[T], B = Ie(D), H = Ft(D) === jt, N = [ye, _e].indexOf(B) >= 0, A = N ? "width" : "height", O = xr(t, { placement: D, boundary: u, rootBoundary: d, altBoundary: f, padding: c }), R = N ? H ? Se : be : H ? _e : ye;
      E[A] > _[A] && (R = tn(R));
      var L = tn(R), I = [];
      if (o && I.push(O[B] <= 0), s && I.push(O[R] <= 0, O[L] <= 0), I.every(function(j) {
        return j;
      })) {
        k = D, P = false;
        break;
      }
      M.set(D, I);
    }
    if (P) for (var Y = h ? 3 : 1, U = function(z) {
      var q = b.find(function(K) {
        var G = M.get(K);
        if (G) return G.slice(0, z).every(function(V) {
          return V;
        });
      });
      if (q) return k = q, "break";
    }, S = Y; S > 0; S--) {
      var C = U(S);
      if (C === "break") break;
    }
    t.placement !== k && (t.modifiersData[n]._skip = true, t.placement = k, t.reset = true);
  }
}
const Av = { name: "flip", enabled: true, phase: "main", fn: Mv, requiresIfExists: ["offset"], data: { _skip: false } };
function ui(e2, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e2.top - t.height - r.y, right: e2.right - t.width + r.x, bottom: e2.bottom - t.height + r.y, left: e2.left - t.width - r.x };
}
function di(e2) {
  return [ye, Se, _e, be].some(function(t) {
    return e2[t] >= 0;
  });
}
function Pv(e2) {
  var t = e2.state, r = e2.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, i = xr(t, { elementContext: "reference" }), s = xr(t, { altBoundary: true }), l = ui(i, n), c = ui(s, a, o), u = di(l), d = di(c);
  t.modifiersData[r] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": d });
}
const Nv = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Pv };
function Rv(e2, t, r) {
  var n = Ie(e2), a = [be, ye].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, { placement: e2 })) : r, i = o[0], s = o[1];
  return i = i || 0, s = (s || 0) * a, [be, Se].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function jv(e2) {
  var t = e2.state, r = e2.options, n = e2.name, a = r.offset, o = a === void 0 ? [0, 0] : a, i = Ga.reduce(function(u, d) {
    return u[d] = Rv(d, t.rects, o), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const Lv = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: jv };
function Iv(e2) {
  var t = e2.state, r = e2.name;
  t.modifiersData[r] = yl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const Fv = { name: "popperOffsets", enabled: true, phase: "read", fn: Iv, data: {} };
function Wv(e2) {
  return e2 === "x" ? "y" : "x";
}
function Hv(e2) {
  var t = e2.state, r = e2.options, n = e2.name, a = r.mainAxis, o = a === void 0 ? true : a, i = r.altAxis, s = i === void 0 ? false : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, v = f === void 0 ? true : f, h = r.tetherOffset, p = h === void 0 ? 0 : h, m = xr(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }), y = Ie(t.placement), g = Ft(t.placement), $ = !g, b = Za(y), E = Wv(b), _ = t.modifiersData.popperOffsets, M = t.rects.reference, P = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, T = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (_) {
    if (o) {
      var H, N = b === "y" ? ye : be, A = b === "y" ? _e : Se, O = b === "y" ? "height" : "width", R = _[b], L = R + m[N], I = R - m[A], Y = v ? -P[O] / 2 : 0, U = g === jt ? M[O] : P[O], S = g === jt ? -P[O] : -M[O], C = t.elements.arrow, j = v && C ? Xa(C) : { width: 0, height: 0 }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : pl(), q = z[N], K = z[A], G = lr(0, M[O], j[O]), V = $ ? M[O] / 2 - Y - G - q - T.mainAxis : U - G - q - T.mainAxis, re = $ ? -M[O] / 2 + Y + G + K + T.mainAxis : S + G + K + T.mainAxis, le = t.elements.arrow && Nr(t.elements.arrow), Te = le ? b === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, Ce = (H = D == null ? void 0 : D[b]) != null ? H : 0, Jn = R + V - Ce - Te, Qn = R + re - Ce, No = lr(v ? cn(L, Jn) : L, R, v ? mt(I, Qn) : I);
      _[b] = No, B[b] = No - R;
    }
    if (s) {
      var Ro, Pu = b === "x" ? ye : be, Nu = b === "x" ? _e : Se, dt = _[E], zr = E === "y" ? "height" : "width", jo = dt + m[Pu], Lo = dt - m[Nu], ea = [ye, be].indexOf(y) !== -1, Io = (Ro = D == null ? void 0 : D[E]) != null ? Ro : 0, Fo = ea ? jo : dt - M[zr] - P[zr] - Io + T.altAxis, Wo = ea ? dt + M[zr] + P[zr] - Io - T.altAxis : Lo, Ho = v && ea ? dv(Fo, dt, Wo) : lr(v ? Fo : jo, dt, v ? Wo : Lo);
      _[E] = Ho, B[E] = Ho - dt;
    }
    t.modifiersData[n] = B;
  }
}
const zv = { name: "preventOverflow", enabled: true, phase: "main", fn: Hv, requiresIfExists: ["offset"] };
function Bv(e2) {
  return { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop };
}
function Yv(e2) {
  return e2 === $e(e2) || !Fe(e2) ? Ja(e2) : Bv(e2);
}
function Uv(e2) {
  var t = e2.getBoundingClientRect(), r = Lt(t.width) / e2.offsetWidth || 1, n = Lt(t.height) / e2.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function qv(e2, t, r) {
  r === void 0 && (r = false);
  var n = Fe(t), a = Fe(t) && Uv(t), o = at(t), i = It(e2, a, r), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (n || !n && !r) && ((Qe(t) !== "body" || eo(o)) && (s = Yv(t)), Fe(t) ? (l = It(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Qa(o))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Kv(e2) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e2.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && a(l);
      }
    }), n.push(o);
  }
  return e2.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Gv(e2) {
  var t = Kv(e2);
  return lv.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Vv(e2) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e2());
      });
    })), t;
  };
}
function Xv(e2) {
  var t = e2.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vi() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Zv(e2) {
  e2 === void 0 && (e2 = {});
  var t = e2, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? fi : a;
  return function(s, l, c) {
    c === void 0 && (c = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, o), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, d = [], f = false, v = { state: u, setOptions: function(y) {
      var g = typeof y == "function" ? y(u.options) : y;
      p(), u.options = Object.assign({}, o, u.options, g), u.scrollParents = { reference: Et(s) ? cr(s) : s.contextElement ? cr(s.contextElement) : [], popper: cr(l) };
      var $ = Gv(Xv([].concat(n, u.options.modifiers)));
      return u.orderedModifiers = $.filter(function(b) {
        return b.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var y = u.elements, g = y.reference, $ = y.popper;
        if (vi(g, $)) {
          u.rects = { reference: qv(g, Nr($), u.options.strategy === "fixed"), popper: Xa($) }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(T) {
            return u.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var b = 0; b < u.orderedModifiers.length; b++) {
            if (u.reset === true) {
              u.reset = false, b = -1;
              continue;
            }
            var E = u.orderedModifiers[b], _ = E.fn, M = E.options, P = M === void 0 ? {} : M, k = E.name;
            typeof _ == "function" && (u = _({ state: u, options: P, name: k, instance: v }) || u);
          }
        }
      }
    }, update: Vv(function() {
      return new Promise(function(m) {
        v.forceUpdate(), m(u);
      });
    }), destroy: function() {
      p(), f = true;
    } };
    if (!vi(s, l)) return v;
    v.setOptions(c).then(function(m) {
      !f && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function h() {
      u.orderedModifiers.forEach(function(m) {
        var y = m.name, g = m.options, $ = g === void 0 ? {} : g, b = m.effect;
        if (typeof b == "function") {
          var E = b({ state: u, name: y, instance: v, options: $ }), _ = function() {
          };
          d.push(E || _);
        }
      });
    }
    function p() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return v;
  };
}
var Jv = Zv({ defaultModifiers: [Nv, Fv, bv, xv, Lv, Av, zv, hv] }), pi = function(t) {
  return { position: t, top: "0", left: "0", opacity: "0", pointerEvents: "none" };
}, Qv = { name: "applyStyles", enabled: false }, ep = { name: "ariaDescribedBy", enabled: true, phase: "afterWrite", effect: function(t) {
  var r = t.state;
  return function() {
    var n = r.elements, a = n.reference, o = n.popper;
    if ("removeAttribute" in a) {
      var i = (a.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
        return s.trim() !== o.id;
      });
      i.length ? a.setAttribute("aria-describedby", i.join(",")) : a.removeAttribute("aria-describedby");
    }
  };
}, fn: function(t) {
  var r, n = t.state, a = n.elements, o = a.popper, i = a.reference, s = (r = o.getAttribute("role")) == null ? void 0 : r.toLowerCase();
  if (o.id && s === "tooltip" && "setAttribute" in i) {
    var l = i.getAttribute("aria-describedby");
    if (l && l.split(",").indexOf(o.id) !== -1) return;
    i.setAttribute("aria-describedby", l ? l + "," + o.id : o.id);
  }
} }, tp = [];
function rp(e2, t, r) {
  var n = r === void 0 ? {} : r, a = n.enabled, o = a === void 0 ? true : a, i = n.placement, s = i === void 0 ? "bottom" : i, l = n.strategy, c = l === void 0 ? "absolute" : l, u = n.modifiers, d = u === void 0 ? tp : u, f = Na(n, ["enabled", "placement", "strategy", "modifiers"]), v = F.useRef(), h = F.useCallback(function() {
    var b;
    (b = v.current) == null || b.update();
  }, []), p = F.useCallback(function() {
    var b;
    (b = v.current) == null || b.forceUpdate();
  }, []), m = Xf(F.useState({ placement: s, update: h, forceUpdate: p, attributes: {}, styles: { popper: pi(c), arrow: {} } })), y = m[0], g = m[1], $ = F.useMemo(function() {
    return { name: "updateStateModifier", enabled: true, phase: "write", requires: ["computeStyles"], fn: function(E) {
      var _ = E.state, M = {}, P = {};
      Object.keys(_.elements).forEach(function(k) {
        M[k] = _.styles[k], P[k] = _.attributes[k];
      }), g({ state: _, styles: M, attributes: P, update: h, forceUpdate: p, placement: _.placement });
    } };
  }, [h, p, g]);
  return F.useEffect(function() {
    !v.current || !o || v.current.setOptions({ placement: s, strategy: c, modifiers: [].concat(d, [$, Qv]) });
  }, [c, s, $, o]), F.useEffect(function() {
    if (!(!o || e2 == null || t == null)) return v.current = Jv(e2, t, ae({}, f, { placement: s, strategy: c, modifiers: [].concat(d, [ep, $]) })), function() {
      v.current != null && (v.current.destroy(), v.current = void 0, g(function(b) {
        return ae({}, b, { attributes: {}, styles: { popper: pi(c) } });
      }));
    };
  }, [o, e2, t]), y;
}
function to(e2, t, r, n) {
  var a = n && typeof n != "boolean" ? n.capture : n;
  e2.removeEventListener(t, r, a), r.__once && e2.removeEventListener(t, r.__once, a);
}
function Le(e2, t, r, n) {
  return qa(e2, t, r, n), function() {
    to(e2, t, r, n);
  };
}
const np = Object.freeze(Object.defineProperty({ __proto__: null, default: Le }, Symbol.toStringTag, { value: "Module" }));
var ap = function() {
}, op = ap;
const ip = ne(op);
function sp(e2) {
  return e2 && "setState" in e2 ? Rs.findDOMNode(e2) : e2 ?? null;
}
const lp = function(e2) {
  return nt(sp(e2));
};
var cp = 27, hi = function() {
};
function up(e2) {
  return e2.button === 0;
}
function dp(e2) {
  return !!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey);
}
var mi = function(t) {
  return t && ("current" in t ? t.current : t);
};
function fp(e2, t, r) {
  var n = r === void 0 ? {} : r, a = n.disabled, o = n.clickTrigger, i = o === void 0 ? "click" : o, s = F.useRef(false), l = t || hi, c = F.useCallback(function(f) {
    var v, h = mi(e2);
    ip(!!h, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !h || dp(f) || !up(f) || !!Ye(h, (v = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? v : f.target);
  }, [e2]), u = ni(function(f) {
    s.current || l(f);
  }), d = ni(function(f) {
    f.keyCode === cp && l(f);
  });
  F.useEffect(function() {
    if (!(a || e2 == null)) {
      var f = window.event, v = lp(mi(e2)), h = Le(v, i, c, true), p = Le(v, i, function(g) {
        if (g === f) {
          f = void 0;
          return;
        }
        u(g);
      }), m = Le(v, "keyup", function(g) {
        if (g === f) {
          f = void 0;
          return;
        }
        d(g);
      }), y = [];
      return "ontouchstart" in v.documentElement && (y = [].slice.call(v.body.children).map(function(g) {
        return Le(g, "mousemove", hi);
      })), function() {
        h(), p(), m(), y.forEach(function(g) {
          return g();
        });
      };
    }
  }, [e2, a, i, c, u, d]);
}
function vp(e2) {
  var t = {};
  return Array.isArray(e2) ? (e2 == null ? void 0 : e2.forEach(function(r) {
    t[r.name] = r;
  }), t) : e2 || t;
}
function pp(e2) {
  return e2 === void 0 && (e2 = {}), Array.isArray(e2) ? e2 : Object.keys(e2).map(function(t) {
    return e2[t].name = t, e2[t];
  });
}
function hp(e2) {
  var t, r, n, a, o = e2.enabled, i = e2.enableEvents, s = e2.placement, l = e2.flip, c = e2.offset, u = e2.fixed, d = e2.containerPadding, f = e2.arrowElement, v = e2.popperConfig, h = v === void 0 ? {} : v, p = vp(h.modifiers);
  return ae({}, h, { placement: s, enabled: o, strategy: u ? "fixed" : h.strategy, modifiers: pp(ae({}, p, { eventListeners: { enabled: i }, preventOverflow: ae({}, p.preventOverflow, { options: d ? ae({ padding: d }, (t = p.preventOverflow) == null ? void 0 : t.options) : (r = p.preventOverflow) == null ? void 0 : r.options }), offset: { options: ae({ offset: c }, (n = p.offset) == null ? void 0 : n.options) }, arrow: ae({}, p.arrow, { enabled: !!f, options: ae({}, (a = p.arrow) == null ? void 0 : a.options, { element: f }) }), flip: ae({ enabled: !!l }, p.flip) })) });
}
function bl(e2) {
  e2 === void 0 && (e2 = nt());
  try {
    var t = e2.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e2.body;
  }
}
function En(e2, t) {
  return e2.classList ? !!t && e2.classList.contains(t) : (" " + (e2.className.baseVal || e2.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Dn(e2, t) {
  e2.classList ? e2.classList.add(t) : En(e2, t) || (typeof e2.className == "string" ? e2.className = e2.className + " " + t : e2.setAttribute("class", (e2.className && e2.className.baseVal || "") + " " + t));
}
function gi(e2, t) {
  return e2.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function _n(e2, t) {
  e2.classList ? e2.classList.remove(t) : typeof e2.className == "string" ? e2.className = gi(e2.className, t) : e2.setAttribute("class", gi(e2.className && e2.className.baseVal || "", t));
}
var Ur;
function Rr(e2) {
  if ((!Ur && Ur !== 0 || e2) && Ua) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), Ur = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return Ur;
}
var na = function(t) {
  var r;
  return typeof document > "u" ? null : t == null ? nt().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (r = t) != null && r.nodeType && t || null);
};
function yi(e2, t) {
  var r = F.useState(function() {
    return na(e2);
  }), n = r[0], a = r[1];
  if (!n) {
    var o = na(e2);
    o && a(o);
  }
  return F.useEffect(function() {
  }, [t, n]), F.useEffect(function() {
    var i = na(e2);
    i !== n && a(i);
  }, [e2, n]), n;
}
const bi = (e2) => !e2 || typeof e2 == "function" ? e2 : (t) => {
  e2.current = t;
};
function mp(e2, t) {
  const r = bi(e2), n = bi(t);
  return (a) => {
    r && r(a), n && n(a);
  };
}
function gp(e2, t) {
  return F.useMemo(() => mp(e2, t), [e2, t]);
}
var ro = x.forwardRef(function(e2, t) {
  var r = e2.flip, n = e2.offset, a = e2.placement, o = e2.containerPadding, i = o === void 0 ? 5 : o, s = e2.popperConfig, l = s === void 0 ? {} : s, c = e2.transition, u = ai(), d = u[0], f = u[1], v = ai(), h = v[0], p = v[1], m = gp(f, t), y = yi(e2.container), g = yi(e2.target), $ = F.useState(!e2.show), b = $[0], E = $[1], _ = rp(g, d, hp({ placement: a, enableEvents: !!e2.show, containerPadding: i || 5, flip: r, offset: n, arrowElement: h, popperConfig: l })), M = _.styles, P = _.attributes, k = Na(_, ["styles", "attributes"]);
  e2.show ? b && E(false) : !e2.transition && !b && E(true);
  var T = function() {
    E(true), e2.onExited && e2.onExited.apply(e2, arguments);
  }, D = e2.show || c && !b;
  if (fp(d, e2.onHide, { disabled: !e2.rootClose || e2.rootCloseDisabled, clickTrigger: e2.rootCloseEvent }), !D) return null;
  var B = e2.children(ae({}, k, { show: !!e2.show, props: ae({}, P.popper, { style: M.popper, ref: m }), arrowProps: ae({}, P.arrow, { style: M.arrow, ref: p }) }));
  if (c) {
    var H = e2.onExit, N = e2.onExiting, A = e2.onEnter, O = e2.onEntering, R = e2.onEntered;
    B = x.createElement(c, { in: e2.show, appear: true, onExit: H, onExiting: N, onExited: T, onEnter: A, onEntering: O, onEntered: R }, B);
  }
  return y ? Rs.createPortal(B, y) : null;
});
ro.displayName = "Overlay";
ro.propTypes = { show: W.bool, placement: W.oneOf(Ga), target: W.any, container: W.any, flip: W.bool, children: W.func.isRequired, containerPadding: W.number, popperConfig: W.object, rootClose: W.bool, rootCloseEvent: W.oneOf(["click", "mousedown"]), rootCloseDisabled: W.bool, onHide: function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
  if (t.rootClose) {
    var o;
    return (o = W.func).isRequired.apply(o, [t].concat(n));
  }
  return W.func.apply(W, [t].concat(n));
}, transition: W.elementType, onEnter: W.func, onEntering: W.func, onEntered: W.func, onExit: W.func, onExiting: W.func, onExited: W.func };
function yp() {
  this.__data__ = [], this.size = 0;
}
var bp = yp, wp = Cr;
function xp(e2, t) {
  for (var r = e2.length; r--; ) if (wp(e2[r][0], t)) return r;
  return -1;
}
var Sn = xp, $p = Sn, Ep = Array.prototype, Dp = Ep.splice;
function _p(e2) {
  var t = this.__data__, r = $p(t, e2);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : Dp.call(t, r, 1), --this.size, true;
}
var Sp = _p, Op = Sn;
function Tp(e2) {
  var t = this.__data__, r = Op(t, e2);
  return r < 0 ? void 0 : t[r][1];
}
var Cp = Tp, kp = Sn;
function Mp(e2) {
  return kp(this.__data__, e2) > -1;
}
var Ap = Mp, Pp = Sn;
function Np(e2, t) {
  var r = this.__data__, n = Pp(r, e2);
  return n < 0 ? (++this.size, r.push([e2, t])) : r[n][1] = t, this;
}
var Rp = Np, jp = bp, Lp = Sp, Ip = Cp, Fp = Ap, Wp = Rp;
function qt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
qt.prototype.clear = jp;
qt.prototype.delete = Lp;
qt.prototype.get = Ip;
qt.prototype.has = Fp;
qt.prototype.set = Wp;
var On = qt, Hp = On;
function zp() {
  this.__data__ = new Hp(), this.size = 0;
}
var Bp = zp;
function Yp(e2) {
  var t = this.__data__, r = t.delete(e2);
  return this.size = t.size, r;
}
var Up = Yp;
function qp(e2) {
  return this.__data__.get(e2);
}
var Kp = qp;
function Gp(e2) {
  return this.__data__.has(e2);
}
var Vp = Gp, Xp = He, Zp = Xp["__core-js_shared__"], Jp = Zp, aa = Jp, wi = function() {
  var e2 = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function Qp(e2) {
  return !!wi && wi in e2;
}
var eh = Qp, th = Function.prototype, rh = th.toString;
function nh(e2) {
  if (e2 != null) {
    try {
      return rh.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var wl = nh, ah = Fa, oh = eh, ih = qe, sh = wl, lh = /[\\^$.*+?()[\]{}|]/g, ch = /^\[object .+?Constructor\]$/, uh = Function.prototype, dh = Object.prototype, fh = uh.toString, vh = dh.hasOwnProperty, ph = RegExp("^" + fh.call(vh).replace(lh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function hh(e2) {
  if (!ih(e2) || oh(e2)) return false;
  var t = ah(e2) ? ph : ch;
  return t.test(sh(e2));
}
var mh = hh;
function gh(e2, t) {
  return e2 == null ? void 0 : e2[t];
}
var yh = gh, bh = mh, wh = yh;
function xh(e2, t) {
  var r = wh(e2, t);
  return bh(r) ? r : void 0;
}
var _t = xh, $h = _t, Eh = He, Dh = $h(Eh, "Map"), no = Dh, _h = _t, Sh = _h(Object, "create"), Tn = Sh, xi = Tn;
function Oh() {
  this.__data__ = xi ? xi(null) : {}, this.size = 0;
}
var Th = Oh;
function Ch(e2) {
  var t = this.has(e2) && delete this.__data__[e2];
  return this.size -= t ? 1 : 0, t;
}
var kh = Ch, Mh = Tn, Ah = "__lodash_hash_undefined__", Ph = Object.prototype, Nh = Ph.hasOwnProperty;
function Rh(e2) {
  var t = this.__data__;
  if (Mh) {
    var r = t[e2];
    return r === Ah ? void 0 : r;
  }
  return Nh.call(t, e2) ? t[e2] : void 0;
}
var jh = Rh, Lh = Tn, Ih = Object.prototype, Fh = Ih.hasOwnProperty;
function Wh(e2) {
  var t = this.__data__;
  return Lh ? t[e2] !== void 0 : Fh.call(t, e2);
}
var Hh = Wh, zh = Tn, Bh = "__lodash_hash_undefined__";
function Yh(e2, t) {
  var r = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, r[e2] = zh && t === void 0 ? Bh : t, this;
}
var Uh = Yh, qh = Th, Kh = kh, Gh = jh, Vh = Hh, Xh = Uh;
function Kt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Kt.prototype.clear = qh;
Kt.prototype.delete = Kh;
Kt.prototype.get = Gh;
Kt.prototype.has = Vh;
Kt.prototype.set = Xh;
var Zh = Kt, $i = Zh, Jh = On, Qh = no;
function em() {
  this.size = 0, this.__data__ = { hash: new $i(), map: new (Qh || Jh)(), string: new $i() };
}
var tm = em;
function rm(e2) {
  var t = typeof e2;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e2 !== "__proto__" : e2 === null;
}
var nm = rm, am = nm;
function om(e2, t) {
  var r = e2.__data__;
  return am(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Cn = om, im = Cn;
function sm(e2) {
  var t = im(this, e2).delete(e2);
  return this.size -= t ? 1 : 0, t;
}
var lm = sm, cm = Cn;
function um(e2) {
  return cm(this, e2).get(e2);
}
var dm = um, fm = Cn;
function vm(e2) {
  return fm(this, e2).has(e2);
}
var pm = vm, hm = Cn;
function mm(e2, t) {
  var r = hm(this, e2), n = r.size;
  return r.set(e2, t), this.size += r.size == n ? 0 : 1, this;
}
var gm = mm, ym = tm, bm = lm, wm = dm, xm = pm, $m = gm;
function Gt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Gt.prototype.clear = ym;
Gt.prototype.delete = bm;
Gt.prototype.get = wm;
Gt.prototype.has = xm;
Gt.prototype.set = $m;
var ao = Gt, Em = On, Dm = no, _m = ao, Sm = 200;
function Om(e2, t) {
  var r = this.__data__;
  if (r instanceof Em) {
    var n = r.__data__;
    if (!Dm || n.length < Sm - 1) return n.push([e2, t]), this.size = ++r.size, this;
    r = this.__data__ = new _m(n);
  }
  return r.set(e2, t), this.size = r.size, this;
}
var Tm = Om, Cm = On, km = Bp, Mm = Up, Am = Kp, Pm = Vp, Nm = Tm;
function Vt(e2) {
  var t = this.__data__ = new Cm(e2);
  this.size = t.size;
}
Vt.prototype.clear = km;
Vt.prototype.delete = Mm;
Vt.prototype.get = Am;
Vt.prototype.has = Pm;
Vt.prototype.set = Nm;
var oo = Vt, Rm = "__lodash_hash_undefined__";
function jm(e2) {
  return this.__data__.set(e2, Rm), this;
}
var Lm = jm;
function Im(e2) {
  return this.__data__.has(e2);
}
var Fm = Im, Wm = ao, Hm = Lm, zm = Fm;
function un(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.__data__ = new Wm(); ++t < r; ) this.add(e2[t]);
}
un.prototype.add = un.prototype.push = Hm;
un.prototype.has = zm;
var Bm = un;
function Ym(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n; ) if (t(e2[r], r, e2)) return true;
  return false;
}
var Um = Ym;
function qm(e2, t) {
  return e2.has(t);
}
var Km = qm, Gm = Bm, Vm = Um, Xm = Km, Zm = 1, Jm = 2;
function Qm(e2, t, r, n, a, o) {
  var i = r & Zm, s = e2.length, l = t.length;
  if (s != l && !(i && l > s)) return false;
  var c = o.get(e2), u = o.get(t);
  if (c && u) return c == t && u == e2;
  var d = -1, f = true, v = r & Jm ? new Gm() : void 0;
  for (o.set(e2, t), o.set(t, e2); ++d < s; ) {
    var h = e2[d], p = t[d];
    if (n) var m = i ? n(p, h, d, t, e2, o) : n(h, p, d, e2, t, o);
    if (m !== void 0) {
      if (m) continue;
      f = false;
      break;
    }
    if (v) {
      if (!Vm(t, function(y, g) {
        if (!Xm(v, g) && (h === y || a(h, y, r, n, o))) return v.push(g);
      })) {
        f = false;
        break;
      }
    } else if (!(h === p || a(h, p, r, n, o))) {
      f = false;
      break;
    }
  }
  return o.delete(e2), o.delete(t), f;
}
var xl = Qm, eg = He, tg = eg.Uint8Array, $l = tg;
function rg(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var ng = rg;
function ag(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var og = ag, Ei = Yt, Di = $l, ig = Cr, sg = xl, lg = ng, cg = og, ug = 1, dg = 2, fg = "[object Boolean]", vg = "[object Date]", pg = "[object Error]", hg = "[object Map]", mg = "[object Number]", gg = "[object RegExp]", yg = "[object Set]", bg = "[object String]", wg = "[object Symbol]", xg = "[object ArrayBuffer]", $g = "[object DataView]", _i = Ei ? Ei.prototype : void 0, oa = _i ? _i.valueOf : void 0;
function Eg(e2, t, r, n, a, o, i) {
  switch (r) {
    case $g:
      if (e2.byteLength != t.byteLength || e2.byteOffset != t.byteOffset) return false;
      e2 = e2.buffer, t = t.buffer;
    case xg:
      return !(e2.byteLength != t.byteLength || !o(new Di(e2), new Di(t)));
    case fg:
    case vg:
    case mg:
      return ig(+e2, +t);
    case pg:
      return e2.name == t.name && e2.message == t.message;
    case gg:
    case bg:
      return e2 == t + "";
    case hg:
      var s = lg;
    case yg:
      var l = n & ug;
      if (s || (s = cg), e2.size != t.size && !l) return false;
      var c = i.get(e2);
      if (c) return c == t;
      n |= dg, i.set(e2, t);
      var u = sg(s(e2), s(t), n, a, o, i);
      return i.delete(e2), u;
    case wg:
      if (oa) return oa.call(e2) == oa.call(t);
  }
  return false;
}
var Dg = Eg;
function _g(e2, t) {
  for (var r = -1, n = t.length, a = e2.length; ++r < n; ) e2[a + r] = t[r];
  return e2;
}
var io = _g, Sg = Array.isArray, Oe = Sg, Og = io, Tg = Oe;
function Cg(e2, t, r) {
  var n = t(e2);
  return Tg(e2) ? n : Og(n, r(e2));
}
var El = Cg;
function kg(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, a = 0, o = []; ++r < n; ) {
    var i = e2[r];
    t(i, r, e2) && (o[a++] = i);
  }
  return o;
}
var Mg = kg;
function Ag() {
  return [];
}
var Dl = Ag, Pg = Mg, Ng = Dl, Rg = Object.prototype, jg = Rg.propertyIsEnumerable, Si = Object.getOwnPropertySymbols, Lg = Si ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Pg(Si(e2), function(t) {
    return jg.call(e2, t);
  }));
} : Ng, so = Lg;
function Ig(e2, t) {
  for (var r = -1, n = Array(e2); ++r < e2; ) n[r] = t(r);
  return n;
}
var Fg = Ig, Wg = Ut, Hg = rt, zg = "[object Arguments]";
function Bg(e2) {
  return Hg(e2) && Wg(e2) == zg;
}
var Yg = Bg, Oi = Yg, Ug = rt, _l = Object.prototype, qg = _l.hasOwnProperty, Kg = _l.propertyIsEnumerable, Gg = Oi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Oi : function(e2) {
  return Ug(e2) && qg.call(e2, "callee") && !Kg.call(e2, "callee");
}, lo = Gg, dn = { exports: {} };
function Vg() {
  return false;
}
var Xg = Vg;
dn.exports;
(function(e2, t) {
  var r = He, n = Xg, a = t && !t.nodeType && t, o = a && true && e2 && !e2.nodeType && e2, i = o && o.exports === a, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || n;
  e2.exports = c;
})(dn, dn.exports);
var kn = dn.exports, Zg = Ut, Jg = Wa, Qg = rt, ey = "[object Arguments]", ty = "[object Array]", ry = "[object Boolean]", ny = "[object Date]", ay = "[object Error]", oy = "[object Function]", iy = "[object Map]", sy = "[object Number]", ly = "[object Object]", cy = "[object RegExp]", uy = "[object Set]", dy = "[object String]", fy = "[object WeakMap]", vy = "[object ArrayBuffer]", py = "[object DataView]", hy = "[object Float32Array]", my = "[object Float64Array]", gy = "[object Int8Array]", yy = "[object Int16Array]", by = "[object Int32Array]", wy = "[object Uint8Array]", xy = "[object Uint8ClampedArray]", $y = "[object Uint16Array]", Ey = "[object Uint32Array]", Q = {};
Q[hy] = Q[my] = Q[gy] = Q[yy] = Q[by] = Q[wy] = Q[xy] = Q[$y] = Q[Ey] = true;
Q[ey] = Q[ty] = Q[vy] = Q[ry] = Q[py] = Q[ny] = Q[ay] = Q[oy] = Q[iy] = Q[sy] = Q[ly] = Q[cy] = Q[uy] = Q[dy] = Q[fy] = false;
function Dy(e2) {
  return Qg(e2) && Jg(e2.length) && !!Q[Zg(e2)];
}
var _y = Dy;
function Sy(e2) {
  return function(t) {
    return e2(t);
  };
}
var Mn = Sy, fn = { exports: {} };
fn.exports;
(function(e2, t) {
  var r = nl, n = t && !t.nodeType && t, a = n && true && e2 && !e2.nodeType && e2, o = a && a.exports === n, i = o && r.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e2.exports = s;
})(fn, fn.exports);
var co = fn.exports, Oy = _y, Ty = Mn, Ti = co, Ci = Ti && Ti.isTypedArray, Cy = Ci ? Ty(Ci) : Oy, uo = Cy, ky = Fg, My = lo, Ay = Oe, Py = kn, Ny = Ha, Ry = uo, jy = Object.prototype, Ly = jy.hasOwnProperty;
function Iy(e2, t) {
  var r = Ay(e2), n = !r && My(e2), a = !r && !n && Py(e2), o = !r && !n && !a && Ry(e2), i = r || n || a || o, s = i ? ky(e2.length, String) : [], l = s.length;
  for (var c in e2) (t || Ly.call(e2, c)) && !(i && (c == "length" || a && (c == "offset" || c == "parent") || o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ny(c, l))) && s.push(c);
  return s;
}
var Sl = Iy, Fy = Object.prototype;
function Wy(e2) {
  var t = e2 && e2.constructor, r = typeof t == "function" && t.prototype || Fy;
  return e2 === r;
}
var fo = Wy;
function Hy(e2, t) {
  return function(r) {
    return e2(t(r));
  };
}
var Ol = Hy, zy = Ol, By = zy(Object.keys, Object), Yy = By, Uy = fo, qy = Yy, Ky = Object.prototype, Gy = Ky.hasOwnProperty;
function Vy(e2) {
  if (!Uy(e2)) return qy(e2);
  var t = [];
  for (var r in Object(e2)) Gy.call(e2, r) && r != "constructor" && t.push(r);
  return t;
}
var Xy = Vy, Zy = Sl, Jy = Xy, Qy = kr;
function e0(e2) {
  return Qy(e2) ? Zy(e2) : Jy(e2);
}
var jr = e0, t0 = El, r0 = so, n0 = jr;
function a0(e2) {
  return t0(e2, n0, r0);
}
var Tl = a0, ki = Tl, o0 = 1, i0 = Object.prototype, s0 = i0.hasOwnProperty;
function l0(e2, t, r, n, a, o) {
  var i = r & o0, s = ki(e2), l = s.length, c = ki(t), u = c.length;
  if (l != u && !i) return false;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(i ? f in t : s0.call(t, f))) return false;
  }
  var v = o.get(e2), h = o.get(t);
  if (v && h) return v == t && h == e2;
  var p = true;
  o.set(e2, t), o.set(t, e2);
  for (var m = i; ++d < l; ) {
    f = s[d];
    var y = e2[f], g = t[f];
    if (n) var $ = i ? n(g, y, f, t, e2, o) : n(y, g, f, e2, t, o);
    if (!($ === void 0 ? y === g || a(y, g, r, n, o) : $)) {
      p = false;
      break;
    }
    m || (m = f == "constructor");
  }
  if (p && !m) {
    var b = e2.constructor, E = t.constructor;
    b != E && "constructor" in e2 && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof E == "function" && E instanceof E) && (p = false);
  }
  return o.delete(e2), o.delete(t), p;
}
var c0 = l0, u0 = _t, d0 = He, f0 = u0(d0, "DataView"), v0 = f0, p0 = _t, h0 = He, m0 = p0(h0, "Promise"), g0 = m0, y0 = _t, b0 = He, w0 = y0(b0, "Set"), x0 = w0, $0 = _t, E0 = He, D0 = $0(E0, "WeakMap"), _0 = D0, xa = v0, $a = no, Ea = g0, Da = x0, _a = _0, Cl = Ut, Xt = wl, Mi = "[object Map]", S0 = "[object Object]", Ai = "[object Promise]", Pi = "[object Set]", Ni = "[object WeakMap]", Ri = "[object DataView]", O0 = Xt(xa), T0 = Xt($a), C0 = Xt(Ea), k0 = Xt(Da), M0 = Xt(_a), pt = Cl;
(xa && pt(new xa(new ArrayBuffer(1))) != Ri || $a && pt(new $a()) != Mi || Ea && pt(Ea.resolve()) != Ai || Da && pt(new Da()) != Pi || _a && pt(new _a()) != Ni) && (pt = function(e2) {
  var t = Cl(e2), r = t == S0 ? e2.constructor : void 0, n = r ? Xt(r) : "";
  if (n) switch (n) {
    case O0:
      return Ri;
    case T0:
      return Mi;
    case C0:
      return Ai;
    case k0:
      return Pi;
    case M0:
      return Ni;
  }
  return t;
});
var An = pt, ia = oo, A0 = xl, P0 = Dg, N0 = c0, ji = An, Li = Oe, Ii = kn, R0 = uo, j0 = 1, Fi = "[object Arguments]", Wi = "[object Array]", qr = "[object Object]", L0 = Object.prototype, Hi = L0.hasOwnProperty;
function I0(e2, t, r, n, a, o) {
  var i = Li(e2), s = Li(t), l = i ? Wi : ji(e2), c = s ? Wi : ji(t);
  l = l == Fi ? qr : l, c = c == Fi ? qr : c;
  var u = l == qr, d = c == qr, f = l == c;
  if (f && Ii(e2)) {
    if (!Ii(t)) return false;
    i = true, u = false;
  }
  if (f && !u) return o || (o = new ia()), i || R0(e2) ? A0(e2, t, r, n, a, o) : P0(e2, t, l, r, n, a, o);
  if (!(r & j0)) {
    var v = u && Hi.call(e2, "__wrapped__"), h = d && Hi.call(t, "__wrapped__");
    if (v || h) {
      var p = v ? e2.value() : e2, m = h ? t.value() : t;
      return o || (o = new ia()), a(p, m, r, n, o);
    }
  }
  return f ? (o || (o = new ia()), N0(e2, t, r, n, a, o)) : false;
}
var F0 = I0, W0 = F0, zi = rt;
function kl(e2, t, r, n, a) {
  return e2 === t ? true : e2 == null || t == null || !zi(e2) && !zi(t) ? e2 !== e2 && t !== t : W0(e2, t, r, n, kl, a);
}
var vo = kl, H0 = vo;
function z0(e2, t) {
  return H0(e2, t);
}
var Ml = z0;
const B0 = ne(Ml);
function gt(e2, t) {
  var r = gn(e2);
  return r ? r.innerHeight : t ? e2.clientHeight : Me(e2).height;
}
function Lr(e2, t, r) {
  e2.closest && !r && e2.closest(t);
  var n = e2;
  do {
    if (wn(n, t)) return n;
    n = n.parentElement;
  } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
  return null;
}
const Y0 = Object.freeze(Object.defineProperty({ __proto__: null, default: Lr }, Symbol.toStringTag, { value: "Module" }));
function U0(e2, t, r, n) {
  for (var a = e2.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; ) if (t(e2[o], o, e2)) return o;
  return -1;
}
var q0 = U0, K0 = oo, G0 = vo, V0 = 1, X0 = 2;
function Z0(e2, t, r, n) {
  var a = r.length, o = a, i = !n;
  if (e2 == null) return !o;
  for (e2 = Object(e2); a--; ) {
    var s = r[a];
    if (i && s[2] ? s[1] !== e2[s[0]] : !(s[0] in e2)) return false;
  }
  for (; ++a < o; ) {
    s = r[a];
    var l = s[0], c = e2[l], u = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e2)) return false;
    } else {
      var d = new K0();
      if (n) var f = n(c, u, l, e2, t, d);
      if (!(f === void 0 ? G0(u, c, V0 | X0, n, d) : f)) return false;
    }
  }
  return true;
}
var J0 = Z0, Q0 = qe;
function eb(e2) {
  return e2 === e2 && !Q0(e2);
}
var Al = eb, tb = Al, rb = jr;
function nb(e2) {
  for (var t = rb(e2), r = t.length; r--; ) {
    var n = t[r], a = e2[n];
    t[r] = [n, a, tb(a)];
  }
  return t;
}
var ab = nb;
function ob(e2, t) {
  return function(r) {
    return r == null ? false : r[e2] === t && (t !== void 0 || e2 in Object(r));
  };
}
var Pl = ob, ib = J0, sb = ab, lb = Pl;
function cb(e2) {
  var t = sb(e2);
  return t.length == 1 && t[0][2] ? lb(t[0][0], t[0][1]) : function(r) {
    return r === e2 || ib(r, e2, t);
  };
}
var ub = cb, db = Oe, fb = Mr, vb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pb = /^\w*$/;
function hb(e2, t) {
  if (db(e2)) return false;
  var r = typeof e2;
  return r == "number" || r == "symbol" || r == "boolean" || e2 == null || fb(e2) ? true : pb.test(e2) || !vb.test(e2) || t != null && e2 in Object(t);
}
var po = hb, Nl = ao, mb = "Expected a function";
function ho(e2, t) {
  if (typeof e2 != "function" || t != null && typeof t != "function") throw new TypeError(mb);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a)) return o.get(a);
    var i = e2.apply(this, n);
    return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new (ho.Cache || Nl)(), r;
}
ho.Cache = Nl;
var gb = ho, yb = gb, bb = 500;
function wb(e2) {
  var t = yb(e2, function(n) {
    return r.size === bb && r.clear(), n;
  }), r = t.cache;
  return t;
}
var xb = wb, $b = xb, Eb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Db = /\\(\\)?/g, _b = $b(function(e2) {
  var t = [];
  return e2.charCodeAt(0) === 46 && t.push(""), e2.replace(Eb, function(r, n, a, o) {
    t.push(a ? o.replace(Db, "$1") : n || r);
  }), t;
}), Sb = _b;
function Ob(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, a = Array(n); ++r < n; ) a[r] = t(e2[r], r, e2);
  return a;
}
var mo = Ob, Bi = Yt, Tb = mo, Cb = Oe, kb = Mr, Yi = Bi ? Bi.prototype : void 0, Ui = Yi ? Yi.toString : void 0;
function Rl(e2) {
  if (typeof e2 == "string") return e2;
  if (Cb(e2)) return Tb(e2, Rl) + "";
  if (kb(e2)) return Ui ? Ui.call(e2) : "";
  var t = e2 + "";
  return t == "0" && 1 / e2 == -1 / 0 ? "-0" : t;
}
var Mb = Rl, Ab = Mb;
function Pb(e2) {
  return e2 == null ? "" : Ab(e2);
}
var Nb = Pb, Rb = Oe, jb = po, Lb = Sb, Ib = Nb;
function Fb(e2, t) {
  return Rb(e2) ? e2 : jb(e2, t) ? [e2] : Lb(Ib(e2));
}
var Pn = Fb, Wb = Mr;
function Hb(e2) {
  if (typeof e2 == "string" || Wb(e2)) return e2;
  var t = e2 + "";
  return t == "0" && 1 / e2 == -1 / 0 ? "-0" : t;
}
var Ir = Hb, zb = Pn, Bb = Ir;
function Yb(e2, t) {
  t = zb(t, e2);
  for (var r = 0, n = t.length; e2 != null && r < n; ) e2 = e2[Bb(t[r++])];
  return r && r == n ? e2 : void 0;
}
var Nn = Yb, Ub = Nn;
function qb(e2, t, r) {
  var n = e2 == null ? void 0 : Ub(e2, t);
  return n === void 0 ? r : n;
}
var Kb = qb;
function Gb(e2, t) {
  return e2 != null && t in Object(e2);
}
var Vb = Gb, Xb = Pn, Zb = lo, Jb = Oe, Qb = Ha, ew = Wa, tw = Ir;
function rw(e2, t, r) {
  t = Xb(t, e2);
  for (var n = -1, a = t.length, o = false; ++n < a; ) {
    var i = tw(t[n]);
    if (!(o = e2 != null && r(e2, i))) break;
    e2 = e2[i];
  }
  return o || ++n != a ? o : (a = e2 == null ? 0 : e2.length, !!a && ew(a) && Qb(i, a) && (Jb(e2) || Zb(e2)));
}
var nw = rw, aw = Vb, ow = nw;
function iw(e2, t) {
  return e2 != null && ow(e2, t, aw);
}
var sw = iw, lw = vo, cw = Kb, uw = sw, dw = po, fw = Al, vw = Pl, pw = Ir, hw = 1, mw = 2;
function gw(e2, t) {
  return dw(e2) && fw(t) ? vw(pw(e2), t) : function(r) {
    var n = cw(r, e2);
    return n === void 0 && n === t ? uw(r, e2) : lw(t, n, hw | mw);
  };
}
var yw = gw;
function bw(e2) {
  return e2;
}
var Rn = bw;
function ww(e2) {
  return function(t) {
    return t == null ? void 0 : t[e2];
  };
}
var xw = ww, $w = Nn;
function Ew(e2) {
  return function(t) {
    return $w(t, e2);
  };
}
var Dw = Ew, _w = xw, Sw = Dw, Ow = po, Tw = Ir;
function Cw(e2) {
  return Ow(e2) ? _w(Tw(e2)) : Sw(e2);
}
var kw = Cw, Mw = ub, Aw = yw, Pw = Rn, Nw = Oe, Rw = kw;
function jw(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? Pw : typeof e2 == "object" ? Nw(e2) ? Aw(e2[0], e2[1]) : Mw(e2) : Rw(e2);
}
var jn = jw, Lw = q0, Iw = jn, Fw = il, Ww = Math.max;
function Hw(e2, t, r) {
  var n = e2 == null ? 0 : e2.length;
  if (!n) return -1;
  var a = r == null ? 0 : Fw(r);
  return a < 0 && (a = Ww(n + a, 0)), Lw(e2, Iw(t), a);
}
var jl = Hw;
const zw = ne(jl);
var Bw = Math.ceil, Yw = Math.max;
function Uw(e2, t, r, n) {
  for (var a = -1, o = Yw(Bw((t - e2) / (r || 1)), 0), i = Array(o); o--; ) i[n ? o : ++a] = e2, e2 += r;
  return i;
}
var qw = Uw, Kw = qw, Gw = mn, sa = ol;
function Vw(e2) {
  return function(t, r, n) {
    return n && typeof n != "number" && Gw(t, r, n) && (r = n = void 0), t = sa(t), r === void 0 ? (r = t, t = 0) : r = sa(r), n = n === void 0 ? t < r ? 1 : -1 : sa(n), Kw(t, r, n, e2);
  };
}
var Xw = Vw, Zw = Xw, Jw = Zw(), Qw = Jw;
const ex = ne(Qw);
var qi = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function tx(e2, t) {
  return !!(e2 === t || qi(e2) && qi(t));
}
function rx(e2, t) {
  if (e2.length !== t.length) return false;
  for (var r = 0; r < e2.length; r++) if (!tx(e2[r], t[r])) return false;
  return true;
}
function Ll(e2, t) {
  t === void 0 && (t = rx);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var i = e2.apply(this, a);
    return r = { lastResult: i, lastArgs: a, lastThis: this }, i;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
function $r(e2, t) {
  var r = gn(e2);
  return r ? r.innerWidth : t ? e2.clientWidth : Me(e2).width;
}
var Ki = Yt, nx = lo, ax = Oe, Gi = Ki ? Ki.isConcatSpreadable : void 0;
function ox(e2) {
  return ax(e2) || nx(e2) || !!(Gi && e2 && e2[Gi]);
}
var ix = ox, sx = io, lx = ix;
function Il(e2, t, r, n, a) {
  var o = -1, i = e2.length;
  for (r || (r = lx), a || (a = []); ++o < i; ) {
    var s = e2[o];
    t > 0 && r(s) ? t > 1 ? Il(s, t - 1, r, n, a) : sx(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var Fl = Il;
function cx(e2) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
      var l = i[e2 ? s : ++a];
      if (r(o[l], l, o) === false) break;
    }
    return t;
  };
}
var ux = cx, dx = ux, fx = dx(), vx = fx, px = vx, hx = jr;
function mx(e2, t) {
  return e2 && px(e2, t, hx);
}
var go = mx, gx = kr;
function yx(e2, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!gx(r)) return e2(r, n);
    for (var a = r.length, o = t ? a : -1, i = Object(r); (t ? o-- : ++o < a) && n(i[o], o, i) !== false; ) ;
    return r;
  };
}
var bx = yx, wx = go, xx = bx, $x = xx(wx), Ex = $x, Dx = Ex, _x = kr;
function Sx(e2, t) {
  var r = -1, n = _x(e2) ? Array(e2.length) : [];
  return Dx(e2, function(a, o, i) {
    n[++r] = t(a, o, i);
  }), n;
}
var Ox = Sx;
function Tx(e2, t) {
  var r = e2.length;
  for (e2.sort(t); r--; ) e2[r] = e2[r].value;
  return e2;
}
var Cx = Tx, Vi = Mr;
function kx(e2, t) {
  if (e2 !== t) {
    var r = e2 !== void 0, n = e2 === null, a = e2 === e2, o = Vi(e2), i = t !== void 0, s = t === null, l = t === t, c = Vi(t);
    if (!s && !c && !o && e2 > t || o && i && l && !s && !c || n && i && l || !r && l || !a) return 1;
    if (!n && !o && !c && e2 < t || c && r && a && !n && !o || s && r && a || !i && a || !l) return -1;
  }
  return 0;
}
var Mx = kx, Ax = Mx;
function Px(e2, t, r) {
  for (var n = -1, a = e2.criteria, o = t.criteria, i = a.length, s = r.length; ++n < i; ) {
    var l = Ax(a[n], o[n]);
    if (l) {
      if (n >= s) return l;
      var c = r[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e2.index - t.index;
}
var Nx = Px, la = mo, Rx = Nn, jx = jn, Lx = Ox, Ix = Cx, Fx = Mn, Wx = Nx, Hx = Rn, zx = Oe;
function Bx(e2, t, r) {
  t.length ? t = la(t, function(o) {
    return zx(o) ? function(i) {
      return Rx(i, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [Hx];
  var n = -1;
  t = la(t, Fx(jx));
  var a = Lx(e2, function(o, i, s) {
    var l = la(t, function(c) {
      return c(o);
    });
    return { criteria: l, index: ++n, value: o };
  });
  return Ix(a, function(o, i) {
    return Wx(o, i, r);
  });
}
var Yx = Bx;
function Ux(e2, t, r) {
  switch (r.length) {
    case 0:
      return e2.call(t);
    case 1:
      return e2.call(t, r[0]);
    case 2:
      return e2.call(t, r[0], r[1]);
    case 3:
      return e2.call(t, r[0], r[1], r[2]);
  }
  return e2.apply(t, r);
}
var qx = Ux, Kx = qx, Xi = Math.max;
function Gx(e2, t, r) {
  return t = Xi(t === void 0 ? e2.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = Xi(n.length - t, 0), i = Array(o); ++a < o; ) i[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
    return s[t] = r(i), Kx(e2, this, s);
  };
}
var Wl = Gx;
function Vx(e2) {
  return function() {
    return e2;
  };
}
var Xx = Vx, Zx = _t, Jx = function() {
  try {
    var e2 = Zx(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}(), Hl = Jx, Qx = Xx, Zi = Hl, e$ = Rn, t$ = Zi ? function(e2, t) {
  return Zi(e2, "toString", { configurable: true, enumerable: false, value: Qx(t), writable: true });
} : e$, r$ = t$, n$ = 800, a$ = 16, o$ = Date.now;
function i$(e2) {
  var t = 0, r = 0;
  return function() {
    var n = o$(), a = a$ - (n - r);
    if (r = n, a > 0) {
      if (++t >= n$) return arguments[0];
    } else t = 0;
    return e2.apply(void 0, arguments);
  };
}
var s$ = i$, l$ = r$, c$ = s$, u$ = c$(l$), zl = u$, d$ = Rn, f$ = Wl, v$ = zl;
function p$(e2, t) {
  return v$(f$(e2, t, d$), e2 + "");
}
var Bl = p$, h$ = Fl, m$ = Yx, g$ = Bl, Ji = mn, y$ = g$(function(e2, t) {
  if (e2 == null) return [];
  var r = t.length;
  return r > 1 && Ji(e2, t[0], t[1]) ? t = [] : r > 2 && Ji(t[0], t[1], t[2]) && (t = [t[0]]), m$(e2, h$(t, 1), []);
}), b$ = y$;
const w$ = ne(b$);
function Yl(e2) {
  return Fs(e2) || Yu(e2) || js(e2) || Ws();
}
function x$(e2) {
  var t = [];
  if (e2 != null) for (var r in Object(e2)) t.push(r);
  return t;
}
var $$ = x$, E$ = qe, D$ = fo, _$ = $$, S$ = Object.prototype, O$ = S$.hasOwnProperty;
function T$(e2) {
  if (!E$(e2)) return _$(e2);
  var t = D$(e2), r = [];
  for (var n in e2) n == "constructor" && (t || !O$.call(e2, n)) || r.push(n);
  return r;
}
var C$ = T$, k$ = Sl, M$ = C$, A$ = kr;
function P$(e2) {
  return A$(e2) ? k$(e2, true) : M$(e2);
}
var Ln = P$, N$ = Bl, R$ = Cr, j$ = mn, L$ = Ln, Ul = Object.prototype, I$ = Ul.hasOwnProperty, F$ = N$(function(e2, t) {
  e2 = Object(e2);
  var r = -1, n = t.length, a = n > 2 ? t[2] : void 0;
  for (a && j$(t[0], t[1], a) && (n = 1); ++r < n; ) for (var o = t[r], i = L$(o), s = -1, l = i.length; ++s < l; ) {
    var c = i[s], u = e2[c];
    (u === void 0 || R$(u, Ul[c]) && !I$.call(e2, c)) && (e2[c] = o[c]);
  }
  return e2;
}), W$ = F$;
const H$ = ne(W$);
var Qi = Hl;
function z$(e2, t, r) {
  t == "__proto__" && Qi ? Qi(e2, t, { configurable: true, enumerable: true, value: r, writable: true }) : e2[t] = r;
}
var yo = z$, B$ = yo, Y$ = go, U$ = jn;
function q$(e2, t) {
  var r = {};
  return t = U$(t), Y$(e2, function(n, a, o) {
    B$(r, a, t(n, a, o));
  }), r;
}
var K$ = q$;
const G$ = ne(K$);
function V$(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n && t(e2[r], r, e2) !== false; ) ;
  return e2;
}
var ql = V$, X$ = yo, Z$ = Cr, J$ = Object.prototype, Q$ = J$.hasOwnProperty;
function eE(e2, t, r) {
  var n = e2[t];
  (!(Q$.call(e2, t) && Z$(n, r)) || r === void 0 && !(t in e2)) && X$(e2, t, r);
}
var Kl = eE, tE = Kl, rE = yo;
function nE(e2, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o], l = n ? n(r[s], e2[s], s, r, e2) : void 0;
    l === void 0 && (l = e2[s]), a ? rE(r, s, l) : tE(r, s, l);
  }
  return r;
}
var Fr = nE, aE = Fr, oE = jr;
function iE(e2, t) {
  return e2 && aE(t, oE(t), e2);
}
var sE = iE, lE = Fr, cE = Ln;
function uE(e2, t) {
  return e2 && lE(t, cE(t), e2);
}
var dE = uE, vn = { exports: {} };
vn.exports;
(function(e2, t) {
  var r = He, n = t && !t.nodeType && t, a = n && true && e2 && !e2.nodeType && e2, o = a && a.exports === n, i = o ? r.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u) return c.slice();
    var d = c.length, f = s ? s(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e2.exports = l;
})(vn, vn.exports);
var fE = vn.exports;
function vE(e2, t) {
  var r = -1, n = e2.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e2[r];
  return t;
}
var pE = vE, hE = Fr, mE = so;
function gE(e2, t) {
  return hE(e2, mE(e2), t);
}
var yE = gE, bE = Ol, wE = bE(Object.getPrototypeOf, Object), In = wE, xE = io, $E = In, EE = so, DE = Dl, _E = Object.getOwnPropertySymbols, SE = _E ? function(e2) {
  for (var t = []; e2; ) xE(t, EE(e2)), e2 = $E(e2);
  return t;
} : DE, Gl = SE, OE = Fr, TE = Gl;
function CE(e2, t) {
  return OE(e2, TE(e2), t);
}
var kE = CE, ME = El, AE = Gl, PE = Ln;
function NE(e2) {
  return ME(e2, PE, AE);
}
var Vl = NE, RE = Object.prototype, jE = RE.hasOwnProperty;
function LE(e2) {
  var t = e2.length, r = new e2.constructor(t);
  return t && typeof e2[0] == "string" && jE.call(e2, "index") && (r.index = e2.index, r.input = e2.input), r;
}
var IE = LE, es = $l;
function FE(e2) {
  var t = new e2.constructor(e2.byteLength);
  return new es(t).set(new es(e2)), t;
}
var bo = FE, WE = bo;
function HE(e2, t) {
  var r = t ? WE(e2.buffer) : e2.buffer;
  return new e2.constructor(r, e2.byteOffset, e2.byteLength);
}
var zE = HE, BE = /\w*$/;
function YE(e2) {
  var t = new e2.constructor(e2.source, BE.exec(e2));
  return t.lastIndex = e2.lastIndex, t;
}
var UE = YE, ts = Yt, rs = ts ? ts.prototype : void 0, ns = rs ? rs.valueOf : void 0;
function qE(e2) {
  return ns ? Object(ns.call(e2)) : {};
}
var KE = qE, GE = bo;
function VE(e2, t) {
  var r = t ? GE(e2.buffer) : e2.buffer;
  return new e2.constructor(r, e2.byteOffset, e2.length);
}
var XE = VE, ZE = bo, JE = zE, QE = UE, eD = KE, tD = XE, rD = "[object Boolean]", nD = "[object Date]", aD = "[object Map]", oD = "[object Number]", iD = "[object RegExp]", sD = "[object Set]", lD = "[object String]", cD = "[object Symbol]", uD = "[object ArrayBuffer]", dD = "[object DataView]", fD = "[object Float32Array]", vD = "[object Float64Array]", pD = "[object Int8Array]", hD = "[object Int16Array]", mD = "[object Int32Array]", gD = "[object Uint8Array]", yD = "[object Uint8ClampedArray]", bD = "[object Uint16Array]", wD = "[object Uint32Array]";
function xD(e2, t, r) {
  var n = e2.constructor;
  switch (t) {
    case uD:
      return ZE(e2);
    case rD:
    case nD:
      return new n(+e2);
    case dD:
      return JE(e2, r);
    case fD:
    case vD:
    case pD:
    case hD:
    case mD:
    case gD:
    case yD:
    case bD:
    case wD:
      return tD(e2, r);
    case aD:
      return new n();
    case oD:
    case lD:
      return new n(e2);
    case iD:
      return QE(e2);
    case sD:
      return new n();
    case cD:
      return eD(e2);
  }
}
var $D = xD, ED = qe, as = Object.create, DD = /* @__PURE__ */ function() {
  function e2() {
  }
  return function(t) {
    if (!ED(t)) return {};
    if (as) return as(t);
    e2.prototype = t;
    var r = new e2();
    return e2.prototype = void 0, r;
  };
}(), Xl = DD, _D = Xl, SD = In, OD = fo;
function TD(e2) {
  return typeof e2.constructor == "function" && !OD(e2) ? _D(SD(e2)) : {};
}
var CD = TD, kD = An, MD = rt, AD = "[object Map]";
function PD(e2) {
  return MD(e2) && kD(e2) == AD;
}
var ND = PD, RD = ND, jD = Mn, os = co, is = os && os.isMap, LD = is ? jD(is) : RD, ID = LD, FD = An, WD = rt, HD = "[object Set]";
function zD(e2) {
  return WD(e2) && FD(e2) == HD;
}
var BD = zD, YD = BD, UD = Mn, ss = co, ls = ss && ss.isSet, qD = ls ? UD(ls) : YD, KD = qD, GD = oo, VD = ql, XD = Kl, ZD = sE, JD = dE, QD = fE, e_ = pE, t_ = yE, r_ = kE, n_ = Tl, a_ = Vl, o_ = An, i_ = IE, s_ = $D, l_ = CD, c_ = Oe, u_ = kn, d_ = ID, f_ = qe, v_ = KD, p_ = jr, h_ = Ln, m_ = 1, g_ = 2, y_ = 4, Zl = "[object Arguments]", b_ = "[object Array]", w_ = "[object Boolean]", x_ = "[object Date]", $_ = "[object Error]", Jl = "[object Function]", E_ = "[object GeneratorFunction]", D_ = "[object Map]", __ = "[object Number]", Ql = "[object Object]", S_ = "[object RegExp]", O_ = "[object Set]", T_ = "[object String]", C_ = "[object Symbol]", k_ = "[object WeakMap]", M_ = "[object ArrayBuffer]", A_ = "[object DataView]", P_ = "[object Float32Array]", N_ = "[object Float64Array]", R_ = "[object Int8Array]", j_ = "[object Int16Array]", L_ = "[object Int32Array]", I_ = "[object Uint8Array]", F_ = "[object Uint8ClampedArray]", W_ = "[object Uint16Array]", H_ = "[object Uint32Array]", J = {};
J[Zl] = J[b_] = J[M_] = J[A_] = J[w_] = J[x_] = J[P_] = J[N_] = J[R_] = J[j_] = J[L_] = J[D_] = J[__] = J[Ql] = J[S_] = J[O_] = J[T_] = J[C_] = J[I_] = J[F_] = J[W_] = J[H_] = true;
J[$_] = J[Jl] = J[k_] = false;
function rn(e2, t, r, n, a, o) {
  var i, s = t & m_, l = t & g_, c = t & y_;
  if (r && (i = a ? r(e2, n, a, o) : r(e2)), i !== void 0) return i;
  if (!f_(e2)) return e2;
  var u = c_(e2);
  if (u) {
    if (i = i_(e2), !s) return e_(e2, i);
  } else {
    var d = o_(e2), f = d == Jl || d == E_;
    if (u_(e2)) return QD(e2, s);
    if (d == Ql || d == Zl || f && !a) {
      if (i = l || f ? {} : l_(e2), !s) return l ? r_(e2, JD(i, e2)) : t_(e2, ZD(i, e2));
    } else {
      if (!J[d]) return a ? e2 : {};
      i = s_(e2, d, s);
    }
  }
  o || (o = new GD());
  var v = o.get(e2);
  if (v) return v;
  o.set(e2, i), v_(e2) ? e2.forEach(function(m) {
    i.add(rn(m, t, r, m, e2, o));
  }) : d_(e2) && e2.forEach(function(m, y) {
    i.set(y, rn(m, t, r, y, e2, o));
  });
  var h = c ? l ? a_ : n_ : l ? h_ : p_, p = u ? void 0 : h(e2);
  return VD(p || e2, function(m, y) {
    p && (y = m, m = e2[y]), XD(i, y, rn(m, t, r, y, e2, o));
  }), i;
}
var z_ = rn;
function B_(e2) {
  var t = e2 == null ? 0 : e2.length;
  return t ? e2[t - 1] : void 0;
}
var Y_ = B_, U_ = Nn, q_ = rl;
function K_(e2, t) {
  return t.length < 2 ? e2 : U_(e2, q_(t, 0, -1));
}
var G_ = K_, V_ = Pn, X_ = Y_, Z_ = G_, cs = Ir, J_ = Object.prototype, Q_ = J_.hasOwnProperty;
function e1(e2, t) {
  t = V_(t, e2);
  var r = -1, n = t.length;
  if (!n) return true;
  for (; ++r < n; ) {
    var a = cs(t[r]);
    if (a === "__proto__" && !Q_.call(e2, "__proto__") || (a === "constructor" || a === "prototype") && r < n - 1) return false;
  }
  var o = Z_(e2, t);
  return o == null || delete o[cs(X_(t))];
}
var t1 = e1, r1 = Ut, n1 = In, a1 = rt, o1 = "[object Object]", i1 = Function.prototype, s1 = Object.prototype, ec = i1.toString, l1 = s1.hasOwnProperty, c1 = ec.call(Object);
function u1(e2) {
  if (!a1(e2) || r1(e2) != o1) return false;
  var t = n1(e2);
  if (t === null) return true;
  var r = l1.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ec.call(r) == c1;
}
var d1 = u1, f1 = d1;
function v1(e2) {
  return f1(e2) ? void 0 : e2;
}
var p1 = v1, h1 = Fl;
function m1(e2) {
  var t = e2 == null ? 0 : e2.length;
  return t ? h1(e2, 1) : [];
}
var g1 = m1, y1 = g1, b1 = Wl, w1 = zl;
function x1(e2) {
  return w1(b1(e2, void 0, y1), e2 + "");
}
var $1 = x1, E1 = mo, D1 = z_, _1 = t1, S1 = Pn, O1 = Fr, T1 = p1, C1 = $1, k1 = Vl, M1 = 1, A1 = 2, P1 = 4, N1 = C1(function(e2, t) {
  var r = {};
  if (e2 == null) return r;
  var n = false;
  t = E1(t, function(o) {
    return o = S1(o, e2), n || (n = o.length > 1), o;
  }), O1(e2, k1(e2), r), n && (r = D1(r, M1 | A1 | P1, T1));
  for (var a = t.length; a--; ) _1(r, t[a]);
  return r;
}), R1 = N1;
const j1 = ne(R1);
var L1 = ql, I1 = Xl, F1 = go, W1 = jn, H1 = In, z1 = Oe, B1 = kn, Y1 = Fa, U1 = qe, q1 = uo;
function K1(e2, t, r) {
  var n = z1(e2), a = n || B1(e2) || q1(e2);
  if (t = W1(t), r == null) {
    var o = e2 && e2.constructor;
    a ? r = n ? new o() : [] : U1(e2) ? r = Y1(o) ? I1(H1(e2)) : {} : r = {};
  }
  return (a ? L1 : F1)(e2, function(i, s, l) {
    return t(r, i, s, l);
  }), r;
}
var G1 = K1;
const V1 = ne(G1);
var tc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, i, s, l) {
        var c = a(o), u = a(i), d = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (d ? this.isAfter(c, s) : !this.isBefore(c, s)) && (f ? this.isBefore(u, s) : !this.isAfter(u, s)) || (d ? this.isBefore(c, s) : !this.isAfter(c, s)) && (f ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(tc);
var X1 = tc.exports;
const Z1 = ne(X1);
var rc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(rc);
var J1 = rc.exports;
const Q1 = ne(J1);
var nc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(nc);
var eS = nc.exports;
const tS = ne(eS);
var ac = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      var o = n.prototype, i = function(d) {
        return d && (d.indexOf ? d : d.s);
      }, s = function(d, f, v, h, p) {
        var m = d.name ? d : d.$locale(), y = i(m[f]), g = i(m[v]), $ = y || g.map(function(E) {
          return E.slice(0, h);
        });
        if (!p) return $;
        var b = m.weekStart;
        return $.map(function(E, _) {
          return $[(_ + (b || 0)) % 7];
        });
      }, l = function() {
        return a.Ls[a.locale()];
      }, c = function(d, f) {
        return d.formats[f] || function(v) {
          return v.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h, p, m) {
            return p || m.slice(1);
          });
        }(d.formats[f.toUpperCase()]);
      }, u = function() {
        var d = this;
        return { months: function(f) {
          return f ? f.format("MMMM") : s(d, "months");
        }, monthsShort: function(f) {
          return f ? f.format("MMM") : s(d, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return d.$locale().weekStart || 0;
        }, weekdays: function(f) {
          return f ? f.format("dddd") : s(d, "weekdays");
        }, weekdaysMin: function(f) {
          return f ? f.format("dd") : s(d, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(f) {
          return f ? f.format("ddd") : s(d, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(f) {
          return c(d.$locale(), f);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return u.bind(this)();
      }, a.localeData = function() {
        var d = l();
        return { firstDayOfWeek: function() {
          return d.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(f) {
          return c(d, f);
        }, meridiem: d.meridiem, ordinal: d.ordinal };
      }, a.months = function() {
        return s(l(), "months");
      }, a.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, a.weekdays = function(d) {
        return s(l(), "weekdays", null, null, d);
      }, a.weekdaysShort = function(d) {
        return s(l(), "weekdaysShort", "weekdays", 3, d);
      }, a.weekdaysMin = function(d) {
        return s(l(), "weekdaysMin", "weekdays", 2, d);
      };
    };
  });
})(ac);
var rS = ac.exports;
const nS = ne(rS);
var oc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = r, i.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, u = function(d, f) {
          return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, h, p) {
            var m = p && p.toUpperCase();
            return h || f[p] || r[p] || f[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, g, $) {
              return g || $.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, u);
      };
    };
  });
})(oc);
var aS = oc.exports;
const oS = ne(aS);
var ic = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      var o = function(i, s) {
        if (!s || !s.length || s.length === 1 && !s[0] || s.length === 1 && Array.isArray(s[0]) && !s[0].length) return null;
        var l;
        s.length === 1 && s[0].length > 0 && (s = s[0]), l = (s = s.filter(function(u) {
          return u;
        }))[0];
        for (var c = 1; c < s.length; c += 1) s[c].isValid() && !s[c][i](l) || (l = s[c]);
        return l;
      };
      a.max = function() {
        var i = [].slice.call(arguments, 0);
        return o("isAfter", i);
      }, a.min = function() {
        var i = [].slice.call(arguments, 0);
        return o("isBefore", i);
      };
    };
  });
})(ic);
var iS = ic.exports;
const sS = ne(iS);
var sc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var l = i.prototype;
      s.utc = function(p) {
        var m = { date: p, utc: true, args: arguments };
        return new i(m);
      }, l.utc = function(p) {
        var m = s(this.toDate(), { locale: this.$L, utc: true });
        return p ? m.add(this.utcOffset(), r) : m;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: false });
      };
      var c = l.parse;
      l.parse = function(p) {
        p.utc && (this.$u = true), this.$utils().u(p.$offset) || (this.$offset = p.$offset), c.call(this, p);
      };
      var u = l.init;
      l.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else u.call(this);
      };
      var d = l.utcOffset;
      l.utcOffset = function(p, m) {
        var y = this.$utils().u;
        if (y(p)) return this.$u ? 0 : y(this.$offset) ? d.call(this) : this.$offset;
        if (typeof p == "string" && (p = function(E) {
          E === void 0 && (E = "");
          var _ = E.match(n);
          if (!_) return null;
          var M = ("" + _[0]).match(a) || ["-", 0, 0], P = M[0], k = 60 * +M[1] + +M[2];
          return k === 0 ? 0 : P === "+" ? k : -k;
        }(p), p === null)) return this;
        var g = Math.abs(p) <= 16 ? 60 * p : p;
        if (g === 0) return this.utc(m);
        var $ = this.clone();
        if (m) return $.$offset = g, $.$u = false, $;
        var b = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return ($ = this.local().add(g + b, r)).$offset = g, $.$x.$localOffset = b, $;
      };
      var f = l.format;
      l.format = function(p) {
        var m = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, m);
      }, l.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var v = l.toDate;
      l.toDate = function(p) {
        return p === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : v.call(this);
      };
      var h = l.diff;
      l.diff = function(p, m, y) {
        if (p && this.$u === p.$u) return h.call(this, p, m, y);
        var g = this.local(), $ = s(p).local();
        return h.call(g, $, m, y);
      };
    };
  });
})(sc);
var lS = sc.exports;
const cS = ne(lS);
var lc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(lc);
var uS = lc.exports;
const dS = ne(uS);
function je(e2) {
  return e2.children;
}
var we = { PREVIOUS: "PREV", NEXT: "NEXT", TODAY: "TODAY", DATE: "DATE" }, me = { MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda" }, us = Object.keys(me).map(function(e2) {
  return me[e2];
});
W.oneOfType([W.string, W.func]);
W.any;
W.func;
W.oneOfType([W.arrayOf(W.oneOf(us)), W.objectOf(function(e2, t) {
  var r = us.indexOf(t) !== -1 && typeof e2[t] == "boolean";
  if (r) return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
  return W.elementType.apply(W, [e2, t].concat(a));
})]);
W.oneOfType([W.oneOf(["overlap", "no-overlap"]), W.func]);
var ds = { seconds: 1e3, minutes: 1e3 * 60, hours: 1e3 * 60 * 60, day: 1e3 * 60 * 60 * 24 };
function cc(e2, t) {
  var r = ue(e2, "month");
  return ue(r, "week", t.startOfWeek());
}
function uc(e2, t) {
  var r = sn(e2, "month");
  return sn(r, "week", t.startOfWeek());
}
function fS(e2, t) {
  for (var r = cc(e2, t), n = uc(e2, t), a = []; zt(r, n, "day"); ) a.push(r), r = Ae(r, 1, "day");
  return a;
}
function vS(e2, t) {
  var r = ue(e2, t);
  return Or(r, e2) ? r : Ae(r, 1, t);
}
function pS(e2, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", n = e2, a = []; zt(n, t, r); ) a.push(n), n = Ae(n, 1, r);
  return a;
}
function hS(e2, t) {
  return t == null && e2 == null ? null : (t == null && (t = /* @__PURE__ */ new Date()), e2 == null && (e2 = /* @__PURE__ */ new Date()), e2 = ue(e2, "day"), e2 = yr(e2, yr(t)), e2 = Nt(e2, Nt(t)), e2 = gr(e2, gr(t)), mr(e2, mr(t)));
}
function fs(e2) {
  return yr(e2) === 0 && Nt(e2) === 0 && gr(e2) === 0 && mr(e2) === 0;
}
function mS(e2, t, r, n) {
  return r === "day" && (r = "date"), Math.abs(Go[r](e2, void 0, n) - Go[r](t, void 0, n));
}
function wo(e2, t, r) {
  return !r || r === "milliseconds" ? Math.abs(+e2 - +t) : Math.round(Math.abs(+ue(e2, r) / ds[r] - +ue(t, r) / ds[r]));
}
var gS = W.oneOfType([W.string, W.func]);
function yS(e2, t, r, n, a) {
  var o = typeof n == "function" ? n(r, a, e2) : t.call(e2, r, n, a);
  return ur(o == null || typeof o == "string", "`localizer format(..)` must return a string, null, or undefined"), o;
}
function bS(e2, t, r) {
  return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate(), 0, t + r, 0, 0);
}
function xo(e2, t) {
  return e2.getTimezoneOffset() - t.getTimezoneOffset();
}
function wS(e2, t) {
  return wo(e2, t, "minutes") + xo(e2, t);
}
function xS(e2) {
  var t = ue(e2, "day");
  return wo(t, e2, "minutes") + xo(t, e2);
}
function $S(e2, t) {
  return Ia(e2, t, "day");
}
function ES(e2, t, r) {
  var n = Or(e2, t, "minutes");
  return n ? Tr(t, r, "minutes") : hn(t, r, "minutes");
}
function Sa(e2, t) {
  return mS(e2, t, "day");
}
function DS(e2) {
  var t = e2.evtA, r = t.start, n = t.end, a = t.allDay, o = e2.evtB, i = o.start, s = o.end, l = o.allDay, c = +ue(r, "day") - +ue(i, "day"), u = Sa(r, n), d = Sa(i, s);
  return c || d - u || !!l - !!a || +r - +i || +n - +s;
}
function _S(e2) {
  var t = e2.event, r = t.start, n = t.end, a = e2.range, o = a.start, i = a.end, s = ue(r, "day"), l = zt(s, i, "day"), c = La(s, n, "minutes"), u = c ? hn(n, o, "minutes") : Tr(n, o, "minutes");
  return l && u;
}
function SS(e2, t) {
  return Or(e2, t, "day");
}
function OS(e2, t) {
  return fs(e2) && fs(t);
}
var TS = oe(function e(t) {
  var r = this;
  ie(this, e), ur(typeof t.format == "function", "date localizer `format(..)` must be a function"), ur(typeof t.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = t.propType || gS, this.formats = t.formats, this.format = function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return yS.apply(void 0, [r, t.format].concat(a));
  }, this.startOfWeek = t.firstOfWeek, this.merge = t.merge || hS, this.inRange = t.inRange || Js, this.lt = t.lt || Ia, this.lte = t.lte || zt, this.gt = t.gt || hn, this.gte = t.gte || Tr, this.eq = t.eq || Or, this.neq = t.neq || La, this.startOf = t.startOf || ue, this.endOf = t.endOf || sn, this.add = t.add || Ae, this.range = t.range || pS, this.diff = t.diff || wo, this.ceil = t.ceil || vS, this.min = t.min || Xs, this.max = t.max || Zs, this.minutes = t.minutes || Nt, this.daySpan = t.daySpan || Sa, this.firstVisibleDay = t.firstVisibleDay || cc, this.lastVisibleDay = t.lastVisibleDay || uc, this.visibleDays = t.visibleDays || fS, this.getSlotDate = t.getSlotDate || bS, this.getTimezoneOffset = t.getTimezoneOffset || function(n) {
    return n.getTimezoneOffset();
  }, this.getDstOffset = t.getDstOffset || xo, this.getTotalMin = t.getTotalMin || wS, this.getMinutesFromMidnight = t.getMinutesFromMidnight || xS, this.continuesPrior = t.continuesPrior || $S, this.continuesAfter = t.continuesAfter || ES, this.sortEvents = t.sortEvents || DS, this.inEventRange = t.inEventRange || _S, this.isSameDate = t.isSameDate || SS, this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || OS, this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0;
});
function CS(e2, t, r, n) {
  var a = Z(Z({}, e2.formats), r);
  return Z(Z({}, e2), {}, { messages: n, startOfWeek: function() {
    return e2.startOfWeek(t);
  }, format: function(i, s) {
    return e2.format(i, a[s] || s, t);
  } });
}
var kS = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.navigate = function(i) {
      r.props.onNavigate(i);
    }, r.view = function(i) {
      r.props.onView(i);
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.localizer.messages, o = n.label;
    return x.createElement("div", { className: "rbc-toolbar" }, x.createElement("span", { className: "rbc-btn-group" }, x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.TODAY) }, a.today), x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.PREVIOUS) }, a.previous), x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.NEXT) }, a.next)), x.createElement("span", { className: "rbc-toolbar-label" }, o), x.createElement("span", { className: "rbc-btn-group" }, this.viewNamesGroup(a)));
  } }, { key: "viewNamesGroup", value: function(n) {
    var a = this, o = this.props.views, i = this.props.view;
    if (o.length > 1) return o.map(function(s) {
      return x.createElement("button", { type: "button", key: s, className: te({ "rbc-active": i === s }), onClick: a.view.bind(null, s) }, n[s]);
    });
  } }]);
}(x.Component);
function ee(e2, t) {
  e2 && e2.apply(null, [].concat(t));
}
var MS = { date: "Date", time: "Time", event: "Event", allDay: "All Day", week: "Week", work_week: "Work Week", day: "Day", month: "Month", previous: "Back", next: "Next", yesterday: "Yesterday", tomorrow: "Tomorrow", today: "Today", agenda: "Agenda", noEventsInRange: "There are no events in this range.", showMore: function(t) {
  return "+".concat(t, " more");
} };
function AS(e2) {
  return Z(Z({}, MS), e2);
}
function PS(e2) {
  var t = e2.ref, r = e2.callback;
  F.useEffect(function() {
    var n = function(o) {
      t.current && !t.current.contains(o.target) && r();
    };
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [t, r]);
}
var NS = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], dc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, d = n.onKeyPress, f = n.localizer, v = n.continuesPrior, h = n.continuesAfter, p = n.accessors, m = n.getters, y = n.children, g = n.components, $ = g.event, b = g.eventWrapper, E = n.slotStart, _ = n.slotEnd, M = We(n, NS);
    delete M.resizable;
    var P = p.title(i), k = p.tooltip(i), T = p.end(i), D = p.start(i), B = p.allDay(i), H = l || B || f.diff(D, f.ceil(T, "day"), "day") > 1, N = m.eventProp(i, D, T, s), A = x.createElement("div", { className: "rbc-event-content", title: k || void 0 }, $ ? x.createElement($, { event: i, continuesPrior: v, continuesAfter: h, title: P, isAllDay: B, localizer: f, slotStart: E, slotEnd: _ }) : P);
    return x.createElement(b, Object.assign({}, this.props, { type: "date" }), x.createElement("div", Object.assign({}, M, { style: Z(Z({}, N.style), a), className: te("rbc-event", o, N.className, { "rbc-selected": s, "rbc-event-allday": H, "rbc-event-continues-prior": v, "rbc-event-continues-after": h }), onClick: function(R) {
      return c && c(i, R);
    }, onDoubleClick: function(R) {
      return u && u(i, R);
    }, onKeyDown: function(R) {
      return d && d(i, R);
    } }), typeof y == "function" ? y(A) : A));
  } }]);
}(x.Component);
function Fn(e2, t) {
  return !e2 || t == null ? false : B0(e2, t);
}
function fc(e2, t) {
  var r = e2.right - e2.left, n = r / t;
  return n;
}
function vc(e2, t, r, n) {
  var a = fc(e2, n);
  return r ? n - 1 - Math.floor((t - e2.left) / a) : Math.floor((t - e2.left) / a);
}
function RS(e2, t) {
  var r = t.x, n = t.y;
  return n >= e2.top && n <= e2.bottom && r >= e2.left && r <= e2.right;
}
function jS(e2, t, r, n, a) {
  var o = -1, i = -1, s = n - 1, l = fc(t, n), c = vc(t, r.x, a, n), u = t.top < r.y && t.bottom > r.y, d = t.top < e2.y && t.bottom > e2.y, f = e2.y > t.bottom, v = t.top > e2.y, h = r.top < t.top && r.bottom > t.bottom;
  return h && (o = 0, i = s), u && (v ? (o = 0, i = c) : f && (o = c, i = s)), d && (o = i = a ? s - Math.floor((e2.x - t.left) / l) : Math.floor((e2.x - t.left) / l), u ? c < o ? o = c : i = c : e2.y < r.y ? i = s : o = 0), { startIdx: o, endIdx: i };
}
function LS(e2) {
  var t = e2.target, r = e2.offset, n = e2.container, a = e2.box, o = Me(t), i = o.top, s = o.left, l = o.width, c = o.height, u = Me(n), d = u.top, f = u.left, v = u.width, h = u.height, p = Me(a), m = p.width, y = p.height, g = d + h, $ = f + v, b = i + y, E = s + m, _ = r.x, M = r.y, P = b > g ? i - y - M : i + M + c, k = E > $ ? s + _ - m + l : s + _;
  return { topOffset: P, leftOffset: k };
}
function IS(e2) {
  var t = e2.containerRef, r = e2.accessors, n = e2.getters, a = e2.selected, o = e2.components, i = e2.localizer, s = e2.position, l = e2.show, c = e2.events, u = e2.slotStart, d = e2.slotEnd, f = e2.onSelect, v = e2.onDoubleClick, h = e2.onKeyPress, p = e2.handleDragStart, m = e2.popperRef, y = e2.target, g = e2.offset;
  PS({ ref: m, callback: l }), F.useLayoutEffect(function() {
    var E = LS({ target: y, offset: g, container: t.current, box: m.current }), _ = E.topOffset, M = E.leftOffset;
    m.current.style.top = "".concat(_, "px"), m.current.style.left = "".concat(M, "px");
  }, [g.x, g.y, y]);
  var $ = s.width, b = { minWidth: $ + $ / 2 };
  return x.createElement("div", { style: b, className: "rbc-overlay", ref: m }, x.createElement("div", { className: "rbc-overlay-header" }, i.format(u, "dayHeaderFormat")), c.map(function(E, _) {
    return x.createElement(dc, { key: _, type: "popup", localizer: i, event: E, getters: n, onSelect: f, accessors: r, components: o, onDoubleClick: v, onKeyPress: h, continuesPrior: i.lt(r.end(E), u, "day"), continuesAfter: i.gte(r.start(E), d, "day"), slotStart: u, slotEnd: d, selected: Fn(E, a), draggable: true, onDragStart: function() {
      return p(E);
    }, onDragEnd: function() {
      return l();
    } });
  }));
}
var pc = x.forwardRef(function(e2, t) {
  return x.createElement(IS, Object.assign({}, e2, { popperRef: t }));
});
pc.propTypes = { accessors: W.object.isRequired, getters: W.object.isRequired, selected: W.object, components: W.object.isRequired, localizer: W.object.isRequired, position: W.object.isRequired, show: W.func.isRequired, events: W.array.isRequired, slotStart: W.instanceOf(Date).isRequired, slotEnd: W.instanceOf(Date), onSelect: W.func, onDoubleClick: W.func, onKeyPress: W.func, handleDragStart: W.func, style: W.object, offset: W.shape({ x: W.number, y: W.number }) };
function FS(e2) {
  var t = e2.containerRef, r = e2.popupOffset, n = r === void 0 ? 5 : r, a = e2.overlay, o = e2.accessors, i = e2.localizer, s = e2.components, l = e2.getters, c = e2.selected, u = e2.handleSelectEvent, d = e2.handleDoubleClickEvent, f = e2.handleKeyPressEvent, v = e2.handleDragStart, h = e2.onHide, p = e2.overlayDisplay, m = F.useRef(null);
  if (!a.position) return null;
  var y = n;
  isNaN(n) || (y = { x: n, y: n });
  var g = a.position, $ = a.events, b = a.date, E = a.end;
  return x.createElement(ro, { rootClose: true, flip: true, show: true, placement: "bottom", onHide: h, target: a.target }, function(_) {
    var M = _.props;
    return x.createElement(pc, Object.assign({}, M, { containerRef: t, ref: m, target: a.target, offset: y, accessors: o, getters: l, selected: c, components: s, localizer: i, position: g, show: p, events: $, slotStart: b, slotEnd: E, onSelect: u, onDoubleClick: d, onKeyPress: f, handleDragStart: v }));
  });
}
var $o = x.forwardRef(function(e2, t) {
  return x.createElement(FS, Object.assign({}, e2, { containerRef: t }));
});
$o.propTypes = { popupOffset: W.oneOfType([W.number, W.shape({ x: W.number, y: W.number })]), overlay: W.shape({ position: W.object, events: W.array, date: W.instanceOf(Date), end: W.instanceOf(Date) }), accessors: W.object.isRequired, localizer: W.object.isRequired, components: W.object.isRequired, getters: W.object.isRequired, selected: W.object, handleSelectEvent: W.func, handleDoubleClickEvent: W.func, handleKeyPressEvent: W.func, handleDragStart: W.func, onHide: W.func, overlayDisplay: W.func };
function de(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return Le(r, e2, t, { passive: false });
}
function WS(e2, t, r) {
  return !e2 || Ye(e2, document.elementFromPoint(t, r));
}
function HS(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Lr(a, ".rbc-event", e2);
}
function zS(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Lr(a, ".rbc-show-more", e2);
}
function pn(e2, t) {
  return !!HS(e2, t);
}
function BS(e2, t) {
  return !!zS(e2, t);
}
function ar(e2) {
  var t = e2;
  return e2.touches && e2.touches.length && (t = e2.touches[0]), { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY };
}
var vs = 5, YS = 250, hc = function() {
  function e2(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.global, a = n === void 0 ? false : n, o = r.longPressThreshold, i = o === void 0 ? 250 : o, s = r.validContainers, l = s === void 0 ? [] : s;
    ie(this, e2), this._initialEvent = null, this.selecting = false, this.isDetached = false, this.container = t, this.globalMouse = !t || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = de("touchmove", function() {
    }, window), this._removeKeyDownListener = de("keydown", this._keyListener), this._removeKeyUpListener = de("keyup", this._keyListener), this._removeDropFromOutsideListener = de("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = de("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return oe(e2, [{ key: "on", value: function(r, n) {
    var a = this._listeners[r] || (this._listeners[r] = []);
    return a.push(n), { remove: function() {
      var i = a.indexOf(n);
      i !== -1 && a.splice(i, 1);
    } };
  } }, { key: "emit", value: function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    var i, s = this._listeners[r] || [];
    return s.forEach(function(l) {
      i === void 0 && (i = l.apply(void 0, a));
    }), i;
  } }, { key: "teardown", value: function() {
    this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = false, this._lastClickData = null, this.isDetached = true, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  } }, { key: "isSelected", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? false : ps(n, Dt(r));
  } }, { key: "filter", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? [] : r.filter(this.isSelected, this);
  } }, { key: "_addLongPressListener", value: function(r, n) {
    var a = this, o = null, i = null, s = null, l = function(f) {
      o = setTimeout(function() {
        u(), r(f);
      }, a.longPressThreshold), i = de("touchmove", function() {
        return u();
      }), s = de("touchend", function() {
        return u();
      });
    }, c = de("touchstart", l), u = function() {
      o && clearTimeout(o), i && i(), s && s(), o = null, i = null, s = null;
    };
    return n && l(n), function() {
      u(), c();
    };
  } }, { key: "_addInitialEventListener", value: function() {
    var r = this, n = de("mousedown", function(o) {
      r._removeInitialEventListener(), r._handleInitialEvent(o), r._removeInitialEventListener = de("mousedown", r._handleInitialEvent);
    }), a = de("touchstart", function(o) {
      r._removeInitialEventListener(), r._removeInitialEventListener = r._addLongPressListener(r._handleInitialEvent, o);
    });
    this._removeInitialEventListener = function() {
      n(), a();
    };
  } }, { key: "_dropFromOutsideListener", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dropFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_dragOverFromOutsideListener", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dragOverFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_handleInitialEvent", value: function(r) {
    if (this._initialEvent = r, !this.isDetached) {
      var n = ar(r), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
      if (!(r.which === 3 || r.button === 2 || !WS(l, a, o))) {
        if (!this.globalMouse && l && !Ye(l, r.target)) {
          var d = US(0), f = d.top, v = d.left, h = d.bottom, p = d.right;
          if (u = Dt(l), c = ps({ top: u.top - f, left: u.left - v, bottom: u.bottom + h, right: u.right + p }, { top: s, left: i }), !c) return;
        }
        var m = this.emit("beforeSelect", this._initialEventData = { isTouch: /^touch/.test(r.type), x: i, y: s, clientX: a, clientY: o });
        if (m !== false) switch (r.type) {
          case "mousedown":
            this._removeEndListener = de("mouseup", this._handleTerminatingEvent), this._onEscListener = de("keydown", this._handleTerminatingEvent), this._removeMoveListener = de("mousemove", this._handleMoveEvent);
            break;
          case "touchstart":
            this._handleMoveEvent(r), this._removeEndListener = de("touchend", this._handleTerminatingEvent), this._removeMoveListener = de("touchmove", this._handleMoveEvent);
            break;
        }
      }
    }
  } }, { key: "_isWithinValidContainer", value: function(r) {
    var n = r.target, a = this.validContainers;
    return !a || !a.length || !n ? true : a.some(function(o) {
      return !!n.closest(o);
    });
  } }, { key: "_handleTerminatingEvent", value: function(r) {
    var n = this.selecting, a = this._selectRect;
    if (!n && r.type.includes("key") && (r = this._initialEvent), this.selecting = false, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!r) {
      var o = !this.container || Ye(this.container(), r.target), i = this._isWithinValidContainer(r);
      return r.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(r) : n ? this.emit("select", a) : this.emit("reset");
    }
  } }, { key: "_handleClickEvent", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
    return this._lastClickData && l - this._lastClickData.timestamp < YS ? (this._lastClickData = null, this.emit("doubleClick", { x: a, y: o, clientX: i, clientY: s })) : (this._lastClickData = { timestamp: l }, this.emit("click", { x: a, y: o, clientX: i, clientY: s }));
  } }, { key: "_handleMoveEvent", value: function(r) {
    if (!(this._initialEventData === null || this.isDetached)) {
      var n = this._initialEventData, a = n.x, o = n.y, i = ar(r), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), d = Math.min(s, a), f = Math.min(l, o), v = this.selecting, h = this.isClick(s, l);
      h && !v && !(c || u) || (!v && !h && this.emit("selectStart", this._initialEventData), h || (this.selecting = true, this._selectRect = { top: f, left: d, x: s, y: l, right: d + c, bottom: f + u }, this.emit("selecting", this._selectRect)), r.preventDefault());
    }
  } }, { key: "_keyListener", value: function(r) {
    this.ctrl = r.metaKey || r.ctrlKey;
  } }, { key: "isClick", value: function(r, n) {
    var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
    return !s && Math.abs(r - o) <= vs && Math.abs(n - i) <= vs;
  } }]);
}();
function US() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Ra(e2) !== "object" && (e2 = { top: e2, left: e2, right: e2, bottom: e2 }), e2;
}
function ps(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = Dt(e2), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = Dt(t), d = u.top, f = u.left, v = u.right, h = v === void 0 ? f : v, p = u.bottom, m = p === void 0 ? d : p;
  return !(c - r < d || a + r > m || s - r < f || o + r > h);
}
function Dt(e2) {
  if (!e2.getBoundingClientRect) return e2;
  var t = e2.getBoundingClientRect(), r = t.left + hs("left"), n = t.top + hs("top");
  return { top: n, left: r, right: (e2.offsetWidth || 0) + r, bottom: (e2.offsetHeight || 0) + n };
}
function hs(e2) {
  if (e2 === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (e2 === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
var qS = function(e2) {
  function t(r, n) {
    var a;
    return ie(this, t), a = pe(this, t, [r, n]), a.state = { selecting: false }, a.containerRef = F.createRef(), a;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    this.props.selectable && this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "componentDidUpdate", value: function(n) {
    !n.selectable && this.props.selectable && this._selectable(), n.selectable && !this.props.selectable && this._teardownSelectable();
  } }, { key: "render", value: function() {
    var n = this.props, a = n.range, o = n.getNow, i = n.getters, s = n.date, l = n.components.dateCellWrapper, c = n.localizer, u = this.state, d = u.selecting, f = u.startIdx, v = u.endIdx, h = o();
    return x.createElement("div", { className: "rbc-row-bg", ref: this.containerRef }, a.map(function(p, m) {
      var y = d && m >= f && m <= v, g = i.dayProp(p), $ = g.className, b = g.style;
      return x.createElement(l, { key: m, value: p, range: a }, x.createElement("div", { style: b, className: te("rbc-day-bg", $, y && "rbc-selected-cell", c.isSameDate(p, h) && "rbc-today", s && c.neq(s, p, "month") && "rbc-off-range-bg") }));
    }));
  } }, { key: "_selectable", value: function() {
    var n = this, a = this.containerRef.current, o = this._selector = new hc(this.props.container, { longPressThreshold: this.props.longPressThreshold }), i = function(l, c) {
      if (!pn(a, l) && !BS(a, l)) {
        var u = Dt(a), d = n.props, f = d.range, v = d.rtl;
        if (RS(u, l)) {
          var h = vc(u, l.x, v, f.length);
          n._selectSlot({ startIdx: h, endIdx: h, action: c, box: l });
        }
      }
      n._initial = {}, n.setState({ selecting: false });
    };
    o.on("selecting", function(s) {
      var l = n.props, c = l.range, u = l.rtl, d = -1, f = -1;
      if (n.state.selecting || (ee(n.props.onSelectStart, [s]), n._initial = { x: s.x, y: s.y }), o.isSelected(a)) {
        var v = Dt(a), h = jS(n._initial, v, s, c.length, u);
        d = h.startIdx, f = h.endIdx;
      }
      n.setState({ selecting: true, startIdx: d, endIdx: f });
    }), o.on("beforeSelect", function(s) {
      if (n.props.selectable === "ignoreEvents") return !pn(n.containerRef.current, s);
    }), o.on("click", function(s) {
      return i(s, "click");
    }), o.on("doubleClick", function(s) {
      return i(s, "doubleClick");
    }), o.on("select", function(s) {
      n._selectSlot(Z(Z({}, n.state), {}, { action: "select", bounds: s })), n._initial = {}, n.setState({ selecting: false }), ee(n.props.onSelectEnd, [n.state]);
    });
  } }, { key: "_teardownSelectable", value: function() {
    this._selector && (this._selector.teardown(), this._selector = null);
  } }, { key: "_selectSlot", value: function(n) {
    var a = n.endIdx, o = n.startIdx, i = n.action, s = n.bounds, l = n.box;
    a !== -1 && o !== -1 && this.props.onSelectSlot && this.props.onSelectSlot({ start: o, end: a, action: i, bounds: s, box: l, resourceId: this.props.resourceId });
  } }]);
}(x.Component), Ee = { propTypes: { slotMetrics: W.object.isRequired, selected: W.object, isAllDay: W.bool, accessors: W.object.isRequired, localizer: W.object.isRequired, components: W.object.isRequired, getters: W.object.isRequired, onSelect: W.func, onDoubleClick: W.func, onKeyPress: W.func }, defaultProps: { segments: [], selected: {} }, renderEvent: function(t, r) {
  var n = t.selected;
  t.isAllDay;
  var a = t.accessors, o = t.getters, i = t.onSelect, s = t.onDoubleClick, l = t.onKeyPress, c = t.localizer, u = t.slotMetrics, d = t.components, f = t.resizable, v = u.continuesPrior(r), h = u.continuesAfter(r);
  return x.createElement(dc, { event: r, getters: o, localizer: c, accessors: a, components: d, onSelect: i, onDoubleClick: s, onKeyPress: l, continuesPrior: v, continuesAfter: h, slotStart: u.first, slotEnd: u.last, selected: Fn(r, n), resizable: f });
}, renderSpan: function(t, r, n) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(r) / t * 100 + "%";
  return x.createElement("div", { key: n, className: "rbc-row-segment", style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o } }, a);
} }, mc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
    return x.createElement("div", { className: te(s, "rbc-row") }, o.reduce(function(c, u, d) {
      var f = u.event, v = u.left, h = u.right, p = u.span, m = "_lvl_" + d, y = v - l, g = Ee.renderEvent(n.props, f);
      return y && c.push(Ee.renderSpan(i, y, "".concat(m, "_gap"))), c.push(Ee.renderSpan(i, p, m, g)), l = h + 1, c;
    }, []));
  } }]);
}(x.Component);
mc.defaultProps = Z({}, Ee.defaultProps);
function gc(e2) {
  var t = e2.dateRange, r = e2.unit, n = r === void 0 ? "day" : r, a = e2.localizer;
  return { first: t[0], last: a.add(t[t.length - 1], 1, n) };
}
function KS(e2, t, r, n) {
  var a = gc({ dateRange: t, localizer: n }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(r.start(e2), "day"), o), c = n.min(n.ceil(r.end(e2), "day"), i), u = zw(t, function(f) {
    return n.isSameDate(f, l);
  }), d = n.diff(l, c, "day");
  return d = Math.min(d, s), d = Math.max(d - n.segmentOffset, 1), { event: e2, span: d, left: u + 1, right: Math.max(u + d, 1) };
}
function Oa(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, r, n, a, o = [], i = [];
  for (r = 0; r < e2.length; r++) {
    for (a = e2[r], n = 0; n < o.length && GS(a, o[n]); n++) ;
    n >= t ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (r = 0; r < o.length; r++) o[r].sort(function(s, l) {
    return s.left - l.left;
  });
  return { levels: o, extra: i };
}
function Er(e2, t, r, n, a) {
  var o = { start: n.start(e2), end: n.end(e2) }, i = { start: t, end: r };
  return a.inEventRange({ event: o, range: i });
}
function GS(e2, t) {
  return t.some(function(r) {
    return r.left <= e2.right && r.right >= e2.left;
  });
}
function VS(e2, t, r) {
  var n = Qr(e2), a = [], o = [];
  n.forEach(function(l) {
    var c = t.start(l), u = t.end(l);
    r.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return Ta(l, c, t, r);
  }), s = o.sort(function(l, c) {
    return Ta(l, c, t, r);
  });
  return [].concat(Qr(i), Qr(s));
}
function Ta(e2, t, r, n) {
  var a = { start: r.start(e2), end: r.end(e2), allDay: r.allDay(e2) }, o = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
  return n.sortEvents({ evtA: a, evtB: o });
}
var Ca = function(t, r) {
  return t.left <= r && t.right >= r;
}, ca = function(t, r) {
  return t.filter(function(n) {
    return Ca(n, r);
  }).map(function(n) {
    return n.event;
  });
}, yc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    for (var n = this.props, a = n.segments, o = n.slotMetrics.slots, i = Oa(a).levels[0], s = 1, l = 1, c = []; s <= o; ) {
      var u = "_lvl_" + s, d = i.filter(function(b) {
        return Ca(b, s);
      })[0] || {}, f = d.event, v = d.left, h = d.right, p = d.span;
      if (!f) {
        var m = this.getHiddenEventsForSlot(a, s);
        if (m.length > 0) {
          var y = s - l;
          y && c.push(Ee.renderSpan(o, y, u + "_gap")), c.push(Ee.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
          continue;
        }
        s++;
        continue;
      }
      var g = Math.max(0, v - l);
      if (this.canRenderSlotEvent(v, p)) {
        var $ = Ee.renderEvent(this.props, f);
        g && c.push(Ee.renderSpan(o, g, u + "_gap")), c.push(Ee.renderSpan(o, p, u, $)), l = s = h + 1;
      } else g && c.push(Ee.renderSpan(o, g, u + "_gap")), c.push(Ee.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
    }
    return x.createElement("div", { className: "rbc-row" }, c);
  } }, { key: "getHiddenEventsForSlot", value: function(n, a) {
    var o = ca(n, a), i = Oa(n).levels[0], s = i.filter(function(l) {
      return Ca(l, a);
    }).map(function(l) {
      return l.event;
    });
    return o.filter(function(l) {
      return !s.some(function(c) {
        return c === l;
      });
    });
  } }, { key: "canRenderSlotEvent", value: function(n, a) {
    var o = this.props.segments;
    return ex(n, n + a).every(function(i) {
      var s = ca(o, i).length;
      return s === 1;
    });
  } }, { key: "renderShowMore", value: function(n, a) {
    var o = this, i = this.props, s = i.localizer, l = i.slotMetrics, c = i.components, u = l.getEventsForSlot(a), d = ca(n, a), f = d.length;
    if (c != null && c.showMore) {
      var v = c.showMore, h = l.getDateForSlot(a - 1);
      return f ? x.createElement(v, { localizer: s, slotDate: h, slot: a, count: f, events: u, remainingEvents: d }) : false;
    }
    return f ? x.createElement("button", { type: "button", key: "sm_" + a, className: te("rbc-button-link", "rbc-show-more"), onClick: function(m) {
      return o.showMore(a, m);
    } }, s.messages.showMore(f, d, u)) : false;
  } }, { key: "showMore", value: function(n, a) {
    a.preventDefault(), a.stopPropagation(), this.props.onShowMore(n, a.target);
  } }]);
}(x.Component);
yc.defaultProps = Z({}, Ee.defaultProps);
var XS = function(t) {
  var r = t.children;
  return x.createElement("div", { className: "rbc-row-content-scroll-container" }, r);
}, ZS = function(t, r) {
  return t.left <= r && t.right >= r;
}, JS = function(t, r) {
  return t[0].range === r[0].range && t[0].events === r[0].events;
};
function bc() {
  return Ll(function(e2) {
    for (var t = e2.range, r = e2.events, n = e2.maxRows, a = e2.minRows, o = e2.accessors, i = e2.localizer, s = gc({ dateRange: t, localizer: i }), l = s.first, c = s.last, u = r.map(function(p) {
      return KS(p, t, o, i);
    }), d = Oa(u, Math.max(n - 1, 1)), f = d.levels, v = d.extra, h = v.length > 0 ? a - 1 : a; f.length < h; ) f.push([]);
    return { first: l, last: c, levels: f, extra: v, range: t, slots: t.length, clone: function(m) {
      var y = bc();
      return y(Z(Z({}, e2), m));
    }, getDateForSlot: function(m) {
      return t[m];
    }, getSlotForDate: function(m) {
      return t.find(function(y) {
        return i.isSameDate(y, m);
      });
    }, getEventsForSlot: function(m) {
      return u.filter(function(y) {
        return ZS(y, m);
      }).map(function(y) {
        return y.event;
      });
    }, continuesPrior: function(m) {
      return i.continuesPrior(o.start(m), l);
    }, continuesAfter: function(m) {
      var y = o.start(m), g = o.end(m);
      return i.continuesAfter(y, g, c);
    } };
  }, JS);
}
var Dr = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleSelectSlot = function(i) {
      var s = r.props, l = s.range, c = s.onSelectSlot;
      c(l.slice(i.start, i.end + 1), i);
    }, r.handleShowMore = function(i, s) {
      var l = r.props, c = l.range, u = l.onShowMore, d = r.slotMetrics(r.props), f = xn(r.containerRef.current, ".rbc-row-bg")[0], v;
      f && (v = f.children[i - 1]);
      var h = d.getEventsForSlot(i);
      u(h, c[i - 1], v, i, s);
    }, r.getContainer = function() {
      var i = r.props.container;
      return i ? i() : r.containerRef.current;
    }, r.renderHeadingCell = function(i, s) {
      var l = r.props, c = l.renderHeader, u = l.getNow, d = l.localizer;
      return c({ date: i, key: "header_".concat(s), className: te("rbc-date-cell", d.isSameDate(i, u()) && "rbc-now") });
    }, r.renderDummy = function() {
      var i = r.props, s = i.className, l = i.range, c = i.renderHeader, u = i.showAllEvents;
      return x.createElement("div", { className: s, ref: r.containerRef }, x.createElement("div", { className: te("rbc-row-content", u && "rbc-row-content-scrollable") }, c && x.createElement("div", { className: "rbc-row", ref: r.headingRowRef }, l.map(r.renderHeadingCell)), x.createElement("div", { className: "rbc-row", ref: r.eventRowRef }, x.createElement("div", { className: "rbc-row-segment" }, x.createElement("div", { className: "rbc-event" }, x.createElement("div", { className: "rbc-event-content" }, "\xA0"))))));
    }, r.containerRef = F.createRef(), r.headingRowRef = F.createRef(), r.eventRowRef = F.createRef(), r.slotMetrics = bc(), r;
  }
  return ve(t, e2), oe(t, [{ key: "getRowLimit", value: function() {
    var n, a = gt(this.eventRowRef.current), o = (n = this.headingRowRef) !== null && n !== void 0 && n.current ? gt(this.headingRowRef.current) : 0, i = gt(this.containerRef.current) - o;
    return Math.max(Math.floor(i / a), 1);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.rtl, i = n.range, s = n.className, l = n.selected, c = n.selectable, u = n.renderForMeasure, d = n.accessors, f = n.getters, v = n.components, h = n.getNow, p = n.renderHeader, m = n.onSelect, y = n.localizer, g = n.onSelectStart, $ = n.onSelectEnd, b = n.onDoubleClick, E = n.onKeyPress, _ = n.resourceId, M = n.longPressThreshold, P = n.isAllDay, k = n.resizable, T = n.showAllEvents;
    if (u) return this.renderDummy();
    var D = this.slotMetrics(this.props), B = D.levels, H = D.extra, N = T ? XS : je, A = v.weekWrapper, O = { selected: l, accessors: d, getters: f, localizer: y, components: v, onSelect: m, onDoubleClick: b, onKeyPress: E, resourceId: _, slotMetrics: D, resizable: k };
    return x.createElement("div", { className: s, role: "rowgroup", ref: this.containerRef }, x.createElement(qS, { localizer: y, date: a, getNow: h, rtl: o, range: i, selectable: c, container: this.getContainer, getters: f, onSelectStart: g, onSelectEnd: $, onSelectSlot: this.handleSelectSlot, components: v, longPressThreshold: M, resourceId: _ }), x.createElement("div", { className: te("rbc-row-content", T && "rbc-row-content-scrollable"), role: "row" }, p && x.createElement("div", { className: "rbc-row ", ref: this.headingRowRef }, i.map(this.renderHeadingCell)), x.createElement(N, null, x.createElement(A, Object.assign({ isAllDay: P }, O, { rtl: this.props.rtl }), B.map(function(R, L) {
      return x.createElement(mc, Object.assign({ key: L, segments: R }, O));
    }), !!H.length && x.createElement(yc, Object.assign({ segments: H, onShowMore: this.handleShowMore }, O))))));
  } }]);
}(x.Component);
Dr.defaultProps = { minRows: 0, maxRows: 1 / 0 };
var Eo = function(t) {
  var r = t.label;
  return x.createElement("span", { role: "columnheader", "aria-sort": "none" }, r);
}, QS = function(t) {
  var r = t.label, n = t.drilldownView, a = t.onDrillDown;
  return n ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: a }, r) : x.createElement("span", null, r);
}, eO = ["date", "className"], tO = function(t, r, n, a, o) {
  return t.filter(function(i) {
    return Er(i, r, n, a, o);
  });
}, Wn = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.getContainer = function() {
      return r.containerRef.current;
    }, r.renderWeek = function(i, s) {
      var l = r.props, c = l.events, u = l.components, d = l.selectable, f = l.getNow, v = l.selected, h = l.date, p = l.localizer, m = l.longPressThreshold, y = l.accessors, g = l.getters, $ = l.showAllEvents, b = r.state, E = b.needLimitMeasure, _ = b.rowLimit, M = tO(Qr(c), i[0], i[i.length - 1], y, p), P = VS(M, y, p);
      return x.createElement(Dr, { key: s, ref: s === 0 ? r.slotRowRef : void 0, container: r.getContainer, className: "rbc-month-row", getNow: f, date: h, range: i, events: P, maxRows: $ ? 1 / 0 : _, selected: v, selectable: d, components: u, accessors: y, getters: g, localizer: p, renderHeader: r.readerDateHeading, renderForMeasure: E, onShowMore: r.handleShowMore, onSelect: r.handleSelectEvent, onDoubleClick: r.handleDoubleClickEvent, onKeyPress: r.handleKeyPressEvent, onSelectSlot: r.handleSelectSlot, longPressThreshold: m, rtl: r.props.rtl, resizable: r.props.resizable, showAllEvents: $ });
    }, r.readerDateHeading = function(i) {
      var s = i.date, l = i.className, c = We(i, eO), u = r.props, d = u.date, f = u.getDrilldownView, v = u.localizer, h = v.neq(d, s, "month"), p = v.isSameDate(s, d), m = f(s), y = v.format(s, "dateFormat"), g = r.props.components.dateHeader || QS;
      return x.createElement("div", Object.assign({}, c, { className: te(l, h && "rbc-off-range", p && "rbc-current"), role: "cell" }), x.createElement(g, { label: y, date: s, drilldownView: m, isOffRange: h, onDrillDown: function(b) {
        return r.handleHeadingClick(s, m, b);
      } }));
    }, r.handleSelectSlot = function(i, s) {
      r._pendingSelection = r._pendingSelection.concat(i), clearTimeout(r._selectTimer), r._selectTimer = setTimeout(function() {
        return r.selectDates(s);
      });
    }, r.handleHeadingClick = function(i, s, l) {
      l.preventDefault(), r.clearSelection(), ee(r.props.onDrillDown, [i, s]);
    }, r.handleSelectEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.handleShowMore = function(i, s, l, c, u) {
      var d = r.props, f = d.popup, v = d.onDrillDown, h = d.onShowMore, p = d.getDrilldownView, m = d.doShowMoreDrillDown;
      if (r.clearSelection(), f) {
        var y = bn(l, r.containerRef.current);
        r.setState({ overlay: { date: s, events: i, position: y, target: u } });
      } else m && ee(v, [s, p(s) || me.DAY]);
      ee(h, [i, s, c]);
    }, r.overlayDisplay = function() {
      r.setState({ overlay: null });
    }, r.state = { rowLimit: 5, needLimitMeasure: true, date: null }, r.containerRef = F.createRef(), r.slotRowRef = F.createRef(), r._bgRows = [], r._pendingSelection = [], r;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    var n = this, a;
    this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
      a || Ar(function() {
        a = false, n.setState({ needLimitMeasure: true });
      });
    }, false);
  } }, { key: "componentDidUpdate", value: function() {
    this.state.needLimitMeasure && this.measureRowLimit(this.props);
  } }, { key: "componentWillUnmount", value: function() {
    window.removeEventListener("resize", this._resizeListener, false);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.className, s = o.visibleDays(a, o), l = If(s, 7);
    return this._weekCount = l.length, x.createElement("div", { className: te("rbc-month-view", i), role: "table", "aria-label": "Month View", ref: this.containerRef }, x.createElement("div", { className: "rbc-row rbc-month-header", role: "row" }, this.renderHeaders(l[0])), l.map(this.renderWeek), this.props.popup && this.renderOverlay());
  } }, { key: "renderHeaders", value: function(n) {
    var a = this.props, o = a.localizer, i = a.components, s = n[0], l = n[n.length - 1], c = i.header || Eo;
    return o.range(s, l, "day").map(function(u, d) {
      return x.createElement("div", { key: "header_" + d, className: "rbc-header" }, x.createElement(c, { date: u, localizer: o, label: o.format(u, "weekdayFormat") }));
    });
  } }, { key: "renderOverlay", value: function() {
    var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, d = s.getters, f = s.selected, v = s.popupOffset, h = s.handleDragStart, p = function() {
      return o.setState({ overlay: null });
    };
    return x.createElement($o, { overlay: i, accessors: l, localizer: c, components: u, getters: d, selected: f, popupOffset: v, ref: this.containerRef, handleKeyPressEvent: this.handleKeyPressEvent, handleSelectEvent: this.handleSelectEvent, handleDoubleClickEvent: this.handleDoubleClickEvent, handleDragStart: h, show: !!i.position, overlayDisplay: this.overlayDisplay, onHide: p });
  } }, { key: "measureRowLimit", value: function() {
    this.setState({ needLimitMeasure: false, rowLimit: this.slotRowRef.current.getRowLimit() });
  } }, { key: "selectDates", value: function(n) {
    var a = this._pendingSelection.slice();
    this._pendingSelection = [], a.sort(function(s, l) {
      return +s - +l;
    });
    var o = new Date(a[0]), i = new Date(a[a.length - 1]);
    i.setDate(a[a.length - 1].getDate() + 1), ee(this.props.onSelectSlot, { slots: a, start: o, end: i, action: n.action, bounds: n.bounds, box: n.box });
  } }, { key: "clearSelection", value: function() {
    clearTimeout(this._selectTimer), this._pendingSelection = [];
  } }], [{ key: "getDerivedStateFromProps", value: function(n, a) {
    var o = n.date, i = n.localizer;
    return { date: o, needLimitMeasure: i.neq(o, a.date, "month") };
  } }]);
}(x.Component);
Wn.range = function(e2, t) {
  var r = t.localizer, n = r.firstVisibleDay(e2, r), a = r.lastVisibleDay(e2, r);
  return { start: n, end: a };
};
Wn.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "month");
    case we.NEXT:
      return n.add(e2, 1, "month");
    default:
      return e2;
  }
};
Wn.title = function(e2, t) {
  var r = t.localizer;
  return r.format(e2, "monthHeaderFormat");
};
var ms = function(t) {
  var r = t.min, n = t.max, a = t.step, o = t.slots, i = t.localizer;
  return "".concat(+i.startOf(r, "minutes")) + "".concat(+i.startOf(n, "minutes")) + "".concat(a, "-").concat(o);
};
function Do(e2) {
  for (var t = e2.min, r = e2.max, n = e2.step, a = e2.timeslots, o = e2.localizer, i = ms({ step: n, localizer: o }), s = 1 + o.getTotalMin(t, r), l = o.getMinutesFromMidnight(t), c = Math.ceil((s - 1) / (n * a)), u = c * a, d = new Array(c), f = new Array(u), v = 0; v < c; v++) {
    d[v] = new Array(a);
    for (var h = 0; h < a; h++) {
      var p = v * a + h, m = p * n;
      f[p] = d[v][h] = o.getSlotDate(t, l, m);
    }
  }
  var y = f.length * n;
  f.push(o.getSlotDate(t, l, y));
  function g($) {
    var b = o.diff(t, $, "minutes") + o.getDstOffset(t, $);
    return Math.min(b, s);
  }
  return { groups: d, update: function(b) {
    return ms(b) !== i ? Do(b) : this;
  }, dateIsInGroup: function(b, E) {
    var _ = d[E + 1];
    return o.inRange(b, d[E][0], _ ? _[0] : r, "minutes");
  }, nextSlot: function(b) {
    var E = f[Math.min(f.findIndex(function(_) {
      return _ === b || o.eq(_, b);
    }) + 1, f.length - 1)];
    return o.eq(E, b) && (E = o.add(b, n, "minutes")), E;
  }, closestSlotToPosition: function(b) {
    var E = Math.min(f.length - 1, Math.max(0, Math.floor(b * u)));
    return f[E];
  }, closestSlotFromPoint: function(b, E) {
    var _ = Math.abs(E.top - E.bottom);
    return this.closestSlotToPosition((b.y - E.top) / _);
  }, closestSlotFromDate: function(b) {
    var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (o.lt(b, t, "minutes")) return f[0];
    if (o.gt(b, r, "minutes")) return f[f.length - 1];
    var _ = o.diff(t, b, "minutes");
    return f[(_ - _ % n) / n + E];
  }, startsBeforeDay: function(b) {
    return o.lt(b, t, "day");
  }, startsAfterDay: function(b) {
    return o.gt(b, r, "day");
  }, startsBefore: function(b) {
    return o.lt(o.merge(t, b), t, "minutes");
  }, startsAfter: function(b) {
    return o.gt(o.merge(r, b), r, "minutes");
  }, getRange: function(b, E, _, M) {
    _ || (b = o.min(r, o.max(t, b))), M || (E = o.min(r, o.max(t, E)));
    var P = g(b), k = g(E), T = k > n * u && !o.eq(r, E) ? (P - n) / (n * u) * 100 : P / (n * u) * 100;
    return { top: T, height: k / (n * u) * 100 - T, start: g(b), startDate: b, end: g(E), endDate: E };
  }, getCurrentTimePosition: function(b) {
    var E = g(b), _ = E / (n * u) * 100;
    return _;
  } };
}
var rO = function() {
  function e2(t, r) {
    var n = r.accessors, a = r.slotMetrics;
    ie(this, e2);
    var o = a.getRange(n.start(t), n.end(t)), i = o.start, s = o.startDate, l = o.end, c = o.endDate, u = o.top, d = o.height;
    this.start = i, this.end = l, this.startMs = +s, this.endMs = +c, this.top = u, this.height = d, this.data = t;
  }
  return oe(e2, [{ key: "_width", get: function() {
    if (this.rows) {
      var r = this.rows.reduce(function(a, o) {
        return Math.max(a, o.leaves.length + 1);
      }, 0) + 1;
      return 100 / r;
    }
    if (this.leaves) {
      var n = 100 - this.container._width;
      return n / (this.leaves.length + 1);
    }
    return this.row._width;
  } }, { key: "width", get: function() {
    var r = this._width, n = Math.min(100, this._width * 1.7);
    if (this.rows) return n;
    if (this.leaves) return this.leaves.length > 0 ? n : r;
    var a = this.row.leaves, o = a.indexOf(this);
    return o === a.length - 1 ? r : n;
  } }, { key: "xOffset", get: function() {
    if (this.rows) return 0;
    if (this.leaves) return this.container._width;
    var r = this.row, n = r.leaves, a = r.xOffset, o = r._width, i = n.indexOf(this) + 1;
    return a + i * o;
  } }]);
}();
function nO(e2, t, r) {
  return Math.abs(t.start - e2.start) < r || t.start > e2.start && t.start < e2.end;
}
function aO(e2) {
  for (var t = w$(e2, ["startMs", function(s) {
    return -s.endMs;
  }]), r = []; t.length > 0; ) {
    var n = t.shift();
    r.push(n);
    for (var a = 0; a < t.length; a++) {
      var o = t[a];
      if (!(n.endMs > o.startMs)) {
        if (a > 0) {
          var i = t.splice(a, 1)[0];
          r.push(i);
        }
        break;
      }
    }
  }
  return r;
}
function wc(e2) {
  for (var t = e2.events, r = e2.minimumStartDifference, n = e2.slotMetrics, a = e2.accessors, o = t.map(function(u) {
    return new rO(u, { slotMetrics: n, accessors: a });
  }), i = aO(o), s = [], l = function() {
    var d = i[c], f = s.find(function(p) {
      return p.end > d.start || Math.abs(d.start - p.start) < r;
    });
    if (!f) return d.rows = [], s.push(d), 1;
    d.container = f;
    for (var v = null, h = f.rows.length - 1; !v && h >= 0; h--) nO(f.rows[h], d, r) && (v = f.rows[h]);
    v ? (v.leaves.push(d), d.row = v) : (d.leaves = [], f.rows.push(d));
  }, c = 0; c < i.length; c++) l();
  return i.map(function(u) {
    return { event: u.data, style: { top: u.top, height: u.height, width: u.width, xOffset: Math.max(0, u.xOffset) } };
  });
}
function xc(e2, t, r) {
  for (var n = 0; n < e2.friends.length; ++n) if (!(r.indexOf(e2.friends[n]) > -1)) {
    t = t > e2.friends[n].idx ? t : e2.friends[n].idx, r.push(e2.friends[n]);
    var a = xc(e2.friends[n], t, r);
    t = t > a ? t : a;
  }
  return t;
}
function oO(e2) {
  var t = e2.events, r = e2.minimumStartDifference, n = e2.slotMetrics, a = e2.accessors, o = wc({ events: t, minimumStartDifference: r, slotMetrics: n, accessors: a });
  o.sort(function(A, O) {
    return A = A.style, O = O.style, A.top !== O.top ? A.top > O.top ? 1 : -1 : A.height !== O.height ? A.top + A.height < O.top + O.height ? 1 : -1 : 0;
  });
  for (var i = 0; i < o.length; ++i) o[i].friends = [], delete o[i].style.left, delete o[i].style.left, delete o[i].idx, delete o[i].size;
  for (var s = 0; s < o.length - 1; ++s) for (var l = o[s], c = l.style.top, u = l.style.top + l.style.height, d = s + 1; d < o.length; ++d) {
    var f = o[d], v = f.style.top, h = f.style.top + f.style.height;
    (v >= c && h <= u || h > c && h <= u || v >= c && v < u) && (l.friends.push(f), f.friends.push(l));
  }
  for (var p = 0; p < o.length; ++p) {
    for (var m = o[p], y = [], g = 0; g < 100; ++g) y.push(1);
    for (var $ = 0; $ < m.friends.length; ++$) m.friends[$].idx !== void 0 && (y[m.friends[$].idx] = 0);
    m.idx = y.indexOf(1);
  }
  for (var b = 0; b < o.length; ++b) {
    var E = 0;
    if (!o[b].size) {
      var _ = [], M = xc(o[b], 0, _);
      E = 100 / (M + 1), o[b].size = E;
      for (var P = 0; P < _.length; ++P) _[P].size = E;
    }
  }
  for (var k = 0; k < o.length; ++k) {
    var T = o[k];
    T.style.left = T.idx * T.size;
    for (var D = 0, B = 0; B < T.friends.length; ++B) {
      var H = T.friends[B].idx;
      D = D > H ? D : H;
    }
    D <= T.idx && (T.size = 100 - T.idx * T.size);
    var N = T.idx === 0 ? 0 : 3;
    T.style.width = "calc(".concat(T.size, "% - ").concat(N, "px)"), T.style.height = "calc(".concat(T.style.height, "% - 2px)"), T.style.xOffset = "calc(".concat(T.style.left, "% + ").concat(N, "px)");
  }
  return o;
}
var gs = { overlap: wc, "no-overlap": oO };
function iO(e2) {
  return !!(e2 && e2.constructor && e2.call && e2.apply);
}
function sO(e2) {
  e2.events, e2.minimumStartDifference, e2.slotMetrics, e2.accessors;
  var t = e2.dayLayoutAlgorithm, r = t;
  return t in gs && (r = gs[t]), iO(r) ? r.apply(this, arguments) : [];
}
var $c = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.renderSlot, o = n.resource, i = n.group, s = n.getters, l = n.components, c = l === void 0 ? {} : l, u = c.timeSlotWrapper, d = u === void 0 ? je : u, f = s ? s.slotGroupProp(i) : {};
    return x.createElement("div", Object.assign({ className: "rbc-timeslot-group" }, f), i.map(function(v, h) {
      var p = s ? s.slotProp(v, o) : {};
      return x.createElement(d, { key: h, value: v, resource: o }, x.createElement("div", Object.assign({}, p, { className: te("rbc-time-slot", p.className) }), a && a(v, h)));
    }));
  } }]);
}(F.Component);
function Kr(e2) {
  return typeof e2 == "string" ? e2 : e2 + "%";
}
function lO(e2) {
  var t = e2.style, r = e2.className, n = e2.event, a = e2.accessors, o = e2.rtl, i = e2.selected, s = e2.label, l = e2.continuesPrior, c = e2.continuesAfter, u = e2.getters, d = e2.onClick, f = e2.onDoubleClick, v = e2.isBackgroundEvent, h = e2.onKeyPress, p = e2.components, m = p.event, y = p.eventWrapper, g = a.title(n), $ = a.tooltip(n), b = a.end(n), E = a.start(n), _ = u.eventProp(n, E, b, i), M = [x.createElement("div", { key: "1", className: "rbc-event-label" }, s), x.createElement("div", { key: "2", className: "rbc-event-content" }, m ? x.createElement(m, { event: n, title: g }) : g)], P = t.height, k = t.top, T = t.width, D = t.xOffset, B = Z(Z({}, _.style), {}, ht({ top: Kr(k), height: Kr(P), width: Kr(T) }, o ? "right" : "left", Kr(D)));
  return x.createElement(y, Object.assign({ type: "time" }, e2), x.createElement("div", { role: "button", tabIndex: 0, onClick: d, onDoubleClick: f, style: B, onKeyDown: h, title: $ ? (typeof s == "string" ? s + ": " : "") + $ : void 0, className: te(v ? "rbc-background-event" : "rbc-event", r, _.className, { "rbc-selected": i, "rbc-event-continues-earlier": l, "rbc-event-continues-later": c }) }, M));
}
var cO = function(t) {
  var r = t.children, n = t.className, a = t.style, o = t.innerRef;
  return x.createElement("div", { className: n, style: a, ref: o }, r);
}, uO = x.forwardRef(function(e2, t) {
  return x.createElement(cO, Object.assign({}, e2, { innerRef: t }));
}), dO = ["dayProp"], fO = ["eventContainerWrapper", "timeIndicatorWrapper"], Ec = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.state = { selecting: false, timeIndicatorPosition: null }, r.intervalTriggered = false, r.renderEvents = function(i) {
      var s = i.events, l = i.isBackgroundEvent, c = r.props, u = c.rtl, d = c.selected, f = c.accessors, v = c.localizer, h = c.getters, p = c.components, m = c.step, y = c.timeslots, g = c.dayLayoutAlgorithm, $ = c.resizable, b = r, E = b.slotMetrics, _ = v.messages, M = sO({ events: s, accessors: f, slotMetrics: E, minimumStartDifference: Math.ceil(m * y / 2), dayLayoutAlgorithm: g });
      return M.map(function(P, k) {
        var T, D = P.event, B = P.style, H = f.end(D), N = f.start(D), A = (T = f.eventId(D)) !== null && T !== void 0 ? T : "evt_" + k, O = "eventTimeRangeFormat", R, L = E.startsBeforeDay(N), I = E.startsAfterDay(H);
        L ? O = "eventTimeRangeEndFormat" : I && (O = "eventTimeRangeStartFormat"), L && I ? R = _.allDay : R = v.format({ start: N, end: H }, O);
        var Y = L || E.startsBefore(N), U = I || E.startsAfter(H);
        return x.createElement(lO, { style: B, event: D, label: R, key: A, getters: h, rtl: u, components: p, continuesPrior: Y, continuesAfter: U, accessors: f, resource: r.props.resource, selected: Fn(D, d), onClick: function(C) {
          return r._select(Z(Z(Z({}, D), r.props.resource && { sourceResource: r.props.resource }), l && { isBackgroundEvent: true }), C);
        }, onDoubleClick: function(C) {
          return r._doubleClick(D, C);
        }, isBackgroundEvent: l, onKeyPress: function(C) {
          return r._keyPress(D, C);
        }, resizable: $ });
      });
    }, r._selectable = function() {
      var i = r.containerRef.current, s = r.props, l = s.longPressThreshold, c = s.localizer, u = r._selector = new hc(function() {
        return i;
      }, { longPressThreshold: l }), d = function(p) {
        var m = r.props.onSelecting, y = r.state || {}, g = f(p), $ = g.startDate, b = g.endDate;
        m && (c.eq(y.startDate, $, "minutes") && c.eq(y.endDate, b, "minutes") || m({ start: $, end: b, resourceId: r.props.resource }) === false) || (r.state.start !== g.start || r.state.end !== g.end || r.state.selecting !== g.selecting) && r.setState(g);
      }, f = function(p) {
        var m = r.slotMetrics.closestSlotFromPoint(p, Dt(i));
        r.state.selecting || (r._initialSlot = m);
        var y = r._initialSlot;
        c.lte(y, m) ? m = r.slotMetrics.nextSlot(m) : c.gt(y, m) && (y = r.slotMetrics.nextSlot(y));
        var g = r.slotMetrics.getRange(c.min(y, m), c.max(y, m));
        return Z(Z({}, g), {}, { selecting: true, top: "".concat(g.top, "%"), height: "".concat(g.height, "%") });
      }, v = function(p, m) {
        if (!pn(r.containerRef.current, p)) {
          var y = f(p), g = y.startDate, $ = y.endDate;
          r._selectSlot({ startDate: g, endDate: $, action: m, box: p });
        }
        r.setState({ selecting: false });
      };
      u.on("selecting", d), u.on("selectStart", d), u.on("beforeSelect", function(h) {
        if (r.props.selectable === "ignoreEvents") return !pn(r.containerRef.current, h);
      }), u.on("click", function(h) {
        return v(h, "click");
      }), u.on("doubleClick", function(h) {
        return v(h, "doubleClick");
      }), u.on("select", function(h) {
        r.state.selecting && (r._selectSlot(Z(Z({}, r.state), {}, { action: "select", bounds: h })), r.setState({ selecting: false }));
      }), u.on("reset", function() {
        r.state.selecting && r.setState({ selecting: false });
      });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r._selectSlot = function(i) {
      for (var s = i.startDate, l = i.endDate, c = i.action, u = i.bounds, d = i.box, f = s, v = []; r.props.localizer.lte(f, l); ) v.push(f), f = new Date(+f + r.props.step * 60 * 1e3);
      ee(r.props.onSelectSlot, { slots: v, start: s, end: l, resourceId: r.props.resource, action: c, bounds: u, box: d });
    }, r._select = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r._doubleClick = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r._keyPress = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.slotMetrics = Do(r.props), r.containerRef = F.createRef(), r;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    this.props.selectable && this._selectable(), this.props.isNow && this.setTimeIndicatorPositionUpdateInterval();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable(), this.clearTimeIndicatorInterval();
  } }, { key: "componentDidUpdate", value: function(n, a) {
    this.props.selectable && !n.selectable && this._selectable(), !this.props.selectable && n.selectable && this._teardownSelectable();
    var o = this.props, i = o.getNow, s = o.isNow, l = o.localizer, c = o.date, u = o.min, d = o.max, f = l.neq(n.getNow(), i(), "minutes");
    if (n.isNow !== s || f) {
      if (this.clearTimeIndicatorInterval(), s) {
        var v = !f && l.eq(n.date, c, "minutes") && a.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(v);
      }
    } else s && (l.neq(n.min, u, "minutes") || l.neq(n.max, d, "minutes")) && this.positionTimeIndicator();
  } }, { key: "setTimeIndicatorPositionUpdateInterval", value: function() {
    var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    !this.intervalTriggered && !a && this.positionTimeIndicator(), this._timeIndicatorTimeout = window.setTimeout(function() {
      n.intervalTriggered = true, n.positionTimeIndicator(), n.setTimeIndicatorPositionUpdateInterval();
    }, 6e4);
  } }, { key: "clearTimeIndicatorInterval", value: function() {
    this.intervalTriggered = false, window.clearTimeout(this._timeIndicatorTimeout);
  } }, { key: "positionTimeIndicator", value: function() {
    var n = this.props, a = n.min, o = n.max, i = n.getNow, s = i();
    if (s >= a && s <= o) {
      var l = this.slotMetrics.getCurrentTimePosition(s);
      this.intervalTriggered = true, this.setState({ timeIndicatorPosition: l });
    } else this.clearTimeIndicatorInterval();
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.max, i = n.rtl, s = n.isNow, l = n.resource, c = n.accessors, u = n.localizer, d = n.getters, f = d.dayProp, v = We(d, dO), h = n.components, p = h.eventContainerWrapper, m = h.timeIndicatorWrapper, y = We(h, fO);
    this.slotMetrics = this.slotMetrics.update(this.props);
    var g = this.slotMetrics, $ = this.state, b = $.selecting, E = $.top, _ = $.height, M = $.startDate, P = $.endDate, k = { start: M, end: P }, T = f(o, l), D = T.className, B = T.style, H = { className: "rbc-current-time-indicator", style: { top: "".concat(this.state.timeIndicatorPosition, "%") } }, N = y.dayColumnWrapper || uO;
    return x.createElement(N, { ref: this.containerRef, date: a, style: B, className: te(D, "rbc-day-slot", "rbc-time-column", s && "rbc-now", s && "rbc-today", b && "rbc-slot-selecting"), slotMetrics: g, resource: l }, g.groups.map(function(A, O) {
      return x.createElement($c, { key: O, group: A, resource: l, getters: v, components: y });
    }), x.createElement(p, { localizer: u, resource: l, accessors: c, getters: v, components: y, slotMetrics: g }, x.createElement("div", { className: te("rbc-events-container", i && "rtl") }, this.renderEvents({ events: this.props.backgroundEvents, isBackgroundEvent: true }), this.renderEvents({ events: this.props.events }))), b && x.createElement("div", { className: "rbc-slot-selection", style: { top: E, height: _ } }, x.createElement("span", null, u.format(k, "selectRangeFormat"))), s && this.intervalTriggered && x.createElement(m, H, x.createElement("div", H)));
  } }]);
}(x.Component);
Ec.defaultProps = { dragThroughEvents: true, timeslots: 2 };
var Dc = function(t) {
  var r = t.label;
  return x.createElement(x.Fragment, null, r);
}, vO = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), ee(r.props.onDrillDown, [i, s]);
    }, r.renderRow = function(i) {
      var s = r.props, l = s.events, c = s.rtl, u = s.selectable, d = s.getNow, f = s.range, v = s.getters, h = s.localizer, p = s.accessors, m = s.components, y = s.resizable, g = p.resourceId(i), $ = i ? l.filter(function(b) {
        return p.resource(b) === g;
      }) : l;
      return x.createElement(Dr, { isAllDay: true, rtl: c, getNow: d, minRows: 2, maxRows: r.props.allDayMaxRows + 1, range: f, events: $, resourceId: g, className: "rbc-allday-cell", selectable: u, selected: r.props.selected, components: m, accessors: p, getters: v, localizer: h, onSelect: r.props.onSelectEvent, onShowMore: r.props.onShowMore, onDoubleClick: r.props.onDoubleClickEvent, onKeyPress: r.props.onKeyPressEvent, onSelectSlot: r.props.onSelectSlot, longPressThreshold: r.props.longPressThreshold, resizable: y });
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "renderHeaderCells", value: function(n) {
    var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components.header, d = u === void 0 ? Eo : u, f = l();
    return n.map(function(v, h) {
      var p = s(v), m = i.format(v, "dayFormat"), y = c(v), g = y.className, $ = y.style, b = x.createElement(d, { date: v, label: m, localizer: i });
      return x.createElement("div", { key: h, style: $, className: te("rbc-header", g, i.isSameDate(v, f) && "rbc-today") }, p ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: function(_) {
        return a.handleHeaderClick(v, p, _);
      } }, b) : x.createElement("span", null, b));
    });
  } }, { key: "render", value: function() {
    var n = this, a = this.props, o = a.width, i = a.rtl, s = a.resources, l = a.range, c = a.events, u = a.getNow, d = a.accessors, f = a.selectable, v = a.components, h = a.getters, p = a.scrollRef, m = a.localizer, y = a.isOverflowing, g = a.components, $ = g.timeGutterHeader, b = g.resourceHeader, E = b === void 0 ? Dc : b, _ = a.resizable, M = {};
    y && (M[i ? "marginLeft" : "marginRight"] = "".concat(Rr() - 1, "px"));
    var P = s.groupEvents(c);
    return x.createElement("div", { style: M, ref: p, className: te("rbc-time-header", y && "rbc-overflowing") }, x.createElement("div", { className: "rbc-label rbc-time-header-gutter", style: { width: o, minWidth: o, maxWidth: o } }, $ && x.createElement($, null)), s.map(function(k, T) {
      var D = De(k, 2), B = D[0], H = D[1];
      return x.createElement("div", { className: "rbc-time-header-content", key: B || T }, H && x.createElement("div", { className: "rbc-row rbc-row-resource", key: "resource_".concat(T) }, x.createElement("div", { className: "rbc-header" }, x.createElement(E, { index: T, label: d.resourceTitle(H), resource: H }))), x.createElement("div", { className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "") }, n.renderHeaderCells(l)), x.createElement(Dr, { isAllDay: true, rtl: i, getNow: u, minRows: 2, maxRows: n.props.allDayMaxRows + 1, range: l, events: P.get(B) || [], resourceId: H && B, className: "rbc-allday-cell", selectable: f, selected: n.props.selected, components: v, accessors: d, getters: h, localizer: m, onSelect: n.props.onSelectEvent, onShowMore: n.props.onShowMore, onDoubleClick: n.props.onDoubleClickEvent, onKeyDown: n.props.onKeyPressEvent, onSelectSlot: n.props.onSelectSlot, longPressThreshold: n.props.longPressThreshold, resizable: _ }));
    }));
  } }]);
}(x.Component), pO = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), ee(r.props.onDrillDown, [i, s]);
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "renderHeaderCells", value: function(n) {
    var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components, d = u.header, f = d === void 0 ? Eo : d, v = u.resourceHeader, h = v === void 0 ? Dc : v, p = o.resources, m = o.accessors, y = o.events, g = o.rtl, $ = o.selectable, b = o.components, E = o.getters, _ = o.resizable, M = l(), P = p.groupEvents(y);
    return n.map(function(k, T) {
      var D = s(k), B = i.format(k, "dayFormat"), H = c(k), N = H.className, A = H.style, O = x.createElement(f, { date: k, label: B, localizer: i });
      return x.createElement("div", { key: T, className: "rbc-time-header-content rbc-resource-grouping" }, x.createElement("div", { className: "rbc-row rbc-time-header-cell".concat(n.length <= 1 ? " rbc-time-header-cell-single-day" : "") }, x.createElement("div", { style: A, className: te("rbc-header", N, i.isSameDate(k, M) && "rbc-today") }, D ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: function(L) {
        return a.handleHeaderClick(k, D, L);
      } }, O) : x.createElement("span", null, O))), x.createElement("div", { className: "rbc-row" }, p.map(function(R, L) {
        var I = De(R, 2), Y = I[0], U = I[1];
        return x.createElement("div", { key: "resource_".concat(Y, "_").concat(L), className: te("rbc-header", N, i.isSameDate(k, M) && "rbc-today") }, x.createElement(h, { index: L, label: m.resourceTitle(U), resource: U }));
      })), x.createElement("div", { className: "rbc-row rbc-m-b-negative-3 rbc-h-full" }, p.map(function(R, L) {
        var I = De(R, 2), Y = I[0], U = I[1], S = (P.get(Y) || []).filter(function(C) {
          return i.isSameDate(C.start, k) || i.isSameDate(C.end, k);
        });
        return x.createElement(Dr, { key: "resource_".concat(Y, "_").concat(L), isAllDay: true, rtl: g, getNow: l, minRows: 2, maxRows: a.props.allDayMaxRows + 1, range: [k], events: S, resourceId: U && Y, className: "rbc-allday-cell", selectable: $, selected: a.props.selected, components: b, accessors: m, getters: E, localizer: i, onSelect: a.props.onSelectEvent, onShowMore: a.props.onShowMore, onDoubleClick: a.props.onDoubleClickEvent, onKeyDown: a.props.onKeyPressEvent, onSelectSlot: a.props.onSelectSlot, longPressThreshold: a.props.longPressThreshold, resizable: _ });
      })));
    });
  } }, { key: "render", value: function() {
    var n = this.props, a = n.width, o = n.rtl, i = n.range, s = n.scrollRef, l = n.isOverflowing, c = n.components.timeGutterHeader, u = {};
    return l && (u[o ? "marginLeft" : "marginRight"] = "".concat(Rr() - 1, "px")), x.createElement("div", { style: u, ref: s, className: te("rbc-time-header", l && "rbc-overflowing") }, x.createElement("div", { className: "rbc-label rbc-time-header-gutter", style: { width: a, minWidth: a, maxWidth: a } }, c && x.createElement(c, null)), this.renderHeaderCells(i));
  } }]);
}(x.Component);
function hO(e2) {
  var t = e2.min, r = e2.max, n = e2.localizer;
  return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r) ? { start: n.add(t, -1, "day"), end: n.add(r, -1, "day") } : { start: t, end: r };
}
var mO = function(t) {
  var r = t.min, n = t.max, a = t.timeslots, o = t.step, i = t.localizer, s = t.getNow, l = t.resource, c = t.components, u = t.getters, d = t.gutterRef, f = c.timeGutterWrapper, v = F.useMemo(function() {
    return hO({ min: r, max: n, localizer: i });
  }, [r == null ? void 0 : r.toISOString(), n == null ? void 0 : n.toISOString(), i]), h = v.start, p = v.end, m = F.useState(Do({ min: h, max: p, timeslots: a, step: o, localizer: i })), y = De(m, 2), g = y[0], $ = y[1];
  F.useEffect(function() {
    g && $(g.update({ min: h, max: p, timeslots: a, step: o, localizer: i }));
  }, [h == null ? void 0 : h.toISOString(), p == null ? void 0 : p.toISOString(), a, o]);
  var b = F.useCallback(function(E, _) {
    if (_) return null;
    var M = g.dateIsInGroup(s(), _);
    return x.createElement("span", { className: te("rbc-label", M && "rbc-now") }, i.format(E, "timeGutterFormat"));
  }, [g, i, s]);
  return x.createElement(f, { slotMetrics: g }, x.createElement("div", { className: "rbc-time-gutter rbc-time-column", ref: d }, g.groups.map(function(E, _) {
    return x.createElement($c, { key: _, group: E, resource: l, components: c, renderSlot: b, getters: u });
  })));
}, gO = x.forwardRef(function(e2, t) {
  return x.createElement(mO, Object.assign({ gutterRef: t }, e2));
}), ua = {};
function yO(e2, t) {
  return { map: function(n) {
    return e2 ? e2.map(function(a, o) {
      return n([t.resourceId(a), a], o);
    }) : [n([ua, null], 0)];
  }, groupEvents: function(n) {
    var a = /* @__PURE__ */ new Map();
    return e2 ? (n.forEach(function(o) {
      var i = t.resource(o) || ua;
      if (Array.isArray(i)) i.forEach(function(l) {
        var c = a.get(l) || [];
        c.push(o), a.set(l, c);
      });
      else {
        var s = a.get(i) || [];
        s.push(o), a.set(i, s);
      }
    }), a) : (a.set(ua, n), a);
  } };
}
var Zt = function(e2) {
  function t(r) {
    var n;
    return ie(this, t), n = pe(this, t, [r]), n.handleScroll = function(a) {
      n.scrollRef.current && (n.scrollRef.current.scrollLeft = a.target.scrollLeft);
    }, n.handleResize = function() {
      br(n.rafHandle), n.rafHandle = Ar(n.checkOverflow);
    }, n.handleKeyPressEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onKeyPressEvent, o);
    }, n.handleSelectEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onSelectEvent, o);
    }, n.handleDoubleClickEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onDoubleClickEvent, o);
    }, n.handleShowMore = function(a, o, i, s, l) {
      var c = n.props, u = c.popup, d = c.onDrillDown, f = c.onShowMore, v = c.getDrilldownView, h = c.doShowMoreDrillDown;
      if (n.clearSelection(), u) {
        var p = bn(i, n.containerRef.current);
        n.setState({ overlay: { date: o, events: a, position: Z(Z({}, p), {}, { width: "200px" }), target: l } });
      } else h && ee(d, [o, v(o) || me.DAY]);
      ee(f, [a, o, s]);
    }, n.handleSelectAllDaySlot = function(a, o) {
      var i = n.props.onSelectSlot, s = new Date(a[0]), l = new Date(a[a.length - 1]);
      l.setDate(a[a.length - 1].getDate() + 1), ee(i, { slots: a, start: s, end: l, action: o.action, resourceId: o.resourceId });
    }, n.overlayDisplay = function() {
      n.setState({ overlay: null });
    }, n.checkOverflow = function() {
      if (!n._updatingOverflow) {
        var a = n.contentRef.current;
        if (a != null && a.scrollHeight) {
          var o = a.scrollHeight > a.clientHeight;
          n.state.isOverflowing !== o && (n._updatingOverflow = true, n.setState({ isOverflowing: o }, function() {
            n._updatingOverflow = false;
          }));
        }
      }
    }, n.memoizedResources = Ll(function(a, o) {
      return yO(a, o);
    }), n.state = { gutterWidth: void 0, isOverflowing: null }, n.scrollRef = x.createRef(), n.contentRef = x.createRef(), n.containerRef = x.createRef(), n._scrollRatio = null, n.gutterRef = F.createRef(), n;
  }
  return ve(t, e2), oe(t, [{ key: "getSnapshotBeforeUpdate", value: function() {
    return this.checkOverflow(), null;
  } }, { key: "componentDidMount", value: function() {
    this.props.width == null && this.measureGutter(), this.calculateScroll(), this.applyScroll(), window.addEventListener("resize", this.handleResize);
  } }, { key: "componentWillUnmount", value: function() {
    window.removeEventListener("resize", this.handleResize), br(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
  } }, { key: "componentDidUpdate", value: function() {
    this.applyScroll();
  } }, { key: "renderDayColumn", value: function(n, a, o, i, s, l, c, u, d, f) {
    var v = this.props, h = v.min, p = v.max, m = (i.get(a) || []).filter(function(g) {
      return l.inRange(n, c.start(g), c.end(g), "day");
    }), y = (s.get(a) || []).filter(function(g) {
      return l.inRange(n, c.start(g), c.end(g), "day");
    });
    return x.createElement(Ec, Object.assign({}, this.props, { localizer: l, min: l.merge(n, h), max: l.merge(n, p), resource: o && a, components: u, isNow: l.isSameDate(n, f), key: "".concat(a, "-").concat(n), date: n, events: m, backgroundEvents: y, dayLayoutAlgorithm: d }));
  } }, { key: "renderResourcesFirst", value: function(n, a, o, i, s, l, c, u, d) {
    var f = this;
    return a.map(function(v) {
      var h = De(v, 2), p = h[0], m = h[1];
      return n.map(function(y) {
        return f.renderDayColumn(y, p, m, o, i, s, l, u, d, c);
      });
    });
  } }, { key: "renderRangeFirst", value: function(n, a, o, i, s, l, c, u, d) {
    var f = this;
    return n.map(function(v) {
      return x.createElement("div", { style: { display: "flex", minHeight: "100%", flex: 1 }, key: v }, a.map(function(h) {
        var p = De(h, 2), m = p[0], y = p[1];
        return x.createElement("div", { style: { flex: 1 }, key: l.resourceId(y) }, f.renderDayColumn(v, m, y, o, i, s, l, u, d, c));
      }));
    });
  } }, { key: "renderEvents", value: function(n, a, o, i) {
    var s = this.props, l = s.accessors, c = s.localizer, u = s.resourceGroupingLayout, d = s.components, f = s.dayLayoutAlgorithm, v = this.memoizedResources(this.props.resources, l), h = v.groupEvents(a), p = v.groupEvents(o);
    return u ? this.renderRangeFirst(n, v, h, p, c, l, i, d, f) : this.renderResourcesFirst(n, v, h, p, c, l, i, d, f);
  } }, { key: "render", value: function() {
    var n, a = this.props, o = a.events, i = a.backgroundEvents, s = a.range, l = a.width, c = a.rtl, u = a.selected, d = a.getNow, f = a.resources, v = a.components, h = a.accessors, p = a.getters, m = a.localizer, y = a.min, g = a.max, $ = a.showMultiDayTimes, b = a.longPressThreshold, E = a.resizable, _ = a.resourceGroupingLayout;
    l = l || this.state.gutterWidth;
    var M = s[0], P = s[s.length - 1];
    this.slots = s.length;
    var k = [], T = [], D = [];
    o.forEach(function(H) {
      if (Er(H, M, P, h, m)) {
        var N = h.start(H), A = h.end(H);
        h.allDay(H) || m.startAndEndAreDateOnly(N, A) || !$ && !m.isSameDate(N, A) ? k.push(H) : T.push(H);
      }
    }), i.forEach(function(H) {
      Er(H, M, P, h, m) && D.push(H);
    }), k.sort(function(H, N) {
      return Ta(H, N, h, m);
    });
    var B = { range: s, events: k, width: l, rtl: c, getNow: d, localizer: m, selected: u, allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (n = this.props.allDayMaxRows) !== null && n !== void 0 ? n : 1 / 0, resources: this.memoizedResources(f, h), selectable: this.props.selectable, accessors: h, getters: p, components: v, scrollRef: this.scrollRef, isOverflowing: this.state.isOverflowing, longPressThreshold: b, onSelectSlot: this.handleSelectAllDaySlot, onSelectEvent: this.handleSelectEvent, onShowMore: this.handleShowMore, onDoubleClickEvent: this.props.onDoubleClickEvent, onKeyPressEvent: this.props.onKeyPressEvent, onDrillDown: this.props.onDrillDown, getDrilldownView: this.props.getDrilldownView, resizable: E };
    return x.createElement("div", { className: te("rbc-time-view", f && "rbc-time-view-resources"), ref: this.containerRef }, f && f.length > 1 && _ ? x.createElement(pO, B) : x.createElement(vO, B), this.props.popup && this.renderOverlay(), x.createElement("div", { ref: this.contentRef, className: "rbc-time-content", onScroll: this.handleScroll }, x.createElement(gO, { date: M, ref: this.gutterRef, localizer: m, min: m.merge(M, y), max: m.merge(M, g), step: this.props.step, getNow: this.props.getNow, timeslots: this.props.timeslots, components: v, className: "rbc-time-gutter", getters: p }), this.renderEvents(s, T, D, d())));
  } }, { key: "renderOverlay", value: function() {
    var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, d = s.getters, f = s.selected, v = s.popupOffset, h = s.handleDragStart, p = function() {
      return o.setState({ overlay: null });
    };
    return x.createElement($o, { overlay: i, accessors: l, localizer: c, components: u, getters: d, selected: f, popupOffset: v, ref: this.containerRef, handleKeyPressEvent: this.handleKeyPressEvent, handleSelectEvent: this.handleSelectEvent, handleDoubleClickEvent: this.handleDoubleClickEvent, handleDragStart: h, show: !!i.position, overlayDisplay: this.overlayDisplay, onHide: p });
  } }, { key: "clearSelection", value: function() {
    clearTimeout(this._selectTimer), this._pendingSelection = [];
  } }, { key: "measureGutter", value: function() {
    var n = this;
    this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest), this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
      var a, o = (a = n.gutterRef) !== null && a !== void 0 && a.current ? $r(n.gutterRef.current) : void 0;
      o && n.state.gutterWidth !== o && n.setState({ gutterWidth: o });
    });
  } }, { key: "applyScroll", value: function() {
    if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
      var n = this.contentRef.current;
      n.scrollTop = n.scrollHeight * this._scrollRatio, this._scrollRatio = null;
    }
  } }, { key: "calculateScroll", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props, a = n.min, o = n.max, i = n.scrollToTime, s = n.localizer, l = s.diff(s.merge(i, a), i, "milliseconds"), c = s.diff(a, o, "milliseconds");
    this._scrollRatio = l / c;
  } }]);
}(F.Component);
Zt.defaultProps = { step: 30, timeslots: 2, resourceGroupingLayout: false };
var bO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Hn = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, bO), p = t.range(a, { localizer: o });
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 10, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
Hn.range = function(e2, t) {
  var r = t.localizer;
  return [r.startOf(e2, "day")];
};
Hn.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "day");
    case we.NEXT:
      return n.add(e2, 1, "day");
    default:
      return e2;
  }
};
Hn.title = function(e2, t) {
  var r = t.localizer;
  return r.format(e2, "dayHeaderFormat");
};
var wO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], et = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, wO), p = t.range(a, this.props);
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 15, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
et.defaultProps = Zt.defaultProps;
et.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "week");
    case we.NEXT:
      return n.add(e2, 1, "week");
    default:
      return e2;
  }
};
et.range = function(e2, t) {
  var r = t.localizer, n = r.startOfWeek(), a = r.startOf(e2, "week", n), o = r.endOf(e2, "week", n);
  return r.range(a, o);
};
et.title = function(e2, t) {
  var r = t.localizer, n = et.range(e2, { localizer: r }), a = Yl(n), o = a[0], i = a.slice(1);
  return r.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
};
var xO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _o(e2, t) {
  return et.range(e2, t).filter(function(r) {
    return [6, 0].indexOf(r.getDay()) === -1;
  });
}
var Wr = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, xO), p = _o(a, this.props);
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 15, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
Wr.defaultProps = Zt.defaultProps;
Wr.range = _o;
Wr.navigate = et.navigate;
Wr.title = function(e2, t) {
  var r = t.localizer, n = _o(e2, { localizer: r }), a = Yl(n), o = a[0], i = a.slice(1);
  return r.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
};
var zn = 30;
function Bn(e2) {
  var t = e2.accessors, r = e2.components, n = e2.date, a = e2.events, o = e2.getters, i = e2.length, s = i === void 0 ? zn : i, l = e2.localizer, c = e2.onDoubleClickEvent, u = e2.onSelectEvent, d = e2.selected, f = F.useRef(null), v = F.useRef(null), h = F.useRef(null), p = F.useRef(null), m = F.useRef(null);
  F.useEffect(function() {
    $();
  });
  var y = function(P, k, T) {
    var D = r.event, B = r.date;
    return k = k.filter(function(H) {
      return Er(H, l.startOf(P, "day"), l.endOf(P, "day"), t, l);
    }), k.map(function(H, N) {
      var A = t.title(H), O = t.end(H), R = t.start(H), L = o.eventProp(H, R, O, Fn(H, d)), I = N === 0 && l.format(P, "agendaDateFormat"), Y = N === 0 ? x.createElement("td", { rowSpan: k.length, className: "rbc-agenda-date-cell" }, B ? x.createElement(B, { day: P, label: I }) : I) : false;
      return x.createElement("tr", { key: T + "_" + N, className: L.className, style: L.style }, Y, x.createElement("td", { className: "rbc-agenda-time-cell" }, g(P, H)), x.createElement("td", { className: "rbc-agenda-event-cell", onClick: function(S) {
        return u && u(H, S);
      }, onDoubleClick: function(S) {
        return c && c(H, S);
      } }, D ? x.createElement(D, { event: H, title: A }) : A));
    }, []);
  }, g = function(P, k) {
    var T = "", D = r.time, B = l.messages.allDay, H = t.end(k), N = t.start(k);
    return t.allDay(k) || (l.eq(N, H) ? B = l.format(N, "agendaTimeFormat") : l.isSameDate(N, H) ? B = l.format({ start: N, end: H }, "agendaTimeRangeFormat") : l.isSameDate(P, N) ? B = l.format(N, "agendaTimeFormat") : l.isSameDate(P, H) && (B = l.format(H, "agendaTimeFormat"))), l.gt(P, N, "day") && (T = "rbc-continues-prior"), l.lt(P, H, "day") && (T += " rbc-continues-after"), x.createElement("span", { className: T.trim() }, D ? x.createElement(D, { event: k, day: P, label: B }) : B);
  }, $ = function() {
    if (m.current) {
      var P = f.current, k = m.current.firstChild;
      if (k) {
        var T = p.current.scrollHeight > p.current.clientHeight, D = [], B = D;
        D = [$r(k.children[0]), $r(k.children[1])], (B[0] !== D[0] || B[1] !== D[1]) && (v.current.style.width = D[0] + "px", h.current.style.width = D[1] + "px"), T ? (Dn(P, "rbc-header-overflowing"), P.style.marginRight = Rr() + "px") : _n(P, "rbc-header-overflowing");
      }
    }
  }, b = l.messages, E = l.add(n, s, "day"), _ = l.range(n, E, "day");
  return a = a.filter(function(M) {
    return Er(M, l.startOf(n, "day"), l.endOf(E, "day"), t, l);
  }), a.sort(function(M, P) {
    return +t.start(M) - +t.start(P);
  }), x.createElement("div", { className: "rbc-agenda-view" }, a.length !== 0 ? x.createElement(x.Fragment, null, x.createElement("table", { ref: f, className: "rbc-agenda-table" }, x.createElement("thead", null, x.createElement("tr", null, x.createElement("th", { className: "rbc-header", ref: v }, b.date), x.createElement("th", { className: "rbc-header", ref: h }, b.time), x.createElement("th", { className: "rbc-header" }, b.event)))), x.createElement("div", { className: "rbc-agenda-content", ref: p }, x.createElement("table", { className: "rbc-agenda-table" }, x.createElement("tbody", { ref: m }, _.map(function(M, P) {
    return y(M, a, P);
  }))))) : x.createElement("span", { className: "rbc-agenda-empty" }, b.noEventsInRange));
}
Bn.range = function(e2, t) {
  var r = t.length, n = r === void 0 ? zn : r, a = t.localizer, o = a.add(e2, n, "day");
  return { start: e2, end: o };
};
Bn.navigate = function(e2, t, r) {
  var n = r.length, a = n === void 0 ? zn : n, o = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return o.add(e2, -a, "day");
    case we.NEXT:
      return o.add(e2, a, "day");
    default:
      return e2;
  }
};
Bn.title = function(e2, t) {
  var r = t.length, n = r === void 0 ? zn : r, a = t.localizer, o = a.add(e2, n, "day");
  return a.format({ start: e2, end: o }, "agendaHeaderFormat");
};
var nn = ht(ht(ht(ht(ht({}, me.MONTH, Wn), me.WEEK, et), me.WORK_WEEK, Wr), me.DAY, Hn), me.AGENDA, Bn), $O = ["action", "date", "today"];
function EO(e2, t) {
  var r = t.action, n = t.date, a = t.today, o = We(t, $O);
  switch (e2 = typeof e2 == "string" ? nn[e2] : e2, r) {
    case we.TODAY:
      n = a || /* @__PURE__ */ new Date();
      break;
    case we.DATE:
      break;
    default:
      ur(e2 && typeof e2.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), n = e2.navigate(n, r, o);
  }
  return n;
}
function DO(e2, t) {
  var r = null;
  return typeof t == "function" ? r = t(e2) : typeof t == "string" && Ra(e2) === "object" && e2 != null && t in e2 && (r = e2[t]), r;
}
var ze = function(t) {
  return function(r) {
    return DO(r, t);
  };
}, _O = ["view", "date", "getNow", "onNavigate"], SO = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function _c(e2) {
  if (Array.isArray(e2)) return e2;
  for (var t = [], r = 0, n = Object.entries(e2); r < n.length; r++) {
    var a = De(n[r], 2), o = a[0], i = a[1];
    i && t.push(o);
  }
  return t;
}
function OO(e2, t) {
  var r = t.views, n = _c(r);
  return n.indexOf(e2) !== -1;
}
var Sc = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.getViews = function() {
      var i = r.props.views;
      return Array.isArray(i) ? V1(i, function(s, l) {
        return s[l] = nn[l];
      }, {}) : Ra(i) === "object" ? G$(i, function(s, l) {
        return s === true ? nn[l] : s;
      }) : nn;
    }, r.getView = function() {
      var i = r.getViews();
      return i[r.props.view];
    }, r.getDrilldownView = function(i) {
      var s = r.props, l = s.view, c = s.drilldownView, u = s.getDrilldownView;
      return u ? u(i, l, Object.keys(r.getViews())) : c;
    }, r.handleRangeChange = function(i, s, l) {
      var c = r.props, u = c.onRangeChange, d = c.localizer;
      u && s.range && u(s.range(i, { localizer: d }), l);
    }, r.handleNavigate = function(i, s) {
      var l = r.props, c = l.view, u = l.date, d = l.getNow, f = l.onNavigate, v = We(l, _O), h = r.getView(), p = d();
      u = EO(h, Z(Z({}, v), {}, { action: i, date: s || u || p, today: p })), f(u, c, i), r.handleRangeChange(u, h);
    }, r.handleViewChange = function(i) {
      i !== r.props.view && OO(i, r.props) && r.props.onView(i);
      var s = r.getViews();
      r.handleRangeChange(r.props.date || r.props.getNow(), s[i], i);
    }, r.handleSelectEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.handleSelectSlot = function(i) {
      ee(r.props.onSelectSlot, i);
    }, r.handleDrillDown = function(i, s) {
      var l = r.props.onDrillDown;
      if (l) {
        l(i, s, r.drilldownView);
        return;
      }
      s && r.handleViewChange(s), r.handleNavigate(we.DATE, i);
    }, r.state = { context: t.getContext(r.props) }, r;
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.view, o = n.toolbar, i = n.events, s = n.backgroundEvents, l = n.resourceGroupingLayout, c = n.style, u = n.className, d = n.elementProps, f = n.date, v = n.getNow, h = n.length, p = n.showMultiDayTimes, m = n.onShowMore, y = n.doShowMoreDrillDown;
    n.components, n.formats, n.messages, n.culture;
    var g = We(n, SO);
    f = f || v();
    var $ = this.getView(), b = this.state.context, E = b.accessors, _ = b.components, M = b.getters, P = b.localizer, k = b.viewNames, T = _.toolbar || kS, D = $.title(f, { localizer: P, length: h });
    return x.createElement("div", Object.assign({}, d, { className: te(u, "rbc-calendar", g.rtl && "rbc-rtl"), style: c }), o && x.createElement(T, { date: f, view: a, views: k, label: D, onView: this.handleViewChange, onNavigate: this.handleNavigate, localizer: P }), x.createElement($, Object.assign({}, g, { events: i, backgroundEvents: s, date: f, getNow: v, length: h, localizer: P, getters: M, components: _, accessors: E, showMultiDayTimes: p, getDrilldownView: this.getDrilldownView, onNavigate: this.handleNavigate, onDrillDown: this.handleDrillDown, onSelectEvent: this.handleSelectEvent, onDoubleClickEvent: this.handleDoubleClickEvent, onKeyPressEvent: this.handleKeyPressEvent, onSelectSlot: this.handleSelectSlot, onShowMore: m, doShowMoreDrillDown: y, resourceGroupingLayout: l })));
  } }], [{ key: "getDerivedStateFromProps", value: function(n) {
    return { context: t.getContext(n) };
  } }, { key: "getContext", value: function(n) {
    var a = n.startAccessor, o = n.endAccessor, i = n.allDayAccessor, s = n.tooltipAccessor, l = n.titleAccessor, c = n.resourceAccessor, u = n.resourceIdAccessor, d = n.resourceTitleAccessor, f = n.eventIdAccessor, v = n.eventPropGetter, h = n.backgroundEventPropGetter, p = n.slotPropGetter, m = n.slotGroupPropGetter, y = n.dayPropGetter, g = n.view, $ = n.views, b = n.localizer, E = n.culture, _ = n.messages, M = _ === void 0 ? {} : _, P = n.components, k = P === void 0 ? {} : P, T = n.formats, D = T === void 0 ? {} : T, B = _c($), H = AS(M);
    return { viewNames: B, localizer: CS(b, E, D, H), getters: { eventProp: function() {
      return v && v.apply(void 0, arguments) || {};
    }, backgroundEventProp: function() {
      return h && h.apply(void 0, arguments) || {};
    }, slotProp: function() {
      return p && p.apply(void 0, arguments) || {};
    }, slotGroupProp: function() {
      return m && m.apply(void 0, arguments) || {};
    }, dayProp: function() {
      return y && y.apply(void 0, arguments) || {};
    } }, components: H$(k[g] || {}, j1(k, B), { eventWrapper: je, backgroundEventWrapper: je, eventContainerWrapper: je, dateCellWrapper: je, weekWrapper: je, timeSlotWrapper: je, timeGutterWrapper: je, timeIndicatorWrapper: je }), accessors: { start: ze(a), end: ze(o), allDay: ze(i), tooltip: ze(s), title: ze(l), resource: ze(c), resourceId: ze(u), resourceTitle: ze(d), eventId: ze(f) } };
  } }]);
}(x.Component);
Sc.defaultProps = { events: [], backgroundEvents: [], elementProps: {}, popup: false, toolbar: true, view: me.MONTH, views: [me.MONTH, me.WEEK, me.DAY, me.AGENDA], step: 30, length: 30, allDayMaxRows: 1 / 0, doShowMoreDrillDown: true, drilldownView: me.DAY, titleAccessor: "title", tooltipAccessor: "title", allDayAccessor: "allDay", startAccessor: "start", endAccessor: "end", resourceAccessor: "resourceId", resourceIdAccessor: "id", resourceTitleAccessor: "title", eventIdAccessor: "id", longPressThreshold: 250, getNow: function() {
  return /* @__PURE__ */ new Date();
}, dayLayoutAlgorithm: "overlap" };
var TO = Us(Sc, { view: "onView", date: "onNavigate", selected: "onSelectEvent" }), CO = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "MMMM DD", r) + " \u2013 " + n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", r);
}, kO = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "L", r) + " \u2013 " + n.format(o, "L", r);
}, da = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "LT", r) + " \u2013 " + n.format(o, "LT", r);
}, MO = function(t, r, n) {
  var a = t.start;
  return n.format(a, "LT", r) + " \u2013 ";
}, AO = function(t, r, n) {
  var a = t.end;
  return " \u2013 " + n.format(a, "LT", r);
}, PO = { dateFormat: "DD", dayFormat: "DD ddd", weekdayFormat: "ddd", selectRangeFormat: da, eventTimeRangeFormat: da, eventTimeRangeStartFormat: MO, eventTimeRangeEndFormat: AO, timeGutterFormat: "LT", monthHeaderFormat: "MMMM YYYY", dayHeaderFormat: "dddd MMM DD", dayRangeHeaderFormat: CO, agendaHeaderFormat: kO, agendaDateFormat: "ddd MMM DD", agendaTimeFormat: "LT", agendaTimeRangeFormat: da };
function Ve(e2) {
  var t = e2 && e2.toLowerCase();
  return t === "FullYear" ? t = "year" : t || (t = void 0), t;
}
function NO(e2) {
  e2.extend(Z1), e2.extend(Q1), e2.extend(tS), e2.extend(nS), e2.extend(oS), e2.extend(sS), e2.extend(cS), e2.extend(dS);
  var t = function(C, j) {
    return j ? C.locale(j) : C;
  }, r = e2.tz ? e2.tz : e2;
  function n(S) {
    return r(S).toDate().getTimezoneOffset();
  }
  function a(S, C) {
    var j, z = r(S), q = r(C);
    if (!r.tz) return z.toDate().getTimezoneOffset() - q.toDate().getTimezoneOffset();
    var K = (j = z.tz().$x.$timezone) !== null && j !== void 0 ? j : e2.tz.guess(), G = -r.tz(+z, K).utcOffset(), V = -r.tz(+q, K).utcOffset();
    return G - V;
  }
  function o(S) {
    var C = r(S).startOf("day");
    return a(C, S);
  }
  function i(S, C, j) {
    var z = Ve(j), q = z ? r(S).startOf(z) : r(S), K = z ? r(C).startOf(z) : r(C);
    return [q, K, z];
  }
  function s() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, C = arguments.length > 1 ? arguments[1] : void 0, j = Ve(C);
    return j ? r(S).startOf(j).toDate() : r(S).toDate();
  }
  function l() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, C = arguments.length > 1 ? arguments[1] : void 0, j = Ve(C);
    return j ? r(S).endOf(j).toDate() : r(S).toDate();
  }
  function c(S, C, j) {
    var z = i(S, C, j), q = De(z, 3), K = q[0], G = q[1], V = q[2];
    return K.isSame(G, V);
  }
  function u(S, C, j) {
    return !c(S, C, j);
  }
  function d(S, C, j) {
    var z = i(S, C, j), q = De(z, 3), K = q[0], G = q[1], V = q[2];
    return K.isAfter(G, V);
  }
  function f(S, C, j) {
    var z = i(S, C, j), q = De(z, 3), K = q[0], G = q[1], V = q[2];
    return K.isBefore(G, V);
  }
  function v(S, C, j) {
    var z = i(S, C, j), q = De(z, 3), K = q[0], G = q[1], V = q[2];
    return K.isSameOrBefore(G, V);
  }
  function h(S, C, j) {
    var z = i(S, C, j), q = De(z, 3), K = q[0], G = q[1], V = q[2];
    return K.isSameOrBefore(G, V);
  }
  function p(S, C, j) {
    var z = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day", q = Ve(z), K = r(S), G = r(C), V = r(j);
    return K.isBetween(G, V, q, "[]");
  }
  function m(S, C) {
    var j = r(S), z = r(C), q = e2.min(j, z);
    return q.toDate();
  }
  function y(S, C) {
    var j = r(S), z = r(C), q = e2.max(j, z);
    return q.toDate();
  }
  function g(S, C) {
    if (!S && !C) return null;
    var j = r(C).format("HH:mm:ss"), z = r(S).startOf("day").format("MM/DD/YYYY");
    return r("".concat(z, " ").concat(j)).toDate();
  }
  function $(S, C, j) {
    var z = Ve(j);
    return r(S).add(C, z).toDate();
  }
  function b(S, C) {
    for (var j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", z = Ve(j), q = r(S).toDate(), K = []; h(q, C); ) K.push(q), q = $(q, 1, z);
    return K;
  }
  function E(S, C) {
    var j = Ve(C), z = s(S, j);
    return c(z, S) ? z : $(z, 1, j);
  }
  function _(S, C) {
    var j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", z = Ve(j), q = r(S), K = r(C);
    return K.diff(q, z);
  }
  function M(S) {
    var C = r(S);
    return C.minutes();
  }
  function P(S) {
    var C = S ? e2.localeData(S) : e2.localeData();
    return C ? C.firstDayOfWeek() : 0;
  }
  function k(S) {
    var C = r(S).startOf("month"), j = r(C).startOf("week");
    if (r(C).isLeapYear()) {
      var z = C.toDate().getDay(), q = C.toDate().getDate() - z + (z == 0 ? -6 : 1);
      j.date(q);
    }
    return j.toDate();
  }
  function T(S) {
    return r(S).endOf("month").endOf("week").toDate();
  }
  function D(S) {
    for (var C = k(S), j = T(S), z = []; h(C, j); ) z.push(C), C = $(C, 1, "d");
    return z;
  }
  function B(S, C, j) {
    return r(S).startOf("day").minute(C + j).toDate();
  }
  function H(S, C) {
    return _(S, C, "minutes");
  }
  function N(S) {
    var C = r(S).startOf("day"), j = r(S);
    return j.diff(C, "minutes") + o(S);
  }
  function A(S, C) {
    var j = r(S), z = r(C);
    return j.isBefore(z, "day");
  }
  function O(S, C, j) {
    var z = r(C), q = r(j);
    return z.isSameOrAfter(q, "minutes");
  }
  function R(S, C) {
    var j = r(S), z = r(C);
    return z.diff(j, "day");
  }
  function L(S) {
    var C = S.evtA, j = C.start, z = C.end, q = C.allDay, K = S.evtB, G = K.start, V = K.end, re = K.allDay, le = +s(j, "day") - +s(G, "day"), Te = R(j, z), Ce = R(G, V);
    return le || Ce - Te || !!re - !!q || +j - +G || +z - +V;
  }
  function I(S) {
    var C = S.event, j = C.start, z = C.end, q = S.range, K = q.start, G = q.end, V = r(j).startOf("day"), re = r(z), le = r(K), Te = r(G), Ce = V.isSameOrBefore(Te, "day"), Jn = !V.isSame(re, "minutes"), Qn = Jn ? re.isAfter(le, "minutes") : re.isSameOrAfter(le, "minutes");
    return Ce && Qn;
  }
  function Y(S, C) {
    var j = r(S), z = r(C);
    return j.isSame(z, "day");
  }
  function U() {
    var S = /* @__PURE__ */ new Date(), C = /-/.test(S.toString()) ? "-" : "", j = S.getTimezoneOffset(), z = Number("".concat(C).concat(Math.abs(j))), q = r().utcOffset();
    return q > z ? 1 : 0;
  }
  return new TS({ formats: PO, firstOfWeek: P, firstVisibleDay: k, lastVisibleDay: T, visibleDays: D, format: function(C, j, z) {
    return t(r(C), z).format(j);
  }, lt: f, lte: h, gt: d, gte: v, eq: c, neq: u, merge: g, inRange: p, startOf: s, endOf: l, range: b, add: $, diff: _, ceil: E, min: m, max: y, minutes: M, getSlotDate: B, getTimezoneOffset: n, getDstOffset: a, getTotalMin: H, getMinutesFromMidnight: N, continuesPrior: A, continuesAfter: O, sortEvents: L, inEventRange: I, isSameDate: Y, browserTZOffset: U });
}
var So = {}, Oc = { exports: {} };
(function(e2) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Oc);
var he = Oc.exports, Oo = {}, Tc = { exports: {} }, Cc = { exports: {} }, kc = { exports: {} }, Mc = { exports: {} };
(function(e2) {
  var t = Ht.default;
  function r(n, a) {
    if (t(n) != "object" || !n) return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var i = o.call(n, a || "default");
      if (t(i) != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(n);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Mc);
var RO = Mc.exports;
(function(e2) {
  var t = Ht.default, r = RO;
  function n(a) {
    var o = r(a, "string");
    return t(o) == "symbol" ? o : o + "";
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(kc);
var Ac = kc.exports;
(function(e2) {
  var t = Ac;
  function r(n, a, o) {
    return (a = t(a)) in n ? Object.defineProperty(n, a, { value: o, enumerable: true, configurable: true, writable: true }) : n[a] = o, n;
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Cc);
var Pc = Cc.exports;
(function(e2) {
  var t = Pc;
  function r(a, o) {
    var i = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(a);
      o && (s = s.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), i.push.apply(i, s);
    }
    return i;
  }
  function n(a) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o] != null ? arguments[o] : {};
      o % 2 ? r(Object(i), true).forEach(function(s) {
        t(a, s, i[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function(s) {
        Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(i, s));
      });
    }
    return a;
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Tc);
var ot = Tc.exports, Nc = { exports: {} }, Rc = { exports: {} };
(function(e2) {
  function t(r, n) {
    if (r == null) return {};
    var a = {};
    for (var o in r) if ({}.hasOwnProperty.call(r, o)) {
      if (n.indexOf(o) !== -1) continue;
      a[o] = r[o];
    }
    return a;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Rc);
var jO = Rc.exports;
(function(e2) {
  var t = jO;
  function r(n, a) {
    if (n == null) return {};
    var o, i, s = t(n, a);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(n);
      for (i = 0; i < l.length; i++) o = l[i], a.indexOf(o) === -1 && {}.propertyIsEnumerable.call(n, o) && (s[o] = n[o]);
    }
    return s;
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Nc);
var To = Nc.exports, jc = { exports: {} };
(function(e2) {
  function t(r, n) {
    if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(jc);
var St = jc.exports, Lc = { exports: {} };
(function(e2) {
  var t = Ac;
  function r(a, o) {
    for (var i = 0; i < o.length; i++) {
      var s = o[i];
      s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(a, t(s.key), s);
    }
  }
  function n(a, o, i) {
    return o && r(a.prototype, o), i && r(a, i), Object.defineProperty(a, "prototype", { writable: false }), a;
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Lc);
var Ot = Lc.exports, Ic = { exports: {} }, Fc = { exports: {} };
(function(e2) {
  function t(r) {
    return e2.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n);
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports, t(r);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Fc);
var LO = Fc.exports, Wc = { exports: {} };
(function(e2) {
  function t() {
    try {
      var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (e2.exports = t = function() {
      return !!r;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports)();
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Wc);
var IO = Wc.exports, Hc = { exports: {} }, zc = { exports: {} };
(function(e2) {
  function t(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(zc);
var FO = zc.exports;
(function(e2) {
  var t = Ht.default, r = FO;
  function n(a, o) {
    if (o && (t(o) == "object" || typeof o == "function")) return o;
    if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return r(a);
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Hc);
var WO = Hc.exports;
(function(e2) {
  var t = LO, r = IO, n = WO;
  function a(o, i, s) {
    return i = t(i), n(o, r() ? Reflect.construct(i, s || [], t(o).constructor) : i.apply(o, s));
  }
  e2.exports = a, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Ic);
var Jt = Ic.exports, Bc = { exports: {} }, Yc = { exports: {} };
(function(e2) {
  function t(r, n) {
    return e2.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
      return a.__proto__ = o, a;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports, t(r, n);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Yc);
var HO = Yc.exports;
(function(e2) {
  var t = HO;
  function r(n, a) {
    if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(a && a.prototype, { constructor: { value: n, writable: true, configurable: true } }), Object.defineProperty(n, "prototype", { writable: false }), a && t(n, a);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Bc);
var Qt = Bc.exports;
const Hr = Sr(Vu);
var ke = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: true });
Wt.views = Wt.navigate = void 0;
Wt.navigate = { PREVIOUS: "PREV", NEXT: "NEXT", TODAY: "TODAY", DATE: "DATE" };
Wt.views = { MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda" };
var zO = he.default;
Object.defineProperty(ke, "__esModule", { value: true });
ke.views = ke.dateRangeFormat = ke.dateFormat = ke.accessor = ke.DayLayoutAlgorithmPropType = void 0;
var ge = zO(ja), ys = Wt, bs = Object.keys(ys.views).map(function(e2) {
  return ys.views[e2];
});
ke.accessor = ge.default.oneOfType([ge.default.string, ge.default.func]);
ke.dateFormat = ge.default.any;
ke.dateRangeFormat = ge.default.func;
ke.views = ge.default.oneOfType([ge.default.arrayOf(ge.default.oneOf(bs)), ge.default.objectOf(function(e2, t) {
  var r = bs.indexOf(t) !== -1 && typeof e2[t] == "boolean";
  if (r) return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
  return ge.default.elementType.apply(ge.default, [e2, t].concat(a));
})]);
ke.DayLayoutAlgorithmPropType = ge.default.oneOfType([ge.default.oneOf(["overlap", "no-overlap"]), ge.default.func]);
var Yn = {}, er = {}, BO = he.default;
Object.defineProperty(er, "__esModule", { value: true });
er.accessor = Uc;
er.wrapAccessor = void 0;
var YO = BO(Ht);
function Uc(e2, t) {
  var r = null;
  return typeof t == "function" ? r = t(e2) : typeof t == "string" && (0, YO.default)(e2) === "object" && e2 != null && t in e2 && (r = e2[t]), r;
}
er.wrapAccessor = function(t) {
  return function(r) {
    return Uc(r, t);
  };
};
var Tt = {}, UO = he.default;
Object.defineProperty(Tt, "__esModule", { value: true });
Tt.DnDContext = void 0;
var qO = UO(F);
Tt.DnDContext = qO.default.createContext();
var Ct = he.default;
Object.defineProperty(Yn, "__esModule", { value: true });
Yn.default = void 0;
var KO = Ct(ot), GO = Ct(St), VO = Ct(Ot), XO = Ct(Jt), ZO = Ct(Qt), kt = Ct(F), ws = Ct(Hr), xs = er, JO = Tt, qc = function(e2) {
  function t() {
    var r;
    (0, GO.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, XO.default)(this, t, [].concat(a)), r.handleResizeUp = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "UP");
    }, r.handleResizeDown = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "DOWN");
    }, r.handleResizeLeft = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "LEFT");
    }, r.handleResizeRight = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "RIGHT");
    }, r.handleStartDragging = function(i) {
      var s;
      if (i.button === 0) {
        var l = (s = i.target.getAttribute("class")) === null || s === void 0 ? void 0 : s.includes("rbc-addons-dnd-resize");
        if (!l) {
          var c = (0, KO.default)({}, r.props.event);
          c.sourceResource = r.props.resource, r.context.draggable.onBeginAction(r.props.event, "move");
        }
      }
    }, r;
  }
  return (0, ZO.default)(t, e2), (0, VO.default)(t, [{ key: "renderAnchor", value: function(n) {
    var a = n === "Up" || n === "Down" ? "ns" : "ew";
    return kt.default.createElement("div", { className: "rbc-addons-dnd-resize-".concat(a, "-anchor"), onMouseDown: this["handleResize".concat(n)] }, kt.default.createElement("div", { className: "rbc-addons-dnd-resize-".concat(a, "-icon") }));
  } }, { key: "render", value: function() {
    var n = this.props, a = n.event, o = n.type, i = n.continuesPrior, s = n.continuesAfter, l = n.resizable, c = this.props.children;
    if (a.__isPreview) return kt.default.cloneElement(c, { className: (0, ws.default)(c.props.className, "rbc-addons-dnd-drag-preview") });
    var u = this.context.draggable, d = u.draggableAccessor, f = u.resizableAccessor, v = d ? !!(0, xs.accessor)(a, d) : true;
    if (!v) return c;
    var h = l && (f ? !!(0, xs.accessor)(a, f) : true);
    if (h || v) {
      var p = { onMouseDown: this.handleStartDragging, onTouchStart: this.handleStartDragging };
      if (h) {
        var m = null, y = null;
        o === "date" ? (m = !i && this.renderAnchor("Left"), y = !s && this.renderAnchor("Right")) : (m = !i && this.renderAnchor("Up"), y = !s && this.renderAnchor("Down")), p.children = kt.default.createElement("div", { className: "rbc-addons-dnd-resizable" }, m, c.props.children, y);
      }
      u.dragAndDropAction.interacting && u.dragAndDropAction.event === a && (p.className = (0, ws.default)(c.props.className, "rbc-addons-dnd-dragged-event")), c = kt.default.cloneElement(c, p);
    }
    return c;
  } }]);
}(kt.default.Component);
qc.contextType = JO.DnDContext;
Yn.default = qc;
var Un = {}, Kc = { exports: {} };
(function(e2) {
  var t = Ht.default;
  function r(n, a) {
    if (typeof WeakMap == "function") var o = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (e2.exports = r = function(l, c) {
      if (!c && l && l.__esModule) return l;
      var u, d, f = { __proto__: null, default: l };
      if (l === null || t(l) != "object" && typeof l != "function") return f;
      if (u = c ? i : o) {
        if (u.has(l)) return u.get(l);
        u.set(l, f);
      }
      for (var v in l) v !== "default" && {}.hasOwnProperty.call(l, v) && ((d = (u = Object.defineProperty) && Object.getOwnPropertyDescriptor(l, v)) && (d.get || d.set) ? u(f, v, d) : f[v] = l[v]);
      return f;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports)(n, a);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Kc);
var Gc = Kc.exports;
function Co(e2, t, r, n) {
  if (r === void 0 && (r = false), n === void 0 && (n = true), e2) {
    var a = document.createEvent("HTMLEvents");
    a.initEvent(t, r, n), e2.dispatchEvent(a);
  }
}
function QO(e2) {
  var t = ce(e2, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function eT(e2, t, r) {
  r === void 0 && (r = 5);
  var n = false, a = setTimeout(function() {
    n || Co(e2, "transitionend", true);
  }, t + r), o = Le(e2, "transitionend", function() {
    n = true;
  }, { once: true });
  return function() {
    clearTimeout(a), o();
  };
}
function ko(e2, t, r, n) {
  r == null && (r = QO(e2) || 0);
  var a = eT(e2, r, n), o = Le(e2, "transitionend", t);
  return function() {
    a(), o();
  };
}
var $s = { transition: "", "transition-duration": "", "transition-delay": "", "transition-timing-function": "" };
function Es(e2) {
  var t = e2.node, r = e2.properties, n = e2.duration, a = n === void 0 ? 200 : n, o = e2.easing, i = e2.callback, s = [], l = {}, c = "";
  Object.keys(r).forEach(function(f) {
    var v = r[f];
    ll(f) ? c += f + "(" + v + ") " : (l[f] = v, s.push(sl(f)));
  }), c && (l.transform = c, s.push("transform"));
  function u(f) {
    f.target === f.currentTarget && (ce(t, $s), i && i.call(this, f));
  }
  a > 0 && (l.transition = s.join(", "), l["transition-duration"] = a / 1e3 + "s", l["transition-delay"] = "0s", l["transition-timing-function"] = o || "linear");
  var d = ko(t, u, a);
  return t.clientLeft, ce(t, l), { cancel: function() {
    d(), ce(t, $s);
  } };
}
function Vc(e2, t, r, n, a) {
  if (!("nodeType" in e2)) return Es(e2);
  if (!t) throw new Error("must include properties to animate");
  return typeof n == "function" && (a = n, n = ""), Es({ node: e2, properties: t, duration: r, easing: n, callback: a });
}
function Xc(e2, t, r) {
  if (e2) {
    if (typeof r > "u") return e2.getAttribute(t);
    !r && r !== "" ? e2.removeAttribute(t) : e2.setAttribute(t, String(r));
  }
}
function Zc(e2) {
  return e2 ? Array.from(e2.children) : [];
}
function Jc(e2) {
  if (e2) {
    for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
    return e2;
  }
  return null;
}
var tT = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Qc(e2) {
  return e2 ? tT(e2.childNodes) : [];
}
function eu(e2, t) {
  return function(n) {
    var a = n.currentTarget, o = n.target, i = xn(a, e2);
    i.some(function(s) {
      return Ye(s, o);
    }) && t.call(this, n);
  };
}
function tu(e2, t) {
  return e2 && t && t.parentNode ? (t.nextSibling ? t.parentNode.insertBefore(e2, t.nextSibling) : t.parentNode.appendChild(e2), e2) : null;
}
var rT = /^(?:input|select|textarea|button)$/i;
function ru(e2) {
  return e2 ? rT.test(e2.nodeName) : false;
}
function nu(e2) {
  return e2 ? !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length) : false;
}
function au(e2, t, r) {
  t === void 0 && (t = null), r === void 0 && (r = null);
  for (var n = []; e2; e2 = e2.nextElementSibling) if (e2 !== t) {
    if (r && wn(e2, r)) break;
    n.push(e2);
  }
  return n;
}
function ou(e2, t) {
  return au(e2, e2, t);
}
function nT(e2, t) {
  var r = null, n = [];
  for (r = e2 ? e2[t] : null; r && r.nodeType !== 9; ) n.push(r), r = r[t] || null;
  return n;
}
function iu(e2) {
  return nT(e2, "parentElement");
}
function su(e2, t) {
  return e2 && t ? (t.firstElementChild ? t.insertBefore(e2, t.firstElementChild) : t.appendChild(e2), e2) : null;
}
function lu(e2) {
  return e2 && e2.parentNode ? (e2.parentNode.removeChild(e2), e2) : null;
}
function Mo(e2, t) {
  var r = ce(e2, "position"), n = r === "absolute", a = e2.ownerDocument;
  if (r === "fixed") return a || document;
  for (; (e2 = e2.parentNode) && !cl(e2); ) {
    var o = n && ce(e2, "position") === "static", i = (ce(e2, "overflow") || "") + (ce(e2, "overflow-y") || "") + ce(e2, "overflow-x");
    if (!o && /(auto|scroll)/.test(i) && (t || gt(e2) < e2.scrollHeight)) return e2;
  }
  return a || document;
}
function cu(e2, t) {
  var r = Me(e2), n = { top: 0, left: 0 };
  if (e2) {
    var a = t || Mo(e2), o = gn(a), i = Rt(a), s = gt(a, true);
    o || (n = Me(a)), r = { top: r.top - n.top, left: r.left - n.left, height: r.height, width: r.width };
    var l = r.height, c = r.top + (o ? 0 : i), u = c + l;
    i = i > c ? c : u > i + s ? u - s : i;
    var d = Ar(function() {
      return Rt(a, i);
    });
    return function() {
      return br(d);
    };
  }
}
function uu(e2) {
  return au(e2 && e2.parentElement ? e2.parentElement.firstElementChild : null, e2);
}
var aT = /&nbsp;/gi, oT = /\xA0/g, iT = /\s+([^\s])/gm;
function du(e2, t, r) {
  t === void 0 && (t = true), r === void 0 && (r = true);
  var n = "";
  return e2 && (n = (e2.textContent || "").replace(aT, " ").replace(oT, " "), t && (n = n.trim()), r && (n = n.replace(iT, " $1"))), n;
}
function fu(e2, t) {
  e2.classList ? e2.classList.toggle(t) : En(e2, t) ? _n(e2, t) : Dn(e2, t);
}
const sT = { addEventListener: qa, removeEventListener: to, triggerEvent: Co, animate: Vc, filter: eu, listen: Le, style: ce, getComputedStyle: Ba, attribute: Xc, activeElement: bl, ownerDocument: nt, ownerWindow: za, requestAnimationFrame: Ar, cancelAnimationFrame: br, matches: wn, height: gt, width: $r, offset: Me, offsetParent: Ya, position: bn, contains: Ye, scrollbarSize: Rr, scrollLeft: yn, scrollParent: Mo, scrollTo: cu, scrollTop: Rt, querySelectorAll: xn, closest: Lr, addClass: Dn, removeClass: _n, hasClass: En, toggleClass: fu, transitionEnd: ko, childNodes: Qc, childElements: Zc, nextUntil: ou, parents: iu, siblings: uu, clear: Jc, insertAfter: tu, isInput: ru, isVisible: nu, prepend: su, remove: lu, text: du }, lT = Object.freeze(Object.defineProperty({ __proto__: null, activeElement: bl, addClass: Dn, addEventListener: qa, animate: Vc, attribute: Xc, cancelAnimationFrame: br, childElements: Zc, childNodes: Qc, clear: Jc, closest: Lr, contains: Ye, default: sT, filter: eu, getComputedStyle: Ba, hasClass: En, height: gt, insertAfter: tu, isInput: ru, isVisible: nu, listen: Le, matches: wn, nextUntil: ou, offset: Me, offsetParent: Ya, ownerDocument: nt, ownerWindow: za, parents: iu, position: bn, prepend: su, querySelectorAll: xn, remove: lu, removeClass: _n, removeEventListener: to, requestAnimationFrame: Ar, scrollLeft: yn, scrollParent: Mo, scrollTo: cu, scrollTop: Rt, scrollbarSize: Rr, siblings: uu, style: ce, text: du, toggleClass: fu, transitionEnd: ko, triggerEvent: Co, width: $r }, Symbol.toStringTag, { value: "Module" })), cT = Sr(lT);
var ka = { exports: {} };
(function(e2, t) {
  t.__esModule = true, t.default = n;
  var r = Function.prototype.bind.call(Function.prototype.call, [].slice);
  function n(a, o) {
    return r(a.querySelectorAll(o));
  }
  e2.exports = t.default;
})(ka, ka.exports);
var uT = ka.exports, Pe = {};
const dT = Sr(zf), fT = Sr(Y0), vT = Sr(np);
var tr = he.default;
Object.defineProperty(Pe, "__esModule", { value: true });
Pe.default = void 0;
Pe.getBoundsForNode = _r;
Pe.getEventNodeFromPoint = pu;
Pe.getShowMoreNodeFromPoint = hu;
Pe.isEvent = bT;
Pe.isShowMore = wT;
Pe.objectsCollide = Aa;
var pT = tr(Ht), hT = tr(St), mT = tr(Ot), Ma = tr(dT), vu = tr(fT), gT = tr(vT);
function fe(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return (0, gT.default)(r, e2, t, { passive: false });
}
function yT(e2, t, r) {
  return !e2 || (0, Ma.default)(e2, document.elementFromPoint(t, r));
}
function pu(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return (0, vu.default)(a, ".rbc-event", e2);
}
function hu(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return (0, vu.default)(a, ".rbc-show-more", e2);
}
function bT(e2, t) {
  return !!pu(e2, t);
}
function wT(e2, t) {
  return !!hu(e2, t);
}
function or(e2) {
  var t = e2;
  return e2.touches && e2.touches.length && (t = e2.touches[0]), { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY };
}
var Ds = 5, xT = 250, $T = function() {
  function e2(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.global, a = n === void 0 ? false : n, o = r.longPressThreshold, i = o === void 0 ? 250 : o, s = r.validContainers, l = s === void 0 ? [] : s;
    (0, hT.default)(this, e2), this._initialEvent = null, this.selecting = false, this.isDetached = false, this.container = t, this.globalMouse = !t || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = fe("touchmove", function() {
    }, window), this._removeKeyDownListener = fe("keydown", this._keyListener), this._removeKeyUpListener = fe("keyup", this._keyListener), this._removeDropFromOutsideListener = fe("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = fe("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return (0, mT.default)(e2, [{ key: "on", value: function(r, n) {
    var a = this._listeners[r] || (this._listeners[r] = []);
    return a.push(n), { remove: function() {
      var i = a.indexOf(n);
      i !== -1 && a.splice(i, 1);
    } };
  } }, { key: "emit", value: function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    var i, s = this._listeners[r] || [];
    return s.forEach(function(l) {
      i === void 0 && (i = l.apply(void 0, a));
    }), i;
  } }, { key: "teardown", value: function() {
    this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = false, this._lastClickData = null, this.isDetached = true, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  } }, { key: "isSelected", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? false : Aa(n, _r(r));
  } }, { key: "filter", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? [] : r.filter(this.isSelected, this);
  } }, { key: "_addLongPressListener", value: function(r, n) {
    var a = this, o = null, i = null, s = null, l = function(f) {
      o = setTimeout(function() {
        u(), r(f);
      }, a.longPressThreshold), i = fe("touchmove", function() {
        return u();
      }), s = fe("touchend", function() {
        return u();
      });
    }, c = fe("touchstart", l), u = function() {
      o && clearTimeout(o), i && i(), s && s(), o = null, i = null, s = null;
    };
    return n && l(n), function() {
      u(), c();
    };
  } }, { key: "_addInitialEventListener", value: function() {
    var r = this, n = fe("mousedown", function(o) {
      r._removeInitialEventListener(), r._handleInitialEvent(o), r._removeInitialEventListener = fe("mousedown", r._handleInitialEvent);
    }), a = fe("touchstart", function(o) {
      r._removeInitialEventListener(), r._removeInitialEventListener = r._addLongPressListener(r._handleInitialEvent, o);
    });
    this._removeInitialEventListener = function() {
      n(), a();
    };
  } }, { key: "_dropFromOutsideListener", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dropFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_dragOverFromOutsideListener", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dragOverFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_handleInitialEvent", value: function(r) {
    if (this._initialEvent = r, !this.isDetached) {
      var n = or(r), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
      if (!(r.which === 3 || r.button === 2 || !yT(l, a, o))) {
        if (!this.globalMouse && l && !(0, Ma.default)(l, r.target)) {
          var d = ET(0), f = d.top, v = d.left, h = d.bottom, p = d.right;
          if (u = _r(l), c = Aa({ top: u.top - f, left: u.left - v, bottom: u.bottom + h, right: u.right + p }, { top: s, left: i }), !c) return;
        }
        var m = this.emit("beforeSelect", this._initialEventData = { isTouch: /^touch/.test(r.type), x: i, y: s, clientX: a, clientY: o });
        if (m !== false) switch (r.type) {
          case "mousedown":
            this._removeEndListener = fe("mouseup", this._handleTerminatingEvent), this._onEscListener = fe("keydown", this._handleTerminatingEvent), this._removeMoveListener = fe("mousemove", this._handleMoveEvent);
            break;
          case "touchstart":
            this._handleMoveEvent(r), this._removeEndListener = fe("touchend", this._handleTerminatingEvent), this._removeMoveListener = fe("touchmove", this._handleMoveEvent);
            break;
        }
      }
    }
  } }, { key: "_isWithinValidContainer", value: function(r) {
    var n = r.target, a = this.validContainers;
    return !a || !a.length || !n ? true : a.some(function(o) {
      return !!n.closest(o);
    });
  } }, { key: "_handleTerminatingEvent", value: function(r) {
    var n = this.selecting, a = this._selectRect;
    if (!n && r.type.includes("key") && (r = this._initialEvent), this.selecting = false, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!r) {
      var o = !this.container || (0, Ma.default)(this.container(), r.target), i = this._isWithinValidContainer(r);
      return r.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(r) : n ? this.emit("select", a) : this.emit("reset");
    }
  } }, { key: "_handleClickEvent", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
    return this._lastClickData && l - this._lastClickData.timestamp < xT ? (this._lastClickData = null, this.emit("doubleClick", { x: a, y: o, clientX: i, clientY: s })) : (this._lastClickData = { timestamp: l }, this.emit("click", { x: a, y: o, clientX: i, clientY: s }));
  } }, { key: "_handleMoveEvent", value: function(r) {
    if (!(this._initialEventData === null || this.isDetached)) {
      var n = this._initialEventData, a = n.x, o = n.y, i = or(r), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), d = Math.min(s, a), f = Math.min(l, o), v = this.selecting, h = this.isClick(s, l);
      h && !v && !(c || u) || (!v && !h && this.emit("selectStart", this._initialEventData), h || (this.selecting = true, this._selectRect = { top: f, left: d, x: s, y: l, right: d + c, bottom: f + u }, this.emit("selecting", this._selectRect)), r.preventDefault());
    }
  } }, { key: "_keyListener", value: function(r) {
    this.ctrl = r.metaKey || r.ctrlKey;
  } }, { key: "isClick", value: function(r, n) {
    var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
    return !s && Math.abs(r - o) <= Ds && Math.abs(n - i) <= Ds;
  } }]);
}();
function ET() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return (0, pT.default)(e2) !== "object" && (e2 = { top: e2, left: e2, right: e2, bottom: e2 }), e2;
}
function Aa(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = _r(e2), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = _r(t), d = u.top, f = u.left, v = u.right, h = v === void 0 ? f : v, p = u.bottom, m = p === void 0 ? d : p;
  return !(c - r < d || a + r > m || s - r < f || o + r > h);
}
function _r(e2) {
  if (!e2.getBoundingClientRect) return e2;
  var t = e2.getBoundingClientRect(), r = t.left + _s("left"), n = t.top + _s("top");
  return { top: n, left: r, right: (e2.offsetWidth || 0) + r, bottom: (e2.offsetHeight || 0) + n };
}
function _s(e2) {
  if (e2 === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (e2 === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
Pe.default = $T;
var qn = {}, Kn = he.default;
Object.defineProperty(qn, "__esModule", { value: true });
qn.default = void 0;
var DT = Kn(Pc), Ss = Kn(ot), _T = Kn(Hr), ir = Kn(F);
function Gr(e2) {
  return typeof e2 == "string" ? e2 : e2 + "%";
}
function ST(e2) {
  var t = e2.style, r = e2.className, n = e2.event, a = e2.accessors, o = e2.rtl, i = e2.selected, s = e2.label, l = e2.continuesPrior, c = e2.continuesAfter, u = e2.getters, d = e2.onClick, f = e2.onDoubleClick, v = e2.isBackgroundEvent, h = e2.onKeyPress, p = e2.components, m = p.event, y = p.eventWrapper, g = a.title(n), $ = a.tooltip(n), b = a.end(n), E = a.start(n), _ = u.eventProp(n, E, b, i), M = [ir.default.createElement("div", { key: "1", className: "rbc-event-label" }, s), ir.default.createElement("div", { key: "2", className: "rbc-event-content" }, m ? ir.default.createElement(m, { event: n, title: g }) : g)], P = t.height, k = t.top, T = t.width, D = t.xOffset, B = (0, Ss.default)((0, Ss.default)({}, _.style), {}, (0, DT.default)({ top: Gr(k), height: Gr(P), width: Gr(T) }, o ? "right" : "left", Gr(D)));
  return ir.default.createElement(y, Object.assign({ type: "time" }, e2), ir.default.createElement("div", { role: "button", tabIndex: 0, onClick: d, onDoubleClick: f, style: B, onKeyDown: h, title: $ ? (typeof s == "string" ? s + ": " : "") + $ : void 0, className: (0, _T.default)(v ? "rbc-background-event" : "rbc-event", r, _.className, { "rbc-selected": i, "rbc-event-continues-earlier": l, "rbc-event-continues-later": c }) }, M));
}
qn.default = ST;
var Ke = {}, mu = he.default;
Object.defineProperty(Ke, "__esModule", { value: true });
Ke.dragAccessors = void 0;
Ke.eventTimes = NT;
Ke.mergeComponents = AT;
Ke.pointInColumn = PT;
var OT = mu(ot), TT = mu(To), Os = er, CT = F, kT = ["children"];
Ke.dragAccessors = { start: (0, Os.wrapAccessor)(function(e2) {
  return e2.start;
}), end: (0, Os.wrapAccessor)(function(e2) {
  return e2.end;
}) };
function MT() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  var n = function(o) {
    var i = o.children, s = (0, TT.default)(o, kT);
    return t.filter(Boolean).reduceRight(function(l, c) {
      return (0, CT.createElement)(c, s, l);
    }, i);
  };
  return n;
}
function AT() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = Object.keys(t), n = (0, OT.default)({}, e2);
  return r.forEach(function(a) {
    n[a] = e2[a] ? MT(e2[a], t[a]) : t[a];
  }), n;
}
function PT(e2, t) {
  var r = e2.left, n = e2.right, a = e2.top, o = t.x, i = t.y;
  return o < n + 10 && o > r && i > a;
}
function NT(e2, t, r) {
  var n = t.start(e2), a = t.end(e2), o = r.eq(n, a, "minutes") && r.diff(n, a, "minutes") === 0;
  o && (a = r.add(a, 1, "day"));
  var i = r.diff(n, a, "milliseconds");
  return { start: n, end: a, duration: i };
}
var RT = Gc.default, it = he.default;
Object.defineProperty(Un, "__esModule", { value: true });
Un.default = void 0;
var Xe = it(ot), jT = it(St), LT = it(Ot), IT = it(Jt), FT = it(Qt), fa = cT, WT = it(uT), vt = it(F), HT = Tt, Ze = RT(Pe), zT = it(qn), Be = Ke, gu = function(e2) {
  function t() {
    var r;
    (0, jT.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, IT.default)(this, t, [].concat(a)), r.handleMove = function(i, s) {
      if (!(0, Be.pointInColumn)(s, i)) return r.reset();
      var l = r.context.draggable.dragAndDropAction.event, c = r.props, u = c.accessors, d = c.slotMetrics, f = d.closestSlotFromPoint({ y: i.y - r.eventOffsetTop, x: i.x }, s), v = (0, Be.eventTimes)(l, u, r.props.localizer), h = v.duration, p = r.props.localizer.add(f, h, "milliseconds");
      r.update(l, d.getRange(f, p, false, true));
    }, r.handleDropFromOutside = function(i, s) {
      var l = r.props, c = l.slotMetrics, u = l.resource, d = c.closestSlotFromPoint({ y: i.y, x: i.x }, s), f = r._calculateDnDEnd(d);
      r.context.draggable.onDropFromOutside({ start: d, end: f, allDay: false, resource: u }), r.reset();
    }, r.handleDragOverFromOutside = function(i, s) {
      var l = r.props.slotMetrics, c = l.closestSlotFromPoint({ y: i.y, x: i.x }, s), u = r._calculateDnDEnd(c), d = r.context.draggable.dragFromOutsideItem();
      r.update(d, l.getRange(c, u, false, true));
    }, r._calculateDnDEnd = function(i) {
      var s = r.props, l = s.accessors, c = s.slotMetrics, u = s.localizer, d = r.context.draggable.dragFromOutsideItem(), f = (0, Be.eventTimes)(d, l, u), v = f.duration, h = c.nextSlot(i), p = !isNaN(v);
      if (p) {
        var m = u.add(i, v, "milliseconds");
        h = new Date(Math.max(m, h));
      }
      return h;
    }, r.updateParentScroll = function(i, s) {
      setTimeout(function() {
        var l = (0, WT.default)(s, ".rbc-addons-dnd-drag-preview")[0];
        l && (l.offsetTop < i.scrollTop ? (0, fa.scrollTop)(i, Math.max(l.offsetTop, 0)) : l.offsetTop + l.offsetHeight > i.scrollTop + i.clientHeight && (0, fa.scrollTop)(i, Math.min(l.offsetTop - i.offsetHeight + l.offsetHeight, i.scrollHeight)));
      });
    }, r._selectable = function() {
      var i = r.ref.current, s = i.children[0], l = false, c = r._selector = new Ze.default(function() {
        return i.closest(".rbc-time-view");
      }), u = (0, fa.scrollParent)(i);
      c.on("beforeSelect", function(d) {
        var f = r.context.draggable.dragAndDropAction;
        if (!f.action) return false;
        if (f.action === "resize") return (0, Be.pointInColumn)((0, Ze.getBoundsForNode)(s), d);
        var v = (0, Ze.getEventNodeFromPoint)(s, d);
        if (!v) return false;
        r.eventOffsetTop = d.y - (0, Ze.getBoundsForNode)(v).top;
      }), c.on("selecting", function(d) {
        var f = (0, Ze.getBoundsForNode)(s), v = r.context.draggable.dragAndDropAction;
        v.action === "move" && (r.updateParentScroll(u, s), r.handleMove(d, f)), v.action === "resize" && (r.updateParentScroll(u, s), r.handleResize(d, f));
      }), c.on("dropFromOutside", function(d) {
        if (r.context.draggable.onDropFromOutside) {
          var f = (0, Ze.getBoundsForNode)(s);
          (0, Be.pointInColumn)(f, d) && r.handleDropFromOutside(d, f);
        }
      }), c.on("dragOverFromOutside", function(d) {
        var f = r.context.draggable.dragFromOutsideItem ? r.context.draggable.dragFromOutsideItem() : null;
        if (f) {
          var v = (0, Ze.getBoundsForNode)(s);
          if (!(0, Be.pointInColumn)(v, d)) return r.reset();
          r.handleDragOverFromOutside(d, v);
        }
      }), c.on("selectStart", function() {
        l = true, r.context.draggable.onStart();
      }), c.on("select", function(d) {
        var f = (0, Ze.getBoundsForNode)(s);
        l = false;
        var v = r.context.draggable.dragAndDropAction;
        if (v.action === "resize") r.handleInteractionEnd();
        else {
          if (!r.state.event || !(0, Be.pointInColumn)(f, d)) return;
          r.handleInteractionEnd();
        }
      }), c.on("click", function() {
        l && r.reset(), r.context.draggable.onEnd(null);
      }), c.on("reset", function() {
        r.reset(), r.context.draggable.onEnd(null);
      });
    }, r.handleInteractionEnd = function() {
      var i = r.props.resource, s = r.state.event;
      r.reset(), r.context.draggable.onEnd({ start: s.start, end: s.end, resourceId: i });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r.state = {}, r.ref = vt.default.createRef(), r;
  }
  return (0, FT.default)(t, e2), (0, LT.default)(t, [{ key: "componentDidMount", value: function() {
    this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "reset", value: function() {
    this.state.event && this.setState({ event: null, top: null, height: null });
  } }, { key: "update", value: function(n, a) {
    var o = a.startDate, i = a.endDate, s = a.top, l = a.height, c = this.state.event;
    c && o === c.start && i === c.end || this.setState({ top: s, height: l, event: (0, Xe.default)((0, Xe.default)({}, n), {}, { start: o, end: i }) });
  } }, { key: "handleResize", value: function(n, a) {
    var o = this.props, i = o.accessors, s = o.slotMetrics, l = o.localizer, c = this.context.draggable.dragAndDropAction, u = c.event, d = c.direction, f = s.closestSlotFromPoint(n, a), v = (0, Be.eventTimes)(u, i, l), h = v.start, p = v.end, m;
    if (d === "UP") {
      var y = l.min(f, s.closestSlotFromDate(p, -1));
      m = s.getRange(y, p), m = (0, Xe.default)((0, Xe.default)({}, m), {}, { endDate: p });
    } else if (d === "DOWN") {
      var g = l.max(f, s.closestSlotFromDate(h));
      m = s.getRange(h, g), m = (0, Xe.default)((0, Xe.default)({}, m), {}, { startDate: h });
    }
    this.update(u, m);
  } }, { key: "renderContent", value: function() {
    var n = this.props, a = n.children, o = n.accessors, i = n.components, s = n.getters, l = n.slotMetrics, c = n.localizer, u = this.state, d = u.event, f = u.top, v = u.height;
    if (!d) return a;
    var h = a.props.children, p = d.start, m = d.end, y, g = "eventTimeRangeFormat", $ = l.startsBeforeDay(p), b = l.startsAfterDay(m);
    return $ ? g = "eventTimeRangeEndFormat" : b && (g = "eventTimeRangeStartFormat"), $ && b ? y = c.messages.allDay : y = c.format({ start: p, end: m }, g), vt.default.cloneElement(a, { children: vt.default.createElement(vt.default.Fragment, null, h, d && vt.default.createElement(zT.default, { event: d, label: y, className: "rbc-addons-dnd-drag-preview", style: { top: f, height: v, width: 100 }, getters: s, components: i, accessors: (0, Xe.default)((0, Xe.default)({}, o), Be.dragAccessors), continuesPrior: $, continuesAfter: b })) });
  } }, { key: "render", value: function() {
    return vt.default.createElement("div", { ref: this.ref }, this.renderContent());
  } }]);
}(vt.default.Component);
gu.contextType = HT.DnDContext;
Un.default = gu;
var Gn = {}, yu = { exports: {} }, bu = { exports: {} }, wu = { exports: {} };
(function(e2) {
  function t(r, n) {
    (n == null || n > r.length) && (n = r.length);
    for (var a = 0, o = Array(n); a < n; a++) o[a] = r[a];
    return o;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(wu);
var xu = wu.exports;
(function(e2) {
  var t = xu;
  function r(n) {
    if (Array.isArray(n)) return t(n);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(bu);
var BT = bu.exports, $u = { exports: {} };
(function(e2) {
  function t(r) {
    if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})($u);
var YT = $u.exports, Eu = { exports: {} };
(function(e2) {
  var t = xu;
  function r(n, a) {
    if (n) {
      if (typeof n == "string") return t(n, a);
      var o = {}.toString.call(n).slice(8, -1);
      return o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set" ? Array.from(n) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(n, a) : void 0;
    }
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Eu);
var UT = Eu.exports, Du = { exports: {} };
(function(e2) {
  function t() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Du);
var qT = Du.exports;
(function(e2) {
  var t = BT, r = YT, n = UT, a = qT;
  function o(i) {
    return t(i) || r(i) || n(i) || a();
  }
  e2.exports = o, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(yu);
var _u = yu.exports, Vn = {}, Xn = {}, Zn = {}, st = he.default;
Object.defineProperty(Zn, "__esModule", { value: true });
Zn.default = void 0;
var Ts = st(ot), KT = st(To), GT = st(St), VT = st(Ot), XT = st(Jt), ZT = st(Qt), sr = st(F), JT = st(Hr), QT = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], eC = function(e2) {
  function t() {
    return (0, GT.default)(this, t), (0, XT.default)(this, t, arguments);
  }
  return (0, ZT.default)(t, e2), (0, VT.default)(t, [{ key: "render", value: function() {
    var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, d = n.onKeyPress, f = n.localizer, v = n.continuesPrior, h = n.continuesAfter, p = n.accessors, m = n.getters, y = n.children, g = n.components, $ = g.event, b = g.eventWrapper, E = n.slotStart, _ = n.slotEnd, M = (0, KT.default)(n, QT);
    delete M.resizable;
    var P = p.title(i), k = p.tooltip(i), T = p.end(i), D = p.start(i), B = p.allDay(i), H = l || B || f.diff(D, f.ceil(T, "day"), "day") > 1, N = m.eventProp(i, D, T, s), A = sr.default.createElement("div", { className: "rbc-event-content", title: k || void 0 }, $ ? sr.default.createElement($, { event: i, continuesPrior: v, continuesAfter: h, title: P, isAllDay: B, localizer: f, slotStart: E, slotEnd: _ }) : P);
    return sr.default.createElement(b, Object.assign({}, this.props, { type: "date" }), sr.default.createElement("div", Object.assign({}, M, { style: (0, Ts.default)((0, Ts.default)({}, N.style), a), className: (0, JT.default)("rbc-event", o, N.className, { "rbc-selected": s, "rbc-event-allday": H, "rbc-event-continues-prior": v, "rbc-event-continues-after": h }), onClick: function(R) {
      return c && c(i, R);
    }, onDoubleClick: function(R) {
      return u && u(i, R);
    }, onKeyDown: function(R) {
      return d && d(i, R);
    } }), typeof y == "function" ? y(A) : A));
  } }]);
}(sr.default.Component);
Zn.default = eC;
var lt = {}, tC = he.default;
Object.defineProperty(lt, "__esModule", { value: true });
lt.dateCellSelection = oC;
lt.getSlotAtX = Su;
lt.isSelected = nC;
lt.pointInBox = aC;
lt.slotWidth = Ao;
var rC = tC(Ml);
function nC(e2, t) {
  return !e2 || t == null ? false : (0, rC.default)(e2, t);
}
function Ao(e2, t) {
  var r = e2.right - e2.left, n = r / t;
  return n;
}
function Su(e2, t, r, n) {
  var a = Ao(e2, n);
  return r ? n - 1 - Math.floor((t - e2.left) / a) : Math.floor((t - e2.left) / a);
}
function aC(e2, t) {
  var r = t.x, n = t.y;
  return n >= e2.top && n <= e2.bottom && r >= e2.left && r <= e2.right;
}
function oC(e2, t, r, n, a) {
  var o = -1, i = -1, s = n - 1, l = Ao(t, n), c = Su(t, r.x, a, n), u = t.top < r.y && t.bottom > r.y, d = t.top < e2.y && t.bottom > e2.y, f = e2.y > t.bottom, v = t.top > e2.y, h = r.top < t.top && r.bottom > t.bottom;
  return h && (o = 0, i = s), u && (v ? (o = 0, i = c) : f && (o = c, i = s)), d && (o = i = a ? s - Math.floor((e2.x - t.left) / l) : Math.floor((e2.x - t.left) / l), u ? c < o ? o = c : i = c : e2.y < r.y ? i = s : o = 0), { startIdx: o, endIdx: i };
}
var Po = he.default;
Object.defineProperty(Xn, "__esModule", { value: true });
Xn.default = void 0;
var Re = Po(ja), Cs = Po(F), iC = Po(Zn), sC = lt;
Xn.default = { propTypes: { slotMetrics: Re.default.object.isRequired, selected: Re.default.object, isAllDay: Re.default.bool, accessors: Re.default.object.isRequired, localizer: Re.default.object.isRequired, components: Re.default.object.isRequired, getters: Re.default.object.isRequired, onSelect: Re.default.func, onDoubleClick: Re.default.func, onKeyPress: Re.default.func }, defaultProps: { segments: [], selected: {} }, renderEvent: function(t, r) {
  var n = t.selected;
  t.isAllDay;
  var a = t.accessors, o = t.getters, i = t.onSelect, s = t.onDoubleClick, l = t.onKeyPress, c = t.localizer, u = t.slotMetrics, d = t.components, f = t.resizable, v = u.continuesPrior(r), h = u.continuesAfter(r);
  return Cs.default.createElement(iC.default, { event: r, getters: o, localizer: c, accessors: a, components: d, onSelect: i, onDoubleClick: s, onKeyPress: l, continuesPrior: v, continuesAfter: h, slotStart: u.first, slotEnd: u.last, selected: (0, sC.isSelected)(r, n), resizable: f });
}, renderSpan: function(t, r, n) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(r) / t * 100 + "%";
  return Cs.default.createElement("div", { key: n, className: "rbc-row-segment", style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o } }, a);
} };
var ct = he.default;
Object.defineProperty(Vn, "__esModule", { value: true });
Vn.default = void 0;
var lC = ct(ot), cC = ct(St), uC = ct(Ot), dC = ct(Jt), fC = ct(Qt), vC = ct(Hr), ks = ct(F), an = ct(Xn), Ou = function(e2) {
  function t() {
    return (0, cC.default)(this, t), (0, dC.default)(this, t, arguments);
  }
  return (0, fC.default)(t, e2), (0, uC.default)(t, [{ key: "render", value: function() {
    var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
    return ks.default.createElement("div", { className: (0, vC.default)(s, "rbc-row") }, o.reduce(function(c, u, d) {
      var f = u.event, v = u.left, h = u.right, p = u.span, m = "_lvl_" + d, y = v - l, g = an.default.renderEvent(n.props, f);
      return y && c.push(an.default.renderSpan(i, y, "".concat(m, "_gap"))), c.push(an.default.renderSpan(i, p, m, g)), l = h + 1, c;
    }, []));
  } }]);
}(ks.default.Component);
Ou.defaultProps = (0, lC.default)({}, an.default.defaultProps);
Vn.default = Ou;
var Ge = {}, Tu = he.default;
Object.defineProperty(Ge, "__esModule", { value: true });
Ge.endOfRange = Cu;
Ge.eventLevels = mC;
Ge.eventSegments = hC;
Ge.inRange = gC;
Ge.segsOverlap = ku;
Ge.sortEvents = Pa;
Ge.sortWeekEvents = yC;
var va = Tu(_u), pC = Tu(jl);
function Cu(e2) {
  var t = e2.dateRange, r = e2.unit, n = r === void 0 ? "day" : r, a = e2.localizer;
  return { first: t[0], last: a.add(t[t.length - 1], 1, n) };
}
function hC(e2, t, r, n) {
  var a = Cu({ dateRange: t, localizer: n }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(r.start(e2), "day"), o), c = n.min(n.ceil(r.end(e2), "day"), i), u = (0, pC.default)(t, function(f) {
    return n.isSameDate(f, l);
  }), d = n.diff(l, c, "day");
  return d = Math.min(d, s), d = Math.max(d - n.segmentOffset, 1), { event: e2, span: d, left: u + 1, right: Math.max(u + d, 1) };
}
function mC(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, r, n, a, o = [], i = [];
  for (r = 0; r < e2.length; r++) {
    for (a = e2[r], n = 0; n < o.length && ku(a, o[n]); n++) ;
    n >= t ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (r = 0; r < o.length; r++) o[r].sort(function(s, l) {
    return s.left - l.left;
  });
  return { levels: o, extra: i };
}
function gC(e2, t, r, n, a) {
  var o = { start: n.start(e2), end: n.end(e2) }, i = { start: t, end: r };
  return a.inEventRange({ event: o, range: i });
}
function ku(e2, t) {
  return t.some(function(r) {
    return r.left <= e2.right && r.right >= e2.left;
  });
}
function yC(e2, t, r) {
  var n = (0, va.default)(e2), a = [], o = [];
  n.forEach(function(l) {
    var c = t.start(l), u = t.end(l);
    r.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return Pa(l, c, t, r);
  }), s = o.sort(function(l, c) {
    return Pa(l, c, t, r);
  });
  return [].concat((0, va.default)(i), (0, va.default)(s));
}
function Pa(e2, t, r, n) {
  var a = { start: r.start(e2), end: r.end(e2), allDay: r.allDay(e2) }, o = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
  return n.sortEvents({ evtA: a, evtB: o });
}
var bC = Gc.default, ut = he.default;
Object.defineProperty(Gn, "__esModule", { value: true });
Gn.default = void 0;
var Vr = ut(ot), wC = ut(_u), xC = ut(St), $C = ut(Ot), EC = ut(Jt), DC = ut(Qt), Xr = ut(F), _C = ut(Vn), Mt = bC(Pe), SC = Ge, Je = lt, Zr = Ke, OC = Tt, Mu = function(e2) {
  function t() {
    var r;
    (0, xC.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, EC.default)(this, t, [].concat(a)), r.handleMove = function(i, s, l) {
      if (!(0, Je.pointInBox)(s, i)) return r.reset();
      var c = r.context.draggable.dragAndDropAction.event || l, u = r.props, d = u.accessors, f = u.slotMetrics, v = u.rtl, h = u.localizer, p = (0, Je.getSlotAtX)(s, i.x, v, f.slots), m = f.getDateForSlot(p), y = (0, Zr.eventTimes)(c, d, h), g = y.start, $ = y.duration;
      g = h.merge(m, g);
      var b = h.add(g, $, "milliseconds");
      r.update(c, g, b);
    }, r.handleDropFromOutside = function(i, s) {
      if (r.context.draggable.onDropFromOutside) {
        var l = r.props, c = l.slotMetrics, u = l.rtl, d = l.localizer, f = (0, Je.getSlotAtX)(s, i.x, u, c.slots), v = c.getDateForSlot(f);
        r.context.draggable.onDropFromOutside({ start: v, end: d.add(v, 1, "day"), allDay: false });
      }
    }, r.handleDragOverFromOutside = function(i, s) {
      var l = r.context.draggable.dragFromOutsideItem ? r.context.draggable.dragFromOutsideItem() : null;
      l && r.handleMove(i, s, l);
    }, r._selectable = function() {
      var i = r.ref.current.closest(".rbc-month-row, .rbc-allday-cell"), s = i.closest(".rbc-month-view, .rbc-time-view"), l = i.classList.contains("rbc-month-row"), c = r._selector = new Mt.default(function() {
        return s;
      }, { validContainers: (0, wC.default)(l ? [] : [".rbc-day-slot", ".rbc-allday-cell"]) });
      c.on("beforeSelect", function(u) {
        var d = r.props.isAllDay, f = r.context.draggable.dragAndDropAction.action, v = (0, Mt.getBoundsForNode)(i), h = (0, Je.pointInBox)(v, u);
        return f === "move" || f === "resize" && (!d || h);
      }), c.on("selecting", function(u) {
        var d = (0, Mt.getBoundsForNode)(i), f = r.context.draggable.dragAndDropAction;
        f.action === "move" && r.handleMove(u, d), f.action === "resize" && r.handleResize(u, d);
      }), c.on("selectStart", function() {
        return r.context.draggable.onStart();
      }), c.on("select", function(u) {
        var d = (0, Mt.getBoundsForNode)(i);
        r.state.segment && ((0, Je.pointInBox)(d, u) ? r.handleInteractionEnd() : r.reset());
      }), c.on("dropFromOutside", function(u) {
        if (r.context.draggable.onDropFromOutside) {
          var d = (0, Mt.getBoundsForNode)(i);
          (0, Je.pointInBox)(d, u) && r.handleDropFromOutside(u, d);
        }
      }), c.on("dragOverFromOutside", function(u) {
        if (r.context.draggable.dragFromOutsideItem) {
          var d = (0, Mt.getBoundsForNode)(i);
          r.handleDragOverFromOutside(u, d);
        }
      }), c.on("click", function() {
        return r.context.draggable.onEnd(null);
      }), c.on("reset", function() {
        r.reset(), r.context.draggable.onEnd(null);
      });
    }, r.handleInteractionEnd = function() {
      var i = r.props, s = i.resourceId, l = i.isAllDay, c = r.state.segment.event;
      r.reset(), r.context.draggable.onEnd({ start: c.start, end: c.end, resourceId: s, isAllDay: l });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r.state = {}, r.ref = Xr.default.createRef(), r;
  }
  return (0, DC.default)(t, e2), (0, $C.default)(t, [{ key: "componentDidMount", value: function() {
    this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "reset", value: function() {
    this.state.segment && this.setState({ segment: null });
  } }, { key: "update", value: function(n, a, o) {
    var i = (0, SC.eventSegments)((0, Vr.default)((0, Vr.default)({}, n), {}, { end: o, start: a, __isPreview: true }), this.props.slotMetrics.range, Zr.dragAccessors, this.props.localizer), s = this.state.segment;
    s && i.span === s.span && i.left === s.left && i.right === s.right || this.setState({ segment: i });
  } }, { key: "handleResize", value: function(n, a) {
    var o = this.context.draggable.dragAndDropAction, i = o.event, s = o.direction, l = this.props, c = l.accessors, u = l.slotMetrics, d = l.rtl, f = l.localizer, v = (0, Zr.eventTimes)(i, c, f), h = v.start, p = v.end, m = (0, Je.getSlotAtX)(a, n.x, d, u.slots), y = u.getDateForSlot(m), g = (0, Je.pointInBox)(a, n);
    if (s === "RIGHT") {
      if (g) {
        if (u.last < h) return this.reset();
        f.eq(f.startOf(p, "day"), p) ? p = f.add(y, 1, "day") : p = y;
      } else if (f.inRange(h, u.first, u.last) || a.bottom < n.y && +u.first > +h) p = f.add(u.last, 1, "milliseconds");
      else {
        this.setState({ segment: null });
        return;
      }
      var $ = c.end(i);
      p = f.merge(p, $), f.lt(p, h) && (p = $);
    } else if (s === "LEFT") {
      if (g) {
        if (u.first > p) return this.reset();
        h = y;
      } else if (f.inRange(p, u.first, u.last) || a.top > n.y && f.lt(u.last, p)) h = f.add(u.first, -1, "milliseconds");
      else {
        this.reset();
        return;
      }
      var b = c.start(i);
      h = f.merge(h, b), f.gt(h, p) && (h = b);
    }
    this.update(i, h, p);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.children, o = n.accessors, i = this.state.segment;
    return Xr.default.createElement("div", { ref: this.ref, className: "rbc-addons-dnd-row-body" }, a, i && Xr.default.createElement(_C.default, Object.assign({}, this.props, { selected: null, className: "rbc-addons-dnd-drag-row", segments: [i], accessors: (0, Vr.default)((0, Vr.default)({}, o), Zr.dragAccessors) })));
  } }]);
}(Xr.default.Component);
Mu.contextType = OC.DnDContext;
Gn.default = Mu;
var Ne = he.default;
Object.defineProperty(Oo, "__esModule", { value: true });
Oo.default = WC;
var Jr = Ne(ot), TC = Ne(To), CC = Ne(St), kC = Ne(Ot), MC = Ne(Jt), AC = Ne(Qt), pa = Ne(F), PC = Ne(Hr), NC = Ne(Yn), RC = Ne(Un), jC = Ne(Gn), LC = Ke, IC = Tt, FC = ["selectable", "elementProps", "components"];
function WC(e2) {
  var t = function(r) {
    function n() {
      var a;
      (0, CC.default)(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return a = (0, MC.default)(this, n, [].concat(i)), a.defaultOnDragOver = function(l) {
        l.preventDefault();
      }, a.handleBeginAction = function(l, c, u) {
        a.setState({ event: l, action: c, direction: u });
        var d = a.props.onDragStart;
        d && d({ event: l, action: c, direction: u });
      }, a.handleInteractionStart = function() {
        a.state.interacting === false && a.setState({ interacting: true });
      }, a.handleInteractionEnd = function(l) {
        var c = a.state, u = c.action, d = c.event;
        if (u && (a.setState({ action: null, event: null, interacting: false, direction: null }), l != null)) {
          l.event = d;
          var f = a.props, v = f.onEventDrop, h = f.onEventResize;
          u === "move" && v && v(l), u === "resize" && h && h(l);
        }
      }, a.state = { interacting: false }, a;
    }
    return (0, AC.default)(n, r), (0, kC.default)(n, [{ key: "getDnDContextValue", value: function() {
      return { draggable: { onStart: this.handleInteractionStart, onEnd: this.handleInteractionEnd, onBeginAction: this.handleBeginAction, onDropFromOutside: this.props.onDropFromOutside, dragFromOutsideItem: this.props.dragFromOutsideItem, draggableAccessor: this.props.draggableAccessor, resizableAccessor: this.props.resizableAccessor, dragAndDropAction: this.state } };
    } }, { key: "render", value: function() {
      var o = this.props, i = o.selectable, s = o.elementProps, l = o.components, c = (0, TC.default)(o, FC), u = this.state.interacting;
      delete c.onEventDrop, delete c.onEventResize, c.selectable = i ? "ignoreEvents" : false, this.components = (0, LC.mergeComponents)(l, { eventWrapper: NC.default, eventContainerWrapper: RC.default, weekWrapper: jC.default });
      var d = this.props.onDropFromOutside ? (0, Jr.default)((0, Jr.default)({}, s), {}, { onDragOver: this.props.onDragOver || this.defaultOnDragOver }) : s;
      c.className = (0, PC.default)(c.className, "rbc-addons-dnd", !!u && "rbc-addons-dnd-is-dragging");
      var f = this.getDnDContextValue();
      return pa.default.createElement(IC.DnDContext.Provider, { value: f }, pa.default.createElement(e2, Object.assign({}, c, { elementProps: d, components: this.components })));
    } }]);
  }(pa.default.Component);
  return t.defaultProps = (0, Jr.default)((0, Jr.default)({}, e2.defaultProps), {}, { draggableAccessor: null, resizableAccessor: null, resizable: true }), t;
}
var HC = he.default;
Object.defineProperty(So, "__esModule", { value: true });
var Au = So.default = void 0, zC = HC(Oo);
Au = So.default = zC.default;
const BC = ({ event: e2 }) => {
  const r = { PENDING: { bg: "bg-blue-100/90 dark:bg-blue-500/25", text: "text-blue-900 dark:text-blue-100", border: "border-blue-300/60 dark:border-blue-400/40", shadow: "shadow-blue-200/60 dark:shadow-blue-500/20" }, COMPLETED: { bg: "bg-emerald-100/90 dark:bg-emerald-500/25", text: "text-emerald-900 dark:text-emerald-100", border: "border-emerald-300/60 dark:border-emerald-400/40", shadow: "shadow-emerald-200/60 dark:shadow-emerald-500/20" }, CANCELLED: { bg: "bg-slate-100/90 dark:bg-slate-500/25", text: "text-slate-700 dark:text-slate-200", border: "border-slate-300/60 dark:border-slate-400/40", shadow: "shadow-slate-200/60 dark:shadow-slate-500/20" }, RESCHEDULED: { bg: "bg-amber-100/90 dark:bg-amber-500/25", text: "text-amber-900 dark:text-amber-100", border: "border-amber-300/60 dark:border-amber-400/40", shadow: "shadow-amber-200/60 dark:shadow-amber-500/20" } }[e2.status];
  return w.jsxs(X.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, whileHover: { scale: 1.02 }, className: `p-1.5 rounded-lg ${r.bg} ${r.text} border ${r.border} shadow-md ${r.shadow} backdrop-blur-sm h-full overflow-hidden`, children: [w.jsx("div", { className: "font-display font-semibold text-xs leading-tight mb-0.5 break-words", children: e2.companyName }), w.jsx("div", { className: "text-xs opacity-90 font-medium leading-tight break-words", children: e2.position }), e2.roundNumber > 1 && w.jsxs("div", { className: "text-xs opacity-75 mt-0.5 font-medium leading-tight", children: ["\u7B2C", e2.roundNumber, "\u8F6E"] })] });
}, YC = NO(se), UC = Au(TO), qC = ({ interviews: e2 = [], onSelectEvent: t, view: r, onViewChange: n, date: a, onDateChange: o, onEventDrop: i, onEventResize: s }) => {
  const l = e2.filter((g) => g.interviewTime ? se(g.interviewTime).isValid() : false).map((g) => {
    const $ = se(g.interviewTime).toDate();
    return { ...g, title: g.companyName || "\u672A\u77E5\u516C\u53F8", start: $, end: se($).add(30, "minute").toDate() };
  }), c = () => {
    const g = se(a).startOf("day");
    let $ = 8, b = 22, E = false;
    l.forEach((P) => {
      const k = se(P.start), T = se(P.end);
      if (k.isValid() && T.isValid()) {
        const D = k.hour(), B = T.hour();
        D < $ && ($ = Math.max(0, D)), B > b || B === 0 && T.isAfter(k, "day") ? (b = 23, E = true) : B > b && (b = Math.min(23, B));
      }
    }), $ >= b && ($ = 8, b = 22);
    const _ = g.hour($).minute(0).second(0).toDate(), M = E ? g.hour(23).minute(59).second(59).toDate() : g.hour(b).minute(0).second(0).toDate();
    return { minTime: _, maxTime: M };
  }, { minTime: u, maxTime: d } = c(), f = u instanceof Date && !isNaN(u.getTime()) && d instanceof Date && !isNaN(d.getTime()) && u.getTime() < d.getTime(), v = f ? u : se(a).startOf("day").add(8, "hour").toDate(), h = f ? d : se(a).startOf("day").add(22, "hour").toDate(), p = () => ({ style: { backgroundColor: "transparent", border: "none" } }), m = { timeGutterFormat: "HH:mm", eventTimeRangeFormat: ({ start: g, end: $ }) => `${se(g).format("HH:mm")} - ${se($).format("HH:mm")}` }, y = (g) => {
    t(g);
  };
  return w.jsx(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50", children: w.jsx(UC, { localizer: YC, events: l, view: r, onView: n, date: a, onNavigate: o, startAccessor: (g) => g.start, endAccessor: (g) => g.end, min: v, max: h, step: 30, timeslots: 2, style: { height: 800 }, eventPropGetter: p, components: { event: BC }, formats: m, onSelectEvent: y, views: ["month", "week", "day"], toolbar: false, messages: { today: "\u4ECA\u5929", previous: "\u4E0A\u4E00\u9875", next: "\u4E0B\u4E00\u9875", month: "\u6708", week: "\u5468", day: "\u65E5", agenda: "\u5217\u8868", date: "\u65E5\u671F", time: "\u65F6\u95F4", event: "\u4E8B\u4EF6", noEventsInRange: "\u5728\u6B64\u8303\u56F4\u5185\u6CA1\u6709\u9762\u8BD5" }, onEventDrop: i, onEventResize: s, resizable: true, selectable: true }) });
}, Ms = { PENDING: { label: "\u5F85\u9762\u8BD5", className: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300/30 dark:border-blue-400/30" }, COMPLETED: { label: "\u5DF2\u5B8C\u6210", className: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300/30 dark:border-emerald-400/30" }, CANCELLED: { label: "\u5DF2\u53D6\u6D88", className: "bg-slate-500/10 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300 border border-slate-300/30 dark:border-slate-400/30" }, RESCHEDULED: { label: "\u5DF2\u6539\u671F", className: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/30 dark:border-amber-400/30" } }, KC = { ONSITE: "\u73B0\u573A\u9762\u8BD5", VIDEO: "\u89C6\u9891\u9762\u8BD5", PHONE: "\u7535\u8BDD\u9762\u8BD5" }, GC = ({ interview: e2, onEdit: t, onDelete: r, onStatusChange: n }) => w.jsxs(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, whileHover: { y: -2 }, transition: { duration: 0.2 }, className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5 transition-all", children: [w.jsxs("div", { className: "flex items-start justify-between gap-4", children: [w.jsxs("div", { className: "flex-1 min-w-0", children: [w.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [w.jsx("span", { className: `status-badge backdrop-blur-sm ${Ms[e2.status].className}`, children: Ms[e2.status].label }), w.jsx("span", { className: "text-sm font-medium text-slate-600 dark:text-slate-400", children: se(e2.interviewTime).format("YYYY-MM-DD HH:mm") })] }), w.jsx("h3", { className: "font-display font-bold text-xl mb-2 text-slate-900 dark:text-white tracking-tight", children: e2.companyName }), w.jsx("p", { className: "text-slate-600 dark:text-slate-300 mb-3 font-medium", children: e2.position }), w.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400", children: [w.jsxs("span", { className: "px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg font-medium", children: ["\u7B2C ", e2.roundNumber, " \u8F6E"] }), w.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\u2022" }), w.jsx("span", { className: "font-medium", children: KC[e2.interviewType] || e2.interviewType }), e2.interviewer && w.jsxs(w.Fragment, { children: [w.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\u2022" }), w.jsx("span", { className: "font-medium", children: e2.interviewer })] })] }), e2.meetingLink && w.jsxs(X.a, { whileHover: { x: 2 }, href: e2.meetingLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-3 transition-colors", children: [w.jsx(Iu, { className: "w-4 h-4" }), "\u8FDB\u5165\u4F1A\u8BAE"] }), e2.notes && w.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-3 italic", children: e2.notes })] }), w.jsxs("div", { className: "flex gap-2", children: [w.jsx(X.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: t, className: "p-2.5 text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-all", title: "\u7F16\u8F91", children: w.jsx(Fu, { className: "w-5 h-5" }) }), w.jsx(X.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: r, className: "p-2.5 text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all", title: "\u5220\u9664", children: w.jsx(Ns, { className: "w-5 h-5" }) })] })] }), e2.status === "PENDING" && w.jsxs(X.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: "mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex gap-3", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => n("COMPLETED"), className: "px-4 py-2 text-sm font-medium rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30 border border-emerald-300/30 dark:border-emerald-400/30 transition-all", children: "\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => n("CANCELLED"), className: "px-4 py-2 text-sm font-medium rounded-xl bg-slate-500/10 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300 hover:bg-slate-500/20 dark:hover:bg-slate-500/30 border border-slate-300/30 dark:border-slate-400/30 transition-all", children: "\u53D6\u6D88\u9762\u8BD5" })] })] }), VC = ({ interviews: e2 = [], onEdit: t, onDelete: r, onStatusChange: n }) => {
  const a = [...e2].sort((o, i) => new Date(o.interviewTime).getTime() - new Date(i.interviewTime).getTime());
  return a.length === 0 ? w.jsx(X.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-16", children: w.jsx("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-12 shadow-xl", children: w.jsx("p", { className: "text-slate-500 dark:text-slate-400 text-lg font-medium", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }) }) }) : w.jsx("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 space-y-4", children: a.map((o, i) => w.jsx(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2, delay: i * 0.05 }, children: w.jsx(GC, { interview: o, onEdit: () => t(o), onDelete: () => r(o.id), onStatusChange: (s) => n(o.id, s) }) }, o.id)) });
}, XC = `\u3010\u963F\u91CC\u5DF4\u5DF4\u3011\u540E\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u4E00\u9762\u9080\u8BF7
\u5019\u9009\u4EBA\uFF1A\u5F20\u4E09
\u9762\u8BD5\u65F6\u95F4\uFF1A2026-04-15 19:30
\u9762\u8BD5\u5F62\u5F0F\uFF1A\u89C6\u9891\u9762\u8BD5\uFF08\u817E\u8BAF\u4F1A\u8BAE\uFF09
\u4F1A\u8BAE\u94FE\u63A5\uFF1Ahttps://meeting.tencent.com/abc-defg-hij
\u9762\u8BD5\u8F6E\u6B21\uFF1A\u7B2C\u4E00\u8F6E\u6280\u672F\u9762
\u9762\u8BD5\u5B98\uFF1A\u674E\u8001\u5E08
\u5907\u6CE8\uFF1A\u8BF7\u63D0\u524D10\u5206\u949F\u5165\u4F1A\uFF0C\u51C6\u5907\u9879\u76EE\u4ECB\u7ECD\u4E0E\u7CFB\u7EDF\u8BBE\u8BA1\u6848\u4F8B\u3002`, ZC = ({ isOpen: e2, onClose: t, onSubmit: r, onDelete: n, initialData: a, mode: o }) => {
  const [i, s] = F.useState(o === "edit" ? "form" : "text"), [l, c] = F.useState(""), [u, d] = F.useState(null), [f, v] = F.useState(false), [h, p] = F.useState(false), [m, y] = F.useState(null), [g, $] = F.useState(a || { companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" });
  if (x.useEffect(() => {
    e2 && (s(o === "edit" ? "form" : "text"), c(""), d(null), y(null), $(a || { companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" }));
  }, [e2, o, a]), !e2) return null;
  const b = async () => {
    if (l.trim()) {
      v(true);
      try {
        const D = await At.parse(l);
        d(D), D.success && D.data && $({ ...D.data, interviewTime: D.data.interviewTime || "" }), s("parse-result");
      } catch (D) {
        console.error("Parse failed:", D), d({ success: false, data: null, confidence: 0, parseMethod: "ai", log: "\u89E3\u6790\u5931\u8D25,\u8BF7\u624B\u52A8\u8F93\u5165" }), s("parse-result");
      } finally {
        v(false);
      }
    }
  }, E = (D, B) => {
    $((H) => ({ ...H, [D]: B }));
  }, _ = async (D) => {
    D.preventDefault(), p(true), y(null);
    try {
      await r(g), t();
    } catch (B) {
      console.error("Submit failed:", B), y(B.message || "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    } finally {
      p(false);
    }
  }, M = () => {
    s("text"), c(""), d(null), $({ companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" });
  }, P = () => w.jsxs("div", { className: "space-y-6", children: [w.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [w.jsx("div", { className: "flex-1 h-px bg-slate-200 dark:bg-slate-700" }), w.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400 font-medium", children: "\u9009\u62E9\u6DFB\u52A0\u65B9\u5F0F" }), w.jsx("div", { className: "flex-1 h-px bg-slate-200 dark:bg-slate-700" })] }), w.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", className: "p-4 rounded-xl border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-left transition-all", children: w.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [w.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center", children: w.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }), w.jsxs("div", { className: "flex-1", children: [w.jsx("div", { className: "font-semibold text-primary-900 dark:text-primary-100", children: "\u7C98\u8D34\u6587\u672C" }), w.jsx("div", { className: "text-xs text-primary-600 dark:text-primary-400", children: "\u81EA\u52A8\u89E3\u6790\u9762\u8BD5\u4FE1\u606F" })] })] }) }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("form"), className: "p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-300 dark:hover:border-primary-600 text-left transition-all", children: w.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [w.jsx("div", { className: "w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center", children: w.jsx("svg", { className: "w-5 h-5 text-slate-600 dark:text-slate-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }) }), w.jsxs("div", { className: "flex-1", children: [w.jsx("div", { className: "font-semibold text-slate-900 dark:text-white", children: "\u624B\u52A8\u8F93\u5165" }), w.jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u586B\u5199\u9762\u8BD5\u8BE6\u60C5" })] })] }) })] }), w.jsxs("div", { children: [w.jsxs("div", { className: "flex items-center justify-between mb-3", children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300", children: "\u7C98\u8D34\u9762\u8BD5\u9080\u7EA6\u6587\u672C" }), w.jsx("button", { type: "button", onClick: () => c(XC), className: "text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors", children: "\u4F7F\u7528\u793A\u4F8B" })] }), w.jsx("textarea", { value: l, onChange: (D) => c(D.target.value), placeholder: "\u652F\u6301\u98DE\u4E66\u3001\u817E\u8BAF\u4F1A\u8BAE\u3001Zoom \u7B49\u683C\u5F0F\uFF0C\u6216\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u4F7F\u7528\u793A\u4F8B\u201D\u5FEB\u901F\u4F53\u9A8C\u89E3\u6790\u3002", className: "w-full h-48 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all" })] }), w.jsxs("div", { className: "flex justify-end gap-3", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: t, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u53D6\u6D88" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: b, disabled: !l.trim() || f, className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: f ? "\u89E3\u6790\u4E2D..." : "\u89E3\u6790\u6587\u672C" })] })] }), k = () => w.jsxs("div", { className: "space-y-6", children: [u && w.jsxs(w.Fragment, { children: [w.jsxs("div", { className: `p-5 rounded-xl border ${u.success ? "bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/30 border-emerald-200 dark:border-emerald-700" : "bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/50 dark:to-red-900/30 border-red-200 dark:border-red-700"}`, children: [w.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [u.success ? w.jsx(Hu, { className: "w-5 h-5 text-emerald-600 dark:text-emerald-400" }) : w.jsx(Bo, { className: "w-5 h-5 text-red-600 dark:text-red-400" }), w.jsx("span", { className: "font-semibold text-lg", children: u.success ? "\u89E3\u6790\u6210\u529F" : "\u89E3\u6790\u5931\u8D25" }), u.success && w.jsxs("span", { className: "text-sm text-slate-600 dark:text-slate-400 ml-auto", children: ["\u7F6E\u4FE1\u5EA6: ", w.jsxs("span", { className: "font-semibold text-emerald-700 dark:text-emerald-300", children: [(u.confidence * 100).toFixed(0), "%"] })] })] }), u.success && u.data && w.jsxs("div", { className: "bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-lg space-y-2.5 text-sm border border-slate-200/50 dark:border-slate-700/50", children: [w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u516C\u53F8:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: u.data.companyName })] }), w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u5C97\u4F4D:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: u.data.position })] }), w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u65F6\u95F4:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: se(u.data.interviewTime).format("YYYY-MM-DD HH:mm") })] }), u.data.meetingLink && w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u4F1A\u8BAE:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium truncate", children: u.data.meetingLink })] })] })] }), w.jsxs("details", { className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700", children: [w.jsx("summary", { className: "cursor-pointer font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors", children: "\u8BE6\u7EC6\u65E5\u5FD7" }), w.jsx("pre", { className: "mt-3 text-xs overflow-auto whitespace-pre-wrap text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700", children: u.log })] })] }), w.jsxs("div", { className: "flex justify-between gap-3", children: [w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("text"), className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium flex items-center gap-2 transition-all", children: [w.jsx(As, { className: "w-4 h-4" }), "\u91CD\u65B0\u8F93\u5165"] }), w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("form"), className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all", children: [(u == null ? void 0 : u.success) ? "\u786E\u8BA4\u5E76\u7F16\u8F91" : "\u624B\u52A8\u8F93\u5165", w.jsx(Ps, { className: "w-4 h-4" })] })] })] }), T = () => w.jsxs("form", { onSubmit: _, className: "space-y-5", children: [w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u516C\u53F8\u540D\u79F0 ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "text", value: g.companyName, onChange: (D) => E("companyName", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u5C97\u4F4D ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "text", value: g.position, onChange: (D) => E("position", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u9762\u8BD5\u65F6\u95F4 ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "datetime-local", value: g.interviewTime ? se(g.interviewTime).format("YYYY-MM-DDTHH:mm") : "", onChange: (D) => E("interviewTime", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u9762\u8BD5\u5F62\u5F0F" }), w.jsxs("select", { value: g.interviewType, onChange: (D) => E("interviewType", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all", children: [w.jsx("option", { value: "VIDEO", children: "\u89C6\u9891\u9762\u8BD5" }), w.jsx("option", { value: "ONSITE", children: "\u73B0\u573A\u9762\u8BD5" }), w.jsx("option", { value: "PHONE", children: "\u7535\u8BDD\u9762\u8BD5" })] })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u4F1A\u8BAE\u94FE\u63A5" }), w.jsx("input", { type: "url", value: g.meetingLink, onChange: (D) => E("meetingLink", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u7B2C\u51E0\u8F6E\u9762\u8BD5" }), w.jsx("input", { type: "number", min: "1", value: g.roundNumber, onChange: (D) => E("roundNumber", parseInt(D.target.value)), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u9762\u8BD5\u5B98" }), w.jsx("input", { type: "text", value: g.interviewer, onChange: (D) => E("interviewer", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u5907\u6CE8" }), w.jsx("textarea", { value: g.notes, onChange: (D) => E("notes", D.target.value), rows: 3, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 resize-none transition-all" })] }), m && w.jsxs("div", { className: "p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-start gap-3 text-red-600 dark:text-red-400", children: [w.jsx(Bo, { className: "w-5 h-5 flex-shrink-0 mt-0.5" }), w.jsx("div", { className: "text-sm font-medium", children: m })] }), w.jsxs("div", { className: "flex justify-between pt-5 gap-3", children: [o === "create" && i !== "text" ? w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: M, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u91CD\u7F6E" }) : o === "edit" && n && (a == null ? void 0 : a.id) ? w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => n(a.id), className: "px-5 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl font-medium flex items-center gap-2 transition-all", children: [w.jsx(Ns, { className: "w-4 h-4" }), "\u5220\u9664"] }) : null, w.jsxs("div", { className: "flex gap-3 ml-auto", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: t, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u53D6\u6D88" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "submit", disabled: h, className: "px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: h ? "\u4FDD\u5B58\u4E2D..." : "\u4FDD\u5B58" })] })] })] });
  return w.jsx(X.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50", children: w.jsxs(X.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, transition: { duration: 0.2 }, className: "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-700/50", children: [w.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700", children: [w.jsx("h2", { className: "text-2xl font-display font-bold text-slate-900 dark:text-white", children: o === "edit" ? "\u7F16\u8F91\u9762\u8BD5" : "\u6DFB\u52A0\u9762\u8BD5" }), w.jsx(X.button, { whileHover: { scale: 1.1, rotate: 90 }, whileTap: { scale: 0.9 }, onClick: t, className: "p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all", children: w.jsx(Wu, { className: "w-5 h-5" }) })] }), w.jsxs("div", { className: "p-6", children: [i === "text" && P(), i === "parse-result" && k(), i === "form" && T()] })] }) });
};
class JC extends F.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false, error: null });
  }
  static getDerivedStateFromError(t) {
    return { hasError: true, error: t };
  }
  componentDidCatch(t, r) {
    console.error("Calendar Error:", t, r);
  }
  render() {
    var _a2;
    return this.state.hasError ? w.jsx("div", { className: "bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-xl", children: w.jsxs("div", { className: "text-center py-12", children: [w.jsx("div", { className: "text-red-500 text-6xl mb-4", children: "\u{1F4C5}" }), w.jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-white mb-2", children: "\u65E5\u5386\u6E32\u67D3\u51FA\u9519" }), w.jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: ((_a2 = this.state.error) == null ? void 0 : _a2.message) || "\u672A\u77E5\u9519\u8BEF" }), w.jsx("button", { onClick: () => {
      this.setState({ hasError: false, error: null }), window.location.reload();
    }, className: "px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: "\u5237\u65B0\u9875\u9762" })] }) }) : this.props.children;
  }
}
const ak = () => {
  const { interviews: e2, loading: t, error: r, createInterview: n, updateInterview: a, deleteInterview: o, updateStatus: i } = qu(), [s, l] = F.useState("week"), [c, u] = F.useState(/* @__PURE__ */ new Date()), [d, f] = F.useState(false), [v, h] = F.useState("create"), [p, m] = F.useState(null), [y, g] = F.useState(/* @__PURE__ */ new Map()), [$, b] = F.useState(false), [E, _] = F.useState(false), [M, P] = F.useState(null), k = F.useCallback(() => {
    h("create"), m(null), f(true);
  }, []), T = F.useCallback((I) => {
    h("edit"), m(I), f(true);
  }, []), D = F.useCallback((I) => {
    P(I), _(true);
  }, []), B = F.useCallback(async () => {
    M && (await o(M), P(null)), _(false);
  }, [M, o]), H = F.useCallback(async (I, Y) => {
    await i(I, Y);
  }, [i]), N = F.useCallback(async (I) => {
    const Y = e2.find((U) => U.id === I.event.id);
    if (Y) try {
      const U = typeof I.start == "string" ? new Date(I.start) : I.start;
      await a(I.event.id, { companyName: Y.companyName, position: Y.position, interviewTime: se(U).format("YYYY-MM-DDTHH:mm:ss"), interviewType: Y.interviewType, meetingLink: Y.meetingLink, roundNumber: Y.roundNumber, interviewer: Y.interviewer, notes: Y.notes });
    } catch (U) {
      console.error("Failed to update interview time:", U), alert("\u66F4\u65B0\u9762\u8BD5\u65F6\u95F4\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    }
  }, [e2, a]), A = F.useCallback(async (I) => {
    const Y = e2.find((U) => U.id === I.event.id);
    if (Y) try {
      const U = typeof I.start == "string" ? new Date(I.start) : I.start;
      await a(I.event.id, { companyName: Y.companyName, position: Y.position, interviewTime: se(U).format("YYYY-MM-DDTHH:mm:ss"), interviewType: Y.interviewType, meetingLink: Y.meetingLink, roundNumber: Y.roundNumber, interviewer: Y.interviewer, notes: Y.notes });
    } catch (U) {
      console.error("Failed to update interview duration:", U), alert("\u66F4\u65B0\u9762\u8BD5\u65F6\u957F\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    }
  }, [e2, a]), O = F.useCallback(async (I) => {
    v === "create" ? await n(I) : p && await a(p.id, I), f(false), m(null);
  }, [v, p, n, a]), R = F.useCallback(async () => {
    for (const [I, Y] of y) {
      const U = e2.find((S) => S.id === I);
      U && await a(I, { companyName: U.companyName, position: U.position, interviewTime: se(Y).format("YYYY-MM-DDTHH:mm:ss"), interviewType: U.interviewType, meetingLink: U.meetingLink, roundNumber: U.roundNumber, interviewer: U.interviewer, notes: U.notes });
    }
    g(/* @__PURE__ */ new Map()), b(false);
  }, [y, e2, a]), L = F.useCallback(() => {
    g(/* @__PURE__ */ new Map()), b(false);
  }, []);
  return t ? w.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: w.jsx("div", { className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full animate-spin" }) }) : r ? w.jsx("div", { className: "text-center py-12 text-red-500", children: w.jsx("p", { children: r }) }) : w.jsxs("div", { className: "max-w-7xl mx-auto p-6", children: [w.jsx(Ku, { view: s, onViewChange: l, date: c, onDateChange: u, onAddClick: k }), s === "list" ? w.jsx(VC, { interviews: e2, onEdit: T, onDelete: D, onStatusChange: H }) : w.jsx(JC, { children: w.jsx(qC, { interviews: e2, onSelectEvent: T, view: s, onViewChange: (I) => l(I), date: c, onDateChange: u, onEventDrop: N, onEventResize: A }) }), w.jsx(ZC, { isOpen: d, onClose: () => {
    f(false), m(null);
  }, onSubmit: O, onDelete: (I) => {
    f(false), m(null), D(I);
  }, initialData: p || void 0, mode: v }), w.jsx(Uo, { open: $, title: "\u786E\u8BA4\u8C03\u6574\u9762\u8BD5\u65F6\u95F4", message: `\u60A8\u8C03\u6574\u4E86 ${y.size} \u4E2A\u9762\u8BD5\u7684\u65F6\u95F4,\u786E\u8BA4\u4FDD\u5B58\u5417?`, onConfirm: R, onCancel: L }), w.jsx(Uo, { open: E, title: "\u786E\u8BA4\u5220\u9664", message: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u9762\u8BD5\u5417?\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002", onConfirm: B, onCancel: () => {
    _(false), P(null);
  } })] });
};
export {
  ak as InterviewSchedulePage,
  ak as default
};
