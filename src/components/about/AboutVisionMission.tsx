import { useEffect, useRef, useState } from "react";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    icon: Eye,
    label: "Our Vision",
    front: "Vision",
    back: "Redefine luxury real estate ownership globally",
    detail:
      "Transforming every investment into a thriving, hands-off legacy that spans the globe — redefining what luxury ownership means on Spain's South Coast.",
  },
  {
    icon: Target,
    label: "Our Mission",
    front: "Mission",
    back: "Complete solutions: advisory, capital, development, management",
    detail:
      "Empowering international investors with innovative, automated solutions — seamless management, transparent partnerships, and unparalleled exposure.",
  },
];

const AboutVisionMission = () => {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState<boolean[]>([false, false]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleFlip = (index: number) => {
    setFlipped((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section ref={ref} style={{ backgroundColor: "rgb(250, 248, 245)" }}>
      <div className="section-padding py-24 md:py-32">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-4">Guiding Principles</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isFlipped = flipped[i];

            return (
              <div
                key={card.front}
                className={`transition-all duration-1000 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                <div
                  className="relative cursor-pointer group"
                  style={{ perspective: "1000px" }}
                  onClick={() => toggleFlip(i)}
                  onMouseEnter={() => toggleFlip(i)}
                  onMouseLeave={() =>
                    setFlipped((prev) => prev.map((v, idx) => (idx === i ? false : v)))
                  }
                >
                  <div
                    className="relative w-full transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <div
                      className="w-full p-10 md:p-12 border border-border rounded-sm bg-background min-h-[280px] flex flex-col justify-center items-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/30 mb-6">
                        <Icon
                          size={22}
                          className="text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="label-sm mb-3">{card.label}</p>
                      <h3 className="font-gourmand text-xl md:text-2xl font-normal text-foreground">
                        {card.front}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-4 font-light">
                        Hover or tap to reveal
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 w-full p-10 md:p-12 border border-accent rounded-sm min-h-[280px] flex flex-col justify-center items-center text-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background:
                          "linear-gradient(135deg, hsl(30 10% 15%), hsl(30 10% 20%))",
                      }}
                    >
                      <p className="label-sm text-accent mb-4">{card.label}</p>
                      <h3 className="font-gourmand text-lg md:text-xl font-normal text-sand leading-[1.3] mb-4">
                        {card.back}
                      </h3>
                      <p className="text-sm text-sand/60 font-light leading-[1.7]">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
