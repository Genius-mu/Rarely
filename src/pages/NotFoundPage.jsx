import { ArrowLeft, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts + motion (safe to keep even if also in your layout)          */
/* ------------------------------------------------------------------ */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Press+Start+2P&display=swap');
    .font-mono-jb { font-family: 'JetBrains Mono', monospace; }
    .font-pixel { font-family: 'Press Start 2P', monospace; }

    @keyframes heroIn { 0%{opacity:0;transform:translateY(22px);} 100%{opacity:1;transform:translateY(0);} }
    .hero-in { opacity: 0; animation: heroIn 0.8s cubic-bezier(.2,.7,.2,1) forwards; }

    @keyframes auroraPulse { 0%,100%{opacity:0.75;transform:scale(1);} 50%{opacity:1;transform:scale(1.06);} }
    .aurora-pulse { animation: auroraPulse 9s ease-in-out infinite; transform-origin: center 45%; }

    /* subtle flicker + drift on the big 404 */
    @keyframes flicker {
      0%, 100%   { opacity: 1; }
      92%        { opacity: 1; }
      93%        { opacity: 0.35; }
      94%        { opacity: 1; }
      96%        { opacity: 0.6; }
      97%        { opacity: 1; }
    }
    @keyframes drift {
      0%,100% { transform: translateY(0) skewX(0deg); }
      50%     { transform: translateY(-6px) skewX(-0.6deg); }
    }
    .glitch { animation: flicker 5s steps(1) infinite, drift 7s ease-in-out infinite; }
    /* offset chromatic ghosts */
    .glitch-ghost { position: absolute; inset: 0; pointer-events: none; }
    @keyframes nudgeA { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-3px,2px);} }
    @keyframes nudgeB { 0%,100%{transform:translate(0,0);} 50%{transform:translate(3px,-2px);} }
    .ghost-a { color: rgba(255,40,0,0.45); animation: nudgeA 3.2s ease-in-out infinite; }
    .ghost-b { color: rgba(40,140,255,0.35); animation: nudgeB 3.8s ease-in-out infinite; }

    ::selection { background: #ff5722; color: #000; }

    @media (prefers-reduced-motion: reduce) {
      .hero-in { animation: none !important; opacity: 1 !important; transform: none !important; }
      .aurora-pulse, .glitch, .ghost-a, .ghost-b { animation: none !important; }
      .glitch-ghost { display: none; }
    }
  `}</style>
);

const btnBase =
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 will-change-transform";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "About Us", href: "/about" },
];

/* ------------------------------------------------------------------ */
/*  PAGE — no header (rendered by your router layout)                  */
/*  Tip: swap <a href> for react-router <Link to> to avoid reloads.    */
/* ------------------------------------------------------------------ */
export default function NotFoundPage({ homeHref = "/" }) {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      <section className="relative overflow-hidden bg-[#080606] border border-white/5 rounded-sm min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        {/* atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="aurora-pulse absolute inset-x-0 top-[18%] h-[64%]"
            style={{
              background:
                "radial-gradient(80% 70% at 50% 50%, rgba(255,60,0,0.6) 0%, rgba(190,20,0,0.28) 32%, transparent 64%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-[26%]"
            style={{
              background:
                "linear-gradient(to bottom, #080606 35%, transparent)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[26%]"
            style={{
              background: "linear-gradient(to top, #080606 35%, transparent)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 120% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </div>

        {/* big 404 */}
        <div
          className="hero-in relative z-10 select-none"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="relative inline-block">
            {/* chromatic ghosts */}
            <span
              className="glitch-ghost ghost-a font-pixel text-6xl sm:text-8xl md:text-9xl leading-none"
              aria-hidden="true"
            >
              404
            </span>
            <span
              className="glitch-ghost ghost-b font-pixel text-6xl sm:text-8xl md:text-9xl leading-none"
              aria-hidden="true"
            >
              404
            </span>
            {/* main */}
            <span
              className="glitch relative font-pixel text-6xl sm:text-8xl md:text-9xl leading-none"
              style={{
                background: "linear-gradient(135deg,#ff7a2f,#ff2d00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </span>
          </div>
        </div>

        {/* copy */}
        <h1
          className="hero-in relative z-10 mt-10 font-mono-jb text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.18s" }}
        >
          This page took a wrong turn.
        </h1>
        <p
          className="hero-in relative z-10 mt-5 font-mono-jb text-sm sm:text-[15px] text-white/60 max-w-md leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          The page you're looking for doesn't exist, moved, or never did. Let's
          get you back to the work that matters.
        </p>

        {/* actions */}
        <div
          className="hero-in relative z-10 mt-9 flex flex-col sm:flex-row items-center gap-3"
          style={{ animationDelay: "0.42s" }}
        >
          <a
            href={homeHref}
            className={`group inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-orange-500/25 ${btnBase}`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to home
          </a>
          <a
            href="/resources"
            className={`group inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 text-sm font-mono-jb px-6 py-2.5 rounded-md backdrop-blur ${btnBase}`}
          >
            Browse resources
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* quick links */}
        <div
          className="hero-in relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          style={{ animationDelay: "0.54s" }}
        >
          {quickLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono-jb text-[12.5px] text-white/45 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* error code chip */}
        <div
          className="hero-in relative z-10 mt-10 inline-flex items-center gap-2 font-mono-jb text-[11px] text-white/35"
          style={{ animationDelay: "0.66s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
          ERROR 404 — PAGE NOT FOUND
        </div>
      </section>
    </div>
  );
}
