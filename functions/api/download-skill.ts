type SkillName = "stardew-valley-poster" | "minecraft-voxel-poster";

const skillFiles: Record<SkillName, string> = {
  "stardew-valley-poster": "/downloads/skills/stardew-valley-poster/SKILL.md",
  "minecraft-voxel-poster": "/downloads/skills/minecraft-voxel-poster/SKILL.md",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: Record<string, string>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

function isSkillName(value: string | null): value is SkillName {
  return value === "stardew-valley-poster" || value === "minecraft-voxel-poster";
}

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return json({ error: "Only GET and HEAD are supported" }, 405);
  }

  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  if (!isSkillName(name)) {
    return json({ error: "Unknown skill" }, 404);
  }

  const assetUrl = new URL(skillFiles[name], url.origin);
  const assetResponse = await fetch(assetUrl.toString(), {
    headers: { Accept: "text/markdown,text/plain,*/*" },
  });

  if (!assetResponse.ok) {
    return json({ error: "Skill file is not available" }, 502);
  }

  const filename = `${name}-SKILL.md`;
  const headers = new Headers({
    ...corsHeaders,
    "Content-Type": "text/markdown; charset=UTF-8",
    "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
    "Cache-Control": "public, max-age=300",
    "X-Content-Type-Options": "nosniff",
  });

  if (request.method === "HEAD") {
    const contentLength = assetResponse.headers.get("Content-Length");
    if (contentLength) headers.set("Content-Length", contentLength);
    return new Response(null, { status: 200, headers });
  }

  return new Response(assetResponse.body, { status: 200, headers });
};
