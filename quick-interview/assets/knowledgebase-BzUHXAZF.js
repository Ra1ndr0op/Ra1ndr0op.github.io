import { g as $, A as E, p as f, a as p, r as a } from "./index-BZ3exKah.js";
function B(e) {
  return /^https?:\/\//i.test(e) ? e : `${E}${e}`;
}
function w(e) {
  return e.toLowerCase().includes("json");
}
async function y(e) {
  const t = e.headers.get("content-type") ?? "";
  if (w(t)) try {
    return await e.json();
  } catch {
    return null;
  }
  try {
    return await e.text();
  } catch {
    return null;
  }
}
async function C(e) {
  const t = await y(e), n = await f(t);
  return n ? new Error(n.message || `\u8BF7\u6C42\u5931\u8D25 (${e.status})`) : typeof t == "string" && t.trim() ? new Error(t.trim()) : new Error(`\u8BF7\u6C42\u5931\u8D25 (${e.status})`);
}
async function q(e) {
  if (!e.ok) throw await C(e);
  const t = e.headers.get("content-type") ?? "";
  if (!w(t)) return;
  const n = await y(e), r = await f(n), s = p(r);
  throw s || new Error("\u670D\u52A1\u7AEF\u672A\u8FD4\u56DE\u6D41\u5F0F\u6570\u636E");
}
function m(e) {
  const t = e.trim();
  if (!t.startsWith("{")) return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
function u(e, t) {
  if (e === null || typeof e != "object" || !(t in e)) return null;
  const n = e[t];
  return typeof n == "string" ? n : null;
}
function b(e) {
  const t = p(e);
  if (t) return t;
  const n = u(e, "type") ?? u(e, "event") ?? u(e, "status");
  return !n || !["error", "failed", "failure"].includes(n.toLowerCase()) ? null : new Error(u(e, "message") ?? u(e, "error") ?? "\u8BF7\u6C42\u5931\u8D25");
}
function L(e) {
  const t = m(e);
  if (!t) return;
  const n = b(t);
  if (n) throw n;
}
function h(e) {
  return e.endsWith("\r") ? e.slice(0, -1) : e;
}
function k(e, t) {
  if (!e.startsWith("data:")) return null;
  let n = e.substring(5);
  return t && n.startsWith(" ") && (n = n.substring(1)), n.length === 0 ? `
` : n;
}
function S(e, t) {
  L(e);
  const n = t.unescapeEscapedNewlines ? e.replace(/\\n/g, `
`).replace(/\\r/g, "\r") : e;
  t.onMessage(n);
}
function g(e, t) {
  const n = k(h(e), t.trimDataPrefixSpace ?? true);
  n !== null && S(n, t);
}
function P(e, t, n) {
  const r = e.split(`
`), s = t ? "" : r.pop() ?? "";
  for (const i of r) g(i, n);
  return t && s && g(s, n), s;
}
function c(e, t) {
  if (!e.trim()) return;
  const n = [];
  let r = null;
  for (const i of e.split(`
`)) {
    const o = h(i);
    if (o.startsWith("event:")) {
      r = o.substring(6).trim();
      continue;
    }
    const l = k(o, t.trimDataPrefixSpace ?? false);
    l !== null && n.push(l);
  }
  if (n.length === 0) return;
  const s = n.join(t.dataJoiner ?? `
`);
  if ((r == null ? void 0 : r.toLowerCase()) === "error") {
    const i = m(s);
    throw (i ? b(i) : null) ?? new Error(s.trim() || "\u8BF7\u6C42\u5931\u8D25");
  }
  S(s, t);
}
function x(e, t, n) {
  let r = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), s = r.indexOf(`

`);
  for (; s !== -1; ) {
    const i = r.substring(0, s);
    c(i, n), r = r.substring(s + 2), s = r.indexOf(`

`);
  }
  if (!t) {
    const i = r.indexOf(`
`);
    if (i !== -1 && r.substring(0, i).startsWith("data:")) return c(r.substring(0, i), n), r.substring(i + 1);
  }
  return t && r.trim() ? (c(r, n), "") : r;
}
function d(e, t, n) {
  return n.parseMode === "event" ? x(e, t, n) : P(e, t, n);
}
async function R(e, t) {
  var _a;
  const n = (_a = e.body) == null ? void 0 : _a.getReader();
  if (!n) throw new Error("\u65E0\u6CD5\u83B7\u53D6\u54CD\u5E94\u6D41");
  const r = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: i, value: o } = await n.read();
    if (i) {
      s += r.decode(), d(s, true, t);
      return;
    }
    s += r.decode(o, { stream: true }), s = d(s, false, t);
  }
}
async function Q(e) {
  try {
    const t = await fetch(B(e.url), e.init);
    await q(t), await R(t, e), e.onComplete();
  } catch (t) {
    e.onError(new Error($(t)));
  }
}
const U = { async uploadKnowledgeBase(e, t, n) {
  const r = new FormData();
  return r.append("file", e), t && r.append("name", t), n && r.append("category", n), a.upload("/api/knowledgebase/upload", r);
}, async downloadKnowledgeBase(e) {
  return a.download(`/api/knowledgebase/${e}/download`);
}, async getAllKnowledgeBases(e, t) {
  const n = new URLSearchParams();
  e && n.append("sortBy", e), t && n.append("vectorStatus", t);
  const r = n.toString();
  return a.get(`/api/knowledgebase/list${r ? `?${r}` : ""}`);
}, async getKnowledgeBase(e, t) {
  return a.get(`/api/knowledgebase/${e}`, { signal: t });
}, async deleteKnowledgeBase(e) {
  return a.delete(`/api/knowledgebase/${e}`);
}, async getAllCategories() {
  return a.get("/api/knowledgebase/categories");
}, async getByCategory(e) {
  return a.get(`/api/knowledgebase/category/${encodeURIComponent(e)}`);
}, async getUncategorized() {
  return a.get("/api/knowledgebase/uncategorized");
}, async updateCategory(e, t) {
  return a.put(`/api/knowledgebase/${e}/category`, { category: t });
}, async search(e) {
  return a.get(`/api/knowledgebase/search?keyword=${encodeURIComponent(e)}`);
}, async getStatistics() {
  return a.get("/api/knowledgebase/stats");
}, async revectorize(e) {
  return a.post(`/api/knowledgebase/${e}/revectorize`);
}, async generateQuestions(e, t) {
  return a.post(`/api/knowledgebase/${e}/questions/generate`, t);
}, async getQuestionGenerationStatus(e) {
  return a.get(`/api/knowledgebase/${e}/questions/generation-status`);
}, async listQuestions(e, t) {
  const n = new URLSearchParams();
  t && Object.entries(t).forEach(([s, i]) => {
    i && n.append(s, i);
  });
  const r = n.toString() ? `?${n.toString()}` : "";
  return a.get(`/api/knowledgebase/${e}/questions${r}`);
}, async listCategories(e) {
  return a.get(`/api/knowledgebase/${e}/questions/categories`);
}, async createQuestion(e, t) {
  return a.post(`/api/knowledgebase/${e}/questions`, t);
}, async updateQuestion(e, t) {
  return a.put(`/api/knowledgebase/questions/${e}`, t);
}, async updateQuestionStatus(e, t) {
  return a.put(`/api/knowledgebase/questions/${e}/status`, { status: t });
}, async deleteQuestion(e) {
  return a.delete(`/api/knowledgebase/questions/${e}`);
}, async createInterviewSession(e) {
  return a.post("/api/knowledgebase-interviews/sessions", e);
}, async getInterviewCapacity(e, t) {
  var _a;
  const n = new URLSearchParams({ difficulty: t.difficulty, mainQuestionCount: String(t.mainQuestionCount) });
  return ((_a = t.category) == null ? void 0 : _a.trim()) && n.set("category", t.category.trim()), a.get(`/api/knowledgebase/${e}/interview-capacity?${n.toString()}`);
}, async queryKnowledgeBase(e) {
  return a.post("/api/knowledgebase/query", e, { timeout: 18e4 });
}, async queryKnowledgeBaseStream(e, t, n, r) {
  return Q({ url: "/api/knowledgebase/query/stream", init: { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }, onMessage: t, onComplete: n, onError: r, parseMode: "line", trimDataPrefixSpace: true });
} };
export {
  U as k,
  Q as s
};
