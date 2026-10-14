import Button from "../icons/Button";
import SocialIcon from "../icons/SocialIcons";
import { Link } from "react-router-dom";

function Footer() {
  const footerMenu = ["Om Knupp 3", "9991 Weiswampach", "Luxembourg"];

  const footerLinks = [
    {
      text: "Contact",
      link: "/contact",
      title: "MUM - Coordonnées & accès - Weiswampach - Luxembourg",
    },
    {
      text: "Carrière",
      link: "/carriere",
      title: "Carrière - MUM digital agency",
    },
    { text: "Support", link: "/assitance", title: "MUM Suport Client" },
  ];

  const footerSocialIcons = [
    { text: "Facebook", link: "/facebook" },
    { text: "Youtube", link: "/youtube" },
    { text: "Linkedin", link: "/linkedin" },
    { text: "Instagram", link: "/instagram" },
  ];

  return (
    <>
      <footer className="pt-37.5 max-[992px]:pt-17.5 bg-gradient text-white leading-[1.2] text-[clamp(20px,2.1vw,26px)] fixed left-0 bottom-0">
        <div className="container">
          <div className="font-inter md:grid md:grid-cols-12 block gap-5">
            <ul className="col-span-3 md:mb-0 mb-10">
              <li className="text-[18px] text-[rgba(255,255,255,0.6)] mb-5">
                MUM digital agency
              </li>
              {footerMenu.map((i, index) => {
                return (
                  <li className="mb-2.5" key={index}>
                    {i}
                  </li>
                );
              })}
            </ul>

            <ul className="col-span-3 md:mb-0 mb-10">
              {footerLinks?.map((i, index) => {
                return (
                  <li className="mb-2.5" key={index}>
                    <Link
                      title={i.title}
                      className="hover:text-[rgba(255,255,255,0.6)] ease duration-200 transition-all"
                      to={i.link}
                    >
                      {i.text}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Button
                  to="/votre-projet/"
                  className={
                    "mt-5 duration-300 text-white min-[992px]:py-4 min-[992px]:pr-15 min-[992px]:pl-6.25 py-3.75 pr-13.75 pl-5"
                  }
                />
              </li>
            </ul>

            <div className="flex items-baseline md:justify-end col-start-10 col-end-13">
              {footerSocialIcons?.map((i, index) => {
                return (
                  <div
                    className="flex justify-center items-center socialicons"
                    key={index}
                  >
                    <Link
                      title={i.text}
                      className="h-8.5 w-8.5 md:h-10 md:w-10 rounded-full border border-[#ffffff4d] flex justify-center items-center min-[576px]:mr-2.5 mr-2 hover:text-[#1b2631] relative"
                      to={i.link}
                    >
                      <SocialIcon
                        className="h-[40%]"
                        platform={i.text}
                        size={22}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="copyright text-center md:py-7.5 py-5 text-sm border-t border-[#ffffff26] md:mt-37.5 mt-17.5 leading-normal">
          <div className="container">
            <span className="legalinfobar">
              <span className="text-[#fff9]">
                © 2015-2026 MUM digital agency.{" "}
              </span>{" "}
              <span className="legalinfolinks">
                <Link
                  title="MUM digital agency - Luxembourg"
                  to="/mentions-legales/"
                >
                  Mentions légales
                </Link>{" "}
                -{" "}
                <Link
                  title="MUM digital agency - Luxembourg"
                  href="/mentions-legales/#privacy"
                >
                  Vie privée
                </Link>{" "}
                -{" "}
                <Link
                  title="MUM S.A. - Conditions générales de Vente"
                  href="/cgv/"
                >
                  CGV
                </Link>
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
