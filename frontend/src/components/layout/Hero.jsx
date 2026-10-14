import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "simple",
  "attrayant",
  "efficace",
  "innovant",
  "compréhensible",
  "authentique",
  "compatible IA",
  "mesurable",
  "durable",
  "pérenne",
];

function WordRotator({ words = WORDS, hold = 1.6, speed = 0.7 }) {
  const stripRef = useRef(null);
  const list = [...words, words[0]];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const step = 100 / list.length;
      const tl = gsap.timeline({ repeat: -1 });
      words.forEach((_, i) => {
        tl.to(
          stripRef.current,
          { yPercent: -step * (i + 1), duration: speed, ease: "power3.inOut" },
          `+=${hold}`,
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span className="block h-[1.4em] overflow-hidden">
        <span ref={stripRef} className="block will-change-transform">
          {list.map((w, i) => (
            <span
              key={i}
              className="block h-[1.4em] whitespace-nowrap font-semibold leading-[1.4em] text-white"
            >
              {w}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
      <path
        d="M8 1v21M2 16l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero({
  videoSrc = "/video/mum-intro-25.mp4",
  poster,
  nextId = "about",
  scrollDistance = 500,
  debug = false,
}) {
  const sectionRef = useRef(null); // pinned wrapper
  const cardRef = useRef(null); // the hero "card" that scales back
  const slotRef = useRef(null); // reserves the video's place in the layout
  const boxRef = useRef(null); // the video frame that grows
  const spacerRef = useRef(null); // scroll length for the cover phase

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const section = sectionRef.current;

        const box = boxRef.current;
        const next = document.getElementById(nextId);

        gsap.set(box, { xPercent: -50, yPercent: -50 });

        if (next) gsap.set(spacerRef.current, { height: scrollDistance });

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: next
            ? () => "+=" + (scrollDistance + window.innerHeight)
            : "+=" + scrollDistance,
          pin: true,
          pinSpacing: !next,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: debug,
        });
      },
    );

    return () => mm.revert();
  }, [scrollDistance, debug, nextId]);

  const scrollNext = (e) => {
    e.preventDefault();
    const el = document.getElementById(nextId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-[#10161d] [perspective:500px] "
      >
        <div
          ref={cardRef}
          className={[
            "relative isolate min-h-screen overflow-hidden bg-[#1b2631] font-['Outfit',sans-serif] will-change-transform ",
            "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:content-['']",
            "before:transition-all before:duration-200 before:ease-in-out",
            "before:bg-[linear-gradient(45deg,#1b2631_0%,#1b2631_28%,#22303f_43%,#22303f_48%,#1b2631_74%,#1b2631_100%)]",
          ].join(" ")}
        >
          <div className="mx-auto mt-10 grid min-h-screen w-full grid-cols-1 gap-10 pb-10 pl-6 pr-6 pt-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,600px)] lg:items-stretch lg:gap-6 lg:pl-[42px] lg:pr-2">
            <div className="flex flex-col justify-between gap-16 lg:py-4 scroll-el">
              <h1 className="text-[44px] leading-[1.3] sm:text-[56px] lg:text-[64px]">
                <span className="block reveal-el  font-light text-[#98a2ad]">
                  Agence de
                </span>
                <span className="block reveal-el  font-medium text-white">
                  marketing digital
                </span>
              </h1>

              <p className="text-2xl leading-[1.65] text-[#aab4be] sm:text-[28px] lg:text-[32px]">
                <span className="block font-light">Nous rendons</span>
                <span className="block font-light">votre marketing</span>
                <WordRotator />
              </p>
            </div>

            <a
              href={`#${nextId}`}
              onClick={scrollNext}
              className="hidden flex-col items-center justify-end gap-3 pb-6 text-[#98a2ad] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none lg:flex"
            >
              <span className="rotate-180 text-base font-light [writing-mode:vertical-rl]">
                Discover
              </span>
              <ArrowDown />
            </a>

            <div className="flex items-center">
              <div ref={slotRef} className="relative aspect-video w-full">
                <div
                  ref={boxRef}
                  className="absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-[#22303f]"
                >
                  <video
                    className="h-full w-full object-cover"
                    src={videoSrc}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={spacerRef} />
    </>
  );
}
