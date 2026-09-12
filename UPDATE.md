# icats-prep — Setup & Update Guide

Aaira's ICATS practice app. **No server needed.** Files:

| File | What it is |
|---|---|
| `index.html` | The whole app (home + quiz + results + AI help) |
| `questions.js` | Question bank (`window.QUESTIONS`) — add questions here |
| `papers.js` | Fixed exam-style sets (`window.PAPERS`) — lists of question ids |

---

## 1. Try it locally (before pushing)

Double-click `index.html`, or run:

```
python3 -m http.server 8080
# open http://localhost:8080
```

Everything except "AI Help" works fully offline.

---

## 2. Free Gemini API key (optional, for AI Help)

1. Go to https://aistudio.google.com → sign in with any Google account.
2. Click **Get API key** (top right) → **Create API key** → copy it.
3. Open the app → Settings → paste the key into **Gemini API key**.
4. The key is saved **only in that browser** (localStorage). It never goes in any file here.

**Cost:** free tier. Nationals-limited (`gemini-3-flash-preview` etc.); if the model name becomes invalid you can change it in Settings → AI model.

---

## 3. Publish on GitHub Pages

### A. Create the repository (on github.com)

1. Sign in to your new GitHub account → New repository.
2. Name: `icats-prep` → **Public** → **do NOT** tick "Add a README".
3. Click **Create repository**.
4. Copy your repo URL: `https://github.com/USERNAME/icats-prep.git`

### B. Push the folder (run these on this computer)

```
cd /home/ashif/Documents/Aaira_ICATS/icats-prep
git init
git add -A
git commit -m "ICATS prep app: bank, builder, fixed papers, AI help"
git branch -M main
git remote add origin https://github.com/USERNAME/icats-prep.git
git push -u origin main
```

(GitHub will ask for your **username** and a **Personal Access Token** instead of your password — create one at github.com → Settings → Developer settings → Personal access tokens → Generate new token, tick `repo`, copy it, paste when asked.)

### C. Turn on Pages (on github.com)

1. Repo → **Settings** → left menu **Pages**.
2. **Source**: `Deploy from a branch` → branch `main`, folder `/ (root)` → **Save**.
3. Wait 1–2 minutes. Your app live at:
   `https://USERNAME.github.io/icats-prep/`

### D. On the Chromebook

- Open that URL → bookmark it, or add to homescreen. No files, no installs.
- Works offline only while offline? **No** — Pages needs internet. For offline days, copy the 3 files to the Chromebook and double-click `index.html` (AI help + saved history need internet).

---

## 4. Adding new questions (the "smooth add" flow)

### Way 1 — Any AI or human pastes into `questions.js`

- Open `questions.js` — a **template** is commented at the top.
- Add a new object with a **new id** (`c1`, `c2`, …).
- If I (or another AI) generate questions, it should return exactly that JavaScript object block; paste and push.

### Way 2 — Push an update (3 commands)

```
cd /home/ashif/Documents/Aaira_ICATS/icats-prep
git add questions.js papers.js index.html
git commit -m "added new questions"
git push
```

Pages rebuilds automatically in 1–2 minutes.

### Way 3 — Quick local add (no push, this browser only)

Questions added by an app form are stored in that browser's localStorage and merged with the bank automatically. (The form/export button is a future enhancement — for now edit `questions.js`.)

---

## 5. Scoring & difficulty

- Home → Settings: correct (+), wrong (−), skip (0) — set per paper, saved.
- Real exam rule (from the analysis): **+3 / −1 / 0**, 75 minutes. Default app rule: **+5 / −1 / 0** for encouragement.
- Custom papers order: easy → medium → hard, with hard questions last, matching ICATS 2021–2025 behaviour. The generator also forces the "every-year" categories (money, time, calendar, data, patterns, logic) when the bank contains them.

---

## 6. Current content

- Bank: **100 questions** (full Practice Sets A–D v2, ids `a01–a25` … `d01–d25`, answers verified against the PDF keys, figures redrawn as SVG, Roman-Urdu explanations for every question).
- Fixed papers: **Practice Set A / B / C / D (v2)** — all 25 questions each, original exam order.
- Custom papers: built from the whole bank (easy → medium → hard, exam-like mix, must-have categories forced).

---

## 7. Tips for Aaira's remaining days

- Untimed, explanations on → Sets/custom papers.
- Then timed (75 min, No Limit off) with explanations only after answering.
- "Jawab samjhao" exists exactly because in the real exam the teacher will explain the *question* (in Urdu) but never the *answer* — practise reading the question yourself first.