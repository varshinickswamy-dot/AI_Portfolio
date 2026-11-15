# AI Portfolio

Personal portfolio of **Varshini M C**, a Java full stack developer in training, with a head-and-shoulders animated presenter who introduces Varshini in the first person, explains each project out loud (browser speech, with lip-sync), and runs a guided audio tour.

**Live site:** enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) and open `https://varshinickswamy-dot.github.io/AI_Portfolio/`.

## What is inside
- `index.html` is the whole site as a single self-contained file. React, the animation helpers and the CSS are built in, so it needs no network to run. Open it in any browser.
- `src/` holds the readable source (`host_full.jpg` is the portrait the presenter uses): `data.ts` (all content, edit this to update the site), `engine.ts` (voice, lip-sync, illustrated host), `ui.tsx` (the page), `vendor_entry.js` (React plus a small motion library).
- `tools/` holds the build helpers used to produce `index.html`.

## Features
- Speaking presenter built from a portrait photo: lips and teeth follow the words, with weight shift, lean, head tilt and nod
- Play Voice Intro, Mute Host, Interactive Audio Tour, and ask-me-about-a-project chips
- Floating host dock that follows you after the hero
- Animated skills matrix, 17 project cards (HerSphere and JalRakshak AI as flagships) with direct GitHub and live-app links, experience, contact
- Dark theme, responsive, respects reduced-motion

## Notes
Voice uses the browser's speech synthesis and picks a female voice when one is installed (raised pitch otherwise). Where a browser has none (some in-app viewers), the host shows captions with the same lip-sync.
