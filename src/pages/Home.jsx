import React, { useEffect, useRef, useState } from "react";
import {
  Network,
  Users,
  Zap,
  Paperclip,
  Bell,
  CircleCheck,
  Calendar,
  LayoutGrid,
  Folder,
  ArrowUp,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaSlack, FaAws, FaFirefoxBrowser } from "react-icons/fa6";

/* ------------------------------------------------------------------ */
/*  Social brand icons — inline SVG + path                             */
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

    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .animate-marquee { animation: marquee 28s linear infinite; }
    .marquee-wrap:hover .animate-marquee { animation-play-state: paused; }

    @keyframes floaty {
      0%,100% { transform: translateY(0); }
      50%     { transform: translateY(-8px); }
    }
    .floaty { animation: floaty 5s ease-in-out infinite; }

    /* scroll reveal */
    @keyframes fadeUp {
      0%   { opacity: 0; transform: translateY(18px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .reveal { opacity: 0; }
    .reveal.in { animation: fadeUp 0.7s cubic-bezier(.2,.7,.2,1) forwards; }

    /* hero load stagger */
    @keyframes heroIn {
      0%   { opacity: 0; transform: translateY(22px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .hero-in { opacity: 0; animation: heroIn 0.8s cubic-bezier(.2,.7,.2,1) forwards; }

    /* gentle pulse for the hub tile */
    @keyframes hubPulse {
      0%,100% { box-shadow: 0 0 24px rgba(255,255,255,0.18); }
      50%     { box-shadow: 0 0 38px rgba(255,255,255,0.40); }
    }
    .hub-pulse { animation: hubPulse 3s ease-in-out infinite; }

    /* hero aurora + ridge */
    @keyframes auroraPulse {
      0%,100% { opacity: 0.82; transform: scale(1); }
      50%     { opacity: 1;    transform: scale(1.05); }
    }
    .aurora-pulse { animation: auroraPulse 9s ease-in-out infinite; transform-origin: center 60%; }

    @keyframes ridgeShift {
      0%,100% { transform: translateX(-1.5%); }
      50%     { transform: translateX(1.5%); }
    }
    .ridge-shift { animation: ridgeShift 16s ease-in-out infinite; }

    ::selection { background: #ff5722; color: #000; }

    @media (prefers-reduced-motion: reduce) {
      .reveal, .hero-in { animation: none !important; opacity: 1 !important; transform: none !important; }
      .animate-marquee, .floaty, .hub-pulse, .aurora-pulse, .ridge-shift { animation: none !important; }
    }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll wrapper                                           */
/* ------------------------------------------------------------------ */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* shared button styles with hover lift */
const btnBase =
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 will-change-transform";

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */
const ChartLabel = ({ children, className = "", lineH = 90 }) => (
  <div
    className={`group absolute flex flex-col items-center text-white/55 transition-colors duration-300 hover:text-white ${className}`}
  >
    <span className="text-[10px] sm:text-[11px] font-mono-jb tracking-wide whitespace-nowrap mb-1">
      {children}
    </span>
    <ArrowUp
      className="w-3 h-3 text-white/45 group-hover:text-white transition-colors"
      strokeWidth={1.5}
    />
    <div
      className="w-px bg-gradient-to-b from-white/30 to-transparent mt-1 transition-all duration-300 group-hover:from-orange-300/70"
      style={{ height: lineH }}
    />
  </div>
);

const navItems = ["Home", "Pricing", "About Us", "Resources", "Case Studies"];

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080606] border border-white/5 rounded-sm min-h-[760px] flex flex-col">
      {/* atmospheric red/orange gradient field */}
      <div className="pointer-events-none absolute inset-0">
        {/* core aurora glow band */}
        <div
          className="aurora-pulse absolute inset-x-0 top-[34%] h-[52%]"
          style={{
            background:
              "radial-gradient(110% 90% at 50% 55%, rgba(255,60,0,0.95) 0%, rgba(210,25,0,0.6) 26%, rgba(130,12,0,0.28) 48%, transparent 70%)",
          }}
        />
        {/* warm side blooms */}
        <div
          className="absolute left-[4%] top-[42%] w-[40%] h-[42%] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,110,10,0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute right-[2%] top-[46%] w-[44%] h-[46%] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,150,30,0.5), transparent 70%)",
          }}
        />

        {/* top dark ridge — carves a wavy backlit skyline into the glow */}
        <svg
          className="ridge-shift absolute inset-x-0 top-[20%] w-[104%] -left-[2%] h-[40%]"
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          fill="#080606"
        >
          <path d="M0,0 H1200 V150 C1040,250 920,120 760,185 C620,242 500,135 360,200 C250,250 120,165 0,205 Z" />
        </svg>
        {/* bottom dark ridge */}
        <svg
          className="absolute inset-x-0 bottom-0 w-[104%] -left-[2%] h-[34%]"
          viewBox="0 0 1200 240"
          preserveAspectRatio="none"
          fill="#080606"
        >
          <path d="M0,240 H1200 V70 C1060,10 930,120 770,70 C640,30 520,110 380,70 C250,33 120,105 0,60 Z" />
        </svg>

        {/* solid edge fades */}
        <div
          className="absolute inset-x-0 top-0 h-[34%]"
          style={{
            background: "linear-gradient(to bottom, #080606 35%, transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[16%]"
          style={{
            background: "linear-gradient(to top, #080606 25%, transparent)",
          }}
        />
        {/* vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* NAV */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 pt-7">
        <div className="grid grid-cols-2 gap-[3px] transition-transform duration-500 hover:rotate-90">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="w-2 h-2 bg-white/90 rounded-[1px]" />
          ))}
        </div>
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-mono-jb text-white/70">
          {navItems.map((n) => (
            <a
              key={n}
              href="#"
              className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {n}
            </a>
          ))}
        </nav>
        <button
          className={`bg-[#161616] hover:bg-[#222] border border-white/10 hover:border-white/25 text-white text-[13px] font-mono-jb px-4 py-2 rounded-md ${btnBase}`}
        >
          Get Started
        </button>
      </header>

      {/* HERO COPY — sits in the upper band, above the ridge */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-14 sm:pt-16">
        <h1
          className="hero-in font-mono-jb text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.12] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.05s" }}
        >
          Your Work.
          <br />
          One Dashboard.
          <br />
          Zero Chaos.
        </h1>
        <p
          className="hero-in mt-6 text-white/65 font-mono-jb text-sm sm:text-[15px] max-w-md leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          One simple platform to manage your team, tasks, and workflows — all in
          one place.
        </p>
        <div
          className="hero-in mt-8 flex items-center gap-3"
          style={{ animationDelay: "0.35s" }}
        >
          <button
            className={`bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-orange-500/20 ${btnBase}`}
          >
            Get Started
          </button>
          <button
            className={`bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 text-sm font-mono-jb px-6 py-2.5 rounded-md backdrop-blur ${btnBase}`}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* CHART LABEL SKYLINE — lower band, ticks descend into the glow */}
      <div className="relative z-10 hidden sm:block flex-1">
        <div className="absolute inset-x-0 top-[42%] bottom-0">
          <ChartLabel className="left-[6%] top-[2%]" lineH={70}>
            Reports
          </ChartLabel>
          <ChartLabel className="left-[87%] top-0" lineH={64}>
            Analytics
          </ChartLabel>
          <ChartLabel className="left-[94%] top-[34%]" lineH={48}>
            Tracking
          </ChartLabel>

          <ChartLabel className="left-[13%] top-[30%]" lineH={104}>
            Dashboard
          </ChartLabel>
          <ChartLabel className="left-[24%] top-[44%]" lineH={86}>
            Projects
          </ChartLabel>
          <ChartLabel className="left-[33%] top-[26%]" lineH={120}>
            Tasks
          </ChartLabel>
          <ChartLabel className="left-[42%] top-[44%]" lineH={84}>
            Teams
          </ChartLabel>
          <ChartLabel className="left-[51%] top-[24%]" lineH={118}>
            Automation
          </ChartLabel>

          <ChartLabel className="left-[9%] top-[54%]" lineH={60}>
            Files
          </ChartLabel>
          <ChartLabel className="left-[19%] top-[62%]" lineH={52}>
            Integrations
          </ChartLabel>
          <ChartLabel className="left-[28%] top-[72%]" lineH={42}>
            Calendar
          </ChartLabel>
          <ChartLabel className="left-[37%] top-[82%]" lineH={34}>
            Notifications
          </ChartLabel>
          <ChartLabel className="left-[47%] top-[60%]" lineH={64}>
            Insights
          </ChartLabel>
          <ChartLabel className="left-[57%] top-[50%]" lineH={78}>
            Security
          </ChartLabel>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUSTED BY                                                         */
/* ------------------------------------------------------------------ */
function TrustedBy() {
  const logos = [
    { name: "Stroupe", icon: <span className="text-lg">∞</span> },
    { name: "Alexun", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Wation", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "Journey", icon: <Network className="w-4 h-4" /> },
    { name: "GrowthView", icon: <span className="font-serif italic">G</span> },
    { name: "AIVA", icon: <span className="text-lg">⏚</span> },
  ];
  const row = [...logos, ...logos, ...logos];

  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-12">
      <p className="text-center font-mono-jb text-white/80 text-lg mb-8">
        Trusted By
      </p>
      <div className="marquee-wrap relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 px-8">
          {row.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/35 hover:text-white/80 transition-colors duration-300 font-mono-jb text-base whitespace-nowrap cursor-default"
            >
              {l.icon}
              {l.name}
            </div>
          ))}
        </div>
        {/* edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080606] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080606] to-transparent" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURE TEXT (spotlight)                                           */
/* ------------------------------------------------------------------ */
function FeatureText() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-28 px-6">
      {/* spotlight cone */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 38%, rgba(255,150,40,0.45) 50%, transparent 62%)",
            filter: "blur(28px)",
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[30%] w-[60%] h-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,120,20,0.35), transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Reveal className="relative z-10 max-w-2xl mx-auto font-mono-jb text-xl sm:text-2xl leading-relaxed">
        <p className="text-white">
          If a task moves in <span className="text-pink-400">one place</span>,
          it moves everywhere. Use built-in triggers to automate{" "}
          <span className="text-amber-400">status updates</span>,{" "}
          <span className="text-green-400">team notifications</span>, and{" "}
          <span className="text-blue-400">report generation</span>
        </p>
        <p className="text-white mt-6">
          without writing a single line of code.
        </p>

        <p className="text-white/45 mt-10">
          Check your team's progress in a glance.
        </p>

        <p className="text-white/45 mt-6">
          You can see <span className="text-amber-400">who is busy</span>,{" "}
          <span className="text-white">what is finished</span>, and{" "}
          <span className="text-green-400">what needs to be done next.</span>
        </p>

        <p className="text-white/45 mt-6">
          No more guessing if a project is on track.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  THINGS YOU CAN DO                                                  */
/* ------------------------------------------------------------------ */
function ThingsYouCanDo() {
  const icons = [
    { el: <Network className="w-6 h-6" />, c: "text-blue-400" },
    { el: <Users className="w-6 h-6" />, c: "text-blue-500" },
    { el: <Zap className="w-6 h-6" />, c: "text-green-400" },
    { el: <Paperclip className="w-6 h-6" />, c: "text-pink-400", active: true },
    { el: <Bell className="w-6 h-6" />, c: "text-yellow-400" },
    { el: <CircleCheck className="w-6 h-6" />, c: "text-orange-400" },
    { el: <Calendar className="w-6 h-6" />, c: "text-emerald-400" },
    { el: <LayoutGrid className="w-6 h-6" />, c: "text-purple-400" },
    { el: <Folder className="w-6 h-6" />, c: "text-red-500" },
  ];

  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-20 px-6">
      <h2 className="text-center font-mono-jb text-white text-xl sm:text-2xl mb-14">
        Things You Can Do With Brand
      </h2>
      <Reveal className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {icons.map((ic, i) => (
          <div key={i} className="group relative flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 ${ic.c} ${
                ic.active
                  ? "bg-pink-500/15 ring-1 ring-pink-500/50 shadow-[0_0_25px_rgba(236,72,153,0.4)]"
                  : "group-hover:bg-white/5 group-hover:shadow-[0_0_22px_rgba(255,255,255,0.10)]"
              }`}
            >
              {ic.el}
            </div>
            {ic.active && (
              <div className="absolute top-14 flex items-center gap-1.5 bg-[#161616] border border-white/10 text-white/80 text-[11px] font-mono-jb px-2.5 py-1.5 rounded-md whitespace-nowrap">
                <span className="text-white/40">≡</span> Centralized Files
              </div>
            )}
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXISTING STACK                                                     */
/* ------------------------------------------------------------------ */
function StackOrb({ icon, delay = 0 }) {
  return (
    <div
      className="floaty group w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur flex items-center justify-center transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:shadow-[0_0_24px_rgba(255,120,40,0.30)]"
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="transition-transform duration-300 group-hover:scale-125">
        {icon}
      </span>
    </div>
  );
}

function ExistingStack() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[70%]"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(255,90,10,0.45), rgba(180,30,0,0.2) 45%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <Reveal className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div>
          <h2 className="font-mono-jb text-3xl sm:text-4xl text-white">
            Your Existing Stack,{" "}
            <span className="text-orange-500">Unified.</span>
          </h2>
          <div className="mt-4 h-px w-2/3 bg-gradient-to-r from-orange-500/60 to-transparent" />
          <p className="mt-5 text-white/55 font-mono-jb text-sm max-w-sm leading-relaxed">
            Plays well with others. Connect Flowpilot to the tools your team
            already uses to eliminate context switching.
          </p>
          <button
            className={`mt-7 bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-white/10 ${btnBase}`}
          >
            Get Started
          </button>
        </div>

        {/* orbiting integration logos */}
        <div className="relative h-72">
          <div className="absolute left-[10%] top-[10%]">
            <StackOrb
              icon={<FaGithub className="w-5 h-5 text-white/80" />}
              delay={0}
            />
          </div>
          <div className="absolute left-[42%] top-0">
            <StackOrb
              icon={<FaSlack className="w-5 h-5 text-[#e01e5a]" />}
              delay={0.6}
            />
          </div>
          <div className="absolute right-[6%] top-[12%]">
            <StackOrb
              icon={<FaFirefoxBrowser className="w-5 h-5 text-orange-500" />}
              delay={1.2}
            />
          </div>
          <div className="absolute left-[6%] top-[50%]">
            <StackOrb
              icon={<Code2 className="w-5 h-5 text-blue-400" />}
              delay={0.9}
            />
          </div>
          <div className="absolute left-[44%] top-[48%]">
            <StackOrb
              icon={<FaAws className="w-5 h-5 text-orange-300" />}
              delay={0.3}
            />
          </div>
          <div className="absolute right-[8%] top-[52%]">
            <StackOrb
              icon={<Sparkles className="w-5 h-5 text-red-500" />}
              delay={1.5}
            />
          </div>
          <div className="absolute left-[28%] bottom-0">
            <StackOrb
              icon={<Sparkles className="w-5 h-5 text-orange-400" />}
              delay={0.45}
            />
          </div>
          <div className="absolute right-[24%] bottom-[2%]">
            <StackOrb
              icon={<Code2 className="w-5 h-5 text-blue-500" />}
              delay={1.1}
            />
          </div>
          {/* connecting dots */}
          <div className="absolute left-[33%] top-[8%] w-1 h-1 rounded-full bg-white/30" />
          <div className="absolute right-[28%] top-[16%] w-1 h-1 rounded-full bg-white/30" />
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                       */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const steps = [
    {
      n: "STEP 01",
      t: "Feed it your knowledge",
      d: "Connect your docs, website, help center, or paste in your own content. Kova learns your product, your tone, and your answers in minutes — not weeks.",
    },
    {
      n: "STEP 02",
      t: "Customize how it shows up",
      d: "Set the personality, the fallback rules, the escalation triggers. Make it sound like your brand, not like a generic bot someone bought off a shelf.",
    },
    {
      n: "STEP 03",
      t: "Drop it anywhere",
      d: "One line of code on your website. Native SDKs for iOS and Android. API access for custom builds. Kova lives wherever your users are.",
    },
    {
      n: "STEP 04",
      t: "It gets smarter as it runs",
      d: "Every conversation teaches Kova what your users actually ask, where they get stuck, and what answers work. It improves automatically without you touching anything.",
    },
  ];

  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-12">
      {/* big pixel watermark + gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-pixel text-white/[0.04] text-[120px] sm:text-[200px] whitespace-nowrap select-none">
          10 Mins
        </span>
      </div>
      <div
        className="pointer-events-none absolute -left-10 top-1/3 w-[55%] h-[50%] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,120,20,0.35), rgba(120,200,80,0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="font-mono-jb text-3xl sm:text-4xl text-white">
            How It Works
          </h2>
          <p className="mt-4 text-white/55 font-mono-jb text-sm max-w-xs leading-relaxed">
            One simple platform to manage your team, tasks, and workflows — all
            in one place.
          </p>
        </div>

        {/* timeline + cards */}
        <div className="relative pl-7">
          <div className="absolute left-1 top-2 bottom-2 w-px bg-white/15" />
          <div className="space-y-5">
            {steps.map((s, i) => (
              <Reveal key={i}>
                <div className="group relative">
                  <span className="absolute -left-[26px] top-3 w-2 h-2 rounded-full bg-white transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                  <div className="bg-white rounded-md p-5 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:ring-1 group-hover:ring-orange-400/40">
                    <p className="text-[10px] font-mono-jb text-orange-500 tracking-widest">
                      {s.n}
                    </p>
                    <h3 className="mt-2 font-mono-jb text-[15px] font-semibold text-neutral-900">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-neutral-500 font-mono-jb">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONNECTED CARD                                                     */
/* ------------------------------------------------------------------ */
function ConnectedSection() {
  const checks = [
    "Leads and conversations flow in automatically",
    "Kova creates tickets, adds context, assigns priority",
    "Kova knows who the user is and what they've done",
    "Teams escalations and alerts land where your team already reads",
  ];

  const grid = [
    { name: "Notion", c: "bg-white text-black", big: false },
    { name: "Confluence", c: "text-blue-400" },
    { name: "Copilot", c: "text-white/70" },
    { name: "pipedrive", c: "text-white/80" },
    { name: "Kovo", c: "bg-white text-black", center: true },
    { name: "Intercom", c: "text-blue-400" },
    { name: "Segment", c: "text-green-400" },
    { name: "Marketo", c: "text-white/70" },
    { name: "zendesk", c: "text-green-300" },
  ];

  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 bottom-0 w-[70%] h-[80%] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 70% 80%, rgba(255,60,0,0.5), rgba(150,20,0,0.2) 45%, transparent 70%)",
          }}
        />
      </div>

      <Reveal className="relative z-10 max-w-5xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur p-8 sm:p-10 grid md:grid-cols-2 gap-10 transition-colors duration-300 hover:border-white/20">
        <div>
          <h2 className="font-mono-jb text-3xl sm:text-[2.1rem] leading-tight text-white">
            Connected to everything. Dependent on nothing.
          </h2>
          <p className="mt-5 text-white/55 font-mono-jb text-sm max-w-sm leading-relaxed">
            Kova pulls context from your existing tools and pushes data where
            your team already lives — no new tabs, no new workflows.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button
              className={`bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-5 py-2 rounded-md hover:shadow-lg hover:shadow-white/10 ${btnBase}`}
            >
              Get Started
            </button>
            <button
              className={`bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/25 text-sm font-mono-jb px-5 py-2 rounded-md ${btnBase}`}
            >
              Learn More
            </button>
          </div>

          <ul className="mt-8 space-y-3">
            {checks.map((c, i) => (
              <li
                key={i}
                className="group flex items-start gap-2.5 text-white/65 hover:text-white/90 transition-colors duration-200 font-mono-jb text-[12px]"
              >
                <CircleCheck className="w-4 h-4 text-white/40 group-hover:text-orange-400 transition-colors duration-200 shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* integration grid */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {grid.map((g, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg border border-white/10 flex items-center justify-center font-mono-jb text-[11px] cursor-default transition-all duration-300 hover:-translate-y-1 ${
                  g.center
                    ? "bg-white text-black font-bold ring-1 ring-white hub-pulse"
                    : g.c?.includes("bg-white")
                      ? "bg-white text-black hover:shadow-lg"
                      : `bg-white/[0.03] ${g.c} hover:bg-white/[0.07] hover:border-white/25`
                }`}
              >
                {g.center ? "◧ Kovo" : g.name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
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
        <p className="font-mono-jb text-[11px] text-white/35">
          © 2026 Rarely. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      <div>
        <Hero />
        <TrustedBy />
        <FeatureText />
        <ThingsYouCanDo />
        <ExistingStack />
        <HowItWorks />
        <ConnectedSection />
        <Footer />
      </div>
    </div>
  );
}
