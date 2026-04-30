import { Mail } from "lucide-react";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";

const NewsletterBand = () => {
  return (
    <section className="bg-background text-foreground border-b border-foreground/10">
      <div className="section-padding py-16 md:py-24 lg:py-28">
        <div className="relative">
          {/* Subtle gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 pt-10 md:pt-14">
            {/* Left — primary message */}
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-6">
                The Oasis Letter · Quarterly
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight mb-6">
                Marbella intelligence,<br />delivered quietly.
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-[1.7] max-w-lg mb-8">
                Quarterly market reports, regulatory updates and select listings — shared with our
                private circle before they reach the wider audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <SubscribeDialog
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 bg-accent text-foreground px-6 md:px-7 min-h-[52px] py-4 text-[0.72rem] uppercase tracking-[0.18em] font-medium hover:bg-foreground hover:text-background transition-colors duration-300 w-full sm:w-auto">
                      <Mail size={14} className="mr-1" /> Subscribe to The Letter
                    </button>
                  }
                />
                <EnquiryDialog
                  title="Speak with the private office"
                  description="Tell us briefly what you are exploring — we will respond within one business day."
                  trigger={
                    <button className="text-sm uppercase tracking-[0.14em] text-foreground/80 hover:text-accent border-b border-foreground/30 hover:border-accent pb-1 transition-colors self-center sm:self-auto min-h-[44px] inline-flex items-center">
                      Or speak with us privately →
                    </button>
                  }
                />
              </div>

              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-foreground/40 mt-6">
                Quarterly · No spam · Unsubscribe anytime
              </p>
            </div>

            {/* Right — value props */}
            <div className="lg:border-l lg:border-foreground/10 lg:pl-16">
              <ul className="space-y-7">
                {[
                  {
                    title: "Quarterly Market Reports",
                    body: "Pricing, yields and absorption across Marbella's prime micro-locations.",
                  },
                  {
                    title: "Regulatory Briefings",
                    body: "VFT, fiscal and ownership changes — translated into owner action.",
                  },
                  {
                    title: "Off-Market Previews",
                    body: "Selected acquisitions and listings shared before they go public.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="text-accent text-[0.6875rem] uppercase tracking-[0.16em] pt-1 w-6 shrink-0">
                      ◆
                    </span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-foreground mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-[1.65]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBand;
