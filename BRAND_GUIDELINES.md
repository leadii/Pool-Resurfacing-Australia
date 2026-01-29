# GVM Upgrades Australia - Brand Guidelines

## Brand Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Electric Yellow | `#E7E515` | `--yellow` | Primary accent, CTAs, buttons, highlights |
| Deep Navy | `#1A1348` | `--navy` | Primary text, backgrounds, headers |
| Pure White | `#FFFFFF` | `--white` | Backgrounds, text on dark |
| Warm Cream | `#F3EBD9` | `--cream` | Page backgrounds, cards |
| Navy Light | `rgba(26, 19, 72, 0.1)` | `--navy-light` | Borders, subtle backgrounds |

### Color Usage Guidelines

- **Primary Actions**: Always use Electric Yellow (`#E7E515`) for primary buttons and CTAs
- **Text**: Deep Navy (`#1A1348`) for headings and body text on light backgrounds
- **Backgrounds**: Warm Cream (`#F3EBD9`) for page backgrounds, Deep Navy for hero sections
- **Cards**: White (`#FFFFFF`) for content cards on cream backgrounds

---

## Typography

### Font Families

| Font | Weight | Usage |
|------|--------|-------|
| **DIN Condensed Bold** | 700 (Bold) | All headings (H1, H2, H3), card titles, logo |
| **Arial** | 400 | Body text, labels, buttons |

### Font Files

Fonts are loaded locally from `/public/fonts/`:
- `DIN Condensed Bold.ttf` - Headings
- `Arial.ttf` - Body text

### Font Import (Required in all HTML files)

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
</style>
```

### CSS Implementation

```css
/* Headings */
font-family: 'DIN Condensed Bold', sans-serif;

/* Body text */
font-family: 'Arial', sans-serif;
```

### Font Sizes

| Element | Size | Weight |
|---------|------|--------|
| H1 (Hero) | `clamp(2rem, 5vw, 3.5rem)` | 800 |
| H2 (Section) | `2rem` | 700 |
| H3 (Card Title) | `1.1rem` | 700 |
| Body | `1rem` / `0.9rem` | 400-500 |
| Small/Labels | `0.75rem` - `0.875rem` | 500-600 |
| Buttons | `0.875rem` - `0.9rem` | 600-700 |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | `8px` |
| Cards | `12px` - `24px` |
| Input Fields | `12px` |
| Stat Icons | `10px` - `12px` |
| Badges | `8px` |
| FAQ Items | `12px` |

### Important Note
Do NOT use fully rounded buttons (`border-radius: 50px` or `border-radius: 100px`). All buttons should use `8px` border radius for a more modern, subtle rounded look.

---

## Buttons

### Primary Button (Yellow)
```css
.btn-primary {
    background-color: #E7E515;
    color: #1A1348;
    border: none;
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(231, 229, 21, 0.4);
}
```

### Secondary Button
```css
.btn-secondary {
    background: transparent;
    color: #1A1348;
    border: 2px solid rgba(26, 19, 72, 0.1);
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
}

