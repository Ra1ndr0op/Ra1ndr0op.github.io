import { j as e, A as Y, m as P, a0 as B, X as z, L as U, n as H, D as $, a1 as V, S as W, l as X, a2 as J, o as Z, P as ee, B as te, a3 as se } from "./ui-vendor-Icq6OStM.js";
import { r as a, b as ae } from "./react-vendor-C54eoJNz.js";
import { k as I } from "./knowledgebase-BzUHXAZF.js";
import { D as Q, g as K, I as E, a as le, M as re, F as ne, b as ie, i as _, G as oe, c as ce } from "./questionGenerationStatus-B5zRwPEQ.js";
import "./index-BZ3exKah.js";
import "./syntax-highlighter-aNFqcRiR.js";
function de({ open: l, knowledgeBase: r, defaultDifficulty: d = Q, starting: b, error: v, onClose: i, onStart: T }) {
  const [n, N] = a.useState(""), [c, x] = a.useState(d), [p, h] = a.useState(5), [j, f] = a.useState(1), [u, y] = a.useState(null), [k, L] = a.useState(false), [q, w] = a.useState("");
  a.useEffect(() => {
    if (!l || !r) {
      y(null), w("");
      return;
    }
    N(""), x(d), h(5), f(1);
  }, [l, r, d]), a.useEffect(() => {
    if (!l || !r) return;
    let s = false;
    return L(true), y(null), w(""), I.getInterviewCapacity(r.id, { category: n || void 0, difficulty: c, mainQuestionCount: p }).then((g) => {
      s || y(g);
    }).catch((g) => {
      s || w(g instanceof Error ? g.message : "\u52A0\u8F7D\u9762\u8BD5\u5BB9\u91CF\u5931\u8D25");
    }).finally(() => {
      s || L(false);
    }), () => {
      s = true;
    };
  }, [l, r, n, c, p]);
  const C = (u == null ? void 0 : u.followUpOptions) ?? [], O = K(C, j), G = (O == null ? void 0 : O.availableQuestionCount) ?? 0, A = (O == null ? void 0 : O.selectable) === true && !k, D = (u == null ? void 0 : u.categories) ?? [], M = n && !D.some((s) => s.category === n);
  return e.jsx(Y, { children: l && e.jsxs(e.Fragment, { children: [e.jsx(P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: i, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(P.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (s) => s.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full", children: [e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(B, { className: "w-5 h-5 text-primary-500" }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-white", children: "\u5F00\u59CB\u77E5\u8BC6\u5E93\u9762\u8BD5" }), e.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5", children: ["\u4EC5\u4ECE ", e.jsx("span", { className: "font-medium", children: r == null ? void 0 : r.name }), " \u7684\u5DF2\u542F\u7528\u9898\u76EE\u62BD\u9898"] })] })] }), e.jsx("button", { type: "button", onClick: i, disabled: b, className: "p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50", children: e.jsx(z, { className: "w-5 h-5" }) })] }), e.jsxs("div", { className: "px-6 py-5 space-y-4", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u9762\u8BD5\u65B9\u5411" }), e.jsxs("select", { value: n, onChange: (s) => N(s.target.value), className: E, disabled: k, children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u65B9\u5411" }), M && e.jsxs("option", { value: n, children: [n, "\uFF08\u5F53\u524D\u96BE\u5EA6 0 \u9898\uFF09"] }), D.map((s) => e.jsxs("option", { value: s.category, children: [s.category, "\uFF08", s.availableQuestionCount, " \u9898\uFF09"] }, s.category))] })] }), e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u96BE\u5EA6" }), e.jsx("select", { value: c, onChange: (s) => x(s.target.value), className: E, children: le.map((s) => e.jsx("option", { value: s.value, children: s.label }, s.value)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u4E3B\u95EE\u9898\u6570" }), e.jsx("select", { value: p, onChange: (s) => h(parseInt(s.target.value, 10)), className: E, children: re.map((s) => e.jsxs("option", { value: s, children: [s, " \u9053"] }, s)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u6BCF\u9898\u8FFD\u95EE" }), e.jsx("select", { value: j, onChange: (s) => f(parseInt(s.target.value, 10)), className: E, children: ne.map((s) => {
    const g = K(C, s), t = g ? `${s} \u4E2A\uFF08${g.availableQuestionCount} \u9053\u9898\u53EF\u7528\uFF09` : `${s} \u4E2A`;
    return e.jsx("option", { value: s, disabled: !(g == null ? void 0 : g.selectable), children: t }, s);
  }) })] })] }), e.jsxs("div", { className: "rounded-lg bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300", children: [k ? e.jsxs("span", { className: "inline-flex items-center gap-2", children: [e.jsx(U, { className: "w-4 h-4 animate-spin" }), " \u6B63\u5728\u7EDF\u8BA1\u53EF\u7528\u9898\u76EE\u2026"] }) : e.jsxs(e.Fragment, { children: ["\u5F53\u524D\u6761\u4EF6\u53EF\u7528", " ", e.jsx("span", { className: `font-bold ${A ? "text-primary-600 dark:text-primary-400" : "text-red-500"}`, children: G }), " ", "\u9053\u4E3B\u95EE\u9898", !A && e.jsx("span", { className: "block mt-1 text-xs text-red-500", children: ie(C, j, p) })] }), q && e.jsx("p", { className: "mt-1 text-xs text-red-500", children: q })] }), v && e.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-500", children: [e.jsx(H, { className: "w-4 h-4 mt-0.5 shrink-0" }), e.jsx("span", { children: v })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end px-6 py-4 border-t border-slate-100 dark:border-slate-700", children: [e.jsx("button", { type: "button", onClick: i, disabled: b, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50", children: "\u53D6\u6D88" }), e.jsxs(P.button, { type: "button", onClick: () => T({ category: n, difficulty: c, mainQuestionCount: p, followUpCount: j }), disabled: !A || b || k, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "px-5 py-2.5 inline-flex items-center gap-2 text-white rounded-xl font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", children: [b ? e.jsx(U, { className: "w-4 h-4 animate-spin" }) : e.jsx(B, { className: "w-4 h-4" }), b ? "\u521B\u5EFA\u4E2D\u2026" : "\u5F00\u59CB\u9762\u8BD5"] })] })] }) })] }) });
}
const R = { total: 0, draft: 0, active: 0, archived: 0 };
function me(l) {
  return l.reduce((r, d) => (r.total += 1, d.status === "DRAFT" ? r.draft += 1 : d.status === "ACTIVE" ? r.active += 1 : d.status === "ARCHIVED" && (r.archived += 1), r), { ...R });
}
function xe({ kb: l, onStart: r, onGenerate: d, onManage: b }) {
  const v = a.useRef(null), [i, T] = a.useState(null), [n, N] = a.useState(false);
  a.useEffect(() => {
    const p = v.current;
    if (!p) return;
    let h = false;
    const j = () => {
      N(true), I.listQuestions(l.id).then((u) => {
        h || T(me(u));
      }).catch(() => {
        h || T({ ...R });
      }).finally(() => {
        h || N(false);
      });
    };
    if (typeof IntersectionObserver > "u") return j(), () => {
      h = true;
    };
    const f = new IntersectionObserver((u) => {
      u.some((y) => y.isIntersecting) && (f.disconnect(), j());
    }, { rootMargin: "200px" });
    return f.observe(p), () => {
      h = true, f.disconnect();
    };
  }, [l.id]);
  const c = n || !i ? { total: "\u2013", draft: "\u2013", active: "\u2013", archived: "\u2013" } : i, x = _(l.questionGenStatus);
  return e.jsxs("div", { ref: v, className: "flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow", children: [e.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [e.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center shrink-0", children: e.jsx($, { className: "w-5 h-5" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white truncate", children: l.name }), e.jsx("p", { className: "text-xs text-slate-400 truncate mt-0.5", children: l.originalFilename })] }), e.jsx("div", { className: `shrink-0 px-2 py-0.5 rounded text-xs font-medium ${x ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400" : i && i.active > 0 ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-400"}`, children: x ? l.questionGenStatus === "QUEUED" ? "\u7B49\u5F85\u751F\u6210" : "\u751F\u6210\u4E2D" : n ? "\u52A0\u8F7D\u4E2D" : i && i.active > 0 ? "\u53EF\u9762\u8BD5" : "\u672A\u542F\u7528" })] }), n ? e.jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-400 mb-4", children: [e.jsx(U, { className: "w-3 h-3 animate-spin" }), " \u7EDF\u8BA1\u9898\u76EE\u4E2D\u2026"] }) : e.jsxs("div", { className: "grid grid-cols-4 gap-2 mb-5 text-center", children: [e.jsx(F, { label: "\u603B\u6570", value: c.total }), e.jsx(F, { label: "\u8349\u7A3F", value: c.draft }), e.jsx(F, { label: "\u5DF2\u542F\u7528", value: c.active, highlight: !!i && i.active > 0 }), e.jsx(F, { label: "\u5DF2\u5F52\u6863", value: c.archived })] }), e.jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [e.jsxs("button", { onClick: () => r(l), disabled: !i || i.active === 0, className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap", children: [e.jsx(V, { className: "w-4 h-4" }), "\u5F00\u59CB\u9762\u8BD5"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [e.jsxs("button", { onClick: () => d(l), disabled: x, className: "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap", children: [x ? e.jsx(U, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(W, { className: "w-3.5 h-3.5" }), x ? "\u751F\u6210\u4E2D" : "\u751F\u6210\u9898\u76EE"] }), e.jsxs("button", { onClick: () => b(l), className: "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 whitespace-nowrap", children: [e.jsx(X, { className: "w-3.5 h-3.5" }), "\u7BA1\u7406\u9898\u5E93"] })] })] })] });
}
function F({ label: l, value: r, highlight: d = false }) {
  return e.jsxs("div", { className: "rounded-lg bg-slate-50 dark:bg-slate-900 py-2", children: [e.jsx("p", { className: `text-lg font-bold ${d ? "text-primary-600 dark:text-primary-400" : "text-slate-900 dark:text-white"}`, children: r }), e.jsx("p", { className: "text-xs text-slate-400", children: l })] });
}
const ue = [{ value: "time", label: "\u6309\u65F6\u95F4" }, { value: "name", label: "\u6309\u540D\u79F0" }, { value: "question", label: "\u6309\u9898\u76EE\u6570" }];
function ye() {
  const l = ae(), [r, d] = a.useState([]), [b, v] = a.useState(true), [i, T] = a.useState(""), [n, N] = a.useState("time"), [c, x] = a.useState(null), [p, h] = a.useState(false), [j, f] = a.useState(""), [u, y] = a.useState(null), [k, L] = a.useState(false), [q, w] = a.useState(""), C = a.useCallback(async () => {
    v(true);
    try {
      const t = await I.getAllKnowledgeBases(n === "question" ? "question" : "time", "COMPLETED");
      d(t);
    } finally {
      v(false);
    }
  }, [n]);
  a.useEffect(() => {
    C();
  }, [C]);
  const O = r.some((t) => _(t.questionGenStatus));
  a.useEffect(() => {
    if (!O) return;
    let t = false, o;
    const m = async () => {
      try {
        const S = await I.getAllKnowledgeBases(n === "question" ? "question" : "time", "COMPLETED");
        t || d(S);
      } finally {
        t || (o = setTimeout(m, 5e3));
      }
    };
    return o = setTimeout(m, 5e3), () => {
      t = true, o && clearTimeout(o);
    };
  }, [O, n]);
  const G = a.useMemo(() => {
    const t = i.trim().toLowerCase(), o = t ? r.filter((m) => m.name.toLowerCase().includes(t) || (m.originalFilename || "").toLowerCase().includes(t)) : [...r];
    switch (n) {
      case "name":
        o.sort((m, S) => m.name.localeCompare(S.name, "zh"));
        break;
      case "question":
        o.sort((m, S) => S.questionCount - m.questionCount);
        break;
      case "time":
      default:
        o.sort((m, S) => (S.uploadedAt || "").localeCompare(m.uploadedAt || ""));
        break;
    }
    return o;
  }, [r, i, n]), A = (t) => {
    x(t), f("");
  }, D = (t) => {
    _(t.questionGenStatus) || (y(t), w(""));
  }, M = (t) => {
    l(`/knowledgebase-interview/${t.id}/questions`);
  }, s = async (t) => {
    if (c) {
      h(true), f("");
      try {
        const o = await I.createInterviewSession({ knowledgeBaseId: c.id, category: t.category.trim() || void 0, difficulty: t.difficulty, mainQuestionCount: t.mainQuestionCount, followUpCount: t.followUpCount }), m = c.id;
        x(null), l(`/knowledgebase-interview/${o.sessionId}`, { state: { knowledgeBaseId: m } });
      } catch (o) {
        f(o instanceof Error ? o.message : "\u521B\u5EFA\u77E5\u8BC6\u5E93\u9762\u8BD5\u5931\u8D25");
      } finally {
        h(false);
      }
    }
  }, g = async (t) => {
    if (u) {
      L(true), w("");
      try {
        const o = await I.generateQuestions(u.id, { difficulty: t.difficulty, questionCount: t.questionCount, followUpCount: t.followUpCount, categoryLimit: t.categoryLimit });
        y(null), l(`/knowledgebase-interview/${u.id}/questions`, { state: { highlightStatus: "DRAFT", questionGenTaskId: o.questionGenTaskId } });
      } catch (o) {
        w(o instanceof Error ? o.message : "\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      } finally {
        L(false);
      }
    }
  };
  return e.jsxs("div", { className: "max-w-[1400px] mx-auto", children: [e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6", children: [e.jsxs("div", { children: [e.jsxs("h1", { className: "text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3", children: [e.jsx(J, { className: "w-7 h-7 text-primary-500" }), "\u77E5\u8BC6\u5E93\u9762\u8BD5"] }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-1", children: "\u9009\u62E9\u77E5\u8BC6\u5E93\u8FDB\u5165\u9762\u8BD5\uFF0C\u6216\u7EF4\u62A4\u9898\u5E93" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs("button", { onClick: C, className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 whitespace-nowrap", children: [e.jsx(Z, { className: "w-4 h-4" }), "\u5237\u65B0"] }), e.jsxs("button", { onClick: () => l("/knowledgebase/upload"), className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 whitespace-nowrap", children: [e.jsx(ee, { className: "w-4 h-4" }), "\u4E0A\u4F20\u77E5\u8BC6\u5E93"] })] })] }), e.jsxs("div", { className: "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 mb-6 flex flex-col sm:flex-row gap-3 sm:items-center", children: [e.jsxs("div", { className: "relative flex-1", children: [e.jsx(te, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), e.jsx("input", { value: i, onChange: (t) => T(t.target.value), className: `${E} pl-9`, placeholder: "\u6309\u540D\u79F0\u6216\u6587\u4EF6\u540D\u641C\u7D22" })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(se, { className: "w-4 h-4 text-slate-400 shrink-0" }), e.jsx("select", { value: n, onChange: (t) => N(t.target.value), className: `${E} sm:w-40`, children: ue.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) })] })] }), b ? e.jsx("div", { className: "flex justify-center py-24", children: e.jsx(U, { className: "w-8 h-8 animate-spin text-primary-500" }) }) : G.length === 0 ? e.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[320px] rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 gap-3", children: [e.jsx($, { className: "w-10 h-10" }), e.jsx("p", { className: "text-sm", children: i.trim() ? "\u6CA1\u6709\u5339\u914D\u7684\u77E5\u8BC6\u5E93" : "\u6682\u65E0\u5DF2\u5B8C\u6210\u77E5\u8BC6\u5E93\uFF0C\u5148\u4E0A\u4F20\u5E76\u7B49\u5F85\u5411\u91CF\u5316\u5B8C\u6210" })] }) : e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5", children: G.map((t) => e.jsx(xe, { kb: t, onStart: A, onGenerate: D, onManage: M }, t.id)) }), e.jsx(de, { open: c !== null, knowledgeBase: c, defaultDifficulty: Q, starting: p, error: j, onClose: () => {
    p || (x(null), f(""));
  }, onStart: s }), e.jsx(oe, { open: u !== null, knowledgeBaseName: (u == null ? void 0 : u.name) || "", defaultDifficulty: Q, defaultCategoryLimit: ce, submitting: k, error: q, onClose: () => {
    k || (y(null), w(""));
  }, onSubmit: g })] });
}
export {
  ye as default
};
