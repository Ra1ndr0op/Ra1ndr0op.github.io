interface Env {
  waitlist_db: D1Database;
}

type CommentBody = {
  postSlug?: unknown;
  author?: unknown;
  body?: unknown;
};

type CommentRow = {
  id: number;
  post_slug: string;
  author: string;
  body: string;
  created_at: string;
};

const headers = {
  "Content-Type": "application/json; charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers });
}

function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;

  const text = value.replace(/\s+/g, " ").trim();
  if (!text) return null;
  return text.slice(0, maxLength);
}

function cleanBody(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const text = value.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  if (text.length < 2) return null;
  return text.slice(0, 800);
}

function cleanSlug(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const slug = value.trim().toLowerCase();
  if (!/^[a-z0-9-]{2,80}$/.test(slug)) return null;
  return slug;
}

function publicComment(row: CommentRow) {
  return {
    id: row.id,
    postSlug: row.post_slug,
    author: row.author,
    body: row.body,
    createdAt: row.created_at,
  };
}

async function readComments(env: Env, postSlug: string): Promise<Response> {
  const result = await env.waitlist_db
    .prepare(
      "SELECT id, post_slug, author, body, created_at FROM comments WHERE post_slug = ? ORDER BY created_at DESC LIMIT 50"
    )
    .bind(postSlug)
    .all<CommentRow>();

  return json({ comments: (result.results || []).map(publicComment) });
}

async function createComment(env: Env, body: CommentBody): Promise<Response> {
  const postSlug = cleanSlug(body.postSlug);
  const author = cleanText(body.author, 32) || "匿名用户";
  const commentBody = cleanBody(body.body);

  if (!postSlug) {
    return json({ error: "文章标识无效" }, 400);
  }

  if (!commentBody) {
    return json({ error: "评论内容太短" }, 400);
  }

  const inserted = await env.waitlist_db
    .prepare(
      "INSERT INTO comments (post_slug, author, body) VALUES (?, ?, ?) RETURNING id, post_slug, author, body, created_at"
    )
    .bind(postSlug, author, commentBody)
    .first<CommentRow>();

  if (!inserted) {
    return json({ error: "评论发布失败，请稍后重试" }, 500);
  }

  return json({ message: "评论已发布", comment: publicComment(inserted) }, 201);
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  try {
    if (request.method === "GET") {
      const url = new URL(request.url);
      const postSlug = cleanSlug(url.searchParams.get("postSlug"));
      if (!postSlug) {
        return json({ error: "文章标识无效" }, 400);
      }
      return await readComments(env, postSlug);
    }

    if (request.method === "POST") {
      let body: CommentBody;
      try {
        body = await request.json<CommentBody>();
      } catch {
        return json({ error: "请求内容无效" }, 400);
      }

      return await createComment(env, body);
    }

    return json({ error: "只支持 GET 和 POST 请求" }, 405);
  } catch {
    return json({ error: "评论服务暂时不可用" }, 500);
  }
};
