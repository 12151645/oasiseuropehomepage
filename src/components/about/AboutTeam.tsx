import { useEffect, useRef, useState } from "react";
import teamImage from "@/assets/about-team.jpg";

const AboutTeam = () => {
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
    <section ref={ref} style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={teamImage}
            alt="Oasis Europe team in consultation"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>

        {/* Right - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-28 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-6">Our Team</p>
          <h2 className="heading-lg text-foreground mb-8">
            Local Expertise,
            <br />
            <em className="italic font-light">Global Standards</em>
          </h2>
          <p className="body-lg text-muted-foreground mb-6 leading-relaxed">
            Our team brings together decades of experience across real estate,
            finance, design, and hospitality. Based full-time in Marbella, we
            operate with the proximity that only local presence can provide.
          </p>
          <p className="body-lg text-muted-foreground mb-8 leading-relaxed">
            From property managers and renovation specialists to investment
            advisors and legal coordinators, every member of the Oasis Europe
            team is aligned around a single principle: structured excellence
            in service of our clients' long-term interests.
          </p>
          <p className="font-display text-lg italic text-foreground/70">
            A curated network of professionals, working as one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
