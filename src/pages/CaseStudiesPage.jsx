import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Social brand icons — inline SVG + path (for footer)                */
/* ------------------------------------------------------------------ */
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
/*  Fonts + motion                                                     */
/* ------------------------------------------------------------------ */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Press+Start+2P&display=swap');
    .font-mono-jb { font-family: 'JetBrains Mono', monospace; }
    .font-pixel { font-family: 'Press Start 2P', monospace; }
    @keyframes fadeUp { 0%{opacity:0;transform:translateY(18px);} 100%{opacity:1;transform:translateY(0);} }
    .reveal { opacity: 0; }
    .reveal.in { animation: fadeUp 0.7s cubic-bezier(.2,.7,.2,1) forwards; }
    @keyframes heroIn { 0%{opacity:0;transform:translateY(22px);} 100%{opacity:1;transform:translateY(0);} }
    .hero-in { opacity: 0; animation: heroIn 0.8s cubic-bezier(.2,.7,.2,1) forwards; }
    @keyframes auroraPulse { 0%,100%{opacity:0.8;transform:scale(1);} 50%{opacity:1;transform:scale(1.05);} }
    .aurora-pulse { animation: auroraPulse 9s ease-in-out infinite; transform-origin: center 35%; }
    ::selection { background: #ff5722; color: #000; }
    @media (prefers-reduced-motion: reduce) {
      .reveal, .hero-in { animation: none !important; opacity: 1 !important; transform: none !important; }
      .aurora-pulse { animation: none !important; }
    }
  `}</style>
);

function Reveal({ children, className = "", style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${shown ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

const btnBase =
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 will-change-transform";
const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function CSHero() {
  return (
    <section className="relative overflow-hidden bg-[#080606] border border-white/5 rounded-sm">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="aurora-pulse absolute inset-x-0 -top-[12%] h-[70%]"
          style={{
            background:
              "radial-gradient(85% 70% at 50% 18%, rgba(255,60,0,0.6) 0%, rgba(190,20,0,0.3) 32%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[28%]"
          style={{
            background: "linear-gradient(to bottom, #080606 30%, transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[42%]"
          style={{
            background: "linear-gradient(to top, #080606 35%, transparent)",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 sm:pt-40 pb-16">
        <span
          className="hero-in font-mono-jb text-[11px] tracking-[0.3em] text-orange-400/90 mb-5"
          style={{ animationDelay: "0.05s" }}
        >
          CASE STUDIES
        </span>
        <h1
          className="hero-in font-mono-jb text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.12] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.12s" }}
        >
          Teams doing their
          <br />
          best work.
        </h1>
        <p
          className="hero-in mt-6 text-white/60 font-mono-jb text-sm sm:text-[15px] max-w-md leading-relaxed"
          style={{ animationDelay: "0.24s" }}
        >
          Real teams, real numbers. See how organizations replaced the chaos
          with one calm surface.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const studies = [
  {
    company: "Northwind",
    industry: "SaaS",
    grad: "from-orange-500 to-red-600",
    metric: "3.2×",
    metricLabel: "faster delivery",
    headline: "Cut release cycles from weeks to days",
    excerpt:
      "By consolidating tasks and automations, Northwind shipped more with the same headcount.",
  },
  {
    company: "Helios Health",
    industry: "Healthcare",
    grad: "from-emerald-500 to-teal-600",
    metric: "47%",
    metricLabel: "less tool-switching",
    headline: "One surface for 12 clinics",
    excerpt:
      "Care teams stopped hopping between systems and got hours back every week.",
  },
  {
    company: "Vault & Co",
    industry: "Fintech",
    grad: "from-blue-500 to-indigo-600",
    metric: "99.9%",
    metricLabel: "audit readiness",
    headline: "Compliance that runs itself",
    excerpt:
      "Automated trails and approvals turned audit season into a non-event.",
  },
  {
    company: "Marketplace",
    industry: "E-commerce",
    grad: "from-pink-500 to-rose-600",
    metric: "2.4×",
    metricLabel: "throughput",
    headline: "Scaled ops without scaling chaos",
    excerpt:
      "Triggers route work automatically, so the ops team focuses on the exceptions.",
  },
  {
    company: "Orbit Labs",
    industry: "SaaS",
    grad: "from-violet-500 to-purple-700",
    metric: "12 hrs",
    metricLabel: "saved / week",
    headline: "Killed the status meeting",
    excerpt:
      "Async updates replaced standing meetings across every product squad.",
  },
  {
    company: "Brightline",
    industry: "Healthcare",
    grad: "from-amber-400 to-orange-600",
    metric: "60%",
    metricLabel: "faster onboarding",
    headline: "New hires productive in days",
    excerpt:
      "Templated workflows mean every new clinician starts on rails, not from scratch.",
  },
];

const featured = {
  company: "Northwind",
  grad: "from-orange-500 to-red-600",
  quote:
    "We replaced five tools with one. The team stopped managing the work and started doing it — our release cadence has never been healthier.",
  author: "Jordan Mensah",
  role: "VP Engineering, Northwind",
  stats: [
    { value: 3.2, suffix: "×", decimals: 1, label: "faster delivery" },
    { value: 5, suffix: "", decimals: 0, label: "tools consolidated" },
    { value: 90, suffix: "%", decimals: 0, label: "less context-switching" },
  ],
};

const industries = ["All", "SaaS", "Healthcare", "Fintech", "E-commerce"];

/* ------------------------------------------------------------------ */
/*  COUNT-UP STAT                                                      */
/* ------------------------------------------------------------------ */
function Stat({ value, suffix = "", decimals = 0, label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const dur = 1400,
            t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const display =
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();
  return (
    <div ref={ref} className="text-center">
      <div className="font-mono-jb text-3xl sm:text-4xl font-medium text-white tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="mt-2 font-mono-jb text-[11px] sm:text-[12px] tracking-wide text-white/45">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURED STUDY                                                     */
/* ------------------------------------------------------------------ */
function FeaturedStudy() {
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 px-6 sm:px-10 pt-4 pb-12">
      <Reveal className="max-w-5xl mx-auto rounded-2xl border border-orange-500/30 bg-gradient-to-b from-orange-500/[0.08] to-white/[0.02] p-8 sm:p-12 shadow-[0_0_50px_rgba(255,70,0,0.12)]">
        <div className="flex items-center gap-3">
          <span
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${featured.grad} flex items-center justify-center font-mono-jb text-white font-bold`}
          >
            {featured.company[0]}
          </span>
          <span className="font-mono-jb text-white text-sm">
            {featured.company}
          </span>
          <span className="ml-auto font-mono-jb text-[10px] tracking-widest text-orange-400/90 bg-orange-500/10 px-2.5 py-1 rounded-full">
            FEATURED STORY
          </span>
        </div>

        <div className="mt-7 relative">
          <Quote className="w-8 h-8 text-orange-400/40 absolute -top-2 -left-1" />
          <p className="relative pl-6 font-mono-jb text-lg sm:text-2xl leading-relaxed text-white">
            {featured.quote}
          </p>
        </div>
        <p className="mt-5 pl-6 font-mono-jb text-[13px] text-white/55">
          — {featured.author},{" "}
          <span className="text-white/40">{featured.role}</span>
        </p>

        <div className="mt-9 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {featured.stats.map((s) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              decimals={s.decimals}
              label={s.label}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STUDY GRID + FILTER                                                */
