<h1 align="center">⚙️ FlowForge</h1>

<p align="center">
  <b>Custom n8n workflows — built, connected, and hosted for you.</b><br/>
  Marketing site for a done-for-you automation service: simple setup, API attachment, and managed hosting billed by monthly usage.
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

> ### 🔗 [**Live demo → flowforge-liart.vercel.app**](https://flowforge-liart.vercel.app/)

> _Tip: add a screenshot or GIF to `public/preview.png` and reference it here — `![Preview](public/preview.png)` — so the repo is readable at a glance._

## 📖 About

FlowForge is a productized service that builds **custom n8n automation workflows** for growing teams,
connects them to the customer's APIs, and runs them on **managed, auto-scaling hosting** — billed by
monthly usage. This repository contains the marketing site: a fast, animated, fully responsive
landing experience plus legal pages.

## ✨ Features

- ⚛️ **Next.js 14 App Router** with React Server Components and multiple routes (`/`, `/privacy`, `/terms`)
- 🔤 **100% TypeScript** in strict mode
- 🎨 **Tailwind CSS** design system with a custom dark theme
- 🌗 **Dark / light mode** with system detection (`next-themes`), no flash on load
- 🎬 **Framer Motion** — animated hero, live workflow-preview mock, scroll reveals, animated mobile menu
- 💳 **Usage-based pricing** section with a monthly/yearly toggle and animated price updates
- 📄 **Legal pages** — full Privacy Policy and Terms of Service, server-rendered with per-page metadata
- 📱 **Fully responsive** and ♿ **accessible** (semantic HTML, ARIA, keyboard-friendly)
- ⚡ **Performance-first** — statically rendered, targets a 95+ Lighthouse score

## 🧱 Tech Stack

| Area       | Tools                          |
| ---------- | ------------------------------ |
| Framework  | Next.js 14 (App Router)        |
| Language   | TypeScript (strict)            |
| Styling    | Tailwind CSS                   |
| Animation  | Framer Motion                  |
| Theming    | next-themes                    |
| Icons      | lucide-react                   |
| Deployment | Vercel                         |

## 🚀 Getting Started

```bash
npm install       # install dependencies
npm run dev       # start the dev server → http://localhost:3000
npm run build     # production build
```

## 📂 Project Structure

```
app/
├── layout.tsx          # Root layout, fonts, theme provider, metadata
├── page.tsx            # Landing page composition
├── privacy/page.tsx    # Privacy Policy
└── terms/page.tsx      # Terms of Service
components/
├── navbar.tsx          # Sticky nav + animated mobile menu
├── hero.tsx            # Animated hero + workflow-preview mock
├── logo-cloud.tsx      # "Connect the tools you run" marquee
├── features.tsx        # Feature grid
├── how-it-works.tsx    # 3-step section
├── testimonials.tsx    # Customer quotes
├── pricing.tsx         # Interactive usage-based pricing
├── cta.tsx             # Call to action
├── footer.tsx          # Footer with legal links
├── legal-shell.tsx     # Shared layout for legal pages
├── reveal.tsx          # Reusable scroll-reveal wrapper
├── brand.tsx           # Logo / wordmark
└── theme-*.tsx         # Theme provider + toggle
lib/utils.ts            # `cn()` class-merge helper
```

## ☁️ Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Import the repo in [Vercel](https://vercel.com/new) and it deploys with zero configuration.

## 📄 License

[MIT](LICENSE) © Nabeel Yaseen — [nabeelyaseen.com](https://nabeelyaseen.com)
