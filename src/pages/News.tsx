import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Mail, Search, X } from "lucide-react";
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

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default News;
