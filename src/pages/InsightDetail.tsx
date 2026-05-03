import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { EnquiryDialog, SubscribeDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { getArticle, getRelatedArticles } from "@/data/articles";

const practiceRoutes: Record<string, string> = {
  Management: "/management",
  Advisory: "/advisory",
  "Private Capital": "/capital",
  Developments: "/developments",
};

const InsightDetail = () => {
  const { slug = "" } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/news" replace />;

  const related = getRelatedArticles(slug, 3);
  const practiceHref = article.practice ? practiceRoutes[article.practice] : null;

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      {/* Editorial header */}
      <section className="pt-28 md:pt-40 pb-10 md:pb-14 section-padding">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} /> All news
          </Link>
          <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground mt-8 mb-5">
            <span className="text-accent">{article.category}</span>
            <span>·</span>
            <time dateTime={article.dateISO}>{article.date}</time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-foreground mb-6">
            {article.title}
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="section-padding pb-12 md:pb-16">
        <div className="aspect-[16/9] overflow-hidden bg-muted max-w-5xl mx-auto">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Body */}
      <article className="section-padding pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto space-y-6">
          {article.body.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-foreground/80 font-light leading-[1.85]">
              {p}
            </p>
          ))}
        </div>
      </article>

      {/* Inline practice CTA — contextual to the article topic */}
      {article.practice && practiceHref && (
        <section className="section-padding pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto border-t border-b border-border py-10 md:py-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-2">
                Related practice
              </p>
              <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
                Discover how our {article.practice} team works.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to={practiceHref}>
                <Button variant="outline-gold" size="lg" className="w-full sm:w-auto">
                  Explore {article.practice} <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
              <EnquiryDialog
                title={`Speak with ${article.practice}`}
                description={`Tell us about your project — our ${article.practice} team will respond within one business day.`}
                context={article.title}
                trigger={
                  <Button variant="dark" size="lg" className="w-full sm:w-auto">
                    Enquire
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-padding pb-20 md:pb-28 border-t border-border pt-16 md:pt-20">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-3">
                Continue reading
              </p>
              <h2 className="font-display text-2xl md:text-4xl text-foreground leading-tight">
                More from the newsroom.
              </h2>
            </div>
            <Link
              to="/news"
              className="hidden md:inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-foreground/70 hover:text-accent transition-colors"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground mb-3">
                  <span className="text-accent">{r.category}</span>
                  <span>·</span>
                  <time dateTime={r.dateISO}>{r.date}</time>
                </div>
                <h3 className="font-display text-lg md:text-xl text-foreground leading-snug group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom dual CTA band */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="bg-foreground text-background grid md:grid-cols-2">
          <div className="px-6 sm:px-10 md:px-14 py-14 md:py-20 border-b md:border-b-0 md:border-r border-background/10">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
              Stay informed
            </p>
            <h2 className="font-display text-2xl md:text-3xl leading-[1.1] mb-4">
              Receive the next issue.
            </h2>
            <p className="text-background/70 leading-relaxed mb-8 max-w-md">
              Quarterly market intelligence and select listings, delivered quietly to your inbox.
            </p>
            <SubscribeDialog
              trigger={
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <Mail size={16} className="mr-2" /> Subscribe
                </Button>
              }
            />
          </div>
          <div className="px-6 sm:px-10 md:px-14 py-14 md:py-20">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
              Speak with us
            </p>
            <h2 className="font-display text-2xl md:text-3xl leading-[1.1] mb-4">
              Discuss this story.
            </h2>
            <p className="text-background/70 leading-relaxed mb-8 max-w-md">
              Have a question about this article or a related opportunity? Our private office will be
              in touch within one business day.
            </p>
            <EnquiryDialog
              title="Contact about this story"
              description="Reference the article in your message — our team will respond promptly."
              context={article.title}
              trigger={
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Phone size={16} className="mr-2" /> Contact the Office
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default InsightDetail;
