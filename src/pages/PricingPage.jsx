import { useEffect, useRef, useState } from "react";
import {
  CircleCheck,
  Minus,
  Plus,
  Check,
  ArrowRight,
  User,
  Zap,
  Building2,
  Sparkles,
} from "lucide-react";

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

    @keyframes fadeUp { 0%{opacity:0;transform:translateY(18px);} 100%{opacity:1;transform:translateY(0);} }
    .reveal { opacity: 0; }
    .reveal.in { animation: fadeUp 0.7s cubic-bezier(.2,.7,.2,1) forwards; }

    @keyframes heroIn { 0%{opacity:0;transform:translateY(22px);} 100%{opacity:1;transform:translateY(0);} }
    .hero-in { opacity: 0; animation: heroIn 0.8s cubic-bezier(.2,.7,.2,1) forwards; }

    @keyframes navIn { 0%{opacity:0;transform:translateY(-8px);} 100%{opacity:1;transform:translateY(0);} }
    .nav-in { opacity: 0; animation: navIn 0.5s cubic-bezier(.2,.7,.2,1) forwards; }

    @keyframes auroraPulse { 0%,100%{opacity:0.8;transform:scale(1);} 50%{opacity:1;transform:scale(1.05);} }
    .aurora-pulse { animation: auroraPulse 9s ease-in-out infinite; transform-origin: center 40%; }

    @keyframes badgeGlow { 0%,100%{box-shadow:0 0 18px rgba(255,90,0,0.35);} 50%{box-shadow:0 0 30px rgba(255,90,0,0.6);} }
    .badge-glow { animation: badgeGlow 3s ease-in-out infinite; }

    ::selection { background: #ff5722; color: #000; }

    @media (prefers-reduced-motion: reduce) {
      .reveal, .hero-in, .nav-in { animation: none !important; opacity: 1 !important; transform: none !important; }
      .aurora-pulse, .badge-glow { animation: none !important; }
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

// const navItems = ["Home", "Pricing", "About Us", "Resources", "Case Studies"];

// /* ------------------------------------------------------------------ */
// /*  SITE HEADER                                                        */
// /* ------------------------------------------------------------------ */
// function SiteHeader({ current = "Pricing" }) {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled || open
//           ? "bg-[#0a0807]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div
//         className={`max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 transition-all duration-300 ${
//           scrolled ? "h-14" : "h-16 sm:h-[72px]"
//         }`}
//       >
//         <a href="#" className="group flex items-center gap-2.5 shrink-0">
//           <div className="grid grid-cols-2 gap-[3px] transition-transform duration-500 ease-out group-hover:rotate-[225deg]">
//             {[0, 1, 2, 3].map((i) => (
//               <span
//                 key={i}
//                 className="w-2 h-2 bg-white/90 rounded-[1px] transition-colors duration-300 group-hover:bg-orange-400"
//                 style={{ transitionDelay: `${i * 50}ms` }}
//               />
//             ))}
//           </div>
//           <span className="font-mono-jb text-white text-sm tracking-tight">
//             Rarely
//           </span>
//         </a>

//         <nav className="hidden md:flex items-center gap-7 text-[13px] font-mono-jb text-white/70">
//           {navItems.map((n, i) => (
//             <a
//               key={n}
//               href="#"
//               className={`nav-in relative transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-gradient-to-r after:from-orange-400 after:to-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
//                 n === current
//                   ? "text-white after:w-full"
//                   : "text-white/70 after:w-0"
//               }`}
//               style={{ animationDelay: `${0.15 + i * 0.07}s` }}
//             >
//               {n}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <button
//             className={`group hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-[13px] font-mono-jb px-4 py-2 rounded-md hover:shadow-lg hover:shadow-orange-500/20 ${btnBase}`}
//           >
//             Get Started
//             <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
//           </button>

//           <button
//             onClick={() => setOpen((o) => !o)}
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             className="md:hidden relative w-10 h-10 -mr-2 flex items-center justify-center rounded-md hover:bg-white/5 transition-colors"
//           >
//             <span className="relative block w-5 h-3.5">
//               <span
//                 className={`absolute left-0 block h-[1.5px] w-5 bg-white rounded transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
//               />
//               <span
//                 className={`absolute left-0 top-1.5 block h-[1.5px] w-5 bg-white rounded transition-all duration-200 ${open ? "opacity-0 translate-x-2" : "opacity-100"}`}
//               />
//               <span
//                 className={`absolute left-0 block h-[1.5px] w-5 bg-white rounded transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
//               />
//             </span>
//           </button>
//         </div>
//       </div>

//       <div
//         className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out ${open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"}`}
//       >
//         <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
//           {navItems.map((n, i) => (
//             <a
//               key={n}
//               href="#"
//               onClick={() => setOpen(false)}
//               className={`font-mono-jb text-[15px] py-2.5 border-b border-white/5 transition-all duration-300 hover:translate-x-1 hover:text-white ${n === current ? "text-white" : "text-white/75"}`}
//               style={{
//                 transitionDelay: open ? `${i * 45}ms` : "0ms",
//                 opacity: open ? 1 : 0,
//                 transform: open ? "translateX(0)" : "translateX(-8px)",
//               }}
//             >
//               {n}
//             </a>
//           ))}
//           <button
//             onClick={() => setOpen(false)}
//             className={`mt-4 inline-flex items-center justify-center gap-1.5 bg-white text-black text-sm font-mono-jb px-4 py-2.5 rounded-md ${btnBase}`}
//           >
//             Get Started <ArrowRight className="w-4 h-4" />
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }

/* ------------------------------------------------------------------ */
/*  PRICING HERO + BILLING TOGGLE                                      */
/* ------------------------------------------------------------------ */
function PricingHero({ annual, setAnnual }) {
  return (
    <section className="relative overflow-hidden bg-[#080606] border border-white/5 rounded-sm">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="aurora-pulse absolute inset-x-0 -top-[10%] h-[70%]"
          style={{
            background:
              "radial-gradient(90% 70% at 50% 20%, rgba(255,60,0,0.7) 0%, rgba(190,20,0,0.35) 30%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[30%]"
          style={{
            background: "linear-gradient(to bottom, #080606 30%, transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[40%]"
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
          PRICING
        </span>
        <h1
          className="hero-in font-mono-jb text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.12] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.12s" }}
        >
          Pricing that scales
          <br />
          with your team.
        </h1>
        <p
          className="hero-in mt-6 text-white/60 font-mono-jb text-sm sm:text-[15px] max-w-md leading-relaxed"
          style={{ animationDelay: "0.24s" }}
        >
          Start free. Upgrade when you're ready. No hidden fees, no per-seat
          surprises — just one simple platform.
        </p>

        {/* billing toggle */}
        <div
          className="hero-in mt-9 inline-flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur"
          style={{ animationDelay: "0.36s" }}
        >
          <button
            onClick={() => setAnnual(false)}
            className={`font-mono-jb text-[13px] px-4 py-1.5 rounded-full transition-all duration-300 ${
              !annual ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`font-mono-jb text-[13px] px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 ${
              annual ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            Annually
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${annual ? "bg-orange-500 text-white" : "bg-orange-500/20 text-orange-300"}`}
            >
              -20%
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING TIERS                                                      */
/* ------------------------------------------------------------------ */
const tiers = [
  {
    name: "Starter",
    icon: User,
    tagline: "For individuals organizing their own work.",
    priceM: 0,
    priceA: 0,
    cta: "Get Started",
    features: [
      "1 workspace",
      "Up to 3 projects",
      "Basic dashboard & tasks",
      "Community support",
      "7-day activity history",
    ],
  },
  {
    name: "Growth",
    icon: Zap,
    tagline: "For growing teams that need automation.",
    priceM: 24,
    priceA: 19,
    cta: "Start Free Trial",
    featured: true,
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "Up to 20 team members",
      "Built-in automations & triggers",
      "All integrations included",
      "Priority email support",
      "Unlimited history & reports",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    tagline: "For organizations operating at scale.",
    custom: true,
    cta: "Contact Sales",
    features: [
      "Everything in Growth",
      "Unlimited members",
      "SSO & SAML, audit logs",
      "Dedicated success manager",
      "99.9% uptime SLA",
      "Custom data residency",
    ],
  },
];

function PriceBlock({ tier, annual }) {
  if (tier.custom) {
    return (
      <div className="flex items-baseline gap-1">
        <span className="font-mono-jb text-4xl font-medium text-white">
          Custom
        </span>
      </div>
    );
  }
  const price = annual ? tier.priceA : tier.priceM;
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-jb text-4xl font-medium text-white">
          ${price}
        </span>
        <span className="font-mono-jb text-sm text-white/45">/mo</span>
      </div>
      <p className="mt-1 h-4 font-mono-jb text-[11px] text-white/40">
        {price === 0
          ? "free forever"
          : annual
            ? "billed annually"
            : "billed monthly"}
      </p>
    </div>
  );
}

function Tiers({ annual }) {
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 px-6 sm:px-10 pb-24 -mt-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
        {tiers.map((tier, i) => {
          const Icon = tier.icon;
          return (
            <Reveal key={tier.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div
                className={`relative h-full flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  tier.featured
                    ? "border-orange-500/40 bg-gradient-to-b from-orange-500/[0.10] to-white/[0.02] shadow-[0_0_50px_rgba(255,70,0,0.18)] md:-mt-4"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                {tier.badge && (
                  <span className="badge-glow absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-orange-500 text-white text-[10px] font-mono-jb tracking-wide px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> {tier.badge}
                  </span>
                )}

                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${tier.featured ? "bg-orange-500/20 text-orange-400" : "bg-white/5 text-white/70"}`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-mono-jb text-lg text-white">
                    {tier.name}
                  </h3>
                </div>

                <p className="mt-3 font-mono-jb text-[12.5px] text-white/50 leading-relaxed min-h-[34px]">
                  {tier.tagline}
                </p>

                <div className="mt-6 mb-6">
                  <PriceBlock tier={tier} annual={annual} />
                </div>

                <button
                  className={`w-full text-sm font-mono-jb px-4 py-2.5 rounded-md ${btnBase} ${
                    tier.featured
                      ? "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-orange-500/25"
                      : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10 hover:border-white/25"
                  }`}
                >
                  {tier.cta}
                </button>

                <ul className="mt-7 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 font-mono-jb text-[12.5px] text-white/70"
                    >
                      <CircleCheck
                        className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "text-orange-400" : "text-white/40"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPARISON TABLE                                                   */
/* ------------------------------------------------------------------ */
const compare = [
  { label: "Projects", vals: ["3", "Unlimited", "Unlimited"] },
  { label: "Team members", vals: ["1", "Up to 20", "Unlimited"] },
  { label: "Automations & triggers", vals: [false, true, true] },
  { label: "Integrations", vals: ["—", "All", "All + custom"] },
  { label: "Reports & analytics", vals: ["Basic", "Advanced", "Advanced"] },
  { label: "Activity history", vals: ["7 days", "Unlimited", "Unlimited"] },
  { label: "SSO & SAML", vals: [false, false, true] },
  { label: "Audit logs", vals: [false, false, true] },
  { label: "Uptime SLA", vals: [false, false, "99.9%"] },
  { label: "Support", vals: ["Community", "Priority", "Dedicated"] },
];

function Cell({ v }) {
  if (v === true) return <Check className="w-4 h-4 text-orange-400 mx-auto" />;
  if (v === false) return <Minus className="w-4 h-4 text-white/20 mx-auto" />;
  return <span className="font-mono-jb text-[12.5px] text-white/70">{v}</span>;
}

function ComparisonTable() {
  return (
    <section className="relative bg-[#080606] border-x border-b border-white/5 overflow-hidden py-24 px-6 sm:px-10">
      <div
        className="pointer-events-none absolute -right-20 top-0 w-[50%] h-[60%] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,10,0.3), transparent 70%)",
        }}
      />
      <Reveal className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white text-center">
          Compare every plan
        </h2>
        <p className="mt-3 text-center font-mono-jb text-sm text-white/50">
          The full breakdown, feature by feature.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left font-mono-jb text-[12px] text-white/40 font-normal pb-4 pl-1">
                  Features
                </th>
                {["Starter", "Growth", "Enterprise"].map((p) => (
                  <th
                    key={p}
                    className={`font-mono-jb text-[13px] font-medium pb-4 px-4 text-center ${p === "Growth" ? "text-orange-400" : "text-white/80"}`}
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((row, i) => (
                <tr key={row.label} className="group">
                  <td
                    className={`font-mono-jb text-[12.5px] text-white/65 py-3.5 pl-1 border-t border-white/5 ${i === 0 ? "border-t-0" : ""}`}
                  >
                    {row.label}
                  </td>
                  {row.vals.map((v, j) => (
                    <td
                      key={j}
                      className={`text-center py-3.5 px-4 border-t border-white/5 transition-colors ${i === 0 ? "border-t-0" : ""} ${j === 1 ? "bg-orange-500/[0.04] group-hover:bg-orange-500/[0.08]" : "group-hover:bg-white/[0.02]"}`}
                    >
                      <Cell v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION                                                      */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade at any time from your billing settings — changes are prorated automatically, so you only pay for what you use.",
  },
  {
    q: "Is there really a free plan?",
    a: "Always. The Starter plan is free forever for individuals, with no credit card required. Upgrade only when your team outgrows it.",
  },
  {
    q: "What happens when my trial ends?",
    a: "Your Growth trial runs for 14 days. When it ends you can add a payment method to continue, or drop back to the free Starter plan — your data stays intact either way.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "We do. Reach out to our team and we'll get you set up with discounted or sponsored access depending on your organization.",
  },
  {
    q: "How does annual billing save me money?",
    a: "Paying yearly drops the per-month rate by 20% compared to monthly billing. You're charged once for the year and can still add seats anytime.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-mono-jb text-[15px] transition-colors ${isOpen ? "text-white" : "text-white/80 group-hover:text-white"}`}
        >
          {item.q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/15 transition-all duration-300 ${isOpen ? "rotate-180 bg-orange-500/20 border-orange-500/40" : "group-hover:border-white/30"}`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-orange-400" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-white/70" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-5 pr-10 font-mono-jb text-[13px] leading-relaxed text-white/55">
          {item.a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-[#080606] border-x border-b border-white/5 py-24 px-6 sm:px-10">
      <Reveal className="max-w-3xl mx-auto">
        <h2 className="font-mono-jb text-2xl sm:text-3xl text-white text-center">
          Frequently asked questions
        </h2>
        <div className="mt-10">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
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
          Still deciding? Start for free.
        </h2>
        <p className="mt-5 font-mono-jb text-sm text-white/60 max-w-md mx-auto leading-relaxed">
          No credit card, no commitment. Set up your workspace in minutes and
          upgrade only when you're ready.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className={`group inline-flex items-center gap-1.5 bg-white hover:bg-white/90 text-black text-sm font-mono-jb px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-orange-500/25 ${btnBase}`}
          >
            Get Started
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
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Fonts />
      {/* <SiteHeader current="Pricing" /> */}
      <div>
        <PricingHero annual={annual} setAnnual={setAnnual} />
        <Tiers annual={annual} />
        <ComparisonTable />
        <FAQ />
        <CtaBand />
      </div>
    </div>
  );
}
