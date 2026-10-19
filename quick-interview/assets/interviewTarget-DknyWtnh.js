import { r as e } from "./index-BZ3exKah.js";
const i = { async list() {
  return e.get("/api/interview-targets");
}, async get(t) {
  return e.get("/api/interview-targets/" + t);
}, async create(t) {
  return e.post("/api/interview-targets", t);
}, async analyze(t) {
  return e.post("/api/interview-targets/" + t + "/analyze");
}, async listVersions(t) {
  return e.get("/api/interview-targets/" + t + "/analysis/versions");
}, async getProgress(t) {
  return e.get("/api/interview-targets/" + t + "/progress");
}, async diff(t, r, a) {
  return e.get("/api/interview-targets/" + t + "/analysis/diff", { params: { from: r, to: a } });
}, async listTasks(t) {
  return e.get("/api/interview-targets/" + t + "/tasks");
}, async updateTaskStatus(t, r, a) {
  return e.patch("/api/interview-targets/" + t + "/tasks/" + r, { status: a });
} };
export {
  i
};
