import { j as e, A as C, m as u, S as g, X as S, L as T } from "./ui-vendor-Icq6OStM.js";
import { r as d } from "./react-vendor-C54eoJNz.js";
const E = [{ value: "", label: "\u5168\u90E8" }, { value: "DRAFT", label: "\u8349\u7A3F" }, { value: "ACTIVE", label: "\u5DF2\u542F\u7528" }, { value: "ARCHIVED", label: "\u5DF2\u5F52\u6863" }, { value: "STALE", label: "\u5DF2\u8FC7\u671F" }], y = [{ value: "junior", label: "\u6821\u62DB" }, { value: "mid", label: "\u4E2D\u7EA7" }, { value: "senior", label: "\u9AD8\u7EA7" }], D = [1, 3, 5, 8, 10], I = [0, 1, 2, 3], O = [3, 5, 10, 15], w = [1, 2, 3, 5], x = "w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500", U = "mid", L = 3;
function $(a) {
  var _a;
  return ((_a = E.find((t) => t.value === a)) == null ? void 0 : _a.label) || a;
}
function G(a) {
  var _a;
  return ((_a = y.find((t) => t.value === a)) == null ? void 0 : _a.label) || a;
}
function A(a, t) {
  return a.find((l) => l.followUpCount === t) ?? null;
}
function Q(a, t, l) {
  const r = A(a, t);
  if (!r) return "\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u914D\u7F6E\u7684\u53EF\u7528\u9898\u6570\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
  if (r.selectable) return `\u5F53\u524D\u6761\u4EF6\u53EF\u7528 ${r.availableQuestionCount} \u9053\u4E3B\u95EE\u9898\u3002`;
  const n = a.filter((o) => o.availableQuestionCount >= l);
  if (n.length === 0) return `\u5F53\u524D\u4EC5\u6709 ${r.availableQuestionCount} \u9053\u9898\u5305\u542B\u81F3\u5C11 ${t} \u4E2A\u8FFD\u95EE\uFF0C\u65E0\u6CD5\u62BD\u53D6 ${l} \u9053\u4E3B\u95EE\u9898\u3002\u5F53\u524D\u9898\u91CF\u4E0B\u6CA1\u6709\u8DB3\u591F\u7684\u5DF2\u542F\u7528\u4E3B\u95EE\u9898\uFF0C\u8BF7\u51CF\u5C11\u4E3B\u95EE\u9898\u6570\u6216\u8865\u5145\u9898\u5E93\u3002`;
  const i = n.reduce((o, c) => Math.max(o, c.followUpCount), 0);
  return `\u5F53\u524D\u4EC5\u6709 ${r.availableQuestionCount} \u9053\u9898\u5305\u542B\u81F3\u5C11 ${t} \u4E2A\u8FFD\u95EE\uFF0C\u65E0\u6CD5\u62BD\u53D6 ${l} \u9053\u4E3B\u95EE\u9898\u3002\u5728\u5F53\u524D\u9898\u91CF\u4E0B\uFF0C\u6BCF\u9898\u6700\u591A\u53EF\u4E25\u683C\u4FDD\u8BC1 ${i} \u4E2A\u8FFD\u95EE\u3002`;
}
function M(a, t) {
  return t == null || a >= t ? null : `\u8FFD\u95EE\u4E0D\u8DB3\uFF1A\u5B9E\u9645 ${a} / \u76EE\u6807 ${t}`;
}
function R({ open: a, knowledgeBaseName: t, defaultDifficulty: l = U, defaultCategoryLimit: r = L, initialConfig: n, submitting: i, error: o, onClose: c, onSubmit: k }) {
  const [m, b] = d.useState(l), [p, h] = d.useState(5), [N, f] = d.useState(2), [v, j] = d.useState(r);
  return d.useEffect(() => {
    a && (b((n == null ? void 0 : n.difficulty) || l), h((n == null ? void 0 : n.questionCount) || 5), f((n == null ? void 0 : n.followUpCount) ?? 2), j((n == null ? void 0 : n.categoryLimit) || r));
  }, [a, l, r, n]), e.jsx(C, { children: a && e.jsxs(e.Fragment, { children: [e.jsx(u.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: c, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(u.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (s) => s.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full", children: [e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(g, { className: "w-5 h-5 text-primary-500" }), e.jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-white", children: "\u751F\u6210\u9898\u76EE" })] }), e.jsx("button", { type: "button", onClick: c, disabled: i, className: "p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50", children: e.jsx(S, { className: "w-5 h-5" }) })] }), e.jsxs("div", { className: "px-6 py-5 space-y-4", children: [e.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u57FA\u4E8E\u77E5\u8BC6\u5E93 ", e.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-200", children: t }), " \u7684\u5185\u5BB9\uFF0C \u6309\u96BE\u5EA6\u548C\u65B9\u5411\u751F\u6210\u8349\u7A3F\u9898\u3002\u9762\u8BD5\u65B9\u5411\u7531\u6A21\u578B\u57FA\u4E8E\u77E5\u8BC6\u5E93\u5185\u5BB9\u81EA\u52A8\u5F52\u7C7B\uFF0C\u5E76\u4F18\u5148\u590D\u7528\u5DF2\u6709\u65B9\u5411\u3002"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u96BE\u5EA6" }), e.jsx("select", { value: m, onChange: (s) => b(s.target.value), className: x, children: y.map((s) => e.jsx("option", { value: s.value, children: s.label }, s.value)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u9898\u91CF" }), e.jsx("select", { value: p, onChange: (s) => h(parseInt(s.target.value, 10)), className: x, children: O.map((s) => e.jsxs("option", { value: s, children: [s, " \u9898"] }, s)) })] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u65B9\u5411\u4E0A\u9650" }), e.jsx("select", { value: v, onChange: (s) => j(parseInt(s.target.value, 10)), className: x, children: w.map((s) => e.jsxs("option", { value: s, children: [s, " \u4E2A"] }, s)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u6BCF\u9898\u8FFD\u95EE\u6570" }), e.jsx("select", { value: N, onChange: (s) => f(parseInt(s.target.value, 10)), className: x, children: I.map((s) => e.jsxs("option", { value: s, children: [s, " \u4E2A"] }, s)) })] })] }), o && e.jsx("p", { className: "text-sm text-red-500", children: o })] }), e.jsxs("div", { className: "flex gap-3 justify-end px-6 py-4 border-t border-slate-100 dark:border-slate-700", children: [e.jsx("button", { type: "button", onClick: c, disabled: i, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50", children: "\u53D6\u6D88" }), e.jsxs(u.button, { type: "button", onClick: () => k({ difficulty: m, questionCount: p, followUpCount: N, categoryLimit: v }), disabled: i, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "px-5 py-2.5 inline-flex items-center gap-2 text-white rounded-xl font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", children: [i ? e.jsx(T, { className: "w-4 h-4 animate-spin" }) : e.jsx(g, { className: "w-4 h-4" }), i ? "\u63D0\u4EA4\u4E2D\u2026" : "\u5F00\u59CB\u751F\u6210"] })] })] }) })] }) });
}
function _(a) {
  return a === "QUEUED" || a === "PROCESSING";
}
function Y(a, t, l) {
  return l && _(a) && t === "COMPLETED";
}
function q(a) {
  switch (a.questionGenStatus) {
    case "QUEUED":
      return { tone: "info", text: "\u4EFB\u52A1\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u7B49\u5F85\u751F\u6210\u9898\u76EE\u2026" };
    case "PROCESSING":
      return { tone: "info", text: "\u6B63\u5728\u751F\u6210\u9898\u76EE\uFF0C\u671F\u95F4\u53EF\u4EE5\u7EE7\u7EED\u7BA1\u7406\u5DF2\u6709\u9898\u76EE\u2026" };
    case "COMPLETED":
      return { tone: a.skippedCount > 0 ? "warning" : "success", text: a.message || `\u5DF2\u751F\u6210 ${a.savedCount} \u9053\u9898\uFF0C\u8DF3\u8FC7 ${a.skippedCount} \u9053\u9898` };
    case "FAILED":
      return { tone: "error", text: "\u9898\u76EE\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" };
    case "NONE":
    default:
      return null;
  }
}
export {
  U as D,
  I as F,
  R as G,
  x as I,
  D as M,
  E as S,
  y as a,
  Q as b,
  L as c,
  M as d,
  $ as e,
  G as f,
  A as g,
  q as h,
  _ as i,
  Y as s
};
