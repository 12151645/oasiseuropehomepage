import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { toast } from "sonner";
import newsImg from "@/assets/news-development.jpg";
import capitalImg from "@/assets/news-capital.jpg";
import rntlsImg from "@/assets/news-rntls.jpg";

const articles: Record<string, { title: string; kind: string; date: string; img: string; body: string[] }> = {
  "la-zagaleta": {
    title: "New Luxury Development in La Zagaleta",
    kind: "News",
    date: "March 2026",
    img: newsImg,
    body: [
      "Oasis Europe announces a landmark 12-unit residential development in La Zagaleta, one of Europe's most exclusive private estates.",
      "The project spans over 8,000 square metres of prime hillside terrain with panoramic sea and mountain views.",
      "Construction begins Q3 2026 with completion expected late 2028. Early-stage investment is available through Private Capital.",
    ],
  },
  "marbesa-uplift": {
    title: "Marbesa 56: A 38% Uplift Case Study",
    kind: "Case Study",
    date: "February 2026",
    img: capitalImg,
    body: [
      "An end-to-end transformation of a hillside villa in Marbesa generated a 38% valuation uplift in 14 months.",
      "Structured around the Oasis Model — Acquire, Transform, Optimize, Structure, Exit — the project combined design, hospitality and capital.",
      "Read the full case study to understand the operational levers we deployed.",
    ],
  },
  "rntls-market": {
    title: "RNTLS Hospitality Market Report 2026",
    kind: "Report",
    date: "January 2026",
    img: rntlsImg,
    body: [
      "Our annual hospitality market report covering Marbella, Ibiza and the wider Costa del Sol.",
      "Key data points include occupancy, ADR, RevPAN and seasonality benchmarks across our managed portfolio.",
    ],
  },
};

const InsightDetail = () => {
  const { slug = "" } = useParams();
  const article = articles[slug];
  if (!article) return <Navigate to="/insights" replace />;

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <article className="pt-28 md:pt-36 pb-20 max-w-3xl mx-auto section-padding">
        <Link to="/insights" className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground">← All insights</Link>
        <p className="label-sm text-accent mt-6">{article.kind}</p>
        <p className="text-xs text-muted-foreground mt-1 mb-4">{article.date}</p>
        <h1 className="font-display text-3xl md:text-5xl font-medium leading-[1.15] mb-8">{article.title}</h1>
        <div className="aspect-[16/9] overflow-hidden mb-10">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-5">
          {article.body.map((p, i) => (
            <p key={i} className="text-base text-muted-foreground font-light leading-[1.8]">{p}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <EnquiryDialog
            trigger={<Button variant="dark" className="w-full">Contact about this story</Button>}
            title="Contact about this story"
          />
          {article.kind === "Report" && (
            <Button variant="outline" onClick={() => toast.success("Report requested", { description: "Check your inbox shortly." })}>
              Request Full Report
            </Button>
          )}
          <Link to="/insights"><Button variant="ghost" className="w-full">Read more insights</Button></Link>
        </div>
      </article>

      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default InsightDetail;
