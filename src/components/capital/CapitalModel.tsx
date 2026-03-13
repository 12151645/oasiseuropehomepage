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
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const activeStep = steps[activeIndex];

  return (
    <section ref={ref} style={{ backgroundColor: 'rgb(58, 64, 50)' }}>
      <div
        className={`text-center py-20 md:py-28 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-sm text-white/50 mb-4">Investment Process</p>
        <h2 className="heading-lg text-white">How It Works</h2>
      </div>

      <div className="section-padding pb-24 md:pb-32">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Accordion */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left border-t border-white/10 px-6 lg:px-10 transition-all duration-500 ${
                    isActive
                      ? "py-8 lg:py-10 bg-white/5"
                      : "py-5 lg:py-6 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-sans-pro text-sm tracking-wider transition-colors duration-300 ${
                      isActive ? "text-white/60" : "text-white/25"
                    }`}>
                      {step.number}
                    </span>
                    <h3 className={`font-sans-pro font-medium transition-all duration-300 ${
                      isActive ? "text-xl md:text-2xl text-white" : "text-lg text-white/50"
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-white/60 font-light leading-relaxed pl-10 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5 pl-10">
                      {step.highlights.map((h) => (
                        <li key={h} className="text-sm text-white/40 italic font-sans-pro">
                          — {h}
                        </li>
                      ))}
                    </ul>

                    {/* Mobile image */}
                    <div className="lg:hidden mt-6 pl-10">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-56 object-cover"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
            <div className="border-t border-white/10" />
          </div>

          {/* Right: Active Image (desktop only) */}
          <div className="hidden lg:block relative overflow-hidden min-h-[500px]">
            {steps.map((step, i) => (
              <img
                key={step.number}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalModel;
