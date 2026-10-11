interface Env {
  waitlist_db: D1Database;
}

const MAX_BODY_BYTES = 8 * 1024;
const TEAM_SIZES = ["1-5", "6-20", "21-100", "100+"];
const SCENARIOS = ["账单与售后", "技术支持", "知识库问答", "其他客服场景"];
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS quick_response_demo_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  team_size TEXT NOT NULL,
  scenario TEXT NOT NULL,
  consent INTEGER NOT NULL CHECK (consent = 1),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

function json(body: Record<string, string>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store",
      ...(status === 405 ? { Allow: "POST" } : {}),
    },
  });
}

function cleanText(value: unknown, min: number, max: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.replace(/\s+/g, " ").trim();
  return text.length >= min && text.length <= max ? text : null;
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return false;
  const fetchSite = request.headers.get("Sec-Fetch-Site");
  return !fetchSite || fetchSite === "same-origin";
}

async function readBody(request: Request): Promise<string | null> {
  const length = request.headers.get("Content-Length");
  if (length && Number(length) > MAX_BODY_BYTES) return null;
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "POST") {
    return json({ detail: "只支持 POST 请求" }, 405);
  }
  if (!isSameOrigin(request)) {
    return json({ detail: "请从 Quick Response 产品页提交申请" }, 403);
  }
  const contentType = request.headers.get("Content-Type") || "";
  if (contentType.split(";", 1)[0].trim().toLowerCase() !== "application/json") {
    return json({ detail: "请使用 JSON 格式提交申请" }, 415);
  }

  let body: Record<string, unknown>;
  try {
    const text = await readBody(request);
    if (text === null) return json({ detail: "申请内容过长，请缩短后重试" }, 413);
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return json({ detail: "申请内容无效" }, 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ detail: "申请内容无效，请检查后重试" }, 400);
  }

  if (body.website !== undefined && (typeof body.website !== "string" || body.website.trim())) {
    return json({ detail: "申请未提交，请清空网站字段后重试" }, 400);
  }

  const name = cleanText(body.name, 2, 80);
  const company = cleanText(body.company, 2, 120);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!name) return json({ detail: "姓名需为 2–80 个字符" }, 400);
  if (!company) return json({ detail: "公司名称需为 2–120 个字符" }, 400);
  if (!email || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ detail: "请输入有效邮箱（不超过 200 个字符）" }, 400);
  }
  if (typeof body.team_size !== "string" || !TEAM_SIZES.includes(body.team_size)) {
    return json({ detail: "请选择有效的团队规模" }, 400);
  }
  if (typeof body.scenario !== "string" || !SCENARIOS.includes(body.scenario)) {
    return json({ detail: "请选择有效的客服场景" }, 400);
  }
  if (body.consent !== true) {
    return json({ detail: "请先同意使用申请信息联系你" }, 400);
  }

  try {
    if (!env.waitlist_db) return json({ detail: "申请服务暂时不可用，请稍后重试" }, 503);
    await env.waitlist_db.prepare(CREATE_TABLE).run();
    await env.waitlist_db
      .prepare(
        "INSERT INTO quick_response_demo_requests (name, company, email, team_size, scenario, consent) VALUES (?, ?, ?, ?, ?, ?)"
      )
      .bind(name, company, email, body.team_size, body.scenario, 1)
      .run();
    return json({ message: "申请已保存，需由工作人员查看后手动跟进。" }, 201);
  } catch {
    return json({ detail: "申请服务暂时不可用，请稍后重试" }, 503);
  }
};
