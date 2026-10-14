import { ArrowRightIcon } from "lucide-react";

const SERVICES = [
  {
    label: "Strategy",
    title: "Stratégies marketing qui fonctionnent efficacement.",
    items: ["Stratégie marketing", "Web Analytics & Reporting"],
    image: "src/assets/images/service-image-1.jpg",
  },
  {
    label: "Creation",
    title: "Designs, sites web & contenus qui font rayonner votre marque.",
    items: [
      "Design & Identité graphique",
      "Création de sites web",
      "Création de contenu & storytelling",
    ],
    image: "src/assets/images/service-image-2.jpg",
  },
  {
    label: "Marketing",
    title: "Campagnes intelligentes aux résultats mesurables.",
    items: [
      "Marketing 360°",
      "Référencement (SEO/GEO)",
      "Publicité en ligne (SEA/SMA)",
    ],
    image: "src/assets/images/service-image-3.jpg",
  },
  {
    label: "Applications",
    title: "Outils digitaux qui révolutionnent votre quotidien.",
    items: [
      "Web applications",
      "CMS - Systèmes de gestion de contenus",
      "Cloud Services",
      "Solutions IA",
    ],
    image: "src/assets/images/service-image-4.jpg",
  },
];

export function ServiceCard({
  label,
  title,
  items = [],
  image,
  imageAlt = "",
  // reverse = false,
}) {
  return (
    <article
      className={[
        "flex w-full flex-col overflow-hidden rounded-2xl border-2 border-[#355170] bg-[#182533] lg:flex-row",
        // reverse ? "lg:flex-row-reverse" : "",
      ].join(" ")}
    >
      {/* Text panel */}
      <div
        className="relative px-6 py-8 sm:px-12 sm:py-10 lg:w-1/2 lg:px-12 lg:py-10
          before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:content-['']
          before:bg-[radial-gradient(circle_at_0%_100%,_#293D53_0%,_#182533_70%,_#182533_100%)]"
      >
        <div className="relative z-10">
          <div className="flex items-baseline gap-2 text-xl sm:text-2xl text-white">
            <span className="font-outfit servicecard-service font-medium">
              {label}
            </span>
          </div>
          <h3 className="mt-6 sm:mt-10 text-2xl sm:text-3xl font-semibold text-white leading-tight">
            {title}
          </h3>

          {items.length > 0 && (
            <ul className="mt-8 sm:mt-14 flex flex-col gap-4 sm:gap-8">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 text-white"
                >
                  <ArrowRightIcon className="shrink-0" />
                  <span className="text-lg sm:text-2xl">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="min-h-48 sm:min-h-64 lg:w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
}

export default function ServiceCards({
  services = SERVICES,
  topOffset = 40, // px from the viewport top where the first card sticks
  stepOffset = 95, // px of each earlier card left visible (its header strip)
}) {
  return (
    <section id="services" className="w-full  py-16 ">
      <div className="container mx-auto px-4 sm:px-6 [counter-reset:listcounter]">
        {services.map((service, i) => (
          <div
            key={i}
            style={{ top: topOffset + stepOffset * i }}
            className="mb-8 sm:mb-12 flex min-h-[300px] sm:min-h-[440px] last:mb-0 lg:sticky motion-reduce:static"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
}
