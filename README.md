# Hasan Gökcan KAHRAMAN — Portfolio

Modern, minimalist, and lightweight personal portfolio website built with **Next.js 16**, **React 19**, and **TypeScript**, styled with pure SCSS modules and frosted glassmorphic cards inspired by the [Nucleus](https://gokcank.github.io/Nucleus/) design philosophy.

🌐 **Live Website:** [https://gokcank.github.io](https://gokcank.github.io)

---

## 🚀 Key Features

- **Nucleus Minimalist Aesthetic:** Clean frosted glass panels (`glass-panel`), refined typography, and breathing room without heavy template overhead.
- **Bilingual Support (i18n):** Seamless Turkish (TR) and English (EN) localization powered by `next-intl`.
- **Dynamic Live Header:** Lightweight sticky navigation with real-time `Europe/Istanbul` clock, route-aware active indicators, and theme toggling.
- **Dual Themes:** Sleek deep dark mode and warm alabaster/cream light mode with subtle ambient depth.
- **8 Featured Projects:** Showcases offline-first Android apps and Linux desktop utilities with authentic app icons and tech stack tags.
- **Enriched Identity:** Manifesto, core architecture pillars, categorized skill pills, and live GitHub activity metrics.
- **Continuous Deployment:** Automated CI build verification and GitHub Pages deployment via GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Static Export)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** SCSS Modules & Vanilla CSS Variables
- **Internationalization:** `next-intl`
- **Hosting & CI/CD:** GitHub Pages & GitHub Actions

---

## 📂 Featured Projects

1. **[Curalis](https://github.com/gokcank/Curalis)** — Privacy-first smart medication & personal health tracker (`Kotlin • Compose`).
2. **[TriviaQuiz](https://github.com/gokcank/TriviaQuiz)** — Offline-first Turkish trivia game with 13 categories and Play Games integration (`Kotlin • Compose`).
3. **[Project Nucleus](https://gokcank.github.io/Nucleus/)** — Modular Linux desktop control center and web showcase (`Rust • TypeScript`).
4. **[SatSort](https://github.com/gokcank/SatSort)** — Desktop satellite channel list editor (.sdx) for Linux (`Python • Qt6`).
5. **[AstroYorum](https://github.com/gokcank/AstroYorum)** — AI-assisted astrology & tarot Android application (`Kotlin • Compose`).
6. **[OptiDoc](https://github.com/gokcank/OptiDoc)** — Document and file optimization utility for Android (`Kotlin`).
7. **[ValutaRate](https://github.com/gokcank/ValutaRate)** — Real-time currency exchange rates and financial calculator (`Kotlin`).
8. **[NotesAssistant](https://github.com/gokcank/NotesAssistant)** — Intelligent note-taking and thought organization tool (`Kotlin`).

---

## 💻 Local Development

### Prerequisites
- Node.js 18.17+
- npm

### Setup
```bash
# 1. Clone the repository
git clone git@github.com:gokcank/gokcank.github.io.git
cd gokcank.github.io

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates an optimized static export in the `out/` directory for deployment on GitHub Pages.

---

## 📄 License

This repository is maintained by **Hasan Gökcan KAHRAMAN**. All rights reserved.