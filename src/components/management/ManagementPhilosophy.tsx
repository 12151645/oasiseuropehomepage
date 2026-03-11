import { useEffect, useRef, useState } from "react";
import { Lightbulb, BarChart3, Palette, Lock } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Advanced pricing technology and demand analysis maximise seasonal revenue.",
  },
  {
    icon: BarChart3,
    title: "Structure",
    description:
      "Clear reporting, defined operational processes, and transparent performance metrics.",
  },
  {
    icon: Palette,
    title: "Design Intelligence",
    description:
      "Strategic design improvements that increase both rental value and property equity.",
  },
  {
    icon: Lock,
    title: "Discretion",
    description:
      "Trusted by international owners seeking professional and confidential asset management.",
  },
];

const ManagementPhilosophy = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground mb-4">Performance Philosophy</p>
          <h2 className="heading-lg">A Different Standard of Management</h2>
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
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
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

export default ManagementPhilosophy;
