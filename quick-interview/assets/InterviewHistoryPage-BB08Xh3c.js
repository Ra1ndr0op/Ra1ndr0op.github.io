import { j as e, m as x, z as O, B as oe, p as pe, T as de, E as De, H as _, L as B, A as Te, F as $, M as me, I as Re, J as V, r as Pe, o as he, w as Oe, k as _e, n as ce, q as Be } from "./ui-vendor-Icq6OStM.js";
import { b as Fe, r } from "./react-vendor-C54eoJNz.js";
import { s as Ue, h as xe } from "./index-BZ3exKah.js";
import { i as Ge } from "./interview-B-X3T17C.js";
import { v as F } from "./voiceInterview-CdfvuQ4l.js";
import { f as Me, b as $e } from "./date-DBJmXC5z.js";
import { g as Ve } from "./score-3bjDqiWg.js";
import { s as Ke, g as ze } from "./voiceEvaluationStatus-B6NgctRI.js";
import { g as U } from "./voiceInterview-B6Enqy4T.js";
import { D as We } from "./DeleteConfirmDialog-BjfJUZ2-.js";
import { au as Qe, aw as qe, ax as He, ay as Je, az as Xe, av as Ye, aA as Ze } from "./LineChart-U85PVO6f.js";
import "./syntax-highlighter-aNFqcRiR.js";
import "./ConfirmDialog-CZ5WuzmS.js";
function fe(a) {
  return a === "COMPLETED" || a === "EVALUATED";
}
function h(a) {
  return a.evaluateStatus === "COMPLETED" || a.status === "EVALUATED";
}
function et(a) {
  return (a == null ? void 0 : a.trim()) || "\u5168\u90E8\u65B9\u5411";
}
function tt(a, u, d) {
  const i = d ? u : a, o = i.filter(h), b = o.reduce((y, n) => y + (n.overallScore ?? 0), 0);
  return { totalCount: i.length, completedCount: o.length, averageScore: o.length > 0 ? Math.round(b / o.length) : 0 };
}
const at = [{ value: "all", label: "\u5168\u90E8\u65F6\u95F4" }, { value: "7d", label: "\u6700\u8FD1 7 \u5929" }, { value: "30d", label: "\u6700\u8FD1 30 \u5929" }, { value: "90d", label: "\u6700\u8FD1 90 \u5929" }], st = [{ value: "all", label: "\u5168\u90E8\u72B6\u6001" }, { value: "inProgress", label: "\u8FDB\u884C\u4E2D" }, { value: "completed", label: "\u5DF2\u5B8C\u6210" }], lt = "\u5168\u90E8\u65B9\u5411", G = "__all_directions__";
function ue(a) {
  return a === "IN_PROGRESS" || a === "PAUSED";
}
function D(a) {
  return a.evaluateStatus === "PENDING" || a.evaluateStatus === "PROCESSING";
}
function z(a) {
  return a.evaluateStatus === "FAILED";
}
function ve(a) {
  return ze({ status: a.evaluateStatus, statusUpdatedAt: a.evaluateStatusUpdatedAt });
}
function K(a) {
  return a.type === "voice" && ve(a).retryable;
}
function rt({ item: a }) {
  return z(a) ? e.jsx(ce, { className: "w-4 h-4 text-red-500 dark:text-red-400" }) : K(a) ? e.jsx(ce, { className: "w-4 h-4 text-amber-500 dark:text-amber-400" }) : D(a) ? e.jsx(he, { className: "w-4 h-4 text-blue-500 dark:text-blue-400 animate-spin" }) : h(a) ? e.jsx(pe, { className: "w-4 h-4 text-green-500 dark:text-green-400" }) : a.status === "IN_PROGRESS" ? e.jsx(V, { className: "w-4 h-4 text-blue-500 dark:text-blue-400" }) : e.jsx(Be, { className: "w-4 h-4 text-yellow-500 dark:text-yellow-400" });
}
function nt(a) {
  return z(a) ? "\u8BC4\u4F30\u5931\u8D25" : a.type === "voice" && a.evaluateStatus ? ve(a).label : D(a) ? a.evaluateStatus === "PROCESSING" ? "\u8BC4\u4F30\u4E2D" : "\u7B49\u5F85\u8BC4\u4F30" : h(a) ? "\u5DF2\u5B8C\u6210" : a.status === "IN_PROGRESS" ? "\u8FDB\u884C\u4E2D" : a.status === "PAUSED" ? "\u5DF2\u6682\u505C" : fe(a.status) ? "\u5DF2\u63D0\u4EA4" : "\u5DF2\u521B\u5EFA";
}
function it(a) {
  if (!a) return "-";
  const u = Math.floor(a / 60), d = a % 60;
  return `${u}\u5206${d}\u79D2`;
}
function M({ icon: a, label: u, value: d, suffix: i, color: o }) {
  return e.jsx(x.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: `p-3 rounded-lg ${o}`, children: e.jsx(a, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: u }), e.jsxs("p", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: [d, i && e.jsx("span", { className: "text-base font-normal text-slate-400 dark:text-slate-500 ml-1", children: i })] })] })] }) });
}
function ot({ item: a }) {
  return a.sourceType === "KNOWLEDGE_BASE" ? e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium", children: [e.jsx($, { className: "w-3 h-3" }), "\u77E5\u8BC6\u5E93"] }) : a.type === "voice" ? e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium", children: [e.jsx(me, { className: "w-3 h-3" }), "\u8BED\u97F3"] }) : e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium", children: [e.jsx($, { className: "w-3 h-3" }), "\u6587\u5B57"] });
}
function dt(a, u) {
  if (a.length !== u.length) return false;
  for (let d = 0; d < a.length; d++) {
    const i = a[d], o = u[d];
    if (i.id !== o.id || i.status !== o.status || i.evaluateStatus !== o.evaluateStatus || i.evaluateStatusUpdatedAt !== o.evaluateStatusUpdatedAt || i.overallScore !== o.overallScore) return false;
  }
  return true;
}
function Nt({ onBack: a, onViewInterview: u, onRestartInterview: d, onContinueInterview: i, knowledgeBaseId: o }) {
  const b = Fe(), y = o ?? null, n = y !== null && !Number.isNaN(y), [p, ge] = r.useState([]), [E, W] = r.useState(true), [C, be] = r.useState(""), [A, ye] = r.useState("all"), [g, Q] = r.useState("all"), [j, q] = r.useState("all"), [k, H] = r.useState("all"), [J, X] = r.useState(null), [m, T] = r.useState(null), [Y, Z] = r.useState(null), [ee, te] = r.useState(null), f = r.useRef(null), ae = r.useRef([]), se = r.useRef(false), le = g !== "all" || j !== "all" || k !== "all", re = () => {
    Q("all"), q("all"), H("all");
  }, N = r.useCallback(async (t = false) => {
    t || W(true);
    try {
      se.current || (ae.current = await Ue.listSkills().catch(() => []), se.current = true);
      const l = ae.current, s = await je(l), w = n ? s.filter((c) => c.knowledgeBaseId === y) : s.filter((c) => c.sourceType !== "KNOWLEDGE_BASE"), Ae = (n ? [] : await ke()).map((c) => {
        const I = U(c.title, l);
        return I !== c.title ? { ...c, title: I } : c;
      }), L = [...w, ...Ae];
      L.sort((c, I) => new Date(I.createdAt).getTime() - new Date(c.createdAt).getTime()), ge((c) => {
        const I = L.some((Le) => Ke(Le.evaluateStatus));
        return t && dt(c, L) && !I ? c : L;
      });
    } catch (l) {
      console.error("\u52A0\u8F7D\u9762\u8BD5\u8BB0\u5F55\u5931\u8D25", l);
    } finally {
      t || W(false);
    }
  }, [n, y]);
  async function je(t) {
    try {
      return (await Ge.listSessions()).map((s) => ({ id: s.sessionId, type: "text", sourceType: s.sourceType, title: s.sourceType === "KNOWLEDGE_BASE" ? `${U(s.skillId, t)} \xB7 \u77E5\u8BC6\u5E93\u9762\u8BD5` : U(s.skillId, t), sessionId: s.sessionId, status: s.status, evaluateStatus: s.evaluateStatus ?? void 0, evaluateError: s.evaluateError ?? void 0, overallScore: s.overallScore, totalQuestions: s.totalQuestions, createdAt: s.createdAt, resumeId: s.resumeId ?? void 0, knowledgeBaseId: s.knowledgeBaseId ?? void 0, interviewCategory: s.interviewCategory ?? null }));
    } catch {
      return [];
    }
  }
  async function ke() {
    try {
      return (await F.getAllSessions()).map((l) => ({ id: `voice-${l.sessionId}`, type: "voice", title: l.roleType, sessionId: String(l.sessionId), status: l.status, evaluateStatus: l.evaluateStatus, evaluateError: l.evaluateError, evaluateStatusUpdatedAt: l.updatedAt, overallScore: null, actualDuration: l.actualDuration, createdAt: l.createdAt, voiceSessionId: l.sessionId }));
    } catch {
      return [];
    }
  }
  r.useEffect(() => {
    N();
  }, [N]), r.useEffect(() => {
    const t = p.some((l) => D(l));
    return t && !f.current ? f.current = window.setInterval(() => N(true), 3e3) : !t && f.current && (clearInterval(f.current), f.current = null), () => {
      f.current && (clearInterval(f.current), f.current = null);
    };
  }, [p, N]);
  const Ne = (t) => {
    t.type === "text" ? u(t.sessionId, t.resumeId) : t.voiceSessionId && (ue(t.status) ? b("/voice-interview", { state: { voiceSessionId: t.voiceSessionId } }) : b(`/voice-interview/${t.voiceSessionId}/evaluation`));
  }, we = (t, l) => {
    l.stopPropagation(), T(t);
  }, Se = async () => {
    if (m) {
      X(m.sessionId);
      try {
        m.type === "voice" && m.voiceSessionId ? await F.deleteSession(m.voiceSessionId) : await xe.deleteInterview(m.sessionId), await N(), T(null);
      } catch (t) {
        alert(t instanceof Error ? t.message : "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      } finally {
        X(null);
      }
    }
  }, Ie = async (t, l) => {
    l.stopPropagation(), Z(t);
    try {
      const s = await xe.exportInterviewPdf(t), w = window.URL.createObjectURL(s), S = document.createElement("a");
      S.href = w, S.download = `\u9762\u8BD5\u62A5\u544A_${t.slice(-8)}.pdf`, document.body.appendChild(S), S.click(), document.body.removeChild(S), window.URL.revokeObjectURL(w);
    } catch {
      alert("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    } finally {
      Z(null);
    }
  }, Ee = async (t, l) => {
    if (l.stopPropagation(), !!t.voiceSessionId) {
      te(t.voiceSessionId);
      try {
        await F.generateEvaluation(t.voiceSessionId), await N(true);
      } catch {
        alert("\u91CD\u65B0\u751F\u6210\u8BC4\u4F30\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      } finally {
        te(null);
      }
    }
  }, v = r.useMemo(() => p.filter((t) => {
    if (A !== "all" && t.type !== A || C && !t.title.toLowerCase().includes(C.toLowerCase())) return false;
    if (n) {
      if (g === G && t.interviewCategory || g !== "all" && g !== G && t.interviewCategory !== g) return false;
      if (j !== "all") {
        const l = j === "7d" ? 7 : j === "30d" ? 30 : 90, s = Date.now() - l * 24 * 60 * 60 * 1e3;
        if (new Date(t.createdAt).getTime() < s) return false;
      }
      if (k !== "all") {
        const l = h(t);
        if (k === "completed" && !l || k === "inProgress" && l) return false;
      }
    }
    return true;
  }), [p, A, C, n, g, j, k]), ne = r.useMemo(() => {
    const t = /* @__PURE__ */ new Set();
    let l = false;
    return p.forEach((s) => {
      s.interviewCategory ? t.add(s.interviewCategory) : l = true;
    }), { values: Array.from(t).sort((s, w) => s.localeCompare(w, "zh-CN")), hasUncategorized: l };
  }, [p]), R = r.useMemo(() => tt(p, v, n), [p, v, n]), P = r.useMemo(() => v.filter((t) => h(t) && t.overallScore !== null).map((t) => ({ name: Me(t.createdAt), score: t.overallScore || 0 })).reverse(), [v]), ie = n && le && p.length > 0 && v.length === 0, Ce = v.length === 0 && !ie;
  return e.jsxs(x.div, { className: "w-full", initial: { opacity: 0 }, animate: { opacity: 1 }, children: [e.jsxs("div", { className: "flex justify-between items-start mb-8 flex-wrap gap-6", children: [e.jsxs("div", { children: [e.jsxs(x.h1, { className: "text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, children: [e.jsx(O, { className: "w-7 h-7 text-primary-500" }), n ? "\u77E5\u8BC6\u5E93\u9762\u8BD5\u8BB0\u5F55" : "\u9762\u8BD5\u8BB0\u5F55"] }), e.jsx(x.p, { className: "text-slate-500 dark:text-slate-400 mt-1", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.1 }, children: n ? "\u67E5\u770B\u5F53\u524D\u77E5\u8BC6\u5E93\u7684\u9762\u8BD5\u8BB0\u5F55\u548C\u8868\u73B0\u8D8B\u52BF" : "\u67E5\u770B\u548C\u7BA1\u7406\u6240\u6709\u6A21\u62DF\u9762\u8BD5\u8BB0\u5F55" })] }), e.jsxs(x.div, { className: "flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-2.5 min-w-[280px] focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 dark:focus-within:ring-primary-900/30 transition-all", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, children: [e.jsx(oe, { className: "w-5 h-5 text-slate-400" }), e.jsx("input", { type: "text", placeholder: "\u641C\u7D22\u540D\u79F0...", value: C, onChange: (t) => be(t.target.value), className: "flex-1 outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 bg-transparent" })] })] }), !E && e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [e.jsx(M, { icon: O, label: "\u9762\u8BD5\u603B\u6570", value: R.totalCount, color: "bg-primary-500" }), e.jsx(M, { icon: pe, label: "\u5DF2\u5B8C\u6210", value: R.completedCount, color: "bg-emerald-500" }), e.jsx(M, { icon: de, label: "\u5E73\u5747\u5206\u6570", value: R.averageScore, suffix: "\u5206", color: "bg-indigo-500" })] }), n && P.length > 0 && e.jsxs(x.div, { className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 mb-8", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(de, { className: "w-5 h-5 text-primary-500" }), e.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u9762\u8BD5\u8868\u73B0\u8D8B\u52BF" })] }), e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5171 ", P.length, " \u573A\u7EC3\u4E60"] })] }), e.jsx("div", { className: "h-48", children: e.jsx(Qe, { width: "100%", height: "100%", children: e.jsxs(qe, { data: P, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [e.jsx(He, { strokeDasharray: "3 3", stroke: "#e2e8f0", className: "dark:stroke-slate-700" }), e.jsx(Je, { dataKey: "name", axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx(Xe, { domain: [0, 100], axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx(Ye, { formatter: (t) => [`${t} \u5206`, "\u5F97\u5206"] }), e.jsx(Ze, { type: "monotone", dataKey: "score", stroke: "#6366f1", strokeWidth: 3, dot: { fill: "#6366f1", strokeWidth: 2, r: 5 }, activeDot: { r: 8, fill: "#6366f1" } })] }) }) })] }), n && e.jsxs(x.div, { className: "flex items-center gap-3 flex-wrap bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 mb-6 shadow-sm", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, children: [e.jsx(De, { className: "w-4 h-4 text-slate-400 shrink-0" }), e.jsxs("select", { value: g, onChange: (t) => Q(t.target.value), "aria-label": "\u6309\u9762\u8BD5\u65B9\u5411\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: [e.jsx("option", { value: "all", children: "\u5168\u90E8\u8BB0\u5F55" }), ne.values.map((t) => e.jsx("option", { value: t, children: t }, t)), ne.hasUncategorized && e.jsx("option", { value: G, children: lt })] }), e.jsx("select", { value: j, onChange: (t) => q(t.target.value), "aria-label": "\u6309\u65F6\u95F4\u8303\u56F4\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: at.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) }), e.jsx("select", { value: k, onChange: (t) => H(t.target.value), "aria-label": "\u6309\u5B8C\u6210\u72B6\u6001\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: st.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) }), le && e.jsxs("button", { onClick: re, className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors", children: [e.jsx(_, { className: "w-3.5 h-3.5" }), "\u91CD\u7F6E\u7B5B\u9009"] })] }), !n && e.jsx("div", { className: "flex items-center gap-2 mb-6", children: [{ key: "all", label: "\u5168\u90E8" }, { key: "text", label: "\u6587\u5B57\u9762\u8BD5" }, { key: "voice", label: "\u8BED\u97F3\u9762\u8BD5" }].map((t) => e.jsx("button", { onClick: () => ye(t.key), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${A === t.key ? "bg-primary-500 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"}`, children: t.label }, t.key)) }), E && e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(B, { className: "w-8 h-8 text-primary-500 animate-spin" }) }), !E && ie && e.jsxs(x.div, { className: "text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, children: [e.jsx(oe, { className: "w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6CA1\u6709\u7B26\u5408\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u7684\u9762\u8BD5\u8BB0\u5F55" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6", children: "\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u9762\u8BD5\u65B9\u5411\u3001\u65F6\u95F4\u8303\u56F4\u6216\u5B8C\u6210\u72B6\u6001" }), e.jsxs("button", { onClick: re, className: "inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors", children: [e.jsx(_, { className: "w-4 h-4" }), "\u91CD\u7F6E\u7B5B\u9009"] })] }), !E && Ce && e.jsxs(x.div, { className: "text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, children: [e.jsx(O, { className: "w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: n ? "\u5F00\u59CB\u4E00\u6B21\u77E5\u8BC6\u5E93\u9762\u8BD5\u540E\uFF0C\u8BB0\u5F55\u5C06\u663E\u793A\u5728\u8FD9\u91CC" : "\u5F00\u59CB\u4E00\u6B21\u6A21\u62DF\u9762\u8BD5\u540E\uFF0C\u8BB0\u5F55\u5C06\u663E\u793A\u5728\u8FD9\u91CC" })] }), !E && v.length > 0 && e.jsx(x.div, { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: e.jsxs("table", { className: "w-full", children: [e.jsx("thead", { className: "bg-slate-50 dark:bg-slate-700/50 border-b border-slate-100 dark:border-slate-600", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u7C7B\u578B" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u540D\u79F0" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u72B6\u6001" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5F97\u5206" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u8BE6\u60C5" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u65F6\u95F4" }), e.jsx("th", { className: "text-right px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u64CD\u4F5C" })] }) }), e.jsx("tbody", { children: e.jsx(Te, { children: v.map((t, l) => e.jsxs(x.tr, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: l * 0.05 }, onClick: () => Ne(t), className: "border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group", children: [e.jsx("td", { className: "px-6 py-4", children: e.jsx(ot, { item: t }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [t.type === "text" ? e.jsx($, { className: "w-5 h-5 text-slate-400" }) : e.jsx(me, { className: "w-5 h-5 text-purple-400" }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx("p", { className: "font-medium text-slate-800 dark:text-white", children: t.title }), n && t.type === "text" && e.jsxs("span", { className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium", title: "\u9762\u8BD5\u65B9\u5411", children: [e.jsx(Re, { className: "w-3 h-3" }), et(t.interviewCategory)] })] }), e.jsxs("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: ["#", t.id.slice(-8)] })] })] }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(rt, { item: t }), e.jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300", children: nt(t) })] }) }), e.jsx("td", { className: "px-6 py-4", children: h(t) && t.overallScore !== null ? e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-16 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden", children: e.jsx(x.div, { className: `h-full ${Ve(t.overallScore)} rounded-full`, initial: { width: 0 }, animate: { width: `${t.overallScore}%` }, transition: { duration: 0.8, delay: l * 0.05 } }) }), e.jsx("span", { className: "font-bold text-slate-800 dark:text-white", children: t.overallScore })] }) : K(t) ? e.jsx("span", { className: "text-amber-600 dark:text-amber-400 text-sm", children: "\u53EF\u91CD\u65B0\u751F\u6210" }) : D(t) ? e.jsx("span", { className: "text-blue-500 dark:text-blue-400 text-sm", children: "\u751F\u6210\u4E2D..." }) : z(t) ? e.jsx("span", { className: "text-red-500 dark:text-red-400 text-sm", children: "\u5931\u8D25" }) : e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "-" }) }), e.jsx("td", { className: "px-6 py-4", children: t.type === "text" && t.totalQuestions != null ? e.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm", children: [t.totalQuestions, " \u9898"] }) : t.type === "voice" ? e.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: it(t.actualDuration) }) : e.jsx("span", { className: "text-slate-400", children: "-" }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-500 dark:text-slate-400", children: $e(t.createdAt) }), e.jsx("td", { className: "px-6 py-4 text-right", children: e.jsxs("div", { className: "flex items-center justify-end gap-1", children: [t.type === "text" && !fe(t.status) && !h(t) && i && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), t.sourceType === "KNOWLEDGE_BASE" ? b(`/knowledgebase-interview/${t.sessionId}`, { state: { knowledgeBaseId: t.knowledgeBaseId } }) : i(t.sessionId);
  }, className: "p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", title: "\u7EE7\u7EED\u9762\u8BD5", children: e.jsx(V, { className: "w-4 h-4" }) }), t.type === "voice" && ue(t.status) && t.voiceSessionId && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), b("/voice-interview", { state: { voiceSessionId: t.voiceSessionId } });
  }, className: "p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", title: "\u7EE7\u7EED\u9762\u8BD5", children: e.jsx(V, { className: "w-4 h-4" }) }), h(t) && t.type === "text" && e.jsx("button", { onClick: (s) => Ie(t.sessionId, s), disabled: Y === t.sessionId, className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u5BFC\u51FAPDF", children: Y === t.sessionId ? e.jsx(B, { className: "w-4 h-4 animate-spin" }) : e.jsx(Pe, { className: "w-4 h-4" }) }), h(t) && t.type === "text" && t.resumeId && d && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), d(t.resumeId);
  }, className: "p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors", title: "\u91CD\u65B0\u9762\u8BD5", children: e.jsx(_, { className: "w-4 h-4" }) }), K(t) && t.voiceSessionId && e.jsx("button", { onClick: (s) => Ee(t, s), disabled: ee === t.voiceSessionId, className: "p-2 text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u91CD\u65B0\u751F\u6210\u8BC4\u4F30", children: ee === t.voiceSessionId ? e.jsx(B, { className: "w-4 h-4 animate-spin" }) : e.jsx(he, { className: "w-4 h-4" }) }), e.jsx("button", { onClick: (s) => we(t, s), disabled: J === t.sessionId, className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u5220\u9664", children: e.jsx(Oe, { className: "w-4 h-4" }) }), e.jsx(_e, { className: "w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" })] }) })] }, t.id)) }) })] }) }), e.jsx(We, { open: m !== null, item: m ? { id: 0, sessionId: m.sessionId } : null, itemType: "\u9762\u8BD5\u8BB0\u5F55", loading: J !== null, onConfirm: Se, onCancel: () => T(null) })] });
}
export {
  Nt as default
};
