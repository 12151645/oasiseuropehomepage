import { useEffect, useRef, useState } from "react";

const AboutStory = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Our Story</p>
          <h2 className="heading-lg text-foreground mb-10">
            Crafting Your Oasis on
            <br />
            <em className="italic font-normal">Spain's Golden Coast</em>
          </h2>

          <div className="space-y-6">
            <p className="body-lg leading-[1.8]">
              Imagine the golden sun dipping into the Mediterranean, casting a warm glow
              over Marbella's cliffs and the vibrant South Coast of Spain. This is the
              magic that inspired <strong className="font-medium text-foreground">Oasis Europe</strong> — a
              vision born from a Dutch entrepreneur's passion for global real estate and
              seamless opportunity.
            </p>

            <p className="body-lg leading-[1.8]">
              As a young investor and foreign property owner, I split my time between
              countries, chasing dreams while nurturing my portfolio in one of Europe's
              most coveted destinations. Amid the beauty, I saw a gap: the need for a{" "}
              <strong className="font-medium text-foreground">trusted international partner</strong> that
              truly understands the jet-set life — delivering effortless management,
              global reach, and unwavering support.
            </p>

            <p className="body-lg leading-[1.8]">
              That's when <strong className="font-medium text-foreground">Oasis Europe</strong> emerged:
              my commitment to creating an{" "}
              <strong className="font-medium text-foreground">all-in-one sanctuary</strong> powered by
              innovation. Our bespoke digital platform and multilingual team bring
              automation, stunning visuals, and 24/7 responsiveness to your fingertips.
              No more watching opportunities fade — every property thrives with worldwide
              exposure and precision care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
