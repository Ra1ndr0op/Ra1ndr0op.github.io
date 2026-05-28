interface Env {
  waitlist_db: D1Database;
}

type SubscribeBody = {
  email?: unknown;
};

const headers = {
  "Content-Type": "application/json; charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: Record<string, string>, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers });
}

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const email = value.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email) ? email : null;
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return json({ error: "只支持 POST 请求" }, 405);
  }

  let body: SubscribeBody;
  try {
    body = await request.json<SubscribeBody>();
  } catch {
    return json({ error: "请输入有效邮箱" }, 400);
  }

  const email = normalizeEmail(body.email);
  if (!email) {
    return json({ error: "请输入有效邮箱" }, 400);
  }

  try {
    await env.waitlist_db
      .prepare("INSERT INTO emails (email) VALUES (?)")
      .bind(email)
      .run();

    return json({ message: "成功加入等待列表！" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (/UNIQUE|constraint/i.test(message)) {
      return json({ error: "这个邮箱已经登记过了" }, 409);
    }

    return json({ error: "出错了，请稍后重试" }, 500);
  }
};
