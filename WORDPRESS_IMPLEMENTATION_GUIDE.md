# Oasis Europe — WordPress Homepage Implementation Guide

## 1. Page Structure Overview

The homepage consists of **8 sections** in this order:

1. **Navbar** — Fixed top navigation
2. **Hero Section** — Full-screen image with overlay text + stats bar
3. **Oasis Model** — 5-column horizontal steps
4. **Positioning** — 2-column text + image split
5. **Rental & Collection** — Image CTA + dark full-width banner
6. **Why Us** — 2×2 grid of value propositions
7. **News** — 3-column article cards
8. **CTA Section** — Centered call-to-action
9. **Footer** — Dark footer with links

---

## 2. Global Settings

### Container & Page Width
- **Max container width:** 1400px (centered)
- **Container padding:** 32px (2rem)
- **Section horizontal padding (responsive):**
  - Mobile: `24px` (1.5rem)
  - Tablet (md): `48px` (3rem)
  - Desktop (lg): `80px` (5rem)
  - Large (xl): `112px` (7rem)

### Border Radius
- **Default radius:** 4px (0.25rem)
- **Buttons (lg):** 4px

---

## 3. Typography

### Font Families
| Role | Font | Google Fonts URL |
|------|------|-----------------|
| Display/Headings | **Cormorant Garamond** (serif) | `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400` |
| Body | **Source Sans 3** (sans-serif) | `Source+Sans+3:wght@300;400;600;700` |
| UI/Labels/Stats | **Source Sans Pro** (sans-serif) | `Source+Sans+Pro:wght@300;400;600;700` |
| Alternate serif | **Lora** (serif) | `Lora:wght@400;500;600;700` |

### Heading Sizes

| Class | Mobile | Tablet (md) | Desktop (lg) | Weight | Line Height | Case | Letter Spacing |
|-------|--------|-------------|---------------|--------|-------------|------|----------------|
| `heading-xl` | 48px (3rem) | 60px (3.75rem) | 72px (4.5rem) | 300 (light) | 1.1 | Normal (sentence) | Normal |
| `heading-lg` | 36px (2.25rem) | 48px (3rem) | 60px (3.75rem) | 300 (light) | 1.15 | Normal | Normal |
| `heading-md` | 24px (1.5rem) | 30px (1.875rem) | 30px (1.875rem) | 300 (light) | 1.2 | Normal | Normal |

### Body & Label Sizes

| Class | Mobile | Tablet (md) | Weight | Line Height | Case | Letter Spacing |
|-------|--------|-------------|--------|-------------|------|----------------|
| `body-lg` | 16px (1rem) | 18px (1.125rem) | 300 (light) | 1.625 (relaxed) | Normal | Normal |
| `label-sm` | 12px (0.75rem) | 14px (0.875rem) | 500 (medium) | Default | UPPERCASE | 0.2em |
| Stats values | — | 24-30px | 300 (light) | Default | Normal | Normal |
| Stats labels | — | 12px | Default | Default | UPPERCASE | wider |

---

## 4. Color Palette

### Light Mode (Primary)

| Token | HSL | RGB | Hex | Usage |
|-------|-----|-----|-----|-------|
| `background` | hsl(36, 33%, 97%) | rgb(249, 247, 243) | `#F9F7F3` | Page background |
| `foreground` | hsl(30, 10%, 15%) | rgb(42, 39, 34) | `#2A2722` | Primary text, dark overlays |
| `card` | hsl(36, 30%, 95%) | rgb(246, 243, 237) | `#F6F3ED` | Card backgrounds |
| `secondary` | hsl(33, 25%, 90%) | rgb(235, 229, 220) | `#EBE5DC` | Section alt backgrounds |
| `muted` | hsl(33, 20%, 92%) | rgb(239, 235, 229) | `#EFEBE5` | Muted backgrounds |
| `muted-foreground` | hsl(30, 8%, 45%) | rgb(122, 117, 106) | `#7A756A` | Secondary text |
| `accent` | hsl(36, 45%, 72%) | rgb(211, 192, 155) | `#D3C09B` | Gold accent, step numbers |
| `border` | hsl(33, 20%, 88%) | rgb(231, 225, 216) | `#E7E1D8` | Borders, dividers |
| `sand` | hsl(36, 33%, 97%) | rgb(249, 247, 243) | `#F9F7F3` | Light text on dark |
| `sand-dark` | hsl(33, 25%, 90%) | rgb(235, 229, 220) | `#EBE5DC` | Alt sand |
| `warm-black` | hsl(30, 10%, 10%) | rgb(28, 26, 23) | `#1C1A17` | Deep dark sections |
| `gold` | hsl(38, 50%, 60%) | rgb(204, 173, 112) | `#CCAD70` | Gold highlights |

