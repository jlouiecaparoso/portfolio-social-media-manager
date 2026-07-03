import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Facebook, Github, ExternalLink, Megaphone, PenTool, TrendingUp, Video, Calendar, Users, Menu, X } from "lucide-react";

const HERO_IMG = "/profile.png";
const ABOUT_IMG = "/profile.png";

const focusAreas = [
  {
    title: "End-to-End Content Creation",
    tag: "Content",
    year: "Core",
    platform: "Reels · Graphics · Stories",
    result: "Plan → create → publish",
    resultColor: "#4f6d5a",
    desc: "I plan, design, and publish social content — reels, graphics, and stories — using Canva and CapCut. As Social Media Manager at No Boundaries Marketing Group, I produced and scheduled content while keeping the brand voice consistent across platforms.",
    deliverables: ["Content planning", "Caption writing", "Graphic design", "Video editing"],
  },
  {
    title: "Scheduling & Publishing",
    tag: "Workflow",
    year: "Core",
    platform: "Meta Suite · Schedulers",
    result: "Consistent posting",
    resultColor: "#c08a2d",
    desc: "I keep a steady, organized posting rhythm using scheduling tools and content calendars, so brands stay active and consistent without scrambling for last-minute posts. I track platform updates and trends to keep content relevant.",
    deliverables: ["Content calendars", "Post scheduling", "Trend tracking", "Brand consistency"],
  },
  {
    title: "Community Engagement",
    tag: "Engagement",
    year: "Core",
    platform: "Comments · DMs",
    result: "Active community care",
    resultColor: "#3c5a78",
    desc: "I monitor engagement and respond to comments and messages to keep communities active and conversations friendly. Built on real experience managing online conversations across remote roles in the US and Canada.",
    deliverables: ["Comment & DM replies", "Reputation monitoring", "Audience interaction", "Response handling"],
  },
  {
    title: "Marketing & Branding Support",
    tag: "Marketing",
    year: "Core",
    platform: "Social · Web · Print",
    result: "Consistent branding",
    resultColor: "#a8341f",
    desc: "At LetzMarket I supported marketing campaigns and content creation across social media, web, and print, collaborating with the creative team to maintain consistent branding and keep operations running smoothly.",
    deliverables: ["Campaign support", "Creative collaboration", "Brand consistency", "Admin coordination"],
  },
];

const capabilities = [
  { icon: PenTool, label: "Content Creation", items: ["Reels & short-form video", "Graphics & static posts", "Caption writing", "Stories design"] },
  { icon: Calendar, label: "Content Planning", items: ["Content calendars", "Posting schedules", "Campaign timelines", "Trend tracking"] },
  { icon: Video, label: "Design & Editing", items: ["Canva", "Photoshop (basics)", "CapCut video editing", "Mobile editing tools"] },
  { icon: Users, label: "Community", items: ["Comment & DM management", "Audience engagement", "Response handling", "Reputation monitoring"] },
  { icon: TrendingUp, label: "Strategy & Consistency", items: ["Social media strategy", "Brand voice consistency", "Platform best practices", "Trend forecasting"] },
  { icon: Megaphone, label: "Tools & Platforms", items: ["Meta Business Suite", "Scheduling tools", "Instagram & Facebook", "TikTok & short-form"] },
];

const timeline = [
  { year: "2025", role: "Assistant Marketing Coordinator / Admin Staff", org: "LetzMarket", note: "Digital Marketing · Canada (Remote)" },
  { year: "2024–2025", role: "Social Media Manager", org: "No Boundaries Marketing Group", note: "Digital Marketing · USA (Remote)" },
  { year: "2026", role: "BS Information System", org: "Caraga State University", note: "Graduated" },
];

const toolStack = [
  { tool: "Canva", pct: 92, color: "#a8341f" },
  { tool: "CapCut", pct: 85, color: "#c08a2d" },
  { tool: "Meta Business Suite", pct: 80, color: "#4f6d5a" },
  { tool: "Photoshop (basics)", pct: 55, color: "#3c5a78" },
];

