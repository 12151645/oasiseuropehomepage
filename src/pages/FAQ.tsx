import { useState } from "react";
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
import architecturalImage from "@/assets/architectural-detail.jpg";

const sections = [
  {
    id: "onboarding",
    eyebrow: "Onboarding",
    label: "Getting Started",
    items: [
      {
        q: "How does rental management work with Oasis Europe?",
        a: "We take over every aspect of renting your property — pricing, listing management, guest acquisition, check-in and check-out, housekeeping coordination, maintenance, and monthly financial reporting. You receive income and reports; we handle everything else. Most owners describe it as completely hands-off once the initial setup is done.",
      },
      {
        q: "How quickly can my property start generating rental income?",
        a: "From the decision to rent to first booking typically takes 4–8 weeks: VFT licence application and approval (2–4 weeks), professional photography and listing setup (1 week), and platform activation and first bookings (1–2 weeks). Oasis Europe manages this entire process in parallel to minimise the gap between sign-up and first revenue.",
      },
      {
        q: "What types of property do you manage?",
        a: "We manage luxury villas, apartments, and estates across Marbella, Benahavís, Nueva Andalucía, Puerto Banús, Elviria, and the wider Costa del Sol. The minimum standard is a well-presented property with pool access in a desirable location. We do not manage budget or student accommodation.",
      },
      {
        q: "Can I use my property myself and still rent it?",
        a: "Yes — this is the most common arrangement. You block out the weeks you want to use the property, and Oasis Europe manages rentals around your personal use calendar. The more flexible you are with peak-season availability, the higher the rental income potential.",
      },
      {
        q: "Do I need to be in Marbella to work with Oasis Europe?",
        a: "No. Many of our owners live in the Netherlands, the UK, Belgium, the Middle East, and elsewhere. The entire management relationship can be conducted remotely. You receive monthly reports, have direct access to your account manager, and can check in on your property's performance at any time.",
      },
    ],
  },
  {
    id: "fees",
    eyebrow: "Financials",
    label: "Fees and Contracts",
    items: [
      {
        q: "How much does rental management cost in Marbella?",
        a: "Oasis Europe charges a percentage of gross rental income — the exact rate depends on your property's location, size, and rental potential. Our fee covers full-service management with no hidden setup charges. Housekeeping, laundry, and maintenance are billed separately at actual cost. Contact us for a specific proposal for your property.",
      },
      {
        q: "Is there a fixed monthly fee regardless of whether the property is rented?",
        a: "No. Our management fee is commission-based — you only pay when income is generated. There is no monthly retainer. Pool, garden, and security costs are ongoing regardless of occupancy and are billed monthly as actual costs, but these are operational expenses for any property owner, not a management charge.",
      },
      {
        q: "What is the minimum contract period?",
        a: "We work on an annual basis with a standard notice period. We don't believe in locking owners into long multi-year contracts — we prefer to earn your continued business through results. The specifics are discussed during our initial proposal conversation.",
      },
      {
        q: "Are there fees if my property is not rented?",
        a: "No management commission is charged on periods when there are no bookings. We do charge for any active work carried out during vacant periods — maintenance visits, property inspections, preparatory works — but only at actual cost.",
      },
      {
        q: "What happens to existing bookings if I switch to Oasis Europe from another manager?",
        a: "Existing confirmed bookings are fully honoured. We coordinate the transition carefully so that no guest is affected and no booking is cancelled. The handover process typically takes 2–4 weeks and is managed in close coordination with the outgoing manager.",
      },
    ],
  },
  {
    id: "legal",
    eyebrow: "Regulations",
    label: "Legal and Compliance",
    items: [
      {
        q: "Do I need a tourist licence (VFT) to rent my Marbella property?",
        a: "Yes. All short-term holiday rentals in Andalusia require a VFT (Vivienda de Uso Turístico) licence from the Junta de Andalucía. Advertising on Airbnb, Booking.com, or any other platform without a valid licence is illegal and carries fines of up to €150,000. Oasis Europe verifies licence status for every property we manage and assists with the application where needed.",
      },
      {
        q: "What is the VFT licence number format for Marbella?",
        a: "Marbella VFT numbers follow the format AT/MA/XXXXXX — where AT indicates tourist accommodation, MA indicates the province of Málaga, and XXXXXX is the unique registration number. This number must appear in all advertising and booking documentation.",
      },
      {
        q: "Can my community ban short-term rentals?",
        a: "Yes. Communities of owners (comunidades de propietarios) can vote to prohibit tourist rentals by a 3/5 majority, and a valid community ban takes precedence over a VFT licence. Before any property goes to market, Oasis Europe checks the community statutes to confirm rentals are permitted. We strongly recommend this check before purchasing a property specifically for rental purposes.",
      },
      {
        q: "What insurance do I need for a rental property in Marbella?",
        a: "At minimum, your property insurance should include third-party liability coverage for guests (responsabilidad civil) and cover the property for rental use. Standard homeowner policies often exclude rental activity — review your policy with your insurer before your first guest arrival. Oasis Europe can recommend brokers familiar with the short-term rental market in Marbella.",
      },
      {
        q: "Do I need to declare rental income in Spain?",
        a: "Yes. Rental income from a Spanish property is subject to Spanish tax — either IRNR (non-resident income tax) for non-residents or IRPF for Spanish residents. The rules differ for EU/EEA residents and non-EU owners. Oasis Europe provides monthly income statements that give your accountant exactly what they need. We work with trusted local tax advisors who specialise in non-resident rental income if you need a referral.",
      },
    ],
  },
  {
    id: "operations",
    eyebrow: "Management",
    label: "Operations",
    items: [
      {
        q: "How are guests vetted before arrival?",
        a: "Every booking goes through a screening process: identity verification, booking history and review checks, direct communication with the lead guest, and assessment against the owner's personal criteria. For La Zagaleta and other gated communities, this also includes coordination with estate security for access clearance. We decline bookings we are not fully comfortable with.",
      },
      {
        q: "What happens if a guest causes damage?",
        a: "Guests pay a security deposit at booking, which covers minor damage. For larger incidents, we coordinate insurance claims and handle all documentation. Oasis Europe conducts a full property inspection after every departure — damage is identified and documented before the next guest arrives, never after.",
      },
      {
        q: "How is housekeeping managed?",
        a: "Oasis Europe works with a dedicated housekeeping team trained to our property standards. The villa is prepared to a defined checklist before every arrival — cleaning, linen, laundry, welcome provisions, and a pre-arrival inspection. We do not rely on ad hoc cleaning contractors; every property has an assigned team.",
      },
      {
        q: "What concierge services can guests access?",
        a: "Through Oasis Europe's concierge network, guests can arrange private chefs, airport and marina transfers, golf tee times, yacht charters, beach club reservations, wine and grocery delivery, childcare, personal trainers, and bespoke experiences. Concierge services are available for all managed properties, not just the top tier.",
      },
      {
        q: "How is maintenance handled?",
        a: "We coordinate all property maintenance — pool, garden, air conditioning, appliances, structural — through a trusted contractor network built over nine years on the Costa del Sol. Maintenance is managed proactively (scheduled inspections and seasonal preparation) as well as reactively (emergency response). Costs are passed through at actual invoice cost with full documentation.",
      },
      {
        q: "What is the guest check-in process?",
        a: "Oasis Europe manages the full arrival experience: pre-arrival communication with detailed property and access information, in-person meet and greet or smart lock access depending on the property, property orientation, and 24-hour contact availability during the stay. For La Zagaleta and gated communities, we coordinate gate access registration in advance of every arrival.",
      },
    ],
  },
  {
    id: "revenue",
    eyebrow: "Data Management",
    label: "Revenue and Reporting",
    items: [
      {
        q: "How do you set the nightly rate for my property?",
        a: "We use active revenue management — rates are set and adjusted continuously based on real-time demand data, competitor pricing, local events, booking pace, and seasonal patterns specific to your area. We do not set a fixed seasonal rate and leave it; dynamic pricing consistently generates 20–35% more annual revenue than static approaches on comparable properties.",
      },
      {
        q: "Which platforms is my property listed on?",
        a: "Oasis Europe lists managed properties across Airbnb, Booking.com, VRBO, and specialist luxury rental platforms depending on the property tier. We also develop direct booking channels for all properties, which reduces OTA platform dependency over time and improves net yield.",
      },
      {
        q: "What reports do I receive as an owner?",
        a: "You receive a monthly owner statement covering: gross rental income by booking, platform fees, management commission, housekeeping costs, maintenance costs, and net income transferred. The statement also includes occupancy data, average nightly rate, and a forward booking view. Reports are delivered by the 10th of the following month.",
      },
      {
        q: "How is rental income paid to me?",
        a: "Net rental income (gross bookings minus management fee, housekeeping, and any maintenance costs incurred) is transferred to your nominated bank account monthly. Payments are made in Euros. For non-Euro owners, currency conversion is your responsibility — we transfer in Euros regardless of your home currency.",
      },
      {
        q: "What is a realistic annual rental income for my Marbella property?",
        a: "This depends heavily on your property's size, location, specification, and how much of peak season is available for rental. As a rough benchmark: a well-managed four-bedroom Marbella villa in Nueva Andalucía or similar might achieve €60,000–€120,000 gross in a strong year. A La Zagaleta estate with peak-season availability can generate significantly more. Oasis Europe provides a detailed income projection for any specific property.",
      },
    ],
  },
  {
    id: "about",
    eyebrow: "History",
    label: "About Oasis Europe",
    items: [
      {
        q: "How long has Oasis Europe been operating in Marbella?",
        a: "Oasis Europe has been managing properties in Marbella and the Costa del Sol for nine years. We manage 87+ properties across the region, from Sotogrande to East Marbella, including estates in La Zagaleta and properties across all major Marbella urbanisations.",
      },
      {
        q: "What makes Oasis Europe different from other Marbella rental managers?",
        a: "Three things: we actively manage revenue rather than set-and-forget pricing; we operate as a full-service partner with our own housekeeping team, maintenance network, and concierge capability rather than a booking-only service; and we manage across the full spectrum from rental management to asset advisory, development project management, and private capital investment — which means we understand the full life of a Marbella property, not just the rental piece.",
      },
      {
        q: "Do you manage properties outside Marbella?",
        a: "Yes — Oasis Europe manages properties across the wider Costa del Sol, including Benahavís, Estepona, and Sotogrande. Our primary focus and deepest expertise is Marbella and the immediately surrounding municipalities.",
      },
      {
        q: "How do I get started?",
        a: "Contact us through the enquiry form or call us directly. We'll arrange an initial conversation to understand your property and objectives, then provide a detailed proposal including projected income, management fee, and onboarding timeline. There is no cost or commitment involved in that initial conversation.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      {/* Hero — centered editorial */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-32 section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-foreground/60 mb-8">Services</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-8 text-foreground/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Oasis Europe answers the questions most often raised by private investors and property owners — how we manage and transform luxury assets in Marbella, how we structure acquisitions, optimise performance, and guide each exit. A clear look at how we work and what to expect when partnering with us.
          </p>
        </div>
      </section>

      {/* Position statement — split image/text */}
      <section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative min-h-[320px] md:min-h-[480px] lg:min-h-full overflow-hidden bg-secondary">
            <img
              src={architecturalImage}
              alt="Sculpted architectural detail in warm stone"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center section-padding py-16 md:py-24 lg:py-32">
            <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-foreground/60 mb-8">Our Position</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight mb-8">
              We are not brokers.
              <br />
              <em className="italic font-normal">We are asset architects.</em>
            </h2>
            <p className="text-foreground/70 leading-relaxed text-base md:text-lg max-w-lg">
              Oasis Europe manages the full lifecycle of luxury real estate — from acquisition and transformation to rental performance and structured exit.
            </p>
          </div>
        </div>
      </section>

      {/* Sections with sticky nav */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          {/* Sticky sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground mb-4">Topics</p>
            <nav className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left text-sm whitespace-nowrap md:whitespace-normal transition-colors border-l-2 pl-3 py-1 ${
                    activeId === s.id
                      ? "border-accent text-foreground"
                      : "border-transparent text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Accordions */}
          <div className="space-y-16 md:space-y-24 max-w-3xl">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-3">{section.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                  {section.label}
                </h2>
                <Accordion type="single" collapsible className="w-full border-t border-border">
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} value={`${section.id}-${i}`} className="border-b border-border">
                      <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground hover:text-accent hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 leading-relaxed text-[0.95rem] pb-5 pr-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="bg-foreground text-background px-6 sm:px-12 md:px-16 py-14 md:py-20 grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">Asset Advisory</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-5">
              Interested in our services?
            </h2>
            <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-xl">
              We manage the full purchase, transformation and sales process from start to finish. A short call is the easiest way to begin.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <EnquiryDialog
              trigger={<Button variant="gold" size="lg" className="w-full md:w-auto">Schedule a Private Consulting</Button>}
              context="FAQ page"
            />
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-background/50 md:text-right">
              Reply within one business day
            </p>
          </div>
        </div>
      </section>

      <FloatingCTABar />
      <Footer />
    </main>
  );
};

export default FAQ;
