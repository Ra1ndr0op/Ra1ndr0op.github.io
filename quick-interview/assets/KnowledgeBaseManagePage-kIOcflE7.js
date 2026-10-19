import { j as e, D as q, U as te, v as V, Z as ae, B as se, a as E, L, _ as re, m as b, F as le, A as ne, K as oe, X as ie, $ as ce, r as de, o as xe, w as me, p as $, n as he, q as ue } from "./ui-vendor-Icq6OStM.js";
import { r as s } from "./react-vendor-C54eoJNz.js";
import { k as l } from "./knowledgebase-BzUHXAZF.js";
import { D as pe } from "./DeleteConfirmDialog-BjfJUZ2-.js";
import "./index-BZ3exKah.js";
import "./syntax-highlighter-aNFqcRiR.js";
import "./ConfirmDialog-CZ5WuzmS.js";
function ge(r) {
  if (r === 0) return "0 B";
  const i = 1024, o = ["B", "KB", "MB", "GB"], c = Math.floor(Math.log(r) / Math.log(i));
  return parseFloat((r / Math.pow(i, c)).toFixed(1)) + " " + o[c];
}
function ye(r) {
  return new Date(r).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function je({ status: r }) {
  switch (r) {
    case "COMPLETED":
      return e.jsx($, { className: "w-4 h-4 text-green-500" });
    case "PROCESSING":
      return e.jsx(L, { className: "w-4 h-4 text-blue-500 animate-spin" });
    case "PENDING":
      return e.jsx(ue, { className: "w-4 h-4 text-yellow-500" });
    case "FAILED":
      return e.jsx(he, { className: "w-4 h-4 text-red-500" });
    default:
      return e.jsx($, { className: "w-4 h-4 text-green-500" });
  }
}
function ve(r) {
  switch (r) {
    case "COMPLETED":
      return "\u5DF2\u5B8C\u6210";
    case "PROCESSING":
      return "\u5904\u7406\u4E2D";
    case "PENDING":
      return "\u5F85\u5904\u7406";
    case "FAILED":
      return "\u5931\u8D25";
    default:
      return "\u672A\u77E5";
  }
}
function I({ icon: r, label: i, value: o, color: c }) {
  return e.jsx(b.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: `p-3 rounded-lg ${c}`, children: e.jsx(r, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: i }), e.jsx("p", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: o.toLocaleString() })] })] }) });
}
function De({ onUpload: r, onChat: i }) {
  const [o, c] = s.useState(null), [g, B] = s.useState([]), [w, P] = s.useState(true), [d, y] = s.useState(""), [m, H] = s.useState("time"), [x, j] = s.useState(null), [h, C] = s.useState(""), [A, R] = s.useState([]), [v, k] = s.useState(null), [Q, K] = s.useState(false), [X, S] = s.useState(null), [F, f] = s.useState(""), [N, M] = s.useState(false), O = s.useRef(null), [T, z] = s.useState(null), D = s.useCallback(async () => {
    try {
      const [t, a, n] = await Promise.all([l.getStatistics(), d ? l.search(d) : x ? l.getByCategory(x) : l.getAllKnowledgeBases(m, h || void 0), l.getAllCategories()]);
      c(t), B(a), R(n);
    } catch (t) {
      console.error("\u52A0\u8F7D\u6570\u636E\u5931\u8D25:", t);
    }
  }, [d, m, x, h]), u = s.useCallback(async () => {
    try {
      P(true);
      const [t, a, n] = await Promise.all([l.getStatistics(), d ? l.search(d) : x ? l.getByCategory(x) : l.getAllKnowledgeBases(m, h || void 0), l.getAllCategories()]);
      c(t), B(a), R(n);
    } catch (t) {
      console.error("\u52A0\u8F7D\u6570\u636E\u5931\u8D25:", t);
    } finally {
      P(false);
    }
  }, [d, m, x, h]);
  s.useEffect(() => {
    u();
  }, [u]), s.useEffect(() => {
    if (g.some((a) => a.vectorStatus === "PENDING" || a.vectorStatus === "PROCESSING") && !w) {
      const a = setInterval(() => {
        D();
      }, 5e3);
      return () => clearInterval(a);
    }
  }, [g, w, D]);
  const Z = async (t) => {
    try {
      z(t), await l.revectorize(t), await D();
    } catch (a) {
      console.error("\u91CD\u65B0\u5411\u91CF\u5316\u5931\u8D25:", a);
    } finally {
      z(null);
    }
  }, _ = async () => {
    if (v) try {
      K(true), await l.deleteKnowledgeBase(v.id), k(null), await u();
    } catch (t) {
      console.error("\u5220\u9664\u5931\u8D25:", t);
    } finally {
      K(false);
    }
  }, J = async (t) => {
    try {
      const a = await l.downloadKnowledgeBase(t.id), n = window.URL.createObjectURL(a), p = document.createElement("a");
      p.href = n, p.download = t.originalFilename, document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(n);
    } catch (a) {
      console.error("\u4E0B\u8F7D\u5931\u8D25:", a);
    }
  }, W = (t) => {
    S(t.id), f(t.category || ""), setTimeout(() => {
      var _a;
      (_a = O.current) == null ? void 0 : _a.focus();
    }, 50);
  }, G = () => {
    S(null), f("");
  }, U = async (t) => {
    try {
      M(true);
      const a = F.trim() || null;
      await l.updateCategory(t, a), S(null), f(""), await u();
    } catch (a) {
      console.error("\u66F4\u65B0\u5206\u7C7B\u5931\u8D25:", a);
    } finally {
      M(false);
    }
  }, Y = (t, a) => {
    t.key === "Enter" ? (t.preventDefault(), U(a)) : t.key === "Escape" && G();
  }, ee = (t) => {
    t.preventDefault(), u();
  };
  return e.jsxs("div", { className: "max-w-7xl mx-auto", children: [e.jsxs("div", { className: "flex items-center justify-between mb-8", children: [e.jsxs("div", { children: [e.jsxs("h1", { className: "text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3", children: [e.jsx(q, { className: "w-7 h-7 text-primary-500" }), "\u77E5\u8BC6\u5E93\u7BA1\u7406"] }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-1", children: "\u7BA1\u7406\u60A8\u7684\u77E5\u8BC6\u5E93\u6587\u4EF6\uFF0C\u67E5\u770B\u4F7F\u7528\u7EDF\u8BA1" })] }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs("button", { onClick: r, className: "flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: [e.jsx(te, { className: "w-4 h-4" }), "\u4E0A\u4F20\u77E5\u8BC6\u5E93"] }), e.jsxs("button", { onClick: i, className: "flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors", children: [e.jsx(V, { className: "w-4 h-4" }), "\u95EE\u7B54\u52A9\u624B"] })] })] }), o && e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [e.jsx(I, { icon: q, label: "\u77E5\u8BC6\u5E93\u603B\u6570", value: o.totalCount, color: "bg-primary-500" }), e.jsx(I, { icon: V, label: "\u603B\u63D0\u95EE\u6B21\u6570", value: o.totalQuestionCount, color: "bg-indigo-500" }), e.jsx(I, { icon: ae, label: "\u603B\u8BBF\u95EE\u6B21\u6570", value: o.totalAccessCount, color: "bg-emerald-500" })] }), e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 mb-6", children: e.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [e.jsx("form", { onSubmit: ee, className: "flex-1 min-w-[200px]", children: e.jsxs("div", { className: "relative", children: [e.jsx(se, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }), e.jsx("input", { type: "text", value: d, onChange: (t) => {
    y(t.target.value), j(null), C("");
  }, placeholder: "\u641C\u7D22\u77E5\u8BC6\u5E93\u540D\u79F0...", className: "w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white" })] }) }), e.jsxs("div", { className: "relative", children: [e.jsxs("select", { value: m, onChange: (t) => {
    H(t.target.value), y(""), j(null);
  }, className: "appearance-none pl-4 pr-10 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white cursor-pointer", children: [e.jsx("option", { value: "time", children: "\u6309\u65F6\u95F4\u6392\u5E8F" }), e.jsx("option", { value: "size", children: "\u6309\u5927\u5C0F\u6392\u5E8F" }), e.jsx("option", { value: "access", children: "\u6309\u8BBF\u95EE\u6392\u5E8F" }), e.jsx("option", { value: "question", children: "\u6309\u63D0\u95EE\u6392\u5E8F" })] }), e.jsx(E, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })] }), e.jsxs("div", { className: "relative", children: [e.jsxs("select", { value: x || "", onChange: (t) => {
    j(t.target.value || null), y(""), C("");
  }, className: "appearance-none pl-4 pr-10 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white cursor-pointer", children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u5206\u7C7B" }), A.map((t) => e.jsx("option", { value: t, children: t }, t))] }), e.jsx(E, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })] }), e.jsxs("div", { className: "relative", children: [e.jsxs("select", { "aria-label": "\u5411\u91CF\u5316\u72B6\u6001", value: h, onChange: (t) => {
    C(t.target.value), y(""), j(null);
  }, className: "appearance-none pl-4 pr-10 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white cursor-pointer", children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u72B6\u6001" }), e.jsx("option", { value: "PENDING", children: "\u5F85\u5904\u7406" }), e.jsx("option", { value: "PROCESSING", children: "\u5904\u7406\u4E2D" }), e.jsx("option", { value: "COMPLETED", children: "\u5DF2\u5B8C\u6210" }), e.jsx("option", { value: "FAILED", children: "\u5931\u8D25" })] }), e.jsx(E, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })] })] }) }), e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden", children: w ? e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(L, { className: "w-8 h-8 text-primary-500 animate-spin" }) }) : g.length === 0 ? e.jsxs("div", { className: "text-center py-20", children: [e.jsx(re, { className: "w-16 h-16 text-slate-300 mx-auto mb-4" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u77E5\u8BC6\u5E93" }), e.jsx("button", { onClick: r, className: "mt-4 text-primary-500 hover:text-primary-600", children: "\u4E0A\u4F20\u7B2C\u4E00\u4E2A\u77E5\u8BC6\u5E93" })] }) : e.jsxs("table", { className: "w-full", children: [e.jsx("thead", { className: "bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u540D\u79F0" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5206\u7C7B" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5927\u5C0F" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u72B6\u6001" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u63D0\u95EE" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u4E0A\u4F20\u65F6\u95F4" }), e.jsx("th", { className: "text-right px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u64CD\u4F5C" })] }) }), e.jsx("tbody", { children: g.map((t, a) => e.jsxs(b.tr, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: a * 0.05 }, className: "border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors", children: [e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(le, { className: "w-5 h-5 text-slate-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-slate-800 dark:text-white", children: t.name }), e.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: t.originalFilename })] })] }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsx(ne, { mode: "wait", children: X === t.id ? e.jsxs(b.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2", children: [e.jsx("input", { ref: O, type: "text", value: F, onChange: (n) => f(n.target.value), onKeyDown: (n) => Y(n, t.id), placeholder: "\u8F93\u5165\u5206\u7C7B\u540D\u79F0", list: "category-suggestions", className: "w-24 px-2 py-1 text-sm border border-primary-300 dark:border-primary-600 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white", disabled: N }), e.jsx("datalist", { id: "category-suggestions", children: A.map((n) => e.jsx("option", { value: n }, n)) }), e.jsx("button", { onClick: () => U(t.id), disabled: N, className: "p-1 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors disabled:opacity-50", title: "\u4FDD\u5B58", children: N ? e.jsx(L, { className: "w-4 h-4 animate-spin" }) : e.jsx(oe, { className: "w-4 h-4" }) }), e.jsx("button", { onClick: G, disabled: N, className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 rounded transition-colors disabled:opacity-50", title: "\u53D6\u6D88", children: e.jsx(ie, { className: "w-4 h-4" }) })] }, "editing") : e.jsxs(b.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2 group/category", children: [t.category ? e.jsx("span", { className: "px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-sm", children: t.category }) : e.jsx("span", { className: "text-slate-400 dark:text-slate-500 text-sm", children: "\u672A\u5206\u7C7B" }), e.jsx("button", { onClick: () => W(t), className: "p-1 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded opacity-0 group-hover/category:opacity-100 transition-all", title: "\u7F16\u8F91\u5206\u7C7B", children: e.jsx(ce, { className: "w-3.5 h-3.5" }) })] }, "display") }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-600 dark:text-slate-300", children: ge(t.fileSize) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(je, { status: t.vectorStatus }), e.jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300", children: ve(t.vectorStatus) })] }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-600 dark:text-slate-300", children: t.questionCount }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-500 dark:text-slate-400", children: ye(t.uploadedAt) }), e.jsx("td", { className: "px-6 py-4 text-right", children: e.jsxs("div", { className: "flex items-center justify-end gap-1", children: [e.jsx("button", { onClick: () => J(t), className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors", title: "\u4E0B\u8F7D", children: e.jsx(de, { className: "w-4 h-4" }) }), (t.vectorStatus === "FAILED" || t.vectorStatus === "COMPLETED") && e.jsx("button", { onClick: () => Z(t.id), disabled: T === t.id, className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u91CD\u65B0\u5411\u91CF\u5316", children: e.jsx(xe, { className: `w-4 h-4 ${T === t.id ? "animate-spin" : ""}` }) }), e.jsx("button", { onClick: () => k(t), className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors", title: "\u5220\u9664", children: e.jsx(me, { className: "w-4 h-4" }) })] }) })] }, t.id)) })] }) }), e.jsx(pe, { open: v !== null, item: v, itemType: "\u77E5\u8BC6\u5E93", loading: Q, onConfirm: _, onCancel: () => k(null) })] });
}
export {
  De as default
};
