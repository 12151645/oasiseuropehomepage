import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    tag: "Development",
    title: "New Luxury Development Announced in La Zagaleta",
    date: "March 2026",
    excerpt: "A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves.",
  },
  {
    tag: "Capital",
    title: "€25M Fund Close for Marbella Hospitality Portfolio",
    date: "February 2026",
    excerpt: "Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol.",
  },
  {
    tag: "Brands",
    title: "RNTLS Expands Operations to Marbella",
    date: "January 2026",
    excerpt: "Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market.",
  },
];

const NewsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label-sm text-muted-foreground mb-4">Latest</p>
            <h2 className="heading-lg">News</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 label-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {newsItems.map((item, i) => (
            <a
              key={item.title}
              href="#"
              className={`group bg-background p-8 md:p-10 hover:bg-secondary/50 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="label-sm text-accent text-xs">{item.tag}</span>
              <p className="text-xs text-muted-foreground mt-1 mb-4">{item.date}</p>
              <h3 className="font-display text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
