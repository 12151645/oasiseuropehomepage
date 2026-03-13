import { useEffect, useRef, useState } from "react";
import architecturalDetail from "@/assets/architectural-detail.jpg";

const CapitalPositioning = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={architecturalDetail}
            alt="Architectural detail of luxury development"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>

        {/* Right - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-6">The Concept</p>
          <h2 className="heading-lg text-foreground mb-8">The Model</h2>

          <div className="space-y-5 text-base text-muted-foreground font-light leading-relaxed">
            <p>
              The model is straightforward. Invest in a curated project. Acquire a prime
              villa below optimised value. Transform it into a premium turnkey residence.
              Sell strategically at enhanced market positioning.
            </p>
            <p>
              Each project is structured as a Private Investment Fund — providing a
              transparent and professionally managed investment framework. From acquisition
              to return generation, we oversee the entire lifecycle of the investment.
            </p>
            <p>
              Beyond sourcing the property, we manage all operational and financial aspects
              to optimise performance, maintain quality standards, and ensure consistent income.
              With a hands-off approach and full transparency, Oasis Europe enables investors
              to participate in professionally managed real estate projects focused on solid returns.
            </p>
          </div>

          <p className="mt-10 italic font-sans-pro text-xl text-foreground">
            We are the smart choice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapitalPositioning;
