# Deploying Loop & Logic to GitHub Pages

The site is fully built and ready. It uses **relative paths**, so it works whether it
lives at a root domain (`https://name.github.io`) or a sub-path (`https://name.github.io/repo/`).

## ⚠️ About the name "lnl.github.com"

GitHub Pages doesn't use `.github.com`. Your options are:

- **User/Org site → `https://<account>.github.io`**
  The repo must be named **exactly** `<account>.github.io`. So `lnl.github.io` only works if
  your GitHub account (or an organization you create) is literally named **`lnl`**.
- **Project site → `https://<account>.github.io/<repo>/`**
  Any repo name works, e.g. a repo called `loop-and-logic` →
  `https://<account>.github.io/loop-and-logic/`. This site is built to work here too.

---

## Option A — Web upload (no terminal, easiest)

1. Sign in at https://github.com (create an account first if needed).
2. Click **New repository**. Name it:
   - `<your-username>.github.io` for a root site, **or**
   - `loop-and-logic` (or anything) for a project site.
   - Set it **Public** → **Create repository**.
3. On the new repo page, click **“uploading an existing file.”**
4. Open the **LNL Github** folder on your computer and drag **everything inside it**
   (`index.html`, `css/`, `js/`, `data/`, `assets/`, `.nojekyll`, `README.md`) into the browser.
5. Click **Commit changes.**
6. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick **`main`** branch and **`/ (root)`**, then **Save.**
7. Wait ~1 minute and refresh. Your live URL appears at the top of the Pages settings.

> Keep the `.nojekyll` file — it tells GitHub Pages to serve the folders as-is.

---

## ✅ Your repo is created — just push

Repo: **https://github.com/LnL-ac/LnL-ac.github.io** (public, empty).
A git repo is already initialized and committed in this folder. Open **Terminal** and run:

```bash
cd "/Users/sadmanhafij/Claude/Projects/LNL Github"

# remove two harmless leftover lock files (created in the sandbox)
rm -f .git/HEAD.lock .git/objects/maintenance.lock

git branch -M main
git remote add origin https://github.com/LnL-ac/LnL-ac.github.io.git
git push -u origin main
```

On the first push, git will ask you to authenticate (a browser window or a username +
Personal Access Token). Sign in as **LnL-ac**.

**Pages is automatic** for a `username.github.io` repo — no settings to change. About 1–2
minutes after the push, your site is live at:

### 👉 https://lnl-ac.github.io

(If git ever complains the repo looks off, you can start clean:
`rm -rf .git && git init && git add -A && git commit -m "Loop & Logic site"` then repeat the
remote + push steps.)

---

## Before you go live — quick edits in `data/courses.js`

- `community.discord`, `community.whatsapp`, `community.cpc` are still `#` placeholders.
- `contact.phone` is a placeholder.
- The floating WhatsApp button number is in `index.html` (`#whatsapp-btn`, currently `8801000000000`).

Everything else — courses, outlines, free YouTube playlists, YouTube/Facebook links, and the
registration Google Form — is already wired in with your real data.
