import { motion } from "framer-motion";
import { skills } from "../data";
import SectionBg from "./SectionBg";

const categoryMeta: Record<string, { color: string; bg: string; darkBg: string; icon: string }> = {
  Languages: { color: "text-violet-500", bg: "bg-violet-50", darkBg: "dark:bg-violet-500/10", icon: "⌨️" },
  Frontend: { color: "text-blue-500", bg: "bg-blue-50", darkBg: "dark:bg-blue-500/10", icon: "🎨" },
  Backend: { color: "text-emerald-500", bg: "bg-emerald-50", darkBg: "dark:bg-emerald-500/10", icon: "⚙️" },
  Databases: { color: "text-orange-500", bg: "bg-orange-50", darkBg: "dark:bg-orange-500/10", icon: "🗄️" },
  Cloud: { color: "text-sky-500", bg: "bg-sky-50", darkBg: "dark:bg-sky-500/10", icon: "☁️" },
  DevOps: { color: "text-red-500", bg: "bg-red-50", darkBg: "dark:bg-red-500/10", icon: "🔧" },
  "AI & LLMs": { color: "text-pink-500", bg: "bg-pink-50", darkBg: "dark:bg-pink-500/10", icon: "🤖" },
  "Core CS": { color: "text-indigo-500", bg: "bg-indigo-50", darkBg: "dark:bg-indigo-500/10", icon: "🧠" },
};

export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400 mb-2">
        {subtitle}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
        {title}
      </motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-gray-50/80 dark:bg-[#0d0d14] overflow-hidden">
      <SectionBg delay="1.5s" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle title="Technical Skills" subtitle="What I work with" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([cat, items], i) => {
            const meta = categoryMeta[cat];
            return (
              <motion.div key={cat}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl overflow-hidden
                  bg-white dark:bg-white/[0.03]
                  border border-gray-100 dark:border-white/[0.06]
                  hover:border-indigo-200 dark:hover:border-indigo-500/30
                  shadow-sm hover:shadow-xl hover:shadow-indigo-500/10
                  transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{meta.icon}</span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${meta.color}`}>{cat}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(skill => (
                    <span key={skill} className={`px-2.5 py-1 text-xs rounded-lg font-medium ${meta.bg} ${meta.darkBg} ${meta.color} border border-current/10 transition-all duration-200 hover:scale-105`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
