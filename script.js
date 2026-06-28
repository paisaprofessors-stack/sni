const PASSWORD_PARTS = ["s", "a", "n", "v", "i", "2", "6"];
const UNLOCK_DURATION_MS = 3900;
const LETTER_PAYLOAD = {
  "iterations": 150000,
  "salt": "WwoyizJC02oY35hxuTFPWw==",
  "iv": "nB6GmCUdjHD0lBmt",
  "data": "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"
};

const passwordScreen = document.getElementById("passwordScreen");
const unlockScreen = document.getElementById("unlockScreen");
const letterScreen = document.getElementById("letterScreen");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordCard = document.getElementById("passwordCard");
const passwordError = document.getElementById("passwordError");
const ambientLayer = document.getElementById("ambientLayer");
const unlockParticles = document.getElementById("unlockParticles");
const letterSparkles = document.getElementById("letterSparkles");
const letterCard = document.getElementById("letterCard");
const letterContent = document.getElementById("letterContent");
const unlockButton = passwordForm.querySelector("button[type='submit']");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function normalizePassword(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return `${trimmed.charAt(0).toLowerCase()}${trimmed.slice(1)}`;
}

function expectedPassword() {
  return PASSWORD_PARTS.join("");
}

function sanitizeAddressBar() {
  if (!window.location.hash && !window.location.search) {
    return;
  }

  window.history.replaceState(null, document.title, window.location.pathname || "/");
}

function enforceLockedStart() {
  passwordScreen.hidden = false;
  passwordScreen.classList.add("is-active");
  unlockScreen.hidden = true;
  unlockScreen.classList.remove("is-active", "is-leaving");
  letterScreen.hidden = true;
  letterScreen.classList.remove("is-active", "is-leaving");
  letterContent.replaceChildren();
}

function base64ToBytes(value) {
  const binary = window.atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

async function deriveLetterKey(password) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64ToBytes(LETTER_PAYLOAD.salt),
      iterations: LETTER_PAYLOAD.iterations,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

async function decryptLetterPayload(password) {
  if (!window.crypto?.subtle) {
    throw new Error("Web Crypto is unavailable.");
  }

  const key = await deriveLetterKey(password);
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: base64ToBytes(LETTER_PAYLOAD.iv)
    },
    key,
    base64ToBytes(LETTER_PAYLOAD.data)
  );

  return JSON.parse(new TextDecoder().decode(decrypted));
}

function appendTextWithBreaks(parent, text) {
  const lines = String(text).split("\n");

  lines.forEach((line, index) => {
    if (index > 0) {
      parent.appendChild(document.createElement("br"));
    }

    parent.appendChild(document.createTextNode(line));
  });
}

function appendLetterParagraph(parent, text, className = "") {
  const paragraphElement = document.createElement("p");

  if (className) {
    paragraphElement.className = className;
  }

  appendTextWithBreaks(paragraphElement, text);
  parent.appendChild(paragraphElement);
  return paragraphElement;
}

function createStructuredSection(section, sectionIndex) {
  const sectionElement = document.createElement("section");
  sectionElement.className = "letter-section";

  if (section.kind) {
    sectionElement.dataset.section = String(section.kind).replace(/[^a-z0-9-]/gi, "").toLowerCase();
  }

  if (section.title) {
    const titleElement = document.createElement("h3");
    titleElement.className = "letter-section-title";
    appendTextWithBreaks(titleElement, section.title);
    sectionElement.appendChild(titleElement);
  }

  if (Array.isArray(section.paragraphs)) {
    section.paragraphs.forEach((paragraph, paragraphIndex) => {
      const className = sectionIndex === 0 && paragraphIndex === 0 ? "letter-kicker" : "";
      appendLetterParagraph(sectionElement, paragraph, className);
    });
  }

  if (Array.isArray(section.items)) {
    const listElement = document.createElement("ol");
    listElement.className = "letter-badge-list";

    section.items.forEach((item, itemIndex) => {
      const itemElement = document.createElement("li");
      itemElement.style.setProperty("--badge-delay", `${120 + itemIndex * 38}ms`);

      const numberElement = document.createElement("span");
      numberElement.className = "letter-badge-number";
      numberElement.textContent = String(itemIndex + 1).padStart(2, "0");

      const textElement = document.createElement("span");
      textElement.className = "letter-badge-text";
      appendTextWithBreaks(textElement, item);

      itemElement.append(numberElement, textElement);
      listElement.appendChild(itemElement);
    });

    sectionElement.appendChild(listElement);
  }

  return sectionElement;
}

