var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as t, U as G, n as A, F as te, o as O, X as se, W as j, t as re, L as F, Y as ae } from "./ui-vendor-Icq6OStM.js";
import { r as d } from "./react-vendor-C54eoJNz.js";
import { g as T, r as $, h as _ } from "./index-BZ3exKah.js";
import { k as C } from "./knowledgebase-BzUHXAZF.js";
function ne({ policy: e, entityLabel: s, full: r, notice: u, onFilesSelected: m }) {
  const h = d.useId(), [l, b] = d.useState(false), y = (p) => {
    p.target.files && m(p.target.files), p.target.value = "";
  }, v = (p) => {
    p.preventDefault(), b(false), r || m(p.dataTransfer.files);
  };
  return t.jsxs(t.Fragment, { children: [t.jsxs("label", { htmlFor: h, className: `relative block rounded-2xl border-2 border-dashed p-10 text-center transition-colors focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 ${r ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-70 dark:border-slate-700 dark:bg-slate-800/60" : l ? "cursor-pointer border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "cursor-pointer border-slate-300 bg-white hover:border-primary-400 dark:border-slate-600 dark:bg-slate-800"}`, onDragOver: (p) => {
    p.preventDefault(), r || b(true);
  }, onDragLeave: (p) => {
    p.preventDefault(), b(false);
  }, onDrop: v, children: [t.jsx("input", { id: h, className: "sr-only", "aria-label": `\u9009\u62E9${s}\u6587\u4EF6`, type: "file", accept: e.extensions.map((p) => `.${p}`).join(","), multiple: true, disabled: r, onChange: y }), t.jsx(G, { className: `mx-auto mb-4 h-12 w-12 ${l ? "text-primary-500" : "text-slate-400"}` }), t.jsx("p", { className: "mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100", children: "\u70B9\u51FB\u9009\u62E9\u6216\u62D6\u62FD\u591A\u4E2A\u6587\u4EF6\u5230\u8FD9\u91CC" }), t.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u652F\u6301 ", e.formatLabel, "\uFF0C\u5355\u4E2A\u6587\u4EF6\u6700\u5927 ", e.maxSizeLabel, "\uFF1B\u4E0A\u4F20\u671F\u95F4\u4ECD\u53EF\u7EE7\u7EED\u6DFB\u52A0"] })] }), u && t.jsxs("div", { className: "mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300", children: [t.jsx(A, { className: "mt-0.5 h-4 w-4 shrink-0" }), t.jsx("span", { className: "break-words", children: u })] })] });
}
const D = 10, Y = 2, le = 500, M = 2e3, ie = 5e3, we = { extensions: ["pdf", "doc", "docx", "txt", "md"], maxFileSize: 50 * 1024 * 1024, maxSizeLabel: "50MB", formatLabel: "PDF\u3001DOCX\u3001DOC\u3001TXT\u3001MD" }, Ie = { extensions: ["pdf", "doc", "docx", "txt"], maxFileSize: 10 * 1024 * 1024, maxSizeLabel: "10MB", formatLabel: "PDF\u3001DOCX\u3001DOC\u3001TXT" };
function B(e) {
  return `${e.name}:${e.size}:${e.lastModified}`;
}
function oe(e, s) {
  if (e.size <= 0) return "\u6587\u4EF6\u4E3A\u7A7A";
  if (e.size > s.maxFileSize) return `\u6587\u4EF6\u8D85\u8FC7 ${s.maxSizeLabel}`;
  const r = e.name.includes(".") ? e.name.slice(e.name.lastIndexOf(".") + 1).toLowerCase() : "";
  return s.extensions.includes(r) ? null : `\u4EC5\u652F\u6301 ${s.formatLabel}`;
}
function de(e, s, r, u = Date.now()) {
  const m = new Set(e.map((y) => B(y.file))), h = [], l = [];
  let b = Math.max(0, D - e.length);
  return Array.from(s).forEach((y, v) => {
    const p = B(y), x = oe(y, r);
    m.has(p) ? l.push(`${y.name}\uFF08\u5DF2\u5728\u5217\u8868\u4E2D\uFF09`) : x ? l.push(`${y.name}\uFF08${x}\uFF09`) : b === 0 ? l.push(`${y.name}\uFF08\u5355\u6279\u6700\u591A ${D} \u4E2A\u6587\u4EF6\uFF09`) : (m.add(p), b -= 1, h.push({ clientId: `${u}-${v}-${p}`, file: y, customName: "", status: "READY" }));
  }), { accepted: h, rejected: l };
}
function S(e, s = "PENDING") {
  return e === "PENDING" || e === "PROCESSING" || e === "COMPLETED" || e === "FAILED" ? e : s;
}
function q(e) {
  return e === "FAILED" ? "PROCESS_FAILED" : e;
}
function X(e, s, r, u) {
  const m = s === false, h = m ? "FAILED" : e;
  return { status: q(h), error: h === "FAILED" ? m && r || `${u}\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5` : void 0, needsStatusRefresh: h === "FAILED" && !m };
}
function z(e) {
  return e === "PENDING" || e === "PROCESSING";
}
function ce(e, s = Date.now()) {
  return e.status === "UPLOAD_FAILED" && (!e.retryAvailableAt || e.retryAvailableAt <= s);
}
class ue {
  constructor(s, r) {
    __publicField(this, "concurrency");
    __publicField(this, "startIntervalMs");
    __publicField(this, "pending", []);
    __publicField(this, "scheduledIds", /* @__PURE__ */ new Set());
    __publicField(this, "idleResolvers", []);
    __publicField(this, "activeCount", 0);
    __publicField(this, "nextStartAt", 0);
    __publicField(this, "startTimer", null);
    __publicField(this, "disposed", false);
    if (s < 1) throw new Error("\u5E76\u53D1\u6570\u5FC5\u987B\u5927\u4E8E 0");
    if (r < 0) throw new Error("\u8BF7\u6C42\u95F4\u9694\u4E0D\u80FD\u5C0F\u4E8E 0");
    this.concurrency = s, this.startIntervalMs = r;
  }
  enqueue(s, r) {
    return this.disposed || this.scheduledIds.has(s) ? false : (this.scheduledIds.add(s), this.pending.push({ clientId: s, run: r }), this.pump(), true);
  }
  isScheduled(s) {
    return this.scheduledIds.has(s);
  }
  whenIdle() {
    return this.isIdle() ? Promise.resolve() : new Promise((s) => this.idleResolvers.push(s));
  }
  dispose() {
    this.disposed = true, this.startTimer && (clearTimeout(this.startTimer), this.startTimer = null), this.pending.forEach((s) => this.scheduledIds.delete(s.clientId)), this.pending.length = 0, this.resolveIdleIfNeeded();
  }
  pump() {
    if (this.disposed || this.startTimer || this.activeCount >= this.concurrency) return;
    const s = this.pending[0];
    if (!s) {
      this.resolveIdleIfNeeded();
      return;
    }
    const r = Math.max(0, this.nextStartAt - Date.now());
    if (r > 0) {
      this.startTimer = setTimeout(() => {
        this.startTimer = null, this.pump();
      }, r);
      return;
    }
    this.pending.shift(), this.activeCount += 1, this.nextStartAt = Date.now() + this.startIntervalMs, Promise.resolve().then(s.run).catch(() => {
    }).finally(() => {
      this.activeCount -= 1, this.scheduledIds.delete(s.clientId), this.pump(), this.resolveIdleIfNeeded();
    }), this.pump();
  }
  isIdle() {
    return this.activeCount === 0 && this.pending.length === 0 && this.startTimer === null;
  }
  resolveIdleIfNeeded() {
    this.isIdle() && this.idleResolvers.splice(0).forEach((s) => s());
  }
}
function me(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function he({ status: e, processLabel: s }) {
  const r = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium";
  switch (e) {
    case "READY":
      return t.jsxs("span", { className: `${r} bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300`, children: [t.jsx(j, { className: "h-3.5 w-3.5" }), "\u5F85\u63D0\u4EA4"] });
    case "UPLOADING":
      return t.jsxs("span", { className: `${r} bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300`, children: [t.jsx(F, { className: "h-3.5 w-3.5 animate-spin" }), "\u4E0A\u4F20\u4E2D"] });
    case "PENDING":
      return t.jsxs("span", { className: `${r} bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300`, children: [t.jsx(j, { className: "h-3.5 w-3.5" }), "\u7B49\u5F85", s] });
    case "PROCESSING":
      return t.jsxs("span", { className: `${r} bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300`, children: [t.jsx(F, { className: "h-3.5 w-3.5 animate-spin" }), s, "\u4E2D"] });
    case "COMPLETED":
      return t.jsxs("span", { className: `${r} bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300`, children: [t.jsx(re, { className: "h-3.5 w-3.5" }), "\u5DF2\u5B8C\u6210"] });
    case "UPLOAD_FAILED":
      return t.jsxs("span", { className: `${r} bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300`, children: [t.jsx(A, { className: "h-3.5 w-3.5" }), "\u4E0A\u4F20\u5931\u8D25"] });
    case "PROCESS_FAILED":
      return t.jsxs("span", { className: `${r} bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300`, children: [t.jsx(A, { className: "h-3.5 w-3.5" }), s, "\u5931\u8D25"] });
    case "QUEUED":
      return t.jsxs("span", { className: `${r} bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300`, children: [t.jsx(j, { className: "h-3.5 w-3.5" }), "\u7B49\u5F85\u4E0A\u4F20"] });
  }
}
function pe({ processLabel: e, customNamePlaceholder: s, items: r, completedCount: u, failedCount: m, hasUploadActivity: h, retryingProcessId: l, onClear: b, onNameChange: y, onRemove: v, onRetryUpload: p, onRetryProcessing: x }) {
  return r.length === 0 ? null : t.jsxs("section", { className: "mt-6 overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-slate-900/50", children: [t.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4 dark:border-slate-700", children: [t.jsxs("div", { children: [t.jsxs("h2", { className: "font-semibold text-slate-900 dark:text-white", children: ["\u6587\u4EF6\u5217\u8868\uFF08", r.length, "/", D, "\uFF09"] }), t.jsxs("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", "aria-live": "polite", children: ["\u5DF2\u5B8C\u6210 ", u, " \u4E2A", m > 0 ? `\uFF0C\u5931\u8D25 ${m} \u4E2A` : ""] })] }), t.jsx("button", { type: "button", disabled: h, onClick: b, className: "text-sm text-slate-500 transition-colors hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400", children: "\u6E05\u7A7A\u5217\u8868" })] }), t.jsx("div", { className: "divide-y divide-slate-100 dark:divide-slate-700", children: r.map((i) => {
    const N = i.status === "READY" || i.status === "UPLOAD_FAILED", c = !!i.retryAvailableAt;
    return t.jsxs("div", { className: "p-5", children: [t.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-start", children: [t.jsxs("div", { className: "flex min-w-0 flex-1 items-start gap-3", children: [t.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-900/30", children: t.jsx(te, { className: "h-5 w-5" }) }), t.jsxs("div", { className: "min-w-0 flex-1", children: [t.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [t.jsx("p", { className: "max-w-full truncate font-medium text-slate-900 dark:text-white", children: i.file.name }), i.duplicate && t.jsx("span", { className: "rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300", children: "\u5DF2\u5B58\u5728" })] }), t.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: me(i.file.size) }), s && t.jsx("input", { type: "text", value: i.customName, disabled: !N, onChange: (f) => y(i.clientId, f.target.value), placeholder: s, "aria-label": `${i.file.name}\u7684\u540D\u79F0`, className: "mt-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 disabled:bg-slate-50 disabled:text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:ring-primary-900/40 dark:disabled:bg-slate-800" })] })] }), t.jsxs("div", { className: "flex shrink-0 items-center justify-between gap-2 md:justify-end", children: [t.jsx(he, { status: i.status, processLabel: e }), i.status === "UPLOAD_FAILED" && t.jsx("button", { type: "button", disabled: c, onClick: () => p(i.clientId), className: "rounded-lg p-2 text-slate-400 transition hover:bg-primary-50 hover:text-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-primary-900/30", title: c ? "2 \u79D2\u540E\u53EF\u91CD\u8BD5" : "\u91CD\u65B0\u4E0A\u4F20", children: t.jsx(O, { className: "h-4 w-4" }) }), i.status === "PROCESS_FAILED" && i.entityId && t.jsx("button", { type: "button", disabled: l !== null, onClick: () => x(i.clientId), className: "rounded-lg p-2 text-slate-400 transition hover:bg-primary-50 hover:text-primary-500 disabled:opacity-50 dark:hover:bg-primary-900/30", title: `\u91CD\u65B0${e}`, children: t.jsx(O, { className: `h-4 w-4 ${l === i.entityId ? "animate-spin" : ""}` }) }), N && t.jsx("button", { type: "button", onClick: () => v(i.clientId), className: "rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/30", title: "\u79FB\u9664\u6587\u4EF6", children: t.jsx(se, { className: "h-4 w-4" }) })] })] }), i.error && t.jsxs("div", { className: "ml-0 mt-3 flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-300 md:ml-[52px]", children: [t.jsx(A, { className: "mt-0.5 h-4 w-4 shrink-0" }), t.jsx("span", { className: "break-words", children: i.error })] })] }, i.clientId);
  }) })] });
}
function L(e) {
  e.controller.abort(), e.timer && clearTimeout(e.timer);
}
function xe(e, s, r) {
  const u = d.useRef(/* @__PURE__ */ new Map()), m = d.useRef(/* @__PURE__ */ new Set()), [h, l] = d.useState(0), [b, y] = d.useState(false), v = d.useCallback((x) => {
    m.current.add(x);
    const i = u.current.get(x);
    u.current.delete(x), i && L(i);
  }, []), p = d.useCallback((x) => {
    m.current.delete(x), l((i) => i + 1);
  }, []);
  return d.useEffect(() => {
    const x = u.current, i = new Set(e ? e.split(",").map(Number) : []), N = () => y([...x.values()].some((c) => c.failed));
    for (const [c, f] of x) i.has(c) || (x.delete(c), L(f));
    N();
    for (const c of i) {
      if (x.has(c) || m.current.has(c)) continue;
      const f = { controller: new AbortController(), failed: false };
      x.set(c, f);
      const E = async () => {
        let k = true;
        try {
          const w = await s(c, f.controller.signal);
          if (x.get(c) !== f) return;
          f.failed = false, r(w), k = w.status === "PENDING" || w.status === "PROCESSING";
        } catch {
          if (x.get(c) !== f) return;
          f.failed = true;
        }
        x.get(c) === f && (N(), k && (f.timer = setTimeout(E, ie)));
      };
      E();
    }
  }, [e, s, r, h]), d.useEffect(() => {
    const x = u.current, i = m.current;
    return () => {
      x.forEach(L), x.clear(), i.clear();
    };
  }, []), { error: b, pause: v, resume: p };
}
function fe(e, s) {
  const r = d.useRef(true), u = d.useRef([]), m = d.useRef(null), h = d.useRef(/* @__PURE__ */ new Map()), l = d.useRef(null), [b, y] = d.useState([]), [v, p] = d.useState(""), [x, i] = d.useState(null), N = d.useCallback(() => (m.current || (m.current = new ue(Y, le)), m.current), []), c = d.useCallback((a) => {
    const n = a(u.current);
    return u.current = n, r.current && y(n), n;
  }, []), f = d.useCallback((a, n) => {
    c((o) => o.map((g) => g.clientId === a ? n(g) : g));
  }, [c]), E = d.useCallback((a) => {
    const n = h.current.get(a);
    n && clearTimeout(n);
    const o = setTimeout(() => {
      h.current.delete(a), f(a, (g) => ({ ...g, retryAvailableAt: void 0 }));
    }, M);
    h.current.set(a, o);
  }, [f]), k = d.useCallback(async (a) => {
    f(a.clientId, (n) => ({ ...n, status: "UPLOADING", error: void 0, retryAvailableAt: void 0 }));
    try {
      const n = await e.upload(a.file, a.customName.trim() || void 0);
      if (!r.current) return;
      f(a.clientId, (o) => ({ ...o, ...n }));
    } catch (n) {
      if (!r.current) return;
      f(a.clientId, (o) => ({ ...o, status: "UPLOAD_FAILED", error: T(n) || "\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", retryAvailableAt: Date.now() + M })), E(a.clientId);
    }
  }, [e, E, f]), w = d.useCallback((a) => {
    const n = u.current.find((g) => g.clientId === a);
    if (!n || n.status !== "READY" && !ce(n)) return false;
    const o = N().enqueue(a, () => k({ clientId: a, file: n.file, customName: n.customName }));
    return o && f(a, (g) => ({ ...g, status: "QUEUED", error: void 0, retryAvailableAt: void 0 })), o;
  }, [N, f, k]), Q = d.useCallback((a) => {
    const n = de(u.current, a, s);
    n.accepted.length > 0 && c((o) => [...o, ...n.accepted]), p(n.rejected.join("\uFF1B"));
  }, [s, c]), K = d.useCallback(() => {
    p(""), u.current.filter((a) => a.status === "READY").forEach((a) => w(a.clientId));
  }, [w]), W = d.useCallback((a) => {
    w(a);
  }, [w]), V = d.useMemo(() => [...new Set(b.filter((a) => a.entityId && (z(a.status) || a.needsStatusRefresh)).map((a) => a.entityId))].sort((a, n) => a - n).join(","), [b]), H = d.useCallback((a) => {
    c((n) => n.map((o) => o.entityId !== a.id || !z(o.status) && !o.needsStatusRefresh ? o : { ...o, status: q(a.status), needsStatusRefresh: false, error: a.status === "FAILED" ? a.error || `${e.processLabel}\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5` : void 0 }));
  }, [e.processLabel, c]), { error: J, pause: R, resume: P } = xe(V, e.getStatus, H), Z = d.useCallback(async (a) => {
    const n = u.current.find((g) => g.clientId === a);
    if (!(n == null ? void 0 : n.entityId) || l.current !== null) return;
    const o = n.entityId;
    R(o), l.current = o, i(o);
    try {
      if (await e.retry(o), !r.current) return;
      c((g) => g.map((I) => I.entityId === o ? { ...I, status: "PENDING", error: void 0, needsStatusRefresh: false } : I));
    } catch (g) {
      if (!r.current) return;
      f(a, (I) => ({ ...I, error: T(g) || `\u91CD\u65B0${e.processLabel}\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5` }));
    } finally {
      l.current = null, r.current && (P(o), i(null));
    }
  }, [e, R, P, f, c]);
  d.useEffect(() => (r.current = true, N(), () => {
    var _a;
    r.current = false, (_a = m.current) == null ? void 0 : _a.dispose(), m.current = null, h.current.forEach((a) => clearTimeout(a)), h.current.clear();
  }), [N]);
  const U = b.some((a) => ["QUEUED", "UPLOADING"].includes(a.status)), ee = () => {
    U || (h.current.forEach((a) => clearTimeout(a)), h.current.clear(), c(() => []), p(""));
  };
  return { items: b, hasUploadActivity: U, selectionNotice: v, pollError: J, retryingProcessId: x, readyCount: b.filter((a) => a.status === "READY").length, completedCount: b.filter((a) => a.status === "COMPLETED").length, failedCount: b.filter((a) => ["UPLOAD_FAILED", "PROCESS_FAILED"].includes(a.status)).length, addFiles: Q, clearItems: ee, enqueueReadyItems: K, retryUpload: W, retryProcessing: Z, removeItem: (a) => {
    const n = u.current.find((g) => g.clientId === a);
    if (!n || !["READY", "UPLOAD_FAILED"].includes(n.status)) return;
    const o = h.current.get(a);
    o && clearTimeout(o), h.current.delete(a), c((g) => g.filter((I) => I.clientId !== a));
  }, updateCustomName: (a, n) => f(a, (o) => ["READY", "UPLOAD_FAILED"].includes(o.status) ? { ...o, customName: n } : o) };
}
function Ee({ entityLabel: e, policy: s, adapter: r, customNamePlaceholder: u, backLabel: m, onBack: h }) {
  const l = fe(r, s), b = r.processLabel;
  return t.jsxs("div", { className: "mx-auto max-w-5xl pb-16 pt-10", children: [t.jsxs("div", { className: "mb-8 text-center", children: [t.jsxs("h1", { className: "mb-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white", children: ["\u6279\u91CF\u4E0A\u4F20", e] }), t.jsxs("p", { className: "text-slate-500 dark:text-slate-400", children: ["\u5355\u6279\u6700\u591A ", D, " \u4E2A\u6587\u4EF6\uFF0C\u540C\u65F6\u4E0A\u4F20 ", Y, " \u4E2A\uFF0C\u4E0A\u4F20\u540E\u81EA\u52A8\u5F02\u6B65", b] })] }), t.jsx(ne, { entityLabel: e, policy: s, full: l.items.length >= D, notice: l.selectionNotice, onFilesSelected: l.addFiles }), l.pollError && t.jsxs("div", { className: "mt-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300", children: [t.jsx(A, { className: "h-4 w-4" }), "\u90E8\u5206", b, "\u72B6\u6001\u6682\u65F6\u65E0\u6CD5\u5237\u65B0\uFF0C\u5C06\u81EA\u52A8\u91CD\u8BD5"] }), t.jsx(pe, { processLabel: b, customNamePlaceholder: u, items: l.items, completedCount: l.completedCount, failedCount: l.failedCount, hasUploadActivity: l.hasUploadActivity, retryingProcessId: l.retryingProcessId, onClear: l.clearItems, onNameChange: l.updateCustomName, onRemove: l.removeItem, onRetryUpload: l.retryUpload, onRetryProcessing: (y) => void l.retryProcessing(y) }), t.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [t.jsxs("button", { type: "button", onClick: h, disabled: l.hasUploadActivity, className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700", children: [t.jsx(ae, { className: "h-4 w-4" }), m] }), l.readyCount > 0 && t.jsxs("button", { type: "button", onClick: l.enqueueReadyItems, className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60", children: [t.jsx(G, { className: "h-5 w-5" }), "\u52A0\u5165\u4E0A\u4F20\u961F\u5217 ", l.readyCount, " \u4E2A\u6587\u4EF6"] })] })] });
}
const be = { async uploadAndAnalyze(e) {
  const s = new FormData();
  return s.append("file", e), $.upload("/api/resumes/upload", s);
}, async healthCheck() {
  return $.get("/api/resumes/health");
} }, ke = { processLabel: "\u5411\u91CF\u5316", async upload(e, s) {
  var _a;
  const r = await C.uploadKnowledgeBase(e, s);
  if (!((_a = r.knowledgeBase) == null ? void 0 : _a.id)) throw new Error("\u4E0A\u4F20\u7ED3\u679C\u7F3A\u5C11\u77E5\u8BC6\u5E93 ID\uFF0C\u8BF7\u91CD\u8BD5");
  return { entityId: r.knowledgeBase.id, duplicate: r.duplicate, ...X(S(r.knowledgeBase.vectorStatus), r.enqueueAccepted, r.message, "\u5411\u91CF\u5316") };
}, async getStatus(e, s) {
  const r = await C.getKnowledgeBase(e, s);
  return { id: r.id, status: r.vectorStatus, error: r.vectorError };
}, retry: (e) => C.revectorize(e) }, Ae = { processLabel: "\u5206\u6790", async upload(e) {
  var _a, _b, _c;
  const s = await be.uploadAndAnalyze(e), r = ((_a = s.resume) == null ? void 0 : _a.id) ?? ((_b = s.storage) == null ? void 0 : _b.resumeId);
  if (!r) throw new Error("\u4E0A\u4F20\u7ED3\u679C\u7F3A\u5C11\u7B80\u5386 ID\uFF0C\u8BF7\u91CD\u8BD5");
  const u = S((_c = s.resume) == null ? void 0 : _c.analyzeStatus, s.analysis ? "COMPLETED" : "PENDING");
  return { entityId: r, duplicate: s.duplicate, ...X(u, s.enqueueAccepted, s.message, "\u5206\u6790") };
}, async getStatus(e, s) {
  var _a;
  const r = await _.getResumeDetail(e, s);
  return { id: r.id, status: S(r.analyzeStatus, ((_a = r.analyses) == null ? void 0 : _a.length) ? "COMPLETED" : "PENDING"), error: r.analyzeError };
}, retry: (e) => _.reanalyze(e) };
export {
  Ee as B,
  we as K,
  Ie as R,
  ke as k,
  Ae as r
};
