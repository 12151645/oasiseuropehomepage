import { useEffect, useRef, useState } from "react";
import teamImage from "@/assets/about-team.jpg";
import stefanoPhoto from "@/assets/team-stefano.jpg";
import joeyPhoto from "@/assets/team-joey.jpg";

const teamMembers = [
  {
    name: "Stefano van Tuyl",
    role: "Owner & Founder",
    photo: stefanoPhoto,
    bio: "Drives the vision and strategy behind Oasis Europe, combining entrepreneurial energy with deep expertise in luxury real estate and rental management.",
  },
  {
    name: "Joey de Rooij",
    role: "Owner & CFO",
    photo: joeyPhoto,
    bio: "Leads financial strategy and data-driven decision making, ensuring solid annual returns through structured investment and long-term planning.",
  },
];

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
          <p className="body-lg text-muted-foreground mb-10 leading-relaxed">
            Our team brings together decades of experience across real estate,
            finance, design, and hospitality. Based full-time in Marbella, we
            operate with the proximity that only local presence can provide.
          </p>

          {/* Team Member Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="label-sm text-muted-foreground mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <p className="font-display text-lg italic text-foreground/70">
            A curated network of professionals, working as one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
