// Storage for the GMAT tracker at arizvi.com/anh. The page keeps its own copy in the browser and syncs it here.
// Everything sits in one Netlify Blobs store, one JSON entry per key:
//   s/<id>   a practice set or timed section, with every answer, time, bookmark and lookup in it
//   e/<id>   a full practice exam (scores)
//   w/<word> a saved word
//   t/<id>   her notes and status on a topic
//   m/<name> settings
// Every request needs the passcode (ANH_PASSCODE, a secret environment variable) as a bearer token.
import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";
import { createHash, timingSafeEqual } from "node:crypto";

const STORE = "anh-gmat";
const KEY = /^[sewtm]\/[A-Za-z0-9\-_.!~*'()%]{1,240}$/;
const MAX_ITEM = 1_000_000; // characters of JSON per entry
const MAX_BODY = 5_000_000; // a function takes and returns at most 6 MB
const MAX_OUT = 4_000_000;

function origins(): Set<string> {
  const extra = (Netlify.env.get("ANH_ORIGINS") || "").split(",").map((s) => s.trim()).filter(Boolean);
  return new Set(["https://arizvi.com", "https://www.arizvi.com", ...extra]);
}

// The page lives on arizvi.com (GitHub Pages) and this API on Netlify, so the browser needs CORS headers to call it.
function cors(req: Request): Record<string, string> {
  const origin = req.headers.get("origin");
  const headers: Record<string, string> = { Vary: "Origin" };
  if (origin && origins().has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type";
    headers["Access-Control-Max-Age"] = "86400";
  }
  return headers;
}

function reply(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors(req) },
  });
}

const digest = (s: string) => createHash("sha256").update(s, "utf8").digest();

function signedIn(req: Request): boolean {
  const passcode = Netlify.env.get("ANH_PASSCODE");
  if (!passcode) return false;
  const match = /^Bearer\s+(.+)$/i.exec(req.headers.get("authorization") || "");
  if (!match) return false;
  return timingSafeEqual(digest(match[1].trim()), digest(passcode.trim()));
}

const validKey = (k: unknown): k is string => typeof k === "string" && KEY.test(k);

export default async (req: Request, _context: Context) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });
  const route = new URL(req.url).pathname.replace(/^\/api\/?/, "").replace(/\/+$/, "");
  if (!signedIn(req)) return reply(req, { error: "passcode" }, 401);
  const store = getStore({ name: STORE, consistency: "strong" });

  try {
    if (req.method === "GET" && route === "ping") return reply(req, { ok: true, now: Date.now() });

    // Every key with its etag, so the page fetches only what changed since it last looked.
    if (req.method === "GET" && route === "list") {
      const { blobs } = await store.list();
      return reply(req, { items: blobs.map((b) => ({ key: b.key, etag: b.etag })) });
    }

    // The entries for up to 200 keys. If they would not fit in one response, the rest come back in `rest`.
    if (req.method === "POST" && route === "get") {
      const body = await req.json().catch(() => null);
      const keys: string[] = Array.isArray(body?.keys) ? body.keys.filter(validKey).slice(0, 200) : [];
      const items: unknown[] = [];
      let rest: string[] = [];
      let size = 0;
      for (let i = 0; i < keys.length; i += 16) {
        if (size > MAX_OUT) {
          rest = keys.slice(i);
          break;
        }
        const chunk = keys.slice(i, i + 16);
        const got = await Promise.all(chunk.map((k) => store.getWithMetadata(k, { type: "text" })));
        got.forEach((entry, j) => {
          if (entry === null) {
            items.push({ key: chunk[j], missing: true });
            return;
          }
          size += entry.data.length;
          let data: unknown = null;
          try {
            data = JSON.parse(entry.data);
          } catch {
            data = null;
          }
          items.push({ key: chunk[j], etag: entry.etag, data });
        });
      }
      return reply(req, { items, rest });
    }

    // Writes and deletes in one call: { items: [{ key, data }], del: [key] }.
    if (req.method === "POST" && route === "put") {
      const text = await req.text();
      if (text.length > MAX_BODY) return reply(req, { error: "too large" }, 413);
      let body: any;
      try {
        body = JSON.parse(text);
      } catch {
        return reply(req, { error: "bad json" }, 400);
      }
      const puts: { key: string; data: unknown }[] = Array.isArray(body?.items) ? body.items : [];
      const dels: string[] = Array.isArray(body?.del) ? body.del : [];
      for (const item of puts) {
        if (!item || !validKey(item.key)) return reply(req, { error: "bad key", key: item?.key ?? null }, 400);
        if (JSON.stringify(item.data ?? null).length > MAX_ITEM) return reply(req, { error: "entry too large", key: item.key }, 413);
      }
      for (const key of dels) if (!validKey(key)) return reply(req, { error: "bad key", key }, 400);
      const written = await Promise.all(puts.map((item) => store.setJSON(item.key, item.data ?? null)));
      await Promise.all(dels.map((key) => store.delete(key)));
      return reply(req, {
        items: written.map((w, i) => ({ key: puts[i].key, etag: (w as { etag?: string } | undefined)?.etag ?? null })),
        deleted: dels,
      });
    }

    return reply(req, { error: "not found" }, 404);
  } catch (err) {
    console.error(err);
    return reply(req, { error: "server", detail: String((err as Error)?.message || err) }, 500);
  }
};

export const config: Config = {
  path: "/api/*",
  // Generous for autosave, far too slow for guessing the passcode.
  rateLimit: { windowLimit: 600, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
