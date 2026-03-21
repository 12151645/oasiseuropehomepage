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
    <section ref={ref} className="py-28 md:py-36 bg-secondary">
      <div className="section-padding">
        <div className="text-center mb-20 md:mb-24">
          <p className="label-sm mb-6">Investor Experience</p>
          <h2 className="heading-lg text-foreground">What Investors Can Expect</h2>
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
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-border rounded-full">
                  <Icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">
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