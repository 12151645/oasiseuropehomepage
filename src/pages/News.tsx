import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Search, X, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";
import { Button } from "@/components/ui/button";
import { articles, ArticleCategory } from "@/data/articles";

const filters = [
  "All",
  "Company Update",
  "Marbella Market Insight",
  "Featured Property",
  "New Listing Added",
] as const;

type Filter = (typeof filters)[number];

const News = () => {
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCategory =
      active === "All"
        ? articles
        : articles.filter((a) => a.category === (active as ArticleCategory));
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q),
    );
  }, [active, query]);

  const featured = articles[0];
  const showFeatured = active === "All" && !query.trim();
  const grid = showFeatured ? filtered.filter((i) => i.slug !== featured.slug) : filtered;

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      {/* Hero — editorial intro + prominent search */}
      <section className="pt-32 md:pt-44 pb-12 md:pb-16 section-padding">
        <div className="max-w-4xl">
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
            Updates · Newsroom
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] tracking-tight">
            News &amp; Insights from Marbella.
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl text-lg leading-relaxed">
            Market intelligence, regulatory updates and a look behind the scenes of how we acquire,
            optimise and exit luxury assets on the Costa del Sol.
          </p>

          {/* Prominent search */}
          <div className="mt-10 md:mt-12 max-w-2xl">
            <label htmlFor="news-search" className="sr-only">
              Search articles
            </label>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none"
              />
              <input
                id="news-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by topic, regulation, location…"
                className="w-full h-14 md:h-16 pl-12 md:pl-14 pr-12 text-base md:text-lg bg-secondary border border-border focus:border-foreground/60 focus:outline-none transition-colors text-foreground placeholder:text-foreground/40"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter rail */}
      <section className="section-padding pt-2 pb-10 md:pb-14 border-t border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pt-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[0.7rem] uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors min-h-[40px] ${
                  active === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
            {grid.length + (showFeatured ? 1 : 0)}{" "}
            {grid.length + (showFeatured ? 1 : 0) === 1 ? "article" : "articles"}
            {query.trim() && ` · for "${query.trim()}"`}
          </p>
        </div>
      </section>

      {/* Featured (only when no filter / search applied) */}
      {showFeatured && (
        <section className="section-padding pb-14 md:pb-20">
          <Link to={`/insights/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-14 items-center">
              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted order-1">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="order-2">
                <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-4">
                  Featured
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  <span>{featured.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={11} />
                    <time dateTime={featured.dateISO}>{featured.date}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={11} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.08] mb-5 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-foreground/70 leading-[1.7] text-base md:text-lg mb-7">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-foreground border-b border-foreground/30 pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Editorial list — easier to scan than dense card grid */}
      <section className="section-padding pb-20 md:pb-28 border-t border-border">
        {grid.length === 0 ? (
          <div className="py-24 md:py-32 text-center">
            <p className="text-foreground/60 text-lg mb-6">
              {query.trim()
                ? `No articles match "${query.trim()}".`
                : "No entries in this category yet."}
            </p>
            {(query.trim() || active !== "All") && (
              <button
                onClick={() => {
                  setQuery("");
                  setActive("All");
                }}
                className="text-[0.7rem] uppercase tracking-[0.14em] text-foreground border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Reset filters
              </button>
            )}
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {grid.map((n) => (
              <li key={n.slug}>
                <Link
                  to={`/insights/${n.slug}`}
                  className="group grid md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr_auto] gap-6 md:gap-10 py-8 md:py-10 items-start"
                >
                  <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted">
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-3">
                      <span className="text-accent">{n.category}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} />
                        <time dateTime={n.dateISO}>{n.date}</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={11} />
                        {n.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-[2rem] text-foreground leading-[1.15] mb-3 group-hover:text-accent transition-colors">
                      {n.title}
                    </h3>
                    <p className="text-foreground/70 leading-[1.7] text-base max-w-2xl line-clamp-2 md:line-clamp-3">
                      {n.excerpt}
                    </p>
                  </div>
                  <span className="hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-foreground/60 group-hover:text-accent transition-colors mt-2 whitespace-nowrap">
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Improved CTA — single, focused subscribe band with editorial weight */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="relative bg-foreground text-background overflow-hidden">
          {/* Subtle gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
            {/* Left — primary message */}
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-6">
                The Oasis Letter · Quarterly
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight mb-6">
                Marbella intelligence,<br />delivered quietly.
              </h2>
              <p className="text-background/70 text-base md:text-lg leading-[1.7] max-w-lg mb-8">
                Quarterly market reports, regulatory updates and select listings — shared with our
                private circle before they reach the wider audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <SubscribeDialog
                  trigger={
                    <Button variant="gold" size="lg" className="w-full sm:w-auto min-h-[52px]">
                      <Mail size={16} className="mr-2" /> Subscribe to The Letter
                    </Button>
                  }
                />
                <EnquiryDialog
                  title="Speak with the private office"
                  description="Tell us briefly what you are exploring — we will respond within one business day."
                  trigger={
                    <button className="text-sm uppercase tracking-[0.14em] text-background/80 hover:text-accent border-b border-background/30 hover:border-accent pb-1 transition-colors self-center sm:self-auto min-h-[44px] inline-flex items-center">
                      Or speak with us privately →
                    </button>
                  }
                />
              </div>

              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-background/40 mt-6">
                Quarterly · No spam · Unsubscribe anytime
              </p>
            </div>

            {/* Right — value props */}
            <div className="lg:border-l lg:border-background/10 lg:pl-16">
              <ul className="space-y-7">
                {[
                  {
                    title: "Quarterly Market Reports",
                    body: "Pricing, yields and absorption across Marbella's prime micro-locations.",
                  },
                  {
                    title: "Regulatory Briefings",
                    body: "VFT, fiscal and ownership changes — translated into owner action.",
                  },
                  {
                    title: "Off-Market Previews",
                    body: "Selected acquisitions and listings shared before they go public.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="text-accent text-[0.6875rem] uppercase tracking-[0.16em] pt-1 w-6 shrink-0">
                      ◆
                    </span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-background mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-background/60 text-sm leading-[1.65]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default News;
