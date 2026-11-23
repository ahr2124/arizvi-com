// Encrypts a standalone HTML page behind a password for static hosting.
// Usage: ATMRI_PASSWORD=... node scripts/protect.mjs <source.html> <out.html> [title]
// The page is AES-GCM encrypted with a PBKDF2 key; the browser decrypts it
// only when the right password is entered. Keep the source file out of git.
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';

const [src, out, title = 'Protected page'] = process.argv.slice(2);
const password = process.env.ATMRI_PASSWORD;
if (!src || !out || !password) {
  console.error('Usage: ATMRI_PASSWORD=... node scripts/protect.mjs <source.html> <out.html> [title]');
  process.exit(1);
}

const ITERATIONS = 600000;
const enc = new TextEncoder();
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  base, { name: 'AES-GCM', length: 256 }, false, ['encrypt'],
);
const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(readFileSync(src, 'utf8'))));
const b64 = (u) => Buffer.from(u).toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

writeFileSync(out, `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
<style>
:root { --bg: #121922; --panel: #171f2b; --line: #2a3547; --ink: #e7edf5; --muted: #93a1b5; --accent: #7fd8f0; --red: #ff6b6b; }
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px; background: var(--bg); color: var(--ink); font: 15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
form { width: 100%; max-width: 340px; background: var(--panel); border: 1px solid var(--line); border-radius: 6px; padding: 24px; }
h1 { margin: 0 0 4px; font-size: 17px; font-weight: 600; }
p { margin: 0 0 16px; color: var(--muted); font-size: 13px; }
input, button { width: 100%; font: inherit; border-radius: 4px; padding: 10px 12px; }
input { background: var(--bg); color: var(--ink); border: 1px solid var(--line); margin-bottom: 10px; }
input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
button { background: var(--accent); color: #0e131b; border: 0; font-weight: 600; cursor: pointer; }
button:disabled { opacity: .6; cursor: wait; }
#err { color: var(--red); margin: 10px 0 0; min-height: 1.5em; }
</style>
</head>
<body>
<form id="gate">
  <h1>${esc(title)}</h1>
  <p>Enter the password to open this page.</p>
  <input id="pw" type="password" autocomplete="current-password" aria-label="Password" autofocus required>
  <button id="go" type="submit">Open</button>
  <p id="err" role="alert"></p>
</form>
<script>
const DATA = { salt: "${b64(salt)}", iv: "${b64(iv)}", iterations: ${ITERATIONS}, cipher: "${b64(cipher)}" };
const KEY = "atmri-pw";
const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
async function unlock(pw) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: bytes(DATA.salt), iterations: DATA.iterations, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(DATA.iv) }, key, bytes(DATA.cipher));
  try { sessionStorage.setItem(KEY, pw); } catch (e) {}
  document.open(); document.write(new TextDecoder().decode(plain)); document.close();
}
const form = document.getElementById("gate"), go = document.getElementById("go"), err = document.getElementById("err");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  go.disabled = true; err.textContent = "";
  try { await unlock(document.getElementById("pw").value); }
  catch (e) { go.disabled = false; err.textContent = "That password didn't work."; }
});
let saved = null;
try { saved = sessionStorage.getItem(KEY); } catch (e) {}
if (saved) unlock(saved).catch(() => { try { sessionStorage.removeItem(KEY); } catch (e) {} });
</script>
</body>
</html>
`);
console.log(`Wrote ${out}`);
