# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**LocateMe Landing Page** — A modern, responsive landing page for a family location tracking mobile application.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVG
- **Utilities:** clsx, tailwind-merge

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npx tsc --noEmit     # Type check without emitting
npm run lint         # Run ESLint
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, global styles
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Tailwind config, custom properties, animations
├── components/
│   ├── index.ts            # Barrel exports for all components
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with blur effect, mobile menu
│   │   └── Footer.tsx      # Multi-column footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with phone mockup, CTAs, trust badges
│   │   ├── Features.tsx    # Feature cards grid + geofencing highlight
│   │   ├── Screenshots.tsx # Carousel with 5 app screens
│   │   ├── Privacy.tsx     # Privacy features grid
│   │   └── Download.tsx    # CTA section with store badges
│   └── ui/
│       ├── Button.tsx      # Animated button variants
│       ├── Card.tsx        # Animated card with hover effects
│       ├── PhoneMockup.tsx # iPhone frame component
│       └── SectionHeading.tsx # Section title with gradient text
└── lib/
    ├── design-system.ts    # Design tokens, animations, glass styles
    └── utils.ts            # cn() helper, scroll utilities
```

## Design System

- **Colors:** Blue-to-purple gradient primary, neutral scale, semantic colors
- **Border Radius:** Rounded corners (xl/2xl/3xl) for modern SaaS feel
- **Shadows:** Card shadows with colored hover glow effects
- **Glass:** Backdrop blur + semi-transparent backgrounds
- **Animations:** Fade-in-up on scroll, floating elements, pulse effects

## Key Patterns

- All interactive components use Framer Motion for animations
- Sections use `whileInView` for scroll-triggered reveals
- Mobile-first responsive design with Tailwind breakpoints
- Dark mode support via Tailwind's `dark:` prefix
- Component props use explicit interfaces (not extending HTML attributes) to avoid Framer Motion type conflicts
- Easing arrays use `as const` for TypeScript compatibility
