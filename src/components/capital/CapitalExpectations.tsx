import { useEffect, useRef, useState } from "react";
import { Shield, FileText, Clock, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Professional Oversight",
    description:
      "Oasis Europe manages the entire lifecycle — acquisition, project execution, budget control, market positioning, and sales. Investors are not involved in daily operations.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "Investors receive regular progress updates, construction reporting, financial summaries, and clear timeline communication. Transparency is fundamental to the structure.",
  },
  {
    icon: Clock,
    title: "Defined Time Horizon",
    description:
      "Projects are structured with a limited development and sales horizon. The strategy is controlled transformation, not long-term land holding.",
  },
  {
    icon: TrendingUp,
    title: "Aligned Incentives",
    description:
      "Management compensation includes a performance component tied to successful project completion and sale, ensuring execution quality and exit value remain the priority.",
  },
];

const CapitalExpectations = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-capital">
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-capital-foreground/50 mb-4">Investor Experience</p>
          <h2 className="heading-lg text-capital-foreground">What Investors Can Expect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-capital-foreground/20 rounded-full">
                  <Icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium mb-4 text-capital-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-capital-foreground/60 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapitalExpectations;
