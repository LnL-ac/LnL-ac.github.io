# Loop & Logic (LNL) — Landing Website

A modern, mobile-first, high-converting EdTech landing site for **Loop & Logic**. Built with plain **HTML5 + CSS3 + JavaScript**, **Swiper.js** sliders, and **AOS** animations. No backend, no build step — deploys straight to **GitHub Pages**.

## ✨ Features

- Full-screen hero with particle background, typing effect, floating tech icons, animated counters
- Auto-sliding featured banner (Swiper, 3s loop, swipe + dots)
- Trust / "Why us" cards, featured courses grid with **live search + category filter**
- **Detailed course outline modal** with accordion modules (the conversion centerpiece)
- Success-story carousel, animated learning-journey timeline
- YouTube promo, community links, upcoming batches with **live countdown timers + seat scarcity**
- FAQ accordion, lead-capture form, newsletter + exit-intent popup
- Dark/Light theme toggle, scroll progress bar, back-to-top, floating WhatsApp button
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD schema (Organization + FAQ)
- Accessible markup, keyboard-friendly, respects `prefers-reduced-motion`

## 📁 Structure

```
.
├── index.html          # All 14 sections + SEO
├── css/style.css       # Theming, glassmorphism, responsive
├── js/main.js          # Rendering + all interactions
├── data/courses.js     # ← EDIT THIS to update content
└── assets/img/         # SVG banners, logo, avatars, OG image
```

## ✏️ Updating content

Everything is data-driven. Open **`data/courses.js`** and edit the arrays:

- `LNL_CONFIG` — brand, YouTube URL, community links, contact, enroll link
- `LNL_COURSES` — courses + their full outlines (powers cards **and** the modal)
- `LNL_SLIDES`, `LNL_TESTIMONIALS`, `LNL_VIDEOS`, `LNL_BATCHES`, `LNL_FAQS`, `LNL_TRUST`, `LNL_COMMUNITY`

No rebuild needed — just refresh. Batch countdowns are driven by each batch's `startDate` (format `YYYY-MM-DD`).

### Things to replace before launch
- `LNL_CONFIG.youtube.url` and the WhatsApp number in `index.html` (`#whatsapp-btn` href)
- Community invite links (Discord / Facebook / WhatsApp / CPC)
- Course banner images in `assets/img/` (current ones are generated SVG placeholders)
- The lead/newsletter forms currently show a friendly confirmation only. To collect real
  leads, point them at Google Forms, Formspree, or similar (see `initForms` in `js/main.js`).

## 🚀 Deploy to GitHub Pages

1. Push these files to a repo (e.g. `loopandlogic.github.io` or any repo).
2. Repo **Settings → Pages → Source: Deploy from branch → `main` / root**.
3. Visit `https://<user>.github.io/<repo>/`.

No server, no environment variables. It's fully static.

## 🎨 Brand

Primary `#2563EB` · Secondary `#7C3AED` · Accent `#F59E0B` · BG `#0F172A` · Cards `#1E293B`

## ⚡ Lighthouse

Optimized for 90+ Performance / Accessibility / Best Practices: deferred scripts,
lazy-loaded images, lightweight inline SVG, no render-blocking JS, semantic landmarks.
