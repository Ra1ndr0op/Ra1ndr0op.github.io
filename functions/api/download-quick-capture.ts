interface Env {
  QUICK_CAPTURE_DOWNLOADS: R2Bucket;
}

const objectKey = "quick-capture/quick-capture-0.1.0-windows-x64.exe";
const downloadName = "quick-capture-0.1.0-windows-x64.exe";

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  }

  const object = request.method === "HEAD"
    ? await env.QUICK_CAPTURE_DOWNLOADS.head(objectKey)
    : await env.QUICK_CAPTURE_DOWNLOADS.get(objectKey);

  if (!object) {
    return new Response("Quick Capture download is unavailable", { status: 404 });
  }

  const headers = new Headers({
    "Content-Type": "application/octet-stream",
    "Content-Disposition": `attachment; filename="${downloadName}"`,
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Content-Length": object.size.toString(),
    ETag: object.httpEtag,
  });

  return new Response(request.method === "HEAD" ? null : object.body, { headers });
};
