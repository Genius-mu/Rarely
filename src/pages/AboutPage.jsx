import { useEffect, useRef, useState } from "react";
import { Target, Heart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

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
/*  FOOTER (remove if it already lives in your router layout)          */
/* ------------------------------------------------------------------ */
function Footer() {
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
          {[GlobeIcon, XIcon, InstagramIcon, LinkedInIcon].map((Ic, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:scale-110"
            >
              <Ic />
            </a>
          ))}
        </div>
        <p className="font-mono-jb text-[11px] text-white/35">
          © 2026 Rarely. All Rights Reserved.
        </p>
      </div>
    </footer>
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
      <Footer />
    </div>
  );
}
