<h1 align="center">✨ Nova — Animated SaaS Landing Page</h1>

<p align="center">
  A production-ready, fully responsive SaaS landing page with dark mode, scroll animations, and an interactive pricing section — built with <b>Next.js 14</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=nextdotjs" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green?style=flat" />
</p>

<p align="center">
  <a href="#-live-demo"><b>Live Demo</b></a> ·
  <a href="#-features"><b>Features</b></a> ·
  <a href="#-getting-started"><b>Getting Started</b></a>
</p>

---

## 🔗 Live Demo

> **[🚀 View the live demo](https://REPLACE-WITH-YOUR-VERCEL-URL.vercel.app)**  ← _deploy to Vercel and drop your URL here_

> _Tip: add a screenshot or GIF here — it makes the repo instantly readable. Take one of the running app and save it to `public/preview.png`, then reference it: `![Preview](public/preview.png)`._

## ✨ Features

- ⚛️ **Next.js 14 App Router** with the modern `app/` directory and React Server Components
- 🔤 **100% TypeScript** in strict mode
- 🎨 **Tailwind CSS** design system with a custom dark theme
- 🌗 **Dark / light mode** with system preference detection (`next-themes`), no flash on load
- 🎬 **Framer Motion** — hero entrance, animated gradient blobs, scroll-reveal, animated chart bars
- 💳 **Interactive pricing** with a monthly/yearly toggle and live price updates
- 📱 **Fully responsive** with an animated mobile menu
- ♿ **Accessible** — semantic HTML, keyboard-friendly, ARIA labels
- ⚡ **Performance-first** — targets a 95+ Lighthouse score

## 🧱 Tech Stack

| Area          | Tools                                             |
| ------------- | ------------------------------------------------- |
| Framework     | Next.js 14 (App Router)                           |
| Language      | TypeScript (strict)                               |
| Styling       | Tailwind CSS, custom utilities                    |
| Animation     | Framer Motion                                     |
| Theming       | next-themes                                       |
| Icons         | lucide-react                                      |
| Deployment    | Vercel                                            |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## 📂 Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind layers + custom utilities
│   ├── layout.tsx         # Root layout, fonts, theme provider
│   └── page.tsx           # Landing page composition
├── components/
│   ├── navbar.tsx         # Sticky nav + animated mobile menu
│   ├── hero.tsx           # Animated hero + app-preview mock
│   ├── features.tsx       # Feature grid with hover effects
│   ├── how-it-works.tsx   # 3-step section
│   ├── testimonials.tsx   # Social proof
│   ├── pricing.tsx        # Interactive monthly/yearly pricing
│   ├── cta.tsx            # Call-to-action banner
│   ├── footer.tsx         # Footer
│   ├── reveal.tsx         # Reusable scroll-reveal wrapper
│   └── theme-*.tsx        # Theme provider + toggle
└── lib/utils.ts           # `cn()` class-merge helper
```

## ☁️ Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Push to GitHub, import the repo in [Vercel](https://vercel.com/new), and it deploys with zero configuration.

## 📄 License

[MIT](LICENSE) © Nabeel Yaseen — [nabeelyaseen.com](https://nabeelyaseen.com)