/* ------------------------------------------------------------------ */
function StudyCard({ s }) {
  return (
    <a
      href="#"
      className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.grad} flex items-center justify-center font-mono-jb text-white text-sm font-bold`}
          >
            {s.company[0]}
          </span>
          <div className="leading-tight">
            <div className="font-mono-jb text-[13px] text-white">
              {s.company}
            </div>
            <div className="font-mono-jb text-[10px] text-white/40">
              {s.industry}
            </div>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-mono-jb text-3xl font-medium text-orange-400">
          {s.metric}
        </span>
        <span className="font-mono-jb text-[11px] text-white/45">
          {s.metricLabel}
        </span>
      </div>

      <h3 className="mt-4 font-mono-jb text-[15px] text-white leading-snug">
        {s.headline}
      </h3>
      <p className="mt-2.5 font-mono-jb text-[12.5px] leading-relaxed text-white/50 flex-1">
        {s.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-mono-jb text-[12.5px] text-white/70 group-hover:text-orange-400 transition-colors">
        Read story{" "}
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function StudyGrid() {
  const [active, setActive] = useState("All");
  const list =
    active === "All" ? studies : studies.filter((s) => s.industry === active);
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-12 sm:py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {industries.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono-jb text-[12.5px] px-4 py-1.5 rounded-full border transition-all duration-200 ${
                active === c
                  ? "bg-white text-black border-white"
                  : "text-white/60 border-white/12 hover:text-white hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((s, i) => (
            <Reveal
              key={s.company + s.headline}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <StudyCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */
function CtaBand() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 120%, rgba(255,60,0,0.45), rgba(150,20,0,0.15) 40%, transparent 70%)",
        }}
      />
      <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-mono-jb text-3xl sm:text-4xl text-white leading-tight">
          Your team could be next.
        </h2>
        <p className="mt-5 font-mono-jb text-sm text-white/60 max-w-md mx-auto leading-relaxed">
          Start free and see the difference in a week. Or talk to us about your
          specific workflow.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className={`group inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-orange-500/25 ${btnBase}`}
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button
            className={`bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 text-sm font-mono-jb px-6 py-2.5 rounded-md backdrop-blur ${btnBase}`}
          >
            Talk to Sales
          </button>
        </div>
      </Reveal>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  PAGE — no header                                                   */
/* ------------------------------------------------------------------ */
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      <CSHero />
      <FeaturedStudy />
      <StudyGrid />
      <CtaBand />
    </div>
  );
}
