import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../icons/Button";

const NAV = [
  { label: "Agency", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Customers", href: "#testimonials" },
  { label: "Insights", href: "#insights" },
];

const LANGS = ["FR", "EN"];

const SERVICES = [
  {
    title: "Strategy",
    items: ["Marketing strategy", "Web Analytics & Reporting"],
  },
  {
    title: "Creation",
    items: [
      "Design & Graphic Identity",
      "Website creation",
      "Content creation & storytelling",
    ],
  },
  {
    title: "Marketing",
    items: [
      "360° Marketing",
      "Search Engine Optimization (SEO/GEO)",
      "Online advertising (SEA/SMA)",
      "Social Media Marketing (SMM)",
      "Email marketing",
    ],
  },
  {
    title: "Applications",
    items: [
      "Web applications",
      "CMS - Content Management Systems",
      "Cloud Services",
      "AI Solutions",
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
];

function Languages({ className = "" }) {
  return (
    <div className={`flex items-center text-sm ${className}`}>
      {LANGS.map((lang, i) => (
        <button
          key={lang}
          type="button"
          className={[
            "px-3 ",
            i > 0 ? "border-l border-white/30" : "",
            i === 0
              ? "font-semibold text-white"
              : "text-gray-400 hover:text-white",
          ].join(" ")}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </a>
  );
}

function Header({ menuImage = "src/assets/images/menu-img.jpg" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[110] flex items-center justify-between px-6 py-4 transition sm:px-10 sm:py-5">
        <a href="#" onClick={close}>
          <span className="mr-2 text-lg font-bold text-white">MUM</span>
          <span className="text-base text-gray-400">digital agency</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {open && (
            <>
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-8">
                  {NAV.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={close}
                        className="text-lg font-medium text-white transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Languages className="hidden lg:flex" />
            </>
          )}

          {!open && (
            <a href="#">
              <svg
                viewBox="0 0 254.79 254.79"
                className="h-auto w-12 sm:w-[75px]"
              >
                <g>
                  <g>
                    <path
                      className="circle inner"
                      fill="#666"
                      d="M127.4,14.59c-62.2,0-112.81,50.61-112.81,112.81s50.61,112.81,112.81,112.81,112.81-50.61,112.81-112.81S189.6,14.59,127.4,14.59ZM127.4,230.66c-56.94,0-103.26-46.32-103.26-103.26S70.46,24.14,127.4,24.14s103.26,46.32,103.26,103.26-46.32,103.26-103.26,103.26Z"
                    ></path>
                    <path
                      className="circle outside"
                      fill="#fff"
                      d="M127.4,0C57.15,0,0,57.15,0,127.4s57.15,127.4,127.4,127.4,127.4-57.15,127.4-127.4S197.64,0,127.4,0ZM14.59,127.4c0-62.2,50.61-112.81,112.81-112.81s112.81,50.61,112.81,112.81-50.61,112.81-112.81,112.81S14.59,189.6,14.59,127.4Z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className="icon"
                      fill="#fff"
                      d="M95.12,82.53h-12.71c-3.17,0-5.75,2.58-5.75,5.75v78.24c0,3.17,2.58,5.75,5.75,5.75h9.07c3.17,0,5.75-2.58,5.75-5.75v-47.82c0-1.25.72-2.33,1.88-2.81,1.16-.48,2.43-.23,3.31.66l20.84,20.84c2.24,2.24,5.89,2.24,8.13,0l10.48-10.48-42.69-42.7c-1.08-1.08-2.53-1.68-4.06-1.68Z"
                    ></path>
                    <path
                      className="icon"
                      fill="#fff"
                      d="M172.38,82.53h-12.71c-1.54,0-2.98.6-4.06,1.68l-25.02,25.03,14.55,14.55,7.24-7.24c.59-.59,1.35-.9,2.13-.9.4,0,.8.08,1.18.24,1.16.48,1.88,1.56,1.88,2.81v47.82c0,3.17,2.58,5.75,5.75,5.75h9.07c3.17,0,5.75-2.58,5.75-5.75v-78.24c0-3.17-2.58-5.75-5.75-5.75Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          )}

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {open ? (
              <XIcon size={36} strokeWidth={1} />
            ) : (
              <span className="flex flex-col gap-2">
                <span className="block h-px w-8 bg-white" />
                <span className="block h-px w-8 bg-white" />
              </span>
            )}
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[100] overflow-y-auto bg-[#182533] font-['Outfit',sans-serif] transition-[opacity,visibility] duration-300",
          open ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 pb-12 pt-28 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:pt-36 xl:grid-cols-[300px_minmax(0,1fr)_auto] xl:gap-14">
          <div className="lg:hidden">
            <nav>
              <ul className="flex flex-col gap-4">
                {NAV.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="text-3xl font-medium text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Languages className="-ml-3 mt-6" />
          </div>

          <div className="hidden h-[455px] w-[300px] overflow-hidden rounded-3xl xl:block">
            <img
              src={menuImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 content-start gap-x-10 gap-y-10 sm:grid-cols-2 lg:gap-y-14">
            {SERVICES.map((service, i) => (
              <div key={service.title}>
                <h3 className="flex items-baseline gap-2 text-white">
                  <span className="text-lg font-light text-[#00a8e0]">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <span className="text-2xl">{service.title}</span>
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        onClick={close}
                        className="text-base font-medium text-gray-400 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:justify-end lg:gap-10">
            <p className="text-lg font-medium leading-relaxed text-gray-400">
              An idea, a project?
              <br />
              Let's start today!
            </p>

            <Button
              to="/votre-projet/"
              className={
                "mt-5 duration-300 text-white min-[992px]:py-4 min-[992px]:pr-15 min-[992px]:pl-6.25 py-3.75 pr-13.75 pl-5"
              }
            />
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
