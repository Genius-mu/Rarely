import { useEffect, useRef, useState } from "react";
import { Target, Heart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";


/* ------------------------------------------------------------------ */
/*  Fonts + motion (safe to keep even if also in your layout)          */
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

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll                                                   */
/* ------------------------------------------------------------------ */
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
/*  ABOUT HERO                                                         */
/* ------------------------------------------------------------------ */
function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#080606] border border-white/5 rounded-sm">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="aurora-pulse absolute inset-x-0 -top-[12%] h-[72%]"
          style={{
            background:
              "radial-gradient(85% 70% at 50% 18%, rgba(255,60,0,0.65) 0%, rgba(190,20,0,0.3) 32%, transparent 62%)",
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

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 sm:pt-40 pb-20">
        <span
          className="hero-in font-mono-jb text-[11px] tracking-[0.3em] text-orange-400/90 mb-5"
          style={{ animationDelay: "0.05s" }}
        >
          ABOUT US
        </span>
        <h1
          className="hero-in font-mono-jb text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.12] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)] max-w-3xl"
          style={{ animationDelay: "0.12s" }}
        >
          We build the calm
          <br />
          in your workflow.
        </h1>
        <p
          className="hero-in mt-6 text-white/60 font-mono-jb text-sm sm:text-[15px] max-w-xl leading-relaxed"
          style={{ animationDelay: "0.24s" }}
        >
          Teams shouldn't spend their best hours managing tools. We're on a
          mission to put work, tasks, and context in one place — so people can
          get back to the work that matters.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STORY                                                              */
/* ------------------------------------------------------------------ */
function Story() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-10">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 w-[55%] h-[55%] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255,110,10,0.3), transparent 70%)",
        }}
      />
      <Reveal className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white leading-snug">
          Our story
        </h2>
        <div className="space-y-5 font-mono-jb text-[14px] sm:text-[15px] leading-relaxed text-white/60">
          <p>
            We started in 2021 with a frustration most teams know too well:
            <span className="text-white"> the work was everywhere.</span> Tasks
            in one app, docs in another, updates buried in a dozen channels.
          </p>
          <p>
            So we built a single surface that pulls it all together — projects,
            automations, and the context behind every decision — without forcing
            anyone to abandon the tools they already love.
          </p>
          <p>
            Today, teams of every size use Rarely to{" "}
            <span className="text-orange-400">
              move faster with less noise.
            </span>{" "}
            We're still just getting started.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STATS (animated count-up)                                          */
/* ------------------------------------------------------------------ */
function Stat({ value, prefix = "", suffix = "", decimals = 0, label }) {
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
          const dur = 1400;
          const t0 = performance.now();
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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const display =
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono-jb text-3xl sm:text-4xl font-medium text-white tabular-nums">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-2 font-mono-jb text-[11px] sm:text-[12px] tracking-wide text-white/45">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-20 px-6 sm:px-10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-pixel text-white/[0.035] text-[90px] sm:text-[150px] whitespace-nowrap select-none">
          EST. 2021
        </span>
      </div>
      <Reveal className="relative z-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <Stat value={12000} suffix="+" label="Teams onboarded" />
        <Stat value={40} suffix="+" label="Native integrations" />
        <Stat value={99.9} decimals={1} suffix="%" label="Uptime SLA" />
        <Stat value={4.9} decimals={1} suffix="/5" label="Avg. rating" />
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  VALUES                                                             */
/* ------------------------------------------------------------------ */
const values = [
  {
    icon: Target,
    title: "Focus over features",
    body: "We ship what helps teams concentrate, and resist the bloat that turns tools into chores.",
    color: "text-orange-400",
  },
  {
    icon: Heart,
    title: "Built with care",
    body: "Every detail, from a hover state to an empty screen, is designed like someone will live in it. Because they will.",
    color: "text-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "Trust by default",
    body: "Your data is yours. Security, transparency, and privacy aren't add-ons — they're the foundation.",
    color: "text-emerald-400",
  },
  {
    icon: Sparkles,
    title: "Quietly ambitious",
    body: "We aim high and let the work speak. No hype, no noise — just steady, compounding progress.",
    color: "text-blue-400",
  },
];

function Values() {
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-24 px-6 sm:px-10">
      <Reveal className="max-w-5xl mx-auto">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white text-center">
          What we value
        </h2>
        <p className="mt-3 text-center font-mono-jb text-sm text-white/50">
          The principles behind every decision we make.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.title}
                style={{ transitionDelay: `${i * 70}ms` }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
              >
                <span
                  className={`inline-flex w-10 h-10 rounded-lg bg-white/5 items-center justify-center ${v.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-mono-jb text-lg text-white">
                  {v.title}
                </h3>
                <p className="mt-2.5 font-mono-jb text-[13px] leading-relaxed text-white/55">
                  {v.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIMELINE                                                           */
/* ------------------------------------------------------------------ */
const milestones = [
  {
    year: "2021",
    title: "The first commit",
    body: "Two founders, one shared frustration, and a prototype built over a long weekend.",
  },
  {
    year: "2022",
    title: "Out of beta",
    body: "Our first 500 teams came aboard and shaped the product we have today.",
  },
  {
    year: "2024",
    title: "Integrations everywhere",
    body: "Launched the integration platform — connect the whole stack, no context switching.",
  },
  {
    year: "2026",
    title: "Where we are now",
    body: "12,000+ teams, a growing platform, and the same mission we started with.",
  },
];

function Timeline() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-10">
      <Reveal className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white text-center mb-12">
          How we got here
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/15" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <Reveal
                key={m.year}
                style={{ transitionDelay: `${i * 60}ms` }}
                className="group relative"
              >
                <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-white transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-jb text-orange-400 text-sm font-semibold tracking-widest">
                    {m.year}
                  </span>
                  <h3 className="font-mono-jb text-white text-[15px]">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-2 font-mono-jb text-[13px] leading-relaxed text-white/55 max-w-xl">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TEAM                                                               */
/* ------------------------------------------------------------------ */
const team = [
  {
    name: "Ada Okonkwo",
    role: "Co-founder & CEO",
    grad: "from-orange-500 to-red-600",
  },
  {
    name: "Marius Vance",
    role: "Co-founder & CTO",
    grad: "from-blue-500 to-indigo-600",
  },
  {
    name: "Lena Brandt",
    role: "Head of Design",
    grad: "from-pink-500 to-rose-600",
  },
  {
    name: "Theo Marsh",
    role: "Head of Engineering",
    grad: "from-emerald-500 to-teal-600",
  },
  {
    name: "Priya Nair",
    role: "Head of Product",
    grad: "from-amber-400 to-orange-600",
  },
  {
    name: "Sol Reyes",
    role: "Head of Customer Success",
    grad: "from-violet-500 to-purple-700",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Team() {
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-24 px-6 sm:px-10">
      <Reveal className="max-w-5xl mx-auto">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white text-center">
          The people behind it
        </h2>
        <p className="mt-3 text-center font-mono-jb text-sm text-white/50">
          A small team that cares a lot.
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {team.map((p, i) => (
            <Reveal
              key={p.name}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${p.grad} flex items-center justify-center font-mono-jb text-white text-lg font-semibold transition-transform duration-300 group-hover:scale-110`}
              >
                {initials(p.name)}
              </div>
              <h3 className="mt-4 font-mono-jb text-white text-[14px]">
                {p.name}
              </h3>
              <p className="mt-1 font-mono-jb text-[12px] text-white/45">
                {p.role}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA BAND                                                           */
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
          Want to build the calm with us?
        </h2>
        <p className="mt-5 font-mono-jb text-sm text-white/60 max-w-md mx-auto leading-relaxed">
          We're a small team hiring thoughtful people. Come help teams
          everywhere do their best work.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className={`group inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-orange-500/25 ${btnBase}`}
          >
            View open roles
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button
            className={`bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 text-sm font-mono-jb px-6 py-2.5 rounded-md backdrop-blur ${btnBase}`}
          >
            Get in touch
          </button>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE — no header (rendered by your router layout)                  */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      <AboutHero />
      <Story />
      <Stats />
      <Values />
      <Timeline />
      <Team />
      <CtaBand />
    </div>
  );
}
