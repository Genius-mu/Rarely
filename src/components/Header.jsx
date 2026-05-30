import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const btnBase =
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 will-change-transform";

const navItems = ["Home", "Pricing", "About Us", "Resources", "Case Studies"];

/* ------------------------------------------------------------------ */
/*  SITE HEADER — fixed, scroll-aware, responsive                      */
/* ------------------------------------------------------------------ */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0a0807]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16 sm:h-[72px]"
        }`}
      >
        {/* logo */}
        <a href="#" className="group flex items-center gap-2.5 shrink-0">
          <div className="grid grid-cols-2 gap-[3px] transition-transform duration-500 ease-out group-hover:rotate-[225deg]">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-2 h-2 bg-white/90 rounded-[1px] transition-colors duration-300 group-hover:bg-orange-400"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <span className="font-mono-jb text-white text-sm tracking-tight">
            Rarely
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-mono-jb text-white/70">
          {navItems.map((n, i) => (
            <a
              key={n}
              href={`/${n.toLowerCase().split(" ").join("")}`}
              className="nav-in relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-white after:transition-all after:duration-300 hover:after:w-full"
              style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            >
              {n}
            </a>
          ))}
        </nav>

        {/* right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className={`group hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-[13px] font-mono-jb px-4 py-2 rounded-md hover:shadow-lg hover:shadow-orange-500/20 ${btnBase}`}
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden relative w-10 h-10 -mr-2 flex items-center justify-center rounded-md hover:bg-white/5 transition-colors"
          >
            <span className="relative block w-5 h-3.5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-white rounded transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[1.5px] w-5 bg-white rounded transition-all duration-200 ${
                  open ? "opacity-0 translate-x-2" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-white rounded transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out ${
          open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navItems.map((n, i) => (
            <a
              key={n}
              href={`/${n.toLowerCase().split(" ").join("")}`}
              onClick={() => setOpen(false)}
              className="font-mono-jb text-white/75 hover:text-white text-[15px] py-2.5 border-b border-white/5 transition-all duration-300 hover:translate-x-1"
              style={{
                transitionDelay: open ? `${i * 45}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              {n}
            </a>
          ))}
          <button
            onClick={() => setOpen(false)}
            className={`mt-4 inline-flex items-center justify-center gap-1.5 bg-white text-black text-sm font-mono-jb px-4 py-2.5 rounded-md ${btnBase}`}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
