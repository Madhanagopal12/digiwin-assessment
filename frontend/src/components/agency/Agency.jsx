import { Link } from "react-router-dom";

function Agency() {
  const agencyPoints = [
    {
      hash: "thinkahead",
      title: "Nous anticipons pour vous !",
      text: "Avec un regard visionnaire, une planification proactive et un état d'esprit orienté solutions.",
    },
    {
      hash: "made-to-measure",
      title: "Nous créons du sur-mesure !",
      text: "Des solutions ajustées à vos besoins, que ce soit sur des projets unique, ou comme partenaire full-service pour votre marketing.",
    },
    {
      hash: "team-of-experts",
      title: "Nous travaillons main dans la main !",
      text: "Un accompagnement sans faille par 10 talents qui conjuguent efficacement leurs expertises pour vos projets.",
    },
    {
      hash: "just-in-time",
      title: "Nous tenons toujours nos promesses !",
      text: "Avec une grande réactivité, une organisation fiable et des résultats qui visent l’excellence.",
    },
  ];

  return (
    <>
      <section className="md:py-37.5 py-17.5">
        <div className="container">
          <div className="md:grid md:grid-cols-12 grid-cols-2 block gap-5 items-baseline">
            <div className="about md:col-start-1 col-start-1 md:col-end-4 col-end-3 md:sticky static top-32.5">
              <h2 className="inline-block md:text-[25px] text-[18px] font-outfit">
                A propos de notre agence
              </h2>

              <img
                src="src/assets/images/agency.jpg"
                alt="Agency Img"
                className="md:my-10 my-7.5 rounded-[20px]"
                loading="lazy"
              />

              <Link
                title="Agence marketing full-service MUM à Weiswampach Luxembourg"
                className="pagelink lnk lnk-black md:text-[25px] text-[18px]"
                to={"/agence/"}
              >
                Faisons connaissance
              </Link>
            </div>

            <div className="md:col-start-7 md:col-end-13 col-start-1 col-end-3 md:mt-0 mt-7.5">
              <div className="page-bq font-outfit">
                <p>
                  Depuis 25+ ans, nos clients fidèles apprécient notre équipe
                  pour son expertise professionnelle, sa grande fiabilité et sa
                  mentalité de travail.
                </p>
              </div>

              <ul className="md:mt-20 mt-10">
                {agencyPoints.map((i, index) => {
                  return (
                    <li
                      key={index}
                      className={`md:flex-row flex-col flex justify-between ${index + 1 === agencyPoints.length ? "pb-0 mb-0" : "border-b border-[rgba(0,0,0,0.16)] mb-10 pb-10"}`}
                    >
                      <span className="md:pr-3.75 pr-0 hash md:mb-0 mb-3.75 md:text-[20px] min-[576px]:text-[18px] text-[16px]">
                        {i.hash}
                      </span>
                      <div className="md:flex-[0_0_70%] flex-[0_0_100%]">
                        <span className="mb-6.25 block md:text-2xl text-[21px] font-outfit leading-[1.2] font-medium">
                          {i.title}
                        </span>

                        <p className="md:text-xl text-[18px]">{i.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agency;
