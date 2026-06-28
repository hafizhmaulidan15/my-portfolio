# Muhammad Hafizh Maulidan — Portfolio

Personal portfolio website highlighting operations & production management experience, dairy manufacturing leadership, and technical project work.

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)
![Lighthouse](https://img.shields.io/badge/Lighthouse-87-brightgreen)

## Tech Stack

- **Framework:** React 19 + React Router 7
- **Build:** Vite 7 (code splitting, manual chunks, module preload)
- **Styling:** Tailwind CSS 3.4 + custom design system
- **Animation:** CSS animations (Hero) + Framer Motion (lazy routes)
- **Charts:** Recharts (lazy loaded)
- **Icons:** Phosphor Icons
- **Fonts:** Plus Jakarta Sans, Fira Code
- **Smooth Scroll:** Lenis (lazy loaded)
- **Data:** Google Apps Script API (production metrics)

## Performance

| Metric | Score |
|---|---|
| **Performance** | 87 |
| **Accessibility** | 94 |
| **Best Practices** | 96 |
| **SEO** | 100 |

## AEO / GEO / SEO

- **JSON-LD `@graph`** — 6 entity types: WebPage (speakable), Person, Organization, BreadcrumbList, FAQPage, ItemList
- **Speakable schema** — voice/AI assistants can read Hero section aloud
- **Entity graph** — `@id` references, `sameAs`, `hasOccupation`, `knowsLanguage` (EN + ID)
- **Dual-language FAQ** — 5 English + 3 Indonesian Q&A for answer engines
- **`llms.txt` / `llms-full.txt`** — markdown context for LLM crawlers (GEO)
- **Hreflang** — EN + ID + x-default
- **OG / Twitter cards** — rich social previews

## Routes

| Path | Component |
|---|---|
| `/` | Hero |
| `/about` | About |
| `/skills` | Skills |
| `/experience` | Experience |
| `/impact` | Production Impact (with recharts) |
| `/projects` | Projects |
| `/certifications` | Certifications |
| `/publications` | Publications |
| `/contact` | Contact |

## Dev

```bash
npm run dev     # dev server
npm run build   # production build
npm run preview # preview build
npx vercel --prod # deploy
```

## Contact

- **Email:** mhafizh.maulidan@gmail.com
- **LinkedIn:** [hafizhmaulidan](https://www.linkedin.com/in/hafizhmaulidan/)
- **GitHub:** [hafizhmaulidan15](https://github.com/hafizhmaulidan15)

---

Made by Muhammad Hafizh Maulidan
