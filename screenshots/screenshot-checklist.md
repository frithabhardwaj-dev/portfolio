# Screenshot Checklist

Capture these six screenshots for coursework submission. Save image files in this `screenshots/` folder (or as your teacher directs).

Use your **actual** Cursor Agent chats for prompts—do not recreate or fake chat history.

| # | Required screenshot | Done? | Notes |
|---|---------------------|-------|-------|
| 1 | Portfolio in **light mode** (full page or main content visible) | [ ] | Open `portfolio/index.html` before clicking the theme toggle. |
| 2 | The **actual portfolio prompt** used in Cursor Agent | [ ] | Screenshot the chat where you asked the agent to build the portfolio (this session's full prompt counts if your teacher accepts it). |
| 3 | Portfolio in **dark mode** | [ ] | Click **Switch to Dark Mode** and capture the same page. |
| 4 | The **actual quiz styling prompt** used in Cursor Agent | [ ] | See follow-up prompt below—send it in a **new** Agent chat after generation, then screenshot that message. |
| 5 | Quiz in the browser with a **question and answer options** visible | [ ] | Open `quiz/index.html` on question 1 (or any in-progress question). |
| 6 | **Final quiz score** after all five questions | [ ] | Complete the quiz; capture **Quiz Complete** and **Your score is X out of 5**. |

## Separate quiz styling follow-up (new Cursor Agent chat)

After the quiz files exist, start a **new** Cursor Agent conversation and send **exactly**:

```
Apply a professional blue, white and gold colour scheme to the quiz project. Only modify quiz/style.css. Do not modify the HTML or JavaScript.
```

Screenshot that message for item **#4** above. Your teacher may also want the original build prompt from the portfolio/quiz generation chat for item **#2**.

## Manual capture steps (Windows)

1. Open the page in your browser.
2. **Win + Shift + S** → select the area → save the image into `screenshots/`.
3. Name files clearly, e.g. `01-portfolio-light.png`, `03-portfolio-dark.png`, `05-quiz-question.png`, `06-quiz-score.png`.

## Agent note

Automated screenshot capture was not performed in the build environment unless separate browser tools were run after deployment. Check the boxes above only after **you** capture each image.
