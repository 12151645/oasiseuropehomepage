import { useEffect, useRef, useState, useCallback } from "react";
import modelInterior from "@/assets/model-interior.jpg";
import modelTerrace from "@/assets/model-terrace.jpg";

const steps = [
  {
    number: "01",
    title: "Capital Participation",
    items: [
      "Dedicated project vehicle structure",
      "Capital committed at project start",
      "No interim interest obligations",
      "Returns realised at exit",
    ],
    image: modelInterior,
  },
  {
    number: "02",
    title: "Acquisition",
    items: [
      "High-end villas in recognised residential zones",
      "Valuation review & technical inspection",
      "Full legal due diligence",
      "Only projects with clear upside proceed",
    ],
    image: modelTerrace,
  },
  {
    number: "03",
    title: "Transformation",
    items: [
      "Repositioned into turnkey luxury residence",
      "High-specification international standards",
      "Direct execution by Oasis Europe",
      "Cost control & timeline oversight",
    ],
    image: modelInterior,
  },
  {
    number: "04",
    title: "Market Positioning & Sale",
    items: [
      "Strategic introduction to global buyer market",
      "Structured exit within defined timeframe",
      "Aligned incentives across stakeholders",
      "Risk-controlled sales process",
    ],
    image: modelTerrace,
  },
];

const CapitalModel = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  return (
    <section ref={ref} className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left - Image with Header overlay */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          {steps.map((step, i) => (
            <img
              key={i}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative z-10 flex flex-col justify-end h-full section-padding py-16 lg:py-24">
            <p className="label-sm text-primary-foreground/70 mb-4">Investment Process</p>
            <h2 className="heading-lg text-primary-foreground mb-6">How It Works</h2>
            <p className="body-lg text-primary-foreground/70 max-w-lg">
              Each project is structured as a Private Investment Fund — a transparent,
              professionally managed framework from acquisition through exit.
            </p>
          </div>
        </div>

        {/* Right - Steps Content */}
        <div
          className={`flex flex-col justify-center section-padding py-16 lg:py-24 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-foreground"
                    : "w-5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          <div className="relative min-h-[250px]">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="label-sm text-accent mb-4">{step.number}</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-6 text-foreground">
                  {step.title}
                </h3>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 italic font-display text-lg text-muted-foreground">
            We are the smart choice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapitalModel;
