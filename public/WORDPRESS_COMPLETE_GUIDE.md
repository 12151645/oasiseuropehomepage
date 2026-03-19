# Oasis Europe — Complete WordPress Implementation Guide

All pages: Homepage, Management, Developments, Capital, Advisory.
Each section includes WordPress block structure, styling specs, and copy-paste content.

---

## Table of Contents

1. [Global Settings](#1-global-settings)
2. [Homepage](#2-homepage)
3. [Management Page](#3-management-page)
4. [Developments Page](#4-developments-page)
5. [Capital Page](#5-capital-page)
6. [Advisory Page](#6-advisory-page)
7. [Global CSS & JavaScript](#7-global-css--javascript)

---

## 1. Global Settings

### 1.1 Container & Spacing

- **Max container width:** 1400px (centered)
- **Section horizontal padding (responsive):**
  - Mobile: `24px` · Tablet (md 768px+): `48px` · Desktop (lg 1024px+): `80px` · Large (xl 1280px+): `112px`
- **Border radius (all buttons):** 4px

### 1.2 Typography

| Role | Font | Google Fonts |
|------|------|-------------|
| Headings | **Cormorant Garamond** (serif) | `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400` |
| Body | **Source Sans 3** (sans-serif) | `Source+Sans+3:wght@300;400;600;700` |
| UI/Labels/Stats | **Source Sans Pro** (sans-serif) | `Source+Sans+Pro:wght@300;400;600;700` |

| Class | Mobile | Tablet (md) | Desktop (lg) | Weight | Line Height |
|-------|--------|-------------|--------------|--------|-------------|
| `heading-xl` | 48px | 60px | 72px | 300 | 1.1 |
| `heading-lg` | 36px | 48px | 60px | 300 | 1.15 |
| `heading-md` | 24px | 30px | 30px | 300 | 1.2 |
| `body-lg` | 16px | 18px | — | 300 | 1.625 |
| `label-sm` | 12px | 14px | — | 500, UPPERCASE, tracking 0.2em | — |

### 1.3 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background` / `sand` | `#F9F7F3` | Page background, light text on dark |
| `foreground` / `primary` | `#2A2722` | Primary text, dark overlays |
| `secondary` | `#EBE5DC` | Alternate section backgrounds |
| `muted-foreground` | `#7A756A` | Secondary text |
| `accent` | `#D3C09B` | Gold accent, step numbers |
| `border` | `#E7E1D8` | Borders, dividers |
| `warm-black` | `#1C1A17` | Deep dark sections |
| `gold` | `#CCAD70` | Gold highlights |
| `capital` (bg) | `#3A4032` | Capital page dark green |
| `capital-foreground` | warm cream `hsl(40, 30%, 95%)` | Capital page text |
| `developments` (bg) | `#272727` | Developments page dark |
| `advisory` (bg) | `#EDE6DD` | Advisory page warm beige |
| `advisory-foreground` | `hsl(25, 15%, 20%)` | Advisory page dark text |

### 1.4 Button Specs

All buttons: height 44px, padding 0 32px, border-radius 4px, Source Sans 3, 14px, weight 500, UPPERCASE, letter-spacing 0.15em.

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| `primary` | `#2A2722` | `#F9F7F3` | none | opacity 90% |
| `outline` | transparent | `#2A2722` | 1px `#2A2722` | fill `#2A2722`, text `#F9F7F3` |
| `light` | `#F9F7F3` | `#2A2722` | none | opacity 90% |
| `dark` | `#1C1A17` | `#F9F7F3` | none | opacity 90% |

### 1.5 Animations

All sections use **scroll-triggered fade-in**: translate-Y 24px → 0, opacity 0 → 1, 800–1000ms ease-out. Stagger 150ms between items. Trigger at 20–30% intersection.

### 1.6 Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 768px | Single column, heading-xl=48px, padding 24px, hamburger nav |
| Tablet (md) | 768px+ | 2-col grids, heading-xl=60px, padding 48px |
| Desktop (lg) | 1024px+ | Full layouts, heading-xl=72px, padding 80px |
| Large (xl) | 1280px+ | Padding 112px |

---

## 2. Homepage

**Route:** `/`
**Section Order:** Navbar → Hero → Oasis Model → Positioning → Rental & Collection → Why Us → News → CTA → Footer

---

### 2.1 Navbar (Shared — All Pages)

**WordPress Block:** Group (full-width, fixed, z-50)

```
Group (full-width, position: fixed, z-index: 50)
├── Group (inner, flex, justify-between, align-center)
│   ├── "OASIS EUROPE" — Source Sans Pro, 20-24px, "OASIS" weight 300, "EUROPE" weight 500
│   └── Nav Links: Management | Developments | Capital | Advisory | About Us
│       Source Sans 3, 12-14px, weight 500, UPPERCASE, tracking 0.2em
│       Color: #7A756A, hover: #2A2722
```

**Behavior:** Transparent initially (py 24px). On scroll >50px: bg `#F9F7F3` at 95% opacity, backdrop-blur, border-bottom `#E7E1D8`, py 16px.

**Content:**
```
Logo: OASIS EUROPE
Links: Management | Developments | Capital | Advisory | About Us
```

---

### 2.2 Hero Section

**WordPress Block:** Cover (min-height: 100vh, image: `hero-villa.jpg`)

```
Cover Block (100vh, hero-villa.jpg)
├── Gradient: linear-gradient(to top, rgba(42,39,34,0.8), rgba(42,39,34,0.3), rgba(42,39,34,0.1))
├── Group (max-width 896px, pb 48-80px)
│   ├── Label (label-sm, rgba(249,247,243,0.7), mb 24px)
│   ├── H1 (heading-xl, #F9F7F3, mb 32px)
│   ├── Body (body-lg, rgba(249,247,243,0.8), max-w 672px, mb 40px)
│   ├── Buttons (flex, gap 16px, mb 64px)
│   │   ├── "Explore Our Ecosystem" — bg #F9F7F3, text #2A2722
│   │   └── "Schedule a Private Consultation" — border rgba(249,247,243,0.4), text #F9F7F3, hover: bg #F9F7F3 text #2A2722
│   └── Stats (grid 2-col mobile / 5-col desktop, border-top rgba(249,247,243,0.2), pt 40px)
│       Values: Source Sans Pro 24-30px weight 300, #F9F7F3
│       Labels: 12px UPPERCASE tracking-wider, rgba(249,247,243,0.5)
```

**Content:**
```
Label: Management · Development · Private Capital · Advisory · Brands
H1: Asset Management, Reimagined.
Body: An all-inclusive asset management platform for international property owners and investors in Marbella. We transform luxury real estate into structured investment vehicles — combining hospitality performance, strategic design and capital structuring under one ecosystem.
Button 1: Explore Our Ecosystem
Button 2: Schedule a Private Consultation
```

| Stat Value | Stat Label |
|-----------|-----------|
| €120M+ | Management Value |
| 42 | Projects Managed |
| €65M+ | Capital Deployed |
| 28% | Avg. ROI |
| 12 | Assets in Development |

---

### 2.3 Oasis Model Section

**Background:** `#F9F7F3` · **Padding:** 96-128px vertical

```
Group (section)
├── Header (text-center, mb 64-80px)
│   ├── Label: label-sm
│   └── H2: heading-lg
├── Group (flex-row desktop, flex-col mobile, gap 0)
│   └── 5 Columns, each:
│       ├── "01" (label-sm, color #D3C09B, mb 24px)
│       ├── H3 title (Source Sans Pro, 18px, weight 500)
│       ├── Subtitle (14px, muted, weight 500, mb 16px)
│       ├── Description (14px, weight 300, relaxed)
│       ├── Hover-reveal: "Explore →" (opacity 0→1)
│       └── Connector arrow between columns (desktop only, #D3C09B)
│       Border: 1px solid #E7E1D8, padding 32px
│       Hover: bg rgba(235,229,220,0.5)
```

**Content:**
```
Label: The Oasis Model
H2: One Ecosystem. Total Control.
```

| # | Title | Subtitle | Description |
|---|-------|----------|-------------|
| 01 | Acquire | Buy & Sales Advisory | Strategic acquisition and sales advisory for luxury real estate in prime Marbella locations. |
| 02 | Transform | Project Management | End-to-end design and development management, transforming properties into exceptional assets. |
| 03 | Optimize | Rental Management | Hospitality-grade operations maximizing yield through RNTLS Ibiza and Marbella platforms. |
| 04 | Structure | Investment Platform | Institutional-grade capital structuring for high-net-worth property portfolios. |
| 05 | Exit | Brands | Curated brand portfolio and strategic positioning for maximum asset value at exit. |

Hover link text (all steps): `Explore →`

---

### 2.4 Positioning Section

**Background:** `#EBE5DC` · **Layout:** 2-column grid, min-height 70vh

```
Columns (2, no gap, full-width)
├── Column 1 (text, vertically centered, py 80px, section-padding)
│   ├── Label: label-sm, mb 32px
│   ├── H2: heading-lg (second line italic)
│   └── Body: body-lg, max-w 512px
└── Column 2 (image: architectural-detail.jpg, object-cover, full height)
```

**Content:**
```
Label: Our Position
H2: We are not brokers.
    We are asset architects. (italic)
Body: Oasis Europe manages the full lifecycle of luxury real estate — from acquisition and transformation to rental performance and structured exit.
Image alt: Mediterranean architectural detail
```

---

### 2.5a Rental Division

```
Cover (min-height 60vh, image: rental-villa.jpg, content at bottom)
├── Gradient: linear-gradient(to top, rgba(42,39,34,0.7), rgba(42,39,34,0.2), transparent)
├── Group (pb 64-80px)
│   ├── Label (label-sm, rgba(249,247,243,0.6))
│   ├── H2 (heading-lg, #F9F7F3)
│   ├── Body (rgba(249,247,243,0.7), max-w 576px)
│   └── Button: bg #F9F7F3, text #2A2722
```

**Content:**
```
Label: Rental Division
H2: Hospitality-Driven Yield.
Body: Through RNTLS Ibiza and Marbella operations, we transform properties into high-performing hospitality assets.
Button: View Rental Division
Image alt: Luxury rental villa
```

---

### 2.5b The Marbella Collection

```
Group (full-width, bg #1C1A17, py 96-128px, text-center)
├── Label (label-sm, rgba(204,173,112,0.7))
├── H2 (heading-xl, #F9F7F3)
├── Body (rgba(249,247,243,0.5), max-w 512px)
└── Button: border rgba(249,247,243,0.3), text #F9F7F3, hover: bg #F9F7F3 text #1C1A17
```

**Content:**
```
Label: The Marbella Collection
H2: The Exceptional Only.
Body: A highly curated portfolio launching 2027.
Button: Request Early Access
```

---

### 2.6 Why Us Section

**Background:** `#EBE5DC` · **Padding:** 96-128px vertical

```
Group (section)
├── Header (mb 64px)
│   ├── Label: label-sm
│   └── H2: heading-lg
└── Grid (2×2, gap 1px, bg #E7E1D8 for gap lines)
    └── Each cell: bg #EBE5DC, padding 40-48px
        ├── Number (label-sm, #D3C09B)
        ├── H3 (Cormorant Garamond, 24-30px, weight 300)
        └── Body (body-lg)
```

**Content:**
```
Label: Why Us
H2: Why Partners Choose Us
```

| # | Title | Description |
|---|-------|-------------|
| 01 | All in One Platform | Oasis Europe offers an all-in-one platform that integrates management, development, scaling, and operations, creating a unified ecosystem for managing every stage of the investment lifecycle. |
| 02 | Integrated Value Creation | A comprehensive approach covering acquisition, development, hospitality operations, and asset management — minimizing intermediaries and enhancing long-term value. |
| 03 | Full Transparency | We adhere to governance standards for institutional investment, ensuring investors receive full reporting, independent valuations, and clear updates throughout the process. |
| 04 | Aligned Capital | Each investment is designed to synchronize capital, strategy, and the objectives of long-term partners, ensuring disciplined governance and alignment during the investment lifecycle. |

---

### 2.7 News Section

**Background:** `#F9F7F3` · **Padding:** 96-128px vertical

```
Group (section)
├── Header (flex space-between, mb 64px)
│   ├── Label + H2
│   └── "View All →" link (label-sm, hidden on mobile)
└── Grid (3-col, gap 1px, bg #E7E1D8)
    └── Card (bg #F9F7F3, padding 32-40px, hover: bg rgba(235,229,220,0.5))
        ├── Tag (label-sm, #D3C09B, 12px)
        ├── Date (12px, muted)
        ├── H3 (Source Sans Pro, 20px, weight 500, hover: #D3C09B)
        └── Excerpt (14px, weight 300, relaxed)
```

**Content:**
```
Label: Latest
H2: News
Link: View All →
```

| Tag | Date | Title | Excerpt |
|-----|------|-------|---------|
| Development | March 2026 | New Luxury Development Announced in La Zagaleta | A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves. |
| Capital | February 2026 | €25M Fund Close for Marbella Hospitality Portfolio | Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol. |
| Brands | January 2026 | RNTLS Expands Operations to Marbella | Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market. |

---

### 2.8 CTA Section

**Background:** `#EBE5DC` · **Padding:** 80-96px vertical

```
Group (text-center)
├── Label: label-sm
├── H2: heading-lg
├── Body (body-lg, max-w 576px, centered)
└── Button: bg #2A2722, text #F9F7F3
```

**Content:**
```
Label: Get in Touch
H2: Where Your Investment Begins
Body: Whether you're looking to invest, develop, list a property, or simply learn more about what we do — we'd like to hear from you.
Button: Book an Appointment
```

---

### 2.9 Footer (Shared — All Pages)

**Background:** `#2A2722` · **Padding:** 64px vertical

```
Group (bg #2A2722)
├── Row (flex, justify-between, mb 48px)
│   ├── "OASIS EUROPE" (Source Sans Pro, 20px, weight 300, #F9F7F3)
│   └── "Marbella · Costa del Sol · Ibiza" (12px, UPPERCASE, rgba(249,247,243,0.4))
├── Separator (border-top rgba(249,247,243,0.1), pt 32px)
│   ├── "Private Consultations by Appointment Only" (12px, italic, rgba(249,247,243,0.3))
│   └── Links: LinkedIn | Instagram (12px, UPPERCASE, rgba(249,247,243,0.4))
└── Row (mt 32px)
    ├── Legal | Privacy | Terms (12px, rgba(249,247,243,0.3))
    └── © [year] Oasis Europe (rgba(249,247,243,0.2))
```

**Content:**
```
Logo: OASIS EUROPE
Location: Marbella · Costa del Sol · Ibiza
Tagline: Private Consultations by Appointment Only
Social: LinkedIn | Instagram
Legal: Legal | Privacy | Terms
Copyright: © [current year] Oasis Europe
```

---

## 3. Management Page

**Route:** `/management`
**Section Order:** Navbar → Hero → Positioning → Model → Philosophy → Listings → Owner Experience → Testimonials → CTA → Footer

---

### 3.1 Management Hero

**Background:** `#EBE5DC` · **Min-height:** 70vh · **Layout:** Centered text, no image

```
Section (bg #EBE5DC, min-h 70vh, flex center, text-center)
├── Label (label-sm, 50% opacity)
├── H1 (heading-xl)
├── Subtitle (Source Sans Pro, 20-24px, font-light)
│   "A property is more than a listing." + line break + italic "It is a performing asset."
├── Body (body-lg, 70% opacity, max-w 672px)
└── Bottom-right absolute link: "List Your Property →"
```

**Content:**
```
Label: Management
H1: Rental Management
Subtitle: A property is more than a listing.
         It is a performing asset. (italic)
Body: Oasis Europe manages luxury villas and apartments through a performance-driven hospitality model combining dynamic pricing systems, global distribution, hotel-level guest experience, and full operational oversight.
Link: List Your Property →
```

---

### 3.2 Management Positioning

**Background:** `#F9F7F3` · **Layout:** Split — text left, image right (`management-villa.jpg`)

```
Grid (2 columns lg+, 1 col mobile)
├── Left — Content (section-padding, vertically centered)
│   ├── Stats (border-bottom each)
│   │   Value: Source Sans Pro 36-48px font-light
│   │   Label: 14px UPPERCASE tracking-wider
│   ├── Distribution note (14px, muted)
│   └── Operations note (14px, muted)
└── Right — Image (object-cover, full height, min-h 400px mobile)
```

**Content:**
```
Stats:
  45+ — Luxury Properties Managed
  8 — Years of Operations
  32% — Avg. Annual Revenue Growth

Global distribution across Airbnb Luxe, VRBO, Booking, direct network
Dedicated operations team in Marbella & Ibiza
```

---

### 3.3 Management Model

**Background:** `#EBE5DC` · **Layout:** 2-column split, min-height 80vh

```
Grid (2 columns)
├── Left — Image with dark overlay (40% black)
│   ├── Label: "The Oasis Model"
│   ├── H2: heading-lg
│   └── Body text
└── Right — Auto-rotating step carousel (4s per step)
    ├── Progress indicators (active: 40px wide, inactive: 20px, transition 500ms)
    └── Step content (numbered)
```

**Content:**
```
Label: The Oasis Model
H2: A Structured Management System
Body: Unlike traditional agencies, Oasis Europe operates through a structured asset management model designed to maximise long-term property performance.

01 — Property Evaluation
  • Revenue potential analysis
  • Market positioning
  • Operational feasibility

02 — Asset Optimisation
  • Interior improvement recommendations
  • Professional photography
  • Luxury brand positioning

03 — Revenue Performance
  • Dynamic pricing algorithms
  • Multi-platform distribution
  • Demand forecasting

04 — Full Hospitality Operations
  • Guest relations
  • Housekeeping coordination
  • Maintenance oversight
  • Monthly owner reporting

Tagline: You are not a listing agency. You are an asset manager. (italic)
```

---

### 3.4 Management Philosophy

**Background:** `#F9F7F3` · **Layout:** 4-column card grid

```
Group
├── Header: Label + H2 (centered)
└── Grid (1-col mobile, 2-col md, 4-col lg, gap 8-10)
    └── Card (text-center)
        ├── Icon (24px, #D3C09B, strokeWidth 1.5)
        ├── H3 (Source Sans Pro, 20px, weight 500)
        └── Body (14px, muted, font-light, relaxed)
```

**Content:**
```
Label: Performance Philosophy
H2: A Different Standard of Management
```

| Icon | Title | Description |
|------|-------|-------------|
| Lightbulb | Innovation | Advanced pricing technology and demand analysis maximise seasonal revenue. |
| BarChart3 | Structure | Clear reporting, defined operational processes, and transparent performance metrics. |
| Palette | Design Intelligence | Strategic design improvements that increase both rental value and property equity. |
| Lock | Discretion | Trusted by international owners seeking professional and confidential asset management. |

---

### 3.5 Management Listings

**Background:** `#F9F7F3` · **Layout:** 3-column property cards

```
Group
├── Header row: Label + H2 + "View All Properties →" (right-aligned desktop)
└── Grid (3 columns, gap 24px)
    └── Card
        ├── Image (aspect-ratio 3:2, hover scale 105% / 700ms)
        ├── Tag badge (absolute top-left, bg #F9F7F3/90 backdrop-blur, 10px UPPERCASE tracking 0.2em)
        ├── Title (Source Sans Pro, 20px, weight 500)
        ├── Location (14px, muted)
        ├── Specs row (12px, UPPERCASE, tracking-wider, separated by 1px dividers)
        └── Price (Source Sans Pro, 18px, weight 500)
```

**Content:**
```
Label: Featured Properties
H2: Our Latest & Most Exceptional
Link: View All Properties →
```

| Property | Tag | Location | Beds | Baths | Size | Price |
|----------|-----|----------|------|-------|------|-------|
| Villa Serena | New Listing | La Zagaleta, Marbella | 6 | 7 | 1,250 m² | €8,500 / night |
| Casa del Mar | Editor's Pick | Es Cubells, Ibiza | 5 | 5 | 980 m² | €6,200 / night |
| Villa Horizonte | Top Performer | Sierra Blanca, Marbella | 7 | 8 | 1,400 m² | €12,000 / night |

---

### 3.6 Management Owner Experience

**Background:** `#EBE5DC` · **Layout:** 3×2 grid of service cards

```
Group
├── Header: Label + H2
└── Grid (1-col mobile, 2-col md, 3-col lg, gap 8-10)
    └── Card
        ├── Icon (40px, strokeWidth 1.2, text-foreground)
        ├── H3 (Source Sans Pro, 20px, weight 500)
        └── Body (14px, muted, font-light)
```

**Content:**
```
Label: Owner Experience
H2: Effortless Ownership
```

| Icon | Title | Description |
|------|-------|-------------|
| Home | Property Marketing | We optimise the interior to create stunning pictures and showcase the holiday home on all major platforms. |
| Key | Booking Management | We are online at any time to respond, handle and take care of all services related to the booking of our guests. |
| Wrench | Property Management | Our team takes excellent care of all our homes. This guarantees a high quality experience to both guests and owners. |
| Clock | Great Response Rate | Our response rate ensures clients are kept satisfied and positive during their stay. |
| PieChart | Smart Teams | We have excellent connections with well-established local cleaning teams, laundry services and maintenance personnel. |
| FileText | We Are Compliant | Our company is committed to be compliant and operate within all current local rules and regulations. |

---

### 3.7 Management Testimonials

**Background image:** `cta-villa.jpg` with 60% foreground overlay · **Layout:** Centered, auto-rotating quotes (5s)

```
Cover (image: cta-villa.jpg, 60% overlay)
├── Label (label-sm, white/60%)
├── Quote (Source Sans Pro, 24-30px, font-light, italic, relaxed, white)
├── Attribution (14px, white/60%, UPPERCASE tracking-wider): "Author — Location"
└── Navigation dots (8px circles, active: white scale 125%, inactive: white/30%)
```

**Content:**
```
Label: What Owners Say
```

| Quote | Author | Location |
|-------|--------|----------|
| "Oasis Europe transformed our villa into a high-performing asset while maintaining the highest standards of hospitality." | Property Owner | Marbella |
| "The structured approach to revenue management delivered results far beyond what we experienced with traditional agencies." | International Investor | Costa del Sol |
| "Complete transparency, exceptional guest reviews, and consistent performance reporting. Exactly what we needed." | Villa Owner | Ibiza |
| "Their attention to design and positioning elevated our property to an entirely different market segment." | Portfolio Owner | Marbella |

---

### 3.8 Management CTA

**Background:** `#EBE5DC`

```
Group (py 24-32, centered, max-w 768px)
├── Body (body-lg, muted, mb 48px)
└── Buttons (flex-wrap, centered, gap 16px)
    ├── "List Your Property →" (primary dark + ArrowRight icon)
    └── "Download Owner Brochure" (outline)
```

**Content:**
```
Body: Join a network of international property owners who trust Oasis Europe to manage their assets.
Button 1: List Your Property →
Button 2: Download Owner Brochure
```

---

## 4. Developments Page

**Route:** `/developments`
**Section Order:** Navbar → Hero → Positioning → Model → Objectives → Showcase → CTA → Footer

---

### 4.1 Developments Hero

**Background:** `#272727` · **Min-height:** 80vh · **Text color:** `#F9F7F3`

```
Section (bg #272727, min-h 80vh, flex center, text-center)
├── Label (label-sm, 70% opacity)
├── H1 (heading-xl, #F9F7F3)
├── Subtitle (Source Sans Pro, 20-24px, font-light, 80% opacity)
│   Body text + line break + italic tagline
└── Bottom-right absolute link: "Start Your Project →" (50% opacity, hover full)
```

**Content:**
```
Label: Project Management
H1: Developments
Body: Oasis Europe Project Management oversees high-end renovations and repositioning projects to deliver a finished product that enhances value, performance and long-term positioning.
      We do not simply manage construction. We manage outcomes. (italic)
Link: Start Your Project →
```

---

### 4.2 Developments Positioning

**Background:** `#F9F7F3` · **Layout:** Split — text left, image right (`villa-marbesa-56.jpg`)

```
Grid (2 columns)
├── Left — Content
│   ├── Label (label-sm)
│   ├── H2 (heading-lg)
│   ├── Lead text (body-lg, foreground, font-normal)
│   ├── Body (14px, muted, font-light)
│   └── Tagline (italic, Source Sans Pro 18px)
└── Right — Image (object-cover, full height)
```

**Content:**
```
Label: Starting Point
H2: How Do We Start?
Lead: Every project begins with a clear objective.
Body: Is the project a personal lifestyle upgrade? Designed to increase rental performance? A strategic resale or long-term capital appreciation? The strategy determines the scope.
Tagline: Design decisions are guided by purpose — not preference alone. (italic)
```

---

### 4.3 Developments Model

**Background:** `rgb(249, 249, 249)` · **Layout:** 4-column steps

```
Group
├── Header (centered): Label + H2
├── Grid (1-col mobile, 2-col md, 4-col lg, gap 6-8)
│   └── Step
│       ├── Number (label-sm, dark text)
│       ├── H3 (Source Sans Pro, 18px, weight 500)
│       └── Body (14px, muted, font-light, relaxed)
└── Tagline (italic, centered, mt 48px)
```

**Content:**
```
Label: The Development Process
H2: From Vision to Completion
```

| # | Title | Description |
|---|-------|-------------|
| 01 | Project Evaluation | We assess the property's current condition, potential improvements and market positioning. Before any work begins, the objective is defined. |
| 02 | Concept & Planning | Once aligned, we develop a structured renovation plan. Every element is considered in relation to value, performance and the owner's expectation. |
| 03 | Budget & Cost Control | We prepare a detailed renovation framework. Execution without budget control erodes value. Structure protects margin. |
| 04 | Execution Oversight | Oasis Europe manages the project on-site. Our role is to ensure the finished result meets both design standards and financial expectations. |

```
Tagline: We do not simply manage construction. We manage outcomes. (italic)
```

---

### 4.4 Developments Objectives

**Background:** `rgb(247, 247, 247)` · **Layout:** Split — image left (`villa-marbesa-57.jpg`), accordion right · **Min-height:** 85vh

```
Grid (2 columns)
├── Left — Image (object-cover, full height)
└── Right — Content
    ├── Label + H2 + Subtext
    └── Accordion items (icon-circle pattern)
        └── Item (border-top + last:border-bottom, py 28px)
            ├── Icon circle (40px, rounded-full, bg foreground/5)
            └── Text: H3 + Body
```

**Content:**
```
Label: Project Objectives
H2: What Is Your Objective?
Subtext: The strategy determines the scope. Every project begins with a clear objective.
```

| Icon | Title | Description |
|------|-------|-------------|
| Home | Rental-Orientated Renovation | Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors. |
| TrendingUp | Resale-Orientated Transformation | When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit. |
| Gem | Value-Driven Transformation | Our renovation philosophy is grounded in market logic. We align transformation with the expectations of high-end buyers. The result is a property positioned at the top of its segment. |

---

### 4.5 Developments Showcase

**Background:** `rgb(250, 248, 245)` · **Layout:** Centered text, max-w 672px

```
Group (centered, max-w 672px, py 24-32)
├── Label (label-sm)
├── H2 (heading-lg)
├── Body 1 (body-lg, muted)
├── Body 2 (body-lg, muted)
└── Tagline (italic, Source Sans Pro 18px)
```

**Content:**
```
Label: Our Philosophy
H2: Design With Market Logic
Body 1: Every element is considered in relation to value, performance and the owner's expectation. Execution without budget control erodes value.
Body 2: Structure protects margin. We prepare a detailed renovation framework and manage the project on-site to ensure the finished result meets both design standards and financial expectations.
Tagline: We create a tailored plan for every individual project. (italic)
```

---

### 4.6 Developments CTA

**Background image:** `dev-cta-bg.jpg` with 60% foreground overlay · **Min-height:** 60vh · **Text:** `#F9F7F3`

```
Cover (image: dev-cta-bg.jpg, 60% overlay, min-h 60vh, flex center, text-center)
├── Label (label-sm, 50% opacity)
├── H2 (heading-lg, #F9F7F3)
├── Body (70% opacity)
└── Buttons (flex-wrap, centered, gap 16px)
    ├── "Start Your Project →" (bg #F9F7F3, text #2A2722)
    └── "Learn More" (outline, border rgba(249,247,243,0.3))
```

**Content:**
```
Label: Project Management
H2: Interested in Our Services?
Body: We create a tailored plan for every individual project.
Button 1: Start Your Project →
Button 2: Learn More
```

---

## 5. Capital Page

**Route:** `/capital`
**Section Order:** Navbar → Hero → Positioning → Model → Expectations → Location → CTA → Footer

---

### 5.1 Capital Hero

**Background:** `#3A4032` (dark olive green) · **Min-height:** 85vh · **Text:** warm cream `hsl(40, 30%, 95%)`

```
Section (bg #3A4032, min-h 85vh, flex center, text-center)
├── Label (label-sm, 60% opacity)
├── H1 (heading-xl, capital-foreground)
└── Body (80% opacity, max-w 672px)
```

**Content:**
```
Label: Investment Fund
H1: Private Capital
Body: The Oasis Europe Private Investment Fund provides structured access to high-end residential real estate projects in prime Mediterranean locations. The model is straightforward and each project follows a defined lifecycle with professional oversight from acquisition through exit.
```

---

### 5.2 Capital Positioning

**Background:** `#F9F7F3` · **Layout:** Split — image left (`architectural-detail.jpg`), text right

```
Grid (2 columns)
├── Left — Image (object-cover, full height)
└── Right — Content
    ├── Label + H2
    ├── Body 1
    ├── Body 2
    ├── Body 3
    └── Tagline (italic, Source Sans Pro 20px)
```

**Content:**
```
Label: The Concept
H2: The Model
Body 1: The model is straightforward. Invest in a curated project. Acquire a prime villa below optimised value. Transform it into a premium turnkey residence. Sell strategically at enhanced market positioning.
Body 2: Each project is structured as a Private Investment Fund — providing a transparent and professionally managed investment framework. From acquisition to return generation, we oversee the entire lifecycle of the investment.
Body 3: Beyond sourcing the property, we manage all operational and financial aspects to optimise performance, maintain quality standards, and ensure consistent income. With a hands-off approach and full transparency, Oasis Europe enables investors to participate in professionally managed real estate projects focused on solid returns.
Tagline: We are the smart choice. (italic)
```

---

### 5.3 Capital Model (Interactive Accordion)

**Background:** `rgb(58, 64, 50)` (dark olive green) · **Text:** white

```
Group (bg rgb(58,64,50), py 24-32)
├── Header (centered): Label (white/50%) + H2 (white)
└── Grid (2 columns on desktop)
    ├── Left — Interactive accordion (click to expand, image changes on desktop)
    │   └── Item (border-t white/10, py 20-32px)
    │       ├── Number (Source Sans Pro 14px, tracking-wider)
    │       │   Active: white/60, Inactive: white/25
    │       ├── Title — Active: text-xl-2xl white, Inactive: text-lg white/50
    │       ├── Description (visible when active)
    │       └── Highlights (italic, preceded by "— ", white/40)
    └── Right — Image (crossfade 700ms, 10% black overlay)
        Mobile: image shown inline below expanded content
```

**Content:**
```
Label: Investment Process
H2: How It Works
```

| # | Title | Description | Highlights | Image |
|---|-------|-------------|------------|-------|
| 01 | Capital Participation | Investors participate in a dedicated project vehicle. Capital is committed at the start of the project and deployed toward acquisition and transformation. The structure is aligned — all stakeholders benefit from successful exit performance. | No interim interest obligations · Returns realised at exit | capital-hero.jpg |
| 02 | Acquisition | Oasis Europe identifies and secures high-end villas in internationally recognised residential zones. Each property is carefully selected. Before acquisition, the asset undergoes valuation review, technical inspection and legal due diligence. | Only projects with clear upside proceed · Full legal & technical due diligence | capital-acquisition.jpg |
| 03 | Transformation | Following acquisition, the property is repositioned into a fully turnkey luxury residence. The objective is to deliver a completed, high-specification residence aligned with international luxury buyer expectations. | Direct execution by Oasis Europe · Cost control & timeline oversight | capital-transformation.jpg |
| 04 | Market Positioning & Sale | Once completed, the property is strategically introduced to the global buyer market. The aim is a structured exit within a defined timeframe, with aligned incentives and structured risk control measures. | Strategic global market introduction · Structured exit process | capital-location.jpg |

---

### 5.4 Capital Expectations

**Background:** `#EBE5DC` · **Layout:** 4-column card grid

```
Group
├── Header: Label + H2 (centered)
└── Grid (1-col mobile, 2-col md, 4-col lg)
    └── Card (text-center)
        ├── Icon container (48px circle, border #E7E1D8, rounded-full)
        │   └── Icon (24px, #D3C09B)
        ├── H3 (Source Sans Pro, 20px, weight 500)
        └── Body (14px, muted, font-light)
```

**Content:**
```
Label: Investor Experience
H2: What Investors Can Expect
```

| Icon | Title | Description |
|------|-------|-------------|
| Shield | Professional Oversight | Oasis Europe manages the entire lifecycle — acquisition, project execution, budget control, market positioning, and sales. Investors are not involved in daily operations. |
| FileText | Transparent Reporting | Investors receive regular progress updates, construction reporting, financial summaries, and clear timeline communication. Transparency is fundamental to the structure. |
| Clock | Defined Time Horizon | Projects are structured with a limited development and sales horizon. The strategy is controlled transformation, not long-term land holding. |
| TrendingUp | Aligned Incentives | Management compensation includes a performance component tied to successful project completion and sale, ensuring execution quality and exit value remain the priority. |

---

### 5.5 Capital Location

**Background image:** `capital-prime-location.png` with `#3A4032` at 70% overlay · **Text:** warm cream

```
Cover (image: capital-prime-location.png, overlay #3A4032/70, centered)
├── Label (50% opacity)
├── H2 (heading-lg)
├── Body 1 (80% opacity)
└── Body 2 (70% opacity)
```

**Content:**
```
Label: Prime Location
H2: Costa Del Sol
Body 1: Marbella has a rich history and a fantastic climate, making it one of the most sought-after real estate investment areas in Europe. Together with Estepona and Benahavis, the area is known as the Golden Triangle.
Body 2: The real estate market is highly active, with new urbanisations and high-end properties being developed by renowned architects, taking inspiration from areas such as Dubai and Beverly Hills — transforming the region into a modern paradise and providing an excellent opportunity for real estate investment.
```

---

### 5.6 Capital CTA

**Background:** `#F9F7F3`

```
Group (centered, max-w 768px, py 24-32)
├── Label (label-sm)
├── H2 (heading-lg)
├── Body (body-lg, muted)
└── Buttons (flex-wrap, centered, gap 16px)
    ├── "Contact Us →" (bg #3A4032, text warm-cream, hover lighter green) — mailto: stefano@oasiseurope.nl
    └── "Download Investor Brochure" (outline, border foreground/30)
```

**Content:**
```
Label: Private Capital
H2: Interested in Investing?
Body: Contact us for more information about our Private Investment Fund and current investment opportunities.
Button 1: Contact Us → (mailto: stefano@oasiseurope.nl)
Button 2: Download Investor Brochure
```

---

## 6. Advisory Page

**Route:** `/advisory`
**Section Order:** Navbar → Hero → Approach → Acquisition → Post-Purchase → Exit Strategy → CTA → Footer

---

### 6.1 Advisory Hero

**Background:** `#EDE6DD` (warm beige) · **Min-height:** 75vh · **Text:** dark warm brown `hsl(25, 15%, 20%)`

```
Section (bg #EDE6DD, min-h 75vh, flex center, text-center)
├── Label (label-sm, 50% opacity)
├── H1 (heading-xl)
└── Body (70% opacity, max-w 672px)
```

**Content:**
```
Label: Transaction
H1: Asset Advisory
Body: Oasis Europe provides Strategic Asset Advisory for private investors and property owners seeking structured oversight across the full lifecycle of a luxury asset. We ensure that each acquisition and exit is guided by structure, intelligence and long-term value creation.
```

---

### 6.2 Advisory Approach

**Background:** `rgb(250, 248, 245)` · **Layout:** Split — accordion left, image right (`advisory-approach.jpg`) · **Min-height:** 85vh

```
Grid (2 columns)
├── Left — Content
│   ├── Label + H2 + Subtext
│   └── Accordion items (icon-circle pattern, same as 1.4)
└── Right — Image (object-cover, full height)
```

**Content:**
```
Label: Our Approach
H2: Independent Advisory,
    Uncompromised Standards
Subtext: Our advisory is built on four pillars that ensure every decision is informed, protected, and optimised.
```

| Icon | Title | Description |
|------|-------|-------------|
| Search | Market Intelligence | Deep analysis of micro-markets, comparable transactions, and emerging opportunities across the Golden Triangle. |
| Shield | Due Diligence | Comprehensive legal, fiscal, and structural review of every asset before any commitment is made. |
| TrendingUp | Value Optimisation | Strategic positioning and timing to ensure maximum value capture on both acquisition and exit. |
| Handshake | Trusted Network | Access to off-market opportunities and a curated network of legal, fiscal, and design professionals. |

---

### 6.3 Advisory Acquisition

**Background:** `#F9F7F3` · **Layout:** Split — image left (`advisory-acquisition.jpg`), text right

```
Grid (2 columns)
├── Left — Image (object-cover, full height)
└── Right — Content
    ├── Label + H2 (second line italic)
    ├── Body
    ├── Tagline 1 (italic, Source Sans Pro 18px, 80% opacity)
    ├── Tagline 2 (italic, Source Sans Pro 18px, 80% opacity)
    └── Stats (border-top, 2-col grid)
        Value: Source Sans Pro 30px font-light
        Label: 12px UPPERCASE tracking-wider, muted
```

**Content:**
```
Label: Purchase Management
H2: Intelligent
    Acquisition (italic, font-light)
Body: Entering the Marbella market requires more than identifying a beautiful property. We guide clients through structured acquisition decisions grounded in data and market intelligence.
Tagline 1: We do not operate as traditional brokers. (italic)
Tagline 2: We act as independent long-term asset advisors. (italic)

Stats:
  €500M+ — Transaction Volume
  120+ — Acquisitions Advised
```

---

### 6.4 Advisory Post-Purchase

**Background:** `rgb(250, 248, 245)` · **Layout:** 3-column cards

```
Group (centered)
├── Header: Label + H2 (second line italic) + Subtext
└── Grid (1-col mobile, 3-col lg, gap 8-10)
    └── Card (text-center)
        ├── Icon (24px, #D3C09B, strokeWidth 1.5)
        ├── H3 (Source Sans Pro, 20px, weight 500)
        └── Body (14px, muted, font-light, relaxed)
```

**Content:**
```
Label: After Purchase
H2: Post-Acquisition
    Management (italic, font-light)
Subtext: Our advisory doesn't end at closing. We accompany owners through the critical post-purchase phase — ensuring the property is set up, protected, and performing from the start.
```

| Icon | Title | Description |
|------|-------|-------------|
| Settings | Property Setup & Onboarding | From furnishing coordination to utility setup, we ensure your property is fully operational and guest-ready from day one. |
| ShieldCheck | Ongoing Asset Protection | We oversee maintenance schedules, insurance reviews, and compliance requirements to safeguard your investment long-term. |
| BarChart3 | Performance Monitoring | Regular reporting on rental yield, occupancy rates, and market positioning keeps you informed and in control of your asset. |

---

### 6.5 Advisory Exit Strategy

**Background:** `#EBE5DC` · **Layout:** Split — text left, image right (`advisory-exit.jpg`)

```
Grid (2 columns)
├── Left — Content
│   ├── Label + H2 (second line italic)
│   ├── Body
│   ├── Bullet list (accent-colored dots, 6px)
│   └── Tagline (italic, Source Sans Pro 18px, 70% opacity)
└── Right — Image (object-cover, full height)
```

**Content:**
```
Label: Sales Management
H2: Exit
    Strategy (italic, font-light)
Body: Selling luxury property in Marbella requires more than listing exposure. It requires positioning. We oversee the transaction through to completion — and can advise on reinvestment.

Bullets:
  • Strategic market positioning and timing analysis
  • Targeted buyer network and off-market opportunities
  • Full transaction management from valuation to closing
  • Reinvestment advisory and portfolio restructuring

Tagline: Private Consultations by Appointment Only. (italic)
```

---

### 6.6 Advisory CTA

**Background:** `rgb(250, 248, 245)` · **Text:** advisory-foreground

```
Group (centered, max-w 768px, py 24-32)
├── Label (label-sm, 50% opacity)
├── H2 (heading-lg)
├── Body (60% opacity)
└── Button: "Contact Us →" (bg foreground, text background, uppercase tracking 0.15em)
    mailto: info@oasiseurope.nl
```

**Content:**
```
Label: Asset Advisory
H2: Interested in Our Services?
Body: We manage the purchase and sales process from start to finish. Contact us for a private consultation.
Button: Contact Us → (mailto: info@oasiseurope.nl)
```

---

## 7. Global CSS & JavaScript

### 7.1 Custom CSS

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

/* === Label Utility === */
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

/* === Grid Gap Lines === */
.grid-gap-lines {
  background-color: #E7E1D8;
  gap: 1px;
}
.grid-gap-lines > * {
  background-color: #F9F7F3;
}

/* === Scroll Animation === */
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

### 7.2 Scroll Animation JavaScript

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.aos-fade-up').forEach((el) => {
    observer.observe(el);
  });
});
```

### 7.3 Navbar Scroll Behavior JavaScript

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});
```

```css
.navbar {
  background: transparent;
  padding: 24px 0;
  transition: all 0.3s ease;
}
.navbar-scrolled {
  background: rgba(249, 247, 243, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #E7E1D8;
  padding: 16px 0;
}
```

### 7.4 Image Specifications

| Image | Recommended Size | Object Fit |
|-------|-----------------|------------|
| hero-villa.jpg | 1920×1080px | cover |
| architectural-detail.jpg | 800×1200px | cover |
| rental-villa.jpg | 1920×1080px | cover |
| management-villa.jpg | 800×1200px | cover |
| villa-marbesa-56.jpg | 800×1200px | cover |
| villa-marbesa-57.jpg | 800×1200px | cover |
| cta-villa.jpg | 1920×1080px | cover |
| dev-cta-bg.jpg | 1920×1080px | cover |
| advisory-approach.jpg | 800×1200px | cover |
| advisory-acquisition.jpg | 800×1200px | cover |
| advisory-exit.jpg | 800×1200px | cover |
| capital-prime-location.png | 1920×1080px | cover |
| capital-acquisition.jpg | 800×1200px | cover |
| capital-transformation.jpg | 800×1200px | cover |
| capital-location.jpg | 800×1200px | cover |
| capital-hero.jpg | 800×1200px | cover |
| listing-1/2/3.jpg | 800×533px (3:2) | cover |

### 7.5 Recommended WordPress Setup

**Theme:** Blank block theme (FSE) or stripped GeneratePress/Kadence.

**Plugins:**
1. Custom Fonts — Google Fonts loader
2. AOS or custom JS — Scroll animations
3. Safe SVG — If using SVG logos

### 7.6 Quick Color Reference

| Name | Hex |
|------|-----|
| Background / Sand | `#F9F7F3` |
| Foreground / Primary | `#2A2722` |
| Secondary | `#EBE5DC` |
| Muted Text | `#7A756A` |
| Accent / Gold | `#D3C09B` |
| Border | `#E7E1D8` |
| Warm Black | `#1C1A17` |
| Gold | `#CCAD70` |
| Capital BG | `#3A4032` |
| Developments BG | `#272727` |
| Advisory BG | `#EDE6DD` |
