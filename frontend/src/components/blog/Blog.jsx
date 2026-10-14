import { Link } from "react-router-dom";

function Blog() {
  const blogPoints = [
    {
      label: "Aides",
      title:
        "SME Package Digital : 70% d'aide pour votre site web et marketing",
      text: "Les PME luxembourgeoises bénéficient d'une aide de 70% sur les coûts de modernisation de leur site web ou leurs campagnes de marketing digital.",
      linkText: "Lire la suite",
      to: "/blog/aides/sme-package-digital/",
    },
    {
      label: "Web Marketing",
      title: "Le référencement sur Google",
      text: "Comment optimiser son site Internet pour Google.lu ? Optez pour un référencement local au Luxembourg.",
      linkText: "Lire la suite",
      to: "/blog/web-marketing/le-referencement-sur-google/",
    },
  ];

  return (
    <>
      <section className="md:py-37.5 py-17.5">
        <div className="container">
          <div className="flex items-end justify-between mb-12.5">
            <div className="left">
              <span className="scroll-el font-outfit font-medium block leading-[1.2] text-[clamp(32px,6vw,102px)]">
                Bon à savoir
              </span>
            </div>

            <Link
              title="Blog - MUM digital agency - Luxembourg"
              className="pagelink lnk lnk-black min-[992px]:text-[25px] text-[18px] md:relative! absolute! md:left-0 left-5 md:bottom-0 -bottom-15"
              to="/agence/"
            >
              Tous les articles
            </Link>
          </div>

          <div className="min-[992px]:p-15 p-7.5 rounded-[20px] bg-[#F7F9FB]">
            <div className="blog-inner">
              <div className="bloglist scroll-el grid md:grid-cols-12 grid-cols-2 min-[992px]:gap-15 md:gap-10 gap-0">
                <h2 className="toptitle text-[#00000099] md:inline-block inline lg:text-[25px] md:text-[21px] text-[18px] md:col-start-1 md:col-end-4 col-start-1 col-end-3 leading-[1.2] md:mb-0 mb-7.5 font-outfit">
                  <span className="reveal-el">
                    <span className="">Dernières tendances</span>{" "}
                  </span>
                  <span className="reveal-el">
                    <span className="">marketing</span>
                  </span>
                </h2>

                {blogPoints?.map((text, i) => {
                  return (
                    <div
                      key={i}
                      className={`${i === 0 ? "md:col-start-5 md:col-end-9 col-start-1 col-end-3 md:md-0 mb-10" : "md:col-start-9 md:col-end-13 col-start-1 col-end-3 md:md-0 mb-10"}`}
                    >
                      <Link to={text.to}>
                        <div>
                          <div className="md:text-[16px] text-sm bg-[#1C1E20] rounded-[5px] py-1.25 px-2.5 inline-block text-white">
                            {text.label}
                          </div>
                        </div>
                        <h3 className="text-[#1C1E20] leading-[1.2] md:mt-5 md:mb-10 my-5 min-[992px]:text-[26px] text-[21px] font-medium font-outfit">
                          {text.title}
                        </h3>
                        <p className="md:mb-10 mb-0 min-[992px]:text-[20px] text-[18px] text-[#1C1E20]">
                          {text.text}
                        </p>
                        <span className="lnk lnk-black text-[16px] md:inline-block hidden">
                          {text.linkText}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
