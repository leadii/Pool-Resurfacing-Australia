# Pool Resurfacing Australia - Project Instructions

## Brand Guidelines

**MANDATORY:** Always follow the brand guidelines in `BRAND_GUIDELINES.md` when making changes to this project. Read `BRAND_GUIDELINES.md` before creating or modifying any page.

### Quick Reference

**Colors:**
- Yellow: `#E7E515` (buttons, accents)
- Navy: `#1A1348` (text, backgrounds)
- Cream: `#F3EBD9` (page backgrounds)
- White: `#FFFFFF` (cards, text on dark)

**Fonts (Local - from `/public/fonts/`):**
- Headings: `'DIN Condensed Bold', sans-serif` (weight 700)
- Body: `'Arial', sans-serif` (weight 400)

**Button Radius:** Always use `8px` - never use pill buttons (50px+)

**Content Max-Width:** `800px` for header, hero content, and form sections

### Pages

- `index.html` - Main landing page with quiz form
- `pebblecrete.html` - Pebblecrete resurfacing landing page
- `fibreglass.html` - Fibreglass resurfacing landing page
- `pool-tiling.html` - Pool tiling landing page
- `quartz-aggregate.html` - Quartz aggregate resurfacing landing page
- `pool-resurfacing-guide.html` - Guide to pool resurfacing
- `additional-info.html` - Additional info multi-step quiz
- `contact.html` - Contact Us form page
- `faq.html` - Pool resurfacing FAQ
- `thanks.html` - Form submission success page
- `terms.html` - Terms & Conditions
- `privacy.html` - Privacy Policy
- `404.html` - 404 error page

### Business Model

Pool Resurfacing Australia is a **lead generation service**. We connect pool owners with trusted resurfacing specialists. We do NOT perform the resurfacing work ourselves.

Copy should focus on:
- Connecting pool owners with local specialists
- Getting free, no-obligation quotes
- Comparing options before committing

### Key Rules

1. All buttons must have `border-radius: 8px`
2. Header, hero content, and stats must align to 800px max-width
3. Use DIN Condensed Bold for all headings
4. Use Arial for all body text
5. Primary buttons are yellow with navy text
6. Form submissions redirect to `thanks.html`
7. **All form elements must have WHITE backgrounds (`#FFFFFF`)** - inputs, radio options, checkboxes, textareas, selects. Never use cream for form elements.

### Pool Resurfacing Types

1. **Pebblecrete** - Natural pebble aggregate finish, 15-20 year lifespan, $10,000-$18,000
2. **Fibreglass** - Smooth waterproof coating, 20+ year lifespan, $12,000-$25,000
3. **Pool Tiling** - Ceramic or mosaic tiles, premium aesthetics, $15,000-$30,000+
4. **Quartz Aggregate** - Premium crystal finish, luxury option, $18,000-$35,000+

### Creating New Pages

When creating any new HTML page, you MUST:

1. Include the local font declarations at the top of the `<style>` block:
```html
<style>
    @font-face {
        font-family: 'DIN Condensed Bold';
        src: url('/fonts/DIN Condensed Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Arial';
        src: url('/fonts/Arial.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    /* Rest of styles... */
</style>
```

2. Set body font-family to Arial
3. Set all headings (h1, h2, h3) font-family to DIN Condensed Bold
4. Follow all color, spacing, and component guidelines from `BRAND_GUIDELINES.md`
