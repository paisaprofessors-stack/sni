const assert = require("node:assert/strict");
const { webcrypto } = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const html = read("index.html");
const css = read("style.css");
const js = read("script.js");
const privateName = ["San", "vi"].join("");
const removedHeading = ["A little", " note for you"].join("");
const removedGreeting = ["bh", "en"].join("");
const removedReasonsBadge = ["20 tiny", " reasons"].join("");
const removedCloseBadge = ["Always", " close"].join("");
const removedBadgesClass = ["letter-header", "-badges"].join("");
const removedEyebrowClass = ["letter", "-eyebrow"].join("");
const cuteAttitudeLineStart = ["Kabhi cute", ", kabhi nautanki"].join("");
const challengeLineStart = ["Aur haan laadli", ", jab mann ho"].join("");
const removedFearLine = ["Thoda sa", " darta hu"].join("");
const smirkEmoji = String.fromCodePoint(0x1f60f);
const shyEmojis = String.fromCodePoint(0x1f648, 0x1fae3);

assert.ok(exists(".gitignore"), ".gitignore should exist for GitHub pushes");
assert.ok(exists(".env.example"), ".env.example should document local env handling");
assert.ok(exists("vercel.json"), "vercel.json should set deployment security headers");

const gitignore = exists(".gitignore") ? read(".gitignore") : "";
assert.match(gitignore, /^\.env$/m, ".env should be ignored");
assert.match(gitignore, /^\.env\.\*$/m, ".env.* should be ignored");
assert.match(gitignore, /^!\.env\.example$/m, ".env.example should stay committable");
assert.match(gitignore, /^\.vercel\/$/m, ".vercel should be ignored");

const vercel = exists("vercel.json") ? read("vercel.json") : "";
assert.match(vercel, /Content-Security-Policy/, "CSP should be configured");
assert.match(vercel, /frame-ancestors 'none'/, "framing should be blocked");
assert.match(vercel, /X-Robots-Tag/, "private gift page should be noindexed");

const combined = [html, css, js].join("\n");
for (const text of [
  privateName,
  ["Replay", " animation"].join(""),
  ["Read", " again"].join(""),
  ["Made only", " for you"].join(""),
  removedHeading,
  removedReasonsBadge,
  removedCloseBadge,
  removedBadgesClass,
  removedEyebrowClass,
  removedGreeting,
  cuteAttitudeLineStart,
  challengeLineStart,
  removedFearLine,
]) {
  assert.equal(combined.includes(text), false, `source should not contain plaintext: ${text}`);
}

assert.equal(
  /"sections"\s*:|"paragraphs"\s*:|"items"\s*:/.test(combined),
  false,
  "source should not expose the letter JSON as plaintext"
);

assert.match(js, /function normalizePassword/, "password normalization should be explicit");
assert.match(js, /charAt\(0\)\.toLowerCase\(\)/, "first password character should be case-insensitive");
assert.match(js, /crypto\.subtle/, "letter should use Web Crypto before reveal");
assert.match(js, /PBKDF2/, "password-derived key should use PBKDF2");
assert.match(js, /AES-GCM/, "letter payload should use authenticated encryption");
assert.match(js, /history\.replaceState/, "direct hash/query jumps should be scrubbed");

function parsePassword() {
  const match = js.match(/const PASSWORD_PARTS = (\[[^\]]+\]);/);
  assert.ok(match, "password parts should stay in an explicit array");
  return JSON.parse(match[1]).join("");
}

function parseLetterPayload() {
  const match = js.match(/const LETTER_PAYLOAD = (\{[\s\S]*?\n\});/);
  assert.ok(match, "letter payload should be readable as a static object");
  return Function(`"use strict"; return (${match[1]});`)();
}

function base64ToBytes(value) {
  return Uint8Array.from(Buffer.from(value, "base64"));
}

async function decryptPayloadForTest(password, payload) {
  const keyMaterial = await webcrypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await webcrypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64ToBytes(payload.salt),
      iterations: payload.iterations,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );

  const decrypted = await webcrypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: base64ToBytes(payload.iv)
    },
    key,
    base64ToBytes(payload.data)
  );

  return JSON.parse(new TextDecoder().decode(decrypted));
}

async function main() {
  const payload = await decryptPayloadForTest(parsePassword(), parseLetterPayload());
  assert.ok(Array.isArray(payload.sections), "letter payload should use structured sections");

  const decryptedText = JSON.stringify(payload);
  for (const text of [privateName, removedHeading, removedGreeting, removedFearLine]) {
    assert.ok(decryptedText.includes(text), `decrypted payload should contain the new note text: ${text}`);
  }

  const listSection = payload.sections.find((section) => Array.isArray(section.items));
  assert.ok(listSection, "letter payload should contain a structured list section");
  assert.equal(listSection.items.length, 20, "letter payload should contain all 20 liked-things items");
  assert.ok(
    listSection.items.every((item) => typeof item === "string" && item.trim().length > 0),
    "each liked-things item should be a non-empty string"
  );

  const allPayloadText = [
    ...payload.sections.flatMap((section) => section.paragraphs || []),
    ...payload.sections.flatMap((section) => section.items || [])
  ].join("\n");

  assert.match(
    allPayloadText,
    new RegExp(`${cuteAttitudeLineStart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^\\n]*${smirkEmoji}`),
    "cute/attitude line should keep the smirk emoji"
  );
  assert.match(
    allPayloadText,
    new RegExp(`${challengeLineStart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^\\n]*${shyEmojis}`),
    "challenge line should keep both shy emojis"
  );
  assert.ok(allPayloadText.includes(removedFearLine), "new note should include the playful fear sentence");
  assert.equal(allPayloadText.includes("ðŸ"), false, "payload should not contain mojibake emoji text");
  assert.equal(allPayloadText.includes("??"), false, "old placeholder question-mark emojis should be removed");

  console.log("security checks passed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
