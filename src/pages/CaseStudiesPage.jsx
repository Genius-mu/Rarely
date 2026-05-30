import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

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