### Primary/Foreground Pairs
| Token | HSL | RGB | Hex |
|-------|-----|-----|-----|
| `primary` | hsl(30, 10%, 15%) | rgb(42, 39, 34) | `#2A2722` |
| `primary-foreground` | hsl(36, 33%, 97%) | rgb(249, 247, 243) | `#F9F7F3` |

---

## 5. Section-by-Section Block Structure

### 5.1 Navbar (Fixed)

**WordPress Block:** Custom Header or `Group` block with sticky position

```
Group (full-width, position: fixed, z-index: 50)
├── Group (inner container, flex, justify-between, align-center)
│   ├── Site Title / Text: "OASIS EUROPE" 
│   │   Font: Source Sans Pro, 24px, weight 300
│   │   "EUROPE" = weight 500
│   └── Navigation Block
│       Links: Management | Developments | Capital | Advisory | About Us
│       Font: Source Sans 3, 12-14px, weight 500, UPPERCASE, letter-spacing: 0.2em
│       Color: muted-foreground (#7A756A), hover: foreground (#2A2722)
```

**Behavior:**
- Transparent background initially, padding: 24px vertical
- On scroll (>50px): background `#F9F7F3` at 95% opacity, blur backdrop, bottom border `#E7E1D8`, padding: 16px vertical

---

### 5.2 Hero Section

**WordPress Block Structure:**
```
Cover Block (min-height: 100vh, background-image: hero-villa.jpg)
├── Gradient Overlay: linear-gradient(to top, rgba(42,39,34,0.8), rgba(42,39,34,0.3), rgba(42,39,34,0.1))
├── Group (content, max-width: 896px, padding-bottom: 48-80px)
│   ├── Paragraph (label)
│   │   "Management · Development · Private Capital · Advisory · Brands"
│   │   Font: 12-14px, Source Sans 3, weight 500, UPPERCASE, tracking 0.2em
│   │   Color: rgba(249,247,243, 0.7)
│   │   Margin-bottom: 24px
│   ├── Heading H1
│   │   "Asset Management, Reimagined."
│   │   Font: Cormorant Garamond, 48/60/72px, weight 300
│   │   Color: #F9F7F3
│   │   Margin-bottom: 32px
│   ├── Paragraph (body)
│   │   Font: Source Sans 3, 16-18px, weight 300, line-height 1.625
│   │   Color: rgba(249,247,243, 0.8)
│   │   Max-width: 672px
│   │   Margin-bottom: 40px
│   ├── Buttons Group (flex, gap 16px, margin-bottom 64px)
│   │   ├── Button: "Explore Our Ecosystem"
│   │   │   BG: #F9F7F3, Text: #2A2722, hover: rgba(249,247,243,0.9)
│   │   └── Button: "Schedule a Private Consultation"
│   │       Border: rgba(249,247,243, 0.4), Text: #F9F7F3
│   │       Hover: BG #F9F7F3, Text: #2A2722
│   └── Group (Stats bar, grid 2-col mobile / 5-col desktop)
│       Border-top: 1px solid rgba(249,247,243, 0.2), padding-top: 40px
│       ├── Stat: "€120M+" / "Management Value"
│       ├── Stat: "42" / "Projects Managed"
│       ├── Stat: "€65M+" / "Capital Deployed"
│       ├── Stat: "28%" / "Avg. ROI"
│       └── Stat: "12" / "Assets in Development"
│       Value: Source Sans Pro, 24-30px, weight 300, color #F9F7F3
│       Label: 12px, UPPERCASE, tracking wider, color rgba(249,247,243, 0.5)
```

---

### 5.3 Oasis Model Section

**Spacing:** Padding 96px / 128px vertical  
**Background:** `#F9F7F3`