.btn-secondary:hover {
    background: rgba(26, 19, 72, 0.05);
}
```

---

## Layout

### Max Widths

| Context | Max Width |
|---------|-----------|
| Header content | `800px` |
| Hero content | `800px` |
| Stat cards container | `800px` |
| Form/Quiz container | `800px` |
| FAQ content | `800px` |
| Full-width sections | `1200px` |

### Spacing

| Size | Value | Usage |
|------|-------|-------|
| xs | `0.5rem` | Tight spacing |
| sm | `1rem` | Component internal spacing |
| md | `1.5rem` - `2rem` | Between elements |
| lg | `3rem` - `4rem` | Section padding |
| xl | `4rem` - `5rem` | Major section breaks |

---

## Components

### Stat Cards (Hero Section)
```css
.stat-item {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon {
    width: 44px;
    height: 44px;
    background-color: #E7E515;
    border-radius: 10px;
}
```

### FAQ Accordion
```css
.faq-item {
    background-color: #FFFFFF;
    border-radius: 12px;
    overflow: hidden;
}

.faq-question {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
}
```

### Form Inputs
```css
.text-input {
    padding: 18px 20px;
    font-size: 16px;
    border: 2px solid rgba(26, 19, 72, 0.1);
    border-radius: 12px;
    background: #FFFFFF;
}

.text-input:focus {
    border-color: #1A1348;
    box-shadow: 0 0 0 4px rgba(26, 19, 72, 0.1);
}
```

---

## Quiz/Multi-Step Forms

### IMPORTANT: Form Element Backgrounds
**All form elements (inputs, radio options, checkboxes, textareas, selects) must have WHITE backgrounds (`#FFFFFF`), NOT cream.**

The page background is cream (`#F3EBD9`), so form elements use white to create visual contrast and hierarchy. This applies to:
- Text inputs
- Radio option containers
- Checkbox option containers
- Textareas
- Select dropdowns
- Any clickable form element

### Structure
Quizzes use a step-through format showing one question at a time with:
- Progress indicator ("Step X of Y")
- Progress dots
- Continue/Back navigation buttons
- Validation before proceeding

### Progress Header
```css
.progress-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(26, 19, 72, 0.1);
}

.step-indicator {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1A1348;
}

.progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(26, 19, 72, 0.1);
}

.progress-dot.active {
    background: #E7E515;
    transform: scale(1.2);
}

.progress-dot.completed {
    background: #1A1348;
}
```

### Radio Options
Radio options use **white backgrounds** on cream page background with subtle borders:
```css
.radio-option {
    display: flex;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: #FFFFFF;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(26, 19, 72, 0.08);
    box-shadow: 0 1px 3px rgba(26, 19, 72, 0.04);
    transition: all 0.3s ease;
}

.radio-option:hover {
    border-color: rgba(26, 19, 72, 0.15);
    box-shadow: 0 2px 8px rgba(26, 19, 72, 0.08);
}

.radio-option:has(input:checked) {
    border-color: #E7E515;
}

.radio-custom {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(26, 19, 72, 0.2);
    border-radius: 50%;
    margin-right: 1rem;
    background: #FFFFFF;
}

.radio-custom (checked) {
    background: #E7E515;
    border-color: #E7E515;
}

.radio-text {
    font-size: 1rem;
    color: #1A1348;
    font-weight: 500;
}
```

### Checkbox Options
Same styling as radio options but with rounded square indicator:
```css
.checkbox-option {
    /* Same as radio-option */
    padding: 1.25rem 1.5rem;
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid rgba(26, 19, 72, 0.08);
    box-shadow: 0 1px 3px rgba(26, 19, 72, 0.04);
}

.checkbox-custom {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(26, 19, 72, 0.2);
    border-radius: 6px;  /* Rounded square, not circle */
    margin-right: 1rem;
    background: #FFFFFF;
}

.checkbox-custom (checked) {
    background: #E7E515;
    border-color: #E7E515;
    /* Contains checkmark SVG icon */
}
```

### Number Inputs in Quiz
```css
.number-input {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 1px solid rgba(26, 19, 72, 0.08);
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0 1px 3px rgba(26, 19, 72, 0.04);
}

.number-input:focus {
    border-color: #1A1348;
}
```

### Quiz Navigation Buttons
```css
.nav-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

/* Primary (Continue/Submit) */
.btn-primary {
    flex: 1;
    padding: 1rem 2rem;
    background: #E7E515;
    color: #1A1348;
    border-radius: 8px;
    font-weight: 600;
}

/* Secondary (Back) */
.btn-secondary {
    padding: 1rem 2rem;
    background: transparent;
    color: #1A1348;
    border: 2px solid rgba(26, 19, 72, 0.1);
    border-radius: 8px;
    font-weight: 600;
}

/* Disabled state */
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

### Quiz Validation Rules
- Continue buttons should be **disabled by default**
- Enable continue only when required selection is made
- For radio questions: enable when any option selected
- For checkbox questions: enable when at least one option selected
- For number inputs: enable when value entered OR "Not sure" checked

### Quiz Animation
Steps transition with fade-in animation:
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## Shadows

| Type | Value | Usage |
|------|-------|-------|
| Subtle | `0 2px 8px rgba(26, 19, 72, 0.06)` | Cards, icons |
| Medium | `0 4px 20px rgba(26, 19, 72, 0.12)` | Elevated cards |
| Strong | `0 20px 40px rgba(26, 19, 72, 0.15)` | Modals, important cards |
| Yellow Glow | `0 4px 20px rgba(231, 229, 21, 0.4)` | Button hover states |

---

## Animations

### Standard Transitions
```css
transition: all 0.3s ease;
```

### Hover Lift
```css
transform: translateY(-2px);
```

### Fade In Up (Page Load)
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## File Structure

```
/GVM
├── index.html              # Main landing page with quiz form
├── additional-info.html    # Additional info multi-step quiz
├── contact.html            # Contact Us form page
├── faq.html                # Legal & Compliance FAQ
├── thanks.html             # Form submission success page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── 404.html                # 404 error page with monster truck game
├── BRAND_GUIDELINES.md     # This file
├── CLAUDE.md               # AI assistant instructions
└── public/
    ├── GVMLogo.svg         # SVG logo
    ├── Header.png          # Hero background image
    ├── image1.png          # How It Works step 1
    ├── image2.png          # How It Works step 2
    ├── image3.png          # How It Works step 3
    └── fonts/
        ├── DIN Condensed Bold.ttf  # Heading font
        └── Arial.ttf               # Body font
```

---

## Logo

- **File**: `/public/GVMLogo.svg` (use this SVG file on all pages)
- **Height**: `40px` in header
- **Text**: "GVM" in Electric Yellow (`#E7E515`)
- **Subtext**: "UPGRADES AUSTRALIA" in White (`#FFFFFF`)
- **Font**: DIN Condensed Bold (700)

```html
<a href="index.html" class="logo">
    <img src="/GVMLogo.svg" alt="GVM Upgrades Australia" height="40">
</a>
```

---

## Accessibility

- Maintain contrast ratio of at least 4.5:1 for body text
- Yellow on navy provides strong contrast
- Navy on cream/white provides strong contrast
- Interactive elements should have visible focus states
- All buttons should have hover/focus feedback

---

## Do's and Don'ts

### Do's
- Use consistent 8px border radius on all buttons
- Maintain 800px max-width for content alignment
- Use DIN Condensed Bold for headings, Arial for body
- Apply yellow glow shadow on button hover
- Use semi-transparent backgrounds for glass effect cards

### Don'ts
- Don't use fully rounded pill buttons (50px+ radius)
- Don't mix heading fonts
- Don't use colors outside the defined palette
- Don't skip hover states on interactive elements
- Don't use different max-widths for aligned content sections
- **Don't use cream (`#F3EBD9`) for form element backgrounds** - always use white (`#FFFFFF`) for inputs, radio options, checkbox options, textareas, and selects
