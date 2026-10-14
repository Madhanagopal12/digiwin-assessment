import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserRoundGroupIcon,
  RadioIcon,
  SproutIcon,
  ZapIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    Icon: RadioIcon,
    iconText: "visibilité",
    title: "Plus de visibilité",
    description:
      "Image de marque forte, notoriété renforcée & une longueur d'avance sur vos concurrents.",
  },
  {
    Icon: SproutIcon,
    iconText: "Growth",
    title: "Acquisition de clients",
    description:
      "Les bons prospects, de nouveaux clients à valeur ajoutée, une croissance durable.",
  },
  {
    Icon: UserRoundGroupIcon,
    iconText: "Recruiting",
    title: "Recrutement gagnant",
    description:
      "Une marque employeur attractive et des campagnes qui attirent les meilleurs talents.",
  },
  {
    Icon: ZapIcon,
    iconText: "Efficiency",
    title: "Agilité digitale",
    description:
      "Plus d'efficacité grâce à des outils intelligents et IA qui accélèrent votre quotidien.",
  },
];

export default function Objectives({ items = ITEMS, debug = false }) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const section = sectionRef.current;
        const rail = railRef.current;

        const distance = () =>
          Math.max(0, rail.scrollWidth - section.clientWidth);

        gsap.to(rail, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
            markers: debug,
          },
        });
      },
      sectionRef,
    );

    return () => mm.revert();
  }, [debug]);

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative flex h-auto w-full items-center overflow-hidden bg-white py-12 font-['Outfit',sans-serif] sm:py-16 lg:h-screen lg:py-0 motion-reduce:h-auto motion-reduce:py-24"
    >
      <div
        ref={railRef}
        className="flex w-full flex-col gap-6 sm:gap-8 lg:w-max lg:flex-row lg:gap-0 motion-reduce:w-full motion-reduce:flex-col motion-reduce:gap-10 motion-reduce:px-6 p-5  "
      >
        {items.map((item, i) => (
          <TestimonialWrapper key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function TestimonialWrapper({ Icon, iconText, title, description }) {
  return (
    <article className="mr-0 w-full lg:mr-10 lg:w-[60vw] max-w-[1351px] lg:h-[443px] lg:max-h-[443px] rounded-2xl shrink-0 bg-[#F7F9FB] p-6 sm:p-8 lg:p-12 motion-reduce:mr-0 motion-reduce:w-full">
      <div className="flex justify-between pb-6 sm:pb-10">
        <Icon className="text-blue-600" />
        <span>
          <span className="text-blue-600">#</span>
          {iconText}
        </span>
      </div>
      <h2 className="mb-8 sm:mb-16 lg:mb-[120px] text-2xl sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl">{description}</p>
    </article>
  );
}