```
Group (section)
├── Group (header, text-center, margin-bottom 64-80px)
│   ├── Paragraph: "The Oasis Model" (label-sm style)
│   └── Heading H2: "One Ecosystem. Total Control."
│       Cormorant Garamond, 36/48/60px, weight 300
├── Columns Block (5 columns, equal width, no gap — use 1px border between)
│   ├── Column 1: Acquire
│   │   Padding: 32px
│   │   Border: 1px solid #E7E1D8
│   │   ├── Paragraph: "01" (label-sm, color #D3C09B, mb 24px)
│   │   ├── Heading H3: "Acquire" (Source Sans Pro, 18px, weight 500)
│   │   ├── Paragraph: "Buy & Sales Advisory" (14px, muted, weight 500)
│   │   └── Paragraph: description (14px, weight 300, line-height relaxed)
│   ├── Column 2: Transform (same structure)
│   ├── Column 3: Optimize
│   ├── Column 4: Structure
│   └── Column 5: Exit
│   Hover state: background rgba(235,229,220, 0.5)
```

---

### 5.4 Positioning Section

**Background:** `#EBE5DC` (secondary)  
**Layout:** 2-column grid, min-height 70vh

```
Columns Block (2 columns, no gap, full-width)
├── Column 1 (text, vertically centered, padding: 80px section-padding)
│   ├── Paragraph: "Our Position" (label-sm, mb 32px)
│   ├── Heading H2: "We are not brokers. We are asset architects."
│   │   "We are asset architects." in italic
│   │   Cormorant Garamond, 36/48/60px, weight 300
│   └── Paragraph: body text
│       Source Sans 3, 16-18px, weight 300, max-width 512px
└── Column 2 (image, full height)
    └── Image Block: architectural-detail.jpg
        Object-fit: cover, 100% height
```

---

### 5.5 Rental Division + Marbella Collection

#### 5.5a Rental Division
```
Cover Block (min-height: 60vh, background: rental-villa.jpg, content at bottom)
├── Gradient: linear-gradient(to top, rgba(42,39,34,0.7), rgba(42,39,34,0.2), transparent)
├── Group (padding-bottom: 64-80px)
│   ├── Paragraph: "Rental Division" (label-sm, color rgba(249,247,243,0.6))
│   ├── Heading H2: "Hospitality-Driven Yield."
│   │   Color: #F9F7F3, Cormorant Garamond 36/48/60px
│   ├── Paragraph (body, color rgba(249,247,243,0.7), max-width 576px)
│   └── Button: "View Rental Division"
│       BG: #F9F7F3, Text: #2A2722
```

#### 5.5b Marbella Collection
```
Group (full-width, bg: #1C1A17, padding: 96-128px vertical, text-center)
├── Paragraph: "The Marbella Collection" (label-sm, color rgba(204,173,112,0.7))
├── Heading H2: "The Exceptional Only."
│   Color: #F9F7F3, Cormorant Garamond 48/60/72px
├── Paragraph (color rgba(249,247,243,0.5), max-width 512px)
└── Button: "Request Early Access"
    Border: rgba(249,247,243,0.3), Text: #F9F7F3
    Hover: BG #F9F7F3, Text: #1C1A17
```

---

### 5.6 Why Us Section

**Background:** `#EBE5DC`  
**Spacing:** Padding 96-128px vertical

```
Group (section)
├── Group (header, margin-bottom 64px)
│   ├── Paragraph: "Why Us" (label-sm)
│   └── Heading H2: "Why Partners Choose Us"
│       Cormorant Garamond, 36/48/60px, weight 300
└── Columns Block (2×2 grid, gap: 1px, bg: #E7E1D8 for gap lines)
    ├── Row 1
    │   ├── Cell: bg #EBE5DC, padding 40-48px
    │   │   ├── Paragraph: "01" (label-sm, color #D3C09B)
    │   │   ├── Heading H3: "All in One Platform" (Cormorant Garamond, 24-30px, weight 300)
    │   │   └── Paragraph: description (16-18px, weight 300)
    │   └── Cell: "Integrated Value Creation" (same structure)
    └── Row 2
        ├── Cell: "Full Transparency"
        └── Cell: "Aligned Capital"
```

---

### 5.7 News Section

