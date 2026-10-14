import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import Button from "../icons/Button";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    title: "Restaurant le Jardin",
    description:
      "Sobre, élégant, raffiné: ces adjectifs nous servent de fil rouge pour tous les projets digitaux et graphiques du restaurant Le Jardin.",
    video: "/video/project-lampertz.mp4",
    thumbA: "/images/project-1-thumb-1.jpg",
    thumbB: "/images/project-1-thumb-3.png",
    href: "#",
  },
];

function ProjectCard({ project }) {
  const { title, description, image, video, thumbA, thumbB } = project;

  return (
    <article className="grid grid-cols-1 gap-8 rounded-2xl bg-[#F7F9FB] p-4 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
      <div className="h-80 overflow-hidden rounded-2xl lg:h-[485px]">
        {video ? (
          <video
            key={video}
            className="h-full w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={image} alt="" className="h-full w-full object-cover" />
        )}
      </div>

      <div className="flex flex-col justify-between gap-10">
        <div>
          <div className="flex items-start justify-between gap-6">
            <h3 className="font-outfit text-2xl sm:text-3xl font-medium">
              {title}
            </h3>
            <div className="flex shrink-0 items-center gap-4">
              <button className="rounded-full p-1 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355170]">
                <ArrowLeftIcon />
              </button>
              <button className="rounded-full p-1 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355170]">
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <p className="mt-6 lg:mt-10 max-w-[300px] sm:max-w-md lg:max-w-[300px] text-lg lg:text-xl leading-relaxed">
            {description}
          </p>

          <Button
            to="/votre-projet/"
            className={
              "mt-5 duration-300 text-[#355170] min-[992px]:py-4 min-[992px]:pr-15 min-[992px]:pl-6.25 py-3.75 pr-13.75 pl-5"
            }
          ></Button>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:gap-8">
          <div className="h-40 overflow-hidden rounded-xl">
            <img src={thumbA} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-white p-6">
            <img src={thumbB} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects({ projects = PROJECTS }) {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-white pb-12 pt-16 lg:pb-24 lg:pt-36">
      <div className="container max-lg:px-6">
        <div className="mb-8 lg:mb-12 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between scroll-el">
          <div>
            <span className="font-outfit block text-4xl/relaxed reveal-el  sm:text-5xl/relaxed lg:text-7xl/relaxed">
              Les créations fraîches
            </span>
            <span className="font-outfit block text-4xl/relaxed reveal-el  sm:text-5xl/relaxed lg:text-7xl/relaxed">
              de la team
            </span>
            <h2 className="mt-8 lg:mt-14 text-xl lg:text-2xl text-gray-400">
              Projects d’agence récents
            </h2>
          </div>

          <Link
            title="Projets - MUM digital agency"
            className="pagelink lnk lnk-black min-[992px]:text-[25px] text-[18px] md:relative! absolute! md:left-0 left-5 md:bottom-0 -bottom-15"
            to="/agence/"
          >
            Découvrir tous les projets
          </Link>
        </div>
      </div>

      <div className="container max-lg:px-6">
        <ProjectCard project={projects[index]} />
      </div>
    </section>
  );
}

export default Projects;
