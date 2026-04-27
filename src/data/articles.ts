import newsDevelopment from "@/assets/news-development.jpg";
import newsCapital from "@/assets/news-capital.jpg";
import newsRntls from "@/assets/news-rntls.jpg";

export type ArticleCategory =
  | "Company Update"
  | "Marbella Market Insight"
  | "Featured Property"
  | "New Listing Added"
  | "Case Study"
  | "Report";

export interface Article {
  slug: string;
  image: string;
  category: ArticleCategory;
  title: string;
  date: string;
  dateISO: string;
  excerpt: string;
  readTime: string;
  /** Long-form paragraphs for the detail page */
  body: string[];
  /** Optional related practice (drives the inline CTA on the detail page) */
  practice?: "Management" | "Advisory" | "Private Capital" | "Developments";
}

export const articles: Article[] = [
  {
    slug: "rental-management-marbella-guide",
    image: newsDevelopment,
    category: "Company Update",
    title: "Rental Management Marbella: The Complete Owner's Guide",
    date: "25 April 2026",
    dateISO: "2026-04-25",
    excerpt:
      "Everything an owner needs to know about appointing a rental manager in Marbella in 2026 — VFT licences, dynamic pricing, owner reporting and what to expect from a full-service partner.",
    readTime: "12 min read",
    practice: "Management",
    body: [
      "Marbella's short-term rental market has matured rapidly. What was once a fragmented landscape of part-time operators is now governed by tighter VFT regulation, sharper guest expectations and dynamic pricing models that reward operational discipline.",
      "Selecting a rental manager in 2026 is less about commissions and more about transparency. Owners should expect monthly statements, full pricing visibility, professional photography, multi-channel distribution and a clear escalation path for maintenance.",
      "At Oasis Europe, we treat each residence as a hospitality asset — not inventory. The difference shows up in occupancy, in repeat guest rate, and in the long-term capital value of the property.",
    ],
  },
  {
    slug: "marbella-rental-laws-2026",
    image: newsCapital,
    category: "Marbella Market Insight",
    title: "Marbella Rental Laws 2026: Stay Compliant & Maximise Returns",
    date: "12 April 2026",
    dateISO: "2026-04-12",
    excerpt:
      "Marbella rental laws in 2026 are evolving rapidly, reshaping how property owners operate. A clear breakdown of what's changing and how to stay compliant while protecting yield.",
    readTime: "8 min read",
    practice: "Advisory",
    body: [
      "Andalusia's regional government has introduced new restrictions on tourist rentals throughout 2025 and into 2026. Community-of-owners approval, registry numbers and a stricter audit regime now define the regulatory baseline.",
      "Compliance is no longer optional and the cost of non-compliance has risen sharply. Owners operating without a valid VFT registration face fines of up to €150,000 in the most serious cases.",
      "The good news: properly licensed assets benefit from a thinning of the supply side. Yields for compliant operators have held firm and, in prime micro-locations, expanded.",
    ],
  },
  {
    slug: "luxury-villa-futura-marbella",
    image: newsRntls,
    category: "New Listing Added",
    title: "Luxury Villa Futura — Newly Added to Our Exclusive Portfolio",
    date: "3 March 2026",
    dateISO: "2026-03-03",
    excerpt:
      "Located in the heart of Marbella's prestigious Golf Valley in Nueva Andalucía, Villa Futura joins the Oasis Europe portfolio as one of our most distinctive contemporary residences.",
    readTime: "5 min read",
    practice: "Management",
    body: [
      "Villa Futura sits on a south-facing plot in Nueva Andalucía with uninterrupted views of La Concha. The architecture is unapologetically contemporary — clean horizontal lines, deep overhangs and full-height glazing throughout the principal rooms.",
      "The residence has been brought into our managed portfolio under a long-term hospitality mandate, with photography, positioning and pricing handled in-house.",
      "Enquiries for private viewings and seasonal rentals are open through our private client team.",
    ],
  },
  {
    slug: "la-zagaleta-development",
    image: newsDevelopment,
    category: "Featured Property",
    title: "New Luxury Development Announced in La Zagaleta",
    date: "15 February 2026",
    dateISO: "2026-02-15",
    excerpt:
      "A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves.",
    readTime: "6 min read",
    practice: "Developments",
    body: [
      "Oasis Europe announces a 12-unit residential development in La Zagaleta, one of Europe's most discreet private estates.",
      "The project spans more than 8,000 square metres of hillside terrain with panoramic sea and mountain views. Construction begins Q3 2026 with completion expected in late 2028.",
      "Early-stage participation is available to qualified investors through our Private Capital practice.",
    ],
  },
  {
    slug: "marbesa-fund-close",
    image: newsCapital,
    category: "Company Update",
    title: "€25M Fund Close for Marbella Hospitality Portfolio",
    date: "20 January 2026",
    dateISO: "2026-01-20",
    excerpt:
      "Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol — a milestone for our Private Capital practice.",
    readTime: "4 min read",
    practice: "Private Capital",
    body: [
      "We are pleased to announce the successful close of our latest €25M fund, focused exclusively on high-yield hospitality assets across the Costa del Sol.",
      "The vehicle has been backed by a curated group of family offices and long-standing private clients.",
      "Deployment is already underway, with two acquisitions in Marbella and a hospitality conversion under contract in Estepona.",
    ],
  },
  {
    slug: "rntls-marbella-launch",
    image: newsRntls,
    category: "Company Update",
    title: "RNTLS Expands Operations to Marbella",
    date: "10 December 2025",
    dateISO: "2025-12-10",
    excerpt:
      "Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market, completing our regional footprint on the Costa del Sol.",
    readTime: "5 min read",
    practice: "Management",
    body: [
      "RNTLS, our hospitality-grade rental operation, formally launches in Marbella this December. The expansion completes our regional footprint along the Costa del Sol.",
      "The Marbella desk is led by a dedicated operations team with deep local knowledge — concierge, housekeeping and revenue management are all handled in-house.",
      "Owners interested in transitioning to RNTLS management can request a portfolio review through our private client team.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getRelatedArticles = (slug: string, limit = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, limit);
