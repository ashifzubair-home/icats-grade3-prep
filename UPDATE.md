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

- Bank: **200 questions** (full Practice Sets A–D v2 ids `a01–a25` … `d01–d25`; real ICATS past papers **2021, 2022, 2024, 2025** ids `p21xx`, `p22xx`, `p24xx`, `p25xx` — answers from the official bubble-sheet answer keys, figures redrawn as SVG where possible, Roman-Urdu explanations for every question).
- Fixed papers: **Practice Set A / B / C / D (v2)** plus **ICATS Real Paper 2021 / 2022 / 2024 / 2025** — all 25 questions each, original exam order.
- Custom papers: built from the whole bank (easy → medium → hard, exam-like mix, must-have categories forced).
- The 2023 paper exists only as scanned images, so it is not in the bank.

---

## 7. Tips for Aaira's remaining days

- Untimed, explanations on → Sets/custom papers.
- Then timed (75 min, No Limit off) with explanations only after answering.
- "Jawab samjhao" exists exactly because in the real exam the teacher will explain the *question* (in Urdu) but never the *answer* — practise reading the question yourself first.

---

## 8. Session log (resume notes — last updated with AI Auto work)

### App state
- Live: `https://ashifzubair-home.github.io/icats-grade3-prep/`
- Remote: `https://github.com/ashifzubair-home/icats-grade3-prep.git`
- Push: `export GHTOKEN='<token>'` then `git push https://ashifzubair-home:$GHTOKEN@github.com/ashifzubair-home/icats-grade3-prep.git main:main`
- **SECURITY:** a Personal Access Token was printed many times during these sessions — **the user MUST revoke it and issue a new one** (GitHub → Settings → Developer settings → Personal access tokens). Never write the real token into this file.

### Past-paper work (committed `ff25c8d`)
- Solved the bubble-sheet answer-key PDFs (2021–2025) by `pdftoppm -png -r 300` + ImageMagick connected-components (solid 45×45 blob = filled) + interior mean gray < 0.35. Cross-validated vs solvable text: 2021 12/12, 2022 18/18, 2024 14/14, 2025 11/11.
- Added **100 bank questions** `p2101…p2125`, `p2201…p2225`, `p2401…p2425`, `p2501…p2525` (real papers 2021/2022/2024/2025) + 4 year-wise fixed papers `set-2021/2022/2024/2025`.
- **2023 skipped** (paper = scanned raster JPEGs, no text layer; no tesseract/mutool/qpdf available). Answer key for 2023 was extracted but unused.
- Note: ICATS "every nth day" wording = multiples of n (e.g. 2022 Q17 → 28; 2024 Q11 → April 21).
- 2025 key (for reference): Q1:C Q2:A Q3:B Q4:A Q5:C Q6:B Q7:D Q8:C Q9:B Q10:C Q11:A Q12:B Q13:B Q14:A Q15:C Q16:D Q17:D Q18:B Q19:D Q20:A Q21:C Q22:B Q23:B Q24:B Q25:A.

### UI work
- `f5715ad` — AI help rewritten as chat modal (tabs, auto question context, fixed `[object Object]` bug, progress `###` 75F correct answer).
- `71cdc79` — **AI Auto toggle** added; table figure type (`figure:"table"`, `figTable()`); figures centered (`.fig` block + `margin:auto`); hint below the SVG; figures also rendered in the results review.
- `afe1c88` — **AI Auto now uses the same chat-style AI response as the AI Help popup's "Sawal samjhao"** (`aiAutoStart()` calls Gemini with prompt `Sawal samjhao — SIRF matlab samjhao, jawab MAT do:` + question + options), auto-fetches per question, cached in `autoAiCache` so next/back never erases/refetches, and **never reveals the answer**. No key → falls back to the static bank `explainQ`.
- `p2501` (2025 Q1) now shows its real table figure (Ali 6,542 / Sarfraz 6,594 / Zain 6,548 / Hunaid 6,954; fewest = Ali → C).

### Test/validation workflow (headless)
- Python integrity: `/tmp/opencode/validate.py` validates `questions.js`/`papers.js` (strips `/*…*/` + `//` comments with a state machine, quotes bare keys mid-object only, removes trailing commas; checks ids unique, 4 options, answer 0–3, `difficulty` easy|medium|hard, known `category` set, known `figure` set incl. `"table"`, `explainQ`/`explainA`/`words` present, year sequences 1–25, all paper qids resolve). Run with workdir = repo.
- Headless harness: temp `.h.html` in repo dir (iframe to `index.html`), serve via `python3 -m http.server 8123`, run `google-chrome --headless=new --dump-dom …/.h.html`, grep `TEST_OK/TEST_FAIL`. Delete the `.h.html` before committing. (Kill server with `fuser -k 8123/tcp` — `pkill -f http.server` can hang the shell.)

### Gotchas while editing
- Never use a naive `re.sub` to quote JS object keys — it corrupts strings like `, Green:` inside question text; use the stateful tokenizer in `/tmp/opencode/validate.py`.
- In-page settings DOM only exists on the home view; to change settings for a test you must set fields + `collectSettings()` **before** `startFixed/startGenerated`, or set `store.settings` directly after the quiz view renders.