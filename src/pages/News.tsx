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
  "Featured Property",
  "Marbella Market Insight",
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

      {/* Hero — centered editorial intro */}
      <section className="pt-32 md:pt-44 pb-12 md:pb-16 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-sm mb-8">Newsroom</p>
          <h1 className="heading-xl text-foreground mb-6">
            News &amp; Insights<br />from Marbella.
          </h1>
          <p className="body-md max-w-xl mx-auto">
            Market intelligence, regulatory updates and a look behind the scenes of how we
            acquire, optimise and exit luxury assets on the Costa del Sol.
          </p>
        </div>
      </section>

      {/* Search bar — placed directly above the news items */}
      <section className="section-padding pb-8 md:pb-10">
        <div className="max-w-2xl mx-auto">
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
      </section>

      {/* Filter rail — centered above the grid */}
      <section className="section-padding pb-10 md:pb-14">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
      </section>

      {/* News grid — uniform 3-column layout */}
      <section className="section-padding pb-20 md:pb-28">
        {filtered.length === 0 ? (
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-16">
            {filtered.map((n) => (
              <li key={n.slug}>
                <Link to={`/insights/${n.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-6">
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-3">
                    {n.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-[1.625rem] text-foreground leading-[1.2] mb-4 group-hover:text-accent transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-foreground/70 leading-[1.7] text-base mb-5 line-clamp-3">
                    {n.excerpt}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <time
                      dateTime={n.dateISO}
                      className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {n.date}
                    </time>
                  </div>
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
