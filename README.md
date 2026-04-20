# Pool Resurfacing Australia

A lead generation website that connects Australian pool owners with trusted pool resurfacing specialists. Built as a static HTML site deployed on Vercel.

**Live site:** [poolresurfacingaustralia.com.au](https://poolresurfacingaustralia.com.au)

## Overview

Pool Resurfacing Australia is a specialist matching service that helps pool owners find qualified professionals to resurface their pools. The site captures leads through a multi-step quiz form and connects users with local resurfacing specialists.

### Key Features

- **Multi-step quiz form** — Captures pool details, condition, preferences, and contact info
- **Resurfacing type landing pages** — SEO-optimised pages for different finishes
- **Additional info collection** — Follow-up form for detailed quotes
- **Mobile-responsive design** — Works across all device sizes
- **Google Analytics & GTM integration** — Full conversion tracking

## Tech Stack

- **Framework:** Static HTML/CSS/JS (no build step for pages)
- **Fonts:** DIN Condensed Bold + Arial (locally hosted)
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Forms:** Submit to external automation backend

## Project Structure

```
/Pool-Resurfacing-Australia
├── index.html              # Main landing page with quiz form
├── additional-info.html    # Follow-up multi-step quiz
├── contact.html            # Contact Us form
├── faq.html                # Pool Resurfacing FAQ
├── pool-resurfacing-guide.html  # Team documentation
├── thanks.html             # Form success page
├── thanks-additional.html  # Additional info success page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── 404.html                # Custom 404 with interactive game
│
├── # Resurfacing type landing pages
├── pebblecrete.html        # Pebblecrete resurfacing
├── fibreglass.html         # Fibreglass resurfacing
├── pool-tiling.html        # Pool tiling
├── quartz-aggregate.html   # Quartz aggregate resurfacing
│
├── # Config & docs
├── BRAND_GUIDELINES.md     # Design system documentation
├── CLAUDE.md               # AI assistant instructions
├── vercel.json             # Vercel deployment config
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler instructions
│
├── /public
│   ├── PoolResurfacingLogo.svg  # Brand logo
│   ├── Header.png          # Hero background
│   ├── /fonts              # DIN Condensed Bold, Arial
│   ├── /pools              # Pool-specific images
│   └── /email-icons        # Email template assets
│
└── /src                    # Vite/React setup (unused for main site)
```

## Resurfacing Types

The site covers four main pool resurfacing options:

| Type | Lifespan | Price Range |
|------|----------|-------------|
| **Pebblecrete** | 15-20 years | $10,000-$18,000 |
| **Fibreglass** | 20+ years | $12,000-$25,000 |
| **Pool Tiling** | 25+ years | $15,000-$30,000+ |
| **Quartz Aggregate** | 20-25 years | $18,000-$35,000+ |

## Local Development

The site is static HTML — no build step required for the main pages.

```bash
# Install dependencies (for Vite dev server)
npm install

# Run local dev server
npm run dev

# Or simply open index.html in a browser
```

## Deployment

Deployed automatically via Vercel on push to `main`. Configuration in `vercel.json`:

- Clean URLs enabled (no `.html` extensions)
- No trailing slashes
- Static file rewrites for fonts, favicons, and pool images

## Brand Guidelines

See `BRAND_GUIDELINES.md` for complete design system documentation including:

- **Colours:** Electric Yellow (#E7E515), Deep Navy (#1A1348), Warm Cream (#F3EBD9)
- **Typography:** DIN Condensed Bold for headings, Arial for body
- **Components:** Buttons (8px radius), form inputs, quiz navigation
- **Layout:** 800px max-width for content alignment

### Key Design Rules

1. All buttons use `border-radius: 8px` (never pill buttons)
2. Form elements always have white backgrounds (#FFFFFF)
3. Page backgrounds use cream (#F3EBD9)
4. Primary CTAs are yellow with navy text

## Email Templates

Located in `/public/`:

- `email-template.html` — Initial lead confirmation
- `email-template-additional-info-thanks.html` — Additional info received
- `email-template-urgent-reminder.html` — Follow-up reminder

## SEO

- Schema.org structured data on all pages
- Open Graph and Twitter Card meta tags
- Sitemap at `/sitemap.xml`
- Resurfacing-specific landing pages target long-tail keywords

## Licence

Proprietary — All rights reserved.
