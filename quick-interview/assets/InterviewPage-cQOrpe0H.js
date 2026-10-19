import { j as e, m, a7 as Z } from "./ui-vendor-Icq6OStM.js";
import { r as n } from "./react-vendor-C54eoJNz.js";
import { i as C } from "./interview-B-X3T17C.js";
import { C as ee } from "./ConfirmDialog-CZ5WuzmS.js";
import { Y as te } from "./index-Brj8k8ut.js";
import { I as se, a as re } from "./InterviewPageHeader-DRXUWfBc.js";
import { C as z } from "./index-BZ3exKah.js";
import "./syntax-highlighter-aNFqcRiR.js";
function ne({ session: a, currentQuestion: i, messages: h, answer: d, onAnswerChange: f, onSubmit: p, isSubmitting: r, onShowCompleteConfirm: N }) {
  const I = n.useRef(null), y = n.useMemo(() => !a || !i ? 0 : (i.questionIndex + 1) / a.totalQuestions * 100, [a, i]), q = (o) => {
    o.key === "Enter" && (o.metaKey || o.ctrlKey) && p();
  };
  return e.jsxs("div", { className: "flex flex-col h-[calc(100vh-200px)] max-w-4xl mx-auto", children: [e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 mb-4 shadow-sm dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("span", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300", children: ["\u9898\u76EE ", i ? i.questionIndex + 1 : 0, " / ", a.totalQuestions] }), e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [Math.round(y), "%"] })] }), e.jsx("div", { className: "h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden", children: e.jsx(m.div, { className: "h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full", initial: { width: 0 }, animate: { width: `${y}%` }, transition: { duration: 0.3 } }) })] }), e.jsxs("div", { className: "flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-slate-900/50 overflow-hidden flex flex-col min-h-0 border border-slate-100 dark:border-slate-700", children: [e.jsx(te, { ref: I, data: h, initialTopMostItemIndex: h.length - 1, followOutput: "smooth", className: "flex-1", itemContent: (o, c) => e.jsx("div", { className: "pb-4 px-6 first:pt-6", children: e.jsx(se, { role: c.type === "interviewer" ? "interviewer" : "user", text: c.content, category: c.category }) }) }), e.jsx("div", { className: "border-t border-slate-200 dark:border-slate-600 p-4 bg-slate-50 dark:bg-slate-700/50", children: e.jsxs("div", { className: "flex gap-3", children: [e.jsx("textarea", { value: d, onChange: (o) => f(o.target.value), onKeyDown: q, placeholder: "\u8F93\u5165\u4F60\u7684\u56DE\u7B54... (Ctrl/Cmd + Enter \u63D0\u4EA4)", className: "flex-1 px-4 py-3 border border-slate-300 dark:border-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500", rows: 3, disabled: r }), e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsx(m.button, { onClick: p, disabled: !d.trim() || r, className: "px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2", whileHover: { scale: r || !d.trim() ? 1 : 1.02 }, whileTap: { scale: r || !d.trim() ? 1 : 0.98 }, children: r ? e.jsxs(e.Fragment, { children: [e.jsx(m.div, { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }), "\u63D0\u4EA4\u4E2D"] }) : e.jsxs(e.Fragment, { children: [e.jsx(Z, { className: "w-4 h-4" }), "\u63D0\u4EA4"] }) }), e.jsx(m.button, { onClick: () => N(true), disabled: r, className: "px-6 py-3 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm", whileHover: { scale: r ? 1 : 1.02 }, whileTap: { scale: r ? 1 : 0.98 }, children: "\u63D0\u524D\u4EA4\u5377" })] })] }) })] })] });
}
function B(a) {
  return a ? { type: "resume", sessionId: a } : { type: "create" };
}
function me({ resumeText: a, resumeId: i, targetId: h, taskId: d, sessionIdToResume: f, requestId: p, initialConfig: r, title: N = "\u6A21\u62DF\u9762\u8BD5", subtitle: I = "\u8BA4\u771F\u56DE\u7B54\u6BCF\u4E2A\u95EE\u9898\uFF0C\u5C55\u793A\u60A8\u7684\u5B9E\u529B", loadingText: y = "\u6B63\u5728\u751F\u6210\u9762\u8BD5\u9898\u76EE...", onBack: q, onSessionCreated: o, onInterviewComplete: c }) {
  const [l, F] = n.useState(null), [b, A] = n.useState(null), [O, S] = n.useState([]), [w, M] = n.useState(""), [T, v] = n.useState(false), [K, u] = n.useState(""), [V, j] = n.useState(false), [P, E] = n.useState(false), W = n.useRef(false), Y = (r == null ? void 0 : r.questionCount) ?? 8, U = (r == null ? void 0 : r.llmProvider) ?? "", L = (r == null ? void 0 : r.skillId) ?? "java-backend", $ = (r == null ? void 0 : r.difficulty) ?? "mid", G = r == null ? void 0 : r.customCategories, J = r == null ? void 0 : r.jdText;
  n.useEffect(() => {
    if (!W.current) {
      W.current = true;
      const t = B(f);
      t.type === "resume" ? H(t.sessionId) : D();
    }
  }, []);
  const D = async () => {
    j(true), u("");
    try {
      const t = await C.createSession({ resumeText: a, questionCount: Y, resumeId: i, targetId: h, taskId: d, forceCreate: true, llmProvider: U, skillId: L, difficulty: $, customCategories: L === z ? G : void 0, jdText: L === z ? J : void 0, requestId: p });
      R(t), o == null ? void 0 : o(t.sessionId);
    } catch (t) {
      u("\u521B\u5EFA\u9762\u8BD5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(t);
    } finally {
      j(false);
    }
  }, H = async (t) => {
    j(true), u("");
    try {
      const s = await C.getSession(t);
      R(s);
      const x = s.questions[s.currentQuestionIndex];
      (x == null ? void 0 : x.userAnswer) && M(x.userAnswer);
    } catch (s) {
      u("\u6062\u590D\u9762\u8BD5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(s);
    } finally {
      j(false);
    }
  }, R = (t) => {
    if (F(t), t.questions.length > 0) {
      const s = Math.min(t.currentQuestionIndex, t.questions.length - 1), x = t.questions[s];
      A(x);
      const Q = [];
      for (let g = 0; g <= s; g++) {
        const k = t.questions[g];
        Q.push({ type: "interviewer", content: k.question, category: k.category, questionIndex: g }), k.userAnswer && Q.push({ type: "user", content: k.userAnswer });
      }
      S(Q);
    }
  }, X = async () => {
    if (!w.trim() || !l || !b) return;
    v(true);
    const t = { type: "user", content: w };
    S((s) => [...s, t]);
    try {
      const s = await C.submitAnswer({ sessionId: l.sessionId, questionIndex: b.questionIndex, answer: w.trim() });
      M(""), s.hasNextQuestion && s.nextQuestion ? (A(s.nextQuestion), S((x) => [...x, { type: "interviewer", content: s.nextQuestion.question, category: s.nextQuestion.category, questionIndex: s.nextQuestion.questionIndex }])) : c();
    } catch (s) {
      u("\u63D0\u4EA4\u7B54\u6848\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(s);
    } finally {
      v(false);
    }
  }, _ = async () => {
    if (l) {
      v(true);
      try {
        await C.completeInterview(l.sessionId), E(false), c();
      } catch (t) {
        u("\u63D0\u524D\u4EA4\u5377\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(t);
      } finally {
        v(false);
      }
    }
  };
  return V ? e.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full mx-auto mb-4 animate-spin" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: y })] }) }) : K && !l ? e.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-red-500 dark:text-red-400 mb-4", children: K }), e.jsxs("div", { className: "flex gap-3 justify-center", children: [e.jsx("button", { onClick: () => {
    const t = B(f);
    t.type === "resume" ? H(t.sessionId) : D();
  }, className: "px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600", children: "\u91CD\u8BD5" }), e.jsx("button", { onClick: q, className: "px-5 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600", children: "\u8FD4\u56DE" })] })] }) }) : !l || !b ? null : e.jsxs("div", { className: "pb-10", children: [e.jsx(re, { title: N, subtitle: I, icon: e.jsxs("svg", { className: "w-6 h-6 text-white", viewBox: "0 0 24 24", fill: "none", children: [e.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }), e.jsx(m.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: e.jsx(ne, { session: l, currentQuestion: b, messages: O, answer: w, onAnswerChange: M, onSubmit: X, onCompleteEarly: _, isSubmitting: T, showCompleteConfirm: P, onShowCompleteConfirm: E }) }), e.jsx(ee, { open: P, title: "\u63D0\u524D\u4EA4\u5377", message: "\u786E\u5B9A\u8981\u63D0\u524D\u4EA4\u5377\u5417\uFF1F\u672A\u56DE\u7B54\u7684\u95EE\u9898\u5C06\u63090\u5206\u8BA1\u7B97\u3002", confirmText: "\u786E\u5B9A\u4EA4\u5377", cancelText: "\u53D6\u6D88", confirmVariant: "warning", loading: T, onConfirm: _, onCancel: () => E(false) })] });
}
export {
  me as default
};
