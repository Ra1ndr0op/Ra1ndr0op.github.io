var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as o, A as r } from "./index-BZ3exKah.js";
function a(s, t, e) {
  const n = new URL(t, e), i = new URL(n);
  return i.pathname = `${n.pathname.replace(/\/+$/, "")}/ws/voice-interview/${s}`, i.search = "", i.hash = "", i.protocol = n.protocol === "https:" ? "wss:" : "ws:", i.toString();
}
const l = { async createSession(s) {
  return o.post("/api/voice-interview/sessions", s);
}, async getSession(s) {
  return o.get(`/api/voice-interview/sessions/${s}`);
}, async endSession(s) {
  return o.post(`/api/voice-interview/sessions/${s}/end`);
}, async getMessages(s) {
  return o.get(`/api/voice-interview/sessions/${s}/messages`);
}, async getEvaluation(s) {
  return o.get(`/api/voice-interview/sessions/${s}/evaluation`);
}, async generateEvaluation(s) {
  return o.post(`/api/voice-interview/sessions/${s}/evaluation`);
}, async pauseSession(s, t = "user_initiated") {
  return o.put(`/api/voice-interview/sessions/${s}/pause`, { reason: t });
}, async resumeSession(s) {
  return o.put(`/api/voice-interview/sessions/${s}/resume`);
}, async getAllSessions(s, t) {
  const e = new URLSearchParams();
  return s && e.append("userId", s), t && e.append("status", t), o.get(`/api/voice-interview/sessions?${e.toString()}`);
}, async deleteSession(s) {
  return o.delete(`/api/voice-interview/sessions/${s}`);
} };
class c {
  constructor(t, e, n) {
    __publicField(this, "ws", null);
    __publicField(this, "url");
    __publicField(this, "handlers");
    __publicField(this, "reconnectAttempts", 0);
    __publicField(this, "maxReconnectAttempts", 3);
    __publicField(this, "reconnectDelay", 2e3);
    this.url = e, this.handlers = n;
  }
  connect() {
    var _a, _b;
    try {
      this.ws = new WebSocket(this.url), this.ws.onopen = () => {
        var _a2, _b2;
        this.reconnectAttempts = 0, (_b2 = (_a2 = this.handlers).onOpen) == null ? void 0 : _b2.call(_a2);
      }, this.ws.onmessage = (t) => {
        var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        try {
          const e = JSON.parse(t.data);
          switch ((_b2 = (_a2 = this.handlers).onMessage) == null ? void 0 : _b2.call(_a2, e), e.type) {
            case "subtitle":
              (_d = (_c2 = this.handlers).onSubtitle) == null ? void 0 : _d.call(_c2, e.text, e.isFinal);
              break;
            case "audio":
              if ("text" in e) {
                const n = e;
                (_f = (_e = this.handlers).onAudioResponse) == null ? void 0 : _f.call(_e, n.data, n.text);
              }
              break;
            case "audio_chunk":
              if ("index" in e) {
                const n = e;
                (_h = (_g = this.handlers).onAudioChunk) == null ? void 0 : _h.call(_g, n.data, n.index, n.isLast);
              }
              break;
            case "text":
              if ("content" in e) {
                const n = e;
                (_j = (_i = this.handlers).onTextResponse) == null ? void 0 : _j.call(_i, n.content, !!n.final);
              }
              break;
            case "control":
              (_l = (_k = this.handlers).onControl) == null ? void 0 : _l.call(_k, e.action, e.message);
              break;
            case "error":
              (_n = (_m = this.handlers).onErrorMessage) == null ? void 0 : _n.call(_m, e.message);
              break;
          }
        } catch (e) {
          console.error("Error parsing WebSocket message:", e);
        }
      }, this.ws.onclose = (t) => {
        var _a2, _b2;
        (_b2 = (_a2 = this.handlers).onClose) == null ? void 0 : _b2.call(_a2, t), !t.wasClean && this.reconnectAttempts < this.maxReconnectAttempts && (this.reconnectAttempts++, setTimeout(() => this.connect(), this.reconnectDelay));
      }, this.ws.onerror = (t) => {
        var _a2, _b2;
        (_b2 = (_a2 = this.handlers).onError) == null ? void 0 : _b2.call(_a2, t);
      };
    } catch (t) {
      console.error("Error creating WebSocket connection:", t), (_b = (_a = this.handlers).onError) == null ? void 0 : _b.call(_a, t);
    }
  }
  sendAudio(t) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const e = { type: "audio", data: t, timestamp: Date.now() };
      return this.ws.send(JSON.stringify(e)), true;
    }
    return console.warn("WebSocket is not connected"), false;
  }
  sendControl(t, e) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const n = { type: "control", action: t, data: e, timestamp: Date.now() };
      return this.ws.send(JSON.stringify(n)), true;
    }
    return console.warn("WebSocket is not connected"), false;
  }
  disconnect() {
    this.ws && (this.reconnectAttempts = this.maxReconnectAttempts, this.ws.close(1e3, "User disconnected"), this.ws = null);
  }
  getReadyState() {
    var _a;
    return ((_a = this.ws) == null ? void 0 : _a.readyState) ?? WebSocket.CLOSED;
  }
  isConnected() {
    var _a;
    return ((_a = this.ws) == null ? void 0 : _a.readyState) === WebSocket.OPEN;
  }
}
function u(s, t) {
  const e = a(s, r, window.location.href), n = new c(s, e, t);
  return n.connect(), n;
}
export {
  u as c,
  l as v
};
