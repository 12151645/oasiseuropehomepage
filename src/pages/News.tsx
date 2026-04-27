import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { SubscribeDialog } from "@/components/cta/CTAModals";
import { Button } from "@/components/ui/button";
import newsDevelopment from "@/assets/news-development.jpg";
import newsCapital from "@/assets/news-capital.jpg";
import newsRntls from "@/assets/news-rntls.jpg";

type Category = "Company Update" | "Marbella Market Insight" | "Featured Property" | "New Listing Added";

interface NewsItem {
  slug: string;
  image: string;
  category: Category;
  title: string;
  date: string;
  dateISO: string;
  excerpt: string;
  readTime: string;
}

const items: NewsItem[] = [
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
  },
  {
    slug: "la-zagaleta-development",
    image: newsDevelopment,
    category: "Featured Property",
    title: "New Luxury Development Announced in La Zagaleta",
    date: "February 2026",
    dateISO: "2026-02-15",
    excerpt:
      "A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves.",
    readTime: "6 min read",
  },
  {
    slug: "marbesa-fund-close",
    image: newsCapital,
    category: "Company Update",
    title: "€25M Fund Close for Marbella Hospitality Portfolio",
    date: "January 2026",
    dateISO: "2026-01-20",
    excerpt:
      "Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol — a milestone for our Private Capital practice.",
    readTime: "4 min read",
  },
  {
    slug: "rntls-marbella-launch",
    image: newsRntls,
    category: "Company Update",
    title: "RNTLS Expands Operations to Marbella",
    date: "December 2025",
    dateISO: "2025-12-10",
    excerpt:
      "Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market, completing our regional footprint on the Costa del Sol.",
    readTime: "5 min read",
  },
];

const filters = ["All", "Company Update", "Marbella Market Insight", "Featured Property", "New Listing Added"] as const;

const News = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  const featured = items[0];
  const rest = filtered.filter((i) => i.slug !== featured.slug);
  const grid = active === "All" ? rest : filtered;

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-10 md:pb-16 section-padding">
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">Updates · Newsroom</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] tracking-tight max-w-4xl">
          News &amp; Insights from Marbella.
        </h1>
        <p className="mt-6 text-foreground/70 max-w-2xl text-lg leading-relaxed">
          Marbella news and property insights — rental laws, market trends, investment updates, and a look behind the scenes of our work: new properties joining the portfolio, ongoing transformations, and the thinking behind how we acquire, optimise and exit luxury assets.
        </p>
      </section>

      {/* Featured (only when no filter applied) */}
      {active === "All" && (
        <section className="section-padding pb-12 md:pb-16">
          <Link to={`/insights/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 items-center border-t border-border pt-10 md:pt-14">
              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted order-1">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="order-2">
                <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-4">Featured</p>
                <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <time dateTime={featured.dateISO}>{featured.date}</time>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.08] mb-5 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground/30 pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Filter rail */}
      <section className="section-padding pt-6 pb-8 border-t border-border">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[0.7rem] uppercase tracking-[0.14em] px-4 py-2 border transition-colors ${
                  active === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
            {grid.length} {grid.length === 1 ? "entry" : "entries"}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pb-20 md:pb-28">
        {grid.length === 0 ? (
          <p className="text-foreground/60 py-20 text-center">No entries in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
            {grid.map((n) => (
              <Link key={n.slug} to={`/insights/${n.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-3">
                  <span className="text-accent">{n.category}</span>
                  <span>·</span>
                  <time dateTime={n.dateISO}>{n.date}</time>
                </div>
                <h3 className="font-display text-xl md:text-[1.55rem] text-foreground leading-[1.15] mb-3 group-hover:text-accent transition-colors">
                  {n.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">{n.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-foreground/70 group-hover:text-accent transition-colors">
                  Read article <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Subscribe band */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="bg-foreground text-background px-6 sm:px-12 md:px-16 py-14 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">Stay informed</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-5">
              Curated insights, delivered quietly.
            </h2>
            <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-xl">
              Subscribe to receive new announcements, market intelligence and select listings before they reach the wider audience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
            <SubscribeDialog
              trigger={
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <Mail size={16} className="mr-2" /> Subscribe to Updates
                </Button>
              }
            />
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-background/50 md:text-right">
              Quarterly · No spam · Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default News;
