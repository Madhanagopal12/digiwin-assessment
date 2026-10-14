import testimonialBg from "../../assets/images/client-testimonial-img.jfif";

const ClientTestimonial = () => {
  return (
    <section className="container service-width relative w-full min-h-[600px] flex items-center overflow-hidden rounded-2xl my-12 mx-auto ">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(24, 37, 51, 0.9)" }}
      />

      <div className="relative z-20 w-full px-8 py-16 md:px-16 lg:px-24 flex flex-col justify-between min-h-[600px]">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide text-white uppercase border border-white/20 rounded-full backdrop-blur-sm bg-white/5">
            What our agency clients say
          </span>
        </div>

        <div className="flex-grow flex items-center relative">
          <div className="absolute -top-12 -left-4 text-[120px] leading-none text-white/10 font-serif select-none pointer-events-none">
            &ldquo;
          </div>

          <blockquote className="relative z-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed max-w-4xl">
              For years, the MUM team has been professional, competent, and up
              to date with the latest know-how and competence.
            </p>
          </blockquote>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="src/assets/images/client-logo.png"
                alt="TransSport Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Johny Blom</h4>
              <p className="text-sm text-gray-400 font-medium">TransSport</p>
            </div>
          </div>

          <a
            href="#customers"
            className="group flex items-center gap-2 text-white font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-300"
          >
            Customers
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
