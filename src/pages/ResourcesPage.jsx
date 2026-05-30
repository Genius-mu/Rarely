import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  FileText,
  LayoutTemplate,
  PlayCircle,
  ArrowRight,
  ArrowUpRight,
  Search,
} from "lucide-react";

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

/* type metadata: icon + accent */
const TYPE_META = {
  Guide: {
    icon: BookOpen,
    color: "text-orange-400",
    grad: "from-orange-500/30 to-red-600/20",
  },
  Article: {
    icon: FileText,
    color: "text-blue-400",
    grad: "from-blue-500/30 to-indigo-600/20",
  },
  Template: {
    icon: LayoutTemplate,
    color: "text-emerald-400",
    grad: "from-emerald-500/30 to-teal-600/20",
  },
  Webinar: {
    icon: PlayCircle,
    color: "text-pink-400",
    grad: "from-pink-500/30 to-rose-600/20",
  },
};

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function ResourcesHero({ query, setQuery }) {
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
          RESOURCES
        </span>
        <h1
          className="hero-in font-mono-jb text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.12] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.12s" }}
        >
          Guides, playbooks
          <br />& ideas.
        </h1>
        <p
          className="hero-in mt-6 text-white/60 font-mono-jb text-sm sm:text-[15px] max-w-md leading-relaxed"
          style={{ animationDelay: "0.24s" }}
        >
          Everything we've learned about running calmer, faster teams — free to
          read, steal, and ship.
        </p>
        <div
          className="hero-in mt-9 w-full max-w-md"
          style={{ animationDelay: "0.36s" }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur px-4 py-2.5 focus-within:border-white/30 transition-colors">
            <Search className="w-4 h-4 text-white/40 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources…"
              className="w-full bg-transparent outline-none font-mono-jb text-[13px] text-white placeholder:text-white/35"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURED                                                           */
/* ------------------------------------------------------------------ */
function Featured({ item }) {
  const meta = TYPE_META[item.type];
  const Icon = meta.icon;
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 px-6 sm:px-10 pt-4 pb-10">
      <Reveal className="max-w-5xl mx-auto">
        <a
          href="#"
          className="group grid md:grid-cols-2 rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] hover:border-white/25 transition-all duration-300"
        >
          <div
            className={`relative min-h-[200px] bg-gradient-to-br ${meta.grad} flex items-center justify-center`}
          >
            <Icon
              className={`w-14 h-14 ${meta.color} transition-transform duration-500 group-hover:scale-110`}
              strokeWidth={1.25}
            />
            <span className="absolute top-4 left-4 font-mono-jb text-[10px] tracking-widest text-white/70 bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
              FEATURED
            </span>
          </div>
          <div className="p-7 sm:p-9 flex flex-col justify-center">
            <span
              className={`font-mono-jb text-[11px] tracking-widest ${meta.color}`}
            >
              {item.type.toUpperCase()} · {item.readTime}
            </span>
            <h3 className="mt-3 font-mono-jb text-xl sm:text-2xl text-white leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 font-mono-jb text-[13px] leading-relaxed text-white/55">
              {item.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-mono-jb text-[13px] text-white group-hover:text-orange-400 transition-colors">
              Read now{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GRID + FILTERS                                                     */
/* ------------------------------------------------------------------ */
const resources = [
  {
    type: "Guide",
    title: "The calm team operating system",
    excerpt:
      "A step-by-step framework for running projects without the constant context-switching.",
    readTime: "12 min read",
  },
  {
    type: "Article",
    title: "Why your status meetings are a tax",
    excerpt:
      "And the async habits that quietly replace them — with examples you can copy today.",
    readTime: "6 min read",
  },
  {
    type: "Template",
    title: "Quarterly planning, in one doc",
    excerpt:
      "Our internal planning template, free to duplicate. Goals, bets, and owners on a page.",
    readTime: "Template",
  },
  {
    type: "Webinar",
    title: "Automations 101: triggers that save hours",
    excerpt:
      "A 30-minute walkthrough of the automation patterns our power users rely on.",
    readTime: "31 min watch",
  },
  {
    type: "Guide",
    title: "Onboarding a team in a week",
    excerpt:
      "How to migrate your tools and get everyone productive in five days, not five weeks.",
    readTime: "9 min read",
  },
  {
    type: "Article",
    title: "The cost of a tab you forgot to close",
    excerpt:
      "A short, slightly unscientific look at what context-switching really costs your focus.",
    readTime: "4 min read",
  },
  {
    type: "Template",
    title: "Incident retro, no blame",
    excerpt:
      "A retrospective template that keeps the conversation on systems, not people.",
    readTime: "Template",
  },
  {
    type: "Webinar",
    title: "Scaling from 10 to 100 without chaos",
    excerpt:
      "Leaders from three teams share what broke — and what they'd do differently.",
    readTime: "45 min watch",
  },
];

const cats = ["All", "Guides", "Articles", "Templates", "Webinars"];

function ResourceCard({ item }) {
  const meta = TYPE_META[item.type];
  const Icon = meta.icon;
  return (
    <a
      href="#"
      className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex w-9 h-9 rounded-lg bg-white/5 items-center justify-center ${meta.color}`}
        >
          <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
        </span>
        <ArrowUpRight className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <span
        className={`mt-5 font-mono-jb text-[10px] tracking-widest ${meta.color}`}
      >
        {item.type.toUpperCase()} · {item.readTime}
      </span>
      <h3 className="mt-2 font-mono-jb text-[15px] text-white leading-snug group-hover:text-white">
        {item.title}
      </h3>
      <p className="mt-2.5 font-mono-jb text-[12.5px] leading-relaxed text-white/50 flex-1">
        {item.excerpt}
      </p>
    </a>
  );
}

function ResourceGrid({ query }) {
  const [active, setActive] = useState("All");
  const byCat =
    active === "All"
      ? resources
      : resources.filter((r) => r.type + "s" === active);
  const q = query.trim().toLowerCase();
  const list = q
    ? byCat.filter((r) => (r.title + " " + r.excerpt).toLowerCase().includes(q))
    : byCat;

  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-12 sm:py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {cats.map((c) => (
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

        {list.length === 0 ? (
          <p className="font-mono-jb text-sm text-white/45 py-16 text-center">
            No resources match “{query}”.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((item, i) => (
              <Reveal
                key={item.title}
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <ResourceCard item={item} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NEWSLETTER                                                         */
/* ------------------------------------------------------------------ */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 120%, rgba(255,60,0,0.4), rgba(150,20,0,0.12) 40%, transparent 70%)",
        }}
      />
      <Reveal className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white leading-tight">
          The playbook, in your inbox.
        </h2>
        <p className="mt-4 font-mono-jb text-sm text-white/60 leading-relaxed">
          One thoughtful email a month. New guides, no spam, unsubscribe
          anytime.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSent(false);
            }}
            placeholder="you@team.com"
            className="flex-1 rounded-md border border-white/12 bg-white/[0.03] px-4 py-2.5 outline-none font-mono-jb text-[13px] text-white placeholder:text-white/35 focus:border-white/30 transition-colors"
          />
          <button
            onClick={() => email.includes("@") && setSent(true)}
            className={`bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-5 py-2.5 rounded-md whitespace-nowrap ${btnBase}`}
          >
            {sent ? "Subscribed ✓" : "Subscribe"}
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
/*  PAGE — no header                                                   */
/* ------------------------------------------------------------------ */
export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      <ResourcesHero query={query} setQuery={setQuery} />
      <Featured item={resources[0]} />
      <ResourceGrid query={query} />
      <Newsletter />
      <Footer />
    </div>
  );
}
