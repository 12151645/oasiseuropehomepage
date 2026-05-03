import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import newsImg from "@/assets/news-development.jpg";
import capitalImg from "@/assets/news-capital.jpg";
import rntlsImg from "@/assets/news-rntls.jpg";
import { toast } from "sonner";

type Kind = "News" | "Case Study" | "Report";

interface Insight {
  kind: Kind;
  slug: string;
  title: string;
  date: string;
  img: string;
  excerpt: string;
  readTime?: string;
}

const insights: Insight[] = [
  {
    kind: "News",
    slug: "la-zagaleta",
    title: "New Luxury Development in La Zagaleta",
    date: "March 2026",
    img: newsImg,
    excerpt:
      "A landmark 12-unit residential development in one of Marbella's most exclusive enclaves, conceived as a quiet manifesto for restraint and craft.",
    readTime: "6 min read",
  },
  {
    kind: "Case Study",
    slug: "marbesa-uplift",
    title: "Marbesa 56: A 38% Uplift Case Study",
    date: "February 2026",
    img: capitalImg,
    excerpt:
      "How structured renovation, rebranding and disciplined positioning delivered a thirty-eight percent valuation uplift on a hillside villa.",
    readTime: "8 min read",
  },
  {
    kind: "Report",
    slug: "rntls-market",
    title: "RNTLS Hospitality Market Report 2026",
    date: "January 2026",
    img: rntlsImg,
    excerpt:
      "Annual hospitality performance report — key trends, ADR shifts and a forward outlook for the European luxury rental market.",
    readTime: "Full report",
  },
];

const filters: ("All" | Kind)[] = ["All", "News", "Case Study", "Report"];

const Insights = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? insights : insights.filter((i) => i.kind === active)),
    [active]
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      {/* Editorial header */}
      <section className="pt-32 md:pt-44 pb-12 md:pb-16 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
              The Journal — Issue 04
            </p>
            <h1 className="font-gourmand text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.01em]">
              News, case studies <em className="italic font-normal">& field reports.</em>
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="body-md mb-5 max-w-sm md:ml-auto">
              Quarterly intelligence from our private office — written for owners, investors and the
              curiously informed.
            </p>
            <SubscribeDialog
              trigger={<Button variant="dark" size="lg">Receive the Journal</Button>}
            />
          </div>
        </div>
      </section>

      {/* Filter rail */}
      <section className="section-padding">
        <div className="border-y border-border py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap items-center gap-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[0.7rem] uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === f
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="section-padding pt-12 md:pt-16">
          <Link
            to={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center"
          >
            <div className="md:col-span-7 overflow-hidden aspect-[16/10]">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  Featured · {featured.kind}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-gourmand text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-5 group-hover:text-accent transition-colors duration-500">
                {featured.title}
              </h2>
              <p className="body-lg mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-2 text-foreground group-hover:text-accent transition-colors">
                  Read the piece <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <section className="section-padding pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {rest.map((it, i) => (
              <article
                key={it.slug}
                className="bg-background group flex flex-col"
                style={{ animation: `fadeInUp 600ms ease-out ${i * 100}ms both` }}
              >
                <Link to={`/insights/${it.slug}`} className="block overflow-hidden aspect-[16/10]">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent">{it.kind}</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {it.readTime}
                    </span>
                  </div>
                  <Link to={`/insights/${it.slug}`}>
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-snug mb-3 group-hover:text-accent transition-colors duration-500">
                      {it.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground font-light leading-[1.7] mb-6 flex-1">
                    {it.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {it.date}
                    </span>
                    <div className="flex items-center gap-3">
                      {it.kind === "Report" && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toast.success("Report requested", {
                              description: "We will email you the full report.",
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-accent transition-colors"
                        >
                          <FileText size={12} /> Request
                        </button>
                      )}
                      <Link
                        to={`/insights/${it.slug}`}
                        className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-foreground hover:text-accent transition-colors"
                      >
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Collaborate band */}
      <section className="bg-foreground text-primary-foreground">
        <div className="section-padding py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
              Collaborate
            </p>
            <h2 className="font-gourmand text-3xl md:text-5xl leading-[1.1] mb-5">
              For partnerships, press <em className="italic">& co-investment.</em>
            </h2>
            <p className="text-base font-light text-primary-foreground/70 leading-[1.75] max-w-lg">
              We work selectively with operators, family offices and storytellers whose standards
              align with our own.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right flex flex-col md:items-end gap-3">
            <EnquiryDialog
              title="Collaborate with Oasis Europe"
              trigger={
                <Button variant="gold" size="lg" className="w-full md:w-auto">
                  Start a Conversation
                </Button>
              }
            />
            <SubscribeDialog
              trigger={
                <button className="text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/60 hover:text-accent transition-colors">
                  Or subscribe to the journal →
                </button>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTABar />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Insights;
