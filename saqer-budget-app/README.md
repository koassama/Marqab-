# Saqer Budget – phone app

## 1. Apps Script (on a computer is easiest)
1. Open your sheet → Extensions → Apps Script.
2. Click **+ → Script**, name it `Api`, and paste everything from `Api.gs`.
3. In `Code.gs`, copy the new `doGet` from the doc (it locks the old page).
4. Save, then **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the link that ends in `/exec`.

"Anyone" is needed so the app can reach your sheet. Your secret code protects it:
without the code nobody can read or add anything.

## 2. GitHub Pages
1. On github.com, create a new repository, e.g. `saqer-budget`.
2. Upload everything in this folder **except `Api.gs`** (index.html, manifest.json, sw.js and the icons folder).
3. Settings → Pages → Source: **Deploy from a branch** → `main` / root → Save.
4. After a minute you get a link like `https://yourname.github.io/saqer-budget/`.

The code is public on GitHub, but it holds no secrets: your link and code are typed into the app and stay on your phone.

## 3. Install on your phone
- **iPhone:** open the GitHub link in **Safari** → Share → **Add to Home Screen**.
- **Android:** open it in **Chrome** → ⋮ menu → **Install app** (or Add to Home screen).

Open the app from the new icon, paste the `/exec` link and your secret code once. Done.

## Updating later
Change files on GitHub; the app picks them up the next time you open it with internet.