**Background:** `#F9F7F3`  
**Spacing:** Padding 96-128px vertical

```
Group (section)
├── Group (header, flex space-between, margin-bottom 64px)
│   ├── Group
│   │   ├── Paragraph: "Latest" (label-sm)
│   │   └── Heading H2: "News" (heading-lg)
│   └── Link: "View All →" (label-sm, hidden on mobile)
└── Columns Block (3 columns, gap: 1px, bg: #E7E1D8)
    ├── Card 1 (bg: #F9F7F3, padding 32-40px)
    │   ├── Paragraph: "Development" (label-sm, color #D3C09B, 12px)
    │   ├── Paragraph: "March 2026" (12px, muted)
    │   ├── Heading H3: title (Source Sans Pro, 20px, weight 500)
    │   └── Paragraph: excerpt (14px, weight 300, relaxed)
    ├── Card 2
    └── Card 3
    Hover: background rgba(235,229,220, 0.5)
```

---

### 5.8 CTA Section

**Background:** `#EBE5DC`  
**Spacing:** Padding 80-96px vertical

```
Group (text-center)
├── Paragraph: "Get in Touch" (label-sm)
├── Heading H2: "Where Your Investment Begins"
│   Cormorant Garamond, 36/48/60px, weight 300
├── Paragraph (body, max-width 576px, centered)
└── Button: "Book an Appointment"
    BG: #2A2722, Text: #F9F7F3
```

---

### 5.9 Footer

**Background:** `#2A2722` (foreground)  
**Padding:** 64px vertical

```
Group (full-width, bg: #2A2722)
├── Group (flex row, justify-between, mb 48px)
│   ├── Text: "OASIS EUROPE" (Source Sans Pro, 20px, weight 300, color #F9F7F3)
│   └── Paragraph: "Marbella · Costa del Sol · Ibiza"
│       12px, UPPERCASE, tracking wider, color rgba(249,247,243, 0.4)
├── Separator (border-top: 1px solid rgba(249,247,243, 0.1), padding-top 32px)
│   ├── Paragraph: "Private Consultations by Appointment Only"
│   │   12px, italic, Source Sans Pro, color rgba(249,247,243, 0.3)
│   └── Group (flex)
│       ├── Link: "LinkedIn"
│       └── Link: "Instagram"
│       12px, UPPERCASE, color rgba(249,247,243, 0.4)
└── Group (flex, margin-top 32px)
    ├── Link: "Legal" | "Privacy" | "Terms"
    │   12px, color rgba(249,247,243, 0.3)
    └── Text: "© 2026 Oasis Europe" (color rgba(249,247,243, 0.2))
```

---

## 6. Button Specifications

| Variant | Background | Text Color | Border | Hover | Font | Size | Tracking |
|---------|-----------|------------|--------|-------|------|------|----------|
| `hero` (primary) | `#2A2722` | `#F9F7F3` | none | opacity 90% | Source Sans 3, 14px, weight 500 | height 44px, px 32px | 0.15em, UPPERCASE |
| `hero-outline` | transparent | `#2A2722` | 1px `#2A2722` | fill `#2A2722`, text `#F9F7F3` | Same | Same | Same |
| `hero-light` | `#F9F7F3` | `#2A2722` | none | opacity 90% | Same | Same | Same |
| `dark` | `#1C1A17` | `#F9F7F3` | none | opacity 90% | Same | Same | Same |

**All buttons:** border-radius 4px, font: Source Sans 3, 14px, weight 500, UPPERCASE, letter-spacing 0.15em

---

## 7. Animations

All sections use **scroll-triggered fade-in** animations:

- **Effect:** Translate Y 20-32px → 0, Opacity 0 → 1
- **Duration:** 800ms ease-out (standard), 1000ms (hero elements)
- **Stagger:** 150ms delay between sequential items
- **Trigger:** IntersectionObserver at 20-30% threshold
- **WordPress:** Use `animate-on-scroll` CSS class with Intersection Observer JS snippet or a lightweight plugin like AOS (Animate On Scroll)

