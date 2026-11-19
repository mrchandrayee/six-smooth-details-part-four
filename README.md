# Six Smooth Details — Part 4

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-smooth-details-part-four/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the uploaded 44.8-second video. The video is a motion-design explainer, not a source-code tutorial; this project implements the six visible UI demonstrations as working front-end interactions.

## Video-derived concepts and callouts

1. **01 · Star rating — “Fill them in turn.”**
   - Stars fill sequentially.
   - Visible callout: `4 STARS · 100 ms APART`.

2. **02 · One-time code — “Drop in, then glow.”**
   - Six digits with sequential focus/glow.
   - Visible callout: `6 DIGITS · 70 ms APART`.

3. **03 · Accordion — “Grow, make room.”**
   - Expanding content and 180° arrow rotation.
   - Visible callout: `ARROW 180° · OPENS 62 px`.

4. **04 · Password — “Grade as you type.”**
   - Four-segment strength meter changes from red toward blue.
   - Visible callout: `4 SEGMENTS · RED → BLUE`.

5. **05 · To-do — “Draw, strike, sink.”**
   - Checkbox completion with strikethrough.
   - Visible callout: `CHECK + STRIKE 470 ms`.

6. **06 · Reactions — “Pop, grow, fly.”**
   - Reaction emoji scales up on hover/tap.
   - Visible callout: `HOVER 1.6× · 70 ms APART`.

## Run locally

No dependencies or build step:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — six demo scenes and controls
- `styles.css` — responsive dark UI and motion
- `app.js` — interaction logic
- `README.md` — setup and source notes

## Accuracy note
The project recreates what is visible in the video, including its six section titles, example interactions and timing callouts. The original creator's complete source code is not shown in the video; implementation details and animation curves are recreated approximations, not recovered original source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
