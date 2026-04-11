# 🚀 Ekansh Mishra — Portfolio

> Senior Full Stack Engineer · React · TypeScript · Node.js · GraphQL · AWS

**Live site:** https://ekansh-mishra-sde2.github.io

---

## 📁 Monorepo Structure

```
ekansh-portfolio/
├── frontend/                     # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cursor/           # Custom animated cursor
│   │   │   ├── Navbar/           # Sticky nav with scroll effect
│   │   │   ├── Hero/             # Landing section with hex avatar + rings
│   │   │   ├── About/            # Bio + animated stat counters
│   │   │   ├── Tech/             # Concentric rotating tech rings
│   │   │   ├── Projects/         # Project cards
│   │   │   ├── Experience/       # Timeline
│   │   │   ├── Recommendations/  # Auto-scrolling carousel
│   │   │   ├── Contact/          # EmailJS contact form
│   │   │   └── Footer/
│   │   ├── data/                 # All content in one place (index.ts)
│   │   ├── hooks/                # useInView, useCounter
│   │   ├── types/                # TypeScript interfaces
│   │   └── styles/               # globals.css (variables, resets)
│   ├── .env.example
│   ├── vite.config.ts
│   └── package.json
│
├── backend/                      # Node.js + Express + TypeScript
│   ├── src/
│   │   └── index.ts              # Express server with /api/contact
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy.yml            # Auto-deploy frontend to GitHub Pages
├── .gitignore
└── package.json                  # Root workspace config
```

---

## ⚡ Quick Start (Local Dev)

### Prerequisites
- Node.js 18+
- npm 8+

### Install everything
```bash
git clone https://github.com/ekansh-mishra-sde2/ekansh-portfolio.git
cd ekansh-portfolio
npm run install:all
```

### Run frontend only
```bash
npm run frontend
# → http://localhost:5173
```

### Run both frontend + backend
```bash
# Terminal 1
npm run backend
# → http://localhost:4000

# Terminal 2
npm run frontend
# → http://localhost:5173 (proxied to backend)
```

---

## 🌐 Deploy to GitHub Pages (Free)

### Step 1 — Create the repo
Name it exactly: `ekansh-mishra-sde2.github.io`

This triggers GitHub's automatic hosting at:
`https://ekansh-mishra-sde2.github.io`

### Step 2 — Push
```bash
git init
git add .
git commit -m "🚀 Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/ekansh-mishra-sde2/ekansh-mishra-sde2.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

### Step 4 — Add EmailJS secrets (optional)
1. Sign up at https://emailjs.com (free — 200 emails/month)
2. Create a Gmail service + email template
3. Repo → **Settings** → **Secrets and variables** → **Actions**
4. Add these secrets:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

Every `git push` to `main` auto-deploys via GitHub Actions. ✅

---

## ✉️ Contact Form — Two Options

### Option A: EmailJS (GitHub Pages — no backend needed)
Used when deploying to GitHub Pages. Set the three `VITE_EMAILJS_*` secrets above.

### Option B: Node/Express backend (self-hosted)
Used when you have a server (Railway, Render, VPS).

```bash
# 1. Copy env file
cp backend/.env.example backend/.env

# 2. Fill in your Gmail App Password
# Google Account → Security → 2-Step Verification → App Passwords

# 3. Start backend
npm run backend
```

The frontend's Vite dev proxy automatically routes `/api/*` to `localhost:4000`.

---

## ✏️ Updating Content

All portfolio content lives in **one file**:

```
frontend/src/data/index.ts
```

Edit `PROJECTS`, `RECOMMENDATIONS`, `TECH_RINGS`, or `EXPERIENCE` arrays.
Push to `main` — site auto-updates in ~60 seconds.

### To add a real LinkedIn recommendation:
```typescript
// In frontend/src/data/index.ts
{
  text: "Paste the actual recommendation text here...",
  name: "Recommender's Full Name",
  title: "Their Title · Company",
  initials: "AB",   // First letters of their name
},
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | CSS Modules + CSS Variables |
| Animations | Pure CSS keyframes + IntersectionObserver |
| Contact form | EmailJS (frontend) / Nodemailer (backend) |
| Backend | Node.js + Express + TypeScript |
| Deployment | GitHub Actions → GitHub Pages |
| Fonts | Syne + Cabinet Grotesk + DM Mono |
| Icons | Font Awesome 6 + Devicons CDN |

---

## 📄 License

MIT — fork it, use it, make it yours.
