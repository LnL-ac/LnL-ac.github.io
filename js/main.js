/* =====================================================================
   Loop & Logic — main.js
   Renders dynamic content + powers all interactions.
   Depends on data/courses.js (window.LNL)
   ===================================================================== */
(function () {
  "use strict";
  const { LNL_CONFIG, LNL_COURSES, LNL_FREE_COURSES, LNL_SLIDES, LNL_TESTIMONIALS,
          LNL_VIDEOS, LNL_BATCHES, LNL_FAQS, LNL_TRUST, LNL_COMMUNITY } = window.LNL;

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  /* ---------- ICONS (inline SVG) ---------- */
  const ICONS = {
    users: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    compass: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.9 6.4-6.4 2.9 2.9-6.4 6.4-2.9z"/></svg>',
    award: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/></svg>',
    "message-circle": '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.9-.9L3 21l1.9-5a8.4 8.4 0 0 1 7.1-12.5 8.4 8.4 0 0 1 9 8z"/></svg>',
    infinity: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 8.5a3.5 3.5 0 1 0 0 7c2 0 3.5-2 5.5-3.5C14 10.5 15.5 8.5 17.5 8.5a3.5 3.5 0 1 1 0 7c-2 0-3.5-2-5.5-3.5C10 10.5 8.5 8.5 6.5 8.5z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    book: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    bars: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-6"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    discord: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 5.3A18 18 0 0 0 15.5 4l-.2.4a13 13 0 0 1 3.9 2 12.5 12.5 0 0 0-10.4 0 13 13 0 0 1 3.9-2L12.5 4A18 18 0 0 0 8 5.3C4.5 10.4 3.6 15.4 4 20.3a18 18 0 0 0 5.4 2.7l.4-.6c-.9-.3-1.7-.7-2.4-1.2l.6-.4a12.9 12.9 0 0 0 11 0l.6.4c-.7.5-1.5.9-2.4 1.2l.4.6a18 18 0 0 0 5.4-2.7c.5-5.7-.8-10.6-3.6-15zM9.7 16.5c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1zm4.6 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.9 2.1-1.9 2.1z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4 0-.5.1-.6l.4-.4.2-.3v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c2.3.9 2.3.6 2.7.6a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z"/></svg>',
    code: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.4A3 3 0 0 0 1 7a31 31 0 0 0 0 10 3 3 0 0 0 2.1 2.1c1.9.4 8.9.4 8.9.4s7 0 8.9-.4A3 3 0 0 0 23 17a31 31 0 0 0 0-10z"/><path d="M10 15.5l5-3.5-5-3.5z" fill="#fff"/></svg>',
  };
  const stars = (n) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  /* ================================================================
     RENDER FUNCTIONS
  ================================================================ */

  // Banner slides
  function renderBanner() {
    $("#banner-slides").innerHTML = LNL_SLIDES.map((s) => `
      <div class="swiper-slide banner-slide">
        <img src="${s.img}" alt="${esc(s.title)}" loading="lazy" />
        <div class="banner-caption">
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.desc)}</p>
          <a href="${s.href}" class="btn btn-primary btn-sm">${esc(s.cta)}</a>
        </div>
      </div>`).join("");
  }

  // Trust cards
  function renderTrust() {
    $("#trust-grid").innerHTML = LNL_TRUST.map((t, i) => `
      <div class="trust-card" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="trust-ic">${ICONS[t.icon] || ""}</div>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.desc)}</p>
      </div>`).join("");
  }

  // Course filters
  function renderFilters() {
    const cats = ["All", ...new Set(LNL_COURSES.map((c) => c.category))];
    $("#course-filters").innerHTML = cats.map((c, i) =>
      `<button class="pill ${i === 0 ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  }

  // Course cards
  function courseCard(c) {
    return `
      <article class="course-card" data-aos="fade-up" data-cat="${esc(c.category)}"
               data-search="${esc((c.title + " " + c.tags.join(" ") + " " + c.category + " " + c.instructor).toLowerCase())}">
        <div class="course-banner">
          <img src="${c.banner}" alt="${esc(c.title)} course banner" loading="lazy" />
          <span class="course-level">${esc(c.level)}</span>
          <span class="course-rating">${ICONS.star} ${c.rating}</span>
        </div>
        <div class="course-body">
          <div class="course-tags">${c.tags.map((t) => `<span class="course-tag">${esc(t)}</span>`).join("")}</div>
          <h3>${esc(c.title)}</h3>
          <p class="course-instr">by ${esc(c.instructor)}</p>
          <div class="course-meta">
            <span>${ICONS.clock} ${esc(c.duration)}</span>
            <span>${ICONS.book} ${c.lessons} lessons</span>
            <span>${ICONS.bars} ${esc(c.level)}</span>
          </div>
          <div class="course-price">${c.price
            ? `<span class="now">${esc(c.price)}</span>${c.oldPrice ? `<span class="old">${esc(c.oldPrice)}</span>` : ""}`
            : `<span class="program-tag">Foundation Program</span>`}</div>
          <div class="course-actions">
            <button class="btn btn-ghost btn-sm" data-outline="${esc(c.id)}">View Outline</button>
            <a class="btn btn-primary btn-sm" href="${LNL_CONFIG.enrollUrl}" target="_blank" rel="noopener">Enroll Now</a>
          </div>
        </div>
      </article>`;
  }
  function renderCourses() { $("#course-grid").innerHTML = LNL_COURSES.map(courseCard).join(""); }

  // Free YouTube courses
  function renderFree() {
    const cats = ["All", ...new Set(LNL_FREE_COURSES.map((c) => c.cat))];
    $("#free-filters").innerHTML = cats.map((c, i) =>
      `<button class="pill ${i === 0 ? "active" : ""}" data-fcat="${esc(c)}">${esc(c)}</button>`).join("");
    $("#free-grid").innerHTML = LNL_FREE_COURSES.map((c, i) => `
      <a class="free-card" href="${c.url}" target="_blank" rel="noopener" data-aos="fade-up" data-aos-delay="${(i % 4) * 50}" data-fcat="${esc(c.cat)}">
        <div class="free-thumb"><img src="${c.thumb}" alt="${esc(c.title)} free course" loading="lazy" /><span class="free-badge">FREE</span></div>
        <div class="free-body">
          <span class="free-cat">${esc(c.cat)}</span>
          <h3>${esc(c.title)}</h3>
          <span class="free-watch">${ICONS.youtube} Watch on YouTube ${ICONS.arrow}</span>
        </div>
      </a>`).join("");
  }
  function initFreeFilter() {
    $("#free-filters").addEventListener("click", (e) => {
      const pill = e.target.closest(".pill"); if (!pill) return;
      $$("#free-filters .pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const cat = pill.dataset.fcat;
      $$(".free-card").forEach((card) => { card.style.display = (cat === "All" || card.dataset.fcat === cat) ? "" : "none"; });
    });
  }

  // Stories
  function renderStories() {
    $("#stories-slides").innerHTML = LNL_TESTIMONIALS.map((t) => `
      <div class="swiper-slide">
        <div class="story-card">
          <div class="story-stars">${stars(t.rating)}</div>
          <p class="story-review">"${esc(t.review)}"</p>
          <div class="story-foot">
            <img src="${t.avatar}" alt="${esc(t.name)}" loading="lazy" />
            <div><div class="story-name">${esc(t.name)}</div><div class="story-uni">${esc(t.uni)}</div></div>
          </div>
        </div>
      </div>`).join("");
  }

  // YouTube videos
  function renderVideos() {
    $("#yt-grid").innerHTML = LNL_VIDEOS.map((v) => `
      <a class="yt-video" href="${v.href}" target="_blank" rel="noopener">
        <img src="${v.thumb}" alt="${esc(v.title)}" loading="lazy" />
        <div class="yt-title">${esc(v.title)}<div class="yt-views">${esc(v.views)}</div></div>
      </a>`).join("");
    $("#yt-subscribe").href = LNL_CONFIG.youtube.url;
  }

  // Community
  function renderCommunity() {
    $("#community-grid").innerHTML = LNL_COMMUNITY.map((c, i) => `
      <a class="community-card" href="${c.href}" target="_blank" rel="noopener" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="community-ic" style="background:${c.color}">${ICONS[c.icon] || ICONS.code}</div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.desc)}</p>
        <span class="join">Join now ${ICONS.arrow}</span>
      </a>`).join("");
  }

  // Batches
  function renderBatches() {
    $("#batch-grid").innerHTML = LNL_BATCHES.map((b, i) => {
      const taken = b.totalSeats - b.seatsLeft;
      const pct = Math.round((taken / b.totalSeats) * 100);
      const d = new Date(b.startDate + "T09:00:00");
      const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      return `
      <div class="batch-card" data-aos="fade-up" data-aos-delay="${i * 70}">
        <h3>${esc(b.course)}</h3>
        <p class="batch-level">Starts ${dateStr} · ${esc(b.level)}</p>
        <div class="seats-left">🔥 Only ${b.seatsLeft} seats left</div>
        <div class="seats-bar"><div class="seats-fill" style="width:${pct}%"></div></div>
        <div class="countdown" data-deadline="${b.startDate}T09:00:00">
          <div class="cd-box"><b data-d>00</b><span>Days</span></div>
          <div class="cd-box"><b data-h>00</b><span>Hrs</span></div>
          <div class="cd-box"><b data-m>00</b><span>Min</span></div>
          <div class="cd-box"><b data-s>00</b><span>Sec</span></div>
        </div>
        <a class="btn btn-primary btn-block" href="${LNL_CONFIG.enrollUrl}">Reserve My Seat</a>
      </div>`;
    }).join("");
  }

  // FAQ
  function renderFAQ() {
    $("#faq-list").innerHTML = LNL_FAQS.map((f, i) => `
      <div class="faq-item" data-aos="fade-up" data-aos-delay="${i * 40}">
        <button class="faq-q" aria-expanded="false">${esc(f.q)}
          <svg class="chev" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </div>`).join("");
  }

  // Footer
  function renderFooter() {
    const c = LNL_CONFIG;
    $("#footer-courses").innerHTML = LNL_COURSES.slice(0, 5).map((x) => `<li><a href="#courses">${esc(x.title)}</a></li>`).join("");
    $("#footer-social").innerHTML = `
      <a href="${c.youtube.url}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
      <a href="${c.community.discord}" target="_blank" rel="noopener" aria-label="Discord">${ICONS.discord}</a>
      <a href="${c.community.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
      <a href="${c.community.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>`;
    $("#footer-contact").innerHTML = `✉ ${esc(c.contact.email)}<br>📞 ${esc(c.contact.phone)}<br>📍 ${esc(c.contact.location)}`;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ================================================================
     INTERACTIONS
  ================================================================ */

  // Theme toggle (in-memory; respects system on first load)
  let theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0F172A" : "#F8FAFC");
  }
  function initTheme() {
    applyTheme();
    $("#theme-toggle").addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; applyTheme(); });
  }

  // Typing effect
  function initTyping() {
    const el = $("#typed");
    if (!el) return;
    const words = ["C Programming", "Data Structures", "Algorithms", "OOP & Java", "Problem Solving"];
    let wi = 0, ci = 0, deleting = false;
    (function tick() {
      const w = words[wi];
      el.textContent = w.slice(0, ci);
      if (!deleting && ci < w.length) { ci++; setTimeout(tick, 90); }
      else if (!deleting) { deleting = true; setTimeout(tick, 1600); }
      else if (ci > 0) { ci--; setTimeout(tick, 45); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 250); }
    })();
  }

  // Animated counters
  function initCounters() {
    const els = $$("[data-count]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || "";
        const dur = 1600, t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
          el.textContent = val.toLocaleString() + (p === 1 ? suffix : "");
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
  }

  // Particles (lightweight canvas)
  function initParticles() {
    const canvas = $("#particles");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let w, h, pts, raf;
    const N = window.innerWidth < 768 ? 34 : 70;
    function size() { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
    function make() { pts = Array.from({ length: N }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 1.8 + .6 })); }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const col = light ? "37,99,235" : "148,163,184";
      pts.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fillStyle = `rgba(${col},.6)`; ctx.fill(); });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
        if (d < 120) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(${col},${.14 * (1 - d / 120)})`; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    }
    size(); make(); cancelAnimationFrame(raf); draw();
    window.addEventListener("resize", () => { size(); make(); });
  }

  // Course search + filter
  function initCourseFilter() {
    const grid = $("#course-grid"), search = $("#course-search"), noRes = $("#no-results");
    let cat = "All";
    function apply() {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      $$(".course-card", grid).forEach((card) => {
        const okCat = cat === "All" || card.dataset.cat === cat;
        const okSearch = !q || card.dataset.search.includes(q);
        const show = okCat && okSearch;
        card.style.display = show ? "" : "none";
        if (show) shown++;
      });
      noRes.hidden = shown !== 0;
    }
    $("#course-filters").addEventListener("click", (e) => {
      const pill = e.target.closest(".pill"); if (!pill) return;
      $$(".pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active"); cat = pill.dataset.cat; apply();
    });
    search.addEventListener("input", apply);
  }

  // Outline modal
  function initModal() {
    const modal = $("#course-modal"), body = $("#modal-body");
    function open(id) {
      const c = LNL_COURSES.find((x) => x.id === id); if (!c) return;
      body.innerHTML = `
        <div class="modal-head">
          <img src="${c.banner}" alt="${esc(c.title)}" />
          <div>
            <h2 id="modal-title">${esc(c.title)}</h2>
            <p class="sub">by ${esc(c.instructor)} · ${esc(c.duration)} · ${c.lessons} lessons · ${esc(c.level)}</p>
          </div>
        </div>
        <p style="color:var(--muted);margin-bottom:1rem">${esc(c.summary)}</p>
        <div class="modal-outcomes">${c.outcomes.map((o) => `<span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>${esc(o)}</span>`).join("")}</div>
        <h3 style="font-size:1.1rem;margin-bottom:.8rem">Course Outline</h3>
        ${c.modules.map((m, i) => `
          <div class="acc-item ${i === 0 ? "open" : ""}">
            <button class="acc-head" aria-expanded="${i === 0}">${esc(m.title)}
              <svg class="chev" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="acc-panel"><ul>${m.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul></div>
          </div>`).join("")}
        <div class="modal-cta">
          <a class="btn btn-primary" href="${LNL_CONFIG.enrollUrl}" target="_blank" rel="noopener">Register for This Course${c.price ? " — " + esc(c.price) : ""}</a>
          <a class="btn btn-ghost" href="#free-courses" data-close>Watch Free Classes</a>
        </div>`;
      // accordion within modal
      $$(".acc-head", body).forEach((h) => h.addEventListener("click", () => {
        const item = h.closest(".acc-item"), panel = $(".acc-panel", item), isOpen = item.classList.contains("open");
        item.classList.toggle("open"); h.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
      }));
      // set first panel height
      const first = $(".acc-item.open .acc-panel", body); if (first) first.style.maxHeight = first.scrollHeight + "px";
      modal.hidden = false; document.body.style.overflow = "hidden";
    }
    function close() { modal.hidden = true; document.body.style.overflow = ""; }
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-outline]");
      if (btn) { e.preventDefault(); open(btn.dataset.outline); }
      if (e.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
  }

  // Generic accordion (FAQ)
  function initFAQ() {
    $("#faq-list").addEventListener("click", (e) => {
      const q = e.target.closest(".faq-q"); if (!q) return;
      const item = q.closest(".faq-item"), a = $(".faq-a", item), isOpen = item.classList.contains("open");
      item.classList.toggle("open"); q.setAttribute("aria-expanded", String(!isOpen));
      a.style.maxHeight = isOpen ? null : a.scrollHeight + "px";
    });
  }

  // Countdown timers
  function initCountdowns() {
    const boxes = $$(".countdown");
    function tick() {
      const now = Date.now();
      boxes.forEach((b) => {
        let diff = new Date(b.dataset.deadline).getTime() - now;
        if (diff < 0) diff = 0;
        const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
        const pad = (n) => String(n).padStart(2, "0");
        $("[data-d]", b).textContent = pad(d); $("[data-h]", b).textContent = pad(h);
        $("[data-m]", b).textContent = pad(m); $("[data-s]", b).textContent = pad(s);
      });
    }
    if (boxes.length) { tick(); setInterval(tick, 1000); }
  }

  // Navbar scroll + mobile menu + scroll progress + back-to-top
  function initNav() {
    const nav = $("#navbar"), links = $("#nav-links"), toggle = $("#nav-toggle"),
          prog = $("#scroll-progress"), top = $("#back-to-top");
    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 30);
      top.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) { links.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Forms (no backend — friendly confirmation)
  function initForms() {
    function handle(form, note, msg) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = $$("input[required]", form);
        let ok = true;
        inputs.forEach((i) => { const valid = i.checkValidity(); i.classList.toggle("invalid", !valid); if (!valid) ok = false; });
        if (!ok) { note.textContent = "Please fill in all fields correctly."; note.className = "form-note err"; return; }
        note.textContent = msg; note.className = "form-note ok"; form.reset();
      });
    }
    handle($("#lead-form"), $("#lead-note"), "🎉 Thanks! Check your email for your free resources.");
    handle($("#newsletter-form"), $("#news-note"), "✅ Subscribed! You're on the list.");
    const pf = $("#popup-form");
    pf && pf.addEventListener("submit", (e) => { e.preventDefault(); pf.innerHTML = '<p class="form-note ok" style="text-align:center">🎉 Sent! Check your inbox.</p>'; setTimeout(closePopup, 1600); });
  }

  // Popup: newsletter (timed) + exit intent — shows once per session
  let popupShown = false;
  function showPopup() { if (popupShown) return; popupShown = true; $("#popup").hidden = false; }
  function closePopup() { $("#popup").hidden = true; }
  function initPopup() {
    document.addEventListener("click", (e) => { if (e.target.closest("[data-popup-close]")) closePopup(); });
    setTimeout(showPopup, 25000); // timed
    document.addEventListener("mouseout", (e) => { if (e.clientY <= 0 && !e.relatedTarget) showPopup(); }); // exit intent
  }

  // Swipers
  function initSwipers() {
    if (typeof Swiper === "undefined") return;
    new Swiper(".banner-swiper", {
      loop: true, autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".banner-swiper .swiper-pagination", clickable: true },
      grabCursor: true, effect: "slide",
    });
    new Swiper(".stories-swiper", {
      loop: true, spaceBetween: 20, grabCursor: true, autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".stories-swiper .swiper-pagination", clickable: true },
      breakpoints: { 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 980: { slidesPerView: 3 } },
    });
  }

  /* ================================================================
     INIT
  ================================================================ */
  function init() {
    // render content first
    renderBanner(); renderTrust(); renderFilters(); renderCourses();
    renderFree(); renderStories(); renderVideos(); renderCommunity(); renderBatches();
    renderFAQ(); renderFooter();
    // interactions
    initTheme(); initTyping(); initCounters(); initParticles();
    initCourseFilter(); initFreeFilter(); initModal(); initFAQ(); initCountdowns();
    initNav(); initForms(); initPopup();
    // libs (Swiper/AOS load with defer, may be ready or not)
    function libs() {
      initSwipers();
      if (typeof AOS !== "undefined") AOS.init({ duration: 700, once: true, offset: 60, disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches });
    }
    if (typeof Swiper !== "undefined" && typeof AOS !== "undefined") libs();
    else window.addEventListener("load", libs);
    // loader
    window.addEventListener("load", () => setTimeout(() => $("#loader").classList.add("hide"), 350));
    setTimeout(() => $("#loader").classList.add("hide"), 2500); // failsafe
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
