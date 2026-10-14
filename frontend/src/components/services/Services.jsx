import ServiceCards from "./ServiceCards";

function Services() {
  return (
    <section className="bg-[#182533]">
      <div className="container service-width px-4 sm:px-6">
        <div className="py-16 sm:py-36">
          <div className="mb-10 sm:mb-16 scroll-el">
            <span className="font-outfit text-4xl sm:text-6xl lg:text-7xl/relaxed font-medium text-white block leading-tight reveal-el ">
              A la carte ou
            </span>
            <span className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-medium text-white block leading-tight reveal-el ">
              full-service
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
            <h2 className="font-outfit text-white text-xl sm:text-2xl w-full lg:w-2/5">
              Services d'agence
            </h2>
            <p className="w-full lg:w-3/6 text-white text-lg sm:text-2xl leading-relaxed">
              Notre équipe in-house maitrise l'ensemble du spectre du marketing
              digital. De la stratégie à la création jusqu'aux campagnes
              sophistiquées.
            </p>
          </div>
        </div>
      </div>
      <ServiceCards />
    </section>
  );
}

export default Services;
