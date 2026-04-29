import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import capitalImg from "@/assets/news-capital.jpg";
import devImg from "@/assets/news-development.jpg";
import rntlsImg from "@/assets/news-rntls.jpg";

const studies = [
  {
    slug: "marbesa-uplift",
    image: capitalImg,
    location: "Marbesa, Marbella",
    title: "Marbesa 56 — A 38% Valuation Uplift",
    metric: "+38% Valuation",
    duration: "14 months",
    summary:
      "End-to-end transformation of a hillside villa via structured renovation, rebranding and disciplined positioning.",
  },
  {
    slug: "la-zagaleta",
    image: devImg,
    location: "La Zagaleta, Benahavís",
    title: "La Zagaleta — A 12-Unit Signature Development",
    metric: "8,000 m² Site",
    duration: "Q3 2026 — 2028",
    summary:
      "From land assembly to design vision: a quiet manifesto for restraint and craft in Europe's most exclusive estate.",
  },
  {
    slug: "rntls-market",
    image: rntlsImg,
    location: "Ibiza & Marbella",
    title: "RNTLS — Building a Hospitality-Grade Rental Brand",
    metric: "Above-market ADR",
    duration: "3 seasons",
    summary:
      "How operational discipline, dynamic pricing and concierge-level guest care lifted occupancy and yield across two markets.",
  },
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center bg-secondary">
        <div className="section-padding py-24 md:py-32 max-w-3xl mx-auto">
          <p className="label-sm mb-8">Case Studies</p>
          <h1 className="heading-xl text-foreground mb-6">
            Evidence over narrative.
          </h1>
          <p className="text-sm md:text-base font-light text-muted-foreground mb-6 leading-[1.7]">
            Results speak louder than words.
            <br />
            <em className="italic font-display">Each project, a measured outcome.</em>
          </p>
          <p className="body-md max-w-xl mx-auto">
            A selection of projects illustrating our integrated model — from acquisition
            and transformation to operation and exit, each delivered with discipline and
            measurable results.
          </p>
        </div>
      </section>

      <section className="section-padding pb-24 md:pb-32 space-y-16 md:space-y-24">
        {studies.map((s, i) => (
          <article
            key={s.slug}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-4">{s.location}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-5">
                {s.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">{s.summary}</p>
              <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8 border-t border-border pt-6">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <TrendingUp size={14} />
                    <span className="text-[0.6875rem] uppercase tracking-[0.14em]">Outcome</span>
                  </div>
                  <p className="font-display text-xl text-foreground">{s.metric}</p>
                </div>
                <div>
                  <span className="block text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-1">
                    Duration
                  </span>
                  <p className="font-display text-xl text-foreground">{s.duration}</p>
                </div>
              </div>
              <Link
                to={`/insights/${s.slug}`}
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors border-b border-border pb-1"
              >
                Read the full case study <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default CaseStudies;
