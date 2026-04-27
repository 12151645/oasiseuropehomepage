import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import newsImg from "@/assets/news-development.jpg";
import capitalImg from "@/assets/news-capital.jpg";
import rntlsImg from "@/assets/news-rntls.jpg";
import { toast } from "sonner";

const insights = [
  { kind: "News", slug: "la-zagaleta", title: "New Luxury Development in La Zagaleta", date: "March 2026", img: newsImg, excerpt: "A landmark 12-unit residential development in one of Marbella's most exclusive enclaves." },
  { kind: "Case Study", slug: "marbesa-uplift", title: "Marbesa 56: A 38% Uplift Case Study", date: "February 2026", img: capitalImg, excerpt: "How structured renovation and rebranding repositioned a hillside villa." },
  { kind: "Report", slug: "rntls-market", title: "RNTLS Hospitality Market Report 2026", date: "January 2026", img: rntlsImg, excerpt: "Annual hospitality performance report — key trends and forward outlook." },
];

const Insights = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="pt-32 md:pt-40 pb-10 section-padding">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="label-sm mb-3">Insights</p>
            <h1 className="font-gourmand text-3xl md:text-5xl leading-[1.1]">News, Case Studies <em className="italic">& Reports.</em></h1>
          </div>
          <SubscribeDialog trigger={<Button variant="dark">Subscribe to Insights</Button>} />
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {insights.map((it) => (
            <article key={it.slug} className="bg-background group">
              <Link to={`/insights/${it.slug}`} className="block overflow-hidden aspect-[16/10]">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <div className="p-6 md:p-8">
                <span className="label-sm text-accent">{it.kind}</span>
                <p className="text-xs text-muted-foreground mt-1 mb-3">{it.date}</p>
                <Link to={`/insights/${it.slug}`}>
                  <h2 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">{it.title}</h2>
                </Link>
                <p className="text-sm text-muted-foreground font-light leading-[1.7] mb-4">{it.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  <Link to={`/insights/${it.slug}`} className="text-xs uppercase tracking-[0.1em] hover:text-accent">Read →</Link>
                  {it.kind === "Report" && (
                    <button onClick={() => toast.success("Report requested", { description: "We will email you the full report." })} className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-accent">
                      · Request Full Report
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 section-padding text-center">
        <h2 className="font-gourmand text-3xl md:text-4xl mb-3">Collaborate with Oasis Europe</h2>
        <p className="body-lg max-w-xl mx-auto mb-6">For partnerships, press and co-investment.</p>
        <EnquiryDialog trigger={<Button variant="dark" size="lg">Start a Conversation</Button>} title="Collaborate with Oasis Europe" />
      </section>

      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default Insights;
