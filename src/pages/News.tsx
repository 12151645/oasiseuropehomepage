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

const items = [
  {
    slug: "la-zagaleta",
    image: newsDevelopment,
    tag: "Development",
    title: "New Luxury Development Announced in La Zagaleta",
    date: "March 2026",
    excerpt:
      "A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves.",
  },
  {
    slug: "marbesa-uplift",
    image: newsCapital,
    tag: "Capital",
    title: "€25M Fund Close for Marbella Hospitality Portfolio",
    date: "February 2026",
    excerpt:
      "Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol.",
  },
  {
    slug: "rntls-market",
    image: newsRntls,
    tag: "Brands",
    title: "RNTLS Expands Operations to Marbella",
    date: "January 2026",
    excerpt:
      "Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market.",
  },
];

const News = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="pt-32 md:pt-44 pb-12 md:pb-16 section-padding">
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">Newsroom</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight max-w-4xl">
          The latest from Oasis Europe.
        </h1>
        <p className="mt-6 text-foreground/70 max-w-2xl text-lg leading-relaxed">
          Announcements, market signals and developments shaping our work across the Costa del Sol and beyond.
        </p>
      </section>

      <section className="section-padding pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map((n) => (
            <Link
              key={n.slug}
              to={`/insights/${n.slug}`}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-3">
                <span className="text-accent">{n.tag}</span>
                <span>·</span>
                <span>{n.date}</span>
              </div>
              <h3 className="font-display text-2xl md:text-[1.6rem] text-foreground leading-tight mb-3 group-hover:text-accent transition-colors">
                {n.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">{n.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-accent transition-colors">
                Read article <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default News;
