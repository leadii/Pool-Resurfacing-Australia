# GVM Upgrades Australia

A lead generation website that connects Australian vehicle owners with certified GVM (Gross Vehicle Mass) upgrade installers. Built as a static HTML site deployed on Vercel.

**Live site:** [gvmupgradesaustralia.com.au](https://gvmupgradesaustralia.com.au)

## Overview

GVM Upgrades Australia is an installer matching service that helps 4WD and truck owners find certified professionals to increase their vehicle's legal payload capacity. The site captures leads through a multi-step quiz form and connects users with local installers.

### Key Features

- **Multi-step quiz form** — Captures vehicle details, location, and contact info
- **Vehicle-specific landing pages** — SEO-optimised pages for popular models
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
/GVM
├── index.html              # Main landing page with quiz form
├── additional-info.html    # Follow-up multi-step quiz
├── contact.html            # Contact Us form
├── faq.html                # Legal & Compliance FAQ
├── how-to.html             # How GVM upgrades work
├── thanks.html             # Form success page
├── thanks-additional.html  # Additional info success page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── 404.html                # Custom 404 with interactive game
│
├── # Vehicle-specific landing pages
├── nissan-patrol-y62.html
├── toyota-landcruiser.html
├── ford-everest.html
├── isuzu-dmax.html
├── dodge-ram.html
│
├── # Config & docs
├── BRAND_GUIDELINES.md     # Design system documentation
├── CLAUDE.md               # AI assistant instructions
├── vercel.json             # Vercel deployment config
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler instructions
│
├── /public
│   ├── GVMLogo.svg         # Brand logo
│   ├── Header.png          # Hero background
│   ├── vehicle-data.json   # Vehicle makes/models database
│   ├── /fonts              # DIN Condensed Bold, Arial
│   ├── /vehicles           # Vehicle-specific images
│   └── /email-icons        # Email template assets
│
└── /src                    # Vite/React setup (unused for main site)
```

## Supported Vehicles

The quiz form supports 50+ vehicle models including:

- **Toyota:** LandCruiser (200/300/70 series), Prado, Hilux, Tundra
- **Nissan:** Patrol Y62/Y61, Navara
- **Ford:** Ranger, Everest, F-150, F-250/F-350
- **Isuzu:** D-MAX, MU-X
- **Ram:** 1500, 2500
- **Chevrolet:** Silverado 1500, 2500HD
- **Jeep:** Gladiator, Wrangler, Rubicon
- **Mitsubishi:** Triton, Pajero Sport
- **Others:** VW Amarok, Mazda BT-50, Suzuki Jimny, Ineos Grenadier

Full list in `/public/vehicle-data.json`.

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
- Static file rewrites for fonts, favicons, and vehicle images

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
- Vehicle-specific landing pages target long-tail keywords

## Licence

Proprietary — All rights reserved.
