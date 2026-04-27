import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/cta/CTAModals";

const sections = [
  {
    label: "Buying & Selling",
    items: [
      {
        q: "Do you only work with off-market properties?",
        a: "We work with both on and off-market opportunities. A meaningful share of our most distinctive transactions are introduced privately, ahead of any public listing.",
      },
      {
        q: "What is the typical price range of properties you handle?",
        a: "Our acquisitions and sales generally start from €1.5M, with a focus on signature residences in Marbella, the Costa del Sol and Ibiza.",
      },
      {
        q: "Can you assist international buyers with the legal process?",
        a: "Yes. We coordinate with trusted legal, tax and notary partners to guide international clients through every step — from reservation to completion.",
      },
    ],
  },
  {
    label: "Long-Term Rentals",
    items: [
      {
        q: "What defines a long-term rental for Oasis Europe?",
        a: "Tenancies of six months or more, typically twelve, in fully-prepared residences with concierge-level onboarding and ongoing support.",
      },
      {
        q: "Are properties furnished?",
        a: "The vast majority of our long-term residences are delivered fully furnished and equipped to a hospitality standard.",
      },
    ],
  },
  {
    label: "Property Management & RNTLS",
    items: [
      {
        q: "What does RNTLS include?",
        a: "Photography, listing optimisation, dynamic pricing, 24/7 guest concierge, housekeeping coordination, maintenance and detailed owner reporting.",
      },
      {
        q: "Do you guarantee occupancy?",
        a: "We do not promise outcomes we cannot fully control. We do commit to disciplined operations that have consistently delivered above-market occupancy and ADR.",
      },
    ],
  },
  {
    label: "Private Capital & Development",
    items: [
      {
        q: "Who can invest through Private Capital?",
        a: "Qualified professional investors, family offices and select high-net-worth individuals. Each opportunity is structured on a case-by-case basis.",
      },
      {
        q: "What is your typical investment horizon?",
        a: "Most projects are structured around a 5–7 year horizon, balanced between value-add residential and hospitality-led assets.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="pt-32 md:pt-44 pb-12 md:pb-16 section-padding">
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">Frequently Asked</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight max-w-4xl">
          Considered answers to recurring questions.
        </h1>
        <p className="mt-6 text-foreground/70 max-w-2xl text-lg leading-relaxed">
          A short reference covering buying, renting, management and capital. For anything more specific, our team is one message away.
        </p>
      </section>

      <section className="section-padding pb-20 md:pb-28">
        <div className="max-w-3xl space-y-12 md:space-y-16">
          {sections.map((section) => (
            <div key={section.label}>
              <h2 className="font-display text-2xl text-foreground mb-4 border-b border-border pb-3">
                {section.label}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} value={`${section.label}-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 max-w-3xl border-t border-border pt-10">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            Still have a question?
          </h3>
          <p className="text-foreground/70 mb-6">
            Our team replies personally, typically within one business day.
          </p>
          <EnquiryDialog
            trigger={<Button variant="editorial">Contact our team</Button>}
            context="FAQ page"
          />
        </div>
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default FAQ;