```css
/* Custom CSS for WordPress */
.aos-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.aos-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 768px | Single column layouts, heading-xl = 48px, section padding 24px, stats 2-col grid, hamburger nav |
| Tablet (md) | 768px+ | 2-col grids activate, heading-xl = 60px, section padding 48px, stats 5-col |
| Desktop (lg) | 1024px+ | Full layouts, heading-xl = 72px, section padding 80px, desktop nav visible |
| Large (xl) | 1280px+ | Section padding 112px |

### Layout Changes by Device:
- **Oasis Model:** Stacked cards on mobile → 5-column row on desktop
- **Positioning:** Stacked (text above image) on mobile → 2-column on desktop
- **Why Us:** Single column on mobile → 2×2 grid on desktop
- **News:** Single column on mobile → 3-column on desktop
- **Stats bar:** 2-column on mobile → 5-column on desktop
- **Nav:** Hamburger menu on mobile → horizontal links on desktop

---

## 9. Image Specifications

| Image | Aspect Ratio | Recommended Min Size | Object Fit |
|-------|-------------|---------------------|------------|
| Hero (hero-villa.jpg) | ~16:9 | 1920×1080px | cover |
| Architectural detail | ~3:4 or flexible | 800×1200px | cover, full height |
| Rental villa | ~16:9 | 1920×1080px | cover |
| CTA background | ~16:9 | 1920×1080px | cover |

---

## 10. Recommended WordPress Setup

### Theme
- **Recommended:** Blank theme like **Flavor** or **Developer starter theme**, or use **Full Site Editing (FSE)** with a blank block theme (e.g., Twenty Twenty-Four customized)
- Alternatively, **GeneratePress** or **Kadence** with all defaults stripped

### Required Plugins
1. **Custom Fonts** — To load Cormorant Garamond, Source Sans 3, Source Sans Pro from Google Fonts
2. **AOS or ScrollReveal** — For scroll-triggered animations (or custom JS snippet)
3. **Safe SVG** — If using SVG logos

### Custom CSS to Add

```css
/* === Global Resets === */
body {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 300;
  background-color: #F9F7F3;
  color: #2A2722;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  text-transform: none;
}

/* === Utility Classes === */
.label-sm {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

@media (min-width: 768px) {
  .label-sm { font-size: 14px; }
}

/* === Section Padding === */
.section-padding {
  padding-left: 24px;
  padding-right: 24px;
}
@media (min-width: 768px) {
  .section-padding { padding-left: 48px; padding-right: 48px; }
}
@media (min-width: 1024px) {
  .section-padding { padding-left: 80px; padding-right: 80px; }
}
@media (min-width: 1280px) {
  .section-padding { padding-left: 112px; padding-right: 112px; }
}

/* === Button Base === */
.btn-oasis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 32px;
  border-radius: 4px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}
.btn-oasis-primary {
  background: #2A2722;
  color: #F9F7F3;
}
.btn-oasis-primary:hover { opacity: 0.9; }
.btn-oasis-outline {
  background: transparent;
  border: 1px solid #2A2722;
  color: #2A2722;
}
.btn-oasis-outline:hover {
  background: #2A2722;
  color: #F9F7F3;
}
.btn-oasis-light {
  background: #F9F7F3;
  color: #2A2722;
}
.btn-oasis-light:hover { opacity: 0.9; }

/* === Grid Gap Lines (1px borders via background trick) === */
.grid-gap-lines {
  background-color: #E7E1D8;
  gap: 1px;
}
.grid-gap-lines > * {
  background-color: #F9F7F3;
}
```

---

## 11. Quick Reference — All Colors (RGB)

| Name | RGB | Hex |
|------|-----|-----|
| Background / Sand | rgb(249, 247, 243) | `#F9F7F3` |
| Foreground / Primary | rgb(42, 39, 34) | `#2A2722` |
| Secondary | rgb(235, 229, 220) | `#EBE5DC` |
| Muted BG | rgb(239, 235, 229) | `#EFEBE5` |
| Muted Text | rgb(122, 117, 106) | `#7A756A` |
| Accent / Gold | rgb(211, 192, 155) | `#D3C09B` |
| Border | rgb(231, 225, 216) | `#E7E1D8` |
| Warm Black | rgb(28, 26, 23) | `#1C1A17` |
| Gold | rgb(204, 173, 112) | `#CCAD70` |
| Primary Foreground | rgb(249, 247, 243) | `#F9F7F3` |
