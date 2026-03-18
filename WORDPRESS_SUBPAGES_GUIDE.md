# Oasis Europe — WordPress Subpages Implementation Guide

This guide covers the four service subpages: **Management**, **Developments**, **Capital**, and **Advisory**. It follows the same design system, typography, and color tokens documented in the main `WORDPRESS_IMPLEMENTATION_GUIDE.md`. Refer to that guide for global settings (fonts, colors, spacing, navbar, footer).

---

## Table of Contents

1. [Shared Patterns](#1-shared-patterns)
2. [Management Page](#2-management-page)
3. [Developments Page](#3-developments-page)
4. [Capital Page](#4-capital-page)
5. [Advisory Page](#5-advisory-page)
6. [Copy-Paste Content — All Subpages](#6-copy-paste-content--all-subpages)

---

## 1. Shared Patterns

All subpages share the same **Navbar** and **Footer** from the homepage. They also share these recurring section patterns:

### 1.1 Hero Section Pattern (Text-Only)

All subpages use a centered text hero (no background image) with:

```
Section (full-width, min-height: 70-85vh, flexbox center, text-align: center)
├── Label: label-sm (uppercase, tracking 0.2em, 50-70% opacity)
├── H1: heading-xl (Cormorant Garamond, weight 300)
├── Body: body-lg or Source Sans Pro 20-24px, font-light, 70-80% opacity
└── Optional: bottom-right arrow link (absolute positioned)
```

**Animation:** Fade-in + translate-up on page load (200ms delay, staggered 200ms between elements, 1000ms duration).

### 1.2 Split Layout Pattern (Image + Text)

Used extensively across all subpages:

```
Section (full-width)
├── Grid (2 columns on lg+, 1 column mobile, min-height: 70-85vh)
│   ├── Column A — Image (object-cover, full height, min-h: 400px mobile)
│   └── Column B — Content (section-padding, vertically centered)
│       ├── Label: label-sm
│       ├── H2: heading-lg
│       ├── Body text
│       └── Optional: stats, bullet points, italic tagline
```

**Animation:** IntersectionObserver at threshold 0.2-0.3. Content fades in + translates up. Image fades in + scales from 105% to 100%.

### 1.3 Card Grid Pattern

Used for features/pillars/steps:

```
Section (py-24 md:py-32)
├── Header (centered): label-sm + heading-lg
└── Grid (1 col mobile, 2 col md, 4 col lg, gap: 8-10)
    └── Card (text-center)
        ├── Icon (24px, accent color, strokeWidth 1.5)
        ├── H3 (Source Sans Pro, 20px, font-medium)
        └── P (14px, muted-foreground, font-light, leading-relaxed)
```

**Animation:** Staggered fade-in with 150ms delay between cards.

### 1.4 Accordion/List Pattern

Used for approach pillars and objectives:

```
Container (vertical stack, no gap)
└── Item (border-top + last:border-bottom, py-7)
    └── Flex (items-start, gap-5)
        ├── Icon circle (w-10 h-10, rounded-full, bg-foreground/5)
        │   └── Icon (18px, strokeWidth 1.3, text-foreground/70)
        └── Text
            ├── H3 (Source Sans Pro, 18px, font-medium)
            └── P (14px, muted-foreground, font-light)
```

### 1.5 CTA Section Pattern

```
Section (py-24 md:py-32, centered, max-w: 768px)
├── Label: label-sm
├── H2: heading-lg
├── Body: body-lg, 60-70% opacity
└── Buttons (flex-wrap, centered, gap-4)
    ├── Primary: bg-foreground text-background, uppercase, tracking 0.15em
    └── Secondary: border border-foreground/30, uppercase, tracking 0.15em
```

---

## 2. Management Page

**Route:** `/management`
**Section Order:** Hero → Positioning → Model → Philosophy → Listings → Owner Experience → Testimonials → CTA

### 2.1 Management Hero

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Min-height:** 70vh
- **Layout:** Centered text, no image

**Content:**
| Element | Value |
|---------|-------|
| Label | `Management` |
| H1 | `Rental Management` |
| Subtitle (Source Sans Pro, 20-24px, font-light) | `A property is more than a listing.` *(line break)* `It is a performing asset.` *(italic)* |
| Body | `Oasis Europe manages luxury villas and apartments through a performance-driven hospitality model combining dynamic pricing systems, global distribution, hotel-level guest experience, and full operational oversight.` |
| Bottom-right link | `List Your Property →` |

### 2.2 Management Positioning (Split: Text Left / Image Right)

- **Background:** `bg-background` (`#F9F7F3`)
- **Image:** `management-villa.jpg` (right column)
- **Stats:**

| Value | Label |
|-------|-------|
| `45+` | Luxury Properties Managed |
| `8` | Years of Operations |
| `32%` | Avg. Annual Revenue Growth |

**Below stats:**
- `Global distribution across Airbnb Luxe, VRBO, Booking, direct network`
- `Dedicated operations team in Marbella & Ibiza`

**Stats styling:** Each stat has a `border-bottom`, value in Source Sans Pro 36-48px font-light, label in 14px uppercase tracking-wider.

### 2.3 Management Model (Split: Image Left / Steps Right)

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Layout:** 2-column split, min-height 80vh
- **Left column:** Image with dark overlay (40% black), text overlaid at bottom:
  - Label: `The Oasis Model`
  - H2: `A Structured Management System`
  - Body: `Unlike traditional agencies, Oasis Europe operates through a structured asset management model designed to maximise long-term property performance.`
- **Right column:** Auto-rotating step carousel (4 seconds per step)

**Steps (with progress bar indicators at top):**

| # | Title | Items |
|---|-------|-------|
| 01 | Property Evaluation | Revenue potential analysis · Market positioning · Operational feasibility |
| 02 | Asset Optimisation | Interior improvement recommendations · Professional photography · Luxury brand positioning |
| 03 | Revenue Performance | Dynamic pricing algorithms · Multi-platform distribution · Demand forecasting |
| 04 | Full Hospitality Operations | Guest relations · Housekeeping coordination · Maintenance oversight · Monthly owner reporting |

**Closing tagline (italic):** `You are not a listing agency. You are an asset manager.`

**Step indicators:** Horizontal bars — active = 40px wide, foreground color; inactive = 20px wide, border color. Transition 500ms.

### 2.4 Management Philosophy (4-Column Grid)

- **Background:** `bg-background` (`#F9F7F3`)
- **Header:** Label `Performance Philosophy` · H2 `A Different Standard of Management`

| Icon | Title | Description |
|------|-------|-------------|
| Lightbulb | Innovation | Advanced pricing technology and demand analysis maximise seasonal revenue. |
| BarChart3 | Structure | Clear reporting, defined operational processes, and transparent performance metrics. |
| Palette | Design Intelligence | Strategic design improvements that increase both rental value and property equity. |
| Lock | Discretion | Trusted by international owners seeking professional and confidential asset management. |

### 2.5 Management Listings (3-Column Property Cards)

- **Background:** `bg-background` (`#F9F7F3`)
- **Header row:** Label `Featured Properties` · H2 `Our Latest & Most Exceptional` · Link `View All Properties →` (right-aligned on desktop)

**Property Cards:**

| Property | Tag | Location | Beds | Baths | Size | Price |
|----------|-----|----------|------|-------|------|-------|
| Villa Serena | New Listing | La Zagaleta, Marbella | 6 | 7 | 1,250 m² | €8,500 / night |
| Casa del Mar | Editor's Pick | Es Cubells, Ibiza | 5 | 5 | 980 m² | €6,200 / night |
| Villa Horizonte | Top Performer | Sierra Blanca, Marbella | 7 | 8 | 1,400 m² | €12,000 / night |

**Card structure:**
- Image: aspect-ratio 3:2, hover scale 105% (700ms)
- Tag badge: absolute top-left, bg-background/90 backdrop-blur, 10px uppercase tracking 0.2em
- Title: Source Sans Pro 20px font-medium
- Location: 14px muted-foreground
- Specs: 12px uppercase tracking-wider, separated by 1px vertical dividers
- Price: Source Sans Pro 18px font-medium

### 2.6 Management Owner Experience (6 Service Cards, 3×2 Grid)

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Header:** Label `Owner Experience` · H2 `Effortless Ownership`

| Icon | Title | Description |
|------|-------|-------------|
| Home | Property Marketing | We optimise the interior to create stunning pictures and showcase the holiday home on all major platforms. |
| Key | Booking Management | We are online at any time to respond, handle and take care of all services related to the booking of our guests. |
| Wrench | Property Management | Our team takes excellent care of all our homes. This guarantees a high quality experience to both guests and owners. |
| Clock | Great Response Rate | Our response rate ensures clients are kept satisfied and positive during their stay. |
| PieChart | Smart Teams | We have excellent connections with well-established local cleaning teams, laundry services and maintenance personnel. |
| FileText | We Are Compliant | Our company is committed to be compliant and operate within all current local rules and regulations. |

**Icon styling:** 40px, strokeWidth 1.2, text-foreground. Different from the 24px accent-colored icons in Philosophy section.

### 2.7 Management Testimonials (Full-Width Image + Rotating Quotes)

- **Background image:** `cta-villa.jpg` with 60% foreground overlay
- **Layout:** Centered text on image
- **Label:** `What Owners Say`
- **Auto-rotating quotes (5 seconds):**

| Quote | Author | Location |
|-------|--------|----------|
| "Oasis Europe transformed our villa into a high-performing asset while maintaining the highest standards of hospitality." | Property Owner | Marbella |
| "The structured approach to revenue management delivered results far beyond what we experienced with traditional agencies." | International Investor | Costa del Sol |
| "Complete transparency, exceptional guest reviews, and consistent performance reporting. Exactly what we needed." | Villa Owner | Ibiza |
| "Their attention to design and positioning elevated our property to an entirely different market segment." | Portfolio Owner | Marbella |

**Quote styling:** Source Sans Pro, 24-30px, font-light, italic, leading-relaxed, white text.
**Attribution:** 14px, white/60% opacity, uppercase tracking-wider. Format: `Author — Location`
**Navigation dots:** 8px circles, active = white scale 125%, inactive = white/30%.

### 2.8 Management CTA

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Body:** `Join a network of international property owners who trust Oasis Europe to manage their assets.`
- **Button 1:** `List Your Property →` (primary dark button)
- **Button 2:** `Download Owner Brochure` (outline button)

---

## 3. Developments Page

**Route:** `/developments`
**Section Order:** Hero → Positioning → Model → Objectives → Showcase → CTA

### 3.1 Developments Hero

- **Background:** `bg-developments` (dark, `hsl(0, 0%, 15.3%)` / `#272727`)
- **Min-height:** 80vh
- **Text color:** `primary-foreground` (light `#F9F7F3`)

**Content:**
| Element | Value |
|---------|-------|
| Label (70% opacity) | `Project Management` |
| H1 | `Developments` |
| Subtitle (Source Sans Pro, 20-24px, font-light, 80% opacity) | `Oasis Europe Project Management oversees high-end renovations and repositioning projects to deliver a finished product that enhances value, performance and long-term positioning.` *(line break)* `We do not simply manage construction. We manage outcomes.` *(italic)* |
| Bottom-right link (50% opacity, hover full) | `Start Your Project →` |

### 3.2 Developments Positioning (Split: Text Left / Image Right)

- **Background:** `bg-background` (`#F9F7F3`)
- **Image:** `villa-marbesa-56.jpg` (right column)

**Content:**
| Element | Value |
|---------|-------|
| Label | `Starting Point` |
| H2 | `How Do We Start?` |
| Lead text (body-lg, foreground, font-normal) | `Every project begins with a clear objective.` |
| Body (14px, muted, font-light) | `Is the project a personal lifestyle upgrade? Designed to increase rental performance? A strategic resale or long-term capital appreciation? The strategy determines the scope.` |
| Tagline (italic, Source Sans Pro 18px) | `Design decisions are guided by purpose — not preference alone.` |

### 3.3 Developments Model (4-Column Steps)

- **Background:** `rgb(249, 249, 249)` (near-white, inline style)

**Header:** Label `The Development Process` · H2 `From Vision to Completion`

| # | Title | Description |
|---|-------|-------------|
| 01 | Project Evaluation | We assess the property's current condition, potential improvements and market positioning. Before any work begins, the objective is defined. |
| 02 | Concept & Planning | Once aligned, we develop a structured renovation plan. Every element is considered in relation to value, performance and the owner's expectation. |
| 03 | Budget & Cost Control | We prepare a detailed renovation framework. Execution without budget control erodes value. Structure protects margin. |
| 04 | Execution Oversight | Oasis Europe manages the project on-site. Our role is to ensure the finished result meets both design standards and financial expectations. |

**Step number styling:** `label-sm text-accent-foreground` (dark text, not gold accent).

**Closing tagline (italic, centered):** `We do not simply manage construction. We manage outcomes.`

### 3.4 Developments Objectives (Split: Image Left / Accordion Right)

- **Background:** `rgb(247, 247, 247)` (inline style)
- **Image:** `villa-marbesa-57.jpg` (left column)
- **Min-height:** 85vh

**Header:** Label `Project Objectives` · H2 `What Is Your Objective?` · Subtext `The strategy determines the scope. Every project begins with a clear objective.`

**Accordion items (icon-circle + text pattern):**

| Icon | Title | Description |
|------|-------|-------------|
| Home | Rental-Orientated Renovation | Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors. |
| TrendingUp | Resale-Orientated Transformation | When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit. |
| Gem | Value-Driven Transformation | Our renovation philosophy is grounded in market logic. We align transformation with the expectations of high-end buyers. The result is a property positioned at the top of its segment. |

### 3.5 Developments Showcase (Centered Text)

- **Background:** `rgb(250, 248, 245)` (inline style)
- **Layout:** Centered text block, max-width 672px

**Content:**
| Element | Value |
|---------|-------|
| Label | `Our Philosophy` |
| H2 | `Design With Market Logic` |
| Body 1 | `Every element is considered in relation to value, performance and the owner's expectation. Execution without budget control erodes value.` |
| Body 2 | `Structure protects margin. We prepare a detailed renovation framework and manage the project on-site to ensure the finished result meets both design standards and financial expectations.` |
| Tagline (italic, Source Sans Pro 18px) | `We create a tailored plan for every individual project.` |

### 3.6 Developments CTA (Full-Width Image)

- **Background image:** `dev-cta-bg.jpg` with 60% foreground overlay
- **Min-height:** 60vh
- **Text color:** `primary-foreground` (light)

**Content:**
| Element | Value |
|---------|-------|
| Label (50% opacity) | `Project Management` |
| H2 | `Interested in Our Services?` |
| Body (70% opacity) | `We create a tailored plan for every individual project.` |
| Button 1 | `Start Your Project →` (bg-primary-foreground text-foreground) |
| Button 2 | `Learn More` (outline, border-primary-foreground/30) |

---

## 4. Capital Page

**Route:** `/capital`
**Section Order:** Hero → Positioning → Model → Expectations → Location → CTA

### 4.1 Capital Hero

- **Background:** `bg-capital` (dark green, `hsl(97, 12%, 22%)` / approximately `#3A4032`)
- **Text color:** `capital-foreground` (`hsl(40, 30%, 95%)` / warm cream)
- **Min-height:** 85vh

**Content:**
| Element | Value |
|---------|-------|
| Label (60% opacity) | `Investment Fund` |
| H1 | `Private Capital` |
| Body (80% opacity) | `The Oasis Europe Private Investment Fund provides structured access to high-end residential real estate projects in prime Mediterranean locations. The model is straightforward and each project follows a defined lifecycle with professional oversight from acquisition through exit.` |

### 4.2 Capital Positioning (Split: Image Left / Text Right)

- **Background:** `bg-background` (`#F9F7F3`)
- **Image:** `architectural-detail.jpg` (left column)

**Content:**
| Element | Value |
|---------|-------|
| Label | `The Concept` |
| H2 | `The Model` |
| Body 1 | `The model is straightforward. Invest in a curated project. Acquire a prime villa below optimised value. Transform it into a premium turnkey residence. Sell strategically at enhanced market positioning.` |
| Body 2 | `Each project is structured as a Private Investment Fund — providing a transparent and professionally managed investment framework. From acquisition to return generation, we oversee the entire lifecycle of the investment.` |
| Body 3 | `Beyond sourcing the property, we manage all operational and financial aspects to optimise performance, maintain quality standards, and ensure consistent income. With a hands-off approach and full transparency, Oasis Europe enables investors to participate in professionally managed real estate projects focused on solid returns.` |
| Tagline (italic, Source Sans Pro 20px) | `We are the smart choice.` |

### 4.3 Capital Model (Dark Section — Interactive Accordion + Image)

- **Background:** `rgb(58, 64, 50)` (dark olive green, inline style)
- **Text color:** White
- **Layout:** Centered header + 2-column (accordion left, image right)

**Header:** Label `Investment Process` (white/50%) · H2 `How It Works` (white)

**Interactive accordion steps (click to expand, image changes on desktop):**

| # | Title | Description | Highlights | Image |
|---|-------|-------------|------------|-------|
| 01 | Capital Participation | Investors participate in a dedicated project vehicle. Capital is committed at the start of the project and deployed toward acquisition and transformation. The structure is aligned — all stakeholders benefit from successful exit performance. | No interim interest obligations · Returns realised at exit | capital-hero.jpg |
| 02 | Acquisition | Oasis Europe identifies and secures high-end villas in internationally recognised residential zones. Each property is carefully selected. Before acquisition, the asset undergoes valuation review, technical inspection and legal due diligence. | Only projects with clear upside proceed · Full legal & technical due diligence | capital-acquisition.jpg |
| 03 | Transformation | Following acquisition, the property is repositioned into a fully turnkey luxury residence. The objective is to deliver a completed, high-specification residence aligned with international luxury buyer expectations. | Direct execution by Oasis Europe · Cost control & timeline oversight | capital-transformation.jpg |
| 04 | Market Positioning & Sale | Once completed, the property is strategically introduced to the global buyer market. The aim is a structured exit within a defined timeframe, with aligned incentives and structured risk control measures. | Strategic global market introduction · Structured exit process | capital-location.jpg |

**Accordion styling:**
- Inactive: `border-t border-white/10`, py-5, title text-lg text-white/50
- Active: py-8, bg-white/5, title text-xl-2xl text-white, description visible
- Step number: Source Sans Pro 14px tracking-wider, active white/60, inactive white/25
- Highlights: italic, preceded by `— `, text-white/40
- Mobile: Image shown inline below expanded content
- Desktop: Right column shows active step's image with crossfade (700ms), 10% black overlay

### 4.4 Capital Expectations (4-Column Grid)

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Header:** Label `Investor Experience` · H2 `What Investors Can Expect`

| Icon | Title | Description |
|------|-------|-------------|
| Shield | Professional Oversight | Oasis Europe manages the entire lifecycle — acquisition, project execution, budget control, market positioning, and sales. Investors are not involved in daily operations. |
| FileText | Transparent Reporting | Investors receive regular progress updates, construction reporting, financial summaries, and clear timeline communication. Transparency is fundamental to the structure. |
| Clock | Defined Time Horizon | Projects are structured with a limited development and sales horizon. The strategy is controlled transformation, not long-term land holding. |
| TrendingUp | Aligned Incentives | Management compensation includes a performance component tied to successful project completion and sale, ensuring execution quality and exit value remain the priority. |

**Icon container:** 48px circle with `border border-border rounded-full` (unlike other pages which use bg-foreground/5).

### 4.5 Capital Location (Full-Width Image + Centered Text)

- **Background image:** `capital-prime-location.png` with `bg-capital/70` overlay
- **Text color:** `capital-foreground` (warm cream)

**Content:**
| Element | Value |
|---------|-------|
| Label (50% opacity) | `Prime Location` |
| H2 | `Costa Del Sol` |
| Body 1 (80% opacity) | `Marbella has a rich history and a fantastic climate, making it one of the most sought-after real estate investment areas in Europe. Together with Estepona and Benahavis, the area is known as the Golden Triangle.` |
| Body 2 (70% opacity) | `The real estate market is highly active, with new urbanisations and high-end properties being developed by renowned architects, taking inspiration from areas such as Dubai and Beverly Hills — transforming the region into a modern paradise and providing an excellent opportunity for real estate investment.` |

### 4.6 Capital CTA

- **Background:** `bg-background` (`#F9F7F3`)

**Content:**
| Element | Value |
|---------|-------|
| Label | `Private Capital` |
| H2 | `Interested in Investing?` |
| Body | `Contact us for more information about our Private Investment Fund and current investment opportunities.` |
| Button 1 | `Contact Us →` (bg-capital text-capital-foreground, hover bg-capital-light) — mailto: `stefano@oasiseurope.nl` |
| Button 2 | `Download Investor Brochure` (outline, border-foreground/30) |

---

## 5. Advisory Page

**Route:** `/advisory`
**Section Order:** Hero → Approach → Acquisition → Post-Purchase → Exit Strategy → CTA

### 5.1 Advisory Hero

- **Background:** `bg-advisory` (`hsl(30, 30%, 92%)` / warm beige, approximately `#EDE6DD`)
- **Text color:** `advisory-foreground` (`hsl(25, 15%, 20%)` / dark warm brown)
- **Min-height:** 75vh

**Content:**
| Element | Value |
|---------|-------|
| Label (50% opacity) | `Transaction` |
| H1 | `Asset Advisory` |
| Body (70% opacity) | `Oasis Europe provides Strategic Asset Advisory for private investors and property owners seeking structured oversight across the full lifecycle of a luxury asset. We ensure that each acquisition and exit is guided by structure, intelligence and long-term value creation.` |

### 5.2 Advisory Approach (Split: Accordion Left / Image Right)

- **Background:** `rgb(250, 248, 245)` (inline style)
- **Image:** `advisory-approach.jpg` (right column)
- **Min-height:** 85vh

**Header:** Label `Our Approach` · H2 `Independent Advisory, Uncompromised Standards` *(line break after comma)* · Subtext `Our advisory is built on four pillars that ensure every decision is informed, protected, and optimised.`

**Accordion items (icon-circle + text pattern):**

| Icon | Title | Description |
|------|-------|-------------|
| Search | Market Intelligence | Deep analysis of micro-markets, comparable transactions, and emerging opportunities across the Golden Triangle. |
| Shield | Due Diligence | Comprehensive legal, fiscal, and structural review of every asset before any commitment is made. |
| TrendingUp | Value Optimisation | Strategic positioning and timing to ensure maximum value capture on both acquisition and exit. |
| Handshake | Trusted Network | Access to off-market opportunities and a curated network of legal, fiscal, and design professionals. |

### 5.3 Advisory Acquisition (Split: Image Left / Text Right)

- **Background:** `bg-background` (`#F9F7F3`)
- **Image:** `advisory-acquisition.jpg` (left column)

**Content:**
| Element | Value |
|---------|-------|
| Label | `Purchase Management` |
| H2 | `Intelligent` *(line break)* `Acquisition` *(italic, font-light)* |
| Body | `Entering the Marbella market requires more than identifying a beautiful property. We guide clients through structured acquisition decisions grounded in data and market intelligence.` |
| Tagline 1 (Source Sans Pro 18px, italic, foreground/80) | `We do not operate as traditional brokers.` |
| Tagline 2 (Source Sans Pro 18px, italic, foreground/80) | `We act as independent long-term asset advisors.` |

**Stats (below content, separated by border-top, 2-column grid):**

| Value | Label |
|-------|-------|
| `€500M+` | Transaction Volume |
| `120+` | Acquisitions Advised |

**Stat value styling:** Source Sans Pro 30px font-light. Label: 12px uppercase tracking-wider, muted-foreground.

### 5.4 Advisory Post-Purchase (3-Column Cards)

- **Background:** `rgb(250, 248, 245)` (inline style)

**Header (centered):** Label `After Purchase` · H2 `Post-Acquisition` *(line break)* `Management` *(italic, font-light)* · Subtext `Our advisory doesn't end at closing. We accompany owners through the critical post-purchase phase — ensuring the property is set up, protected, and performing from the start.`

| Icon | Title | Description |
|------|-------|-------------|
| Settings | Property Setup & Onboarding | From furnishing coordination to utility setup, we ensure your property is fully operational and guest-ready from day one. |
| ShieldCheck | Ongoing Asset Protection | We oversee maintenance schedules, insurance reviews, and compliance requirements to safeguard your investment long-term. |
| BarChart3 | Performance Monitoring | Regular reporting on rental yield, occupancy rates, and market positioning keeps you informed and in control of your asset. |

**Icon styling:** 24px, accent color (`#D3C09B`), strokeWidth 1.5.

### 5.5 Advisory Exit Strategy (Split: Text Left / Image Right)

- **Background:** `bg-secondary` (`#EBE5DC`)
- **Image:** `advisory-exit.jpg` (right column)

**Content:**
| Element | Value |
|---------|-------|
| Label | `Sales Management` |
| H2 | `Exit` *(line break)* `Strategy` *(italic, font-light)* |
| Body | `Selling luxury property in Marbella requires more than listing exposure. It requires positioning. We oversee the transaction through to completion — and can advise on reinvestment.` |

**Bullet points (accent-colored dots, 6px diameter):**
- Strategic market positioning and timing analysis
- Targeted buyer network and off-market opportunities
- Full transaction management from valuation to closing
- Reinvestment advisory and portfolio restructuring

**Closing tagline (italic, Source Sans Pro 18px, foreground/70):** `Private Consultations by Appointment Only.`

### 5.6 Advisory CTA

- **Background:** `rgb(250, 248, 245)` (inline style)
- **Text color:** `advisory-foreground`

**Content:**
| Element | Value |
|---------|-------|
| Label (50% opacity) | `Asset Advisory` |
| H2 | `Interested in Our Services?` |
| Body (60% opacity) | `We manage the purchase and sales process from start to finish. Contact us for a private consultation.` |
| Button | `Contact Us →` (bg-foreground text-background, uppercase tracking 0.15em) — mailto: `info@oasiseurope.nl` |

---

## 6. Copy-Paste Content — All Subpages

### 6.1 Management Page Content

**Hero:**
```
Label: Management
H1: Rental Management
Subtitle: A property is more than a listing.
         It is a performing asset.
Body: Oasis Europe manages luxury villas and apartments through a performance-driven hospitality model combining dynamic pricing systems, global distribution, hotel-level guest experience, and full operational oversight.
Link: List Your Property →
```

**Positioning Stats:**
```
45+ — Luxury Properties Managed
8 — Years of Operations
32% — Avg. Annual Revenue Growth

Global distribution across Airbnb Luxe, VRBO, Booking, direct network
Dedicated operations team in Marbella & Ibiza
```

**Model Section:**
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

Tagline: You are not a listing agency. You are an asset manager.
```

**Philosophy:**
```
Label: Performance Philosophy
H2: A Different Standard of Management

Innovation — Advanced pricing technology and demand analysis maximise seasonal revenue.
Structure — Clear reporting, defined operational processes, and transparent performance metrics.
Design Intelligence — Strategic design improvements that increase both rental value and property equity.
Discretion — Trusted by international owners seeking professional and confidential asset management.
```

**Listings:**
```
Label: Featured Properties
H2: Our Latest & Most Exceptional
Link: View All Properties →

Villa Serena | New Listing | La Zagaleta, Marbella | 6 Beds | 7 Baths | 1,250 m² | €8,500 / night
Casa del Mar | Editor's Pick | Es Cubells, Ibiza | 5 Beds | 5 Baths | 980 m² | €6,200 / night
Villa Horizonte | Top Performer | Sierra Blanca, Marbella | 7 Beds | 8 Baths | 1,400 m² | €12,000 / night
```

**Owner Experience:**
```
Label: Owner Experience
H2: Effortless Ownership

Property Marketing — We optimise the interior to create stunning pictures and showcase the holiday home on all major platforms.
Booking Management — We are online at any time to respond, handle and take care of all services related to the booking of our guests.
Property Management — Our team takes excellent care of all our homes. This guarantees a high quality experience to both guests and owners.
Great Response Rate — Our response rate ensures clients are kept satisfied and positive during their stay.
Smart Teams — We have excellent connections with well-established local cleaning teams, laundry services and maintenance personnel.
We Are Compliant — Our company is committed to be compliant and operate within all current local rules and regulations.
```

**Testimonials:**
```
Label: What Owners Say

"Oasis Europe transformed our villa into a high-performing asset while maintaining the highest standards of hospitality."
— Property Owner, Marbella

"The structured approach to revenue management delivered results far beyond what we experienced with traditional agencies."
— International Investor, Costa del Sol

"Complete transparency, exceptional guest reviews, and consistent performance reporting. Exactly what we needed."
— Villa Owner, Ibiza

"Their attention to design and positioning elevated our property to an entirely different market segment."
— Portfolio Owner, Marbella
```

**CTA:**
```
Body: Join a network of international property owners who trust Oasis Europe to manage their assets.
Button 1: List Your Property →
Button 2: Download Owner Brochure
```

---

### 6.2 Developments Page Content

**Hero:**
```
Label: Project Management
H1: Developments
Body: Oasis Europe Project Management oversees high-end renovations and repositioning projects to deliver a finished product that enhances value, performance and long-term positioning.
      We do not simply manage construction. We manage outcomes.
Link: Start Your Project →
```

**Positioning:**
```
Label: Starting Point
H2: How Do We Start?
Lead: Every project begins with a clear objective.
Body: Is the project a personal lifestyle upgrade? Designed to increase rental performance? A strategic resale or long-term capital appreciation? The strategy determines the scope.
Tagline: Design decisions are guided by purpose — not preference alone.
```

**Model:**
```
Label: The Development Process
H2: From Vision to Completion

01 — Project Evaluation
We assess the property's current condition, potential improvements and market positioning. Before any work begins, the objective is defined.

02 — Concept & Planning
Once aligned, we develop a structured renovation plan. Every element is considered in relation to value, performance and the owner's expectation.

03 — Budget & Cost Control
We prepare a detailed renovation framework. Execution without budget control erodes value. Structure protects margin.

04 — Execution Oversight
Oasis Europe manages the project on-site. Our role is to ensure the finished result meets both design standards and financial expectations.

Tagline: We do not simply manage construction. We manage outcomes.
```

**Objectives:**
```
Label: Project Objectives
H2: What Is Your Objective?
Subtext: The strategy determines the scope. Every project begins with a clear objective.

Rental-Orientated Renovation — Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors.

Resale-Orientated Transformation — When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit.

Value-Driven Transformation — Our renovation philosophy is grounded in market logic. We align transformation with the expectations of high-end buyers. The result is a property positioned at the top of its segment.
```

**Showcase:**
```
Label: Our Philosophy
H2: Design With Market Logic
Body 1: Every element is considered in relation to value, performance and the owner's expectation. Execution without budget control erodes value.
Body 2: Structure protects margin. We prepare a detailed renovation framework and manage the project on-site to ensure the finished result meets both design standards and financial expectations.
Tagline: We create a tailored plan for every individual project.
```

**CTA:**
```
Label: Project Management
H2: Interested in Our Services?
Body: We create a tailored plan for every individual project.
Button 1: Start Your Project →
Button 2: Learn More
```

---

### 6.3 Capital Page Content

**Hero:**
```
Label: Investment Fund
H1: Private Capital
Body: The Oasis Europe Private Investment Fund provides structured access to high-end residential real estate projects in prime Mediterranean locations. The model is straightforward and each project follows a defined lifecycle with professional oversight from acquisition through exit.
```

**Positioning:**
```
Label: The Concept
H2: The Model
Body 1: The model is straightforward. Invest in a curated project. Acquire a prime villa below optimised value. Transform it into a premium turnkey residence. Sell strategically at enhanced market positioning.
Body 2: Each project is structured as a Private Investment Fund — providing a transparent and professionally managed investment framework. From acquisition to return generation, we oversee the entire lifecycle of the investment.
Body 3: Beyond sourcing the property, we manage all operational and financial aspects to optimise performance, maintain quality standards, and ensure consistent income. With a hands-off approach and full transparency, Oasis Europe enables investors to participate in professionally managed real estate projects focused on solid returns.
Tagline: We are the smart choice.
```

**Model:**
```
Label: Investment Process
H2: How It Works

01 — Capital Participation
Investors participate in a dedicated project vehicle. Capital is committed at the start of the project and deployed toward acquisition and transformation. The structure is aligned — all stakeholders benefit from successful exit performance.
— No interim interest obligations
— Returns realised at exit

02 — Acquisition
Oasis Europe identifies and secures high-end villas in internationally recognised residential zones. Each property is carefully selected. Before acquisition, the asset undergoes valuation review, technical inspection and legal due diligence.
— Only projects with clear upside proceed
— Full legal & technical due diligence

03 — Transformation
Following acquisition, the property is repositioned into a fully turnkey luxury residence. The objective is to deliver a completed, high-specification residence aligned with international luxury buyer expectations.
— Direct execution by Oasis Europe
— Cost control & timeline oversight

04 — Market Positioning & Sale
Once completed, the property is strategically introduced to the global buyer market. The aim is a structured exit within a defined timeframe, with aligned incentives and structured risk control measures.
— Strategic global market introduction
— Structured exit process
```

**Expectations:**
```
Label: Investor Experience
H2: What Investors Can Expect

Professional Oversight — Oasis Europe manages the entire lifecycle — acquisition, project execution, budget control, market positioning, and sales. Investors are not involved in daily operations.

Transparent Reporting — Investors receive regular progress updates, construction reporting, financial summaries, and clear timeline communication. Transparency is fundamental to the structure.

Defined Time Horizon — Projects are structured with a limited development and sales horizon. The strategy is controlled transformation, not long-term land holding.

Aligned Incentives — Management compensation includes a performance component tied to successful project completion and sale, ensuring execution quality and exit value remain the priority.
```

**Location:**
```
Label: Prime Location
H2: Costa Del Sol
Body 1: Marbella has a rich history and a fantastic climate, making it one of the most sought-after real estate investment areas in Europe. Together with Estepona and Benahavis, the area is known as the Golden Triangle.
Body 2: The real estate market is highly active, with new urbanisations and high-end properties being developed by renowned architects, taking inspiration from areas such as Dubai and Beverly Hills — transforming the region into a modern paradise and providing an excellent opportunity for real estate investment.
```

**CTA:**
```
Label: Private Capital
H2: Interested in Investing?
Body: Contact us for more information about our Private Investment Fund and current investment opportunities.
Button 1: Contact Us → (mailto: stefano@oasiseurope.nl)
Button 2: Download Investor Brochure
```

---

### 6.4 Advisory Page Content

**Hero:**
```
Label: Transaction
H1: Asset Advisory
Body: Oasis Europe provides Strategic Asset Advisory for private investors and property owners seeking structured oversight across the full lifecycle of a luxury asset. We ensure that each acquisition and exit is guided by structure, intelligence and long-term value creation.
```

**Approach:**
```
Label: Our Approach
H2: Independent Advisory,
    Uncompromised Standards
Subtext: Our advisory is built on four pillars that ensure every decision is informed, protected, and optimised.

Market Intelligence — Deep analysis of micro-markets, comparable transactions, and emerging opportunities across the Golden Triangle.
Due Diligence — Comprehensive legal, fiscal, and structural review of every asset before any commitment is made.
Value Optimisation — Strategic positioning and timing to ensure maximum value capture on both acquisition and exit.
Trusted Network — Access to off-market opportunities and a curated network of legal, fiscal, and design professionals.
```

**Acquisition:**
```
Label: Purchase Management
H2: Intelligent
    Acquisition (italic)
Body: Entering the Marbella market requires more than identifying a beautiful property. We guide clients through structured acquisition decisions grounded in data and market intelligence.
Tagline 1: We do not operate as traditional brokers.
Tagline 2: We act as independent long-term asset advisors.

Stats:
€500M+ — Transaction Volume
120+ — Acquisitions Advised
```

**Post-Purchase:**
```
Label: After Purchase
H2: Post-Acquisition
    Management (italic)
Subtext: Our advisory doesn't end at closing. We accompany owners through the critical post-purchase phase — ensuring the property is set up, protected, and performing from the start.

Property Setup & Onboarding — From furnishing coordination to utility setup, we ensure your property is fully operational and guest-ready from day one.
Ongoing Asset Protection — We oversee maintenance schedules, insurance reviews, and compliance requirements to safeguard your investment long-term.
Performance Monitoring — Regular reporting on rental yield, occupancy rates, and market positioning keeps you informed and in control of your asset.
```

**Exit Strategy:**
```
Label: Sales Management
H2: Exit
    Strategy (italic)
Body: Selling luxury property in Marbella requires more than listing exposure. It requires positioning. We oversee the transaction through to completion — and can advise on reinvestment.

• Strategic market positioning and timing analysis
• Targeted buyer network and off-market opportunities
• Full transaction management from valuation to closing
• Reinvestment advisory and portfolio restructuring

Tagline: Private Consultations by Appointment Only.
```

**CTA:**
```
Label: Asset Advisory
H2: Interested in Our Services?
Body: We manage the purchase and sales process from start to finish. Contact us for a private consultation.
Button: Contact Us → (mailto: info@oasiseurope.nl)
```
