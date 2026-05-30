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
    </div>
  );
}
