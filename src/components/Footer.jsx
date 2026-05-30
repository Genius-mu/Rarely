import { ArrowRight } from "lucide-react";

const btnBase =
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 will-change-transform";

const iconBase = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
};

const XIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.717 2.569 5.984 2.295 7.35 2.233c1.266-.058 1.646-.07 4.85-.07Zm0 1.802c-3.15 0-3.523.012-4.767.069-1.024.047-1.58.218-1.95.362-.49.19-.84.418-1.207.785-.367.367-.595.717-.785 1.208-.144.37-.315.925-.362 1.95-.057 1.243-.069 1.616-.069 4.766s.012 3.523.069 4.767c.047 1.024.218 1.58.362 1.95.19.49.418.84.785 1.207.367.367.717.595 1.208.785.37.144.925.315 1.95.362 1.243.057 1.616.069 4.766.069s3.523-.012 4.767-.069c1.024-.047 1.58-.218 1.95-.362.49-.19.84-.418 1.207-.785.367-.367.595-.717.785-1.208.144-.37.315-.925.362-1.95.057-1.243.069-1.616.069-4.766s-.012-3.523-.069-4.767c-.047-1.024-.218-1.58-.362-1.95a3.255 3.255 0 0 0-.785-1.207 3.255 3.255 0 0 0-1.208-.785c-.37-.144-.925-.315-1.95-.362-1.243-.057-1.616-.069-4.766-.069Zm0 3.064a4.971 4.971 0 1 1 0 9.942 4.971 4.971 0 0 1 0-9.942Zm0 8.198a3.227 3.227 0 1 0 0-6.454 3.227 3.227 0 0 0 0 6.454Zm6.323-8.4a1.162 1.162 0 1 1-2.324 0 1.162 1.162 0 0 1 2.324 0Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9.25" />
    <path
      d="M2.75 12h18.5M12 2.75c2.5 2.4 3.75 5.7 3.75 9.25S14.5 18.85 12 21.25C9.5 18.85 8.25 15.55 8.25 12S9.5 5.15 12 2.75Z"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
export default function Footer() {
  const cols = [
    {
      title: "QUICK LINKS",
      items: ["Features", "Use Cases", "Platform", "Integrations", "Pricing"],
    },
    {
      title: "SOLUTIONS",
      items: [
        "Primary Care Clinics",
        "Telemedicine",
        "Hospitals",
        "Health Plans",
      ],
    },
    { title: "COMPANY", items: ["About", "Careers", "Blog", "Contact"] },
  ];

  return (
    <footer className="relative bg-[#050404] border-x border-b border-white/5 overflow-hidden pt-20 pb-10 px-6 sm:px-12">
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-pixel text-orange-500 text-sm">R</span>
            <span className="font-mono-jb text-white text-lg">arely</span>
          </div>
          <p className="mt-3 text-white/45 font-mono-jb text-sm">
            Smarter primary care with AI
          </p>
          <button
            className={`mt-5 inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/10 border border-white/10 hover:border-white/25 text-white text-[13px] font-mono-jb px-4 py-2 rounded-md group ${btnBase}`}
          >
            Get Started{" "}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3.5 h-3.5 rounded-sm bg-orange-500/80" />
              <h4 className="font-mono-jb text-[11px] tracking-widest text-white/80">
                {col.title}
              </h4>
            </div>
            <ul className="space-y-2.5">
              {col.items.map((it) => (
                <li key={it}>
                  <a
                    href="#"
                    className="inline-block font-mono-jb text-[13px] text-white/45 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* big pixel wordmark */}
      <div className="relative z-10 mt-16 mb-8 flex justify-center">
        <span className="font-pixel text-5xl sm:text-7xl md:text-8xl leading-none select-none">
          <span
            style={{
              background: "linear-gradient(135deg,#ff7a2f,#ff2d00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            R
          </span>
          <span className="text-white/12">arely</span>
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between border-t border-white/5 pt-6">
        <div className="flex items-center gap-4 text-white/40">
          <a
            href="#"
            aria-label="Website"
            className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:scale-110"
          >
            <GlobeIcon />
          </a>
          <a
            href="#"
            aria-label="X"
            className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:scale-110"
          >
            <XIcon />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:scale-110"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:scale-110"
          >
            <LinkedInIcon />
          </a>
        </div>
        <p className="font-mono-jb text-[8px] sm:text-[11px] text-white/35">
          © 2026 Rarely. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
