# Beginner Coursework: Portfolio and Quiz

This folder contains **two separate projects** for coursework. They do not share CSS or JavaScript files. Changing one project will not affect the other.

## 1. Purpose of the two projects

| Project | Purpose |
|---------|---------|
| **portfolio/** | A responsive personal profile page with About, Skills, Projects, footer, and a dark-mode toggle. Personal details use `PLACEHOLDER` until the owner adds verified information. |
| **quiz/** | A five-question quiz that shows one question at a time, tracks score, and shows a final result. Reloading the page resets the quiz. |

## 2. Folder structure

```
portfolio/
  index.html      — Page structure and content (placeholders for personal info)
  style.css       — Layout, colors, light/dark themes, link hover styles
  script.js       — Theme toggle and footer year; logs "JavaScript connected"
  page-audit.md   — Table of what is verified vs placeholder

quiz/
  index.html      — Quiz layout (#quiz, #question, #options, #result)
  style.css       — Navy, white, and gold styling for the quiz panel
  script.js       — Questions array, scoring, and UI updates

README.md         — This file
screenshots/
  screenshot-checklist.md — Required screenshots for submission
```

## 3. How to open each project in a browser

No install or server is required.

1. Open File Explorer and go to this folder (for example `C:\Users\hp`).
2. **Portfolio:** open `portfolio\index.html` (double-click or drag into Chrome, Edge, or Firefox).
3. **Quiz:** open `quiz\index.html` the same way.

Each project loads its own `style.css` and `script.js` from the same folder using relative paths.

## 4. Replace PLACEHOLDER text with real details

1. In your editor, use **Find** (Ctrl+F) and search for `PLACEHOLDER` across the `portfolio` folder.
2. Replace each label with accurate information, for example:
   - `PLACEHOLDER: Person's name` → the person's real name
   - `PLACEHOLDER: Short introduction` → one honest intro sentence
   - `PLACEHOLDER: About information` → about section text
   - `PLACEHOLDER: Skill` → real skills (add or remove `<li>` items as needed)
   - `PLACEHOLDER: Project title` / `PLACEHOLDER: Project description` → real project names and descriptions
3. Update `portfolio/page-audit.md` so the **True?** column reflects what is now verified.
4. Do **not** copy contact details from this README or invent email or social links.

## 5. Add a real project link

When you have a verified URL:

1. Edit `portfolio/index.html`.
2. Replace the paragraph that says `PLACEHOLDER: Project URL — add a verified link...` with a real link, for example:

```html
<a class="project-link" href="https://example.com/your-project">View project</a>
```

3. Use `https://` URLs you have checked in the browser. Remove or update broken links.

## 6. Confirm JavaScript in Developer Tools (portfolio)

1. Open `portfolio/index.html` in the browser.
2. Press **F12** (or right-click → **Inspect**) to open Developer Tools.
3. Open the **Console** tab.
4. You should see: `JavaScript connected`

If the message is missing, check that `script.js` is in the same folder as `index.html` and that the script tag is at the end of `<body>`.

## 7. Test the portfolio theme toggle

1. With the portfolio open, click **Switch to Dark Mode**.
2. The page background should darken and text should stay readable.
3. The button label should change to **Switch to Light Mode** and `aria-pressed` should indicate dark mode is on.
4. Click again to return to light mode. Refreshing the page starts in light mode again (no saved theme).

## 8. Attempt and reset the quiz

1. Open `quiz/index.html`.
2. Read the question and click one answer button. The next question appears automatically.
3. Answer all five questions. You should see **Quiz Complete**, the answer buttons disappear, and **Your score is X out of 5**.
4. Press **F5** or reload the page to start over from question 1 with score 0.

## 9. Validate portfolio HTML

1. In the browser, open `portfolio/index.html`.
2. Go to [W3C Nu HTML Checker](https://validator.w3.org/nu/).
3. Upload `portfolio/index.html` or use **Validate by file upload**.
4. Fix any errors reported in `index.html` (and re-check until clean or only acceptable warnings remain).

## 10. What to submit

Follow your teacher's instructions. Typically you submit:

- All files under `portfolio/` and `quiz/`
- `README.md` (optional if not required)
- `portfolio/page-audit.md`
- Screenshots listed in `screenshots/screenshot-checklist.md`

**Important:** Portfolio and quiz are independent. Edit `quiz/style.css` only for quiz appearance; edit `portfolio/style.css` only for the portfolio.