function renderStructuredLetterPayload(payload) {
  if (!Array.isArray(payload.sections)) {
    throw new Error("Invalid letter payload.");
  }

  const fragment = document.createDocumentFragment();

  payload.sections.forEach((section, sectionIndex) => {
    fragment.appendChild(createStructuredSection(section, sectionIndex));
  });

  letterContent.replaceChildren(fragment);
}

function renderLegacyLetterPayload(payload) {
  if (!Array.isArray(payload.paragraphs)) {
    throw new Error("Invalid letter payload.");
  }

  const fragment = document.createDocumentFragment();

  for (const paragraph of payload.paragraphs) {
    appendLetterParagraph(fragment, paragraph);
  }

  letterContent.replaceChildren(fragment);
}

function renderLetterPayload(payload) {
  if (Array.isArray(payload.sections)) {
    renderStructuredLetterPayload(payload);
    return;
  }

  renderLegacyLetterPayload(payload);
}

function setUnlockPending(isPending) {
  unlockButton.disabled = isPending;
  unlockButton.setAttribute("aria-busy", String(isPending));
}

// Shared helpers for randomized decorative elements.
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart(parent, options = {}) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.style.left = `${randomBetween(4, 96)}%`;
  heart.style.setProperty("--size", `${randomBetween(options.minSize || 9, options.maxSize || 20)}px`);
  heart.style.setProperty("--duration", `${randomBetween(options.minDuration || 9, options.maxDuration || 16)}s`);
  heart.style.setProperty("--drift", `${randomBetween(-55, 55)}px`);
  heart.style.setProperty("--spin", `${randomBetween(-22, 22)}deg`);
  heart.style.setProperty("--opacity", randomBetween(0.16, options.maxOpacity || 0.42).toFixed(2));
  heart.style.animationDelay = `${randomBetween(options.minDelay || -12, options.maxDelay || 0)}s`;
  parent.appendChild(heart);
  return heart;
}

function createPetal(parent, options = {}) {
  const petal = document.createElement("span");
  petal.className = "floating-petal";
  petal.style.left = `${randomBetween(-8, 102)}%`;
  petal.style.setProperty("--width", `${randomBetween(options.minWidth || 8, options.maxWidth || 15)}px`);
  petal.style.setProperty("--height", `${randomBetween(options.minHeight || 17, options.maxHeight || 30)}px`);
  petal.style.setProperty("--duration", `${randomBetween(options.minDuration || 10, options.maxDuration || 18)}s`);
  petal.style.setProperty("--start-x", `${randomBetween(-28, 28)}px`);
  petal.style.setProperty("--sway", `${randomBetween(24, 82)}px`);
  petal.style.setProperty("--rotate", `${randomBetween(-30, 48)}deg`);
  petal.style.setProperty("--opacity", randomBetween(0.2, options.maxOpacity || 0.5).toFixed(2));
  petal.style.animationDelay = `${randomBetween(options.minDelay || -14, options.maxDelay || 0)}s`;
  parent.appendChild(petal);
  return petal;
}

function createGlow(parent, options = {}) {
  const glow = document.createElement("span");
  glow.className = "floating-glow";
  glow.style.left = `${randomBetween(options.minX || 4, options.maxX || 96)}%`;
  glow.style.top = `${randomBetween(options.minY || 8, options.maxY || 92)}%`;
  glow.style.setProperty("--size", `${randomBetween(options.minSize || 9, options.maxSize || 22)}px`);
  glow.style.setProperty("--duration", `${randomBetween(options.minDuration || 3.2, options.maxDuration || 7.5)}s`);
  glow.style.animationDelay = `${randomBetween(options.minDelay || -5, options.maxDelay || 0)}s`;
  parent.appendChild(glow);
  return glow;
}

