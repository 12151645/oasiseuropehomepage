import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import newsDevelopment from "@/assets/news-development.jpg";
import newsCapital from "@/assets/news-capital.jpg";
import newsRntls from "@/assets/news-rntls.jpg";

const newsItems = [
  {
    image: newsDevelopment,
    tag: "Development",
    title: "New Luxury Development Announced in La Zagaleta",
    date: "March 2026",
    excerpt: "A landmark 12-unit residential development bringing Oasis Europe's design philosophy to one of Marbella's most exclusive enclaves.",
    body: [
      "Oasis Europe is proud to announce its newest development project: a landmark 12-unit residential community in La Zagaleta, one of the most prestigious private estates on the Costa del Sol.",
      "Each residence has been designed to reflect our commitment to architectural excellence, blending contemporary Mediterranean aesthetics with best-in-class sustainable construction. The project spans over 8,000 square metres of prime hillside terrain, offering panoramic sea and mountain views.",
      "The development will feature private pools, landscaped gardens, integrated smart-home technology, and direct access to La Zagaleta's world-class amenities including two 18-hole golf courses and an equestrian centre.",
      "Construction is scheduled to begin in Q3 2026, with completion anticipated by late 2028. Early-stage investment opportunities are available for qualified investors through our Private Capital division.",
      "This project represents a natural evolution of our integrated model—combining advisory insight, capital structuring, and hands-on development expertise to deliver exceptional residential assets.",
    ],
  },
  {
    image: newsCapital,
    tag: "Capital",
    title: "€25M Fund Close for Marbella Hospitality Portfolio",
    date: "February 2026",
    excerpt: "Successfully closed our latest fund targeting high-yield hospitality assets across the Costa del Sol.",
    body: [
      "Oasis Europe has successfully closed its latest private capital fund at €25 million, targeting high-yield hospitality and residential assets across the Costa del Sol.",
      "The fund attracted commitments from a diverse group of international investors, including family offices and high-net-worth individuals from the Netherlands, Germany, the United Kingdom, and the Middle East.",
      "Capital will be deployed across a curated portfolio of short-term rental properties, boutique hospitality ventures, and value-add residential opportunities in Marbella, Estepona, and Benahavís.",
      "Our investment thesis centres on identifying undervalued assets in prime micro-locations, applying our operational expertise to enhance performance, and delivering consistent risk-adjusted returns over a 5–7 year horizon.",
      "This milestone underscores the market's confidence in our disciplined, structure-first approach to real estate investment on Spain's southern coast.",
    ],
  },
  {
    image: newsRntls,
    tag: "Brands",
    title: "RNTLS Expands Operations to Marbella",
    date: "January 2026",
    excerpt: "Following success in Ibiza, RNTLS brings its hospitality-grade rental management to the Marbella market.",
    body: [
      "RNTLS, Oasis Europe's hospitality-grade rental management brand, is officially expanding operations to Marbella following a highly successful launch in Ibiza.",
      "The expansion brings RNTLS's proven operational model—combining premium guest experiences, dynamic pricing strategies, and meticulous property care—to one of Europe's fastest-growing luxury rental markets.",
      "Property owners in Marbella and the wider Costa del Sol can now access RNTLS's full-service management platform, which includes professional photography, listing optimisation, 24/7 guest concierge, and detailed owner reporting.",
      "Since its inception, RNTLS has consistently delivered above-market occupancy rates and revenue per available night, making it a trusted partner for discerning property owners who demand excellence.",
      "The Marbella launch is supported by a dedicated local team with deep market knowledge, ensuring seamless onboarding and immediate performance uplift for every property in the portfolio.",
    ],
  },
];

type NewsItem = (typeof newsItems)[number];

const NewsModal = ({
  item,
  onClose,
}: {
  item: NewsItem;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl mx-4 my-8 md:my-16 bg-background animate-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-secondary transition-colors"
          aria-label="Close article"
        >
          <X size={18} />
        </button>

        {/* Hero image */}
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 lg:p-16">
          <span className="label-sm text-accent">{item.tag}</span>
          <p className="text-xs text-muted-foreground mt-1 mb-6">{item.date}</p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] mb-8">
            {item.title}
          </h2>
          <div className="w-12 h-px bg-accent mb-8" />
          <div className="space-y-5">
            {item.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-muted-foreground font-light leading-[1.8] font-body"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
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
    <>
      <section ref={ref} className="py-28 md:py-36 bg-background">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="label-sm mb-6">Latest</p>
              <h2 className="heading-lg">News</h2>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 label-sm hover:text-foreground transition-colors"
            >
              View All <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {newsItems.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActiveArticle(item)}
                className={`group bg-background hover:bg-secondary/50 transition-all duration-700 text-left ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <span className="label-sm text-accent">{item.tag}</span>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">{item.date}</p>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 label-sm mt-6 group-hover:text-accent transition-colors">
                    Read Article <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeArticle && (
        <NewsModal item={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </>
  );
};

export default NewsSection;