function About() {
  return (
    <div
      id="about"
      className="relative z-10 min-h-screen m-auto border-radius-right border-radius-left rounded-t-[24px] bg-white lg:rounded-t-[40px]"
    >
      <div className="flex flex-col items-center justify-center px-6 pt-16 sm:px-10">
        <div>
          <svg viewBox="0 0 254.79 254.79" className="h-auto w-16 sm:w-24">
            <g>
              <g></g>
              <g>
                <path
                  className="icon"
                  fill="#aaa0a0"
                  d="M95.12,82.53h-12.71c-3.17,0-5.75,2.58-5.75,5.75v78.24c0,3.17,2.58,5.75,5.75,5.75h9.07c3.17,0,5.75-2.58,5.75-5.75v-47.82c0-1.25.72-2.33,1.88-2.81,1.16-.48,2.43-.23,3.31.66l20.84,20.84c2.24,2.24,5.89,2.24,8.13,0l10.48-10.48-42.69-42.7c-1.08-1.08-2.53-1.68-4.06-1.68Z"
                ></path>
                <path
                  className="icon"
                  fill="#aaa0a0"
                  d="M172.38,82.53h-12.71c-1.54,0-2.98.6-4.06,1.68l-25.02,25.03,14.55,14.55,7.24-7.24c.59-.59,1.35-.9,2.13-.9.4,0,.8.08,1.18.24,1.16.48,1.88,1.56,1.88,2.81v47.82c0,3.17,2.58,5.75,5.75,5.75h9.07c3.17,0,5.75-2.58,5.75-5.75v-78.24c0-3.17-2.58-5.75-5.75-5.75Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <p className="text-center text-xl/loose sm:text-2xl/loose lg:text-3xl/loose about-width mt-4 mb-12 lg:mb-24 font-inter ">
          Main dans la main avec nos clients, notre agence réalise des projets
          marketing puissants et met en œuvre des stratégies publicitaires
          performantes. Tout cela grâce à une équipe dynamique et riche d’une
          expérience de 25+ ans.
        </p>
      </div>
      <div className="mb-6 lg:mb-10 scroll-el">
        <p className="text-left font-outfit font-medium text-3xl/relaxed sm:text-4xl/relaxed lg:text-5xl/relaxed px-6 sm:px-10 lg:pl-20 lg:pr-0 reveal-el ">
          Vos objectifs,
        </p>
        <p className="font-outfit font-medium text-left text-3xl sm:text-4xl lg:text-5xl px-6 sm:px-10 lg:pl-20 lg:pr-0 ">
          notre mission!
        </p>
      </div>
      <div className="w-full px-6 sm:px-10 lg:w-2/4 lg:px-0 ml-auto pb-12 lg:pb-16">
        <p className="text-xl lg:text-2xl font-inter">
          Nous comprenons vos défis et apportons des solutions complètes,
          intelligentes, digitales et éprouvées.
        </p>
        <h2 className="font-inter text-xl lg:text-2xl">
          Pourquoi notre marketing digital ?
        </h2>
      </div>
    </div>
  );
}

export default About;