const learningItems = [
  { item: "Paid social & media buying (Meta Ads)", color: "#a8341f" },
  { item: "Social analytics & reporting", color: "#c08a2d" },
  { item: "AI tools for faster content (ChatGPT, Claude)", color: "#4f6d5a" },
];

function ToolStack() {
  return (
    <div className="rounded-[0.4rem] p-7 flex flex-col gap-5" style={{ background: "rgba(251,246,238,0.03)", border: "1px solid rgba(241,233,219,0.1)" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c08a2d" }}>
        Tools I work with daily
      </p>
      <div className="flex flex-col gap-4">
        {toolStack.map((p) => (
          <div key={p.tool}>
            <div className="flex justify-between items-baseline mb-1.5">
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", color: "#f1e9db" }}>{p.tool}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: p.color }}>{p.pct}%</span>
            </div>
            <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "rgba(241,233,219,0.08)" }}>
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${p.pct}%`, background: p.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningPanel() {
  return (
    <div className="rounded-[0.4rem] p-7 flex flex-col gap-5" style={{ background: "rgba(251,246,238,0.03)", border: "1px solid rgba(241,233,219,0.1)" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c08a2d" }}>
        Currently developing
      </p>
      <div className="flex flex-col gap-4">
        {learningItems.map((p) => (
          <div key={p.item} className="flex items-start gap-3">
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "999px", background: p.color, marginTop: "0.4rem", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", color: "#f1e9db", lineHeight: 1.5 }}>{p.item}</span>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#b3a48d", lineHeight: 1.6 }}>
        Actively learning — not yet delivered client work.
      </p>
    </div>
  );
}

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const links = ["Work", "Capabilities", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[#1c1916]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={() => { setActive("hero"); setMenuOpen(false); }}
          style={{ fontFamily: "'Roboto Slab', serif" }}
          className="text-[#f4ece0] font-bold tracking-tight text-base"
        >
          John Louie <span style={{ color: "#c08a2d" }}>Caparoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l.toLowerCase())}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.65)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="mailto:johnlouiecaparoso@gmail.com"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", background: "#a8341f", color: "#fbf6ee" }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
        >
          Hire Me <ArrowRight size={12} />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-[0.4rem]"
          style={{ color: "#f4ece0" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-[#1c1916]/98 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.7)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                className="py-3"
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", background: "#a8341f", color: "#fbf6ee" }}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
            >
              Hire Me <ArrowRight size={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-20 md:pt-14 overflow-hidden" style={{ backgroundColor: "#1c1916" }}>
      <img
        src={HERO_IMG}
        alt="John Louie Caparoso"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.38 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(28,25,22,0.97) 0%, rgba(28,25,22,0.62) 55%, rgba(28,25,22,0.18) 100%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#c08a2d", textTransform: "uppercase" }} className="mb-6">
            &#9632; Available for projects
          </p>
          <h1 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#f4ece0", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            Content that
            <br />
            <span style={{ color: "#c08a2d" }}>connects</span> —
            <br />start to finish.
          </h1>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "rgba(241,233,219,0.7)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "42ch" }} className="mt-6 mb-10">
            I'm John Louie — a social media manager who plans, creates, and
            publishes content (reels, graphics, stories), grows engagement, and
            keeps brands consistent across platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              style={{ fontFamily: "'Roboto Slab', serif", background: "#a8341f", color: "#fbf6ee", fontWeight: 600, fontSize: "0.95rem" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              See What I Do <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "'Libre Franklin', sans-serif", border: "1px solid rgba(241,233,219,0.25)", color: "#f1e9db", fontSize: "0.95rem" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:border-[rgba(241,233,219,0.5)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 self-end pb-2">
          {[
            { num: "3 yrs", label: "In marketing & social" },
            { num: "2", label: "Remote roles (US & Canada)" },
            { num: "End-to-end", label: "Plan · create · publish" },
          ].map((s) => (
            <div key={s.num} className="flex items-baseline gap-4">
              <span style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "2.2rem", color: "#c08a2d", letterSpacing: "-0.02em" }}>
                {s.num}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(241,233,219,0.5)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            What I Do
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground">
            How I Help Brands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((c) => (
            <article
              key={c.title}
              className="group bg-card border border-border rounded-[0.4rem] p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(33,28,23,0.07)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div style={{ background: "rgba(168,52,31,0.08)", border: "1px solid rgba(168,52,31,0.2)", borderRadius: "0.4rem", padding: "0.5rem 0.75rem" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a8341f" }}>
                    {c.tag}
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#6f6354", letterSpacing: "0.06em" }}>{c.year}</span>
              </div>
              <h3 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.35rem" }} className="text-foreground">
                {c.title}
              </h3>
              <div className="flex items-start gap-4 sm:gap-6">
                <div>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6f6354" }} className="mb-0.5">
                    Focus
                  </p>
                  <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#211c17" }}>{c.platform}</p>
                </div>
                <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(33,28,23,0.12)", marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6f6354" }} className="mb-0.5">
                    Outcome
                  </p>
                  <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.05rem", color: c.resultColor }}>{c.result}</p>
                </div>
              </div>
              <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", lineHeight: 1.65, fontSize: "0.92rem" }}>
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {c.deliverables.map((d) => (
                  <span key={d} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.08em", background: "rgba(33,28,23,0.06)", color: "#6f6354", padding: "0.2rem 0.55rem", borderRadius: "0.25rem", border: "1px solid rgba(33,28,23,0.1)" }}>
                    {d}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2 pt-4 border-t border-border">
                <a href="#contact" style={{ color: "#a8341f", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", fontWeight: 500 }} className="inline-flex items-center gap-1.5 hover:underline">
                  Let's Talk <ExternalLink size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="py-16 md:py-28" style={{ background: "#211c17" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c08a2d" }} className="mb-3">
            Tools & Growth
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f4ece0" }}>
            How I Work
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#b3a48d", fontSize: "0.88rem", marginTop: "0.5rem" }}>
            The tools I use daily, and the skills I'm actively expanding into.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
          <ToolStack />
          <LearningPanel />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { num: "3 yrs", label: "Marketing & social experience" },
            { num: "2", label: "Remote roles (US & Canada)" },
            { num: "3", label: "Platforms managed end-to-end" },
            { num: "BS IS", label: "Caraga State University, 2022" },
          ].map((s) => (
            <div key={s.label} className="rounded-[0.4rem] p-6" style={{ background: "rgba(251,246,238,0.04)", border: "1px solid rgba(241,233,219,0.1)" }}>
              <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "1.6rem", color: "#c08a2d", letterSpacing: "-0.02em", lineHeight: 1.1 }} className="mb-2">
                {s.num}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.13em", textTransform: "uppercase", color: "#b3a48d" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            The Toolkit
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground">
            What I Bring
            <br />to Every Brand
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map((cap) => (
            <div key={cap.label} className="bg-card border border-border rounded-[0.4rem] p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-[0.35rem]" style={{ background: "rgba(168,52,31,0.1)", color: "#a8341f" }}>
                  <cap.icon size={16} />
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a8341f" }}>
                  {cap.label}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {cap.items.map((item) => (
                  <li key={item} style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", fontSize: "0.88rem" }} className="flex items-start gap-2">
                    <span style={{ color: "#c08a2d", fontSize: "0.5rem", marginTop: "0.4rem", flexShrink: 0 }}>&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
              The Manager
            </p>
            <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }} className="text-foreground mb-6">
              Consistent content,
              <br />real engagement.
            </h2>
            <div style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", lineHeight: 1.8, fontSize: "0.95rem" }} className="space-y-4 mb-10">
              <p>
                I'm John Louie Caparoso, a social media manager based in Agusan
                del Norte, Philippines. I worked as Social Media Manager at No
                Boundaries Marketing Group (USA, remote), where I designed and
                published reels, graphics, and stories, scheduled content, and
                responded to online conversations.
              </p>
              <p>
                More recently I supported marketing campaigns and content
                creation across social, web, and print at LetzMarket (Canada,
                remote), collaborating with the creative team to keep branding
                consistent. I'm detail-oriented and focused, and I work well
                independently or as part of a team.
              </p>
              <p>
                My approach is simple: plan content that fits the brand, create
                it cleanly with Canva and CapCut, post it on a consistent
                schedule, and stay engaged with the people who respond. I'm
                currently expanding into paid social and analytics to round out
                the full picture.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6f6354" }} className="mb-5">
                Experience
              </p>
              <div className="space-y-5">
                {timeline.map((t) => (
                  <div key={t.year} className="flex items-start gap-3 sm:gap-5">
                    <span className="min-w-[5rem] sm:min-w-[7rem]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#c08a2d", letterSpacing: "0.06em", paddingTop: "0.1rem" }}>
                      {t.year}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600, fontSize: "0.92rem", color: "#211c17" }}>{t.role}</div>
                      <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.83rem", color: "#6f6354" }}>{t.org} · {t.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[0.4rem] overflow-hidden" style={{ background: "#c4b49c" }}>
              <img
                src={ABOUT_IMG}
                alt="John Louie Caparoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 right-4 sm:-bottom-5 sm:-right-5 rounded-[0.4rem] px-5 py-4"
              style={{ background: "#a8341f", color: "#fbf6ee", fontFamily: "'Roboto Slab', serif", fontWeight: 700, boxShadow: "0 8px 32px rgba(168,52,31,0.35)" }}
            >
              <div style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>3 yrs</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(251,246,238,0.8)" }}>
                Marketing & social
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 border-t border-border" style={{ background: "#fbf6ee" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            Let's Talk
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground mb-4">
            Ready to grow
            <br />your social presence?
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "44ch" }} className="mb-10">
            Whether you need help planning and creating content, keeping a
            consistent posting schedule, or managing engagement across
            platforms — reach out and let's see how I can help.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Availability", value: "Open for projects" },
              { label: "Based in", value: "Agusan del Norte, PH" },
              { label: "Work style", value: "Remote-ready" },
            ].map((s) => (
              <div key={s.label} className="rounded-[0.4rem] p-4" style={{ border: "1px solid rgba(33,28,23,0.14)", background: "#fbf6ee" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6f6354" }} className="mb-1">
                  {s.label}
                </p>
                <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.05rem", color: "#211c17" }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              style={{ fontFamily: "'Roboto Slab', serif", background: "#a8341f", color: "#fbf6ee", fontWeight: 600, fontSize: "0.95rem" }}
              className="inline-flex items-center justify-center text-center gap-2 px-7 py-3.5 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors break-all"
            >
              <Mail size={16} className="shrink-0" /> johnlouiecaparoso@gmail.com
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Libre Franklin', sans-serif", border: "1px solid rgba(33,28,23,0.2)", color: "#211c17", fontSize: "0.9rem" }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[0.4rem] hover:border-[rgba(33,28,23,0.4)] transition-colors"
            >
              View Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/louiecaparoso4" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-louie-caparoso-0a344a256/" },
              { icon: Github, label: "GitHub", href: "https://github.com/johnlouiecaparoso" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ color: "#6f6354" }} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <s.icon size={18} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }} className="hidden sm:block">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-7" style={{ background: "#1c1916" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,233,219,0.35)" }}>
          © 2026 John Louie Caparoso · Magallanes, Agusan del Norte, PH
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(241,233,219,0.25)" }}>
          Social strategy · Content · Community
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("hero");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <NavBar active={active} setActive={setActive} />
      <Hero />
      <Work />
      <Metrics />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
