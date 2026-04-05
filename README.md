# SaaS Launch Pad Kit

A ready-to-fork SaaS starter template with auth flows, dashboard, project management, and a pricing page. Built with React, TypeScript, Tailwind CSS, and shadcn/ui.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Deploy](https://github.com/RedBeret/saas-launch-pad-kit/actions/workflows/deploy.yml/badge.svg)](https://github.com/RedBeret/saas-launch-pad-kit/actions/workflows/deploy.yml)

**Live demo:** [redberet.github.io/saas-launch-pad-kit](https://redberet.github.io/saas-launch-pad-kit)

## What you get

- **Landing page** with hero, feature highlights, and pricing section
- **Auth flows** - login, signup, forgot password (client-side, ready to wire to a backend)
- **Dashboard** with sidebar navigation
- **Project management** - create, view, and manage projects
- **Pricing page** with tiered plan cards
- **Responsive layout** - works on desktop and mobile
- **Dark mode support** via next-themes
- **Toast notifications** via Sonner
- **40+ shadcn/ui components** pre-installed and ready to use

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router (client-side routing)
- React Query (data fetching layer)
- React Hook Form + Zod (form validation)
- Recharts (dashboard charts)
- GitHub Pages deployment via Actions

## Quick start

```bash
git clone https://github.com/RedBeret/saas-launch-pad-kit.git
cd saas-launch-pad-kit
npm install
npm run dev
```

Open `http://localhost:5173` and start building.

## Project structure

```
src/
  components/
    auth/           # login, signup, forgot password forms
    layout/         # header, footer, sidebar, dashboard layout
    projects/       # project cards and dialogs
    subscription/   # pricing cards and sections
    ui/             # 40+ shadcn/ui components
  pages/            # route-level page components
```

## Deployment

Push to `main` and GitHub Actions builds and deploys to Pages automatically. The `public/404.html` handles client-side routing on refresh.

## License

[MIT](LICENSE)
