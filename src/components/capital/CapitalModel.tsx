import { useEffect, useRef, useState } from "react";
import capitalHero from "@/assets/capital-hero.jpg";
import capitalAcquisition from "@/assets/capital-acquisition.jpg";
import capitalTransformation from "@/assets/capital-transformation.jpg";
import capitalLocation from "@/assets/capital-location.jpg";

const steps = [
  {
    number: "01",
    title: "Capital Participation",
    description:
      "Investors participate in a dedicated project vehicle. Capital is committed at the start of the project and deployed toward acquisition and transformation. The structure is aligned — all stakeholders benefit from successful exit performance.",
    highlights: [
      "No interim interest obligations",
      "Returns realised at exit",
    ],
    image: capitalHero,
  },
  {
    number: "02",
    title: "Acquisition",
    description:
      "Oasis Europe identifies and secures high-end villas in internationally recognised residential zones. Each property is carefully selected. Before acquisition, the asset undergoes valuation review, technical inspection and legal due diligence.",
    highlights: [
      "Only projects with clear upside proceed",
      "Full legal & technical due diligence",
    ],
    image: capitalAcquisition,
  },
  {
    number: "03",
    title: "Transformation",
    description:
      "Following acquisition, the property is repositioned into a fully turnkey luxury residence. The objective is to deliver a completed, high-specification residence aligned with international luxury buyer expectations.",
    highlights: [
      "Direct execution by Oasis Europe",
      "Cost control & timeline oversight",
    ],
    image: capitalTransformation,
  },
  {
    number: "04",
    title: "Market Positioning & Sale",
    description:
      "Once completed, the property is strategically introduced to the global buyer market. The aim is a structured exit within a defined timeframe, with aligned incentives and structured risk control measures.",
    highlights: [
      "Strategic global market introduction",
      "Structured exit process",
    ],
    image: capitalLocation,
  },
];

const CapitalModel = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="section-padding">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Investment Process</p>
          <h2 className="heading-lg text-foreground">How It Works</h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 border-t border-border transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div
                  className={`relative min-h-[300px] lg:min-h-[400px] overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/10" />
                </div>

                <div
                  className={`flex flex-col justify-center py-12 lg:py-16 px-6 lg:px-16 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="font-display text-5xl font-light text-muted-foreground/30 mb-4">
                    {step.number}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground/70 italic font-display">
                        — {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapitalModel;
