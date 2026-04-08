import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { SectionTitle } from "./Skills";
import ProjectsBg from "./ProjectsBg";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// Spotlight card — tracks mouse for radial glow
function SpotlightCard({ children, accent, index }: {
  children: React.ReactNode;
  accent: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos(p => ({ ...p, opacity: 0 }))}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-[#111118]
        border border-gray-100 dark:border-white/[0.07]
        hover:border-transparent
        hover:shadow-2xl
        transition-all duration-300"
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.12), transparent 70%)`,
        }}
      />

      {/* Gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]`} />
      <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-[#111118] z-0" />

      <div className="relative z-20 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 bg-gray-50/80 dark:bg-[#0d0d14] relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/8 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Things I've built" />

        {/* Featured — first project full width */}
        <div className="mt-14 space-y-5">

          {/* Featured card */}
          <SpotlightCard accent={projects[0].accent} index={0}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  {/* Category + period */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full bg-gradient-to-r ${projects[0].accent} text-white`}>
                      {projects[0].category}
                    </span>
                    <span className="text-xs text-gray-400">{projects[0].period}</span>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 dark:text-white">{projects[0].name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">{projects[0].tagline}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {projects[0].tech.map(t => (
                      <span key={t} className={`px-2.5 py-1 text-xs rounded-lg font-semibold bg-gradient-to-r ${projects[0].accent} bg-clip-text text-transparent border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/5`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={projects[0].github} target="_blank" rel="noreferrer"
                  className={`mt-8 self-start flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${projects[0].accent} hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 transition-all duration-200`}>
                  <GithubIcon /> View on GitHub <ArrowIcon />
                </a>
              </div>

              {/* Right — stats + points */}
              <div className="p-8 border-t md:border-t-0 md:border-l border-gray-100 dark:border-white/[0.06]">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {projects[0].stats.map(s => (
                    <div key={s.label} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                      <div className={`text-lg font-black bg-gradient-to-r ${projects[0].accent} bg-clip-text text-transparent`}>{s.value}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {projects[0].points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r ${projects[0].accent}`} style={{ background: "rgb(139,92,246)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>

          {/* Bottom two cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {projects.slice(1).map((proj, i) => (
              <SpotlightCard key={proj.name} accent={proj.accent} index={i + 1}>
                <div className="p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-1">
                    <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full bg-gradient-to-r ${proj.accent} text-white`}>
                      {proj.category}
                    </span>
                    <span className="text-xs text-gray-400">{proj.period}</span>
                  </div>

                  <div className="flex items-start justify-between mt-4 mb-1">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white">{proj.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{proj.tagline}</p>
                    </div>
                    <a href={proj.github} target="_blank" rel="noreferrer"
                      className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-gray-500 hover:text-indigo-500 transition-all hover:scale-110 shrink-0 ml-2">
                      <GithubIcon />
                    </a>
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-2 my-4">
                    {proj.stats.map(s => (
                      <div key={s.label} className="flex-1 text-center p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                        <div className={`text-sm font-black bg-gradient-to-r ${proj.accent} bg-clip-text text-transparent`}>{s.value}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded-md font-semibold bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Points — expandable */}
                  <ul className="space-y-2 flex-1">
                    {(expanded === i + 1 ? proj.points : proj.points.slice(0, 2)).map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-400" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {proj.points.length > 2 && (
                    <button
                      onClick={() => setExpanded(expanded === i + 1 ? null : i + 1)}
                      className="mt-4 text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:underline self-start"
                    >
                      {expanded === i + 1 ? "Show less ↑" : `+${proj.points.length - 2} more ↓`}
                    </button>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
