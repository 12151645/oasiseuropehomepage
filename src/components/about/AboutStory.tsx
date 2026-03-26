import { useEffect, useRef, useState } from "react";
import investorImg from "@/assets/about-story-investor.jpg";
import blueprintImg from "@/assets/about-story-blueprint.jpg";
import poolImg from "@/assets/about-story-pool.jpg";

const stories = [
  {
    image: investorImg,
    alt: "Investor silhouette watching Marbella sunset",
    title: "A Vision Takes Root",
    body: "A Dutch investor arrived in Marbella and discovered unmatched potential on Europe's most desirable coast.",
  },
  {
    image: blueprintImg,
    alt: "Modern architecture blueprint overlay",
    title: "The Opportunity Emerged",
    body: "Fragmented services — advisory, capital, development, management — needed a unified, world-class solution.",
  },
  {
    image: poolImg,
    alt: "Luxury villa infinity pool overlooking Mediterranean",
    title: "Oasis Europe Was Born",
    body: "Complete real estate solutions through one seamless, innovative platform.",
  },
];

const StoryBlock = ({
  image,
  alt,
  title,
  body,
  index,
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 min-h-[60vh] transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover min-h-[40vh]"
          loading="lazy"
          width={960}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center section-padding py-16 md:py-24 ${
          !isEven ? "md:order-1" : ""
        }`}
      >
        <div className="max-w-md">
          <p className="label-sm text-accent mb-4">
            Chapter {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal leading-[1.15] text-foreground mb-6">
            {title}
          </h2>
          <p className="body-lg leading-[1.8]">{body}</p>
        </div>
      </div>
    </div>
  );
};

const AboutStory = () => (
  <section id="story-journey" className="bg-background">
    {stories.map((s, i) => (
      <StoryBlock key={s.title} {...s} index={i} />
    ))}
  </section>
);

export default AboutStory;
