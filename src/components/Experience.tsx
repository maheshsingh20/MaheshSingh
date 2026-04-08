import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "../data";
import { SectionTitle } from "./Skills";

const companyColors = [
  "from-indigo-500 to-violet-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Experience" subtitle="Where I've worked" />

        <div className="mt-14 relative">
          {/* Timeline track */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent hidden md:block" />

          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="md:pl-16 relative group">

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full items-center justify-center
                  bg-gradient-to-br from-indigo-500 to-cyan-400
                  shadow-lg shadow-indigo-500/40 ring-4 ring-white dark:ring-[#0a0a0f]
                  group-hover:scale-125 transition-transform duration-300" />

                <div className="relative p-6 rounded-2xl overflow-hidden
                  bg-gray-50 dark:bg-white/[0.03]
                  border border-gray-100 dark:border-white/[0.06]
                  hover:border-indigo-200 dark:hover:border-indigo-500/20
                  hover:shadow-xl hover:shadow-indigo-500/10
                  transition-all duration-300">

                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${companyColors[i]}`} />

                  <div className="flex flex-wrap items-start justify-between gap-3 pl-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className={`font-bold text-sm bg-gradient-to-r ${companyColors[i]} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                        <Calendar size={11} />{exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                        <MapPin size={11} />{exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 pl-3 space-y-2.5">
                    {exp.points.map((p, j) => (
                      <motion.li key={j}
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r ${companyColors[i]}`} />
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
