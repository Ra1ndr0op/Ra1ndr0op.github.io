import { j as t, M as Be, a8 as et, A as ze, m as Z, n as We, Y as tt, q as rt, a9 as st, aa as nt, ab as at } from "./ui-vendor-Icq6OStM.js";
import { r, b as ct, u as lt } from "./react-vendor-C54eoJNz.js";
import { I as Ne, a as it } from "./InterviewPageHeader-DRXUWfBc.js";
import { s as ot } from "./index-BZ3exKah.js";
import { g as ut } from "./voiceInterview-B6Enqy4T.js";
import { v as re, c as dt } from "./voiceInterview-CdfvuQ4l.js";
import "./syntax-highlighter-aNFqcRiR.js";
function ft({ isRecording: l, disabled: h = false, onRecordingChange: E, onAudioData: z, onSpeechStart: C, onSpeechEnd: I }) {
  const [O, _] = r.useState(0), N = r.useRef(null), d = r.useRef(null), T = r.useRef(null), M = r.useRef(null), P = r.useRef(null), V = r.useRef(null), q = r.useRef(null), x = r.useRef(true), G = r.useRef(false), i = r.useRef(false), R = 16e3, k = (f = true) => {
    var _a, _b;
    if (G.current = false, P.current) {
      try {
        P.current.pause(), (_b = (_a = P.current).destroy) == null ? void 0 : _b.call(_a);
      } catch {
      }
      P.current = null;
    }
    if (M.current && (clearInterval(M.current), M.current = null), V.current) {
      try {
        V.current.port.onmessage = null, V.current.disconnect();
      } catch {
      }
      V.current = null;
    }
    if (q.current) {
      try {
        q.current.disconnect();
      } catch {
      }
      q.current = null;
    }
    if (T.current) {
      try {
        T.current.disconnect();
      } catch {
      }
      T.current = null;
    }
    if (N.current && (N.current.getTracks().forEach((c) => c.stop()), N.current = null), d.current) {
      try {
        d.current.close();
      } catch {
      }
      d.current = null;
    }
    f && _(0);
  }, se = (f) => {
    const c = new Uint8Array(f);
    let g = "";
    const D = 32768;
    for (let y = 0; y < c.length; y += D) {
      const p = c.subarray(y, y + D);
      g += String.fromCharCode(...p);
    }
    return btoa(g);
  }, F = async () => {
    if (!i.current) {
      i.current = true;
      try {
        if (!window.AudioContext) throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 AudioWorklet\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248 Chrome/Edge");
        const f = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: R } });
        if (!x.current) {
          f.getTracks().forEach((Q) => Q.stop()), i.current = false;
          return;
        }
        if (N.current = f, !window.vad || !window.vad.MicVAD) throw new Error("VAD library not loaded. Please refresh the page.");
        const c = await window.vad.MicVAD.new({ getStream: async () => f, onnxWASMBasePath: "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/", baseAssetPath: "https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.29/dist/", onSpeechStart: () => {
          x.current && (C == null ? void 0 : C());
        }, onSpeechEnd: () => {
          x.current && (I == null ? void 0 : I());
        } });
        if (P.current = c, await c.start(), !x.current) {
          k(false), i.current = false;
          return;
        }
        const g = new AudioContext({ sampleRate: R });
        if (!g.audioWorklet) throw await g.close(), new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 AudioWorklet\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248 Chrome/Edge");
        const D = g.createMediaStreamSource(f), y = g.createAnalyser();
        y.fftSize = 256, D.connect(y), d.current = g, T.current = y;
        const p = new Uint8Array(y.frequencyBinCount);
        if (M.current = setInterval(() => {
          if (!x.current || !T.current) return;
          y.getByteFrequencyData(p);
          const Q = p.reduce((ne, $) => ne + $) / p.length;
          _(Q);
        }, 100), await g.audioWorklet.addModule("/audio-worklet/pcm-processor.js"), !x.current) {
          k(false), i.current = false;
          return;
        }
        const J = new AudioWorkletNode(g, "pcm-processor");
        V.current = J, G.current = true, J.port.onmessage = (Q) => {
          if (!x.current || !G.current || !V.current) return;
          const ne = Q.data, $ = se(ne);
          z($);
        };
        const o = g.createGain();
        o.gain.value = 0, q.current = o, D.connect(J), J.connect(o), o.connect(g.destination), i.current = false, x.current && E(true);
      } catch (f) {
        if (i.current = false, k(x.current), !x.current) return;
        console.error("Error accessing microphone:", f);
        const c = f instanceof Error ? f.message : "\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u6743\u9650\u8BBE\u7F6E";
        alert(c);
      }
    }
  }, H = () => {
    i.current = false, k(x.current), l && E(false);
  };
  r.useEffect(() => (x.current = true, () => {
    x.current = false, H();
  }), []), r.useEffect(() => {
    (h || !l) && G.current && (k(x.current), l && E(false));
  }, [h, l, E]);
  const pe = () => {
    h && !l || (l ? H() : F());
  };
  return t.jsxs("div", { className: "relative flex items-center justify-center", children: [l && t.jsx("div", { className: "absolute rounded-full border border-primary-500/50 pointer-events-none transition-all duration-75", style: { width: `${100 + O / 255 * 100}%`, height: `${100 + O / 255 * 100}%`, opacity: Math.max(0, 1 - O / 255 * 1.5) } }), t.jsx("button", { "data-testid": "voice-recorder-toggle", onClick: pe, disabled: h && !l, className: `
          relative z-10 w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-xl
          ${h && !l ? "opacity-50 cursor-not-allowed shadow-none" : ""}
          ${l ? "bg-primary-500 hover:bg-primary-600 shadow-primary-500/40" : "bg-slate-700 hover:bg-slate-600 shadow-slate-900/50"}
        `, title: h && !l ? "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D" : l ? "\u505C\u6B62\u5F55\u97F3" : "\u5F00\u59CB\u8BF4\u8BDD", children: l ? t.jsx(Be, { className: "w-7 h-7 text-white" }) : t.jsx(et, { className: "w-7 h-7 text-slate-300" }) })] });
}
function mt({ messages: l, userText: h, aiText: E, isAiSpeaking: z }) {
  const C = r.useRef(null), I = E.trim(), O = [...l].reverse().find((N) => N.role === "ai"), _ = z && !!I && (O == null ? void 0 : O.text.trim()) !== I.trim();
  return r.useEffect(() => {
    C.current && (C.current.scrollTop = C.current.scrollHeight);
  }, [l, h, I]), t.jsxs("div", { className: "flex flex-col h-full bg-white dark:bg-slate-800 overflow-hidden", children: [t.jsxs("div", { className: "px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80", children: [t.jsx("h4", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide", children: "\u5BF9\u8BDD\u5B9E\u5F55" }), t.jsxs("div", { className: "flex items-center gap-3", children: [z && t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" }), t.jsx("span", { className: "text-[10px] uppercase tracking-wider text-primary-400 font-semibold", children: "AI \u8BF4" })] }), h && t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" }), t.jsx("span", { className: "text-[10px] uppercase tracking-wider text-green-400 font-semibold", children: "\u4F60\u5728\u8BF4" })] })] })] }), t.jsx("div", { ref: C, className: "flex-1 min-h-0 overflow-y-auto p-5 space-y-5 scroll-smooth", children: t.jsxs(ze, { initial: false, children: [l.map((N) => t.jsx("div", { children: t.jsx(Ne, { role: N.role === "user" ? "user" : "interviewer", text: N.text }) }, N.id)), _ && t.jsx(Z.div, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: t.jsx(Ne, { role: "interviewer", text: I, highlight: true, suffix: t.jsx(Z.span, { className: "inline-block w-1.5 h-1.5 bg-primary-500 ml-1.5 rounded-full", animate: { opacity: [1, 0.25, 1] }, transition: { duration: 0.9, repeat: 1 / 0 } }) }) }, "active-ai"), h && t.jsx(Ne, { role: "user", text: h, highlight: true, italic: true, suffix: t.jsx("span", { className: "ml-1 animate-pulse", children: "..." }) }), l.length === 0 && !h && !E && t.jsxs(Z.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "h-full flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-12", children: [t.jsx("div", { className: "w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-600", children: t.jsx("svg", { className: "w-5 h-5 text-slate-400 dark:text-slate-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }), t.jsx("p", { className: "text-sm", children: "\u9762\u8BD5\u5373\u5C06\u5F00\u59CB\uFF0C\u8BF7\u51C6\u5907" })] })] }) })] });
}
function vt() {
  const l = ct(), h = lt(), E = h.state || {}, z = E.voiceSessionId, C = new URLSearchParams(h.search), I = C.get("skillId") || void 0, O = C.get("difficulty") || void 0, _ = Number(C.get("duration") || C.get("plannedDuration")), N = I ? { skillId: I, difficulty: O, techEnabled: true, projectEnabled: true, hrEnabled: true, plannedDuration: Number.isFinite(_) && _ > 0 ? _ : 15 } : void 0, d = E.voiceConfig ?? N, T = (d == null ? void 0 : d.skillId) ?? I ?? "java-backend", [M, P] = r.useState(false), [V, q] = r.useState(0), [x, G] = r.useState("INTRO"), [i, R] = r.useState("disconnected"), [k, se] = r.useState(""), [F, H] = r.useState(""), [pe, f] = r.useState([]), [c, g] = r.useState(false), [D, y] = r.useState(""), [p, be] = r.useState(null), [J, o] = r.useState(null), [Q, ne] = r.useState(""), [$, He] = r.useState(false), [ee, v] = r.useState(false), [ge, Ue] = r.useState([]), U = r.useRef(null), j = r.useRef(null), ye = r.useRef(null), le = r.useRef(null), ie = r.useRef(false), we = r.useRef(false), oe = r.useRef(false), Re = r.useRef(false), ke = r.useRef(false), te = r.useRef(false), Ce = r.useRef(""), Y = r.useRef(null), ue = r.useRef(null), ae = r.useRef(null), de = r.useRef([]), fe = r.useRef(false), ve = r.useRef(null), W = r.useRef(null), je = r.useRef("");
  r.useEffect(() => {
    je.current = F;
  }, [F]), r.useEffect(() => {
    Re.current = ee;
  }, [ee]);
  const w = r.useCallback((e) => {
    oe.current = e, g(e);
  }, []), A = r.useCallback((e) => {
    ke.current = e, He(e);
  }, []), S = r.useCallback(() => {
    Y.current && (clearTimeout(Y.current), Y.current = null);
  }, []), K = r.useCallback(() => {
    ue.current && (clearTimeout(ue.current), ue.current = null);
  }, []), X = r.useCallback((e) => {
    const s = (e || "").trim();
    !s || s === Ce.current || (f((n) => {
      const a = n[n.length - 1];
      return (a == null ? void 0 : a.role) === "ai" && a.text.trim() === s ? n : [...n, { role: "ai", text: s, id: `ai-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }];
    }), Ce.current = s, H((n) => (n == null ? void 0 : n.trim()) === s ? "" : n));
  }, []), Ae = r.useCallback((e) => {
    try {
      const s = atob(e.slice(0, 128)), n = new Uint8Array(s.length);
      for (let b = 0; b < s.length; b++) n[b] = s.charCodeAt(b);
      if (n.length < 44) return 15e3;
      const a = new DataView(n.buffer), u = a.getUint32(28, true), m = a.getUint32(40, true);
      return u <= 0 || m <= 0 ? 15e3 : Math.ceil(m / u * 1e3);
    } catch {
      return 15e3;
    }
  }, []), ce = r.useCallback(() => {
    te.current = false, K(), w(false), A(false), S(), X(je.current.trim()), H(""), y("");
  }, [K, S, X, w, A]), me = r.useCallback(() => ((!ae.current || ae.current.state === "closed") && (ae.current = new AudioContext({ sampleRate: 24e3 })), ae.current), []), Se = r.useCallback(() => {
    if (de.current.length === 0) {
      fe.current = false;
      return;
    }
    fe.current = true;
    const e = me();
    e.state === "suspended" && e.resume();
    const s = de.current.shift(), n = e.createBufferSource();
    n.buffer = s, n.connect(e.destination), ve.current = n, n.onended = () => {
      ve.current = null, Se();
    }, n.start(0);
  }, [me]), xe = r.useCallback(() => {
    const e = Date.now(), s = 3e4;
    W.current && clearInterval(W.current), W.current = setInterval(() => {
      de.current.length === 0 && !fe.current ? (clearInterval(W.current), W.current = null, w(false), A(false), S(), X(je.current.trim()), H("")) : Date.now() - e > s && (clearInterval(W.current), W.current = null, w(false), A(false));
    }, 100);
  }, [S, X, w, A]), Ee = r.useCallback((e, s, n) => {
    try {
      te.current = false, S();
      const a = atob(e), u = new Uint8Array(a.length);
      for (let L = 0; L < a.length; L++) u[L] = a.charCodeAt(L);
      const m = 44, b = new Int16Array(u.buffer, m, (u.length - m) / 2), B = new Float32Array(b.length);
      for (let L = 0; L < b.length; L++) B[L] = b[L] / 32768;
      const $e = me().createBuffer(1, B.length, 24e3);
      $e.getChannelData(0).set(B), de.current.push($e), fe.current || Se(), w(true), n && xe();
    } catch (a) {
      console.error("[ChunkAudio] Decode/play error:", a);
    }
  }, [me, Se, xe, w]);
  r.useEffect(() => {
    ot.listSkills().then(Ue).catch(console.error);
  }, []), r.useEffect(() => {
    ge.length > 0 && T && ne(ut(T, ge));
  }, [ge, T]), r.useEffect(() => () => {
    var _a, _b;
    U.current && clearInterval(U.current), j.current && j.current.disconnect(), K(), (_a = ve.current) == null ? void 0 : _a.stop(), (_b = ae.current) == null ? void 0 : _b.close(), W.current && (clearInterval(W.current), W.current = null), S();
    const e = p;
    e && !we.current && re.pauseSession(e).catch(() => {
    });
  }, [K, S, p]), r.useEffect(() => (p && i === "connected" ? Le() : U.current && clearInterval(U.current), () => {
    U.current && clearInterval(U.current);
  }), [p, i]), r.useEffect(() => {
    if (D && ye.current) {
      const e = ye.current.play();
      e !== void 0 && e.catch(() => {
        o("\u8BF7\u70B9\u51FB\u9875\u9762\u4EFB\u610F\u4F4D\u7F6E\u4EE5\u542F\u7528\u97F3\u9891\u64AD\u653E"), ce();
      });
    }
  }, [D, ce]);
  const Le = () => {
    U.current = setInterval(() => {
      q((e) => e + 1);
    }, 1e3);
  }, _e = (e) => {
    const s = Math.floor(e / 60), n = e % 60;
    return `${s.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
  }, Ve = (e) => ({ INTRO: "\u81EA\u6211\u4ECB\u7ECD", TECH: "\u6280\u672F\u95EE\u9898", PROJECT: "\u9879\u76EE\u6DF1\u6316", HR: "HR\u95EE\u9898" })[e] || e, Oe = r.useCallback(() => {
    if (!j.current || !j.current.isConnected() || !k.trim() || oe.current || $) return;
    P(false), A(true);
    const e = k.trim();
    f((s) => [...s, { role: "user", text: e, id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }]), se(""), j.current.sendControl("submit", { text: e });
  }, [k, $, A]), Ie = r.useCallback(() => ({ onOpen: () => {
    R("connected"), v(false);
  }, onMessage: () => {
  }, onSubtitle: (e, s) => {
    !s && (ke.current || oe.current) || (s && e.trim() ? (f((n) => {
      const a = n[n.length - 1];
      return (a == null ? void 0 : a.role) === "user" && a.text.trim() === e.trim() ? n : [...n, { role: "user", text: e.trim(), id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }];
    }), se("")) : se(e));
  }, onAudioResponse: (e, s) => {
    const n = !!(e && e.length > 0), a = (s || "").trim();
    if (n) {
      S(), K(), te.current = false, y(e), H(a), w(true);
      const u = Ae(e);
      ue.current = setTimeout(ce, Math.min(Math.max(u + 1500, 4e3), 6e4));
      return;
    }
    if (y(""), H(a), w(false), !a) {
      A(false);
      return;
    }
    S(), Y.current = setTimeout(() => {
      X(a), A(false), w(false), Y.current = null;
    }, 2500);
  }, onTextResponse: (e, s) => {
    const n = (e || "").trim();
    n && (te.current = s, H(n), w(true), s && (S(), Y.current = setTimeout(() => {
      te.current && (te.current = false), X(n), A(false), w(false), Y.current = null;
    }, 15e3)));
  }, onClose: (e) => {
    R("disconnected"), v(false), S(), e.code !== 1e3 && o("\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5");
  }, onError: () => {
    S(), K(), o("WebSocket \u8FDE\u63A5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5"), R("disconnected"), v(false);
  }, onAudioChunk: (e, s, n) => {
    Ee(e, s, n);
  }, onControl: (e, s) => {
    if (e === "asr_ready") {
      v(true), o(null);
      return;
    }
    if (e === "asr_reconnecting") {
      v(false), s && o(s);
      return;
    }
    if (e === "audio_complete") {
      xe();
      return;
    }
    if (e === "pause_timeout_warning" && s) {
      o(s);
      return;
    }
    e === "pause_timeout" && s && (o(s), R("disconnected"), v(false));
  }, onErrorMessage: (e) => {
    o(e || "\u8BED\u97F3\u9762\u8BD5\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), e.includes("\u8BED\u97F3\u8BC6\u522B") && v(false);
  } }), [K, S, X, Ae, ce, Ee, xe, w, A]), he = r.useCallback((e) => {
    v(false), setTimeout(() => {
      try {
        j.current = dt(e, Ie());
      } catch (s) {
        o("\u65E0\u6CD5\u5EFA\u7ACB WebSocket \u8FDE\u63A5: " + (s instanceof Error ? s.message : "\u672A\u77E5\u9519\u8BEF")), R("disconnected"), v(false);
      }
    }, 500);
  }, [Ie]), Te = r.useCallback(async (e) => {
    o(null), R("connecting"), v(false);
    try {
      const s = await re.createSession({ skillId: e.skillId, difficulty: e.difficulty, introEnabled: false, techEnabled: e.techEnabled, projectEnabled: e.projectEnabled, hrEnabled: e.hrEnabled, plannedDuration: e.plannedDuration, resumeId: e.resumeId, llmProvider: e.llmProvider });
      be(s.sessionId), G(s.currentPhase), he(s.sessionId);
    } catch (s) {
      const n = s instanceof Error ? s.message : "\u521B\u5EFA\u9762\u8BD5\u4F1A\u8BDD\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5";
      o(n), R("disconnected"), v(false), alert("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25\uFF1A" + n);
    }
  }, [he]), Me = r.useCallback(async (e) => {
    var _a, _b;
    o(null), R("connecting"), v(false);
    try {
      const [s, n] = await Promise.all([re.resumeSession(e), re.getMessages(e)]);
      if (be(s.sessionId), G(s.currentPhase), s.startTime) {
        const m = Math.floor((Date.now() - new Date(s.startTime).getTime()) / 1e3);
        q(m > 0 ? m : 0);
      }
      const a = [];
      let u = null;
      for (const m of n) {
        const b = (_a = m.aiGeneratedText) == null ? void 0 : _a.trim(), B = (_b = m.userRecognizedText) == null ? void 0 : _b.trim();
        if (u) {
          a.push({ role: "ai", text: u.text, id: u.id }), u = null, B && a.push({ role: "user", text: B, id: `user-${m.id}` }), b && (u = { text: b, id: `ai-${m.id}` });
          continue;
        }
        b && B ? (a.push({ role: "ai", text: b, id: `ai-${m.id}` }), a.push({ role: "user", text: B, id: `user-${m.id}` })) : b ? u = { text: b, id: `ai-${m.id}` } : B && a.push({ role: "user", text: B, id: `user-${m.id}` });
      }
      u && a.push({ role: "ai", text: u.text, id: u.id }), f(a), he(s.sessionId);
    } catch (s) {
      o(s instanceof Error ? s.message : "\u6062\u590D\u4F1A\u8BDD\u5931\u8D25"), R("disconnected"), v(false);
    }
  }, [he]);
  r.useEffect(() => {
    ie.current || (d ? (ie.current = true, Te({ skillId: d.skillId, difficulty: d.difficulty, techEnabled: d.techEnabled, projectEnabled: d.projectEnabled, hrEnabled: d.hrEnabled, plannedDuration: d.plannedDuration, resumeId: d.resumeId, llmProvider: d.llmProvider })) : z && (ie.current = true, Me(z)));
  }, [Te, Me, d, z]);
  const qe = (e) => {
    oe.current || ke.current || Re.current && (j.current && j.current.isConnected() ? j.current.sendAudio(e) : o("\u672A\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"));
  }, Ge = () => {
  }, Fe = () => {
  }, Je = async (e) => {
    p && (e === "short" ? (P(false), le.current = setTimeout(() => {
      Pe();
    }, 5 * 60 * 1e3)) : await Pe());
  }, Pe = async () => {
    if (we.current = true, le.current && (clearTimeout(le.current), le.current = null), j.current && j.current.disconnect(), M && P(false), !!p) try {
      await re.pauseSession(p), l("/interviews");
    } catch {
      alert("\u6682\u505C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    }
  }, Qe = async () => {
    if (we.current = true, U.current && clearInterval(U.current), j.current && j.current.disconnect(), p) try {
      await re.endSession(p);
    } catch (e) {
      console.error("Failed to end session:", e);
    }
    l("/interviews");
  }, Ye = () => {
    l("/history");
  }, De = !!k.trim() && !c && !$ && i === "connected", Ke = i === "connected" && ee && !c && !$, Xe = i !== "connected" ? "\u6B63\u5728\u8FDE\u63A5\u670D\u52A1\u5668..." : ee ? c ? "\u9762\u8BD5\u5B98\u6B63\u5728\u56DE\u7B54..." : $ ? "\u6B63\u5728\u601D\u8003..." : M ? "\u6B63\u5728\u8046\u542C\uFF0C\u8BF4\u5B8C\u540E\u70B9\u51FB\u63D0\u4EA4\u56DE\u7B54..." : "\u70B9\u51FB\u9EA6\u514B\u98CE\u5F00\u59CB\u53D1\u8A00" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D...", Ze = c ? "\u9762\u8BD5\u5B98\u6B63\u5728\u56DE\u7B54..." : $ ? "\u6B63\u5728\u601D\u8003..." : i !== "connected" ? "\u6B63\u5728\u8FDE\u63A5\u670D\u52A1\u5668" : ee ? M ? "\u8BF4\u5B8C\u540E\u70B9\u51FB\u63D0\u4EA4\u56DE\u7B54" : "\u70B9\u51FB\u9EA6\u514B\u98CE\u53D1\u8A00" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D";
  return !ie.current && !d && !z ? t.jsx("div", { className: "min-h-[60vh] flex items-center justify-center p-6", children: t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-8 text-center max-w-md w-full", children: [t.jsx(We, { className: "w-12 h-12 text-yellow-500 mx-auto mb-4" }), t.jsx("p", { className: "text-slate-700 dark:text-slate-200 text-lg font-semibold mb-2", children: "\u672A\u68C0\u6D4B\u5230\u8BED\u97F3\u9762\u8BD5\u914D\u7F6E" }), t.jsx("p", { className: "text-slate-500 dark:text-slate-400 text-sm mb-6", children: '\u8BF7\u4ECE\u9762\u8BD5\u8BB0\u5F55\u6216"\u8BED\u97F3\u9762\u8BD5"\u5165\u53E3\u5F00\u59CB' }), t.jsx("button", { onClick: Ye, className: "px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: "\u8FD4\u56DE\u91CD\u65B0\u5F00\u59CB" })] }) }) : t.jsxs("div", { className: "pb-10", children: [t.jsxs("div", { className: "max-w-7xl mx-auto", children: [t.jsx(it, { title: "\u8BED\u97F3\u6A21\u62DF\u9762\u8BD5", subtitle: "\u5B9E\u65F6\u8BED\u97F3\u5BF9\u8BDD\uFF0C\u9762\u8BD5\u5B98\u4F1A\u6839\u636E\u4F60\u7684\u56DE\u7B54\u6301\u7EED\u8FFD\u95EE", icon: t.jsx(Be, { className: "w-6 h-6 text-white" }) }), J && t.jsxs("div", { className: "mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-3 rounded-xl flex items-center gap-2", children: [t.jsx(We, { className: "w-4 h-4" }), t.jsx("span", { className: "text-sm", children: J })] }), t.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [t.jsxs("div", { className: "xl:col-span-2 space-y-6", children: [t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6", children: [t.jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("button", { onClick: () => l("/interviews"), className: "w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center", title: "\u8FD4\u56DE\u9762\u8BD5\u8BB0\u5F55", children: t.jsx(tt, { className: "w-4 h-4" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: Q || T }), t.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [t.jsx("span", { className: "text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full", children: Ve(x) }), t.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: i === "connected" ? ee ? "\u8BED\u97F3\u8BC6\u522B\u5C31\u7EEA" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D" : i === "connecting" ? "\u8FDE\u63A5\u4E2D" : "\u8FDE\u63A5\u65AD\u5F00" })] })] })] }), t.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200", children: [t.jsx(rt, { className: "w-4 h-4" }), t.jsx("span", { className: "font-mono text-sm tabular-nums", children: _e(V) })] })] }), t.jsxs("div", { className: "flex flex-col items-center justify-center py-6", children: [t.jsx(Z.div, { animate: c ? { scale: [1, 1.05, 1] } : {}, transition: { repeat: 1 / 0, duration: 2 }, className: `w-32 h-32 rounded-full border-4 flex items-center justify-center mb-6 transition-colors
                    ${c ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60"}`, children: t.jsx(st, { className: `w-14 h-14 ${c ? "text-primary-500" : "text-slate-400 dark:text-slate-500"}` }) }), t.jsx("div", { className: "w-full max-w-2xl min-h-[130px] rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 px-6 py-5 text-center flex items-center justify-center", children: t.jsx(ze, { mode: "wait", children: c || F ? t.jsx(Z.p, { "data-testid": "voice-current-ai-text", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed", children: F || "\u601D\u8003\u4E2D..." }, "ai-active") : k ? t.jsx(Z.p, { "data-testid": "voice-current-user-text", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-lg md:text-xl font-medium text-primary-600 dark:text-primary-300 italic leading-relaxed", children: k }, "user-active") : t.jsx(Z.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-slate-500 dark:text-slate-400", children: Xe }, "idle") }) })] })] }), t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-5", children: [t.jsxs("div", { className: "flex items-center justify-center gap-6", children: [t.jsx("button", { onClick: () => {
    const e = window.confirm(`\u6682\u505C\u9762\u8BD5\uFF1F
\u786E\u5B9A = \u77ED\u6682\u505C\uFF085\u5206\u949F\uFF09
\u53D6\u6D88 = \u79BB\u5F00\u5E76\u4FDD\u5B58`);
    Je(e ? "short" : "long");
  }, disabled: i !== "connected", className: "px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors disabled:opacity-50", title: "\u6682\u505C", children: "\u6682\u505C" }), t.jsx(ft, { isRecording: M, disabled: !M && !Ke, onRecordingChange: P, onAudioData: qe, onSpeechStart: Ge, onSpeechEnd: Fe }), t.jsx("button", { "data-testid": "voice-submit-answer", onClick: Oe, disabled: !De, className: `px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${De ? "bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/30" : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"}`, title: "\u63D0\u4EA4\u56DE\u7B54", children: t.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [t.jsx(nt, { className: "w-4 h-4" }), "\u63D0\u4EA4\u56DE\u7B54"] }) }), t.jsx("button", { "data-testid": "voice-end-interview", onClick: Qe, disabled: i !== "connected", className: "px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50", title: "\u7ED3\u675F\u9762\u8BD5", children: t.jsxs("span", { className: "inline-flex items-center gap-1", children: [t.jsx(at, { className: "w-4 h-4" }), "\u7ED3\u675F"] }) })] }), t.jsx("p", { className: "text-center text-xs text-slate-500 dark:text-slate-400 mt-3", children: Ze })] })] }), t.jsx("div", { className: "h-[520px] md:h-[560px] xl:h-[calc(100vh-240px)] xl:max-h-[760px] bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden", children: t.jsx(mt, { messages: pe, userText: k, aiText: F, isAiSpeaking: c }) })] })] }), D && t.jsx("audio", { ref: ye, src: `data:audio/wav;base64,${D}`, onEnded: () => {
    ce();
  }, onPlay: () => w(true), autoPlay: true, style: { display: "none" } })] });
}
export {
  vt as default
};
