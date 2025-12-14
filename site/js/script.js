(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");

  function setNav(open) {
    if (!navToggle || !navMenu) return;
    navMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      setNav(!navMenu.classList.contains("is-open"));
    });

    // Close on link click (mobile)
    $$("#navMenu a").forEach((a) => a.addEventListener("click", () => setNav(false)));

    // Close on outside click
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!t) return;
      const inside = navMenu.contains(t) || navToggle.contains(t);
      if (!inside) setNav(false);
    });
  }

  // Smooth scroll for internal anchors
  document.addEventListener("click", (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const el = document.querySelector(href);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Steps highlight
  const steps = $$(".step");
  const activate = (el) => {
    steps.forEach((s) => s.classList.remove("is-active"));
    if (el) el.classList.add("is-active");
  };

  steps.forEach((s) => {
    s.addEventListener("mouseenter", () => activate(s));
    s.addEventListener("focus", () => activate(s));
    s.addEventListener("click", () => activate(s));
  });
  if (steps[0]) activate(steps[0]);

  // Waitlist validation (stub submit)
  const form = $("#waitlistForm");
  const email = $("#email");
  const msg = $("#formMsg");

  function setMsg(text, type) {
    if (!msg) return;
    msg.textContent = text || "";
    msg.classList.remove("ok", "err");
    if (type) msg.classList.add(type);
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
  }

  if (form && email) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const val = email.value.trim();

      if (!isValidEmail(val)) {
        setMsg("Please enter a valid email address.", "err");
        email.focus();
        return;
      }

      // TODO: Replace with Formspree or your backend endpoint
      // Example:
      // await fetch("https://formspree.io/f/xxxxxx", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: val })
      // });

      setMsg("✅ You’re on the list! (Wire to Formspree/backend next)", "ok");
      form.reset();
    });

    email.addEventListener("input", () => setMsg(""));
  }
})();
