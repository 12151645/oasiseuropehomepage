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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: 'rgb(58, 64, 50)' }}>
      {/* Header */}
      <div
        className={`text-center py-20 md:py-28 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-sm text-white/50 mb-4">Investment Process</p>
        <h2 className="heading-lg text-white">How It Works</h2>
      </div>

      {/* Steps */}
      <div className="space-y-6 md:space-y-10 px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Full-width image */}
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-display text-5xl md:text-7xl font-light text-white/20 leading-none shrink-0">
                    {step.number}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-1">
                      {step.highlights.map((h) => (
                        <span key={h} className="text-sm text-white/50 italic font-display">
                          — {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapitalModel;
