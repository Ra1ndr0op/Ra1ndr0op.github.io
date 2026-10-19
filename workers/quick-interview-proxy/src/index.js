const PREFIX = "/quick-interview";
const BACKEND_PREFIXES = ["/api", "/ws"];

export default {
  async fetch(request, env) {
    const incomingUrl = new URL(request.url);
    const incomingPath = incomingUrl.pathname;

    if (incomingPath !== PREFIX && !incomingPath.startsWith(`${PREFIX}/`)) {
      return fetch(request);
    }

    const appPath = incomingPath.slice(PREFIX.length) || "/";
    const isBackendRequest = BACKEND_PREFIXES.some(
      (prefix) => appPath === prefix || appPath.startsWith(`${prefix}/`),
    );

    if (!isBackendRequest) {
      incomingUrl.protocol = "https:";
      incomingUrl.hostname = env.PAGES_HOSTNAME;
      incomingUrl.port = "";
      incomingUrl.pathname = incomingPath === PREFIX ? `${PREFIX}/` : incomingPath;
      return fetch(new Request(incomingUrl, request));
    }

    const originalHost = incomingUrl.host;
    incomingUrl.protocol = "https:";
    incomingUrl.hostname = env.ORIGIN_HOSTNAME;
    incomingUrl.port = "";
    incomingUrl.pathname = appPath;

    const upstreamRequest = new Request(incomingUrl, request);
    const headers = new Headers(upstreamRequest.headers);
    headers.set("X-Forwarded-Host", originalHost);
    headers.set("X-Forwarded-Proto", "https");

    return fetch(new Request(upstreamRequest, { headers }));
  },
};