function createSparkle(parent, options = {}) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${randomBetween(options.minX || 6, options.maxX || 94)}%`;
  sparkle.style.top = `${randomBetween(options.minY || 8, options.maxY || 92)}%`;
  sparkle.style.setProperty("--size", `${randomBetween(options.minSize || 5, options.maxSize || 10)}px`);
  sparkle.style.setProperty("--duration", `${randomBetween(options.minDuration || 2.1, options.maxDuration || 4.4)}s`);
  sparkle.style.animationDelay = `${randomBetween(options.minDelay || -3, options.maxDelay || 0)}s`;
  parent.appendChild(sparkle);
  return sparkle;
}

// Ambient background motion stays subtle after the letter appears.
function seedAmbientMotion() {
  if (prefersReducedMotion) {
    return;
  }

  const width = window.innerWidth;
  const heartCount = width < 480 ? 10 : 16;
  const petalCount = width < 480 ? 12 : 20;
  const sparkleCount = width < 480 ? 14 : 22;
  const glowCount = width < 480 ? 7 : 11;

  for (let index = 0; index < heartCount; index += 1) {
    createHeart(ambientLayer);
  }

  for (let index = 0; index < petalCount; index += 1) {
    createPetal(ambientLayer);
  }

  for (let index = 0; index < sparkleCount; index += 1) {
    createSparkle(ambientLayer);
  }

  for (let index = 0; index < glowCount; index += 1) {
    createGlow(ambientLayer);
  }
}

// The unlock sequence gets denser particles for a short ceremonial moment.
function seedUnlockParticles() {
  unlockParticles.replaceChildren();

  if (prefersReducedMotion) {
    return;
  }

  for (let index = 0; index < 14; index += 1) {
    createHeart(unlockParticles, {
      minSize: 11,
      maxSize: 24,
      minDuration: 3.1,
      maxDuration: 4.2,
      minDelay: 0,
      maxDelay: 0.8,
      maxOpacity: 0.58
    });
  }

  for (let index = 0; index < 20; index += 1) {
    createPetal(unlockParticles, {
      minWidth: 9,
      maxWidth: 17,
      minHeight: 18,
      maxHeight: 32,
      minDuration: 3.2,
      maxDuration: 4.4,
      minDelay: 0,
      maxDelay: 0.7,
      maxOpacity: 0.62
    });
  }

  for (let index = 0; index < 30; index += 1) {
    createSparkle(unlockParticles, {
      minDuration: 1.4,
      maxDuration: 2.7,
      minDelay: 0,
      maxDelay: 1.4
    });
  }

  for (let index = 0; index < 12; index += 1) {
    createGlow(unlockParticles, {
      minSize: 12,
      maxSize: 34,
      minDuration: 2.1,
      maxDuration: 4.1,
      minDelay: 0,
      maxDelay: 1.1
    });
  }
}

// Letter sparkles are intentionally confined to the card.
function seedLetterSparkles() {
  letterSparkles.replaceChildren();

  if (prefersReducedMotion) {
    return;
  }

  for (let index = 0; index < 16; index += 1) {
    createSparkle(letterSparkles, {
      minX: 8,
      maxX: 92,
      minY: 7,
      maxY: 34,
      minSize: 4,
      maxSize: 8,
      minDuration: 1.7,
      maxDuration: 3.1,
      minDelay: 0,
      maxDelay: 0.8
    });
  }
}

// Screen transitions keep hidden sections out of keyboard navigation.
function showScreen(screen) {
  screen.hidden = false;
  requestAnimationFrame(() => {
    screen.classList.add("is-active");
  });
}

function hideScreen(screen) {
  screen.classList.remove("is-active");
  screen.classList.add("is-leaving");

  window.setTimeout(() => {
    screen.hidden = true;
    screen.classList.remove("is-leaving");
  }, prefersReducedMotion ? 40 : 560);
}

// Gift flow.
function revealLetter() {
  unlockScreen.classList.remove("is-active");
  unlockScreen.hidden = true;
  unlockParticles.replaceChildren();
  showScreen(letterScreen);
  seedLetterSparkles();
  letterCard.classList.remove("is-revealing");
  void letterCard.offsetWidth;
  letterCard.classList.add("is-revealing");

  window.setTimeout(() => {
    letterCard.focus({ preventScroll: true });
  }, prefersReducedMotion ? 60 : 620);
}

function playUnlockAnimation() {
  letterScreen.hidden = true;
  letterScreen.classList.remove("is-active", "is-leaving");
  seedUnlockParticles();
  showScreen(unlockScreen);

  window.setTimeout(revealLetter, prefersReducedMotion ? 700 : UNLOCK_DURATION_MS);
}

function unlockGift() {
  passwordError.textContent = "";
  passwordInput.setAttribute("aria-invalid", "false");
  hideScreen(passwordScreen);
  window.setTimeout(playUnlockAnimation, prefersReducedMotion ? 80 : 540);
}

function showPasswordError(message = "Oops, that's not it. Try again.") {
  passwordInput.setAttribute("aria-invalid", "true");
  passwordError.textContent = message;
  passwordCard.classList.remove("is-shaking");
  void passwordCard.offsetWidth;
  passwordCard.classList.add("is-shaking");
  passwordInput.select();
}

// Event wiring.
passwordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const value = normalizePassword(passwordInput.value);

  if (value !== expectedPassword()) {
    showPasswordError();
    return;
  }

  try {
    setUnlockPending(true);
    const payload = await decryptLetterPayload(value);
    renderLetterPayload(payload);
    unlockGift();
    return;
  } catch (error) {
    showPasswordError("This browser could not open the private note. Try again.");
  } finally {
    setUnlockPending(false);
  }
});

sanitizeAddressBar();
enforceLockedStart();
seedAmbientMotion();
