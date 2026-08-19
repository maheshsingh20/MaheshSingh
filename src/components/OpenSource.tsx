import { motion } from "framer-motion";
import { SectionTitle } from "./Skills";
import SectionBg from "./SectionBg";
import { profile } from "../data";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const contributions = [
  {
    repo: "taskforcesh/bullmq",
    desc: "Production-grade Node.js job queue library used by 100k+ projects.",
    stars: "18k+",
    lang: "TypeScript",
    langColor: "bg-blue-500",
    badge: "Open Source",
    badgeColor: "from-blue-500 to-indigo-500",
    pr: "https://github.com/taskforcesh/bullmq/pulls/maheshsingh20",
  },
  {
    repo: "excalidraw/excalidraw",
    desc: "Added copy cursor indicator when Alt/Option held for element duplication — UX improvement merged upstream.",
    stars: "90k+",
    lang: "TypeScript",
    langColor: "bg-blue-500",
    badge: "Merged PR",
    badgeColor: "from-emerald-500 to-teal-500",
    pr: "https://github.com/excalidraw/excalidraw/pull/11895",
  },
  {
    repo: "anthropics/claude-code-action",
    desc: "Contributed to Anthropic's official Claude Code GitHub Actions integration.",
    stars: "5k+",
    lang: "TypeScript",
    langColor: "bg-blue-500",
    badge: "Contributor",
    badgeColor: "from-amber-500 to-orange-500",
    pr: "https://github.com/anthropics/claude-code-action/pulls/maheshsingh20",
  },
  {
    repo: "salesforce/lwc",
    desc: "Contributed to Salesforce Lightning Web Components — the open-source framework powering Salesforce UIs.",
    stars: "3k+",
    lang: "JavaScript",
    langColor: "bg-yellow-400",
    badge: "Contributor",
    badgeColor: "from-sky-500 to-blue-500",
    pr: "https://github.com/salesforce/lwc/pulls/maheshsingh20",
  },
  {
    repo: "cordiverse/cordis",
    desc: "Contributed to Cordis — a flexible IoC framework for building extensible TypeScript applications.",
    stars: "500+",
    lang: "TypeScript",
    langColor: "bg-blue-500",
    badge: "Contributor",
    badgeColor: "from-violet-500 to-purple-500",
    pr: "https://github.com/cordiverse/cordis/pulls/maheshsingh20",
  },
  {
    repo: "NVIDIA-NeMo/Nemotron",
    desc: "Contributed to NVIDIA's Nemotron LLM family — open-weight models for research and production.",
    stars: "2k+",
    lang: "Python",
    langColor: "bg-green-500",
    badge: "Contributor",
    badgeColor: "from-green-500 to-emerald-500",
    pr: "https://github.com/NVIDIA-NeMo/Nemotron/pulls/maheshsingh20",
  },
];


export default function OpenSource() {
  return (
    <section id="opensource" className="py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">
      <SectionBg delay="6s" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle title="Open Source & GitHub" subtitle="Community contributions" />

        {/* GitHub Activity Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Repositories", value: "61+", icon: "📁", color: "from-indigo-500 to-violet-500" },
            { label: "Contributions", value: "89+", icon: "📈", color: "from-cyan-500 to-blue-500", sub: "last 12 months" },
            { label: "OSS PRs", value: "6+", icon: "🔀", color: "from-emerald-500 to-teal-500", sub: "merged across repos" },
            { label: "LeetCode", value: "760+", icon: "🧩", color: "from-amber-500 to-orange-500", sub: "problems solved" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative overflow-hidden p-6 rounded-2xl
                bg-gray-50 dark:bg-white/[0.02]
                border border-gray-100 dark:border-white/[0.07]
                hover:border-indigo-200 dark:hover:border-indigo-500/30
                hover:shadow-xl hover:shadow-indigo-500/10
                transition-all duration-300"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300 mt-1">{stat.label}</div>
              {stat.sub && <div className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</div>}
              <div className="shimmer absolute inset-0 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Languages bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.07]"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Top Languages</p>
          <div className="space-y-3">
            {[
              { lang: "TypeScript", pct: 38, color: "bg-blue-500" },
              { lang: "Java", pct: 24, color: "bg-orange-500" },
              { lang: "C#", pct: 18, color: "bg-violet-500" },
              { lang: "JavaScript", pct: 12, color: "bg-yellow-400" },
              { lang: "Python", pct: 8, color: "bg-green-500" },
            ].map((l, i) => (
              <div key={l.lang} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 w-24 shrink-0">{l.lang}</span>
                <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${l.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-8 text-right">{l.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Source Contributions */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400 mb-1">
                External Repos
              </p>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                Open Source Contributions
              </h3>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-400 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <GithubIcon /> View All <ArrowIcon />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((c, i) => (
              <motion.a
                key={c.repo}
                href={c.pr}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col gap-3 p-5 rounded-2xl
                  bg-gray-50 dark:bg-white/[0.02]
                  border border-gray-100 dark:border-white/[0.07]
                  hover:border-indigo-200 dark:hover:border-indigo-500/30
                  hover:shadow-xl hover:shadow-indigo-500/10
                  transition-all duration-300 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    <GithubIcon />
                    <span className="text-xs font-mono font-semibold truncate">{c.repo}</span>
                  </div>
                  <span className={`shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r ${c.badgeColor} text-white`}>
                    {c.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {c.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${c.langColor}`} />
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{c.lang}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {c.stars}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile view all button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center sm:hidden"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-400"
            >
              <GithubIcon /> View All on GitHub <ArrowIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
